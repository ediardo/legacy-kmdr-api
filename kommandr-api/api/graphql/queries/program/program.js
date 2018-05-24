import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from "graphql";
import Program from "../../types/program";

import db from "../../../../db/models";

export default {
  name: "program",
  description: "Get program by ID",
  type: Program,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, { name }, context) => db.Program.findOne({ where: { name } })
};
