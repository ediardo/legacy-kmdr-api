import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

const ManPage = new GraphQLObjectType({
  name: "ManPage",
  description: "Manual Page",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString,
      resolve: platform => {
        console.log("asdasd");
        console.log(platform);
        return platform.name;
      }
    },
    description: {
      type: GraphQLString
    }
  }
});

export default ManPage;
