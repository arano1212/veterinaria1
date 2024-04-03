const Pet = require('../models/pets');

const createPetController = async (req, res) => {
    const pet = req.body;
    try {
        const newPet = await Pet.createPet(pet);
        res.status(201).json(newPet);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'error al registrar la mascota'})     
    }
}

const getAll = async (req, res)=>{
    try {
        const allPets = await Pet.getAllPets();
        res.status(200).json(allPets)
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Tuvimos un error al procesar la solicitud'})   
    }
}

const onePetbyIdController = async (req, res)=>{
    try {
        const idPet = req.params.id;
        const pet = await Pet.onePetbyId(idPet)
    
        if (pet.length === 0) {
            res.status(404).json({ message: 'Mascota no encontrada' })

        } else {
            res.status(200).json(pet[0])

        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'tuvimos un error' })

    }
}

const updatePetController = async (req, res)=>{
    try {
        const idPet = req.params.id
        const bodyToUpdate = req.body
        const updatePet = await Pet.updatePet(idPet, bodyToUpdate)   
        res.status(200).json(updatePet)

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'tuvimos un error' })

    }
}

const logicDEletePetController = async (req,res) =>{
    try {
        const idPet = req.params.id
        await Pet.logicDEletePet(idPet)
        res.status(204).json()

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'No pudimos procesar tu solicitud, intenta mas tarde' })
    }
}


module.exports ={
    createPetController,
    getAll,
    onePetbyIdController,
    updatePetController,
    logicDEletePetController
                                                                                                                                                                                                                                                                                                                                                                         

}