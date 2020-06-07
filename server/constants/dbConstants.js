const PG_READY_COMMAND = "pg_isready"
const PG_READY_STATUS = 'postgresql server is not accepting connections'
const PG_STARTDB_QUERY = `SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'app'`
const PG_CONNECTED_MESSAGE = 'Postgresql Connected ....'
const PG_VERIF_MESSAGE = 'verifying connection....'

const PG_INIT_POOL_MESSAGE = "Creating postgreSQL connection..."
const PG_INIT_DATA_MESSAGE = '....initializing with a query'



module.exports = {
	PG_READY_COMMAND,
	PG_READY_STATUS,
	PG_STARTDB_QUERY,
	PG_CONNECTED_MESSAGE,
	PG_VERIF_MESSAGE,
	PG_INIT_DATA_MESSAGE,
	PG_INIT_POOL_MESSAGE,
}