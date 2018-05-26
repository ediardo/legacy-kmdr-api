import { GraphQLList } from "graphql";
import User from "../../types/user";

export default {
  name: "users",
  description: "List of users",
  type: new GraphQLList(User),
  resolve: (parent, args, { sql }) => sql.User.findAll()
};
