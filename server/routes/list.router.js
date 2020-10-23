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
