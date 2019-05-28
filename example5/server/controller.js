const db = require('db.config.js');
const User = db.users;

exports.create = (req, res) => {
  User.create({
    login: req.body.login,
    password: req.body.password,
  }).then(user => {
    res.send(user);
  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
};

// FETCH all Users
exports.findAll = (req, res) => {
  User.findAll().then(users => {
    // Send all users
    res.send(users);
  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
};

// Find a User by Id
exports.findById = (req, res) => {
  User.findById(req.params.userId).then(user => {
    res.send(user);
  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
};

// Update a User
exports.update = (req, res) => {
  var user = req.body;
  const id = req.params.userId;
  User.update({ login: req.body.login, password: req.body.password },
    { where: { id: req.params.userId } },
  ).then(() => {
    res.status(200).send(user);
  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
};

// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.userId;
  User.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send('Пользователь будет удален!');
  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
};

module.exports = User;
