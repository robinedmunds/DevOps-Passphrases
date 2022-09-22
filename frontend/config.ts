const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === "development")
    return "http://docker.local:5050/api"
  if (process.env.NODE_ENV === "production") return "/api"
  throw "No apiBaseUrl set in frontend config"
}

export { getApiBaseUrl }
