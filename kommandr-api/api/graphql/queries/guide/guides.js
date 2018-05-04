import db from "../../../../db/models";
import Guide from "../../types/guide";

import { GraphQLList } from "graphql";

export default {
  name: "Guides",
  description: "List of guides",
  type: new GraphQLList(Guide),
  resolve: () =>
    db.Guide.findAll({
      include: [{ model: db.Command }]
    })
};
