;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    '6M1P': function (t, e, r) {
      'use strict'
      var n = r('WpDa'),
        a = r('rJrz'),
        c = r('ZNT5')
      e.a = function (t) {
        return Object(c.a)({
          timelineId: 'retweetersGraphQL-'.concat(t),
          getEndpoint: function (t) {
            return t.TweetActivity.fetchRetweetedBy
          },
          getEndpointParams: function (e) {
            var r = e.count,
              n = e.cursor
            return { count: r, cursor: 'string' == typeof n ? n : void 0, tweetId: t }
          },
          formatResponse: n.a,
          context: 'FETCH_TWEET_ACTIVITY_RETWEETS',
          perfKey: 'retweetersGraphQL',
          staleIntervalMs: a.a,
        })
      }
    },
    Tt1Q: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'TweetActivityScreen', function () {
          return I
        })
      r('2G9S')
      var n = r('ERkP'),
        a = r.n(n),
        c = (r('KqXw'), r('WNMA'), r('hqKg')),
        i = r('WpDa'),
        o = r('rJrz'),
        s = r('ZNT5'),
        u = function (t) {
          return Object(s.a)({
            timelineId: 'favoritersGraphQL-'.concat(t),
            getEndpoint: function (t) {
              return t.TweetActivity.fetchLikedBy
            },
            getEndpointParams: function (e) {
              var r = e.count,
                n = e.cursor
              return { count: r, cursor: 'string' == typeof n ? n : void 0, tweetId: t }
            },
            formatResponse: i.a,
            context: 'FETCH_TWEET_ACTIVITY_LIKES',
            perfKey: 'favoritersGraphQL',
            staleIntervalMs: o.a,
          })
        },
        f = r('6M1P'),
        d = r('oEGd'),
        p = { likes: u, retweets: f.a },
        w = Object(c.createSelector)(
          function (t, e) {
            return e.match.params.activityType
          },
          function (t, e) {
            return e.match.params.screenName
          },
          function (t, e) {
            return e.match.params.statusId
          },
          function (t, e, r) {
            return { activityType: t, screenName: e, statusId: r, urtModule: p[t](r) }
          },
        ),
        T = Object(d.c)(w),
        l = r('jHSc'),
        v = r('3XMw'),
        y = r.n(v),
        m = r('fTQJ'),
        E = r('7JQg'),
        b = { likes: y.a.b13974f0, retweets: y.a.hfb8fd58 },
        h = { likes: y.a.f12858d3, retweets: y.a.d25289b4 }
      function I(t) {
        var e = t.activityType,
          r = t.history,
          n = t.screenName,
          c = t.statusId,
          i = t.urtModule
        return a.a.createElement(
          l.b,
          { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(c), history: r, title: h[e] },
          a.a.createElement(m.a, { loadingAccessibilityLabel: b[e], module: i, title: h[e] }),
        )
      }
      e.default = Object(E.a)({ page: 'tweet_activity', section: 'tweet_activity' })(T(I))
    },
    rJrz: function (t, e, r) {
      'use strict'
      r.d(e, 'a', function () {
        return n
      })
      var n = 1e4
    },
  },
])
//# sourceMappingURL=WIPED
