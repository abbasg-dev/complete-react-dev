const googleSearch = require("./script");

dbMock = ["dogs.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

it("silly test", () => {
  expect("hello").toBe("hello");
});

it("is is working", () => {
  expect(googleSearch("dog", dbMock)).toEqual(["dogs.com", "dogpictures.com"]);
});
