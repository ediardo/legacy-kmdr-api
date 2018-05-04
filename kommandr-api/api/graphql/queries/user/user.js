import db from "../../../../db/models";
import User from "../../types/user";

import { GraphQLList, GraphQLString, GraphQLNonNull } from "graphql";

export default {
  name: "User",
  description: "Get user by username",
  type: User,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, { username }, context) => {
    return db.User.findOne({ where: { username } });
  }
};
