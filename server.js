 
const express = require('express');

const petsRoutes = require ('./routes/petsRoutes');
const ownerRoutes = require('./routes/ownerRoutes')
const vetRoutes = require('./routes/vetRoutes')

const vet_clinic = express();

vet_clinic.use(express.urlencoded({ extended: true }));
vet_clinic.use(express.json())


vet_clinic.get('/', (req, res) => {
    res.status(200).send('veterinaria abierta')
});


vet_clinic.use(petsRoutes);
vet_clinic.use(ownerRoutes);
vet_clinic.use(vetRoutes);

vet_clinic.listen(3000, () => {
    console.log('veterinaria abierta - Server On')
})