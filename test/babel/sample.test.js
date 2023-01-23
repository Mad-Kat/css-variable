const {fileHashBase64, vars } =  require("../fixtures/CSSVariable");

describe("createVar", () => {
  it.each(vars)("Generates the correct string representation with $value", ({value, withoutName, withName}) => {
		if(process.env['BABEL_ENV']==="test-with-displayName"){
    	expect(value).toBe(withName);
		}

		if(process.env['BABEL_ENV']==="test-without-displayName"){
    	expect(value).toBe(withoutName);
		}
  });
});