;(window.webpackJsonp = window.webpackJsonp || []).push([
  [185],
  {
    '0W/e': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('rHpw'),
        a = function (e) {
          return 1 === e
            ? { height: r.a.theme.spacesPx.space48, width: r.a.theme.spacesPx.space48 }
            : { height: r.a.theme.spacesPx.space40, width: e * r.a.theme.spacesPx.space40 }
        }
    },
    PEva: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        p = n('N+ot'),
        f = n.n(p),
        m = n('AuHH'),
        d = n.n(m),
        b = n('KEM+'),
        y = n.n(b),
        h = (n('2G9S'), n('ERkP')),
        v = n('+xEG'),
        g = n('aoyV'),
        E = n('Zl35'),
        O = n('fZNH'),
        S = n('ub6r'),
        R = n('0nHQ'),
        w = n('USG3'),
        C = n('Q0n6'),
        P = n('5VhU'),
        A = n('hhMf'),
        k = n('Ur4q'),
        T = n('oH2E'),
        L = n('RhWx'),
        x = n.n(L),
        _ = n('t62R'),
        j = n('Wms4'),
        I = n('vCAy'),
        F = n('w05h'),
        B = n('IE/l'),
        D = n('N2PN'),
        N = n('dPHj'),
        M = (n('uFXj'), n('/yvb')),
        W = n('0W/e'),
        H = n('kCRK'),
        V = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('Lsrn')),
        z = n('k/Ka')
      function K(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var X = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(z.a)(
          'svg',
          U(
            U({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [V.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          h.createElement(
            'g',
            null,
            h.createElement('path', {
              d: 'M20.5 2h-1c-.828 0-1.5.672-1.5 1.5v6.976L4.87 2.116c-.228-.146-.522-.157-.762-.023-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.113.063.237.093.36.093.142 0 .28-.04.403-.117L18 13.527V20.5c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-17c0-.828-.672-1.5-1.5-1.5z',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var Y = X,
        G = n('3rX5'),
        Z = n('cm6r'),
        q = n('fs1G'),
        J = n('rHpw'),
        Q = n('shC7'),
        $ = n('MWbm'),
        ee = J.a.create(function (e) {
          var t = e.borderRadii,
            n = e.borderWidths,
            r = e.colors,
            a = e.spaces
          return {
            thumbnail: {
              backgroundColor: r.translucentBlack77,
              borderRadius: t.small,
              display: 'flex',
              flexDirection: Q.a.getConstants().isRTL ? 'row-reverse' : 'row',
              overflow: 'hidden',
              opacity: 1,
            },
            thumbnailFocused: { boxShadow: '0 0 0 '.concat(n.medium, ' ').concat(r.white), outlineStyle: 'none' },
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
        te = function (e) {
          var t = e.onClick,
            n = h.useContext(E.b.PeriodicContext),
            r = n.aspectRatio,
            a = n.playerState
          if (!a) return null
          var i = Object(C.e)(a)
          if (!i || i.displayType !== H.c.AD) return null
          var l = i.durationMs,
            o = l < 7e3,
            c = (o ? l : 5e3) - (i.currentTimeMs || 0),
            s = c > 250,
            u = c < 0,
            p = Object(C.d)(i) || 0,
            f = Object(C.f)(i) || 0,
            m = (o ? f : 5) - p,
            d = Object(F.m)({ seconds: Object(F.q)(m) })
          return h.createElement(
            Z.a,
            {
              accessibilityLabel: u ? F.l : d,
              accessibilityRole: 'button',
              focusable: !0,
              interactive: !0,
              interactiveStyles: null,
              onClick: u && t ? t : q.a,
              testID: 'ControlBar-containerView',
            },
            function (e) {
              var t = Q.a.getConstants().isRTL
              return h.createElement(
                h.Fragment,
                null,
                !u &&
                  h.createElement(
                    w.a,
                    { show: s },
                    h.createElement(
                      $.a,
                      {
                        style: [ee.thumbnail, e.isFocused && ee.thumbnailFocused],
                        testID: 'ControlBar-videoThumbnail',
                      },
                      h.createElement(_.b, { color: 'white', size: 'subtext2', style: ee.countdownTime }, m),
                      h.createElement(G.a, { source: a.posterImage, style: Object(W.a)(r) }),
                    ),
                  ),
                h.createElement(
                  w.a,
                  { show: u },
                  h.createElement(
                    M.a,
                    {
                      focusable: !1,
                      interactivityState: e,
                      pointerEvents: 'auto',
                      size: 'small',
                      testID: 'ControlBar-skipButton',
                      type: 'onMediaDominantColorFilled',
                    },
                    h.createElement(
                      _.b,
                      { dir: 'ltr', weight: 'normal' },
                      F.k,
                      h.createElement(Y, { style: t ? ee.iconMarginRtl : ee.iconMargin }),
                    ),
                  ),
                ),
              )
            },
          )
        },
        ne = n('aITJ'),
        re = n('kRXa'),
        ae = n('wtsM'),
        ie = n('5Ixf'),
        le = n('AtEG'),
        oe = n('NnQ9'),
        ce = n('p6DB')
      function se(e) {
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
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ue = 'PrerollControlBar-',
        pe = { CAPTIONS: ''.concat(ue, 'Captions'), FULLSCREEN: ''.concat(ue, 'Fullscreen') },
        fe = (function (e) {
          u()(n, e)
          var t = se(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_parentRef', h.createRef()),
              y()(c()(e), '_renderRightContent', function (t) {
                var n = e.props,
                  r = n.playerApi,
                  a = n.playerState
                if (!r || !a) return null
                var i = ne.b.isIOS()
                return h.createElement(
                  h.Fragment,
                  null,
                  e._renderTimePlayed(),
                  e._renderVolumeControls(r, a),
                  !i &&
                    h.createElement(
                      t,
                      { focus: !0, interactionKey: pe.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                      e._renderFullScreenButton(r, a),
                    ),
                )
              }),
              y()(c()(e), '_renderActionButton', function (e, t) {
                var n = t.controls,
                  r = t.isPlaying,
                  a = e.pause,
                  i = e.play,
                  l = Object(C.e)(t)
                return !l || l.isLive
                  ? null
                  : r || (n && 'PLAY_REQUESTED' === n.playState)
                  ? h.createElement(D.b, {
                      accessibilityLabel: ae.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: h.createElement(ie.a, null),
                      onPress: a,
                    })
                  : h.createElement(D.b, {
                      accessibilityLabel: ae.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: h.createElement(le.a, null),
                      onPress: i,
                    })
              }),
              y()(c()(e), '_renderAdText', function () {
                return h.createElement(N.a, null, F.o)
              }),
              y()(c()(e), '_renderTimePlayed', function () {
                return h.createElement(E.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    n = Object(C.e)(t),
                    r = Object(C.d)(n),
                    a = Object(C.f)(n)
                  return n && 'number' == typeof r && a && !n.isLive
                    ? h.createElement(N.a, null, ''.concat(Object(C.b)(r), ' / ').concat(Object(C.b)(a)))
                    : null
                })
              }),
              y()(c()(e), '_renderVolumeControls', function (t, n) {
                var r = n.isMuted,
                  a = n.volume,
                  i = t.mute,
                  l = t.setVolume,
                  o = t.unmute,
                  c = r ? o : i,
                  s = r ? ae.g : ae.c
                return h.createElement(re.a, {
                  accessibilityLabelIcon: s,
                  accessibilityLabelSlider: ae.h,
                  isMuted: r,
                  onMuteToggle: c,
                  onSliderChange: e._setVolumePercent(l),
                  volumePercent: 100 * a,
                })
              }),
              y()(c()(e), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              y()(c()(e), '_renderFullScreenButton', function (t, n) {
                var r = n.fullscreen
                return r.isFullscreen
                  ? h.createElement(D.b, {
                      accessibilityLabel: ae.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: h.createElement(de, { isFullscreen: r.isFullscreen }),
                      onPress: e._exitFullScreen(t),
                    })
                  : h.createElement(D.b, {
                      accessibilityLabel: ae.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: h.createElement(de, { isFullscreen: r.isFullscreen }),
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
                return h.createElement(
                  $.a,
                  { pointerEvents: 'none', style: me.skipAffordance },
                  h.createElement(te, null),
                )
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.displayDismissableControls,
                    r = t.playerApi,
                    a = t.playerState,
                    i = t.skipButton
                  return r && a
                    ? h.createElement(A.a.ObserverContext.Consumer, null, function (t) {
                        return h.createElement(
                          $.a,
                          { ref: e._parentRef, style: me.root },
                          h.createElement(B.a, {
                            actionButton: e._renderActionButton(r, a),
                            displayDismissableControls: n,
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
            n
          )
        })(h.Component),
        me = J.a.create(function (e) {
          return {
            root: { writingDirection: 'ltr', cursor: 'auto', width: '100%' },
            skipAffordance: { marginLeft: e.spaces.space12, visibility: 'hidden' },
          }
        })
      function de(e) {
        var t = e.isFullscreen,
          n = (e.style, be.hidden),
          r = be.shown
        return h.createElement(
          h.Fragment,
          null,
          h.createElement(oe.a, { style: t ? n : r }),
          h.createElement(ce.a, { style: t ? r : n }),
        )
      }
      var be = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } },
        ye = fe,
        he = n('jhWN')
      function ve(e) {
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
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ge = (function (e) {
          u()(n, e)
          var t = ve(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_buildMessage', function (e, t) {
                switch (e) {
                  case H.d.watch_now:
                    return t ? Object(F.e)({ advertiserName: t }) : F.j
                  case H.d.shop:
                    return t ? Object(F.c)({ advertiserName: t }) : F.h
                  case H.d.see_more:
                    return t ? Object(F.b)({ advertiserName: t }) : F.g
                  case H.d.go_to:
                    return t ? Object(F.a)({ advertiserName: t }) : F.f
                  case H.d.visit_site:
                  default:
                    return t ? Object(F.d)({ advertiserName: t }) : F.i
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
            l()(n, [
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
                    n = e.avatarUri,
                    r = e.ctaType,
                    a = e.ctaUrl,
                    i = e.playerApi
                  if (!i) return null
                  var l = this._buildMessage(r, t)
                  return h.createElement(
                    M.a,
                    {
                      accessibilityLabel: l,
                      icon: n
                        ? h.createElement(he.a, { borderColor: 'white', borderWidth: 'small', size: 'medium', uri: n })
                        : void 0,
                      link: a,
                      onPress: this._handlePress(i),
                      size: 'xSmall',
                      style: Ee.root,
                      type: 'onMediaDominantColorFilled',
                    },
                    l,
                  )
                },
              },
            ]),
            n
          )
        })(h.PureComponent),
        Ee = J.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        }),
        Oe = ge,
        Se = (n('z84I'), n('aNKf')),
        Re = J.a.create(function (e) {
          return {
            root: { position: 'absolute', top: 0, left: 0, width: '100%' },
            gradientContainer: { padding: e.spaces.space16 },
            flexRow: { alignItems: 'center', flexDirection: 'row' },
            rightSpacing: { marginRight: e.spaces.space4 },
          }
        }),
        we = function (e) {
          var t = e.children
          return h.createElement(
            $.a,
            { style: Re.root },
            h.createElement(
              Se.a,
              {
                colors: [J.a.theme.colors.translucentBlack77, J.a.theme.colors.transparent],
                style: Re.gradientContainer,
              },
              h.createElement(
                $.a,
                { style: Re.flexRow },
                h.Children.toArray(t).map(function (e, t, n) {
                  var r = n.length,
                    a = 'LinearGradient-children-'.concat(t),
                    i = t < r - 1 ? Re.rightSpacing : ''
                  return h.createElement($.a, { key: a, style: i }, e)
                }),
              ),
            ),
          )
        },
        Ce = n('VLhD')
      function Pe(e) {
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
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Ae = (function (e) {
          u()(n, e)
          var t = Pe(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), 'state', { showControlBar: !1, stackedLabels: !1 }),
              y()(c()(e), '_durationLabelRef', h.createRef()),
              y()(c()(e), '_descriptionLabelRef', h.createRef()),
              y()(c()(e), '_handleLayout', function () {
                var t,
                  n,
                  r = null === (t = e._durationLabelRef) || void 0 === t ? void 0 : t.current,
                  a = null === (n = e._descriptionLabelRef) || void 0 === n ? void 0 : n.current
                r &&
                  a &&
                  r.measure(function (t, n) {
                    a.measure(function (t, r) {
                      n !== r ? e.setState({ stackedLabels: !0 }) : e.setState({ stackedLabels: !1 })
                    })
                  })
              }),
              y()(c()(e), '_renderPrerollControlBar', function (t) {
                var n = e.props,
                  r = n.containerRef,
                  a = n.onSkip,
                  i = n.playerApi,
                  l = n.playerState
                if (!i || !l) return null
                var o = t.Observer,
                  c = t.observed,
                  s = Object(Ce.c)(l, c, Ce.b),
                  u = l.fullscreen.isFullscreen,
                  p = Q.a.getConstants().isRTL,
                  f = [ke.labelOuterContainerBase, p ? ke.labelOuterContainerRtl : ke.labelOuterContainerLtr]
                return h.createElement(
                  $.a,
                  { style: ke.bottomContentContainer },
                  h.createElement(
                    $.a,
                    { style: ke.bottomContentRow },
                    h.createElement(
                      $.a,
                      { style: [ke.forceFullWidth, ke.flexDirectionRow] },
                      h.createElement(
                        o,
                        { focus: !0, interactionKey: Ce.a.A11YHook },
                        h.createElement($.a, { focusable: !0 }),
                      ),
                      h.createElement(
                        $.a,
                        { style: ke.flexExpand },
                        h.createElement(
                          $.a,
                          { style: f },
                          h.createElement(
                            w.a,
                            { show: s },
                            h.createElement(
                              $.a,
                              { style: [ke.bottomContentRow, ke.rowBottomSpace] },
                              e._renderLabels(),
                            ),
                          ),
                        ),
                        u
                          ? null
                          : h.createElement(
                              $.a,
                              { style: ke.bottomContentRow },
                              h.createElement(
                                $.a,
                                {
                                  style: [ke.skipThumbnail, p ? ke.skipThumbnailAbsoluteRtl : ke.skipThumbnailAbsolute],
                                  testID: Te.floatSkipThumbnail,
                                },
                                h.createElement(te, { onClick: a }),
                              ),
                            ),
                        h.createElement(
                          o,
                          { focus: !0, interactionKey: Ce.a.ControlBar, mouseover: !0, touch: !0 },
                          h.createElement(ye, {
                            containerRef: r,
                            displayDismissableControls: !s,
                            playerApi: i,
                            playerState: l,
                            skipButton: u
                              ? h.createElement(
                                  $.a,
                                  {
                                    style: [
                                      ke.skipThumbnail,
                                      p ? ke.skipThumbnailRelativeRtl : ke.skipThumbnailRelative,
                                    ],
                                    testID: Te.inlineSkipThumbnail,
                                  },
                                  h.createElement(te, { onClick: a }),
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
                var n = e.props,
                  r = n.playerApi,
                  a = n.playerState
                if (!r || !a) return null
                var i = Object(C.e)(a),
                  l = null == i ? void 0 : i.advertiserProfileImageUrl,
                  o = null == i ? void 0 : i.advertiserName,
                  c = null == i ? void 0 : i.cta
                return h.createElement(
                  h.Fragment,
                  null,
                  c
                    ? h.createElement(Oe, {
                        advertiserName: o,
                        avatarUri: l,
                        ctaType: c.type,
                        ctaUrl: c.url,
                        playerApi: r,
                      })
                    : h.createElement(
                        we,
                        null,
                        l &&
                          h.createElement(he.a, {
                            accessibilityHidden: !0,
                            borderColor: 'white',
                            borderWidth: 'small',
                            focusable: !1,
                            size: 'medium',
                            uri: l,
                          }),
                        o && h.createElement(_.b, { color: 'white', weight: 'bold' }, o),
                      ),
                  e._renderPrerollControlBar(t),
                )
              }),
              y()(c()(e), '_renderLabels', function () {
                return h.createElement(E.a, { periodic: !0 }, function (t) {
                  var n = t.playerState,
                    r = Object(C.e)(n),
                    a = Object(C.f)(r),
                    i = Object(C.d)(r) || 0,
                    l = a ? a - i : null,
                    o = Q.a.getConstants().isRTL,
                    c = [ke.labelContainerBase, o ? ke.labelContainerRtl : ke.labelContainerLtr],
                    s = [I.b.borderRadiusLeft, e.state.stackedLabels && I.b.borderRadiusRight],
                    u = [I.b.borderRadiusRight, e.state.stackedLabels && I.b.borderRadiusLeft],
                    p =
                      r && 'number' == typeof l && !r.isLive
                        ? h.createElement(
                            $.a,
                            { ref: e._durationLabelRef },
                            h.createElement(
                              j.a,
                              {
                                key: 'PrerollVideoOverlay-DurationLabel',
                                style: [
                                  I.b.label,
                                  o ? ke.labelSpaceLeft : I.b.spaceRight,
                                  e.state.stackedLabels && ke.labelBottomSpace,
                                ].concat(x()(o ? u : s)),
                              },
                              h.createElement(_.b, { numberOfLines: 1 }, Object(C.b)(l)),
                            ),
                          )
                        : null,
                    f = h.createElement(
                      $.a,
                      { ref: e._descriptionLabelRef },
                      h.createElement(
                        j.a,
                        {
                          key: 'PrerollVideoOverlay-DescriptionLabel',
                          style: [I.b.label, o ? ke.labelSpaceLeft : I.b.spaceRight].concat(x()(o ? s : u)),
                        },
                        h.createElement(_.b, { numberOfLines: 1 }, F.o),
                      ),
                    )
                  return h.createElement($.a, { onLayout: e._handleLayout, pointerEvents: 'none', style: c }, p, f)
                })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    n = e.playerState
                  return t && n ? h.createElement(A.a.Context.Consumer, null, this._renderWithIntentionContext) : null
                },
              },
            ]),
            n
          )
        })(h.Component),
        ke = J.a.create(function (e) {
          return {
            bottomContentContainer: { flexWrap: 'wrap', position: 'absolute', bottom: 0, width: '100%' },
            bottomContentRow: {
              alignItems: 'flex-end',
              flexWrap: 'nowrap',
              flexDirection: Q.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
            flexDirectionRow: { flexDirection: Q.a.getConstants().isRTL ? 'row-reverse' : 'row' },
            flexWrap: { flexWrap: 'wrap', justifyContent: 'space-between' },
            hidden: { visibility: 'hidden' },
          }
        }),
        Te = { floatSkipThumbnail: 'float-SkipThumbnail', inlineSkipThumbnail: 'inline-SkipThumbnail' },
        Le = Ae,
        xe = n('uz49'),
        _e = n('mNIZ'),
        je = n('zCLo'),
        Ie = n('ReFq')
      function Fe(e) {
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
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Be = (function (e) {
        u()(n, e)
        var t = Fe(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            y()(c()(e), 'state', { wasPrerollSkipped: !1 }),
            y()(c()(e), '_renderVideoPlayer', function (t) {
              var n,
                r = e.props,
                a = r.playerApi,
                i = r.playerState,
                l = r.poster,
                o = r.useKeyboardShortcuts
              if (!a || !i) return null
              var c = Object(C.e)(i),
                s = (null == c ? void 0 : c.displayType) === H.c.AD && (null == c ? void 0 : c.playbackCompleted),
                u = null === (n = i.errorInfo) || void 0 === n ? void 0 : n.adFailed,
                p = (null == c ? void 0 : c.displayType) === H.c.AD && (null == c ? void 0 : c.useRedesignedPrerollUx)
              return p && (e.state.wasPrerollSkipped || s || u)
                ? h.createElement(E.a, null, function (t) {
                    var n = t.aspectRatio,
                      r = l || i.posterImage
                    return h.createElement(xe.a, {
                      aspectRatio: n,
                      imageSrc: r,
                      onTransitionComplete: e._handleTransitionAnimationComplete,
                    })
                  })
                : p
                ? e._renderVideo(t, !0)
                : h.createElement(
                    je.a,
                    { enabled: !!o, playerApi: a, playerState: i },
                    h.createElement(O.a, { playerState: i }, e._renderVideo(t, !1)),
                  )
            }),
            y()(c()(e), '_renderVideo', function (t, n) {
              var r,
                a,
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
                E = i.showWatchAgain
              if (!f || !d) return null
              var O = t.Observer,
                A = t.observed,
                L = Object(Ce.c)(d, A, Ce.b),
                x = !!d.error,
                _ = Object(C.e)(d),
                j = (null == _ ? void 0 : _.contentType) === H.a.GIF,
                I = 'PLAY_REQUESTED' !== (null === (r = d.controls) || void 0 === r ? void 0 : r.playState),
                F = E && d.tracksFinished,
                B = L && d.isPreview,
                D = !(!L || null == _ || !_.isLive),
                N = y ? l : void 0,
                M = !(null != m && m.hideLeftBadges) && (!!N || j || B || D),
                W = !(null != m && m.hideRightBadges) && L,
                V = !(null != m && m.hidePosterImage),
                z = null === (a = d.controls) || void 0 === a ? void 0 : a.isPosterShown
              return h.createElement(
                O,
                { click: !0, interactionKey: Ce.a.Root, mousemove: !0, mouseover: !0 },
                x
                  ? null
                  : h.createElement(
                      h.Fragment,
                      null,
                      h.createElement(k.a, {
                        hideControls: L,
                        isTouchOnlyUI: Ce.b,
                        playerApi: f,
                        playerDisplayOptions: m,
                        playerState: d,
                      }),
                      V && !F && h.createElement(T.a, { imageSrc: b, playerApi: f, playerState: d, withPlayButton: I }),
                      h.createElement(g.a, { playerState: d }),
                      n
                        ? h.createElement(Le, { containerRef: o, onSkip: e._handleSkip, playerApi: f, playerState: d })
                        : h.createElement(
                            h.Fragment,
                            null,
                            !j && E && h.createElement(Ie.a, { onScribeEvent: p, playerApi: f, playerState: d }),
                            h.createElement(P.a, { guestsState: u, playerState: d }),
                            !j &&
                              h.createElement(
                                O,
                                { focus: !0, interactionKey: Ce.a.VideoCTA, mouseover: !0 },
                                h.createElement(
                                  w.a,
                                  { show: !L },
                                  h.createElement(_e.a, { playerApi: f, playerState: d }),
                                ),
                              ),
                            !j &&
                              !z &&
                              h.createElement(
                                h.Fragment,
                                null,
                                h.createElement(
                                  O,
                                  { focus: !0, interactionKey: Ce.a.A11YHook },
                                  h.createElement($.a, { focusable: !0 }),
                                ),
                                h.createElement(
                                  O,
                                  { focus: !0, interactionKey: Ce.a.ControlBar, mouseover: !0, touch: !0 },
                                  h.createElement(S.a, {
                                    containerRef: o,
                                    customControlBarIcon: c,
                                    fullscreenAdsDisabledOnIOS: s,
                                    hideControls: L,
                                    playerApi: f,
                                    playerState: d,
                                    publisherDisplayName: null == _ ? void 0 : _.publisherDisplayName,
                                    publisherProfileImageUrl: null == _ ? void 0 : _.publisherProfileImageUrl,
                                    showScrubber:
                                      'ad' !== (null == _ ? void 0 : _.displayType) && !(null != _ && _.isLive),
                                  }),
                                ),
                              ),
                            h.createElement(
                              w.a,
                              { show: M },
                              h.createElement(v.a, {
                                mediaAccessibilityLabel: N,
                                playerDisplayOptions: m,
                                playerState: d,
                                position: 'left',
                              }),
                            ),
                            h.createElement(
                              w.a,
                              { show: W },
                              h.createElement(v.a, { playerDisplayOptions: m, playerState: d, position: 'right' }),
                            ),
                          ),
                    ),
                h.createElement(
                  w.a,
                  { show: x },
                  x && h.createElement(R.a, { imageSrc: b, playerApi: f, playerState: d }),
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
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.playerApi,
                  n = e.playerState
                return t && n
                  ? h.createElement(A.a, null, h.createElement(A.a.Context.Consumer, null, this._renderVideoPlayer))
                  : null
              },
            },
          ]),
          n
        )
      })(h.PureComponent)
      t.default = Be
    },
    ReFq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        p = n('N+ot'),
        f = n.n(p),
        m = n('AuHH'),
        d = n.n(m),
        b = n('KEM+'),
        y = n.n(b),
        h = (n('2G9S'), n('ERkP')),
        v = n('/yvb'),
        g = n('3XMw'),
        E = n.n(g),
        O = n('rHpw'),
        S = n('MWbm')
      function R(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
          var n,
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var P = E.a.f2d4e6f1,
        A = (function (e) {
          u()(n, e)
          var t = C(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_createWatchAgainHandler', function (t) {
                return function (n) {
                  var r = e.props,
                    a = r.onScribeEvent,
                    i = r.playerApi
                  n.stopPropagation(), a && a({ namespace: { element: t, action: 'click' } }), i && i.replay()
                }
              }),
              y()(c()(e), '_handleOnPress', e._createWatchAgainHandler('watch_again_button')),
              y()(c()(e), '_handleOnClick', e._createWatchAgainHandler('watch_again_overlay')),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState
                  return e && e.tracksFinished
                    ? h.createElement(
                        S.a,
                        { onClick: this._handleOnClick, style: k.overlay },
                        h.createElement(
                          v.a,
                          { accessibilityLabel: P, onPress: this._handleOnPress, type: 'onMediaDominantColorFilled' },
                          P,
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.PureComponent),
        k = O.a.create(function (e) {
          return {
            overlay: w(
              w({}, O.a.absoluteFillObject),
              {},
              { backgroundColor: O.a.theme.colors.translucentBlack30, alignItems: 'center', justifyContent: 'center' },
            ),
          }
        })
    },
    uz49: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('KEM+'),
        l = n.n(i),
        o = (n('2G9S'), n('ERkP')),
        c = n('0W/e'),
        s = n('3rX5'),
        u = n('rHpw'),
        p = n('MWbm')
      function f(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = { animationStage: 'INITIAL', containerSize: null, imageTransform: null },
        b = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'SET_TRANSFORM':
              if ('INITIAL' === e.animationStage) {
                var n = t.payload,
                  r = n.aspectRatio,
                  a = n.containerHeight,
                  i = n.containerWidth,
                  l = Object(c.a)(r),
                  o = { width: i, height: a },
                  s = {
                    scaleX: l.width / i,
                    scaleY: l.height / a,
                    translateX: -1 * u.a.theme.spacesPx.space12,
                    translateY: -1 * u.a.theme.spacesPx.space12,
                  }
                return m(m({}, e), {}, { animationStage: 'SET_TRANSFORM', containerSize: o, imageTransform: s })
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
      var y = {
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
          n = e.imageSrc,
          r = e.onTransitionComplete,
          i = o.useReducer(b, d),
          l = a()(i, 2),
          c = l[0],
          f = l[1],
          h = c.animationStage,
          v = c.containerSize,
          g = c.imageTransform,
          E = o.useCallback(
            function (e) {
              if (null != e) {
                var n = e.getBoundingClientRect(),
                  r = n.height,
                  a = n.width
                requestAnimationFrame(function () {
                  f({ type: 'SET_TRANSFORM', payload: { aspectRatio: t, containerHeight: r, containerWidth: a } })
                })
              }
            },
            [t],
          ),
          O = o.useCallback(function (e) {
            requestAnimationFrame(function () {
              f({ type: 'START_ANIMATION' })
            })
          }, []),
          S = o.useCallback(function () {
            f({ type: 'FINISH_ANIMATION' })
          }, [])
        return (
          o.useEffect(
            function () {
              n || S()
            },
            [n, S],
          ),
          o.useEffect(
            function () {
              'FINISH_ANIMATION' === h && r && r()
            },
            [r, h],
          ),
          o.useEffect(
            function () {
              if ('START_ANIMATION' === h) {
                var e = setTimeout(function () {
                  S()
                }, 300)
                return function () {
                  clearTimeout(e)
                }
              }
            },
            [h, S],
          ),
          o.createElement(
            p.a,
            { ref: E, style: u.a.absoluteFill },
            (function () {
              if (null == v || null == g || !n) return null
              var e = { height: v.height, width: v.width },
                t = g.scaleX,
                r = g.scaleY,
                a = g.translateX,
                i = g.translateY,
                l = { transform: 'matrix('.concat(t, ', 0, 0, ').concat(r, ', ').concat(a, ', ').concat(i, ')') },
                c = m(m(m({}, y.imageWrapperBaseStyles), e), l)
              return o.createElement(
                'div',
                { onTransitionEnd: S, style: c },
                o.createElement(s.a, { ref: O, source: n, style: y.imageFill }),
              )
            })(),
          )
        )
      }
    },
    zCLo: function (e, t, n) {
      'use strict'
      var r = n('KEM+'),
        a = n.n(r),
        i = (n('Blm6'), n('ERkP')),
        l = n('wD1h'),
        o = n('oLZl'),
        c = n('rHpw'),
        s = n('MWbm')
      t.a = function (e) {
        var t,
          n = i.useRef(null),
          r = e.enabled,
          u = e.playerApi,
          p = e.playerState
        if (!r) return e.children || null
        var f = function (e) {
            u && p && (p.isPlaying ? u.pause() : u.play())
          },
          m = function (e) {
            if (u && p) {
              var t = parseInt(e.key, 10) / 10
              u.scrubToFraction(t)
            }
          }
        return i.createElement(
          l.a,
          {
            containerRef: n,
            enabled: !0,
            handlers:
              ((t = {}),
              a()(t, o.a.K, f),
              a()(t, o.a.M, function (e) {
                u && p && (p.isMuted ? u.unmute() : u.mute())
              }),
              a()(t, o.a.Space, f),
              a()(t, o.a.C, function (e) {
                u && p && u.toggleCaptions()
              }),
              a()(t, o.a.Home, function (e) {
                u && p && u.scrubToFraction(0)
              }),
              a()(t, o.a[0], m),
              a()(t, o.a[1], m),
              a()(t, o.a[2], m),
              a()(t, o.a[3], m),
              a()(t, o.a[4], m),
              a()(t, o.a[5], m),
              a()(t, o.a[6], m),
              a()(t, o.a[7], m),
              a()(t, o.a[8], m),
              a()(t, o.a[9], m),
              a()(t, o.a.End, function (e) {
                u && p && u.scrubToFraction(1)
              }),
              t),
          },
          i.createElement(s.a, { focusable: !0, ref: n, style: c.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
