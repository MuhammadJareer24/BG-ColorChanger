
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
//   console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    
    if (e.target.id === 'darkgrey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'seagreen') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lightblue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'goldenrod') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'indianred') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
