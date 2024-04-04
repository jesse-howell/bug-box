const router = require('express').Router();

const {
  createUser,
  // for MVP purposes, putting these two on the backburner for now
  // getAllUsers,
  // updateUser,
  getSingleUser,
  deleteUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/users').post(createUser); //.get(getAllUsers) - removed for now

// /api/users/:id
router.route('/users/:id').get(getSingleUser).delete(deleteUser); //.put(updateUser) - removed for now

module.exports = router;
