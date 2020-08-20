$("input[type = 'button']").on('click', function(){
    $(this).addClass("clicked").delay(200).queue(function( next ){
        $(this).removeClass('clicked'); 
        next();
    });
    

    var value = $(this).val();
    if(value == 'x'){
        $(".display").val($(".display").val() + '*');    
    } 
    else if(value == '÷'){
        $(".display").val($(".display").val() + '/'); 
    } 
    else if(value == "ENTER"){
        try{
            $(".display").val(eval($(".display").val()));    
        } catch(e){
                $(".display").val("Math Error").delay(1500).queue(function( next ){
                    $(this).val(''); 
                    next();
        });
        } 
    } 
    else if(value == "AC"){
        $(".display").val("");
    }
    else if(value == "DEL"){
        var current_val = $(".display").val();
        $(".display").val(current_val.substring(0, current_val.length - 1));
    }
    else {
        $(".display").val($(".display").val() + $(this).val());
    }
    
});