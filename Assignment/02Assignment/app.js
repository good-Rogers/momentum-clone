const body = document.querySelector('body');

function updateSize() {
  const windowWidth = window.innerWidth;
  body.classList.remove('bodycolor', 'bodycolor1', 'bodycolor2');

  if (windowWidth > 1536) {
    body.classList.add('bodycolor1');
  } else if (windowWidth > 1024) {
    body.classList.add('bodycolor2');
  } else {
    body.classList.add('bodycolor');
  }
}

window.addEventListener('resize', updateSize);
window.addEventListener('load', updateSize);
