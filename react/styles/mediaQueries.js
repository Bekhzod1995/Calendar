export const breakpoints = {
	sm: 20,
	md: 30,
	lg: 45,
	xl: 60,
};

const mediaQueries = (key) => (style) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
export default mediaQueries;
