import { v4 as uuidv4 } from 'uuid';

let users = [
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

export const createUser = (req, res) => {
  const userId = uuidv4();
  const user = req.body;
  const userWithId = { ...user, id: userId };
  console.log('Post route reached');
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getAllUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getSpecificUser = (req, res) => {
  const { id } = req.params;

  // find the specific user
  const foundUser = users.find((user) => user.id === id);
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.send('User is not found');
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // jhane -> 123
  // jane -> 345

  // i need to delete the jhane. i use to his id and filter function following look like.
  // the filter function return false value then delete the user
  users = users.filter((user) => user.id !== id);
  res.send('user deleted from the database');
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const findUser = users.find((user) => user.id === id);

  if (firstName) findUser.firstName = firstName;
  if (lastName) findUser.lastName = lastName;
  if (age) findUser.age = age;

  res.send('User in updated');
};
