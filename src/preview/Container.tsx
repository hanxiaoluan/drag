import React from 'react'
import { BoxWithImage } from './BoxWithPreview'
import { BoxWithHandle } from './BoxWithHandle'

export const Container: React.FC = () => {
	return (
		<div>
			<div style={{ margin: '1.5rem' }}>
				<BoxWithHandle />
				<BoxWithImage />
			</div>
		</div>
	)
}