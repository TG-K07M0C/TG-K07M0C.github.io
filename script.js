function hideButtons() {
    document.getElementById('continueButton').style.display = 'none';
    document.getElementById('finishButton').style.display = 'none';
}

document.getElementById('openButton').onclick = function() {
    document.getElementById('closedNotebook').style.display = 'none';
    this.style.display = 'none'; // Скрываем кнопку "Open Notebook"
    document.getElementById('openNotebook').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';

    let index = 0;
    const items = document.querySelectorAll('#column1 p');

    const interval = setInterval(() => {
        if (index < items.length) {
            items[index].style.textDecoration = 'line-through';
            index++;
        } else {
            clearInterval(interval);
        }
    }, 5000);
};

document.getElementById('continueButton').onclick = function() {
    const col2 = document.getElementById('column2');
    const newItems = ['10 класс', '11 класс'];
    newItems.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        col2.appendChild(p);
    });
    hideButtons(); // Скрываем обе кнопки
};

document.getElementById('finishButton').onclick = function() {
    const col1 = document.getElementById('column1');
    const col2 = document.getElementById('column2');
    col1.innerHTML = '<p>1 курс</p><p>2 курс</p><p>3 курс</p><p>4 курс</p>';
    col2.innerHTML = '';
    hideButtons(); // Скрываем обе кнопки
};