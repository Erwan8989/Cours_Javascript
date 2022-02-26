let nom = document.querySelector(".nomPoke");
let type = document.querySelector(".typePoke");
let url = document.querySelector(".imgPoke");
let bouton = document.querySelector(".bouton");
let carte = document.querySelector(".content_container");

let pokedex = [];

let save = window.localStorage.getItem("pokedex_save");
if (save) {
  let save_obj = JSON.parse(save);
  pokedex = save_obj;
  RefreshPokedex();
}

bouton.addEventListener("click", function () {
  add();
});

function add() {
  let infos = {
    nom: nom.value,
    type: type.value,
    url: url.value,
  };
  pokedex.push(infos);

  nom.value = "";
  type.value = "";
  url.value = "";

  RefreshPokedex();
}

function RefreshPokedex() {
  carte.innerHTML = "";
  for (let i = 0; i < pokedex.length; i++) {
    let div = document.createElement("div");
    carte.appendChild(div);

    let bloc = document.createElement("div");
    bloc.innerHTML = pokedex[i].nom;
    div.appendChild(bloc);

    var val = pokedex[i].url,
      src = val,
      img = document.createElement("img");

    img.src = src;
    div.appendChild(img);

    let bloc3 = document.createElement("div");
    bloc3.innerHTML = pokedex[i].type;
    div.appendChild(bloc3);

    // var img = document.createElement("img");
    // img.src = "test.png";
    // div.appendChild(img);

    let delete_btn = document.createElement("button");
    delete_btn.className = "delete_btn";
    delete_btn.innerHTML = "Supprimer";
    div.appendChild(delete_btn);
    delete_btn.addEventListener("click", function () {
      RemoveElement(i);
    });

    // if (pokedex[i].type == "Feu" || pokedex[i].type == "feu") {
    //   div.className = "carte bloc feu col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Plante" || pokedex[i].type == "plante") {
    //   div.className = "carte bloc plante col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Acier" || pokedex[i].type == "acier") {
    //   div.className = "carte bloc acier col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Combat" || pokedex[i].type == "combat") {
    //   div.className = "carte bloc combat col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Dragon" || pokedex[i].type == "dragon") {
    //   div.className = "carte bloc dragon col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Eau" || pokedex[i].type == "eau") {
    //   div.className = "carte bloc eau col-6";
    //   carte.className = "row";
    // } else if (
    //   pokedex[i].type == "Electrique" ||
    //   pokedex[i].type == "electrique"
    // ) {
    //   div.className = "carte bloc electrique col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Fée" || pokedex[i].type == "fée") {
    //   div.className = "carte bloc fee col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Glace" || pokedex[i].type == "glace") {
    //   div.className = "carte bloc glace col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Insecte" || pokedex[i].type == "insecte") {
    //   div.className = "carte bloc insecte col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Poison" || pokedex[i].type == "poison") {
    //   div.className = "carte bloc poison col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Normal" || pokedex[i].type == "normal") {
    //   div.className = "carte bloc normal col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Psy" || pokedex[i].type == "psy") {
    //   div.className = "carte bloc psy col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Roche" || pokedex[i].type == "roche") {
    //   div.className = "carte bloc roche col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Sol" || pokedex[i].type == "sol") {
    //   div.className = "carte bloc sol col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Spectre" || pokedex[i].type == "spectre") {
    //   div.className = "carte bloc spectre col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Tenebre" || pokedex[i].type == "tenebre") {
    //   div.className = "carte bloc tenebre col-6";
    //   carte.className = "row";
    // } else if (pokedex[i].type == "Vol" || pokedex[i].type == "vol") {
    //   div.className = "carte bloc vol col-6";
    //   carte.className = "row";
    // } else {
    //   div.className = "carte bloc white col-6";
    //   carte.className = "row";
    // }
  }

  if (pokedex.length == 0) {
    carte.className = "carte";
  }

  let texte = JSON.stringify(pokedex);
  window.localStorage.setItem("pokedex_save", texte);
}

function RemoveElement(index) {
  pokedex.splice(index, 1);
  RefreshPokedex();
}
