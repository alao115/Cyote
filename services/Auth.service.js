import createError from "http-errors";
import argon2 from "argon2";

export default ({ JWTManager, userService }) => class AuthManager {

  static signUp = async (data) => {
    try {
      //Check if user already existed
      const { email, password } = data
      const isUserExisted = await userService.findByEmail({ email });

      if (isUserExisted) throw createError.Conflict("Email already existed");

      //Hash user password
      const hashedPassword = await argon2.hash(password);

      //Create the user and save it in the db
      const user = await userService.insert({
        ...data,
        password: hashedPassword,
      });

      //Generate accessToken and refreshToken
      const accessToken = await JWTManager.signToken(user.id);
      const refreshToken = await JWTManager.signRefreshToken(user.id);

      return Object.freeze({ ...accessToken, refreshToken });
    } catch (err) { throw err; }
  };

  static signIn = async ({ email, password }) => {
    try {
      //Check if user already existed
      const user = await userService.findByEmail({ email });

      if (!user) throw createError.NotFound("Your account is not found");

      //Check if password is correct
      const isPasswordCorrect = await argon2.verify(user.password, password);
      if (!isPasswordCorrect)
        throw createError.Unauthorized("Email/Password not valid");

      //Generate accessToken and refreshToken
      const accessToken = await JWTManager.signToken(user.id);
      const refreshToken = await JWTManager.signRefreshToken(user.id);

      return Object.freeze({ ...accessToken, refreshToken });
    } catch (err) { throw err; }
  };

  static refreshTokenService = async ({ refreshToken }) => {
    try {
      //Verify the refreshToken
      const data = await JWTManager.refreshTokenVerification({ refreshToken });

      //Generate new pair of access-refresh token
      const accessToken = await JWTManager.signToken(data);
      const refreshtoken = await JWTManager.signRefreshToken(data);

      return Object.freeze({ ...accessToken, refreshToken: refreshtoken });
    } catch (err) { throw err; }
  };

  static resetPassword = async ({ email }) => {
    try {
      const user = await userService.findByEmail({ email });

       if (!user) throw createError.NotFound("User not found");


       return user
        //Generate new password or set new password manually

    } catch (error) { throw error }
  };
}
