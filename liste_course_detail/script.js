let bouton = document.querySelector(".btn")
let texte = document.querySelector(".texte")
let liste = document.querySelector(".liste")
let prix = document.querySelector(".prix")
let courses = []

bouton.addEventListener("click", function () {
  ajouter()
})

function ajouter() {
  let produit = {
    nom: texte.value,
    prix: prix.value
  }

  courses.push(produit)

  console.log(courses)

  texte.value = ""
  prix.value = ""
}
