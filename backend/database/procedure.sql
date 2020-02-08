CREATE PROCEDURE `userAddEdit` (
	IN _id INT,
	IN _enabled BOOLEAN,
	IN _activated BOOLEAN,
	IN _name VARCHAR(45),
	IN _username VARCHAR(45),
	IN _email VARCHAR(45),
	IN _usergroup VARCHAR(45),
	IN _lastVisited DATETIME,
	IN _registered DATETIME
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO user (enabled, activated, name, username, email, usergroup, lastvisited, registered)
        VALUES (_enabled,_activated, _name, _username, _email, _usergroup, _lastVisited, _registered);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE user
        SET
        enabled = _enabled,
        activated = _activated,
        name = _name,
        username = _username,
        email = _email,
        usergroup = _usergroup,
        lastVisited = _lastVisited,
        registered = _registered;
    END IF;
    SELECT _id AS 'id';
END