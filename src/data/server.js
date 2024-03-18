import {useState} from "react"
import axios from "axios"


export default async function dataGrabber() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(0)

  const options = {
		method: 'GET',
		url: 'https://api.spoonacular.com/food/menuItems/search',
		params: {
      query: {query},
			number: '10',
			offset: {page}
		},
		headers: {
			'x-api-key': import.meta.env.VITE_API_KEY
		}
	};
	try {
		let response = await axios(options);
		console.log(response.data);
	} catch (error) {
		console.error(error.response);
	}
}