const allKeys = document.querySelectorAll('.key');
const textArea = document.querySelector('.texarr');
const small = document.querySelectorAll('.small');
const big = document.querySelectorAll('.big');
const caps = document.querySelectorAll('.caps');
const smallCaps = document.querySelectorAll('.smallcaps');
// const keyCaspLock = document.querySelector('.CapsLock');

for (let i = 0; i < allKeys.length; i += 1) {
  allKeys[i].addEventListener('click', () => {
    if (allKeys[i].innerText === 'Backspace') {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (allKeys[i].innerText === 'Enter') {
      textArea.value += '\n';
    } else if (allKeys[i].innerText === 'Tab') {
      textArea.value += '     ';
    } else if (allKeys[i].innerText === 'Shift' || allKeys[i].innerText === 'Caps Lock') {
      textArea.value += '';
    } else textArea.value += allKeys[i].innerText;
  });
}
document.addEventListener('keydown', (event) => {
  document.querySelector(`.${event.code}`).classList.add('is-active');
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (document.querySelector('.CapsLock').classList.contains('is-active')) {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'none';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'block';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'none';
      }
    }
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') {
    document.querySelector(`.${event.code}`).classList.remove('is-active');
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (document.querySelector('.CapsLock').classList.contains('is-active')) {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'none';
        caps[i].style.display = 'block';
        smallCaps[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'block';
        big[i].style.display = 'none';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'none';
      }
    }
  }
});
// function toggle() {
//   if (small[0].style.display !== 'none' || big[0].style.display !== 'none') {
//     for (let i = 0; i < small.length; i += 1) {
//       small[i].style.display = 'none';
//       big[i].style.display = 'none';
//       caps[i].style.display = 'block';
//       smallCaps[i].style.display = 'none';
//     }
//   } else {
//     for (let i = 0; i < small.length; i += 1) {
//       small[i].style.display = 'block';
//       big[i].style.display = 'none';
//       caps[i].style.display = 'none';
//       smallCaps[i].style.display = 'none';
//     }
//   }
// }
// keyCaspLock.addEventListener('click', toggle);
