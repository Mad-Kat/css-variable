import {createVar} from "css-variable";
import { tests } from "../fixtures/a";

describe("createVar", () => {
    it("generates a variable name with swc plugin", () => {
      const foo = createVar();
      const bar = createVar();
      const baz = createVar();
      expect(foo.name).toMatchInlineSnapshot(`"--2hzhhy0"`);
      expect(bar.name).toMatchInlineSnapshot( `"--2hzhhy1"`);
      expect(baz.name).toMatchInlineSnapshot( `"--2hzhhy2"`);
    });
  });

describe("createVar", () => {
  it.each(tests)("Generates the correct name for variable $test.name", ({test, verify, value}) => {
    expect(test.name).toEqual(verify);
		if(!value){
    	expect(test.val).toEqual(`var(${verify})`);
		} else {
			expect(test.val).toEqual(`var(${verify}, ${value})`);
		}
  });
});

