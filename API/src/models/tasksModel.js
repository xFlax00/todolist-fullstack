const db = require('./config')

const getAll = async () => {
    const tasks = await db.execute('SELECT * FROM tasks')

    return tasks
}

const addTask = async (title) => {
    const query = 'INSERT INTO tasks(title, status) VALUES (?, "pendente")'

    const addedTask = await db.execute(query, [title])

    return addedTask
}

const deleteTask = async (id) => {
    const query = 'DELETE FROM tasks WHERE tasks.id = ?'

    const deletedTask = await db.execute(query, [id])

    return deletedTask
}

const updateTask = async (title, status, id) => {
    const query = 'USE tasks SET (title = ?, status = ?) WHERE tasks.id = ?'

    const updatedTask = await db.execute(query, [title, status, id])

    return updatedTask
}
module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
}