const express = require('express');
const passport = require('passport');

const AuthService = require('./../services/auth.service');

const router = express.Router();
const service = new AuthService();

// Ruta para el login
router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

// Ruta para la recuperación de contraseña 
router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const rta = await service.changePassword(token, newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

// Ruta para cambiar la contraseña


module.exports = router;