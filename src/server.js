const express = require("express");
const path = require("path");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const PORT = 9800;

const schema = makeExecutableSchema({
  typeDefs: loadFilesSync(path.join(__dirname, "**/*.graphql")),
  resolvers: {
    Query: {
      users: (parent) => {
        return parent.users;
      },
      profiles: (parent) => {
        return parent.profiles;
      },
    },
  },
});

const root = {
  users: require("./users/user.model"),
  profiles: require("./profiles/profile.model"),
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("graphql server is running on port", PORT);
});
