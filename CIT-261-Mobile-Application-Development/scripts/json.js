function stringify() {
  var obj = {
    name: "Kirk",
    number: 30,
    color: "blue"
  };
  var myJSON = JSON.stringify(obj);
  document.getElementById("myJSON").innerHTML = myJSON;
}

function parse() {
  myJSON = {
    name: "Kirk",
    number: 30,
    color: "blue"
  };
  obj = JSON.parse(myJSON)
  document.getElementById("myString").innerHTML = obj.name;
}

function parseA() {
  var txt = ["Kirk", "thirty", "blue"];
  var arrp = JSON.parse(txt);
  document.getElementById("myString").innerHTML = arrp[0];
}