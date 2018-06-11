import { GraphQLList, GraphQLString, GraphQLNonNull } from "graphql";
import User from "../../types/user";

export default {
  name: "User",
  description: "Get user by username",
  type: User,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, { username }, { sql }) => {
    return sql.User.findOne({ where: { username } });
  }
};
