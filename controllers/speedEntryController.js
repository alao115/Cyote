const getOneSpeedEntry = ({ SpeedEntryService }) => async (req, res, next) => {
  try {
    const { speedEntryID } = req.params
    const speedEntry =  await SpeedEntryService.findOne({ id: speedEntryID })

    res.send({ success: 1, data: { speedEntry }})
  } catch (error) { throw error }
}

const addSpeedEntry = ({ SpeedEntryService }) => async (req, res, next) => {
  try {
    const data = req.value.body
    const speedEntry = await SpeedEntryService.insert(data)

    res.send({ success: 1, data: { speedEntry }})
  } catch (error) { next(error) }
}

const getAllSpeedEntry = ({ SpeedEntryService }) => async (req, res, next) => {
  try {
    const speedEntries = await SpeedEntryService.findAll()

    res.send({ success: 1, data: { speedEntries }})
  } catch (error) { next(error) }
}

const deleteSpeedEntry = ({ SpeedEntryService }) => async (req, res, next ) => {
  try {
    const { speedEntryID } = req.params
    await SpeedEntryService.delete({ id: speedEntryID })
    res.send({ success: 1, data: {} })
  } catch (error) { next(error )}
}

export {
  getOneSpeedEntry,
  addSpeedEntry,
  getAllSpeedEntry,
  deleteSpeedEntry,
}