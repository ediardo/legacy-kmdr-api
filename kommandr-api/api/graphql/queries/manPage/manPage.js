import { ManPage as ManPageType } from "../../types";
import { GraphQLID, GraphQLString } from "graphql";

export default {
  name: "Man Page",
  description: "Man Page by ID",
  type: ManPageType,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, { name }, { dbMongo }) => {
    const manPage = dbMongo.model("ManPage");
    return manPage.findOne({ name }).then(
      page => {
        console.log(page);
        return page;
      },
      err => {
        console.log(err);
      }
    );
  }
};
