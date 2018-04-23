import { GraphQLList } from "graphql";
import Program from "../../types/program";

import db from "../../../../db/models";

export default {
  name: "programs",
  description: "List of programs",
  type: new GraphQLList(Program),
  resolve: () =>
    db.Program.findAll({
      include: [
        {
          model: db.Platform
        }
      ]
    })
};
