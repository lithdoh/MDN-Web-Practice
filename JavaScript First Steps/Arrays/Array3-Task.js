let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here

myArray.pop()
myArray.push("Kage", "Henry")

let nameStrings = [];

for (let name of myArray) {
   const nameIndex = myArray.indexOf(name);
   name += ` (${nameIndex})`;
   nameStrings += name;
}

myString = nameStrings.split(" ");

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    


// My Final Version. Gets the same result as the Marking Guide:

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here

myArray.pop()
myArray.push("Kage", "Henry")

let nameStrings = [];

for (let name of myArray) {
   const nameIndex = myArray.indexOf(name);
   name += ` (${nameIndex})`;
   nameStrings.push(name);
}

const myString = nameStrings.join(" - ");


// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    
    