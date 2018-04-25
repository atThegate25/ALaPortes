const request = require('request');

request({
    url: 'https://api.foursquare.com/v2/venues/search',
    method: 'GET',
    qs: {
        client_id: 'L2305LTMO2LMENJKZKADWDFZYYHKXQWVJOAXCP2HYAD0NNZN',
        client_secret: 'DSXYJ3GJD1WVAEQJFXHQOVVWQQPCULYZE3AF2DD40IMKICVL',
        ll: '41.987769800, -87.882901200',
        intent: match `"crossStreet": "ORD Airport"`,
        query: 'starbucks',
        v: '20180405',
        limit: 10
    }
}, function(err, res, body) {
    if (err) {
        console.error(err);
    } else {
        console.log(res.toJSON(body[0]));

    }
});