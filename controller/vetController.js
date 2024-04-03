   const Veterinarian = require('../models/veterinarians')


const createVetController = async (req, res) => {
    const vet = req.body;
    try {
        const newVet = await Veterinarian.createVet(vet);
        res.status(201).json(newVet);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'error al registrar la mascota'})     
    }
}

const getAllVets = async (req, res)=>{
    try {
        const allVets = await Veterinarian.getAllVets();
        res.status(200).json(allVets)
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Tuvimos un error al procesar la solicitud'})   
    }
}

const oneVetbyIdController = async (req, res)=>{
    try {
        const idVet = req.params.id;
        const vet = await Veterinarian.oneVetbyId(idVet)
    
        if (vet.length === 0) {
            res.status(404).json({ message: 'Propietario no encontrada' })

        } else {
            res.status(200).json(vet[0])

        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'tuvimos un error' })

    }
}

const updateVetController = async (req, res)=>{
    try {
        const idVet = req.params.id
        const bodyToUpdate = req.body
        const updateVet = await  Veterinarian.updateVet(idVet, bodyToUpdate)   
        res.status(200).json(updateVet)

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'tuvimos un error' })

    }
} 

const logicDeleteVetController = async (req,res) =>{
    try {
        const idVet = req.params.id
        await Veterinarian.logicDeleteVet(idVet)
        res.status(204).json()

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'No pudimos procesar tu solicitud, intenta mas tarde' })
    }
}


module.exports ={
    createVetController,
    getAllVets,
    oneVetbyIdController,
    updateVetController,
    logicDeleteVetController
}
