import Router from 'express'

import userRoute from './userRoute'
import authRoute from './authRoute'
import speedRoute from './speedRoute';
import speedEntryRoute from './speedEntryRoute';

import { ValidationManager, JWTManager } from '../services'

export default () => {
    const router = Router()

    authRoute({ app: router, ValidationManager })

    userRoute({ app: router, ValidationManager, JWTManager })

    speedRoute({ app: router, JWTManager, ValidationManager })

    speedEntryRoute({ app: router, JWTManager, ValidationManager })

    return router
}