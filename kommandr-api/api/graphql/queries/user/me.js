import db from "../../../../db/models";
import User from "../../types/user";

import { GraphQLList } from "graphql";

export default {
  name: "Me",
  description: "Get current logged in user",
  type: new GraphQLList(User),
  resolve: (root, args, context) => db.User.findOne()
};
