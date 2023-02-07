const HOST_DEV = "http://localhost:8080"
const HOST_PROD = ""

export const HOST_URL = process.env.NODE_ENV === "production" ? HOST_PROD : HOST_DEV
export const GET_EMAIL_PAGE_URL = HOST_URL + "/search_records"
export const GET_EMAIL_PAGE_BY_SEARCH_URL = HOST_URL + "/find_records"