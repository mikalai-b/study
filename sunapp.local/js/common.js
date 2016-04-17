/*$(window).scroll(function(){

	var st = $(this).scrollTop();

	$(".bg").css({
		"transform" : "translate(0%, -" + st/10 + "%"
	});
});*/

	$(document).ready(function(){
	    $('section[data-type="background"]').each(function(){
	        var $bgobj = $(this); // Назначаем объект
	        $(window).scroll(function() {
	            var yPos = -($(window).scrollTop() / 0.8);
	            // Собираем значение координат фона вместе
	            var coords = '0% '+ yPos + 'px';
	            // Смещаем фон
	            $bgobj.css({ backgroundPosition: coords });
	        });
	    });

	    $("#feedback-form").submit(function(){
	    	$.ajax({
	    		type: "POST",
	    		url: "contacts.php",
	    		data: $(this).serialize()
	    	}).done(function(){
	    		alert("Thanks for your feedback.");
	    	});
	    	return false;
	    });
	});

