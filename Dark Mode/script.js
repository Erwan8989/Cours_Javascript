let switch1 = document.querySelector(".dos_switch")
let cercle = document.querySelector(".cercle_switch")
let body = document.querySelector(".body1")

switch1.addEventListener("click", function () {

  if (switch1.classList == "dos_switch") {
    switch1.classList.add("dos_switch2")
    switch1.classList.remove("dos_switch")

    cercle.classList.add("cercle_switch2")
    cercle.classList.remove("cercle_switch")

    body.classList.add("dark")
    body.classList.remove("light")
  } else {
    switch1.classList.add("dos_switch")
    switch1.classList.remove("dos_switch2")

    cercle.classList.add("cercle_switch")
    cercle.classList.remove("cercle_switch2")

    body.classList.add("light")
    body.classList.remove("dark")
  }


})
