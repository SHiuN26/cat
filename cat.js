
$(document).ready(function () {
    $(window).mousemove(function(evt) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        var x = evt.pageX;
        var y = evt.pageY;
        console.log(x +","+ y);
        $("#cross").css("left", x+"px");
        $("#cross").css("top", y+"px");

        if (x < $(window).width()/2 -50){
            $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_left.png")
        }
        if(x > $(window).width()/2 +50){
            $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_right.png")
        }
        if(Math.abs(x - $(window).width()/2) < 50){
            $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_top.png")
        }
        if (x < $(window).width()/2 -50 && y <$(window).height()/2){
            $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_lefttop.png")
        }
        if(x > $(window).width()/2 +50 && y <$(window).height()/2){
            $("#cat").attr("src","https://awiclass.monoame.com/catpic/cat_righttop.png")
        }

    });
});

