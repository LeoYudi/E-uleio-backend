const bcrypt = require('bcrypt');

modelu.exports = {
    generateHash: async (password) => {
        return await new Promise((resolve, reject) => {
            bcrypt.hash(password, bcrypt.genSaltSync(10), (error, hash) => {
                if (error) reject(error);
                resolve(hash);
            })
        })
    }
}