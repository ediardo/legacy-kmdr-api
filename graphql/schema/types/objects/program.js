import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt
} from "graphql";

import Command from "./command";
import Platform from "./platform";

const Program = new GraphQLObjectType({
  name: "Program",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    cliName: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    totalViews: {
      type: GraphQLInt
    },
    totalCommands: {
      type: GraphQLInt
    },
    shortDescription: {
      type: GraphQLString
    },
    platform: {
      type: Platform,
      resolve: command => command.Platform
    },
    commands: {
      type: new GraphQLList(Command),
      resolve: program => program.getCommands()
    },
    createdAt: {
      type: GraphQLString,
      description: "Timestamp"
    },
    updatedAt: {
      type: GraphQLString,
      description: "Timestamp"
    }
  })
});

export default Program;
