import { ManPage as ManPageType } from "../../types";
import { GraphQLID, GraphQLString } from "graphql";

export default {
  name: "ManPage",
  description: "Man Page by ID",
  type: ManPageType,
  args: {
    name: {
      type: GraphQLString
    }
  },
  resolve: (root, { name }, { mongo }) => {
    const manPage = mongo.model("ManPage");
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
