import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} from "graphql";

const Var = new GraphQLObjectType({
  name: "Var",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString,
      description: "Identifier of the variable",
      resolve: Var => {
        return Var.Var ? Var.Var.name : Var.name;
      }
    },
    defaultValue: {
      type: GraphQLString,
      resolve: Var => {
        return Var.Var ? Var.Var.defaultValue : Var.defaultValue;
      }
    },
    overrideValue: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.get("overrideValue");
      }
    },
    sequence: {
      type: GraphQLInt
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
