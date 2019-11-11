$("main").addClass("pre-enter").removeClass("with-hover");
setTimeout(function(){
	$("main").addClass("on-enter");
}, 500);
setTimeout(function(){
	$("main").removeClass("pre-enter on-enter");
	setTimeout(function(){
		$("main").addClass("with-hover");
	}, 50);
}, 2000);

$(".flip, .back a").click(function(){
	$(".player").toggleClass("playlist");
});

$(".bottom a").not(".flip").click(function(){
	$(this).toggleClass("active");
});