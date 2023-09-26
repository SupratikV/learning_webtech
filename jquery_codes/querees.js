
$(document).ready(function() {
    $("p:first").css("color", "red");//refers only to first para
    $("button").click(function(){
        alert($("p").html());//.text will remove html tags
        if(document.querySelector("p").style.color=="red")
        $("p").css("color", "blue");
        else if(document.querySelector("p").style.color=="blue")
        $("p").css("color", "red");//for tag just mention it
        $("#kumar").toggle()//for id use #
        $(".class1").css("font-family","Snell Roundhand, cursive");//for class use dot(.)
        $("input:text").val("web tech");//remember its val
        
    })

    $("p:first").append("<b> appended this text</b>")
    $("p:last").after("<b> appended this text</b>")
    $("p:first").addClass("intro")//added a class name to first para
    // $div.addClass("xyz")
});
//this is used to refer to the element itself