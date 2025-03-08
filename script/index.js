const body = document.querySelector('body')
const boxes = document.querySelectorAll('.scale-box.main > .box')
const allKeys = document.querySelectorAll('.scale-box>.box>p')
const templateKeys = document.querySelectorAll('.template>.box')
const note = document.querySelectorAll('.template>.box>p')


// Selecting accidentals
const arrow = document.querySelector('.arrow-container');
const accidentalSpace = document.querySelector('#arrow');
const accidentalContainer = document.querySelector('.box-accidental');
const accidental = document.querySelectorAll('.accidental');
const mainKeys = document.querySelectorAll('.main>.box')
const noteAlphabet = document.querySelectorAll('.main>.box>p');


const dropdown = [
     `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffebeb" d="M17 9.5v-2l-2 .6V5.5h-2v3.2l-2 .6V6.5H9v3.4l-2 .6v2l2-.6v2l-2 .6v2l2-.6v2.6h2v-3.2l2-.6v2.8h2v-3.4l2-.6v-2l-2 .6v-2zm-4 3.2l-2 .6v-2l2-.6z"/></svg>`,
     `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffebeb" d="M8.5 19c4.86-2.74 7-5.09 7-7c0-1.41-.71-3-3-3c-.7 0-1.39.28-2 .67V5h-2m2 10.38v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38"/></svg>`,
     `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffebeb" d="M15.41 10H17V7h-3v1.59l-2 2l-2-2V7H7v3h1.59l2 2l-2 2H7v3h3v-1.59l2-2l2 2V17h3v-3h-1.59l-2-2z"/></svg>`,
     `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffebeb" d="M10 8.75V3.5H8v14l6-2.25v5.25h2v-14zm4 4.5l-4 1.5v-4l4-1.5z"/></svg>`,
     `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffebeb" d="M15.5 9c-.7 0-1.39.28-2 .67V5h-2v4.62c-.46-.38-1.11-.62-2-.62c-.7 0-1.39.28-2 .67V5h-2v14c3-1.68 4.93-3.21 6-4.59V19c4.86-2.74 7-5.09 7-7c0-1.41-.71-3-3-3m-8 6.38v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38m6 0v-3.12c.62-.67 1.45-1.26 2-1.26c.59 0 1 .07 1 1c0 .15-.1 1.3-3 3.38"/></svg>`,
]

function generateDropdown() {
     const createElem = (elem) => document.createElement(elem)

     const boxDropDown = createElem("div")
     boxDropDown.classList.add("box-drop-down")


     const arrowContainer = createElem("div")
     arrowContainer.classList.add("arrow-container")
     const arrowContainerPTag = createElem("p")
     arrowContainerPTag.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="#ffebeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>`
     arrowContainer.appendChild(arrowContainerPTag)




     boxDropDown.appendChild(arrowContainer)

     const boxAccidental = createElem("div")
     boxAccidental.classList.add("box-accidental")


     console.log(arrowContainer)
     arrowContainer.onclick = function() {
          boxAccidental.classList.toggle("hidden")
     }


     dropdown.forEach((image) => {
          const div = createElem("div")
          console.log(div)
          div.innerHTML = image
          boxAccidental.appendChild(div)
     })

     boxDropDown.appendChild(boxAccidental)
     boxAccidental.classList.add("hidden")
     return boxDropDown
}


// Assigning natural semitones to all key
for (let i = 0; i < boxes.length; i++) {

     const box = boxes[i]
     box.appendChild(generateDropdown())




     //let marginRight = '-1em'
     //
     //if (allKeys[i].textContent == 'E' || allKeys[i].textContent == 'B') {
     //     box[i].style.marginRight = marginRight
     //     box[i].style.marginRight = marginRight
     //}
     //console.log('active1'); index.js
}

function deleteRestOfWord(imageName, targetString) {
     const index = imageName.indexOf(targetString);

     if (index !== -1) {
          return imageName.slice(0, index);
     } else {
          return imageName;
     }
}

//arrow.addEventListener('click', () => {
//     accidentalContainer.classList.toggle('box-accidental-hide');
//     arrow.classList.toggle('arrow-container-reverse');
//     accidentalSpace.textContent = '>';
//
//     console.log('active');
//})

//for (let i = 0; i <= accidental.length; i++) {
//
//     let accidentalName = accidental[i].id;
//
//     accidental[i].onclick = () => {
//
//          // Removing the for the accidental to sit in
//          arrow.style.rotate = '0deg'
//          arrow.innerHTML = '';
//
//          // Creating element inside arrow container for the accidentals.
//          const img = document.createElement('img');
//          img.src = `media/images/${accidentalName}`;
//          img.alt = deleteRestOfWord(accidentalName, '.');
//          console.log(img)
//
//          // Appending the Accidental to arrow container
//          arrow.appendChild(img);
//          accidentalContainer.classList.toggle('box-accidental-hide');
//
//
//          console.log(arrow.innerHTML + ' console')
//     }
//}




// CODE FOR SHARP ACCIDENTAL (MOVING A SEMITONE HIGHER)
let sharp = (noteAlphabet) => {

     for (let i = 0; i <= note.length; i++) {

          let key = noteAlphabet.toUpperCase();

          if (note[i].innerText == key) {
               box[i].style.margin = '0em -1em 0em 1em';

               console.log('sharp')
          }
     }
}

// CODE FOR FLAT ACCIDENTAL (MOVING A SEMITONE LOWER)
let flat = (noteAlphabet) => {

     for (let i = 0; i <= note.length; i++) {

          let key = noteAlphabet.toUpperCase();

          if (note[i].innerText == key) {
               box[i].style.margin = '0em 1em 0em -1em';

               console.log('flat')
          }
     }
}

// CODE FOR NATURAL ACCIDENTAL (MOVING TO ORIGINAL)
let natural = (noteAlphabet) => {

     for (let i = 0; i <= note.length; i++) {

          let key = noteAlphabet.toUpperCase();

          if (note[i].innerText == key) {
               box[i].style.margin = '0em 1em 0em 1em';

               console.log('natural')
          }
     }
}
// sharp('c')
// flat('a')
// natural('d')
