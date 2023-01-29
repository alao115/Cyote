import Joi from 'joi'
import createError from 'http-errors'

export default class ValidationManager {

    static schemas = {
        signup: Joi.object({
            firstname: Joi.string().min(3).required(),
            lastname: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            role: Joi.string().default('user'),
            password: Joi.string().min(8).required()
        }),

        signin: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        }),

        refreshToken: Joi.object({
            'refresh-token': Joi.string().required()
        }),

        resetPassword: Joi.object({
          email: Joi.string().email().required(),
        }),

        speed: Joi.object({
          label: Joi.string().required(),
          value: Joi.number().required(),
        }),

        speedEntry: Joi.object({
          user: Joi.string().required(),
          scene: Joi.number().less(4).greater(0).required(),
          date: Joi.date().required(),
          direction: Joi.number().less(3).greater(0),
          entryPoint: Joi.object().keys({
            value: Joi.string().required(),
            address: Joi.string().allow(''),
            dValue: Joi.number(),
            coords: Joi.object().keys({
              lat: Joi.number().required(),
              lng: Joi.number().required()
            }).required()
          }).required(),
          exitPoint: Joi.object().keys({
            value: Joi.string().required(),
            address: Joi.string().allow(''),
            dValue: Joi.number(),
            coords: Joi.object().keys({
              lat: Joi.number().required(),
              lng: Joi.number().required()
            }).required()
          }).when('scene', { not: 1, then: Joi.required() })
        })

    }

    static signUpValidation = async(req, res, next) => {
        try {
            const result = await this.schemas.signup.validateAsync(req.body, { abortEarly: false })
            if (!req.value) req.value = {}
            req.value.body = result
            next()
        } catch (err) {
            err.status = 422
            next(err)
        }
    }

    static signInValidation = async(req, res, next) => {
        try {
            const result = await this.schemas.signin.validateAsync(req.body, { abortEarly: false })
            if (!req.value) req.value = {}
            req.value.body = result
            next()
        } catch (err) {
            next(createError.BadRequest(err.message))
        }
    }

    static refreshTokenValidation = async(req, res, next) => {
        try {
            const result = await this.schemas.refreshToken.validateAsync(req.body, { abortEarly: false })
            if (!req.value) req.value = {}
            req.value.body = result
            next()
        } catch (err) {
            next(createError.BadRequest(err.message))
        }
    }

    static resetPasswordValidation = async( req, res, next ) => {
      try {
        const result = await this.schemas.resetPassword.validateAsync(req.body, { abortEarly: false })
        if (!req.value) req.value = {}
        req.value.body = result
        next()

      } catch (error) {
        next(createError.BadRequest(error.message))
      }
    }

    static speedValidation = async( req, res, next ) => {
      try {
        const result = await this.schemas.speed.validateAsync(req.body, { abortEarly: false })
        if (!req.value) req.value = {}
        req.value.body = result
        next()

      } catch (error) {
        next(createError.BadRequest(error.message))
      }
    }

    static speedEntryValidation = async( req, res, next ) => {
      try {
        const result = await this.schemas.speedEntry.validateAsync(req.body, { abortEarly: false })
        if (!req.value) req.value = {}
        req.value.body = result
        next()

      } catch (error) {
        next(createError.BadRequest(error.message))
      }
    }

    validationHelper() {

    }
}