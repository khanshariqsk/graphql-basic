const express = require("express");
const path = require("path");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const PORT = 9800;

const schema = makeExecutableSchema({
  typeDefs: loadFilesSync(path.join(__dirname, "**/*.graphql")),
  resolvers: loadFilesSync(path.join(__dirname, "**/*.resolvers.js")),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("graphql server is running on port", PORT);
});
