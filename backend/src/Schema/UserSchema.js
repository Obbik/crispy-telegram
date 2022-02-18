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
    data: String!
}

#Mutations
    type Mutation {
        createUser(name: String!, email: String!, password: String!, height: String!): Response
        Login(name: String!, password: String!): Login!
    }
`

export { typeDefs }
