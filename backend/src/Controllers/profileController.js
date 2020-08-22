const conect = require('../DB/conect');

module.exports = {
    async list(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await conect('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json({ incidents })
    }
}