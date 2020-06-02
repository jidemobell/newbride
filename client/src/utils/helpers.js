import axios from 'axios'

const checkStorage = (function(type = "localStorage"){
  let storage;
  try {
    storage = window[type]
    let x = "__storage_test__"
    storage.setItem(x,x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === "QuotaExceededError" ||
				// Firefox
				e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
			// acknowledge QuotaExceededError only if there's something already stored
			(storage && storage.length !== 0)
		);
	}
})()

export function isArrayOfStrings(arr) {
	if (!Array.isArray(arr) || !arr.length) return false;

	// eslint-disable-next-line no-unused-vars
	for (const elem of arr) if (!typeof elem === "string") return false;

	return true;
}


export function setLocalStorageItems(object) {
	if (!checkStorage) return false;

	if (typeof object === "object")
		// eslint-disable-next-line no-unused-vars
		for (const key in object) localStorage.setItem(key, object[key]);
	else throw Error("parameter passed to setLocalStorageItems must be an object");

	return true;
}



export function removeLocalStorageItems(...keys) {
	if (!checkStorage) return false;

	if (isArrayOfStrings(keys))
		// eslint-disable-next-line no-unused-vars
		for (const key of keys) localStorage.removeItem(key);
	else throw Error("parameters passed to removeLocalStorageItems must be strings");

	return true;
}

export function getLocalStorageItems(...keys) {
  console.log('checking local storage')
	if (!checkStorage) return {};

	if (!isArrayOfStrings(keys))
		throw Error("parameters passed to getLocalStorageItems must be strings");

	const data = {};
	// eslint-disable-next-line no-unused-vars
	for (const key of keys) data[key] = localStorage.getItem(key);
	return data;
}


export  function initApp (item2, action1,action2) {
  console.log("trying something")
  if(item2){
    return async dispatch => {
      // if(item1 && item2){
        action1()
        try {
          let response = await axios.get(`/users/dashboard`, {
            headers: { Authorization: `Bearer ${item2}` }
          });
          dispatch({
            type:"SET_USER",
            payload: {
              user: response.data.user
            }
          });
          action2()
          
        } catch (error) {
          dispatch({
            type:"SET_ERROR",
            payload: error
          });
        }
  }
  } else{
    action2()
  }
}


