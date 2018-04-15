import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from "graphql";

const Star = new GraphQLInterfaceType({
  name: "Comment",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    userId: {
      type: GraphQLID,
      description: "ID of the user"
    },
    createdAt: {
      type: GraphQLString
    }
  }
});

export default Star;
