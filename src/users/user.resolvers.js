const { getUsers, getUserByEmail } = require("./user.model");

module.exports = {
  Query: {
    users: () => {
      return getUsers();
    },
    userByEmail: (_,args) => {
      return getUserByEmail(args);
    },
  },
}