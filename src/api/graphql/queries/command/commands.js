import { GraphQLList } from "graphql";
import Command from "../../types/command";

export default {
  name: "Commands",
  description: "List of commands",
  type: new GraphQLList(Command),
  resolve: (parent, args, { sql }) =>
    sql.Command.findAll({
      include: [{ model: sql.Program }]
    })
};
