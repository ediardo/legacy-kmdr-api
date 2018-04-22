import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} from "graphql";

const activityType = new GraphQLObjectType({
  name: "Activity",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the fav"
    },
    userId: {
      type: GraphQLInt,
      description: "ID of the User"
    },
    entityId: {
      type: GraphQLInt,
      description: "ID of the entity affected by this activity"
    },
    entityTypeId: {
      type: GraphQLInt,
      description: "Type ID of the entity"
    },
    entityActionId: {
      type: GraphQLInt,
      description: "ID of the action"
    },
    isPrivate: {
      type: GraphQLBoolean,
      description: "Whether this activity log is private or not"
    },
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  })
});

export default activityType;
