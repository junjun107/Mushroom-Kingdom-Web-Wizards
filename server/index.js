const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql"); // CommonJS
const schema = require("./schema/schema");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
    app.listen(
      PORT,
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
      )
    );
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
