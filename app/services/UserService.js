const User = require("./../models/user");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin dato");
  }

  static getInfo(user) {
    return [user.id, user.username, user.name, "sin bio"];
  }

  static updateUsername(user, update) {
    return [(user.username = update)];
  }

  static getAllUsernames([user1, user2, user3]) {
    return [user1.username, user2.username, user3.username];
  }
}

module.exports = UserService;
