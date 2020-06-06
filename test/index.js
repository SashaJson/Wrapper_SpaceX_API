'use strict';

const Request = require('../apps/request/requestToEndpoints');

const APISpaceX = new Request();

// const info = APISpaceX.infoAPI();
// info.sendDefaultUrl().then(res => console.log(res));

const dra = APISpaceX.Dragons();
//dra.sendDefaultUrl().then(res => console.log(res));
//dra.sendUrlWithQueryId(true).then(res => console.log(res));
//dra.sendUrlWithQueryLimit(1).then(res => console.log(res));
//dra.sendUrlWithQueryOffset(1).then(res => console.log(res));
//dra.sendUrlWithQueryIdOffsetLimit(false, 1, 1).then(res => console.log(res));


