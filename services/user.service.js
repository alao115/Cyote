
export default ({ User }) => class userService {

  static findAll = async () => {
    try {
      const users = await User.find({}, { __v: false , password: false });
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
      const user = await this.findByID({ id });
      user.updateOne({ ...data });
      return data;
    } catch (error) { throw error}
  };

  static deleteUser = async ({ id }) => {
    try {
      const user = await this.findByID({ id });
      await user.deleteOne();
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