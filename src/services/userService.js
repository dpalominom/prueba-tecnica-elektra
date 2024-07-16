const User = require('../models/User');
const { validateUser } = require('../utils/validators');

exports.createUser = async (userData) => {
  const validationError = validateUser(userData);
  if (validationError) {
    throw new Error(validationError);
  }

  const user = new User(userData);
  await user.save();
  return {
    id: user._id,
    nombre: user.nombre,
    apellidoPaterno: user.apellidoPaterno,
    apellidoMaterno: user.apellidoMaterno,
    numeroTelefono: user.telefono,
    correo: user.correo,
    nombreUsuario: user.nombreUsuario
  };
};

exports.getUsers = async () => {
  const users = await User.find({},
    {
      _id: 0,
      __v: 0,
      password: 0
    });
  return users;
};

exports.getUserByIdentifier = async (identifier) => {
  return User.findOne({
    $or: [
      { numeroTelefono: identifier },
      { nombreUsuario: identifier }
    ]
  });
};
