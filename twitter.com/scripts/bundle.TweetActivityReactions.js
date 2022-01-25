;(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        o = n('5Yy7'),
        u = n.n(o),
        l = n('N+ot'),
        s = n.n(l),
        f = n('AuHH'),
        p = n.n(f),
        d = n('ERkP'),
        m = n('rHpw'),
        y = n('MWbm')
      function h(e) {
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
            r = p()(e)
          if (t) {
            var i = p()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      var v = (function (e) {
          u()(n, e)
          var t = h(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return d.createElement(y.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(d.Component),
        b = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        o = n('5Yy7'),
        u = n.n(o),
        l = n('N+ot'),
        s = n.n(l),
        f = n('AuHH'),
        p = n.n(f),
        d = n('ERkP'),
        m = n('3XMw'),
        y = n.n(m),
        h = n('rHpw'),
        v = n('+/1j'),
        b = n('MWbm')
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
            r = p()(e)
          if (t) {
            var i = p()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      var T = y.a.e5b0063d,
        w = 0,
        R = (function (e) {
          u()(n, e)
          var t = E(n)
          function n() {
            var e
            return i()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(w)), (w += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = T({ title: n })
                  return d.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    d.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: h.a.visuallyHidden,
                      },
                      n,
                    ),
                    d.createElement(b.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      t.a = R
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        i = n.n(r),
        a = n('ERkP'),
        c = n('5UID'),
        o = n('3GUV'),
        u = n('iBK2'),
        l = a.createElement(o.a, null),
        s = function (e) {
          var t = e.accessibilityTitle,
            n = i()(e, ['accessibilityTitle']),
            r = a.createElement(u.b, n)
          return t ? a.createElement(c.a, { title: t }, r) : r
        }
      ;(s.defaultProps = { footer: l }), (t.a = s)
    },
    'jv9/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'truncateNumber', function () {
          return le
        }),
        n.d(t, 'TweetActivityReactionsScreen', function () {
          return pe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        i = n.n(r),
        a = n('VrFO'),
        c = n.n(a),
        o = n('Y9Ll'),
        u = n.n(o),
        l = n('1Pcy'),
        s = n.n(l),
        f = n('5Yy7'),
        p = n.n(f),
        d = n('N+ot'),
        m = n.n(d),
        y = n('AuHH'),
        h = n.n(y),
        v = n('KEM+'),
        b = n.n(v),
        E = (n('7x/C'), n('DZ+c'), n('2G9S'), n('LW0h'), n('z84I'), n('KOtZ'), n('tQbP'), n('ERkP')),
        T = (n('WNMA'), n('KqXw'), n('rxPX')),
        w = n('0KEI'),
        R = (n('yH/f'), n('/kEJ')),
        O = n('oEOe'),
        I = n('kGix'),
        _ = n('Ssj5')
      function g(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = 'tweetReactionTimeline',
        A = { tweetReactionTimelines: {} },
        P = Object.freeze({
          REQUEST: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_REQUEST',
          SUCCESS: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_SUCCESS',
          FAILURE: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_FAILURE',
        })
      function H() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t.meta) return e
        switch (t.type) {
          case P.REQUEST:
            return S(
              S({}, e),
              {},
              {
                tweetReactionTimelines: S(
                  S({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: I.a.LOADING, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          case P.SUCCESS:
            return S(
              S({}, e),
              {},
              {
                tweetReactionTimelines: S(
                  S({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: I.a.LOADED, tweetReactionTimeline: t.payload }),
                ),
              },
            )
          case P.FAILURE:
            return S(
              S({}, e),
              {},
              {
                tweetReactionTimelines: S(
                  S({}, e.tweetReactionTimelines),
                  {},
                  b()({}, t.meta.tweetId, { fetchStatus: I.a.FAILED, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          default:
            return e
        }
      }
      _.a.register(b()({}, j, H))
      var D = function (e) {
          return function (t, n, r) {
            var i = r.api
            return Object(O.b)(t, { request: i.TweetActivity.fetchReactedBy, params: e })(
              { actionTypes: P, context: 'FETCH_TWEET_REACTION_TIMELINE', meta: e },
              function (e) {
                if (e) return [Object(R.c)({ users: e.userEntities })]
              },
            )
          }
        },
        L = n('XOJV'),
        C = function (e, t) {
          return t.match.params.statusId
        },
        k = function (e, t) {
          return t.match.params.screenName
        },
        F = function (e, t) {
          var n = t.match.params.statusId
          return L.a.select(e, n)
        },
        N = function (e, t) {
          return (function (e, t) {
            var n
            return null === (n = e[j].tweetReactionTimelines[t]) || void 0 === n ? void 0 : n.tweetReactionTimeline
          })(e, t.match.params.statusId)
        },
        x = function (e, t) {
          return (function (e, t) {
            var n
            return (null === (n = e[j].tweetReactionTimelines[t]) || void 0 === n ? void 0 : n.fetchStatus) || I.a.NONE
          })(e, t.match.params.statusId)
        },
        U = Object(T.a)()
          .propsFromState(function () {
            return { tweet: F, fetchStatus: x, reactionTimeline: N, screenName: k, statusId: C }
          })
          .propsFromActions(function () {
            return {
              fetchTweetReactionTimeline: D,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_ACTIVITY_REACTIONS',
              ),
            }
          })
          .withAnalytics({ page: 'reactions_detail' }),
        M = n('jHSc'),
        W = n('3XMw'),
        B = n.n(W),
        K = n('TEoO'),
        Y = n('Re5t'),
        J = n('MWbm'),
        V = n('de1q'),
        X = n('t62R'),
        G = n('k/OQ'),
        Z = n('FIs5'),
        Q = n('G1WX'),
        q = n('rHpw'),
        z = n('v6aA'),
        $ = n('88ay')
      function ee(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ne(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var re = B.a.aca3184d,
        ie = B.a.h7f7183f,
        ae = { Like: B.a.d4c3c63a, Haha: B.a.d40cca4c, Hmm: B.a.cb46dd2a, Sad: B.a.b65bb361, Cheer: B.a.d02b6077 },
        ce = B.a.jeb4436c,
        oe = B.a.db29b5a9,
        ue = B.a.c0098d49,
        le = B.a.d58baa7e,
        se = function (e) {
          return Object($.e)(e)
        },
        fe = function (e) {
          return e.index.toString()
        },
        pe = (function (e) {
          p()(n, e)
          var t = ne(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(
                s()(e),
                '_reactionsLegacyHeartEnabled',
                e.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              b()(s()(e), '_handleFetchTimeline', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetReactionTimeline)({ tweetId: t.statusId }).catch(n())
              }),
              b()(s()(e), '_render', function () {
                var t,
                  n = e.props,
                  r = n.location,
                  i = n.reactionTimeline,
                  a = null == i ? void 0 : i.reactionTimeline,
                  c = null === (t = r.state) || void 0 === t ? void 0 : t.reactionType
                return (
                  c &&
                    a &&
                    (a = a.filter(function (e) {
                      return e.reactionType === c
                    })),
                  E.createElement(
                    E.Fragment,
                    null,
                    e._renderTabs(),
                    a
                      ? E.createElement(K.a, {
                          accessibilityRole: 'tablist',
                          accessibilityTitle: ue,
                          assumedItemHeight: 75,
                          cacheKey: 'tweetActivityReactions',
                          identityFunction: fe,
                          items: a.map(function (e, t) {
                            return te(te({}, e), {}, { index: t })
                          }),
                          noItemsRenderer: e._renderEmptyState,
                          renderer: e._itemRenderer,
                          withKeyboardShortcuts: !0,
                        })
                      : null,
                  )
                )
              }),
              b()(s()(e), '_isActive', function (t) {
                var n,
                  r = e.props.location,
                  i = (t.state && t.state.reactionType) || void 0
                return (
                  (t.pathname || t) === r.pathname &&
                  i === (null === (n = r.state) || void 0 === n ? void 0 : n.reactionType)
                )
              }),
              b()(s()(e), '_getTab', function (t, n) {
                var r = n && le(n)
                return {
                  isActive: e._isActive,
                  key: t,
                  to: { state: { reactionType: t, lockScroll: !0 }, pathname: location.pathname },
                  label: E.createElement(
                    J.a,
                    { style: de.tab },
                    E.createElement(V.a, {
                      legacyHeart: e._reactionsLegacyHeartEnabled,
                      reactionType: t,
                      style: de.tabDecoration,
                      withAnimation: !1,
                    }),
                    E.createElement(X.b, null, ae[t]({ count: r || '' })),
                  ),
                }
              }),
              b()(s()(e), '_renderTabs', function () {
                var t = e.props,
                  n = t.location,
                  r = t.reactionTimeline,
                  a = null == r ? void 0 : r.reactionCounts,
                  c =
                    a &&
                    a.filter(function (e) {
                      return e.count > 0
                    }).length > 1,
                  o =
                    (a &&
                      a.reduce(function (e, t) {
                        return (t.count || 0) + e
                      }, 0)) ||
                    0,
                  u = o && le(o)
                if (!c || !a) return null
                var l = a
                    .sort(function (e, t) {
                      return t.count - e.count
                    })
                    .filter(function (e) {
                      return e.count > 0
                    }),
                  s = [{ isActive: e._isActive, key: 'all', to: n.pathname, label: ie({ count: u }) }].concat(
                    i()(
                      l.map(function (t) {
                        return e._getTab(t.type, t.count)
                      }),
                    ),
                  )
                return E.createElement(G.a, { links: s })
              }),
              b()(s()(e), '_renderEmptyState', function () {
                return E.createElement(Z.a, { header: ce, message: oe })
              }),
              b()(s()(e), '_itemRenderer', function (t, n) {
                var r = E.createElement(V.a, {
                  legacyHeart: e._reactionsLegacyHeartEnabled,
                  reactionType: t.reactionType,
                  style: de.avatarDecoration,
                  withAnimation: !1,
                })
                return (
                  n && n(!0),
                  E.createElement($.b, {
                    avatarDecoration: r,
                    decoration: se,
                    displayMode: Y.a.UserDetailed,
                    userId: t.user,
                    withFollowsYou: !0,
                  })
                )
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTimeline()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    n,
                    r = this.props,
                    i = r.analytics,
                    a = null === (t = r.location.state) || void 0 === t ? void 0 : t.reactionType
                  ;(null === (n = e.location.state) || void 0 === n ? void 0 : n.reactionType) !== a &&
                    i.scribe({ section: (null == a ? void 0 : a.toLowerCase()) || 'all', action: 'show' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    r = e.screenName,
                    i = e.statusId
                  return E.createElement(
                    M.b,
                    { backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(i), history: n, title: ue },
                    E.createElement(Q.a, {
                      accessibilityLabel: re,
                      fetchStatus: t,
                      onRequestRetry: this._handleFetchTimeline,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(E.PureComponent)
      b()(pe, 'contextType', z.a)
      var de = q.a.create(function (e) {
          return {
            tab: { alignItems: 'center', flexDirection: 'row' },
            avatarDecoration: {
              width: '1.2em',
              height: '1.2em',
              position: 'absolute',
              top: e.spaces.space32,
              right: 0,
            },
            tabDecoration: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
          }
        }),
        me = U(pe)
      t.default = me
    },
  },
])
//# sourceMappingURL=WIPED
