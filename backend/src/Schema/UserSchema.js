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

#Mutations
    type Mutation {
        createUser(name: String!, email: String!, password: String!, height: String!): User!
    }
`

export { typeDefs }
