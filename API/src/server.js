const app = require('./index')
require('dotenv').config()

app.listen(3000, () => console.log(`Server running in port ${process.env.PORT}`))