import React from 'react'

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
	const backgroundColor = '#222'
	return (
		<div style={{ ...style, backgroundColor }}>
			{'Release to drop'}
		</div>
	)
}
export default Dustbin