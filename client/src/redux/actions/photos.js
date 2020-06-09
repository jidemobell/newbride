
import axios from 'axios'
import { PULL_PHOTOS, LIST_PHOTOS } from '../actionConstants';



export const uploadImage = () => {
	return dispatch => {
		axios.post('/image/push/getcloudinaryphotos')
	.then((response) => {
		console.log("the upload response", response)
		if(response.status === 200){
			dispatch(listCloudinaryPhotos())
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