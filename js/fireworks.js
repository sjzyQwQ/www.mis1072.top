! function () {
	var n = function () {
		return parseFloat(getComputedStyle(document.documentElement).fontSize)
	}, e = document.getElementById("fireworks"),
		t = e.getContext("2d"),
		a = 200,
		i = 0,
		r = 0,
		o = [],
		u = function () {
			scale = window.devicePixelRatio || 1, e.width = window.innerWidth * scale, e.height = window.innerHeight * scale, t.scale(scale, scale)
		}, d = ["#FF324A", "#31FFA6", "#206EFF", "#FFFF99"],
		c = function (e, a) {
			var i = {};
			return i.x = e, i.y = a, i.color = d[anime.random(0, d.length - 1)], i.radius = anime.random(n(), 2 * n()), i.draw = function () {
				t.beginPath(), t.arc(i.x, i.y, i.radius, 0, 2 * Math.PI, !0), t.fillStyle = i.color, t.fill()
			}, i
		}, l = function (n) {
			var e = o.indexOf(n);
			e > -1 && o.splice(e, 1)
		}, m = function (e, i) {
			u();
			var r = function (n, e) {
				for (var t = [], a = 0; a < 24; a++) {
					var i = c(n, e);
					t.push(i)
				}
				return t
			}(e, i),
				m = function (n, e) {
					var a = {};
					return a.x = n, a.y = e, a.color = d[anime.random(0, d.length - 1)], a.color = "#FFF", a.radius = 0, a.alpha = 1, a.lineWidth = 6, a.draw = function () {
						t.globalAlpha = a.alpha, t.beginPath(), t.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0), t.lineWidth = a.lineWidth, t.strokeStyle = a.color, t.stroke(), t.globalAlpha = 1
					}, a
				}(e, i),
				s = anime({
					targets: r,
					x: function (n) {
						return n.x + anime.random(-200, a)
					},
					y: function (n) {
						return n.y + anime.random(-200, a)
					},
					radius: 0,
					duration: function () {
						return anime.random(1200, 1800)
					},
					easing: "easeOutExpo",
					complete: l
				}),
				f = anime({
					targets: m,
					radius: function () {
						return anime.random(8.75 * n(), 11.25 * n())
					},
					lineWidth: 0,
					alpha: {
						value: 0,
						easing: "linear",
						duration: function () {
							return anime.random(400, 600)
						}
					},
					duration: function () {
						return anime.random(1200, 1800)
					},
					easing: "easeOutExpo",
					complete: l
				});
			o.push(s), o.push(f)
		};
	anime({
		duration: 1 / 0,
		update: function () {
			t.clearRect(0, 0, e.width, e.height), o.forEach((function (n) {
				n.animatables.forEach((function (n) {
					n.target.draw()
				}))
			}))
		}
	});
	document.addEventListener("mousedown", (function (n) {
		i = n.clientX, r = n.clientY, m(i, r)
	}), !1), window.addEventListener("resize", u, !1)
}();