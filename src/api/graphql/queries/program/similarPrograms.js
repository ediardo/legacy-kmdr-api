import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from "graphql";
import Program from "../../types/program";
import _ from "underscore";

export default {
  name: "Similar Programs",
  description: "Get program by ID",
  type: new GraphQLList(Program),
  args: {
    cliName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    platformName: {
      type: GraphQLString
    },
    k: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: async (
    root,
    { cliName: program, platformName, k },
    { sql, recommendr }
  ) => {
    var platformId;
    switch (platformName) {
      case "multiplatform":
        platformId = 1;
        break;
      case "linux":
        platformId = 2;
        break;
      case "macos":
        platformId = 3;
      case "windows":
        platformId = 4;
        break;
      default:
        platformId = 1;
    }
    var res = await recommendr.get("/recommendations", {
      params: {
        program,
        platformid: platformId,
        k
      }
    });
    var sim = _.pluck(res.data.recommendations, "cliName");
    return sql.Program.findAll({
      include: [
        {
          model: sql.Platform
        }
      ],
      where: {
        cliName: sim
      }
    });
  }
};
