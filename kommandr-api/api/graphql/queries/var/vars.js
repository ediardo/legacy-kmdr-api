import db from "../../../../db/models";
import Var from "../../types/var";

import { GraphQLList, GraphQLID } from "graphql";

export default {
  name: "Vars",
  description: "Get all vars",
  type: Var,
  resolve: (root, { id }, context) => db.Var.findAll()
};
