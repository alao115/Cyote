import { rejects } from 'assert'
import { createServer } from 'http'
import { resolve } from 'path'
import config from '../config'
import { normalizePort, onListening, onError } from '../helpers/appsupport'

export default ({ app }) => {
    return new Promise((resolve, reject) => {
        if (app.get('env') === 'development') {
            const port = normalizePort(config.port)
            const server = createServer(app)

            server.listen(port)
            server.on('listening', () => resolve(server))
            server.on('error', (error) => reject({ error, port }))
        }
    })
}