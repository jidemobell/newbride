require('dotenv').config()
const { Pool } = require("pg");
const { exec } = require("child_process");
const { PGUSER, PGDATABASE, PGPASSWORD, PGPORT, PGHOST} = process.env
var child;

child = exec("pg_isready", (err, stdout, stderr) => {
  if (err) {
    console.error({
			error: `${err}`,
			message: 'postgresql server is not accepting connections'
		});
    process.exit()
  }
  console.log(`stdout: ${stdout}`);
	console.error(`stderr: ${stderr}`);
	
	const dbInstance = new Database()
	const pool = dbInstance.startPool()
	Database.queryDb(`SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'bridal_app'`, pool)
	.then(result => console.log('Postgresql Connected ....'))
	.catch(err => {
		console.log(err)
		process.exit()
	})
});


class Database {
  constructor() {
		this.user = PGUSER === undefined ? process.exit() : PGUSER
		this.port= PGPORT === undefined ? process.exit()  : PGPORT || '5432'
		this.password = PGPASSWORD === undefined ? process.exit()  : PGPASSWORD
		this.db = PGDATABASE === undefined ? process.exit() : PGDATABASE
		this.host = PGHOST === undefined ? process.exit() : PGHOST || 'localhost'
	}

 startPool() {
    let pool;
    let message = "Creating postgreSQL connection...";
    if (process.env.NODE_ENV === "production") {
      const connectionString = process.env.dbUri;
      pool = new Pool({
        connectionString: connectionString
      });
    } else if (process.env.NODE_ENV === "test") {
      this.db = "testDb";
      pool = new Pool();
    } else {
      pool = new Pool();
    }
    console.log(message);
    return pool;
	}
	
	static async queryDb(text, pool) {
		try {
			const res = await pool.query(text);
			return res.rows;
		} catch (err) {
			throw err.stack;
		}
	}
}

