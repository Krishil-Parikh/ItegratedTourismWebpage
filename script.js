// Event Listener for 'Explore' button
const exploreButton = document.getElementById('exploreButton');

exploreButton.addEventListener('mouseenter', () => {
  exploreButton.style.color = 'yellow';
  exploreButton.style.borderColor = 'yellow';
});

exploreButton.addEventListener('mouseleave', () => {
  exploreButton.style.color = 'white';
  exploreButton.style.borderColor = 'white';
});

exploreButton.addEventListener('click', () => {
  window.location.href = 'citiesAppearance.html'; // Redirects to the next page
});
