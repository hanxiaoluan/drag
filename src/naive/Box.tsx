import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style: React.CSSProperties = {
	position: 'absolute',
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
}

interface BoxProps {
	id: any
	left: number
	top: number
	hideSourceOnDrag: boolean
}
export const Box: React.FC<BoxProps> = ({ id, left, top, hideSourceOnDrag, children }) => {

	// 掉用useDrag的hook
	const [ collectprops, drag ] = useDrag({
		item: { id, left, top, type: ItemTypes.BOX },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	})
	
	// 通过useDrag收集的collect的属性来判断是否在drag,然后根据hideSourceOnDrag的prop来隐藏原声元素
	const { isDragging } = collectprops
	
	if (isDragging && hideSourceOnDrag) {
		return <div ref={drag} />
	}


	return (
		<div style={{ ...style, left, top }} ref={drag}>
			{children}
		</div>
	)
}