$( document ).ready(function() {
    $("li").on("click", function(){
        
        console.log("clicked li");
        
        // if ($(this).css("color") === "rgb(128, 128, 128)") {
            
        //     $(this).css({
        //     color: "#28292B",  
        //     textDecoration: "none"
        // });
            
        // } else {
            
                    
        // $(this).css({
        //     color: "gray",  
        //     textDecoration: "line-through"
        // });
            
        // }
        
        $(this).toggleClass("complete");
  
    });
    
});