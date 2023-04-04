let users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(sortedUsers));
  },

  /* -------------------------------------------------------------------------- */

  getUserById(request, response) {
    const { id } = request.params;
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return response.send(400, { error: "User not found" });
    }

    response.send(200, sortedUsers);
  },

  createUser(request, response) {
    const { body } = request

    const lastUserId = users[users.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    };

    users.push(newUser);

    response.send(200, body);
  },

  updateUser(request, response){
    const { id } = request.params
    const { name } = request.body
  },
};
