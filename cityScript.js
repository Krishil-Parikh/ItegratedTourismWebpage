document.addEventListener('DOMContentLoaded', () => {
  const imageColumns = document.querySelectorAll('.image-column');
  const heading = document.getElementById('mainHeading');

  // Slide-up transition for the heading with a delay
  setTimeout(() => {
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
  }, 500); // Delay the heading slide-up for 300ms

  // Function to slide in images with a delay
  imageColumns.forEach((column, index) => {
      setTimeout(() => {
          column.style.opacity = '1';
          column.style.transform = 'translateY(0)';
      }, index * 500); // 1-second delay between each column
  });

  // Add hover event listeners for flipping effect (use JS event listeners instead of pure CSS)
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(card => {
      const flipCardInner = card.querySelector('.flip-card-inner');

      card.addEventListener('mouseenter', () => {
          flipCardInner.style.transform = 'rotateY(180deg)';
      });

      card.addEventListener('mouseleave', () => {
          flipCardInner.style.transform = 'rotateY(0deg)';
      });
  });
});
