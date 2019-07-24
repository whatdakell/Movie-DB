!function () {
  var a = Handlebars.template,
      l = Handlebars.templates = Handlebars.templates || {};
  l["detail.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, e, n) {
      var t,
          i,
          s = this.lambda,
          o = this.escapeExpression,
          r = "function",
          d = l.helperMissing;
      return '\n<div class="content-box">\n	<iframe class="bg-image" width="100vh" height="100%" src="http://www.youtube.com/embed/' + o(s(null != (t = null != (t = null != (t = null != a ? a.videos : a) ? t.results : t) ? t["0"] : t) ? t.key : t, a)) + '?autoplay=1&controls=0&showinfo=0&loop=1&autohide=1&mute=1" frameborder="0" allowfullscreen autoplay></iframe>\n	<div class="box-content">\n			<div class="box-info">\n					<h1>' + o((i = null != (i = l.title || (null != a ? a.title : a)) ? i : d, typeof i === r ? i.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : i)) + '</h1>\n					<div class="movie-info">\n						<img src="http://image.tmdb.org/t/p/original' + o((i = null != (i = l.poster_path || (null != a ? a.poster_path : a)) ? i : d, typeof i === r ? i.call(a, {
        name: "poster_path",
        hash: {},
        data: n
      }) : i)) + '" />\n						<div class="small-detail">\n							<h2>' + o((i = null != (i = l.tagline || (null != a ? a.tagline : a)) ? i : d, typeof i === r ? i.call(a, {
        name: "tagline",
        hash: {},
        data: n
      }) : i)) + "</h2>\n							<p>runtime : " + o((i = null != (i = l.runtime || (null != a ? a.runtime : a)) ? i : d, typeof i === r ? i.call(a, {
        name: "runtime",
        hash: {},
        data: n
      }) : i)) + ' minutes</p>\n							<p class="description">' + o((i = null != (i = l.overview || (null != a ? a.overview : a)) ? i : d, typeof i === r ? i.call(a, {
        name: "overview",
        hash: {},
        data: n
      }) : i)) + '</p>\n							<a class="goBack">Go Back</a>\n						</div>\n					</div>\n			</div>\n	</div>\n</div>\n';
    },
    useData: !0
  }), l["gallery.hbs"] = a({
    1: function (a, l, e, n) {
      var t,
          i = "function",
          s = l.helperMissing,
          o = this.escapeExpression;
      return '		<div class="content-box" data-attribute=' + o((t = null != (t = l.id || (null != a ? a.id : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : t)) + " style=\"background-image: url('http://image.tmdb.org/t/p/original/" + o((t = null != (t = l.backdrop_path || (null != a ? a.backdrop_path : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "backdrop_path",
        hash: {},
        data: n
      }) : t)) + '\');">\n			<div class="box-content">\n					<span class="rating">' + o((t = null != (t = l.vote_average || (null != a ? a.vote_average : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "vote_average",
        hash: {},
        data: n
      }) : t)) + '</span>\n					<div class="box-info">\n							<h1>' + o((t = null != (t = l.title || (null != a ? a.title : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : t)) + '</h1>\n\n							<div class="movie-info">\n								<span class="rank">0' + o((l.math || a && a.math || s).call(a, n && n.index, {
        name: "math",
        hash: {},
        data: n
      })) + '</span>\n								<div class="small-detail">\n									<p>release date : ' + o((t = null != (t = l.release_date || (null != a ? a.release_date : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "release_date",
        hash: {},
        data: n
      }) : t)) + "</p>\n									<p>popularity : " + o((t = null != (t = l.popularity || (null != a ? a.popularity : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "popularity",
        hash: {},
        data: n
      }) : t)) + '</p>\n									<a class="btn" data-key=' + o((t = null != (t = l.id || (null != a ? a.id : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : t)) + "> Learn More</a>\n								</div>\n							</div>\n					</div>\n			</div>\n		</div>\n";
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, e, n) {
      var t,
          i = l.helperMissing,
          s = "";
      return t = l.each.call(a, (l.limit || a && a.limit || i).call(a, null != a ? a.results : a, 5, {
        name: "limit",
        hash: {},
        data: n
      }), {
        name: "each",
        hash: {},
        fn: this.program(1, n),
        inverse: this.noop,
        data: n
      }), null != t && (s += t), s;
    },
    useData: !0
  });
}();
//# sourceMappingURL=templates.js.map
