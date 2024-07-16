exports.validateUser = (user) => {
  if (!user.nombre || user.nombre.length > 40 || !/^[a-zA-Z\s]*$/.test(user.nombre)) {
    return 'Nombre invalido';
  }
  if (!user.apellidoPaterno || user.apellidoPaterno.length > 40 || !/^[a-zA-Z\s]*$/.test(user.apellidoPaterno)) {
    return 'Apellido paterno invalido';
  }
  if (user.apellidoMaterno && (user.apellidoMaterno.length > 40 || !/^[a-zA-Z\s]*$/.test(user.apellidoMaterno))) {
    return 'Apellido materno invalido';
  }
  if (!user.telefono || !/^\d{10}$/.test(user.telefono)) {
    return 'Número de telefono invalido';
  }
  if (user.correo && (user.correo.length > 40 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.correo))) {
    return 'Correo invalido';
  }
  if (!user.nombreUsuario || user.nombreUsuario.length > 30 || !/^[a-zA-Z0-9]*$/.test(user.nombreUsuario)) {
    return 'Nombre de usuario invalido';
  }
  if (!user.password || user.password.length > 20) {
    return 'Password invalido';
  }
  return null;
};
