document.getElementById('openButton').addEventListener('click', function() {
    document.getElementById('closedNotebook').style.display = 'none';
    this.style.display = 'none';
    document.getElementById('openNotebook').style.display = 'flex';

    // Зачеркивание классов через 5 секунд
    setTimeout(function() {
        let classes1 = document.querySelectorAll('#column1 .class');
        let classes2 = document.querySelectorAll('#column2 .class');
        let totalClasses = [...classes1, ...classes2]; // Объединяем классы из обоих колонок
        let i = 0;

        let interval = setInterval(function() {
            if (i < totalClasses.length) {
                totalClasses[i].classList.add('strike-through');
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1000); // Зачеркивание каждую секунду
    }, 5000);
});

document.getElementById('continueButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('finishButton').style.display = 'none';

    // Добавляем новые классы
    let newClasses = ['10 класс', '11 класс'];
    let column2 = document.getElementById('column2');

    newClasses.forEach(function(className) {
        let newClassElement = document.createElement('p');
        newClassElement.className = 'class';
        newClassElement.textContent = className;
        column2.appendChild(newClassElement);
    });
});

document.getElementById('finishButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('continueButton').style.display = 'none';

    // Заменяем классы
    let column1 = document.getElementById('column1');
    let column2 = document.getElementById('column2');

    column1.innerHTML = '';
    column2.innerHTML = '<p class="class">1 курс</p><p class="class">2 курс</p><p class="class">3 курс</p><p class="class">4 курс</p>';
});