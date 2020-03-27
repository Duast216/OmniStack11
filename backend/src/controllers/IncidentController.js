const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const {page = 1} = request.query;


        // a contagem de itens é enviada nos headers
        // podes usar desta forma
        const count = await connection('incidents').count();   

        response.header('X-Total-Count', count[0]['count(*)']);

        // Ou desta forma, em que os [] à volta da variável, desfazem o array da mesma, tornando a num simples objeto

        const [count2] = await connection('incidents').count();

        

        response.header('X-Total-Count2', count2['count(*)']);


        console.log(count); // mantendo a variável num array com um objeto dentro
        console.log(count2); // tornando a variável num simples objeto
        


        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        


        return response.json(incidents);
    },


    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};