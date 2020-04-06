import styled from 'styled-components'

import { calculatePadding } from '../../../utils/layout/calculatePadding'
import { maxWidth } from '../../../utils/layout/sizes'

export default styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-left: auto;
	margin-right: auto;
	max-width: 300px;

	background-color: ${ props => props.backgroundColor
		? props.backgroundColor
		: 'none'
	};

	${ props => {
		if (props.maxWidthXs) { return maxWidth.xs }
		if (props.maxWidthSm) { return maxWidth.sm }
		if (props.maxWidthMd) { return maxWidth.md }
		if (props.maxWidthLg) { return maxWidth.lg }
		if (props.maxWidthXl) { return maxWidth.xl }
	}}

	${ props => {
		const styles = []

		if (props.fullHeight) { styles.push('height: 100vh;') }

		return styles.join('\n')
	}}

	${ props => {
		return calculatePadding(props)
	}}
`
