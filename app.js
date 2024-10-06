$(function() {
    $("#submit-color").on("click", function(){
        const color1 = $("#color1").val();
        const color2 = $("#color2").val();
       $("body").css("background" , `linear-gradient(90deg, ${color1} 63%, ${color2} 100%)`)
       $("h2").text(color1)
       $("h3").text(color2)
    })
});