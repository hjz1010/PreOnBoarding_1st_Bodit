const { myDataSource } = require("./typeorm-client");

const createUser = async (name, birth, height, phone) => {
  const [user] = await myDataSource.query(`
    SELECT * 
    FROM users 
    WHERE name = ? and birth = ? and phone = ?
  `, [name, birth, phone])

  if (user) {
    const error = new Error('user already exists')
    error.statusCode = 400
    throw error
  }

  const result = await myDataSource.query(`
    INSERT INTO users (name, birth, height, phone)
    VALUE (?, ?, ?, ?)
  `,[name, birth, height, phone])
  return result
};

module.exports = {
  createUser,
};
