import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

const Platform = new GraphQLObjectType({
  name: "Platform",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString,
      resolve: platform => {
        return platform.name;
      }
    },
    description: {
      type: GraphQLString
    }
  })
});

export default Platform;
