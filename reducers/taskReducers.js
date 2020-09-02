import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from '../actions/actionTypes';
const taskReducers = (tasks = [], action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return [
                ...tasks,//task cũ
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false
                }
            ]
            break;
        case TOGGLE_ONE_TASK:
            return tasks.map(task => {
                return (task.taskId === action.taskId) ? { ...task, completed: !task.completed } : task
            })
        default:
            return tasks;

    }
}

export default taskReducers;
