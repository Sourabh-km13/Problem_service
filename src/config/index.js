import dotenv from "dotenv"

dotenv.config()

export default {
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL:process.env.AtlasDbUrl,
    LOG_DB_URL:process.env.LogDbUrl,    
}