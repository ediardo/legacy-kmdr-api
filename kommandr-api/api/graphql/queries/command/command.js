import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";
import Command from "../../types/command";

export default {
  name: "Command",
  description: "Get command by ID",
  type: Command,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (parent, { id }, { sql }) => sql.Command.findOne({ where: { id } })
};
