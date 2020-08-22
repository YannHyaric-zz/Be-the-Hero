"use strict";

var knex = require('knex');

var configuration = require('../../knexfile');

var conect = knex(configuration.development);
module.exports = conect;