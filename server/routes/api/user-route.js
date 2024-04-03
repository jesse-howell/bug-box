const router = require('express').Router();

const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/users').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;