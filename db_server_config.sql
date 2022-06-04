CREATE USER "admin" WITH PASSWORD 'password';
CREATE ROLE
CREATE USER "app_user" WITH PASSWORD 'password';
CREATE ROLE
CREATE DATABASE "bridal" WITH OWNER "admin";
CREATE DATABASE
\c "bridal"
-- You are now connected to database "test-database" as user "postgres".
DROP SCHEMA "public";
DROP SCHEMA
CREATE SCHEMA "app" AUTHORIZATION "app_admin";
CREATE SCHEMA




/* create the database */
\c postgres postgres
CREATE DATABASE bridal WITH OWNER app_admin;
\c test_database postgres

/* drop public schema; other, less invasive option is to
   REVOKE ALL ON SCHEMA public FROM PUBLIC */
DROP SCHEMA public;
/* create an application schema */
CREATE SCHEMA app AUTHORIZATION app_admin;
/* further operations won't need superuser access */
\c test_database app_admin
/* allow app_user to access, but not create objects in the schema */
GRANT USAGE ON SCHEMA app TO app_user;

/* PUBLIC should not be allowed to execute functions created by app_admin */
ALTER DEFAULT PRIVILEGES FOR ROLE app_admin
   REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

/* assuming that app_user should be allowed to do anything
   with data in all tables in that schema, allow access for all
   objects that app_admin will create there */
ALTER DEFAULT PRIVILEGES FOR ROLE admin IN SCHEMA app
   GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_user;
ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app
   GRANT SELECT, USAGE ON SEQUENCES TO app_user;
ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app
   GRANT EXECUTE ON FUNCTIONS TO app_user;

/*Install required exetension in schema*/
CREATE EXTENSION pg_crypto WITH SCHEMA app