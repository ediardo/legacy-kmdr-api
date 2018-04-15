import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from "graphql";

import User from "./user";
import Var from "./var";

const Command = new GraphQLObjectType({
  name: "Command",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the command"
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "ID of the author"
    },
    sourceId: {
      type: GraphQLInt,
      description: "Source ID of this command"
    },
    title: {
      type: GraphQLString,
      description: "Title of the command"
    },
    rawContent: {
      type: GraphQLString,
      description: "Raw content of the Command"
    },
    description: {
      type: GraphQLString,
      description: "Description of the command"
    },
    hashUrl: {
      type: GraphQLString,
      description: "Unique Hash (ID) URL for this command"
    },
    forkFrom: {
      type: GraphQLString,
      description: "ID of original Command"
    },
    vanityUrl: {
      type: GraphQLString,
      description: "URL-safe vanity address"
    },
    totalForks: {
      type: GraphQLInt,
      description: "Counter"
    },
    totalStars: {
      type: GraphQLInt,
      description: "Counter"
    },
    totalComments: {
      type: GraphQLInt
    },
    totalViews: {
      type: GraphQLInt
    },
    author: {
      type: User,
      resolve: command => command.getUser()
    },
    createdAt: {
      type: GraphQLString,
      description: "Timestamp"
    },
    updatedAt: {
      type: GraphQLString,
      description: "Timestamp"
    },
    deletedAt: {
      type: GraphQLString
    }
    /*
    comments: {
      type: new GraphQLList(Comment),
      resolve: command => command.getComments()
    },
    forks: {
      type: new GraphQLList(Command),
      resolve: command => command.getForks()
    },
    stars: {
      type: new GraphQLList(Star),
      resolve: command => command.getStars()
    },
    
    vars: {
      type: new GraphQLList(Var),
      resolve: command => command.getVars()
    }
    */
  })
});

export default Command;
