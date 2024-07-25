function hideElements() {
	const elements = document.querySelectorAll('._a9z6._a9za');
	elements.forEach(element => {
			element.style.display = 'none';
	});
}

window.addEventListener('load', hideElements);


