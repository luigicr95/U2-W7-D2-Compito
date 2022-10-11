class Person {
  constructor(name, age) {
    this.nome = name;
    this.età = age;
  }
  compareAge(secondperson) {
    if (this.età > secondperson.età) {
      console.log(`${this.nome} è più grande di ${secondperson.nome}`);
    } else {
      console.log(`${secondperson.nome} è più grande di ${this.nome}`);
    }
  }
}

let p1 = new Person("Luigi", 26);
let p2 = new Person("Umberto", 25);
let p3 = new Person("Andrea", 24);

p1.compareAge(p2);
p2.compareAge(p3);
p3.compareAge(p1);
