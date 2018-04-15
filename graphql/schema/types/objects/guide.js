import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} from "graphql";

import User from "./user";
import Tally from "../interfaces/tally";

const Guide = new GraphQLObjectType({
  name: "Guide",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the collection"
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "User ID author of the guide"
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    vanityUrl: {
      type: GraphQLString
    },
    hashUrl: {
      type: GraphQLString
    },
    listed: {
      type: GraphQLBoolean
    },
    status: {
      type: GraphQLInt
    },
    author: {
      type: User,
      resolve: guide => guide.getUser()
    },
    totalCommands: {
      type: GraphQLInt
    },
    totalStars: {
      type: GraphQLInt
    },
    totalComments: {
      type: GraphQLInt
    },
    totalViews: {
      type: GraphQLInt
    },
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    },
    deletedAt: {
      type: GraphQLString
    }
  })
});

export default Guide;
