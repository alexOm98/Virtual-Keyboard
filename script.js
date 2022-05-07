const allKeys = document.querySelectorAll('.key');
const textArea = document.querySelector('.texarr');
const small = document.querySelectorAll('.small');
const big = document.querySelectorAll('.big');
const caps = document.querySelectorAll('.caps');
const smallCaps = document.querySelectorAll('.smallcaps');
const keyCaspLock = document.querySelector('.CapsLock');
const allRu = document.querySelectorAll('.ru-lang');
const allEn = document.querySelectorAll('.en-lang');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
let lang = 'en';
let keysPressed = [];
const alphabetEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabetRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я', 'ь', 'ъ', 'ы'];

for (let i = 0; i < allKeys.length; i += 1) {
  allKeys[i].addEventListener('click', () => {
    if (allKeys[i].innerText === 'Backspace') {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    } else if (allKeys[i].innerText === 'Enter') {
      textArea.value += '\n';
    } else if (allKeys[i].innerText === 'Tab') {
      textArea.setRangeText(
        '     ',
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
    } else if (allKeys[i].innerText === 'Caps Lock') {
      if (keyCaspLock.classList.contains('is-active')) {
        keyCaspLock.classList.remove('is-active');
        for (let j = 0; j < small.length; j += 1) {
          small[j].style.display = 'block';
          big[j].style.display = 'none';
          caps[j].style.display = 'none';
          smallCaps[j].style.display = 'none';
        }
      } else {
        keyCaspLock.classList.add('is-active');
        for (let j = 0; j < small.length; j += 1) {
          small[j].style.display = 'none';
          big[j].style.display = 'none';
          caps[j].style.display = 'block';
          smallCaps[j].style.display = 'none';
        }
      }
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
  if (event.code === 'Tab') {
    event.preventDefault();
    textArea.setRangeText(
      '     ',
      textArea.selectionStart,
      textArea.selectionStart,
      'end',
    );
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
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
  if (keyCaspLock.classList.contains('is-active') && (alphabetEn.includes(event.key) || alphabetRu.includes(event.key))) {
    if ((shiftLeft.classList.contains('is-active') || shiftRight.classList.contains('is-active')) && event.getModifierState('CapsLock')) {
      event.preventDefault();
      const letterDown = event.key.toLowerCase();
      textArea.setRangeText(
        letterDown,
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
    } else {
      event.preventDefault();
      const letterUp = event.key.toUpperCase();
      textArea.setRangeText(
        letterUp,
        textArea.selectionStart,
        textArea.selectionStart,
        'end',
      );
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
