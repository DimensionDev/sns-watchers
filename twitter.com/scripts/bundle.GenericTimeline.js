;(window.webpackJsonp = window.webpackJsonp || []).push([
  [56],
  {
    '180P': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('7x/C'), r('DZ+c'), r('KOtZ'), r('Ysgh'), r('KqXw'), r('tQbP'), r('7xRU')
      var n = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var r = t.join('')
          return i(r, 0).toString()
        },
        i = function (e, t) {
          for (var r = 'string' == typeof e ? e : String(e), n = t, i = 0; i < r.length; i++) {
            ;(n = (n << 5) - n + r.charCodeAt(i)), (n &= n)
          }
          return n
        }
    },
    'O5w+': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'GenericTimelineScreen', function () {
          return D
        })
      var n,
        i = r('ERkP'),
        o = r('v84o'),
        c = r('es0u'),
        a = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        u = r.n(a),
        l = r('QIgh'),
        s = r('8UdT'),
        f = r('iu0J'),
        p = r('ezF+'),
        d = r('Ai1p'),
        b = p.e(d.a),
        O = r('rpbw'),
        y = r('PH3B')
      function g(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                u()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v =
          ((n = {}),
          u()(n, s.b.EventSummary, Object(f.a)({ errorContext: 'GENERIC_TIMELINE_SCREEN' })),
          u()(n, s.b.Label, b),
          u()(n, s.b.News, y.a),
          u()(n, s.b.TwitterList, Object(O.a)({})),
          n),
        w = P(P({}, Object(l.a)({ withMuteConversation: !0 })), v),
        j = r('3XMw'),
        E = r.n(j),
        m = r('yoO3'),
        h = r('5FtR'),
        C = r('fTQJ'),
        I = r('VS6U'),
        T = r('7JQg'),
        L = E.a.a6d5b010,
        D = function (e) {
          var t = e.history,
            r = (function (e) {
              return e.state && e.state.urtUrl
            })(e.location),
            n = null == r ? void 0 : r.urtEndpointOptions,
            a = n ? n.title : L,
            u = n ? n.subtitle : void 0,
            l = i.useMemo(
              function () {
                return r && Object(o.a)({ urtUrl: r, timelinePrefix: 'generic-' })
              },
              [r],
            )
          return l
            ? i.createElement(
                m.a,
                null,
                i.createElement(I.a, {
                  backLocation: '/',
                  history: t,
                  primaryContent: i.createElement(C.a, { entryConfiguration: w, module: l, title: a }),
                  sidebarContent: i.createElement(c.a, { withWhoToFollow: !1 }),
                  subtitle: u,
                  title: a,
                }),
              )
            : i.createElement(h.a, { to: '/' })
        }
      t.default = Object(T.c)({ page: 'generic_timeline' })(D)
    },
    PH3B: function (e, t, r) {
      'use strict'
      var n,
        i = r('KEM+'),
        o = r.n(i),
        c = r('ezF+'),
        a = (r('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        u = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('XBtf')),
        l = {
          loader: function () {
            return r.e(336).then(r.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: u.a.Critical,
        },
        s = {
          loader: function () {
            return r.e(338).then(r.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: u.a.Critical,
        }
      t.a = c.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((n = {}), o()(n, a.Cell, l), o()(n, a.PreviewCard, s), n),
      })
    },
    doI8: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        i = r.n(n),
        o = r('WpDa'),
        c = r('ZNT5')
      function a(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      t.b = function (e) {
        var t = e.endpointParams,
          r = e.endpointUrl,
          n = e.timelineId
        return Object(c.a)({
          timelineId: n,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var n = e.count,
              i = e.cursor
            return u(u({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: n, endpointUrl: r })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var l = function (e) {
        return Object(c.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var r = t.count,
              n = t.cursor
            return { cursor: 'string' == typeof n ? n : void 0, count: r, timelineId: e }
          },
          formatResponse: o.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    v84o: function (e, t, r) {
      'use strict'
      r('2G9S')
      var n = r('180P'),
        i = r('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          r = void 0 === t ? 'generic-timeline-' : t,
          o = e.urtUrl,
          c = o.url,
          a = o.urtEndpointOptions || {},
          u = a.cacheId,
          l = a.requestParams
        return Object(i.b)({
          timelineId: u || ''.concat(r).concat(Object(n.a)(o)),
          endpointUrl: c,
          endpointParams: l || {},
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
