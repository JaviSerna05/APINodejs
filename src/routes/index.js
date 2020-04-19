const { Router } = require('express');
const router = Router();


//Routes
router.get('/test', (req, res) => {
    const data = {
        "name": "Andres",
        "website": "andres.com"
    };
    res.json(data);
});

module.exports = router;