import User from "../../types/user";
import db from "../../../../db/models";

import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString
} from "graphql";

export default {
  type: User,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, { username, email, password }) {
    return db.User.create({ email, password });
  }
};
