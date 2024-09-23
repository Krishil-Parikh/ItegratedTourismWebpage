document.addEventListener('DOMContentLoaded', () => {
    const imageColumns = document.querySelectorAll('.image-column');
  
    // Function to slide in images with a delay
    imageColumns.forEach((column, index) => {
      setTimeout(() => {
        column.style.opacity = '1';
        column.style.transform = 'translateY(0)';
      }, index * 100); // 1-second delay between each column
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
  