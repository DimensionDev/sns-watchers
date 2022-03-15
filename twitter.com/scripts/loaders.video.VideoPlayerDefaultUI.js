;(window.webpackJsonp = window.webpackJsonp || []).push([
  [194],
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
      var n = a('VrFO'),
        r = a.n(n),
        l = a('Y9Ll'),
        i = a.n(l),
        o = a('1Pcy'),
        c = a.n(o),
        s = a('5Yy7'),
        u = a.n(s),
        p = a('2VqO'),
        m = a.n(p),
        d = a('KEM+'),
        f = a.n(d),
        b = (a('2G9S'), a('ERkP')),
        h = a.n(b),
        y = a('+xEG'),
        v = a('aoyV'),
        g = a('Zl35'),
        E = a('fZNH'),
        S = a('ub6r'),
        C = a('0nHQ'),
        w = a('USG3'),
        R = a('Q0n6'),
        A = a('5VhU'),
        T = a('hhMf'),
        k = a('Ur4q'),
        L = a('oH2E'),
        O = a('RhWx'),
        _ = a.n(O),
        x = a('t62R'),
        I = a('Wms4'),
        P = a('vCAy'),
        F = a('w05h'),
        B = a('IE/l'),
        N = a('N2PN'),
        D = a('dPHj'),
        M = (a('uFXj'), a('/yvb')),
        j = a('0W/e'),
        W = a('kCRK'),
        H = a('yiKp'),
        V = a.n(H),
        z = a('Lsrn'),
        K = a('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(K.a)(
            'svg',
            V()(
              V()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [z.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            h.a.createElement(
              'g',
              null,
              h.a.createElement('path', {
                d: 'M20.5 2h-1c-.828 0-1.5.672-1.5 1.5v6.976L4.87 2.116c-.228-.146-.522-.157-.762-.023-.24.132-.39.384-.39.657v18.5c0 .273.15.525.39.657.113.063.237.093.36.093.142 0 .28-.04.403-.117L18 13.527V20.5c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-17c0-.828-.672-1.5-1.5-1.5z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var Y = U,
        G = a('3rX5'),
        X = a('cm6r'),
        q = a('fs1G'),
        Q = a('rHpw'),
        J = a('shC7'),
        Z = a('MWbm'),
        $ = Q.a.create(function (e) {
          var t = e.borderRadii,
            a = e.borderWidths,
            n = e.colors,
            r = e.spaces
          return {
            thumbnail: {
              backgroundColor: n.translucentBlack77,
              borderRadius: t.small,
              display: 'flex',
              flexDirection: J.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
        ee = function (e) {
          var t = e.onClick,
            a = h.a.useContext(g.b.PeriodicContext),
            n = a.aspectRatio,
            r = a.playerState
          if (!r) return null
          var l = Object(R.f)(r)
          if (!l || l.displayType !== W.c.AD) return null
          var i = l.durationMs,
            o = i < 7e3,
            c = (o ? i : 5e3) - (l.currentTimeMs || 0),
            s = c > 250,
            u = c < 0,
            p = Object(R.d)(l) || 0,
            m = Object(R.g)(l) || 0,
            d = (o ? m : 5) - p,
            f = Object(F.m)({ seconds: Object(F.q)(d) })
          return h.a.createElement(
            X.a,
            {
              accessibilityLabel: u ? F.l : f,
              accessibilityRole: 'button',
              focusable: !0,
              interactive: !0,
              interactiveStyles: null,
              onClick: u && t ? t : q.a,
              testID: 'ControlBar-containerView',
            },
            function (e) {
              var t = J.a.getConstants().isRTL
              return h.a.createElement(
                h.a.Fragment,
                null,
                !u &&
                  h.a.createElement(
                    w.a,
                    { show: s },
                    h.a.createElement(
                      Z.a,
                      { style: [$.thumbnail, e.isFocused && $.thumbnailFocused], testID: 'ControlBar-videoThumbnail' },
                      h.a.createElement(x.b, { color: 'white', size: 'subtext2', style: $.countdownTime }, d),
                      h.a.createElement(G.a, { source: r.posterImage, style: Object(j.a)(n) }),
                    ),
                  ),
                h.a.createElement(
                  w.a,
                  { show: u },
                  h.a.createElement(
                    M.a,
                    {
                      focusable: !1,
                      interactivityState: e,
                      pointerEvents: 'auto',
                      size: 'small',
                      testID: 'ControlBar-skipButton',
                      type: 'onMediaDominantColorFilled',
                    },
                    h.a.createElement(
                      x.b,
                      { dir: 'ltr', weight: 'normal' },
                      F.k,
                      h.a.createElement(Y, { style: t ? $.iconMarginRtl : $.iconMargin }),
                    ),
                  ),
                ),
              )
            },
          )
        },
        te = a('aITJ'),
        ae = a('kRXa'),
        ne = a('wtsM'),
        re = a('5Ixf'),
        le = a('AtEG'),
        ie = a('NnQ9'),
        oe = a('p6DB'),
        ce = 'PrerollControlBar-',
        se = { CAPTIONS: ''.concat(ce, 'Captions'), FULLSCREEN: ''.concat(ce, 'Fullscreen') },
        ue = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(c()(e), '_parentRef', h.a.createRef()),
              f()(c()(e), '_renderRightContent', function (t) {
                var a = e.props,
                  n = a.playerApi,
                  r = a.playerState
                if (!n || !r) return null
                var l = te.b.isIOS()
                return h.a.createElement(
                  h.a.Fragment,
                  null,
                  e._renderTimePlayed(),
                  e._renderVolumeControls(n, r),
                  !l &&
                    h.a.createElement(
                      t,
                      { focus: !0, interactionKey: se.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                      e._renderFullScreenButton(n, r),
                    ),
                )
              }),
              f()(c()(e), '_renderActionButton', function (e, t) {
                var a = t.controls,
                  n = t.isPlaying,
                  r = e.pause,
                  l = e.play,
                  i = Object(R.f)(t)
                return !i || i.isLive
                  ? null
                  : n || (a && 'PLAY_REQUESTED' === a.playState)
                  ? h.a.createElement(N.b, {
                      accessibilityLabel: ne.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: h.a.createElement(re.a, null),
                      onPress: r,
                    })
                  : h.a.createElement(N.b, {
                      accessibilityLabel: ne.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      icon: h.a.createElement(le.a, null),
                      onPress: l,
                    })
              }),
              f()(c()(e), '_renderAdText', function () {
                return h.a.createElement(D.a, null, F.o)
              }),
              f()(c()(e), '_renderTimePlayed', function () {
                return h.a.createElement(g.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    a = Object(R.f)(t),
                    n = Object(R.d)(a),
                    r = Object(R.g)(a)
                  return a && 'number' == typeof n && r && !a.isLive
                    ? h.a.createElement(D.a, null, ''.concat(Object(R.b)(n), ' / ').concat(Object(R.b)(r)))
                    : null
                })
              }),
              f()(c()(e), '_renderVolumeControls', function (t, a) {
                var n = a.isMuted,
                  r = a.volume,
                  l = t.mute,
                  i = t.setVolume,
                  o = t.unmute,
                  c = n ? o : l,
                  s = n ? ne.g : ne.c
                return h.a.createElement(ae.a, {
                  accessibilityLabelIcon: s,
                  accessibilityLabelSlider: ne.h,
                  isMuted: n,
                  onMuteToggle: c,
                  onSliderChange: e._setVolumePercent(i),
                  volumePercent: 100 * r,
                })
              }),
              f()(c()(e), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              f()(c()(e), '_renderFullScreenButton', function (t, a) {
                var n = a.fullscreen
                return n.isFullscreen
                  ? h.a.createElement(N.b, {
                      accessibilityLabel: ne.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: h.a.createElement(me, { isFullscreen: n.isFullscreen }),
                      onPress: e._exitFullScreen(t),
                    })
                  : h.a.createElement(N.b, {
                      accessibilityLabel: ne.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      icon: h.a.createElement(me, { isFullscreen: n.isFullscreen }),
                      onPress: e._requestFullScreen(t),
                    })
              }),
              f()(c()(e), '_requestFullScreen', function (t) {
                return function () {
                  t.fullScreen(e.props.containerRef)
                }
              }),
              f()(c()(e), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              f()(c()(e), '_renderSkipAffordance', function () {
                return h.a.createElement(
                  Z.a,
                  { pointerEvents: 'none', style: pe.skipAffordance },
                  h.a.createElement(ee, null),
                )
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.displayDismissableControls,
                    n = t.playerApi,
                    r = t.playerState,
                    l = t.skipButton
                  return n && r
                    ? h.a.createElement(T.a.ObserverContext.Consumer, null, function (t) {
                        return h.a.createElement(
                          Z.a,
                          { ref: e._parentRef, style: pe.root },
                          h.a.createElement(B.a, {
                            actionButton: e._renderActionButton(n, r),
                            displayDismissableControls: a,
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
            a
          )
        })(h.a.Component),
        pe = Q.a.create(function (e) {
          return {
            root: { writingDirection: 'ltr', cursor: 'auto', width: '100%' },
            skipAffordance: { marginLeft: e.spaces.space12, visibility: 'hidden' },
          }
        })
      function me(e) {
        var t = e.isFullscreen,
          a = (e.style, de.hidden),
          n = de.shown
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(ie.a, { style: t ? a : n }),
          h.a.createElement(oe.a, { style: t ? n : a }),
        )
      }
      var de = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } },
        fe = ue,
        be = a('jhWN'),
        he = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(c()(e), '_buildMessage', function (e, t) {
                switch (e) {
                  case W.d.watch_now:
                    return t ? Object(F.e)({ advertiserName: t }) : F.j
                  case W.d.shop:
                    return t ? Object(F.c)({ advertiserName: t }) : F.h
                  case W.d.see_more:
                    return t ? Object(F.b)({ advertiserName: t }) : F.g
                  case W.d.go_to:
                    return t ? Object(F.a)({ advertiserName: t }) : F.f
                  case W.d.visit_site:
                  default:
                    return t ? Object(F.d)({ advertiserName: t }) : F.i
                }
              }),
              f()(c()(e), '_handlePress', function (e) {
                return function () {
                  e.callToActionClicked()
                }
              }),
              e
            )
          }
          return (
            i()(a, [
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
                    l = e.playerApi
                  if (!l) return null
                  var i = this._buildMessage(n, t)
                  return h.a.createElement(
                    M.a,
                    {
                      accessibilityLabel: i,
                      icon: a
                        ? h.a.createElement(be.a, {
                            borderColor: 'white',
                            borderWidth: 'small',
                            size: 'medium',
                            uri: a,
                          })
                        : void 0,
                      link: r,
                      onPress: this._handlePress(l),
                      size: 'xSmall',
                      style: ye.root,
                      type: 'onMediaDominantColorFilled',
                    },
                    i,
                  )
                },
              },
            ]),
            a
          )
        })(h.a.PureComponent),
        ye = Q.a.create(function (e) {
          return { root: { position: 'absolute', left: e.spaces.space12, top: e.spaces.space12 } }
        }),
        ve = he,
        ge = (a('z84I'), a('7x/C'), a('JtPf'), a('aNKf')),
        Ee = Q.a.create(function (e) {
          return {
            root: { position: 'absolute', top: 0, left: 0, width: '100%' },
            gradientContainer: { padding: e.spaces.space16 },
            flexRow: { alignItems: 'center', flexDirection: 'row' },
            rightSpacing: { marginRight: e.spaces.space4 },
          }
        }),
        Se = function (e) {
          var t = e.children
          return h.a.createElement(
            Z.a,
            { style: Ee.root },
            h.a.createElement(
              ge.a,
              {
                colors: [Q.a.theme.colors.translucentBlack77, Q.a.theme.colors.transparent],
                style: Ee.gradientContainer,
              },
              h.a.createElement(
                Z.a,
                { style: Ee.flexRow },
                h.a.Children.toArray(t).map(function (e, t, a) {
                  var n = a.length,
                    r = 'LinearGradient-children-'.concat(t),
                    l = t < n - 1 ? Ee.rightSpacing : ''
                  return h.a.createElement(Z.a, { key: r, style: l }, e)
                }),
              ),
            ),
          )
        },
        Ce = a('VLhD'),
        we = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(c()(e), 'state', { showControlBar: !1, stackedLabels: !1 }),
              f()(c()(e), '_durationLabelRef', h.a.createRef()),
              f()(c()(e), '_descriptionLabelRef', h.a.createRef()),
              f()(c()(e), '_handleLayout', function () {
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
              f()(c()(e), '_renderPrerollControlBar', function (t) {
                var a = e.props,
                  n = a.containerRef,
                  r = a.onSkip,
                  l = a.playerApi,
                  i = a.playerState
                if (!l || !i) return null
                var o = t.Observer,
                  c = t.observed,
                  s = Object(Ce.c)(i, c, Ce.b),
                  u = i.fullscreen.isFullscreen,
                  p = J.a.getConstants().isRTL,
                  m = [Re.labelOuterContainerBase, p ? Re.labelOuterContainerRtl : Re.labelOuterContainerLtr]
                return h.a.createElement(
                  Z.a,
                  { style: Re.bottomContentContainer },
                  h.a.createElement(
                    Z.a,
                    { style: Re.bottomContentRow },
                    h.a.createElement(
                      Z.a,
                      { style: [Re.forceFullWidth, Re.flexDirectionRow] },
                      h.a.createElement(
                        o,
                        { focus: !0, interactionKey: Ce.a.A11YHook },
                        h.a.createElement(Z.a, { focusable: !0 }),
                      ),
                      h.a.createElement(
                        Z.a,
                        { style: Re.flexExpand },
                        h.a.createElement(
                          Z.a,
                          { style: m },
                          h.a.createElement(
                            w.a,
                            { show: s },
                            h.a.createElement(
                              Z.a,
                              { style: [Re.bottomContentRow, Re.rowBottomSpace] },
                              e._renderLabels(),
                            ),
                          ),
                        ),
                        u
                          ? null
                          : h.a.createElement(
                              Z.a,
                              { style: Re.bottomContentRow },
                              h.a.createElement(
                                Z.a,
                                {
                                  style: [Re.skipThumbnail, p ? Re.skipThumbnailAbsoluteRtl : Re.skipThumbnailAbsolute],
                                  testID: Ae.floatSkipThumbnail,
                                },
                                h.a.createElement(ee, { onClick: r }),
                              ),
                            ),
                        h.a.createElement(
                          o,
                          { focus: !0, interactionKey: Ce.a.ControlBar, mouseover: !0, touch: !0 },
                          h.a.createElement(fe, {
                            containerRef: n,
                            displayDismissableControls: !s,
                            playerApi: l,
                            playerState: i,
                            skipButton: u
                              ? h.a.createElement(
                                  Z.a,
                                  {
                                    style: [
                                      Re.skipThumbnail,
                                      p ? Re.skipThumbnailRelativeRtl : Re.skipThumbnailRelative,
                                    ],
                                    testID: Ae.inlineSkipThumbnail,
                                  },
                                  h.a.createElement(ee, { onClick: r }),
                                )
                              : null,
                          }),
                        ),
                      ),
                    ),
                  ),
                )
              }),
              f()(c()(e), '_renderWithIntentionContext', function (t) {
                var a = e.props,
                  n = a.playerApi,
                  r = a.playerState
                if (!n || !r) return null
                var l = Object(R.f)(r),
                  i = null == l ? void 0 : l.advertiserProfileImageUrl,
                  o = null == l ? void 0 : l.advertiserName,
                  c = null == l ? void 0 : l.cta
                return h.a.createElement(
                  h.a.Fragment,
                  null,
                  c
                    ? h.a.createElement(ve, {
                        advertiserName: o,
                        avatarUri: i,
                        ctaType: c.type,
                        ctaUrl: c.url,
                        playerApi: n,
                      })
                    : h.a.createElement(
                        Se,
                        null,
                        i &&
                          h.a.createElement(be.a, {
                            accessibilityHidden: !0,
                            borderColor: 'white',
                            borderWidth: 'small',
                            focusable: !1,
                            size: 'medium',
                            uri: i,
                          }),
                        o && h.a.createElement(x.b, { color: 'white', weight: 'bold' }, o),
                      ),
                  e._renderPrerollControlBar(t),
                )
              }),
              f()(c()(e), '_renderLabels', function () {
                return h.a.createElement(g.a, { periodic: !0 }, function (t) {
                  var a = t.playerState,
                    n = Object(R.f)(a),
                    r = Object(R.g)(n),
                    l = Object(R.d)(n) || 0,
                    i = r ? r - l : null,
                    o = J.a.getConstants().isRTL,
                    c = [Re.labelContainerBase, o ? Re.labelContainerRtl : Re.labelContainerLtr],
                    s = [P.b.borderRadiusLeft, e.state.stackedLabels && P.b.borderRadiusRight],
                    u = [P.b.borderRadiusRight, e.state.stackedLabels && P.b.borderRadiusLeft],
                    p =
                      n && 'number' == typeof i && !n.isLive
                        ? h.a.createElement(
                            Z.a,
                            { ref: e._durationLabelRef },
                            h.a.createElement(
                              I.a,
                              {
                                key: 'PrerollVideoOverlay-DurationLabel',
                                style: [
                                  P.b.label,
                                  o ? Re.labelSpaceLeft : P.b.spaceRight,
                                  e.state.stackedLabels && Re.labelBottomSpace,
                                ].concat(_()(o ? u : s)),
                              },
                              h.a.createElement(x.b, { numberOfLines: 1 }, Object(R.b)(i)),
                            ),
                          )
                        : null,
                    m = h.a.createElement(
                      Z.a,
                      { ref: e._descriptionLabelRef },
                      h.a.createElement(
                        I.a,
                        {
                          key: 'PrerollVideoOverlay-DescriptionLabel',
                          style: [P.b.label, o ? Re.labelSpaceLeft : P.b.spaceRight].concat(_()(o ? s : u)),
                        },
                        h.a.createElement(x.b, { numberOfLines: 1 }, F.o),
                      ),
                    )
                  return h.a.createElement(Z.a, { onLayout: e._handleLayout, pointerEvents: 'none', style: c }, p, m)
                })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    a = e.playerState
                  return t && a ? h.a.createElement(T.a.Context.Consumer, null, this._renderWithIntentionContext) : null
                },
              },
            ]),
            a
          )
        })(h.a.Component),
        Re = Q.a.create(function (e) {
          return {
            bottomContentContainer: { flexWrap: 'wrap', position: 'absolute', bottom: 0, width: '100%' },
            bottomContentRow: {
              alignItems: 'flex-end',
              flexWrap: 'nowrap',
              flexDirection: J.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
            flexDirectionRow: { flexDirection: J.a.getConstants().isRTL ? 'row-reverse' : 'row' },
            flexWrap: { flexWrap: 'wrap', justifyContent: 'space-between' },
            hidden: { visibility: 'hidden' },
          }
        }),
        Ae = { floatSkipThumbnail: 'float-SkipThumbnail', inlineSkipThumbnail: 'inline-SkipThumbnail' },
        Te = we,
        ke = a('uz49'),
        Le = a('mNIZ'),
        Oe = a('zCLo'),
        _e = a('ReFq'),
        xe = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              f()(c()(e), 'state', { wasPrerollSkipped: !1 }),
              f()(c()(e), '_renderVideoPlayer', function (t) {
                var a,
                  n = e.props,
                  r = n.playerApi,
                  l = n.playerState,
                  i = n.poster,
                  o = n.useKeyboardShortcuts
                if (!r || !l) return null
                var c = Object(R.f)(l),
                  s = (null == c ? void 0 : c.displayType) === W.c.AD && (null == c ? void 0 : c.playbackCompleted),
                  u = null === (a = l.errorInfo) || void 0 === a ? void 0 : a.adFailed,
                  p = (null == c ? void 0 : c.displayType) === W.c.AD && (null == c ? void 0 : c.useRedesignedPrerollUx)
                return p && (e.state.wasPrerollSkipped || s || u)
                  ? h.a.createElement(g.a, null, function (t) {
                      var a = t.aspectRatio,
                        n = i || l.posterImage
                      return h.a.createElement(ke.a, {
                        aspectRatio: a,
                        imageSrc: n,
                        onTransitionComplete: e._handleTransitionAnimationComplete,
                      })
                    })
                  : p
                  ? e._renderVideo(t, !0)
                  : h.a.createElement(
                      Oe.a,
                      { enabled: !!o, playerApi: r, playerState: l },
                      h.a.createElement(E.a, { playerState: l }, e._renderVideo(t, !1)),
                    )
              }),
              f()(c()(e), '_renderVideo', function (t, a) {
                var n,
                  r,
                  l = e.props,
                  i = l.accessibilityLabel,
                  o = l.containerRef,
                  c = l.customControlBarIcon,
                  s = l.fullscreenAdsDisabledOnIOS,
                  u = l.guestsState,
                  p = l.onScribeEvent,
                  m = l.playerApi,
                  d = l.playerDisplayOptions,
                  f = l.playerState,
                  b = l.poster,
                  g = l.shouldShowAltLabel,
                  E = l.showWatchAgain
                if (!m || !f) return null
                var T = t.Observer,
                  O = t.observed,
                  _ = Object(Ce.c)(f, O, Ce.b),
                  x = !!f.error,
                  I = Object(R.f)(f),
                  P = (null == I ? void 0 : I.contentType) === W.a.GIF,
                  F = 'PLAY_REQUESTED' !== (null === (n = f.controls) || void 0 === n ? void 0 : n.playState),
                  B = E && f.tracksFinished,
                  N = _ && f.isPreview,
                  D = !(!_ || null == I || !I.isLive),
                  M = g ? i : void 0,
                  j = !(null != d && d.hideLeftBadges) && (!!M || P || N || D),
                  H = !(null != d && d.hideRightBadges) && _,
                  V = !(null != d && d.hidePosterImage),
                  z = null === (r = f.controls) || void 0 === r ? void 0 : r.isPosterShown
                return h.a.createElement(
                  T,
                  { click: !0, interactionKey: Ce.a.Root, mousemove: !0, mouseover: !0 },
                  x
                    ? null
                    : h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(k.a, {
                          hideControls: _,
                          isTouchOnlyUI: Ce.b,
                          playerApi: m,
                          playerDisplayOptions: d,
                          playerState: f,
                        }),
                        V &&
                          !B &&
                          h.a.createElement(L.a, { imageSrc: b, playerApi: m, playerState: f, withPlayButton: F }),
                        h.a.createElement(v.a, { playerState: f }),
                        a
                          ? h.a.createElement(Te, {
                              containerRef: o,
                              onSkip: e._handleSkip,
                              playerApi: m,
                              playerState: f,
                            })
                          : h.a.createElement(
                              h.a.Fragment,
                              null,
                              !P && E && h.a.createElement(_e.a, { onScribeEvent: p, playerApi: m, playerState: f }),
                              h.a.createElement(A.a, { guestsState: u, playerState: f }),
                              !P &&
                                h.a.createElement(
                                  T,
                                  { focus: !0, interactionKey: Ce.a.VideoCTA, mouseover: !0 },
                                  h.a.createElement(
                                    w.a,
                                    { show: !_ },
                                    h.a.createElement(Le.a, { playerApi: m, playerState: f }),
                                  ),
                                ),
                              !P &&
                                !z &&
                                h.a.createElement(
                                  h.a.Fragment,
                                  null,
                                  h.a.createElement(
                                    T,
                                    { focus: !0, interactionKey: Ce.a.A11YHook },
                                    h.a.createElement(Z.a, { focusable: !0 }),
                                  ),
                                  h.a.createElement(
                                    T,
                                    { focus: !0, interactionKey: Ce.a.ControlBar, mouseover: !0, touch: !0 },
                                    h.a.createElement(S.a, {
                                      containerRef: o,
                                      customControlBarIcon: c,
                                      fullscreenAdsDisabledOnIOS: s,
                                      hideControls: _,
                                      playerApi: m,
                                      playerState: f,
                                      publisherDisplayName: null == I ? void 0 : I.publisherDisplayName,
                                      publisherProfileImageUrl: null == I ? void 0 : I.publisherProfileImageUrl,
                                      showScrubber:
                                        'ad' !== (null == I ? void 0 : I.displayType) && !(null != I && I.isLive),
                                    }),
                                  ),
                                ),
                              h.a.createElement(
                                w.a,
                                { show: j },
                                h.a.createElement(y.a, {
                                  mediaAccessibilityLabel: M,
                                  playerDisplayOptions: d,
                                  playerState: f,
                                  position: 'left',
                                }),
                              ),
                              h.a.createElement(
                                w.a,
                                { show: H },
                                h.a.createElement(y.a, { playerDisplayOptions: d, playerState: f, position: 'right' }),
                              ),
                            ),
                      ),
                  h.a.createElement(
                    w.a,
                    { show: x },
                    x && h.a.createElement(C.a, { imageSrc: b, playerApi: m, playerState: f }),
                  ),
                )
              }),
              f()(c()(e), '_handleSkip', function () {
                var t = e.props.playerApi
                t && t.pause(), e.setState({ wasPrerollSkipped: !0 })
              }),
              f()(c()(e), '_handleTransitionAnimationComplete', function () {
                var t = e.props.playerApi
                t && t.nextTrack()
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.playerApi,
                    a = e.playerState
                  return t && a
                    ? h.a.createElement(
                        T.a,
                        null,
                        h.a.createElement(T.a.Context.Consumer, null, this._renderVideoPlayer),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(h.a.PureComponent)
      t.default = xe
    },
    ReFq: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return A
      })
      var n = a('yiKp'),
        r = a.n(n),
        l = a('VrFO'),
        i = a.n(l),
        o = a('Y9Ll'),
        c = a.n(o),
        s = a('1Pcy'),
        u = a.n(s),
        p = a('5Yy7'),
        m = a.n(p),
        d = a('2VqO'),
        f = a.n(d),
        b = a('KEM+'),
        h = a.n(b),
        y = (a('2G9S'), a('ERkP')),
        v = a.n(y),
        g = a('/yvb'),
        E = a('3XMw'),
        S = a.n(E),
        C = a('rHpw'),
        w = a('MWbm'),
        R = S.a.f2d4e6f1,
        A = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(u()(e), '_createWatchAgainHandler', function (t) {
                return function (a) {
                  var n = e.props,
                    r = n.onScribeEvent,
                    l = n.playerApi
                  a.stopPropagation(), r && r({ namespace: { element: t, action: 'click' } }), l && l.replay()
                }
              }),
              h()(u()(e), '_handleOnPress', e._createWatchAgainHandler('watch_again_button')),
              h()(u()(e), '_handleOnClick', e._createWatchAgainHandler('watch_again_overlay')),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.playerState
                  return e && e.tracksFinished
                    ? v.a.createElement(
                        w.a,
                        { onClick: this._handleOnClick, style: T.overlay },
                        v.a.createElement(
                          g.a,
                          { accessibilityLabel: R, onPress: this._handleOnPress, type: 'onMediaDominantColorFilled' },
                          R,
                        ),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent),
        T = C.a.create(function (e) {
          return {
            overlay: r()(
              r()({}, C.a.absoluteFillObject),
              {},
              { backgroundColor: C.a.theme.colors.translucentBlack30, alignItems: 'center', justifyContent: 'center' },
            ),
          }
        })
    },
    uz49: function (e, t, a) {
      'use strict'
      var n = a('ddV6'),
        r = a.n(n),
        l = a('yiKp'),
        i = a.n(l),
        o = (a('2G9S'), a('ERkP')),
        c = a.n(o),
        s = a('0W/e'),
        u = a('3rX5'),
        p = a('rHpw'),
        m = a('MWbm'),
        d = { animationStage: 'INITIAL', containerSize: null, imageTransform: null },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'SET_TRANSFORM':
              if ('INITIAL' === e.animationStage) {
                var a = t.payload,
                  n = a.aspectRatio,
                  r = a.containerHeight,
                  l = a.containerWidth,
                  o = Object(s.a)(n),
                  c = { width: l, height: r },
                  u = {
                    scaleX: o.width / l,
                    scaleY: o.height / r,
                    translateX: -1 * p.a.theme.spacesPx.space12,
                    translateY: -1 * p.a.theme.spacesPx.space12,
                  }
                return i()(i()({}, e), {}, { animationStage: 'SET_TRANSFORM', containerSize: c, imageTransform: u })
              }
              return e
            case 'START_ANIMATION':
              return 'SET_TRANSFORM' === e.animationStage
                ? i()(
                    i()({}, e),
                    {},
                    {
                      animationStage: 'START_ANIMATION',
                      imageTransform: { scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 },
                    },
                  )
                : e
            case 'FINISH_ANIMATION':
              return i()(i()({}, e), {}, { animationStage: 'FINISH_ANIMATION' })
            default:
              return e
          }
        }
      var b = {
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
          l = c.a.useReducer(f, d),
          o = r()(l, 2),
          s = o[0],
          h = o[1],
          y = s.animationStage,
          v = s.containerSize,
          g = s.imageTransform,
          E = c.a.useCallback(
            function (e) {
              if (null != e) {
                var a = e.getBoundingClientRect(),
                  n = a.height,
                  r = a.width
                requestAnimationFrame(function () {
                  h({ type: 'SET_TRANSFORM', payload: { aspectRatio: t, containerHeight: n, containerWidth: r } })
                })
              }
            },
            [t],
          ),
          S = c.a.useCallback(function (e) {
            requestAnimationFrame(function () {
              h({ type: 'START_ANIMATION' })
            })
          }, []),
          C = c.a.useCallback(function () {
            h({ type: 'FINISH_ANIMATION' })
          }, [])
        return (
          c.a.useEffect(
            function () {
              a || C()
            },
            [a, C],
          ),
          c.a.useEffect(
            function () {
              'FINISH_ANIMATION' === y && n && n()
            },
            [n, y],
          ),
          c.a.useEffect(
            function () {
              if ('START_ANIMATION' === y) {
                var e = setTimeout(function () {
                  C()
                }, 300)
                return function () {
                  clearTimeout(e)
                }
              }
            },
            [y, C],
          ),
          c.a.createElement(
            m.a,
            { ref: E, style: p.a.absoluteFill },
            (function () {
              if (null == v || null == g || !a) return null
              var e = { height: v.height, width: v.width },
                t = g.scaleX,
                n = g.scaleY,
                r = g.translateX,
                l = g.translateY,
                o = { transform: 'matrix('.concat(t, ', 0, 0, ').concat(n, ', ').concat(r, ', ').concat(l, ')') },
                s = i()(i()(i()({}, b.imageWrapperBaseStyles), e), o)
              return c.a.createElement(
                'div',
                { onTransitionEnd: C, style: s },
                c.a.createElement(u.a, { ref: S, source: a, style: b.imageFill }),
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
        l = (a('Blm6'), a('ERkP')),
        i = a.n(l),
        o = a('wD1h'),
        c = a('oLZl'),
        s = a('rHpw'),
        u = a('MWbm')
      t.a = function (e) {
        var t,
          a = i.a.useRef(null),
          n = e.enabled,
          l = e.playerApi,
          p = e.playerState
        if (!n) return e.children || null
        var m = function (e) {
            l && p && (p.isPlaying ? l.pause() : l.play())
          },
          d = function (e) {
            if (l && p) {
              var t = parseInt(e.key, 10) / 10
              l.scrubToFraction(t)
            }
          }
        return i.a.createElement(
          o.a,
          {
            containerRef: a,
            enabled: !0,
            handlers:
              ((t = {}),
              r()(t, c.a.K, m),
              r()(t, c.a.M, function (e) {
                l && p && (p.isMuted ? l.unmute() : l.mute())
              }),
              r()(t, c.a.Space, m),
              r()(t, c.a.C, function (e) {
                l && p && l.toggleCaptions()
              }),
              r()(t, c.a.Home, function (e) {
                l && p && l.scrubToFraction(0)
              }),
              r()(t, c.a[0], d),
              r()(t, c.a[1], d),
              r()(t, c.a[2], d),
              r()(t, c.a[3], d),
              r()(t, c.a[4], d),
              r()(t, c.a[5], d),
              r()(t, c.a[6], d),
              r()(t, c.a[7], d),
              r()(t, c.a[8], d),
              r()(t, c.a[9], d),
              r()(t, c.a.End, function (e) {
                l && p && l.scrubToFraction(1)
              }),
              t),
          },
          i.a.createElement(u.a, { focusable: !0, ref: a, style: s.a.absoluteFill }, e.children),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
