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
    email: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    websiteUrl: {
      type: GraphQLString
    },
    twitterHandle: {
      type: GraphQLString
    },
    githubHandle: {
      type: GraphQLString
    }
  },
  resolve: (
    parent,
    {
      email,
      username,
      password,
      name,
      websiteUrl,
      twitterHandle,
      githubHandle
    },
    context
  ) => {
    if (!context.user) return null;

    let userFields = {};
    if (username) {
      userFields = { username };
    }
    if (password) {
      userFields = { ...userFields, password };
    }
    if (name) {
      userFields = { ...userFields, name };
    }
    if (websiteUrl) {
      userFields = { ...userFields, websiteUrl };
    }
    if (twitterHandle) {
      userFields = { ...userFields, twitterHandle };
    }
    if (githubHandle) {
      userFields = { ...userFields, githubHandle };
    }

    return db.User.update(userFields, {
      where: { id: context.user.id }
    }).then(affectedRows => db.User.findById(context.user.id));
  }
};
