const express = require('express')
const app = express()




app.use(express.json())
app.use(require('cors')())

require('./routes/admin/index')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
})