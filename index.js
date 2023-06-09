console.log("hello");
console.log("It's really good!");

window.alert("shuvro er page");
let username= window.prompt("what's your name?");
console.log(username);


let myname = "shuvro";
console.log(myname);
document.getElementById("p1").innerHTML = "Hello my name is " + myname;



let inputname;
document.getElementById("mybutton").onclick = function(){
    inputname = document.getElementById("mytext").value;
    console.log(inputname);
    document.getElementById("mylebel").innerHTML = "Hello " + inputname;
    

}