import express from "express";

import mysql from "mysql"
import {ApolloServer} from "apollo-server";
import {gql} from "graphql-tag"

import { resolvers } from "./src/Schema/Resolvers.js";
import { typeDefs } from "./src/Schema/UserSchema.js";

const app = express()
const port = process.env.PORT || 3001;



export const connection = mysql.createConnection({
  host: 'db',
  user: 'db_user',
  password: 'db_user_pass',
  database: 'app_db'
})
connection.connect()

 const x = connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err
console.log("test")
  return rows[0].solution
})


const server = new ApolloServer({
  typeDefs,
  resolvers
})

app.get('/', (req, res) => {
  res.send('Hello World!2')
})

server.listen({port: port}).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})

// server.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
