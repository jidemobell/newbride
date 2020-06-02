require('dotenv').config()
const { Pool } = require("pg");
const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');
const { PGUSER, PGDATABASE, PGPASSWORD, PGPORT, PGHOST} = process.env
var child;


// const scriptPath = path.basename('init.sql')



child = exec("pg_isready", (err, stdout, stderr) => {
  if (err) {
    console.error({
			error: `${err}`,
			message: 'postgresql server is not accepting connections'
		});
    process.exit()
	}

	if(stderr) console.error(`stderr: ${stderr}`);
	console.log(`stdout: ${stdout}`);
	
	let newPool = Database.startPool()
	Database.queryDb(`SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'app'`, newPool)
	.then(result => {
		console.log('Postgresql Connected ....')
		console.log('verifying connection....')
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
    console.log("Creating postgreSQL connection...");
    if (process.env.NODE_ENV === "production") {
      const connectionString = process.env.dbUri;
      pool = new Pool({
        connectionString: connectionString
      });
    } else if (process.env.NODE_ENV === "test") {
      this.db = "testDb";
      pool = new Pool();
    } else if (process.env.NODE_ENV === "development"){
      pool = new Pool();
		}
		return pool
	}
	
	static async queryDb(text, pool) {
		console.log('....initializing with a query')
		try {
			const res = await pool.query(text);
			return res
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
				pool.query(data , (err, res) => {
					if (err) {
						console.error('SQL ERR: ', err);
					}
					console.log("Writing app Sql Script....")
				})	
			})
		} 
}

module.exports = Database