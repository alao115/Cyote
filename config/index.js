import dotenv from 'dotenv'

dotenv.config()

export default {
    port: process.env.APP_PORT || 3000,
    appName: process.env.APP_NAME || "API Boilerplate",
    logLevel: 'debug',
    db: process.env.DB_NAME || "mongodb://localhost/coyoto-app",
    redisPort: process.env.REDIS_PORT || "6379",
    redisHost: process.env.REDIS_HOST || "redis"
}