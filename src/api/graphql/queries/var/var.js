import db from "../../../../db/models";
import Var from "../../types/var";

import { GraphQLList, GraphQLID } from "graphql";

export default {
  name: "Var",
  description: "Get var by ID",
  type: Var,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, context) => {
    return db.Var.findOne({ where: { id } });
  }
};
