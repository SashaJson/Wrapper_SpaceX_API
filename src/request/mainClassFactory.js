'use strict';

const r = require('./mainRequest');

class InfoAPI {

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
        InfoAPI: InfoAPI,
        CompanyInfo: CompanyInfo,
        Roadster: Roadster,
        Dragons: Dragons
    }

    Roadster() {
        const RequestToEndpoint = Request.list.Roadster;
        const request = new RequestToEndpoint();

        request.sendDefaultUrl = function () {
            return new Promise(resolve => {
                r(this.url)
                    .then(response => resolve(response));
            });
        }

        return request;
    }

    CompanyInfo() {
        const RequestToEndpoint = Request.list.CompanyInfo;
        const request = new RequestToEndpoint();

        request.sendDefaultUrl = function () {
            return new Promise(resolve => {
                r(this.url)
                    .then(response => resolve(response));
            });
        }

        return request;
    }

    infoAPI() {
        const RequestToEndpoint = Request.list.InfoAPI;
        const request = new RequestToEndpoint();

        request.sendDefaultUrl = function () {
            return new Promise(resolve => {
                r(this.url)
                    .then(response => resolve(response));
            });
        }

        return request;
    }

    Dragons() {
        const RequestToEndpoint = Request.list.Dragons;
        const request = new RequestToEndpoint();

        request.sendUrlWithQueryId = function (boolean) {

            switch (boolean) {

                case true:
                    return new Promise(resolve => {
                        r(this.url + `?id=${boolean}`)
                            .then(response => resolve(response));
                    });

                case false:
                    return new Promise(resolve => {
                        r(this.url + `?id=${boolean}`)
                            .then(response => resolve(response));
                    });

                default:
                    throw new Error('You can specify parameters only true or false');

            }
        };

        request.sendUrlWithQueryLimit = function (integer) {
            if (typeof integer === 'number') {
                return new Promise(resolve => {
                    r(this.url + `?limit=${integer}`)
                        .then(response => resolve(response));
                });
            } else {
                throw new Error('You can specify parameter integer');
            }
        };

        request.sendUrlWithQueryOffset = function (integer) {
            if (typeof integer === 'number') {
                return new Promise(resolve => {
                    r(this.url + `?offset=${integer}`)
                        .then(response => resolve(response));
                });
            } else {
                throw new Error('You can specify parameter integer');
            }
        };

        request.sendUrlWithQueryIdOffsetLimit = function (booleanId, offsetInt, limitInt) {
            if (typeof offsetInt && limitInt === 'number' || typeof booleanId === 'boolean') {
                return new Promise(resolve => {
                    r(this.url + `?offset=${offsetInt}&limit=${limitInt}&id=${booleanId}`)
                        .then(response => resolve(response));
                });
            } else {
                throw new Error('You can specify parameter integer and boolean');
            }
        };

        request.sendDefaultUrl = function () {
            return new Promise(resolve => {
                r(this.url)
                    .then(response => resolve(response));
            });
        };

        return request;
    }

}

module.exports = Request;