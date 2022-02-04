;(window.webpackJsonp = window.webpackJsonp || []).push([
  [178],
  {
    Gffe: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ProfileClusterFollowContainer', function () {
          return q
        })
      var r = n('yiKp'),
        o = n.n(r),
        a = n('VrFO'),
        s = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        c = n('1Pcy'),
        u = n.n(c),
        p = n('5Yy7'),
        m = n.n(p),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('2G9S'), n('z84I'), n('M+/F'), n('ERkP')),
        _ = n.n(y),
        w = n('Xs4Y'),
        I = n('kGix'),
        b = n('Rp9C'),
        C = n('lP98'),
        E = n('rxPX'),
        g = n('0KEI'),
        R = 'profile-cluster-follow',
        L = function (e, t) {
          return t.userId
        },
        k = function (e, t) {
          var n = L(0, t)
          return C.c(e, { displayLocation: R, similarToUserId: n })
        },
        F = function (e, t) {
          var n = L(0, t)
          return C.b(e, { displayLocation: R, similarToUserId: n })
        },
        O = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: F, recommendations: k }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: C.a,
            }
          })
          .withAnalytics(),
        A = n('3XMw'),
        U = n.n(A),
        M = n('hOZg'),
        P = n('Re5t'),
        T = n('hqDb'),
        x = n('MWbm'),
        B = n('/yvb'),
        D = n('zfvc'),
        H = n('0yYu'),
        S = n('6vad'),
        N = n('rHpw'),
        W = U.a.ba5a88e3,
        Y = U.a.a526aa66,
        z = _.a.createElement(M.a, null),
        G = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(u()(e), '_handleRemoveClusterFollow', function () {
                e.props.onRemoveClusterFollow()
              }),
              v()(u()(e), '_renderCloseButton', function () {
                return _.a.createElement(B.a, {
                  icon: z,
                  onPress: e._handleRemoveClusterFollow,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.userIds
                  return _.a.createElement(
                    D.b,
                    { animateMount: !0, duration: 'longer', show: !0, type: 'slide' },
                    _.a.createElement(
                      x.a,
                      { accessibilityLabel: Y, accessibilityRole: 'complementary', style: K.root },
                      _.a.createElement(H.a, null),
                      _.a.createElement(S.b, { rightControl: this._renderCloseButton(), text: W }),
                      _.a.createElement(T.a, {
                        displayMode: P.a.UserCompact,
                        userIds: e.slice(0, 3),
                        withItemBorder: !0,
                      }),
                      _.a.createElement(H.a, null),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        K = N.a.create(function (e) {
          return { root: { marginTop: e.spaces.space12 } }
        }),
        X = { component: 'suggest_profile_cluster_follow', element: 'user', action: 'results' },
        j = { component: 'suggest_profile_cluster_follow', element: 'close_button', action: 'click' },
        q = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_handleImpression', function (t) {
                var n = e.props.analytics,
                  r =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return o()(o()({}, b.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                n.scribe(o()(o()({}, X), {}, { data: { items: r } }))
              }),
              v()(u()(e), '_handleCloseButtonImpression', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onRemoveClusterFollow
                n.scribe(j), r()
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.recommendations
                  this._fetchRecommendations(this.props), e && e.length > 0 && this._handleImpression(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.recommendations
                  t !== e.recommendations && t && t.length > 0 && this._handleImpression(t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.recommendations,
                    t =
                      e &&
                      e.map(function (e) {
                        return e.user
                      })
                  return this._hasLoadedUsers()
                    ? _.a.createElement(G, { onRemoveClusterFollow: this._handleCloseButtonImpression, userIds: t })
                    : null
                },
              },
              {
                key: '_fetchRecommendations',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    n = e.fetchRecommendationsIfNeeded,
                    r = e.userId
                  n({ limit: 3, displayLocation: R, similarToUserId: r }).catch(t(w.a))
                },
              },
              {
                key: '_hasLoadedUsers',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.recommendations
                  return t === I.a.LOADED && n.length > 0
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        J = O(q)
      t.default = J
    },
  },
])
//# sourceMappingURL=WIPED
