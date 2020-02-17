const queryHelper = async (query) => {
	let promise = new Promise((resolve , reject) => {
		return pool.query(query)
			.then(res => resolve(res.rows))
			.catch(err => reject(err))
	}) 

	let result = await promise;
	return result
}


module.export = queryHelper