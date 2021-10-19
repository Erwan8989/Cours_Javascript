let monBouton = document.querySelector(".monBouton")
let nom_input = document.querySelector(".nom")
let type_input = document.querySelector(".type")
let url_input = document.querySelector(".url")


let list = document.querySelector(".info")
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
    let produit = {
        nom: nom_input.value,
        type: type_input.value,
        url: url_input.value,
    }
    pokemon.push(produit)

    nom_input.value = ""
    type_input.value = ""
    url_input.value = ""

    Refreshpokemon();
}

function Refreshpokemon() {
    list.innerHTML = ""
    for (let i = 0; i < pokemon.length; i++) {
        let nomPokemon = document.createElement("div")
        nomPokemon.innerHTML = pokemon[i].nom
        list.appendChild(nomPokemon)

        let delete_btn = document.createElement("button")
        delete_btn.className = "delete_btn"
        delete_btn.innerHTML = "SUPPRIMER"
        nomPokemon.appendChild(delete_btn)
        delete_btn.addEventListener("click", function () {
            RemoveElement(i)
        })
    }

    let texte = JSON.stringify(pokemon)
    window.localStorage.setItem("pokemon_saved", texte)
}

function RemoveElement(index) {
    pokemon.splice(index, 1)
    Refreshpokemon()
}



// const container_pokemon = document.getElementById('container_pokemon');
// const pokemon_number = 150;

// // Construction d'une boucle for id 1 à 150

// const fetchPokemons = async () => {
//     for (let i = 1; 1 <= pokemon_number; i++) {
//         await getPokemon(i);
//     }
// };

// const getPokemon = async id => {
//     const url = 'https://pokeapi.co/api/v2/pokemon/${id}';
//     const res = await fetch(url);
//     const pokemon = await res.json();
//     createPokemonCard(pokemon);
// }

// const createPokemonCard = (pokemon) => {
//     const pokemonEl = document.createElement('div');
//     pokemonEl.classList.add('pokemon');
//     const {
//         id,
//         name,
//         sprites,
//         types
//     } = pokemon;
//     const type = types[0].type.name;

//     const pokeInnerHTML = `<div class="img-container">
//     <img src="${sprites.front_default}" alt="${name}" />
//     </div>
//     <div class="info">
//     <span class="number"> ${id}</span>
//     <h3 class="name">${name}</h3>
//     <small class="type">Type: <span>${type}</span>
//     </small>
//     </div>  
//     `;
//     pokemonEl.InnerHTML = pokeInnerHTML;
//     poke_container.appendChild(pokemonEl);
// }

// fetchPokemons();