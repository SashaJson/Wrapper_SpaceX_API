'use strict';

const Request = require('../apps/request/requestToEndpoints');

// const InfoAPI = new Request();
// const info = InfoAPI.createMethod();
// info.sendDefaultUrl().then(res => console.log(res));

// const infoCompany = new Request();
// const comInfo = infoCompany.createMethod('CompanyInfo');
// comInfo.sendDefaultUrl().then(res => console.log(res));

// const roadster = new Request();
// const resRoadster = roadster.createMethod('Roadster');
// resRoadster.sendDefaultUrl().then(res => console.log(res));

const dragons = new Request();
const resDragons = dragons.createMethod('Dragons');
// resDragons.sendDefaultUrl().then(res => console.log(res));
// resDragons.sendUrlWithQueryId(true).then(res => console.log(res));
resDragons.sendUrlWithQueryLimit(2).then(res => console.log(res));
