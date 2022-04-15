;(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    NP4V: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('shC7'),
        d = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(d.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style, l.a.getConstants().isRTL && c.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M4.656 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.655 12z',
              }),
              i.a.createElement('path', {
                d: 'M12.465 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L12.464 12z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    iyiT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        })
      var a = n('ZUOq'),
        r = a.a.columnWidths.secondary.normal,
        o = a.a.columnWidths.primary
    },
    mpWK: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('shC7'),
        d = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(d.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style, l.a.getConstants().isRTL && c.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M21.185 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.145.146.337.22.53.22s.383-.073.53-.22l9.25-9.25c.293-.295.293-.77 0-1.062z',
              }),
              i.a.createElement('path', {
                d: 'M13.376 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.146.145.337.218.53.218s.384-.073.53-.22l9.25-9.25c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    u1Qz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TweetMediaDetailScreen', function () {
          return _e
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('+KXO'), n('2G9S'), n('KqXw'), n('MvUL'), n('ERkP')),
        l = n.n(c),
        d = (n('WNMA'), n('Blm6'), n('zh9S')),
        s = n('H9MA'),
        u = n('XOJV'),
        f = n('rxPX'),
        m = n('0KEI'),
        w = n('P1r1'),
        v = function (e, t) {
          return t.match.params.screenName
        },
        h = function (e, t) {
          return t.match.params.statusId
        },
        p = function (e, t) {
          var n = t.match.params.index
          return parseInt(n, 10) - 1
        },
        b = function (e, t) {
          return u.a.selectFetchStatus(e, h(0, t))
        },
        g = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        y = function (e, t) {
          return g(t, 'forwardPivotInfo')
        },
        E = function (e, t) {
          return g(t, 'promotedContent')
        },
        C = function (e, t) {
          return g(t, 'socialContext')
        },
        T = function (e, t) {
          return g(t, 'contextTweetId')
        },
        x = function (e, t) {
          var n = h(0, t),
            a = u.a.select(e, n)
          return (a && a.conversation_id_str) || void 0
        },
        I = Object(f.a)()
          .propsFromState(function () {
            return {
              fetchStatus: b,
              forwardPivotInfo: y,
              index: p,
              screenName: v,
              tweetId: h,
              tweet: u.a.createHydratedTweetSelector(h),
              promotedContent: E,
              dataSaver: s.c,
              socialContext: C,
              contextTweetId: T,
              rootTweet: u.a.createHydratedTweetSelector(x),
              showTweetMediaDetailDrawer: w.A,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_MEDIA_DETAIL_SCREEN',
              ),
              fetchTweetIfNeeded: u.a.fetchOneIfNeeded,
              googleAnalyticsPageView: d.googleAnalyticsPageView,
              updateSettings: w.M,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media' }),
        M = n('VrFO'),
        _ = n.n(M),
        k = n('Y9Ll'),
        S = n.n(k),
        L = n('1Pcy'),
        O = n.n(L),
        P = n('5Yy7'),
        A = n.n(P),
        j = n('2VqO'),
        D = n.n(j),
        H = n('KEM+'),
        R = n.n(H),
        N = (n('uFXj'), n('ymux')),
        W = n('rkhm'),
        F = n('iyiT'),
        B = n('oQhu'),
        K = n('AUxQ'),
        V = n('rHpw'),
        X = n('yw4N'),
        z = n('v6aA'),
        q = (function (e) {
          A()(n, e)
          var t = D()(n)
          function n() {
            var e
            _()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              R()(
                O()(e),
                '_getApiErrorHandlerMap',
                Object(B.a)(function (e) {
                  return Object(W.a)(e)
                }),
              ),
              R()(
                O()(e),
                '_getModule',
                Object(B.a)(function (e, t) {
                  return Object(N.a)({ focalTweetId: e, featureSwitches: t })
                }),
              ),
              e
            )
          }
          return (
            S()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.contextTweetId,
                    n = e.location,
                    a = e.promotedContent,
                    r = e.rootTweet,
                    o = e.screenName,
                    i = e.socialContext,
                    c = e.tweet,
                    d = e.tweetId,
                    s = this.context.featureSwitches,
                    u = { selectedTweetId: d }
                  return l.a.createElement(
                    X.a,
                    { accessibilityExpanded: !0, style: U.root },
                    l.a.createElement(K.a, {
                      apiErrorHandlerMap: this._getApiErrorHandlerMap(o),
                      contextTweetId: t,
                      focalTweet: c,
                      focalTweetId: d,
                      location: n,
                      module: this._getModule(d, s),
                      promotedContent: a,
                      rootTweet: r,
                      selectedTweet: u,
                      socialContext: i,
                      withFocalTweetMedia: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(l.a.Component)
      R()(q, 'contextType', z.a)
      var U = V.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              overflow: 'auto',
              width: F.a,
              borderLeftWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
          }
        }),
        Z = q,
        J = n('v//M'),
        Q = n('W5XZ'),
        Y = n('3XMw'),
        G = n.n(Y),
        $ = n('tI3i'),
        ee = n.n($),
        te = n('2doW'),
        ne = n('UPvq'),
        ae = n('VTxf'),
        re = n('wiP2'),
        oe = n('Rp9C'),
        ie = n('xXop'),
        ce = n('lklz'),
        le = n('MWbm'),
        de = n('7N4s'),
        se = n('/IST'),
        ue = n('/Ikv'),
        fe = n('mjJ+'),
        me = n('/yvb'),
        we = n('rOXj'),
        ve = n('cHvH'),
        he = n('RCZO'),
        pe = n('mpWK'),
        be = n('NP4V'),
        ge = n('ACHU'),
        ye = G.a.d132269b,
        Ee = G.a.dd657211,
        Ce = G.a.h63a5c3b,
        Te = G.a.f20b040d,
        xe = G.a.f1d9930c,
        Ie = G.a.a0e81a2e,
        Me = function (e) {
          return e - F.a < F.b
        },
        _e = function (e) {
          var t = l.a.useContext(de.b).isModal,
            n = Object(he.h)(),
            a = n.handleMediaDetailZoomed,
            o = n.handleMediaItemTapped,
            c = n.hideButtons,
            d = l.a.useState(!1),
            s = i()(d, 2),
            u = s[0],
            f = s[1],
            m = e.analytics,
            w = e.contextTweetId,
            v = e.createLocalApiErrorHandler,
            h = e.dataSaver,
            p = e.fetchStatus,
            b = e.fetchTweetIfNeeded,
            g = e.forwardPivotInfo,
            y = e.googleAnalyticsPageView,
            E = e.history,
            C = e.index,
            T = e.location,
            x = e.promotedContent,
            I = e.rootTweet,
            M = e.screenName,
            _ = e.showTweetMediaDetailDrawer,
            k = e.socialContext,
            S = e.tweet,
            L = e.tweetId,
            O = e.updateSettings,
            P = function () {
              var e = T.state
              if (e) {
                var t = e.mediaItems
                return t && 'index' in t && 'items' in t ? t : void 0
              }
            },
            A = function () {
              var e = P()
              return e ? e.index : C
            },
            j = function () {
              var e,
                t = P()
              if (t) return t.items
              if (S) {
                var n = null === (e = S.extended_entities) || void 0 === e ? void 0 : e.media
                if (n) return n
                if (S.card) {
                  var a = D()
                  if (a) return [a]
                }
              }
            },
            D = function () {
              if (null != S && S.card) {
                var e = { tweetId: S.id_str, tweetUserId: S.user.id_str, tweetPermalink: S.permalink }
                ee()(void 0 !== S.card, 'tweet.card must be defined')
                var t = S.unified_card && Object.keys(S.unified_card).length ? S.unified_card : S.card,
                  n = Object(se.b)(t, e)
                if (n) {
                  var a = ue.a.getImageEntityFromCard(n.card)
                  if (a) return ue.a.convertImageEntityToPhoto(a)
                }
              }
            },
            H = function () {
              var e = A(),
                t = j()
              return t && t[e]
            },
            R = function (e) {
              var t = P()
              return t ? r()(r()({}, T.state), {}, { mediaItems: r()(r()({}, t), {}, { index: e }) }) : T.state
            },
            N = function (e) {
              return e && Me(e) ? u : _
            },
            W = l.a.useCallback(
              function () {
                if (S && S.user && M.toLowerCase() !== S.user.screen_name.toLowerCase()) {
                  var e =
                    S && S.user
                      ? '/'
                          .concat(S.user.screen_name, '/status/')
                          .concat(S.id_str, '/photo/')
                          .concat(C + 1)
                      : null
                  e && E.replace(e)
                }
              },
              [E, C, M, S],
            ),
            F = l.a.useCallback(
              function () {
                if (S) {
                  var e = oe.a.getTweetItem(S)
                  y(m.contextualScribeNamespace), m.scribe({ action: 'show', data: { items: [e] } })
                }
              },
              [m, y, S],
            ),
            B = function () {
              E.goBackThroughModals()
            },
            K = l.a.useCallback(
              function () {
                b(L).catch(v(Q.a))
              },
              [v, b, L],
            ),
            V = function (e) {
              return function () {
                e && Me(e)
                  ? (m.scribe({ component: 'conversation_drawer', action: u ? 'collapse' : 'expand' }), f(!u))
                  : (m.scribe({ component: 'conversation_drawer', action: _ ? 'collapse' : 'expand' }),
                    O({ showTweetMediaDetailDrawer: !_ }))
              }
            },
            X = function (e) {
              var t = A(),
                n = j()
              if (e !== t) {
                m.scribe({
                  component: 'gallery',
                  element: t < e ? 'next' : 'prev',
                  action: 'click',
                  data: { event_value: e + 1 },
                })
                var a = n && n[e]
                E.replace({ state: R(e), pathname: a && a.expanded_url })
              }
            },
            z = function (e) {
              return l.a.createElement(fe.a, {
                isFixed: !0,
                items: [
                  {
                    link: null != S && S.user ? '/'.concat(S.user.screen_name, '/status/').concat(S.id_str) : '/',
                    text: Ee,
                  },
                ],
                onCloseRequested: e,
              })
            },
            q = function (e) {
              var n = H(),
                a = Object(he.b)(n),
                r = e && N(e)
              return t
                ? l.a.createElement(me.a, {
                    accessibilityLabel: r ? Te : Ee,
                    dominantColor: a.rgb,
                    hoverLabel: { label: r ? xe : Ie },
                    icon: r ? l.a.createElement(pe.a, null) : l.a.createElement(be.a, null),
                    onClick: V(e),
                    type: 'onMediaDominantColorFilled',
                  })
                : S && !t
                ? l.a.createElement(me.a, {
                    accessibilityLabel: Ce,
                    dominantColor: n ? a.rgb : void 0,
                    icon: l.a.createElement(ge.a, null),
                    renderMenu: z,
                    type: n ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                  })
                : void 0
            },
            U = function () {
              var e = A(),
                t = j()
              if (!t) return l.a.createElement(ae.a, null)
              var n = t[e],
                r = Object(he.b)(n).rgb
              return l.a.createElement(te.a, {
                dataSaver: h,
                dominantColor: r,
                mediaIndex: e,
                mediaItems: t,
                onDismiss: B,
                onMediaDetailZoomed: a,
                onMediaItemChanged: X,
                onTap: o,
                promotedContent: x,
                videoId: 1 === t.length && S ? ce.b.forTweet(S.id_str) : void 0,
              })
            },
            Y = function (e) {
              var t = H(),
                n = Object(he.b)(t),
                a =
                  we.a.isTouchSupported() &&
                  (function () {
                    var e = A(),
                      t = j()
                    if (!t) return !1
                    var n = t[e]
                    return 'photo' === (null == n ? void 0 : n.type) || !1
                  })()
              return l.a.createElement(
                ne.a,
                {
                  backgroundColor: n,
                  footerButtons: S
                    ? l.a.createElement(ie.a, {
                        actionSize: 'large',
                        activeColor: 'white',
                        allowDownvote: !0,
                        color: 'white',
                        forwardPivotInfo: S.softIntervention || g,
                        style: ke.actionsBar,
                        tweet: S,
                        withCount: !0,
                      })
                    : void 0,
                  hideButtons: c,
                  mediaItem: t,
                  onCloseButtonPress: B,
                  overlayFooter: a,
                  topRightButton: q(e),
                },
                l.a.createElement(J.a, { accessibilityLabel: ye, fetchStatus: p, onRequestRetry: K, render: U }),
              )
            },
            G = l.a.useRef(null)
          l.a.useEffect(
            function () {
              G.current !== L && (K(), (G.current = L))
            },
            [K, L],
          )
          var $ = l.a.useRef(null)
          return (
            l.a.useEffect(
              function () {
                var e
                ;(null === (e = $.current) || void 0 === e ? void 0 : e.id_str) !== (null == S ? void 0 : S.id_str) &&
                  (F(), ($.current = S))
              },
              [F, S],
            ),
            l.a.useEffect(
              function () {
                W()
              },
              [W],
            ),
            l.a.createElement(
              re.a.Configure,
              { headerless: !0 },
              t
                ? l.a.createElement(ve.a, null, function (e) {
                    var t = e.windowWidth
                    return l.a.createElement(
                      le.a,
                      { style: ke.container },
                      l.a.createElement(le.a, { style: ke.neighbor }, Y(t)),
                      N(t)
                        ? l.a.createElement(Z, {
                            contextTweetId: w,
                            location: T,
                            promotedContent: x,
                            rootTweet: I,
                            screenName: M,
                            socialContext: k,
                            tweet: S,
                            tweetId: L,
                          })
                        : null,
                    )
                  })
                : Y(),
            )
          )
        },
        ke = V.a.create(function (e) {
          return {
            actionsBar: { height: e.spaces.space48, maxWidth: 'none', paddingHorizontal: e.spaces.space12 },
            container: {
              flexDirection: 'row',
              overflowX: 'hidden',
              overflowY: 'hidden',
              height: '100%',
              width: '100%',
              position: 'relative',
            },
            neighbor: { flexGrow: 1, flexShrink: 1 },
          }
        }),
        Se = I(_e)
      t.default = Se
    },
  },
])
//# sourceMappingURL=WIPED
