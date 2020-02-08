CREATE DATABASE manageApp;

USE manageApp;

CREATE TABLE user
(
    id INT(11) NOT NULL
    AUTO_INCREMENT,
	enabled BOOLEAN DEFAULT NULL,
	activated BOOLEAN DEFAULT NULL,
    name VARCHAR(45) DEFAULT NULL,
    username VARCHAR(45) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    usergroup VARCHAR(45) DEFAULT NULL,
    lastVisited DATETIME DEFAULT NULL,
    registered DATETIME DEFAULT NULL,
	PRIMARY KEY(id)
);

DESCRIBE user;

INSERT INTO user values
    (1, true, false, 'Juan Pérez', 'juan1', 'juan@gmail.com', 'registered', CURDATE(), CURDATE()),
    (2, true, true, 'Ana Maria', 'anita', 'anit@gmail.com', 'registered', CURDATE(), CURDATE());

SELECT * FROM user;