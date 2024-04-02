const User = require('../models');

module.exports = {
  async seedUsers() {
    const userSeeds = await User.deleteMany({});
    await User.create(userSeeds);
  },

  async seed() {
    await seedUsers();
  },

  async runSeed() {
    console.log('seeding...');
    try {
      await seed();
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    } finally {
      console.log('closing db connection');
      await db.close();
      console.log('db connection closed');
    }
  },
  // create user
  async createUser(req, res) {
    try {
      const createdUser = await User.create(req.body);
      res.json({ message: 'User created!', createdUser });
      res.status(200).json(createdUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // get all users
  async getAllUsers(req, res) {
    try {
      const getUsers = await User.find({});
      res.json(getUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update user by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'No user found with that ID.' });
      }
      res.json({ message: 'User updated successfully', updatedUser });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete user by ID
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'No user found with that ID.' });
      }
      res.json({ message: 'User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
