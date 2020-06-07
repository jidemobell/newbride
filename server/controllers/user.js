const Database = require("../db/index.js");
const queries = require('../constants/queryConstants')

const pool = Database.startPool();

//function to get dashboard user and details
const dashboard = (req, res) => {
  let query = {
    text: queries.DASHBOARD_USER_QUERY,
    values: [req.user.id],
  };

  pool
    .query
    .then((result) => {
      const user = result.rows[0];
      res.status(200).json({ user });
    })
    .catch((err) => res.status(500).json({ error: err.stack }));
};


//list all registered users
const listUsers = (req, res) => {
  let query = queries.USERS_LIST_QUERY

  pool
    .query(query)
    .then((result) => {
      const users = result.rows;
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json({ error: err.stack }));
};

module.exports = {
  dashboard,
  listUsers,
};
