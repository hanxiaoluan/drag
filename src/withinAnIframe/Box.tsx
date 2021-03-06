import React from 'react'
import { ItemTypes } from './ItemTypes'
import { DragSourceMonitor, useDrag } from 'react-dnd'
const style: React.CSSProperties = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}
interface BoxProps {
    name: string
}
const Box: React.FC<BoxProps> = ({ name }) => {
	const [ { isDragging }, drag ] = useDrag({
		item: { name, type: ItemTypes.BOX },
		end: (item: {name: string}|undefined, monitor: DragSourceMonitor) => {
			const dropResult = monitor.getDropResult()
			if (item && dropResult) {
				alert(`You dropped ${item.name} into ${dropResult.name}`)
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		})
	})
	const opacity = isDragging ? 0.4 : 1
	return (
		<div style={{ ...style, opacity }} ref={drag}>
			{name}
		</div>
	)
}

export default Box