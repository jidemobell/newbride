const {Pool} = require('pg')




 function setPool(){
	let pool;
	if(process.env.NODE_ENV === 'production'){  // herku dyno assumption
		 const connectionString = process.env.dbUri
		 pool = new Pool({
			 connectionString: connectionString
		 })
	}else if(process.env.NODE_ENV === 'test'){
		 PGDATABASE = 'testDb'
		 pool = new Pool()
	}else{
		pool = new Pool()
	}
	return pool
}


module.exports = {
	setPool
}
