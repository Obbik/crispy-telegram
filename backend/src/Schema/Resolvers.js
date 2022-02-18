import { connection } from "../../app.js"
import { InsertUser, LoginUser } from "../models/User.js"

const resolvers = {
	Query: {
		getUser() {
			return [{ name: "test", email: "test@test", token: "12341234" }]
		},
	},

	Mutation: {
		Login(parent, args) {
			const query = LoginUser(args.name, args.password)
			connection.query(query, (err, rows, fields) => {
				if (err) {
					console.log(err)
					return err
				}
			})
            return {name:"test", token:"12341234"}
		},

		createUser(parent, args) {
			const newUser = args

			let insert = InsertUser(newUser.name, newUser.email, newUser.password, newUser.height)
			try {
				connection.query(insert, (err, rows, fields) => {
					if (err) throw err
					return { data: "User created" }
				})
			} catch (error) {
				return error
			}
			return { data: "User created" }
		},
	},
}

export { resolvers }
