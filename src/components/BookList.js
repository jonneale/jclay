import React from "react"
import Book from "./Book"

function BookList() {
	return(
		<ul>
			<Book 
				title="Accelerando"
				author="Charles Stross"
				image="https://images-na.ssl-images-amazon.com/images/I/51XFWATR9QL._SX303_BO1,204,203,200_.jpg"
			/>
			<Book 
				title="Intuition Pumps and Other Tools for Thinking"
				author="Daniel Dennett"
				image="https://images-na.ssl-images-amazon.com/images/I/51J2hn53m%2BL._SX342_.jpg"
			/>

		</ul>
	)
}

export default BookList