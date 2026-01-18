// This allows the app to switch between local and production automatically
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "/api" 
  : "http://localhost:5001/api";