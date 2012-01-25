create table root_folder (path TEXT,name TEXT);
create table list_user (name TEXT,pathphoto TEXT);
create table multimedia_files (fullpath TEXT,thumbnail TEXT, dirbase TEXT, duration FLOAT);
create table viewed (fullpath TEXT, user TEXT, lastpoint FLOAT, viewed BOOLEAN);