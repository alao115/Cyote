import Router from 'express'

import { addSpeedEntryController, getAllSpeedEntryController, deleteSpeedEntryController,  getOneSpeedEntryController, updateSpeedEntryController } from '../controllers'

const router = Router()

export default ({ app, JWTManager, ValidationManager }) => {

  app.use('/speed-entries', router)

  router.use(JWTManager.verifyAccessToken)

  router.post('/', ValidationManager.speedEntryValidation, addSpeedEntryController)

  router.get('/', getAllSpeedEntryController)

  router.get('/:speedEntryID', getOneSpeedEntryController)

  router.patch('/:speedEntryID', updateSpeedEntryController)

  router.delete('/:speedEntryID', deleteSpeedEntryController)
}