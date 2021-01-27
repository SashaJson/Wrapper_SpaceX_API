'use strict';

const Request = require('../src/request/mainClassFactory');

const APISpaceX = new Request();

const info = APISpaceX.infoAPI();
info.sendDefaultUrl().then(res => console.log(res));

//const dra = APISpaceX.Dragons();
//dra.sendDefaultUrl().then(res => console.log(res));
//dra.sendUrlWithQueryId(true).then(res => console.log(res));
//dra.sendUrlWithQueryLimit(1).then(res => console.log(res));
//dra.sendUrlWithQueryOffset(1).then(res => console.log(res));
//dra.sendUrlWithQueryIdOffsetLimit(false, 1, 1).then(res => console.log(res));

// const rod = APISpaceX.Roadster();
// rod.sendDefaultUrl().then(res => console.log(res));

// const comInfo = APISpaceX.CompanyInfo();
// comInfo.sendDefaultUrl().then(res => console.log(res));
