import React from 'react'
import { render } from '@testing-library/react'

import Grid from './Grid'

describe('Grid Component Test', () => {
	
	it('should be div component', () => {
		const { container } = render(<Grid />)
		const grid = container.firstChild

		expect(grid.tagName).toBe('DIV')
	})

	it('should be display grid', () => {
		const { container } = render(<Grid />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('display', 'grid')
	})

	it('should be change template columns', () => {
		const { container } = render(<Grid columns="1fr 1fr" />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('grid-template-columns', '1fr 1fr')
	})

	it('should be change to relative', () => {
		const { container } = render(<Grid relative />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('display', 'relative')
	})

	it('should be change gap', () => {
		const { container } = render(<Grid gap="30px" />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('gap', '30px')
	})

	it('should be change alignItems to start', () => {
		const { container } = render(<Grid alignItemsStart />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-items', 'start')
	})

	it('should be change alignItems to end', () => {
		const { container } = render(<Grid alignItemsEnd />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-items', 'end')
	})

	it('should be change alignItems to center', () => {
		const { container } = render(<Grid alignItemsCenter />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-items', 'center')
	})

	it('should be change alignItems to stretch', () => {
		const { container } = render(<Grid alignItemsStretch />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-items', 'stretch')
	})

	it('should be change justifyItems to start', () => {
		const { container } = render(<Grid justifyItemsStart />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-items', 'start')
	})

	it('should be change justifyItems to end', () => {
		const { container } = render(<Grid justifyItemsEnd />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-items', 'end')
	})

	it('should be change justifyItems to center', () => {
		const { container } = render(<Grid justifyItemsCenter />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-items', 'center')
	})

	it('should be change justifyItems to stretch', () => {
		const { container } = render(<Grid justifyItemsStretch />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-items', 'stretch')
	})

	it('should be change alignContent to start', () => {
		const { container } = render(<Grid alignContentStart />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'start')
	})

	it('should be change alignContent to end', () => {
		const { container } = render(<Grid alignContentEnd />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'end')
	})

	it('should be change alignContent to center', () => {
		const { container } = render(<Grid alignContentCenter />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'center')
	})

	it('should be change alignContent to stretch', () => {
		const { container } = render(<Grid alignContentStretch />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'stretch')
	})

	it('should be change alignContent to space-around', () => {
		const { container } = render(<Grid alignContentSpaceAround />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'space-around')
	})

	it('should be change alignContent to space-between', () => {
		const { container } = render(<Grid alignContentSpaceBetween />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'space-between')
	})

	it('should be change alignContent to space-evenly', () => {
		const { container } = render(<Grid alignContentSpaceEvenly />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('align-content', 'space-evenly')
	})

	it('should be change justifyContent to start', () => {
		const { container } = render(<Grid justifyContentStart />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'start')
	})

	it('should be change justifyContent to end', () => {
		const { container } = render(<Grid justifyContentEnd />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'end')
	})

	it('should be change justifyContent to center', () => {
		const { container } = render(<Grid justifyContentCenter />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'center')
	})

	it('should be change justifyContent to stretch', () => {
		const { container } = render(<Grid justifyContentStretch />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'stretch')
	})

	it('should be change justifyContent to space-around', () => {
		const { container } = render(<Grid justifyContentSpaceAround />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'space-around')
	})

	it('should be change justifyContent to space-between', () => {
		const { container } = render(<Grid justifyContentSpaceBetween />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'space-between')
	})

	it('should be change justifyContent to space-evenly', () => {
		const { container } = render(<Grid justifyContentSpaceEvenly />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('justify-content', 'space-evenly')
	})

	it('should be render with full width', () => {
		const { container } = render(<Grid fullWidth />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('width', '100%')
	})

	it('should calculate padding', () => {
		// padding meddium has 15px
		const { container } = render(<Grid paddingMedium />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('padding', '15px')
	})
	
	it('should be render with full height', () => {
		const { container } = render(<Grid fullHeight/>)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('height', '100vh')
	})

	it('should has a boxSizing border-box', () => {
		const { container } = render(<Grid borderBox />)
		const grid = container.firstChild

		expect(grid).toHaveStyleRule('box-sizing', 'border-box')
	})
})
