/*
export default queries = {
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
      
    },
    ,
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
   
  });
}*/

import { me, users } from "./user";
import { programs } from "./program";

export default {
  users,
  me,
  programs
};
