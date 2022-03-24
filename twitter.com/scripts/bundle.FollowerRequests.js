;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    '180P': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('TJCb'), r('7x/C'), r('DZ+c'), r('KOtZ'), r('0zG9'), r('KqXw'), r('Ysgh'), r('tQbP'), r('7xRU')
      var n = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var r = t.join('')
          return a(r, 0).toString()
        },
        a = function (e, t) {
          for (var r = 'string' == typeof e ? e : String(e), n = t, a = 0; a < r.length; a++) {
            ;(n = (n << 5) - n + r.charCodeAt(a)), (n &= n)
          }
          return n
        }
    },
    e5HP: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return N
      })
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('2VqO'),
        u = r.n(s),
        d = r('KEM+'),
        f = r.n(d),
        h = r('ERkP'),
        p = r.n(h),
        m = r('t62R'),
        y = r('3XMw'),
        v = r.n(y),
        g = r('rHpw'),
        w = r('MWbm'),
        b = r('yiKp'),
        E = r.n(b),
        I = r('Lsrn'),
        F = r('k/Ka'),
        P = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [I.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      P.metadata = { width: 24, height: 24 }
      var _ = P,
        L = r('uFYP'),
        O = v.a.f1a1b790,
        R = v.a.if2bf8b3,
        A = v.a.f3624b5c,
        S = v.a.b4b3b113,
        C = v.a.be22205f,
        x = v.a.hcbbe447,
        N = (function (e) {
          l()(r, e)
          var t = u()(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    r = e.nativeID,
                    n = e.style,
                    a = e.withCircleIcon ? _ : L.a
                  return p.a.createElement(
                    w.a,
                    { style: [D.root, n] },
                    p.a.createElement(a, { style: [D.icon, t && D[t]] }),
                    p.a.createElement(m.b, { color: t, nativeID: r, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    r = e.label,
                    n = e.promotedContent,
                    a = n.adMetadataContainer,
                    o = n.advertiser,
                    c = n.advertiser_name,
                    i = n.disclosure_type,
                    l = t && o && t === o.id_str,
                    s = 'string' == typeof i && 'political' === i.toLowerCase(),
                    u = 'string' == typeof i && 'issue' === i.toLowerCase(),
                    d = !(!a || 'POLITICAL' !== a.disclaimerType) || s,
                    f = !(!a || 'ISSUE' !== a.disclaimerType) || u,
                    h = (a || {}).removePromotedAttributionForPreroll
                  return (
                    r ||
                    (!c || l || h
                      ? d
                        ? A
                        : f
                        ? C
                        : R
                      : d
                      ? S({ fullName: c })
                      : f
                      ? x({ fullName: c })
                      : O({ fullName: c }))
                  )
                },
              },
            ]),
            r
          )
        })(p.a.Component)
      f()(N, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var D = g.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    gemt: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'FollowerRequestsScreen', function () {
          return te
        })
      var n,
        a = r('VrFO'),
        o = r.n(a),
        c = r('Y9Ll'),
        i = r.n(c),
        l = r('1Pcy'),
        s = r.n(l),
        u = r('5Yy7'),
        d = r.n(u),
        f = r('2VqO'),
        h = r.n(f),
        p = r('KEM+'),
        m = r.n(p),
        y = (r('2G9S'), r('ERkP')),
        v = r.n(y),
        g = (r('z84I'), r('xQWt')),
        w = r('hqKg'),
        b = r('rxPX'),
        E = r('0KEI'),
        I = r('kGix'),
        F = function (e) {
          return g.f(e).hydratedIds
        },
        P = Object(b.a)()
          .propsFromState(function () {
            return {
              followerRequestIds: F,
              fetchStatus: Object(w.createSelector)(g.f, g.g, g.h, function (e, t, r) {
                var n = e.hydratedIds,
                  a = e.ids
                return t === I.a.LOADED ? (a.length && n.length !== a.length ? r || I.a.LOADING : I.a.LOADED) : t
              }),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.followerRequestIds,
              r = void 0 === t ? [] : t
            return {
              fetchStatus: e.fetchStatus,
              timeline: r.map(function (e) {
                return { type: 'user_cell', data: e }
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('FOLLOWER_REQUESTS'),
              fetchPendingFollowersIfNeeded: g.d,
              fetchPendingFollowersUsersIfNeeded: g.e,
              fetchNextPendingFollowersUsers: g.c,
            }
          }),
        _ = r('FIs5'),
        L = r('v//M'),
        O = Object(b.a)().propsFromActions(function () {
          return {
            acceptPendingFollower: g.a,
            createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
              'FOLLOWER_REQUEST_ACTIONS_CONTAINER',
            ),
            declinePendingFollower: g.b,
          }
        }),
        R = r('k49u'),
        A = r('3XMw'),
        S = r.n(A),
        C = S.a.j85d8d9f,
        x = ((n = {}), m()(n, R.a.NoFollowRequest, { toast: { text: C } }), m()(n, 'showToast', !0), n),
        N = r('MWbm'),
        D = r('/yvb'),
        k = r('rHpw'),
        q = S.a.da878dcf,
        H = S.a.ec2d8341,
        j = k.a.create(function (e) {
          return {
            root: { paddingTop: e.spaces.space4, flexDirection: 'row', flexGrow: 1, justifyContent: 'center' },
            declineButton: { marginRight: e.spaces.space12 },
            followerRequestActionButton: { flexGrow: 1 },
          }
        }),
        M = function (e) {
          var t = e.onAccept,
            r = e.onDecline
          return v.a.createElement(
            N.a,
            { style: j.root },
            v.a.createElement(
              D.a,
              {
                accessibilityLabel: H,
                onPress: r,
                size: 'small',
                style: [j.followerRequestActionButton, j.declineButton],
                type: 'destructiveOutlined',
              },
              H,
            ),
            v.a.createElement(
              D.a,
              {
                accessibilityLabel: q,
                onPress: t,
                size: 'small',
                style: j.followerRequestActionButton,
                type: 'brandOutlined',
              },
              q,
            ),
          )
        },
        T = O(
          (function (e) {
            d()(r, e)
            var t = h()(r)
            function r() {
              var e
              o()(this, r)
              for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                m()(s()(e), '_handleAccept', function () {
                  var t = e.props,
                    r = t.acceptPendingFollower,
                    n = t.createLocalApiErrorHandler
                  r({ id_str: t.userId }).catch(n(x))
                }),
                m()(s()(e), '_handleDecline', function () {
                  var t = e.props,
                    r = t.createLocalApiErrorHandler
                  ;(0, t.declinePendingFollower)({ id_str: t.userId }).catch(r(x))
                }),
                e
              )
            }
            return (
              i()(r, [
                {
                  key: 'render',
                  value: function () {
                    return v.a.createElement(M, { onAccept: this._handleAccept, onDecline: this._handleDecline })
                  },
                },
              ]),
              r
            )
          })(v.a.Component),
        ),
        K = r('jHSc'),
        U = r('TEoO'),
        z = r('7JQg'),
        Y = r('180P'),
        B = function (e) {
          return e && 'user_cell' === e.type ? e.data : Object(Y.a)(e)
        },
        V = r('Re5t'),
        W = r('88ay'),
        G = S.a.ce281ddf,
        J = S.a.d441fe05,
        Q = S.a.i83d4f13,
        X = { page: 'follower_requests' },
        Z = function (e) {
          var t = e.followRequestReceived,
            r = e.loggedInUserId,
            n = e.userId
          return !(!t || r === n)
        },
        $ = function (e) {
          return Z(e) ? null : Object(W.e)(e)
        },
        ee = function (e) {
          return Z(e) ? v.a.createElement(T, { userId: e.userId }) : null
        },
        te = (function (e) {
          d()(r, e)
          var t = h()(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(s()(e), '_render', function () {
                var t = e.props.timeline
                return v.a.createElement(U.a, {
                  accessibilityTitle: Q,
                  assumedItemHeight: 75,
                  cacheKey: 'userFollowerRequests',
                  identityFunction: B,
                  items: t,
                  noItemsRenderer: e._renderEmptyState,
                  onNearEnd: e._handleNearEnd,
                  renderer: e._itemRenderer,
                })
              }),
              m()(s()(e), '_renderEmptyState', function () {
                return v.a.createElement(_.a, { header: G, message: J })
              }),
              m()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler,
                  n = t.fetchPendingFollowersIfNeeded,
                  a = t.fetchPendingFollowersUsersIfNeeded
                n().then(function () {
                  return a()
                }, r({}))
              }),
              m()(s()(e), '_itemRenderer', function (e) {
                return 'user_cell' === e.type
                  ? v.a.createElement(
                      N.a,
                      null,
                      v.a.createElement(W.b, {
                        bottomControl: ee,
                        decoration: $,
                        displayMode: V.a.UserDetailed,
                        userId: e.data,
                        withFollowsYou: !0,
                      }),
                    )
                  : null
              }),
              m()(s()(e), '_handleNearEnd', function () {
                e.props.fetchNextPendingFollowersUsers()
              }),
              e
            )
          }
          return (
            i()(r, [
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
                    r = e.history
                  return v.a.createElement(
                    z.c,
                    { namespace: X },
                    v.a.createElement(
                      K.b,
                      { history: r, title: Q },
                      v.a.createElement(L.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(v.a.Component),
        re = P(te)
      t.default = re
    },
    uFYP: function (e, t, r) {
      'use strict'
      var n = r('yiKp'),
        a = r.n(n),
        o = r('ERkP'),
        c = r.n(o),
        i = r('Lsrn'),
        l = r('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
