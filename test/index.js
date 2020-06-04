'use strict';

const Request = require('../apps/request/requestToEndpoints');

const infoAPI = new Request();

const u = infoAPI.createMethod();

const r = async () => {

    const res = await u.send()

    console.log(res)
}

r()