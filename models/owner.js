const vet = require('../config')


const createOwner = (bodyOwner) => {
    return vet
       .insert(bodyOwner)
       .into('owner')
       .returning('*')
       .where({ active: true })
 }

 const getAllOwners = () => {
    return vet
       .select('*')
       .from('owner')
       .where({ active: true })
 }

 const oneOwnerbyId = (idOwner) => {
    return vet
       .select('*')
       .from('owner')
       .where({ owner_id: idOwner, active: true })
 }


const updateOwner = (idOwner, bodyToUpdate) => {
   return vet
      .update(bodyToUpdate)
      .from('owner')
      .where({ owner_id: idOwner, active: true })
      .returning('*')
}

const logicDeleteOwner =(idOwner)=>{
   return vet
   .update({ active: false })
   .from('owner')
   .where({ owner_id: idOwner })
}

const ownerWithPets = (idOwner)=>{
   return vet
   .select(
      'pets.name as petName',
      'owner.first_name as ownerName',
      'pets.*',
      'owner.*'
   )
   .from('pets')
   .where({'pets.owner_id': idOwner})
   .join('owner', 'owner.owner_id', '=',  'pets.owner_id')
}


 module.exports= {
    createOwner,
    getAllOwners,
    oneOwnerbyId, 
    updateOwner,
    logicDeleteOwner,
    ownerWithPets
 }