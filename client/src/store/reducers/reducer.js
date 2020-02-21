// rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})

//closure
export const combineReducers = function(reducers){
	const keys =  Object.keys(reducers)
	return function combination(state = {}, action){
		let finalState = {}

		for (let i = 0; i < keys.length; i++) {
			//current key
			const key = keys[i];
			//curent reducer, expected funstion
			const reducer = reducers[key]
			//previous state
			const previousStateKey = state[key]
			//next state key
			const nextStateKey = reducer(previousStateKey, action)
			// update new state for current reducer
			finalState = nextStateKey[key]
		}
		return finalState;
	}
}

// rootreducer = combiner()
// rootreducer is a function