;(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('7x/C'), n('DZ+c'), n('KOtZ'), n('Ysgh'), n('KqXw'), n('tQbP'), n('7xRU')
      var r = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return o(n, 0).toString()
        },
        o = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, o = 0; o < n.length; o++) {
            ;(r = (r << 5) - r + n.charCodeAt(o)), (r &= r)
          }
          return r
        }
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        a = n.n(c),
        i = n('5Yy7'),
        l = n.n(i),
        u = n('N+ot'),
        s = n.n(u),
        f = n('AuHH'),
        d = n.n(f),
        p = n('ERkP'),
        h = n('rHpw'),
        y = n('MWbm')
      function v(e) {
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
          var n,
            r = d()(e)
          if (t) {
            var o = d()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      var m = (function (e) {
          l()(n, e)
          var t = v(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.createElement(y.a, { style: R.root })
                },
              },
            ]),
            n
          )
        })(p.Component),
        R = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = m
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        a = n.n(c),
        i = n('5Yy7'),
        l = n.n(i),
        u = n('N+ot'),
        s = n.n(u),
        f = n('AuHH'),
        d = n.n(f),
        p = n('ERkP'),
        h = n('3XMw'),
        y = n.n(h),
        v = n('rHpw'),
        m = n('+/1j'),
        R = n('MWbm')
      function E(e) {
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
          var n,
            r = d()(e)
          if (t) {
            var o = d()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      var w = y.a.e5b0063d,
        b = 0,
        g = (function (e) {
          l()(n, e)
          var t = E(n)
          function n() {
            var e
            return o()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(b)), (b += 1), e
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = w({ title: n })
                  return p.createElement(
                    R.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.createElement(
                      m.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: v.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.createElement(R.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component)
      t.a = g
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        o = n.n(r),
        c = n('ERkP'),
        a = n('5UID'),
        i = n('3GUV'),
        l = n('iBK2'),
        u = c.createElement(i.a, null),
        s = function (e) {
          var t = e.accessibilityTitle,
            n = o()(e, ['accessibilityTitle']),
            r = c.createElement(l.b, n)
          return t ? c.createElement(a.a, { title: t }, r) : r
        }
      ;(s.defaultProps = { footer: u }), (t.a = s)
    },
    gemt: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FollowerRequestsScreen', function () {
          return oe
        })
      n('OZaJ')
      var r,
        o = n('VrFO'),
        c = n.n(o),
        a = n('Y9Ll'),
        i = n.n(a),
        l = n('1Pcy'),
        u = n.n(l),
        s = n('5Yy7'),
        f = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        h = n('AuHH'),
        y = n.n(h),
        v = n('KEM+'),
        m = n.n(v),
        R = (n('2G9S'), n('ERkP')),
        E = (n('z84I'), n('xQWt')),
        w = n('hqKg'),
        b = n('rxPX'),
        g = n('0KEI'),
        O = n('kGix'),
        I = function (e) {
          return E.f(e).hydratedIds
        },
        F = Object(b.a)()
          .propsFromState(function () {
            return {
              followerRequestIds: I,
              fetchStatus: Object(w.createSelector)(E.f, E.g, E.h, function (e, t, n) {
                var r = e.hydratedIds,
                  o = e.ids
                return t === O.a.LOADED ? (o.length && r.length !== o.length ? n || O.a.LOADING : O.a.LOADED) : t
              }),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.followerRequestIds,
              n = void 0 === t ? [] : t
            return {
              fetchStatus: e.fetchStatus,
              timeline: n.map(function (e) {
                return { type: 'user_cell', data: e }
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('FOLLOWER_REQUESTS'),
              fetchPendingFollowersIfNeeded: E.d,
              fetchPendingFollowersUsersIfNeeded: E.e,
              fetchNextPendingFollowersUsers: E.c,
            }
          }),
        P = n('FIs5'),
        _ = n('v//M'),
        A = Object(b.a)().propsFromActions(function () {
          return {
            acceptPendingFollower: E.a,
            createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
              'FOLLOWER_REQUEST_ACTIONS_CONTAINER',
            ),
            declinePendingFollower: E.b,
          }
        }),
        L = n('k49u'),
        H = n('3XMw'),
        S = n.n(H),
        D = S.a.j85d8d9f,
        x = ((r = {}), m()(r, L.a.NoFollowRequest, { toast: { text: D } }), m()(r, 'showToast', !0), r),
        N = n('MWbm'),
        B = n('/yvb'),
        k = n('rHpw'),
        U = S.a.da878dcf,
        j = S.a.ec2d8341,
        q = k.a.create(function (e) {
          return {
            root: { paddingTop: e.spaces.space4, flexDirection: 'row', flexGrow: 1, justifyContent: 'center' },
            declineButton: { marginRight: e.spaces.space12 },
            followerRequestActionButton: { flexGrow: 1 },
          }
        }),
        C = function (e) {
          var t = e.onAccept,
            n = e.onDecline
          return R.createElement(
            N.a,
            { style: q.root },
            R.createElement(
              B.a,
              {
                accessibilityLabel: j,
                onPress: n,
                size: 'small',
                style: [q.followerRequestActionButton, q.declineButton],
                type: 'destructiveOutlined',
              },
              j,
            ),
            R.createElement(
              B.a,
              {
                accessibilityLabel: U,
                onPress: t,
                size: 'small',
                style: q.followerRequestActionButton,
                type: 'brandOutlined',
              },
              U,
            ),
          )
        }
      function T(e) {
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
          var n,
            r = y()(e)
          if (t) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var M = A(
          (function (e) {
            f()(n, e)
            var t = T(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                m()(u()(e), '_handleAccept', function () {
                  var t = e.props,
                    n = t.acceptPendingFollower,
                    r = t.createLocalApiErrorHandler
                  n({ id_str: t.userId }).catch(r(x))
                }),
                m()(u()(e), '_handleDecline', function () {
                  var t = e.props,
                    n = t.createLocalApiErrorHandler
                  ;(0, t.declinePendingFollower)({ id_str: t.userId }).catch(n(x))
                }),
                e
              )
            }
            return (
              i()(n, [
                {
                  key: 'render',
                  value: function () {
                    return R.createElement(C, { onAccept: this._handleAccept, onDecline: this._handleDecline })
                  },
                },
              ]),
              n
            )
          })(R.Component),
        ),
        W = n('jHSc'),
        Y = n('TEoO'),
        G = n('7JQg'),
        J = n('180P'),
        K = function (e) {
          return e && 'user_cell' === e.type ? e.data : Object(J.a)(e)
        },
        Q = n('Re5t'),
        V = n('88ay')
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
          var n,
            r = y()(e)
          if (t) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var X = S.a.ce281ddf,
        z = S.a.d441fe05,
        $ = S.a.i83d4f13,
        ee = { page: 'follower_requests' },
        te = function (e) {
          var t = e.followRequestReceived,
            n = e.loggedInUserId,
            r = e.userId
          return !(!t || n === r)
        },
        ne = function (e) {
          return te(e) ? null : Object(V.e)(e)
        },
        re = function (e) {
          return te(e) ? R.createElement(M, { userId: e.userId }) : null
        },
        oe = (function (e) {
          f()(n, e)
          var t = Z(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(u()(e), '_render', function () {
                var t = e.props.timeline
                return R.createElement(Y.a, {
                  accessibilityTitle: $,
                  assumedItemHeight: 75,
                  cacheKey: 'userFollowerRequests',
                  identityFunction: K,
                  items: t,
                  noItemsRenderer: e._renderEmptyState,
                  onNearEnd: e._handleNearEnd,
                  renderer: e._itemRenderer,
                })
              }),
              m()(u()(e), '_renderEmptyState', function () {
                return R.createElement(P.a, { header: X, message: z })
              }),
              m()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.fetchPendingFollowersIfNeeded,
                  o = t.fetchPendingFollowersUsersIfNeeded
                r().then(function () {
                  return o()
                }, n({}))
              }),
              m()(u()(e), '_itemRenderer', function (e) {
                return 'user_cell' === e.type
                  ? R.createElement(
                      N.a,
                      null,
                      R.createElement(V.b, {
                        bottomControl: re,
                        decoration: ne,
                        displayMode: Q.a.UserDetailed,
                        userId: e.data,
                        withFollowsYou: !0,
                      }),
                    )
                  : null
              }),
              m()(u()(e), '_handleNearEnd', function () {
                e.props.fetchNextPendingFollowersUsers()
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history
                  return R.createElement(
                    G.b,
                    { namespace: ee },
                    R.createElement(
                      W.b,
                      { history: n, title: $ },
                      R.createElement(_.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(R.Component),
        ce = F(oe)
      t.default = ce
    },
  },
])
//# sourceMappingURL=WIPED
