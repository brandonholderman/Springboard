let memeForm = document.querySelector('#meme-form');
let imageURL = document.querySelector('#image-url');
let topText = document.querySelector('#top-text');
let bottomText = document.querySelector('#bottom-text');
let colorText = document.querySelector('#color-text');
let newMemeBtn = document.querySelector('#add-meme');

let memeContainer = document.querySelector('#meme-container');

let enteredImageURL = '';
let enteredTopText = '';
let enteredBottomText = '';
let enteredTextColor = '';

let memeIndex = 0;

let createMeme = () => {
    let memeCanvas = document.createElement('canvas');
    let deleteMeme = document.createElement('button');
    let context = memeCanvas.getContext('2d');
    let memeImage = new Image()

    memeImage.onload = () => {
        memeCanvas.width = memeImage.width;
        memeCanvas.height = memeImage.height; 

        context.drawImage(memeImage, 0, 0);
        memeCanvas.setAttribute("data-meme-id", memeIndex.toString());
        memeCanvas.className = 'meme';
        memeCanvas.style.margin = '1em';
        context.font = '40px Tahoma';
        context.textAlign = 'center';
        // context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.fillStyle = enteredTextColor;
        context.fillText(enteredTopText, memeCanvas.width / 2, 40);
        context.fillText(enteredBottomText, memeCanvas.width / 2, memeCanvas.height - 20);
        deleteMeme.textContent = 'Delete';
    
        memeContainer.appendChild(memeCanvas);
        memeContainer.appendChild(deleteMeme);
        memeIndex++
    }

    memeImage.src = enteredImageURL;
};


memeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let imageFromInput = imageURL.value;
    let topTextFromInput = topText.value;
    let bottomTextFromInput = bottomText.value;
    let colorTextFromInput = colorText.value;
    
    enteredImageURL = imageFromInput;
    enteredTopText = topTextFromInput;
    enteredBottomText = bottomTextFromInput;
    enteredTextColor = colorTextFromInput;
    
    // imageURL.value = '';
    // topText.value = '';
    // bottomText.value = '';
    // colorText.value = '';

    createMeme();
});

memeContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'button') {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains('meme')) {
        e.target.remove();
    }
});

// memeContainer.addEventListener('dblclick', (e) => {
//     if (e.target.classList.contains('meme')) {
//         e.target.remove();
//     }

//     if (e.target.tagName === 'button') {
//         e.target.parentElement.remove();
//     }
// });


// memeContainer.addEventListener('click', (e) => {
//     if (e.target.closest('#meme-container')) {
//         document.querySelector('canvas').remove();
//         document.querySelector('#meme-container button').remove();
//     }
// });