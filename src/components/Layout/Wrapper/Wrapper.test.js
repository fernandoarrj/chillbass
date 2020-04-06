import React from 'react'
import { render } from '@testing-library/react'

import Wrapper from './Wrapper'
import { sizes } from '../../../utils/layout/sizes'

describe('Wrapper Testing Component', () => {

	it('should be a div', () => {
		const { container } = render(<Wrapper />)
		const wrapper = container.firstChild

		expect(wrapper.tagName).toBe('DIV')
	})

	it('should be max-width', () => {
		const { container } = render(<Wrapper />)
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('max-width', '300px')
	})

	it('should be margin-left auto', () => {
		const { container } = render(<Wrapper />)
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('margin-left', 'auto')
	})

	it('should be margin-right auto', () => {
		const { container } = render(<Wrapper />)
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('margin-right', 'auto')
	})

	it('should be max-width: xs', () => {
		const { container } = render(<Wrapper maxWidthXs />)	
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('max-width', `${sizes.xs}px`)
	})

	it('should be max-width: sm', () => {
		const { container } = render(<Wrapper maxWidthSm />)	
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('max-width', `${sizes.sm}px`)
	})

	it('should be max-width: md', () => {
		const { container } = render(<Wrapper maxWidthMd />)	
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('max-width', `${sizes.md}px`)
	})

	it('should be max-width: lg', () => {
		const { container } = render(<Wrapper maxWidthLg />)	
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('max-width', `${sizes.lg}px`)
	})

	it('should be max-width: Xl', () => {
		const { container } = render(<Wrapper maxWidthXl />)	
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('max-width', `${sizes.xl}px`)
	})

	it('should change the background color', () => {
		const { container } = render(<Wrapper backgroundColor="blue"/>)
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('background-color', 'blue')
	})

	it('should be calculate padding', () => {
		const { container } = render(<Wrapper paddingMedium />)
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('padding', '15px')
	})

	it('should be calculte full height', () => {
		const { container } = render(<Wrapper fullHeight />)
		const wrapper = container.firstChild

		expect(wrapper).toHaveStyleRule('height', '100vh')
	})
})
