import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemsTypes } from './ItemTypes'
const style: React.CSSProperties = {
	position: 'absolute',
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
}

export const Box: React.FC = ({ children }) => {
	return (
		<div style={{ ...style }}>
			{children}
		</div>
	)
}