import { express, app } from './express.js'
import { log, clear } from './console.js'
import { PORT } from './const.js'
import { routerProducts } from './router.js'
import { endPointNotFound, errors } from './../middleware/middleware-errors.js'
import morgan from 'morgan'
import cors from 'cors'

clear()

app.set('port', PORT)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api', routerProducts)

app.use(endPointNotFound)
app.use(errors)

export { app, log }
