const tasksModel = require('../models/tasksModel')

const getAll = async (req, res) => {
    const [tasks] = await tasksModel.getAll()

    res.status(200).json(tasks)
}

const addTask = async (req, res) => {
    const { title } = req.body

    const task = await tasksModel.addTask(title)

    res.status(201).json(task)
}

const deleteTask = async (req, res) => {
    const { id } = req.params

    await tasksModel.deleteTask(id)

    res.status(204).json()
}

const updateTask = async (req, res) => {
    const { id } = req.params
    const { title, status } = req.body

    await tasksModel.updateTask(title, status, id)

    res.status(204).json()
}

module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask
}