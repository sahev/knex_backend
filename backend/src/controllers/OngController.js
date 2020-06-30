const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index (request, response) {
    const ongs = await connection('ongs').select('*'); //selecionar todas as informações da tabela


    return response.json(ongs);
    },
    
    async create(request, response) {
        

    const {name, email, whatsapp, city, uf } = request.body;



    const id = crypto.randomBytes(4).toString('HEX'); //Vai gerar 4b de caracteres aleatórios

    await connection('ongs').insert({ //inserir informações na tabela
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    }); 
   
    return response.json({ id });
    },

    async update(request, response) {
        
        //const { id } = request.params;
        const { id, name, email, whatsapp, city, uf } = request.body;
        const [count] = await connection('ongs').count().where('id', id);
    
        if (count['count(*)'] == '0') {
            return response.status(200).json({ success: 'Cadastro não encontrado!'})
        } 
       
        await connection('ongs').update( //inserir informações na tabela
            {
                'name': name,
                'email': email,
                'whatsapp': whatsapp,
                'city': city,
                'uf': uf
            }
        
        ).where('id', id);
       
        return response.json({ success: 'Cadastro atualizado' });

        },

    async delete(request, response){
        
        const  {id} = request.params;
        const [count] = await connection('ongs').count().where('id', id);

        const incident = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
            

        if (count['count(*)'] == '0') {
            return response.status(200).json({ success: 'Cadastro não encontrado!'})
        } 

    

        await connection('ongs').where('id', id).delete();    

        return response.status(200).json({ success: 'Cadastro deletado!'});
        
    }
    
};