const mode = document.getElementById('mode');
const rainbowBtn = document.querySelector('.btn--rainbow');
const darkBtn = document.querySelector('.btn--dark');
const lightBtn = document.querySelector('.btn--light');

rainbowBtn.addEventListener('click', () => {
	mode.classList.forEach((c) => {
		mode.classList.remove(c);
	});
	mode.classList.toggle('rainbow');
});
darkBtn.addEventListener('click', () => {
	mode.classList.forEach((c) => {
		mode.classList.remove(c);
	});
	mode.classList.toggle('dark');
});
lightBtn.addEventListener('click', () => {
	mode.classList.forEach((c) => {
		mode.classList.remove(c);
	});
	mode.classList.toggle('light');
});

const infoBtn = document.getElementById('who-am-i');
const info = document.querySelector('.info');
infoBtn.addEventListener('click', () => {
	info.classList.toggle('hidden');
	console.log('click');
});

const photoList = [
	'20220410_141747.jpg',
	'1648734634714-7.jpg',
	'1648816706214.jpg',
];

const mainPhoto = document.querySelector('.main-photo');
mainPhoto.addEventListener('click', () => {
	mainPhoto.src = photoList[parseInt(Math.random() * 3)];
});
