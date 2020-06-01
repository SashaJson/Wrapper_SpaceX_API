"use strict";

const fetch = require('node-fetch');
const defaults = require('../config/default');

module.exports = {

    requestMain: (url, method = "GET", data = null) => {

        return new Promise((resolve, reject) => {

            let responseBody;
            let body;
            const headers = {};

            if (data) {
                headers['Content-Type'] = "application/json";
                body = JSON.stringify(data)
            }

            fetch(url, {method, headers, body})
                .then( res => {

                    if (res.status !== defaults["code200"]) {
                        reject ( new Error('Status Code not Equal 200'))
                    }
                    if (res.statusText !== defaults["statusTextOk"]) {
                        reject (new Error('Status Text not equal OK'))
                    }

                    if (res.headers.get('content-type') !== defaults['contentType']) {
                        reject (new Error('Content-Type not equal application/json'))
                    }

                    return res

                })
                .then(res => {

                    responseBody = res.json()
                    resolve (responseBody)

                })

        })

    }
}
