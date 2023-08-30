const express = require('express');
const appmntController = require('../controllers/appointment')
const router = express.Router();

router.get('/appointments', appmntController.fetchAll);
router.post('/addAppointment', appmntController.saveApointment);

router.get('/deleteAppointment/:apmntId', appmntController.deleteAppointment);


module.exports = router;
