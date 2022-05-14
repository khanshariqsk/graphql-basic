const { getUsers } = require("./user.model");

module.exports = {
  Query: {
    users: () => {
      return getUsers();
    },
  },
}