const addSpeed = ({ SpeedService }) => async (req, res, next) => {
  try {
    const data = req.value.body
    const speed = await SpeedService.insert(data)

    res.send({ success: 1, data: { speed }})
  } catch (error) { next(error) }
}

const getAllSpeed = ({ SpeedService }) => async (req, res, next) => {
  try {
    const speeds = await SpeedService.findAll()

    res.send({ success: 1, data: { speeds }})
  } catch (error) { next(error) }
}

const deleteSpeed = ({ SpeedService }) => async (req, res, next ) => {
  try {
    const { speedID } = req.params
    await SpeedService.delete({ id: speedID })
    res.send({ success: 1, data: {} })
  } catch (error) { next(error )}
}

export {
  addSpeed,
  getAllSpeed,
  deleteSpeed,
}