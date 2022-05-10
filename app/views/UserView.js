const User = require("./../models/user");

class UserView {
  static create(id, username, name) {
    return new User(id, username, name);
  }

  get error() {
    if (this.username == null || this.name == null || this.id == null) {
      return "necesitan tener un valor valido";
    }
    return "todo bien";
  }

  static getInfo(result) {
    return [result.id, result.username, result.name];
  }
}

module.exports = UserView;
