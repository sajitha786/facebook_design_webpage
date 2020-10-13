$(document).ready(function(){
$("#form-body").validate({
   rules:{
    fname:{
        required:true,
        minlength:4,
        maxlength:6
    },
    lname:{
        required:true,
        maxlength:4,
        maxlength:6
    },
    email:{
        email:true,
        required:true
    },
    phone :{
        required:true,
        minlength:6
    },
    bday:{
        required:true
    },
    gender:{
        required: true
    },
    messages:{
        fname:{
            required:"Enter First name",
            minlength:"Enter minimum 4 letters"
        }
}
}
})
})
console.log("error")