function Cat(name, breed, color) {
    this.name = name,
    this.breed = breed,
    this.color = color,
    this.greeting = function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }
   
  const cat = new Cat("Oswald", "American House Cat", "grey");
  const cat2 = new Cat("Rob", "Bengal", "Grey/Brown");

cat.greeting();
cat2.greeting();
