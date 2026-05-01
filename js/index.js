const title = document.querySelector('.title')
const text = 'Happy 4th Monthsary, Istriku'.split('')

// Hitung lebar text
const tempSpan = document.createElement('span')
tempSpan.style.position = 'absolute'
tempSpan.style.visibility = 'hidden'
tempSpan.style.whiteSpace = 'nowrap'
tempSpan.textContent = text.join('')
document.body.appendChild(tempSpan)
const textWidth = tempSpan.offsetWidth
document.body.removeChild(tempSpan)

// **FLEXBOX CENTERING - PAKSA CENTER**
title.style.cssText = `
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  max-width: ${Math.min(window.innerWidth * 0.95, textWidth + 60)}px !important;
  margin: 0 auto !important;
  font-size: ${Math.min(36, window.innerWidth * 0.07)}px !important;
  line-height: 1.2 !important;
  position: relative !important;
  left: 0 !important;
  transform: none !important;
  text-align: center !important;
`

// Animasi letters
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px; display: inline-block;'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 5;
  element.style.animationDelay = `${randomDelay}s`;
  element.style.display = 'inline-block'; // Pastikan inline-block
});
