$("input[type = 'button']").on('click', function(){
    $(this).addClass("clicked");
    setTimeout(function(){
        $(this).removeClass("clicked");
    }, 500);
    var value = $(this).val();
    if(value == 'x'){
        $(".display").val($(".display").val() + '*');    
    } 
    else if(value == '÷'){
        $(".display").val($(".display").val() + '/'); 
    } 
    else if(value == "ENTER"){
        $(".display").val(eval($(".display").val())); 
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