const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === "development")
    return "http://docker.local:4444/diceware/"
  if (process.env.NODE_ENV === "production") return "/api/"
}

export { getApiBaseUrl }
