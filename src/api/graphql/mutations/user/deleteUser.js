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
    id: {
      description: "User ID",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }, ctx) => {
    if (!ctx.user || ctx.user.id !== id) return null;
    db.User.findOne({
      where: { id }
    }).then(user => {
      user.destroy().then(affectedRows => (affectedRows === 1 ? { id } : null));
    });
  }
};
