const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5']
// let newArray = [];
// for (const img of imgArray) {
//     newArray.push("images/" + img);
// }

// function correctName(file) {
//     return "images/" + file;
// }
// imgArray.map(correctName)


/* Declaring the alternative text for each image file */
const altTexts = {
    pic1: "Closeup of a human eye",
    pic2: "Sand formation from above",
    pic3: "Blurry image of white and purple flowers",
    pic4: "A worn out replica of ancient egyptian artwork",
    pic5: "Closeup of a brown moth on a green leaf", 
}

/* Looping through images */
// for (const img of imgArray) {
//     const newImage = document.createElement('img');
//     const currentIndex = imgArray.indexOf(img);
//     newImage.setAttribute('src', imgArray[currentIndex]);
//     // const currentSrc = btn.getAttribute('src');
//     newImage.addEventListener('click', (e) => {
//         displayedImage.setAttribute('src', e.target.getAttribute('src'));
//     });
//     newImage.setAttribute('alt', `altTexts.pic${currentIndex}`);
//     // const currentAlt = btn.getAttribute('alt');
//     newImage.addEventListener('click', (e) => {
//         displayedImage.setAttribute('alt', e.target.getAttribute('src'));
//     })
//     thumbBar.appendChild(newImage);
// }

// for (const img of imgArray) {
//     const newImage = document.createElement('img');
//     const currentIndex = imgArray.indexOf(img);
//     newImage.setAttribute('src', imgArray[currentIndex]);
//     newImage.setAttribute('alt', altTexts.pic`${currentIndex}`);
//     thumbBar.appendChild(newImage);
// }

// for (const img of imgArray) {
//     const newImage = document.createElement('img');
//     newImage.setAttribute('src', `images/${img}`);
//     newImage.setAttribute('alt', altTexts[img]);
//     thumbBar.appendChild(newImage);
//     newImage.addEventListener('click', () => {
//         displayedImage.setAttribute('src', newImage.getAttribute('src'))
//         displayedImage.setAttribute('alt', newImage.getAttribute('alt'))
//     })
// }

for (const img of imgArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}.jpg`);
    newImage.setAttribute('alt', altTexts[img]);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (e) => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
});

// for (const img of imgArray) {
//     const newImage = document.createElement('img');

//     newImage.setAttribute('src', imgArray[imgArray.indexOf(img)]);

//     newImage.setAttribute('alt', `altTexts.pic${imgArray.indexOf(img)}`);

//     thumbBar.appendChild(newImage);
// }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});