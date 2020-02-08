const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db.js');

// GET all users
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



// GET An user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM user WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


// DELETE An user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM user WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'User Deleted' });
        } else {
            console.log(err);
        }
    });
});


// INSERT An user
router.post('/', (req, res) => {
    const { id, enabled, activated, name, username, email, usergroup, lastVisited, registered } = req.body;
    console.log(id, enabled, activated, name, username, email, usergroup, lastVisited, registered);
    const query = `
    SET @id = ?,
    SET @enabled = ?,
    SET @activated = ?,
    SET @name = ?,
    SET @username = ?,
    SET @email = ?,
    SET @usergroup = ?,
    SET @lastVisited = ?,
    SET @registered = ?
    CALL userAddEdit(@id, @enabled, @activated, @name, @username, @email, @usergroup, @lastVisited, @registered);
  `;
    mysqlConnection.query(query, [id, enabled, activated, name, username, email, usergroup, lastVisited, registered], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'User Saved' });
        } else {
            console.log(err);
        }
    });
});


// UPDATE an user
router.post('/:id', (req, res) => {
    const { enabled, activated, name, username, email, usergroup, lastVisited, registered } = req.body;
    const { id } = req.params;
    const query = `
    SET @id = ?,
    SET @enabled = ?,
    SET @activated = ?,
    SET @name = ?,
    SET @username = ?,
    SET @email = ?,
    SET @usergroup = ?,
    SET @lastVisited = ?,
    SET @registered = ?
    CALL userAddEdit(@id, @enabled, @activated, @name, @username, @email, @usergroup, @lastVisited, @registered);
  `;
    mysqlConnection.query(query, [id, enabled, activated, name, username, email, usergroup, lastVisited, registered], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'User Updated' });
        } else {
            console.log(err);
        }
    });
});


module.exports = router;