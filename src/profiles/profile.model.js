const profiles = [
  { name: "shariq1", age: 24 },
  { name: "shariq2", age: 25 },
  { name: "shariq3", age: 26 },
];

const getProfiles = () => {
  return profiles;
};

const getProfilesByAge = (args) => {
  return profiles.filter(profile => profile.age === args.age);
};

const addProfile = (args) => {
  const profile = {name:args.name, age:args.age}
  profiles.push(profile);
  return profile;
};

module.exports = {
  getProfiles,
  getProfilesByAge,
  addProfile
};
 