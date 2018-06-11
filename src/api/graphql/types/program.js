import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLEnumType
} from "graphql";

import Command from "./command";
import Platform from "./platform";

import { ProgramStatus, PlatformName } from "../enums";
import { ManPage } from ".";

const Program = new GraphQLObjectType({
  name: "Program",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    cliName: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    totalViews: {
      type: GraphQLInt
    },
    totalCommands: {
      type: GraphQLInt
    },
    shortDescription: {
      type: GraphQLString
    },
    status: {
      type: new GraphQLEnumType(ProgramStatus)
    },
    platformName: {
      type: new GraphQLEnumType(PlatformName),
      resolve: program => program.platformId
    },
    manPage: {
      type: ManPage,
      resolve: (program, args, { mongo }) => {
        const manPage = mongo.model("ManPage");
        return manPage.findOne({ name: program.name }).then(
          page => {
            return page;
          },
          err => {
            console.log(err);
          }
        );
      }
    },
    commands: {
      type: new GraphQLList(Command),
      resolve: program => program.getCommands()
    },
    createdAt: {
      type: GraphQLString,
      description: "Timestamp"
    },
    updatedAt: {
      type: GraphQLString,
      description: "Timestamp"
    }
  })
});

export default Program;
