import React, { useState } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import { ItemTypes }  from './ItemTypes'
import { Box } from './Box'

const styles: React.CSSProperties = {
	width: 300,
	height: 300,
	border: '1px solid black',
	position: 'relative',
}


export const Container: React.FC = () => {
	return (
		<div style={styles}>
			<Box />
		</div>
	)
}