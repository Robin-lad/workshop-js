const getUsers = async function () {
    try {

        let response = await fetch('https://loisirs-web-backend.cleverapps.io/users')
        if (response.ok) {
            let data = await response.json()
            var tableau = document.getElementById("tableau");
            var string = ""

            data.forEach(element => {
                string += '<tr> <td>' + element.id + ' </td>' + '<td>' + element.name + ' </td>' + '<td>' + element.password + ' </td> </tr>'
            });
            tableau.innerHTML = string
            console.log(data)
        } else {
            console.error("Retour du serveur : ", response.status)
        }
    } catch(e){
        console.log(e)
    }
}

const insertPost = async function(){
    var nom = document.getElementById("name").value
    var psw = document.getElementById("psw").value
    
    let response = await fetch('https://loisirs-web-backend.cleverapps.io/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name: nom, password: psw})
    })
    if(response.ok){
        let responseData = await response.json()
        console.log(responseData)
    }
}