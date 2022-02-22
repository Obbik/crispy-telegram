import { connection } from "../../app.js"
import { InsertUser, LoginUser } from "../models/User.js"
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"

export const LoginIn = async (name, email) => {
	return new Promise((resolve, reject) => {
		const sql = LoginUser(name, email)
		connection.query(sql, (err, results) => {
			if (err) reject(err)
			resolve(results[0])
		})
	})
}

const createNewUser = async (name, email, pass, height) => {
	return new Promise((resolve, reject) => {
		const sql = InsertUser(name, email, pass, height)
		connection.query(sql, (err, results) => {
			if (err) reject(err)
			resolve(results.insertId)
		})
	})
}

const tokenExpire = 3 * 24 * 24 * 60 * 60 //3 days in seconds
const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: tokenExpire,
	})
}

const CreateCardTask = async (title, comment, type, date, status) => {
	return new Promise((resolve, reject) => {
		const sql = `INSERT INTO CardTask (title, comment, type, date, status)
		VALUES ('${title}', '${comment}', '${type}', '${date}', '${status}');`
		connection.query(sql, (err, results) => {
			if (err) reject(err)
			resolve(results)
		})
	})
}

const resolvers = {
	Mutation: {
		async Login(parent, args) {
			let user = await LoginIn(args.name, args.email)
			if (user) {
				const auth = await bcrypt.compare(args.password, user.password)
				if (auth) {
					const token = createToken(args.id)
					return { name: args.name, token }
				} else {
					throw Error(" incorret password")
				}
			} else {
				throw Error("user not found")
			}
		},

		async createUser(parent, args) {
			const { name, email, height } = args
			const salt = await bcrypt.genSalt()
			let pass = await bcrypt.hash(args.password, salt)
			let id = await createNewUser(name, email, pass, height)
			const token = createToken(id)
			return { name, token }
		},

		async CreateCardTask(parent, args) {
			const { title, comment, type, date, status } = args
			try{
				await CreateCardTask(title, comment, type, date, status)
				return {title, comment, type, date, status}
			}
			catch(err){
				throw Error(err)
			}

		},
	},
}

export { resolvers }
