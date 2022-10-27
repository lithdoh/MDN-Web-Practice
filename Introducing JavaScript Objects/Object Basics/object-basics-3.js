const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  }
}

const cat2 = {
    name : 'Mikey',
    breed : 'Tabby',
    color : 'grey',
    greeting: function() {
      console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
  }

cat.greeting();
cat2.greeting();

const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
};

const cat2 = new Cat("Bethilda", "Tabby", "Grey");
console.log(cat);
console.log(cat2.greeting());