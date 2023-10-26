import express from 'express';

import {
  createUser,
  getAllUsers,
  getSpecificUser,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

// get all the users
router.get('/', getAllUsers);
// get specific user
router.get('/:id', getSpecificUser);
// create user
router.post('/', createUser);
// delete the user
router.delete('/:id', deleteUser);
// update the user
router.patch('/:id', updateUser);

export default router;
