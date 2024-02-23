const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/users.json');

const getUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const updateUser = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const addUser = (user) => {
  const users = getUsers();
  users.push(user); // Asumimos que `user` ya tiene un `id` asignado
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const deleteUser = (userId) => {
  let users = getUsers();
  users = users.filter(user => user.id !== userId);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

module.exports = { getUsers, updateUser, addUser, deleteUser };
