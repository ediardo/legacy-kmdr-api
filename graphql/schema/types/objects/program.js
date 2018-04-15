import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

import userType from "./user";
import db from "../../../../db/models";

const Program = new GraphQLObjectType({
  name: "Program",
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

export default Program;
