require('dotenv').config()
const { Pool } = require("pg");
const { exec } = require("child_process");
const fs = require('fs');

const dbConstants = require('../constants/dbConstants');
const appConstants = require('../constants/index');
var child;





// pg_isready -U "postgres" -h 127.0.0.1 -p 5432
child = exec(dbConstants.PG_READY_COMMAND, (err, stdout, stderr) => {
  if (err) {
    console.error({
			error: `${err}`,
			message: dbConstants.PG_READY_STATUS
		});
    process.exit()
	}

	if(stderr) console.error(`${appConstants.STDERR}: ${stderr}`);
	console.log(`${appConstants.STDOUT}: ${stdout}`);
	
	let newPool = Database.startPool()
	Database.queryDb(dbConstants.PG_STARTDB_QUERY, newPool)
	.then(result => {
		console.log("able to retrieve schema app inside schemata")
		console.log(dbConstants.PG_CONNECTED_MESSAGE)
		console.log(dbConstants.PG_VERIF_MESSAGE)
		if(result.rows[0].schema_name === 'app'){
			Database.initializeScript(newPool)
		}
	})	
	.catch(err => {
		console.error(err.stack)
		process.exitCode = 1
	})
})


class Database {
 static startPool() {
    let pool;
    console.log(dbConstants.PG_INIT_POOL_MESSAGE);
    if (process.env.NODE_ENV === appConstants.PROD) {
      const connectionString = process.env.dbUri;
      pool = new Pool({
        connectionString: connectionString
      });
    } else if (process.env.NODE_ENV === appConstants.TEST) {
      pool = new Pool();
    } else if (process.env.NODE_ENV === appConstants.DEV){
      pool = new Pool();
		}
		return pool
	}

	 /**
	 * 
	 * function to check postgres database server connections 
	 * and configurations sucs as SCHEMA_NAME
	 * @param {*} text 
	 * @param {*} pool 
	 * @returns 
	 */
	
	static async queryDb(text, pool) {
		console.log(dbConstants.PG_INIT_DATA_MESSAGE)
		try {
			return await pool.query(text);
		} catch (err) {
			throw err.stack;
		}
	}

	static initializeScript(pool){
		   console.log('running initialization script.....')
			 fs.readFile('../init.sql', 'utf-8',  (err, data) => {
				if (err) {
					console.error('error reading sql file', err);
				}
				pool.query(data , (err) => {
					if (err) {
						console.error('SQL ERR: ', err);
					}
					console.log("Writing app Sql Script....")
				})	
			})
		} 
}

module.exports = Database