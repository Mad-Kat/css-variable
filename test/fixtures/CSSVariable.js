import { createVar } from "css-variable";

const primary = createVar();
const secondary = createVar({ value: '#fff' });
const allColors = ["c1", "c2", "c3"];

const theme = {
    colors: {
        primary: createVar()
    } 
};

const generated = allColors.map((color) => createVar(color));

const generatedWithFallback = allColors.map((color) => createVar(color, { value: '#000' }));

export const fileHashBase64 = "GC_OuQ";
export const vars = [
	{
		value: primary.toString(),
		withoutName: 'var(--GC_OuQ0)',
		withName: 'var(--primary--GC_OuQ0)',
	},
	{
		value: secondary.toString(),
		withoutName: 'var(--GC_OuQ1, #fff)',
		withName: 'var(--secondary--GC_OuQ1, #fff)',
	},
	{
		value: theme.colors.primary.toString(),
		withoutName: 'var(--GC_OuQ2)',
		withName: 'var(--primary--GC_OuQ2)',
	},
	{
		value: generated[0].toString(),
		withoutName: 'var(--GC_OuQ3-c1)',
		withName: 'var(--GC_OuQ3-c1)',
	},
	{
		value: generated[1].toString(),
		withoutName: 'var(--GC_OuQ3-c2)',
		withName: 'var(--GC_OuQ3-c2)',
	},
	{
		value: generated[2].toString(),
		withoutName: 'var(--GC_OuQ3-c3)',
		withName: 'var(--GC_OuQ3-c3)',
	},
	{
		value: generatedWithFallback[0].toString(),
		withoutName: 'var(--GC_OuQ4-c1, #000)',
		withName: 'var(--GC_OuQ4-c1, #000)',
	},
	{
		value: generatedWithFallback[1].toString(),
		withoutName: 'var(--GC_OuQ4-c2, #000)',
		withName: 'var(--GC_OuQ4-c2, #000)',
	},
	{
		value: generatedWithFallback[2].toString(),
		withoutName: 'var(--GC_OuQ4-c3, #000)',
		withName: 'var(--GC_OuQ4-c3, #000)',
	},
]