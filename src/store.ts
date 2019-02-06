import { combineReducers, createStore, applyMiddleware, Store, Reducer } from 'redux'
import thunk from 'redux-thunk'
import StartScreenReducer from './features/start-screen/reducer'
import StartScreenState from './features/start-screen/records/StartScreenState'

const startScreen: Reducer<StartScreenState> = StartScreenReducer

const rootReducer = combineReducers({
  startScreen,
})

export const configureStore = (): Store => createStore(rootReducer, applyMiddleware(thunk))
