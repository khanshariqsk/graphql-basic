const { getProfiles } = require("./profile.model");

module.exports = {
  Query: {
    profiles: () => {
      return getProfiles();
    },
  },
}