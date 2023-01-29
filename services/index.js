import JWTService from './JWT.service'
import AuthService from './Auth.service'
import ValidationManager from './validation.service'
import userManager from './user.service'
import RedisClientManager from './redisClient.service'
import speedManager from './speed.service'
import speedEntryManager from './speedEntry.service'
import RoleService from './role.service'


import { User, Speed, SpeedEntry } from "../models"

const userService = userManager({ User})
const JWTManager = JWTService({ redisClientManager: RedisClientManager, userService })
const AuthManager = AuthService({ JWTManager, userService })
const SpeedService = speedManager({ Speed })
const SpeedEntryService = speedEntryManager({ SpeedEntry })

export {
  RedisClientManager,
  JWTManager,
  userService,
  AuthManager,
  ValidationManager,
  SpeedService,
  SpeedEntryService,
  RoleService
}