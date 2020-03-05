import axios from 'axios'
import { SET_ERROR, UPLOAD, FETCHIMG } from '../constants';



export const uploadAction = (imgObject) => {
  return dispatch => {
    axios
		.post("/image/uploadmutler", imgObject)
		.then(response => {
			console.log("back response", response)
			if (response.status === 200) {
				console.log("upload done");	
				fetchImages()
				// return {
				// 	type: UPLOAD,
				// 	payload: {
				// 		success: true
				// 	}
				// }
			}
		})
		// .then(() => fetchImages())
		.catch(error => {
			console.log(error.stack);
			return {
				type: SET_ERROR,
				payload: {
					error
				}
			}
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