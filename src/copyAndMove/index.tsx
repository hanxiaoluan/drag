import React from 'react'
import Example from './exmple'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
	return (
		<div>
			<DndProvider backend={HTML5Backend}>
				<Example />
			</DndProvider>
		</div>
	)
}