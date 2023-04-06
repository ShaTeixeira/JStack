const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(), /* uuid -> universal unique ID */
    name: 'Shayane',
    email: 'shayane@mail.com',
    phone: '213238745',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mates@mail.com',
    phone: '837465203',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Esdras',
    email: 'ezra@mail.com',
    phone: '826734910',
    category_id: v4(),
  },
];

class ContactsRepository{
  findAll(){
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id){
    return new Promise((resolve) =>{
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    })
  }
}


module.exports = new ContactsRepository();
