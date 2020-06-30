Para listar os usuários criados, utilizaremos a seguinte configuração:


O método usado será : GET
A URL usada será : localhost:3333/cadastro

Esse método é responsável por listar todas as campanhas, seus códigos e alguns detalhes, como por exemplo as perguntas usadas.

{
    "id": "8523b954",
    "name": "Sara",
    "email": "contato@sara.com.br",
    "CPF": "4540191860",
    "birthdate": "01/01/1900"
    "adressline" "rua sao paulo 128"
    "city": "Botucatu",
    "uf": "SP"
}


--------------------------------------------

Para atualizar um usuário, utilizaremos a seguinte configuração:

O método usado será : POST
A URL usada será : localhost:3333/cadastro/update
O corpo será: 
{    
        "id": "{ID}",
        "name":"aaass2222a",
        "email":"saaa",
        "cpf": "12312312387",
        "birthdate": "26/10/1994",
        "addressline": "vista alegre 129",
        "city": "caracas",
        "uf": "sp"
}

Onde {ID} é o código do usuário que você deseja alterar.

Para pegar o código de um usuário específico, deve-se primeiro listar todos os usuários e utilizar o atributo "id" do retorno.


Exemplo de retorno de sucesso:
{
    "success": "Cadastro atualizado"
}


Exemplo de retorno de insucesso:

{
    "success": "Cadastro não encontrado!"
}


--------------------------------------------


Para deletar os usuários criados, utilizaremos a seguinte configuração:

O método usado será : DELETE
A URL usada será : localhost:3333/cadastro/delete/{ID}


Onde {ID} é o código do usuário que você deseja deletar.

Para pegar o código de um usuário específico, deve-se primeiro listar todos os usuários e utilizar o atributo "id" do retorno.


Exemplo de retorno de sucesso:
{
    "success": "Cadastro deletado!"
}

Exemplo de retorno de insucesso:

{
    "success": "Cadastro não encontrado!"
}



--------------------------------------------