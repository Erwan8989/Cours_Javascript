let saisie_nom = document.querySelector(".nom")
let saisie_prix = document.querySelector(".prix")
let btn = document.querySelector(".monBouton")
let list = document.querySelector(".maListe")

let courses = []

btn.addEventListener("click", function () {
  AjouterElement()
})

function AjouterElement() {
  let produit = {
    nom: saisie_nom.value,
    prix: saisie_prix.value
  }

  courses.push(produit)
  RefreshCourses(courses)
}

function RefreshCourses(mesCourses) {
  list.innerHTML = ""
  for (let i = 0; i < mesCourses.length; i++) {
    let monLi = document.createElement("li")
    monLi.innerHTML = "Produit : " + mesCourses[i].nom + " - Prix : " + mesCourses[i].prix + "€"
    list.appendChild(monLi)

    let suppr_btn = document.createElement("button")
    suppr_btn.innerHTML = "SUPPRIMER"
    suppr_btn.addEventListener("click", function () {
      RetirerElement(mesCourses, i)
    })
    monLi.appendChild(suppr_btn)
  }
}

function RetirerElement(mesCourses, index) {
  mesCourses.splice(i, 1)
  RefreshCourses(mesCourses)
}
