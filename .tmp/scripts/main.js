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
  const api_key = 'd5d44ba71ba42d221748536faf51c078';

  function bind() {
    $(document).on('click', '.btn', function () {
      var d = $(this).data('key');
      var $self = $(this);
      var $container = $self.closest('.content-box');
      renderData($container, d, 'detail');
    });
    $(document).on('click', '.goBack', function () {
      console.log(this);
      var d = $(this).data('key'); // console.log(d);

      var $self = $(this);
      var $container = $self.closest('.content-box');
      renderData($container, d, 'gallery-item'); // var popularCacheJSON = sessionStorage.getItem('PopularCacheAPI');
      // var popularCache = JSON.parse(popularCacheJSON);
      // var popularCacheJSON = sessionStorage.getItem('PopularCacheAPI');
      // var popularCache = JSON.parse(popularCacheJSON);
      //
      //
      // var filteredID = popularCache.filter(filterByID);
    });
  }

  function renderData(selector, type, temp) {
    var popularCacheJSON = sessionStorage.getItem('popCache');
    var popularCache = JSON.parse(popularCacheJSON);
    console.log('pop', popularCache);

    if (temp == 'gallery-item') {
      var filteredID = popularCache.filter(function (element) {
        return filterByID(element, type);
      });
      console.log(filteredID[0]);
      var template = Handlebars.templates[temp + '.hbs'](filteredID[0]);
      $(selector).html('').html(template);
    } else {
      $.ajax({
        type: 'GET',
        url: `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&append_to_response=videos&language=en-US&page=1`,
        success: function (data) {
          if (type === 'popular') {
            console.log('data', data);
            popCache = data.results;
            sessionStorage.setItem('popCache', JSON.stringify(popCache));
          } // if (data.results){
          // 	var resultsArray = data.results;
          // 	sessionStorage.setItem('resultsArray', resultsArray);
          // 	var filteredID = resultsArray.filter(filterByID);
          // 	console.log('filtered',filteredID);
          // }


          var template = Handlebars.templates[temp + '.hbs'](data);
          $(selector).html('').html(template);
        },
        error: function (XMLHttpRequest) {
          console.log('error', XMLHttpRequest);
        }
      });
    }
  }

  function filterByID(element, a) {
    // console.log('in', a);
    // console.log(element.id);
    return element.id == a;
  }

  renderData('#content-holder', 'popular', 'gallery');
  bind();
});
//# sourceMappingURL=main.js.map
