import { ManPage as ManPageType } from "../../types";
import { GraphQLID, GraphQLNonNull } from "graphql";

export default {
  name: "Man Page",
  description: "Man Pages",
  type: ManPageType,
  resolve: (parent, { id }, { mongo }) => {
    const manPage = mongo.model("ManPage");
    return manPage.findOne({ name: "git-commit" }).then(
      pages => {
        return pages;
      },
      err => {
        console.log(err);
      }
    );
  }
};
