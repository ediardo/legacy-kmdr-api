import { GraphQLInterfaceType, GraphQLInt } from "graphql";

const Tally = new GraphQLInterfaceType({
  name: "Tally",
  fields: () => ({
    totalComments: {
      type: GraphQLInt
    },
    totalViews: {
      type: GraphQLInt
    }
  })
});

export default Tally;
