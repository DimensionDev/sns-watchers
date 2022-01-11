;(window.webpackJsonp = window.webpackJsonp || []).push([
  [185],
  {
    '0W/e': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      })
      var n = r('rHpw'),
        a = function (e) {
          return 1 === e
            ? { height: n.a.theme.spacesPx.space48, width: n.a.theme.spacesPx.space48 }
            : { height: n.a.theme.spacesPx.space40, width: e * n.a.theme.spacesPx.space40 }
        }
    },
    PEva: function (e, t, r) {
      'use strict'
      r.r(t)
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        l = r('Y9Ll'),
        o = r.n(l),
        i = r('5Yy7'),
        c = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        p = r('AuHH'),
        f = r.n(p),
        m = r('ERkP'),
        d = r('1Pcy'),
        y = r.n(d),
        h = r('KEM+'),
        b = r.n(h),
        v = (r('2G9S'), r('+xEG')),
        g = r('aoyV'),
        E = r('kCRK'),
        S = r('fZNH'),
        O = r('ub6r'),
        R = r('0nHQ'),
        w = r('USG3'),
        C = r('Q0n6'),
        P = r('5VhU'),
        A = r('hhMf'),
        k = r('Ur4q'),
        T = r('oH2E'),
        L = r('mNIZ'),
        x = r('zCLo'),
        _ = r('MWbm'),
        j = r('ReFq'),
        I = r('VLhD')
      function F(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var B = (function (e) {
          c()(r, e)
          var t = F(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              b()(y()(e), '_renderWithHideControls', function (t) {
                var r,
                  n,
                  a = e.props,
                  l = a.accessibilityLabel,
                  o = a.containerRef,
                  i = a.customControlBarIcon,
                  c = a.fullscreenAdsDisabledOnIOS,
                  s = a.guestsState,
                  u = a.onScribeEvent,
                  p = a.playerApi,
                  f = a.playerDisplayOptions,
                  d = a.playerState,
                  y = a.poster,
                  h = a.shouldShowAltLabel,
                  b = a.showWatchAgain,
                  A = a.useKeyboardShortcuts
                if (!p || !d) return null
                var F = Object(C.e)(d),
                  B = (null == F ? void 0 : F.contentType) === E.a.GIF,
                  D = 'PLAY_REQUESTED' !== (null === (r = d.controls) || void 0 === r ? void 0 : r.playState),
                  N = b && d.tracksFinished,
                  M = t.Observer,
                  W = t.observed,
                  H = Object(I.c)(d, W, I.b),
                  U = !!d.error,
                  K = H && d.isPreview,
                  V = !(!H || null == F || !F.isLive),
                  z = h ? l : void 0,
                  Y = !(null != f && f.hideLeftBadges) && (!!z || B || K || V),
                  X = !(null != f && f.hideRightBadges) && H,
                  G = !(null != f && f.hidePosterImage),
                  Z = null === (n = d.controls) || void 0 === n ? void 0 : n.isPosterShown
                return m.createElement(
                  x.a,
                  { enabled: !!A, playerApi: p, playerState: d },
                  m.createElement(
                    S.a,
                    { playerState: d },
                    m.createElement(
                      M,
                      { click: !0, interactionKey: I.a.Root, mousemove: !0, mouseover: !0 },
                      U
                        ? null
                        : m.createElement(
                            m.Fragment,
                            null,
                            m.createElement(k.a, {
                              hideControls: H,
                              isTouchOnlyUI: I.b,
                              playerApi: p,
                              playerDisplayOptions: f,
                              playerState: d,
                            }),
                            G &&
                              !N &&
                              m.createElement(T.a, { imageSrc: y, playerApi: p, playerState: d, withPlayButton: D }),
                            m.createElement(g.a, { playerState: d }),
                            !B && b && m.createElement(j.a, { onScribeEvent: u, playerApi: p, playerState: d }),
                            m.createElement(P.a, { guestsState: s, playerState: d }),
                            !B &&
                              m.createElement(
                                M,
                                { focus: !0, interactionKey: I.a.VideoCTA, mouseover: !0 },
                                m.createElement(
                                  w.a,
                                  { show: !H },
                                  m.createElement(L.a, { playerApi: p, playerState: d }),
                                ),
                              ),
                            !B &&
                              !Z &&
                              m.createElement(
                                m.Fragment,
                                null,
                                m.createElement(
                                  M,
                                  { focus: !0, interactionKey: I.a.A11YHook },
                                  m.createElement(_.a, { focusable: !0 }),
                                ),
                                m.createElement(
                                  M,
                                  { focus: !0, interactionKey: I.a.ControlBar, mouseover: !0, touch: !0 },
                                  m.createElement(O.a, {
                                    containerRef: o,
                                    customControlBarIcon: i,
                                    fullscreenAdsDisabledOnIOS: c,
                                    hideControls: H,
                                    playerApi: p,
                                    playerState: d,
                                    publisherDisplayName: null == F ? void 0 : F.publisherDisplayName,
                                    publisherProfileImageUrl: null == F ? void 0 : F.publisherProfileImageUrl,
                                    showScrubber:
                                      'ad' !== (null == F ? void 0 : F.displayType) && !(null != F && F.isLive),
                                  }),
                                ),
                              ),
                            m.createElement(
                              w.a,
                              { show: Y },
                              m.createElement(v.a, {
                                mediaAccessibilityLabel: z,
                                playerDisplayOptions: f,
                                playerState: d,
                                position: 'left',
                              }),
                            ),
                            m.createElement(
                              w.a,
                              { show: X },
                              m.createElement(v.a, { playerDisplayOptions: f, playerState: d, position: 'right' }),
                            ),
                          ),
                      m.createElement(
                        w.a,
                        { show: U },
                        U && m.createElement(R.a, { imageSrc: y, playerApi: p, playerState: d }),
                      ),
                    ),
                  ),
                )
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    r = e.playerState
                  return t && r
                    ? m.createElement(
                        A.a,
                        null,
                        m.createElement(A.a.Context.Consumer, null, this._renderWithHideControls),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(m.PureComponent),
        D = r('Zl35'),
        N = r('RhWx'),
        M = r.n(N),
        W = r('t62R'),
        H = r('Wms4'),
        U = r('vCAy'),
        K = r('w05h'),
        V = r('IE/l'),
        z = r('N2PN'),
        Y = r('dPHj'),
        X = (r('uFXj'), r('/yvb')),
        G = r('0W/e'),
        Z = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('Lsrn')),
        q = r('k/Ka')
      function Q(e, t) {
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
            ? Q(Object(r), !0).forEach(function (t) {
                b()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Q(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var $ = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(q.a)(
          'svg',
          J(
            J({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Z.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          m.createElement(
            'g',
            null,
            m.createElement('path', {
              d: 'M20.5 2h-1c-.828 0-1.5.672-1.5 1.5v6.976L4.87 2.116c-.228-.146-.522-.157-.762-.023-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.113.063.237.093.36.093.142 0 .28-.04.403-.117L18 13.527V20.5c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-17c0-.828-.672-1.5-1.5-1.5z',
            }),
          ),
        )
      }
      $.metadata = { width: 24, height: 24 }
      var ee = $,
        te = r('3rX5'),
        re = r('cm6r'),
        ne = r('fs1G'),
        ae = r('rHpw'),
        le = r('shC7'),
        oe = ae.a.create(function (e) {
          var t = e.borderRadii,
            r = e.borderWidths,
            n = e.colors,
            a = e.spaces
          return {
            thumbnail: {
              backgroundColor: n.translucentBlack77,
              borderRadius: t.small,
              display: 'flex',
              flexDirection: le.a.getConstants().isRTL ? 'row-reverse' : 'row',
              overflow: 'hidden',
              opacity: 1,
            },
            thumbnailFocused: { boxShadow: '0 0 0 '.concat(r.medium, ' ').concat(n.white), outlineStyle: 'none' },
            countdownTime: {
              paddingHorizontal: a.space4,
              minWidth: '1em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontVariant: ['tabular-nums'],
            },
            iconMargin: { marginLeft: '0.5em' },
            iconMarginRtl: { marginRight: '0.5em' },
          }
        }),
        ie = function (e) {
          var t = e.onClick,
            r = m.useContext(D.b.PeriodicContext),
            n = r.aspectRatio,
            a = r.playerState
          if (!a) return null
          var l = Object(C.e)(a)
          if (!l || l.displayType !== E.c.AD) return null
          var o = l.durationMs,
            i = o < 7e3,
            c = (i ? o : 5e3) - (l.currentTimeMs || 0),
            s = c > 250,
            u = c < 0,
            p = Object(C.d)(l) || 0,
            f = Object(C.f)(l) || 0,
            d = (i ? f : 5) - p,
            y = Object(K.m)({ seconds: Object(K.q)(d) })
          return m.createElement(
            re.a,
            {
              accessibilityLabel: u ? K.l : y,
              accessibilityRole: 'button',
              focusable: !0,
              interactive: !0,
              interactiveStyles: null,
              onClick: u && t ? t : ne.a,
              testID: 'ControlBar-containerView',
            },
            function (e) {
              var t = le.a.getConstants().isRTL
              return m.createElement(
                m.Fragment,
                null,
                !u &&
                  m.createElement(
                    w.a,
                    { show: s },
                    m.createElement(
                      _.a,
                      {
                        style: [oe.thumbnail, e.isFocused && oe.thumbnailFocused],
                        testID: 'ControlBar-videoThumbnail',
                      },
                      m.createElement(W.b, { color: 'white', size: 'subtext2', style: oe.countdownTime }, d),
                      m.createElement(te.a, { source: a.posterImage, style: Object(G.a)(n) }),
                    ),
                  ),
                m.createElement(
                  w.a,
                  { show: u },
                  m.createElement(
                    X.a,
                    {
                      focusable: !1,
                      interactivityState: e,
                      pointerEvents: 'auto',
                      size: 'small',
                      testID: 'ControlBar-skipButton',
                      type: 'onMediaDominantColorFilled',
                    },
                    m.createElement(
                      W.b,
                      { dir: 'ltr', weight: 'normal' },
                      K.k,
                      m.createElement(ee, { style: t ? oe.iconMarginRtl : oe.iconMargin }),
                    ),
                  ),
                ),
              )
            },
          )
        },
        ce = r('aITJ'),
        se = r('kRXa'),
        ue = r('wtsM'),
        pe = r('5Ixf'),
        fe = r('AtEG'),
        me = r('NnQ9'),
        de = r('p6DB')
      function ye(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var he = 'PrerollControlBar-',
        be = { CAPTIONS: ''.concat(he, 'Captions'), FULLSCREEN: ''.concat(he, 'Fullscreen') },
        ve = (function (e) {
          c()(r, e)
          var t = ye(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              b()(y()(e), '_parentRef', m.createRef()),
              b()(y()(e), '_renderRightContent', function (t) {
                var r = e.props,
                  n = r.playerApi,
                  a = r.playerState
                if (!n || !a) return null
                var l = ce.b.isIOS()
                return m.createElement(
                  m.Fragment,
                  null,
                  e._renderTimePlayed(),
                  e._renderVolumeControls(n, a),
                  !l &&
                    m.createElement(
                      t,
                      { focus: !0, interactionKey: be.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                      e._renderFullScreenButton(n, a),
                    ),
                )
              }),
              b()(y()(e), '_renderActionButton', function (e, t) {
                var r = t.controls,
                  n = t.isPlaying,
                  a = e.pause,
                  l = e.play,
                  o = Object(C.e)(t)
                return !o || o.isLive
                  ? null
                  : n || (r && 'PLAY_REQUESTED' === r.playState)
                  ? m.createElement(z.b, {
                      accessibilityLabel: ue.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: m.createElement(pe.a, null),
                      onPress: a,
                    })
                  : m.createElement(z.b, {
                      accessibilityLabel: ue.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: m.createElement(fe.a, null),
                      onPress: l,
                    })
              }),
              b()(y()(e), '_renderAdText', function () {
                return m.createElement(Y.a, null, K.o)
              }),
              b()(y()(e), '_renderTimePlayed', function () {
                return m.createElement(D.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    r = Object(C.e)(t),
                    n = Object(C.d)(r),
                    a = Object(C.f)(r)
                  return r && 'number' == typeof n && a && !r.isLive
                    ? m.createElement(Y.a, null, ''.concat(Object(C.b)(n), ' / ').concat(Object(C.b)(a)))
                    : null
                })
              }),
              b()(y()(e), '_renderVolumeControls', function (t, r) {
                var n = r.isMuted,
                  a = r.volume,
                  l = t.mute,
                  o = t.setVolume,
                  i = t.unmute,
                  c = n ? i : l,
                  s = n ? ue.g : ue.c
                return m.createElement(se.a, {
                  accessibilityLabelIcon: s,
                  accessibilityLabelSlider: ue.h,
                  isMuted: n,
                  onMuteToggle: c,
                  onSliderChange: e._setVolumePercent(o),
                  volumePercent: 100 * a,
                })
              }),
              b()(y()(e), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              b()(y()(e), '_renderFullScreenButton', function (t, r) {
                var n = r.fullscreen
                return n.isFullscreen
                  ? m.createElement(z.b, {
                      accessibilityLabel: ue.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: m.createElement(Ee, { isFullscreen: n.isFullscreen }),
                      onPress: e._exitFullScreen(t),
                    })
                  : m.createElement(z.b, {
                      accessibilityLabel: ue.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: m.createElement(Ee, { isFullscreen: n.isFullscreen }),
                      onPress: e._requestFullScreen(t),
                    })
              }),
              b()(y()(e), '_requestFullScreen', function (t) {
                return function () {
                  t.fullScreen(e.props.containerRef)
                }
              }),
              b()(y()(e), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              b()(y()(e), '_renderSkipAffordance', function () {
                return m.createElement(
                  _.a,
                  { pointerEvents: 'none', style: ge.skipAffordance },
                  m.createElement(ie, null),
                )
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.displayDismissableControls,
                    n = t.playerApi,
                    a = t.playerState,
                    l = t.skipButton
                  return n && a
                    ? m.createElement(A.a.ObserverContext.Consumer, null, function (t) {
                        return m.createElement(
                          _.a,
                          { ref: e._parentRef, style: ge.root },
                          m.createElement(V.a, {
                            actionButton: e._renderActionButton(n, a),
                            displayDismissableControls: r,
                            leftContent: e._renderAdText(),
                            rightContent: e._renderRightContent(t),
                            skipButton: l,
                          }),
                        )
                      })
                    : null
                },
              },
            ]),
            r
          )
        })(m.Component),
        ge = ae.a.create(function (e) {
          return {
            root: { writingDirection: 'ltr', cursor: 'auto', width: '100%' },
            skipAffordance: { marginLeft: e.spaces.space12, visibility: 'hidden' },
          }
        })
      function Ee(e) {
        var t = e.isFullscreen,
          r = (e.style, Se.hidden),
          n = Se.shown
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(me.a, { style: t ? r : n }),
          m.createElement(de.a, { style: t ? n : r }),
        )
      }
      var Se = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } },
        Oe = ve,
        Re = r('jhWN')
      function we(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var Ce = (function (e) {
          c()(r, e)
          var t = we(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              b()(y()(e), '_buildMessage', function (e, t) {
                switch (e) {
                  case E.d.watch_now:
                    return t ? Object(K.e)({ advertiserName: t }) : K.j
                  case E.d.shop:
                    return t ? Object(K.c)({ advertiserName: t }) : K.h
                  case E.d.see_more:
                    return t ? Object(K.b)({ advertiserName: t }) : K.g
                  case E.d.go_to:
                    return t ? Object(K.a)({ advertiserName: t }) : K.f
                  case E.d.visit_site:
                  default:
                    return t ? Object(K.d)({ advertiserName: t }) : K.i
                }
              }),
              b()(y()(e), '_handlePress', function (e) {
                return function () {
                  e.callToActionClicked()
                }
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.playerApi
                  e && e.callToActionImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.advertiserName,
                    r = e.avatarUri,
                    n = e.ctaType,
                    a = e.ctaUrl,
                    l = e.playerApi
                  if (!l) return null
                  var o = this._buildMessage(n, t)
                  return m.createElement(
                    X.a,
                    {
                      accessibilityLabel: o,
                      icon: r
                        ? m.createElement(Re.a, { borderColor: 'white', borderWidth: 'small', size: 'medium', uri: r })
                        : void 0,
                      link: a,
                      onPress: this._handlePress(l),
                      size: 'xSmall',
                      style: Pe.root,
                      type: 'onMediaDominantColorFilled',
                    },
                    o,
                  )
                },
              },
            ]),
            r
          )
        })(m.PureComponent),
        Pe = ae.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        }),
        Ae = Ce,
        ke = (r('z84I'), r('aNKf')),
        Te = ae.a.create(function (e) {
          return {
            root: { position: 'absolute', top: 0, left: 0, width: '100%' },
            gradientContainer: { padding: e.spaces.space16 },
            flexRow: { alignItems: 'center', flexDirection: 'row' },
            rightSpacing: { marginRight: e.spaces.space4 },
          }
        }),
        Le = function (e) {
          var t = e.children
          return m.createElement(
            _.a,
            { style: Te.root },
            m.createElement(
              ke.a,
              {
                colors: [ae.a.theme.colors.translucentBlack77, ae.a.theme.colors.transparent],
                style: Te.gradientContainer,
              },
              m.createElement(
                _.a,
                { style: Te.flexRow },
                m.Children.toArray(t).map(function (e, t, r) {
                  var n = r.length,
                    a = 'LinearGradient-children-'.concat(t),
                    l = t < n - 1 ? Te.rightSpacing : ''
                  return m.createElement(_.a, { key: a, style: l }, e)
                }),
              ),
            ),
          )
        }
      function xe(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var _e = (function (e) {
          c()(r, e)
          var t = xe(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              b()(y()(e), 'state', { showControlBar: !1, stackedLabels: !1 }),
              b()(y()(e), '_durationLabelRef', m.createRef()),
              b()(y()(e), '_descriptionLabelRef', m.createRef()),
              b()(y()(e), '_handleLayout', function () {
                var t,
                  r,
                  n = null === (t = e._durationLabelRef) || void 0 === t ? void 0 : t.current,
                  a = null === (r = e._descriptionLabelRef) || void 0 === r ? void 0 : r.current
                n &&
                  a &&
                  n.measure(function (t, r) {
                    a.measure(function (t, n) {
                      r !== n ? e.setState({ stackedLabels: !0 }) : e.setState({ stackedLabels: !1 })
                    })
                  })
              }),
              b()(y()(e), '_renderPrerollControlBar', function (t) {
                var r = e.props,
                  n = r.containerRef,
                  a = r.onSkip,
                  l = r.playerApi,
                  o = r.playerState
                if (!l || !o) return null
                var i = t.Observer,
                  c = t.observed,
                  s = Object(I.c)(o, c, I.b),
                  u = o.fullscreen.isFullscreen,
                  p = le.a.getConstants().isRTL,
                  f = [je.labelOuterContainerBase, p ? je.labelOuterContainerRtl : je.labelOuterContainerLtr]
                return m.createElement(
                  _.a,
                  { style: je.bottomContentContainer },
                  m.createElement(
                    _.a,
                    { style: je.bottomContentRow },
                    m.createElement(
                      _.a,
                      { style: [je.forceFullWidth, je.flexDirectionRow] },
                      m.createElement(
                        i,
                        { focus: !0, interactionKey: I.a.A11YHook },
                        m.createElement(_.a, { focusable: !0 }),
                      ),
                      m.createElement(
                        _.a,
                        { style: je.flexExpand },
                        m.createElement(
                          _.a,
                          { style: f },
                          m.createElement(
                            w.a,
                            { show: s },
                            m.createElement(
                              _.a,
                              { style: [je.bottomContentRow, je.rowBottomSpace] },
                              e._renderLabels(),
                            ),
                          ),
                        ),
                        u
                          ? null
                          : m.createElement(
                              _.a,
                              { style: je.bottomContentRow },
                              m.createElement(
                                _.a,
                                {
                                  style: [je.skipThumbnail, p ? je.skipThumbnailAbsoluteRtl : je.skipThumbnailAbsolute],
                                  testID: Ie.floatSkipThumbnail,
                                },
                                m.createElement(ie, { onClick: a }),
                              ),
                            ),
                        m.createElement(
                          i,
                          { focus: !0, interactionKey: I.a.ControlBar, mouseover: !0, touch: !0 },
                          m.createElement(Oe, {
                            containerRef: n,
                            displayDismissableControls: !s,
                            playerApi: l,
                            playerState: o,
                            skipButton: u
                              ? m.createElement(
                                  _.a,
                                  {
                                    style: [
                                      je.skipThumbnail,
                                      p ? je.skipThumbnailRelativeRtl : je.skipThumbnailRelative,
                                    ],
                                    testID: Ie.inlineSkipThumbnail,
                                  },
                                  m.createElement(ie, { onClick: a }),
                                )
                              : null,
                          }),
                        ),
                      ),
                    ),
                  ),
                )
              }),
              b()(y()(e), '_renderWithIntentionContext', function (t) {
                var r = e.props,
                  n = r.playerApi,
                  a = r.playerState
                if (!n || !a) return null
                var l = Object(C.e)(a),
                  o = null == l ? void 0 : l.advertiserProfileImageUrl,
                  i = null == l ? void 0 : l.advertiserName,
                  c = null == l ? void 0 : l.cta
                return m.createElement(
                  m.Fragment,
                  null,
                  c
                    ? m.createElement(Ae, {
                        advertiserName: i,
                        avatarUri: o,
                        ctaType: c.type,
                        ctaUrl: c.url,
                        playerApi: n,
                      })
                    : m.createElement(
                        Le,
                        null,
                        o &&
                          m.createElement(Re.a, {
                            accessibilityHidden: !0,
                            borderColor: 'white',
                            borderWidth: 'small',
                            focusable: !1,
                            size: 'medium',
                            uri: o,
                          }),
                        i && m.createElement(W.b, { color: 'white', weight: 'bold' }, i),
                      ),
                  e._renderPrerollControlBar(t),
                )
              }),
              b()(y()(e), '_renderLabels', function () {
                return m.createElement(D.a, { periodic: !0 }, function (t) {
                  var r = t.playerState,
                    n = Object(C.e)(r),
                    a = Object(C.f)(n),
                    l = Object(C.d)(n) || 0,
                    o = a ? a - l : null,
                    i = le.a.getConstants().isRTL,
                    c = [je.labelContainerBase, i ? je.labelContainerRtl : je.labelContainerLtr],
                    s = [U.b.borderRadiusLeft, e.state.stackedLabels && U.b.borderRadiusRight],
                    u = [U.b.borderRadiusRight, e.state.stackedLabels && U.b.borderRadiusLeft],
                    p =
                      n && 'number' == typeof o && !n.isLive
                        ? m.createElement(
                            _.a,
                            { ref: e._durationLabelRef },
                            m.createElement(
                              H.a,
                              {
                                key: 'PrerollVideoOverlay-DurationLabel',
                                style: [
                                  U.b.label,
                                  i ? je.labelSpaceLeft : U.b.spaceRight,
                                  e.state.stackedLabels && je.labelBottomSpace,
                                ].concat(M()(i ? u : s)),
                              },
                              m.createElement(W.b, { numberOfLines: 1 }, Object(C.b)(o)),
                            ),
                          )
                        : null,
                    f = m.createElement(
                      _.a,
                      { ref: e._descriptionLabelRef },
                      m.createElement(
                        H.a,
                        {
                          key: 'PrerollVideoOverlay-DescriptionLabel',
                          style: [U.b.label, i ? je.labelSpaceLeft : U.b.spaceRight].concat(M()(i ? s : u)),
                        },
                        m.createElement(W.b, { numberOfLines: 1 }, K.o),
                      ),
                    )
                  return m.createElement(_.a, { onLayout: e._handleLayout, pointerEvents: 'none', style: c }, p, f)
                })
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    r = e.playerState
                  return t && r ? m.createElement(A.a.Context.Consumer, null, this._renderWithIntentionContext) : null
                },
              },
            ]),
            r
          )
        })(m.Component),
        je = ae.a.create(function (e) {
          return {
            bottomContentContainer: { flexWrap: 'wrap', position: 'absolute', bottom: 0, width: '100%' },
            bottomContentRow: {
              alignItems: 'flex-end',
              flexWrap: 'nowrap',
              flexDirection: le.a.getConstants().isRTL ? 'row-reverse' : 'row',
              flexGrow: 1,
              flexShrink: 0,
              justifyContent: 'space-between',
              width: '100%',
            },
            rowBottomSpace: { marginBottom: e.spaces.space12 },
            forceFullWidth: { width: '100%' },
            labelOuterContainerBase: { flexWrap: 'wrap', position: 'absolute', bottom: 0, maxWidth: '65%' },
            labelOuterContainerLtr: { flexDirection: 'row', left: 0 },
            labelOuterContainerRtl: { flexDirection: 'row-reverse', right: 0 },
            labelBottomSpace: { marginBottom: e.spaces.space2 },
            labelContainerBase: {
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 'auto',
            },
            labelContainerLtr: { flexDirection: 'row', marginLeft: e.spaces.space12 },
            labelContainerRtl: { flexDirection: 'row-reverse', marginRight: e.spaces.space12 },
            labelSpaceLeft: { marginLeft: e.spaces.space2 },
            skipThumbnail: { flexGrow: 0, flexShrink: 0, flexBasis: 'auto', alignItems: 'flex-end' },
            skipThumbnailRelative: { marginBottom: e.spaces.space12, marginRight: e.spaces.space12 },
            skipThumbnailAbsolute: {
              position: 'absolute',
              bottom: e.spaces.space12,
              right: e.spaces.space12,
              maxWidth: '35%',
            },
            skipThumbnailRelativeRtl: { marginBottom: e.spaces.space12, marginLeft: e.spaces.space12 },
            skipThumbnailAbsoluteRtl: {
              position: 'absolute',
              bottom: e.spaces.space12,
              left: e.spaces.space12,
              maxWidth: '35%',
            },
            flexExpand: { flexGrow: 1, flexShrink: 1, flexBasis: 0 },
            flexDirectionRow: { flexDirection: le.a.getConstants().isRTL ? 'row-reverse' : 'row' },
            flexWrap: { flexWrap: 'wrap', justifyContent: 'space-between' },
            hidden: { visibility: 'hidden' },
          }
        }),
        Ie = { floatSkipThumbnail: 'float-SkipThumbnail', inlineSkipThumbnail: 'inline-SkipThumbnail' },
        Fe = _e,
        Be = r('uz49')
      function De(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var Ne = (function (e) {
        c()(r, e)
        var t = De(r)
        function r() {
          var e
          a()(this, r)
          for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(l))),
            b()(y()(e), 'state', { wasPrerollSkipped: !1 }),
            b()(y()(e), '_renderWithRedesignedPrerollUx', function (t) {
              var r,
                n = e.props,
                a = n.playerApi,
                l = n.playerState,
                o = n.poster
              if (!a || !l) return null
              var i = Object(C.e)(l),
                c = (null == i ? void 0 : i.displayType) === E.c.AD && (null == i ? void 0 : i.playbackCompleted),
                s = null === (r = l.errorInfo) || void 0 === r ? void 0 : r.adFailed
              return e.state.wasPrerollSkipped || c || s
                ? m.createElement(D.a, null, function (t) {
                    var r = t.aspectRatio,
                      n = o || l.posterImage
                    return m.createElement(Be.a, {
                      aspectRatio: r,
                      imageSrc: n,
                      onTransitionComplete: e._handleTransitionAnimationComplete,
                    })
                  })
                : (null == i ? void 0 : i.displayType) === E.c.AD
                ? e._renderPrerollVideo(t)
                : m.createElement(S.a, { playerState: l }, e._renderPrerollVideo(t))
            }),
            b()(y()(e), '_renderPrerollVideo', function (t) {
              var r,
                n = e.props,
                a = n.containerRef,
                l = n.playerApi,
                o = n.playerDisplayOptions,
                i = n.playerState,
                c = n.poster,
                s = n.showWatchAgain
              if (!l || !i) return null
              var u = t.Observer,
                p = t.observed,
                f = 'PLAY_REQUESTED' !== (null === (r = i.controls) || void 0 === r ? void 0 : r.playState),
                d = s && i.tracksFinished,
                y = Object(I.c)(i, p, I.b),
                h = !!i.error,
                b = !(null != o && o.hidePosterImage)
              return m.createElement(
                u,
                { click: !0, interactionKey: I.a.Root, mousemove: !0, mouseover: !0 },
                h
                  ? null
                  : m.createElement(
                      m.Fragment,
                      null,
                      m.createElement(k.a, {
                        hideControls: y,
                        isTouchOnlyUI: I.b,
                        playerApi: l,
                        playerDisplayOptions: o,
                        playerState: i,
                      }),
                      b && !d && m.createElement(T.a, { imageSrc: c, playerApi: l, playerState: i, withPlayButton: f }),
                      m.createElement(g.a, { playerState: i }),
                      m.createElement(Fe, { containerRef: a, onSkip: e._handleSkip, playerApi: l, playerState: i }),
                    ),
                m.createElement(
                  w.a,
                  { show: h },
                  h && m.createElement(R.a, { imageSrc: c, playerApi: l, playerState: i }),
                ),
              )
            }),
            b()(y()(e), '_handleSkip', function () {
              var t = e.props.playerApi
              t && t.pause(), e.setState({ wasPrerollSkipped: !0 })
            }),
            b()(y()(e), '_handleTransitionAnimationComplete', function () {
              var t = e.props.playerApi
              t && t.nextTrack()
            }),
            e
          )
        }
        return (
          o()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  r = e.playerState
                if (!t || !r) return null
                var n = Object(C.e)(r)
                return (null == n ? void 0 : n.displayType) === E.c.AD &&
                  (null == n ? void 0 : n.useRedesignedPrerollUx)
                  ? m.createElement(
                      A.a,
                      null,
                      m.createElement(A.a.Context.Consumer, null, this._renderWithRedesignedPrerollUx),
                    )
                  : m.createElement(B, this.props)
              },
            },
          ]),
          r
        )
      })(m.PureComponent)
      function Me(e) {
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
            n = f()(e)
          if (t) {
            var a = f()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var We = (function (e) {
        c()(r, e)
        var t = Me(r)
        function r() {
          return a()(this, r), t.apply(this, arguments)
        }
        return (
          o()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  r = e.playerState,
                  n = e.useRedesignedPrerollUx
                return t && r ? (n ? m.createElement(Ne, this.props) : m.createElement(B, this.props)) : null
              },
            },
          ]),
          r
        )
      })(m.PureComponent)
      t.default = We
    },
    ReFq: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return A
      })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        a = r.n(n),
        l = r('Y9Ll'),
        o = r.n(l),
        i = r('1Pcy'),
        c = r.n(i),
        s = r('5Yy7'),
        u = r.n(s),
        p = r('N+ot'),
        f = r.n(p),
        m = r('AuHH'),
        d = r.n(m),
        y = r('KEM+'),
        h = r.n(y),
        b = (r('2G9S'), r('ERkP')),
        v = r('/yvb'),
        g = r('3XMw'),
        E = r.n(g),
        S = r('rHpw'),
        O = r('MWbm')
      function R(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                h()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function C(e) {
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
            n = d()(e)
          if (t) {
            var a = d()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var P = E.a.f2d4e6f1,
        A = (function (e) {
          u()(r, e)
          var t = C(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++) l[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              h()(c()(e), '_createWatchAgainHandler', function (t) {
                return function (r) {
                  var n = e.props,
                    a = n.onScribeEvent,
                    l = n.playerApi
                  r.stopPropagation(), a && a({ namespace: { element: t, action: 'click' } }), l && l.replay()
                }
              }),
              h()(c()(e), '_handleOnPress', e._createWatchAgainHandler('watch_again_button')),
              h()(c()(e), '_handleOnClick', e._createWatchAgainHandler('watch_again_overlay')),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState
                  return e && e.tracksFinished
                    ? b.createElement(
                        O.a,
                        { onClick: this._handleOnClick, style: k.overlay },
                        b.createElement(
                          v.a,
                          { accessibilityLabel: P, onPress: this._handleOnPress, type: 'onMediaDominantColorFilled' },
                          P,
                        ),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(b.PureComponent),
        k = S.a.create(function (e) {
          return {
            overlay: w(
              w({}, S.a.absoluteFillObject),
              {},
              { backgroundColor: S.a.theme.colors.translucentBlack30, alignItems: 'center', justifyContent: 'center' },
            ),
          }
        })
    },
    uz49: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('ddV6'),
        a = r.n(n),
        l = r('KEM+'),
        o = r.n(l),
        i = (r('2G9S'), r('ERkP')),
        c = r('0W/e'),
        s = r('3rX5'),
        u = r('rHpw'),
        p = r('MWbm')
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
      function m(e) {
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
      var d = { animationStage: 'INITIAL', containerSize: null, imageTransform: null },
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'SET_TRANSFORM':
              if ('INITIAL' === e.animationStage) {
                var r = t.payload,
                  n = r.aspectRatio,
                  a = r.containerHeight,
                  l = r.containerWidth,
                  o = Object(c.a)(n),
                  i = { width: l, height: a },
                  s = {
                    scaleX: o.width / l,
                    scaleY: o.height / a,
                    translateX: -1 * u.a.theme.spacesPx.space12,
                    translateY: -1 * u.a.theme.spacesPx.space12,
                  }
                return m(m({}, e), {}, { animationStage: 'SET_TRANSFORM', containerSize: i, imageTransform: s })
              }
              return e
            case 'START_ANIMATION':
              return 'SET_TRANSFORM' === e.animationStage
                ? m(
                    m({}, e),
                    {},
                    {
                      animationStage: 'START_ANIMATION',
                      imageTransform: { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 },
                    },
                  )
                : e
            case 'FINISH_ANIMATION':
              return m(m({}, e), {}, { animationStage: 'FINISH_ANIMATION' })
            default:
              return e
          }
        }
      var h = {
        imageFill: { width: '100%', height: '100%' },
        imageWrapperBaseStyles: {
          transitionDuration: '250ms',
          transformOrigin: 'bottom right',
          transitionProperty: 'transform',
          transitionTimingFunction: 'ease',
          position: 'absolute',
          bottom: '0',
          right: '0',
        },
      }
      t.a = function (e) {
        var t = e.aspectRatio,
          r = e.imageSrc,
          n = e.onTransitionComplete,
          l = i.useReducer(y, d),
          o = a()(l, 2),
          c = o[0],
          f = o[1],
          b = c.animationStage,
          v = c.containerSize,
          g = c.imageTransform,
          E = i.useCallback(
            function (e) {
              if (null != e) {
                var r = e.getBoundingClientRect(),
                  n = r.height,
                  a = r.width
                requestAnimationFrame(function () {
                  f({ type: 'SET_TRANSFORM', payload: { aspectRatio: t, containerHeight: n, containerWidth: a } })
                })
              }
            },
            [t],
          ),
          S = i.useCallback(function (e) {
            requestAnimationFrame(function () {
              f({ type: 'START_ANIMATION' })
            })
          }, []),
          O = i.useCallback(function () {
            f({ type: 'FINISH_ANIMATION' })
          }, [])
        return (
          i.useEffect(
            function () {
              r || O()
            },
            [r, O],
          ),
          i.useEffect(
            function () {
              'FINISH_ANIMATION' === b && n && n()
            },
            [n, b],
          ),
          i.useEffect(
            function () {
              if ('START_ANIMATION' === b) {
                var e = setTimeout(function () {
                  O()
                }, 300)
                return function () {
                  clearTimeout(e)
                }
              }
            },
            [b, O],
          ),
          i.createElement(
            p.a,
            { ref: E, style: u.a.absoluteFill },
            (function () {
              if (null == v || null == g || !r) return null
              var e = { height: v.height, width: v.width },
                t = g.scaleX,
                n = g.scaleY,
                a = g.translateX,
                l = g.translateY,
                o = { transform: 'matrix('.concat(t, ', 0, 0, ').concat(n, ', ').concat(a, ', ').concat(l, ')') },
                c = m(m(m({}, h.imageWrapperBaseStyles), e), o)
              return i.createElement(
                'div',
                { onTransitionEnd: O, style: c },
                i.createElement(s.a, { ref: S, source: r, style: h.imageFill }),
              )
            })(),
          )
        )
      }
    },
    zCLo: function (e, t, r) {
      'use strict'
      var n = r('KEM+'),
        a = r.n(n),
        l = (r('Blm6'), r('ERkP')),
        o = r('wD1h'),
        i = r('oLZl'),
        c = r('rHpw'),
        s = r('MWbm')
      t.a = function (e) {
        var t,
          r = l.useRef(null),
          n = e.enabled,
          u = e.playerApi,
          p = e.playerState
        if (!n) return e.children || null
        var f = function (e) {
            u && p && (p.isPlaying ? u.pause() : u.play())
          },
          m = function (e) {
            if (u && p) {
              var t = parseInt(e.key, 10) / 10
              u.scrubToFraction(t)
            }
          }
        return l.createElement(
          o.a,
          {
            containerRef: r,
            enabled: !0,
            handlers:
              ((t = {}),
              a()(t, i.a.K, f),
              a()(t, i.a.M, function (e) {
                u && p && (p.isMuted ? u.unmute() : u.mute())
              }),
              a()(t, i.a.Space, f),
              a()(t, i.a.C, function (e) {
                u && p && u.toggleCaptions()
              }),
              a()(t, i.a.Home, function (e) {
                u && p && u.scrubToFraction(0)
              }),
              a()(t, i.a[0], m),
              a()(t, i.a[1], m),
              a()(t, i.a[2], m),
              a()(t, i.a[3], m),
              a()(t, i.a[4], m),
              a()(t, i.a[5], m),
              a()(t, i.a[6], m),
              a()(t, i.a[7], m),
              a()(t, i.a[8], m),
              a()(t, i.a[9], m),
              a()(t, i.a.End, function (e) {
                u && p && u.scrubToFraction(1)
              }),
              t),
          },
          l.createElement(s.a, { focusable: !0, ref: r, style: c.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
