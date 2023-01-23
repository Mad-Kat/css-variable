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

export const tests= [
		{
			name: '--primary',
			test: primary,
			verify: '--sd2fqv0',
		},
		{
			name: '--secondary',
			test: secondary,
			verify: "--sd2fqv1",
			value: '#fff',
		},
		{
			name: '--theme--colors--primary',
			test: theme.colors.primary,
			verify: "--sd2fqv2"
		},
		...generated.map(g => ({
			name: g.name,
			test: g,
			verify: g.name,
		})),
		...generatedWithFallback.map(g => ({
			name: g.name,
			test: g,
			verify: g.name,
			value: '#000',
		})),
	];