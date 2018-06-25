import { GraphQLNonNull, GraphQLString } from "graphql";
import Command from "../../types/command";

export default {
  name: "Command",
  description: "Get command by ID",
  type: Command,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    slugTitle: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (parent, { username, slugTitle }, { sql }) => {
    return sql.Command.findOne({
      include: [
        { model: sql.User, where: { username } },
        { model: sql.Program }
      ],
      where: { slugTitle }
    }).then(command => {
      if (command) {
        command.increment("totalViews", {
          silent: true
        });
      }
      return command;
    });
  }
};
