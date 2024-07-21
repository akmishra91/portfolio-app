const db = require('../models');

exports.getUsers = async (req, res) => {
  try {
    const users = await db.users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await db.users.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
