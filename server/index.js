const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql"); // CommonJS
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
