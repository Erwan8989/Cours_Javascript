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

// ********************************* Exo 2 ***********************************


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


// ******************************** V2 *********************************


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




function Conversion (Fahrenheit) {
let conversion = (Fahrenheit - 32) * 5/9
return conversion 
}

let ValeurConvertit = (Conversion (70))
console.log(ValeurConvertit)
