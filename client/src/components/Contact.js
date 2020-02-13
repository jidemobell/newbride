import React from 'react'

import Header from './Headers/Header'
import Footer from './Footer'

export default function Contact(){
	return (
		<div className="App flex-col">
		<div className="top flex-col">
			<Header />
			{/* <section
				style={{ padding: "10px 40px", flexWrap: "wrap", boxSizing: "content-box" }}
				className="flex-row center"
			>
				{weddings.map(wedding => {
					return <Slot pic={wedding} />;
				})}
			</section> */}
		</div>
		<Footer />
	</div>
	)
}