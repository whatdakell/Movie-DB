console.log('\'Allo \'Allo!');
$(document).ready(function () {
  Handlebars.registerPartial('gallery-item', Handlebars.templates['gallery-item.hbs']); // Limit Helper to only include top 5 for HB

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
      var d = $(this).data('key');
      var $self = $(this);
      var $container = $self.closest('.content-box');
      renderData($container, d, template);
    });
  }

  function renderData(selector, type, temp) {
    // Retrieve Cache
    var popularCacheJSON = sessionStorage.getItem('popCache');
    var popularCache = JSON.parse(popularCacheJSON);
    console.log('pop', popularCache); // if gallery-item retrive the matching id from cache and render template

    if (temp == 'gallery-item') {
      var filteredID = popularCache.filter(element => element.id == type);
      var template = Handlebars.templates[temp + '.hbs'](filteredID[0]);
      $(selector).html('').html(template);
    } else {
      $.ajax({
        type: 'GET',
        url: `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&append_to_response=videos&language=en-US&page=1`,
        success: function (data) {
          console.log('AJAX CALL');

          if (type === 'popular') {
            console.log('data', data);
            popCache = data.results;
            sessionStorage.setItem('popCache', JSON.stringify(popCache));
          }

          var template = Handlebars.templates[temp + '.hbs'](data);
          $(selector).html('').html(template);
        },
        error: function (XMLHttpRequest) {
          console.log('error', XMLHttpRequest);
        }
      });
    }
  }

  renderData('#content-holder', 'popular', 'gallery');
  bind();
});
//# sourceMappingURL=main.js.map
