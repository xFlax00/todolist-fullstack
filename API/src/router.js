const router = require('express').Router()
const tasksController = require('./controllers/tasksController')

router.get('/', (req, res) => {
    res.send('GET ALL')
})

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksController.addTask)

module.exports = router