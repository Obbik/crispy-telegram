import express from "express";

import mysql from "mysql";
import { ApolloServer } from "apollo-server";
import { gql } from "graphql-tag";

import { resolvers } from "./src/Schema/Resolvers.js";
import { typeDefs } from "./src/Schema/UserSchema.js";

const app = express();
const port = process.env.PORT || 3001;

export const connection = mysql.createConnection({
  host: "db",
  user: "db_user",
  password: "db_user_pass",
  database: "app_db",
});
connection.connect();

let sql =
  "CREATE TABLE IF NOT EXISTS Users  (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), password VARCHAR(255), email VARCHAR(255), height VARCHAR(255))";

connection.query(sql, (err, rows, fields) => {
  if (err) throw err;
  console.log("Users table created");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
