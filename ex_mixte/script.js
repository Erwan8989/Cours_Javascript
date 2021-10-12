let bouton = document.querySelector(".btn")
let texte = document.querySelector(".texte")
let liste = document.querySelector(".liste")
let prix = document.querySelector(".prix")
let courses = []


let compteur = 0


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

  ReadCourses(courses)
}

function ajouter_supprimer() {
  let liBIS = document.querySelector(".li" + compteur)
  let supprimer = document.createElement("button")

  supprimer.className = ("li" + compteur)
  supprimer.innerHTML = "Supprimer"

  liBIS.appendChild(supprimer)

  compteur++

  supprimer.addEventListener("click", function () {
    supprimer2(liBIS)
  })

}

function supprimer2(element) {
  liste.removeChild(element)
}



function ReadCourses(mesCourses) {
  li.innerHTML = ""
  for (let i = 0; i < courses.length; i++) {
    let produit = mesCourses[i]

    let li = document.createElement("li")

    li.innerHTML = "nom : " + produit.nom + " - prix : " + produit.prix
    liste.appendChild(li)
    ajouter_supprimer()
  }
}
