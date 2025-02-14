
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('HAPPY VALENTINE’S DAY, MAAIKE LUNGS. ').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "I hear and see fate whispering to me to barrel along in the direction where happiness is sure to be engraved when I hold your hand, like I’m running in heaven on earth and enjoying every bequest that is in my path—where true love is the most shining among them, the adhesion that is intertwined between us. We are intertwined like roses that have merely been planted and bloom together as an omen of beatitude that is truly carved on fertile-soil. Starting from when we first met and how our love story began to be nurtured. As I went with, the path right in front of me was the most shining bequest, love came first, so that I managed to hold your hand and take you deep into my heart. A heavenly experience will be created—strong love will be the foundation to build a long journey, even until the end of life. You look so beautiful from your face to your lower-limbs, your pleasant appearance is like a magnet that draws me nearer—attracting me, making my desire so great to forever be in your grasp and embrace. Spending all my time in the heaven on earth next to you, and looking at the beauty and fragrance of your beautiful face at all times. We’ve journeyed a long time together, gone through good and bad things together, and complemented each other’s shortcomings with sincerity. I want to tell you about how much you mean in my life, the unstoppable gratitude and the feeling of happiness that is always there every day; like you are the cure for all my pain. Our undertake that blooms slowly instigates beautiful rose petals and makes me fall in love momentarily. Thus, this is my token of love; Happy Valentine’s Day, Kai. ";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
