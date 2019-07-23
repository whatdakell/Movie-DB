console.log('\'Allo \'Allo!');

var data = {
	'tabs': {
		'tab1': {
			id : 'tab1',
			default: true,
			content: 'Content 1'
		},
		'tab2': {
			id : 'tab2',
			content: 'Content 2'
		}
	}
}



// Query Tabs
var tabs = document.querySelectorAll('li');
var i;


// Query Content Box
var contentBox = document.querySelector('.content-box p');
console.log(contentBox);



$('.tab-list-item-link').on('click', function() {
	var tabId = $(this)[0].getAttribute('id');
	console.log('clicked', tabId);
	findContent(tabId);
});


// Find Tab Content
function findContent(id){
	console.log('param', id);
	console.log(data.tabs[id]);

	var template = Handlebars.templates['tabs.hbs'](data.tabs[id]);
	$("#content-holder").html('').html(template);
}

$(document).ready(function() {
	findContent($('.tab-list-item-link.active').attr('id'));
});

console.log('ta', data.tabs.length);
