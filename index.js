import express from 'express'

import httpServer from './server'
import bootstrap from './loaders'
import logger from './loaders/logger'
import { onListening, onError } from './helpers/appsupport'

function startApp() {
    const app = express()

    bootstrap({ app, logger })

    httpServer({ app })
        .then(server => onListening({ server }))
        .catch(({ error, port }) => onError({ error, port }))
}

startApp()