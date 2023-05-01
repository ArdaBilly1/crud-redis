import 'dotenv/config'

import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

// import all routes
import { router as personRouter } from "./routes/person-route.js";

const app = new express()
app.use(express.json())

// route
app.use('/person', personRouter)

const swaggerDocument = YAML.load('api.yaml')
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


// serve
app.listen(8080)