let url = 'http://localhost:3333/cadastro'

fetch(url).then((resp) => resp.json()).then(function (data) {

    data.map((pessoa) => {
        var table = document.getElementById('itens')
        var row = ` <tr>
                        <td id="inpID">${pessoa.id}</td>
                        <td><p id="inpName${pessoa.id}" contenteditable="true">${pessoa.name}</p></td>
                        <td><p id="inpEmail${pessoa.id}" contenteditable="true">${pessoa.email}</p></td>
                        <td><p id="inpCpf${pessoa.id}" contenteditable="true" >${pessoa.cpf}</p></td>
                        <td><p id="inpBirthdate${pessoa.id}" contenteditable="true" >${pessoa.birthdate}</p></td>
                        <td><p id="inpAddressline${pessoa.id}" contenteditable="true" >${pessoa.addressline}</p></td>
                        <td><p id="inpCity${pessoa.id}" contenteditable="true" >${pessoa.city}</td>
                        <td><p id="inpUF${pessoa.id}" contenteditable="true" >${pessoa.uf}</td>
                        <td><img src="https://image.flaticon.com/icons/svg/2742/2742406.svg" alt="Atualizar item" type=submit height="25" width="25" onclick="atualizar('${pessoa.id}'); alert('Usuário atualizado!')"></td>
                        <td><img src="https://image.flaticon.com/icons/svg/901/901783.svg" alt="Apagar item" height="25" width="25" type=submit onclick="deletar('${pessoa.id}'); alert('Usuário deletado!')"></td>
                    </tr>`
        table.innerHTML += row
    })
})