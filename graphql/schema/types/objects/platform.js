import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

import userType from "./user";
import db from "../../../models";

const Platform = new GraphQLObjectType({
  name: "Platform",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    userId: {
      type: GraphQLID
    },
    kommandrId: {
      type: GraphQLID
    },
    comment: {
      type: GraphQLString
    },
    author: {
      type: userType,
      resolve: (comment, argx, ctx) => {
        return db.User.findById(comment.userId);
      }
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

export default Platform;
