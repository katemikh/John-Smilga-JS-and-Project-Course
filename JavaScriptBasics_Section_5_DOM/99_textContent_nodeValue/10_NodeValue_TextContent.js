// nodeValue
// textContent

const item = document.getElementById("special");

const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue);

//const value = item.nodeValue;
//console.log(value);
//console.log(item.childNodes[0].nodeVlue);
//console.log(item.firstChild.nodeValue);