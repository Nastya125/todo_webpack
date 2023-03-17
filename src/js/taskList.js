const recordList = [
    {time:"6", notice: ""},
    {time:"7", notice: ""},
    {time:"8", notice: ""},
    {time:"9", notice: ""},
    {time:"10", notice: ""},
    {time:"11", notice: ""},
    {time:"12", notice: ""},
    {time:"1", notice: ""},
    {time:"2", notice: ""},
    {time:"3", notice: ""},
    {time:"4", notice: ""},
    {time:"5", notice: " "},
    {time:"6", notice: " "},
    {time:"7", notice: ""},
    {time:"8", notice: ""},
    {time:"9", notice: ""},
    {time:"10", notice: " "},
];

function getTimeForRecord(time) {
    const option = document.createElement('option');
    option.classList.add("option")
    option.innerHTML += `<option value="${time}">${time}.00</option>`
    return option
}

function getOptions(id) {
    const {time} = recordList[id]
    const option = getTimeForRecord(time)
    select.append(option)
}

function createRecord(time, notice) {
    const record = document.createElement('div');
    record.classList.add('record');
    record.innerHTML = `
        <div class="record_id">
            <h4>${time}.00</h4>
            <input type="text" value="${notice}" class="record_text"></input>
        </div>   
        `
return record;
}

function getPost(id){
    const { time, notice } = recordList[id];
    const newRecord = createRecord(time, notice);
    taskList.append(newRecord);
}


const select = document.createElement('select');
select.classList.add('select');

const taskInput = document.createElement('input');
taskInput.classList.add('task-input');

const taskList = document.createElement('ul');
taskList.classList.add('task-list');
taskList.innerHTML = `
    <h2>Daily Schedule</h2>
`
taskList.append(select)
taskList.append(taskInput)


for (let i = 0; i < recordList.length; i++) {
    getPost(i);
    getOptions(i)
}


export default taskList;