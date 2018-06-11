import { GraphQLList } from "graphql";
import Program from "../../types/program";

export default {
  name: "programs",
  description: "List of programs",
  type: new GraphQLList(Program),
  resolve: (parent, args, { sql }) =>
    sql.Program.findAll({
      include: [
        {
          model: sql.Platform
        }
      ]
    })
};
