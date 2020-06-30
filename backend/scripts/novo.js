let url = 'http://localhost:3333/cadastro'

const frmForm = document.getElementById('btnPost')

frmForm.addEventListener("submit", postData, true)

async function postData() {

    var data = JSON.stringify({

        "name": document.getElementById('inpName').value,
        "email": document.getElementById('inpEmail').value,
        "cpf": document.getElementById('inpCpf').value,
        "birthdate": document.getElementById('inpBirthdate').value,
        "addressline": document.getElementById('inpAddressline').value,
        "city": document.getElementById('inpCity').value,
        "uf": document.getElementById('inpUF').value

    });

    console.log(data, url)

    const res = await fetch(url, {
        method: "post",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (res.ok) {
        let resp = await res.json();

    } else {

        alert('erro: ' + res.status)
    }

}