const crypto = require('crypto');

nodule.exports = function generarateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}