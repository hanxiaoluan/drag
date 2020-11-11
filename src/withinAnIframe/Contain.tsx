import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import Dustbin from '../demo1/Dustbin'
import Box from './Box'
const FrameBindingContext: React.FC = ({ children }) => {
	return (
		<FrameContextConsumer>
			{
				({ window }: any) => (
					<DndProvider backend={HTML5Backend} context={window}>
						{children}
					</DndProvider>
				)
			}
		</FrameContextConsumer>
	)
}

export const Container: React.FC = () => {
	return (
		<React.Fragment>
			<Frame style={{ width: '100%', height: 400 }}>
				<FrameBindingContext>
					<div>
						<div style={{ overflow: 'hidden', clear: 'both' }}><Dustbin /></div>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Box name="Glass"/>
							<Box name="Banana" />
							<Box name="Paper" />
						</div>
					</div>
				</FrameBindingContext>
			</Frame>
		</React.Fragment>
	)
}
