import db from "../../../../db/models";
import Command from "../../types/command";
import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";

export default {
  name: "Command",
  description: "Get command by ID",
  type: Command,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, context) => db.Command.findOne({ where: { id } })
};
