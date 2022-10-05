const userDao = require("../models/user");

const createUser = async (name, birth, height, phone) => {

  const name_regex = /^[가-힣a-zA-Z]+$/;
  if (!name_regex.test(name)) {
    const error = new Error('invalid name')
    error.statusCode = 400
    throw error
  }
  
  const birth_regex = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
   if (!birth_regex.test(birth)) {
    const error = new Error('invalid birth data')
    error.statusCode = 400
    throw error
   }

  const height_regex = /^\d*[.]\d{1}$/
  if (!height_regex.test(height)) {
    const error = new Error('invalid height')
    error.statusCode = 400
    throw error
  }

  const phone_regex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
   if (!phone_regex.test(phone)) {
     const error = new Error('invalid phone number')
     error.statusCode = 400
     throw error
   }

  const user = await userDao.createUser(name, birth, height, phone)
  if (user) {
    const error = new Error('user already exists')
    error.statusCode = 400
    throw error
  }

  return ;
};

const getUsers = async () => {
  const users = await userDao.getUsers()
  return users
}

module.exports = {
  createUser, getUsers
};

