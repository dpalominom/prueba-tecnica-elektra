const authService = require('../services/authService');

exports.login = async (req, res, next) => {
  try {
    const { identifier, password } = req.body;
    const { user, token } = await authService.login(identifier, password);
    res.status(200)
      .json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.logout = (req, res, next) => {
  res.json({ message: 'Logout satisfactorio' });
};
