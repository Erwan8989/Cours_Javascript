// // ************************* Début cours *************************

// let prenom = prompt("Saisissez votre prénom")
// let nom = "Doe"
// let age = 10
// let professeur = true
// let eleves = ["Alban", "Meymoun", "San"]

// if (age < 18) {
//     alert("Tu es mineur et tu t'appelles " + prenom)
// }
// else{
//     alert("Tu as plus de 25 ans")
// }


// // ************************* Exercice PS5 *************************

// prix = prompt("Saisissez le prix de votre PS5")

// if (prix <= 350) {
//     alert("Fonce alphonse !")
// }
// else if (prix <= 500) {
//     alert("Il s'agit du prix de base")
// }
// else {
//     alert("C'est quoi encore cette arnaque !")
// }


// // ************************* Exercice plus ou moins *************************

// let age = 50
// let age_entree = 0
// let coup = 1

// alert("Devinez le chiffre entre 0 et 100")

// while (age != age_entree) {
//     age_entree = prompt("Entrez une valeur")

//     if (age == age_entree) {
//         alert("Tu as trouvé en " + coup + " coup(s)")
//     }
//     else if (age < age_entree) {
//         alert("C'est moins")
//         coup++
//     }
//     else{
//         alert("C'est plus")
//         coup++
//     }
// }


// // ************************* Exercice Fahrenheit en dégré celsius *************************

// function convertir(nombre1) {
//   let result = (nombre1 - 32) * 5 / 9
//   return result
// }

// let degré = prompt("Entrez une valeur en Fahrenheit, elle sera convertit en dégré celsius")

// console.log(convertir(degré))



// let balise = document.querySelector(".text")
// let prenom = "John"


// balise.innerHTML = "Coucou " + prenom
// balise.style.color = "red"
// balise.style.fontSize = "30px"


// let bouton = document.querySelector(".bouton1")
// bouton.addEventListener("click", function () {
//   monAction()
// })

// function monAction() {
//   bouton.style.color = "red"
// }

let compteur1 = 0,
  compteur2 = 0
let plus = document.querySelector(".plus")
let plus2 = document.querySelector(".moins")

plus.addEventListener("click", function () {
  plus1()
})

function plus1() {
  compteur1++
  document.write(compteur2)
}

plus2.addEventListener("click", function () {
  moins1()
})

function plus2() {
  compteur2++
  document.write(compteur2)
}
