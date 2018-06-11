import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";
import { Activity } from "../../types";

export default {
  name: "Activity",
  description: "Get activity by User ID",
  type: Activity,
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (parent, { userId }, { sql }) =>
    sql.Activity.findOne({
      include: [
        {
          model: sql.User,
          where: { id: userId }
        }
      ]
    })
};
