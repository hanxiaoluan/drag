import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { ItemType } from './ItemTypes'
import { boxImage } from './boxImage'

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
	width: '20rem',
}

export const BoxWithImage: React.FC = () => {
	const [ collectedProps, drag, preview ] = useDrag({
		item: { type: ItemType.BOX },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.4 : 1
		})
	})


	const { opacity } = collectedProps

	return (
		<>
			<DragPreviewImage src={boxImage} connect={preview}/>
			<div ref={drag} style={{ ...style, opacity }}>
            Drag me to see an image.
			</div>
		</>
	)
}
  