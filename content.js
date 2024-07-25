let elementsHidden = false;

function hideElements() {
	const elements = document.querySelectorAll('_a9z6 _a9za');
	elements.forEach(element => {
			element.style.display = 'none';
	});
	elementsHidden = true;
}

function showElements() {
  const elements = document.querySelectorAll('_a9z6 _a9za');
  elements.forEach(element => {
    element.style.display = '';
  });
  elementsHidden = false;
}

function toggleElements() {
  if (elementsHidden) {
    showElements();
  } else {
    hideElements();
  }
}

window.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'b') {
    toggleElements();
  }
});

// Function to observe for new elements and hide them if they match the specified class
function observeNewElements() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Ensure it's an element node
          if (node.classList.contains('_a9z6') && node.classList.contains('_a9za')) {
            node.style.display = 'none';
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Initially hide the elements when the page loads
window.addEventListener('load', () => {
  hideElements();
  observeNewElements();
});
