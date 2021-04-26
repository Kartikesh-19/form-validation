// $(docoment).action
$().ready (function()
{
    var $registrationForm = $('#registration'); // we want to store the registration form in variable.
    // $.validator.addMethod("noSpace",function(value,element){
    //     return value==''||value.trim().length !=0
    // },"spaces are not allowed");
   
    if($registrationForm.length){
        
        $registrationForm.validate({
            rules:{
                username:{
                    required:true,
                    noSpace:true,
                    alphanumeric:true
                },
                email:{
                    required:true,
                    customEmail:true
                },
                password:{
                    required:true
                },
                confirm:{
                    required:true,
                    equalTo:'#password'
                },
                fname:{
                    required:true
                },
                lname:{
                    required:true
                },
                gender:{
                    required:true
                },
                hobbies:{
                    required:true
                },
                country:{
                    required:true
                },
                address:{
                    required:true
                }


            },
            messages:{
                username:{
                    required:'user name is madantory'
                },
                email:{
                    required:'email is required'
                   
                },
                password:{
                    required:'please write your password'
                }, 
                confirm:{
                    required:'confirm the password',
                    equalTo:'please enter the same password'
                },
                fname:{
                    required:'enter your name'
                },
                lname:{
                    required:'please enter the last name'
                },
                gender:{
                    required:'enter your gender'
                },
                hobbies:{
                    required:'add your hobbies'
                },
                country:{
                    required:'please enter any country'
                },
                address:{
                    required:'add your address'
                }


            },
            errorPlacement:function(error,element)
            {
                if(element.is(":radio"))
                {
                    error.appendTo(element.parent('.gender'));
                }
                else if(element.is(":checkbox"))
                {
                   error.appendTo(element.parent(".hobbies"));
                }
                else
                  {
                     error.insertAfter(element);
                  }
              
            }

        })

    }

});