const userDao = require("../models/user");

const createUser = async (name, birth, height, phone) => {
  
  const birth_regex=/^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
   if (!birth_regex.test(birth)) {
     const error = new Error('invalid email')
     error.statusCode = 400
     throw error
   }

   if (typeof Number(height) !== 'number') {
    const error = new Error('invalid height')
    error.statusCode = 400
    throw error
   }

  const phone_regex=/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
   if (!phone_regex.test(phone)) {
     const error = new Error('invalid phone number')
     error.statusCode = 400
     throw error
   }

  return await userDao.createUser(name, birth, height, phone)
};

module.exports = {
  createUser,
};
