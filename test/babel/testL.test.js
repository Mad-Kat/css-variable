import * as asdf from "../fixtures/a";

describe("createVar", () => {
  it("generates a variable name with swc plugin", () => {
    console.log(asdf);
    expect(asdf.default.test.name).toEqual(asdf.default.verify);
  });
});
