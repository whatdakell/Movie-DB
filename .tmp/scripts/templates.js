!function () {
  var a = Handlebars.template,
      t = Handlebars.templates = Handlebars.templates || {};
  t["detail.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, t, l, n) {
      var e,
          s,
          i = "function",
          o = t.helperMissing,
          r = this.escapeExpression,
          p = this.lambda;
      return '<button class="goBack">Go Back</button>\n<div class="content-box">\n	<img class="bg-image" src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: n
      }) : s)) + '" />\n	<div class="box-content">\n			<img src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.poster_path || (null != a ? a.poster_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: n
      }) : s)) + '" />\n			<div class="box-info">\n					<p>' + r((s = null != (s = t.title || (null != a ? a.title : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : s)) + '</p>\n					<p>User Rating <span class="rating">' + r((s = null != (s = t.vote_average || (null != a ? a.vote_average : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: n
      }) : s)) + '</span></p>\n\n					<a href="https://www.youtube.com/embed/' + r(p(null != (e = null != (e = null != (e = null != a ? a.videos : a) ? e.results : e) ? e["0"] : e) ? e.key : e, a)) + '" target="_blank"> Play Trailer</a>\n			</div>\n	</div>\n</div>\n';
    },
    useData: !0
  }), t["gallery.hbs"] = a({
    1: function (a, t, l, n) {
      var e,
          s,
          i = "function",
          o = t.helperMissing,
          r = this.escapeExpression,
          p = this.lambda;
      return '		<div class="content-box" data-attribute=' + r((s = null != (s = t.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : s)) + '>\n			<img class="bg-image" src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.backdrop_path || (null != a ? a.backdrop_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "backdrop_path",
        hash: {},
        data: n
      }) : s)) + '" />\n			<div class="box-content">\n					<img src="http://image.tmdb.org/t/p/original' + r((s = null != (s = t.poster_path || (null != a ? a.poster_path : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "poster_path",
        hash: {},
        data: n
      }) : s)) + '" />\n					<div class="box-info">\n							<p>' + r((s = null != (s = t.title || (null != a ? a.title : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : s)) + '</p>\n							<p>User Rating <span class="rating">' + r((s = null != (s = t.vote_average || (null != a ? a.vote_average : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "vote_average",
        hash: {},
        data: n
      }) : s)) + '</span></p>\n							<button class="btn" data-key=' + r((s = null != (s = t.id || (null != a ? a.id : a)) ? s : o, typeof s === i ? s.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : s)) + '> Learn More</button>\n							<!-- <a href="https://www.youtube.com/embed/' + r(p(null != (e = null != (e = null != (e = null != a ? a.videos : a) ? e.results : e) ? e["0"] : e) ? e.key : e, a)) + '" target="_blank"> Play Trailer</a> -->\n					</div>\n			</div>\n		</div>\n';
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, t, l, n) {
      var e,
          s = t.helperMissing,
          i = "<div>\n\n";
      return e = t.each.call(a, (t.limit || a && a.limit || s).call(a, null != a ? a.results : a, 5, {
        name: "limit",
        hash: {},
        data: n
      }), {
        name: "each",
        hash: {},
        fn: this.program(1, n),
        inverse: this.noop,
        data: n
      }), null != e && (i += e), i + "</div>\n";
    },
    useData: !0
  });
}();
//# sourceMappingURL=templates.js.map
