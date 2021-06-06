const userRepository = require("../repositories/userRepository");
const encryptPassword = require("../utils/encryptPassword");
const { generateToken } = require("./jwtService");
const { updateSchema } = require("../validations/userValidation");

exports.signup = async (userDetails) => {
  if (!userDetails.password || !userDetails.email) {
    throw new Error("You must provide email and password");
  }
  userDetails.password = await encryptPassword(userDetails.password);
  await userRepository.insertUser(userDetails);
};

exports.login = async (email, password) => {
  if (!email || !password) {
    throw new Error("You must provide email and password");
  }

  const user = await userRepository.findUserWithPasswordByEmail(email);

  if (!user) throw new Error("Not found user");

  const encryptedPassword = await encryptPassword(password);

  if (user.password !== encryptedPassword) {
    throw new Error("Your password is incorrect");
  }

  const token = generateToken(user.isSoftDeleted, user.email, user.role);

  return token;
};

exports.getProfile = async (email) => {
  const user = await userRepository.findUserByMail(email);
  return user.toJSON();
};

exports.editProfile = async (id, userDetails) => {
  const validation = await updateSchema.validateAsync(userDetails);
  if (validation.password) {
    validation.password = await encryptPassword(validation.password);
  }
  await userRepository.updateUser(id, userDetails);
};

// exports.deleteProfile = async (id, )? (En userRepository)
