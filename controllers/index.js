import { signUp, signIn, refresh, resetPassword } from './authController'
import { addUser, getAllUser, getOneUser, deleteUser, updateUser } from './userController';
import { addSpeed, getAllSpeed, deleteSpeed } from "./speedController";
import { addSpeedEntry, getAllSpeedEntry, deleteSpeedEntry, getOneSpeedEntry, updateSpeedEntry } from "./speedEntryController";

import { AuthManager, userService, SpeedService, SpeedEntryService } from '../services'

const signUpController = signUp({ AuthManager })
const signInController = signIn({ AuthManager })
const refreshTokenController = refresh({ AuthManager })
const resetPasswordController = resetPassword({ AuthManager })

const addUserController = addUser({ userService })
const getAllUserController = getAllUser({ userService })
const getOneUserController = getOneUser({ userService })
const deleteUserController = deleteUser({ userService })
const updateUserController = updateUser({ userService })

const addSpeedController = addSpeed({ SpeedService })
const getAllSpeedController = getAllSpeed({ SpeedService })
const deleteSpeedController = deleteSpeed({ SpeedService })

const addSpeedEntryController = addSpeedEntry({ SpeedEntryService })
const getAllSpeedEntryController = getAllSpeedEntry({ SpeedEntryService })
const deleteSpeedEntryController = deleteSpeedEntry({ SpeedEntryService })
const getOneSpeedEntryController = getOneSpeedEntry({ SpeedEntryService })
const updateSpeedEntryController = updateSpeedEntry({ SpeedEntryService })


export {
  signUpController,
  signInController,
  refreshTokenController,
  resetPasswordController,

  addUserController,
  getAllUserController,
  getOneUserController,
  deleteUserController,
  updateUserController,

  addSpeedController,
  getAllSpeedController,
  deleteSpeedController,

  addSpeedEntryController,
  getAllSpeedEntryController,
  deleteSpeedEntryController,
  getOneSpeedEntryController,
  updateSpeedEntryController
}