;(window.webpackJsonp = window.webpackJsonp || []).push([
  [40],
  {
    '3L7q': function (e, t, r) {
      'use strict'
      r.r(t)
      r('WNMA'), r('KqXw')
      var n = r('ERkP'),
        o = r('SslV'),
        c = r('es0u'),
        i = r('mw9i'),
        a = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        s = r.n(a),
        u = r('ezF+'),
        l =
          (r('JtPf'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          {
            loader: function () {
              return r.e(231).then(r.bind(null, 'U0EQ'))
            },
            loaderKey: 'collectionHeaderLoader',
            strategy: r('XBtf').a.Critical,
          }),
        p = u.e(l),
        d = r('8UdT')
      function f(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                s()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var b = O(O({}, r('QIgh').b), {}, s()({}, d.a.CollectionHeader, p)),
        y = r('3XMw'),
        j = r.n(y),
        m = r('yoO3'),
        w = r('fTQJ'),
        g = r('VS6U'),
        h = r('7JQg'),
        P = j.a.f8cafdc1,
        v = j.a.ddf0ba7e
      t.default = Object(h.c)({ page: 'collection', section: 'tweets' })(function (e) {
        var t = e.history,
          r = e.match.params.collectionId
        return n.createElement(
          m.a,
          null,
          n.createElement(g.a, {
            backLocation: '/',
            history: t,
            primaryContent: n.createElement(
              i.a,
              null,
              n.createElement(w.a, { entryConfiguration: b, module: Object(o.a)(r), title: P }),
            ),
            sidebarContent: n.createElement(c.a, null),
            title: v,
          }),
        )
      })
    },
    SslV: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        c = r('m3Bd'),
        i = r.n(c),
        a = r('RhWx'),
        s = r.n(a),
        u = (r('MvUL'), r('KqXw'), r('2G9S'), r('ho0z'), r('jQ/y'), r('CXcw')),
        l = r('vWJI'),
        p = r('8UdT'),
        d = r('9/1j'),
        f = r('t0aI'),
        O = r('VrCx'),
        b = r('Qyxo'),
        y = function (e, t) {
          if (0 !== e.length) {
            for (var r = e[0], n = 1; n < e.length; n++) {
              var o = e[n]
              t(o, r) < 0 && (r = o)
            }
            return r
          }
        },
        j = function (e, t) {
          var r = e.result.response.timeline,
            n = Object(b.a)(r, function (e) {
              return e.tweet ? w(e.tweet) : void 0
            }),
            o = y(n, function (e, t) {
              return -Object(f.a)(e.sortIndex, t.sortIndex)
            }),
            c = y(n, function (e, t) {
              return Object(f.a)(e.sortIndex, t.sortIndex)
            }),
            i = (e.result.response.position || {}).min_position,
            a = i && c && g(i, c.sortIndex)
          a && n.push(a)
          var u = e.result.response.timeline_id.replace('custom-', ''),
            l = e.entities,
            p = l.cards,
            O = l.collections,
            j = l.tweets,
            h = l.users,
            P = O && O[u],
            v = !t.cursor && P && m(u, o ? o.sortIndex : '0', P),
            E = v ? [v].concat(s()(n)) : n
          return {
            globalObjects: { cards: p || {}, tweets: j || {}, users: h || {} },
            timeline: {
              instructions: E.length > 0 ? [{ type: d.a.AddEntries, parameters: { entries: E } }] : [],
              responseObjects: {},
            },
          }
        },
        m = function (e, t, r) {
          return {
            type: 'legacy_CollectionHeader',
            entryId: 'header-'.concat(e),
            sortIndex: u.b(t),
            itemMetadata: {},
            content: { authorId: r.user_id, name: r.name, description: r.description },
          }
        },
        w = function (e) {
          return {
            type: 'tweet',
            entryId: 'tweet-'.concat(e.id),
            sortIndex: e.sort_index,
            itemMetadata: {},
            content: { id: e.id, displayType: O.a.Tweet },
          }
        },
        g = function (e, t) {
          return {
            type: p.b.TimelineCursor,
            entryId: 'cursor-'.concat(e),
            sortIndex: u.a(t),
            itemMetadata: {},
            content: { value: e, cursorType: l.a.Bottom },
          }
        },
        h = r('ZNT5')
      function P(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      t.a = function (e) {
        return Object(h.a)({
          timelineId: 'legacy-collection-'.concat(e),
          getEndpoint: function (e) {
            return e.Collections.fetchCollection
          },
          getEndpointParams: function (t) {
            var r = t.cursor
            return v(v({}, i()(t, ['cursor'])), {}, { id: e, max_position: r })
          },
          context: 'FETCH_LEGACY_COLLECTION_CONTEXT',
          perfKey: 'legacyCollection',
          formatResponse: j,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
