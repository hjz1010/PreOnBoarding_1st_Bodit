const userService = require("../services/user");

const createUser = async (req, res) => {
  const { name, birth, height, phone } = req.body.data
  
  try {
    if (!name || !birth || !height || !phone) {
      res.status(400).json({message: 'missing value error'})
      return;
    }
    await userService.createUser(name, birth, height, phone)
    res.status(200).json({message: 'sign up success'})

  } catch (err) {
    console.log(err)
    res.status(err.statusCode || 500).json(err.message)
  }

};

const getUsers = async (req,res) => {
  try{
    const users = await userService.getUsers()
    res.status(200).json({message: 'success', result: users})
  } 
  catch (err) {
    console.log(err)
    res.status(500).json(err.message)
  }
}

module.exports = {
  createUser, getUsers
}