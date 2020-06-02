const passport = require('passport')
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy

const Database = require('../db/index.js')
const { verifyPassword } = require('../helper/helpers');

const pool = Database.startPool()

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey:  process.env.SECRET || 'my secret'
}


// jwt strategy to secure restful endpoints
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	 const query = {
		text: `SELECT id,username FROM app.users WHERE id=$1`,
		values: [payload.sub]
	 }

	pool.query(query)
	.then(result => {
		return done(null, true)
	})
	.catch(err =>  done(err, false))
})


// jwt local strategy
const localStrategy = new LocalStrategy((username, password, done) => {
	pool.query({text:'SELECT * FROM app.users WHERE username=$1', values: [username]}, (err, data) => {
		if(err) return done(err, {message: 'Invalid Username or Password'})
		if(!data.rows[0]) return done(null, false, {message: 'Invalid Username or Password'})
		const match = verifyPassword(password, data.rows[0])
		if(!match)  return done(null, false, {message: 'IWrong Password'})
		return done(null, data.rows[0])
	})
})

passport.use(jwtLogin)
passport.use(localStrategy)


module.exports = {passport}