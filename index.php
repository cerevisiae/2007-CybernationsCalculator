<?php
header("Content-type: image/png");
$path = $_SERVER['REQUEST_URI'];
$pieces = explode( "/", $path );
$pieces = explode(".", $pieces[2]);
if ( $pieces[0] > 0 )
	$rank    = (int) $pieces[0];
else
	$rank    = 3000;
if ( $pieces[1] > 0 )
	$total   = (int) $pieces[1];
else
	$total   = 40000;
$color   = (int) $pieces[2];
$percent = number_format ( $rank / $total * 1000 ) /10;
$rank    = number_format( $rank );
$total   = number_format( $total );

$string = "Ranked #{$rank} of {$total} Nations ({$percent}%)";
if ( $color == 99 )
	$color = rand( 0, 4 );
if ( $color == 1 )
	$im = imagecreatefrompng("images/orange.png");
else if ( $color == 2 )
	$im = imagecreatefrompng("images/green.png");
else if ( $color == 3 )
	$im = imagecreatefrompng("images/purple.png");
else if ( $color == 4 )
	$im = imagecreatefrompng("images/blue.png");
else if ( $color == 5 )
	$im = imagecreatefrompng("images/grey.png");
else
	$im = imagecreatefrompng("images/default.png");
	
$color = imagecolorallocate($im, 0, 0, 0);
imagettftext ( $im, 8, 0, 111, 17, $color, "verdana", $string );
imagepng($im);
imagedestroy($im);

?>