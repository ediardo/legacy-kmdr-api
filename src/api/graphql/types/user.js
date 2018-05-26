import {
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLEnumType
} from "graphql";

import Activity from "./activity";
import CommandComment from "./commandComment";
import GuideComment from "./guideComment";
import Guide from "./guide";
import Command from "./command";
import GuideStar from "./guideStar";
import CommandStar from "./commandStar";
import Var from "./var";
import { UserStatus } from "../enums";

const User = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    websiteUrl: {
      type: GraphQLString
    },
    twittlerHandle: {
      type: GraphQLString
    },
    status: {
      type: new GraphQLEnumType(UserStatus)
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
    },
    vars: {
      type: new GraphQLList(Var),
      resolve: user => user.getVars()
    }
  }
});

export default User;
