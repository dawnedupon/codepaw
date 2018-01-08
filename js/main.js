function updateOutput() {
	var head = $('iframe').contents().find('head');
	var css = "<style type='text/css'>" + $("#content-css").val() + "</style>";
	var js = "<scr" + "ipt " + "type='text/javascript'>" + $("#content-js").val() + "</scr" + "ipt>";
	$(head).append(css);
	$(head).append(js);
	$('iframe').contents().find('body').html( $("#content-html").val() );
};

//Set initial col width and code
$(function() {
	updateOutput();
});

//Change code dynamically
$("textarea").on('change keyup paste', function(){
	updateOutput();
});

//Toggle button state + column visibility and width
$(".button").click(function() {
	$(this).toggleClass("selected");
	var colId = "col-" + $(this).attr("id");
	$("#" + colId).toggleClass("hidden");
});