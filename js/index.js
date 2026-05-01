const title = document.querySelector('.title')
const text = 'Happy 4th Monthsary, Istriku'.split('')

// Hitung lebar text terlebih dahulu
const tempSpan = document.createElement('span')
tempSpan.style.position = 'absolute'
tempSpan.style.visibility = 'hidden'
tempSpan.style.whiteSpace = 'nowrap'
tempSpan.textContent = text.join('')
document.body.appendChild(tempSpan)
const textWidth = tempSpan.offsetWidth
document.body.removeChild(tempSpan)

title.style.width = `${Math.max(textWidth + 50, window.innerWidth * 0.9)}px`
title.style.fontSize = `${Math.min(32, window.innerWidth * 0.06)}px`

// Lanjutkan animasi seperti biasa
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 5;
  element.style.animationDelay = `${randomDelay}s`;
});
