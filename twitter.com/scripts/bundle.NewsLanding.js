;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    '0rgK': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NewsLandingScreen', function () {
          return A
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        u = n('N+ot'),
        s = n.n(u),
        f = n('AuHH'),
        p = n.n(f),
        d = (n('WNMA'), n('KqXw'), n('ERkP')),
        y = n.n(d),
        O = n('es0u'),
        b = n('mw9i'),
        w = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        h = n.n(w),
        g = n('QIgh'),
        m = n('8UdT'),
        P = n('PH3B')
      function v(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var E = h()({}, m.b.News, P.a),
        C = j(j({}, g.b), E),
        T = n('Hw0q'),
        x = n('dwig'),
        D = n('0+qk'),
        H = n('3XMw'),
        L = n.n(H),
        N = n('ZNT5')
      function k(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = function (e) {
          var t = e.newsLandingContextId,
            n = e.tcoHash,
            r = { tco_hash: n, rux_cxt: t }
          return Object(N.a)({
            timelineId: 'news-landing-'.concat(n),
            getEndpoint: function (e) {
              return e.URT.fetchNewsLandingTimeline
            },
            getEndpointParams: function (e) {
              return S(S({}, e), r)
            },
            context: 'FETCH_NEWS_LANDING',
            perfKey: 'news-landing',
          })
        },
        R = n('VTxf'),
        I = n('yoO3'),
        _ = n('SrIh'),
        F = n('fTQJ'),
        U = n('VS6U'),
        B = n('wgnn'),
        J = n('Irs7')
      function M(e) {
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
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      var X = L.a.i31dcd22,
        q = function () {
          return y.a.createElement(R.a, null)
        },
        W = function (e) {
          switch (e) {
            case B.a.NOT_FOUND:
              return y.a.createElement(R.a, null)
            default:
              return Object(_.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        A = (function (e) {
          l()(n, e)
          var t = M(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = y.a.createElement(D.a, { history: e })
                  return y.a.createElement(
                    I.a,
                    null,
                    y.a.createElement(U.a, {
                      backLocation: '/explore',
                      documentTitle: X,
                      history: e,
                      primaryContent: y.a.createElement(x.a, { container: b.a, fab: t }, this._renderContent()),
                      sidebarContent: y.a.createElement(O.a, { withWhoToFollow: !1 }),
                      title: X,
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
                    r = (t && Object(T.a)(t.cxt)) || ''
                  return n
                    ? y.a.createElement(F.a, {
                        entryConfiguration: C,
                        module: K({ tcoHash: n, newsLandingContextId: r }),
                        renderEmptyState: q,
                        renderUnavailable: W,
                        title: X,
                      })
                    : y.a.createElement(R.a, null)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.default = Object(J.a)(A, { page: 'news', section: 'landing' })
    },
    PH3B: function (e, t, n) {
      'use strict'
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = n('ezF+'),
        i = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        l = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('XBtf')),
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(342)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: l.a.Critical,
        },
        s = {
          loader: function () {
            return Promise.all([n.e(0), n.e(344)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: l.a.Critical,
        }
      t.a = c.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((r = {}), o()(r, i.Cell, u), o()(r, i.PreviewCard, s), r),
      })
    },
  },
])
//# sourceMappingURL=WIPED
