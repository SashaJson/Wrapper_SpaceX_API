'use strict';

const Request = require('../apps/request/requestToEndpoints');

// const infoAPI = new Request();
// const info = infoAPI.createMethod();
// info.send().then(res => console.log(res));

const infoCompany = new Request();
const comInfo = infoCompany.createMethod('CompanyInfo');
comInfo.send().then(res => console.log(res));