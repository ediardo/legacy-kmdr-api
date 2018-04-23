import { GraphQLSchema, GraphQLObjectType } from "graphql";

import queries from "./queries";
// import mutations from "./mutations";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: queries
  })
  /*
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutations
  })
  */
});

export default schema;
