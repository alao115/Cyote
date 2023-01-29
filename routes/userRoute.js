import Router from 'express'

import { getAllUserController, addUserController, getOneUserController, deleteUserController, updateUserController } from '../controllers'

const router = Router()

export default ({ app, ValidationManager, JWTManager, RoleService }) => {
	app.use('/users', router)

	router.use(JWTManager.verifyAccessToken)

  router.post('/', RoleService({ role: [ 'admin' ] }), ValidationManager.signUpValidation, addUserController)

  router.get('/', RoleService({ role: [ 'admin' ] }), getAllUserController)

	router.get('/me', RoleService({ role: [ 'user', 'admin' ] }), getOneUserController)

  router.patch('/:userID', RoleService({ role: [ 'user', 'admin' ] }), updateUserController)

  router.delete('/:userID', RoleService({ role: [ 'admin' ] }), deleteUserController)
}
