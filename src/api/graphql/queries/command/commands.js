import { GraphQLList, GraphQLSchema, GraphQLString } from "graphql";
import Command from "../../types/command";
import { literal } from "sequelize";

export default {
  name: "Commands",
  description: "List of commands",
  type: new GraphQLList(Command),
  args: {
    query: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  },
  resolve: (parent, { query, name }, { sql }) => {
    var opts = {
      where: {},
      order: [],
      include: [{ model: sql.Program }, { model: sql.User }]
    };
    if (query) {
      opts.where["$or"] = [
        { "$Program.cliName$": query.trim() },
        literal(
          `MATCH (title) AGAINST ('${query.trim()}' IN NATURAL LANGUAGE  MODE)`
        )
      ];
      opts.order = [
        [
          literal(
            `MATCH (title) AGAINST ('${query.trim()}' IN NATURAL LANGUAGE MODE) DESC`
          )
        ],
        ["totalViews", "DESC"]
      ];
      opts.include = [{ model: sql.Program }, { model: sql.User }];
    } else {
      if (name) {
        opts.include = [
          { model: sql.Program, where: { name } },
          { model: sql.User }
        ];
      }
    }
    return sql.Command.findAll({
      include: opts.include,
      where: opts.where,
      order: opts.order,
      limit: 100
    });
  }
};
