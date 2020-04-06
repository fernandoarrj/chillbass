import React from 'react'
import { render } from '@testing-library/react'

import Flex from './Flex'

describe('Flex Component Test', () => {

	it('should be a div', () => {
		const { container } = render(<Flex />)
		const flex = container.firstChild

		expect(flex.tagName).toBe('DIV')
	})

	it('should be display flex', () => {
		const { container } = render(<Flex />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('display', 'flex')
	})

	it('should be flex-direction row', () => {
		const { container } = render(<Flex directionRow />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('flex-direction', 'row')
	})

	it('should be flex-direction column', () => {
		const { container } = render(<Flex directionColumn />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('flex-direction', 'column')
	})

	it('should be flex-direction row-reverse', () => {
		const { container } = render(<Flex directionRowReverse />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('flex-direction', 'row-reverse')
	})

	it('should be a flex-direction column-reverse', () => {
		const { container } = render(<Flex directionColumnReverse />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('flex-direction', 'column-reverse')
	})

	it('should be flex-wrap nowrap', () => {
		const { container } = render(<Flex noWrap/>)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('flex-wrap', 'no-wrap')
	})

	it('should be flex-wrap wrap', () => {
		const { container } = render(<Flex wrap/>)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
	})

	it('should be flex-wrap wrap-reverse', () => {
		const { container } = render(<Flex wrapReverse />)
		const flex = container.firstChild
		
		expect(flex).toHaveStyleRule('flex-wrap', 'wrap-reverse')
	})

	it('should be change alignItems to start', () => {
		const { container } = render(<Flex alignItemsStart />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-items', 'start')
	})

	it('should be change alignItems to end', () => {
		const { container } = render(<Flex alignItemsEnd />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-items', 'end')
	})

	it('should be change alignItems to center', () => {
		const { container } = render(<Flex alignItemsCenter />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-items', 'center')
	})

	it('should be change alignItems to stretch', () => {
		const { container } = render(<Flex alignItemsStretch />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-items', 'stretch')
	})

	it('should be change alignContent to start', () => {
		const { container } = render(<Flex alignContentStart />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'start')
	})

	it('should be change alignContent to end', () => {
		const { container } = render(<Flex alignContentEnd />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'end')
	})

	it('should be change alignContent to center', () => {
		const { container } = render(<Flex alignContentCenter />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'center')
	})

	it('should be change alignContent to stretch', () => {
		const { container } = render(<Flex alignContentStretch />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'stretch')
	})

	it('should be change alignContent to space-around', () => {
		const { container } = render(<Flex alignContentSpaceAround />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'space-around')
	})

	it('should be change alignContent to space-between', () => {
		const { container } = render(<Flex alignContentSpaceBetween />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'space-between')
	})

	it('should be change alignContent to space-evenly', () => {
		const { container } = render(<Flex alignContentSpaceEvenly />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('align-content', 'space-evenly')
	})

	it('should calculate padding', () => {
		// padding meddium has 15px
		const { container } = render(<Flex paddingMedium />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('padding', '15px')
	})

	it('should be change the background color', () => {
		const { container } = render(<Flex backgroundColor="red" />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('background-color', 'red')
	})

	it('should be render with full height', () => {
		const { container } = render(<Flex fullHeight/>)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('height', '100vh')
	})

	it('should be render with full width', () => {
		const { container } = render(<Flex fullWidth/>)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('width', '100%')
	})

	it('should has a boxSizing border-box', () => {
		const { container } = render(<Flex borderBox />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('box-sizing', 'border-box')
	})

	it('should be change justifyContent to start', () => {
		const { container } = render(<Flex justifyContentStart />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'start')
	})

	it('should be change justifyContent to end', () => {
		const { container } = render(<Flex justifyContentEnd />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'end')
	})

	it('should be change justifyContent to center', () => {
		const { container } = render(<Flex justifyContentCenter />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'center')
	})

	it('should be change justifyContent to stretch', () => {
		const { container } = render(<Flex justifyContentStretch />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'stretch')
	})

	it('should be change justifyContent to space-around', () => {
		const { container } = render(<Flex justifyContentSpaceAround />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'space-around')
	})

	it('should be change justifyContent to space-between', () => {
		const { container } = render(<Flex justifyContentSpaceBetween />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'space-between')
	})

	it('should be change justifyContent to space-evenly', () => {
		const { container } = render(<Flex justifyContentSpaceEvenly />)
		const flex = container.firstChild

		expect(flex).toHaveStyleRule('justify-content', 'space-evenly')
	})


})
