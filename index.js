console.log("hello");
console.log("It's really good!");

//window.alert("shuvro er page");
//let username= window.prompt("what's your name?");
//console.log(username);


let myname = "shuvro";
console.log(myname);
document.getElementById("p1").innerHTML = "Hello my name is " + myname;



let inputname;
document.getElementById("mybutton").onclick = function(){
    inputname = document.getElementById("mytext").value;
    console.log(inputname);
    document.getElementById("mylebel").innerHTML = "Hello " + inputname;
    

}

let count=0;
document.getElementById("decreasebutton").onclick = function(){
    count-=1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("increasebutton").onclick = function(){
    count+=1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("resetbutton").onclick = function(){
    count=0;
    document.getElementById("countlabel").innerHTML = count;
}



document.getElementById("rbutton").onclick = function(){
    
    var x;
    var y;
    var z;
    x=document.getElementById("fnumber").value;
    y=document.getElementById("lnumber").value;
    console.log(x);
    console.log(y);
    z=Math.floor(Math.random()*(y-x+1)+Math.round(x-0.5));
    console.log(z);

    document.getElementById("pr").innerHTML = "Your random number is : " + z;
}