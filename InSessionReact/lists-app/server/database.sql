CREATE DATABASE dbo_listmate;

CREATE TABLE tbl_users(
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  is_admin BOOLEAN DEFAULT FALSE,
  is_deleted BOOLEAN DEFAULT FALSE,
  is_verified BOOLEAN DEFAULT FALSE,
  verification_code VARCHAR(255),
  reset_password_code VARCHAR(255),
  reset_password_code_expiry TIMESTAMP,
);

CREATE TABLE tbl_lists(
  lists_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  type VARCHAR(255),
);

CREATE TABLE tbl_todo(
  todo_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  type VARCHAR(255),
);