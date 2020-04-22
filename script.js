$(window).scroll(function(){
    var aa= $("#h")
    var top=$("#top")
    var pos= (aa.css("position")=="fixed")
    if($(this).scrollTop()>60 && !pos){
        aa.css({"position":"fixed","top":"0"})
        top.css({"margin-bottom":"50px"})
    }
    if($(this).scrollTop()<60 && pos){
        aa.css({"position":"relative","top":"0"})
        top.css({"margin-bottom":"0px"})
    }
})
window.onload=function(){
    alert("There are many more of my friends... But I will get tired if I list them all.😂")
    $("#top").css({"display":"block"})
    $("#h").css({"display":"block"})
    $("#a").click()
}
function a(){
    $("#a").css({"border-bottom":"5px solid #ece5dd"})
    $("#c").css({"border-bottom":"5px solid transparent"})
    $("#b").css({"border-bottom":"5px solid transparent"})
    $("#body").css({"display":"block"})
    $("#callemp").css({"display":"none"})
    $("#status").css({"display":"none"})
}
function b(){
    $("#a").css({"border-bottom":"5px solid transparent"})
    $("#b").css({"border-bottom":"5px solid #ece5dd"})
    $("#c").css({"border-bottom":"5px solid transparent"})
    $("#body").css({"display":"none"})
    $("#callemp").css({"display":"none"})
    $("#status").css({"display":"block"})
}
function c(){
    $("#a").css({"border-bottom":"5px solid transparent"})
    $("#c").css({"border-bottom":"5px solid #ece5dd"})
    $("#b").css({"border-bottom":"5px solid transparent"})
    $("#body").css({"display":"none"})
    $("#callemp").css({"display":"flex"})
    $("#status").css({"display":"none"})
}