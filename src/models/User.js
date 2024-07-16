const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    maxlength: 40,
    match: /^[a-zA-Z\s]*$/
  },
  apellidoPaterno: {
    type: String,
    required: true,
    maxlength: 40,
    match: /^[a-zA-Z\s]*$/
  },
  apellidoMaterno: {
    type: String,
    maxlength: 40,
    match: /^[a-zA-Z\s]*$/
  },
  telefono: {
    type: String,
    required: true,
    length: 10,
    match: /^[0-9]*$/
  },
  correo: {
    type: String,
    maxlength: 40,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  nombreUsuario: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
    match: /^[a-zA-Z0-9]*$/
  },
  password: {
    type: String,
    required: true,
    maxlength: 20
  }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
