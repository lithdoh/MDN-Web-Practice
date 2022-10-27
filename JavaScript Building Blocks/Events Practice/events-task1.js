// Add your code here
canvas.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === "w") {
        y -= 5;
    } else if (keyName === "a") {
        x -= 5;
    } else if (keyName === "s") {
        y += 5;
    } else if (keyName === "d") {
        x += 5;
    }

    drawCircle(x, y, size);
});
    
// Add your code here
canvas.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === "w") {
        y -= 5;
    } else if (keyName === "a") {
        x -= 5;
    } else if (keyName === "s") {
        y += 5;
    } else if (keyName === "d") {
        x += 5;
    }

    drawCircle(x, y, size);
});
    