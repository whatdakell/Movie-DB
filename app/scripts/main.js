console.log('\'Allo \'Allo!');

$(document).ready(function() {

	// Limit Helper to only include top 5 for HB
	Handlebars.registerHelper('limit', function (arr, limit) {
	  if (!Array.isArray(arr)) { return []; }
	  return arr.slice(0, limit);
	});
	Handlebars.registerHelper("math", function(value, options)
	{
	    return parseInt(value) + 1;
	});

	var api_key = 'd5d44ba71ba42d221748536faf51c078';
	// var type = 'popular';

	ajax('popular', 'gallery');
	// anim('popular', 'gallery');
	function ajax(type, temp){
		$.ajax({
			type : 'GET',
			url : 'https://api.themoviedb.org/3/movie/'+ type + '?api_key='+ api_key + '&append_to_response=videos&language=en-US&page=1',
			success: function(data){
				console.log('data',data);
				var template = Handlebars.templates[temp + '.hbs'](data);
				$("#content-holder").html('').html(template);
				getDetail();
				goBack();
				controls();
			},
			error: function(XMLHttpRequest){
				console.log('error', XMLHttpRequest);
			}
		})
	}

	function getDetail(){
		$('.btn').on('click', function(){
			console.log(this);
			var d = $(this).data('key');
			// anim(d , 'detail');
			$('#content-holder').fadeOut("slow" , function(){
				ajax(d , 'detail');
				$('#content-holder').fadeIn("slow");
			});
		});
	}

	function anim(a){
		$("#content-holder").html('').html(a);
		// $('#content-holder').fadeOut("slow" , ajax(a, b));
		console.log(a);
		// ajax(a , b)
		$('#content-holder').fadeIn("slow");
		// $('#content-holder').fadeOut("slow" , ajax(a, b));
		// $('#content-holder').fadeOut("slow" , function(a, b){
		// 	console.log(a,b);
		// 	ajax(a , b);
		// 	$('#content-holder').fadeIn("slow");
		// });
		// $('#content-holder').fadeIn("slow");
		// $('#content-holder').fadeIn("slow");
	}

	function goBack(){
		$('.goBack').on('click', function(){
			// anim('popular', 'gallery');
			$('#content-holder').fadeOut("slow" , function(){
				ajax('popular', 'gallery');
				$('#content-holder').fadeIn("slow");
			});
		});
	}

	function controls(){
		$('.mute').on('click', function(){
			console.log('d');
			$("video").prop('muted', false); //mute
		});
	}

});
