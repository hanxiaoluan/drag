import React, { useState, useCallback } from 'react'
import { Container } from './Container'

export const Example: React.FC = () => {
	const [ hiddenSourceOnDrag, setHiddenSourceOnDrag ] = useState<boolean>(true)
	const toggle = () => setHiddenSourceOnDrag(!hiddenSourceOnDrag)
	return (
		<div>
			<Container hiddenSourceOnDrag={hiddenSourceOnDrag} />
			<p>
				<label htmlFor='hiddenSourceOnDrag'>
					<input id="hiddenSourceOnDrag" type="checkbox" checked={hiddenSourceOnDrag} onChange={toggle} />
					<small>Hide the source item while dragging</small>
				</label>
			</p>
		</div>
	)
}