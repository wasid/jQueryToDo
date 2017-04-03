$( document ).ready(function() {
    $("li").on("click", function(){

        $(this).toggleClass("complete");
  
    });
    
    $("span").on("click", function(event){

        // console.log("clicked on span!");
        
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        
        event.stopPropagation();
    });
    
    
    
});