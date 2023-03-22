import '@/styles/index.scss';
import headerDate from '@/js/headerDate';
import weekListDiv from '@/js/weekList';
import taskList from '@/js/taskList';


const app = document.querySelector('#root')
app.append(headerDate, weekListDiv, taskList)
