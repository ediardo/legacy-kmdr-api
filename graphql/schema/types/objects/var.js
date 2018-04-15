import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

const Var = new GraphQLObjectType({
  name: "Var",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString,
      description: "Identifier of the variable"
    },
    defaultValue: {
      type: GraphQLString
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

export default Var;
