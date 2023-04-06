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

  store(){
    //cirar novo registro
  }

  update(){
    //editar um registro
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
