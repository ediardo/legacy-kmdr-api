import {
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from "graphql";

import Activity from "./activity";
import CommandComment from "./commandComment";
import GuideComment from "./guideComment";
import Guide from "./guide";
import Command from "./command";
import GuideStar from "./guideStar";
import CommandStar from "./commandStar";
import Var from "./var";

import db from "../../../../db/models";

const User = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: user => user.id
    },
    name: {
      type: GraphQLString,
      resolve: user => user.name
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username
    },
    email: {
      type: GraphQLString,
      resolve: (user, args, ctx) => {
        return user.email;
      }
    },
    websiteUrl: {
      type: GraphQLString,
      resolve: user => user.website
    },
    twittlerHandle: {
      type: GraphQLString,
      resolve: user => user.twitterHanddle
    },
    status: {
      type: GraphQLInt
    },
    lastLogin: {
      type: GraphQLString
    },
    lastLoginIpAddress: {
      type: GraphQLString
    },
    githubId: {
      type: GraphQLString
    },
    githubHandle: {
      type: GraphQLString
    },
    avatarUrl: {
      type: GraphQLString
    },
    hasSeenWelcome: {
      type: GraphQLBoolean
    },
    createdAt: {
      type: GraphQLString,
      resolve: user => user.createdAt
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user, args, ctx) => {
        return user.updatedAt;
      }
    },
    activities: {
      type: new GraphQLList(Activity),
      resolve: user => user.getActivities()
    },

    commandComments: {
      type: new GraphQLList(CommandComment),
      resolve: user => user.getCommandComments()
    },

    guideComments: {
      type: new GraphQLList(GuideComment),
      resolve: user => user.getGuideComments()
    },

    commands: {
      type: new GraphQLList(Command),
      resolve: user => user.getCommands()
    },

    guides: {
      type: new GraphQLList(Guide),
      resolve: user => user.getGuides()
    },

    commandStars: {
      type: new GraphQLList(CommandStar),
      resolve: user => user.getCommandStars()
    },
    guideStars: {
      type: new GraphQLList(GuideStar),
      resolve: user => user.getGuideStars()
    }
  })
});

export default User;
