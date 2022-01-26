;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    nDeN: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MediaTagsScreen', function () {
          return N
        })
      var r = a('ddV6'),
        n = a.n(r),
        c = (a('z84I'), a('ERkP')),
        i = (a('WNMA'), a('KqXw'), a('o52z')),
        u = a('XOJV'),
        s = a('rxPX'),
        o = a('0KEI'),
        d = function (e, t) {
          var a = l(e, t) || {}
          return (a.extended_entities && a.extended_entities.media) || Object(i.a)()
        },
        f = function (e, t) {
          return t.match.params.statusId
        },
        l = function (e, t) {
          return u.a.selectHydrated(e, f(0, t))
        },
        b = function (e, t) {
          return u.a.selectFetchStatus(e, f(0, t))
        },
        m = Object(s.a)()
          .propsFromState(function () {
            return { fetchStatus: b, mediaItems: d, statusId: f, tweet: l }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(o.createLocalApiErrorHandlerWithContextFactory)('MEDIA_TAGS_SCREEN'),
              fetchTweetIfNeeded: u.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media_tags' }),
        h = a('v//M'),
        p = a('W5XZ'),
        w = a('jHSc'),
        E = a('3XMw'),
        I = a.n(E),
        y = a('VTxf'),
        A = a('hqDb'),
        S = a('VAyw'),
        g = a('t62R'),
        j = I.a.b98764b1,
        k = I.a.cb2054fa,
        v = I.a.e4ad6bda,
        O = function () {
          return c.createElement(y.a, null)
        }
      function N(e) {
        var t = e.createLocalApiErrorHandler,
          a = e.fetchStatus,
          r = e.fetchTweetIfNeeded,
          i = e.history,
          u = e.mediaItems,
          s = e.statusId,
          o = e.tweet,
          d = c.useState(!1),
          f = n()(d, 2),
          l = f[0],
          b = f[1],
          m = c.useCallback(
            function () {
              r(s).catch(function (e) {
                t(p.a)(e), e && e.status && b(!0)
              })
            },
            [s, r, t, b],
          )
        c.useEffect(
          function () {
            m()
          },
          [m],
        )
        var E = c.useCallback(
            function () {
              var e = S.a.mergeTaggedUsers(u).map(function (e) {
                return e.user_id
              })
              return e.length
                ? c.createElement(A.a, { userIds: e, withItemBorder: !0 })
                : c.createElement(g.b, { align: 'center', color: 'gray700', size: 'headline1' }, j)
            },
            [u],
          ),
          I = o ? o.permalink : '/'
        return c.createElement(
          w.b,
          { backLocation: I, history: i, title: v },
          c.createElement(h.a, {
            accessibilityLabel: k,
            fetchStatus: a,
            onRequestRetry: m,
            render: E,
            renderFailure: O,
            retryable: !l,
          }),
        )
      }
      t.default = m(N)
    },
    o52z: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      var r = a('VPAj'),
        n = Object(r.a)([])
      Object(r.a)({})
    },
  },
])
//# sourceMappingURL=WIPED
