import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Example from './example'

const Demo = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<Example />
		</DndProvider>
	)
}
export default Demo