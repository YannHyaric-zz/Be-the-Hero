const conect = require('../DB/conect');
module.exports = {
    async create(request, response) {
        const { titulo, desc, valor } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await conect('incidents').insert({
            titulo,
            desc,
            valor,
            ong_id,
        });
        return response.json({ id });
    },
    async list(request, response) {
        const { page = 1 } = request.query;
        const count = await conect('incidents').count();

        const incidents = await conect('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5).offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.whatsapp']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json({ incidents });
    },
    async deletar(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await conect('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operação não permitida' });
        }
        await conect('incidents').where('id', id).delete();
        return response.status(204).send();
    }
}