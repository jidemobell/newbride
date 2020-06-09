//users
const ADMIN_REGISTER_QUERY = `INSERT INTO app.users (username, password, role_type) VALUES ($1, $2, $3)`;
const DASHBOARD_USER_QUERY = `SELECT * from app.users WHERE id=$1`;
const USERS_LIST_QUERY = `SELECT * from app.users`;

//pages
const GET_PAGE_QUERY = `SELECT * from app.pages WHERE id=$1`;
const GET_PAGES_QUERY =  `SELECT * from app.pages`;

//cloudinary
const UPDATE_CLOUDINARY_FROM_API =`INSERT INTO app.cloudinary (public_id, url, uploaded_at) VALUES ($1, $2, $3) ON CONFLICT ON CONSTRAINT cloudinary_public_id_key DO NOTHING;`
const LIST_CLOUDINARY_IMAGES = `select * from app.cloudinary;`
const ATTACH_IMAGE_TO_PAGE = 'INSERT INTO app.pages_images_table(page_name,image_id,entry_no) VALUES ($1,$2,$3);'
const REMOVE_IMAGE_FROM_PAGE = 'UPDATE app.pages_images_table SET page_name=null,image_id=null WHERE entry_no = $1;'
const LIST_IMAGES_ON_PAGE = `select * from app.pages_images_table where page_name = '$1' order by entry_no;`
const DEL_IMAGE_FROM_GALLERY = `delete from app.cloudinary where id = '$1'`;


module.exports = {
	ADMIN_REGISTER_QUERY,
	GET_PAGE_QUERY,
	GET_PAGES_QUERY,
	DASHBOARD_USER_QUERY,
	USERS_LIST_QUERY,
	UPDATE_CLOUDINARY_FROM_API,
	LIST_CLOUDINARY_IMAGES,
	ATTACH_IMAGE_TO_PAGE,
	REMOVE_IMAGE_FROM_PAGE,
	LIST_IMAGES_ON_PAGE,
	DEL_IMAGE_FROM_GALLERY
}