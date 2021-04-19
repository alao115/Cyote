const addUser = ({ userService }) => async (req, res, next) => {
  try {
    const data = req.value.body
    const user = await userService.insert(data)
		res.send({ success: 1, data: { user }})
  } catch (error) { next(error) }
}

const getOneUser = ({ userService }) => async (req, res, next) => {
  try {
    const user = await userService.findByID({ id: req.payload.aud })
		res.send({ success: 1, data: { user }})
  } catch (error) { next(error) }
}

const getAllUser = ({ userService }) => async ( req, res, next ) => {
  try {
    const users = await userService.findAll({ id: req.payload.aud })
		res.send({ success: 1, data: { users }})
  } catch (error) { next(error) }
}

const updateUser = ({ userService }) => async (req, res, next) => {
  try {
    const { aud: id, data } = req.payload
    const user = await userService.update({ id, data })
		res.send({ success: 1, data: { user }})
  } catch (error) { next(error) }
}

const deleteUser = ({ userService }) => async (req, res, next) => {
  try {
    const { aud: id } = req.payload
    await userService.deleteUser({ id })
		res.send({ success: 1, data: { }})
  } catch (error) { next(error) }
}


export {
  addUser,
  getOneUser,
  getAllUser,
  updateUser,
  deleteUser
}