
 $(document).ready(function(){
	var cart = 0;
  $(".cart").click(function(){
	var qty = $(".qty").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty").empty();
	$(".qty").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });

  $(".cart1").click(function(){
	var qty = $(".qty1").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty1").empty();
	$(".qty1").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });

  $(".cart2").click(function(){
	var qty = $(".qty2").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty2").empty();
	$(".qty2").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });

  $(".cart3").click(function(){
	var qty = $(".qty3").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty3").empty();
	$(".qty3").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });
  $(".cart4").click(function(){
	var qty = $(".qty4").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty4").empty();
	$(".qty4").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });
  $(".cart5").click(function(){
	var qty = $(".qty5").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty5").empty();
	$(".qty5").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });
  $(".cart6").click(function(){
	var qty = $(".qty6").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty6").empty();
	$(".qty6").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });
  $(".cart7").click(function(){
	var qty = $(".qty7").text();
	var addqty=	qty - 1;
	// alert( addqty);
	$(".qty7").empty();
	$(".qty7").html(addqty);
	cart+=1;
	$('.total-count').html(cart);
  });
});
