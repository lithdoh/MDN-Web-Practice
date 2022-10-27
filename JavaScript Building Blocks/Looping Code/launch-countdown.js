let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while( i >= 0) {
	if (i === 0) {
		const para = document.createElement('p');
		para.textContent = "Blast Off!";
		output.appendChild(para);
	} else {
		const para = document.createElement('p');
		para.textContent = "Countdown " + [i];
		output.appendChild(para);
	}
	i--;
};