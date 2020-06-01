"use strict";

const r = require('../mainRequest');
const v = require('../../JSON-Schemas/validationJSON');

module.exports = {

    infoAPI: async () => {

        const res = await r.requestMain('https://api.spacexdata.com/v3/info');

        v.validationJsonSchema(res, {

        })
    }
}

