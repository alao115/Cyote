import Router from 'express'

import userRoute from './userRoute'
import authRoute from './authRoute'
import speedRoute from './speedRoute';
import speedEntryRoute from './speedEntryRoute';

import { ValidationManager, JWTManager, RoleService } from '../services'

export default () => {
    const router = Router()

    authRoute({ app: router, ValidationManager })

    userRoute({ app: router, ValidationManager, JWTManager, RoleService })

    speedRoute({ app: router, JWTManager, ValidationManager, RoleService })

    speedEntryRoute({ app: router, JWTManager, ValidationManager, RoleService })

    return router
}