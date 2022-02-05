;(window.webpackJsonp = window.webpackJsonp || []).push([
  [188],
  {
    '0W/e': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('rHpw'),
        r = function (e) {
          return 1 === e
            ? { height: n.a.theme.spacesPx.space48, width: n.a.theme.spacesPx.space48 }
            : { height: n.a.theme.spacesPx.space40, width: e * n.a.theme.spacesPx.space40 }
        }
    },
    PEva: function (e, t, a) {
      'use strict'
      a.r(t)
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        l = a.n(i),
        o = a('1Pcy'),
        c = a.n(o),
        s = a('5Yy7'),
        u = a.n(s),
        p = a('N+ot'),
        f = a.n(p),
        m = a('AuHH'),
        d = a.n(m),
        b = a('KEM+'),
        y = a.n(b),
        h = (a('2G9S'), a('ERkP')),
        v = a.n(h),
        g = a('+xEG'),
        E = a('aoyV'),
        O = a('Zl35'),
        S = a('fZNH'),
        R = a('ub6r'),
        w = a('0nHQ'),
        C = a('USG3'),
        P = a('Q0n6'),
        A = a('5VhU'),
        k = a('hhMf'),
        T = a('Ur4q'),
        L = a('oH2E'),
        x = a('RhWx'),
        _ = a.n(x),
        j = a('t62R'),
        I = a('Wms4'),
        F = a('vCAy'),
        B = a('w05h'),
        D = a('IE/l'),
        N = a('N2PN'),
        M = a('dPHj'),
        W = (a('uFXj'), a('/yvb')),
        H = a('0W/e'),
        V = a('kCRK'),
        z = (a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('Lsrn')),
        K = a('k/Ka')
      function U(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(a), !0).forEach(function (t) {
                y()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : U(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var Y = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(K.a)(
          'svg',
          X(
            X({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [z.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.a.createElement(
            'g',
            null,
            v.a.createElement('path', {
              d: 'M20.5 2h-1c-.828 0-1.5.672-1.5 1.5v6.976L4.87 2.116c-.228-.146-.522-.157-.762-.023-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.113.063.237.093.36.093.142 0 .28-.04.403-.117L18 13.527V20.5c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-17c0-.828-.672-1.5-1.5-1.5z',
            }),
          ),
        )
      }
      Y.metadata = { width: 24, height: 24 }
      var G = Y,
        Z = a('3rX5'),
        q = a('cm6r'),
        J = a('fs1G'),
        Q = a('rHpw'),
        $ = a('shC7'),
        ee = a('MWbm'),
        te = Q.a.create(function (e) {
          var t = e.borderRadii,
            a = e.borderWidths,
            n = e.colors,
            r = e.spaces
          return {
            thumbnail: {
              backgroundColor: n.translucentBlack77,
              borderRadius: t.small,
              display: 'flex',
              flexDirection: $.a.getConstants().isRTL ? 'row-reverse' : 'row',
              overflow: 'hidden',
              opacity: 1,
            },
            thumbnailFocused: { boxShadow: '0 0 0 '.concat(a.medium, ' ').concat(n.white), outlineStyle: 'none' },
            countdownTime: {
              paddingHorizontal: r.space4,
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
        ae = function (e) {
          var t = e.onClick,
            a = v.a.useContext(O.b.PeriodicContext),
            n = a.aspectRatio,
            r = a.playerState
          if (!r) return null
          var i = Object(P.e)(r)
          if (!i || i.displayType !== V.c.AD) return null
          var l = i.durationMs,
            o = l < 7e3,
            c = (o ? l : 5e3) - (i.currentTimeMs || 0),
            s = c > 250,
            u = c < 0,
            p = Object(P.d)(i) || 0,
            f = Object(P.f)(i) || 0,
            m = (o ? f : 5) - p,
            d = Object(B.m)({ seconds: Object(B.q)(m) })
          return v.a.createElement(
            q.a,
            {
              accessibilityLabel: u ? B.l : d,
              accessibilityRole: 'button',
              focusable: !0,
              interactive: !0,
              interactiveStyles: null,
              onClick: u && t ? t : J.a,
              testID: 'ControlBar-containerView',
            },
            function (e) {
              var t = $.a.getConstants().isRTL
              return v.a.createElement(
                v.a.Fragment,
                null,
                !u &&
                  v.a.createElement(
                    C.a,
                    { show: s },
                    v.a.createElement(
                      ee.a,
                      {
                        style: [te.thumbnail, e.isFocused && te.thumbnailFocused],
                        testID: 'ControlBar-videoThumbnail',
                      },
                      v.a.createElement(j.b, { color: 'white', size: 'subtext2', style: te.countdownTime }, m),
                      v.a.createElement(Z.a, { source: r.posterImage, style: Object(H.a)(n) }),
                    ),
                  ),
                v.a.createElement(
                  C.a,
                  { show: u },
                  v.a.createElement(
                    W.a,
                    {
                      focusable: !1,
                      interactivityState: e,
                      pointerEvents: 'auto',
                      size: 'small',
                      testID: 'ControlBar-skipButton',
                      type: 'onMediaDominantColorFilled',
                    },
                    v.a.createElement(
                      j.b,
                      { dir: 'ltr', weight: 'normal' },
                      B.k,
                      v.a.createElement(G, { style: t ? te.iconMarginRtl : te.iconMargin }),
                    ),
                  ),
                ),
              )
            },
          )
        },
        ne = a('aITJ'),
        re = a('kRXa'),
        ie = a('wtsM'),
        le = a('5Ixf'),
        oe = a('AtEG'),
        ce = a('NnQ9'),
        se = a('p6DB')
      function ue(e) {
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
          var a,
            n = d()(e)
          if (t) {
            var r = d()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var pe = 'PrerollControlBar-',
        fe = { CAPTIONS: ''.concat(pe, 'Captions'), FULLSCREEN: ''.concat(pe, 'Fullscreen') },
        me = (function (e) {
          u()(a, e)
          var t = ue(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_parentRef', v.a.createRef()),
              y()(c()(e), '_renderRightContent', function (t) {
                var a = e.props,
                  n = a.playerApi,
                  r = a.playerState
                if (!n || !r) return null
                var i = ne.b.isIOS()
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  e._renderTimePlayed(),
                  e._renderVolumeControls(n, r),
                  !i &&
                    v.a.createElement(
                      t,
                      { focus: !0, interactionKey: fe.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                      e._renderFullScreenButton(n, r),
                    ),
                )
              }),
              y()(c()(e), '_renderActionButton', function (e, t) {
                var a = t.controls,
                  n = t.isPlaying,
                  r = e.pause,
                  i = e.play,
                  l = Object(P.e)(t)
                return !l || l.isLive
                  ? null
                  : n || (a && 'PLAY_REQUESTED' === a.playState)
                  ? v.a.createElement(N.b, {
                      accessibilityLabel: ie.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: v.a.createElement(le.a, null),
                      onPress: r,
                    })
                  : v.a.createElement(N.b, {
                      accessibilityLabel: ie.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: v.a.createElement(oe.a, null),
                      onPress: i,
                    })
              }),
              y()(c()(e), '_renderAdText', function () {
                return v.a.createElement(M.a, null, B.o)
              }),
              y()(c()(e), '_renderTimePlayed', function () {
                return v.a.createElement(O.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    a = Object(P.e)(t),
                    n = Object(P.d)(a),
                    r = Object(P.f)(a)
                  return a && 'number' == typeof n && r && !a.isLive
                    ? v.a.createElement(M.a, null, ''.concat(Object(P.b)(n), ' / ').concat(Object(P.b)(r)))
                    : null
                })
              }),
              y()(c()(e), '_renderVolumeControls', function (t, a) {
                var n = a.isMuted,
                  r = a.volume,
                  i = t.mute,
                  l = t.setVolume,
                  o = t.unmute,
                  c = n ? o : i,
                  s = n ? ie.g : ie.c
                return v.a.createElement(re.a, {
                  accessibilityLabelIcon: s,
                  accessibilityLabelSlider: ie.h,
                  isMuted: n,
                  onMuteToggle: c,
                  onSliderChange: e._setVolumePercent(l),
                  volumePercent: 100 * r,
                })
              }),
              y()(c()(e), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              y()(c()(e), '_renderFullScreenButton', function (t, a) {
                var n = a.fullscreen
                return n.isFullscreen
                  ? v.a.createElement(N.b, {
                      accessibilityLabel: ie.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: v.a.createElement(be, { isFullscreen: n.isFullscreen }),
                      onPress: e._exitFullScreen(t),
                    })
                  : v.a.createElement(N.b, {
                      accessibilityLabel: ie.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: v.a.createElement(be, { isFullscreen: n.isFullscreen }),
                      onPress: e._requestFullScreen(t),
                    })
              }),
              y()(c()(e), '_requestFullScreen', function (t) {
                return function () {
                  t.fullScreen(e.props.containerRef)
                }
              }),
              y()(c()(e), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              y()(c()(e), '_renderSkipAffordance', function () {
                return v.a.createElement(
                  ee.a,
                  { pointerEvents: 'none', style: de.skipAffordance },
                  v.a.createElement(ae, null),
                )
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.displayDismissableControls,
                    n = t.playerApi,
                    r = t.playerState,
                    i = t.skipButton
                  return n && r
                    ? v.a.createElement(k.a.ObserverContext.Consumer, null, function (t) {
                        return v.a.createElement(
                          ee.a,
                          { ref: e._parentRef, style: de.root },
                          v.a.createElement(D.a, {
                            actionButton: e._renderActionButton(n, r),
                            displayDismissableControls: a,
                            leftContent: e._renderAdText(),
                            rightContent: e._renderRightContent(t),
                            skipButton: i,
                          }),
                        )
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        de = Q.a.create(function (e) {
          return {
            root: { writingDirection: 'ltr', cursor: 'auto', width: '100%' },
            skipAffordance: { marginLeft: e.spaces.space12, visibility: 'hidden' },
          }
        })
      function be(e) {
        var t = e.isFullscreen,
          a = (e.style, ye.hidden),
          n = ye.shown
        return v.a.createElement(
          v.a.Fragment,
          null,
          v.a.createElement(ce.a, { style: t ? a : n }),
          v.a.createElement(se.a, { style: t ? n : a }),
        )
      }
      var ye = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } },
        he = me,
        ve = a('jhWN')
      function ge(e) {
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
          var a,
            n = d()(e)
          if (t) {
            var r = d()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var Ee = (function (e) {
          u()(a, e)
          var t = ge(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_buildMessage', function (e, t) {
                switch (e) {
                  case V.d.watch_now:
                    return t ? Object(B.e)({ advertiserName: t }) : B.j
                  case V.d.shop:
                    return t ? Object(B.c)({ advertiserName: t }) : B.h
                  case V.d.see_more:
                    return t ? Object(B.b)({ advertiserName: t }) : B.g
                  case V.d.go_to:
                    return t ? Object(B.a)({ advertiserName: t }) : B.f
                  case V.d.visit_site:
                  default:
                    return t ? Object(B.d)({ advertiserName: t }) : B.i
                }
              }),
              y()(c()(e), '_handlePress', function (e) {
                return function () {
                  e.callToActionClicked()
                }
              }),
              e
            )
          }
          return (
            l()(a, [
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
                    a = e.avatarUri,
                    n = e.ctaType,
                    r = e.ctaUrl,
                    i = e.playerApi
                  if (!i) return null
                  var l = this._buildMessage(n, t)
                  return v.a.createElement(
                    W.a,
                    {
                      accessibilityLabel: l,
                      icon: a
                        ? v.a.createElement(ve.a, {
                            borderColor: 'white',
                            borderWidth: 'small',
                            size: 'medium',
                            uri: a,
                          })
                        : void 0,
                      link: r,
                      onPress: this._handlePress(i),
                      size: 'xSmall',
                      style: Oe.root,
                      type: 'onMediaDominantColorFilled',
                    },
                    l,
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent),
        Oe = Q.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        }),
        Se = Ee,
        Re = (a('z84I'), a('aNKf')),
        we = Q.a.create(function (e) {
          return {
            root: { position: 'absolute', top: 0, left: 0, width: '100%' },
            gradientContainer: { padding: e.spaces.space16 },
            flexRow: { alignItems: 'center', flexDirection: 'row' },
            rightSpacing: { marginRight: e.spaces.space4 },
          }
        }),
        Ce = function (e) {
          var t = e.children
          return v.a.createElement(
            ee.a,
            { style: we.root },
            v.a.createElement(
              Re.a,
              {
                colors: [Q.a.theme.colors.translucentBlack77, Q.a.theme.colors.transparent],
                style: we.gradientContainer,
              },
              v.a.createElement(
                ee.a,
                { style: we.flexRow },
                v.a.Children.toArray(t).map(function (e, t, a) {
                  var n = a.length,
                    r = 'LinearGradient-children-'.concat(t),
                    i = t < n - 1 ? we.rightSpacing : ''
                  return v.a.createElement(ee.a, { key: r, style: i }, e)
                }),
              ),
            ),
          )
        },
        Pe = a('VLhD')
      function Ae(e) {
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
          var a,
            n = d()(e)
          if (t) {
            var r = d()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var ke = (function (e) {
          u()(a, e)
          var t = Ae(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), 'state', { showControlBar: !1, stackedLabels: !1 }),
              y()(c()(e), '_durationLabelRef', v.a.createRef()),
              y()(c()(e), '_descriptionLabelRef', v.a.createRef()),
              y()(c()(e), '_handleLayout', function () {
                var t,
                  a,
                  n = null === (t = e._durationLabelRef) || void 0 === t ? void 0 : t.current,
                  r = null === (a = e._descriptionLabelRef) || void 0 === a ? void 0 : a.current
                n &&
                  r &&
                  n.measure(function (t, a) {
                    r.measure(function (t, n) {
                      a !== n ? e.setState({ stackedLabels: !0 }) : e.setState({ stackedLabels: !1 })
                    })
                  })
              }),
              y()(c()(e), '_renderPrerollControlBar', function (t) {
                var a = e.props,
                  n = a.containerRef,
                  r = a.onSkip,
                  i = a.playerApi,
                  l = a.playerState
                if (!i || !l) return null
                var o = t.Observer,
                  c = t.observed,
                  s = Object(Pe.c)(l, c, Pe.b),
                  u = l.fullscreen.isFullscreen,
                  p = $.a.getConstants().isRTL,
                  f = [Te.labelOuterContainerBase, p ? Te.labelOuterContainerRtl : Te.labelOuterContainerLtr]
                return v.a.createElement(
                  ee.a,
                  { style: Te.bottomContentContainer },
                  v.a.createElement(
                    ee.a,
                    { style: Te.bottomContentRow },
                    v.a.createElement(
                      ee.a,
                      { style: [Te.forceFullWidth, Te.flexDirectionRow] },
                      v.a.createElement(
                        o,
                        { focus: !0, interactionKey: Pe.a.A11YHook },
                        v.a.createElement(ee.a, { focusable: !0 }),
                      ),
                      v.a.createElement(
                        ee.a,
                        { style: Te.flexExpand },
                        v.a.createElement(
                          ee.a,
                          { style: f },
                          v.a.createElement(
                            C.a,
                            { show: s },
                            v.a.createElement(
                              ee.a,
                              { style: [Te.bottomContentRow, Te.rowBottomSpace] },
                              e._renderLabels(),
                            ),
                          ),
                        ),
                        u
                          ? null
                          : v.a.createElement(
                              ee.a,
                              { style: Te.bottomContentRow },
                              v.a.createElement(
                                ee.a,
                                {
                                  style: [Te.skipThumbnail, p ? Te.skipThumbnailAbsoluteRtl : Te.skipThumbnailAbsolute],
                                  testID: Le.floatSkipThumbnail,
                                },
                                v.a.createElement(ae, { onClick: r }),
                              ),
                            ),
                        v.a.createElement(
                          o,
                          { focus: !0, interactionKey: Pe.a.ControlBar, mouseover: !0, touch: !0 },
                          v.a.createElement(he, {
                            containerRef: n,
                            displayDismissableControls: !s,
                            playerApi: i,
                            playerState: l,
                            skipButton: u
                              ? v.a.createElement(
                                  ee.a,
                                  {
                                    style: [
                                      Te.skipThumbnail,
                                      p ? Te.skipThumbnailRelativeRtl : Te.skipThumbnailRelative,
                                    ],
                                    testID: Le.inlineSkipThumbnail,
                                  },
                                  v.a.createElement(ae, { onClick: r }),
                                )
                              : null,
                          }),
                        ),
                      ),
                    ),
                  ),
                )
              }),
              y()(c()(e), '_renderWithIntentionContext', function (t) {
                var a = e.props,
                  n = a.playerApi,
                  r = a.playerState
                if (!n || !r) return null
                var i = Object(P.e)(r),
                  l = null == i ? void 0 : i.advertiserProfileImageUrl,
                  o = null == i ? void 0 : i.advertiserName,
                  c = null == i ? void 0 : i.cta
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  c
                    ? v.a.createElement(Se, {
                        advertiserName: o,
                        avatarUri: l,
                        ctaType: c.type,
                        ctaUrl: c.url,
                        playerApi: n,
                      })
                    : v.a.createElement(
                        Ce,
                        null,
                        l &&
                          v.a.createElement(ve.a, {
                            accessibilityHidden: !0,
                            borderColor: 'white',
                            borderWidth: 'small',
                            focusable: !1,
                            size: 'medium',
                            uri: l,
                          }),
                        o && v.a.createElement(j.b, { color: 'white', weight: 'bold' }, o),
                      ),
                  e._renderPrerollControlBar(t),
                )
              }),
              y()(c()(e), '_renderLabels', function () {
                return v.a.createElement(O.a, { periodic: !0 }, function (t) {
                  var a = t.playerState,
                    n = Object(P.e)(a),
                    r = Object(P.f)(n),
                    i = Object(P.d)(n) || 0,
                    l = r ? r - i : null,
                    o = $.a.getConstants().isRTL,
                    c = [Te.labelContainerBase, o ? Te.labelContainerRtl : Te.labelContainerLtr],
                    s = [F.b.borderRadiusLeft, e.state.stackedLabels && F.b.borderRadiusRight],
                    u = [F.b.borderRadiusRight, e.state.stackedLabels && F.b.borderRadiusLeft],
                    p =
                      n && 'number' == typeof l && !n.isLive
                        ? v.a.createElement(
                            ee.a,
                            { ref: e._durationLabelRef },
                            v.a.createElement(
                              I.a,
                              {
                                key: 'PrerollVideoOverlay-DurationLabel',
                                style: [
                                  F.b.label,
                                  o ? Te.labelSpaceLeft : F.b.spaceRight,
                                  e.state.stackedLabels && Te.labelBottomSpace,
                                ].concat(_()(o ? u : s)),
                              },
                              v.a.createElement(j.b, { numberOfLines: 1 }, Object(P.b)(l)),
                            ),
                          )
                        : null,
                    f = v.a.createElement(
                      ee.a,
                      { ref: e._descriptionLabelRef },
                      v.a.createElement(
                        I.a,
                        {
                          key: 'PrerollVideoOverlay-DescriptionLabel',
                          style: [F.b.label, o ? Te.labelSpaceLeft : F.b.spaceRight].concat(_()(o ? s : u)),
                        },
                        v.a.createElement(j.b, { numberOfLines: 1 }, B.o),
                      ),
                    )
                  return v.a.createElement(ee.a, { onLayout: e._handleLayout, pointerEvents: 'none', style: c }, p, f)
                })
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    a = e.playerState
                  return t && a ? v.a.createElement(k.a.Context.Consumer, null, this._renderWithIntentionContext) : null
                },
              },
            ]),
            a
          )
        })(v.a.Component),
        Te = Q.a.create(function (e) {
          return {
            bottomContentContainer: { flexWrap: 'wrap', position: 'absolute', bottom: 0, width: '100%' },
            bottomContentRow: {
              alignItems: 'flex-end',
              flexWrap: 'nowrap',
              flexDirection: $.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
            flexDirectionRow: { flexDirection: $.a.getConstants().isRTL ? 'row-reverse' : 'row' },
            flexWrap: { flexWrap: 'wrap', justifyContent: 'space-between' },
            hidden: { visibility: 'hidden' },
          }
        }),
        Le = { floatSkipThumbnail: 'float-SkipThumbnail', inlineSkipThumbnail: 'inline-SkipThumbnail' },
        xe = ke,
        _e = a('uz49'),
        je = a('mNIZ'),
        Ie = a('zCLo'),
        Fe = a('ReFq')
      function Be(e) {
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
          var a,
            n = d()(e)
          if (t) {
            var r = d()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var De = (function (e) {
        u()(a, e)
        var t = Be(a)
        function a() {
          var e
          r()(this, a)
          for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            y()(c()(e), 'state', { wasPrerollSkipped: !1 }),
            y()(c()(e), '_renderVideoPlayer', function (t) {
              var a,
                n = e.props,
                r = n.playerApi,
                i = n.playerState,
                l = n.poster,
                o = n.useKeyboardShortcuts
              if (!r || !i) return null
              var c = Object(P.e)(i),
                s = (null == c ? void 0 : c.displayType) === V.c.AD && (null == c ? void 0 : c.playbackCompleted),
                u = null === (a = i.errorInfo) || void 0 === a ? void 0 : a.adFailed,
                p = (null == c ? void 0 : c.displayType) === V.c.AD && (null == c ? void 0 : c.useRedesignedPrerollUx)
              return p && (e.state.wasPrerollSkipped || s || u)
                ? v.a.createElement(O.a, null, function (t) {
                    var a = t.aspectRatio,
                      n = l || i.posterImage
                    return v.a.createElement(_e.a, {
                      aspectRatio: a,
                      imageSrc: n,
                      onTransitionComplete: e._handleTransitionAnimationComplete,
                    })
                  })
                : p
                ? e._renderVideo(t, !0)
                : v.a.createElement(
                    Ie.a,
                    { enabled: !!o, playerApi: r, playerState: i },
                    v.a.createElement(S.a, { playerState: i }, e._renderVideo(t, !1)),
                  )
            }),
            y()(c()(e), '_renderVideo', function (t, a) {
              var n,
                r,
                i = e.props,
                l = i.accessibilityLabel,
                o = i.containerRef,
                c = i.customControlBarIcon,
                s = i.fullscreenAdsDisabledOnIOS,
                u = i.guestsState,
                p = i.onScribeEvent,
                f = i.playerApi,
                m = i.playerDisplayOptions,
                d = i.playerState,
                b = i.poster,
                y = i.shouldShowAltLabel,
                h = i.showWatchAgain
              if (!f || !d) return null
              var O = t.Observer,
                S = t.observed,
                k = Object(Pe.c)(d, S, Pe.b),
                x = !!d.error,
                _ = Object(P.e)(d),
                j = (null == _ ? void 0 : _.contentType) === V.a.GIF,
                I = 'PLAY_REQUESTED' !== (null === (n = d.controls) || void 0 === n ? void 0 : n.playState),
                F = h && d.tracksFinished,
                B = k && d.isPreview,
                D = !(!k || null == _ || !_.isLive),
                N = y ? l : void 0,
                M = !(null != m && m.hideLeftBadges) && (!!N || j || B || D),
                W = !(null != m && m.hideRightBadges) && k,
                H = !(null != m && m.hidePosterImage),
                z = null === (r = d.controls) || void 0 === r ? void 0 : r.isPosterShown
              return v.a.createElement(
                O,
                { click: !0, interactionKey: Pe.a.Root, mousemove: !0, mouseover: !0 },
                x
                  ? null
                  : v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(T.a, {
                        hideControls: k,
                        isTouchOnlyUI: Pe.b,
                        playerApi: f,
                        playerDisplayOptions: m,
                        playerState: d,
                      }),
                      H &&
                        !F &&
                        v.a.createElement(L.a, { imageSrc: b, playerApi: f, playerState: d, withPlayButton: I }),
                      v.a.createElement(E.a, { playerState: d }),
                      a
                        ? v.a.createElement(xe, {
                            containerRef: o,
                            onSkip: e._handleSkip,
                            playerApi: f,
                            playerState: d,
                          })
                        : v.a.createElement(
                            v.a.Fragment,
                            null,
                            !j && h && v.a.createElement(Fe.a, { onScribeEvent: p, playerApi: f, playerState: d }),
                            v.a.createElement(A.a, { guestsState: u, playerState: d }),
                            !j &&
                              v.a.createElement(
                                O,
                                { focus: !0, interactionKey: Pe.a.VideoCTA, mouseover: !0 },
                                v.a.createElement(
                                  C.a,
                                  { show: !k },
                                  v.a.createElement(je.a, { playerApi: f, playerState: d }),
                                ),
                              ),
                            !j &&
                              !z &&
                              v.a.createElement(
                                v.a.Fragment,
                                null,
                                v.a.createElement(
                                  O,
                                  { focus: !0, interactionKey: Pe.a.A11YHook },
                                  v.a.createElement(ee.a, { focusable: !0 }),
                                ),
                                v.a.createElement(
                                  O,
                                  { focus: !0, interactionKey: Pe.a.ControlBar, mouseover: !0, touch: !0 },
                                  v.a.createElement(R.a, {
                                    containerRef: o,
                                    customControlBarIcon: c,
                                    fullscreenAdsDisabledOnIOS: s,
                                    hideControls: k,
                                    playerApi: f,
                                    playerState: d,
                                    publisherDisplayName: null == _ ? void 0 : _.publisherDisplayName,
                                    publisherProfileImageUrl: null == _ ? void 0 : _.publisherProfileImageUrl,
                                    showScrubber:
                                      'ad' !== (null == _ ? void 0 : _.displayType) && !(null != _ && _.isLive),
                                  }),
                                ),
                              ),
                            v.a.createElement(
                              C.a,
                              { show: M },
                              v.a.createElement(g.a, {
                                mediaAccessibilityLabel: N,
                                playerDisplayOptions: m,
                                playerState: d,
                                position: 'left',
                              }),
                            ),
                            v.a.createElement(
                              C.a,
                              { show: W },
                              v.a.createElement(g.a, { playerDisplayOptions: m, playerState: d, position: 'right' }),
                            ),
                          ),
                    ),
                v.a.createElement(
                  C.a,
                  { show: x },
                  x && v.a.createElement(w.a, { imageSrc: b, playerApi: f, playerState: d }),
                ),
              )
            }),
            y()(c()(e), '_handleSkip', function () {
              var t = e.props.playerApi
              t && t.pause(), e.setState({ wasPrerollSkipped: !0 })
            }),
            y()(c()(e), '_handleTransitionAnimationComplete', function () {
              var t = e.props.playerApi
              t && t.nextTrack()
            }),
            e
          )
        }
        return (
          l()(a, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  a = e.playerState
                return t && a
                  ? v.a.createElement(k.a, null, v.a.createElement(k.a.Context.Consumer, null, this._renderVideoPlayer))
                  : null
              },
            },
          ]),
          a
        )
      })(v.a.PureComponent)
      t.default = De
    },
    ReFq: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return k
      })
      a('OZaJ'), a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        l = a.n(i),
        o = a('1Pcy'),
        c = a.n(o),
        s = a('5Yy7'),
        u = a.n(s),
        p = a('N+ot'),
        f = a.n(p),
        m = a('AuHH'),
        d = a.n(m),
        b = a('KEM+'),
        y = a.n(b),
        h = (a('2G9S'), a('ERkP')),
        v = a.n(h),
        g = a('/yvb'),
        E = a('3XMw'),
        O = a.n(E),
        S = a('rHpw'),
        R = a('MWbm')
      function w(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(a), !0).forEach(function (t) {
                y()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : w(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      function P(e) {
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
          var a,
            n = d()(e)
          if (t) {
            var r = d()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var A = O.a.f2d4e6f1,
        k = (function (e) {
          u()(a, e)
          var t = P(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_createWatchAgainHandler', function (t) {
                return function (a) {
                  var n = e.props,
                    r = n.onScribeEvent,
                    i = n.playerApi
                  a.stopPropagation(), r && r({ namespace: { element: t, action: 'click' } }), i && i.replay()
                }
              }),
              y()(c()(e), '_handleOnPress', e._createWatchAgainHandler('watch_again_button')),
              y()(c()(e), '_handleOnClick', e._createWatchAgainHandler('watch_again_overlay')),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState
                  return e && e.tracksFinished
                    ? v.a.createElement(
                        R.a,
                        { onClick: this._handleOnClick, style: T.overlay },
                        v.a.createElement(
                          g.a,
                          { accessibilityLabel: A, onPress: this._handleOnPress, type: 'onMediaDominantColorFilled' },
                          A,
                        ),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent),
        T = S.a.create(function (e) {
          return {
            overlay: C(
              C({}, S.a.absoluteFillObject),
              {},
              { backgroundColor: S.a.theme.colors.translucentBlack30, alignItems: 'center', justifyContent: 'center' },
            ),
          }
        })
    },
    uz49: function (e, t, a) {
      'use strict'
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('ddV6'),
        r = a.n(n),
        i = a('KEM+'),
        l = a.n(i),
        o = (a('2G9S'), a('ERkP')),
        c = a.n(o),
        s = a('0W/e'),
        u = a('3rX5'),
        p = a('rHpw'),
        f = a('MWbm')
      function m(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(a), !0).forEach(function (t) {
                l()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : m(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var b = { animationStage: 'INITIAL', containerSize: null, imageTransform: null },
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'SET_TRANSFORM':
              if ('INITIAL' === e.animationStage) {
                var a = t.payload,
                  n = a.aspectRatio,
                  r = a.containerHeight,
                  i = a.containerWidth,
                  l = Object(s.a)(n),
                  o = { width: i, height: r },
                  c = {
                    scaleX: l.width / i,
                    scaleY: l.height / r,
                    translateX: -1 * p.a.theme.spacesPx.space12,
                    translateY: -1 * p.a.theme.spacesPx.space12,
                  }
                return d(d({}, e), {}, { animationStage: 'SET_TRANSFORM', containerSize: o, imageTransform: c })
              }
              return e
            case 'START_ANIMATION':
              return 'SET_TRANSFORM' === e.animationStage
                ? d(
                    d({}, e),
                    {},
                    {
                      animationStage: 'START_ANIMATION',
                      imageTransform: { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 },
                    },
                  )
                : e
            case 'FINISH_ANIMATION':
              return d(d({}, e), {}, { animationStage: 'FINISH_ANIMATION' })
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
          a = e.imageSrc,
          n = e.onTransitionComplete,
          i = c.a.useReducer(y, b),
          l = r()(i, 2),
          o = l[0],
          s = l[1],
          m = o.animationStage,
          v = o.containerSize,
          g = o.imageTransform,
          E = c.a.useCallback(
            function (e) {
              if (null != e) {
                var a = e.getBoundingClientRect(),
                  n = a.height,
                  r = a.width
                requestAnimationFrame(function () {
                  s({ type: 'SET_TRANSFORM', payload: { aspectRatio: t, containerHeight: n, containerWidth: r } })
                })
              }
            },
            [t],
          ),
          O = c.a.useCallback(function (e) {
            requestAnimationFrame(function () {
              s({ type: 'START_ANIMATION' })
            })
          }, []),
          S = c.a.useCallback(function () {
            s({ type: 'FINISH_ANIMATION' })
          }, [])
        return (
          c.a.useEffect(
            function () {
              a || S()
            },
            [a, S],
          ),
          c.a.useEffect(
            function () {
              'FINISH_ANIMATION' === m && n && n()
            },
            [n, m],
          ),
          c.a.useEffect(
            function () {
              if ('START_ANIMATION' === m) {
                var e = setTimeout(function () {
                  S()
                }, 300)
                return function () {
                  clearTimeout(e)
                }
              }
            },
            [m, S],
          ),
          c.a.createElement(
            f.a,
            { ref: E, style: p.a.absoluteFill },
            (function () {
              if (null == v || null == g || !a) return null
              var e = { height: v.height, width: v.width },
                t = g.scaleX,
                n = g.scaleY,
                r = g.translateX,
                i = g.translateY,
                l = { transform: 'matrix('.concat(t, ', 0, 0, ').concat(n, ', ').concat(r, ', ').concat(i, ')') },
                o = d(d(d({}, h.imageWrapperBaseStyles), e), l)
              return c.a.createElement(
                'div',
                { onTransitionEnd: S, style: o },
                c.a.createElement(u.a, { ref: O, source: a, style: h.imageFill }),
              )
            })(),
          )
        )
      }
    },
    zCLo: function (e, t, a) {
      'use strict'
      var n = a('KEM+'),
        r = a.n(n),
        i = (a('Blm6'), a('ERkP')),
        l = a.n(i),
        o = a('wD1h'),
        c = a('oLZl'),
        s = a('rHpw'),
        u = a('MWbm')
      t.a = function (e) {
        var t,
          a = l.a.useRef(null),
          n = e.enabled,
          i = e.playerApi,
          p = e.playerState
        if (!n) return e.children || null
        var f = function (e) {
            i && p && (p.isPlaying ? i.pause() : i.play())
          },
          m = function (e) {
            if (i && p) {
              var t = parseInt(e.key, 10) / 10
              i.scrubToFraction(t)
            }
          }
        return l.a.createElement(
          o.a,
          {
            containerRef: a,
            enabled: !0,
            handlers:
              ((t = {}),
              r()(t, c.a.K, f),
              r()(t, c.a.M, function (e) {
                i && p && (p.isMuted ? i.unmute() : i.mute())
              }),
              r()(t, c.a.Space, f),
              r()(t, c.a.C, function (e) {
                i && p && i.toggleCaptions()
              }),
              r()(t, c.a.Home, function (e) {
                i && p && i.scrubToFraction(0)
              }),
              r()(t, c.a[0], m),
              r()(t, c.a[1], m),
              r()(t, c.a[2], m),
              r()(t, c.a[3], m),
              r()(t, c.a[4], m),
              r()(t, c.a[5], m),
              r()(t, c.a[6], m),
              r()(t, c.a[7], m),
              r()(t, c.a[8], m),
              r()(t, c.a[9], m),
              r()(t, c.a.End, function (e) {
                i && p && i.scrubToFraction(1)
              }),
              t),
          },
          l.a.createElement(u.a, { focusable: !0, ref: a, style: s.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
