const express = require('express');
const router = express.Router();
const {createProjectController} = require('../controllers/project.controller');

const {listProjectsController} = require('../controllers/project.controller');

router.post('/create', createProjectController)
router.get('/list', listProjectsController)

module.exports = router;