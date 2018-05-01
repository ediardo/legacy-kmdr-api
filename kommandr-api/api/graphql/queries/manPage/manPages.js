import { ManPage } from "../../types";

import { GraphQLID, GraphQLNonNull } from "graphql";

export default {
  name: "Man Page",
  description: "Man Pages",
  type: ManPage,
  resolve: (root, { id }, { mongo }) => {
    const ManPage = mongo.model("ManPage");
    /*
    context.mongo.model("ManPage").find({}, ["name"], (a, e) => {
      console.log(a, e);
    });
    */
  }
};
