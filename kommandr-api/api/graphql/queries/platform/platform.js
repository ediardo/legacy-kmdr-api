import db from "../../../../db/models";
import Platform from "../../types/platform";

import { GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";

export default {
  name: "Guide",
  description: "Find guide by ID",
  type: Platform,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, ctx) => db.Platform.findOne({ where: { id } })
};
