import dicewareAPI from "../../apis/diceware"
// import { GET_DICEWARE_JSON } from "./TYPES"

// redux actions go here

export const fetchPhrases = () => {
  return async dispatch => {
    const response = await dicewareAPI.get("/diceware")
    console.log(response.data)
    // dispatch({ type: "FETCH_POSTS", payload: response.data })
  }
}
