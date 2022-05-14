const { getProfiles, getProfilesByAge, addProfile } = require("./profile.model");

module.exports = {
  Query: {
    profiles: () => {
      return getProfiles();
    },
    profilesByAge: (_,args) => {
      return getProfilesByAge(args);
    },
  },
  Mutation:{
    addProfile:(_,args)=>{
      return addProfile(args)
    }
  }
}