
var inputform=[];

var reg=document.getElementById("reg");

reg.addEventListener('click',function(){
    
    var inputfname=document.getElementById("fname").value;
    var inputlname= document.getElementById("lname").value;
    var inputemail= document.getElementById("email").value;
    inputform[0]=inputfname;
    inputform[1]=inputlname;
    inputform[2]=inputemail;
        
});


reg.addEventListener('click',function(){

    localStorage.setItem("inputform", inputform);
    
});



