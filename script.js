const btnElement = document.getElementById('flipColourBtn');
const currentColourElement = document.getElementById('current-colour');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue() {
    const randomIndexPos = Math.floor( Math.random() * hexValues.length );

    const randomHexValue = hexValues[randomIndexPos];

    return randomHexValue;
}

function getRandomHexString(stringLength) {
    let colourString = '';

    for(let i = 0; i < stringLength; i++)
        colourString += getRandomHexValue();
    
    return  colourString;
}

btnElement.addEventListener('click', () => {
    const randomString = '#' + getRandomHexString(6);

    document.body.style.setProperty('background-color', randomString);

    currentColourElement.textContent = randomString;
})
