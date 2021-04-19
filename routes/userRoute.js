import Router from 'express'

import { getAllUserController, addUserController, getOneUserController, deleteUserController, updateUserController } from '../controllers'

const router = Router()

export default ({ app, ValidationManager, JWTManager }) => {
	app.use('/users', router)

	router.use(JWTManager.verifyAccessToken)

  router.post('/', addUserController)

  router.get('/', getAllUserController)

	router.get('/me', getOneUserController)

  router.patch('/:userID', updateUserController)

  router.delete('/:userID', deleteUserController)
}
