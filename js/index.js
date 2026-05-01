const title = document.querySelector('.title')
const text = 'Happy 4th Monthsary, Istriku'.split('')

// Hitung lebar text
const tempSpan = document.createElement('span')
tempSpan.style.position = 'absolute'
tempSpan.style.visibility = 'hidden'
tempSpan.style.whiteSpace = 'nowrap'
tempSpan.style.fontSize = 'inherit' // Ambil font-size dari parent
tempSpan.textContent = text.join('')
document.body.appendChild(tempSpan)
const textWidth = tempSpan.offsetWidth
document.body.removeChild(tempSpan)

// Set width dan font-size responsive
const containerWidth = Math.min(window.innerWidth * 0.95, textWidth + 60)
title.style.width = `${containerWidth}px`
title.style.fontSize = `${Math.min(36, window.innerWidth * 0.07)}px`
title.style.lineHeight = '1.2'

// **CENTERING FIX**
title.style.position = 'relative'
title.style.left = '50%'
title.style.transform = 'translateX(-50%)'
title.style.margin = '0 auto'
title.style.textAlign = 'center'

// Lanjutkan animasi
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
