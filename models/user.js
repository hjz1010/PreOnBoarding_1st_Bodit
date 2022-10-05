const { myDataSource } = require("./typeorm-client");

const getUserByPhone =  async (phone) => {
  const [user] = await myDataSource.query(`
    SELECT * FROM users 
    WHERE phone = ?
  `, [phone])
  return user;
}

const createUser = async (name, birth, height, phone) => {
  await myDataSource.query(`
    INSERT INTO users (name, birth, height, phone)
    VALUE (?, ?, ?, ?)
  `,[name, birth, height, phone])
  return;
};


module.exports = {
  getUserByPhone, createUser,
};
