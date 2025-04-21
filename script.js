let canClick = true;
function toggleNotebook() {
    const notebook = document.querySelector('.notebook');
    const content = document.querySelector('.content');
    
    notebook.classList.toggle('open');
    if (notebook.classList.contains('open')) {
        if (canClick) {
            canClick = false;
            const subjects = ["1 класс", "2 класс", "3 класс", "4 класс", "5 класс", "6 класс", "7 класс", "8 класс", "9 класс"];
            let contentHtml = <div>${subjects.slice(0, 5).map(sub => <span>${sub}</span>).join('')}</div><div>${subjects.slice(5).map(sub => <span>${sub}</span>).join('')}</div>;
            content.innerHTML = contentHtml;
            setTimeout(() => {
                subjects.forEach((subject, index) => {
                    setTimeout(() => {
                        const spans = document.querySelectorAll('.content div span');
                        spans[index].style.textDecoration = 'line-through';
                    }, index * 3000); // Задержка в 3 секунды
                });
                setTimeout(() => {
                    const buttons = document.querySelector('.buttons');
                    buttons.style.display = 'flex';
                }, 27000); // Время ожидания завершения зачёркивания
            }, 1000); // Задержка перед началом зачёркивания
        }
    }
}
document.getElementById('continue').addEventListener('click', function() {
    const content = document.querySelector('.content');
    content.innerHTML += <div><span>10 класс</span><span>11 класс</span></div>;
    
    hideButtonsAndCloseNotebook();
});
document.getElementById('finish').addEventListener('click', function() {
    const content = document.querySelector('.content');
    content.innerHTML = <div><span>1 курс</span><span>2 курс</span></div><div><span>3 курс</span><span>4 курс</span></div>;
    
    hideButtonsAndCloseNotebook();
});
function hideButtonsAndCloseNotebook() {
    const buttons = document.querySelector('.buttons');
    const notebook = document.querySelector('.notebook');
    buttons.style.display = 'none';
    setTimeout(() => {
        notebook.classList.remove('open');
        const finalMessage = document.querySelector('.final-message');
        finalMessage.style.display = 'block';
    }, 1500);
}