;(window.webpackJsonp = window.webpackJsonp || []).push([
  [176],
  {
    Gffe: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ProfileClusterFollowContainer', function () {
          return V
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        s = r.n(c),
        u = r('5Yy7'),
        l = r.n(u),
        f = r('N+ot'),
        p = r.n(f),
        d = r('AuHH'),
        m = r.n(d),
        y = r('KEM+'),
        h = r.n(y),
        v = (r('2G9S'), r('z84I'), r('M+/F'), r('ERkP')),
        O = r.n(v),
        b = r('Xs4Y'),
        E = r('kGix'),
        w = r('Rp9C'),
        I = r('lP98'),
        R = r('rxPX'),
        g = r('0KEI'),
        _ = 'profile-cluster-follow',
        L = function (e, t) {
          return t.userId
        },
        P = function (e, t) {
          var r = L(0, t)
          return I.c(e, { displayLocation: _, similarToUserId: r })
        },
        j = function (e, t) {
          var r = L(0, t)
          return I.b(e, { displayLocation: _, similarToUserId: r })
        },
        C = Object(R.a)()
          .propsFromState(function () {
            return { fetchStatus: j, recommendations: P }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: I.a,
            }
          })
          .withAnalytics(),
        T = r('3XMw'),
        U = r.n(T),
        S = r('hOZg'),
        F = r('Re5t'),
        D = r('hqDb'),
        A = r('MWbm'),
        k = r('/yvb'),
        x = r('zfvc'),
        H = r('0yYu'),
        M = r('6vad'),
        N = r('rHpw')
      function B(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var K = U.a.ba5a88e3,
        G = U.a.a526aa66,
        W = O.a.createElement(S.a, null),
        X = (function (e) {
          l()(r, e)
          var t = B(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              h()(s()(e), '_handleRemoveClusterFollow', function () {
                e.props.onRemoveClusterFollow()
              }),
              h()(s()(e), '_renderCloseButton', function () {
                return O.a.createElement(k.a, {
                  icon: W,
                  onPress: e._handleRemoveClusterFollow,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              e
            )
          }
          return (
            i()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.userIds
                  return O.a.createElement(
                    x.b,
                    { animateMount: !0, duration: 'longer', show: !0, type: 'slide' },
                    O.a.createElement(
                      A.a,
                      { accessibilityLabel: G, accessibilityRole: 'complementary', style: J.root },
                      O.a.createElement(H.a, null),
                      O.a.createElement(M.b, { rightControl: this._renderCloseButton(), text: K }),
                      O.a.createElement(D.a, {
                        displayMode: F.a.UserCompact,
                        userIds: e.slice(0, 3),
                        withItemBorder: !0,
                      }),
                      O.a.createElement(H.a, null),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(O.a.Component),
        J = N.a.create(function (e) {
          return { root: { marginTop: e.spaces.space12 } }
        })
      function Y(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(r), !0).forEach(function (t) {
                h()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Y(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function Z(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var q = { component: 'suggest_profile_cluster_follow', element: 'user', action: 'results' },
        Q = { component: 'suggest_profile_cluster_follow', element: 'close_button', action: 'click' },
        V = (function (e) {
          l()(r, e)
          var t = Z(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              h()(s()(e), '_handleImpression', function (t) {
                var r = e.props.analytics,
                  n =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return z(z({}, w.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                r.scribe(z(z({}, q), {}, { data: { items: n } }))
              }),
              h()(s()(e), '_handleCloseButtonImpression', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.onRemoveClusterFollow
                r.scribe(Q), n()
              }),
              e
            )
          }
          return (
            i()(r, [
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
                    ? O.a.createElement(X, { onRemoveClusterFollow: this._handleCloseButtonImpression, userIds: t })
                    : null
                },
              },
              {
                key: '_fetchRecommendations',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    r = e.fetchRecommendationsIfNeeded,
                    n = e.userId
                  r({ limit: 3, displayLocation: _, similarToUserId: n }).catch(t(b.a))
                },
              },
              {
                key: '_hasLoadedUsers',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.recommendations
                  return t === E.a.LOADED && r.length > 0
                },
              },
            ]),
            r
          )
        })(O.a.PureComponent),
        $ = C(V)
      t.default = $
    },
    Xs4Y: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return c
      })
      var n = r('KEM+'),
        o = r.n(n),
        a = r('k49u'),
        i = r('fs1G'),
        c = o()({}, a.a.ResourceNotFound, { customAction: i.a })
    },
    lP98: function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return w
      }),
        r.d(t, 'b', function () {
          return I
        }),
        r.d(t, 'a', function () {
          return R
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = (r('z84I'), r('JtPf'), r('7x/C'), r('/kEJ')),
        i = r('oEOe'),
        c = r('RgK2'),
        s = r.n(c),
        u = r('kGix'),
        l = r('Ssj5')
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var d = 'recommendations',
        m = 'rweb/recommendations/FETCH_REQUEST',
        y = 'rweb/recommendations/FETCH_SUCCESS',
        h = 'rweb/recommendations/FETCH_FAILURE',
        v = {},
        O = function (e) {
          var t = e.displayLocation,
            r = e.similarToUserId
          return t + (r ? '_'.concat(r) : '')
        }
      l.a.register(
        o()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case m:
              var r = O(t.meta)
              return p(p({}, e), {}, o()({}, r, p(p({}, e[r]), {}, { fetchStatus: u.a.LOADING })))
            case h:
              var n = O(t.meta)
              return p(p({}, e), {}, o()({}, n, p(p({}, e[n]), {}, { fetchStatus: u.a.FAILED })))
            case y:
              var a = O(t.meta),
                i = t.payload && t.payload.entities ? t.payload.entities : { recommendations: s.a },
                c = t.payload && t.payload.result ? t.payload.result : E,
                l = c.map(function (e) {
                  return i.recommendations[e]
                })
              return p(p({}, e), {}, o()({}, a, p(p({}, e[a]), {}, { fetchStatus: u.a.LOADED, recommendations: l })))
            default:
              return e
          }
        }),
      )
      var b = [],
        E = [],
        w = function (e, t) {
          var r = t.displayLocation,
            n = t.similarToUserId,
            o = e.recommendations[O({ displayLocation: r, similarToUserId: n })]
          return o && o.recommendations ? o.recommendations : b
        },
        I = function (e, t) {
          var r = t.displayLocation,
            n = t.similarToUserId,
            o = e.recommendations[O({ displayLocation: r, similarToUserId: n })]
          return o ? o.fetchStatus : u.a.NONE
        },
        R = function (e) {
          return function (t, r, n) {
            var o = r(),
              c = e.displayLocation,
              l = e.similarToUserId,
              f = w(o, { displayLocation: c, similarToUserId: l }),
              p = I(o, { displayLocation: c, similarToUserId: l }) === u.a.LOADED
            return f && p
              ? Promise.resolve(s.a)
              : t(
                  (function (e) {
                    return function (t, r, n) {
                      var o = n.api,
                        c = e.displayLocation,
                        s = e.itsInterests,
                        u = e.limit,
                        l = void 0 === u ? 30 : u,
                        f = e.similarToUserId
                      return Object(i.b)(t, {
                        request: o.Recommendations.fetch,
                        params: { display_location: c, itsInterests: s, limit: l, user_id: f },
                      })(
                        {
                          actionTypes: { REQUEST: m, SUCCESS: y, FAILURE: h },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: c, similarToUserId: f },
                        },
                        function (e) {
                          if (e && e.entities) return [Object(a.c)(e.entities)]
                        },
                      )
                    }
                  })(e),
                )
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
