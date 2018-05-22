require('dotenv').config()
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET

module.exports = {
  checkAuth(req, res, next) {
    let token = req.headers.token;
    if(token) {
      try {
        jwt.verify(token, 'secret');
        next();
      } catch(err) {
        res.status(500).json({
          message: `Invalid credential!`,
          err
        })
      }
    } else {
      res.status(500).json({
        message: `Restricted, please login first`
      })
    }
  }
}
