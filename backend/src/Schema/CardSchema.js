import { gql } from "graphql-tag"

const typeDefs = gql`

type CardTask {
		title: String
		comment: String
		type: String!
		date: String
		status: String
	}

	#Mutations

	type Query {
		getCardTask(status: String): [CardTask]
	}
    type Mutation {
    CreateCardTask(title: String!, comment: String!, type: String!, date: String!, status: String!): CardTask!

    }
    
`

export { typeDefs as CardSchema }
