'use strict';

const r = require('./mainRequest');

class infoAPI {
    constructor() {
        this.url = 'https://api.spacexdata.com/v3/info'
    }

}

class Request {

    static list = {
        infoAPI: infoAPI,
    }

    createMethod(name = 'infoAPI') {
        const RequestToEndpoint = Request.list[name] || Request.list.infoAPI;
        const request = new RequestToEndpoint();

        request.send = async function () {
            const responseBody =  await r.requestMain(this.url);
            return responseBody
        }

        return request
    }
}

module.exports = Request;