"use strict";

const fetch = require('node-fetch');

module.exports = {

    requestMain: async (url, method = "GET", data = null) => {

        let body;
        const headers = {};

        if (data) {
            headers['Content-Type'] = "application/json";
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {method, headers, body});

        return await response.json()

    }
}
