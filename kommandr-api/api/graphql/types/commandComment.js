import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";

import User from "./user";
import Command from "./command";
import { CommentStatus } from "../enums";

const CommandComment = new GraphQLObjectType({
  name: "CommandComment",
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
    isPartial: {
      type: GraphQLBoolean,
      description: "Whether the comment is partial or not"
    },
    posStart: {
      type: GraphQLInt,
      description: "Start position of partial comment"
    },
    posEnd: {
      type: GraphQLInt,
      description: "End position of partial comment"
    },
    status: {
      type: new GraphQLEnumType(CommentStatus)
    },
    command: {
      type: Command,
      resolve: commandComment => commandComment.getCommand()
    },
    author: {
      type: User,
      resolve: commandComment => commandComment.getUser()
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

export default CommandComment;
