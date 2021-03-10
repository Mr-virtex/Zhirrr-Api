const needle = require('needle')
const _ = require('lodash')
const fetch = require('node-fetch')
const Nime = (text) => new Promise((resolve, reject) => {
    let urlnya = 'https://api.fdci.se/rep.php?gambar=anime'
    
    needle(urlnya,(err, resp, body) => {
        if(!err){
        	resolve(
        		body.images[0]
        	)
        } else {
        	reject(eror')
        }
    })
})

Nime(process.argv.slice(2).join(' ')).then(data => console.log('.')).catch(err => console.log(err))
module.exports = Nime