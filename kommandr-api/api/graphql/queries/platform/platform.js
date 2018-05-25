import { GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";
import { Platform } from "../../types";

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
