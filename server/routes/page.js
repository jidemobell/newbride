var express = require('express');
var router = express.Router();
const {passport} = require('../services/passport')
const { getPage, listPages } = require('../controllers/page')

const requireAuth = passport.authenticate('jwt', {session: false})

router.get('/:id', requireAuth,  (req, res) =>  getPage(req, res))
router.post('/list',  (req, res) => listPages(req, res))


module.exports = router;