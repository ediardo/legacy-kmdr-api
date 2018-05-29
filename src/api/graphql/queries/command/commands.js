import { GraphQLList, GraphQLSchema, GraphQLString } from "graphql";
import Command from "../../types/command";

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
        { title: { $like: `%${query}%` } },
        { rawContent: { $like: `${query}%` } }
      ];
    }
    return sql.Command.findAll({
      include: [{ model: sql.Program }, { model: sql.User }],
      where
    });
  }
};
