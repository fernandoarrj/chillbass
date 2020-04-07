import styled from 'styled-components'

import { calculatePadding } from '../../../utils/layout/calculatePadding'
import boxShadow from '../../../utils/styling/boxShadow'

export default styled.div`
	display: grid;
	grid-template-columns: ${ props => props.columns ? props.columns : '1fr' };
	background-color: ${ props => props.backgroundColor 
		? props.backgroundColor 
		: 'none' 
	}; 
	gap: ${ props => props.gap ? props.gap : 'none' };
	

	${ props => {
		const styles = []
		if (props.relative) { styles.push('display: relative;') }
		if (props.alignItemsStart) { styles.push('align-items: start;') }
		if (props.alignItemsEnd) { styles.push('align-items: end;') } 
		if (props.alignItemsCenter) { styles.push('align-items: center;') }
		if (props.alignItemsStretch) { styles.push('align-items: stretch;') }
		if (props.alignContentStart) { styles.push('align-content: start;') }
		if (props.alignContentEnd) { styles.push('align-content: end;') }
		if (props.alignContentCenter) { styles.push('align-content: center;') }
		if (props.alignContentStretch) { styles.push('align-content: stretch;') }
		if (props.alignContentSpaceAround) 
			{ styles.push('align-content: space-around;') }
		if (props.alignContentSpaceBetween) 
			{ styles.push('align-content: space-between;') }
		if (props.alignContentSpaceEvenly) 
			{ styles.push('align-content: space-evenly;') }
		if (props.justifyContentStart) { styles.push('justify-content: start;') }
		if (props.justifyContentEnd) { styles.push('justify-content: end;') }
		if (props.justifyContentCenter) { styles.push('justify-content: center;') }
		if (props.justifyContentStretch) { styles.push('justify-content: stretch;') }
		if (props.justifyContentSpaceAround) 
			{ styles.push('justify-content: space-around;') }
		if (props.justifyContentSpaceBetween) 
			{ styles.push('justify-content: space-between;') }
		if (props.justifyContentSpaceEvenly) 
			{ styles.push('justify-content: space-evenly;') }
		if (props.justifyItemsStart) { styles.push('justify-items: start;') }
		if (props.justifyItemsEnd) { styles.push('justify-items: end;') }
		if (props.justifyItemsCenter) { styles.push('justify-items: center;') }
		if (props.justifyItemsStretch) { styles.push('justify-items: stretch;') }
		if (props.fullWidth) { styles.push('width: 100%;') }
		if (props.fullHeight) { styles.push('height: 100vh;') }
		if (props.borderBox) { styles.push('box-sizing: border-box;') }
		if (props.boxShadow) { styles.push(boxShadow) }
		return styles.join('\n')
	}}

	${ props => {
		return calculatePadding(props)
	}}
`

