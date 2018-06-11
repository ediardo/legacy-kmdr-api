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
    }
  },
  resolve: (parent, { query }, { sql }) => {
    var where = {};
    if (query) {
      where["$or"] = [
        { "$Program.cliName$": query.trim() },
        literal(
          `MATCH (title) AGAINST ('${query.trim()}' IN NATURAL LANGUAGE  MODE)`
        )
      ];
    }
    return sql.Command.findAll({
      include: [{ model: sql.Program }, { model: sql.User }],
      where,
      order: [
        [
          literal(
            `MATCH (title) AGAINST ('${query.trim()}' IN NATURAL LANGUAGE MODE) DESC`
          )
        ],
        ["totalViews", "DESC"]
      ],
      limit: 100
    });
  }
};
