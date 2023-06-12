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
    z=Math.floor(Math.random()*(y-x+1)+Math.round(x-0.5));

    document.getElementById("pr").innerHTML = "Your random number is : " + z;
}

document.getElementById("cbutton").onclick = function(){
    if(document.getElementById("pizza").checked){
        console.log("You selected pizza");
    }
    else if(document.getElementById("burger").checked){
        console.log("You selected burger");
    }
    else{
        console.log("You selected nothing");
    }
}
const ansr=Math.floor(Math.random()*10+1);
let guesses=0;
console.log(ansr);
document.getElementById("guessbutton").onclick = function()
{
    let guess=document.getElementById("guessfield").value;
    guesses+=1;
    if(guess==ansr){
        alert(`${ansr} is the number . You took ${guesses} guesses`);
    }

    else if(guess < ansr){
        alert('Too small');
    }
    else{
        alert('Too large');
    }
    
}

document.getElementById("tembutton").onclick =function(){

    let temp;
    temp=document.getElementById("tempval").value;
    console.log(temp);
    if(document.getElementById("celciusbutton").checked){
        temp=Number(temp);
        temp=tocelcius(temp);
        document.getElementById("templabel").innerHTML= temp + "degree celcius"; 
    }
    else if(document.getElementById("furrenhitebutton").checked){
        temp=Number(temp);
        temp=tofarenhite(temp);
        document.getElementById("templabel").innerHTML= temp + " degree farenhite";
    }
    else{
        document.getElementById("templabel").innerHTML = "Select a unit";
    }
}
function tocelcius(temp){
    return (temp-32)*(5/9);
}
function tofarenhite(temp){
    return (temp*9/5+32);
}
