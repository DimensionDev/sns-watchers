;(window.webpackJsonp = window.webpackJsonp || []).push([
  [173],
  {
    Gffe: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ProfileClusterFollowContainer', function () {
          return Q
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        s = r.n(a),
        c = r('1Pcy'),
        i = r.n(c),
        u = r('5Yy7'),
        l = r.n(u),
        f = r('N+ot'),
        d = r.n(f),
        p = r('AuHH'),
        m = r.n(p),
        h = r('KEM+'),
        y = r.n(h),
        v = (r('2G9S'), r('z84I'), r('M+/F'), r('ERkP')),
        O = r('Xs4Y'),
        b = r('kGix'),
        I = r('Rp9C'),
        E = r('lP98'),
        U = r('rxPX'),
        w = r('0KEI'),
        L = 'profile-cluster-follow',
        R = function (e, t) {
          return t.userId
        },
        _ = function (e, t) {
          var r = R(0, t)
          return E.c(e, { displayLocation: L, similarToUserId: r })
        },
        S = function (e, t) {
          var r = R(0, t)
          return E.b(e, { displayLocation: L, similarToUserId: r })
        },
        g = Object(U.a)()
          .propsFromState(function () {
            return { fetchStatus: S, recommendations: _ }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: E.a,
            }
          })
          .withAnalytics(),
        A = r('3XMw'),
        C = r.n(A),
        P = r('hOZg'),
        D = r('Re5t'),
        F = r('hqDb'),
        j = r('MWbm'),
        T = r('/yvb'),
        k = r('zfvc'),
        N = r('0yYu'),
        M = r('6vad'),
        x = r('rHpw')
      function H(e) {
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
          return d()(this, r)
        }
      }
      var B = C.a.ba5a88e3,
        G = C.a.a526aa66,
        K = v.createElement(P.a, null),
        W = (function (e) {
          l()(r, e)
          var t = H(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(i()(e), '_handleRemoveClusterFollow', function () {
                e.props.onRemoveClusterFollow()
              }),
              y()(i()(e), '_renderCloseButton', function () {
                return v.createElement(T.a, {
                  icon: K,
                  onPress: e._handleRemoveClusterFollow,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              e
            )
          }
          return (
            s()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.userIds
                  return v.createElement(
                    k.b,
                    { animateMount: !0, duration: 'longer', show: !0, type: 'slide' },
                    v.createElement(
                      j.a,
                      { accessibilityLabel: G, accessibilityRole: 'complementary', style: X.root },
                      v.createElement(N.a, null),
                      v.createElement(M.b, { rightControl: this._renderCloseButton(), text: B }),
                      v.createElement(F.a, {
                        displayMode: D.a.UserCompact,
                        userIds: e.slice(0, 3),
                        withItemBorder: !0,
                      }),
                      v.createElement(N.a, null),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(v.Component),
        X = x.a.create(function (e) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
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
          return d()(this, r)
        }
      }
      var z = { component: 'suggest_profile_cluster_follow', element: 'user', action: 'results' },
        q = { component: 'suggest_profile_cluster_follow', element: 'close_button', action: 'click' },
        Q = (function (e) {
          l()(r, e)
          var t = Z(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(i()(e), '_handleImpression', function (t) {
                var r = e.props.analytics,
                  n =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return J(J({}, I.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                r.scribe(J(J({}, z), {}, { data: { items: n } }))
              }),
              y()(i()(e), '_handleCloseButtonImpression', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.onRemoveClusterFollow
                r.scribe(q), n()
              }),
              e
            )
          }
          return (
            s()(r, [
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
                    ? v.createElement(W, { onRemoveClusterFollow: this._handleCloseButtonImpression, userIds: t })
                    : null
                },
              },
              {
                key: '_fetchRecommendations',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    r = e.fetchRecommendationsIfNeeded,
                    n = e.userId
                  r({ limit: 3, displayLocation: L, similarToUserId: n }).catch(t(O.a))
                },
              },
              {
                key: '_hasLoadedUsers',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    r = e.recommendations
                  return t === b.a.LOADED && r.length > 0
                },
              },
            ]),
            r
          )
        })(v.PureComponent),
        V = g(Q)
      t.default = V
    },
    Xs4Y: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return c
      })
      var n = r('KEM+'),
        o = r.n(n),
        a = r('k49u'),
        s = r('fs1G'),
        c = o()({}, a.a.ResourceNotFound, { customAction: s.a })
    },
    hqDb: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        s = r.n(a),
        c = r('VrFO'),
        i = r.n(c),
        u = r('Y9Ll'),
        l = r.n(u),
        f = r('1Pcy'),
        d = r.n(f),
        p = r('5Yy7'),
        m = r.n(p),
        h = r('N+ot'),
        y = r.n(h),
        v = r('AuHH'),
        O = r.n(v),
        b = r('KEM+'),
        I = r.n(b),
        E = (r('2G9S'), r('ERkP')),
        U = r('k49u'),
        w = (r('LW0h'), r('KOtZ'), r('vrRf'), r('6xIQ')),
        L = r('kGix'),
        R = r('G6rE'),
        _ = r('rxPX'),
        S = r('0KEI'),
        g = function (e, t) {
          return t.userIds
        },
        A = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!R.e.select(e, t)
          })
        },
        C = function (e, t) {
          return t.userIds.reduce(function (t, r) {
            var n = R.e.selectFetchStatus(e, r)
            return (t[r] = n === L.a.NONE ? L.a.LOADING : n), t
          }, {})
        },
        P = Object(_.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(w.a)(A, function (e) {
                return e
              }),
              fetchStatus: Object(w.a)(A, C, g, function (e, t, r) {
                for (var n = L.a.LOADED, o = 0; o < r.length; o++) {
                  var a = r[o]
                  if (-1 === e.indexOf(a)) {
                    var s = t[a] || L.a.LOADING
                    n = n === L.a.LOADED ? s : n
                  }
                  if (n === L.a.LOADED) break
                }
                return n
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: R.e.fetchManyIfNeeded,
            }
          }),
        D = r('v//M'),
        F = r('3XMw'),
        j = r.n(F),
        T = r('pQ3Z'),
        k = r.n(T),
        N = (r('z84I'), r('cFuS')),
        M = r('Re5t'),
        x = r('MWbm'),
        H = r('88ay'),
        B = function (e) {
          var t = e.displayMode,
            r = e.renderUserCell,
            n = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return E.createElement(
            x.a,
            null,
            n.map(function (e, n) {
              return r
                ? r(e)
                : E.createElement(H.b, {
                    decoration: H.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: N.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      B.defaultProps = { displayMode: M.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var G = B
      function K(e) {
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
            n = O()(e)
          if (t) {
            var o = O()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return y()(this, r)
        }
      }
      var W = j.a.f5b426c2,
        X = { viewType: 'user_list' },
        Y = P(
          (function (e) {
            m()(r, e)
            var t = K(r)
            function r() {
              var e
              i()(this, r)
              for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                I()(d()(e), 'state', { allUsersUnavailable: !1 }),
                I()(d()(e), '_renderContent', function () {
                  var t = e.props,
                    r = t.availableUserIds,
                    n =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      s()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return E.createElement(G, o()({}, n, { userIds: r }))
                }),
                I()(d()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              l()(r, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    k()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return E.createElement(D.a, {
                      accessibilityLabel: W,
                      behavioralEventContext: X,
                      fetchStatus: this.state.allUsersUnavailable ? L.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      r = this.props,
                      n = r.availableUserIds,
                      o = r.createLocalApiErrorHandler
                    ;(0, r.fetchUsersIfNeeded)(r.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      o(
                        ((e = {}),
                        I()(e, U.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        I()(e, U.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === n.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              r
            )
          })(E.Component),
        )
      t.a = Y
    },
    lP98: function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return E
      }),
        r.d(t, 'b', function () {
          return U
        }),
        r.d(t, 'a', function () {
          return w
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = (r('z84I'), r('JtPf'), r('7x/C'), r('/kEJ')),
        s = r('oEOe'),
        c = r('RgK2'),
        i = r.n(c),
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
      function d(e) {
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
      var p = 'recommendations',
        m = 'rweb/recommendations/FETCH_REQUEST',
        h = 'rweb/recommendations/FETCH_SUCCESS',
        y = 'rweb/recommendations/FETCH_FAILURE',
        v = {},
        O = function (e) {
          var t = e.displayLocation,
            r = e.similarToUserId
          return t + (r ? '_'.concat(r) : '')
        }
      l.a.register(
        o()({}, p, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case m:
              var r = O(t.meta)
              return d(d({}, e), {}, o()({}, r, d(d({}, e[r]), {}, { fetchStatus: u.a.LOADING })))
            case y:
              var n = O(t.meta)
              return d(d({}, e), {}, o()({}, n, d(d({}, e[n]), {}, { fetchStatus: u.a.FAILED })))
            case h:
              var a = O(t.meta),
                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: i.a },
                c = t.payload && t.payload.result ? t.payload.result : I,
                l = c.map(function (e) {
                  return s.recommendations[e]
                })
              return d(d({}, e), {}, o()({}, a, d(d({}, e[a]), {}, { fetchStatus: u.a.LOADED, recommendations: l })))
            default:
              return e
          }
        }),
      )
      var b = [],
        I = [],
        E = function (e, t) {
          var r = t.displayLocation,
            n = t.similarToUserId,
            o = e.recommendations[O({ displayLocation: r, similarToUserId: n })]
          return o && o.recommendations ? o.recommendations : b
        },
        U = function (e, t) {
          var r = t.displayLocation,
            n = t.similarToUserId,
            o = e.recommendations[O({ displayLocation: r, similarToUserId: n })]
          return o ? o.fetchStatus : u.a.NONE
        },
        w = function (e) {
          return function (t, r, n) {
            var o = r(),
              c = e.displayLocation,
              l = e.similarToUserId,
              f = E(o, { displayLocation: c, similarToUserId: l }),
              d = U(o, { displayLocation: c, similarToUserId: l }) === u.a.LOADED
            return f && d
              ? Promise.resolve(i.a)
              : t(
                  (function (e) {
                    return function (t, r, n) {
                      var o = n.api,
                        c = e.displayLocation,
                        i = e.itsInterests,
                        u = e.limit,
                        l = void 0 === u ? 30 : u,
                        f = e.similarToUserId
                      return Object(s.b)(t, {
                        request: o.Recommendations.fetch,
                        params: { display_location: c, itsInterests: i, limit: l, user_id: f },
                      })(
                        {
                          actionTypes: { REQUEST: m, SUCCESS: h, FAILURE: y },
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
