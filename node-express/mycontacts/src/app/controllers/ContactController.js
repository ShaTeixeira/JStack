const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController{
  async index(request, response){
    //listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);

    /* response.send(request.appId); */
  }

  async show(request, response){
    //obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact){
      // 404: not found
      return response.status(404).json({ error: 'user not found' });
    }

    response.json(contact);
  }

  async store(request, response){
    //criar novo registro
    const { name, email, phone, category_id } = request.body;

    if(!name){
      return response.status(400).json({ error: 'Name is required' })
    }

    const contactExists = await ContactsRepository.findByEmail(email);
    if (contactExists){
      return response.status(400).json({ error: 'This email is alreay in use' })
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    })

    response.json(contact);
  }

  async update(request, response){
    //editar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findById(id);
    if(!contactExists){
      return response.status(404).json({ error: 'User not found' });
    }

    if(!name){
      return response.status(400).json({ error: 'Name is required' })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id){
      return response.status(400).json({ error: 'This email is alreay in use' })
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    })

    response.json(contact);
  }

  async delete(request, response){
    //deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact){
      // 404: not found
      return response.status(404).json({ error: 'user not found' });
    }

    await ContactsRepository.delete(id);
    // 204: no content - deu certo mas nao tem corpo
    response.sendStatus(204);
  }
}

//Singleton
module.exports = new ContactController();
