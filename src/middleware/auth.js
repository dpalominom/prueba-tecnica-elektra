const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('x-token');
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, 'super-secret');
    const user = await User.findOne({ _id: decoded.id },
      {
        _id: 0,
        __v: 0,
        password: 0
      });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'No estas autenticado!' });
  }
};

module.exports = auth;