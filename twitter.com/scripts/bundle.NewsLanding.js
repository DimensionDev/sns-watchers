;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    '0rgK': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NewsLandingScreen', function () {
          return W
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('5Yy7'),
        l = n.n(i),
        u = n('N+ot'),
        s = n.n(u),
        f = n('AuHH'),
        p = n.n(f),
        d = (n('WNMA'), n('KqXw'), n('ERkP')),
        y = n('es0u'),
        O = n('mw9i'),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        w = n.n(b),
        h = n('QIgh'),
        g = n('8UdT'),
        m = n('PH3B')
      function P(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = w()({}, g.b.News, m.a),
        E = v(v({}, h.b), j),
        C = n('Hw0q'),
        T = n('dwig'),
        x = n('0+qk'),
        D = n('3XMw'),
        H = n.n(D),
        L = n('ZNT5')
      function N(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function (e) {
          var t = e.newsLandingContextId,
            n = e.tcoHash,
            r = { tco_hash: n, rux_cxt: t }
          return Object(L.a)({
            timelineId: 'news-landing-'.concat(n),
            getEndpoint: function (e) {
              return e.URT.fetchNewsLandingTimeline
            },
            getEndpointParams: function (e) {
              return k(k({}, e), r)
            },
            context: 'FETCH_NEWS_LANDING',
            perfKey: 'news-landing',
          })
        },
        K = n('VTxf'),
        R = n('yoO3'),
        I = n('SrIh'),
        _ = n('fTQJ'),
        F = n('VS6U'),
        U = n('wgnn'),
        B = n('Irs7')
      function J(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = p()(e)
          if (t) {
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      var M = H.a.i31dcd22,
        X = function () {
          return d.createElement(K.a, null)
        },
        q = function (e) {
          switch (e) {
            case U.a.NOT_FOUND:
              return d.createElement(K.a, null)
            default:
              return Object(I.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        W = (function (e) {
          l()(n, e)
          var t = J(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = d.createElement(x.a, { history: e })
                  return d.createElement(
                    R.a,
                    null,
                    d.createElement(F.a, {
                      backLocation: '/explore',
                      documentTitle: M,
                      history: e,
                      primaryContent: d.createElement(T.a, { container: O.a, fab: t }, this._renderContent()),
                      sidebarContent: d.createElement(y.a, { withWhoToFollow: !1 }),
                      title: M,
                    }),
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e = this.props,
                    t = e.location.query,
                    n = e.match.params.tcoHash,
                    r = (t && Object(C.a)(t.cxt)) || ''
                  return n
                    ? d.createElement(_.a, {
                        entryConfiguration: E,
                        module: S({ tcoHash: n, newsLandingContextId: r }),
                        renderEmptyState: X,
                        renderUnavailable: q,
                        title: M,
                      })
                    : d.createElement(K.a, null)
                },
              },
            ]),
            n
          )
        })(d.Component)
      t.default = Object(B.a)(W, { page: 'news', section: 'landing' })
    },
    PH3B: function (e, t, n) {
      'use strict'
      var r,
        o = n('KEM+'),
        a = n.n(o),
        c = n('ezF+'),
        i = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(337)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        s = {
          loader: function () {
            return Promise.all([n.e(0), n.e(339)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = c.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((r = {}), a()(r, i.Cell, u), a()(r, i.PreviewCard, s), r),
      })
    },
  },
])
//# sourceMappingURL=WIPED
