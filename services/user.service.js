
export default ({ User }) => class userService {

  static findAll = async () => {
    try {
      const users = await User.find({}, { __v: false , password: false }).populate('speedEntries');
      return users;
    } catch (error) { throw error }
  };

  static findByID = async ({ id }) => {
    try {
      const user = await User.findById(id, { __v: false, password: false });
      return user;
    } catch (error) { throw error}
  };

  static findByEmail = async ({ email }) => {
    try {
      const user = await User.findOne({ email }, { __v: false, /* password: false */ });
      return user;
    } catch (error) { throw error; }
  };

  static insert = async (userData) => {
    try {
      const user = new User({ ...userData });
      await user.save();
      return user;
    } catch (error) { throw error }
  };

  static update = async ({ id, data }) => {
    try {
      delete data._id
      const user = await User.updateOne({ _id: id }, { ...data });
      //return user;
    } catch (error) { throw error}
  };

  static deleteUser = async ({ id }) => {
    try {
      const user = await this.findByID({ id });
      if(user)
        await user.deleteOne();
      else throw new Error('Record not found')
    } catch (error) { throw error}
  };
}

/* export default Object.freeze({
  findAll,
  findByID,
  findByEmail,
  insert,
  update,
  deleteUser,
});
 */