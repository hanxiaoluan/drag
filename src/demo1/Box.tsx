import React from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
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
	const [ collectedProps, drag ] = useDrag({
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
	return (
		<div style={{ ...style }} ref={drag}>
			{name}
		</div>
	)
}
export default Box