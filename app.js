
var reg=document.getElementById("reg");
const input=[];
var object={};

reg.addEventListener('click',function(e){

    e.preventDefault()
     object={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        gender:document.getElementById("gender").value = 0 ? "male" : "female"
    
    };
    
    input.push(object);
    // console.log(input);
    var myTable=document.getElementById('myTable');
    console.log(input);

        // myTable.each(function(){
        //    $(this).append(`<td>${input.username}</td>`);
        // });
     
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
                
});

reg.addEventListener('click',function(){
    input.forEach(x => {
        if(localStorage.getItem(x.email)){
            var xf=JSON.parse(localStorage.getItem(x.email));
            var xPassworde=xf.password;
            if(object.password != xPassworde){
                var inputPassword = document.getElementById('password');
                var sp = document.createElement("SPAN");
                sp.style.backgroundColor="red";
                sp.style.color="white";
                var t = document.createTextNode("ERROR");
                sp.appendChild(t);
                inputPassword.after(sp); 
            }        
        }else{
            localStorage.setItem(x.email,JSON.stringify(x));
            

/*

            var row0=document.getElementsByTagName("tr");
            var row1 = document.createElement('tr');
                      var col=document.createElement('td');
                      var coltext=document.createTextNode(object.username);
                      col.appendChild(coltext);
                      row.appendChild(col);
                      row0.after(row1); 
                      
           */
        }
    
        
    });
});

   

  /* myTabel=document.getElementsByTagName("table");

  var row = document.createElement('tr');
            var col=document.createElement('td');
            var coltext=document.createTextNode(object.username);
            col.appendChild(coltext);
            row.appendChild(col);
            myTabel.appendChild(row);
           /* row.appendChild(document.createElement('td'));
             row.appendChild(document.createElement('td'));
             row.appendChild(document.createElement('td'));
             row.appendChild(document.createElement('td'));
/* row.appendChild(document.createElement('td').innerText=x.password);
        row.appendChild(document.createElement('td').innerText=x.email);
        row.appendChild(document.createElement('td').innerText=x.phone);
        row.appendChild(document.createElement('td').innerText=x.gender);
*/
      /*  var myTabel=document.getElementsByTagName("table");
        var row=myTabel.insertCell(1);
        var col0=row.insertCell(0);
        var col1=row.insertCell(1);
        var col2=row.insertCell(2);
        var col3=row.insertCell(3);
        var col4=row.insertCell(4);
        
*/