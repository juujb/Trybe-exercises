let darkMode = localStorage.getItem('darkmode');
let button = document.querySelector('#mode');

if (darkMode === 'enable') {
    document.body.classList.add('dark-mode');
}

button.addEventListener('click',function () {
    let body = document.body;
    darkMode = localStorage.getItem('darkmode');
    if (darkMode === 'enable') {
        body.classList.remove('dark-mode')
        localStorage.setItem('darkmode', null);
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkmode', 'enable');
    }
});

let fontSize = localStorage.getItem('fontsize');
let button2 = document.querySelector('#fontsize');
let paragraphs = document.querySelectorAll('.paragraph');

if (fontSize === 'enable') {
    for (let paragraph of paragraphs) {
        paragraph.classList.add('paragraph-bigger');
    }
}

button2.addEventListener('click',function () {
    
    fontSize = localStorage.getItem('fontsize');
    if (fontSize === 'enable') {
        for (let paragraph of paragraphs) {
            paragraph.classList.remove('paragraph-bigger');
            localStorage.setItem('fontsize', null);
        }
    } else {
        for (let paragraph of paragraphs) {
            paragraph.classList.add('paragraph-bigger');
            localStorage.setItem('fontsize', 'enable')
        }
    }
});

