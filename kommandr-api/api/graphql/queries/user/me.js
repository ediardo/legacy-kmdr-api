import db from "../../../../db/models";
import User from "../../types/user";

import { GraphQLList } from "graphql";

export default {
  type: new GraphQLList(User),
  resolve: () => db.User.findAll()
};
