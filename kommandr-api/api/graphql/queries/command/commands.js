import db from "../../../../db/models";
import Command from "../../types/command";

import { GraphQLList } from "graphql";

export default {
  name: "Commands",
  description: "List of commands",
  type: new GraphQLList(Command),
  resolve: () =>
    db.Command.findAll({
      include: [{ model: db.Program }]
    })
};
