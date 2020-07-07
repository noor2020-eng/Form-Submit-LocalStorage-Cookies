
var reg=document.getElementById("reg");
const input=[];
var object={};
var inputPasswordCon = document.getElementById('passwordCon');
var sp = document.createElement("SPAN");
sp.className="activ";
sp.style.backgroundColor="red";
sp.style.color="white";
var t = document.createTextNode("Passwords do not match.");

function addSp(){
    sp.appendChild(t);
    inputPasswordCon.after(sp); 
}

function removeSp(){
    if(sp.className){
        sp.remove();
    }
}




reg.addEventListener('click',function(e){

    e.preventDefault()
    var password=document.getElementById("password").value;
       var passwordCon=document.getElementById("passwordCon").value;
       if(password==passwordCon){
        object={
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
            passwordCon:document.getElementById("passwordCon").value,
            email:document.getElementById("email").value,
            phone:document.getElementById("phone").value,
            gender:document.getElementById("gender").value = 0 ? "male" : "female"
        
        };
        
        input.push(object);
        console.log(input);
        var myTable=document.getElementById('myTable');       
        var r1=myTable.insertRow(1);
        var col0=r1.insertCell(0);
        var col1=r1.insertCell(1);
        var col2=r1.insertCell(2);
        var col3=r1.insertCell(3);
        var col4=r1.insertCell(4);
        col0.innerHTML=object.username;
        col1.innerHTML=object.password;
        col2.innerHTML=object.email;
        col3.innerHTML=object.phone;
        col4.innerHTML=object.gender;
       }
     
        
    else{
         
        addSp();


    }       
});

inputPasswordCon.addEventListener('click',removeSp);

reg.addEventListener('click',function(){
    input.forEach(x => {

        if(localStorage.getItem(x.email)){
        
        }else{
            localStorage.setItem(x.email,JSON.stringify(x));
            
        }
    
        
    });
});

   

  
