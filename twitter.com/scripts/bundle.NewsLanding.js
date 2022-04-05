;(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    '0rgK': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'NewsLandingScreen', function () {
          return M
        })
      var a = t('VrFO'),
        r = t.n(a),
        i = t('Y9Ll'),
        l = t.n(i),
        o = t('5Yy7'),
        c = t.n(o),
        u = t('2VqO'),
        s = t.n(u),
        d = (t('KqXw'), t('WNMA'), t('ERkP')),
        w = t.n(d),
        f = t('es0u'),
        h = t('mw9i'),
        p = t('yiKp'),
        m = t.n(p),
        y = t('KEM+'),
        C = t.n(y),
        E = t('QIgh'),
        g = t('8UdT'),
        b = t('PH3B'),
        v = C()({}, g.b.News, b.a),
        T = m()(m()({}, E.b), v),
        P = t('Hw0q'),
        x = t('dwig'),
        L = t('0+qk'),
        N = t('3XMw'),
        O = t.n(N),
        k = t('ZNT5'),
        H = function (e) {
          var n = e.newsLandingContextId,
            t = e.tcoHash,
            a = { tco_hash: t, rux_cxt: n }
          return Object(k.a)({
            timelineId: 'news-landing-'.concat(t),
            getEndpoint: function (e) {
              return e.URT.fetchNewsLandingTimeline
            },
            getEndpointParams: function (e) {
              return m()(m()({}, e), a)
            },
            context: 'FETCH_NEWS_LANDING',
            perfKey: 'news-landing',
          })
        },
        K = t('VTxf'),
        I = t('yoO3'),
        _ = t('SrIh'),
        U = t('fTQJ'),
        j = t('VS6U'),
        q = t('wgnn'),
        F = t('Irs7'),
        S = O.a.i31dcd22,
        D = function () {
          return w.a.createElement(K.a, null)
        },
        J = function (e) {
          switch (e) {
            case q.a.NOT_FOUND:
              return w.a.createElement(K.a, null)
            default:
              return Object(_.a)('Unhandled timeline unavailable reason: '.concat(e)), null
          }
        },
        M = (function (e) {
          c()(t, e)
          var n = s()(t)
          function t() {
            return r()(this, t), n.apply(this, arguments)
          }
          return (
            l()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    n = w.a.createElement(L.a, { history: e })
                  return w.a.createElement(
                    I.a,
                    null,
                    w.a.createElement(j.a, {
                      backLocation: '/explore',
                      documentTitle: S,
                      history: e,
                      primaryContent: w.a.createElement(x.a, { container: h.a, fab: n }, this._renderContent()),
                      sidebarContent: w.a.createElement(f.a, { withWhoToFollow: !1 }),
                      title: S,
                    }),
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e = this.props,
                    n = e.location.query,
                    t = e.match.params.tcoHash,
                    a = (n && Object(P.a)(n.cxt)) || ''
                  return t
                    ? w.a.createElement(U.a, {
                        entryConfiguration: T,
                        module: H({ tcoHash: t, newsLandingContextId: a }),
                        renderEmptyState: D,
                        renderUnavailable: J,
                        title: S,
                      })
                    : w.a.createElement(K.a, null)
                },
              },
            ]),
            t
          )
        })(w.a.Component)
      n.default = Object(F.a)(M, { page: 'news', section: 'landing' })
    },
    PH3B: function (e, n, t) {
      'use strict'
      var a,
        r = t('KEM+'),
        i = t.n(r),
        l = t('ezF+'),
        o = (t('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        c = (t('lTEL'), t('7x/C'), t('JtPf'), t('87if'), t('kYxP'), t('XBtf')),
        u = {
          loader: function () {
            return Promise.all([t.e(0), t.e(352)]).then(t.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: c.a.Critical,
        },
        s = {
          loader: function () {
            return Promise.all([t.e(0), t.e(354)]).then(t.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: c.a.Critical,
        }
      n.a = l.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((a = {}), i()(a, o.Cell, u), i()(a, o.PreviewCard, s), a),
      })
    },
  },
])
//# sourceMappingURL=WIPED
