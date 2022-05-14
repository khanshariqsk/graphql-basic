const express = require("express");
const path = require("path");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const PORT = 9800;

const schema = makeExecutableSchema({
  typeDefs: loadFilesSync(path.join(__dirname, "**/*.graphql")),
  resolvers: loadFilesSync(path.join(__dirname, "**/*.resolvers.js")),
});

const apolloServer = new ApolloServer({ schema });
apolloServer
  .start()
  .then(() => {
    return apolloServer.applyMiddleware({ app, path: "/graphql" });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("graphql server is running on port", PORT);
    });
  });
