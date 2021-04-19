import { createClient } from 'redis'
import { success, error, info } from 'consola'
import config from '../config'


export default () => {
    return new Promise((resolve, reject) => {
        const client = createClient(config.redisPort, config.redisHost);

        client.on("connect", () => {
            success("Redis client is connected to the redis server")
        })

        client.on("ready", () => {
            success("Redis client is ready to be used")
            resolve(client)
        })

        client.on("error", function(err) {
            reject(err)
        });

        process.on("SIGINT", () => {
            client.quit()
        })
    })
}