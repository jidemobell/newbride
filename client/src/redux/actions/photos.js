
import axios from 'axios'
import { PULL_PHOTOS, LIST_PHOTOS } from '../actionConstants';



export const pullImages = () => {
	return dispatch => {
		axios.get('/image/getcloudinaryphotos')
	.then((response) => {
		if(response.status === 200){
			console.log(response)
			dispatch( {
				type: PULL_PHOTOS,
				payload: response.data
			})
		}
	})
	.catch((err) => {
	  dispatch({ type: "SET_ERROR", payload: err }) 
	})
	}
}

export const listCloudinaryPhotos = () => {
	return dispatch => {
		axios.get('/image/listcloudinaryphotos')
	.then((response) => {
		if(response.status === 200){
			console.log(response)
			dispatch( {
				type: LIST_PHOTOS,
				payload: response.data
			})
		}
	})
	.catch((err) => {
	  dispatch({ type: "SET_ERROR", payload: err }) 
	})
	}
}