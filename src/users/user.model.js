const users = [
  { email: "test@1.com" },
  { email: "test@2.com" },
  { email: "test@3.com" },
]
const getUsers = ()=>{
    return users;
}
const getUserByEmail = (args)=>{
    return users.filter(user=>user.email === args.email);
}
module.exports = {
  getUsers,
  getUserByEmail
}