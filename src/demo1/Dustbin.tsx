import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style: React.CSSProperties = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}
export const Dustbin: React.FC = () => {
	let backgroundColor = '#222'
	const [ collectedProps, drop ] = useDrop({
		accept: ItemTypes.BOX,
		drop: () => ({ name: 'Dustbin' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	})
	const { canDrop, isOver }  = collectedProps
	const isActive = canDrop && isOver
	if (isActive) {
		backgroundColor = 'darkgreen'
	} else if (canDrop) {
		backgroundColor = 'darkkhaki'
	}
	return (
		<div style={{ ...style, backgroundColor }} ref={drop}>
			{isActive ? 'Release to drop' : 'Drag a box here'}
		</div>
	)
}
export default Dustbin