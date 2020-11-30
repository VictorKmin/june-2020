module.exports = (req, res, next) => {
  try {
    const user = req.body;
    const isLogged = false;

    if (!user.email || !user.password) {
      throw new Error('User is not valid');
    }

    req.login = isLogged;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};
