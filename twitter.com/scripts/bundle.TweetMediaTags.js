;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    nDeN: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'MediaTagsScreen', function () {
          return T
        })
      var n = a('ddV6'),
        r = a.n(n),
        c = (a('z84I'), a('ERkP')),
        i = a.n(c),
        u = (a('WNMA'), a('KqXw'), a('o52z')),
        s = a('XOJV'),
        o = a('rxPX'),
        d = a('0KEI'),
        f = function (e, t) {
          var a = b(e, t) || {}
          return (a.extended_entities && a.extended_entities.media) || Object(u.a)()
        },
        l = function (e, t) {
          return t.match.params.statusId
        },
        b = function (e, t) {
          return s.a.selectHydrated(e, l(0, t))
        },
        m = function (e, t) {
          return s.a.selectFetchStatus(e, l(0, t))
        },
        h = Object(o.a)()
          .propsFromState(function () {
            return { fetchStatus: m, mediaItems: f, statusId: l, tweet: b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('MEDIA_TAGS_SCREEN'),
              fetchTweetIfNeeded: s.a.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media_tags' }),
        p = a('v//M'),
        w = a('W5XZ'),
        E = a('jHSc'),
        I = a('3XMw'),
        y = a.n(I),
        A = a('VTxf'),
        S = a('hqDb'),
        g = a('VAyw'),
        j = a('t62R'),
        k = y.a.b98764b1,
        v = y.a.cb2054fa,
        O = y.a.e4ad6bda,
        N = function () {
          return i.a.createElement(A.a, null)
        }
      function T(e) {
        var t = e.createLocalApiErrorHandler,
          a = e.fetchStatus,
          n = e.fetchTweetIfNeeded,
          c = e.history,
          u = e.mediaItems,
          s = e.statusId,
          o = e.tweet,
          d = i.a.useState(!1),
          f = r()(d, 2),
          l = f[0],
          b = f[1],
          m = i.a.useCallback(
            function () {
              n(s).catch(function (e) {
                t(w.a)(e), e && e.status && b(!0)
              })
            },
            [s, n, t, b],
          )
        i.a.useEffect(
          function () {
            m()
          },
          [m],
        )
        var h = i.a.useCallback(
            function () {
              var e = g.a.mergeTaggedUsers(u).map(function (e) {
                return e.user_id
              })
              return e.length
                ? i.a.createElement(S.a, { userIds: e, withItemBorder: !0 })
                : i.a.createElement(j.b, { align: 'center', color: 'gray700', size: 'headline1' }, k)
            },
            [u],
          ),
          I = o ? o.permalink : '/'
        return i.a.createElement(
          E.b,
          { backLocation: I, history: c, title: O },
          i.a.createElement(p.a, {
            accessibilityLabel: v,
            fetchStatus: a,
            onRequestRetry: m,
            render: h,
            renderFailure: N,
            retryable: !l,
          }),
        )
      }
      t.default = h(T)
    },
    o52z: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('VPAj'),
        r = Object(n.a)([])
      Object(n.a)({})
    },
  },
])
//# sourceMappingURL=WIPED
