import Router from 'express'

import { signUpController, signInController, refreshTokenController, resetPasswordController } from '../controllers'

const router = Router()

export default ({ app, ValidationManager }) => {
    app.use('/auth/local', router)

    router.post('/signup', ValidationManager.signUpValidation, signUpController)

    router.post('/signin', ValidationManager.signInValidation, signInController)

    router.post('/refresh-token', ValidationManager.refreshTokenValidation, refreshTokenController)

    router.post('/password-reset', ValidationManager.resetPasswordValidation, resetPasswordController)
}