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

const petsWithOwnerAndVet = (idPet)=>{
   return vet
   .select(
      'pets.name as petName',
      'owner.first_name as ownerName',
      'owner.last_name as ownerLastName',
      'veterinarians.first_name as vetName',
      'veterinarians.last_name as vetLastName',
      'pets.*',
      'owner.*',
      'veterinarians.*'
   )
   .from('pets')
   .where({'pets.owner_id': idPet}, {'pets.vet_id': idPet})
   .join('owner', 'owner.owner_id', '=',  'pets.owner_id')
   .join ('veterinarians', 'veterinarians.vet_id', '=', 'pets.vet_id')
}


module.exports = {
   createPet,
   getAllPets,
   onePetbyId,
   updatePet,
   logicDEletePet,
   petsWithOwnerAndVet

}