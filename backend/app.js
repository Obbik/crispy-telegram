import express from "express";

import mysql from "mysql"
import {ApolloServer} from "apollo-server";
import {gql} from "graphql-tag"

const app = express()
const port = process.env.PORT || 3001;

const typeDefs = gql`
  type Query {
    User: String!
  }
`
const resolvers = {
  Query: {
    User: () => "Hello World"
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})


const connection = mysql.createConnection({
  host: 'db',
  user: 'db_user',
  password: 'db_user_pass',
  database: 'app_db'
})

connection.connect()

app.get('/', (req, res) => {
  res.send('Hello World!2')
})



server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
