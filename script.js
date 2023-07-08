const imageElement = document.getElementById('imageElement');
const images = ['Img/screenshot.png', 'Img/screenshot2.png']; // Додайте список URL-адрес зображень

let currentIndex = 0;

function changeImage() {
  imageElement.classList.remove('fade-in-out'); // Видаляємо клас анімації

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length; // Оновлюємо індекс зображення
    imageElement.src = images[currentIndex]; // Змінюємо src зображення

    // Викликаємо reflow, щоб спрацювала анімація
    void imageElement.offsetWidth;

    imageElement.classList.add('fade-in-out'); // Додаємо клас анімації
  }, 1000); // Затримка в 1 секунду
}

setInterval(changeImage, 3000);
 // Змінюємо картинку кожні 3 секунди (3000 мілісекунд)
 function copyText() {
    var textToCopy = "138.2.156.44:31204"; // Замініть на потрібний текст для копіювання
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        console.log("Текст скопійовано в буфер обміну");
      })
      .catch(function(error) {
        console.error("Помилка копіювання тексту: ", error);
      });
  }
  function downloadArchive() {
    window.location.href = "https://drive.google.com/file/d/1jcEtnr-BykiX2ynXuWLMRYqFW-wnHW2O/view?usp=drive_link"; // Замініть на шлях до вашого архіву
  }
  function goToLink() {
    window.location.href = "https://discord.gg/hSkWTjd9r"; // Замініть на ваше посилання на Discord
  }
  function playClickSound() {
    var audio = document.getElementById("clickSound");
    audio.play();
  }    
