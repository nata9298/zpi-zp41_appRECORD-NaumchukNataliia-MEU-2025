

// Функція для створення основних кнопок і підкнопок
function createButtons() {

    var buttonsData;
    fetch('content.json')
        .then(response => response.json()) // перетворює відповідь в JSON
        .then(buttonsData => {
            buttonsData.forEach((buttonData, index) => {
                // Створення головної кнопки
                const mainButton = document.createElement('button');
                mainButton.classList.add('main-button');
                mainButton.textContent = buttonData.title;
                mainButton.addEventListener('click', () => toggleButtons(index));
        
                mainButtonsContainer.appendChild(mainButton);
        
                // Створення підкнопок
                const subButtonsDiv = document.createElement('div');
                subButtonsDiv.classList.add('hidden-buttons');
                subButtonsDiv.id = `subButtons${index}`;
                buttonData.subButtons.forEach(subButtonData => {
                    const subButton = document.createElement('button');
                    subButton.textContent = subButtonData.label;

                    var textContent = "";
                    if("text" in subButtonData) {
                        textContent = subButtonData.text;
                    } else if("textfile" in subButtonData) {
                        fetch(subButtonData.textfile)
                            .then(response => response.text()) // перетворює відповідь в JSON
                            .then(text => {
                                textContent = text;
                            }
                        );
                    }
                    subButton.addEventListener('click', () => showContent(textContent, subButtonData.image));
                    subButtonsDiv.appendChild(subButton);
                });
        
                hiddenButtonsContainer.appendChild(subButtonsDiv);
            });
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
        
    const mainButtonsContainer = document.querySelector('.main-buttons');
    const hiddenButtonsContainer = document.getElementById('hiddenButtons');
}

// Відображення підкнопок
function toggleButtons(index) {
    const subButtonsDiv = document.getElementById(`subButtons${index}`);
    const allSubButtons = document.querySelectorAll('.hidden-buttons');
    allSubButtons.forEach(div => div.style.display = 'none');
    subButtonsDiv.style.display = subButtonsDiv.style.display === 'none' || !subButtonsDiv.style.display ? 'flex' : 'none';
}

// Відображення тексту та зображення
function showContent(text, imageSrc) {
    const displayText = document.getElementById('displayText');
    const textContent = document.getElementById('textContent');
    const imageContent = document.getElementById('imageContent');

    textContent.innerHTML = text; // Вставляємо HTML текст
    imageContent.src = imageSrc;
    imageContent.style.display = 'block';
    displayText.style.display = 'block';
}

// Ініціалізація кнопок після завантаження сторінки
createButtons();
