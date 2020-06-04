'use strict';

const r = require('./mainRequest');

class infoAPI {
    constructor() {
        this.url = 'https://api.spacexdata.com/v3'
    }

}

class CompanyInfo {
    constructor() {
        this.url = 'https://api.spacexdata.com/v3/info'
    }
}

class Request {

    static list = {
        infoAPI: infoAPI,
        CompanyInfo: CompanyInfo
    }

    createMethod(name = 'infoAPI') {
        const RequestToEndpoint = Request.list[name] || Request.list.infoAPI;
        const request = new RequestToEndpoint();

        request.send = function () {
            return new Promise(resolve => {
                r.requestMain(this.url)
                    .then(response => resolve (response))
            })
        }

        return request
    }
}

module.exports = Request;