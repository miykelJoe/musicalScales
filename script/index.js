const body = document.querySelector('body')
const box = document.querySelectorAll('.scale-box>.box')
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

// Assigning natural semitones to all key
for (let i = 0; i < box.length; i++) {

    let marginRight = '-1em'
    
    if (allKeys[i].textContent == 'E' || allKeys[i].textContent == 'B') {
        box[i].style.marginRight = marginRight
        box[i].style.marginRight = marginRight
    }
    console.log('active1');
}

function deleteRestOfWord(imageName, targetString) {
    const index = imageName.indexOf(targetString);

    if (index !== -1) {
        return imageName.slice(0, index);
    } else {
        return imageName;
    }
}

arrow.addEventListener('click', () => {
    accidentalContainer.classList.toggle('box-accidental-hide');
    arrow.classList.toggle('arrow-container-reverse');
    accidentalSpace.textContent = '>';
    
    console.log('active');
})

for (let i = 0; i <= accidental.length; i++) {

    let accidentalName = accidental[i].id;

    accidental[i].onclick = () => {
        
        // Removing the for the accidental to sit in
        arrow.style.rotate = '0deg'
        arrow.innerHTML = '';

        // Creating element inside arrow container for the accidentals.
        const img = document.createElement('img');
        img.src = `media/images/${accidentalName}`;
        img.alt = deleteRestOfWord(accidentalName, '.');
        console.log(img)

        // Appending the Accidental to arrow container
        arrow.appendChild(img);
        accidentalContainer.classList.toggle('box-accidental-hide');


        console.log(arrow.innerHTML + ' console')
    }
}




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