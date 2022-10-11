let Ol = document.querySelector("ol");
let PaginaCorrente = 0;

class Person {
  constructor(name, cognome) {
    this.name = name;
    this.cognome = cognome;
  }
}

let Parenti = [
  new Person("Luigi", "Crisci"),
  new Person("Angelo", "Crisci"),
  new Person("Nicola", "Crisci"),
  new Person("Mario", "Crisci"),
  new Person("Lorenzo", "Crisci"),
  new Person("Marco", "Crisci"),
];

console.log(Parenti);

class Pagina {
  //Parametri di default, restano questi se non ne do altri
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
  }

  render(container, pagina = 0) {
    container.innerHTML = "";
    // 3 elementi per pagina

    //pagina 0: 0-2 = (3 * 0) => (3 * 0 + 2)
    //pagina 1: 3-5 = (3 * 1) => (3 * 1 + 2)
    //pagina2: 6-8 = (3 * 2) => (3 * 2 + 2)

    // let arrayTagliato = this.items.slice(0, 3) //3 è escluso
    // let arrayTagliato = this.items.slice(3, 6);
    // let arrayTagliato = this.items.slice(6, 9);

    let arrayTagliato = this.items.slice(
      this.pageSize * pagina,
      this.pageSize * pagina + this.pageSize
    );

    console.log(arrayTagliato);
    //metodo per mostrare gli elementi
    for (let parente of /*this.items*/ arrayTagliato /*Cambio da this.items che mi fa vedere tutto l'array, alla versione con slice*/) {
      let li = document.createElement("li");
      li.innerText = parente.name + " " + parente.cognome;
      container.appendChild(li);
    }
  }
}

window.onload = () => {
  avantiPagina();
};

let avantiPagina = () => {
  let pag = new Pagina(Parenti, 3);
  pag.render(Ol, PaginaCorrente);
  PaginaCorrente++;
};
