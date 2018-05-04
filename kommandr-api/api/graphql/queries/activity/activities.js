import db from "../../../../db/models";
import { Activity } from "../../types";
import { GraphQLList, GraphQLNonNull, GraphQLID } from "graphql";

export default {
  name: "Activity",
  description: "Get activity by User ID",
  type: Activity,
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (parent, { userId }, context) =>
    db.Activity.findOne({
      include: [
        {
          model: db.User,
          where: { id: userId }
        }
      ]
    })
};
