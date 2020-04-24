jQuery(document).ready(function(){
    jQuery('[data-toggle="tooltip"]').tooltip();

     jQuery('.close-login').on('click', function(){
    $("#loginModal").modal("hide"); 
});
    
    
 $("#mycarousel").carousel( { interval: 2000 } );
        $("#carousel-pause").click(function(){
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function(){
            $("#mycarousel").carousel('cycle');
        });
    
    
$('#reserveBtn').click( function(){
     $('#reserveBtn').attr("data-toggle", "modal" ); 
     $('#reserveBtn').attr("data-target", "#reserveModel" );
})
    
    
$('#loginBTN').click( function(){
     $('#loginBTN').attr("data-toggle", "modal" ); 
     $('#loginBTN').attr("data-target", "#loginModal" );
   
})


})
    