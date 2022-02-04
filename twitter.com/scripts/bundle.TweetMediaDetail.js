;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    NP4V: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('shC7'),
        s = a('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    iyiT: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      }),
        a.d(t, 'b', function () {
          return o
        })
      var n = a('ZUOq'),
        r = n.a.columnWidths.secondary.normal,
        o = n.a.columnWidths.primary
    },
    mpWK: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('shC7'),
        s = a('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    u1Qz: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TweetMediaDetailScreen', function () {
          return _e
        })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ddV6'),
        i = a.n(o),
        c = (a('2G9S'), a('KqXw'), a('MvUL'), a('ERkP')),
        l = a.n(c),
        s = a('v6aA'),
        d = (a('WNMA'), a('Blm6'), a('zh9S')),
        u = a('H9MA'),
        f = a('XOJV'),
        m = a('rxPX'),
        v = a('0KEI'),
        w = a('P1r1'),
        h = function (e, t) {
          return t.match.params.screenName
        },
        p = function (e, t) {
          return t.match.params.statusId
        },
        b = function (e, t) {
          var a = t.match.params.index
          return parseInt(a, 10) - 1
        },
        g = function (e, t) {
          return f.a.selectFetchStatus(e, p(0, t))
        },
        C = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        y = function (e, t) {
          return C(t, 'forwardPivotInfo')
        },
        E = function (e, t) {
          return C(t, 'promotedContent')
        },
        x = function (e, t) {
          return C(t, 'socialContext')
        },
        T = function (e, t) {
          return C(t, 'contextTweetId')
        },
        I = function (e, t) {
          var a = p(0, t),
            n = f.a.select(e, a)
          return (n && n.conversation_id_str) || void 0
        },
        M = Object(m.a)()
          .propsFromState(function () {
            return {
              fetchStatus: g,
              forwardPivotInfo: y,
              index: b,
              screenName: h,
              tweetId: p,
              tweet: f.a.createHydratedTweetSelector(p),
              promotedContent: E,
              dataSaver: u.c,
              socialContext: x,
              contextTweetId: T,
              rootTweet: f.a.createHydratedTweetSelector(I),
              showTweetMediaDetailDrawer: w.A,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_MEDIA_DETAIL_SCREEN',
              ),
              fetchTweetIfNeeded: f.a.fetchOneIfNeeded,
              googleAnalyticsPageView: d.a,
              updateSettings: w.L,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media' }),
        _ = a('VrFO'),
        S = a.n(_),
        k = a('Y9Ll'),
        L = a.n(k),
        O = a('1Pcy'),
        P = a.n(O),
        A = a('5Yy7'),
        D = a.n(A),
        W = a('2VqO'),
        j = a.n(W),
        H = a('KEM+'),
        R = a.n(H),
        N = (a('uFXj'), a('ymux')),
        F = a('rkhm'),
        B = a('iyiT'),
        K = a('oQhu'),
        V = a('AUxQ'),
        z = a('rHpw'),
        X = a('yw4N'),
        q = (function (e) {
          D()(a, e)
          var t = j()(a)
          function a() {
            var e
            S()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              R()(
                P()(e),
                '_getApiErrorHandlerMap',
                Object(K.a)(function (e) {
                  return Object(F.a)(e)
                }),
              ),
              R()(
                P()(e),
                '_getModule',
                Object(K.a)(function (e, t) {
                  return Object(N.a)({ focalTweetId: e, featureSwitches: t })
                }),
              ),
              e
            )
          }
          return (
            L()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.contextTweetId,
                    a = e.location,
                    n = e.promotedContent,
                    r = e.rootTweet,
                    o = e.screenName,
                    i = e.socialContext,
                    c = e.tweet,
                    s = e.tweetId,
                    d = this.context.featureSwitches,
                    u = { selectedTweetId: s }
                  return l.a.createElement(
                    X.a,
                    { accessibilityExpanded: !0, style: U.root },
                    l.a.createElement(V.a, {
                      apiErrorHandlerMap: this._getApiErrorHandlerMap(o),
                      contextTweetId: t,
                      focalTweet: c,
                      focalTweetId: s,
                      location: a,
                      module: this._getModule(s, d),
                      promotedContent: n,
                      rootTweet: r,
                      selectedTweet: u,
                      socialContext: i,
                      withFocalTweetMedia: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(l.a.Component)
      R()(q, 'contextType', s.a)
      var U = z.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              overflow: 'auto',
              width: B.a,
              borderLeftWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
          }
        }),
        Z = q,
        J = a('v//M'),
        Q = a('W5XZ'),
        Y = a('3XMw'),
        G = a.n(Y),
        $ = a('tI3i'),
        ee = a.n($),
        te = a('2doW'),
        ae = a('UPvq'),
        ne = a('VTxf'),
        re = a('wiP2'),
        oe = a('Rp9C'),
        ie = a('xXop'),
        ce = a('lklz'),
        le = a('MWbm'),
        se = a('7N4s'),
        de = a('0eWs'),
        ue = a('/Ikv'),
        fe = a('mjJ+'),
        me = a('/yvb'),
        ve = a('rOXj'),
        we = a('cHvH'),
        he = a('RCZO'),
        pe = a('mpWK'),
        be = a('NP4V'),
        ge = a('ACHU'),
        Ce = G.a.d132269b,
        ye = G.a.dd657211,
        Ee = G.a.h63a5c3b,
        xe = G.a.f20b040d,
        Te = G.a.f1d9930c,
        Ie = G.a.a0e81a2e,
        Me = function (e) {
          return e - B.a < B.b
        },
        _e = function (e) {
          var t = l.a.useContext(se.b).isModal,
            a = Object(he.h)(),
            n = a.handleMediaDetailZoomed,
            o = a.handleMediaItemTapped,
            c = a.hideButtons,
            d = l.a.useState(!1),
            u = i()(d, 2),
            f = u[0],
            m = u[1],
            v = l.a.useContext(s.a).featureSwitches,
            w = e.analytics,
            h = e.contextTweetId,
            p = e.createLocalApiErrorHandler,
            b = e.dataSaver,
            g = e.fetchStatus,
            C = e.fetchTweetIfNeeded,
            y = e.forwardPivotInfo,
            E = e.googleAnalyticsPageView,
            x = e.history,
            T = e.index,
            I = e.location,
            M = e.promotedContent,
            _ = e.rootTweet,
            S = e.screenName,
            k = e.showTweetMediaDetailDrawer,
            L = e.socialContext,
            O = e.tweet,
            P = e.tweetId,
            A = e.updateSettings,
            D = function () {
              var e = I.state
              if (e) {
                var t = e.mediaItems
                return t && 'index' in t && 'items' in t ? t : void 0
              }
            },
            W = function () {
              var e = D()
              return e ? e.index : T
            },
            j = function () {
              var e,
                t = D()
              if (t) return t.items
              if (O) {
                var a = null === (e = O.extended_entities) || void 0 === e ? void 0 : e.media
                if (a) return a
                if (O.card) {
                  var n = H()
                  if (n) return [n]
                }
              }
            },
            H = function () {
              if (null != O && O.card) {
                var e =
                    !0 ===
                    v.getValueWithoutScribeImpression(
                      'unified_cards_multi_destination_carousels_convert_to_single_card',
                    ),
                  t = {
                    tweetId: O.id_str,
                    tweetUserId: O.user.id_str,
                    tweetPermalink: O.permalink,
                    shouldConvertMDCtoSingleCard: e,
                  }
                ee()(void 0 !== O.card, 'tweet.card must be defined')
                var a = Object(de.b)(O.card, t)
                if (a) {
                  var n = ue.a.getImageEntityFromCard(a.card)
                  if (n) return ue.a.convertImageEntityToPhoto(n)
                }
              }
            },
            R = function () {
              var e = W(),
                t = j()
              return t && t[e]
            },
            N = function () {
              return null != O && O.user ? '/'.concat(O.user.screen_name, '/status/').concat(O.id_str) : '/'
            },
            F = function (e) {
              var t = D()
              return t ? r()(r()({}, I.state), {}, { mediaItems: r()(r()({}, t), {}, { index: e }) }) : I.state
            },
            B = function (e) {
              return e && Me(e) ? f : k
            },
            K = l.a.useCallback(
              function () {
                if (O && O.user && S.toLowerCase() !== O.user.screen_name.toLowerCase()) {
                  var e =
                    O && O.user
                      ? '/'
                          .concat(O.user.screen_name, '/status/')
                          .concat(O.id_str, '/photo/')
                          .concat(T + 1)
                      : null
                  e && x.replace(e)
                }
              },
              [x, T, S, O],
            ),
            V = l.a.useCallback(
              function () {
                if (O) {
                  var e = oe.a.getTweetItem(O)
                  E(w.contextualScribeNamespace), w.scribe({ action: 'show', data: { items: [e] } })
                }
              },
              [w, E, O],
            ),
            z = function () {
              var e = N()
              x.goBackThroughModals({ fallbackPath: e })
            },
            X = l.a.useCallback(
              function () {
                C(P).catch(p(Q.a))
              },
              [p, C, P],
            ),
            q = function (e) {
              return function () {
                e && Me(e)
                  ? (w.scribe({ component: 'conversation_drawer', action: f ? 'collapse' : 'expand' }), m(!f))
                  : (w.scribe({ component: 'conversation_drawer', action: k ? 'collapse' : 'expand' }),
                    A({ showTweetMediaDetailDrawer: !k }))
              }
            },
            U = function (e) {
              var t = W(),
                a = j()
              if (e !== t) {
                w.scribe({
                  component: 'gallery',
                  element: t < e ? 'next' : 'prev',
                  action: 'click',
                  data: { event_value: e + 1 },
                })
                var n = a && a[e]
                x.replace({ state: F(e), pathname: n && n.expanded_url })
              }
            },
            Y = function (e) {
              return l.a.createElement(fe.a, { isFixed: !0, items: [{ link: N(), text: ye }], onCloseRequested: e })
            },
            G = function (e) {
              var a = R(),
                n = Object(he.b)(a),
                r = e && B(e)
              return t
                ? l.a.createElement(me.a, {
                    accessibilityLabel: r ? xe : ye,
                    dominantColor: n.rgb,
                    hoverLabel: { label: r ? Te : Ie },
                    icon: r ? l.a.createElement(pe.a, null) : l.a.createElement(be.a, null),
                    onClick: q(e),
                    type: 'onMediaDominantColorFilled',
                  })
                : O && !t
                ? l.a.createElement(me.a, {
                    accessibilityLabel: Ee,
                    dominantColor: a ? n.rgb : void 0,
                    icon: l.a.createElement(ge.a, null),
                    renderMenu: Y,
                    type: a ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                  })
                : void 0
            },
            $ = function () {
              var e = W(),
                t = j()
              if (!t) return l.a.createElement(ne.a, null)
              var a = t[e],
                r = Object(he.b)(a).rgb
              return l.a.createElement(te.a, {
                dataSaver: b,
                dominantColor: r,
                mediaIndex: e,
                mediaItems: t,
                onDismiss: z,
                onMediaDetailZoomed: n,
                onMediaItemChanged: U,
                onTap: o,
                promotedContent: M,
                videoId: 1 === t.length && O ? ce.b.forTweet(O.id_str) : void 0,
              })
            },
            _e = function (e) {
              var t = R(),
                a = Object(he.b)(t),
                n =
                  ve.a.isTouchSupported() &&
                  (function () {
                    var e = W(),
                      t = j()
                    if (!t) return !1
                    var a = t[e]
                    return 'photo' === (null == a ? void 0 : a.type) || !1
                  })()
              return l.a.createElement(
                ae.a,
                {
                  backgroundColor: a,
                  footerButtons: O
                    ? l.a.createElement(ie.a, {
                        actionSize: 'large',
                        activeColor: 'white',
                        allowDownvote: !0,
                        color: 'white',
                        forwardPivotInfo: O.softIntervention || y,
                        style: Se.actionsBar,
                        tweet: O,
                        withCount: !0,
                      })
                    : void 0,
                  hideButtons: c,
                  mediaItem: t,
                  onCloseButtonPress: z,
                  overlayFooter: n,
                  topRightButton: G(e),
                },
                l.a.createElement(J.a, { accessibilityLabel: Ce, fetchStatus: g, onRequestRetry: X, render: $ }),
              )
            },
            ke = l.a.useRef(null)
          l.a.useEffect(
            function () {
              ke.current !== P && (X(), (ke.current = P))
            },
            [X, P],
          )
          var Le = l.a.useRef(null)
          return (
            l.a.useEffect(
              function () {
                var e
                ;(null === (e = Le.current) || void 0 === e ? void 0 : e.id_str) !== (null == O ? void 0 : O.id_str) &&
                  (V(), (Le.current = O))
              },
              [V, O],
            ),
            l.a.useEffect(
              function () {
                K()
              },
              [K],
            ),
            l.a.createElement(
              re.a.Configure,
              { headerless: !0 },
              t
                ? l.a.createElement(we.a, null, function (e) {
                    var t = e.windowWidth
                    return l.a.createElement(
                      le.a,
                      { style: Se.container },
                      l.a.createElement(le.a, { style: Se.neighbor }, _e(t)),
                      B(t)
                        ? l.a.createElement(Z, {
                            contextTweetId: h,
                            location: I,
                            promotedContent: M,
                            rootTweet: _,
                            screenName: S,
                            socialContext: L,
                            tweet: O,
                            tweetId: P,
                          })
                        : null,
                    )
                  })
                : _e(),
            )
          )
        },
        Se = z.a.create(function (e) {
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
        ke = M(_e)
      t.default = ke
    },
  },
])
//# sourceMappingURL=WIPED
