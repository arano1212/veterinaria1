const express = require('express');
const router = express.Router();

const PetsController = require ('../controller/petsController')

router.post('/api/pets', PetsController.createPetController);
router.get('/api/pets', PetsController.getAll)
router.get('/api/pets/:id', PetsController.onePetbyIdController)
router.put('/api/pets/:id', PetsController.updatePetController)
router.delete('/api/pets/:id', PetsController.logicDEletePetController)

module.exports = router;
