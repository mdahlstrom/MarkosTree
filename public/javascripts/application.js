$(document).ready(function() {
	setTimeout( jasonFall, 4000);
	setTimeout( samFall, 8000);
	setTimeout( kimFall, 11000);
	setTimeout( markoFall, 12400);
});


function jasonFall() {
	$("img.jason").removeClass("wiggle_reverse");
	$("img.jason").removeClass("wiggle");
	$("img.jason").addClass("jason_drop");
	$("img.jason").css("bottom","30px")
	$("img.jason").css("left","200px");
}

function samFall() {
	$("img.sam").removeClass("wiggle_reverse");
	$("img.sam").removeClass("wiggle");
	$("img.sam").addClass("sam_drop");
	$("img.sam").css("bottom","30px")
	$("img.sam").css("left","35px");
}

function kimFall() {
	$("img.kim").removeClass("wiggle_reverse");
	$("img.kim").removeClass("wiggle");
	$("img.kim").addClass("kim_drop");
	$("img.kim").css("bottom","30px")
	$("img.kim").css("left","243px");
}

function markoFall() {
	$("img.marko").removeClass("wiggle_reverse");
	$("img.marko").removeClass("wiggle");
	$("img.marko").addClass("marko_drop");
	$("img.marko").css("bottom","30px")
	$("img.marko").css("left","130px");
}