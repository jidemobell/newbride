const ADMIN_REGISTER_QUERY = `INSERT INTO app.users (username, password, role_type) VALUES ($1, $2, $3)`;
const GET_PAGE_QUERY = `SELECT * from app.pages WHERE id=$1`;
const GET_PAGES_QUERY =  `SELECT * from app.pages`;
const DASHBOARD_USER_QUERY = `SELECT * from app.users WHERE id=$1`;
const USERS_LIST_QUERY = `SELECT * from app.users`;;


module.exports = {
	ADMIN_REGISTER_QUERY,
	GET_PAGE_QUERY,
	GET_PAGES_QUERY,
	DASHBOARD_USER_QUERY,
	USERS_LIST_QUERY,
}