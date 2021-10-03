/*
    ************ DELETE THIS COMMENT **************
    ** Make sure to double check if your .env is in your gitignore to prevent hackers from fucking with your database.
*/
require('dotenv').config();
const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const massive = require('massive');
const wine_controller = require('./controllers/wine_controller');
const app = express();
const { PORT, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_USER, DB_PORT, CONNECTION_STRING } = process.env;

app.use( express.static( `${__dirname}/../build` ) );
app.use(express.urlencoded());

app.use(express.json());
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
    user: 'mhaddad0099@gmail.com',
    password: 'Mo!121299',
    max: 10,
    ssl: true
 })
.then(database => {
    app.set('db', database);
})
.catch(err => console.log('Massive Connection Error---------', err));

app.get('/api/wines', wine_controller.getWines);

app.post('/api/wine_entries', wine_controller.createWineEntry);

app.put('/api/wine_entries/:id', wine_controller.updateWineEntry);

app.delete('/api/wine_entries/:id', wine_controller.deleteWineEntry);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
