function validation(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var phone = document.getElementById("phone").value;
var pincode = document.getElementById("pincode").value;
var pin = document.getElementById("pin").value;

if(name == ""){
    document.getElementById("namee").innerHTML = "requard name";
    return false;
   
}

if(email == ""){
    document.getElementById("cpass").innerHTML = "requard email";
    return false;
}

if(password == ""){
    document.getElementById("pass").innerHTML = "requard password";
    return false;
}


if(phone == ""){
    document.getElementById("phone").innerHTML = "requard number";
    return false;
}


if(pincode == ""){
    document.getElementById("upload").innerHTML = "requard pincode";
    return false;
}

else{
    document.write("<h2>submit wait you call me</h2>")
  
}
}