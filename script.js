// alert("Hello World")


// let prenom = "John"
// let nom = "Doe"
// let age = 43
// let personnagePrincipal = true
// let qualites = ["courageux", "vaillant", "intelligent"]

// let age = prompt("Quel est ton âge ?")

// if (age >= 18) {
//   alert ("tu es majeur")
// }
// else if (age < 18 && age >= 15) {
//   alert ("tu es adolescent")
// }
// else {
//   alert ("tu es enfant")
// }


// ******************************************* Exo 1 ***********************************************

// let prix = prompt("Quel est le prix de la PS5 ?")

// if (prix <= 500) {
//   alert ("Cest une excellente affaire ")
// }
// else if (prix >= 600) {
//   alert ("C'est une arnaque !")
// }
// else  {
//   alert ("C'est une bonne affaire :)")
// }


// let age = prompt("Saisissez votre âge")
// alert ("vous avez " + age + " ans")

// ******************************************* Exo 2 ***********************************************


// let nm = 53
// let compteur = 0
// let age = 0

// while (age != nm) {
// age = prompt("Quel est le nombre mystère ?")

// if (age == nm) {
//   alert ("Brave, tu as trouvé en " + compteur + " coup ! ")
// }

// else if (age < nm) {
//   alert ("C'est plus !")
// }

// else  {
//   alert ("c'est moins")
// }
//  compteur++
// }


// // ******************************************* Exo 2 ***********************************************


// let devinette
// let age = 18

// let i = 1

// while(devinette != age){

//     devinette = prompt("Essayez de deviner l'age de ma célébrité")

//     if(devinette > age){
//         alert("L'age saisi est trop élevé")
//         i = i + 1
//     }
//     else if(devinette < age){
//         alert("L'age saisi est trop petit")
//         i = i + 1
//     }
// }

// alert("Bravo, vous avez deviné l'âge en " + i + " essai(s)")



// **********************************  Même exo avec un chiffre en aléatoire : ******************************

// let age = Math.floor(Math.random() * 100)
// let test = 0
// let i = 0
// while (test != age) {
// test = prompt("Veuillez choisir un age")
//     if(test < age){
//         alert("L'age choisi est trop bas")
//     }
//    else if(test > age){
//     alert("L'age choisi est trop haut")
// }
// i = i + 1

// if (test == age){
//     alert("L'age est trouvé en : " + i)
// }
// }

// ******************************************** Fonction ************************************************


// function Multiplier(nombre1, nombre2) {
//     let resultat = nombre1 * nombre2
//     return resultat
//    }
//    let nombre = Multiplier(5, 2)
//    console.log(nombre)

// ********************************* fonction pour convertir les degrés Fahrenheit en degrés Celsius.  **********************************



// function Conversion(Fahrenheit) {
//     let conversion = (Fahrenheit - 32) * 5 / 9
//     return conversion
// }

// let ValeurConvertit = (Conversion(70))
// console.log(ValeurConvertit)

// ******************************************* V2 ***********************************************


// let F = prompt("Entrez le degré Fahrenheit que vous souhaitez convertir")

// function Convertion(F) {
//     let degré = (F - 32) * 5 / 9
//     return degré
// }

// let C = Convertion(F)
// console.log("Le dégré " + F + " Fahrenheit est égal à " + C + " degré Celsus")


// ********************************* Changement d'élément html et css en JavaScript  **********************************


// let ma_balise_p = document.querySelector(".MonTexte")
// ma_balise_p.innerHTML = "Coucou"
// ma_balise_p.style.color = "red"
// ma_balise_p.style.fontSize = "30px"



// let compteur1 = 0
// let compteur2 = 0

// let score1 = document.querySelector(".A")
// let score2 = document.querySelector(".B")

// let b2 = document.querySelector(".bleu")
// let b1 = document.querySelector(".rouge")

// b2.addEventListener("click", function () {
//     plus()
// })

// function plus() {
//     compteur1++
//     A.innerHTML = compteur1
// }

// b1.addEventListener("click", function () {
//     Plus()
// })

// function Plus() {
//     compteur2++
//     B.innerHTML = compteur2
// }


var white = "#FFFFFF";
var black = "#000000";

let score_txt = document.querySelector(".score")
let bouton1 = document.querySelector(".Bouton1")
let bouton2 = document.querySelector(".Bouton2")

let score_1 = 0
let score_2 = 0

bouton1.addEventListener("click", function () {
    incrementScore1()
})

function incrementScore1() {
    score_1 = score_1 + 1
    UpdateScoreTxt()
}

bouton2.addEventListener("click", function () {
    incrementScore2()
})

function incrementScore2() {
    score_2 = score_2 + 1
    UpdateScoreTxt()
}

function UpdateScoreTxt() {
    score_txt.innerHTML = score_1 + "-" + score_2
}

// bouton3.addEventListener("click", function () {
//     changeColor()
// })

// function changeColor(color) {
//     document.body.style.background = color;

// }

let switch1 = document.querySelector(".Switch")
let dark = document.querySelector(".dark")

switch1.addEventListener("click", function () {

            if (document.body.style.backgroundColor(switch1)) {
                document.body.style.backgroundColor(dark);
                score1.style.color(switch1);

            } else {
                document.body.style.backgroundColor(dark);
                score1.style.color(switch1);
            }

        }

        // ********************************* Changement d'élément html et css en JavaScript  *********************************