// function openModal() {
//   document.querySelector('.modalWrapper').style.display = 'block';
// }

// function closeModal() {
//   document.querySelector('.modalWrapper').style.display = 'none';
// }


// document.querySelector('.close').onclick = closeModal;

// var content = document.querySelectorAll('.content');
// for (var i = 0; i < content.length; i++) {
//   content[i].addEventListener('click', openModal);
//   //  content[i].addEventListener('click', currentSlide);
// }

// var slideIndex = 1;

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function prevnext(n) {
//   showSlides(slideIndex += n)
// }

// function showSlides(n) {
//   var modalContent = document.querySelectorAll('.modalContent');
  
//   if (n > modalContent.length) {
//     slideIndex = 1;
//   }
  
//   if (n < 1) {
//     slideIndex = modalContent.length;
//   }
  
//   for (var i = 0; i < modalContent.length; i++) {
//     modalContent[i].style.display = 'none';
//   }
  
//   modalContent[slideIndex - 1].style.display = 'block';
// }


let currentImageIndexGlobal = null;
const closeModal = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
closeModal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
})
let maxIndex = 0;

const previewImages = document.querySelectorAll('.preview__image');
const previewImagesArray = Array.from(previewImages);

// const showCurrentImage = (event) => {
//     const currentImageIndex = event.target.getAttribute('data-index'); 
//     const currentImageSrc = previewImagesArray[currentImageIndex].src;
//     currentImageIndexGlobal = currentImageIndex;
//     console.log(currentImageIndexGlobal)
//     modalImage.src = currentImageSrc;
//     modal.classList.remove('hidden');
// }

const showCurrentImage = (action, event) => {
    if(action === null) {
        currentImageIndexGlobal = event.target.getAttribute('data-index');
    } else {
        currentImageIndexGlobal = action === 'next' ? ++currentImageIndexGlobal : action === 'prev' ? --currentImageIndexGlobal : currentImageIndexGlobal;
    }
    console.log(currentImageIndexGlobal);
    if(currentImageIndexGlobal > maxIndex)
        currentImageIndexGlobal = 0;
    if(currentImageIndexGlobal < 0)
        currentImageIndexGlobal = maxIndex;
    modalImage.src = previewImagesArray[currentImageIndexGlobal].src;
    modal.classList.remove('hidden');
}

previewImagesArray.forEach((previewImage) => {
    const dataIndex = previewImage.getAttribute('data-index');
    maxIndex = dataIndex > maxIndex ? dataIndex : maxIndex;
    previewImage.addEventListener('click', showCurrentImage.bind(null, null))
})

const nextButton = document.querySelector('.modal__next');

// const showNextImage = () => {
//     if(currentImageIndexGlobal > 3) {
//         currentImageIndexGlobal = 0;
//     }
//     currentImageIndexGlobal++;
//     const currentImageSrc = previewImagesArray[currentImageIndexGlobal].src;
//     console.log(currentImageIndexGlobal)
//     modalImage.src = currentImageSrc;
// };

nextButton.addEventListener('click', showCurrentImage.bind(null, 'next'));

const prevButton = document.querySelector('.modal__prev');

// const showPrevImage = () => {
//     if(currentImageIndexGlobal == 0) {
//         currentImageIndexGlobal = 3;
//     }
//     currentImageIndexGlobal--;
//     const currentImageSrc = previewImagesArray[currentImageIndexGlobal].src;
//     console.log(currentImageIndexGlobal)
//     modalImage.src = currentImageSrc;
// }

prevButton.addEventListener('click', showCurrentImage.bind(null, 'prev'));
