const UserView = require("./../../app/views/UserView");

describe("Tests for UserView", () => {
  /*test("Return an error object when try to create a new user with an null payload", () => {
    const payload = null;
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/payload no existe/);
    //https://jestjs.io/docs/using-matchers#strings
  });*/

  /*test("Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = { username: null, name: 12, id: "id" };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/necesitan tener un valor valido/);
  });*/

  test("Create a user by a given valid payload", () => {
    const result = UserView.create(1, "username", "name");
    const userInfoInlist = UserView.getInfo(result);
    expect(userInfoInlist[0]).toBe(1);
    expect(userInfoInlist[1]).toBe("username");
    expect(userInfoInlist[2]).toBe("name");
  });
});
