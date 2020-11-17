import React, { useState } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import { ItemTypes }  from './ItemTypes'
import { Box } from './Box'
import { DragItem } from './interface'
import update from 'immutability-helper'
const styles: React.CSSProperties = {
	width: 300,
	height: 300,
	border: '1px solid black',
	position: 'relative',
}

interface ContainerProps {
	hiddenSourceOnDrag: boolean
}
interface ContainerState {
	boxes: {
		[key: string]: {
			top: number
			left: number
			title: string
		}}
}

export const Container: React.FC<ContainerProps> = ({ hiddenSourceOnDrag }) => {

	// 设置初始box的位置和属性
	const [ boxes, setBoxes ] = useState<{
		[key: string]: {
			top: number
			left: number
			title: string
		}
	}>({
		a: { top: 20, left: 80, title: 'Drag me around' },
		b: { top: 180, left: 20, title: 'Drag me too' },
	})


	//通过useDrop来获取drop时的偏移量，并drop时进行设置
	const [ , drop ] = useDrop({
		accept: ItemTypes.BOX,
		drop(item: DragItem, monitor) {
			const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
			const left = Math.round(item.left + delta.x)
			const top = Math.round(item.top + delta.y)
			moveBox(item.id, left, top)
			return undefined
		}
	})

	// 设置box位置的函数
	const moveBox = (id: string, left: number, top: number) => {
		setBoxes(
			update(boxes, {
				[id]: {
					$merge: { left, top }
				}
			})
		)
	}


	return (
		<div style={styles} ref={drop}>
			{Object.keys(boxes)
				.map(key => {
					const { left, top, title } = boxes[key]
					return (
						<Box 
							key={key}
							id={key}
							left={left}
							top={top}
							hideSourceOnDrag={hiddenSourceOnDrag}
						>
							{title}
						</Box>
					)
				})}
		</div>
	)
}