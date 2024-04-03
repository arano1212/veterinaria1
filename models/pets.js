const vet = require('../config');

const createPet = (bodyPet) => {
   return vet
      .insert(bodyPet)
      .into('pets')
      .returning('*')
      .where({ active: true })
}

const getAllPets = () => {
   return vet
      .select('*')
      .from('pets')
      .where({ active: true })
}

const onePetbyId = (idPet) => {
   return vet
      .select('*')
      .from('pets')
      .where({ pet_id: idPet, active: true })
}

const updatePet = (idPet, bodyToUpdate) => {
   return vet
      .update(bodyToUpdate)
      .from('pets')
      .where({ pet_id: idPet, active: true })
      .returning('*')
}

const logicDEletePet =(idPet)=>{
   return vet
   .update({ active: false })
   .from('pets')
   .where({ pet_id: idPet })
}



module.exports = {
   createPet,
   getAllPets,
   onePetbyId,
   updatePet,
   logicDEletePet

}