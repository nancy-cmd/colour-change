//created const variables 
const button = document.querySelector('button');
const body = document.querySelector('body');
const colours = ['blue', 'green', 'red', 'pink', 'cyan', 'yellow', 'purple'];

body.style.backgroundColor = 'burgundy';
//adding an event listener to the button:
button.addEventListener('click', changeBackground);

//created a changebackground function : 
function changeBackground(){
    const colourIndex= parseInt(Math.random()*colours.length)
    body.style.backgroundColor = colours[colourIndex];
}

/*for this project i renforced my knowledge on const variables, arrays and how to select an item using the querySelector method*/ 
//i had to research hot to use the parseInt(), i learned that this function converts or turns its first argument to a string, parses that string and then returns an integer.