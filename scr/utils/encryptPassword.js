const crypto = require("crypto");
const { promisify } = require("util");

const asyncScypt = promisify(crypto.scrypt);

const encryptPassword = async (password) => {
  const encryptedPassword = await asyncScypt(password, process.env.SALT, 32);
  return encryptedPassword.toString("hex");
};

module.exports = encryptPassword;
