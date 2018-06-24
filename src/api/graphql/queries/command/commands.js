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
    }
  },
  resolve: (parent, { title, programs, platforms }, { sql }) => {
    var opts = {
      where: { $and: [] },
      order: [["totalViews", "DESC"]],
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
    }
    if (programs !== undefined && programs.length > 0) {
      opts.where.$and = [
        ...opts.where.$and,
        { "$Program.cliName$": { $in: programs } }
      ];
    }
    if (platforms !== undefined && platforms.length > 0) {
      platforms = platforms.map(p => allPlatforms.indexOf(p) + 1);
      opts.where.$and = [
        ...opts.where.$and,
        { "$Program.platformId$": { $in: platforms } }
      ];
    }
    return sql.Command.findAll({
      include: opts.include,
      where: opts.where,
      order: opts.order,
      limit: 100
    });
  }
};
