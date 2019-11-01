export const addTask = (id, content, isCompleted) => ({
    type: 'ADD_TASK',
    id,
    content,
    isCompleted
})

export const removeTask = id => ({
    type: 'REMOVE_TASK',
    id
})

export const completedTask = id => ({
    type: 'COMPLETED',
    id
})

export const changeFilter = activeFilter => ({
    type: 'CHANGE_FILTER',
    activeFilter
})