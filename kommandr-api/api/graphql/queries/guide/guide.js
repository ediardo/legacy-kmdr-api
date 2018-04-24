import db from "../../../../db/models";
import Guide from "../../types/guide";

import { GraphQLID, GraphQLNonNull } from "graphql";

export default {
  name: "Guide",
  description: "Find guide by ID",
  type: Guide,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, ctx) => db.Guide.findOne({ where: { id } })
};
