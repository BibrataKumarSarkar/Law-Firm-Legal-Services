			/************************ Page cursors ***************************/
			$(window).mousemove(function(e) {
			    $(".cursor").css({
			        left: e.pageX,
			        top: e.pageY
			    })
			})
			$(".cursor-link")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active")
			    })
			//Blog post 1:
			$(".cursor-link-blog-post-1")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-1")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-1")
			    })
			//Blog post 2:
			$(".cursor-link-blog-post-2")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-2")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-2")
			    })
			//Blog post 3:
			$(".cursor-link-blog-post-3")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-3")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-3")
			    })
			//Blog post 4:
			$(".cursor-link-blog-post-4")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-4")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-4")
			    })
			//Blog post 5:
			$(".cursor-link-blog-post-5")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-5")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-5")
			    })
			//Blog post 6:
			$(".cursor-link-blog-post-6")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-6")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-6")
			    })
			//Blog post 7:
			$(".cursor-link-blog-post-7")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-7")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-7")
			    })
			//Blog post 8:
			$(".cursor-link-blog-post-8")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-8")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-8")
			    })
			//Blog post 9:
			$(".cursor-link-blog-post-9")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-9")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-9")
			    })
			//Blog post 10:
			$(".cursor-link-blog-post-10")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-10")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-10")
			    })
			//Blog post 11:
			$(".cursor-link-blog-post-11")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-11")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-11")
			    })
			//Blog post 12:
			$(".cursor-link-blog-post-12")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-12")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-12")
			    })
			//Blog post 13:
			$(".cursor-link-blog-post-13")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-13")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-13")
			    })
			//Blog post 14:
			$(".cursor-link-blog-post-14")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-14")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-14")
			    })
			//Blog post 15:
			$(".cursor-link-blog-post-15")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-15")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-15")
			    })
			//Blog post 16:
			$(".cursor-link-blog-post-16")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-16")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-16")
			    })
			//Blog post 17:
			$(".cursor-link-blog-post-17")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-17")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-17")
			    })
			//Blog post 18:
			$(".cursor-link-blog-post-18")
			    .on("mouseenter", function() {
			        $('.cursor').addClass("active-blog-post-18")
			    })
			    .on("mouseleave", function() {
			        $('.cursor').removeClass("active-blog-post-18")
			    })
			//Parallax & fade on scroll	
			function scrollBanner() {
			    $(document).on('scroll', function() {
			        var scrollPos = $(this).scrollTop();
			        $('.parallax-fade-top').css({
			            'top': (scrollPos / 2) + 'px',
			            'opacity': 1 - (scrollPos / 240)
			        });
			    });
			}
			scrollBanner();
			/*! Scroll Reveal Animations */
			window.scrollReveal = function(t) {
			    "use strict";

			    function e(e) {
			        this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = {}, 1 == this.options.init && this.init()
			    }
			    var i = 1,
			        o = function() {
			            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
			                t.setTimeout(e, 1e3 / 60)
			            }
			        }();
			    return e.prototype = {
			        defaults: {
			            after: "0s",
			            enter: "bottom",
			            move: "24px",
			            over: "0.66s",
			            easing: "ease-in-out",
			            opacity: 0,
			            viewportFactor: .33,
			            reset: !1,
			            init: !0
			        },
			        init: function() {
			            this.scrolled = !1;
			            var e = this;
			            this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function(t, o) {
			                var r = t.getAttribute("data-scroll-reveal-id");
			                r || (r = i++, t.setAttribute("data-scroll-reveal-id", r)), e.styleBank[r] || (e.styleBank[r] = t.getAttribute("style")), e.update(t)
			            });
			            var r = function(t) {
			                    e.scrolled || (e.scrolled = !0, o(function() {
			                        e._scrollPage()
			                    }))
			                },
			                n = function() {
			                    function t() {
			                        e._scrollPage(), e.resizeTimeout = null
			                    }
			                    e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200)
			                };
			            t.addEventListener("scroll", r, !1), t.addEventListener("resize", n, !1)
			        },
			        _scrollPage: function() {
			            var t = this;
			            this.elems.forEach(function(e, i) {
			                t.update(e)
			            }), this.scrolled = !1
			        },
			        parseLanguage: function(t) {
			            function e(t) {
			                var e = [],
			                    i = ["from", "the", "and", "then", "but", "with"];
			                return t.forEach(function(t, o) {
			                    i.indexOf(t) > -1 || e.push(t)
			                }), e
			            }
			            var i = t.getAttribute("data-scroll-reveal").split(/[, ]+/),
			                o = {};
			            return i = e(i), i.forEach(function(t, e) {
			                switch (t) {
			                    case "enter":
			                        return void(o.enter = i[e + 1]);
			                    case "after":
			                        return void(o.after = i[e + 1]);
			                    case "wait":
			                        return void(o.after = i[e + 1]);
			                    case "move":
			                        return void(o.move = i[e + 1]);
			                    case "ease":
			                        return o.move = i[e + 1], void(o.ease = "ease");
			                    case "ease-in":
			                        return o.move = i[e + 1], void(o.easing = "ease-in");
			                    case "ease-in-out":
			                        return o.move = i[e + 1], void(o.easing = "ease-in-out");
			                    case "ease-out":
			                        return o.move = i[e + 1], void(o.easing = "ease-out");
			                    case "over":
			                        return void(o.over = i[e + 1]);
			                    default:
			                        return
			                }
			            }), o
			        },
			        update: function(t) {
			            var e = this.genCSS(t),
			                i = this.styleBank[t.getAttribute("data-scroll-reveal-id")];
			            return null != i ? i += ";" : i = "", t.getAttribute("data-scroll-reveal-initialized") || (t.setAttribute("style", i + e.initial), t.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(t, this.options.viewportFactor) ? t.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(t, this.options.viewportFactor) ? (t.setAttribute("style", i + e.target + e.transition), void(this.options.reset || setTimeout(function() {
			                "" != i ? t.setAttribute("style", i) : t.removeAttribute("style"), t.setAttribute("data-scroll-reveal-complete", !0)
			            }, e.totalDuration))) : void 0 : void(this.options.reset && t.setAttribute("style", i + e.initial + e.reset))
			        },
			        genCSS: function(t) {
			            var e, i, o = this.parseLanguage(t);
			            o.enter ? (("top" == o.enter || "bottom" == o.enter) && (e = o.enter, i = "y"), ("left" == o.enter || "right" == o.enter) && (e = o.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, i = "x")), ("top" == e || "left" == e) && (o.move ? o.move = "-" + o.move : o.move = "-" + this.options.move);
			            var r = o.move || this.options.move,
			                n = o.over || this.options.over,
			                s = o.after || this.options.after,
			                a = o.easing || this.options.easing,
			                l = o.opacity || this.options.opacity,
			                u = "-webkit-transition: -webkit-transform " + n + " " + a + " " + s + ",  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " " + s + ", opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
			                c = "-webkit-transition: -webkit-transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";transition: transform " + n + " " + a + " 0s,  opacity " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
			                f = "-webkit-transform: translate" + i + "(" + r + ");transform: translate" + i + "(" + r + ");opacity: " + l + ";",
			                p = "-webkit-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
			            return {
			                transition: u,
			                initial: f,
			                target: p,
			                reset: c,
			                totalDuration: 1e3 * (parseFloat(n) + parseFloat(s))
			            }
			        },
			        getViewportH: function() {
			            var e = this.docElem.clientHeight,
			                i = t.innerHeight;
			            return i > e ? i : e
			        },
			        getOffset: function(t) {
			            var e = 0,
			                i = 0;
			            do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
			            return {
			                top: e,
			                left: i
			            }
			        },
			        isElementInViewport: function(e, i) {
			            var o = t.pageYOffset,
			                r = o + this.getViewportH(),
			                n = e.offsetHeight,
			                s = this.getOffset(e).top,
			                a = s + n,
			                i = i || 0;
			            return r >= s + n * i && a >= o || "fixed" == (e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null)).position
			        },
			        extend: function(t, e) {
			            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
			            return t
			        }
			    }, e
			}(window);
			/* Scroll Animation */
			window.scrollReveal = new scrollReveal();