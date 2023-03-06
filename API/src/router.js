const router = require('express').Router()
const tasksController = require('./controllers/tasksController')
const verifyBody = require('./middlewares/verifyBody')

router.get('/', (req, res) => {
    res.send('GET ALL')
})

router.get('/tasks', tasksController.getAll)
router.post('/tasks', verifyBody.verifyTitle,  tasksController.addTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', verifyBody.verifyTitle, verifyBody.verifyStatus, tasksController.updateTask)

module.exports = router