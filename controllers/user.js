const userModel = require('../models/user');

const getUsers = (req, res) => {
  const users = userModel.getUsers();
  res.render('pages/index', { users });
};

const updateUser = (req, res) => {
  let users = userModel.getUsers();
  const { userId, name, email } = req.body;
  const userIndex = users.findIndex(user => user.id === parseInt(userId));
  if (userIndex !== -1) {
    users[userIndex].name = name || users[userIndex].name;
    users[userIndex].email = email || users[userIndex].email;
    userModel.updateUser(users);
  }
  res.redirect('/');
};

const addUser = (req, res) => {
  const { name, email } = req.body; // Obtener datos del formulario
  const users = userModel.getUsers();
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  const newUser = { id: newId, name, email };
  userModel.addUser(newUser);
  res.redirect('/');
};

const deleteUser = (req, res) => {
  const { userId } = req.body; // Asumimos que esto viene de alguna parte, por ejemplo, un formulario o un botón de eliminar
  userModel.deleteUser(parseInt(userId));
  res.redirect('/');
};

module.exports = { getUsers, updateUser, addUser, deleteUser };
