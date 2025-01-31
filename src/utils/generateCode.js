const crypto = require('crypto');

const generateUniqueCode = () => {
    return crypto.randomInt(1000, 9999).toString();
};

module.exports = {
    generateUniqueCode
};
