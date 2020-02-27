import React from 'react'

// function toggleNav() {
//   return null;
// }

export default function AdminTab({toggleNav}){
	return (
		<nav className="top-navs flex-row">
		<li onClick={() => toggleNav('users')}>
			<span>users</span>
		</li>
		<li  onClick={() => toggleNav('pages')}>
			<span>pages</span>
		</li>
		<li  onClick={() => toggleNav('images')}>
			<span>images</span>
		</li>
	</nav>
	)
}