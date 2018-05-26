import { GraphQLSchema, GraphQLObjectType } from "graphql";

import queries from "./queries";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: queries
  })
});

export default schema;
