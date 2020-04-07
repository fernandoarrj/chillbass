export const calculateMargin = props => {
	if (props.marginMedium) {
		return `margin: 15px;`
	}

	if (props.marginLarge) {
		return `margin: 30px;`
	}

	if (props.marginSmall) {
		return `margin: 5px;`
	}
}
