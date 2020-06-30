Para listar os usu�rios criados, utilizaremos a seguinte configura��o:


O m�todo usado ser� : GET
A URL usada ser� : localhost:3333/cadastro

Esse m�todo � respons�vel por listar todas as campanhas, seus c�digos e alguns detalhes, como por exemplo as perguntas usadas.

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

Para atualizar um usu�rio, utilizaremos a seguinte configura��o:

O m�todo usado ser� : POST
A URL usada ser� : localhost:3333/cadastro/update
O corpo ser�: 
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

Onde {ID} � o c�digo do usu�rio que voc� deseja alterar.

Para pegar o c�digo de um usu�rio espec�fico, deve-se primeiro listar todos os usu�rios e utilizar o atributo "id" do retorno.


Exemplo de retorno de sucesso:
{
    "success": "Cadastro atualizado"
}


Exemplo de retorno de insucesso:

{
    "success": "Cadastro n�o encontrado!"
}


--------------------------------------------


Para deletar os usu�rios criados, utilizaremos a seguinte configura��o:

O m�todo usado ser� : DELETE
A URL usada ser� : localhost:3333/cadastro/delete/{ID}


Onde {ID} � o c�digo do usu�rio que voc� deseja deletar.

Para pegar o c�digo de um usu�rio espec�fico, deve-se primeiro listar todos os usu�rios e utilizar o atributo "id" do retorno.


Exemplo de retorno de sucesso:
{
    "success": "Cadastro deletado!"
}

Exemplo de retorno de insucesso:

{
    "success": "Cadastro n�o encontrado!"
}



--------------------------------------------