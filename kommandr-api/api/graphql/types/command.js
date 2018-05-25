import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";

import User from "./user";
import Var from "./var";
import CommandComment from "./commandComment";
import Fork from "./command";
import Program from "./program";
import { CommandStatus } from "../enums";

const Command = new GraphQLObjectType({
  name: "Command",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "ID of the command"
    },
    userId: {
      type: GraphQLInt,
      description: "ID of the author"
    },
    sourceId: {
      type: GraphQLInt,
      description: "Source ID of this command"
    },
    title: {
      type: GraphQLString,
      description: "Title of the command"
    },
    rawContent: {
      type: GraphQLString,
      description: "Raw content of the Command"
    },
    description: {
      type: GraphQLString,
      description: "Description of the command"
    },
    hashUrl: {
      type: GraphQLString,
      description: "Unique Hash (ID) URL for this command"
    },
    forkFrom: {
      type: GraphQLString,
      description: "ID of original Command"
    },
    vanityUrl: {
      type: GraphQLString,
      description: "URL-safe vanity address"
    },
    totalForks: {
      type: GraphQLInt,
      description: "Counter"
    },
    totalStars: {
      type: GraphQLInt,
      description: "Counter"
    },
    totalComments: {
      type: GraphQLInt
    },
    totalViews: {
      type: GraphQLInt
    },
    author: {
      type: User,
      resolve: command => command.getUser()
    },
    createdAt: {
      type: GraphQLString,
      description: "Timestamp"
    },
    status: {
      type: new GraphQLEnumType(CommandStatus)
    },
    updatedAt: {
      type: GraphQLString,
      description: "Timestamp"
    },
    deletedAt: {
      type: GraphQLString
    },
    comments: {
      type: new GraphQLList(CommandComment),
      resolve: command => command.getCommandComments()
    },
    forks: {
      type: new GraphQLList(Fork),
      resolve: command => command.getForks()
    },
    program: {
      type: Program,
      resolve: command => command.Program
    }
    /*
    vars: {
      type: new GraphQLList(Var),
      resolve: command => {
        return db.CommandVar.findAll({
          attributes: [
            "id",
            ["defaultValue", "overrideValue"],
            "sequence",
            "createdAt",
            "updatedAt"
          ],
          include: [
            {
              model: db.Var,
              attributes: ["name", "defaultValue"]
            }
          ],
          where: {
            commandId: command.id
          },
          order: [["sequence", "ASC"]]
        });
      }
    }
    */
  })
});

export default Command;
