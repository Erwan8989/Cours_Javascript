// 👾☠️🤖

// getHP
// Returns the number of hearts

// getATK
// Return the number

// It's include concept of Classes, Inheritance and Polymorphisme

class Character {
  constructor(name, hp, atk) {
    (this.name = name), (this.hp = hp), (this.atk = atk);
  }

  getHP() {
    const div = document.createElement("div");
    for (let i = 0; i < this.hp; i++)
      div.appendChild(document.createTextNode("❤️"));
    return div;
  }

  getATK() {
    const div = document.createElement("div");
    for (let i = 0; i < this.atk; i++)
      div.appendChild(document.createTextNode("🗡"));
    return div;
  }

  getStats() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(`NAME : ${this.name}`));
    div.appendChild(this.getHP());
    div.appendChild(this.getATK());
    // div.appendChild(document.createTextNode(`HP : ${this.hp}`));
    // div.appendChild(document.createTextNode(`ATK : ${this.atk}`));
    div.appendChild(document.createElement("hr"));
    div.addEventListener("click", this.attack);
    return div;
  }

  attack() {}
}

// Inheritance

class Robot extends Character {
  constructor() {
    super("🤖", 5, 5); // Constructeur de la classe étendu
  }

  attack() {
    alert("I will destroy humanity.");
  }
}

class Pirate extends Character {
  constructor() {
    super("☠️", 10, 4);
  }

  attack() {
    alert("Unleash the power of the sea.");
  }
}

class Alien extends Character {
  constructor() {
    super("👾", 3, 9);
  }

  attack() {
    alert("ND7_S?hubd.");
  }
}

const BG = document.getElementById("BattleGround");

const Characters = [];
Characters.push(new Pirate());
Characters.push(new Alien());
Characters.push(new Robot());
Characters.push(new Robot());

Characters.forEach((element) => BG.appendChild(element.getStats()));

// BG.appendChild(pirate.getStats());
