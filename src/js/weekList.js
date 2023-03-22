import moodIndicator from '@/js/moodIndicator';

const dayList = [
    {id:"sun", title: "Вс"},
    {id:"mon", title: "Пн"},
    {id:"tue", title: "Вт"},
    {id:"wed", title: "Ср"},
    {id:"thu", title: "Чт"},
    {id:"fri", title: "Пт"},
    {id:"sat", title: "Сб"},
]

const weekListDiv = document.createElement("div");
weekListDiv.classList.add('week-list-div');
let date = new Date();

const weekList = document.createElement("ul");
weekList.classList.add('week-list');
for (let i = 0; i < dayList.length; i++) {
    const { id, title } = dayList[i];
    weekList.innerHTML += `<li>${title}<input id="${id}" type="radio" name="week"></li>`
}
weekListDiv.append(weekList, moodIndicator);

const week = [];
for (let i = 0; i < dayList.length; i++) {
    const { id } = dayList[i];
    const day = weekList.querySelector(`#${id}`);
    week.push(day);
}

week[date.getDay()].checked = true;


export default weekListDiv;