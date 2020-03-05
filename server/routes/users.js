var express = require('express');
var router = express.Router();
const {passport} = require('../services/passport')
const { dashboard, listUsers } = require('../controllers/user')

const requireAuth = passport.authenticate('jwt', {session: false})

router.get('/dashboard', requireAuth, (req, res) =>  dashboard(req, res))
router.get('/list',requireAuth, (req, res) =>  listUsers(req, res))


module.exports = router;
