import axios from "axios"

export default axios.create({
  baseURL: "http://localhost:4444",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    format: "json",
    phrase_count: 10,
  },
})
