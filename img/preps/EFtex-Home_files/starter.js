$(document).ready(function ()
{
    $this = $(this)
   //$(window).resize(function(){console.log(window.innerWidth)})
    var caption_width = $(".right").width(); //get width of "team" images
    var caption = $(".caption");             //get caption divs
    caption.width(caption_width);            //set their width equal to images width
    
    $title = ($(document).find("title").text());
    $title = $title.substr(6,$title.length);
    console.log($title);
    $activeElement = [];
    for(var i = 0;i < 6; i++){
        $activeElement[i] = ($(document).find($title).text());
        console.log($activeElement[i]);
    }
    
})