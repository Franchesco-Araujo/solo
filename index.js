var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://zzrw-001.sandbox.us01.dx.commercecloud.salesforce.com/s/-/dw/data/v20_4/products/produto-api-tres',
  headers: { 
    'Authorization': 'Bearer C2EYbLNRPvD-KOwfHPs_Up-PAXg', 
    'Cookie': 'BrowserId=o5tw85btEeq_EY96rL1b9w'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

console.log("carregando da 001");