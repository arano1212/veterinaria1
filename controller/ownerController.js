const Owner = require('../models/owner')

const createOwnerController = async (req, res) => {
    const owner = req.body;
    try {
        const newOwner = await Owner.createOwner(owner);
        res.status(201).json(newOwner);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'error al registrar la mascota' })
    }
}

const getAllOwners = async (req, res) => {
    try {
        const allOwners = await Owner.getAllOwners();
        res.status(200).json(allOwners)
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Tuvimos un error al procesar la solicitud' })
    }
}

const oneOwnerbyIdController = async (req, res) => {
    try {
        const idOwner = req.params.id;
        const owner = await Owner.oneOwnerbyId(idOwner)

        if (owner.length === 0) {
            res.status(404).json({ message: 'Propietario no encontrada' })

        } else {
            res.status(200).json(owner[0])

        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'tuvimos un error' })

    }
}

const updateOwnerController = async (req, res) => {
    try {
        const idOwner = req.params.id
        const bodyToUpdate = req.body
        const updateOwner = await Owner.updateOwner(idOwner, bodyToUpdate)
        res.status(200).json(updateOwner)

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'tuvimos un error' })

    }
}

const logicDeleteOwnerController = async (req, res) => {
    try {
        const idOwner = req.params.id
        await Owner.logicDeleteOwner(idOwner)
        res.status(204).json()

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'No pudimos procesar tu solicitud, intenta mas tarde' })
    }
}

const ownerWithPetsController = async (req, res) => {
    try {
        const idOwner = req.params.id
        const ownerWithPet = await Owner.ownerWithPets(idOwner);
        res.status(200).json(ownerWithPet)
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Tuvimos un error al procesar la solicitud' })
    }
}

module.exports = {
    createOwnerController,
    getAllOwners,
    oneOwnerbyIdController,
    updateOwnerController,
    logicDeleteOwnerController,
    ownerWithPetsController
}