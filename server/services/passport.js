const passport = require('passport')
const { ExtractJwt } = require('passport-jwt')
const JwtStrategy = require('passport-jwt').Strategy

const Database = require('../db/index')

const pool = new Database().startPool()

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey:  process.env.SECRET || 'my secret'
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	 const query = {
		text: `SELECT id,username FROM bridal_app.users WHERE id=$1`,
		values: [payload.id]
	 }

	pool.query(query)
	.then(result => {
		return done(null, result.rows[0])
	})
	.catch(err =>  done(err, false))
})

passport.use(jwtLogin)

module.exports = {passport}