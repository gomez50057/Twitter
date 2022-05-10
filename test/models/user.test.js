const user = require("./../../app/models/user");

describe("Unit Tests for User class", () => {
  test("Create an Iser object", () => {
    const user1 = new user(1, "carlogilmar", "Carlo", "Bio");

    expect(user1.id).toBe(1);
    expect(user1.username).toBe("carlogilmar");
    expect(user1.name).toBe("Carlo");
    expect(user1.bio).toBe("Bio");
    expect(user1.dateCreated).not.toBeUndefined();
    expect(user1.lastUpdated).not.toBeUndefined();
  });

  test("Add getters", () => {
    const user2 = new user(1, "carlogilmar", "Carlo", "Bio");
    expect(user2.getUsername).toBe("carlogilmar");
    expect(user2.getBio).toBe("Bio");
    expect(user2.getDateCreated).not.toBeUndefined();
    expect(user2.getLastUpdated).not.toBeUndefined();
  });

  test("Add setters", () => {
    const user3 = new user(1, "carlogilmar", "Carlo", "Bio");
    user3.setUsername = "Gilmar";
    expect(user3.username).toBe("Gilmar");

    user3.setBio = "New Bio";
    expect(user3.bio).toBe("New Bio");
  });
});
