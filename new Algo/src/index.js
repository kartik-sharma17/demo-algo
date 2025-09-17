import express from 'express'
import { employeeV2 } from './routes/routes.js'

const app = express()

app.use(express.json());

app.use("/api/v2/employee", employeeV2)

app.listen(6000, () => {
    console.log("server is started on port = 6000");
})