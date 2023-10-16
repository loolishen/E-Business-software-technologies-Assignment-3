const express = require('express');
const controller = require('../controller/event-controller'); // Import the controller
const router = express.Router();

router.post('/33349800/input', controller.createEvent);
router.get('/33349800/output', controller.getOutputPage);
router.get('/33349800/info', controller.getInfoPage);
router.get('/', controller.getIndexPage);
router.get('/33349800/input', controller.getInputPage);
router.get('/33349800/output', controller.getOutputPage);
router.get('/33349800/search-category', controller.searchCategory);
router.get('/33349800/event-details/:eventId', controller.getEventDetails);
router.get('/33349800/delete-category', controller.getDeleteCategoryPage);
router.post('/33349800/delete-category', controller.deleteCategory);

module.exports = router;
