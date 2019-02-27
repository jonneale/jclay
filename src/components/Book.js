import React from "react"

function Book(props) {
	return(
		<li>
			<h4>{props.title}</h4>
			<img src={props.image} alt={props.title + " Cover Image"}/>
			<h5>{props.author}</h5>
		</li>
	)
}

export default Book