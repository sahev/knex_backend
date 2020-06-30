const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index (request, response) {
    const ongs = await connection('usuarios').select('*'); //selecionar todas as informações da tabela


    return response.json(ongs);
    },
    
    async create(request, response) {
        

    const { name, email, cpf, birthdate, addressline, city, uf } = request.body;



    const id = crypto.randomBytes(4).toString('HEX'); //Vai gerar 4b de caracteres aleatórios

    await connection('usuarios').insert({ //inserir informações na tabela
        id,
        name,
        email,
        cpf,
        birthdate,
        addressline,
        city,
        uf
    }); 
   
    return response.json({ id });
    },

    async update(request, response) {
        
        
        const { id, name, email, cpf, birthdate, addressline, city, uf } = request.body;

        const [count] = await connection('usuarios').count().where('id', id);
    
        if (count['count(*)'] == '0') {
            return response.status(200).json({ success: 'Cadastro não encontrado!'})
        } 
       
        await connection('usuarios').update( //inserir informações na tabela
            {
                'name': name,
                'email': email,
                'cpf': cpf,
                'birthdate': birthdate,
                'addressline': addressline,
                'city': city,
                'uf': uf
            }
        
        ).where('id', id);
       
        return response.json({ success: 'Cadastro atualizado' });

        },

    async delete(request, response){
        
        const  {id} = request.params;
        const [count] = await connection('usuarios').count().where('id', id);

        const incident = await connection('usuarios')
            .where('id', id)
            .select('name')
            .first();
            

        if (count['count(*)'] == '0') {
            return response.status(200).json({ success: 'Cadastro não encontrado!'})
        } 

    

        await connection('usuarios').where('id', id).delete();    

        return response.status(200).json({ success: 'Cadastro deletado!'});
        
    }
    
};