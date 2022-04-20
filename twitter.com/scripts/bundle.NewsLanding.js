;(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    '0rgK': function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'NewsLandingScreen', function () {
          return P
        })
      var a = t('VrFO'),
        r = t.n(a),
        i = t('Y9Ll'),
        o = t.n(i),
        c = t('5Yy7'),
        l = t.n(c),
        u = t('2VqO'),
        s = t.n(u),
        d = (t('KqXw'), t('WNMA'), t('ERkP')),
        w = t.n(d),
        h = t('es0u'),
        m = t('mw9i'),
        p = t('yiKp'),
        f = t.n(p),
        E = t('KEM+'),
        g = t.n(E),
        y = t('QIgh'),
        b = t('8UdT'),
        N = t('PH3B'),
        T = g()({}, b.b.News, N.a),
        v = f()(f()({}, y.default), T),
        C = t('Hw0q'),
        O = t('dwig'),
        x = t('0+qk'),
        k = t('3XMw'),
        I = t.n(k),
        L = t('ZNT5'),
        _ = function (n) {
          var e = n.newsLandingContextId,
            t = n.tcoHash,
            a = { tco_hash: t, rux_cxt: e }
          return Object(L.a)({
            timelineId: 'news-landing-'.concat(t),
            getEndpoint: function (n) {
              return n.URT.fetchNewsLandingTimeline
            },
            getEndpointParams: function (n) {
              return f()(f()({}, n), a)
            },
            context: 'FETCH_NEWS_LANDING',
            perfKey: 'news-landing',
          })
        },
        H = t('VTxf'),
        U = t('yoO3'),
        q = t('SrIh'),
        K = t('fTQJ'),
        S = t('VS6U'),
        j = t('wgnn'),
        F = t('Irs7'),
        V = I.a.i31dcd22,
        J = function () {
          return w.a.createElement(H.a, null)
        },
        M = function (n) {
          switch (n) {
            case j.a.NOT_FOUND:
              return w.a.createElement(H.a, null)
            default:
              return Object(q.a)('Unhandled timeline unavailable reason: '.concat(n)), null
          }
        },
        P = (function (n) {
          l()(t, n)
          var e = s()(t)
          function t() {
            return r()(this, t), e.apply(this, arguments)
          }
          return (
            o()(t, [
              {
                key: 'render',
                value: function () {
                  var n = this.props.history,
                    e = w.a.createElement(x.a, { history: n })
                  return w.a.createElement(
                    U.a,
                    null,
                    w.a.createElement(S.a, {
                      backLocation: '/explore',
                      documentTitle: V,
                      history: n,
                      primaryContent: w.a.createElement(O.a, { container: m.a, fab: e }, this._renderContent()),
                      sidebarContent: w.a.createElement(h.a, { withWhoToFollow: !1 }),
                      title: V,
                    }),
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var n = this.props,
                    e = n.location.query,
                    t = n.match.params.tcoHash,
                    a = (e && Object(C.a)(e.cxt)) || ''
                  return t
                    ? w.a.createElement(K.a, {
                        entryConfiguration: v,
                        module: _({ tcoHash: t, newsLandingContextId: a }),
                        renderEmptyState: J,
                        renderUnavailable: M,
                        title: V,
                      })
                    : w.a.createElement(H.a, null)
                },
              },
            ]),
            t
          )
        })(w.a.Component)
      e.default = Object(F.a)(P, { page: 'news', section: 'landing' })
    },
  },
])
//# sourceMappingURL=WIPED
