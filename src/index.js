import { app, log } from './config/app.js'

app.listen(app.get('port'), () => log('server on port', app.get('port')))
