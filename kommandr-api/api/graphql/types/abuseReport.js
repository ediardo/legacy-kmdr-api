import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLEnumType
} from "graphql";

import { AbuseReportStatus } from "../types";
const AbuseReport = new GraphQLObjectType({
  name: "AbuseReport",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the fav"
    },
    userId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the User"
    },
    status: {
      type: new GraphQLEnumType(AbuseReportStatus)
    },

    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  })
});

export default AbuseReport;
