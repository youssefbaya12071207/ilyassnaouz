function validate() { 
            var msg; 
            var str = document.getElementById("pswd_1").value; 
            if (str.match( /[0-9]/g) && 
                    str.match( /[A-Z]/g) && 
                    str.match(/[a-z]/g) && 
                    str.match( /[^a-zA-Z\d]/g) &&
                    str.length >= 10) 
                msg = "<p>Mot de passe fort.</p>"; 
            else 
                msg = "<p>Mot de passe faible.</p>"; 
            document.getElementById("msg").innerHTML= msg; 
        } 


function matchPassword() {
  var x=document.getElementById("pswd_1").value;
  var y=document.getElementById("pswd_2").value;
  if (x == y) {
  	alert("nice tof");
  window.location.assign("C:/Users/User/Desktop/tool-shop/site.html");
  }
  
  if(x!=y){
  	alert("Passwords did not match");
  	}
  	
  
  
}

