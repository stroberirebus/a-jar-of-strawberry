// List diary entries
const diaryEntries = [
  {
    date: "7 September 2025",
    text: "AKAR 2025 is over. i was sobbing badly through out the noon. i felt both relieved & proud of the people behind all of this. no more bangun pagi at literally 4am to prepare, no more dikabarin h-1 buat makeup-in talent, no more misuh-misuh karena dpt job dadakan. Thank you Gea, Kaindra, Awa, Ica, Dinda, Naura, Gladys, Lulu , Chika and more amazing people behind this remarkable achievement of AKAR 2025 & APSI 38. Actually, yesterday was really fun even tho i had to wake up super early, do my talented actors makeup, and deal with my sore legs, i still enjoyed the PARTY. at the end of the day, I WAS SOBBING. Ica said she didn't deserve to cry because she didn't feel the pressure of being panitia like everyone else BUT i denied her bc she's literally the one who sicked all day long while i was at my free time the whole months before this T___T i'm so grateful i could took this oppurtinity & be a part of Achivela. im so proooooud. today, i have to do so many things, prepare for THREE EXAMS. biology, islamic, and maths ?????? T___T wish me luck",
    images: [ "https://i.imgur.com/grKPUFn.jpeg", "https://i.imgur.com/8QmFcPQ.jpeg", "https://i.imgur.com/Q37VDpA.jpeg"]
  },
  {
    date: "5 September 2025",
    text: "AKAR IS LITERALLY TOMORROW WHAT THE HELLYYYYY. h-1 and it feels unreal. ready or not i have to well prepared for tomorrow. i can NOT wait for feel the stress and relieved at the same day :p i guaranteed tmr will be a super fun day"
  }
];

// Ambil container <main>
const container = document.querySelector("main");

// Render diary entries
diaryEntries.forEach(entry => {
  const article = document.createElement("article");
  article.classList.add("entry");

  // Render semua foto kalau ada
  let imagesHTML = "";
  if (entry.images && entry.images.length > 0) {
    imagesHTML = `
      <div class="images">
        ${entry.images
          .map(img => `<img src="${img}" alt="Diary image for ${entry.date}">`)
          .join("")}
      </div>
    `;
  }

  article.innerHTML = `
    <h2>${entry.date}</h2>
    <p>${entry.text}</p>
    ${imagesHTML}
  `;

  container.appendChild(article);
})