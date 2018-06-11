import { GraphQLID, GraphQLNonNull } from "graphql";
import Guide from "../../types/guide";

export default {
  name: "Guide",
  description: "Find guide by ID",
  type: Guide,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (parent, { id }, { sql }) => sql.Guide.findOne({ where: { id } })
};
