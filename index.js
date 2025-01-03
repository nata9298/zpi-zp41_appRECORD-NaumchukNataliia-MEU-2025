const buttonsData = [
    {
        title: "Лабораторна робота №1.1",
        subButtons: [
            { label: "Опис предметного середовища", text: "Текст для кнопки 1-1", image: "image1.jpg" },
            { label: "Тема. Мета. Місце розташування лабораторної роботи №1", text: "Текст для кнопки 1-2", image: "image2.jpg" },
            { 
                label: "Структура документа", 
                text: "Текст для кнопки 1-3", 
                image: "image3.jpg",
                subButtons: [
                    { label: "Вступ", text: "Текст для підкнопки 1-3-1", image: "image3-1.jpg" },
                    { label: "Основна частина", text: "Текст для підкнопки 1-3-2", image: "image3-2.jpg" },
                    { label: "Висновки", text: "Текст для підкнопки 1-3-3", image: "image3-3.jpg" }
                ]
            }
        ]
    },
    {
        title: "Лабораторна робота №1.2",
        subButtons: [
            { label: "Кнопка 2-1", text: "Текст для кнопки 2-1", image: "image4.jpg" },
            { label: "Кнопка 2-2", text: "Текст для кнопки 2-2", image: "image5.jpg" },
            { label: "Кнопка 2-3", text: "Текст для кнопки 2-3", image: "image6.jpg" }
        ]
    },
    {
        title: "Лабораторна робота №2.1",
        subButtons: [
            { label: "Кнопка 3-1", text: "Текст для кнопки 3-1", image: "image7.jpg" },
            { label: "Кнопка 3-2", text: "Текст для кнопки 3-2", image: "image8.jpg" },
            { label: "Кнопка 3-3", text: "Текст для кнопки 3-3", image: "image9.jpg" }
        ]
    },
    {
        title: "Лабораторна робота №2.2",
        subButtons: [
            { label: "Кнопка 3-1", text: "Текст для кнопки 3-1", image: "image7.jpg" },
            { label: "Кнопка 3-2", text: "Текст для кнопки 3-2", image: "image8.jpg" },
            { label: "Кнопка 3-3", text: "Текст для кнопки 3-3", image: "image9.jpg" }
        ]
    },
    {
        title: "Лабораторна робота №3.1",
        subButtons: [
            { label: "Кнопка 3-1", text: "Текст для кнопки 3-1", image: "image7.jpg" },
            { label: "Кнопка 3-2", text: "Текст для кнопки 3-2", image: "image8.jpg" },
            { label: "Кнопка 3-3", text: "Текст для кнопки 3-3", image: "image9.jpg" }
        ]
    },
    {
        title: "Лабораторна робота №3.2",
        subButtons: [
            { label: "Кнопка 3-1", text: "Текст для кнопки 3-1", image: "image7.jpg" },
            { label: "Кнопка 3-2", text: "Текст для кнопки 3-2", image: "image8.jpg" },
            { label: "Кнопка 3-3", text: "Текст для кнопки 3-3", image: "image9.jpg" }
        ]
    },
    {
        title: "Лабораторна робота №4.1",
        subButtons: [
            { label: "Кнопка 3-1", text: "Текст для кнопки 3-1", image: "image7.jpg" },
            { label: "Кнопка 3-2", text: "Текст для кнопки 3-2", image: "image8.jpg" },
            { label: "Кнопка 3-3", text: "Текст для кнопки 3-3", image: "image9.jpg" }
        ]
    },
    {
        title: "Лабораторна робота №4.2",
        subButtons: [
            { label: "Кнопка 3-1", text: "Текст для кнопки 3-1", image: "image7.jpg" },
            { label: "Кнопка 3-2", text: "Текст для кнопки 3-2", image: "image8.jpg" },
            { label: "Кнопка 3-3", text: "Текст для кнопки 3-3", image: "image9.jpg" }
        ]
    }
];
// Функція для створення основних кнопок і підкнопок
function createButtons() {
    const mainButtonsContainer = document.querySelector('.main-buttons');

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
            subButton.addEventListener('click', () => {
                if (subButtonData.subButtons) {
                    // Якщо є підкнопки в підкнопці
                    showSubButtons(subButtonData.subButtons);
                } else {
                    showContent(subButtonData.text, subButtonData.image);
                }
            });
            subButtonsDiv.appendChild(subButton);
        });

        document.body.appendChild(subButtonsDiv); // Додати підкнопки на сторінку
    });
}

// Відображення підкнопок
function toggleButtons(index) {
    const subButtonsDiv = document.getElementById(`subButtons${index}`);
    const allSubButtons = document.querySelectorAll('.hidden-buttons');
    allSubButtons.forEach(div => div.style.display = 'none');
    subButtonsDiv.style.display = subButtonsDiv.style.display === 'none' || !subButtonsDiv.style.display ? 'flex' : 'none';
}

// Відображення підкнопок для підкнопки
function showSubButtons(subButtons) {
    const subButtonsContainer = document.createElement('div');
    subButtons.forEach(subButtonData => {
        const subButton = document.createElement('button');
        subButton.textContent = subButtonData.label;
        subButton.addEventListener('click', () => showContent(subButtonData.text, subButtonData.image));
        subButtonsContainer.appendChild(subButton);
    });

    document.body.appendChild(subButtonsContainer); // Додати підкнопки на сторінку
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

// Ініціалізація кнопок після завантаження сторінки
createButtons();