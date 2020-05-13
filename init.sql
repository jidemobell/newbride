
CREATE TABLE IF NOT EXISTS bridal_app.users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(25),
  date_created TIMESTAMP,
  last_login TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bridal_app.images (
	id SERIAL PRIMARY KEY,
	name TEXT UNIQUE,
	image_url TEXT
);

CREATE TABLE IF NOT EXISTS bridal_app.pages (
  id SERIAL PRIMARY KEY,
	page_name TEXT UNIQUE,
	image_ids JSONB[]
);

CREATE TABLE IF NOT EXISTS bridal_app.cloudinary (
  id SERIAL PRIMARY KEY,
  public_id TEXT UNIQUE NOT NULL,
	url TEXT  NOT NULL,
	uploaded_at TEXT,
	inserted_at TIMESTAMP
);


ALTER TABLE bridal_app.users ADD COLUMN IF NOT EXISTS role_type TEXT;
ALTER TABLE bridal_app.images ADD COLUMN IF NOT EXISTS page_ids JSONB[];
ALTER TABLE bridal_app.images ADD COLUMN IF NOT EXISTS date_uploaded TIMESTAMP DEFAULT NOW();
ALTER TABLE bridal_app.pages ADD COLUMN IF NOT EXISTS date_edited TIMESTAMP;



ALTER TABLE bridal_app.users ALTER COLUMN role_type SET DEFAULT 'users';
ALTER TABLE bridal_app.users ALTER COLUMN date_created SET DEFAULT NOW();


ALTER TABLE bridal_app.users ALTER COLUMN username SET DATA TYPE TEXT;
ALTER TABLE bridal_app.users ALTER COLUMN password SET DATA TYPE TEXT;

ALTER TABLE bridal_app.users ALTER COLUMN date_created SET DATA TYPE TIMESTAMP;
ALTER TABLE bridal_app.users ALTER COLUMN last_login SET DATA TYPE TIMESTAMP;


ALTER TABLE bridal_app.users ALTER COLUMN username SET NOT NULL;
ALTER TABLE bridal_app.users ALTER COLUMN password SET NOT NULL;


ALTER TABLE bridal_app.cloudinary ALTER COLUMN inserted_at SET DEFAULT NOW();

