const resolvers = {
	Query: {
		getUser() {
			return [{ name: "test", email: "test@test", password: "test" }]
		},
	},

    Mutation: {
        createUser(parent, args ) {
            const newUser = args 
            //add to db 
            return newUser
        }
    }
}

export {resolvers}