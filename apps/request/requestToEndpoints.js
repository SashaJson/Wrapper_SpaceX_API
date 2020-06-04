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

class Roadster {
    constructor() {
        this.url = 'https://api.spacexdata.com/v3/roadster'
    }
}

class Dragons {
    constructor() {
        this.url = 'https://api.spacexdata.com/v3/dragons'
    }
}

class Request {

    static list = {
        infoAPI: infoAPI,
        CompanyInfo: CompanyInfo,
        Roadster: Roadster,
        Dragons: Dragons
    }

    createMethod(name = 'infoAPI') {
        const RequestToEndpoint = Request.list[name] || Request.list.infoAPI;
        const request = new RequestToEndpoint();

        if (name === 'Dragons') {

            request.sendUrlWithQueryId = function (boolean) {

                switch (boolean) {

                    case true:
                        return new Promise(resolve => {
                            r.requestMain(this.url + `?id=${boolean}`)
                                .then(response => resolve(response))
                        })

                    case false:
                        return new Promise(resolve => {
                            r.requestMain(this.url + `?id=${boolean}`)
                                .then(response => resolve(response))
                        })
                    default:
                        throw new Error('You can specify parameters only true or false')
                }
            }

            request.sendUrlWithQueryLimit = function (integer) {
                if (typeof integer === 'number') {
                    return new Promise(resolve => {
                        r.requestMain(this.url + `?limit=${integer}`)
                            .then(response => resolve(response))
                    })
                } else {
                    throw new Error('You can specify parameter integer')
                }
            }
        }

        request.sendDefaultUrl = function () {
            return new Promise(resolve => {
                r.requestMain(this.url)
                    .then(response => resolve(response))
            })
        }

        return request
    }
}

module.exports = Request;