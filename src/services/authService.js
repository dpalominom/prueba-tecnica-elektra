const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (identifier, password) => {
  const user = await User.findOne({
    $or: [{ nombreUsuario: identifier }, { telefono: identifier }]
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Credenciales invalidas');
  }

  const token = jwt.sign({ id: user._id }, 'super-secret', { expiresIn: '1h' });
  return { user, token };
};
