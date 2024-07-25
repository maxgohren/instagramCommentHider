document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-button');
  toggleButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleElements
      });
    });
  });
});

// Function to toggle the visibility of elements with the specified class
function toggleElements() {
  const elements = document.querySelectorAll('._a9z6._a9za');
  elements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  });
}

