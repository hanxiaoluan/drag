import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './exmaple'

function Demo() {
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<Example />
			</DndProvider>
		</div>
	)
}

export default Demo