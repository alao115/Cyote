import createError from 'http-errors'

export default ({ role }) => (req, res, next) => {
  const { user } = req.payload
  const isRoleFound = role.find( r => r === user.role)
  if(isRoleFound) next()
  else next(createError.Unauthorized('Access denied!!! Only an admin is allowed here'));
}