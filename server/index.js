/*
    ************ DELETE THIS COMMENT **************
    ** Make sure to double check if your .env is in your gitignore to prevent hackers from fucking with your database.
*/
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const wine_controller = require('./controllers/wine_controller');
const input_controller = require('./controllers/input_controller');
const app = express();
const { SERVER_PORT, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_USER, DB_PORT, CONNECTION_STRING } = process.env;

// var corsOptions = {
//     origin: true,
//     credentials: false,
// }
app.use(cors());

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.urlencoded());
app.use(express.json());

// app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:3000/',
//       changeOrigin: true,
//     })
//   );
// console.log(CONNECTION_STRING);
/*
    ********** DELETE THIS COMMENT **********
    ** You would be using massive.js as your postgres sql client.
    ** You would attach the database instance to each request, but set to the express app's db property.
    ** To use the client to run queries, inserts, updates, and deletes from your database. 
    ** You would get the database instance via a req.app.get('db'), then run the query from your db folder.
    ** FUCK sequelize, just use this. 
    ** STOP SMOKING FUCKING WEED AND LOOK AT THIS documentation -> https://massivejs.org/docs/connecting
*/
massive({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: {rejectUnauthorized: false},

 })
.then(database => {
    app.set('db', database);
})
.catch(err => console.log('Massive Connection Error---------', err));

app.get('/api/wines', wine_controller.getWines);

app.post('/api/wine_entries', wine_controller.createWineEntry);

app.put('/api/wine_entries/:id', wine_controller.updateWineEntry);

app.delete('/api/wine_entries/:id', wine_controller.deleteWineEntry);

app.get("/api/create_wine_entries/input_data", input_controller.getCreateWineEntryInputData);

app.get("/api/update_wine_entries/input_data", input_controller.getUpdateWineEntryInputData);


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
