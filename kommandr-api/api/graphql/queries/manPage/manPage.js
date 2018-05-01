import { ManPage } from "../../types";

import { GraphQLID, GraphQLNonNull } from "graphql";

export default {
  name: "Man Page",
  description: "Man Page by ID",
  type: ManPage,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, ctx) => [{ id: 1, name: "tesT" }]
};
