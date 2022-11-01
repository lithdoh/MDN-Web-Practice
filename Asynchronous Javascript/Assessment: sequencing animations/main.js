const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// // Using eventListeners
// alice1.animate(aliceTumbling, aliceTiming).addEventListener("finish", 
//     () => alice2.animate(aliceTumbling, aliceTiming).addEventListener("finish", 
//         () => {alice3.animate(aliceTumbling, aliceTiming)}));

// // "Callback Hell" but with "then()" calls
// alice1.animate(aliceTumbling, aliceTiming).finished.then(
//     () => alice2.animate(aliceTumbling, aliceTiming).finished.then(
//         () => alice3.animate(aliceTumbling, aliceTiming)));

// // Promise chaining
// alice1.animate(aliceTumbling, aliceTiming).finished
//     .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//     .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
//     .catch(error => console.error(`Error Animating Alices: ${error}`))

// Async & Await
async function animateAll() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming).finished;
        await alice2.animate(aliceTumbling, aliceTiming).finished;
        console.log(alice3.animate(aliceTumbling, aliceTiming).finished);
    } 
    catch (error) {
        console.error(`Error Animating Alices: ${error}`);
    }
}

animateAll()



/* The following works, but all functions must be asynchronous and every call must have await, except "doAll()"

async function step1() { 
    await alice1.animate(aliceTumbling, aliceTiming).finished;
}
async function step2() {
    await alice2.animate(aliceTumbling, aliceTiming).finished;
}
async function step3() {
    await alice3.animate(aliceTumbling, aliceTiming).finished;
}

async function doAll() {
    await step1()
    await step2()
    await step3()
}

doAll()
*/
