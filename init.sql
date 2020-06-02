
CREATE TABLE IF NOT EXISTS app.users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(25),
  date_created TIMESTAMP,
  last_login TIMESTAMP
);

CREATE TABLE IF NOT EXISTS app.images (
	id SERIAL PRIMARY KEY,
	name TEXT UNIQUE,
	image_url TEXT
);

CREATE TABLE IF NOT EXISTS app.pages (
  id SERIAL PRIMARY KEY,
	page_name TEXT UNIQUE,
	image_ids JSONB[]
);

CREATE TABLE IF NOT EXISTS app.cloudinary (
  id SERIAL PRIMARY KEY,
  public_id TEXT UNIQUE NOT NULL,
	url TEXT  NOT NULL,
	uploaded_at TEXT,
	inserted_at TIMESTAMP
);


ALTER TABLE app.users ADD COLUMN IF NOT EXISTS role_type TEXT;
ALTER TABLE app.images ADD COLUMN IF NOT EXISTS page_ids JSONB[];
ALTER TABLE app.images ADD COLUMN IF NOT EXISTS date_uploaded TIMESTAMP DEFAULT NOW();
ALTER TABLE app.pages ADD COLUMN IF NOT EXISTS date_edited TIMESTAMP;



ALTER TABLE app.users ALTER COLUMN role_type SET DEFAULT 'users';
ALTER TABLE app.users ALTER COLUMN date_created SET DEFAULT NOW();


ALTER TABLE app.users ALTER COLUMN username SET DATA TYPE TEXT;
ALTER TABLE app.users ALTER COLUMN password SET DATA TYPE TEXT;

-- ALTER TABLE app.users DROP COLUMN id;
-- ALTER TABLE app.images DROP COLUMN id;
-- ALTER TABLE app.pages DROP COLUMN id;
-- ALTER TABLE app.cloudinary DROP COLUMN id;

ALTER TABLE app.users ADD COLUMN IF NOT EXISTS id UUID;
ALTER TABLE app.images ADD COLUMN IF NOT EXISTS id UUID;
ALTER TABLE app.pages ADD COLUMN IF NOT EXISTS id UUID;
ALTER TABLE app.cloudinary ADD COLUMN IF NOT EXISTS id UUID;


-- ALTER TABLE app.users ALTER COLUMN id SET DEFAULT app.uuid_generate_v4();
-- ALTER TABLE app.images ALTER COLUMN id SET DEFAULT app.uuid_generate_v4();
-- ALTER TABLE app.pages ALTER COLUMN id SET DEFAULT app.uuid_generate_v4();
-- ALTER TABLE app.cloudinary ALTER COLUMN id SET DEFAULT app.uuid_generate_v4();

-- ALTER TABLE app.users ALTER COLUMN id SET DEFAULT uuid_generate_v4();
-- ALTER TABLE app.images ALTER COLUMN id SET DEFAULT uuid_generate_v4();
-- ALTER TABLE app.pages ALTER COLUMN id SET DEFAULT uuid_generate_v4();
-- ALTER TABLE app.cloudinary ALTER COLUMN id SET DEFAULT uuid_generate_v4();

ALTER TABLE app.users ALTER COLUMN date_created SET DATA TYPE TIMESTAMP;
ALTER TABLE app.users ALTER COLUMN last_login SET DATA TYPE TIMESTAMP;


ALTER TABLE app.users ALTER COLUMN username SET NOT NULL;
ALTER TABLE app.users ALTER COLUMN password SET NOT NULL;


ALTER TABLE app.cloudinary ALTER COLUMN inserted_at SET DEFAULT NOW();

