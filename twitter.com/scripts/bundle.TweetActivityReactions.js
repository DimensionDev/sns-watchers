;(window.webpackJsonp = window.webpackJsonp || []).push([
  [103],
  {
    de1q: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return M
      })
      var n,
        i,
        r = a('ERkP'),
        c = a.n(r),
        o = a('38/B'),
        s = a('q1bs'),
        l = a('Eqye'),
        u = a('uCrx'),
        m = a('yiKp'),
        d = a.n(m),
        h = a('KEM+'),
        p = a.n(h),
        f = a.p + 'cheer.6249ab45.png',
        y = a.p + 'haha.c0b42cb5.png',
        b = a.p + 'hmm.bc35b1e5.png',
        v = a('3rX5'),
        E = a.p + 'like.7a3e9685.png',
        T = a('kSIJ'),
        w = a('mJtw'),
        g = a.p + 'sad.f12709e5.png',
        I = a('rHpw'),
        R = a('MWbm'),
        _ =
          ((n = {}),
          p()(n, w.a.Like, E),
          p()(n, w.a.Haha, y),
          p()(n, w.a.Hmm, b),
          p()(n, w.a.Sad, g),
          p()(n, w.a.Cheer, f),
          n),
        C = I.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: d()({}, I.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        S = function (e) {
          var t = e.reactionType
          return c.a.createElement(
            R.a,
            { style: C.fillContainer },
            c.a.createElement(v.a, { accessibilityLabel: T.a[t], source: _[t], style: C.reactionSelectedIcon }),
            c.a.createElement(R.a, { style: [C.reactionSelectedIcon, C.imageCover] }),
          )
        },
        k = a('DQLs'),
        L =
          ((i = {}),
          p()(i, w.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          p()(i, w.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          p()(i, w.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          p()(i, w.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          p()(i, w.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          i),
        H = function (e) {
          var t = e.reactionType,
            a = s.b.get(L[t])
          return (
            (a && 'boolean' != typeof a) || (a = L[t]), c.a.createElement(k.a, { animation: a, autoplay: !0, loop: !0 })
          )
        },
        A = function () {
          var e = window.navigator.deviceMemory
          return o.a.reducedMotionEnabled || l.a.isEnabled || (e && e < 4)
        },
        O = function (e) {
          var t = e.legacyHeart,
            a = e.reactionType,
            n = e.style,
            i = e.withAnimation,
            r = void 0 !== i && i,
            o = !A() && r ? H : S
          return t && a === w.a.Like
            ? c.a.createElement(R.a, { style: [F.root, F.legacyHeart, n] }, c.a.createElement(u.a, { style: F.root }))
            : c.a.createElement(R.a, { style: [F.root, n] }, c.a.createElement(o, { reactionType: a }))
        },
        F = I.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        M = function () {
          c.a.useEffect(function () {
            A() || (s.b.check(L.Hmm), s.b.check(L.Sad), s.b.check(L.Haha), s.b.check(L.Cheer), s.b.check(L.Like))
          }, [])
        }
      t.a = c.a.memo(O)
    },
    e5HP: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return F
      })
      var n = a('VrFO'),
        i = a.n(n),
        r = a('Y9Ll'),
        c = a.n(r),
        o = a('5Yy7'),
        s = a.n(o),
        l = a('2VqO'),
        u = a.n(l),
        m = a('KEM+'),
        d = a.n(m),
        h = a('ERkP'),
        p = a.n(h),
        f = a('t62R'),
        y = a('3XMw'),
        b = a.n(y),
        v = a('rHpw'),
        E = a('MWbm'),
        T = a('yiKp'),
        w = a.n(T),
        g = a('Lsrn'),
        I = a('k/Ka'),
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
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
      R.metadata = { width: 24, height: 24 }
      var _ = R,
        C = a('uFYP'),
        S = b.a.f1a1b790,
        k = b.a.if2bf8b3,
        L = b.a.f3624b5c,
        H = b.a.b4b3b113,
        A = b.a.be22205f,
        O = b.a.hcbbe447,
        F = (function (e) {
          s()(a, e)
          var t = u()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    a = e.nativeID,
                    n = e.style,
                    i = e.withCircleIcon ? _ : C.a
                  return p.a.createElement(
                    E.a,
                    { style: [M.root, n] },
                    p.a.createElement(i, { style: [M.icon, t && M[t]] }),
                    p.a.createElement(f.b, { color: t, nativeID: a, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    a = e.label,
                    n = e.promotedContent,
                    i = n.adMetadataContainer,
                    r = n.advertiser,
                    c = n.advertiser_name,
                    o = n.disclosure_type,
                    s = t && r && t === r.id_str,
                    l = 'string' == typeof o && 'political' === o.toLowerCase(),
                    u = 'string' == typeof o && 'issue' === o.toLowerCase(),
                    m = !(!i || 'POLITICAL' !== i.disclaimerType) || l,
                    d = !(!i || 'ISSUE' !== i.disclaimerType) || u,
                    h = (i || {}).removePromotedAttributionForPreroll
                  return (
                    a ||
                    (!c || s || h
                      ? m
                        ? L
                        : d
                        ? A
                        : k
                      : m
                      ? H({ fullName: c })
                      : d
                      ? O({ fullName: c })
                      : S({ fullName: c }))
                  )
                },
              },
            ]),
            a
          )
        })(p.a.Component)
      d()(F, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var M = v.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    'jv9/': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'truncateNumber', function () {
          return re
        }),
        a.d(t, 'TweetActivityReactionsScreen', function () {
          return se
        })
      var n = a('RhWx'),
        i = a.n(n),
        r = a('yiKp'),
        c = a.n(r),
        o = a('VrFO'),
        s = a.n(o),
        l = a('Y9Ll'),
        u = a.n(l),
        m = a('1Pcy'),
        d = a.n(m),
        h = a('5Yy7'),
        p = a.n(h),
        f = a('2VqO'),
        y = a.n(f),
        b = a('KEM+'),
        v = a.n(b),
        E = (a('TJCb'), a('7x/C'), a('DZ+c'), a('2G9S'), a('LW0h'), a('z84I'), a('KOtZ'), a('tQbP'), a('ERkP')),
        T = a.n(E),
        w = (a('KqXw'), a('WNMA'), a('rxPX')),
        g = a('0KEI'),
        I = (a('yH/f'), a('/kEJ')),
        R = a('oEOe'),
        _ = a('kGix'),
        C = a('Ssj5'),
        S = 'tweetReactionTimeline',
        k = { tweetReactionTimelines: {} },
        L = Object.freeze({
          REQUEST: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_REQUEST',
          SUCCESS: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_SUCCESS',
          FAILURE: 'rweb/tweetReactionTimeline/FETCH_TWEET_REACTION_TIMELINE_FAILURE',
        })
      function H() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
          t = arguments.length > 1 ? arguments[1] : void 0
        if (!t.meta) return e
        switch (t.type) {
          case L.REQUEST:
            return c()(
              c()({}, e),
              {},
              {
                tweetReactionTimelines: c()(
                  c()({}, e.tweetReactionTimelines),
                  {},
                  v()({}, t.meta.tweetId, { fetchStatus: _.a.LOADING, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          case L.SUCCESS:
            return c()(
              c()({}, e),
              {},
              {
                tweetReactionTimelines: c()(
                  c()({}, e.tweetReactionTimelines),
                  {},
                  v()({}, t.meta.tweetId, { fetchStatus: _.a.LOADED, tweetReactionTimeline: t.payload }),
                ),
              },
            )
          case L.FAILURE:
            return c()(
              c()({}, e),
              {},
              {
                tweetReactionTimelines: c()(
                  c()({}, e.tweetReactionTimelines),
                  {},
                  v()({}, t.meta.tweetId, { fetchStatus: _.a.FAILED, tweetReactionTimeline: void 0 }),
                ),
              },
            )
          default:
            return e
        }
      }
      C.a.register(v()({}, S, H))
      var A = function (e) {
          return function (t, a, n) {
            var i = n.api
            return Object(R.b)(t, { request: i.TweetActivity.fetchReactedBy, params: e })(
              { actionTypes: L, context: 'FETCH_TWEET_REACTION_TIMELINE', meta: e },
              function (e) {
                if (e) return [Object(I.c)({ users: e.userEntities })]
              },
            )
          }
        },
        O = a('XOJV'),
        F = function (e, t) {
          return t.match.params.statusId
        },
        M = function (e, t) {
          return t.match.params.screenName
        },
        N = function (e, t) {
          var a = t.match.params.statusId
          return O.a.select(e, a)
        },
        j = function (e, t) {
          return (function (e, t) {
            var a
            return null === (a = e[S].tweetReactionTimelines[t]) || void 0 === a ? void 0 : a.tweetReactionTimeline
          })(e, t.match.params.statusId)
        },
        D = function (e, t) {
          return (function (e, t) {
            var a
            return (null === (a = e[S].tweetReactionTimelines[t]) || void 0 === a ? void 0 : a.fetchStatus) || _.a.NONE
          })(e, t.match.params.statusId)
        },
        x = Object(w.a)()
          .propsFromState(function () {
            return { tweet: N, fetchStatus: D, reactionTimeline: j, screenName: M, statusId: F }
          })
          .propsFromActions(function () {
            return {
              fetchTweetReactionTimeline: A,
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_ACTIVITY_REACTIONS',
              ),
            }
          })
          .withAnalytics({ page: 'reactions_detail' }),
        P = a('jHSc'),
        K = a('3XMw'),
        W = a.n(K),
        U = a('TEoO'),
        q = a('Re5t'),
        J = a('MWbm'),
        V = a('de1q'),
        X = a('t62R'),
        Y = a('k/OQ'),
        z = a('FIs5'),
        Q = a('G1WX'),
        B = a('rHpw'),
        G = a('v6aA'),
        Z = a('88ay'),
        $ = W.a.aca3184d,
        ee = W.a.h7f7183f,
        te = { Like: W.a.d4c3c63a, Haha: W.a.d40cca4c, Hmm: W.a.cb46dd2a, Sad: W.a.b65bb361, Cheer: W.a.d02b6077 },
        ae = W.a.jeb4436c,
        ne = W.a.db29b5a9,
        ie = W.a.c0098d49,
        re = W.a.d58baa7e,
        ce = function (e) {
          return Object(Z.e)(e)
        },
        oe = function (e) {
          return e.index.toString()
        },
        se = (function (e) {
          p()(a, e)
          var t = y()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(
                d()(e),
                '_reactionsLegacyHeartEnabled',
                e.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              v()(d()(e), '_handleFetchTimeline', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetReactionTimeline)({ tweetId: t.statusId }).catch(a())
              }),
              v()(d()(e), '_render', function () {
                var t,
                  a = e.props,
                  n = a.location,
                  i = a.reactionTimeline,
                  r = null == i ? void 0 : i.reactionTimeline,
                  o = null === (t = n.state) || void 0 === t ? void 0 : t.reactionType
                return (
                  o &&
                    r &&
                    (r = r.filter(function (e) {
                      return e.reactionType === o
                    })),
                  T.a.createElement(
                    T.a.Fragment,
                    null,
                    e._renderTabs(),
                    r
                      ? T.a.createElement(U.a, {
                          accessibilityRole: 'tablist',
                          accessibilityTitle: ie,
                          assumedItemHeight: 75,
                          cacheKey: 'tweetActivityReactions',
                          identityFunction: oe,
                          items: r.map(function (e, t) {
                            return c()(c()({}, e), {}, { index: t })
                          }),
                          noItemsRenderer: e._renderEmptyState,
                          renderer: e._itemRenderer,
                          withKeyboardShortcuts: !0,
                        })
                      : null,
                  )
                )
              }),
              v()(d()(e), '_isActive', function (t) {
                var a,
                  n = e.props.location,
                  i = (t.state && t.state.reactionType) || void 0
                return (
                  (t.pathname || t) === n.pathname &&
                  i === (null === (a = n.state) || void 0 === a ? void 0 : a.reactionType)
                )
              }),
              v()(d()(e), '_getTab', function (t, a) {
                var n = a && re(a)
                return {
                  isActive: e._isActive,
                  key: t,
                  to: { state: { reactionType: t, lockScroll: !0 }, pathname: location.pathname },
                  label: T.a.createElement(
                    J.a,
                    { style: le.tab },
                    T.a.createElement(V.a, {
                      legacyHeart: e._reactionsLegacyHeartEnabled,
                      reactionType: t,
                      style: le.tabDecoration,
                      withAnimation: !1,
                    }),
                    T.a.createElement(X.b, null, te[t]({ count: n || '' })),
                  ),
                }
              }),
              v()(d()(e), '_renderTabs', function () {
                var t = e.props,
                  a = t.location,
                  n = t.reactionTimeline,
                  r = null == n ? void 0 : n.reactionCounts,
                  c =
                    r &&
                    r.filter(function (e) {
                      return e.count > 0
                    }).length > 1,
                  o =
                    (r &&
                      r.reduce(function (e, t) {
                        return (t.count || 0) + e
                      }, 0)) ||
                    0,
                  s = o && re(o)
                if (!c || !r) return null
                var l = r
                    .sort(function (e, t) {
                      return t.count - e.count
                    })
                    .filter(function (e) {
                      return e.count > 0
                    }),
                  u = [{ isActive: e._isActive, key: 'all', to: a.pathname, label: ee({ count: s }) }].concat(
                    i()(
                      l.map(function (t) {
                        return e._getTab(t.type, t.count)
                      }),
                    ),
                  )
                return T.a.createElement(Y.a, { links: u })
              }),
              v()(d()(e), '_renderEmptyState', function () {
                return T.a.createElement(z.a, { header: ae, message: ne })
              }),
              v()(d()(e), '_itemRenderer', function (t, a) {
                var n = T.a.createElement(V.a, {
                  legacyHeart: e._reactionsLegacyHeartEnabled,
                  reactionType: t.reactionType,
                  style: le.avatarDecoration,
                  withAnimation: !1,
                })
                return (
                  a && a(!0),
                  T.a.createElement(Z.b, {
                    avatarDecoration: n,
                    decoration: ce,
                    displayMode: q.a.UserDetailed,
                    userId: t.user,
                    withFollowsYou: !0,
                  })
                )
              }),
              e
            )
          }
          return (
            u()(a, [
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
                    a,
                    n = this.props,
                    i = n.analytics,
                    r = null === (t = n.location.state) || void 0 === t ? void 0 : t.reactionType
                  ;(null === (a = e.location.state) || void 0 === a ? void 0 : a.reactionType) !== r &&
                    i.scribe({ section: (null == r ? void 0 : r.toLowerCase()) || 'all', action: 'show' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.history,
                    n = e.screenName,
                    i = e.statusId
                  return T.a.createElement(
                    P.b,
                    { backLocation: '/'.concat(n.toLowerCase(), '/status/').concat(i), history: a, title: ie },
                    T.a.createElement(Q.a, {
                      accessibilityLabel: $,
                      fetchStatus: t,
                      onRequestRetry: this._handleFetchTimeline,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(T.a.PureComponent)
      v()(se, 'contextType', G.a)
      var le = B.a.create(function (e) {
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
        ue = x(se)
      t.default = ue
    },
    kSIJ: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      var n,
        i = a('KEM+'),
        r = a.n(i),
        c = a('3XMw'),
        o = a.n(c),
        s = a('mJtw'),
        l =
          ((n = {}),
          r()(n, s.a.Like, o.a.d636ebc6),
          r()(n, s.a.Haha, o.a.bd83592a),
          r()(n, s.a.Hmm, o.a.f84f0fa8),
          r()(n, s.a.Sad, o.a.g47ce0e4),
          r()(n, s.a.Cheer, o.a.fc8a13c5),
          n)
    },
    uFYP: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        i = a.n(n),
        r = a('ERkP'),
        c = a.n(r),
        o = a('Lsrn'),
        s = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
