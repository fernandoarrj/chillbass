export const calculateBorderRadius = props => {
	if (props.borderRadiusMedium) {
		return `padding: 15px;`
	}

	if (props.borderRadiusLarge) {
		return `padding: 30px;`
	}

	if (props.borderRadiusSmall) {
		return `padding: 5px;`
	}
}
