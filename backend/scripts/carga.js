let url = 'http://localhost:3333/cadastro'
let file = 'docs/users.json'

async function carregardados() {

    fetch(file).then((resp) => resp.json()).then(function (data) {


        data.map((pessoa) => {

            var data = JSON.stringify({

                "name": pessoa.name,
                "email": pessoa.email,
                "cpf": pessoa.cpf,
                "birthdate": pessoa.birthdate,
                "addressline": pessoa.addressline,
                "city": pessoa.city,
                "uf": pessoa.uf

            })

            postData(data);

        })

    })

}


async function postData(data) {

    const res = await fetch(url, {
        method: "post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    })

}