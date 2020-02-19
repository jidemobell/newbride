
CREATE TABLE IF NOT EXISTS bridal_app.users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(25),
  date_created TIMESTAMP,
  last_login TIMESTAMP
);


-- CREATE TYPE bridal_app.user_roles AS ENUM('admin', 'users')

-- CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA bridal_app;

ALTER TABLE bridal_app.users ADD COLUMN IF NOT EXISTS role_type TEXT;


ALTER TABLE bridal_app.users ALTER COLUMN role_type SET DEFAULT 'users';
ALTER TABLE bridal_app.users ALTER COLUMN date_created SET DEFAULT NOW();


ALTER TABLE bridal_app.users ALTER COLUMN username SET DATA TYPE TEXT;
ALTER TABLE bridal_app.users ALTER COLUMN password SET DATA TYPE TEXT;

ALTER TABLE bridal_app.users ALTER COLUMN date_created SET DATA TYPE TIMESTAMP;
ALTER TABLE bridal_app.users ALTER COLUMN last_login SET DATA TYPE TIMESTAMP;


ALTER TABLE bridal_app.users ALTER COLUMN username SET NOT NULL;
ALTER TABLE bridal_app.users ALTER COLUMN password SET NOT NULL;

-- CREATE TABLE posts (
--   pid SERIAL PRIMARY KEY,
--   title VARCHAR(255),
--   body VARCHAR,
--   user_id INT REFERENCES users(uid),
--   author VARCHAR REFERENCES users(username),
--   date_created TIMESTAMP
--   like_user_id INT[] DEFAULT ARRAY[]::INT[],
--   likes INT DEFAULT 0
-- );

-- CREATE TABLE comments (
--   cid SERIAL PRIMARY KEY,
--   comment VARCHAR(255),
--   author VARCHAR REFERENCES users(username),
--   user_id INT REFERENCES users(uid),
--   post_id INT REFERENCES posts(pid),
--   date_created TIMESTAMP
-- );