
export const signUp = ({ AuthManager }) => async ( req, res, next ) => {
	try {

		const signupData = req.value.body

 		const token = await AuthManager.signUp(signupData)

		res.send({ success: 1, data: { ...token }})
	} catch( err ) { next(err) }
}

export const signIn = ({ AuthManager }) => async (req, res, next) => {
	try {
		const { email, password } = req.value.body

 		const token = await AuthManager.signIn({ email, password })

		res.send({ success: 1, data: { ...token }})
	} catch( err ) { next(err) }
}

export const refresh = ({ AuthManager }) => async (req, res, next) => {
	try {
		const refreshToken  = req.value.body['refresh-token']

		const token = await AuthManager.refreshTokenService({ refreshToken })

		res.send({ success: 1, data: { ...token }})

	} catch( err ) { next(err) }
}

export const resetPassword = ({ AuthManager }) => async (req, res, next) => {
  try {
    const { email } = req.value.body
    const user = await AuthManager.resetPassword( { email })

    res.send(user)
  } catch (error) { next(error) }
}
