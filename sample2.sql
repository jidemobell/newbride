/** role_read is read-only with SELECT and EXECUTE */
CREATE ROLE role_read;
/** role_read_add adds INSERT */
CREATE ROLE role_read_add;
/** role_read_add_modify adds UPDATE and DELETE */
CREATE ROLE role_read_add_modify;


GRANT USAGE ON SCHEMA <schema> TO role_read;

/** for existing objects */
GRANT SELECT  ON ALL TABLES    IN SCHEMA <schema> TO role_read;
GRANT SELECT  ON ALL SEQUENCES IN SCHEMA <schema> TO role_read;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA <schema> TO role_read;

/** for future objects */
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema>
    GRANT SELECT ON TABLES TO role_read;

ALTER DEFAULT PRIVILEGES IN SCHEMA <schema>
    GRANT SELECT ON SEQUENCES TO role_read;

/** role_read_add inherits from role_read */
GRANT role_read TO role_read_add;

/** for existing objects */
GRANT INSERT ON ALL TABLES IN SCHEMA <schema> TO role_read_add;
GRANT ALL ON ALL SEQUENCES IN SCHEMA <schema> TO role_read;

/** for future objects */
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema>
    GRANT INSERT ON TABLES TO role_read_add;

ALTER DEFAULT PRIVILEGES IN SCHEMA <schema>
    GRANT ALL ON SEQUENCES TO role_read_add;

/** role_read_add_modify inherits from role_read_add */
GRANT role_read_add TO role_read_add_modify;

/** for existing objects */
GRANT UPDATE, DELETE ON ALL TABLES IN SCHEMA <schema> 
    TO role_read_add_modify;

/** for future objects */
ALTER DEFAULT PRIVILEGES IN SCHEMA <schema>
    GRANT UPDATE, DELETE ON TABLES TO role_read_add_modify;
