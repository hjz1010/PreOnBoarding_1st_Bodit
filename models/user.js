const { myDataSource } = require("./typeorm-client");

const createUser = async (name, birth, height, phone) => {
  const [user] = await myDataSource.query(`
    SELECT * 
    FROM users 
    WHERE phone = ?
  `, [phone])

  if (user) {
    return user
  }

  await myDataSource.query(`
    INSERT INTO users (name, birth, height, phone)
    VALUE (?, ?, ?, ?)
  `,[name, birth, height, phone])

  return;
};

module.exports = {
  createUser,
};
