import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers/reducer'

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    // enhancers: [monitorReducersEnhancer]
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/reducer', () => store.replaceReducer(rootReducer))
  }

  return store
}




// import { applyMiddleware, createStore } from 'redux';

// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';


// import loggerMiddleware from '../middleware/logger';
// import rootReducer from '../reducers/reducer'

// export default function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const storeMiddleware = applyMiddleware(...middlewares)

//   const enhancers = [storeMiddleware]
//   const composedEnhancers = composeWithDevTools(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

  
//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('../reducers/reducer', () => store.replaceReducer(rootReducer))
//   }

//   return store
// }