import axios from 'axios'
import {GET_PAGE, LIST_PAGES} from '../actionConstants'

export  function getPage(id, token){
	return async dispatch => {
		try {
			let response = await axios.post(`/pages?id=${id}`,
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

export  function listPages(token){
	return async dispatch => {
		try {
			let response = await axios.post(`/pages/list`,
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