import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList
} from "graphql";

const Paragraph = new GraphQLObjectType({
  name: "Paragraph",
  description: "Manual Page paragraphs",
  fields: {
    short: {
      type: new GraphQLList(GraphQLString)
    },
    long: {
      type: new GraphQLList(GraphQLString)
    },
    idx: {
      type: GraphQLInt
    },
    expectsarg: {
      type: GraphQLBoolean
    },
    nestedCommand: {
      type: GraphQLBoolean
    },
    text: {
      type: GraphQLString
    },
    section: {
      type: GraphQLString
    },
    argument: {
      type: GraphQLString
    },
    is_option: {
      type: GraphQLBoolean
    }
  }
});

const ManPage = new GraphQLObjectType({
  name: "ManPage",
  description: "Manual Page",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    aliases: {
      type: new GraphQLList(GraphQLString)
    },
    name: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    nestedCommand: {
      type: GraphQLBoolean
    },
    paragraphs: {
      type: new GraphQLList(Paragraph)
    },
    multicommand: {
      type: GraphQLBoolean
    },
    partialmatch: {
      type: GraphQLBoolean
    }
  }
});

export default ManPage;
