const app = require('./app');
require('./database/connection_db');

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () => {console.log(`App corriendo en el puerto ${APP_PORT}`)});
