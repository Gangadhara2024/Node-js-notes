const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    return res.send("session expired,please log-in");
  }
};
module.exports = isAuth;
