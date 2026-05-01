
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('For My Precious Wife').split('');
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
            subtitle.innerText = "Aku ga pernah nyangka waktu bisa jalan secepet ini.. and i didn’t expect that i’d spend these past 4 months with u by my side. Aku bersyukur banget atas semua yang kamu kasih ke aku, apapun itu. I feel really lucky to have u, and i still want u for as long as i can. Selama kita masih saling sayang dan masih mau berusaha buat memperbaiki apapun yang datang ke kita, let’s keep going, together. I hope you’ll keep choosing me as your partner, just like how i always choose u. Aku selalu menghargai setiap percakapan kita, setiap momen kecil yang kita lewatin. I’m really happy we made it this far, and we’re still loving each other sampe sekarang. I hope we can stay like this, and go even further… maybe to 5 months and more, ya sayang? I Love You The Most, Babyyy. Happy 4 Months 🤍";
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
