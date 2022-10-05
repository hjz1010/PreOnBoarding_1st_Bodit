const userService = require("../services/user");

const createUser = async (req, res) => {
  const { name, birth, height, phone } = req.body.data
  
  try {
    if (!name || !birth || !height || !phone) {
      res.status(400).json({message: 'missing value error'})
      return;
    }
    await userService.checkUserInput(name, birth, height, phone)
    await userService.createUser(name, birth, height, phone)
    res.status(200).json({message: 'sign up success'})

  } catch (err) {
    console.log(err)
    res.status(err.statusCode || 500).json(err.message)
  }

};

module.exports = {
  createUser,
};
