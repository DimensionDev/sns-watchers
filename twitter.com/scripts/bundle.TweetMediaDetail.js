;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
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
          return ke
        })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ddV6'),
        i = a.n(o),
        c = (a('2G9S'), a('KqXw'), a('MvUL'), a('ERkP')),
        l = a.n(c),
        s = (a('WNMA'), a('Blm6'), a('zh9S')),
        d = a('H9MA'),
        u = a('XOJV'),
        f = a('rxPX'),
        m = a('0KEI'),
        v = a('P1r1'),
        w = function (e, t) {
          return t.match.params.screenName
        },
        h = function (e, t) {
          return t.match.params.statusId
        },
        p = function (e, t) {
          var a = t.match.params.index
          return parseInt(a, 10) - 1
        },
        b = function (e, t) {
          return u.a.selectFetchStatus(e, h(0, t))
        },
        y = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        g = function (e, t) {
          return y(t, 'forwardPivotInfo')
        },
        E = function (e, t) {
          return y(t, 'promotedContent')
        },
        C = function (e, t) {
          return y(t, 'socialContext')
        },
        x = function (e, t) {
          return y(t, 'contextTweetId')
        },
        T = function (e, t) {
          var a = h(0, t),
            n = u.a.select(e, a)
          return (n && n.conversation_id_str) || void 0
        },
        I = Object(f.a)()
          .propsFromState(function () {
            return {
              fetchStatus: b,
              forwardPivotInfo: g,
              index: p,
              screenName: w,
              tweetId: h,
              tweet: u.a.createHydratedTweetSelector(h),
              promotedContent: E,
              dataSaver: d.c,
              socialContext: C,
              contextTweetId: x,
              rootTweet: u.a.createHydratedTweetSelector(T),
              showTweetMediaDetailDrawer: v.B,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_MEDIA_DETAIL_SCREEN',
              ),
              fetchTweetIfNeeded: u.a.fetchOneIfNeeded,
              googleAnalyticsPageView: s.a,
              updateSettings: v.N,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media' }),
        M = a('VrFO'),
        k = a.n(M),
        S = a('Y9Ll'),
        _ = a.n(S),
        L = a('1Pcy'),
        O = a.n(L),
        P = a('5Yy7'),
        A = a.n(P),
        j = a('2VqO'),
        D = a.n(j),
        H = a('KEM+'),
        N = a.n(H),
        R = (a('uFXj'), a('ymux')),
        W = a('rkhm'),
        B = a('iyiT'),
        F = a('oQhu'),
        K = a('AUxQ'),
        z = a('rHpw'),
        V = a('yw4N'),
        X = a('v6aA'),
        q = (function (e) {
          A()(a, e)
          var t = D()(a)
          function a() {
            var e
            k()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              N()(
                O()(e),
                '_getApiErrorHandlerMap',
                Object(F.a)(function (e) {
                  return Object(W.a)(e)
                }),
              ),
              N()(
                O()(e),
                '_getModule',
                Object(F.a)(function (e, t) {
                  return Object(R.a)({ focalTweetId: e, featureSwitches: t })
                }),
              ),
              e
            )
          }
          return (
            _()(a, [
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
                    V.a,
                    { accessibilityExpanded: !0, style: U.root },
                    l.a.createElement(K.a, {
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
      N()(q, 'contextType', X.a)
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
        ye = a('ACHU'),
        ge = G.a.d132269b,
        Ee = G.a.dd657211,
        Ce = G.a.h63a5c3b,
        xe = G.a.f20b040d,
        Te = G.a.f1d9930c,
        Ie = G.a.a0e81a2e,
        Me = function (e) {
          return e - B.a < B.b
        },
        ke = function (e) {
          var t = l.a.useContext(se.b).isModal,
            a = Object(he.h)(),
            n = a.handleMediaDetailZoomed,
            o = a.handleMediaItemTapped,
            c = a.hideButtons,
            s = l.a.useState(!1),
            d = i()(s, 2),
            u = d[0],
            f = d[1],
            m = e.analytics,
            v = e.contextTweetId,
            w = e.createLocalApiErrorHandler,
            h = e.dataSaver,
            p = e.fetchStatus,
            b = e.fetchTweetIfNeeded,
            y = e.forwardPivotInfo,
            g = e.googleAnalyticsPageView,
            E = e.history,
            C = e.index,
            x = e.location,
            T = e.promotedContent,
            I = e.rootTweet,
            M = e.screenName,
            k = e.showTweetMediaDetailDrawer,
            S = e.socialContext,
            _ = e.tweet,
            L = e.tweetId,
            O = e.updateSettings,
            P = function () {
              var e = x.state
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
              if (_) {
                var a = null === (e = _.extended_entities) || void 0 === e ? void 0 : e.media
                if (a) return a
                if (_.card) {
                  var n = D()
                  if (n) return [n]
                }
              }
            },
            D = function () {
              if (null != _ && _.card) {
                var e = { tweetId: _.id_str, tweetUserId: _.user.id_str, tweetPermalink: _.permalink }
                ee()(void 0 !== _.card, 'tweet.card must be defined')
                var t = Object(de.b)(_.card, e)
                if (t) {
                  var a = ue.a.getImageEntityFromCard(t.card)
                  if (a) return ue.a.convertImageEntityToPhoto(a)
                }
              }
            },
            H = function () {
              var e = A(),
                t = j()
              return t && t[e]
            },
            N = function () {
              return null != _ && _.user ? '/'.concat(_.user.screen_name, '/status/').concat(_.id_str) : '/'
            },
            R = function (e) {
              var t = P()
              return t ? r()(r()({}, x.state), {}, { mediaItems: r()(r()({}, t), {}, { index: e }) }) : x.state
            },
            W = function (e) {
              return e && Me(e) ? u : k
            },
            B = l.a.useCallback(
              function () {
                if (_ && _.user && M.toLowerCase() !== _.user.screen_name.toLowerCase()) {
                  var e =
                    _ && _.user
                      ? '/'
                          .concat(_.user.screen_name, '/status/')
                          .concat(_.id_str, '/photo/')
                          .concat(C + 1)
                      : null
                  e && E.replace(e)
                }
              },
              [E, C, M, _],
            ),
            F = l.a.useCallback(
              function () {
                if (_) {
                  var e = oe.a.getTweetItem(_)
                  g(m.contextualScribeNamespace), m.scribe({ action: 'show', data: { items: [e] } })
                }
              },
              [m, g, _],
            ),
            K = function () {
              var e = N()
              E.goBackThroughModals({ fallbackPath: e })
            },
            z = l.a.useCallback(
              function () {
                b(L).catch(w(Q.a))
              },
              [w, b, L],
            ),
            V = function (e) {
              return function () {
                e && Me(e)
                  ? (m.scribe({ component: 'conversation_drawer', action: u ? 'collapse' : 'expand' }), f(!u))
                  : (m.scribe({ component: 'conversation_drawer', action: k ? 'collapse' : 'expand' }),
                    O({ showTweetMediaDetailDrawer: !k }))
              }
            },
            X = function (e) {
              var t = A(),
                a = j()
              if (e !== t) {
                m.scribe({
                  component: 'gallery',
                  element: t < e ? 'next' : 'prev',
                  action: 'click',
                  data: { event_value: e + 1 },
                })
                var n = a && a[e]
                E.replace({ state: R(e), pathname: n && n.expanded_url })
              }
            },
            q = function (e) {
              return l.a.createElement(fe.a, { isFixed: !0, items: [{ link: N(), text: Ee }], onCloseRequested: e })
            },
            U = function (e) {
              var a = H(),
                n = Object(he.b)(a),
                r = e && W(e)
              return t
                ? l.a.createElement(me.a, {
                    accessibilityLabel: r ? xe : Ee,
                    dominantColor: n.rgb,
                    hoverLabel: { label: r ? Te : Ie },
                    icon: r ? l.a.createElement(pe.a, null) : l.a.createElement(be.a, null),
                    onClick: V(e),
                    type: 'onMediaDominantColorFilled',
                  })
                : _ && !t
                ? l.a.createElement(me.a, {
                    accessibilityLabel: Ce,
                    dominantColor: a ? n.rgb : void 0,
                    icon: l.a.createElement(ye.a, null),
                    renderMenu: q,
                    type: a ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                  })
                : void 0
            },
            Y = function () {
              var e = A(),
                t = j()
              if (!t) return l.a.createElement(ne.a, null)
              var a = t[e],
                r = Object(he.b)(a).rgb
              return l.a.createElement(te.a, {
                dataSaver: h,
                dominantColor: r,
                mediaIndex: e,
                mediaItems: t,
                onDismiss: K,
                onMediaDetailZoomed: n,
                onMediaItemChanged: X,
                onTap: o,
                promotedContent: T,
                videoId: 1 === t.length && _ ? ce.b.forTweet(_.id_str) : void 0,
              })
            },
            G = function (e) {
              var t = H(),
                a = Object(he.b)(t),
                n =
                  ve.a.isTouchSupported() &&
                  (function () {
                    var e = A(),
                      t = j()
                    if (!t) return !1
                    var a = t[e]
                    return 'photo' === (null == a ? void 0 : a.type) || !1
                  })()
              return l.a.createElement(
                ae.a,
                {
                  backgroundColor: a,
                  footerButtons: _
                    ? l.a.createElement(ie.a, {
                        actionSize: 'large',
                        activeColor: 'white',
                        allowDownvote: !0,
                        color: 'white',
                        forwardPivotInfo: _.softIntervention || y,
                        style: Se.actionsBar,
                        tweet: _,
                        withCount: !0,
                      })
                    : void 0,
                  hideButtons: c,
                  mediaItem: t,
                  onCloseButtonPress: K,
                  overlayFooter: n,
                  topRightButton: U(e),
                },
                l.a.createElement(J.a, { accessibilityLabel: ge, fetchStatus: p, onRequestRetry: z, render: Y }),
              )
            },
            $ = l.a.useRef(null)
          l.a.useEffect(
            function () {
              $.current !== L && (z(), ($.current = L))
            },
            [z, L],
          )
          var ke = l.a.useRef(null)
          return (
            l.a.useEffect(
              function () {
                var e
                ;(null === (e = ke.current) || void 0 === e ? void 0 : e.id_str) !== (null == _ ? void 0 : _.id_str) &&
                  (F(), (ke.current = _))
              },
              [F, _],
            ),
            l.a.useEffect(
              function () {
                B()
              },
              [B],
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
                      l.a.createElement(le.a, { style: Se.neighbor }, G(t)),
                      W(t)
                        ? l.a.createElement(Z, {
                            contextTweetId: v,
                            location: x,
                            promotedContent: T,
                            rootTweet: I,
                            screenName: M,
                            socialContext: S,
                            tweet: _,
                            tweetId: L,
                          })
                        : null,
                    )
                  })
                : G(),
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
        _e = I(ke)
      t.default = _e
    },
  },
])
//# sourceMappingURL=WIPED
