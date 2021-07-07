function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createMonthdays(){
    for (let index = 0; index < dezDaysList.length; index++) {
        let day = document.createElement('li');
        day.className = 'day';
        day.innerText = dezDaysList[index];
        document.getElementById('days').appendChild(day);
        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
            day.className += ' holiday';
        }
        if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
            day.className += ' friday';
        }
    }
}

function createHolidayButton() {
    let hollidayButton = document.createElement('button');
    hollidayButton.id = 'btn-holiday';
    hollidayButton.innerText = 'Feriados';
    document.querySelector('.buttons-container').appendChild(hollidayButton);
}

function applyEventToHolidayButton() {
let holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', changeColor);
    function changeColor() {
        let holidays = document.querySelectorAll('.holiday');
        for (let index = 0; index < holidays.length; index++) {
            let actualHoliday = holidays[index];
            if (actualHoliday.style.backgroundColor === 'lightblue') {
                for (let index = 0; index < holidays.length; index++) {
                    actualHoliday.style.backgroundColor = 'rgb(238,238,238)';
                }   
            }else{
                for (let index = 0; index < holidays.length; index++) {
                    actualHoliday.style.backgroundColor = 'lightblue';
                }
            }
        }
    }
}

function createFridayButton() {
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = 'Sexta-feira';
    document.querySelector('.buttons-container').appendChild(fridayButton);
}

function applyEventToFridayButton() {
    let fridayButton = document.querySelector('#btn-friday');
    fridayButton.addEventListener('click', changeText);
    let fridays = document.querySelectorAll('.friday');
    let fridayNumber = [];
        for (let index = 0; index < fridays.length; index++) {
            fridayNumber.push(fridays[index].innerText)
        }
    function changeText() {
        for (let index = 0; index < fridays.length; index++) {
            let actualfriday = fridays[index];
            let actualfridayNumber = fridayNumber[index];
            if (actualfriday.innerText === 'SEXTOU') {
                for (let index = 0; index < fridays.length; index++) {
                    actualfriday.innerText = actualfridayNumber;
            }
            }else{
                for (let index = 0; index < fridays.length; index++) {
                    actualfriday.innerText = 'SEXTOU';
                }
            }
        }
    }
}

function addEventZoomInOut() {
    let allDays = document.querySelectorAll('.day');
    for (let index = 0; index < allDays.length; index++) {
        allDays[index].addEventListener('mouseover', zoomIn);
        allDays[index].addEventListener('mouseleave', zoomOut);
    }
    function zoomIn(event) {
        event.target.style.fontSize = '30px';

    }
    function zoomOut(event) {
        event.target.style.fontSize = '20px';
    }
}


function createTask(string) {
    let newTask = document.createElement('span');
    newTask.innerText = string;
    document.querySelector('.my-tasks').appendChild(newTask);
}

function legendColor(color) {
    document.querySelector('span').style.color = color;
    let newLegend = document.createElement('div');
    newLegend.className = 'task';
    newLegend.style.backgroundColor = color;
    document.querySelector('.my-tasks').appendChild(newLegend);
}


function selectTask() {
    let selectedTask = document.querySelector('.task')
    selectedTask.addEventListener('click', selection);
    function selection() {
        if (selectedTask.className === 'task'){
            selectedTask.className = 'task selected'
        } else {
            selectedTask.className = 'task'
        }
    }
}

function changeDayColor() {
    let selectedTask = document.querySelector('.selected')
    let allDays = document.querySelectorAll('.day');
    for (let index = 0; index < allDays.length; index++) {
        allDays[index].addEventListener('click', changeColorDay);
    }
    function changeColorDay(event) {
        let selectedTask = document.querySelector('.selected')
        if (event.target.style.color != selectedTask.style.backgroundColor) {
            event.target.style.color = selectedTask.style.backgroundColor;
            console.log(selectedTask.style.backgroundColor)
        } else {
        event.target.style.color = 'rgb(119,119,119)';
        }
    }
}
