import axios from 'axios'
import {GET_PAGE, LIST_PAGES} from '../constants'

export  function getPage(id){
	return async dispatch => {
		let token = localStorage.getItem("token");
		try {
			let response = await axios.post(`/page?id=${id}`,
			{ headers: { Authorization: `Bearer ${token}` } }
			)
			console.log(response.data)
			dispatch({
				type:GET_PAGE,
				payload: {
					pageDate: response.data
				}
			})
		} catch (error) {
     	dispatch({
				type: "SET_ERROR",
				payload: error
			})
		}
	}
}

export  function listPages(){
	return async dispatch => {
		let token = localStorage.getItem("token");
		try {
			let response = await axios.post(`/page/list`,
			{ headers: { Authorization: `Bearer ${token}` } }
			)
			console.log('front pages', response)
			dispatch({
				type:LIST_PAGES,
				payload: {
					pagesData: response.data
				}
			})
		} catch (error) {
     	dispatch({
				type: "SET_ERROR",
				payload: error
			})
		}
	}
}