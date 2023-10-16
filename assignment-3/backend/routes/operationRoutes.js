const express = require('express');
const operationsCont = require('../controller/statsCont');

/**
 * Express router for managing operations routes.
 * @type {import('express').Router}
 */
const router = express.Router();

/**
 * Route to initialize operations statistics.
 * @name POST /operations/initialize\
 */
router.post("/initialise", operationsCont.initialiseOperations);

/**
 * Route to get operations statistics.
 * @name GET /operations
 */
router.get("/", operationsCont.getOperations);

/**
 * Route to delete operations statistics.
 * @name DELETE /operations/delete
 */
router.delete("/delete", operationsCont.deleteOperations);

module.exports = router;
