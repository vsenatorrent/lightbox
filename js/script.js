function openModal() {
  document.querySelector('.modalWrapper').style.display = 'block';
}

function closeModal() {
  document.querySelector('.modalWrapper').style.display = 'none';
}


document.querySelector('.close').onclick = closeModal;

var content = document.querySelectorAll('.content');
for (var i = 0; i < content.length; i++) {
  content[i].addEventListener('click', openModal);
  //  content[i].addEventListener('click', currentSlide);
}

var slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function prevnext(n) {
  showSlides(slideIndex += n)
}

function showSlides(n) {
  var modalContent = document.querySelectorAll('.modalContent');
  
  if (n > modalContent.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = modalContent.length;
  }
  
  for (var i = 0; i < modalContent.length; i++) {
    modalContent[i].style.display = 'none';
  }
  
  modalContent[slideIndex - 1].style.display = 'block';
}


