const sayHelloToConsole = function (name){
  console.log("Hello, " + name); 
}

sayHelloToConsole("Ryan");

const returnSayHello = function (name){
  return "Hello, " + name;
};

const greeting = returnSayHello("Jeremy");
console.log(greeting);