function  validation()

{ 
    var user=document.getElementById("user").value;
    if(user=="")
    {
        document.getElementById("name_error").innerHTML="**please enter your name";
      return false;
    }

    
    // var email= document.getElementById("email").value;
    // if(email<=16)
    // {
    //     document.getElementById("email").innerHTML="email can't be too long";
    //     return false;
    // }



}
