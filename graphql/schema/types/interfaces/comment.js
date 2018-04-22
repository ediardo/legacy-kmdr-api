import {
  GraphQLInterfaceType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} from "graphql";

import CommandComment from "../objects/commandComment";
import GuideComment from "../objects/guideComment";

const resolveType = value => {
  console.log("HERE");
  if (value.CommandComments) {
    console.log(1);
    return new GraphQLList(CommandComment);
  }
  if (value.GuideComments) {
    console.log(2);
    return GuideComment;
  }
};

const Comment = new GraphQLInterfaceType({
  name: "CommentInterface",
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
    }
  }),
  resolveType
});

export default Comment;
