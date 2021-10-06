import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import dummyReducer from "./dummyReducer"
import phraseReducer from "./phraseReducer"

export default combineReducers({
  dummyReducer,
  phraseReducer,
  form: formReducer,
})
