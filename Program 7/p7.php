<?php
$name = "lastVisit";
$value = date("h:i:s A - m/d/y");
$inTwoMonths = 60 * 60 * 24 * 60 + time(); 

setcookie($name, $value, $inTwoMonths); 
if(isset($_COOKIE[$name]))
			$visit = $_COOKIE[$name]; 
else
			echo "You've got some expired  cookies!";
echo "Your last visit was at- ". $visit;
?>
