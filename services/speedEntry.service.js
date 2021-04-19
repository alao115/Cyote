export default ({ SpeedEntry }) => class SpeedEntryService {

  static findOne = async ({ id }) => {
    try {
      const speedEntry = await SpeedEntry.findById(id, { __v: false }).populate('user', { __v: false, password: false }).populate('entryPoint.value', { __v: false }).populate('exitPoint.value', { __v: false })
      return speedEntry
    } catch (error) { throw error }
  }

  static insert = async (data) => {
    try {
      const speedEntry = new SpeedEntry({ ...data })
      await speedEntry.save()
      return speedEntry
    } catch (error) { throw error }
  }

  static findAll = async () => {
    try {
      const speedEntries = await SpeedEntry.find({}, { __v: false}).populate('user', { __v: false, password: false  }).populate('entryPoint.value', { __v: false }).populate('exitPoint.value', { __v: false })
      return speedEntries
    } catch (error) { throw error}
  }

  static delete = async ({ id }) => {
    try {
      const speedEntry = await SpeedEntry.findById(id)
      if(!speedEntry) throw new Error("Entry not found")
      await speedEntry.deleteOne()
    } catch (error) { throw error}
  }
}