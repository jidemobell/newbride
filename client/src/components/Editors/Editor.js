import React from 'react'

export default function Editor({clickbackAction}){

	const backAction = () => clickbackAction(false) 

	return (
		<div>
			<button
			 onClick={backAction}
			>Back
			</button>
			<h1>Editor</h1>
		</div>
	)
}