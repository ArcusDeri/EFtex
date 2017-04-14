$(document).ready(function(){                        //change icons color on hover
    
    $pageTitle = ($(document).find("title").text());
    $pageTitle = $pageTitle.substr(6,$pageTitle.length);
    $words  = $pageTitle.split(" ");
    $firstLetters = "";
    console.log($pageTitle);
    
    for($i = 0; $i < $words.length;$i++){
        $firstLetters += $words[$i].charAt(0);
    }
    $firstLetters = $firstLetters.toLowerCase();
    console.log($firstLetters);
    
    $(".nav-list-group-item, .lg-main-item").hover(
        function($this){                            //mouse-over
            var source = $(this).children().attr("src");
            var leng = source.length-9;
            source = source.substring(0, leng);
            $(this).children().attr("src",source+"White.png")
            },
        function($this){                            //mouse-out
            if ($(this).attr('class').split(" ")[2] != "tbg"){ //[2]-position of eventual ".tbg" class
                var source = $(this).children().attr("src");
                var leng = source.length-9;
                source = source.substring(0, leng);
                $(this).children().attr("src",source+"Black.png")
            }
        }
    );
})