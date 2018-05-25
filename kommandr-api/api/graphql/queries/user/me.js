import { GraphQLList } from "graphql";
import User from "../../types/user";

export default {
  name: "Me",
  description: "Get current logged in user",
  type: new GraphQLList(User),
  resolve: (root, args, { sql }) => sql.User.findOne()
};
