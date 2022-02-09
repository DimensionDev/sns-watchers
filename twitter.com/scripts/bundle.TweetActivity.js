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
          return O
        })
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        i = r.n(c),
        o = r('5Yy7'),
        s = r.n(o),
        u = r('2VqO'),
        f = r.n(u),
        p = (r('2G9S'), r('ERkP')),
        d = r.n(p),
        l = (r('KqXw'), r('WNMA'), r('hqKg')),
        y = r('WpDa'),
        v = r('rJrz'),
        w = r('ZNT5'),
        T = function (t) {
          return Object(w.a)({
            timelineId: 'favoritersGraphQL-'.concat(t),
            getEndpoint: function (t) {
              return t.TweetActivity.fetchLikedBy
            },
            getEndpointParams: function (e) {
              var r = e.count,
                n = e.cursor
              return { count: r, cursor: 'string' == typeof n ? n : void 0, tweetId: t }
            },
            formatResponse: y.a,
            context: 'FETCH_TWEET_ACTIVITY_LIKES',
            perfKey: 'favoritersGraphQL',
            staleIntervalMs: v.a,
          })
        },
        m = r('6M1P'),
        E = r('oEGd'),
        h = { likes: T, retweets: m.a },
        b = Object(l.createSelector)(
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
            return { activityType: t, screenName: e, statusId: r, urtModule: h[t](r) }
          },
        ),
        I = Object(E.c)(b),
        g = r('jHSc'),
        L = r('3XMw'),
        k = r.n(L),
        M = r('fTQJ'),
        _ = r('7JQg'),
        A = { likes: k.a.b13974f0, retweets: k.a.hfb8fd58 },
        J = { likes: k.a.f12858d3, retweets: k.a.d25289b4 },
        O = (function (t) {
          s()(r, t)
          var e = f()(r)
          function r() {
            return a()(this, r), e.apply(this, arguments)
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.activityType,
                    r = t.history,
                    n = t.screenName,
                    a = t.statusId,
                    c = t.urtModule
                  return d.a.createElement(
                    g.b,
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(a), history: r, title: J[e] },
                    d.a.createElement(M.a, { loadingAccessibilityLabel: A[e], module: c, title: J[e] }),
                  )
                },
              },
            ]),
            r
          )
        })(d.a.PureComponent)
      e.default = Object(_.c)({ page: 'tweet_activity', section: 'tweet_activity' })(I(O))
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
