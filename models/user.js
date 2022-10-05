const { myDataSource } = require("./typeorm-client");

const createUser = async (name, birth, height, phone) => {
  const [user] = await myDataSource.query(`
    SELECT * 
    FROM users 
    WHERE phone = ?
  `, [phone])

  if (!user){
    await myDataSource.query(`
      INSERT INTO users (name, birth, height, phone)
      VALUE (?, ?, ?, ?)
    `,[name, birth, height, phone])
  }

  return user;
};

const getUsers = async () => {
  const users = await myDataSource.query(`
    SELECT * FROM users
  `)
  return users
}

module.exports = {
  createUser, getUsers
};
