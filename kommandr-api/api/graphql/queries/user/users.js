import db from "../../../../db/models";
import User from "../../types/user";

import { GraphQLList } from "graphql";

export default {
  name: "users",
  description: "List of users",
  type: new GraphQLList(User),
  resolve: () => db.User.findAll()
};
