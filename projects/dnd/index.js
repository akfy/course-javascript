/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let isDrag = false;
document.addEventListener('mousedown', (e) => {
  isDrag = true;
});

document.addEventListener('mousemove', (e) => {
  //console.log(e.target);
  console.log(isDrag);
  if (isDrag === true) {
    e.target.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
    e.target.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
    console.log(e.pageX);
    console.log(e.pageY);
  }
});

document.addEventListener('mouseup', (e) => {
  isDrag = false;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export function createDiv() {
  const result = document.createElement('div');
  result.classList.add('draggable-div');
  result.style.height = getRandomInt(0, 500) + 'px';
  result.style.width = getRandomInt(0, 500) + 'px';
  result.style.top = getRandomInt(-500, 500) + 'px';
  result.style.left = getRandomInt(-500, 500) + 'px';
  const randomColor = getRandomInt(0, 16777216).toString(16);
  result.style.backgroundColor = '#' + randomColor;
  result.style.position = 'absolute';
  return result;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
