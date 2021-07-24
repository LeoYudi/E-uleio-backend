const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  generateHash: async (password) => {
    return await new Promise((resolve, reject) => {
      bcrypt.hash(password, bcrypt.genSaltSync(10), (error, hash) => {
        if(error) reject(error);
        resolve(hash);
      })
    })
  },

  validPassword: async (password, hash) => {
    return await new Promise((resolve, reject) => { 
        bcrypt.compare(password, hash, (error, bool) => {
            if(error) reject(error);
            resolve(bool);
        })
    })
  },

  generateToken: (data = {}) => jwt.sign(data, '150ef76c7869d07cb51e37699d32baf7', { expiresIn: '7d' })
}