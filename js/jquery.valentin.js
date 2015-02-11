
var cards = ["-1","-0px","-295px","-591px","-887px","-1183px",
			"-1479px","-1775px","-2070px","-2366px",
			"-2662px","-2958px","-3254px","-3550px",
			"-3845px","-4141px","-4437px"];

$(document).ready(function(){
	$("#indepth_top").height($(window).height());
	$(window).resize(function(){
		console.log($(window).height());
		$("#indepth_top").height($(window).height());
	});

	var index = 1;
	$("div.indepth_choose").each(function(){
		$(this).on("click", function(){
			show(this);
		});
	});
	$("div.indepth_cards").each(function(){
		$(this).on("click", function(){
			show(this);
		});
	});
	$("#indepth_arrow_rigth").on("click", function(){
		if(index < 16){
			index += 1;
			$("div#indepth_slider_imgs").css({"left":cards[index]});
			if(index == 16){
				$("#indepth_arrow_rigth").hide();
			}else if(index == 2) {
				$("#indepth_arrow_left").show();
			}
		}
		console.log(cards[index]);
	});
	$("#indepth_arrow_left").on("click", function(){
		if(index > 1){
			index -= 1;
			$("div#indepth_slider_imgs").css({"left":cards[index]});
		}
		if(index == 1){
			$("#indepth_arrow_left").hide();
		}else if(index == 15) {
			$("#indepth_arrow_rigth").show();
		}
	});
	$("#indepth_share_close").on("click", function(){
		$(this).on("click", function(){
			$(".indepth_overlay").each(function(){
				$(this).hide();
			});
		});
	});

});

function show(id){
	index = $(id).parent().attr("index");
	$(".indepth_overlay").each(function(){
		$(this).show();
	});
	$("div#indepth_slider_imgs").css({"left":cards[index]});
	if(index == 1){
		$("#indepth_arrow_left").hide();
	}else if(index == 16){
		$("#indepth_arrow_rigth").hide();
	}
}