import express from "express"
import "dotenv/config"
import path from "path"
import { engine } from "express-handlebars"
import fileUploadConfig from "./utils/fileUploadConfig.js"
import routeSkater from "./routes/skater.route.js"

const app = express()

const __dirname = import.meta.dirname

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '/public')))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', __dirname + '/views')

app.use(fileUploadConfig)
app.use("/", routeSkater)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Servidor levantado en puerto ${PORT}`))
