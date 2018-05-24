import { ManPage as ManPageType } from "../../types";
import { GraphQLID, GraphQLNonNull } from "graphql";

export default {
  name: "Man Page",
  description: "Man Pages",
  type: ManPageType,
  resolve: (root, { id }, { dbMongo }) => {
    const manPage = dbMongo.model("ManPage");
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
