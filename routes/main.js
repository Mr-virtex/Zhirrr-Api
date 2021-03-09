__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'z',
            namabot: 'water bot',
            namaowner: 'Hazn',
            instagram: 'Gk punya',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
