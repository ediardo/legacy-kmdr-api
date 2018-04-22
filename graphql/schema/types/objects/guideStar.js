import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

import User from "./user";
import Guide from "./guide";

const GuideStar = new GraphQLObjectType({
  name: "GuideStar",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    createdAt: {
      type: GraphQLString
    },
    guide: {
      type: Guide,
      resolve: guideStar => guideStar.getGuide()
    },
    author: {
      type: User,
      resolve: guideStar => guideStar.getUser()
    }
  })
});

export default GuideStar;
