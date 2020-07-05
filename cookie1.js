var reg=document.getElementById("reg");
const input=[];

reg.addEventListener('click',function(e){

    e.preventDefault()
    const object={

        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        gender:document.getElementById("gender").value = 0 ? "male" : "female"
    
    };
    
    input.push(object);
    console.log(input);
                
});



reg.addEventListener('click',function(){
    input.forEach(x => {
    document.cookie = `${x.email}=${x}`;
            
        });


});
