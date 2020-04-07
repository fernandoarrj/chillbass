export const calculateBorderRadius = props => {
	if (props.borderRadiusMedium) {
		return `border-radius: 15px;`
	}

	if (props.borderRadiusLarge) {
		return `border-radius: 30px;`
	}

	if (props.borderRadiusSmall) {
		return `border-radius: 5px;`
	}
}
