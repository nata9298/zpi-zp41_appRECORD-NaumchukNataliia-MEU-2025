// Поточна активна група підкнопок
let activeIndex = -1;

// Відображення підкнопок
function toggleButtons(index) {
  const hiddenButtons = document.getElementById('hiddenButtons');
  if (activeIndex === index) {
    hiddenButtons.style.display = 'none';
    activeIndex = -1;
  } else {
    hiddenButtons.style.display = 'flex';
    activeIndex = index;

    // Оновити текст підкнопок для конкретної основної кнопки
    const buttons = hiddenButtons.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons.textContent = `Кнопка ${index + 1}-${i + 1}`;
      buttons[i].setAttribute('onclick', `showContent('Текст для кнопки ${index + 1}-${i + 1}', 'image${index * 3 + i + 1}.jpg')`);
    }
  }
}

// Відображення тексту та зображення
function showContent(text, imageSrc) {
  const displayText = document.getElementById('displayText');
  const textContent = document.getElementById('textContent');
  const imageContent = document.getElementById('imageContent');

  textContent.textContent = text;
  imageContent.src = imageSrc;
  imageContent.style.display = 'block';
  displayText.style.display = 'block';
}