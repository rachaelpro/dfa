document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
  
    const images = Array.from(document.querySelectorAll(".collage-item img"));
    let currentIndex = 0;
  
    function openModal(index) {
      currentIndex = index;
      modal.style.display = "block";
      modalImg.src = images[currentIndex].src;
      captionText.textContent = images[currentIndex].alt;
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      openModal(currentIndex);
    }
  
    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      openModal(currentIndex);
    }
  
    images.forEach((img, index) => {
      img.addEventListener("click", () => {
        openModal(index);
      });
    });
  
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
  
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      showNext();
    };
  
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      showPrev();
    };
  
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  });

const floatingImage = document.getElementById('floatingImage');
const targets = document.querySelectorAll('.hover-target');

targets.forEach(target => {
  target.addEventListener('mousemove', (e) => {
    floatingImage.style.display = 'block';
    floatingImage.style.left = `${e.pageX}px`;
    floatingImage.style.top = `${e.pageY}px`;
  });

  target.addEventListener('mouseleave', () => {
    floatingImage.style.display = 'none';
  });
});

const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

const hoverBackImage = document.getElementById('hoverBackImage');
const hoverNextImage = document.getElementById('hoverNextImage');

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showHoverImage(e, image, side = 'right') {
    const offset = 10;
    const imageWidth = image.offsetWidth;
  
    let x = e.pageX + offset;
    if (side === 'left') {
      x = e.pageX - imageWidth - offset;
    }
  
    image.style.left = x + 'px';
    image.style.top = e.pageY + offset + 'px';
    image.style.display = 'block';
  }
  

function hideHoverImage(image) {
  image.style.display = 'none';
}

prevButton.addEventListener('mousemove', (e) => showHoverImage(e, hoverBackImage, 'right'));
prevButton.addEventListener('mouseleave', () => hideHoverImage(hoverBackImage));

nextButton.addEventListener('mousemove', (e) => showHoverImage(e, hoverNextImage, 'left'));
nextButton.addEventListener('mouseleave', () => hideHoverImage(hoverNextImage));

function trackMouse(e, imageElement, offsetX = 0, offsetY = 0) {
    imageElement.style.display = 'block';
    imageElement.style.left = `${e.pageX + offsetX}px`;
    imageElement.style.top = `${e.pageY + offsetY}px`;
  }
  
  function hideImage(imageElement) {
    imageElement.style.display = 'none';
  }

  prevArrow.addEventListener('mousemove', (e) => trackMouse(e, hoverBackImage));
  prevArrow.addEventListener('mouseleave', () => hideImage(hoverBackImage));
  
  nextArrow.addEventListener('mousemove', (e) => trackMouse(e, hoverNextImage, -120));
  nextArrow.addEventListener('mouseleave', () => hideImage(hoverNextImage));
  