!function () {
  var a = Handlebars.template,
      e = Handlebars.templates = Handlebars.templates || {};
  e["gallery-item.hbs"] = a({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, e, l, n) {
      var t,
          s = "function",
          i = e.helperMissing,
          d = this.escapeExpression;
      return '<div class="box-content">\n		<span class="rating">' + d((t = null != (t = e.vote_average || (null != a ? a.vote_average : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "vote_average",
        hash: {},
        data: n
      }) : t)) + '</span>\n		<div class="box-info">\n				<h2>' + d((t = null != (t = e.title || (null != a ? a.title : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "title",
        hash: {},
        data: n
      }) : t)) + '</h2>\n\n				<div class="movie-info">\n					<span class="rank">' + d((t = null != (t = e.index || (null != a ? a.index : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "index",
        hash: {},
        data: n
      }) : t)) + '</span>\n					<div class="small-detail">\n						<p>release date : ' + d((t = null != (t = e.release_date || (null != a ? a.release_date : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "release_date",
        hash: {},
        data: n
      }) : t)) + "</p>\n						<p>popularity : " + d((t = null != (t = e.popularity || (null != a ? a.popularity : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "popularity",
        hash: {},
        data: n
      }) : t)) + '</p>\n						<button class="btn" data-key=' + d((t = null != (t = e.id || (null != a ? a.id : a)) ? t : i, typeof t === s ? t.call(a, {
        name: "id",
        hash: {},
        data: n
      }) : t)) + "> Learn More</button>\n					</div>\n				</div>\n		</div>\n</div>\n";
    },
    useData: !0
  });
}();
//# sourceMappingURL=gallery-item-template.js.map
