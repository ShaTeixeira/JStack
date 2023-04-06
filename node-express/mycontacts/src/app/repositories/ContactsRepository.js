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

  findByEmail(email){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  create( {
    name, email, phone, category_id
    }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      }

      contacts.push(newContact);

      resolve(newContact);
    })
  }

  update(id, {
    name, email, phone, category_id
    }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      }

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact: contact
      ));

      resolve(updatedContact)
    })
  }

}


module.exports = new ContactsRepository();
