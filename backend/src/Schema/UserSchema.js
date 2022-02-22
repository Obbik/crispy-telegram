import { gql } from "graphql-tag"

const typeDefs = gql`

type User {
    name: String,
    email: String,
    password: String,
    height: String,
}

#Queries
type Query {
    getUser: [User!]!
}

type Login {
    name: String!, token: String! 
}
type Response {
    name: String!
    token: String!
}

type CardTask{
    title: String,
    comment: String,
    type: String,
    date: String,
    status: String,
}

#Mutations
    type Mutation {
        createUser(name: String!, email: String!, password: String!, height: String!): Response
        Login(name: String!,email:String, password: String!): Login!

        CreateCardTask(title: String!, comment: String!, type: String!, date: String!, status: String!): CardTask!
    }


`

export { typeDefs }
