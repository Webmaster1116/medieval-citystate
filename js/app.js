!(function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.i = function (e) {
      return e;
    }),
    (t.d = function (e, n, i) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "./"),
    t((t.s = 2));
})([
  function (e, t, n) {
    /*!
     * Bootstrap v4.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */ !(function (e, i) {
      i(t, n(3), n(4));
    })(0, function (e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function c(e) {
        return {}.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase();
      }
      function u() {
        return {
          bindType: p,
          delegateType: p,
          handle: function (e) {
            if (t(e.target).is(this))
              return e.handleObj.handler.apply(this, arguments);
          },
        };
      }
      function f(e) {
        var n = this,
          i = !1;
        return (
          t(this).one(m.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || m.triggerTransitionEnd(n);
          }, e),
          this
        );
      }
      function d(e, t) {
        var n = e.nodeName.toLowerCase();
        if (-1 !== t.indexOf(n))
          return (
            -1 === ue.indexOf(n) ||
            Boolean(e.nodeValue.match(he) || e.nodeValue.match(pe))
          );
        for (
          var i = t.filter(function (e) {
              return e instanceof RegExp;
            }),
            r = 0,
            o = i.length;
          r < o;
          r++
        )
          if (n.match(i[r])) return !0;
        return !1;
      }
      function h(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (
          var i = new window.DOMParser(),
            r = i.parseFromString(e, "text/html"),
            o = Object.keys(t),
            s = [].slice.call(r.body.querySelectorAll("*")),
            a = 0,
            l = s.length;
          a < l;
          a++
        ) {
          (function (e, n) {
            var i = s[e],
              r = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
              return i.parentNode.removeChild(i), "continue";
            var a = [].slice.call(i.attributes),
              l = [].concat(t["*"] || [], t[r] || []);
            a.forEach(function (e) {
              d(e, l) || i.removeAttribute(e.nodeName);
            });
          })(a);
        }
        return r.body.innerHTML;
      }
      (t = t && t.hasOwnProperty("default") ? t.default : t),
        (n = n && n.hasOwnProperty("default") ? n.default : n);
      var p = "transitionend",
        m = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            do {
              e += ~~(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          },
          getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
              var n = e.getAttribute("href");
              t = n && "#" !== n ? n.trim() : "";
            }
            try {
              return document.querySelector(t) ? t : null;
            } catch (e) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
              i = t(e).css("transition-delay"),
              r = parseFloat(n),
              o = parseFloat(i);
            return r || o
              ? ((n = n.split(",")[0]),
                (i = i.split(",")[0]),
                1e3 * (parseFloat(n) + parseFloat(i)))
              : 0;
          },
          reflow: function (e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(p);
          },
          supportsTransitionEnd: function () {
            return Boolean(p);
          },
          isElement: function (e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function (e, t, n) {
            for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                var r = n[i],
                  o = t[i],
                  s = o && m.isElement(o) ? "element" : c(o);
                if (!new RegExp(r).test(s))
                  throw new Error(
                    e.toUpperCase() +
                      ': Option "' +
                      i +
                      '" provided type "' +
                      s +
                      '" but expected type "' +
                      r +
                      '".'
                  );
              }
          },
          findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              var t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? m.findShadowRoot(e.parentNode)
              : null;
          },
          jQueryDetection: function () {
            if (void 0 === t)
              throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
              );
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (
              (e[0] < 2 && e[1] < 9) ||
              (1 === e[0] && 9 === e[1] && e[2] < 1) ||
              e[0] >= 4
            )
              throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
              );
          },
        };
      m.jQueryDetection(),
        (function () {
          (t.fn.emulateTransitionEnd = f),
            (t.event.special[m.TRANSITION_END] = u());
        })();
      var g = "alert",
        v = t.fn[g],
        y = { DISMISS: '[data-dismiss="alert"]' },
        _ = {
          CLOSE: "close.bs.alert",
          CLOSED: "closed.bs.alert",
          CLICK_DATA_API: "click.bs.alert.data-api",
        },
        b = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        E = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e)),
                this._triggerCloseEvent(t).isDefaultPrevented() ||
                  this._removeElement(t);
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.alert"), (this._element = null);
            }),
            (n._getRootElement = function (e) {
              var n = m.getSelectorFromElement(e),
                i = !1;
              return (
                n && (i = document.querySelector(n)),
                i || (i = t(e).closest("." + b.ALERT)[0]),
                i
              );
            }),
            (n._triggerCloseEvent = function (e) {
              var n = t.Event(_.CLOSE);
              return t(e).trigger(n), n;
            }),
            (n._removeElement = function (e) {
              var n = this;
              if ((t(e).removeClass(b.SHOW), !t(e).hasClass(b.FADE)))
                return void this._destroyElement(e);
              var i = m.getTransitionDurationFromElement(e);
              t(e)
                .one(m.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(i);
            }),
            (n._destroyElement = function (e) {
              t(e).detach().trigger(_.CLOSED).remove();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.alert");
                r || ((r = new e(this)), i.data("bs.alert", r)),
                  "close" === n && r[n](this);
              });
            }),
            (e._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
            ]),
            e
          );
        })();
      t(document).on(_.CLICK_DATA_API, y.DISMISS, E._handleDismiss(new E())),
        (t.fn[g] = E._jQueryInterface),
        (t.fn[g].Constructor = E),
        (t.fn[g].noConflict = function () {
          return (t.fn[g] = v), E._jQueryInterface;
        });
      var T = t.fn.button,
        w = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        C = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLES: '[data-toggle="buttons"]',
          DATA_TOGGLE: '[data-toggle="button"]',
          DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
          INPUT: 'input:not([type="hidden"])',
          ACTIVE: ".active",
          BUTTON: ".btn",
        },
        S = {
          CLICK_DATA_API: "click.bs.button.data-api",
          FOCUS_BLUR_DATA_API:
            "focus.bs.button.data-api blur.bs.button.data-api",
          LOAD_DATA_API: "load.bs.button.data-api",
        },
        A = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.toggle = function () {
              var e = !0,
                n = !0,
                i = t(this._element).closest(C.DATA_TOGGLES)[0];
              if (i) {
                var r = this._element.querySelector(C.INPUT);
                if (r) {
                  if ("radio" === r.type)
                    if (r.checked && this._element.classList.contains(w.ACTIVE))
                      e = !1;
                    else {
                      var o = i.querySelector(C.ACTIVE);
                      o && t(o).removeClass(w.ACTIVE);
                    }
                  else
                    "checkbox" === r.type
                      ? "LABEL" === this._element.tagName &&
                        r.checked ===
                          this._element.classList.contains(w.ACTIVE) &&
                        (e = !1)
                      : (e = !1);
                  e &&
                    ((r.checked = !this._element.classList.contains(w.ACTIVE)),
                    t(r).trigger("change")),
                    r.focus(),
                    (n = !1);
                }
              }
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (n &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(w.ACTIVE)
                  ),
                e && t(this._element).toggleClass(w.ACTIVE));
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.button"), (this._element = null);
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.button");
                i || ((i = new e(this)), t(this).data("bs.button", i)),
                  "toggle" === n && i[n]();
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
            ]),
            e
          );
        })();
      t(document)
        .on(S.CLICK_DATA_API, C.DATA_TOGGLE_CARROT, function (e) {
          var n = e.target;
          if (
            (t(n).hasClass(w.BUTTON) || (n = t(n).closest(C.BUTTON)[0]),
            !n ||
              n.hasAttribute("disabled") ||
              n.classList.contains("disabled"))
          )
            e.preventDefault();
          else {
            var i = n.querySelector(C.INPUT);
            if (
              i &&
              (i.hasAttribute("disabled") || i.classList.contains("disabled"))
            )
              return void e.preventDefault();
            A._jQueryInterface.call(t(n), "toggle");
          }
        })
        .on(S.FOCUS_BLUR_DATA_API, C.DATA_TOGGLE_CARROT, function (e) {
          var n = t(e.target).closest(C.BUTTON)[0];
          t(n).toggleClass(w.FOCUS, /^focus(in)?$/.test(e.type));
        }),
        t(window).on(S.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(
                document.querySelectorAll(C.DATA_TOGGLES_BUTTONS)
              ),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var i = e[t],
              r = i.querySelector(C.INPUT);
            r.checked || r.hasAttribute("checked")
              ? i.classList.add(w.ACTIVE)
              : i.classList.remove(w.ACTIVE);
          }
          e = [].slice.call(document.querySelectorAll(C.DATA_TOGGLE));
          for (var o = 0, s = e.length; o < s; o++) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed")
              ? a.classList.add(w.ACTIVE)
              : a.classList.remove(w.ACTIVE);
          }
        }),
        (t.fn.button = A._jQueryInterface),
        (t.fn.button.Constructor = A),
        (t.fn.button.noConflict = function () {
          return (t.fn.button = T), A._jQueryInterface;
        });
      var D = "carousel",
        x = ".bs.carousel",
        O = t.fn[D],
        I = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0,
        },
        N = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        L = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        k = {
          SLIDE: "slide.bs.carousel",
          SLID: "slid.bs.carousel",
          KEYDOWN: "keydown.bs.carousel",
          MOUSEENTER: "mouseenter.bs.carousel",
          MOUSELEAVE: "mouseleave.bs.carousel",
          TOUCHSTART: "touchstart.bs.carousel",
          TOUCHMOVE: "touchmove.bs.carousel",
          TOUCHEND: "touchend.bs.carousel",
          POINTERDOWN: "pointerdown.bs.carousel",
          POINTERUP: "pointerup.bs.carousel",
          DRAG_START: "dragstart.bs.carousel",
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api",
        },
        P = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item",
          POINTER_EVENT: "pointer-event",
        },
        H = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          ITEM_IMG: ".carousel-item img",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]',
        },
        R = { TOUCH: "touch", PEN: "pen" },
        j = (function () {
          function e(e, t) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(t)),
              (this._element = e),
              (this._indicatorsElement = this._element.querySelector(
                H.INDICATORS
              )),
              (this._touchSupported =
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(
                window.PointerEvent || window.MSPointerEvent
              )),
              this._addEventListeners();
          }
          var n = e.prototype;
          return (
            (n.next = function () {
              this._isSliding || this._slide(L.NEXT);
            }),
            (n.nextWhenVisible = function () {
              !document.hidden &&
                t(this._element).is(":visible") &&
                "hidden" !== t(this._element).css("visibility") &&
                this.next();
            }),
            (n.prev = function () {
              this._isSliding || this._slide(L.PREV);
            }),
            (n.pause = function (e) {
              e || (this._isPaused = !0),
                this._element.querySelector(H.NEXT_PREV) &&
                  (m.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (n.cycle = function (e) {
              e || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (n.to = function (e) {
              var n = this;
              this._activeElement = this._element.querySelector(H.ACTIVE_ITEM);
              var i = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0)) {
                if (this._isSliding)
                  return void t(this._element).one(k.SLID, function () {
                    return n.to(e);
                  });
                if (i === e) return this.pause(), void this.cycle();
                var r = e > i ? L.NEXT : L.PREV;
                this._slide(r, this._items[e]);
              }
            }),
            (n.dispose = function () {
              t(this._element).off(x),
                t.removeData(this._element, "bs.carousel"),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (n._getConfig = function (e) {
              return (e = a({}, I, {}, e)), m.typeCheckConfig(D, e, N), e;
            }),
            (n._handleSwipe = function () {
              var e = Math.abs(this.touchDeltaX);
              if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                (this.touchDeltaX = 0),
                  t > 0 && this.prev(),
                  t < 0 && this.next();
              }
            }),
            (n._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                t(this._element).on(k.KEYDOWN, function (t) {
                  return e._keydown(t);
                }),
                "hover" === this._config.pause &&
                  t(this._element)
                    .on(k.MOUSEENTER, function (t) {
                      return e.pause(t);
                    })
                    .on(k.MOUSELEAVE, function (t) {
                      return e.cycle(t);
                    }),
                this._config.touch && this._addTouchEventListeners();
            }),
            (n._addTouchEventListeners = function () {
              var e = this;
              if (this._touchSupported) {
                var n = function (t) {
                    e._pointerEvent &&
                    R[t.originalEvent.pointerType.toUpperCase()]
                      ? (e.touchStartX = t.originalEvent.clientX)
                      : e._pointerEvent ||
                        (e.touchStartX = t.originalEvent.touches[0].clientX);
                  },
                  i = function (t) {
                    t.originalEvent.touches &&
                    t.originalEvent.touches.length > 1
                      ? (e.touchDeltaX = 0)
                      : (e.touchDeltaX =
                          t.originalEvent.touches[0].clientX - e.touchStartX);
                  },
                  r = function (t) {
                    e._pointerEvent &&
                      R[t.originalEvent.pointerType.toUpperCase()] &&
                      (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                      e._handleSwipe(),
                      "hover" === e._config.pause &&
                        (e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                        (e.touchTimeout = setTimeout(function (t) {
                          return e.cycle(t);
                        }, 500 + e._config.interval)));
                  };
                t(this._element.querySelectorAll(H.ITEM_IMG)).on(
                  k.DRAG_START,
                  function (e) {
                    return e.preventDefault();
                  }
                ),
                  this._pointerEvent
                    ? (t(this._element).on(k.POINTERDOWN, function (e) {
                        return n(e);
                      }),
                      t(this._element).on(k.POINTERUP, function (e) {
                        return r(e);
                      }),
                      this._element.classList.add(P.POINTER_EVENT))
                    : (t(this._element).on(k.TOUCHSTART, function (e) {
                        return n(e);
                      }),
                      t(this._element).on(k.TOUCHMOVE, function (e) {
                        return i(e);
                      }),
                      t(this._element).on(k.TOUCHEND, function (e) {
                        return r(e);
                      }));
              }
            }),
            (n._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                  case 37:
                    e.preventDefault(), this.prev();
                    break;
                  case 39:
                    e.preventDefault(), this.next();
                }
            }),
            (n._getItemIndex = function (e) {
              return (
                (this._items =
                  e && e.parentNode
                    ? [].slice.call(e.parentNode.querySelectorAll(H.ITEM))
                    : []),
                this._items.indexOf(e)
              );
            }),
            (n._getItemByDirection = function (e, t) {
              var n = e === L.NEXT,
                i = e === L.PREV,
                r = this._getItemIndex(t),
                o = this._items.length - 1;
              if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                return t;
              var s = e === L.PREV ? -1 : 1,
                a = (r + s) % this._items.length;
              return -1 === a
                ? this._items[this._items.length - 1]
                : this._items[a];
            }),
            (n._triggerSlideEvent = function (e, n) {
              var i = this._getItemIndex(e),
                r = this._getItemIndex(
                  this._element.querySelector(H.ACTIVE_ITEM)
                ),
                o = t.Event(k.SLIDE, {
                  relatedTarget: e,
                  direction: n,
                  from: r,
                  to: i,
                });
              return t(this._element).trigger(o), o;
            }),
            (n._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                var n = [].slice.call(
                  this._indicatorsElement.querySelectorAll(H.ACTIVE)
                );
                t(n).removeClass(P.ACTIVE);
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && t(i).addClass(P.ACTIVE);
              }
            }),
            (n._slide = function (e, n) {
              var i,
                r,
                o,
                s = this,
                a = this._element.querySelector(H.ACTIVE_ITEM),
                l = this._getItemIndex(a),
                c = n || (a && this._getItemByDirection(e, a)),
                u = this._getItemIndex(c),
                f = Boolean(this._interval);
              if (
                (e === L.NEXT
                  ? ((i = P.LEFT), (r = P.NEXT), (o = L.LEFT))
                  : ((i = P.RIGHT), (r = P.PREV), (o = L.RIGHT)),
                c && t(c).hasClass(P.ACTIVE))
              )
                return void (this._isSliding = !1);
              if (
                !this._triggerSlideEvent(c, o).isDefaultPrevented() &&
                a &&
                c
              ) {
                (this._isSliding = !0),
                  f && this.pause(),
                  this._setActiveIndicatorElement(c);
                var d = t.Event(k.SLID, {
                  relatedTarget: c,
                  direction: o,
                  from: l,
                  to: u,
                });
                if (t(this._element).hasClass(P.SLIDE)) {
                  t(c).addClass(r),
                    m.reflow(c),
                    t(a).addClass(i),
                    t(c).addClass(i);
                  var h = parseInt(c.getAttribute("data-interval"), 10);
                  h
                    ? ((this._config.defaultInterval =
                        this._config.defaultInterval || this._config.interval),
                      (this._config.interval = h))
                    : (this._config.interval =
                        this._config.defaultInterval || this._config.interval);
                  var p = m.getTransitionDurationFromElement(a);
                  t(a)
                    .one(m.TRANSITION_END, function () {
                      t(c)
                        .removeClass(i + " " + r)
                        .addClass(P.ACTIVE),
                        t(a).removeClass(P.ACTIVE + " " + r + " " + i),
                        (s._isSliding = !1),
                        setTimeout(function () {
                          return t(s._element).trigger(d);
                        }, 0);
                    })
                    .emulateTransitionEnd(p);
                } else
                  t(a).removeClass(P.ACTIVE),
                    t(c).addClass(P.ACTIVE),
                    (this._isSliding = !1),
                    t(this._element).trigger(d);
                f && this.cycle();
              }
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.carousel"),
                  r = a({}, I, {}, t(this).data());
                "object" == typeof n && (r = a({}, r, {}, n));
                var o = "string" == typeof n ? n : r.slide;
                if (
                  (i || ((i = new e(this, r)), t(this).data("bs.carousel", i)),
                  "number" == typeof n)
                )
                  i.to(n);
                else if ("string" == typeof o) {
                  if (void 0 === i[o])
                    throw new TypeError('No method named "' + o + '"');
                  i[o]();
                } else r.interval && r.ride && (i.pause(), i.cycle());
              });
            }),
            (e._dataApiClickHandler = function (n) {
              var i = m.getSelectorFromElement(this);
              if (i) {
                var r = t(i)[0];
                if (r && t(r).hasClass(P.CAROUSEL)) {
                  var o = a({}, t(r).data(), {}, t(this).data()),
                    s = this.getAttribute("data-slide-to");
                  s && (o.interval = !1),
                    e._jQueryInterface.call(t(r), o),
                    s && t(r).data("bs.carousel").to(s),
                    n.preventDefault();
                }
              }
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return I;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(k.CLICK_DATA_API, H.DATA_SLIDE, j._dataApiClickHandler),
        t(window).on(k.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(document.querySelectorAll(H.DATA_RIDE)),
              n = 0,
              i = e.length;
            n < i;
            n++
          ) {
            var r = t(e[n]);
            j._jQueryInterface.call(r, r.data());
          }
        }),
        (t.fn[D] = j._jQueryInterface),
        (t.fn[D].Constructor = j),
        (t.fn[D].noConflict = function () {
          return (t.fn[D] = O), j._jQueryInterface;
        });
      var M = "collapse",
        W = t.fn[M],
        F = { toggle: !0, parent: "" },
        q = { toggle: "boolean", parent: "(string|element)" },
        B = {
          SHOW: "show.bs.collapse",
          SHOWN: "shown.bs.collapse",
          HIDE: "hide.bs.collapse",
          HIDDEN: "hidden.bs.collapse",
          CLICK_DATA_API: "click.bs.collapse.data-api",
        },
        U = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed",
        },
        V = { WIDTH: "width", HEIGHT: "height" },
        G = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]',
        },
        $ = (function () {
          function e(e, t) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(t)),
              (this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]'
                )
              ));
            for (
              var n = [].slice.call(document.querySelectorAll(G.DATA_TOGGLE)),
                i = 0,
                r = n.length;
              i < r;
              i++
            ) {
              var o = n[i],
                s = m.getSelectorFromElement(o),
                a = [].slice
                  .call(document.querySelectorAll(s))
                  .filter(function (t) {
                    return t === e;
                  });
              null !== s &&
                a.length > 0 &&
                ((this._selector = s), this._triggerArray.push(o));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var n = e.prototype;
          return (
            (n.toggle = function () {
              t(this._element).hasClass(U.SHOW) ? this.hide() : this.show();
            }),
            (n.show = function () {
              var n = this;
              if (
                !this._isTransitioning &&
                !t(this._element).hasClass(U.SHOW)
              ) {
                var i, r;
                if (
                  (this._parent &&
                    ((i = [].slice
                      .call(this._parent.querySelectorAll(G.ACTIVES))
                      .filter(function (e) {
                        return "string" == typeof n._config.parent
                          ? e.getAttribute("data-parent") === n._config.parent
                          : e.classList.contains(U.COLLAPSE);
                      })),
                    0 === i.length && (i = null)),
                  !(
                    i &&
                    (r = t(i).not(this._selector).data("bs.collapse")) &&
                    r._isTransitioning
                  ))
                ) {
                  var o = t.Event(B.SHOW);
                  if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                    i &&
                      (e._jQueryInterface.call(
                        t(i).not(this._selector),
                        "hide"
                      ),
                      r || t(i).data("bs.collapse", null));
                    var s = this._getDimension();
                    t(this._element)
                      .removeClass(U.COLLAPSE)
                      .addClass(U.COLLAPSING),
                      (this._element.style[s] = 0),
                      this._triggerArray.length &&
                        t(this._triggerArray)
                          .removeClass(U.COLLAPSED)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var a = function () {
                        t(n._element)
                          .removeClass(U.COLLAPSING)
                          .addClass(U.COLLAPSE)
                          .addClass(U.SHOW),
                          (n._element.style[s] = ""),
                          n.setTransitioning(!1),
                          t(n._element).trigger(B.SHOWN);
                      },
                      l = s[0].toUpperCase() + s.slice(1),
                      c = "scroll" + l,
                      u = m.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(m.TRANSITION_END, a)
                      .emulateTransitionEnd(u),
                      (this._element.style[s] = this._element[c] + "px");
                  }
                }
              }
            }),
            (n.hide = function () {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass(U.SHOW)) {
                var n = t.Event(B.HIDE);
                if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var i = this._getDimension();
                  (this._element.style[i] =
                    this._element.getBoundingClientRect()[i] + "px"),
                    m.reflow(this._element),
                    t(this._element)
                      .addClass(U.COLLAPSING)
                      .removeClass(U.COLLAPSE)
                      .removeClass(U.SHOW);
                  var r = this._triggerArray.length;
                  if (r > 0)
                    for (var o = 0; o < r; o++) {
                      var s = this._triggerArray[o],
                        a = m.getSelectorFromElement(s);
                      if (null !== a) {
                        var l = t([].slice.call(document.querySelectorAll(a)));
                        l.hasClass(U.SHOW) ||
                          t(s).addClass(U.COLLAPSED).attr("aria-expanded", !1);
                      }
                    }
                  this.setTransitioning(!0);
                  var c = function () {
                    e.setTransitioning(!1),
                      t(e._element)
                        .removeClass(U.COLLAPSING)
                        .addClass(U.COLLAPSE)
                        .trigger(B.HIDDEN);
                  };
                  this._element.style[i] = "";
                  var u = m.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(m.TRANSITION_END, c)
                    .emulateTransitionEnd(u);
                }
              }
            }),
            (n.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.collapse"),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (n._getConfig = function (e) {
              return (
                (e = a({}, F, {}, e)),
                (e.toggle = Boolean(e.toggle)),
                m.typeCheckConfig(M, e, q),
                e
              );
            }),
            (n._getDimension = function () {
              return t(this._element).hasClass(V.WIDTH) ? V.WIDTH : V.HEIGHT;
            }),
            (n._getParent = function () {
              var n,
                i = this;
              m.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  void 0 !== this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = document.querySelector(this._config.parent));
              var r =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]',
                o = [].slice.call(n.querySelectorAll(r));
              return (
                t(o).each(function (t, n) {
                  i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
                }),
                n
              );
            }),
            (n._addAriaAndCollapsedClass = function (e, n) {
              var i = t(e).hasClass(U.SHOW);
              n.length &&
                t(n).toggleClass(U.COLLAPSED, !i).attr("aria-expanded", i);
            }),
            (e._getTargetFromElement = function (e) {
              var t = m.getSelectorFromElement(e);
              return t ? document.querySelector(t) : null;
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.collapse"),
                  o = a(
                    {},
                    F,
                    {},
                    i.data(),
                    {},
                    "object" == typeof n && n ? n : {}
                  );
                if (
                  (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1),
                  r || ((r = new e(this, o)), i.data("bs.collapse", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return F;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(B.CLICK_DATA_API, G.DATA_TOGGLE, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
          i = m.getSelectorFromElement(this),
          r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function () {
          var e = t(this),
            i = e.data("bs.collapse"),
            r = i ? "toggle" : n.data();
          $._jQueryInterface.call(e, r);
        });
      }),
        (t.fn[M] = $._jQueryInterface),
        (t.fn[M].Constructor = $),
        (t.fn[M].noConflict = function () {
          return (t.fn[M] = W), $._jQueryInterface;
        });
      var K = "dropdown",
        z = t.fn[K],
        Q = new RegExp("38|40|27"),
        X = {
          HIDE: "hide.bs.dropdown",
          HIDDEN: "hidden.bs.dropdown",
          SHOW: "show.bs.dropdown",
          SHOWN: "shown.bs.dropdown",
          CLICK: "click.bs.dropdown",
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
          KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
        },
        Y = {
          DISABLED: "disabled",
          SHOW: "show",
          DROPUP: "dropup",
          DROPRIGHT: "dropright",
          DROPLEFT: "dropleft",
          MENURIGHT: "dropdown-menu-right",
          MENULEFT: "dropdown-menu-left",
          POSITION_STATIC: "position-static",
        },
        J = {
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          MENU: ".dropdown-menu",
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS:
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        },
        Z = {
          TOP: "top-start",
          TOPEND: "top-end",
          BOTTOM: "bottom-start",
          BOTTOMEND: "bottom-end",
          RIGHT: "right-start",
          RIGHTEND: "right-end",
          LEFT: "left-start",
          LEFTEND: "left-end",
        },
        ee = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
        },
        te = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
          popperConfig: "(null|object)",
        },
        ne = (function () {
          function e(e, t) {
            (this._element = e),
              (this._popper = null),
              (this._config = this._getConfig(t)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var i = e.prototype;
          return (
            (i.toggle = function () {
              if (
                !this._element.disabled &&
                !t(this._element).hasClass(Y.DISABLED)
              ) {
                var n = t(this._menu).hasClass(Y.SHOW);
                e._clearMenus(), n || this.show(!0);
              }
            }),
            (i.show = function (i) {
              if (
                (void 0 === i && (i = !1),
                !(
                  this._element.disabled ||
                  t(this._element).hasClass(Y.DISABLED) ||
                  t(this._menu).hasClass(Y.SHOW)
                ))
              ) {
                var r = { relatedTarget: this._element },
                  o = t.Event(X.SHOW, r),
                  s = e._getParentFromElement(this._element);
                if ((t(s).trigger(o), !o.isDefaultPrevented())) {
                  if (!this._inNavbar && i) {
                    if (void 0 === n)
                      throw new TypeError(
                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                      );
                    var a = this._element;
                    "parent" === this._config.reference
                      ? (a = s)
                      : m.isElement(this._config.reference) &&
                        ((a = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (a = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        t(s).addClass(Y.POSITION_STATIC),
                      (this._popper = new n(
                        a,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === t(s).closest(J.NAVBAR_NAV).length &&
                    t(document.body).children().on("mouseover", null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    t(this._menu).toggleClass(Y.SHOW),
                    t(s).toggleClass(Y.SHOW).trigger(t.Event(X.SHOWN, r));
                }
              }
            }),
            (i.hide = function () {
              if (
                !this._element.disabled &&
                !t(this._element).hasClass(Y.DISABLED) &&
                t(this._menu).hasClass(Y.SHOW)
              ) {
                var n = { relatedTarget: this._element },
                  i = t.Event(X.HIDE, n),
                  r = e._getParentFromElement(this._element);
                t(r).trigger(i),
                  i.isDefaultPrevented() ||
                    (this._popper && this._popper.destroy(),
                    t(this._menu).toggleClass(Y.SHOW),
                    t(r).toggleClass(Y.SHOW).trigger(t.Event(X.HIDDEN, n)));
              }
            }),
            (i.dispose = function () {
              t.removeData(this._element, "bs.dropdown"),
                t(this._element).off(".bs.dropdown"),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (i.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (i._addEventListeners = function () {
              var e = this;
              t(this._element).on(X.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (i._getConfig = function (e) {
              return (
                (e = a(
                  {},
                  this.constructor.Default,
                  {},
                  t(this._element).data(),
                  {},
                  e
                )),
                m.typeCheckConfig(K, e, this.constructor.DefaultType),
                e
              );
            }),
            (i._getMenuElement = function () {
              if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(J.MENU));
              }
              return this._menu;
            }),
            (i._getPlacement = function () {
              var e = t(this._element.parentNode),
                n = Z.BOTTOM;
              return (
                e.hasClass(Y.DROPUP)
                  ? ((n = Z.TOP),
                    t(this._menu).hasClass(Y.MENURIGHT) && (n = Z.TOPEND))
                  : e.hasClass(Y.DROPRIGHT)
                  ? (n = Z.RIGHT)
                  : e.hasClass(Y.DROPLEFT)
                  ? (n = Z.LEFT)
                  : t(this._menu).hasClass(Y.MENURIGHT) && (n = Z.BOTTOMEND),
                n
              );
            }),
            (i._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (i._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this._config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = a(
                          {},
                          t.offsets,
                          {},
                          e._config.offset(t.offsets, e._element) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this._config.offset),
                t
              );
            }),
            (i._getPopperConfig = function () {
              var e = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: this._getOffset(),
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary },
                },
              };
              return (
                "static" === this._config.display &&
                  (e.modifiers.applyStyle = { enabled: !1 }),
                a({}, e, {}, this._config.popperConfig)
              );
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.dropdown"),
                  r = "object" == typeof n ? n : null;
                if (
                  (i || ((i = new e(this, r)), t(this).data("bs.dropdown", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            (e._clearMenus = function (n) {
              if (
                !n ||
                (3 !== n.which && ("keyup" !== n.type || 9 === n.which))
              )
                for (
                  var i = [].slice.call(
                      document.querySelectorAll(J.DATA_TOGGLE)
                    ),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                ) {
                  var s = e._getParentFromElement(i[r]),
                    a = t(i[r]).data("bs.dropdown"),
                    l = { relatedTarget: i[r] };
                  if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                    var c = a._menu;
                    if (
                      t(s).hasClass(Y.SHOW) &&
                      !(
                        n &&
                        (("click" === n.type &&
                          /input|textarea/i.test(n.target.tagName)) ||
                          ("keyup" === n.type && 9 === n.which)) &&
                        t.contains(s, n.target)
                      )
                    ) {
                      var u = t.Event(X.HIDE, l);
                      t(s).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t(document.body)
                              .children()
                              .off("mouseover", null, t.noop),
                          i[r].setAttribute("aria-expanded", "false"),
                          a._popper && a._popper.destroy(),
                          t(c).removeClass(Y.SHOW),
                          t(s)
                            .removeClass(Y.SHOW)
                            .trigger(t.Event(X.HIDDEN, l)));
                    }
                  }
                }
            }),
            (e._getParentFromElement = function (e) {
              var t,
                n = m.getSelectorFromElement(e);
              return n && (t = document.querySelector(n)), t || e.parentNode;
            }),
            (e._dataApiKeydownHandler = function (n) {
              if (
                (/input|textarea/i.test(n.target.tagName)
                  ? !(
                      32 === n.which ||
                      (27 !== n.which &&
                        ((40 !== n.which && 38 !== n.which) ||
                          t(n.target).closest(J.MENU).length))
                    )
                  : Q.test(n.which)) &&
                (n.preventDefault(),
                n.stopPropagation(),
                !this.disabled && !t(this).hasClass(Y.DISABLED))
              ) {
                var i = e._getParentFromElement(this),
                  r = t(i).hasClass(Y.SHOW);
                if (r || 27 !== n.which) {
                  if (!r || (r && (27 === n.which || 32 === n.which))) {
                    if (27 === n.which) {
                      var o = i.querySelector(J.DATA_TOGGLE);
                      t(o).trigger("focus");
                    }
                    return void t(this).trigger("click");
                  }
                  var s = [].slice
                    .call(i.querySelectorAll(J.VISIBLE_ITEMS))
                    .filter(function (e) {
                      return t(e).is(":visible");
                    });
                  if (0 !== s.length) {
                    var a = s.indexOf(n.target);
                    38 === n.which && a > 0 && a--,
                      40 === n.which && a < s.length - 1 && a++,
                      a < 0 && (a = 0),
                      s[a].focus();
                  }
                }
              }
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return ee;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return te;
                },
              },
            ]),
            e
          );
        })();
      t(document)
        .on(X.KEYDOWN_DATA_API, J.DATA_TOGGLE, ne._dataApiKeydownHandler)
        .on(X.KEYDOWN_DATA_API, J.MENU, ne._dataApiKeydownHandler)
        .on(X.CLICK_DATA_API + " " + X.KEYUP_DATA_API, ne._clearMenus)
        .on(X.CLICK_DATA_API, J.DATA_TOGGLE, function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            ne._jQueryInterface.call(t(this), "toggle");
        })
        .on(X.CLICK_DATA_API, J.FORM_CHILD, function (e) {
          e.stopPropagation();
        }),
        (t.fn[K] = ne._jQueryInterface),
        (t.fn[K].Constructor = ne),
        (t.fn[K].noConflict = function () {
          return (t.fn[K] = z), ne._jQueryInterface;
        });
      var ie = t.fn.modal,
        re = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        oe = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        se = {
          HIDE: "hide.bs.modal",
          HIDE_PREVENTED: "hidePrevented.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api",
        },
        ae = {
          SCROLLABLE: "modal-dialog-scrollable",
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show",
          STATIC: "modal-static",
        },
        le = {
          DIALOG: ".modal-dialog",
          MODAL_BODY: ".modal-body",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
        },
        ce = (function () {
          function e(e, t) {
            (this._config = this._getConfig(t)),
              (this._element = e),
              (this._dialog = e.querySelector(le.DIALOG)),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollbarWidth = 0);
          }
          var n = e.prototype;
          return (
            (n.toggle = function (e) {
              return this._isShown ? this.hide() : this.show(e);
            }),
            (n.show = function (e) {
              var n = this;
              if (!this._isShown && !this._isTransitioning) {
                t(this._element).hasClass(ae.FADE) &&
                  (this._isTransitioning = !0);
                var i = t.Event(se.SHOW, { relatedTarget: e });
                t(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(
                      se.CLICK_DISMISS,
                      le.DATA_DISMISS,
                      function (e) {
                        return n.hide(e);
                      }
                    ),
                    t(this._dialog).on(se.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(se.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (n.hide = function (e) {
              var n = this;
              if (
                (e && e.preventDefault(),
                this._isShown && !this._isTransitioning)
              ) {
                var i = t.Event(se.HIDE);
                if (
                  (t(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var r = t(this._element).hasClass(ae.FADE);
                  if (
                    (r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(se.FOCUSIN),
                    t(this._element).removeClass(ae.SHOW),
                    t(this._element).off(se.CLICK_DISMISS),
                    t(this._dialog).off(se.MOUSEDOWN_DISMISS),
                    r)
                  ) {
                    var o = m.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(m.TRANSITION_END, function (e) {
                        return n._hideModal(e);
                      })
                      .emulateTransitionEnd(o);
                  } else this._hideModal();
                }
              }
            }),
            (n.dispose = function () {
              [window, this._element, this._dialog].forEach(function (e) {
                return t(e).off(".bs.modal");
              }),
                t(document).off(se.FOCUSIN),
                t.removeData(this._element, "bs.modal"),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._isTransitioning = null),
                (this._scrollbarWidth = null);
            }),
            (n.handleUpdate = function () {
              this._adjustDialog();
            }),
            (n._getConfig = function (e) {
              return (
                (e = a({}, re, {}, e)), m.typeCheckConfig("modal", e, oe), e
              );
            }),
            (n._triggerBackdropTransition = function () {
              var e = this;
              if ("static" === this._config.backdrop) {
                var n = t.Event(se.HIDE_PREVENTED);
                if ((t(this._element).trigger(n), n.defaultPrevented)) return;
                this._element.classList.add(ae.STATIC);
                var i = m.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(m.TRANSITION_END, function () {
                    e._element.classList.remove(ae.STATIC);
                  })
                  .emulateTransitionEnd(i),
                  this._element.focus();
              } else this.hide();
            }),
            (n._showElement = function (e) {
              var n = this,
                i = t(this._element).hasClass(ae.FADE),
                r = this._dialog
                  ? this._dialog.querySelector(le.MODAL_BODY)
                  : null;
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                t(this._dialog).hasClass(ae.SCROLLABLE) && r
                  ? (r.scrollTop = 0)
                  : (this._element.scrollTop = 0),
                i && m.reflow(this._element),
                t(this._element).addClass(ae.SHOW),
                this._config.focus && this._enforceFocus();
              var o = t.Event(se.SHOWN, { relatedTarget: e }),
                s = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(o);
                };
              if (i) {
                var a = m.getTransitionDurationFromElement(this._dialog);
                t(this._dialog)
                  .one(m.TRANSITION_END, s)
                  .emulateTransitionEnd(a);
              } else s();
            }),
            (n._enforceFocus = function () {
              var e = this;
              t(document)
                .off(se.FOCUSIN)
                .on(se.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (n._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(se.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && e._triggerBackdropTransition();
                  })
                : this._isShown || t(this._element).off(se.KEYDOWN_DISMISS);
            }),
            (n._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(se.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(se.RESIZE);
            }),
            (n._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(ae.OPEN),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(se.HIDDEN);
                });
            }),
            (n._removeBackdrop = function () {
              this._backdrop &&
                (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (n._showBackdrop = function (e) {
              var n = this,
                i = t(this._element).hasClass(ae.FADE) ? ae.FADE : "";
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = ae.BACKDROP),
                  i && this._backdrop.classList.add(i),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(se.CLICK_DISMISS, function (e) {
                    if (n._ignoreBackdropClick)
                      return void (n._ignoreBackdropClick = !1);
                    e.target === e.currentTarget &&
                      n._triggerBackdropTransition();
                  }),
                  i && m.reflow(this._backdrop),
                  t(this._backdrop).addClass(ae.SHOW),
                  !e)
                )
                  return;
                if (!i) return void e();
                var r = m.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop)
                  .one(m.TRANSITION_END, e)
                  .emulateTransitionEnd(r);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(ae.SHOW);
                var o = function () {
                  n._removeBackdrop(), e && e();
                };
                if (t(this._element).hasClass(ae.FADE)) {
                  var s = m.getTransitionDurationFromElement(this._backdrop);
                  t(this._backdrop)
                    .one(m.TRANSITION_END, o)
                    .emulateTransitionEnd(s);
                } else o();
              } else e && e();
            }),
            (n._adjustDialog = function () {
              var e =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                e &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !e &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (n._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (n._checkScrollbar = function () {
              var e = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (n._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                var n = [].slice.call(
                    document.querySelectorAll(le.FIXED_CONTENT)
                  ),
                  i = [].slice.call(
                    document.querySelectorAll(le.STICKY_CONTENT)
                  );
                t(n).each(function (n, i) {
                  var r = i.style.paddingRight,
                    o = t(i).css("padding-right");
                  t(i)
                    .data("padding-right", r)
                    .css(
                      "padding-right",
                      parseFloat(o) + e._scrollbarWidth + "px"
                    );
                }),
                  t(i).each(function (n, i) {
                    var r = i.style.marginRight,
                      o = t(i).css("margin-right");
                    t(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) - e._scrollbarWidth + "px"
                      );
                  });
                var r = document.body.style.paddingRight,
                  o = t(document.body).css("padding-right");
                t(document.body)
                  .data("padding-right", r)
                  .css(
                    "padding-right",
                    parseFloat(o) + this._scrollbarWidth + "px"
                  );
              }
              t(document.body).addClass(ae.OPEN);
            }),
            (n._resetScrollbar = function () {
              var e = [].slice.call(
                document.querySelectorAll(le.FIXED_CONTENT)
              );
              t(e).each(function (e, n) {
                var i = t(n).data("padding-right");
                t(n).removeData("padding-right"),
                  (n.style.paddingRight = i || "");
              });
              var n = [].slice.call(
                document.querySelectorAll("" + le.STICKY_CONTENT)
              );
              t(n).each(function (e, n) {
                var i = t(n).data("margin-right");
                void 0 !== i &&
                  t(n).css("margin-right", i).removeData("margin-right");
              });
              var i = t(document.body).data("padding-right");
              t(document.body).removeData("padding-right"),
                (document.body.style.paddingRight = i || "");
            }),
            (n._getScrollbarWidth = function () {
              var e = document.createElement("div");
              (e.className = ae.SCROLLBAR_MEASURER),
                document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            }),
            (e._jQueryInterface = function (n, i) {
              return this.each(function () {
                var r = t(this).data("bs.modal"),
                  o = a(
                    {},
                    re,
                    {},
                    t(this).data(),
                    {},
                    "object" == typeof n && n ? n : {}
                  );
                if (
                  (r || ((r = new e(this, o)), t(this).data("bs.modal", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n](i);
                } else o.show && r.show(i);
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return re;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(se.CLICK_DATA_API, le.DATA_TOGGLE, function (e) {
        var n,
          i = this,
          r = m.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var o = t(n).data("bs.modal")
          ? "toggle"
          : a({}, t(n).data(), {}, t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
        var s = t(n).one(se.SHOW, function (e) {
          e.isDefaultPrevented() ||
            s.one(se.HIDDEN, function () {
              t(i).is(":visible") && i.focus();
            });
        });
        ce._jQueryInterface.call(t(n), o, this);
      }),
        (t.fn.modal = ce._jQueryInterface),
        (t.fn.modal.Constructor = ce),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = ie), ce._jQueryInterface;
        });
      var ue = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        fe = /^aria-[\w-]*$/i,
        de = {
          "*": ["class", "dir", "id", "lang", "role", fe],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        he = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        pe =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        me = "tooltip",
        ge = t.fn[me],
        ve = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        ye = ["sanitize", "whiteList", "sanitizeFn"],
        _e = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
          popperConfig: "(null|object)",
        },
        be = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        Ee = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: de,
          popperConfig: null,
        },
        Te = { SHOW: "show", OUT: "out" },
        we = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        Ce = { FADE: "fade", SHOW: "show" },
        Se = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner",
          ARROW: ".arrow",
        },
        Ae = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual",
        },
        De = (function () {
          function e(e, t) {
            if (void 0 === n)
              throw new TypeError(
                "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = e),
              (this.config = this._getConfig(t)),
              (this.tip = null),
              this._setListeners();
          }
          var i = e.prototype;
          return (
            (i.enable = function () {
              this._isEnabled = !0;
            }),
            (i.disable = function () {
              this._isEnabled = !1;
            }),
            (i.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (i.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    i = t(e.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      e.currentTarget,
                      this._getDelegateConfig()
                    )),
                    t(e.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (t(this.getTipElement()).hasClass(Ce.SHOW))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (i.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element)
                  .closest(".modal")
                  .off("hide.bs.modal", this._hideModalHandler),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (i.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var i = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(i);
                var r = m.findShadowRoot(this.element),
                  o = t.contains(
                    null !== r ? r : this.element.ownerDocument.documentElement,
                    this.element
                  );
                if (i.isDefaultPrevented() || !o) return;
                var s = this.getTipElement(),
                  a = m.getUID(this.constructor.NAME);
                s.setAttribute("id", a),
                  this.element.setAttribute("aria-describedby", a),
                  this.setContent(),
                  this.config.animation && t(s).addClass(Ce.FADE);
                var l =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, s, this.element)
                      : this.config.placement,
                  c = this._getAttachment(l);
                this.addAttachmentClass(c);
                var u = this._getContainer();
                t(s).data(this.constructor.DATA_KEY, this),
                  t.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || t(s).appendTo(u),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(
                    this.element,
                    s,
                    this._getPopperConfig(c)
                  )),
                  t(s).addClass(Ce.SHOW),
                  "ontouchstart" in document.documentElement &&
                    t(document.body).children().on("mouseover", null, t.noop);
                var f = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === Te.OUT && e._leave(null, e);
                };
                if (t(this.tip).hasClass(Ce.FADE)) {
                  var d = m.getTransitionDurationFromElement(this.tip);
                  t(this.tip).one(m.TRANSITION_END, f).emulateTransitionEnd(d);
                } else f();
              }
            }),
            (i.hide = function (e) {
              var n = this,
                i = this.getTipElement(),
                r = t.Event(this.constructor.Event.HIDE),
                o = function () {
                  n._hoverState !== Te.SHOW &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              if ((t(this.element).trigger(r), !r.isDefaultPrevented())) {
                if (
                  (t(i).removeClass(Ce.SHOW),
                  "ontouchstart" in document.documentElement &&
                    t(document.body).children().off("mouseover", null, t.noop),
                  (this._activeTrigger[Ae.CLICK] = !1),
                  (this._activeTrigger[Ae.FOCUS] = !1),
                  (this._activeTrigger[Ae.HOVER] = !1),
                  t(this.tip).hasClass(Ce.FADE))
                ) {
                  var s = m.getTransitionDurationFromElement(i);
                  t(i).one(m.TRANSITION_END, o).emulateTransitionEnd(s);
                } else o();
                this._hoverState = "";
              }
            }),
            (i.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (i.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (i.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (i.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (i.setContent = function () {
              var e = this.getTipElement();
              this.setElementContent(
                t(e.querySelectorAll(Se.TOOLTIP_INNER)),
                this.getTitle()
              ),
                t(e).removeClass(Ce.FADE + " " + Ce.SHOW);
            }),
            (i.setElementContent = function (e, n) {
              if ("object" == typeof n && (n.nodeType || n.jquery))
                return void (this.config.html
                  ? t(n).parent().is(e) || e.empty().append(n)
                  : e.text(t(n).text()));
              this.config.html
                ? (this.config.sanitize &&
                    (n = h(n, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(n))
                : e.text(n);
            }),
            (i.getTitle = function () {
              var e = this.element.getAttribute("data-original-title");
              return (
                e ||
                  (e =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                e
              );
            }),
            (i._getPopperConfig = function (e) {
              var t = this;
              return a(
                {},
                {
                  placement: e,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: Se.ARROW },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement &&
                      t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    return t._handlePopperPlacementChange(e);
                  },
                },
                {},
                this.config.popperConfig
              );
            }),
            (i._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this.config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = a(
                          {},
                          t.offsets,
                          {},
                          e.config.offset(t.offsets, e.element) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this.config.offset),
                t
              );
            }),
            (i._getContainer = function () {
              return !1 === this.config.container
                ? document.body
                : m.isElement(this.config.container)
                ? t(this.config.container)
                : t(document).find(this.config.container);
            }),
            (i._getAttachment = function (e) {
              return be[e.toUpperCase()];
            }),
            (i._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(
                    e.constructor.Event.CLICK,
                    e.config.selector,
                    function (t) {
                      return e.toggle(t);
                    }
                  );
                else if (n !== Ae.MANUAL) {
                  var i =
                      n === Ae.HOVER
                        ? e.constructor.Event.MOUSEENTER
                        : e.constructor.Event.FOCUSIN,
                    r =
                      n === Ae.HOVER
                        ? e.constructor.Event.MOUSELEAVE
                        : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(i, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(r, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
              }),
                (this._hideModalHandler = function () {
                  e.element && e.hide();
                }),
                t(this.element)
                  .closest(".modal")
                  .on("hide.bs.modal", this._hideModalHandler),
                this.config.selector
                  ? (this.config = a({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (i._fixTitle = function () {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (i._enter = function (e, n) {
              var i = this.constructor.DATA_KEY;
              return (
                (n = n || t(e.currentTarget).data(i)),
                n ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(i, n)),
                e &&
                  (n._activeTrigger[
                    "focusin" === e.type ? Ae.FOCUS : Ae.HOVER
                  ] = !0),
                t(n.getTipElement()).hasClass(Ce.SHOW) ||
                n._hoverState === Te.SHOW
                  ? void (n._hoverState = Te.SHOW)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = Te.SHOW),
                    n.config.delay && n.config.delay.show
                      ? void (n._timeout = setTimeout(function () {
                          n._hoverState === Te.SHOW && n.show();
                        }, n.config.delay.show))
                      : void n.show())
              );
            }),
            (i._leave = function (e, n) {
              var i = this.constructor.DATA_KEY;
              if (
                ((n = n || t(e.currentTarget).data(i)),
                n ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(i, n)),
                e &&
                  (n._activeTrigger[
                    "focusout" === e.type ? Ae.FOCUS : Ae.HOVER
                  ] = !1),
                !n._isWithActiveTrigger())
              ) {
                if (
                  (clearTimeout(n._timeout),
                  (n._hoverState = Te.OUT),
                  !n.config.delay || !n.config.delay.hide)
                )
                  return void n.hide();
                n._timeout = setTimeout(function () {
                  n._hoverState === Te.OUT && n.hide();
                }, n.config.delay.hide);
              }
            }),
            (i._isWithActiveTrigger = function () {
              for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
              return !1;
            }),
            (i._getConfig = function (e) {
              var n = t(this.element).data();
              return (
                Object.keys(n).forEach(function (e) {
                  -1 !== ye.indexOf(e) && delete n[e];
                }),
                (e = a(
                  {},
                  this.constructor.Default,
                  {},
                  n,
                  {},
                  "object" == typeof e && e ? e : {}
                )),
                "number" == typeof e.delay &&
                  (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content &&
                  (e.content = e.content.toString()),
                m.typeCheckConfig(me, e, this.constructor.DefaultType),
                e.sanitize &&
                  (e.template = h(e.template, e.whiteList, e.sanitizeFn)),
                e
              );
            }),
            (i._getDelegateConfig = function () {
              var e = {};
              if (this.config)
                for (var t in this.config)
                  this.constructor.Default[t] !== this.config[t] &&
                    (e[t] = this.config[t]);
              return e;
            }),
            (i._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(ve);
              null !== n && n.length && e.removeClass(n.join(""));
            }),
            (i._handlePopperPlacementChange = function (e) {
              var t = e.instance;
              (this.tip = t.popper),
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement));
            }),
            (i._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass(Ce.FADE),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.tooltip"),
                  r = "object" == typeof n && n;
                if (
                  (i || !/dispose|hide/.test(n)) &&
                  (i || ((i = new e(this, r)), t(this).data("bs.tooltip", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return Ee;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return me;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                },
              },
              {
                key: "Event",
                get: function () {
                  return we;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ".bs.tooltip";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return _e;
                },
              },
            ]),
            e
          );
        })();
      (t.fn[me] = De._jQueryInterface),
        (t.fn[me].Constructor = De),
        (t.fn[me].noConflict = function () {
          return (t.fn[me] = ge), De._jQueryInterface;
        });
      var xe = "popover",
        Oe = t.fn[xe],
        Ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Ne = a({}, De.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        Le = a({}, De.DefaultType, { content: "(string|element|function)" }),
        ke = { FADE: "fade", SHOW: "show" },
        Pe = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        He = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover",
        },
        Re = (function (e) {
          function n() {
            return e.apply(this, arguments) || this;
          }
          l(n, e);
          var i = n.prototype;
          return (
            (i.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (i.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (i.getTipElement = function () {
              return (
                (this.tip = this.tip || t(this.config.template)[0]), this.tip
              );
            }),
            (i.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(Pe.TITLE), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(Pe.CONTENT), n),
                e.removeClass(ke.FADE + " " + ke.SHOW);
            }),
            (i._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (i._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(Ie);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (n._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data("bs.popover"),
                  r = "object" == typeof e ? e : null;
                if (
                  (i || !/dispose|hide/.test(e)) &&
                  (i || ((i = new n(this, r)), t(this).data("bs.popover", i)),
                  "string" == typeof e)
                ) {
                  if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            r(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return Ne;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return xe;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return He;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ".bs.popover";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Le;
                },
              },
            ]),
            n
          );
        })(De);
      (t.fn[xe] = Re._jQueryInterface),
        (t.fn[xe].Constructor = Re),
        (t.fn[xe].noConflict = function () {
          return (t.fn[xe] = Oe), Re._jQueryInterface;
        });
      var je = "scrollspy",
        Me = t.fn[je],
        We = { offset: 10, method: "auto", target: "" },
        Fe = { offset: "number", method: "string", target: "(string|element)" },
        qe = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api",
        },
        Be = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
        },
        Ue = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        Ve = { OFFSET: "offset", POSITION: "position" },
        Ge = (function () {
          function e(e, n) {
            var i = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                Ue.NAV_LINKS +
                "," +
                this._config.target +
                " " +
                Ue.LIST_ITEMS +
                "," +
                this._config.target +
                " " +
                Ue.DROPDOWN_ITEMS),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(qe.SCROLL, function (e) {
                return i._process(e);
              }),
              this.refresh(),
              this._process();
          }
          var n = e.prototype;
          return (
            (n.refresh = function () {
              var e = this,
                n =
                  this._scrollElement === this._scrollElement.window
                    ? Ve.OFFSET
                    : Ve.POSITION,
                i = "auto" === this._config.method ? n : this._config.method,
                r = i === Ve.POSITION ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .map(function (e) {
                    var n,
                      o = m.getSelectorFromElement(e);
                    if ((o && (n = document.querySelector(o)), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [t(n)[i]().top + r, o];
                    }
                    return null;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .sort(function (e, t) {
                    return e[0] - t[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.scrollspy"),
                t(this._scrollElement).off(".bs.scrollspy"),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (n._getConfig = function (e) {
              if (
                ((e = a({}, We, {}, "object" == typeof e && e ? e : {})),
                "string" != typeof e.target)
              ) {
                var n = t(e.target).attr("id");
                n || ((n = m.getUID(je)), t(e.target).attr("id", n)),
                  (e.target = "#" + n);
              }
              return m.typeCheckConfig(je, e, Fe), e;
            }),
            (n._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (n._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (n._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (n._process = function () {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
              if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                var i = this._targets[this._targets.length - 1];
                return void (this._activeTarget !== i && this._activate(i));
              }
              if (
                this._activeTarget &&
                e < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length, o = r; o--; ) {
                this._activeTarget !== this._targets[o] &&
                  e >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] ||
                    e < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
              }
            }),
            (n._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",").map(function (t) {
                  return (
                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  );
                }),
                i = t([].slice.call(document.querySelectorAll(n.join(","))));
              i.hasClass(Be.DROPDOWN_ITEM)
                ? (i
                    .closest(Ue.DROPDOWN)
                    .find(Ue.DROPDOWN_TOGGLE)
                    .addClass(Be.ACTIVE),
                  i.addClass(Be.ACTIVE))
                : (i.addClass(Be.ACTIVE),
                  i
                    .parents(Ue.NAV_LIST_GROUP)
                    .prev(Ue.NAV_LINKS + ", " + Ue.LIST_ITEMS)
                    .addClass(Be.ACTIVE),
                  i
                    .parents(Ue.NAV_LIST_GROUP)
                    .prev(Ue.NAV_ITEMS)
                    .children(Ue.NAV_LINKS)
                    .addClass(Be.ACTIVE)),
                t(this._scrollElement).trigger(qe.ACTIVATE, {
                  relatedTarget: e,
                });
            }),
            (n._clear = function () {
              [].slice
                .call(document.querySelectorAll(this._selector))
                .filter(function (e) {
                  return e.classList.contains(Be.ACTIVE);
                })
                .forEach(function (e) {
                  return e.classList.remove(Be.ACTIVE);
                });
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this).data("bs.scrollspy"),
                  r = "object" == typeof n && n;
                if (
                  (i || ((i = new e(this, r)), t(this).data("bs.scrollspy", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return We;
                },
              },
            ]),
            e
          );
        })();
      t(window).on(qe.LOAD_DATA_API, function () {
        for (
          var e = [].slice.call(document.querySelectorAll(Ue.DATA_SPY)),
            n = e.length,
            i = n;
          i--;

        ) {
          var r = t(e[i]);
          Ge._jQueryInterface.call(r, r.data());
        }
      }),
        (t.fn[je] = Ge._jQueryInterface),
        (t.fn[je].Constructor = Ge),
        (t.fn[je].noConflict = function () {
          return (t.fn[je] = Me), Ge._jQueryInterface;
        });
      var $e = t.fn.tab,
        Ke = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        ze = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show",
        },
        Qe = {
          DROPDOWN: ".dropdown",
          NAV_LIST_GROUP: ".nav, .list-group",
          ACTIVE: ".active",
          ACTIVE_UL: "> li > .active",
          DATA_TOGGLE:
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
        },
        Xe = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(ze.ACTIVE)) ||
                  t(this._element).hasClass(ze.DISABLED)
                )
              ) {
                var n,
                  i,
                  r = t(this._element).closest(Qe.NAV_LIST_GROUP)[0],
                  o = m.getSelectorFromElement(this._element);
                if (r) {
                  var s =
                    "UL" === r.nodeName || "OL" === r.nodeName
                      ? Qe.ACTIVE_UL
                      : Qe.ACTIVE;
                  (i = t.makeArray(t(r).find(s))), (i = i[i.length - 1]);
                }
                var a = t.Event(Ke.HIDE, { relatedTarget: this._element }),
                  l = t.Event(Ke.SHOW, { relatedTarget: i });
                if (
                  (i && t(i).trigger(a),
                  t(this._element).trigger(l),
                  !l.isDefaultPrevented() && !a.isDefaultPrevented())
                ) {
                  o && (n = document.querySelector(o)),
                    this._activate(this._element, r);
                  var c = function () {
                    var n = t.Event(Ke.HIDDEN, { relatedTarget: e._element }),
                      r = t.Event(Ke.SHOWN, { relatedTarget: i });
                    t(i).trigger(n), t(e._element).trigger(r);
                  };
                  n ? this._activate(n, n.parentNode, c) : c();
                }
              }
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (n._activate = function (e, n, i) {
              var r = this,
                o =
                  !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                    ? t(n).children(Qe.ACTIVE)
                    : t(n).find(Qe.ACTIVE_UL),
                s = o[0],
                a = i && s && t(s).hasClass(ze.FADE),
                l = function () {
                  return r._transitionComplete(e, s, i);
                };
              if (s && a) {
                var c = m.getTransitionDurationFromElement(s);
                t(s)
                  .removeClass(ze.SHOW)
                  .one(m.TRANSITION_END, l)
                  .emulateTransitionEnd(c);
              } else l();
            }),
            (n._transitionComplete = function (e, n, i) {
              if (n) {
                t(n).removeClass(ze.ACTIVE);
                var r = t(n.parentNode).find(Qe.DROPDOWN_ACTIVE_CHILD)[0];
                r && t(r).removeClass(ze.ACTIVE),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass(ze.ACTIVE),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !0),
                m.reflow(e),
                e.classList.contains(ze.FADE) && e.classList.add(ze.SHOW),
                e.parentNode && t(e.parentNode).hasClass(ze.DROPDOWN_MENU))
              ) {
                var o = t(e).closest(Qe.DROPDOWN)[0];
                if (o) {
                  var s = [].slice.call(o.querySelectorAll(Qe.DROPDOWN_TOGGLE));
                  t(s).addClass(ze.ACTIVE);
                }
                e.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.tab");
                if (
                  (r || ((r = new e(this)), i.data("bs.tab", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
            ]),
            e
          );
        })();
      t(document).on(Ke.CLICK_DATA_API, Qe.DATA_TOGGLE, function (e) {
        e.preventDefault(), Xe._jQueryInterface.call(t(this), "show");
      }),
        (t.fn.tab = Xe._jQueryInterface),
        (t.fn.tab.Constructor = Xe),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = $e), Xe._jQueryInterface;
        });
      var Ye = t.fn.toast,
        Je = {
          CLICK_DISMISS: "click.dismiss.bs.toast",
          HIDE: "hide.bs.toast",
          HIDDEN: "hidden.bs.toast",
          SHOW: "show.bs.toast",
          SHOWN: "shown.bs.toast",
        },
        Ze = { FADE: "fade", HIDE: "hide", SHOW: "show", SHOWING: "showing" },
        et = { animation: "boolean", autohide: "boolean", delay: "number" },
        tt = { animation: !0, autohide: !0, delay: 500 },
        nt = { DATA_DISMISS: '[data-dismiss="toast"]' },
        it = (function () {
          function e(e, t) {
            (this._element = e),
              (this._config = this._getConfig(t)),
              (this._timeout = null),
              this._setListeners();
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this,
                n = t.Event(Je.SHOW);
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                this._config.animation && this._element.classList.add(Ze.FADE);
                var i = function () {
                  e._element.classList.remove(Ze.SHOWING),
                    e._element.classList.add(Ze.SHOW),
                    t(e._element).trigger(Je.SHOWN),
                    e._config.autohide &&
                      (e._timeout = setTimeout(function () {
                        e.hide();
                      }, e._config.delay));
                };
                if (
                  (this._element.classList.remove(Ze.HIDE),
                  m.reflow(this._element),
                  this._element.classList.add(Ze.SHOWING),
                  this._config.animation)
                ) {
                  var r = m.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(m.TRANSITION_END, i)
                    .emulateTransitionEnd(r);
                } else i();
              }
            }),
            (n.hide = function () {
              if (this._element.classList.contains(Ze.SHOW)) {
                var e = t.Event(Je.HIDE);
                t(this._element).trigger(e),
                  e.isDefaultPrevented() || this._close();
              }
            }),
            (n.dispose = function () {
              clearTimeout(this._timeout),
                (this._timeout = null),
                this._element.classList.contains(Ze.SHOW) &&
                  this._element.classList.remove(Ze.SHOW),
                t(this._element).off(Je.CLICK_DISMISS),
                t.removeData(this._element, "bs.toast"),
                (this._element = null),
                (this._config = null);
            }),
            (n._getConfig = function (e) {
              return (
                (e = a(
                  {},
                  tt,
                  {},
                  t(this._element).data(),
                  {},
                  "object" == typeof e && e ? e : {}
                )),
                m.typeCheckConfig("toast", e, this.constructor.DefaultType),
                e
              );
            }),
            (n._setListeners = function () {
              var e = this;
              t(this._element).on(
                Je.CLICK_DISMISS,
                nt.DATA_DISMISS,
                function () {
                  return e.hide();
                }
              );
            }),
            (n._close = function () {
              var e = this,
                n = function () {
                  e._element.classList.add(Ze.HIDE),
                    t(e._element).trigger(Je.HIDDEN);
                };
              if (
                (this._element.classList.remove(Ze.SHOW),
                this._config.animation)
              ) {
                var i = m.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(m.TRANSITION_END, n)
                  .emulateTransitionEnd(i);
              } else n();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var i = t(this),
                  r = i.data("bs.toast"),
                  o = "object" == typeof n && n;
                if (
                  (r || ((r = new e(this, o)), i.data("bs.toast", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n](this);
                }
              });
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return et;
                },
              },
              {
                key: "Default",
                get: function () {
                  return tt;
                },
              },
            ]),
            e
          );
        })();
      (t.fn.toast = it._jQueryInterface),
        (t.fn.toast.Constructor = it),
        (t.fn.toast.noConflict = function () {
          return (t.fn.toast = Ye), it._jQueryInterface;
        }),
        (e.Alert = E),
        (e.Button = A),
        (e.Carousel = j),
        (e.Collapse = $),
        (e.Dropdown = ne),
        (e.Modal = ce),
        (e.Popover = Re),
        (e.Scrollspy = Ge),
        (e.Tab = Xe),
        (e.Toast = it),
        (e.Tooltip = De),
        (e.Util = m),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function i() {
      var e = document.querySelector("#welcome").offsetTop,
        t = document.querySelector(".building"),
        n = (r(t), $(".building")),
        i = n.position().top + e + n.outerHeight(!0) / 1.2;
      (document.querySelector(".img-floated").style.top = i + "px"),
        (document.querySelector(".img-floated").style.height =
          "calc(100% - " + i + "px)");
    }
    function r(e) {
      e.getBoundingClientRect();
      return { top: window.pageYOffset || document.documentElement.scrollTop };
    }
    function o(e) {
      e.matches
        ? ($(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-text")
            .css("font-size", "16px"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".MediaCard-mediaContainer")
            .css("max-height", "167px"))
        : ($(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-text")
            .css("font-size", "21px"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".MediaCard-mediaContainer")
            .css("max-height", "100%"));
    }
    function s() {
      (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) &&
        ((document.body.scrollTop = 0),
        (document.documentElement.scrollTop = 0));
    }
    n(0),
      n(1),
      $(".multiple-items").slick({
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: !0,
        dots: !0,
        speed: 500,
        responsive: [
          {
            breakpoint: 899,
            settings: {
              autoplay: !0,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: !1,
              arrows: !1,
            },
          },
        ],
      }),
      $(window).on("resize orientationchange", function () {
        $(".multiple-items").slick("resize");
      }),
      MediumWidget.Init({
        renderTo: "#medium-widget",
        params: {
          resource: "https://medium.com/@addirktive",
          postsPerLine: 1,
          limit: 2,
          picture: "big",
          fields: ["description", "author", "claps", "likes", "publishAt"],
          ratio: "landscape",
        },
      }),
      window.addEventListener("load", i),
      window.addEventListener("resize", i),
      $(".twitter-block").delegate(
        "#twitter-widget-0",
        "DOMSubtreeModified propertychange",
        function () {
          a();
        }
      );
    var a = function e() {
        $(".twitter-block")
          .find(".twitter-timeline")
          .contents()
          .find(".timeline-Header")
          .css("display", "none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find("span.TweetAuthor-screenName")
            .css("font-size", "16px"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find("span.TweetAuthor-screenName")
            .css("font-family", "Raleway"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Widget")
            .css("background-color", "transparent"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".TweetAuthor-name")
            .css({
              "font-size": "16px",
              "line-height": "1.8",
              "letter-spacing": ".05em",
              color: "#73718a",
              "font-family": "Poppins",
              "font-weight": "400",
            }),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".TweetAuthor-screenName")
            .css({
              "font-size": "16px",
              "line-height": "1.8",
              "letter-spacing": ".05em",
              color: "#73718a",
              "font-family": "Poppins",
              "font-weight": "400",
            }),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet")
            .css({
              display: "flex",
              "flex-direction": "column-reverse",
              padding: "0",
            }),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-TweetList-tweet")
            .css("margin-top", "52"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".MediaCard-mediaContainer")
            .css("border-radius", "0"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-text")
            .css("color", "white"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-brand")
            .css("display", "none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Footer")
            .css("display", "none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-actions")
            .css("display", "none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".dt-updated")
            .css("display", "none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".PrettyLink")
            .css("color", "#32a1f6"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-media")
            .css({ "margin-left": "0", "margin-bottom": "26" });
        var t = $(".twitter-block")
          .find(".twitter-timeline")
          .contents()
          .find(".timeline-Tweet-text")
          .css("font-size");
        t = t.slice(0, -2);
        var n = 5 * Number(t);
        console.log(n),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-text")
            .css({
              color: "white",
              "margin-left": "0",
              "font-size": "21px",
              "font-family": "poppins",
              overflow: "hidden",
              position: "relative",
              "margin-bottom": "2px",
            }),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Tweet-text a")
            .next()
            .next()
            .next()
            .next()
            .next()
            .nextAll()
            .css("display", "none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".NaturalImage-image")
            .css({
              "max-height": "308px;",
              display: "flex;",
              "flex-direction": "column-reverse",
              width: "auto",
            }),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".MediaCard-media")
            .css("max-height", "308px"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-Body")
            .css("border", "0 none"),
          $(".twitter-block")
            .find(".twitter-timeline")
            .contents()
            .find(".timeline-TweetList")
            .bind("DOMSubtreeModified propertychange", function () {
              e(this);
            });
      },
      l = window.matchMedia("(max-width: 767px)");
    o(l), l.addListener(o);
    var c = document.querySelector('a[href="#login"]'),
      u = document.querySelector(".login-link a"),
      f = document.querySelector(".register-link a"),
      d = document.querySelector('a[href="#register"]'),
      h = document.querySelector('.hero-info [type="button"]'),
      p = document.querySelector('a[href="#hero"]'),
      m = Array.from(document.querySelectorAll(".hero"));
    u.addEventListener("click", function (e) {
      s(),
        m.forEach(function (e) {
          e.classList.contains("hero-login")
            ? e.classList.add("active")
            : e.classList.remove("active");
        });
    }),
      c.addEventListener("click", function (e) {
        s(),
          m.forEach(function (e) {
            e.classList.contains("hero-login")
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
      }),
      f.addEventListener("click", function (e) {
        s(),
          m.forEach(function (e) {
            e.classList.contains("hero-register")
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
      }),
      d.addEventListener("click", function (e) {
        s(),
          m.forEach(function (e) {
            e.classList.contains("hero-register")
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
      }),
      h.addEventListener("click", function (e) {
        s(),
          m.forEach(function (e) {
            e.classList.contains("hero-register")
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
      }),
      p.addEventListener("click", function (e) {
        s(),
          m.forEach(function (e) {
            e.classList.contains("hero-main")
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
      });
  },
  function (e, t, n) {
    var i, r;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      function s(e, t, n) {
        n = n || de;
        var i,
          r,
          o = n.createElement("script");
        if (((o.text = e), t))
          for (i in Ae)
            (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function a(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? ye[_e.call(e)] || "object"
          : typeof e;
      }
      function l(e) {
        var t = !!e && "length" in e && e.length,
          n = a(e);
        return (
          !Ce(e) &&
          !Se(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      function c(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      function u(e, t, n) {
        return Ce(t)
          ? De.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? De.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? De.grep(e, function (e) {
              return ve.call(t, e) > -1 !== n;
            })
          : De.filter(t, e, n);
      }
      function f(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      function d(e) {
        var t = {};
        return (
          De.each(e.match(Me) || [], function (e, n) {
            t[n] = !0;
          }),
          t
        );
      }
      function h(e) {
        return e;
      }
      function p(e) {
        throw e;
      }
      function m(e, t, n, i) {
        var r;
        try {
          e && Ce((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && Ce((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      function g() {
        de.removeEventListener("DOMContentLoaded", g),
          n.removeEventListener("load", g),
          De.ready();
      }
      function v(e, t) {
        return t.toUpperCase();
      }
      function y(e) {
        return e.replace(Be, "ms-").replace(Ue, v);
      }
      function _() {
        this.expando = De.expando + _.uid++;
      }
      function b(e) {
        return (
          "true" === e ||
          ("false" !== e &&
            ("null" === e
              ? null
              : e === +e + ""
              ? +e
              : Ke.test(e)
              ? JSON.parse(e)
              : e))
        );
      }
      function E(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(ze, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = b(n);
            } catch (e) {}
            $e.set(e, t, n);
          } else n = void 0;
        return n;
      }
      function T(e, t, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return De.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (De.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (De.cssNumber[t] || ("px" !== c && +l)) &&
            Xe.exec(De.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            De.style(e, t, u + c),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= o);
          (u *= 2), De.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      function w(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = it[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = De.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (it[i] = r),
          r)
        );
      }
      function C(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
          (i = e[o]),
            i.style &&
              ((n = i.style.display),
              t
                ? ("none" === n &&
                    ((r[o] = Ge.get(i, "display") || null),
                    r[o] || (i.style.display = "")),
                  "" === i.style.display && tt(i) && (r[o] = w(i)))
                : "none" !== n && ((r[o] = "none"), Ge.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
      }
      function S(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && c(e, t)) ? De.merge([e], n) : n
        );
      }
      function A(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          Ge.set(e[n], "globalEval", !t || Ge.get(t[n], "globalEval"));
      }
      function D(e, t, n, i, r) {
        for (
          var o,
            s,
            l,
            c,
            u,
            f,
            d = t.createDocumentFragment(),
            h = [],
            p = 0,
            m = e.length;
          p < m;
          p++
        )
          if ((o = e[p]) || 0 === o)
            if ("object" === a(o)) De.merge(h, o.nodeType ? [o] : o);
            else if (lt.test(o)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  l = (ot.exec(o) || ["", ""])[1].toLowerCase(),
                  c = at[l] || at._default,
                  s.innerHTML = c[1] + De.htmlPrefilter(o) + c[2],
                  f = c[0];
                f--;

              )
                s = s.lastChild;
              De.merge(h, s.childNodes),
                (s = d.firstChild),
                (s.textContent = "");
            } else h.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; (o = h[p++]); )
          if (i && De.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((u = Ze(o)), (s = S(d.appendChild(o), "script")), u && A(s), n)
          )
            for (f = 0; (o = s[f++]); ) st.test(o.type || "") && n.push(o);
        return d;
      }
      function x() {
        return !0;
      }
      function O() {
        return !1;
      }
      function I(e, t) {
        return (e === N()) == ("focus" === t);
      }
      function N() {
        try {
          return de.activeElement;
        } catch (e) {}
      }
      function L(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
          "string" != typeof n && ((i = i || n), (n = void 0));
          for (a in t) L(e, a, n, i, t[a], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = O;
        else if (!r) return e;
        return (
          1 === o &&
            ((s = r),
            (r = function (e) {
              return De().off(e), s.apply(this, arguments);
            }),
            (r.guid = s.guid || (s.guid = De.guid++))),
          e.each(function () {
            De.event.add(this, t, r, i, n);
          })
        );
      }
      function k(e, t, n) {
        if (!n) return void (void 0 === Ge.get(e, t) && De.event.add(e, t, x));
        Ge.set(e, t, !1),
          De.event.add(e, t, {
            namespace: !1,
            handler: function (e) {
              var i,
                r,
                o = Ge.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                if (o.length)
                  (De.event.special[t] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((o = pe.call(arguments)),
                  Ge.set(this, t, o),
                  (i = n(this, t)),
                  this[t](),
                  (r = Ge.get(this, t)),
                  o !== r || i ? Ge.set(this, t, !1) : (r = {}),
                  o !== r)
                )
                  return (
                    e.stopImmediatePropagation(), e.preventDefault(), r.value
                  );
              } else
                o.length &&
                  (Ge.set(this, t, {
                    value: De.event.trigger(
                      De.extend(o[0], De.Event.prototype),
                      o.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          });
      }
      function P(e, t) {
        return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr")
          ? De(e).children("tbody")[0] || e
          : e;
      }
      function H(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function R(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function j(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
          if (
            Ge.hasData(e) &&
            ((o = Ge.access(e)), (s = Ge.set(t, o)), (c = o.events))
          ) {
            delete s.handle, (s.events = {});
            for (r in c)
              for (n = 0, i = c[r].length; n < i; n++)
                De.event.add(t, r, c[r][n]);
          }
          $e.hasData(e) &&
            ((a = $e.access(e)), (l = De.extend({}, a)), $e.set(t, l));
        }
      }
      function M(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && rt.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function W(e, t, n, i) {
        t = me.apply([], t);
        var r,
          o,
          a,
          l,
          c,
          u,
          f = 0,
          d = e.length,
          h = d - 1,
          p = t[0],
          m = Ce(p);
        if (
          m ||
          (d > 1 && "string" == typeof p && !we.checkClone && pt.test(p))
        )
          return e.each(function (r) {
            var o = e.eq(r);
            m && (t[0] = p.call(this, r, o.html())), W(o, t, n, i);
          });
        if (
          d &&
          ((r = D(t, e[0].ownerDocument, !1, e, i)),
          (o = r.firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = De.map(S(r, "script"), H), l = a.length; f < d; f++)
            (c = r),
              f !== h &&
                ((c = De.clone(c, !0, !0)), l && De.merge(a, S(c, "script"))),
              n.call(e[f], c, f);
          if (l)
            for (
              u = a[a.length - 1].ownerDocument, De.map(a, R), f = 0;
              f < l;
              f++
            )
              (c = a[f]),
                st.test(c.type || "") &&
                  !Ge.access(c, "globalEval") &&
                  De.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? De._evalUrl &&
                      !c.noModule &&
                      De._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce"),
                      })
                    : s(c.textContent.replace(mt, ""), c, u));
        }
        return e;
      }
      function F(e, t, n) {
        for (var i, r = t ? De.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || De.cleanData(S(i)),
            i.parentNode &&
              (n && Ze(i) && A(S(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      function q(e, t, n) {
        var i,
          r,
          o,
          s,
          a = e.style;
        return (
          (n = n || vt(e)),
          n &&
            ((s = n.getPropertyValue(t) || n[t]),
            "" !== s || Ze(e) || (s = De.style(e, t)),
            !we.pixelBoxStyles() &&
              gt.test(s) &&
              yt.test(t) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function B(e, t) {
        return {
          get: function () {
            return e()
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
          },
        };
      }
      function U(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = _t.length; n--; )
          if ((e = _t[n] + t) in bt) return e;
      }
      function V(e) {
        var t = De.cssProps[e] || Et[e];
        return t || (e in bt ? e : (Et[e] = U(e) || e));
      }
      function G(e, t, n) {
        var i = Xe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function $(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += De.css(e, n + Ye[s], !0, r)),
            i
              ? ("content" === n && (l -= De.css(e, "padding" + Ye[s], !0, r)),
                "margin" !== n &&
                  (l -= De.css(e, "border" + Ye[s] + "Width", !0, r)))
              : ((l += De.css(e, "padding" + Ye[s], !0, r)),
                "padding" !== n
                  ? (l += De.css(e, "border" + Ye[s] + "Width", !0, r))
                  : (a += De.css(e, "border" + Ye[s] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function K(e, t, n) {
        var i = vt(e),
          r = !we.boxSizingReliable() || n,
          o = r && "border-box" === De.css(e, "boxSizing", !1, i),
          s = o,
          a = q(e, t, i),
          l = "offset" + t[0].toUpperCase() + t.slice(1);
        if (gt.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!we.boxSizingReliable() && o) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === De.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((o = "border-box" === De.css(e, "boxSizing", !1, i)),
            (s = l in e) && (a = e[l])),
          (a = parseFloat(a) || 0) +
            $(e, t, n || (o ? "border" : "content"), s, i, a) +
            "px"
        );
      }
      function z(e, t, n, i, r) {
        return new z.prototype.init(e, t, n, i, r);
      }
      function Q() {
        Dt &&
          (!1 === de.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(Q)
            : n.setTimeout(Q, De.fx.interval),
          De.fx.tick());
      }
      function X() {
        return (
          n.setTimeout(function () {
            At = void 0;
          }),
          (At = Date.now())
        );
      }
      function Y(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          (n = Ye[i]), (r["margin" + n] = r["padding" + n] = e);
        return t && (r.opacity = r.width = e), r;
      }
      function J(e, t, n) {
        for (
          var i,
            r = (te.tweeners[t] || []).concat(te.tweeners["*"]),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function Z(e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          f = "width" in t || "height" in t,
          d = this,
          h = {},
          p = e.style,
          m = e.nodeType && tt(e),
          g = Ge.get(e, "fxshow");
        n.queue ||
          ((s = De._queueHooks(e, "fx")),
          null == s.unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          d.always(function () {
            d.always(function () {
              s.unqueued--, De.queue(e, "fx").length || s.empty.fire();
            });
          }));
        for (i in t)
          if (((r = t[i]), xt.test(r))) {
            if (
              (delete t[i],
              (o = o || "toggle" === r),
              r === (m ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              m = !0;
            }
            h[i] = (g && g[i]) || De.style(e, i);
          }
        if ((l = !De.isEmptyObject(t)) || !De.isEmptyObject(h)) {
          f &&
            1 === e.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            (c = g && g.display),
            null == c && (c = Ge.get(e, "display")),
            (u = De.css(e, "display")),
            "none" === u &&
              (c
                ? (u = c)
                : (C([e], !0),
                  (c = e.style.display || c),
                  (u = De.css(e, "display")),
                  C([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === De.css(e, "float") &&
              (l ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              d.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (l = !1);
          for (i in h)
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Ge.access(e, "fxshow", { display: c })),
              o && (g.hidden = !m),
              m && C([e], !0),
              d.done(function () {
                m || C([e]), Ge.remove(e, "fxshow");
                for (i in h) De.style(e, i, h[i]);
              })),
              (l = J(m ? g[i] : 0, i, d)),
              i in g ||
                ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
        }
      }
      function ee(e, t) {
        var n, i, r, o, s;
        for (n in e)
          if (
            ((i = y(n)),
            (r = t[i]),
            (o = e[n]),
            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
            n !== i && ((e[i] = o), delete e[n]),
            (s = De.cssHooks[i]) && "expand" in s)
          ) {
            (o = s.expand(o)), delete e[i];
            for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
          } else t[i] = r;
      }
      function te(e, t, n) {
        var i,
          r,
          o = 0,
          s = te.prefilters.length,
          a = De.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = At || X(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = n / c.duration || 0,
                o = 1 - i,
                s = 0,
                l = c.tweens.length;
              s < l;
              s++
            )
              c.tweens[s].run(o);
            return (
              a.notifyWith(e, [c, o, n]),
              o < 1 && l
                ? n
                : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: De.extend({}, t),
            opts: De.extend(
              !0,
              { specialEasing: {}, easing: De.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: At || X(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = De.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (ee(u, c.opts.specialEasing); o < s; o++)
          if ((i = te.prefilters[o].call(c, e, u, c.opts)))
            return (
              Ce(i.stop) &&
                (De._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          De.map(u, J, c),
          Ce(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          De.fx.timer(De.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      function ne(e) {
        return (e.match(Me) || []).join(" ");
      }
      function ie(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function re(e) {
        return Array.isArray(e)
          ? e
          : "string" == typeof e
          ? e.match(Me) || []
          : [];
      }
      function oe(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          De.each(t, function (t, r) {
            n || Ft.test(e)
              ? i(e, r)
              : oe(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== a(t)) i(e, t);
        else for (r in t) oe(e + "[" + r + "]", t[r], n, i);
      }
      function se(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match(Me) || [];
          if (Ce(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function ae(e, t, n, i) {
        function r(a) {
          var l;
          return (
            (o[a] = !0),
            De.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || s || o[c]
                ? s
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), r(c), !1);
            }),
            l
          );
        }
        var o = {},
          s = e === Jt;
        return r(t.dataTypes[0]) || (!o["*"] && r("*"));
      }
      function le(e, t) {
        var n,
          i,
          r = De.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && De.extend(!0, e, i), e;
      }
      function ce(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
            void 0 === i &&
              (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
          for (r in a)
            if (a[r] && a[r].test(i)) {
              l.unshift(r);
              break;
            }
        if (l[0] in n) o = l[0];
        else {
          for (r in n) {
            if (!l[0] || e.converters[r + " " + l[0]]) {
              o = r;
              break;
            }
            s || (s = r);
          }
          o = o || s;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
      }
      function ue(e, t, n, i) {
        var r,
          o,
          s,
          a,
          l,
          c = {},
          u = e.dataTypes.slice();
        if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o; )
          if (
            (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (l = o),
            (o = u.shift()))
          )
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
              if (!(s = c[l + " " + o] || c["* " + o]))
                for (r in c)
                  if (
                    ((a = r.split(" ")),
                    a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]]))
                  ) {
                    !0 === s
                      ? (s = c[r])
                      : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                    break;
                  }
              if (!0 !== s)
                if (s && e.throws) t = s(t);
                else
                  try {
                    t = s(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: s ? e : "No conversion from " + l + " to " + o,
                    };
                  }
            }
        return { state: "success", data: t };
      }
      var fe = [],
        de = n.document,
        he = Object.getPrototypeOf,
        pe = fe.slice,
        me = fe.concat,
        ge = fe.push,
        ve = fe.indexOf,
        ye = {},
        _e = ye.toString,
        be = ye.hasOwnProperty,
        Ee = be.toString,
        Te = Ee.call(Object),
        we = {},
        Ce = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        Se = function (e) {
          return null != e && e === e.window;
        },
        Ae = { type: !0, src: !0, nonce: !0, noModule: !0 },
        De = function (e, t) {
          return new De.fn.init(e, t);
        },
        xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (De.fn = De.prototype =
        {
          jquery: "3.4.1",
          constructor: De,
          length: 0,
          toArray: function () {
            return pe.call(this);
          },
          get: function (e) {
            return null == e
              ? pe.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = De.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return De.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              De.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(pe.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: ge,
          sort: fe.sort,
          splice: fe.splice,
        }),
        (De.extend = De.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              r,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || Ce(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (i = e[t]),
                    "__proto__" !== t &&
                      s !== i &&
                      (c && i && (De.isPlainObject(i) || (r = Array.isArray(i)))
                        ? ((n = s[t]),
                          (o =
                            r && !Array.isArray(n)
                              ? []
                              : r || De.isPlainObject(n)
                              ? n
                              : {}),
                          (r = !1),
                          (s[t] = De.extend(c, o, i)))
                        : void 0 !== i && (s[t] = i));
            return s;
          }),
        De.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== _e.call(e)) &&
              (!(t = he(e)) ||
                ("function" ==
                  typeof (n = be.call(t, "constructor") && t.constructor) &&
                  Ee.call(n) === Te))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t) {
            s(e, { nonce: t && t.nonce });
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (l(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(xe, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (l(Object(e))
                  ? De.merge(n, "string" == typeof e ? [e] : e)
                  : ge.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : ve.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
              !t(e[r], r) !== s && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (l(e))
              for (i = e.length; o < i; o++)
                null != (r = t(e[o], o, n)) && s.push(r);
            else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return me.apply([], s);
          },
          guid: 1,
          support: we,
        }),
        "function" == typeof Symbol &&
          (De.fn[Symbol.iterator] = fe[Symbol.iterator]),
        De.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            ye["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var Oe = /*!
       * Sizzle CSS Selector Engine v2.3.4
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2019-04-08
       */ (function (e) {
        function t(e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u,
            d,
            h = t && t.ownerDocument,
            p = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))
          )
            return n;
          if (
            !i &&
            ((t ? t.ownerDocument || t : W) !== N && I(t), (t = t || N), k)
          ) {
            if (11 !== p && (l = ve.exec(e)))
              if ((r = l[1])) {
                if (9 === p) {
                  if (!(s = t.getElementById(r))) return n;
                  if (s.id === r) return n.push(s), n;
                } else if (
                  h &&
                  (s = h.getElementById(r)) &&
                  j(t, s) &&
                  s.id === r
                )
                  return n.push(s), n;
              } else {
                if (l[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (r = l[3]) &&
                  b.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return Y.apply(n, t.getElementsByClassName(r)), n;
              }
            if (
              b.qsa &&
              !G[e + " "] &&
              (!P || !P.test(e)) &&
              (1 !== p || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((d = e), (h = t), 1 === p && ce.test(e))) {
                for (
                  (a = t.getAttribute("id"))
                    ? (a = a.replace(Ee, Te))
                    : t.setAttribute("id", (a = M)),
                    u = C(e),
                    o = u.length;
                  o--;

                )
                  u[o] = "#" + a + " " + f(u[o]);
                (d = u.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
              }
              try {
                return Y.apply(n, h.querySelectorAll(d)), n;
              } catch (t) {
                G(e, !0);
              } finally {
                a === M && t.removeAttribute("id");
              }
            }
          }
          return A(e.replace(se, "$1"), t, n, i);
        }
        function n() {
          function e(n, i) {
            return (
              t.push(n + " ") > E.cacheLength && delete e[t.shift()],
              (e[n + " "] = i)
            );
          }
          var t = [];
          return e;
        }
        function i(e) {
          return (e[M] = !0), e;
        }
        function r(e) {
          var t = N.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function o(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            E.attrHandle[n[i]] = t;
        }
        function s(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function a(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && Ce(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function l(e) {
          return i(function (t) {
            return (
              (t = +t),
              i(function (n, i) {
                for (var r, o = e([], n.length, t), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function c(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        function u() {}
        function f(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function d(e, t, n) {
          var i = t.dir,
            r = t.next,
            o = r || i,
            s = n && "parentNode" === o,
            a = q++;
          return t.first
            ? function (t, n, r) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s) return e(t, n, r);
                return !1;
              }
            : function (t, n, l) {
                var c,
                  u,
                  f,
                  d = [F, a];
                if (l) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s)
                      if (
                        ((f = t[M] || (t[M] = {})),
                        (u = f[t.uniqueID] || (f[t.uniqueID] = {})),
                        r && r === t.nodeName.toLowerCase())
                      )
                        t = t[i] || t;
                      else {
                        if ((c = u[o]) && c[0] === F && c[1] === a)
                          return (d[2] = c[2]);
                        if (((u[o] = d), (d[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function h(e) {
          return e.length > 1
            ? function (t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function p(e, n, i) {
          for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
          return i;
        }
        function m(e, t, n, i, r) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
          return s;
        }
        function g(e, t, n, r, o, s) {
          return (
            r && !r[M] && (r = g(r)),
            o && !o[M] && (o = g(o, s)),
            i(function (i, s, a, l) {
              var c,
                u,
                f,
                d = [],
                h = [],
                g = s.length,
                v = i || p(t || "*", a.nodeType ? [a] : a, []),
                y = !e || (!i && t) ? v : m(v, d, e, a, l),
                _ = n ? (o || (i ? e : g || r) ? [] : s) : y;
              if ((n && n(y, _, a, l), r))
                for (c = m(_, h), r(c, [], a, l), u = c.length; u--; )
                  (f = c[u]) && (_[h[u]] = !(y[h[u]] = f));
              if (i) {
                if (o || e) {
                  if (o) {
                    for (c = [], u = _.length; u--; )
                      (f = _[u]) && c.push((y[u] = f));
                    o(null, (_ = []), c, l);
                  }
                  for (u = _.length; u--; )
                    (f = _[u]) &&
                      (c = o ? Z(i, f) : d[u]) > -1 &&
                      (i[c] = !(s[c] = f));
                }
              } else (_ = m(_ === s ? _.splice(g, _.length) : _)), o ? o(null, s, _, l) : Y.apply(s, _);
            })
          );
        }
        function v(e) {
          for (
            var t,
              n,
              i,
              r = e.length,
              o = E.relative[e[0].type],
              s = o || E.relative[" "],
              a = o ? 1 : 0,
              l = d(
                function (e) {
                  return e === t;
                },
                s,
                !0
              ),
              c = d(
                function (e) {
                  return Z(t, e) > -1;
                },
                s,
                !0
              ),
              u = [
                function (e, n, i) {
                  var r =
                    (!o && (i || n !== D)) ||
                    ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                  return (t = null), r;
                },
              ];
            a < r;
            a++
          )
            if ((n = E.relative[e[a].type])) u = [d(h(u), n)];
            else {
              if (((n = E.filter[e[a].type].apply(null, e[a].matches)), n[M])) {
                for (i = ++a; i < r && !E.relative[e[i].type]; i++);
                return g(
                  a > 1 && h(u),
                  a > 1 &&
                    f(
                      e
                        .slice(0, a - 1)
                        .concat({ value: " " === e[a - 2].type ? "*" : "" })
                    ).replace(se, "$1"),
                  n,
                  a < i && v(e.slice(a, i)),
                  i < r && v((e = e.slice(i))),
                  i < r && f(e)
                );
              }
              u.push(n);
            }
          return h(u);
        }
        function y(e, n) {
          var r = n.length > 0,
            o = e.length > 0,
            s = function (i, s, a, l, c) {
              var u,
                f,
                d,
                h = 0,
                p = "0",
                g = i && [],
                v = [],
                y = D,
                _ = i || (o && E.find.TAG("*", c)),
                b = (F += null == y ? 1 : Math.random() || 0.1),
                T = _.length;
              for (
                c && (D = s === N || s || c);
                p !== T && null != (u = _[p]);
                p++
              ) {
                if (o && u) {
                  for (
                    f = 0, s || u.ownerDocument === N || (I(u), (a = !k));
                    (d = e[f++]);

                  )
                    if (d(u, s || N, a)) {
                      l.push(u);
                      break;
                    }
                  c && (F = b);
                }
                r && ((u = !d && u) && h--, i && g.push(u));
              }
              if (((h += p), r && p !== h)) {
                for (f = 0; (d = n[f++]); ) d(g, v, s, a);
                if (i) {
                  if (h > 0) for (; p--; ) g[p] || v[p] || (v[p] = Q.call(l));
                  v = m(v);
                }
                Y.apply(l, v),
                  c &&
                    !i &&
                    v.length > 0 &&
                    h + n.length > 1 &&
                    t.uniqueSort(l);
              }
              return c && ((F = b), (D = y)), g;
            };
          return r ? i(s) : s;
        }
        var _,
          b,
          E,
          T,
          w,
          C,
          S,
          A,
          D,
          x,
          O,
          I,
          N,
          L,
          k,
          P,
          H,
          R,
          j,
          M = "sizzle" + 1 * new Date(),
          W = e.document,
          F = 0,
          q = 0,
          B = n(),
          U = n(),
          V = n(),
          G = n(),
          $ = function (e, t) {
            return e === t && (O = !0), 0;
          },
          K = {}.hasOwnProperty,
          z = [],
          Q = z.pop,
          X = z.push,
          Y = z.push,
          J = z.slice,
          Z = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          ee =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          te = "[\\x20\\t\\r\\n\\f]",
          ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          ie =
            "\\[" +
            te +
            "*(" +
            ne +
            ")(?:" +
            te +
            "*([*^$|!~]?=)" +
            te +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            ne +
            "))|)" +
            te +
            "*\\]",
          re =
            ":(" +
            ne +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            ie +
            ")*)|.*)\\)|)",
          oe = new RegExp(te + "+", "g"),
          se = new RegExp(
            "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
            "g"
          ),
          ae = new RegExp("^" + te + "*," + te + "*"),
          le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
          ce = new RegExp(te + "|>"),
          ue = new RegExp(re),
          fe = new RegExp("^" + ne + "$"),
          de = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                te +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                te +
                "*(?:([+-]|)" +
                te +
                "*(\\d+)|))" +
                te +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + ee + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                te +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                te +
                "*((?:-\\d)?\\d*)" +
                te +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          he = /HTML$/i,
          pe = /^(?:input|select|textarea|button)$/i,
          me = /^h\d$/i,
          ge = /^[^{]+\{\s*\[native \w/,
          ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ye = /[+~]/,
          _e = new RegExp(
            "\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)",
            "ig"
          ),
          be = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n
              ? t
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          Ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Te = function (e, t) {
            return t
              ? "\0" === e
                ? "???"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          we = function () {
            I();
          },
          Ce = d(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          Y.apply((z = J.call(W.childNodes)), W.childNodes),
            z[W.childNodes.length].nodeType;
        } catch (e) {
          Y = {
            apply: z.length
              ? function (e, t) {
                  X.apply(e, J.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                },
          };
        }
        (b = t.support = {}),
          (w = t.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !he.test(t || (n && n.nodeName) || "HTML");
            }),
          (I = t.setDocument =
            function (e) {
              var t,
                n,
                i = e ? e.ownerDocument || e : W;
              return i !== N && 9 === i.nodeType && i.documentElement
                ? ((N = i),
                  (L = N.documentElement),
                  (k = !w(N)),
                  W !== N &&
                    (n = N.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", we, !1)
                      : n.attachEvent && n.attachEvent("onunload", we)),
                  (b.attributes = r(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (b.getElementsByTagName = r(function (e) {
                    return (
                      e.appendChild(N.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (b.getElementsByClassName = ge.test(
                    N.getElementsByClassName
                  )),
                  (b.getById = r(function (e) {
                    return (
                      (L.appendChild(e).id = M),
                      !N.getElementsByName || !N.getElementsByName(M).length
                    );
                  })),
                  b.getById
                    ? ((E.filter.ID = function (e) {
                        var t = e.replace(_e, be);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (E.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && k) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((E.filter.ID = function (e) {
                        var t = e.replace(_e, be);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (E.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && k) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (E.find.TAG = b.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : b.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          i = [],
                          r = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (E.find.CLASS =
                    b.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && k)
                        return t.getElementsByClassName(e);
                    }),
                  (H = []),
                  (P = []),
                  (b.qsa = ge.test(N.querySelectorAll)) &&
                    (r(function (e) {
                      (L.appendChild(e).innerHTML =
                        "<a id='" +
                        M +
                        "'></a><select id='" +
                        M +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          P.push("[*^$]=" + te + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          P.push("\\[" + te + "*(?:value|" + ee + ")"),
                        e.querySelectorAll("[id~=" + M + "-]").length ||
                          P.push("~="),
                        e.querySelectorAll(":checked").length ||
                          P.push(":checked"),
                        e.querySelectorAll("a#" + M + "+*").length ||
                          P.push(".#.+[+~]");
                    }),
                    r(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = N.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          P.push("name" + te + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          P.push(":enabled", ":disabled"),
                        (L.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          P.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        P.push(",.*:");
                    })),
                  (b.matchesSelector = ge.test(
                    (R =
                      L.matches ||
                      L.webkitMatchesSelector ||
                      L.mozMatchesSelector ||
                      L.oMatchesSelector ||
                      L.msMatchesSelector)
                  )) &&
                    r(function (e) {
                      (b.disconnectedMatch = R.call(e, "*")),
                        R.call(e, "[s!='']:x"),
                        H.push("!=", re);
                    }),
                  (P = P.length && new RegExp(P.join("|"))),
                  (H = H.length && new RegExp(H.join("|"))),
                  (t = ge.test(L.compareDocumentPosition)),
                  (j =
                    t || ge.test(L.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  ($ = t
                    ? function (e, t) {
                        if (e === t) return (O = !0), 0;
                        var n =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          n ||
                          ((n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & n ||
                          (!b.sortDetached &&
                            t.compareDocumentPosition(e) === n)
                            ? e === N || (e.ownerDocument === W && j(W, e))
                              ? -1
                              : t === N || (t.ownerDocument === W && j(W, t))
                              ? 1
                              : x
                              ? Z(x, e) - Z(x, t)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (O = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          l = [t];
                        if (!r || !o)
                          return e === N
                            ? -1
                            : t === N
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : x
                            ? Z(x, e) - Z(x, t)
                            : 0;
                        if (r === o) return s(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) l.unshift(n);
                        for (; a[i] === l[i]; ) i++;
                        return i
                          ? s(a[i], l[i])
                          : a[i] === W
                          ? -1
                          : l[i] === W
                          ? 1
                          : 0;
                      }),
                  N)
                : N;
            }),
          (t.matches = function (e, n) {
            return t(e, null, null, n);
          }),
          (t.matchesSelector = function (e, n) {
            if (
              ((e.ownerDocument || e) !== N && I(e),
              b.matchesSelector &&
                k &&
                !G[n + " "] &&
                (!H || !H.test(n)) &&
                (!P || !P.test(n)))
            )
              try {
                var i = R.call(e, n);
                if (
                  i ||
                  b.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {
                G(n, !0);
              }
            return t(n, N, null, [e]).length > 0;
          }),
          (t.contains = function (e, t) {
            return (e.ownerDocument || e) !== N && I(e), j(e, t);
          }),
          (t.attr = function (e, t) {
            (e.ownerDocument || e) !== N && I(e);
            var n = E.attrHandle[t.toLowerCase()],
              i =
                n && K.call(E.attrHandle, t.toLowerCase())
                  ? n(e, t, !k)
                  : void 0;
            return void 0 !== i
              ? i
              : b.attributes || !k
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (t.escape = function (e) {
            return (e + "").replace(Ee, Te);
          }),
          (t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (t.uniqueSort = function (e) {
            var t,
              n = [],
              i = 0,
              r = 0;
            if (
              ((O = !b.detectDuplicates),
              (x = !b.sortStable && e.slice(0)),
              e.sort($),
              O)
            ) {
              for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
              for (; i--; ) e.splice(n[i], 1);
            }
            return (x = null), e;
          }),
          (T = t.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                r = e.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += T(t);
              return n;
            }),
          (E = t.selectors =
            {
              cacheLength: 50,
              createPseudo: i,
              match: de,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(_e, be)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(_e, be)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || t.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && t.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return de.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          ue.test(n) &&
                          (t = C(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(_e, be).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = B[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|" + te + ")" + e + "(" + te + "|$)"
                    )) &&
                      B(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, n, i) {
                  return function (r) {
                    var o = t.attr(r, e);
                    return null == o
                      ? "!=" === n
                      : !n ||
                          ((o += ""),
                          "=" === n
                            ? o === i
                            : "!=" === n
                            ? o !== i
                            : "^=" === n
                            ? i && 0 === o.indexOf(i)
                            : "*=" === n
                            ? i && o.indexOf(i) > -1
                            : "$=" === n
                            ? i && o.slice(-i.length) === i
                            : "~=" === n
                            ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1
                            : "|=" === n &&
                              (o === i ||
                                o.slice(0, i.length + 1) === i + "-"));
                  };
                },
                CHILD: function (e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          u,
                          f,
                          d,
                          h,
                          p,
                          m = o !== s ? "nextSibling" : "previousSibling",
                          g = t.parentNode,
                          v = a && t.nodeName.toLowerCase(),
                          y = !l && !a,
                          _ = !1;
                        if (g) {
                          if (o) {
                            for (; m; ) {
                              for (d = t; (d = d[m]); )
                                if (
                                  a
                                    ? d.nodeName.toLowerCase() === v
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              p = m = "only" === e && !p && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((p = [s ? g.firstChild : g.lastChild]), s && y)
                          ) {
                            for (
                              d = g,
                                f = d[M] || (d[M] = {}),
                                u = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                c = u[e] || [],
                                h = c[0] === F && c[1],
                                _ = h && c[2],
                                d = h && g.childNodes[h];
                              (d =
                                (++h && d && d[m]) || (_ = h = 0) || p.pop());

                            )
                              if (1 === d.nodeType && ++_ && d === t) {
                                u[e] = [F, h, _];
                                break;
                              }
                          } else if (
                            (y &&
                              ((d = t),
                              (f = d[M] || (d[M] = {})),
                              (u = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (c = u[e] || []),
                              (h = c[0] === F && c[1]),
                              (_ = h)),
                            !1 === _)
                          )
                            for (
                              ;
                              (d =
                                (++h && d && d[m]) || (_ = h = 0) || p.pop()) &&
                              ((a
                                ? d.nodeName.toLowerCase() !== v
                                : 1 !== d.nodeType) ||
                                !++_ ||
                                (y &&
                                  ((f = d[M] || (d[M] = {})),
                                  (u = f[d.uniqueID] || (f[d.uniqueID] = {})),
                                  (u[e] = [F, _])),
                                d !== t));

                            );
                          return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                        }
                      };
                },
                PSEUDO: function (e, n) {
                  var r,
                    o =
                      E.pseudos[e] ||
                      E.setFilters[e.toLowerCase()] ||
                      t.error("unsupported pseudo: " + e);
                  return o[M]
                    ? o(n)
                    : o.length > 1
                    ? ((r = [e, e, "", n]),
                      E.setFilters.hasOwnProperty(e.toLowerCase())
                        ? i(function (e, t) {
                            for (var i, r = o(e, n), s = r.length; s--; )
                              (i = Z(e, r[s])), (e[i] = !(t[i] = r[s]));
                          })
                        : function (e) {
                            return o(e, 0, r);
                          })
                    : o;
                },
              },
              pseudos: {
                not: i(function (e) {
                  var t = [],
                    n = [],
                    r = S(e.replace(se, "$1"));
                  return r[M]
                    ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: i(function (e) {
                  return function (n) {
                    return t(e, n).length > 0;
                  };
                }),
                contains: i(function (e) {
                  return (
                    (e = e.replace(_e, be)),
                    function (t) {
                      return (t.textContent || T(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: i(function (e) {
                  return (
                    fe.test(e || "") || t.error("unsupported lang: " + e),
                    (e = e.replace(_e, be).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = k
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === L;
                },
                focus: function (e) {
                  return (
                    e === N.activeElement &&
                    (!N.hasFocus || N.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !E.pseudos.empty(e);
                },
                header: function (e) {
                  return me.test(e.nodeName);
                },
                input: function (e) {
                  return pe.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: l(function () {
                  return [0];
                }),
                last: l(function (e, t) {
                  return [t - 1];
                }),
                eq: l(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: l(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: l(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: l(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                    e.push(i);
                  return e;
                }),
                gt: l(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }),
          (E.pseudos.nth = E.pseudos.eq);
        for (_ in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          E.pseudos[_] = (function (e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          })(_);
        for (_ in { submit: !0, reset: !0 })
          E.pseudos[_] = (function (e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          })(_);
        return (
          (u.prototype = E.filters = E.pseudos),
          (E.setFilters = new u()),
          (C = t.tokenize =
            function (e, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = U[e + " "];
              if (u) return n ? 0 : u.slice(0);
              for (a = e, l = [], c = E.preFilter; a; ) {
                (i && !(r = ae.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                  (i = !1),
                  (r = le.exec(a)) &&
                    ((i = r.shift()),
                    o.push({ value: i, type: r[0].replace(se, " ") }),
                    (a = a.slice(i.length)));
                for (s in E.filter)
                  !(r = de[s].exec(a)) ||
                    (c[s] && !(r = c[s](r))) ||
                    ((i = r.shift()),
                    o.push({ value: i, type: s, matches: r }),
                    (a = a.slice(i.length)));
                if (!i) break;
              }
              return n ? a.length : a ? t.error(e) : U(e, l).slice(0);
            }),
          (S = t.compile =
            function (e, t) {
              var n,
                i = [],
                r = [],
                o = V[e + " "];
              if (!o) {
                for (t || (t = C(e)), n = t.length; n--; )
                  (o = v(t[n])), o[M] ? i.push(o) : r.push(o);
                (o = V(e, y(r, i))), (o.selector = e);
              }
              return o;
            }),
          (A = t.select =
            function (e, t, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = "function" == typeof e && e,
                d = !i && C((e = u.selector || e));
              if (((n = n || []), 1 === d.length)) {
                if (
                  ((o = d[0] = d[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (s = o[0]).type &&
                    9 === t.nodeType &&
                    k &&
                    E.relative[o[1].type])
                ) {
                  if (
                    !(t = (E.find.ID(s.matches[0].replace(_e, be), t) || [])[0])
                  )
                    return n;
                  u && (t = t.parentNode),
                    (e = e.slice(o.shift().value.length));
                }
                for (
                  r = de.needsContext.test(e) ? 0 : o.length;
                  r-- && ((s = o[r]), !E.relative[(a = s.type)]);

                )
                  if (
                    (l = E.find[a]) &&
                    (i = l(
                      s.matches[0].replace(_e, be),
                      (ye.test(o[0].type) && c(t.parentNode)) || t
                    ))
                  ) {
                    if ((o.splice(r, 1), !(e = i.length && f(o))))
                      return Y.apply(n, i), n;
                    break;
                  }
              }
              return (
                (u || S(e, d))(
                  i,
                  t,
                  !k,
                  n,
                  !t || (ye.test(e) && c(t.parentNode)) || t
                ),
                n
              );
            }),
          (b.sortStable = M.split("").sort($).join("") === M),
          (b.detectDuplicates = !!O),
          I(),
          (b.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
          })),
          r(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            o("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (b.attributes &&
            r(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            o("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          r(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            o(ee, function (e, t, n) {
              var i;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
            }),
          t
        );
      })(n);
      (De.find = Oe),
        (De.expr = Oe.selectors),
        (De.expr[":"] = De.expr.pseudos),
        (De.uniqueSort = De.unique = Oe.uniqueSort),
        (De.text = Oe.getText),
        (De.isXMLDoc = Oe.isXML),
        (De.contains = Oe.contains),
        (De.escapeSelector = Oe.escape);
      var Ie = function (e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && De(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        Ne = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        Le = De.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      (De.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? De.find.matchesSelector(i, e)
              ? [i]
              : []
            : De.find.matches(
                e,
                De.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        De.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                De(e).filter(function () {
                  for (t = 0; t < i; t++)
                    if (De.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) De.find(e, r[t], n);
            return i > 1 ? De.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(u(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(u(this, e || [], !0));
          },
          is: function (e) {
            return !!u(
              this,
              "string" == typeof e && Le.test(e) ? De(e) : e || [],
              !1
            ).length;
          },
        });
      var Pe,
        He = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((De.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || Pe), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : He.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof De ? t[0] : t),
              De.merge(
                this,
                De.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : de,
                  !0
                )
              ),
              ke.test(i[1]) && De.isPlainObject(t))
            )
              for (i in t) Ce(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = de.getElementById(i[2])),
            r && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : Ce(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(De)
          : De.makeArray(e, this);
      }).prototype = De.fn),
        (Pe = De(de));
      var Re = /^(?:parents|prev(?:Until|All))/,
        je = { children: !0, contents: !0, next: !0, prev: !0 };
      De.fn.extend({
        has: function (e) {
          var t = De(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (De.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = "string" != typeof e && De(e);
          if (!Le.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && De.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? De.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? ve.call(De(e), this[0])
              : ve.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(De.uniqueSort(De.merge(this.get(), De(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        De.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return Ie(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return Ie(e, "parentNode", n);
            },
            next: function (e) {
              return f(e, "nextSibling");
            },
            prev: function (e) {
              return f(e, "previousSibling");
            },
            nextAll: function (e) {
              return Ie(e, "nextSibling");
            },
            prevAll: function (e) {
              return Ie(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return Ie(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return Ie(e, "previousSibling", n);
            },
            siblings: function (e) {
              return Ne((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return Ne(e.firstChild);
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (c(e, "template") && (e = e.content || e),
                  De.merge([], e.childNodes));
            },
          },
          function (e, t) {
            De.fn[e] = function (n, i) {
              var r = De.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = De.filter(i, r)),
                this.length > 1 &&
                  (je[e] || De.uniqueSort(r), Re.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var Me = /[^\x20\t\r\n\f]+/g;
      (De.Callbacks = function (e) {
        e = "string" == typeof e ? d(e) : De.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          s = [],
          l = -1,
          c = function () {
            for (r = r || e.once, i = t = !0; s.length; l = -1)
              for (n = s.shift(); ++l < o.length; )
                !1 === o[l].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((l = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !t && ((l = o.length - 1), s.push(n)),
                  (function t(n) {
                    De.each(n, function (n, i) {
                      Ce(i)
                        ? (e.unique && u.has(i)) || o.push(i)
                        : i && i.length && "string" !== a(i) && t(i);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                De.each(arguments, function (e, t) {
                  for (var n; (n = De.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= l && l--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? De.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r ||
                  ((n = n || []),
                  (n = [e, n.slice ? n.slice() : n]),
                  s.push(n),
                  t || c()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return u;
      }),
        De.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  De.Callbacks("memory"),
                  De.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  De.Callbacks("once memory"),
                  De.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  De.Callbacks("once memory"),
                  De.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return De.Deferred(function (n) {
                    De.each(t, function (t, i) {
                      var r = Ce(e[i[4]]) && e[i[4]];
                      o[i[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && Ce(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, r) {
                  function o(e, t, i, r) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < s)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              Ce(c)
                                ? r
                                  ? c.call(n, o(s, t, h, r), o(s, t, p, r))
                                  : (s++,
                                    c.call(
                                      n,
                                      o(s, t, h, r),
                                      o(s, t, p, r),
                                      o(s, t, h, t.notifyWith)
                                    ))
                                : (i !== h && ((a = void 0), (l = [n])),
                                  (r || t.resolveWith)(a, l));
                          }
                        },
                        u = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                De.Deferred.exceptionHook &&
                                  De.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= s &&
                                    (i !== p && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (De.Deferred.getStackHook &&
                            (u.stackTrace = De.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  var s = 0;
                  return De.Deferred(function (n) {
                    t[0][3].add(o(0, n, Ce(r) ? r : h, n.notifyWith)),
                      t[1][3].add(o(0, n, Ce(e) ? e : h)),
                      t[2][3].add(o(0, n, Ce(i) ? i : p));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? De.extend(e, r) : r;
                },
              },
              o = {};
            return (
              De.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              r.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = pe.call(arguments),
              o = De.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? pe.call(arguments) : n),
                    --t || o.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (m(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || Ce(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) m(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var We = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (De.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          We.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (De.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var Fe = De.Deferred();
      (De.fn.ready = function (e) {
        return (
          Fe.then(e).catch(function (e) {
            De.readyException(e);
          }),
          this
        );
      }),
        De.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --De.readyWait : De.isReady) ||
              ((De.isReady = !0),
              (!0 !== e && --De.readyWait > 0) || Fe.resolveWith(de, [De]));
          },
        }),
        (De.ready.then = Fe.then),
        "complete" === de.readyState ||
        ("loading" !== de.readyState && !de.documentElement.doScroll)
          ? n.setTimeout(De.ready)
          : (de.addEventListener("DOMContentLoaded", g),
            n.addEventListener("load", g));
      var qe = function (e, t, n, i, r, o, s) {
          var l = 0,
            c = e.length,
            u = null == n;
          if ("object" === a(n)) {
            r = !0;
            for (l in n) qe(e, t, l, n[l], !0, o, s);
          } else if (
            void 0 !== i &&
            ((r = !0),
            Ce(i) || (s = !0),
            u &&
              (s
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(De(e), n);
                  }))),
            t)
          )
            for (; l < c; l++) t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
          return r ? e : u ? t.call(e) : c ? t(e[0], n) : o;
        },
        Be = /^-ms-/,
        Ue = /-([a-z])/g,
        Ve = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
      (_.uid = 1),
        (_.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Ve(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              r = this.cache(e);
            if ("string" == typeof t) r[y(t)] = n;
            else for (i in t) r[y(i)] = t[i];
            return r;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                Array.isArray(t)
                  ? (t = t.map(y))
                  : ((t = y(t)), (t = t in i ? [t] : t.match(Me) || [])),
                  (n = t.length);
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || De.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !De.isEmptyObject(t);
          },
        });
      var Ge = new _(),
        $e = new _(),
        Ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /[A-Z]/g;
      De.extend({
        hasData: function (e) {
          return $e.hasData(e) || Ge.hasData(e);
        },
        data: function (e, t, n) {
          return $e.access(e, t, n);
        },
        removeData: function (e, t) {
          $e.remove(e, t);
        },
        _data: function (e, t, n) {
          return Ge.access(e, t, n);
        },
        _removeData: function (e, t) {
          Ge.remove(e, t);
        },
      }),
        De.fn.extend({
          data: function (e, t) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = $e.get(o)),
                1 === o.nodeType && !Ge.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    ((i = s[n].name),
                    0 === i.indexOf("data-") &&
                      ((i = y(i.slice(5))), E(o, i, r[i])));
                Ge.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function () {
                  $e.set(this, e);
                })
              : qe(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t) {
                      if (void 0 !== (n = $e.get(o, e))) return n;
                      if (void 0 !== (n = E(o, e))) return n;
                    } else
                      this.each(function () {
                        $e.set(this, e, t);
                      });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              $e.remove(this, e);
            });
          },
        }),
        De.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = Ge.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = Ge.access(e, t, De.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = De.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = De._queueHooks(e, t),
              s = function () {
                De.dequeue(e, t);
              };
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(e, s, o)),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Ge.get(e, n) ||
              Ge.access(e, n, {
                empty: De.Callbacks("once memory").add(function () {
                  Ge.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        De.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? De.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = De.queue(this, e, t);
                    De._queueHooks(this, e),
                      "fx" === e &&
                        "inprogress" !== n[0] &&
                        De.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              De.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              r = De.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = Ge.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(t);
          },
        });
      var Qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Xe = new RegExp("^(?:([+-])=|)(" + Qe + ")([a-z%]*)$", "i"),
        Ye = ["Top", "Right", "Bottom", "Left"],
        Je = de.documentElement,
        Ze = function (e) {
          return De.contains(e.ownerDocument, e);
        },
        et = { composed: !0 };
      Je.getRootNode &&
        (Ze = function (e) {
          return (
            De.contains(e.ownerDocument, e) ||
            e.getRootNode(et) === e.ownerDocument
          );
        });
      var tt = function (e, t) {
          return (
            (e = t || e),
            "none" === e.style.display ||
              ("" === e.style.display &&
                Ze(e) &&
                "none" === De.css(e, "display"))
          );
        },
        nt = function (e, t, n, i) {
          var r,
            o,
            s = {};
          for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
          r = n.apply(e, i || []);
          for (o in t) e.style[o] = s[o];
          return r;
        },
        it = {};
      De.fn.extend({
        show: function () {
          return C(this, !0);
        },
        hide: function () {
          return C(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                tt(this) ? De(this).show() : De(this).hide();
              });
        },
      });
      var rt = /^(?:checkbox|radio)$/i,
        ot = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        st = /^$|^module$|\/(?:java|ecma)script/i,
        at = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      (at.optgroup = at.option),
        (at.tbody = at.tfoot = at.colgroup = at.caption = at.thead),
        (at.th = at.td);
      var lt = /<|&#?\w+;/;
      !(function () {
        var e = de.createDocumentFragment(),
          t = e.appendChild(de.createElement("div")),
          n = de.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          t.appendChild(n),
          (we.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (we.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
      })();
      var ct = /^key/,
        ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ft = /^([^.]*)(?:\.(.+)|)/;
      (De.event = {
        global: {},
        add: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            f,
            d,
            h,
            p,
            m,
            g = Ge.get(e);
          if (g)
            for (
              n.handler && ((o = n), (n = o.handler), (r = o.selector)),
                r && De.find.matchesSelector(Je, r),
                n.guid || (n.guid = De.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) ||
                  (s = g.handle =
                    function (t) {
                      return void 0 !== De && De.event.triggered !== t.type
                        ? De.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                t = (t || "").match(Me) || [""],
                c = t.length;
              c--;

            )
              (a = ft.exec(t[c]) || []),
                (h = m = a[1]),
                (p = (a[2] || "").split(".").sort()),
                h &&
                  ((f = De.event.special[h] || {}),
                  (h = (r ? f.delegateType : f.bindType) || h),
                  (f = De.event.special[h] || {}),
                  (u = De.extend(
                    {
                      type: h,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && De.expr.match.needsContext.test(r),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (d = l[h]) ||
                    ((d = l[h] = []),
                    (d.delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, i, p, s)) ||
                      (e.addEventListener && e.addEventListener(h, s))),
                  f.add &&
                    (f.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (De.event.global[h] = !0));
        },
        remove: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            f,
            d,
            h,
            p,
            m,
            g = Ge.hasData(e) && Ge.get(e);
          if (g && (l = g.events)) {
            for (t = (t || "").match(Me) || [""], c = t.length; c--; )
              if (
                ((a = ft.exec(t[c]) || []),
                (h = m = a[1]),
                (p = (a[2] || "").split(".").sort()),
                h)
              ) {
                for (
                  f = De.event.special[h] || {},
                    h = (i ? f.delegateType : f.bindType) || h,
                    d = l[h] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = d.length;
                  o--;

                )
                  (u = d[o]),
                    (!r && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (d.splice(o, 1),
                      u.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, u));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, g.handle)) ||
                    De.removeEvent(e, h, g.handle),
                  delete l[h]);
              } else for (h in l) De.event.remove(e, h + t[c], n, i, !0);
            De.isEmptyObject(l) && Ge.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a = De.event.fix(e),
            l = new Array(arguments.length),
            c = (Ge.get(this, "events") || {})[a.type] || [],
            u = De.event.special[a.type] || {};
          for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, a))
          ) {
            for (
              s = De.event.handlers.call(this, a, c), t = 0;
              (r = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace &&
                  !1 !== o.namespace &&
                  !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (i = (
                      (De.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, l)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  (i = t[n]),
                    (r = i.selector + " "),
                    void 0 === s[r] &&
                      (s[r] = i.needsContext
                        ? De(r, this).index(c) > -1
                        : De.find(r, this, null, [c]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(De.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: Ce(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[De.expando] ? e : new De.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                rt.test(t.type) && t.click && c(t, "input") && k(t, "click", x),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                rt.test(t.type) && t.click && c(t, "input") && k(t, "click"), !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (rt.test(t.type) &&
                  t.click &&
                  c(t, "input") &&
                  Ge.get(t, "click")) ||
                c(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (De.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (De.Event = function (e, t) {
          if (!(this instanceof De.Event)) return new De.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? x
                  : O),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && De.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[De.expando] = !0);
        }),
        (De.Event.prototype = {
          constructor: De.Event,
          isDefaultPrevented: O,
          isPropagationStopped: O,
          isImmediatePropagationStopped: O,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = x),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = x),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = x),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        De.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && ct.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && ut.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          De.event.addProp
        ),
        De.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          De.event.special[e] = {
            setup: function () {
              return k(this, e, I), !1;
            },
            trigger: function () {
              return k(this, e), !0;
            },
            delegateType: t,
          };
        }),
        De.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            De.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = this,
                  r = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (r && (r === i || De.contains(i, r))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        De.fn.extend({
          on: function (e, t, n, i) {
            return L(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return L(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                De(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = O),
              this.each(function () {
                De.event.remove(this, e, n, t);
              })
            );
          },
        });
      var dt =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ht = /<script|<style|<link/i,
        pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      De.extend({
        htmlPrefilter: function (e) {
          return e.replace(dt, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var i,
            r,
            o,
            s,
            a = e.cloneNode(!0),
            l = Ze(e);
          if (
            !(
              we.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              De.isXMLDoc(e)
            )
          )
            for (s = S(a), o = S(e), i = 0, r = o.length; i < r; i++)
              M(o[i], s[i]);
          if (t)
            if (n)
              for (
                o = o || S(e), s = s || S(a), i = 0, r = o.length;
                i < r;
                i++
              )
                j(o[i], s[i]);
            else j(e, a);
          return (
            (s = S(a, "script")), s.length > 0 && A(s, !l && S(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, r = De.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Ve(n)) {
              if ((t = n[Ge.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i]
                      ? De.event.remove(n, i)
                      : De.removeEvent(n, i, t.handle);
                n[Ge.expando] = void 0;
              }
              n[$e.expando] && (n[$e.expando] = void 0);
            }
        },
      }),
        De.fn.extend({
          detach: function (e) {
            return F(this, e, !0);
          },
          remove: function (e) {
            return F(this, e);
          },
          text: function (e) {
            return qe(
              this,
              function (e) {
                return void 0 === e
                  ? De.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return W(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                P(this, e).appendChild(e);
              }
            });
          },
          prepend: function () {
            return W(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = P(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return W(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return W(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (De.cleanData(S(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return De.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return qe(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !ht.test(e) &&
                  !at[(ot.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = De.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      (t = this[n] || {}),
                        1 === t.nodeType &&
                          (De.cleanData(S(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return W(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                De.inArray(this, e) < 0 &&
                  (De.cleanData(S(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        De.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            De.fn[e] = function (e) {
              for (
                var n, i = [], r = De(e), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  De(r[s])[t](n),
                  ge.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var gt = new RegExp("^(" + Qe + ")(?!px)[a-z%]+$", "i"),
        vt = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        yt = new RegExp(Ye.join("|"), "i");
      !(function () {
        function e() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Je.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            (i = "1%" !== e.top),
              (a = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (s = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (o = 12 === t(c.offsetWidth / 3)),
              Je.removeChild(l),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
          o,
          s,
          a,
          l = de.createElement("div"),
          c = de.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (we.clearCloneStyle = "content-box" === c.style.backgroundClip),
          De.extend(we, {
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), a;
            },
            scrollboxSize: function () {
              return e(), o;
            },
          }));
      })();
      var _t = ["Webkit", "Moz", "ms"],
        bt = de.createElement("div").style,
        Et = {},
        Tt = /^(none|table(?!-c[ea]).+)/,
        wt = /^--/,
        Ct = { position: "absolute", visibility: "hidden", display: "block" },
        St = { letterSpacing: "0", fontWeight: "400" };
      De.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = q(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              s,
              a = y(t),
              l = wt.test(t),
              c = e.style;
            if (
              (l || (t = V(a)),
              (s = De.cssHooks[t] || De.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : c[t];
            (o = typeof n),
              "string" === o &&
                (r = Xe.exec(n)) &&
                r[1] &&
                ((n = T(e, t, r)), (o = "number")),
              null != n &&
                n === n &&
                ("number" !== o ||
                  l ||
                  (n += (r && r[3]) || (De.cssNumber[a] ? "" : "px")),
                we.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var r,
            o,
            s,
            a = y(t);
          return (
            wt.test(t) || (t = V(a)),
            (s = De.cssHooks[t] || De.cssHooks[a]),
            s && "get" in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = q(e, t, i)),
            "normal" === r && t in St && (r = St[t]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        De.each(["height", "width"], function (e, t) {
          De.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Tt.test(De.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? K(e, t, i)
                  : nt(e, Ct, function () {
                      return K(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var r,
                o = vt(e),
                s = !we.scrollboxSize() && "absolute" === o.position,
                a = s || i,
                l = a && "border-box" === De.css(e, "boxSizing", !1, o),
                c = i ? $(e, t, i, l, o) : 0;
              return (
                l &&
                  s &&
                  (c -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      $(e, t, "border", !1, o) -
                      0.5
                  )),
                c &&
                  (r = Xe.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[t] = n), (n = De.css(e, t))),
                G(e, n, c)
              );
            },
          };
        }),
        (De.cssHooks.marginLeft = B(we.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(q(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  nt(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        De.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (De.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + Ye[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== e && (De.cssHooks[e + t].set = G);
        }),
        De.fn.extend({
          css: function (e, t) {
            return qe(
              this,
              function (e, t, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = vt(e), r = t.length; s < r; s++)
                    o[t[s]] = De.css(e, t[s], !1, i);
                  return o;
                }
                return void 0 !== n ? De.style(e, t, n) : De.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (De.Tween = z),
        (z.prototype = {
          constructor: z,
          init: function (e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || De.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (De.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = z.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    De.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : z.propHooks._default.set(this),
              this
            );
          },
        }),
        (z.prototype.init.prototype = z.prototype),
        (z.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : ((t = De.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
            },
            set: function (e) {
              De.fx.step[e.prop]
                ? De.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!De.cssHooks[e.prop] && null == e.elem.style[V(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : De.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (z.propHooks.scrollTop = z.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (De.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (De.fx = z.prototype.init),
        (De.fx.step = {});
      var At,
        Dt,
        xt = /^(?:toggle|show|hide)$/,
        Ot = /queueHooks$/;
      (De.Animation = De.extend(te, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return T(n.elem, e, Xe.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          Ce(e) ? ((t = e), (e = ["*"])) : (e = e.match(Me));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (te.tweeners[n] = te.tweeners[n] || []),
              te.tweeners[n].unshift(t);
        },
        prefilters: [Z],
        prefilter: function (e, t) {
          t ? te.prefilters.unshift(e) : te.prefilters.push(e);
        },
      })),
        (De.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? De.extend({}, e)
              : {
                  complete: n || (!n && t) || (Ce(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !Ce(t) && t),
                };
          return (
            De.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in De.fx.speeds
                  ? (i.duration = De.fx.speeds[i.duration])
                  : (i.duration = De.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              Ce(i.old) && i.old.call(this),
                i.queue && De.dequeue(this, i.queue);
            }),
            i
          );
        }),
        De.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(tt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var r = De.isEmptyObject(e),
              o = De.speed(t, n, i),
              s = function () {
                var t = te(this, De.extend({}, e), o);
                (r || Ge.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = De.timers,
                  s = Ge.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && Ot.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || De.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = Ge.get(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = De.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    De.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        De.each(["toggle", "show", "hide"], function (e, t) {
          var n = De.fn[t];
          De.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(Y(t, !0), e, i, r);
          };
        }),
        De.each(
          {
            slideDown: Y("show"),
            slideUp: Y("hide"),
            slideToggle: Y("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            De.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (De.timers = []),
        (De.fx.tick = function () {
          var e,
            t = 0,
            n = De.timers;
          for (At = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || De.fx.stop(), (At = void 0);
        }),
        (De.fx.timer = function (e) {
          De.timers.push(e), De.fx.start();
        }),
        (De.fx.interval = 13),
        (De.fx.start = function () {
          Dt || ((Dt = !0), Q());
        }),
        (De.fx.stop = function () {
          Dt = null;
        }),
        (De.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (De.fn.delay = function (e, t) {
          return (
            (e = De.fx ? De.fx.speeds[e] || e : e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e = de.createElement("input"),
            t = de.createElement("select"),
            n = t.appendChild(de.createElement("option"));
          (e.type = "checkbox"),
            (we.checkOn = "" !== e.value),
            (we.optSelected = n.selected),
            (e = de.createElement("input")),
            (e.value = "t"),
            (e.type = "radio"),
            (we.radioValue = "t" === e.value);
        })();
      var It,
        Nt = De.expr.attrHandle;
      De.fn.extend({
        attr: function (e, t) {
          return qe(this, De.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            De.removeAttr(this, e);
          });
        },
      }),
        De.extend({
          attr: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? De.prop(e, t, n)
                : ((1 === o && De.isXMLDoc(e)) ||
                    (r =
                      De.attrHooks[t.toLowerCase()] ||
                      (De.expr.match.bool.test(t) ? It : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void De.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : ((i = De.find.attr(e, t)), null == i ? void 0 : i));
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!we.radioValue && "radio" === t && c(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              r = t && t.match(Me);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          },
        }),
        (It = {
          set: function (e, t, n) {
            return !1 === t ? De.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        De.each(De.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = Nt[t] || De.find.attr;
          Nt[t] = function (e, t, i) {
            var r,
              o,
              s = t.toLowerCase();
            return (
              i ||
                ((o = Nt[s]),
                (Nt[s] = r),
                (r = null != n(e, t, i) ? s : null),
                (Nt[s] = o)),
              r
            );
          };
        });
      var Lt = /^(?:input|select|textarea|button)$/i,
        kt = /^(?:a|area)$/i;
      De.fn.extend({
        prop: function (e, t) {
          return qe(this, De.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[De.propFix[e] || e];
          });
        },
      }),
        De.extend({
          prop: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && De.isXMLDoc(e)) ||
                  ((t = De.propFix[t] || t), (r = De.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = De.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : Lt.test(e.nodeName) || (kt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        we.optSelected ||
          (De.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        De.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            De.propFix[this.toLowerCase()] = this;
          }
        ),
        De.fn.extend({
          addClass: function (e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (Ce(e))
              return this.each(function (t) {
                De(this).addClass(e.call(this, t, ie(this)));
              });
            if (((t = re(e)), t.length))
              for (; (n = this[l++]); )
                if (
                  ((r = ie(n)), (i = 1 === n.nodeType && " " + ne(r) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  (a = ne(i)), r !== a && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (Ce(e))
              return this.each(function (t) {
                De(this).removeClass(e.call(this, t, ie(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((t = re(e)), t.length))
              for (; (n = this[l++]); )
                if (
                  ((r = ie(n)), (i = 1 === n.nodeType && " " + ne(r) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; i.indexOf(" " + o + " ") > -1; )
                      i = i.replace(" " + o + " ", " ");
                  (a = ne(i)), r !== a && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : Ce(e)
              ? this.each(function (n) {
                  De(this).toggleClass(e.call(this, n, ie(this), t), t);
                })
              : this.each(function () {
                  var t, r, o, s;
                  if (i)
                    for (r = 0, o = De(this), s = re(e); (t = s[r++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = ie(this)),
                      t && Ge.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : Ge.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + ne(ie(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Pt = /\r/g;
      De.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            r = this[0];
          {
            if (arguments.length)
              return (
                (i = Ce(e)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    ((r = i ? e.call(this, n, De(this).val()) : e),
                    null == r
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = De.map(r, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      De.valHooks[this.type] ||
                      De.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, r, "value")) ||
                      (this.value = r));
                })
              );
            if (r)
              return (t =
                De.valHooks[r.type] || De.valHooks[r.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(r, "value"))
                ? n
                : ((n = r.value),
                  "string" == typeof n
                    ? n.replace(Pt, "")
                    : null == n
                    ? ""
                    : n);
          }
        },
      }),
        De.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = De.find.attr(e, "value");
                return null != t ? t : ne(De.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]),
                    (n.selected || i === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !c(n.parentNode, "optgroup")))
                  ) {
                    if (((t = De(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, r = e.options, o = De.makeArray(t), s = r.length;
                  s--;

                )
                  (i = r[s]),
                    (i.selected =
                      De.inArray(De.valHooks.option.get(i), o) > -1) &&
                      (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        De.each(["radio", "checkbox"], function () {
          (De.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = De.inArray(De(e).val(), t) > -1);
            },
          }),
            we.checkOn ||
              (De.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (we.focusin = "onfocusin" in n);
      var Ht = /^(?:focusinfocus|focusoutblur)$/,
        Rt = function (e) {
          e.stopPropagation();
        };
      De.extend(De.event, {
        trigger: function (e, t, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            f,
            d,
            h = [i || de],
            p = be.call(e, "type") ? e.type : e,
            m = be.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = d = a = i = i || de),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Ht.test(p + De.event.triggered) &&
              (p.indexOf(".") > -1 &&
                ((m = p.split(".")), (p = m.shift()), m.sort()),
              (c = p.indexOf(":") < 0 && "on" + p),
              (e = e[De.expando]
                ? e
                : new De.Event(p, "object" == typeof e && e)),
              (e.isTrigger = r ? 2 : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : De.makeArray(t, [e])),
              (f = De.event.special[p] || {}),
              r || !f.trigger || !1 !== f.trigger.apply(i, t)))
          ) {
            if (!r && !f.noBubble && !Se(i)) {
              for (
                l = f.delegateType || p, Ht.test(l + p) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (i.ownerDocument || de) &&
                h.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
              (d = s),
                (e.type = o > 1 ? l : f.bindType || p),
                (u =
                  (Ge.get(s, "events") || {})[e.type] && Ge.get(s, "handle")),
                u && u.apply(s, t),
                (u = c && s[c]) &&
                  u.apply &&
                  Ve(s) &&
                  ((e.result = u.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = p),
              r ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !Ve(i) ||
                (c &&
                  Ce(i[p]) &&
                  !Se(i) &&
                  ((a = i[c]),
                  a && (i[c] = null),
                  (De.event.triggered = p),
                  e.isPropagationStopped() && d.addEventListener(p, Rt),
                  i[p](),
                  e.isPropagationStopped() && d.removeEventListener(p, Rt),
                  (De.event.triggered = void 0),
                  a && (i[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = De.extend(new De.Event(), n, { type: e, isSimulated: !0 });
          De.event.trigger(i, null, t);
        },
      }),
        De.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              De.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return De.event.trigger(e, t, n, !0);
          },
        }),
        we.focusin ||
          De.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              De.event.simulate(t, e.target, De.event.fix(e));
            };
            De.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  r = Ge.access(i, t);
                r || i.addEventListener(e, n, !0),
                  Ge.access(i, t, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  r = Ge.access(i, t) - 1;
                r
                  ? Ge.access(i, t, r)
                  : (i.removeEventListener(e, n, !0), Ge.remove(i, t));
              },
            };
          });
      var jt = n.location,
        Mt = Date.now(),
        Wt = /\?/;
      De.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            De.error("Invalid XML: " + e),
          t
        );
      };
      var Ft = /\[\]$/,
        qt = /\r?\n/g,
        Bt = /^(?:submit|button|image|reset|file)$/i,
        Ut = /^(?:input|select|textarea|keygen)/i;
      (De.param = function (e, t) {
        var n,
          i = [],
          r = function (e, t) {
            var n = Ce(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !De.isPlainObject(e)))
          De.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) oe(n, e[n], t, r);
        return i.join("&");
      }),
        De.fn.extend({
          serialize: function () {
            return De.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = De.prop(this, "elements");
              return e ? De.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !De(this).is(":disabled") &&
                  Ut.test(this.nodeName) &&
                  !Bt.test(e) &&
                  (this.checked || !rt.test(e))
                );
              })
              .map(function (e, t) {
                var n = De(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? De.map(n, function (e) {
                      return { name: t.name, value: e.replace(qt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(qt, "\r\n") };
              })
              .get();
          },
        });
      var Vt = /%20/g,
        Gt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qt = /^(?:GET|HEAD)$/,
        Xt = /^\/\//,
        Yt = {},
        Jt = {},
        Zt = "*/".concat("*"),
        en = de.createElement("a");
      (en.href = jt.href),
        De.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: zt.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Zt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": De.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? le(le(e, De.ajaxSettings), t) : le(De.ajaxSettings, e);
          },
          ajaxPrefilter: se(Yt),
          ajaxTransport: se(Jt),
          ajax: function (e, t) {
            function i(e, t, i, a) {
              var c,
                d,
                h,
                b,
                E,
                T = t;
              u ||
                ((u = !0),
                l && n.clearTimeout(l),
                (r = void 0),
                (s = a || ""),
                (w.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                i && (b = ce(p, w, i)),
                (b = ue(p, b, w, c)),
                c
                  ? (p.ifModified &&
                      ((E = w.getResponseHeader("Last-Modified")),
                      E && (De.lastModified[o] = E),
                      (E = w.getResponseHeader("etag")) && (De.etag[o] = E)),
                    204 === e || "HEAD" === p.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = b.state), (d = b.data), (h = b.error), (c = !h)))
                  : ((h = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (w.status = e),
                (w.statusText = (t || T) + ""),
                c ? v.resolveWith(m, [d, T, w]) : v.rejectWith(m, [w, T, h]),
                w.statusCode(_),
                (_ = void 0),
                f &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? d : h]),
                y.fireWith(m, [w, T]),
                f &&
                  (g.trigger("ajaxComplete", [w, p]),
                  --De.active || De.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              o,
              s,
              a,
              l,
              c,
              u,
              f,
              d,
              h,
              p = De.ajaxSetup({}, t),
              m = p.context || p,
              g = p.context && (m.nodeType || m.jquery) ? De(m) : De.event,
              v = De.Deferred(),
              y = De.Callbacks("once memory"),
              _ = p.statusCode || {},
              b = {},
              E = {},
              T = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!a)
                      for (a = {}; (t = Kt.exec(s)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? s : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u &&
                      ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e),
                      (b[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) w.always(e[w.status]);
                    else for (t in e) _[t] = [_[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), i(0, t), this;
                },
              };
            if (
              (v.promise(w),
              (p.url = ((e || p.url || jt.href) + "").replace(
                Xt,
                jt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(Me) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              c = de.createElement("a");
              try {
                (c.href = p.url),
                  (c.href = c.href),
                  (p.crossDomain =
                    en.protocol + "//" + en.host != c.protocol + "//" + c.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = De.param(p.data, p.traditional)),
              ae(Yt, p, t, w),
              u)
            )
              return w;
            (f = De.event && p.global),
              f && 0 == De.active++ && De.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Qt.test(p.type)),
              (o = p.url.replace(Gt, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(Vt, "+"))
                : ((h = p.url.slice(o.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((o += (Wt.test(o) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((o = o.replace($t, "$1")),
                    (h = (Wt.test(o) ? "&" : "?") + "_=" + Mt++ + h)),
                  (p.url = o + h)),
              p.ifModified &&
                (De.lastModified[o] &&
                  w.setRequestHeader("If-Modified-Since", De.lastModified[o]),
                De.etag[o] && w.setRequestHeader("If-None-Match", De.etag[o])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                t.contentType) &&
                w.setRequestHeader("Content-Type", p.contentType),
              w.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + Zt + "; q=0.01" : "")
                  : p.accepts["*"]
              );
            for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, w, p) || u))
              return w.abort();
            if (
              ((T = "abort"),
              y.add(p.complete),
              w.done(p.success),
              w.fail(p.error),
              (r = ae(Jt, p, t, w)))
            ) {
              if (((w.readyState = 1), f && g.trigger("ajaxSend", [w, p]), u))
                return w;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function () {
                  w.abort("timeout");
                }, p.timeout));
              try {
                (u = !1), r.send(b, i);
              } catch (e) {
                if (u) throw e;
                i(-1, e);
              }
            } else i(-1, "No Transport");
            return w;
          },
          getJSON: function (e, t, n) {
            return De.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return De.get(e, void 0, t, "script");
          },
        }),
        De.each(["get", "post"], function (e, t) {
          De[t] = function (e, n, i, r) {
            return (
              Ce(n) && ((r = r || i), (i = n), (n = void 0)),
              De.ajax(
                De.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  De.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (De._evalUrl = function (e, t) {
          return De.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              De.globalEval(e, t);
            },
          });
        }),
        De.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (Ce(e) && (e = e.call(this[0])),
                (t = De(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return Ce(e)
              ? this.each(function (t) {
                  De(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = De(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = Ce(e);
            return this.each(function (n) {
              De(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  De(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (De.expr.pseudos.hidden = function (e) {
          return !De.expr.pseudos.visible(e);
        }),
        (De.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (De.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var tn = { 0: 200, 1223: 204 },
        nn = De.ajaxSettings.xhr();
      (we.cors = !!nn && "withCredentials" in nn),
        (we.ajax = nn = !!nn),
        De.ajaxTransport(function (e) {
          var t, i;
          if (we.cors || (nn && !e.crossDomain))
            return {
              send: function (r, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            tn[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        De.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        De.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return De.globalEval(e), e;
            },
          },
        }),
        De.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        De.ajaxTransport("script", function (e) {
          if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
              send: function (i, r) {
                (t = De("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && r("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  de.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var rn = [],
        on = /(=)\?(?=&|$)|\?\?/;
      De.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = rn.pop() || De.expando + "_" + Mt++;
          return (this[e] = !0), e;
        },
      }),
        De.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (on.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  on.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback =
                Ce(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(on, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (Wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return s || De.error(r + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === o ? De(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), rn.push(r)),
                  s && Ce(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (we.createHTMLDocument = (function () {
          var e = de.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            2 === e.childNodes.length
          );
        })()),
        (De.parseHTML = function (e, t, n) {
          if ("string" != typeof e) return [];
          "boolean" == typeof t && ((n = t), (t = !1));
          var i, r, o;
          return (
            t ||
              (we.createHTMLDocument
                ? ((t = de.implementation.createHTMLDocument("")),
                  (i = t.createElement("base")),
                  (i.href = de.location.href),
                  t.head.appendChild(i))
                : (t = de)),
            (r = ke.exec(e)),
            (o = !n && []),
            r
              ? [t.createElement(r[1])]
              : ((r = D([e], t, o)),
                o && o.length && De(o).remove(),
                De.merge([], r.childNodes))
          );
        }),
        (De.fn.load = function (e, t, n) {
          var i,
            r,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = ne(e.slice(a))), (e = e.slice(0, a))),
            Ce(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            s.length > 0 &&
              De.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(i ? De("<div>").append(De.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        De.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            De.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (De.expr.pseudos.animated = function (e) {
          return De.grep(De.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (De.offset = {
          setOffset: function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u = De.css(e, "position"),
              f = De(e),
              d = {};
            "static" === u && (e.style.position = "relative"),
              (a = f.offset()),
              (o = De.css(e, "top")),
              (l = De.css(e, "left")),
              (c =
                ("absolute" === u || "fixed" === u) &&
                (o + l).indexOf("auto") > -1),
              c
                ? ((i = f.position()), (s = i.top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              Ce(t) && (t = t.call(e, n, De.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + r),
              "using" in t ? t.using.call(e, d) : f.css(d);
          },
        }),
        De.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    De.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            if (i)
              return i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === De.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === De.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  ((r = De(e).offset()),
                  (r.top += De.css(e, "borderTopWidth", !0)),
                  (r.left += De.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - De.css(i, "marginTop", !0),
                left: t.left - r.left - De.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === De.css(e, "position");

              )
                e = e.offsetParent;
              return e || Je;
            });
          },
        }),
        De.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            De.fn[e] = function (i) {
              return qe(
                this,
                function (e, i, r) {
                  var o;
                  if (
                    (Se(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === r)
                  )
                    return o ? o[t] : e[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        De.each(["top", "left"], function (e, t) {
          De.cssHooks[t] = B(we.pixelPosition, function (e, n) {
            if (n)
              return (n = q(e, t)), gt.test(n) ? De(e).position()[t] + "px" : n;
          });
        }),
        De.each({ Height: "height", Width: "width" }, function (e, t) {
          De.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              De.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
                return qe(
                  this,
                  function (t, n, r) {
                    var o;
                    return Se(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === r
                      ? De.css(t, n, a)
                      : De.style(t, n, r, a);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        De.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            De.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        De.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        De.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (De.proxy = function (e, t) {
          var n, i, r;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), Ce(e)))
            return (
              (i = pe.call(arguments, 2)),
              (r = function () {
                return e.apply(t || this, i.concat(pe.call(arguments)));
              }),
              (r.guid = e.guid = e.guid || De.guid++),
              r
            );
        }),
        (De.holdReady = function (e) {
          e ? De.readyWait++ : De.ready(!0);
        }),
        (De.isArray = Array.isArray),
        (De.parseJSON = JSON.parse),
        (De.nodeName = c),
        (De.isFunction = Ce),
        (De.isWindow = Se),
        (De.camelCase = y),
        (De.type = a),
        (De.now = Date.now),
        (De.isNumeric = function (e) {
          var t = De.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (i = []),
        void 0 !==
          (r = function () {
            return De;
          }.apply(t, i)) && (e.exports = r);
      var sn = n.jQuery,
        an = n.$;
      return (
        (De.noConflict = function (e) {
          return (
            n.$ === De && (n.$ = an),
            e && n.jQuery === De && (n.jQuery = sn),
            De
          );
        }),
        o || (n.jQuery = n.$ = De),
        De
      );
    });
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      function (e) {
        function n(e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
        function i(e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, de));
          };
        }
        function r(e) {
          var t = {};
          return e && "[object Function]" === t.toString.call(e);
        }
        function o(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView,
            i = n.getComputedStyle(e, null);
          return t ? i[t] : i;
        }
        function s(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function a(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = o(e),
            n = t.overflow,
            i = t.overflowX;
          return /(auto|scroll|overlay)/.test(n + t.overflowY + i)
            ? e
            : a(s(e));
        }
        function l(e) {
          return e && e.referenceNode ? e.referenceNode : e;
        }
        function c(e) {
          return 11 === e ? me : 10 === e ? ge : me || ge;
        }
        function u(e) {
          if (!e) return document.documentElement;
          for (
            var t = c(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === o(n, "position")
              ? u(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function f(e) {
          var t = e.nodeName;
          return "BODY" !== t && ("HTML" === t || u(e.firstElementChild) === e);
        }
        function d(e) {
          return null !== e.parentNode ? d(e.parentNode) : e;
        }
        function h(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var s = o.commonAncestorContainer;
          if ((e !== s && t !== s) || i.contains(r)) return f(s) ? s : u(s);
          var a = d(e);
          return a.host ? h(a.host, t) : h(e, d(t).host);
        }
        function p(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[n];
          }
          return e[n];
        }
        function m(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = p(t, "top"),
            r = p(t, "left"),
            o = n ? -1 : 1;
          return (
            (e.top += i * o),
            (e.bottom += i * o),
            (e.left += r * o),
            (e.right += r * o),
            e
          );
        }
        function g(e, t) {
          var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"]) +
            parseFloat(e["border" + i + "Width"])
          );
        }
        function v(e, t, n, i) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            c(10)
              ? parseInt(n["offset" + e]) +
                  parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
              : 0
          );
        }
        function y(e) {
          var t = e.body,
            n = e.documentElement,
            i = c(10) && getComputedStyle(n);
          return { height: v("Height", t, n, i), width: v("Width", t, n, i) };
        }
        function _(e) {
          return be({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function b(e) {
          var t = {};
          try {
            if (c(10)) {
              t = e.getBoundingClientRect();
              var n = p(e, "top"),
                i = p(e, "left");
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var r = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            s = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
            a = s.width || e.clientWidth || r.width,
            l = s.height || e.clientHeight || r.height,
            u = e.offsetWidth - a,
            f = e.offsetHeight - l;
          if (u || f) {
            var d = o(e);
            (u -= g(d, "x")), (f -= g(d, "y")), (r.width -= u), (r.height -= f);
          }
          return _(r);
        }
        function E(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = c(10),
            r = "HTML" === t.nodeName,
            s = b(e),
            l = b(t),
            u = a(e),
            f = o(t),
            d = parseFloat(f.borderTopWidth),
            h = parseFloat(f.borderLeftWidth);
          n &&
            r &&
            ((l.top = Math.max(l.top, 0)), (l.left = Math.max(l.left, 0)));
          var p = _({
            top: s.top - l.top - d,
            left: s.left - l.left - h,
            width: s.width,
            height: s.height,
          });
          if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
            var g = parseFloat(f.marginTop),
              v = parseFloat(f.marginLeft);
            (p.top -= d - g),
              (p.bottom -= d - g),
              (p.left -= h - v),
              (p.right -= h - v),
              (p.marginTop = g),
              (p.marginLeft = v);
          }
          return (
            (i && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) &&
              (p = m(p, t)),
            p
          );
        }
        function T(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = E(e, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : p(n),
            a = t ? 0 : p(n, "left");
          return _({
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: r,
            height: o,
          });
        }
        function w(e) {
          var t = e.nodeName;
          if ("BODY" === t || "HTML" === t) return !1;
          if ("fixed" === o(e, "position")) return !0;
          var n = s(e);
          return !!n && w(n);
        }
        function C(e) {
          if (!e || !e.parentElement || c()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === o(t, "transform"); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function S(e, t, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            c = r ? C(e) : h(e, l(t));
          if ("viewport" === i) o = T(c, r);
          else {
            var u = void 0;
            "scrollParent" === i
              ? ((u = a(s(t))),
                "BODY" === u.nodeName && (u = e.ownerDocument.documentElement))
              : (u = "window" === i ? e.ownerDocument.documentElement : i);
            var f = E(u, c, r);
            if ("HTML" !== u.nodeName || w(c)) o = f;
            else {
              var d = y(e.ownerDocument),
                p = d.height,
                m = d.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = p + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = m + f.left);
            }
          }
          n = n || 0;
          var g = "number" == typeof n;
          return (
            (o.left += g ? n : n.left || 0),
            (o.top += g ? n : n.top || 0),
            (o.right -= g ? n : n.right || 0),
            (o.bottom -= g ? n : n.bottom || 0),
            o
          );
        }
        function A(e) {
          return e.width * e.height;
        }
        function D(e, t, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = S(n, i, o, r),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function (e) {
                return be({ key: e }, a[e], { area: A(a[e]) });
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            c = l.filter(function (e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            f = e.split("-")[1];
          return u + (f ? "-" + f : "");
        }
        function x(e, t, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return E(n, i ? C(t) : h(t, l(n)), i);
        }
        function O(e) {
          var t = e.ownerDocument.defaultView,
            n = t.getComputedStyle(e),
            i = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
            r = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0);
          return { width: e.offsetWidth + r, height: e.offsetHeight + i };
        }
        function I(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function N(e, t, n) {
          n = n.split("-")[0];
          var i = O(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
          return (
            (r[s] = t[s] + t[l] / 2 - i[l] / 2),
            (r[a] = n === a ? t[a] - i[c] : t[I(a)]),
            r
          );
        }
        function L(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function k(e, t, n) {
          if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
              return e[t] === n;
            });
          var i = L(e, function (e) {
            return e[t] === n;
          });
          return e.indexOf(i);
        }
        function P(e, t, n) {
          return (
            (void 0 === n ? e : e.slice(0, k(e, "name", n))).forEach(function (
              e
            ) {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e.function || e.fn;
              e.enabled &&
                r(n) &&
                ((t.offsets.popper = _(t.offsets.popper)),
                (t.offsets.reference = _(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function H() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = x(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )),
              (e.placement = D(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = N(
                this.popper,
                e.offsets.reference,
                e.placement
              )),
              (e.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (e = P(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function R(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function j(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              i = 0;
            i < t.length;
            i++
          ) {
            var r = t[i],
              o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function M() {
          return (
            (this.state.isDestroyed = !0),
            R(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[j("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function W(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function F(e, t, n, i) {
          var r = "BODY" === e.nodeName,
            o = r ? e.ownerDocument.defaultView : e;
          o.addEventListener(t, n, { passive: !0 }),
            r || F(a(o.parentNode), t, n, i),
            i.push(o);
        }
        function q(e, t, n, i) {
          (n.updateBound = i),
            W(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var r = a(e);
          return (
            F(r, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function B() {
          this.state.eventsEnabled ||
            (this.state = q(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function U(e, t) {
          return (
            W(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
          );
        }
        function V() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = U(this.reference, this.state)));
        }
        function G(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function $(e, t) {
          Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              G(t[n]) &&
              (i = "px"),
              (e.style[n] = t[n] + i);
          });
        }
        function K(e, t) {
          Object.keys(t).forEach(function (n) {
            !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
          });
        }
        function z(e) {
          return (
            $(e.instance.popper, e.styles),
            K(e.instance.popper, e.attributes),
            e.arrowElement &&
              Object.keys(e.arrowStyles).length &&
              $(e.arrowElement, e.arrowStyles),
            e
          );
        }
        function Q(e, t, n, i, r) {
          var o = x(r, t, e, n.positionFixed),
            s = D(
              n.placement,
              o,
              t,
              e,
              n.modifiers.flip.boundariesElement,
              n.modifiers.flip.padding
            );
          return (
            t.setAttribute("x-placement", s),
            $(t, { position: n.positionFixed ? "fixed" : "absolute" }),
            n
          );
        }
        function X(e, t) {
          var n = e.offsets,
            i = n.popper,
            r = n.reference,
            o = Math.round,
            s = Math.floor,
            a = function (e) {
              return e;
            },
            l = o(r.width),
            c = o(i.width),
            u = -1 !== ["left", "right"].indexOf(e.placement),
            f = -1 !== e.placement.indexOf("-"),
            d = l % 2 == c % 2,
            h = l % 2 == 1 && c % 2 == 1,
            p = t ? (u || f || d ? o : s) : a,
            m = t ? o : a;
          return {
            left: p(h && !f && t ? i.left - 1 : i.left),
            top: m(i.top),
            bottom: m(i.bottom),
            right: p(i.right),
          };
        }
        function Y(e, t) {
          var n = t.x,
            i = t.y,
            r = e.offsets.popper,
            o = L(e.instance.modifiers, function (e) {
              return "applyStyle" === e.name;
            }).gpuAcceleration;
          void 0 !== o &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
            );
          var s = void 0 !== o ? o : t.gpuAcceleration,
            a = u(e.instance.popper),
            l = b(a),
            c = { position: r.position },
            f = X(e, window.devicePixelRatio < 2 || !Ee),
            d = "bottom" === n ? "top" : "bottom",
            h = "right" === i ? "left" : "right",
            p = j("transform"),
            m = void 0,
            g = void 0;
          if (
            ((g =
              "bottom" === d
                ? "HTML" === a.nodeName
                  ? -a.clientHeight + f.bottom
                  : -l.height + f.bottom
                : f.top),
            (m =
              "right" === h
                ? "HTML" === a.nodeName
                  ? -a.clientWidth + f.right
                  : -l.width + f.right
                : f.left),
            s && p)
          )
            (c[p] = "translate3d(" + m + "px, " + g + "px, 0)"),
              (c[d] = 0),
              (c[h] = 0),
              (c.willChange = "transform");
          else {
            var v = "bottom" === d ? -1 : 1,
              y = "right" === h ? -1 : 1;
            (c[d] = g * v), (c[h] = m * y), (c.willChange = d + ", " + h);
          }
          var _ = { "x-placement": e.placement };
          return (
            (e.attributes = be({}, _, e.attributes)),
            (e.styles = be({}, c, e.styles)),
            (e.arrowStyles = be({}, e.offsets.arrow, e.arrowStyles)),
            e
          );
        }
        function J(e, t, n) {
          var i = L(e, function (e) {
              return e.name === t;
            }),
            r =
              !!i &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!r) {
            var o = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return r;
        }
        function Z(e, t) {
          var n;
          if (!J(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;
          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i))
            return (
              console.warn(
                "WARNING: `arrow.element` must be child of its popper element!"
              ),
              e
            );
          var r = e.placement.split("-")[0],
            s = e.offsets,
            a = s.popper,
            l = s.reference,
            c = -1 !== ["left", "right"].indexOf(r),
            u = c ? "height" : "width",
            f = c ? "Top" : "Left",
            d = f.toLowerCase(),
            h = c ? "left" : "top",
            p = c ? "bottom" : "right",
            m = O(i)[u];
          l[p] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - m)),
            l[d] + m > a[p] && (e.offsets.popper[d] += l[d] + m - a[p]),
            (e.offsets.popper = _(e.offsets.popper));
          var g = l[d] + l[u] / 2 - m / 2,
            v = o(e.instance.popper),
            y = parseFloat(v["margin" + f]),
            b = parseFloat(v["border" + f + "Width"]),
            E = g - e.offsets.popper[d] - y - b;
          return (
            (E = Math.max(Math.min(a[u] - m, E), 0)),
            (e.arrowElement = i),
            (e.offsets.arrow =
              ((n = {}), _e(n, d, Math.round(E)), _e(n, h, ""), n)),
            e
          );
        }
        function ee(e) {
          return "end" === e ? "start" : "start" === e ? "end" : e;
        }
        function te(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = we.indexOf(e),
            i = we.slice(n + 1).concat(we.slice(0, n));
          return t ? i.reverse() : i;
        }
        function ne(e, t) {
          if (R(e.instance.modifiers, "inner")) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var n = S(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              t.boundariesElement,
              e.positionFixed
            ),
            i = e.placement.split("-")[0],
            r = I(i),
            o = e.placement.split("-")[1] || "",
            s = [];
          switch (t.behavior) {
            case Ce.FLIP:
              s = [i, r];
              break;
            case Ce.CLOCKWISE:
              s = te(i);
              break;
            case Ce.COUNTERCLOCKWISE:
              s = te(i, !0);
              break;
            default:
              s = t.behavior;
          }
          return (
            s.forEach(function (a, l) {
              if (i !== a || s.length === l + 1) return e;
              (i = e.placement.split("-")[0]), (r = I(i));
              var c = e.offsets.popper,
                u = e.offsets.reference,
                f = Math.floor,
                d =
                  ("left" === i && f(c.right) > f(u.left)) ||
                  ("right" === i && f(c.left) < f(u.right)) ||
                  ("top" === i && f(c.bottom) > f(u.top)) ||
                  ("bottom" === i && f(c.top) < f(u.bottom)),
                h = f(c.left) < f(n.left),
                p = f(c.right) > f(n.right),
                m = f(c.top) < f(n.top),
                g = f(c.bottom) > f(n.bottom),
                v =
                  ("left" === i && h) ||
                  ("right" === i && p) ||
                  ("top" === i && m) ||
                  ("bottom" === i && g),
                y = -1 !== ["top", "bottom"].indexOf(i),
                _ =
                  !!t.flipVariations &&
                  ((y && "start" === o && h) ||
                    (y && "end" === o && p) ||
                    (!y && "start" === o && m) ||
                    (!y && "end" === o && g)),
                b =
                  !!t.flipVariationsByContent &&
                  ((y && "start" === o && p) ||
                    (y && "end" === o && h) ||
                    (!y && "start" === o && g) ||
                    (!y && "end" === o && m)),
                E = _ || b;
              (d || v || E) &&
                ((e.flipped = !0),
                (d || v) && (i = s[l + 1]),
                E && (o = ee(o)),
                (e.placement = i + (o ? "-" + o : "")),
                (e.offsets.popper = be(
                  {},
                  e.offsets.popper,
                  N(e.instance.popper, e.offsets.reference, e.placement)
                )),
                (e = P(e.instance.modifiers, e, "flip")));
            }),
            e
          );
        }
        function ie(e) {
          var t = e.offsets,
            n = t.popper,
            i = t.reference,
            r = e.placement.split("-")[0],
            o = Math.floor,
            s = -1 !== ["top", "bottom"].indexOf(r),
            a = s ? "right" : "bottom",
            l = s ? "left" : "top",
            c = s ? "width" : "height";
          return (
            n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
            n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
            e
          );
        }
        function re(e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            s = r[2];
          if (!o) return e;
          if (0 === s.indexOf("%")) {
            var a = void 0;
            switch (s) {
              case "%p":
                a = n;
                break;
              case "%":
              case "%r":
              default:
                a = i;
            }
            return (_(a)[t] / 100) * o;
          }
          if ("vh" === s || "vw" === s) {
            return (
              (("vh" === s
                ? Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )
                : Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  )) /
                100) *
              o
            );
          }
          return o;
        }
        function oe(e, t, n, i) {
          var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            a = s.indexOf(
              L(s, function (e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (c = c.map(function (e, i) {
              var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                    ? ((e[e.length - 1] += t), (s = !1), e)
                    : e.concat(t);
                }, [])
                .map(function (e) {
                  return re(e, r, t, n);
                });
            })),
            c.forEach(function (e, t) {
              e.forEach(function (n, i) {
                G(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        function se(e, t) {
          var n = t.offset,
            i = e.placement,
            r = e.offsets,
            o = r.popper,
            s = r.reference,
            a = i.split("-")[0],
            l = void 0;
          return (
            (l = G(+n) ? [+n, 0] : oe(n, o, s, a)),
            "left" === a
              ? ((o.top += l[0]), (o.left -= l[1]))
              : "right" === a
              ? ((o.top += l[0]), (o.left += l[1]))
              : "top" === a
              ? ((o.left += l[0]), (o.top -= l[1]))
              : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
            (e.popper = o),
            e
          );
        }
        function ae(e, t) {
          var n = t.boundariesElement || u(e.instance.popper);
          e.instance.reference === n && (n = u(n));
          var i = j("transform"),
            r = e.instance.popper.style,
            o = r.top,
            s = r.left,
            a = r[i];
          (r.top = ""), (r.left = ""), (r[i] = "");
          var l = S(
            e.instance.popper,
            e.instance.reference,
            t.padding,
            n,
            e.positionFixed
          );
          (r.top = o), (r.left = s), (r[i] = a), (t.boundaries = l);
          var c = t.priority,
            f = e.offsets.popper,
            d = {
              primary: function (e) {
                var n = f[e];
                return (
                  f[e] < l[e] &&
                    !t.escapeWithReference &&
                    (n = Math.max(f[e], l[e])),
                  _e({}, e, n)
                );
              },
              secondary: function (e) {
                var n = "right" === e ? "left" : "top",
                  i = f[n];
                return (
                  f[e] > l[e] &&
                    !t.escapeWithReference &&
                    (i = Math.min(
                      f[n],
                      l[e] - ("right" === e ? f.width : f.height)
                    )),
                  _e({}, n, i)
                );
              },
            };
          return (
            c.forEach(function (e) {
              var t =
                -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
              f = be({}, f, d[t](e));
            }),
            (e.offsets.popper = f),
            e
          );
        }
        function le(e) {
          var t = e.placement,
            n = t.split("-")[0],
            i = t.split("-")[1];
          if (i) {
            var r = e.offsets,
              o = r.reference,
              s = r.popper,
              a = -1 !== ["bottom", "top"].indexOf(n),
              l = a ? "left" : "top",
              c = a ? "width" : "height",
              u = {
                start: _e({}, l, o[l]),
                end: _e({}, l, o[l] + o[c] - s[c]),
              };
            e.offsets.popper = be({}, s, u[i]);
          }
          return e;
        }
        function ce(e) {
          if (!J(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
            n = L(e.instance.modifiers, function (e) {
              return "preventOverflow" === e.name;
            }).boundaries;
          if (
            t.bottom < n.top ||
            t.left > n.right ||
            t.top > n.bottom ||
            t.right < n.left
          ) {
            if (!0 === e.hide) return e;
            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
          } else {
            if (!1 === e.hide) return e;
            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
          }
          return e;
        }
        function ue(e) {
          var t = e.placement,
            n = t.split("-")[0],
            i = e.offsets,
            r = i.popper,
            o = i.reference,
            s = -1 !== ["left", "right"].indexOf(n),
            a = -1 === ["top", "left"].indexOf(n);
          return (
            (r[s ? "left" : "top"] =
              o[n] - (a ? r[s ? "width" : "height"] : 0)),
            (e.placement = I(t)),
            (e.offsets.popper = _(r)),
            e
          );
        }
        var fe =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
          de = (function () {
            for (
              var e = ["Edge", "Trident", "Firefox"], t = 0;
              t < e.length;
              t += 1
            )
              if (fe && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })(),
          he = fe && window.Promise,
          pe = he ? n : i,
          me = fe && !(!window.MSInputMethodContext || !document.documentMode),
          ge = fe && /MSIE 10/.test(navigator.userAgent),
          ve = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          ye = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          _e = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          be =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          Ee = fe && /Firefox/i.test(navigator.userAgent),
          Te = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          we = Te.slice(3),
          Ce = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
          },
          Se = {
            shift: { order: 100, enabled: !0, fn: le },
            offset: { order: 200, enabled: !0, fn: se, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: ae,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: { order: 400, enabled: !0, fn: ie },
            arrow: { order: 500, enabled: !0, fn: Z, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: ne,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: { order: 700, enabled: !1, fn: ue },
            hide: { order: 800, enabled: !0, fn: ce },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: Y,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: z,
              onLoad: Q,
              gpuAcceleration: void 0,
            },
          },
          Ae = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: Se,
          },
          De = (function () {
            function e(t, n) {
              var i = this,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              ve(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = pe(this.update.bind(this))),
                (this.options = be({}, e.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(be({}, e.Defaults.modifiers, o.modifiers)).forEach(
                  function (t) {
                    i.options.modifiers[t] = be(
                      {},
                      e.Defaults.modifiers[t] || {},
                      o.modifiers ? o.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return be({ name: e }, i.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled &&
                    r(e.onLoad) &&
                    e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
              var s = this.options.eventsEnabled;
              s && this.enableEventListeners(), (this.state.eventsEnabled = s);
            }
            return (
              ye(e, [
                {
                  key: "update",
                  value: function () {
                    return H.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return M.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return B.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return V.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (De.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (De.placements = Te),
          (De.Defaults = Ae),
          (t.default = De);
      }.call(t, n(5));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
]);
