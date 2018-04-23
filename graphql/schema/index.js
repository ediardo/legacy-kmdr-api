import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} from "graphql";

import User from "./types/objects/user";
import Command from "./types/objects/command";
import Guide from "./types/objects/guide";
import Program from "./types/objects/program";
import db from "../../db/models";
//import mutations from './mutations';

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    command: {
      type: Command,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (root, { id }, context) => db.Command.findOne({ where: { id } })
    },
    commands: {
      type: new GraphQLList(Command),
      resolve: () =>
        db.Command.findAll({
          include: [{ model: db.Program }]
        })
    },
    guide: {
      type: new GraphQLNonNull(Guide),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (root, { id }, ctx) => db.Guide.findOne({ where: { id } })
    },
    guides: {
      type: new GraphQLList(Guide),
      resolve: () =>
        db.Guide.findAll({
          include: [{ model: db.Command }]
        })
    },
    program: {
      type: Program,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (root, { id }, ctx) => db.Program.findOne({ where: { id } })
    },
    programs: {
      type: new GraphQLList(Program),
      resolve: () =>
        db.Program.findAll({
          include: [
            {
              model: db.Platform
            }
          ]
        })
    },
    user: {
      type: User,
      args: {
        username: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, { username }, context) => {
        return db.User.findOne({ where: { username } });
      }
    },
    users: {
      type: new GraphQLList(User),
      resolve: () => db.User.findAll()
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQueryType
  //mutation: mutations
});

export default schema;
