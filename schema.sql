-- YOUR CODE GOES HERE
DROP DATABASE IF EXISTS cowslist;
-- CREATE YOUR DATABASE
CREATE DATABASE cowslist;
USE cowslist;
-- CREATE YOUR TABLES
CREATE TABLE cows
(
  ID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(20),
  description VARCHAR(150)
);

-- ADD RECORDS TO YOUR TABLE

INSERT INTO cows
(name, description)
VALUES
("Clover", "a grass-like plant that i think cows probably eat");