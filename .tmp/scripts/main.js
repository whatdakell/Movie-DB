$(document).ready(function () {
  Handlebars.registerPartial('gallery-item', Handlebars.templates['gallery-item.hbs']);
  Handlebars.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) {
      return [];
    }

    return arr.slice(0, limit);
  });
  Handlebars.registerHelper("math", function (value, options) {
    return parseInt(value) + 1;
  });
  const api_key = 'd5d44ba71ba42d221748536faf51c078'; // Click Events

  function bind() {
    btnClick('.btn', 'detail');
    btnClick('.goBack', 'gallery-item');
  }

  function btnClick($class, template) {
    $(document).on('click', $class, function () {
      var itemKey = $(this).data('key');
      var $container = $(this).closest('.content-box');
      renderData($container, itemKey, template);
    });
  }

  function renderTemplate(selector, temp, data) {
    var template = Handlebars.templates[temp + '.hbs'](data);
    $(selector).html('').html(template);
  }

  function renderData(selector, type, temp) {
    switch (temp) {
      case 'gallery-item':
        var galleryItemDataObj = JSON.parse(sessionStorage.getItem('popularCache')).filter(element => element.id == type)[0];
        console.log('test', JSON.parse(sessionStorage.getItem('popularCache')).filter(element => element.id == type)[0]);
        renderTemplate(selector, temp, galleryItemDataObj);
        break;

      case 'gallery':
      case 'detail':
        $.ajax({
          type: 'GET',
          url: `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&append_to_response=videos&language=en-US&page=1`,
          success: function (data) {
            console.log('AJAX CALL');

            if (type === 'popular') {
              var newObj = data.results.map(function (obj, index) {
                obj['index'] = (index < 9 ? '0' : '') + (index + 1);
                return obj;
              });
              sessionStorage.setItem('popularCache', JSON.stringify(newObj));
            }

            renderTemplate(selector, temp, data);
          },
          error: function (XMLHttpRequest) {
            console.log('error', XMLHttpRequest);
          }
        });
        break;
    }
  }

  renderData('#content-holder', 'popular', 'gallery');
  bind();
});
//# sourceMappingURL=main.js.map
