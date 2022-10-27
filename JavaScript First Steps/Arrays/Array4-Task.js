// Arrays 4
const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here

birds.splice(birds.indexOf("Eagles"), 1);

let eBirds = [];

for (bird of birds) {
   if (bird.startsWith("E")) {
      eBirds.push(bird)
   } else {}
}

// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);