import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt
} from "graphql";

import User from "./user";
import Command from "./command";

const CommandStar = new GraphQLObjectType({
  name: "CommandStar",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    createdAt: {
      type: GraphQLString
    },
    command: {
      type: Command,
      resolve: commandStar => commandStar.getCommand()
    },
    author: {
      type: User,
      resolve: commandStar => commandStar.getUser()
    }
  })
});

export default CommandStar;
