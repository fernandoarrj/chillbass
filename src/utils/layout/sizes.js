export const sizes = {
	xs: 600,
	sm: 960,
	md: 1280,
	lg: 1920,
	xl: 2450,
}

export const maxWidth = {
	xs: `max-width: ${sizes.xs}px;`,
	sm: `max-width: ${sizes.sm}px;`,
	md: `max-width: ${sizes.md}px;`,
	lg: `max-width: ${sizes.lg}px;`,
	xl: `max-width: ${sizes.xl}px;`,
}

export const maxWidthMediaQuery = {
	xs: `@media (max-width: ${sizes.xs})`,
	sm: `@media (max-width: ${sizes.sm})`,
	md: `@media (max-width: ${sizes.md})`,
	lg: `@media (max-width: ${sizes.lg})`,
	xl: `@media (max-width: ${sizes.xl})`,
}
