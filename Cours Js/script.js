// // alert("Hello World")

// // let prenom = "John"
// // let nom = "Doe"
// // let age = 43
// // let personnagePrincipal = true
// // let qualites = ["courageux", "vaillant", "intelligent"]

// // let age = prompt("Quel est ton âge ?")

// // if (age >= 18) {
// //   alert ("tu es majeur")
// // }
// // else if (age < 18 && age >= 15) {
// //   alert ("tu es adolescent")
// // }
// // else {
// //   alert ("tu es enfant")
// // }

// // ******************************************* Exo 1 ***********************************************

// // let prix = prompt("Quel est le prix de la PS5 ?")

// // if (prix <= 500) {
// //   alert ("Cest une excellente affaire ")
// // }
// // else if (prix >= 600) {
// //   alert ("C'est une arnaque !")
// // }
// // else  {
// //   alert ("C'est une bonne affaire :)")
// // }

// // let age = prompt("Saisissez votre âge")
// // alert ("vous avez " + age + " ans")

// // ******************************************* Exo 2 ***********************************************

// // let nm = 53
// // let compteur = 0
// // let age = 0

// // while (age != nm) {
// // age = prompt("Quel est le nombre mystère ?")

// // if (age == nm) {
// //   alert ("Brave, tu as trouvé en " + compteur + " coup ! ")
// // }

// // else if (age < nm) {
// //   alert ("C'est plus !")
// // }

// // else  {
// //   alert ("c'est moins")
// // }
// //  compteur++
// // }

// // // ******************************************* Exo 2 ***********************************************

// // let devinette
// // let age = 18

// // let i = 1

// // while(devinette != age){

// //     devinette = prompt("Essayez de deviner l'age de ma célébrité")

// //     if(devinette > age){
// //         alert("L'age saisi est trop élevé")
// //         i = i + 1
// //     }
// //     else if(devinette < age){
// //         alert("L'age saisi est trop petit")
// //         i = i + 1
// //     }
// // }

// // alert("Bravo, vous avez deviné l'âge en " + i + " essai(s)")

// // **********************************  Même exo avec un chiffre en aléatoire : ******************************

// // let age = Math.floor(Math.random() * 100)
// // let test = 0
// // let i = 0
// // while (test != age) {
// // test = prompt("Veuillez choisir un age")
// //     if(test < age){
// //         alert("L'age choisi est trop bas")
// //     }
// //    else if(test > age){
// //     alert("L'age choisi est trop haut")
// // }
// // i = i + 1

// // if (test == age){
// //     alert("L'age est trouvé en : " + i)
// // }
// // }

// // ******************************************** Fonction ************************************************

// // function Multiplier(nombre1, nombre2) {
// //     let resultat = nombre1 * nombre2
// //     return resultat
// //    }
// //    let nombre = Multiplier(5, 2)
// //    console.log(nombre)

// // ********************************* fonction pour convertir les degrés Fahrenheit en degrés Celsius.  **********************************

// // function Conversion(Fahrenheit) {
// //     let conversion = (Fahrenheit - 32) * 5 / 9
// //     return conversion
// // }

// // let ValeurConvertit = (Conversion(70))
// // console.log(ValeurConvertit)

// // ******************************************* V2 ***********************************************

// // let F = prompt("Entrez le degré Fahrenheit que vous souhaitez convertir")

// // function Convertion(F) {
// //     let degré = (F - 32) * 5 / 9
// //     return degré
// // }

// // let C = Convertion(F)
// // console.log("Le dégré " + F + " Fahrenheit est égal à " + C + " degré Celsus")

// // **************************************************** Changement d'élément html et css en JavaScript  **********************************

// // let ma_balise_p = document.querySelector(".MonTexte")
// // ma_balise_p.innerHTML = "Coucou"
// // ma_balise_p.style.color = "red"
// // ma_balise_p.style.fontSize = "30px"

// // **************************************************** Compteur de points  **********************************

// // let compteur1 = 0
// // let compteur2 = 0

// // let score1 = document.querySelector(".A")
// // let score2 = document.querySelector(".B")

// // let b2 = document.querySelector(".bleu")
// // let b1 = document.querySelector(".rouge")

// // b2.addEventListener("click", function () {
// //     plus()
// // })

// // function plus() {
// //     compteur1++
// //     A.innerHTML = compteur1
// // }

// // b1.addEventListener("click", function () {
// //     Plus()
// // })

// // function Plus() {
// //     compteur2++
// //     B.innerHTML = compteur2
// // }

let score_txt = document.querySelector(".score");
let bouton1 = document.querySelector(".Bouton1");
let bouton2 = document.querySelector(".Bouton2");

let score_1 = 0;
let score_2 = 0;

bouton1.addEventListener("click", function () {
  incrementScore1();
});

function incrementScore1() {
  score_1 = score_1 + 1;
  UpdateScoreTxt();
}

bouton2.addEventListener("click", function () {
  incrementScore2();
});

function incrementScore2() {
  score_2 = score_2 + 1;
  UpdateScoreTxt();
}

function UpdateScoreTxt() {
  score_txt.innerHTML = score_1 + "-" + score_2;
}

// // **************************************************** Changement couleur de fonds  ****************************************************

let switch1 = document.querySelector(".dos_switch");
let cercle = document.querySelector(".cercle_switch");
let body = document.querySelector(".body1");

switch1.addEventListener("click", function () {
  if (switch1.classList == "dos_switch") {
    switch1.classList.add("dos_switch2");
    switch1.classList.remove("dos_switch");

    cercle.classList.add("cercle_switch2");
    cercle.classList.remove("cercle_switch");

    body.classList.add("dark");
    body.classList.remove("light");

    score_txt.classList.add("text_noir");
    score_txt.classList.remove("text_blanc");
  } else {
    switch1.classList.add("dos_switch");
    switch1.classList.remove("dos_switch2");

    cercle.classList.add("cercle_switch");
    cercle.classList.remove("cercle_switch2");

    body.classList.add("light");
    body.classList.remove("dark");

    score_txt.classList.add("text_blanc");
    score_txt.classList.remove("text_noir");
  }
});

// // let monInput = document.querySelector(".monInput")
// // let monBouton = document.querySelector(".monBouton")
// // let maListe = document.querySelector(".maListe")
// // monBouton.addEventListener("click", function () {
// //     MonAction()
// // })

// // function MonAction() {
// //     let element = document.createElement("li")
// //     element.className = "monElement"
// //     element.innerHTML = monInput.value
// //     maListe.appendChild(element)
// //     monInput.value = ""
// // }

// // ************************************************************* Liste de courses 1  *********************************************

// // let input = document.querySelector(".saisie")
// // let btn = document.querySelector(".btn")
// // let liste = document.querySelector(".liste")

// // btn.addEventListener("click", function () {
// //     AjouterElement()
// // })

// // function AjouterElement() {
// //     let monNouvelElement = document.createElement("li")
// //     monNouvelElement.className = "li_class"
// //     monNouvelElement.innerHTML = input.value
// //     liste.appendChild(monNouvelElement)
// //     input.value = ""

// //     let bouton_suppr = document.createElement("button")
// //     bouton_suppr.className = "suppr_btn"
// //     bouton_suppr.innerHTML = "SUPPRIMER"
// //     monNouvelElement.appendChild(bouton_suppr)

// //     bouton_suppr.addEventListener("click", function () {
// //         RetirerElement(monNouvelElement)
// //     })
// // }

// // function RetirerElement(element_a_suppr) {
// //     liste.removeChild(element_a_suppr)
// // }

// // ****************************************************  Liste de courses 2 ********************************************************

// // let input_nom = document.querySelector(".saisie_nom")
// // let input_prix = document.querySelector(".saisie_prix")
// // let ajouter = document.querySelector(".ajouter")
// // let courses = []

// // ajouter.addEventListener("click", function () {
// //     let element = {
// //         nom: input_nom.value,
// //         prix: input_prix.value
// //     }
// //     courses.push(element)
// //     console.log(courses)
// //     input_nom.value = ""
// //     input_prix.value = ""
// // })

// // [objet].splice(objet.indexOf(element), 1) // Définit l'index d'une liste qu'on veut supprimer ou ajouter
// // [objet].push // Mise dans le tableau
// // [objet].indexOf // Indique la pistion d'un objet

// // *********************************************  Liste de courses 3 : script à compléter ************************************************

// // let course = [{
// //     nom: "Tomates",
// //     prix: 3
// // }, {
// //     nom: "Steaks",
// //     prix: 5
// // }, {
// //     nom:  "Pâtes",
// //     prix: 2
// // }]

// // let list = document.querySelector(".liste")

// // function ReadCourses(mesCourses) {
// //     for (let i = 0; i < course.length; i++) {
// //         let produit = mesCourses[i]

// //         let monLi = document.createElement("li")
// //         monLi.innerHTML = "nom : " + produit.nom + " - prix : " + produit.prix
// //         list.appendChild(monLi)
// //     }
// // }

// // ReadCourses(course)

// // ***********************************************************  Liste de courses 4  *************************************************************

// let monBouton = document.querySelector(".monBouton")
// let nom_input = document.querySelector(".nom")
// let prix_input = document.querySelector(".prix")

// let list = document.querySelector(".maListe")

// let courses = [];

// monBouton.addEventListener("click", function () {
//     AddElement()
// })

// function AddElement() {
//     let produit = {
//         nom: nom_input.value,
//         prix: prix_input.value
//     }
//     courses.push(produit)

//     RefreshCourses();
// }

// function RefreshCourses() {
//     list.innerHTML = ""                                 // récupère le ul et le met a vide
//     for (let i = 0; i < courses.length; i++) {
//         let li = document.createElement("li")
//         li.className = "monLi"
//         li.innerHTML = "Produit : " + courses[i].nom + " - Prix : " + courses[i].prix + "€"
//         list.appendChild(li)

//         let delete_btn = document.createElement("button")
//         delete_btn.className = "delete_btn"
//         delete_btn.innerHTML = "SUPPRIMER"
//         li.appendChild(delete_btn)
//         delete_btn.addEventListener("click", function () {
//             RemoveElement(courses[i])
//         })
//     }
// }

// function RemoveElement(monElement) {
//     courses.splice(courses.indexOf(monElement, 1))
//     RefreshCourses()
// }

// // **************************************************  Liste de courses 4.1 : Local storage  *******************************************************
let monBouton = document.querySelector(".monBouton");
let nom_input = document.querySelector(".nom");
let prix_input = document.querySelector(".prix");

let list = document.querySelector(".maListe");
let courses = [];

let saved_txt = window.localStorage.getItem("courses_saved");
if (saved_txt) {
  let saved_obj = JSON.parse(saved_txt);
  courses = saved_obj;
  RefreshCourses();
}

monBouton.addEventListener("click", function () {
  AddElement();
});

function AddElement() {
  let produit = {
    nom: nom_input.value,
    prix: prix_input.value,
  };
  courses.push(produit);

  nom_input.value = "";
  prix_input.value = "";

  RefreshCourses();
}

function RefreshCourses() {
  list.innerHTML = "";
  for (let i = 0; i < courses.length; i++) {
    let li = document.createElement("li");
    li.className = "monLi";
    li.innerHTML =
      "Produit : " + courses[i].nom + " - Prix : " + courses[i].prix + "€";
    list.appendChild(li);

    let delete_btn = document.createElement("button");
    delete_btn.className = "delete_btn";
    delete_btn.innerHTML = "SUPPRIMER";
    li.appendChild(delete_btn);
    delete_btn.addEventListener("click", function () {
      RemoveElement(i);
    });
  }

  let texte = JSON.stringify(courses);
  window.localStorage.setItem("courses_saved", texte);
}

function RemoveElement(index) {
  courses.splice(index, 1);
  RefreshCourses();
}
