;(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    iyiT: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return o
      }),
        r.d(t, 'b', function () {
          return a
        })
      var n = r('ZUOq'),
        o = n.a.columnWidths.secondary.normal,
        a = n.a.columnWidths.primary
    },
    u1Qz: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'TweetMediaDetailScreen', function () {
          return We
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ddV6'),
        c = r.n(a),
        i = (r('2G9S'), r('MvUL'), r('KqXw'), r('ERkP')),
        l = r('v6aA'),
        s = (r('WNMA'), r('Blm6'), r('zh9S')),
        u = r('H9MA'),
        d = r('XOJV'),
        f = r('rxPX'),
        p = r('0KEI'),
        v = r('P1r1'),
        m = function (e, t) {
          return t.match.params.screenName
        },
        w = function (e, t) {
          return t.match.params.statusId
        },
        b = function (e, t) {
          var r = t.match.params.index
          return parseInt(r, 10) - 1
        },
        h = function (e, t) {
          return d.a.selectFetchStatus(e, w(0, t))
        },
        y = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        g = function (e, t) {
          return y(t, 'forwardPivotInfo')
        },
        O = function (e, t) {
          return y(t, 'promotedContent')
        },
        C = function (e, t) {
          return y(t, 'socialContext')
        },
        E = function (e, t) {
          return y(t, 'contextTweetId')
        },
        j = function (e, t) {
          var r = w(0, t),
            n = d.a.select(e, r)
          return (n && n.conversation_id_str) || void 0
        },
        x = Object(f.a)()
          .propsFromState(function () {
            return {
              fetchStatus: h,
              forwardPivotInfo: g,
              index: b,
              screenName: m,
              tweetId: w,
              tweet: d.a.createHydratedTweetSelector(w),
              promotedContent: O,
              dataSaver: u.c,
              socialContext: C,
              contextTweetId: E,
              rootTweet: d.a.createHydratedTweetSelector(j),
              showTweetMediaDetailDrawer: v.A,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_MEDIA_DETAIL_SCREEN',
              ),
              fetchTweetIfNeeded: d.a.fetchOneIfNeeded,
              googleAnalyticsPageView: s.a,
              updateSettings: v.L,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'media' }),
        T = (r('OZaJ'), r('VrFO')),
        I = r.n(T),
        P = r('Y9Ll'),
        _ = r.n(P),
        M = r('1Pcy'),
        S = r.n(M),
        D = r('5Yy7'),
        k = r.n(D),
        L = r('N+ot'),
        R = r.n(L),
        A = r('AuHH'),
        H = r.n(A),
        W = (r('uFXj'), r('ymux')),
        B = r('rkhm'),
        F = r('iyiT'),
        N = r('oQhu'),
        X = r('AUxQ'),
        z = r('rHpw'),
        V = r('yw4N')
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
            n = H()(e)
          if (t) {
            var o = H()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return R()(this, r)
        }
      }
      var U = (function (e) {
        k()(r, e)
        var t = Z(r)
        function r() {
          var e
          I()(this, r)
          for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            o()(
              S()(e),
              '_getApiErrorHandlerMap',
              Object(N.a)(function (e) {
                return Object(B.a)(e)
              }),
            ),
            o()(
              S()(e),
              '_getModule',
              Object(N.a)(function (e, t) {
                return Object(W.a)({ focalTweetId: e, featureSwitches: t })
              }),
            ),
            e
          )
        }
        return (
          _()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.contextTweetId,
                  r = e.location,
                  n = e.promotedContent,
                  o = e.rootTweet,
                  a = e.screenName,
                  c = e.socialContext,
                  l = e.tweet,
                  s = e.tweetId,
                  u = this.context.featureSwitches,
                  d = { selectedTweetId: s }
                return i.createElement(
                  V.a,
                  { accessibilityExpanded: !0, style: q.root },
                  i.createElement(X.a, {
                    apiErrorHandlerMap: this._getApiErrorHandlerMap(a),
                    contextTweetId: t,
                    focalTweet: l,
                    focalTweetId: s,
                    location: r,
                    module: this._getModule(s, u),
                    promotedContent: n,
                    rootTweet: o,
                    selectedTweet: d,
                    socialContext: c,
                    withFocalTweetMedia: !1,
                  }),
                )
              },
            },
          ]),
          r
        )
      })(i.Component)
      o()(U, 'contextType', l.a)
      var q = z.a.create(function (e) {
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
        J = U,
        K = r('v//M'),
        Q = r('W5XZ'),
        Y = r('3XMw'),
        G = r.n(Y),
        $ = r('tI3i'),
        ee = r.n($),
        te = r('2doW'),
        re = r('UPvq'),
        ne = r('VTxf'),
        oe = r('wiP2'),
        ae = r('Rp9C'),
        ce = r('xXop'),
        ie = r('lklz'),
        le = r('MWbm'),
        se = r('7N4s'),
        ue = r('0eWs'),
        de = r('/Ikv'),
        fe = r('mjJ+'),
        pe = r('/yvb'),
        ve = r('rOXj'),
        me = r('cHvH'),
        we = r('RCZO'),
        be = r('Lsrn'),
        he = r('shC7'),
        ye = r('k/Ka')
      function ge(e, t) {
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
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ge(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ge(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Ce = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ye.a)(
          'svg',
          Oe(
            Oe({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [be.a.root, e.style, he.a.getConstants().isRTL && be.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M21.185 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.145.146.337.22.53.22s.383-.073.53-.22l9.25-9.25c.293-.295.293-.77 0-1.062z',
            }),
            i.createElement('path', {
              d: 'M13.376 11.47l-9.25-9.25c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l8.72 8.72-8.72 8.72c-.294.294-.294.77 0 1.062.146.145.337.218.53.218s.384-.073.53-.22l9.25-9.25c.293-.293.293-.767 0-1.06z',
            }),
          ),
        )
      }
      Ce.metadata = { width: 24, height: 24 }
      var Ee = Ce
      function je(e, t) {
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
      function xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : je(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Te = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ye.a)(
          'svg',
          xe(
            xe({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [be.a.root, e.style, he.a.getConstants().isRTL && be.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M4.656 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.655 12z',
            }),
            i.createElement('path', {
              d: 'M12.465 12l8.72-8.72c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-9.25 9.25c-.294.292-.294.767 0 1.06l9.25 9.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L12.464 12z',
            }),
          ),
        )
      }
      Te.metadata = { width: 24, height: 24 }
      var Ie = Te,
        Pe = r('ACHU')
      function _e(e, t) {
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
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _e(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _e(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Se = G.a.d132269b,
        De = G.a.dd657211,
        ke = G.a.h63a5c3b,
        Le = G.a.f20b040d,
        Re = G.a.f1d9930c,
        Ae = G.a.a0e81a2e,
        He = function (e) {
          return e - F.a < F.b
        },
        We = function (e) {
          var t = i.useContext(se.b).isModal,
            r = Object(we.h)(),
            n = r.handleMediaDetailZoomed,
            o = r.handleMediaItemTapped,
            a = r.hideButtons,
            s = i.useState(!1),
            u = c()(s, 2),
            d = u[0],
            f = u[1],
            p = i.useContext(l.a).featureSwitches,
            v = e.analytics,
            m = e.contextTweetId,
            w = e.createLocalApiErrorHandler,
            b = e.dataSaver,
            h = e.fetchStatus,
            y = e.fetchTweetIfNeeded,
            g = e.forwardPivotInfo,
            O = e.googleAnalyticsPageView,
            C = e.history,
            E = e.index,
            j = e.location,
            x = e.promotedContent,
            T = e.rootTweet,
            I = e.screenName,
            P = e.showTweetMediaDetailDrawer,
            _ = e.socialContext,
            M = e.tweet,
            S = e.tweetId,
            D = e.updateSettings,
            k = function () {
              var e = j.state
              if (e) {
                var t = e.mediaItems
                return t && 'index' in t && 'items' in t ? t : void 0
              }
            },
            L = function () {
              var e = k()
              return e ? e.index : E
            },
            R = function () {
              var e,
                t = k()
              if (t) return t.items
              if (M) {
                var r = null === (e = M.extended_entities) || void 0 === e ? void 0 : e.media
                if (r) return r
                if (M.card) {
                  var n = A()
                  if (n) return [n]
                }
              }
            },
            A = function () {
              if (null != M && M.card) {
                var e = !0 === p.getValueWithoutScribeImpression('responsive_web_carousels_convert_to_single_media'),
                  t =
                    !0 ===
                    p.getValueWithoutScribeImpression(
                      'unified_cards_multi_destination_carousels_convert_to_single_card',
                    ),
                  r = {
                    tweetId: M.id_str,
                    tweetUserId: M.user.id_str,
                    tweetPermalink: M.permalink,
                    shouldConvertCarouselsToSingleMedia: e,
                    shouldConvertMDCtoSingleCard: t,
                  }
                ee()(void 0 !== M.card, 'tweet.card must be defined')
                var n = Object(ue.b)(M.card, r)
                if (n) {
                  var o = de.a.getImageEntityFromCard(n.card)
                  if (o) return de.a.convertImageEntityToPhoto(o)
                }
              }
            },
            H = function () {
              var e = L(),
                t = R()
              return t && t[e]
            },
            W = function () {
              return null != M && M.user ? '/'.concat(M.user.screen_name, '/status/').concat(M.id_str) : '/'
            },
            B = function (e) {
              var t = k()
              return t ? Me(Me({}, j.state), {}, { mediaItems: Me(Me({}, t), {}, { index: e }) }) : j.state
            },
            F = function (e) {
              return e && He(e) ? d : P
            },
            N = i.useCallback(
              function () {
                if (M && M.user && I.toLowerCase() !== M.user.screen_name.toLowerCase()) {
                  var e =
                    M && M.user
                      ? '/'
                          .concat(M.user.screen_name, '/status/')
                          .concat(M.id_str, '/photo/')
                          .concat(E + 1)
                      : null
                  e && C.replace(e)
                }
              },
              [C, E, I, M],
            ),
            X = i.useCallback(
              function () {
                if (M) {
                  var e = ae.a.getTweetItem(M)
                  O(v.contextualScribeNamespace), v.scribe({ action: 'show', data: { items: [e] } })
                }
              },
              [v, O, M],
            ),
            z = function () {
              var e = W()
              C.goBackThroughModals({ fallbackPath: e })
            },
            V = i.useCallback(
              function () {
                y(S).catch(w(Q.a))
              },
              [w, y, S],
            ),
            Z = function (e) {
              return function () {
                e && He(e)
                  ? (v.scribe({ component: 'conversation_drawer', action: d ? 'collapse' : 'expand' }), f(!d))
                  : (v.scribe({ component: 'conversation_drawer', action: P ? 'collapse' : 'expand' }),
                    D({ showTweetMediaDetailDrawer: !P }))
              }
            },
            U = function (e) {
              var t = L(),
                r = R()
              if (e !== t) {
                v.scribe({
                  component: 'gallery',
                  element: t < e ? 'next' : 'prev',
                  action: 'click',
                  data: { event_value: e + 1 },
                })
                var n = r && r[e]
                C.replace({ state: B(e), pathname: n && n.expanded_url })
              }
            },
            q = function (e) {
              return i.createElement(fe.a, { isFixed: !0, items: [{ link: W(), text: De }], onCloseRequested: e })
            },
            Y = function (e) {
              var r = H(),
                n = Object(we.b)(r),
                o = e && F(e)
              return t
                ? i.createElement(pe.a, {
                    accessibilityLabel: o ? Le : De,
                    dominantColor: n.rgb,
                    hoverLabel: { label: o ? Re : Ae },
                    icon: o ? i.createElement(Ee, null) : i.createElement(Ie, null),
                    onClick: Z(e),
                    type: 'onMediaDominantColorFilled',
                  })
                : M && !t
                ? i.createElement(pe.a, {
                    accessibilityLabel: ke,
                    dominantColor: r ? n.rgb : void 0,
                    icon: i.createElement(Pe.a, null),
                    renderMenu: q,
                    type: r ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                  })
                : void 0
            },
            G = function () {
              var e = L(),
                t = R()
              if (!t) return i.createElement(ne.a, null)
              var r = t[e],
                a = Object(we.b)(r).rgb
              return i.createElement(te.a, {
                dataSaver: b,
                dominantColor: a,
                mediaIndex: e,
                mediaItems: t,
                onDismiss: z,
                onMediaDetailZoomed: n,
                onMediaItemChanged: U,
                onTap: o,
                promotedContent: x,
                videoId: 1 === t.length && M ? ie.b.forTweet(M.id_str) : void 0,
              })
            },
            $ = function (e) {
              var t = H(),
                r = Object(we.b)(t),
                n =
                  ve.a.isTouchSupported() &&
                  (function () {
                    var e = L(),
                      t = R()
                    if (!t) return !1
                    var r = t[e]
                    return 'photo' === (null == r ? void 0 : r.type) || !1
                  })()
              return i.createElement(
                re.a,
                {
                  backgroundColor: r,
                  footerButtons: M
                    ? i.createElement(ce.a, {
                        actionSize: 'large',
                        activeColor: 'white',
                        allowDownvote: !0,
                        color: 'white',
                        forwardPivotInfo: M.softIntervention || g,
                        style: Be.actionsBar,
                        tweet: M,
                        withCount: !0,
                      })
                    : void 0,
                  hideButtons: a,
                  mediaItem: t,
                  onCloseButtonPress: z,
                  overlayFooter: n,
                  topRightButton: Y(e),
                },
                i.createElement(K.a, { accessibilityLabel: Se, fetchStatus: h, onRequestRetry: V, render: G }),
              )
            },
            be = i.useRef(null)
          i.useEffect(
            function () {
              be.current !== S && (V(), (be.current = S))
            },
            [V, S],
          )
          var he = i.useRef(null)
          return (
            i.useEffect(
              function () {
                var e
                ;(null === (e = he.current) || void 0 === e ? void 0 : e.id_str) !== (null == M ? void 0 : M.id_str) &&
                  (X(), (he.current = M))
              },
              [X, M],
            ),
            i.useEffect(
              function () {
                N()
              },
              [N],
            ),
            i.createElement(
              oe.a.Configure,
              { headerless: !0 },
              t
                ? i.createElement(me.a, null, function (e) {
                    var t = e.windowWidth
                    return i.createElement(
                      le.a,
                      { style: Be.container },
                      i.createElement(le.a, { style: Be.neighbor }, $(t)),
                      F(t)
                        ? i.createElement(J, {
                            contextTweetId: m,
                            location: j,
                            promotedContent: x,
                            rootTweet: T,
                            screenName: I,
                            socialContext: _,
                            tweet: M,
                            tweetId: S,
                          })
                        : null,
                    )
                  })
                : $(),
            )
          )
        },
        Be = z.a.create(function (e) {
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
        Fe = x(We)
      t.default = Fe
    },
  },
])
//# sourceMappingURL=WIPED
