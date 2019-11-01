import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}

const tasks = (state = TASKS.tasks, { type, id, content, isCompleted }) => {
    switch (type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    id,
                    content,
                    isCompleted
                }
            ]
        case 'REMOVE_TASK':
            return [...state].filter(task => task.id !== id);
        case 'COMPLETED':
            return [...state].map(task => {
                if (task.id === id) {
                    task.isCompleted = !task.isCompleted
                }
                return task
            })
        default:
            return state;
    }
}

export default tasks