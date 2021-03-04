var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer zyoTbfwzShovzqfF1HL6Pp7R9Mc");
myHeaders.append("Cookie", "BrowserId=o5tw85btEeq_EY96rL1b9w");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://zzrw-001.sandbox.us01.dx.commercecloud.salesforce.com/s/-/dw/data/v20_4/products/produto-api-tres", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));