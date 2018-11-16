DROP DATABASE IF EXISTS quickforms_db;

CREATE DATABASE quickforms_db;

USE quickforms_db;

CREATE TABLE users (
id INT PRIMARY KEY NOT NULL,
group_id INT NOT NULL,
role_id INT NOT NULL,
email VARCHAR(50) NOT NULL,
first_name VARCHAR(25),
last_name VARCHAR(25)
);

CREATE TABLE groups (
    id INT PRIMARY KEY NOT NULL,
    group_name VARCHAR(80),
    logo VARCHAR(250)
);

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL,
    role_name VARCHAR(20) NOT NULL
);

CREATE TABLE forms (
    id INT PRIMARY KEY NOT NULL,
    group_id INT NOT NULL,
    form_name VARCHAR(100) NOT NULL
);