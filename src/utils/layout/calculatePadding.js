export const calculatePadding = props => {
	if (props.paddingMedium) {
		return `padding: 15px;`
	}

	if (props.paddingLarge) {
		return `padding: 30px;`
	}

	if (props.paddingSmall) {
		return `padding: 5px;`
	}
}
