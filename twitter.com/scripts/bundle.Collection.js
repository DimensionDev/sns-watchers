;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    '3L7q': function (e, t, n) {
      'use strict'
      n.r(t)
      n('KqXw'), n('WNMA')
      var r = n('ERkP'),
        o = n.n(r),
        a = n('SslV'),
        i = n('es0u'),
        c = n('mw9i'),
        s = n('KEM+'),
        l = n.n(s),
        u = n('yiKp'),
        d = n.n(u),
        p = n('ezF+'),
        f =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(250).then(n.bind(null, 'U0EQ'))
            },
            loaderKey: 'collectionHeaderLoader',
            strategy: n('XBtf').a.Critical,
          }),
        m = p.e(f),
        y = n('8UdT'),
        w = n('QIgh'),
        I = d()(d()({}, w.b), {}, l()({}, y.a.CollectionHeader, m)),
        b = n('3XMw'),
        C = n.n(b),
        x = n('yoO3'),
        E = n('fTQJ'),
        h = n('VS6U'),
        g = n('7JQg'),
        T = C.a.f8cafdc1,
        v = C.a.ddf0ba7e
      t.default = Object(g.a)({ page: 'collection', section: 'tweets' })(function (e) {
        var t = e.history,
          n = e.match.params.collectionId
        return o.a.createElement(
          x.a,
          null,
          o.a.createElement(h.a, {
            backLocation: '/',
            history: t,
            primaryContent: o.a.createElement(
              c.a,
              null,
              o.a.createElement(E.a, { entryConfiguration: I, module: Object(a.a)(n), title: T }),
            ),
            sidebarContent: o.a.createElement(i.a, null),
            title: v,
          }),
        )
      })
    },
    SslV: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        c = n('RhWx'),
        s = n.n(c),
        l = (n('KqXw'), n('MvUL'), n('2G9S'), n('ho0z'), n('1t7P'), n('jQ/y'), n('CXcw')),
        u = n('vWJI'),
        d = n('8UdT'),
        p = n('9/1j'),
        f = n('t0aI'),
        m = n('VrCx'),
        y = n('Qyxo'),
        w = function (e, t) {
          if (0 !== e.length) {
            for (var n = e[0], r = 1; r < e.length; r++) {
              var o = e[r]
              t(o, n) < 0 && (n = o)
            }
            return n
          }
        },
        I = function (e, t) {
          var n = e.result.response.timeline,
            r = Object(y.a)(n, function (e) {
              return e.tweet ? C(e.tweet) : void 0
            }),
            o = w(r, function (e, t) {
              return -Object(f.a)(e.sortIndex, t.sortIndex)
            }),
            a = w(r, function (e, t) {
              return Object(f.a)(e.sortIndex, t.sortIndex)
            }),
            i = (e.result.response.position || {}).min_position,
            c = i && a && x(i, a.sortIndex)
          c && r.push(c)
          var l = e.result.response.timeline_id.replace('custom-', ''),
            u = e.entities,
            d = u.cards,
            m = u.collections,
            I = u.tweets,
            E = u.users,
            h = m && m[l],
            g = !t.cursor && h && b(l, o ? o.sortIndex : '0', h),
            T = g ? [g].concat(s()(r)) : r
          return {
            globalObjects: { cards: d || {}, tweets: I || {}, users: E || {} },
            timeline: {
              instructions: T.length > 0 ? [{ type: p.a.AddEntries, parameters: { entries: T } }] : [],
              responseObjects: {},
            },
          }
        },
        b = function (e, t, n) {
          return {
            type: 'legacy_CollectionHeader',
            entryId: 'header-'.concat(e),
            sortIndex: l.b(t),
            itemMetadata: {},
            content: { authorId: n.user_id, name: n.name, description: n.description },
          }
        },
        C = function (e) {
          return {
            type: 'tweet',
            entryId: 'tweet-'.concat(e.id),
            sortIndex: e.sort_index,
            itemMetadata: {},
            content: { id: e.id, displayType: m.a.Tweet },
          }
        },
        x = function (e, t) {
          return {
            type: d.b.TimelineCursor,
            entryId: 'cursor-'.concat(e),
            sortIndex: l.a(t),
            itemMetadata: {},
            content: { value: e, cursorType: u.a.Bottom },
          }
        },
        E = n('ZNT5'),
        h = ['cursor']
      t.a = function (e) {
        return Object(E.a)({
          timelineId: 'legacy-collection-'.concat(e),
          getEndpoint: function (e) {
            return e.Collections.fetchCollection
          },
          getEndpointParams: function (t) {
            var n = t.cursor,
              r = i()(t, h)
            return o()(o()({}, r), {}, { id: e, max_position: n })
          },
          context: 'FETCH_LEGACY_COLLECTION_CONTEXT',
          perfKey: 'legacyCollection',
          formatResponse: I,
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
