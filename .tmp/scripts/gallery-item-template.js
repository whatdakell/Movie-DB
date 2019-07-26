!function () {
  var a = Handlebars.template,
      e = Handlebars.templates = Handlebars.templates || {};
  e["gallery-item.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, e, l, n) {
      var t,
          s = "function",
          i = e.helperMissing,
          p = this.escapeExpression;
      return '<div class="box-content">\n		<span class="rating">' + p((t = null != (t = e.vote_average || (null != a ? a.vote_average : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "vote_average",
        hash: {},
        data: n
      }) : t)) + '</span>\n		<div class="box-info">\n				<h1>' + p((t = null != (t = e.title || (null != a ? a.title : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : t)) + '</h1>\n\n				<div class="movie-info">\n					<span class="rank">0' + p((e.math || a && a.math || i).call(a, n && n.index, {
        name: "math",
        hash: {},
        data: n
      })) + '</span>\n					<div class="small-detail">\n						<p>release date : ' + p((t = null != (t = e.release_date || (null != a ? a.release_date : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "release_date",
        hash: {},
        data: n
      }) : t)) + "</p>\n						<p>popularity : " + p((t = null != (t = e.popularity || (null != a ? a.popularity : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "popularity",
        hash: {},
        data: n
      }) : t)) + '</p>\n						<a class="btn" data-key=' + p((t = null != (t = e.id || (null != a ? a.id : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : t)) + "> Learn More</a>\n					</div>\n				</div>\n		</div>\n</div>\n";
    },
    useData: !0
  });
}();
//# sourceMappingURL=gallery-item-template.js.map
