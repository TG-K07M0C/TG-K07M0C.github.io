document.getElementById('closedNotebook').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('openNotebook').style.display = 'flex';
    // Показать классы через 1.5 секунды после открытия тетради
    setTimeout(showClasses, 1500);
});
function showClasses() {
    const classes = [...document.querySelectorAll('#column1 .class, #column2 .class')];
    let index = 0;
    // Функция для показа класса
    const showNextClass = () => {
        if (index < classes.length) {
            classes[index].style.display = 'block'; // Показываем класс
            classes[index].style.opacity = '1'; // Применяем эффект появления
            index++;
            setTimeout(showNextClass, 1000); // Показ следующего класса через 1 секунду
        } else {
            setTimeout(strikeThroughClasses, 500); // Ожидаем 0,5 секунды для зачеркивания
        }
    };
    
    showNextClass(); // Начинаем показ классов
}
function strikeThroughClasses() {
    let classes1 = document.querySelectorAll('#column1 .class');
    let classes2 = document.querySelectorAll('#column2 .class');
    let totalClasses = [...classes1, ...classes2];
    let i = 0;
    let interval = setInterval(function() {
        if (i < totalClasses.length) {
            totalClasses[i].classList.add('strike-through');
            i++;
        } else {
            clearInterval(interval);
            // Показываем кнопки после зачеркивания всех классов
            document.getElementById('continueButton').style.display = 'block';
            document.getElementById('finishButton').style.display = 'block';
        }
    }, 1000);
}
document.getElementById('continueButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('finishButton').style.display = 'none';
    // Добавляем надписи "10 класс" и "11 класс"
    addNewClasses(['10 класс', '11 класс'], 'column2');
});
document.getElementById('finishButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('continueButton').style.display = 'none';
    // Удаляем классы из column1 и column2
    removeClasses();
});
function addNewClasses(classes, columnId) {
    const column = document.getElementById(columnId);
    let index = 0;
    const addClassesInterval = setInterval(function() {
        if (index < classes.length) {
            const newClassElement = document.createElement('p');
            newClassElement.className = 'class';
            newClassElement.textContent = classes[index];
            newClassElement.style.display = 'block';
            newClassElement.style.opacity = '0';
            column.appendChild(newClassElement);
            // Плавное появление
            setTimeout(() => { newClassElement.style.opacity = '1'; }, 100);
            index++;
        } else {
            clearInterval(addClassesInterval);
            // После добавления надписей, скрываем их через 1.5 секунды и показываем закрытую тетрадь
            setTimeout(() => {
                column.style.display = 'none'; // Скрываем колонку
                showEndScreen();
            }, 1500);
        }
    }, 1000); // Добавление классов каждую секунду
}
function removeClasses() {
    const classesToRemove = [...document.querySelectorAll('#column1 .class, #column2 .class')]; // Все классы для удаления
    let index = 0;
    const removeClassesInterval = setInterval(function() {
        if (index < classesToRemove.length) {
            classesToRemove[index].style.display = 'none'; // Прячем элементы
            index++;
        } else {
            clearInterval(removeClassesInterval);
            // После удаления всех классов, добавляем новые курсы через 1 секунду
            setTimeout(addNewCourses, 1000); // Заменяем на "1 курс", "2 курс" и т.д.
        }
    }, 1000); // Удаление классов каждую секунду
}
// Функция для добавления курсов "1 курс", "2 курс", "3 курс", "4 курс"
function addNewCourses() {
    const column1 = document.getElementById('column1');
    const newClasses = ['1 курс', '2 курс', '3 курс', '4 курс'];
    let index = 0;
    const addClassesInterval = setInterval(function() {
        if (index < newClasses.length) {
            const newClassElement = document.createElement('p');
            newClassElement.className = 'class';
            newClassElement.textContent = newClasses[index];
            newClassElement.style.display = 'block';
            newClassElement.style.opacity = '0';
            column1.appendChild(newClassElement);
            // Плавное появления
            setTimeout(() => { newClassElement.style.opacity = '1'; }, 100);
            index++;
        } else {
            clearInterval(addClassesInterval);
            // Ждем 1.5 секунды перед закрытием и показом сообщения "Удачи!"
            setTimeout(showEndScreen, 1500);
        }
    }, 1000); // Добавление курсов каждую секунду
}
function showEndScreen() {
    // Закрываем открытую тетрадь
    document.getElementById('openNotebook').style.display = 'none';
    document.getElementById('closedNotebook').style.display = 'block';
    // Показываем сообщение "Удачи!"
    const messageElement = document.getElementById('message');
    messageElement.style.display = 'block';
}
