import styled from 'styled-components'

import { calculatePadding } from '../../../utils/layout/calculatePadding'
import boxShadow from '../../../utils/styling/boxShadow'

export default styled.div`
	display: flex;
	flex: ${ props => props.flex
		? props.flex.toString()
		: '0'
	};
	
	background-color: ${ props => props.backgroundColor 
		? props.backgroundColor 
		: 'none' 
	}; 
	box-sizing: border-box;

	${ props => {
		const styles = []

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

		if (props.alignItemsStart) { styles.push('align-items: start;') }
		if (props.alignItemsEnd) { styles.push('align-items: end;') } 
		if (props.alignItemsCenter) { styles.push('align-items: center;') }
		if (props.alignItemsStretch) { styles.push('align-items: stretch;') }

		if (props.directionRow) { styles.push('flex-direction: row;') }
		if (props.directionColumn) { styles.push('flex-direction: column;') }
		if (props.directionRowReverse) 
			{ styles.push('flex-direction: row-reverse;') }
		if (props.directionColumnReverse) 
			{ styles.push('flex-direction: column-reverse;') }

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
		
		if (props.noWrap) { styles.push('flex-wrap: no-wrap;')}
		if (props.wrap) { styles.push('flex-wrap: wrap;')}
		if (props.wrapReverse) { styles.push('flex-wrap: wrap-reverse;')}

		if (props.fullWidth) { styles.push('width: 100%;') }
		if (props.fullHeight) { styles.push('height: 100vh;') }
		if (props.borderBox) { styles.push('box-sizing: border-box;') }
		if (props.stickyTopRightLeft) { 
			styles.push('position: sticky; top: 0; right: 0; left: 0;')
		}
		if (props.fixed) {
			styles.push('position: fixed')
		}
		if (props.relative) { styles.push('position: relative;') }
		if (props.boxShadow) { styles.push(boxShadow) }
	
		return styles.join('\n')
	}}

	${ props => {
		return calculatePadding(props)
	}}
`
