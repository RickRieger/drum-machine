const h1 = document.querySelector('h1');
const metronome = document.querySelector('#metronome');
const kickCheckBox = document.querySelector('#kick');
const snareCheckBox = document.querySelector('#snare');
const highHatCheckBox = document.querySelector('#highHat');


const sax1CheckBox = document.querySelector('#sax1');
const sax2CheckBox = document.querySelector('#sax2');
const sax3CheckBox = document.querySelector('#sax3');
const flute1CheckBox = document.querySelector('#flute1');
const flute2CheckBox = document.querySelector('#flute2');
const turkishDrumCheckBox = document.querySelector('#turkishDrum');


const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickSound = new Audio('sounds/kick.mp3');
const snareSound = new Audio('sounds/snare.mp3');
const highHatSound = new Audio('sounds/hiHat.mp3');
const sax1Sound = new Audio('sounds/sax1.mp3');
const sax2Sound = new Audio('sounds/sax2.mp3');
const sax3Sound = new Audio('sounds/sax3.mp3');
const flute1Sound = new Audio('sounds/flute1.mp3');
const flute2Sound = new Audio('sounds/flute2.mp3');
const turkishDrumSound = new Audio('sounds/turkishDrum.mp3');


const kickInput = document.querySelector('#kick-drum-timing');
const snareInput = document.querySelector('#snare-drum-timing');
const highHatInput = document.querySelector('#high-hat-timing');


const sax1Input = document.querySelector('#sax1-timing');
const sax2Input = document.querySelector('#sax2-timing');
const sax3Input = document.querySelector('#sax3-timing');
const flute1Input = document.querySelector('#flute1-timing');
const flute2Input = document.querySelector('#flute2-timing');
const turkishDrumInput = document.querySelector('#turkishDrum-timing');

let count = 0;

function update() {

    // This counting allows for syncopated events to occur.
    count += .25;
    console.log(count);
    if (count === 8.75){
        count = .75;
    };

    // input values => arrays of strings => arrays of numbers.
    let snareStringArray = snareInput.value.split(',');
    let snareNumArray = snareStringArray.map(Number);

    let highHatStringArray = highHatInput.value.split(',');
    let highHatNumArray = highHatStringArray.map(Number);

    let kickStringArray = kickInput.value.split(',');
    let kickNumArray = kickStringArray.map(Number);

    let sax1StringArray = sax1Input.value.split(',');
    let sax1NumArray = sax1StringArray.map(Number);

    let sax2StringArray = sax2Input.value.split(',');
    let sax2NumArray = sax2StringArray.map(Number);

    let sax3StringArray = sax3Input.value.split(',');
    let sax3NumArray = sax3StringArray.map(Number);

    let flute1StringArray = flute1Input.value.split(',');
    let flute1NumArray = flute1StringArray.map(Number);

    let flute2StringArray = flute2Input.value.split(',');
    let flute2NumArray = flute2StringArray.map(Number);

    let turkishDrumStringArray = turkishDrumInput.value.split(',');
    let turkishDrumNumArray = turkishDrumStringArray.map(Number);
   
    // display's the count or "beat" as a integer only.
    if (count === 1 || 
        count === 2 || 
        count === 3 || 
        count === 4 || 
        count === 5 || 
        count === 6 || 
        count === 7 || 
        count === 8){
        h1.innerText = count;
    }

    if (metronome.checked && (count % 1) === 0){
        tick.load();
        tick.play();
    }
    if (metronome.checked && count === 8){
        tock.load();
        tock.play();
    }


    if (kickCheckBox.checked && kickNumArray.includes(count)){
        kickSound.load();
        kickSound.play();
    }
    if (snareCheckBox.checked && snareNumArray.includes(count)){
        snareSound.load();
        snareSound.play();
    }
    if (highHatCheckBox.checked && highHatNumArray.includes(count)){
        highHatSound.load();
        highHatSound.play();
    }
    if (sax1CheckBox.checked && sax1NumArray.includes(count)){
        sax1Sound.load();
        sax1Sound.play();
    }
    if (sax2CheckBox.checked && sax2NumArray.includes(count)){
        sax2Sound.load();
        sax2Sound.play();
    }
    if (sax3CheckBox.checked && sax3NumArray.includes(count)){
        sax3Sound.load();
        sax3Sound.play();
    }
    if (flute1CheckBox.checked && flute1NumArray.includes(count)){
        flute1Sound.load();
        flute1Sound.play();
    }
    if (flute2CheckBox.checked && flute2NumArray.includes(count)){
        flute2Sound.load();
        flute2Sound.play();
    }
    if (turkishDrumCheckBox.checked && turkishDrumNumArray.includes(count)){
        turkishDrumSound.load();
        turkishDrumSound.play();
    }
};

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 150);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
