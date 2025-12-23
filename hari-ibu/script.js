const message = `"Allooow ibu💕"
Selamat Hari Ibu untuk wanita terhebatku. Terima kasih ya, Bu, sudah menjadi orang yang paling sabar dan selalu ada untukku dalam keadaan apa pun.

Mungkin aku jarang mengatakannya, tapi aku sangat bersyukur memilikimu. Terima kasih atas segala doa, kasih sayang, dan pengorbanan yang tidak pernah putus untukku.

Semoga Ibu selalu sehat dan bahagia.

Rasya sayang Ibu selamanya💕.
MAAAPPP TELAT BOSSS

By: rasya`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
