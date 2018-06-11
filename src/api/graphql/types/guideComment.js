import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} from "graphql";

import User from "./user";
import Guide from "./guide";

const GuideComment = new GraphQLObjectType({
  name: "GuideComment",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    userId: {
      type: GraphQLID,
      description: "ID of the user"
    },
    replyTo: {
      type: GraphQLID,
      description: "ID of the replied comment"
    },
    comment: {
      type: GraphQLString,
      description: "Content of the comment"
    },
    status: {
      type: GraphQLInt
    },
    guide: {
      type: Guide,
      resolve: guideComment => guideComment.getGuide()
    },
    author: {
      type: User,
      resolve: guideComment => guideComment.getUser()
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
  })
});

export default GuideComment;
