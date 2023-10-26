import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: 'Emily',
    lastName: 'Brown',
    age: 26,
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
  },
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
    age: 28,
  },
  {
    firstName: 'Michael',
    lastName: 'Williams',
    age: 35,
  },
  {
    firstName: 'David',
    lastName: 'Wilson',
    age: 32,
  },
  {
    firstName: 'Sophia',
    lastName: 'Miller',
    age: 29,
  },
];

// all routes in here are starting with /users
router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {});

export default router;
