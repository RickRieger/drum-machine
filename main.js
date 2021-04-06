// Setup 'tick' sound
let count = 0;

const h1 = document.querySelector('h1');
const metronome = document.querySelector('#metronome');
const kickCheckBox = document.querySelector('#kick');
const snareCheckBox = document.querySelector('#snare');
const highHatCheckBox = document.querySelector('#high-hat');
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickSound = new Audio('sounds/kick.mp3');
const snareSound = new Audio('sounds/snare.mp3');
const highHatSound = new Audio('sounds/hiHat.mp3');
const kickInput= document.querySelector('#kick-drum-timing');
const snareInput= document.querySelector('#snare-drum-timing');
const highHatInput= document.querySelector('#high-hat-timing');


// This function is called every 600ms

function update() {
    let snareStringArray = snareInput.value.split(',');
    let snareNumArray = snareStringArray.map(Number);




    console.log(snareNumArray);
    let k = Number(kickInput.value);
    let s = Number(snareInput.value);
   
    // let stringCount = toString(count);
   
    count += .25;

    console.log(count);
    
    if (count === 8.75){
        count = .75;
        
    }
    if (count === 1 || count === 2 || count === 3 || count === 4 || count === 5 || count === 6 || count === 7 || count === 8){
        h1.innerText = count;
    }
    if (metronome.checked && (count % 1) === 0){
        tick.play();
    }
    if (metronome.checked && count === 4){
        tock.play();
    }
    if (k === count && kickCheckBox.checked){
        
        kickSound.play();
    }
    if (snareNumArray.includes(count)){
        snareSound.play();
    }
    // if (h === count && highHatCheckBox.checked){
    //     highHatSound.play();
    // } 
};













// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 400);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
