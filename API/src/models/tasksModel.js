const db = require('./config')

const getAll = async () => {
    const tasks = await db.execute('SELECT * FROM tasks')

    return tasks
}

const addTask = async (title) => {
    const query = 'INSERT INTO tasks (title) VALUES (?)'

    const addedTask = db.execute(query, title)

    return addedTask
}

module.exports = {
    getAll,
    addTask
}