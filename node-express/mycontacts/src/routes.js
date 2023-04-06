const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController')

const router = Router();

router.get(
  '/contacts',

  // Middleware 1
/*
  (request, response, next) => {
    request.appId = 'MyAppID';
    next();
    ? adicionar o response.send('Intercepted by Middleware');
  },
*/

  ContactController.index
);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

module.exports = router;
