const conect = require('../DB/conect');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { nome, email, whatsapp, endereco } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await conect('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            endereco
        });

        return response.json({ id });
    },
    async list(request, response) {
        const ongs = await conect('ongs').select('*');

        return response.json({ongs})
    }
};