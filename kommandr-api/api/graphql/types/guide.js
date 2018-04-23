import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} from "graphql";

import Command from "./command";
import User from "./user";
import Var from "./var";

//import db from "../../../../db/models";

const Guide = new GraphQLObjectType({
  name: "Guide",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the collection"
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "User ID author of the guide"
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    vanityUrl: {
      type: GraphQLString
    },
    hashUrl: {
      type: GraphQLString
    },
    listed: {
      type: GraphQLBoolean
    },
    status: {
      type: GraphQLInt
    },
    author: {
      type: User,
      resolve: guide => guide.getUser()
    },
    totalCommands: {
      type: GraphQLInt
    },
    totalStars: {
      type: GraphQLInt
    },
    totalComments: {
      type: GraphQLInt
    },
    totalViews: {
      type: GraphQLInt
    },
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    },
    deletedAt: {
      type: GraphQLString
    },
    commands: {
      type: new GraphQLList(Command),
      resolve: guide => guide.Comment
    }
    /*
    vars: {
      type: new GraphQLList(Var),
      resolve: guide => {
        return db.GuideVar.findAll({
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
            guideId: guide.id
          },
          order: [["sequence", "ASC"]]
        });
      }
    }
    */
  })
});

export default Guide;
