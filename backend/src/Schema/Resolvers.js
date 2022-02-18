import { connection } from "../../app.js"
import {InsertUser} from  '../models/User.js'

const resolvers = {
	Query: {
		getUser() {
			return [{ name: "test", email: "test@test", password: "test" }]
		},
	},

    Mutation: {
        createUser(parent, args ) {
            const newUser = args 

            let insert = InsertUser(newUser.name, newUser.email, newUser.password, newUser.height)
            try {
                connection.query(insert,(err, rows, fields) => {
                if (err) throw err
                return "User created"
                })
                return "User created"
            } catch (error) {
                return error
            }
        }
    }
}

export {resolvers}