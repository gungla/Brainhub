const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const mongoConnect = require('./config/mongoConnect').mongoConnect
const swaggerUi = require('swagger-ui-express')

const YAML = require('yamljs')
const swaggerConfig = YAML.load('./swagger-config.yaml')

require('dotenv').config()

const port =  3001

const app = express()

async function startUp() {
  // make sure we can connect to external services before starting the server
  await mongoConnect()
}

startUp()

// helmet helps secure Express apps with various HTTP headers
app.use(helmet())
// cors allows for cross server domain usage
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Welcome to mongodb in node brainhub. Visit /users or /docs')
})
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))
app.use('/users', require('./routes/userRoutes'))

app.listen(port)
console.log(`Server up and listening on port ${port}`)

module.exports = app
