!function () {
  var a = Handlebars.template,
      l = Handlebars.templates = Handlebars.templates || {};
  l["detail.hbs"] = a({
    1: function (a) {
      var l,
          n = this.lambda,
          e = this.escapeExpression;
      return '	<iframe class="bg-image" width="100vh" height="100%" src="http://www.youtube.com/embed/' + e(n(null != (l = null != (l = null != (l = null != a ? a.videos : a) ? l.results : l) ? l["0"] : l) ? l.key : l, a)) + '?autoplay=1&controls=0&showinfo=0&loop=1&autohide=1&mute=1" frameborder="0" allowfullscreen autoplay></iframe>\n';
    },
    3: function (a, l, n, e) {
      var t,
          i = "function",
          s = l.helperMissing,
          r = this.escapeExpression;
      return "<p>runtime : " + r((t = null != (t = l.runtime || (null != a ? a.runtime : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "runtime",
        hash: {},
        data: e
      }) : t)) + " minutes</p>";
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, n, e) {
      var t,
          i,
          s = "function",
          r = l.helperMissing,
          o = this.escapeExpression,
          p = "\n";
      return t = l["if"].call(a, null != (t = null != (t = null != (t = null != a ? a.videos : a) ? t.results : t) ? t["0"] : t) ? t.key : t, {
        name: "if",
        hash: {},
        fn: this.program(1, e),
        inverse: this.noop,
        data: e
      }), null != t && (p += t), p += '<div class="box-content">\n		<div class="box-info">\n				<h2>' + o((i = null != (i = l.title || (null != a ? a.title : a)) ? i : r, typeof i === s ? i.call(a, {
        name: "title",
        hash: {},
        data: e
      }) : i)) + '</h2>\n				<div class="movie-info">\n					<img src="http://image.tmdb.org/t/p/original' + o((i = null != (i = l.poster_path || (null != a ? a.poster_path : a)) ? i : r, typeof i === s ? i.call(a, {
        name: "poster_path",
        hash: {},
        data: e
      }) : i)) + '" />\n					<div class="small-detail">\n						<h3>' + o((i = null != (i = l.tagline || (null != a ? a.tagline : a)) ? i : r, typeof i === s ? i.call(a, {
        name: "tagline",
        hash: {},
        data: e
      }) : i)) + "</h3>\n						", t = l["if"].call(a, null != a ? a.runtime : a, {
        name: "if",
        hash: {},
        fn: this.program(3, e),
        inverse: this.noop,
        data: e
      }), null != t && (p += t), p + '\n						<p class="description">' + o((i = null != (i = l.overview || (null != a ? a.overview : a)) ? i : r, typeof i === s ? i.call(a, {
        name: "overview",
        hash: {},
        data: e
      }) : i)) + '</p>\n						<button class="goBack" data-key=' + o((i = null != (i = l.id || (null != a ? a.id : a)) ? i : r, typeof i === s ? i.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : i)) + ">Go Back</button>\n					</div>\n				</div>\n		</div>\n</div>\n";
    },
    useData: !0
  }), l["gallery-item.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, n, e) {
      var t,
          i = "function",
          s = l.helperMissing,
          r = this.escapeExpression;
      return '<div class="box-content">\n		<span class="rating">' + r((t = null != (t = l.vote_average || (null != a ? a.vote_average : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "vote_average",
        hash: {},
        data: e
      }) : t)) + '</span>\n		<div class="box-info">\n				<h2>' + r((t = null != (t = l.title || (null != a ? a.title : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "title",
        hash: {},
        data: e
      }) : t)) + '</h2>\n\n				<div class="movie-info">\n					<span class="rank">' + r((t = null != (t = l.index || (null != a ? a.index : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "index",
        hash: {},
        data: e
      }) : t)) + '</span>\n					<div class="small-detail">\n						<p>release date : ' + r((t = null != (t = l.release_date || (null != a ? a.release_date : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "release_date",
        hash: {},
        data: e
      }) : t)) + "</p>\n						<p>popularity : " + r((t = null != (t = l.popularity || (null != a ? a.popularity : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "popularity",
        hash: {},
        data: e
      }) : t)) + '</p>\n						<button class="btn" data-key=' + r((t = null != (t = l.id || (null != a ? a.id : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : t)) + "> Learn More</button>\n					</div>\n				</div>\n		</div>\n</div>\n";
    },
    useData: !0
  }), l["gallery.hbs"] = a({
    1: function (a, l, n, e) {
      var t,
          i,
          s = "function",
          r = l.helperMissing,
          o = this.escapeExpression,
          p = '	<div class="content-box" data-attribute=' + o((i = null != (i = l.id || (null != a ? a.id : a)) ? i : r, typeof i === s ? i.call(a, {
        name: "id",
        hash: {},
        data: e
      }) : i)) + " style=\"background-image: url('http://image.tmdb.org/t/p/original/";
      return t = l["if"].call(a, null != a ? a.backdrop_path : a, {
        name: "if",
        hash: {},
        fn: this.program(2, e),
        inverse: this.program(4, e),
        data: e
      }), null != t && (p += t), p += "');\">\n", t = this.invokePartial(n["gallery-item"], "		", "gallery-item", a, void 0, l, n, e), null != t && (p += t), p + "	</div>\n";
    },
    2: function (a, l, n, e) {
      var t,
          i = "function",
          s = l.helperMissing,
          r = this.escapeExpression;
      return r((t = null != (t = l.backdrop_path || (null != a ? a.backdrop_path : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "backdrop_path",
        hash: {},
        data: e
      }) : t));
    },
    4: function (a, l, n, e) {
      var t,
          i = "function",
          s = l.helperMissing,
          r = this.escapeExpression;
      return r((t = null != (t = l.poster_path || (null != a ? a.poster_path : a)) ? t : s, typeof t === i ? t.call(a, {
        name: "poster_path",
        hash: {},
        data: e
      }) : t));
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, l, n, e) {
      var t,
          i = l.helperMissing,
          s = "<h1>Top 5 Popular Movies</h1>\n";
      return t = l.each.call(a, (l.limit || a && a.limit || i).call(a, null != a ? a.results : a, 5, {
        name: "limit",
        hash: {},
        data: e
      }), {
        name: "each",
        hash: {},
        fn: this.program(1, e),
        inverse: this.noop,
        data: e
      }), null != t && (s += t), s;
    },
    usePartial: !0,
    useData: !0
  });
}();
//# sourceMappingURL=templates.js.map
