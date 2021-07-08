let darkMode = localStorage.getItem('darkmode');
let button = document.querySelector('#mode');

if (darkMode === 'enable') {
    document.body.classList.add('dark-mode');
}

button.addEventListener('click',function darkModeTogle() {
    let body = document.body;
    darkMode = localStorage.getItem('darkmode');
    if (darkMode === 'enable') {
        body.classList.remove('dark-mode')
        localStorage.setItem('darkmode', null);
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkmode', 'enable');
    }
})


console.log(document.body.classList)
