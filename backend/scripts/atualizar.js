async function atualizar(id) {
    var data = JSON.stringify({
        "id": id,
        "name": document.getElementById(`inpName${id}`).innerText,
        "email": document.getElementById(`inpEmail${id}`).innerText,
        "cpf": document.getElementById(`inpCpf${id}`).innerText,
        "birthdate": document.getElementById(`inpBirthdate${id}`).innerText,
        "addressline": document.getElementById(`inpAddressline${id}`).innerText,
        "city": document.getElementById(`inpCity${id}`).innerText,
        "uf": document.getElementById(`inpUF${id}`).innerText
    });

    const res = await fetch(url + '/update', {
        method: "post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (res.ok) {
        let resp = await res.json();
        console.log(resp);
    } else {
        console.log('erro: ' + res.status)
    }

}