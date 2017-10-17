import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
// import {createLogger} from 'redux-logger'

// const middleware = applyMiddleware(createLogger())

export default createStore(reducer,middleware)