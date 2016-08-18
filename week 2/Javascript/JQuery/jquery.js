$(document).ready(function()
{
    $("#load").click(function()
    {
        $("#response").load("demo.txt");
    });
    $("#panel").slideToggle();
    $("#click").click(function()
    {
        $("p").hide();
    });
     $(".text").focus(function()
    {
        $(this).css("background-color","red");
    });
    $("#fadein").click(function()
    {
        $("#test").fadeIn("slow");
    });
    $("#fadeout").click(function()
    {
        $("p").fadeOut("30000");
    });
    $("h2").dblclick(function()
    {
        $(".test").fadeTo("slow","0.15");
    });
    $("h3").hover(function(){
        $(this).hide();
    });
    $("p").click(function()
    {
        $("p").hide();
    });
     $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        $("#panel").animate({oapacity:"0.125"},"slow");
    });
    $("#append").click(function()
    {
        $("p").append("<b>appended text</b>");
    });
});