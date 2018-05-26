import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLEnumType
} from "graphql";

import {
  EntityTypes as EntityTypesEnum,
  EntityActions as EntityActionsEnum
} from "../enums";

const Activity = new GraphQLObjectType({
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
    entityType: {
      type: new GraphQLEnumType(EntityTypesEnum),
      description: "Type ID of the entity",
      resolve: activity => activity.entityTypeId
    },
    entityAction: {
      type: new GraphQLEnumType(EntityActionsEnum),
      description: "ID of the action",
      resolve: activity => activity.entityActionId
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

export default Activity;
