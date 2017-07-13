const { Router } = require('express');

const router = new Router();

/**
 * User routes
 */
router.get('/user', (req, res) => {
    res.send('Get user info route');
});

module.exports = router;