import { connection } from "../../app.js"
import { InsertUser, LoginUser } from "../models/User.js"
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"

////////////////////////////////////

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


const queryCardTask = async (status) => {
	return new Promise((resolve, reject) => {
		const sql = `SELECT * FROM CardTask WHERE status = '${status}' ;`
		connection.query(sql, (err, results) => {
			if (err) reject(err)
			resolve(results)
		})
	})
}


//////////////////////////////////////
const resolvers = {
	Mutation: {
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
	Query:{
		async getCardTask(parent, args){
			try{
				
				const test = await queryCardTask(args.status)
				return test
			}
			catch(err){
				throw Error(err)
			}
		}
	}
}

export { resolvers as CardResolvers }
