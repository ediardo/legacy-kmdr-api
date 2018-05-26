import { GraphQLList } from "graphql";
import Guide from "../../types/guide";

export default {
  name: "Guides",
  description: "List of guides",
  type: new GraphQLList(Guide),
  resolve: (parent, args, { sql }) =>
    sql.Guide.findAll({
      include: [{ model: sql.Command }]
    })
};
