!function () {
  var a = Handlebars.template,
      l = Handlebars.templates = Handlebars.templates || {};
  l["detail.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, t, e) {
      var n,
          s,
          i = this.lambda,
          o = this.escapeExpression,
          r = "function",
          p = l.helperMissing;
      return '<button class="goBack">Go Back</button>\n<div class="detail-box">\n	<iframe class="bg-image" width="100vh" height="100%" src="http://www.youtube.com/embed/' + o(i(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '?autoplay=1&controls=0&showinfo=0&loop=1&autohide=1&mute=1" frameborder="0" allowfullscreen autoplay></iframe>\n	<div class="box-content">\n			<img src="http://image.tmdb.org/t/p/original' + o((s = null != (s = l.poster_path || (null != a ? a.poster_path : a)) ? s : p, typeof s === r ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: e
      }) : s)) + '" />\n			<div class="box-info">\n					<p>' + o((s = null != (s = l.title || (null != a ? a.title : a)) ? s : p, typeof s === r ? s.call(a, {
        name: "title",
        hash: {},
        data: e
      }) : s)) + '</p>\n					<p>User Rating <span class="rating">' + o((s = null != (s = l.vote_average || (null != a ? a.vote_average : a)) ? s : p, typeof s === r ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: e
      }) : s)) + '</span></p>\n<!--\n					<a href="https://www.youtube.com/embed/' + o(i(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '" target="_blank"> Play Trailer</a> -->\n			</div>\n	</div>\n</div>\n';
    },
    useData: !0
  }), l["gallery.hbs"] = a({
    1: function (a, l, t, e) {
      var n,
          s,
          i = "function",
          o = l.helperMissing,
          r = this.escapeExpression,
          p = this.lambda;
      return '		<div class="content-box" data-attribute=' + r((s = null != (s = l.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : s)) + " style=\"background-image: url('http://image.tmdb.org/t/p/original/" + r((s = null != (s = l.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: e
      }) : s)) + '\');">\n\n\n			<!-- <img class="bg-image" src="http://image.tmdb.org/t/p/original' + r((s = null != (s = l.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: e
      }) : s)) + '" /> -->\n\n			<div class="box-content">\n					<!-- <img src="http://image.tmdb.org/t/p/original' + r((s = null != (s = l.poster_path || (null != a ? a.poster_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: e
      }) : s)) + '" /> -->\n					<span class="rating">' + r((s = null != (s = l.vote_average || (null != a ? a.vote_average : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: e
      }) : s)) + '</span>\n					<div class="box-info">\n							<h1>' + r((s = null != (s = l.title || (null != a ? a.title : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "title",
        hash: {},
        data: e
      }) : s)) + '</h1>\n\n							<div class="movie-info">\n								<span class="rank">0' + r((l.math || a && a.math || o).call(a, e && e.index, {
        name: "math",
        hash: {},
        data: e
      })) + '</span>\n								<div class="small-detail">\n									<p>release date : ' + r((s = null != (s = l.release_date || (null != a ? a.release_date : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "release_date",
        hash: {},
        data: e
      }) : s)) + "</p>\n									<p>popularity : " + r((s = null != (s = l.popularity || (null != a ? a.popularity : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "popularity",
        hash: {},
        data: e
      }) : s)) + '</p>\n									<button class="btn" data-key=' + r((s = null != (s = l.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : s)) + '> Learn More</button>\n								</div>\n							</div>\n							<!-- <button class="btn" data-key=' + r((s = null != (s = l.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : s)) + '> Learn More</button> -->\n							<!-- <a href="https://www.youtube.com/embed/' + r(p(null != (n = null != (n = null != (n = null != a ? a.videos : a) ? n.results : n) ? n["0"] : n) ? n.key : n, a)) + '" target="_blank"> Play Trailer</a> -->\n					</div>\n			</div>\n		</div>\n';
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, t, e) {
      var n,
          s = l.helperMissing,
          i = "";
      return n = l.each.call(a, (l.limit || a && a.limit || s).call(a, null != a ? a.results : a, 5, {
        name: "limit",
        hash: {},
        data: e
      }), {
        name: "each",
        hash: {},
        fn: this.program(1, e),
        inverse: this.noop,
        data: e
      }), null != n && (i += n), i;
    },
    useData: !0
  });
}();
//# sourceMappingURL=templates.js.map
