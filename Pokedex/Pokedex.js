let monBouton = document.querySelector(".monBouton")
let nom_input = document.querySelector(".nom")
let type_input = document.querySelector(".type")
let url_input = document.querySelector(".url")
let info = document.querySelector(".info")

let pokemon = [];

let saved_txt = window.localStorage.getItem("pokemon_saved")
if (saved_txt) {
    let saved_obj = JSON.parse(saved_txt)
    pokemon = saved_obj
    Refreshpokemon()
}

monBouton.addEventListener("click", function () {
    AddElement()
})

function AddElement() {
    let infos = {
        nom: nom_input.value,
        type: type_input.value,
        url: url_input.value,
    }
    pokemon.push(infos)

    nom_input.value = ""
    type_input.value = ""
    url_input.value = ""

    Refreshpokemon();
}

function Refreshpokemon() {
    info.innerHTML = ""
    for (let i = 0; i < pokemon.length; i++) {

        let div = document.createElement("div")
        info.appendChild(div)

        let bloc = document.createElement("div")
        bloc.innerHTML = pokemon[i].nom
        div.appendChild(bloc)


        var val = pokemon[i].url,
            src = val,
            img = document.createElement('img');

        img.src = src;
        div.appendChild(img);


        let bloc3 = document.createElement("div")
        bloc3.innerHTML = pokemon[i].type
        div.appendChild(bloc3)

        let delete_btn = document.createElement("button")
        delete_btn.className = "delete_btn"
        delete_btn.innerHTML = "Supprimer"
        div.appendChild(delete_btn)
        delete_btn.addEventListener("click", function () {
            RemoveElement(i)
        })

        // if (pokemon.length == 0) {
        //     carte.className = "info"
        // }

        let texte = JSON.stringify(pokemon)
        window.localStorage.setItem("pokemon_saved", texte)
    }
}

function RemoveElement(index) {
    pokemon.splice(index, 1)
    RefreshPokedex()
}