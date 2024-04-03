const express = require('express');
const router = express.Router();

const vetController = require('../controller/vetController');

router.post('/api/vet', vetController.createVetController);
router.get('/api/vet', vetController.getAllVets);
router.get('/api/vet/:id', vetController.oneVetbyIdController);
router.put('/api/vet/:id', vetController.updateVetController);
router.delete('/api/vet/:id', vetController.logicDeleteVetController);
router.get('/api/vet/:id/pets', vetController.vetWithPetsController);

module.exports = router;
