const recordList = [
    {time:"6am", notice: "6 am"},
    {time:"7am", notice: "7 am"},
    {time:"8am", notice: "8 am"},
    {time:"9am", notice: "9 am"},
    {time:"10am", notice: "10 am"},
    {time:"11am", notice: "11 am"},
    {time:"12am", notice: "12 am"},
    {time:"1pm", notice: "1 pm"},
    {time:"2pm", notice: "2 pm"},
    {time:"3pm", notice: "3 pm"},
    {time:"4pm", notice: "4 pm"},
    {time:"5pm", notice: "5 pm"},
    {time:"6pm", notice: "6 pm"},
    {time:"7pm", notice: "7 pm"},
    {time:"8pm", notice: "8 pm"},
    {time:"9pm", notice: "9 pm"},
    {time:"10pm", notice: "10 pm"},
]

function createRecord(time, notice) {const record = document.createElement('div');
record.classList.add('record');
record.innerHTML = `
    <div class="record_id">
        <h4>${time}</h4>
        <input type="text" value="${notice}" class="record_text"></input>
    </div>   
`
return record;
}

const taskList = document.createElement('ul');
taskList.classList.add('task-list');
taskList.innerHTML = `
    <h2>Daily Schedule</h2>
`
for (let i = 0; i < recordList.length; i++) {
    const { time, notice } = recordList[i];
    const newRecord = createRecord(time, notice);
    taskList.append(newRecord);
    
}

export default taskList;