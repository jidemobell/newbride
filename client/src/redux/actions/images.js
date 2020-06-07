import axios from 'axios'
import { SET_ERROR, UPLOAD, FETCHIMG } from '../actionConstants';



export const uploadAction = (imgObject) => {
  return dispatch => {
    axios
		.post("/image/uploadmutler", imgObject)
		.then(response => {
			// console.log("back response", response)
			if (response.status === 200) {
				console.log("upload done", response.data);	
				// fetchImages()
				dispatch ({
					type: UPLOAD,
					payload: {
						success: true
					}
				})
			}
		})
		.catch(error => {
			dispatch ({
				type: SET_ERROR,
				payload: {
					error
				}
			})
		});
	}
};


export const fetchImages = () => {
	return dispatch => {
		axios.get('./image/fetchimages')
	.then((response) => {
		if(response.status === 200){
			dispatch( {
				type: FETCHIMG,
				payload: response.data
			})
		}
	})
	.catch((err) => {
	  dispatch({ type: "SET_ERROR", payload: err }) 
	})
	}
}