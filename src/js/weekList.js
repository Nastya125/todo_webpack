const dayList = [
    {id:"sun", title: "Вс"},
    {id:"mon", title: "Вс"},
    {id:"tue", title: "Вс"},
    {id:"wed", title: "Вс"},
    {id:"thu", title: "Вс"},
    {id:"fri", title: "Вс"},
    {id:"sat", title: "Вс"},
]

const weekList = document.createElement("ul");
let date = new Date();

weekList.classList.add('week_list');
for (let i = 0; i < dayList.length; i++) {
    const { id, title } = dayList[i];
    weekList.innerHTML += `<li>${title}<input id="${id}" type="radio></li>`
}

const week = [];
for (let i = 0; i < dayList.length; i++) {
    const day = weekList.querySelector(`#${dayList[i]}`)
    week.push(day);
}

week[date.getDay()].checked = true;

export default weekList;