$(document).ready(function ()
{
    $this = $(this)
    window.sr = new scrollReveal(); //initiate reveal scroll plugin
   //$(window).resize(function(){console.log(window.innerWidth)})
    setTimeout(function(){                       //to get width of image, it must be loaded- thus timeout
        var caption_width = $(".right").width(); //get width of "team" images
        var caption = $(".caption");             //get caption divs
        caption.width(caption_width);            //set their width equal to images width
    },1)
    
    $title = ($(document).find("title").text());
    $title = $title.substr(6,$title.length);
    $activeElement = [];
    $element = [];
    for(var i = 0; i < 5; i++){
        $activeElement[i] = $( ".menu-element" )[i].text;
        $element[i] = $( ".menu-element" )[i];
        if(i == 1){ //Products in menu, special case
            $activeElement[1] = $activeElement[1].substr(0,8); //cut off the down arrow and spaces
        }
        if($activeElement[i] === $title){
            $($element[i].parentNode).addClass("active");
        }       
    }
    if($title === "Thread Break Guard" || $title === "Thread tension control unit/Production data recording" || $title === "Thread Winder"){
         $($element[1].parentNode).addClass("active");
        }
    
        if(window.innerWidth > 768){ //sets margin of jumbotron equal to nabvar height so it's not cut
            $firstElementMargin = $(".navbar").outerHeight();            
            $string = $firstElementMargin+"px";
            $(".first-element").css({"margin-top":$string});
            if($title="Home"){
                $(".right").css("margin-right","0");
                $(".caption-right").css("margin-right",$(".right").css("margin-right"));
                $(".caption-left").css("margin-right",$(".left").css("margin-left"));
            }
        }
        else{
            $(".first-element").css({"margin-top":"0"}); //must be set to zero, otherwise it cracks
            if($title="Home"){
                $(".right").css("margin-right",$(".left").css("margin-left"));
                $(".caption-right").css("margin-right",$(".right").css("margin-right"));
                $(".caption-left").css("margin-left",$(".left").css("margin-left"));
            }
        }
    //change fixed navbar to static when small screen
    if(window.innerWidth < 768){
        $("#navigation").removeClass("navbar-fixed-top");
        $("#navigation").addClass("navbar-static-top");
    }
    if($title == "Thread Break Guard"){
            if(window.innerWidth > 768){
                $(".machine").css("width","60%");
                $(".machine-big").css("width","60%");
            }
            else{
                $(".machine").css("width","40%");
                $(".machine-big").css("width","40%");
            }
    }
    //check jumbotron top margin on resize and change class for navbar(static/fixed)-depends on screen width
    $(window).resize(function(){
        if(window.innerWidth > 768){
            $firstElementMargin = $(".navbar").outerHeight();            
            $string = $firstElementMargin+"px";
            $(".first-element").css({"margin-top":$string});
            if($title="Home"){
                $(".right").css("margin-right","0");
                $(".caption-right").css("margin-right","0");
                $(".caption-left").css("margin-left","0");
            }
        }
        else{
            $(".first-element").css({"margin-top":"0"});
            if($title="Home"){
                $(".right").css("margin-right",$(".left").css("margin-left"));
                $(".caption-right").css("margin-right",$(".right").css("margin-right"));
                $(".caption-left").css("margin-left",$(".left").css("margin-left"));
            }
        }
        if(window.innerWidth > 768){
            $("#navigation").removeClass("navbar-static-top");
            $("#navigation").addClass("navbar-fixed-top");
        }
        else{
            $("#navigation").removeClass("navbar-fixed-top");
            $("#navigation").addClass("navbar-static-top");
        }
        if($title == "Thread Break Guard"  || $title == "Servo drive control" || $title == "Thread Winder" || $title == "Thread tension control unit/Production data recording" ){
            if(window.innerWidth > 768){
                $(".machine").css("width","50%");
                $(".machine-big").css("width","60%");
            }
            else{
                $(".machine").css("width","40%");
                $(".machine-big").css("width","40%");
            }
        }
    });
    })