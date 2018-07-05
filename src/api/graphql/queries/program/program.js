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
    },
    platformName: {
      type: GraphQLString
    }
  },
  resolve: (root, { name, platformName }, { sql }) =>
    sql.Program.findOne({
      include: [
        {
          model: sql.Platform,
          where: {
            name: platformName
          }
        },
        {
          model: sql.Command
        }
      ],
      where: { name }
    }).then(program => {
      if (program) {
        program.increment("totalViews", {
          silent: true
        });
      }
      return program;
    })
};
