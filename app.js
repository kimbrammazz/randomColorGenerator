const hexCharacters = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

const getCharacter = (index) => {
	return hexCharacters[index];
};

const generateJustOneColor = () => {
	let hexColorRep = "#";
	for (let index = 0; index < 6; index++) {
		let randomIndex = Math.floor(Math.random() * hexCharacters.length);
		hexColorRep += getCharacter(randomIndex);
	}
	return hexColorRep;
};

//console.log(generateJustOneColor());

const button = document.querySelector("#change");
const spanText = document.querySelector("#background");

button.addEventListener("click", (e) => {
	const newColor = generateJustOneColor();
	spanText.textContent = newColor;
	document.body.style.background = newColor;
});
