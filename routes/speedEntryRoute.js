import Router from 'express'

import { addSpeedEntryController, getAllSpeedEntryController, deleteSpeedEntryController,  getOneSpeedEntryController } from '../controllers'

const router = Router()

export default ({ app, JWTManager, ValidationManager }) => {

  app.use('/speed-entries', router)

  router.use(JWTManager.verifyAccessToken)

  router.post('/', ValidationManager.speedEntryValidation, addSpeedEntryController)

  router.get('/', getAllSpeedEntryController)

  router.get('/:speedEntryID', getOneSpeedEntryController)

  router.delete('/:speedEntryID', deleteSpeedEntryController)
}