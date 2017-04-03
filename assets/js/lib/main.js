$( document ).ready(function() {
    $("ul").on("click", "li", function(){

        $(this).toggleClass("complete");
  
    });
    
    $("ul").on("click", "span", function(event){

        // console.log("clicked on span!");
        
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        
        event.stopPropagation();
    });
    
    $("input[type='text']").keypress(function(e){
        if (e.which == 13) {
            var todotext = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todotext+"</li>");
        }

    });
    
    
    
});