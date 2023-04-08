const express = require('express');
const router = express.Router();


// Require controller modules.
const { getAllUsers , addUser } = require('../controllers/user.js');

/// volunteer ROUTES ///

//GET request to fetch all volunteer. NOTE This must come before route for id.
router.get('/', getAllUsers);
// GET request for one user.
// router.get('/:id', getOnevolunteer);
// POST request for creating a user.
router.post('/', addUser);
// put request for update a user.
// router.put('/:id', updateOnevolunteer);
// put request for delete a user.
// router.delete('/:id',deleteOnevolunteer)


module.exports = router;