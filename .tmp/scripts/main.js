console.log('\'Allo \'Allo!');
$(document).ready(function () {
  // Get configuration
  var base_url;
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/configuration?api_key=d5d44ba71ba42d221748536faf51c078',
    success: function (data) {
      findImg(data.images);
    },
    error: function (XMLHttpRequest) {
      console.log('error', XMLHttpRequest);
    }
  });
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/movie/420818?api_key=d5d44ba71ba42d221748536faf51c078&append_to_response=videos',
    success: function (data) {
      console.log('data', data);
      console.log('data', data.videos.results[0].key);
      var template = Handlebars.templates['tabs.hbs'](data);
      $("#content-holder").html('').html(template);
    },
    error: function (XMLHttpRequest) {
      console.log('error', XMLHttpRequest);
    }
  }); // Call Config API

  function findImg(config) {
    console.log('config', config);
    var size = 'orginal';
    base_url = config.base_url;
    console.log(base_url + size);
    return base_url;
  }
});
//# sourceMappingURL=main.js.map
