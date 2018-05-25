import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from "graphql";
import Program from "../../types/program";

export default {
  name: "program",
  description: "Get program by ID",
  type: Program,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, { name }, { sql }) => sql.Program.findOne({ where: { name } })
};
