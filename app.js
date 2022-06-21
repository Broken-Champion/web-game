//defining environment variables.
const cube = document.querySelector('.cube');
const radioGroup = document.getElementById('selector');
let currentClass = '';

//function to change sides according to checkd label
function changeSide() {
  const checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  //checking if the face is already shown or not.
  if (currentClass > 0) { 
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
//setting initial side.
changeSide();
//adding event listener to change sides.
radioGroup.addEventListener('change', changeSide,  false);

//a function that captures mouse movement when clicked and moves the .cube accordingly.
function mouseMove(e) {
  e.preventDefault();
  addEventListener('pointerdown', e => {
    let x = e.clientX;
    let y = e.clientY;
    let xDeg = (x / window.innerWidth) * 360;
    let yDeg = (y / window.innerHeight) * 360;
    cube.style.transform = `rotateX(${yDeg}deg) rotateY(${xDeg}deg)`;
  });
return 0;
};
//adding event listener to move the cube.
document.addEventListener('mousemove', mouseMove, false);

