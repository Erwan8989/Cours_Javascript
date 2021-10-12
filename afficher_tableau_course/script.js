let liste = document.querySelector(".liste")

let courses = [{
  nom: "tomates",
  prix: 3
}, {
  nom: "courgettes",
  prix: 3
}]



function readCourse(mes_courses) {
  let li = document.createElement("li")


  li.className = ("li")
  li.innerHTML = mes_courses.nom

  liste.appendChild(li)

  for (let i = 0; i < mes_courses.length; i++) {

  }
}

// Correction
readCourse(courses)

let courses = [{
  nom: "Tomates",
  prix: 3
}, {
  nom: "Steaks",
  prix: 3
}, {
  nom: "Pâtes",
  prix: 2
}, {
  nom: "Courgettes",
  prix: 10
}]

let list = document.querySelector(".maListe")

function ReadCourses(mesCourses) {
  for (let i = 0; i < courses.length; i++) {
    let produit = mesCourses[i]

    let monLi = document.createElement("li")
    monLi.innerHTML = "nom : " + produit.nom + " - prix : " + produit.prix
    list.appendChild(monLi)
  }
}

ReadCourses(courses)
