import { GraphQLList, GraphQLString } from "graphql";
import Command from "../../types/command";
import { literal } from "sequelize";

const allPlatforms = ["multiplatform", "linux", "macos", "windows"];

export default {
  name: "Commands",
  description: "List of commands",
  type: new GraphQLList(Command),
  args: {
    title: {
      type: GraphQLString
    },
    programs: {
      type: new GraphQLList(GraphQLString)
    },
    platforms: {
      type: new GraphQLList(GraphQLString)
    },
    rawQuery: {
      type: GraphQLString
    },
    sortBy: {
      type: GraphQLString
    }
  },
  resolve: (
    parent,
    { title, programs, platforms, sortBy, rawQuery },
    { req, sql }
  ) => {
    let searchTerms = "";
    var opts = {
      where: { $and: [] },
      order: [],
      include: [{ model: sql.Program }, { model: sql.User }]
    };
    if (title !== undefined && title !== "") {
      opts.where = {
        $and: [
          literal(
            `MATCH (queryStr) AGAINST ('${title.trim()}' IN NATURAL LANGUAGE MODE)`
          )
        ]
      };
      opts.order = [
        ...opts.order,
        [
          literal(
            `MATCH (queryStr) AGAINST ('${title.trim()}' IN NATURAL LANGUAGE MODE) DESC`
          )
        ]
      ];
      searchTerms = `title:${title}`;
    }
    if (programs !== undefined && programs.length > 0) {
      programs.forEach(p => (searchTerms += ` program:${p}`));
      opts.where.$and = [
        ...opts.where.$and,
        { "$Program.cliName$": { $in: programs } }
      ];
    }
    if (platforms !== undefined && platforms.length > 0) {
      platforms = platforms.map(p => {
        searchTerms += ` platform:${p}`;
        return allPlatforms.indexOf(p) + 1;
      });
      if (platforms.includes(2) || platforms.includes(3)) {
        platforms = [...platforms, 1];
      }
      opts.where.$and = [
        ...opts.where.$and,
        { "$Program.platformId$": { $in: platforms } }
      ];
    }
    switch (sortBy) {
      case "most_popular":
        opts.order = [...opts.order, ["totalViews", "DESC"]];
        break;
      case "newest":
        opts.order = [...opts.order, ["createdAt", "DESC"]];
        break;
      case "oldest":
        opts.order = [...opts.order, ["createdAt", "ASC"]];
      default:
        opts.order = [...opts.order, ["title", "ASC"]];
    }

    sql.SearchTerm.create({
      query: rawQuery,
      sessionId: req.sessionID
    });
    return sql.Command.findAll({
      include: opts.include,
      where: opts.where,
      order: opts.order,
      limit: 100
    });
  }
};
