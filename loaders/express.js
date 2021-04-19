import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import routes from '../routes'
import { handle404, basicErrorHandler } from '../helpers/appsupport';

export default ({ app }) => {

    app.use(cors())
    app.use(express.json());

    if (app.get('env') === 'development') app.use(logger('dev'))

    app.use('/api', routes())

    // catch 404 and forward to error handler
    app.use(handle404);

    // error handler
    app.use(basicErrorHandler);

    return Promise.resolve()

}