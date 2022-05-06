const allKeys = document.querySelectorAll('.key');
const textArea = document.querySelector('.texarr');
const small = document.querySelectorAll('.small');
const big = document.querySelectorAll('.big');
const caps = document.querySelectorAll('.caps');
const smallCaps = document.querySelectorAll('.smallcaps');
const keyCaspLock = document.querySelector('.CapsLock');
const allRu = document.querySelectorAll('.ru-lang');
const allEn = document.querySelectorAll('.en-lang');
let lang = 'en';
let keysPressed = [];

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
  allKeys[i].addEventListener('mousedown', () => {
    allKeys[i].classList.add('is-active');
  });
  allKeys[i].addEventListener('mouseup', () => {
    allKeys[i].classList.remove('is-active');
  });
}
document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab' || event.code === 'AltLeft') {
    event.preventDefault();
  }
  keysPressed.push(event.code);
  if (keysPressed.includes('ControlLeft') && event.code === 'AltLeft') {
    if (lang === 'en') {
      for (let i = 0; i < allRu.length; i += 1) {
        allRu[i].style.display = 'block';
        allEn[i].style.display = 'none';
      }
      lang = 'ru';
    } else {
      for (let i = 0; i < allEn.length; i += 1) {
        allRu[i].style.display = 'none';
        allEn[i].style.display = 'block';
      }
      lang = 'en';
    }
  }
  if (event.code === 'CapsLock') {
    if (keyCaspLock.classList.contains('is-active')) {
      keyCaspLock.classList.remove('is-active');
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'block';
        big[i].style.display = 'none';
        caps[i].style.display = 'none';
        smallCaps[i].style.display = 'none';
      }
    } else {
      keyCaspLock.classList.add('is-active');
      for (let i = 0; i < small.length; i += 1) {
        small[i].style.display = 'none';
        big[i].style.display = 'none';
        caps[i].style.display = 'block';
        smallCaps[i].style.display = 'none';
      }
    }
  } else document.querySelector(`.${event.code}`).classList.add('is-active');

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
  keysPressed = [];
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
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    if (lang === 'en') {
      for (let i = 0; i < allRu.length; i += 1) {
        allRu[i].style.display = 'none';
        allEn[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < allEn.length; i += 1) {
        allRu[i].style.display = 'block';
        allEn[i].style.display = 'none';
      }
    }
  }
}
window.addEventListener('load', getLocalStorage);
