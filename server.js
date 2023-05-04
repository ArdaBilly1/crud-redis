import 'dotenv/config'

import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

// import all routes
import { router as personRouter } from "./routes/person-route.js";

const app = new express()
app.use(express.json())

app.use('/person', personRouter)

const swaggerDocument = YAML.load('api.yaml')
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// serve
const port = process.env.PORT
app.listen(port, () => {
    console.log('App Listening on port:', port)
})