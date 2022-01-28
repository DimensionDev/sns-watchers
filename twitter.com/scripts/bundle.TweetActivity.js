;(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    '6M1P': function (t, e, r) {
      'use strict'
      var n = r('WpDa'),
        c = r('rJrz'),
        a = r('ZNT5')
      e.a = function (t) {
        return Object(a.a)({
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
          staleIntervalMs: c.a,
        })
      }
    },
    Tt1Q: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'TweetActivityScreen', function () {
          return P
        })
      r('OZaJ')
      var n = r('VrFO'),
        c = r.n(n),
        a = r('Y9Ll'),
        o = r.n(a),
        i = r('5Yy7'),
        u = r.n(i),
        s = r('N+ot'),
        f = r.n(s),
        p = r('AuHH'),
        l = r.n(p),
        d = (r('2G9S'), r('ERkP')),
        y = r.n(d),
        v = (r('WNMA'), r('KqXw'), r('hqKg')),
        h = r('WpDa'),
        w = r('rJrz'),
        T = r('ZNT5'),
        m = function (t) {
          return Object(T.a)({
            timelineId: 'favoritersGraphQL-'.concat(t),
            getEndpoint: function (t) {
              return t.TweetActivity.fetchLikedBy
            },
            getEndpointParams: function (e) {
              var r = e.count,
                n = e.cursor
              return { count: r, cursor: 'string' == typeof n ? n : void 0, tweetId: t }
            },
            formatResponse: h.a,
            context: 'FETCH_TWEET_ACTIVITY_LIKES',
            perfKey: 'favoritersGraphQL',
            staleIntervalMs: w.a,
          })
        },
        E = r('6M1P'),
        b = r('oEGd'),
        I = { likes: m, retweets: E.a },
        g = Object(v.createSelector)(
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
            return { activityType: t, screenName: e, statusId: r, urtModule: I[t](r) }
          },
        ),
        L = Object(b.c)(g),
        R = r('jHSc'),
        k = r('3XMw'),
        A = r.n(k),
        J = r('fTQJ'),
        M = r('7JQg')
      function O(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var r,
            n = l()(t)
          if (e) {
            var c = l()(this).constructor
            r = Reflect.construct(n, arguments, c)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var _ = { likes: A.a.b13974f0, retweets: A.a.hfb8fd58 },
        N = { likes: A.a.f12858d3, retweets: A.a.d25289b4 },
        P = (function (t) {
          u()(r, t)
          var e = O(r)
          function r() {
            return c()(this, r), e.apply(this, arguments)
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.activityType,
                    r = t.history,
                    n = t.screenName,
                    c = t.statusId,
                    a = t.urtModule
                  return y.a.createElement(
                    R.b,
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(c), history: r, title: N[e] },
                    y.a.createElement(J.a, { loadingAccessibilityLabel: _[e], module: a, title: N[e] }),
                  )
                },
              },
            ]),
            r
          )
        })(y.a.PureComponent)
      e.default = Object(M.c)({ page: 'tweet_activity', section: 'tweet_activity' })(L(P))
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
