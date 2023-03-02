const tasksModel = require('../models/tasksModel')

const getAll = async (req, res) => {
    const [tasks] = await tasksModel.getAll()

    res.status(200).json(tasks)
}

const addTask = async (req, res) => {
    console.log(req.body)
    const { title } = req.body

    const task = await tasksModel.addTask(title)

    res.status(201).json(task)
}

module.exports = {
    getAll,
    addTask
}