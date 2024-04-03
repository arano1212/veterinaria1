const express = require('express');
const router = express.Router();

const ownerController = require('../controller/ownerController')

router.post('/api/owner', ownerController.createOwnerController);
router.get('/api/owner', ownerController.getAllOwners);
router.get('/api/owner/:id', ownerController.oneOwnerbyIdController);
router.put('/api/owner/:id', ownerController.updateOwnerController);
router.delete('/api/owner/:id', ownerController.logicDeleteOwnerController)
router.get('/api/owner/:id/pets', ownerController.ownerWithPetsController);

module.exports = router;