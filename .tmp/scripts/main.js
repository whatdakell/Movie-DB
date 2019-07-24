console.log('\'Allo \'Allo!');
$(document).ready(function () {
  // Limit Helper to only include top 5 for HB
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
      renderData(d, 'detail');
    });
    $(document).on('click', '.goBack', function () {
      renderData('popular', 'gallery');
    });
  }

  function renderData(type, temp) {
    $.ajax({
      type: 'GET',
      url: `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&append_to_response=videos&language=en-US&page=1`,
      success: function (data) {
        console.log('data', data);
        var template = Handlebars.templates[temp + '.hbs'](data);
        $("#content-holder").html('').html(template);
      },
      error: function (XMLHttpRequest) {
        console.log('error', XMLHttpRequest);
      }
    });
  }

  renderData('popular', 'gallery');
  bind();
});
//# sourceMappingURL=main.js.map
