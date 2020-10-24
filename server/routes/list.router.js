const express = require('express');
const router = express.Router();

const pg = require('pg');

const Pool = pg.Pool; // Class

const pool = new Pool({
  database: 'weekend-to-do-app', // name of our database
  host: 'localhost', // where is your database?
  port: 5432, // this is the default port
  max: 10, // number of connections
  idleTimeoutMillis: 10000, // 10 seconds
});

router.get('/', function (req, res) {
  console.log('In GET route');
  // The query we want to run
  const query = 'SELECT * FROM "to_do_list" ORDER BY "id";';
  pool
    .query(query)
    .then((results) => {
      console.log(results); // This is an object
      res.send(results.rows); // result.rows is an Array of tasks
    })
    .catch((error) => {
      console.log('Error making GET', error);
      res.sendStatus(500);
    });
});

router.post('/', function (req, res) {
  const taskToAdd = req.body; // This the data we sent
  console.log('In POST route - product:', taskToAdd);
  const query = 'INSERT INTO "to_do_list" ("task", "status") VALUES ($1, $2);';
  // $ with index (e.g. $1) will help improve the security of your db
  // Avoids SQL injection -- see bobby drop table comic
  pool
    .query(query, [taskToAdd.task, taskToAdd.status])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
