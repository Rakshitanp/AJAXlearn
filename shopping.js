// JavaScript source code
var myrequest = new XMLHttpRequest();
myrequest.open("GET","product.js");
myrequest.onload=function()
{
var data=JSON.parse(myrequest.responseText);
console.log(data);
};
myrequest.send();
