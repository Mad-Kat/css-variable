// import {createVar} from "css-variable";
import { vars } from "../fixtures/CSSVariable";

// describe("createVar", () => {
//     it("generates a variable name with swc plugin", () => {
//       const foo = createVar();
//       const bar = createVar();
//       const baz = createVar();
//       expect(foo.name).toMatchInlineSnapshot(`"--2hzhhy0"`);
//       expect(bar.name).toMatchInlineSnapshot( `"--2hzhhy1"`);
//       expect(baz.name).toMatchInlineSnapshot( `"--2hzhhy2"`);
//     });
//   });

describe("createVar", () => {
	it.each(vars)(`Generates the correct string representation for ${process.env['TEST_ENV']} with $value`, ({value, withoutName, withName}) => {
		if(process.env['TEST_ENV']==="test-with-displayName"){
    	expect(value).toBe(withName);
		}

		if(process.env['TEST_ENV']==="test-without-displayName"){
    	expect(value).toBe(withoutName);
		}
  });
});

