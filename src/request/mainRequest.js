'use strict';

const fetch = require('node-fetch');

module.exports = async (url, method = 'GET', data = null) => {

    let body;
    const headers = {};

    if (data) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(data);
    }

    const response = await fetch(url, {
        method,
        headers,
        body
    });

    for (let [key, value] of response.headers) {
        console.log(`Header: ${key} = ${value}`);
    }

    return await response.json();

}

