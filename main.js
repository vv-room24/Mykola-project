fetch('data.csv')
    .then(response => response.arrayBuffer())  // Отримуємо файл у вигляді двійкового буфера
    .then(buffer => {
        // Декодер для кодування UTF-8
        const decoder = new TextDecoder('utf-8');  
        const text = decoder.decode(buffer); // Конвертуємо буфер у текст

        // Розділяємо текст на рядки та колонки
        const rows = text.split("\n").map(row => row.split(","));
        console.log(rows);
        generateTable(rows);
        
        // Виводимо у HTML
        const output = document.getElementById('output');
        output.textContent = JSON.stringify(rows, null, 2); // Форматуємо результат
    })
    .catch(error => console.error('Помилка:', error));



function handleClick(contentId) {
    const contentBlocks = document.querySelectorAll('.content div[data-content]');
    contentBlocks.forEach(block => {
        block.classList.remove('active');
    });
    const activeBlock = document.getElementById(contentId + 'Section');
    activeBlock.classList.add('active');
}

function generateTable(data) {
    const table = document.getElementById('data-table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    Object.values(data[0]).forEach(value => {
        const th = document.createElement('th');
        th.textContent = value;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    data.slice(1).forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}
