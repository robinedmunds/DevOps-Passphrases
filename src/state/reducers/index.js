import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import dummyReducer from "./dummyReducer"

export default combineReducers({
  dummyReducer,
  form: formReducer,
})
