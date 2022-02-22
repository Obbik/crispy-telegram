import express from "express";

import mysql from "mysql"
import {ApolloServer} from "apollo-server";

import { resolvers } from "./src/Schema/Resolvers.js";
import { typeDefs } from "./src/Schema/UserSchema.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"



const app = express()
const port = process.env.PORT || 3001;

dotenv.config()

export const connection = mysql.createConnection({
  host: 'db',
  user: 'db_user',
  password: 'db_user_pass',
  database: 'app_db'
})
connection.connect()

let sql = "CREATE TABLE IF NOT EXISTS Users  (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), password VARCHAR(255), email VARCHAR(255), height VARCHAR(255))";
 connection.query(sql, (err, rows, fields) => {
  if (err) throw err
    console.log("Users table created")
})

const getUser = token => {
  if (token) {
      try {
          // return the user information from the token
          return jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
          // if there's a problem with the token, throw an error
          throw new Error('Session invalid');
      }
  }
};    


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    // get token from header
    const token = req.headers.authorization;
    
    const user = getUser(token);

    console.log(user, "user")

    return {user}
  }
})
server.listen({port: port}).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})

