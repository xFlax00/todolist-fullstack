const router = require('express').Router()
const tasksController = require('./controllers/tasksController')

router.get('/', (req, res) => {
    res.send('GET ALL')
})

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksController.addTask)
router.delete('/tasks/:id', tasksController.deleteTask)

module.exports = router