let bouton = document.querySelector(".btn")
let texte = document.querySelector(".texte")
let liste = document.querySelector(".liste")

let compteur = 1
bouton.addEventListener("click", function () {
  ajouter()
  ajouter_supprimer()
})

function ajouter() {
  let li = document.createElement("li")

  li.className = ("li" + compteur)
  li.innerHTML = texte.value

  liste.appendChild(li)

  texte.value = ""
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
