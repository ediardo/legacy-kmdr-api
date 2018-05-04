import { GraphQLID, GraphQLNonNull } from "graphql";
import Program from "../../types/program";

import db from "../../../../db/models";

export default {
  name: "program",
  description: "Get program by ID",
  type: Program,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, context) => db.Program.findOne({ where: { id } })
};
