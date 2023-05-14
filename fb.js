$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            Fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:6
            },
        
            eml:{
                required:true,
                email:true

            },
            pswd:{
                required:true,
                minlength:6,
                
            },
            day:{
                required:true,
            },
            MONTS:{
                required:true,
            },
            yr:{
                required:true,
            },
            gnt:{
                required:true,
            }
            
        },
        messages:{
            sname:"enter name"
        }



    })
})