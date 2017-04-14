$(document).ready(function(){
    $height = [3];
    $outerheights =[13]
        $row = $(".ref-img").parent();
    for($i = 0,$j = 0; $i<4; $i++,$j++){
        $height[$i] = $($row[$i]).innerHeight(); 
        for($j; $j<13; $j++){
            $outerheights[$j] = $($(".ref-img")[$j]).outerHeight()
            $($(".ref-img")[$j]).css("margin-top",($height[$i] - $outerheights[$j])/2 + "px")
            $($(".ref-img")[$j]).css("margin-bottom",($height[$i] - $outerheights[$j])/2 + "px")
        }
    }
})