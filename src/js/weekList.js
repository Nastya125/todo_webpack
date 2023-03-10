const dayList = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",

]

const weekList = document.createElement("ul");
let date = new Date();

weekList.classList.add('week_list')
weekList.innerHTML = `
            <li>Пн<input id="mon" type="radio"></li>
            <li>Вт<input id="tue" type="radio"></li>
            <li>Ср<input id="wed" type="radio"></li>
            <li>Чт<input id="thu" type="radio"></li>
            <li>Пт<input id="fri" type="radio"></li>
            <li>Сб<input id="sat" type="radio"></li>
            <li>Вс<input id="sun" type="radio"></li>
    `
const week = [];
for (let i = 0; i < dayList.length; i++) {
    const day = weekList.querySelector(`#${dayList[i]}`)
    week.push(day);
}

week[date.getDay()].checked = true;

export default weekList;