export default ({ Speed }) => class SpeedService {

  static insert = async (data) => {
    try {
      const speed = new Speed({ ...data })
      await speed.save()
      return speed
    } catch (error) { throw error }
  }

  static findAll = async () => {
    try {
      const speeds = await Speed.find({}, { __v: false })
      return speeds
    } catch (error) { throw error}
  }

  static delete = async ({ id }) => {
    try {
      const speed = await Speed.findById(id, { __v: false })
      await speed.deleteOne()
    } catch (error) { throw error}
  }
}