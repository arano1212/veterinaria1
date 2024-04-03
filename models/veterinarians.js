const vet = require('../config')

const createVet = (bodyVeterinarian) => {
    return vet
       .insert(bodyVeterinarian)
       .into('veterinarians')
       .returning('*')
       .where({ active: true })
 }

 const getAllVets = () => {
   return vet
      .select('*')
      .from('veterinarians')
      .where({ active: true })
}

const oneVetbyId = (idVet) => {
   return vet
      .select('*')
      .from('veterinarians')
      .where({ vet_id: idVet, active: true })
}

const updateVet = (idVet, bodyToUpdate) => {
   return vet
      .update(bodyToUpdate)
      .from('veterinarians')
      .where({ vet_id: idVet, active: true })
      .returning('*')
}

const logicDeleteVet =(idVet)=>{
   return vet
   .update({ active: false })
   .from('veterinarians')
   .where({ vet_id: idVet })
}

const vetWithPets = (idVet)=>{
   return vet
   .select(
      'pets.name as petName',
      'veterinarians.first_name as veetName',
       'veterinarians.last_name as VetLastName',
      'pets.*',
      'veterinarians.*'
   )
   .from('pets')
   .where({'pets.vet_id': idVet})
   .join('veterinarians', 'veterinarians.vet_id', '=',  'pets.vet_id')
}

 module.exports={
    createVet,
    getAllVets,
    oneVetbyId,
    updateVet,
    logicDeleteVet,
    vetWithPets

 }