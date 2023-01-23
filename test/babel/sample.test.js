const {tests } =  require("../fixtures/a");

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