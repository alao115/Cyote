import Router from 'express'

import { addSpeedController, getAllSpeedController, deleteSpeedController } from '../controllers';

const router = Router()

export default ({ app, JWTManager, ValidationManager }) => {
  app.use('/speeds', router)

  router.use(JWTManager.verifyAccessToken)

  router.post('/', ValidationManager.speedValidation, addSpeedController)

  router.get('/', getAllSpeedController)

  router.delete('/:speedID', deleteSpeedController)
}