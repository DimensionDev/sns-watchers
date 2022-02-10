;(window.webpackJsonp = window.webpackJsonp || []).push([
  [177],
  {
    '3i3o': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('hhMf'),
        i = n('yiKp'),
        c = n.n(i),
        u = n('VrFO'),
        s = n.n(u),
        l = n('Y9Ll'),
        d = n.n(l),
        f = n('1Pcy'),
        b = n.n(f),
        h = n('5Yy7'),
        m = n.n(h),
        v = n('2VqO'),
        p = n.n(v),
        y = n('KEM+'),
        S = n.n(y),
        E = (n('2G9S'), n('Zl35')),
        w = n('IE/l'),
        g = n('N2PN'),
        _ = n('dPHj'),
        C = n('3XMw'),
        T = n.n(C),
        k = n('oQhu'),
        L = n('Q0n6'),
        O = n('9RkS'),
        P = n('+d3d'),
        x = T.a.f06f2e53,
        R = (function (e) {
          m()(n, e)
          var t = p()(n)
          function n(e) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e)),
              S()(b()(r), '_handleChange', function (e) {
                var t,
                  n = r.props.getScrubToFraction
                r.setState({ scrubTo: e })
                var a = null !== (t = null == n ? void 0 : n(e)) && void 0 !== t ? t : r._defaultGetScrubToFraction(e)
                'number' == typeof a && r._throttledPlayerSeek(a)
              }),
              S()(
                b()(r),
                '_throttledPlayerSeek',
                Object(P.a)(
                  function (e) {
                    r.props.playerApi.scrubToFraction(e)
                  },
                  50,
                  { leading: !0, trailing: !0 },
                ),
              ),
              S()(b()(r), '_handleActive', function (e) {
                return (
                  !r.state.isScrubbing && e && document.addEventListener('click', r._handleCaptureClick, !0),
                  e || r._throttledPlayerSeek.flush(),
                  r.props.playerApi.setScrubbing(e),
                  r.setState({ isScrubbing: e })
                )
              }),
              S()(b()(r), '_handleCaptureClick', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.removeEventListener('click', r._handleCaptureClick, !0)
              }),
              S()(b()(r), '_defaultGetScrubToFraction', function (e) {
                if (r.props.duration) return e / r.props.duration
              }),
              (r.state = { isScrubbing: !1, scrubTo: 0 }),
              r
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.currentTime,
                    r = e.duration,
                    o = e.isSeeking,
                    i = this.state.isScrubbing || o ? this.state.scrubTo : n
                  return 'number' == typeof i && 'number' == typeof r && r > 0
                    ? a.a.createElement(O.a, {
                        accessibilityLabel: t,
                        accessibilityLabelValueText: x({ currentTime: Object(L.b)(i), durationTime: Object(L.b)(r) }),
                        color: 'white',
                        keepLTR: !0,
                        keyboardStep: 5,
                        max: r,
                        min: 0,
                        onActive: this._handleActive,
                        onChange: this._handleChange,
                        step: 'any',
                        value: i,
                        withHidingThumb: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(a.a.PureComponent),
        M = n('rHpw'),
        B = n('MWbm'),
        A = n('kRXa'),
        F = n('c8Oq'),
        W = n('wtsM'),
        z = n('5Ixf'),
        H = n('RUwF'),
        j = n('AtEG'),
        D = n('NnQ9'),
        I = n('p6DB'),
        V = n('pHub'),
        N = n('8A5z'),
        K = n('BVo1'),
        G = T.a.j25d7cc9,
        q = T.a.a858b25b,
        U = T.a.hea01797,
        Y = 'PreviewControlBar-',
        J = { CAPTIONS: ''.concat(Y, 'Captions'), FULLSCREEN: ''.concat(Y, 'Fullscreen') },
        Q = function (e) {
          return e === F.b.narrow || e === F.b.veryNarrow
        },
        X = (function (e) {
          m()(n, e)
          var t = p()(n)
          function n(e) {
            var r
            if (
              (s()(this, n),
              (r = t.call(this, e)),
              S()(b()(r), 'state', { currentBreakpoint: F.b.wide, showScrubber: !0, scrubTime: 0 }),
              S()(b()(r), '_parentRef', a.a.createRef()),
              S()(b()(r), '_renderActionButton', function (e, t) {
                var n = t.controls,
                  o = t.isPlaying,
                  i = e.pause,
                  c = e.play,
                  u = e.replay,
                  s = r.state.currentBreakpoint,
                  l = Object(L.f)(t),
                  d = Q(s) ? 'xSmall' : 'medium'
                return !l || l.isLive
                  ? null
                  : o || (n && 'PLAY_REQUESTED' === n.playState)
                  ? a.a.createElement(g.b, {
                      accessibilityLabel: W.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(z.a, null),
                      onPress: i,
                      size: d,
                    })
                  : n.isReplayButtonShown
                  ? a.a.createElement(g.b, {
                      accessibilityLabel: W.f,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(H.a, null),
                      onPress: u,
                      size: d,
                    })
                  : a.a.createElement(g.b, {
                      accessibilityLabel: W.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(j.a, null),
                      onPress: c,
                      size: d,
                    })
              }),
              S()(b()(r), '_renderFullScreenButton', function (e, t) {
                var n = t.fullscreen,
                  o = r.state.currentBreakpoint,
                  i = r._fullScreenIcon,
                  c = Q(o) ? 'xSmall' : 'medium'
                return n.isFullscreen
                  ? a.a.createElement(g.b, {
                      accessibilityLabel: W.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(i, { isFullscreen: n.isFullscreen }),
                      onPress: r._exitFullScreen(e),
                      size: c,
                    })
                  : a.a.createElement(g.b, {
                      accessibilityLabel: W.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(i, { isFullscreen: n.isFullscreen }),
                      onPress: r._requestFullScreen(e),
                      size: c,
                    })
              }),
              S()(b()(r), '_fullScreenIcon', function (e) {
                var t = e.isFullscreen,
                  n = (e.style, $.hidden),
                  r = $.shown
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(D.a, { style: t ? n : r }),
                  a.a.createElement(I.a, { style: t ? r : n }),
                )
              }),
              S()(b()(r), '_requestFullScreen', function (e) {
                return function () {
                  e.fullScreen(r.props.containerRef)
                }
              }),
              S()(b()(r), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              S()(
                b()(r),
                '_getScrubToFraction',
                Object(k.a)(function (e) {
                  return function (t) {
                    return Object(L.l)(e, t)
                  }
                }),
              ),
              S()(b()(r), '_renderScrubber', function (e) {
                return r.props.showScrubber && r.state.showScrubber
                  ? a.a.createElement(
                      B.a,
                      { style: K.g.scrubber },
                      a.a.createElement(E.a, { periodic: !0 }, function (t) {
                        var n = t.playerState
                        return a.a.createElement(R, {
                          accessibilityLabel: U,
                          currentTime: Object(L.e)(n),
                          duration: Object(L.h)(n),
                          getScrubToFraction: r._getScrubToFraction(n),
                          isScrubbing: n.isScrubbing,
                          isSeeking: n.isSeeking,
                          playerApi: e,
                        })
                      }),
                    )
                  : null
              }),
              S()(b()(r), '_renderVolume', function (e, t) {
                var n = t.isMuted,
                  o = t.volume,
                  i = e.mute,
                  c = e.setVolume,
                  u = e.unmute,
                  s = r.state,
                  l = s.containerHeight,
                  d = s.currentBreakpoint,
                  f = n ? u : i,
                  b = n ? W.g : W.c
                return a.a.createElement(A.a, {
                  accessibilityLabelIcon: b,
                  accessibilityLabelSlider: W.h,
                  containerHeight: l,
                  isMuted: n,
                  onHideSlider: r._showScrubberHandler(!0),
                  onMuteToggle: f,
                  onShowSlider: r._showScrubberHandler(!1),
                  onSliderChange: r._setVolumePercent(c),
                  size: Q(d) ? 'xSmall' : 'medium',
                  volumePercent: 100 * o,
                })
              }),
              S()(b()(r), '_renderCaptionsButton', function (e, t) {
                var n = Object(L.f)(t)
                if (n && n.hasCaptions) {
                  var o = r.state.currentBreakpoint,
                    i = t.areCaptionsShown,
                    c = e.toggleCaptions
                  return a.a.createElement(g.b, {
                    accessibilityLabel: i ? G : q,
                    hoverLabelWithExtraSpace: r.props.showScrubber,
                    icon: i ? a.a.createElement(V.a, null) : a.a.createElement(N.a, null),
                    onPress: c,
                    size: Q(o) ? 'xSmall' : 'medium',
                    testID: 'captions',
                  })
                }
              }),
              S()(b()(r), '_renderTimePlayed', function () {
                return a.a.createElement(E.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    n = r.state.currentBreakpoint,
                    o = r._getTimestampValues(t)
                  if (!o) return null
                  var i = r._formatTimePlayed(c()(c()({}, o), {}, { isCompact: n === F.b.veryNarrow }))
                  return a.a.createElement(_.a, { style: Q(n) && { fontSize: M.a.theme.fontSizes.subtext2 } }, i)
                })
              }),
              S()(b()(r), '_getTimestampValues', function (e) {
                var t,
                  n = e.controls,
                  r = e.isSeeking,
                  a = n.playbackTimeRange,
                  o = n.scrubToFraction,
                  i = Object(L.j)(Object(L.f)(e)),
                  c = Object(L.h)(e)
                return i && c
                  ? r && void 0 !== o && i
                    ? {
                        duration: c,
                        currentTime: o * i - (null !== (t = null == a ? void 0 : a.startTimeS) && void 0 !== t ? t : 0),
                      }
                    : { duration: c, currentTime: Object(L.e)(e) }
                  : null
              }),
              S()(b()(r), '_formatTimePlayed', function (e) {
                var t = e.currentTime,
                  n = e.duration,
                  r = n - t
                return e.isCompact
                  ? ''.concat(Object(L.b)(Math.round(r)))
                  : ''.concat(Object(L.b)(Math.round(t)), ' / ').concat(Object(L.b)(Math.round(n)))
              }),
              S()(b()(r), '_showScrubberHandler', function (e) {
                return function () {
                  return r.setState({ showScrubber: e })
                }
              }),
              S()(b()(r), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              S()(b()(r), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width,
                  n = r.state.currentBreakpoint,
                  a = r._convertWidthToBreakpoint(t)
                a !== n &&
                  r.setState(function (e) {
                    return { currentBreakpoint: a }
                  })
              }),
              S()(b()(r), '_convertWidthToBreakpoint', function (e) {
                var t
                return (
                  e > F.a.wide
                    ? (t = F.b.wide)
                    : e < F.a.veryNarrow
                    ? (t = F.b.veryNarrow)
                    : e < F.a.narrow && (t = F.b.narrow),
                  t
                )
              }),
              e.containerRef)
            ) {
              var o = e.containerRef.getBoundingClientRect(),
                i = o.height,
                u = o.width
              r.state = c()(
                c()({}, r.state),
                {},
                { currentBreakpoint: r._convertWidthToBreakpoint(u), containerHeight: i },
              )
            }
            return r
          }
          return (
            d()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.hideControls,
                      r = t.playerApi,
                      i = t.playerState
                    return r && i
                      ? a.a.createElement(o.a.ObserverContext.Consumer, null, function (t) {
                          return a.a.createElement(
                            B.a,
                            { onLayout: e._handleLayout, pointerEvents: 'auto', ref: e._parentRef, style: K.e },
                            a.a.createElement(w.a, {
                              actionButton: e._renderActionButton(r, i),
                              displayDismissableControls: !n,
                              rightContent: a.a.createElement(
                                a.a.Fragment,
                                null,
                                e._renderTimePlayed(),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: J.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderCaptionsButton(r, i),
                                ),
                                e._renderVolume(r, i),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: J.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderFullScreenButton(r, i),
                                ),
                              ),
                              scrubber: e._renderScrubber(r),
                            }),
                          )
                        })
                      : null
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return e.hideControls ? c()(c()({}, t), {}, { showScrubber: !0 }) : t
                  },
                },
              ],
            ),
            n
          )
        })(a.a.PureComponent)
      S()(X, 'defaultProps', { showScrubber: !0 })
      var Z = X,
        $ = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } },
        ee = function (e) {
          var t = e.playerApi,
            n = e.playerState
          return a.a.createElement(B.a, {
            onClick: function () {
              null != n && n.isPlaying ? t.pause() : t.play()
            },
            style: M.a.absoluteFill,
          })
        }
      t.a = function (e) {
        var t = e.containerRef,
          n = e.hideControls,
          r = e.playerApi,
          i = e.playerState,
          c = e.showScrubber
        return r && i && t
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(ee, { playerApi: r, playerState: i }),
              a.a.createElement(
                o.a,
                null,
                a.a.createElement(Z, {
                  containerRef: t,
                  hideControls: n,
                  playerApi: r,
                  playerState: i,
                  showScrubber: c,
                }),
              ),
            )
          : null
      }
    },
    BVo1: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return a
      }),
        n.d(t, 'd', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'a', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return u
        }),
        n.d(t, 'f', function () {
          return s
        })
      var r = n('rHpw').a.create(function (e) {
          return {
            root: { writingDirection: 'ltr', position: 'absolute', bottom: 0, cursor: 'auto', width: '100%' },
            container: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2 },
            absoluteContainer: {
              paddingHorizontal: e.spaces.space4,
              paddingBottom: e.spaces.space2,
              width: '100%',
              position: 'absolute',
              minHeight: '100%',
            },
            scrubber: { paddingLeft: e.spaces.space4, paddingRight: e.spaces.space4 },
            bottomBar: { width: '100%', justifyContent: 'space-between' },
            actionContainer: { minHeight: e.spaces.space40 },
            flex: { flex: 1 },
            flexShrink: { flexShrink: 1 },
            flexRow: { alignItems: 'center', flexDirection: 'row' },
            rightContainer: { justifyContent: 'flex-end' },
            leftContainer: { justifyContent: 'flex-start', flexGrow: 1 },
            controlContainer: { flexDirection: 'row', paddingHorizontal: e.spaces.space4 },
            controlsBottomOffset: { paddingBottom: e.spaces.space2 },
            withMargin: { marginHorizontal: e.spaces.space2, paddingHorizontal: e.spaces.space2 },
            skipButtonAffordance: { opacity: 0 },
            skipAdText: { fontVariant: ['tabular-nums'] },
          }
        }),
        a = r.root,
        o = r.container,
        i = [r.flexRow, r.bottomBar],
        c = [r.actionContainer, r.leftContainer, r.flexShrink, r.flexRow],
        u = [r.actionContainer, r.rightContainer, r.flexRow],
        s = r.skipAdText
      t.g = r
    },
    EOJ2: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__DANGEROUS_IMPORT_VIDEOPLAYER__', function () {
          return h
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('epkG'),
        u = n('62wY'),
        s = n('/run'),
        l = n('Zl35'),
        d = n('3i3o'),
        f = new c.a()
      function b(e) {
        var t,
          n,
          r = e.mediaFile,
          o = e.mediaId,
          c = e.subtitles,
          b = e.trimData,
          h = e.variants,
          m = i.a.useState(null),
          v = a()(m, 2),
          p = v[0],
          y = v[1],
          S = 1e3 * r.duration,
          E =
            (null == c || null === (t = c.upload) || void 0 === t ? void 0 : t.mediaFile) instanceof u.b
              ? c.upload.mediaFile.vtt
              : void 0
        if (E) {
          var w = document.createElement('track')
          ;(w.default = !0),
            (w.label = (null == c ? void 0 : c.displayName) || ''),
            (w.lang = (null == c ? void 0 : c.lang) || ''),
            (w.src = E),
            (w.kind = 'subtitles'),
            (n = document.createElement('video')).appendChild(w)
        }
        return (
          i.a.useEffect(
            function () {
              if (p && b) {
                var e = b.startTime || 0,
                  t = b.endTime || r.duration
                p.scrubToFraction(e / r.duration), p.setPlaybackTimeRange({ startTimeS: e, endTimeS: t })
              }
            },
            [r.duration, b, p],
          ),
          i.a.createElement(
            l.b,
            {
              aspectRatio: r.width / r.height,
              basePlayerClass: s.a,
              configType: 'static',
              contentId: o,
              contentType: 'media_entity',
              durationMs: S,
              httpClient: f,
              initiallyMuted: !0,
              key: E,
              loop: !0,
              onApiReady: y,
              playerId: 'composer_media_preview',
              poster: r.thumbnail,
              size: 'fill',
              variants: h,
              videoEl: n,
            },
            function (e) {
              var t = e.containerRef,
                n = e.playerApi,
                r = e.playerState
              return i.a.createElement(d.a, { containerRef: t, playerApi: n, playerState: r, showScrubber: !0 })
            },
          )
        )
      }
      var h = b
      t.default = b
    },
    'IE/l': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('USG3'),
        i = n('aNKf'),
        c = n('rHpw'),
        u = n('MWbm'),
        s = n('BVo1')
      t.a = function (e) {
        var t = e.actionButton,
          n = e.displayDismissableControls,
          r = void 0 === n || n,
          l = e.leftContent,
          d = e.rightContent,
          f = e.scrubber,
          b = e.skipButton
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            o.a,
            { show: r },
            a.a.createElement(i.a, {
              colors: [c.a.theme.colors.transparent, c.a.theme.colors.translucentBlack77],
              style: s.g.absoluteContainer,
            }),
          ),
          a.a.createElement(
            u.a,
            { style: s.g.controlContainer },
            a.a.createElement(
              u.a,
              { style: s.g.flex },
              a.a.createElement(
                o.a,
                { show: r },
                a.a.createElement(
                  u.a,
                  { style: s.g.controlsBottomOffset },
                  f,
                  a.a.createElement(
                    u.a,
                    { style: s.c },
                    a.a.createElement(
                      u.a,
                      { style: s.a },
                      t,
                      a.a.createElement(u.a, { style: [s.g.flexRow, s.g.flexShrink] }, l),
                    ),
                    a.a.createElement(u.a, { style: s.b }, d),
                  ),
                ),
              ),
            ),
            b && a.a.createElement(u.a, { style: s.g.controlsBottomOffset }, b),
          ),
        )
      }
    },
    N2PN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        u = n.n(c),
        s = n('/yvb'),
        l = n('gK2g'),
        d = ['hoverLabelPreferredHorizontalOrientation', 'hoverLabelWithExtraSpace'],
        f = ['icon', 'onPress', 'scribeNamespace', 'size', 'testID'],
        b = function (e) {
          e.hoverLabelPreferredHorizontalOrientation, e.hoverLabelWithExtraSpace
          var t = i()(e, d),
            n = e.accessibilityLabel
              ? {
                  label: e.accessibilityLabel,
                  preferredVerticalOrientation: 'up',
                  preferredHorizontalOrientation: e.hoverLabelPreferredHorizontalOrientation,
                  withLayer: !1,
                  withExtraSpace: e.hoverLabelWithExtraSpace,
                }
              : void 0
          return u.a.createElement(s.a, a()({}, t, { hoverLabel: n, size: e.size || 'medium', type: 'onMediaText' }))
        },
        h = function (e) {
          var t = e.icon,
            n = e.onPress,
            r = e.scribeNamespace,
            o = e.size,
            c = e.testID,
            s = i()(e, f),
            d = l.a.useAnalytics()
          return u.a.createElement(
            b,
            a()({}, s, {
              icon: t,
              onPress: function (e) {
                n && n(e), d.scribe(r)
              },
              size: o,
              testID: c,
            }),
          )
        }
      t.b = b
    },
    NnQ9: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        u = n('shC7'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style, u.a.getConstants().isRTL && c.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M3.5 19.44v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.81c0 .414.336.75.75.75h5.81c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4l6.577-6.576c.146-.146.22-.338.22-.53s-.073-.384-.22-.53c-.293-.293-.768-.293-1.06 0L3.5 19.44zM14.69 2.75c0 .414.336.75.75.75h4l-6.577 6.576c-.293.293-.293.768 0 1.06s.768.294 1.06 0L20.5 4.562v4c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75h-5.81c-.414 0-.75.336-.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    Q0n6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      }),
        n.d(t, 'o', function () {
          return E
        }),
        n.d(t, 'i', function () {
          return _
        }),
        n.d(t, 'e', function () {
          return T
        }),
        n.d(t, 'j', function () {
          return k
        }),
        n.d(t, 'h', function () {
          return L
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return P
        }),
        n.d(t, 'l', function () {
          return x
        }),
        n.d(t, 'm', function () {
          return R
        }),
        n.d(t, 'f', function () {
          return M
        }),
        n.d(t, 'n', function () {
          return B
        }),
        n.d(t, 'k', function () {
          return A
        }),
        n.d(t, 'c', function () {
          return F
        }),
        n.d(t, 'b', function () {
          return W
        })
      n('7xRU'), n('hBpG'), n('7x/C'), n('2G9S')
      var r = n('kCRK'),
        a = n('855f'),
        o = n('3XMw'),
        i = n.n(o),
        c = i.a.i3b7a017,
        u = i.a.ie5d110e,
        s = i.a.df5f11b3,
        l = i.a.a7cd5cf4,
        d = i.a.b6eb8f69,
        f = i.a.dcc2b9b2,
        b = i.a.hf4ffd4d,
        h = i.a.f6e90cd6,
        m = i.a.e7d191ec,
        v = i.a.h1888a33,
        p = i.a.c58b2ab7,
        y = function (e) {
          return 'number' == typeof e ? Object(a.c)(e) : e
        },
        S = function (e) {
          var t = e.viewCount,
            n = e.viewerCount
          return t || 0 === t ? p({ viewCount: y(t) }) : n || 0 === n ? v({ viewerCount: y(n) }) : null
        },
        E = function (e) {
          return e
            ? (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.durationSeconds,
                  n = e.isBroadcast,
                  r = e.isLive,
                  a = e.timecode,
                  o = e.videoTrack,
                  i = [],
                  c = n || r ? d : l,
                  u = r ? b : f
                if ((i.push(u({ locVideoType: c })), 'number' == typeof t && t && !r)) {
                  var s = w(t),
                    v = s.hoursWord,
                    p = s.minutesWord,
                    y = s.secondsWord
                  i.push(h({ hoursWord: v, minutesWord: p, secondsWord: y }))
                }
                if ('number' == typeof a && a) {
                  var E = w(a),
                    g = E.hoursWord,
                    _ = E.minutesWord,
                    C = E.secondsWord
                  i.push(m({ hoursWord: g, minutesWord: _, secondsWord: C }))
                }
                var T = o && S(o)
                return T && i.push(T), i.join('. ')
              })({
                isLive: e.isLive,
                isBroadcast: e.contentType === r.a.BROADCAST,
                durationSeconds: P(e),
                timecode: A(e),
                videoTrack: e,
              })
            : ''
        },
        w = function (e) {
          var t = z(e),
            n = t.hours,
            r = t.minutes,
            a = t.seconds,
            o = { hoursWord: '', minutesWord: '', secondsWord: '' }
          return 0 === a && 0 === r && 0 === n && 0 === r
            ? ((o.secondsWord = c(0)), o)
            : ((o.hoursWord = n > 0 ? s(n) : ''),
              (o.minutesWord = r > 0 ? u(r) : ''),
              (o.secondsWord = a > 0 ? c(a) : ''),
              o)
        },
        g = function (e, t, n) {
          return Math.max(Math.min(e, n), t)
        },
        _ = function (e) {
          return e ? (e.currentTimeMs || 0) / 1e3 : void 0
        },
        C = function (e) {
          return e.endTimeS - e.startTimeS
        },
        T = function (e) {
          var t,
            n = null == e || null === (t = e.controls) || void 0 === t ? void 0 : t.playbackTimeRange,
            r = M(e),
            a = _(r)
          if (void 0 === a) return 0
          if (!n) return a
          var o = a - n.startTimeS
          return g(o, 0, C(n))
        },
        k = function (e) {
          return e ? (e.durationMs || 0) / 1e3 : void 0
        },
        L = function (e) {
          var t,
            n = null == e || null === (t = e.controls) || void 0 === t ? void 0 : t.playbackTimeRange,
            r = M(e),
            a = k(r)
          return a ? (n ? C(n) : a) : 0
        },
        O = function (e) {
          var t = _(e)
          return t && Math.round(t)
        },
        P = function (e) {
          var t = k(e)
          return t && Math.round(t)
        },
        x = function (e, t) {
          var n,
            r,
            a,
            o = k(M(e))
          if (o) {
            var i =
              null !==
                (n =
                  null == e ||
                  null === (r = e.controls) ||
                  void 0 === r ||
                  null === (a = r.playbackTimeRange) ||
                  void 0 === a
                    ? void 0
                    : a.startTimeS) && void 0 !== n
                ? n
                : 0
            return g((i + t) / o, 0, 1)
          }
        },
        R = function (e) {
          return e.tracks.find(function (e) {
            return 0 === e.id
          })
        },
        M = function (e) {
          return e.tracks.find(function (t) {
            return t.id === e.currentTrackId
          })
        },
        B = function (e) {
          return e.controls && e.controls.isPosterShown ? R(e) : M(e)
        },
        A = function (e) {
          if (e) {
            var t = e.requestedTimecode
            return t && t > 0 ? t : e.replayEditedStartTime
          }
        },
        F = function (e) {
          return W(Math.round(e / 1e3))
        },
        W = function (e) {
          var t = z(e),
            n = t.hours,
            r = t.minutes,
            a = t.seconds,
            o = a < 10 ? '0'.concat(a) : a,
            i = r < 10 && n ? '0'.concat(r) : r
          return n ? ''.concat(n, ':').concat(i, ':').concat(o) : ''.concat(i, ':').concat(o)
        },
        z = function (e) {
          return { hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) }
        }
    },
    USG3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = n('ERkP'),
        u = n.n(c),
        s = {
          transitionDuration: '250ms',
          transitionProperty: 'opacity, height',
          transitionTimingFunction: 'ease',
          willChange: 'opacity',
        }
      function l(e) {
        var t = e.children,
          n = e.show,
          r = u.a.useState(!n),
          o = i()(r, 2),
          c = o[0],
          l = o[1]
        return (
          u.a.useEffect(
            function () {
              n && c && l(!1)
            },
            [c, n],
          ),
          u.a.useMemo(
            function () {
              var e = a()(a()({}, s), {}, { opacity: n ? 1 : 0 })
              return u.a.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    n || c || l(!0)
                  },
                  style: e,
                },
                c ? null : t,
              )
            },
            [t, n, c],
          )
        )
      }
    },
    c8Oq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return c
        })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        i = (n('yH/f'), Object.freeze({ wide: 'wide', narrow: 'narrow', veryNarrow: 'veryNarrow' })),
        c = Object.freeze(((r = {}), o()(r, i.wide, 500), o()(r, i.narrow, 285), o()(r, i.veryNarrow, 200), r))
    },
    dPHj: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = function (e) {
          return a.a.createElement(
            o.b,
            { color: 'white', numberOfLines: 1, style: [c.withMargin, e.style] },
            e.children,
          )
        },
        c = n('rHpw').a.create(function (e) {
          return { withMargin: { marginHorizontal: e.spaces.space4 } }
        })
      t.a = a.a.memo(i)
    },
    hhMf: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
        s = n('1Pcy'),
        l = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        b = n('2VqO'),
        h = n.n(b),
        m = n('KEM+'),
        v = n.n(m),
        p =
          (n('lTEL'),
          n('7x/C'),
          n('LqLs'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('DfhM'),
          n('+KXO'),
          n('849X'),
          n('TJCb'),
          n('jwue'),
          n('+oxZ'),
          n('ERkP')),
        y = n.n(p),
        S = n('6fxz'),
        E = 'click',
        w = 'focused',
        g = 'mousemove',
        _ = 'mouseover',
        C = 'touch',
        T = function (e, t) {
          return function (n) {
            var r = n.observed
            return r[e].add(t), { observed: r }
          }
        },
        k = function (e, t) {
          return function (n) {
            var r = n.observed
            return r[e].delete(t), { observed: r }
          }
        },
        L = y.a.createContext({
          observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() },
          Observer: function () {
            return null
          },
        }),
        O = y.a.createContext(function () {
          return null
        }),
        P = (function (e) {
          f()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(l()(e), '_timeoutCollection', { click: {}, focused: {}, mousemove: {}, mouseover: {}, touch: {} }),
              v()(l()(e), '_interactionWatcherRefs', {}),
              v()(l()(e), 'state', {
                observed: {
                  click: new Set(),
                  focused: new Set(),
                  mousemove: new Set(),
                  mouseover: new Set(),
                  touch: new Set(),
                },
              }),
              v()(l()(e), 'getContext', function () {
                return { observed: e.state.observed, Observer: e._renderObserver }
              }),
              v()(l()(e), 'hasActiveInteractionWatcherChildren', function () {
                return !Object.keys(e._interactionWatcherRefs).every(function (t) {
                  var n = e._interactionWatcherRefs[t]
                  return !n || !n.contains(document.activeElement)
                })
              }),
              v()(l()(e), '_renderObserver', function (t) {
                var n = t.children,
                  r = t.interactionKey,
                  o = t.click,
                  i = t.focus,
                  c = t.mousemove,
                  u = t.mouseover,
                  s = t.touch,
                  l = t.interactionTimeoutMs,
                  d = void 0 === l ? 2e3 : l,
                  f = {}
                return (
                  o && (f.onClick = e._handleClick(r, d)),
                  i && ((f.onBlur = e._handleBlur(r, d)), (f.onFocus = e._handleActive(r))),
                  c && (f.onMouseMove = e._handleMouseMove(r, d)),
                  u && ((f.onMouseEnter = e._handleMouseEnter(r)), (f.onMouseLeave = e._handleMouseLeave(r))),
                  s && ((f.onTouchStart = e._handleTouchStart(r)), (f.onTouchEnd = e._handleTouchEnd(r, d))),
                  y.a.createElement(
                    'div',
                    a()({}, f, {
                      ref: function (t) {
                        if (!r) throw new Error('Observer requires an `interactionKey` prop for storing refs.')
                        e._interactionWatcherRefs[r] = t
                      },
                    }),
                    n,
                  )
                )
              }),
              v()(l()(e), '_handleMouseEnter', function (t) {
                return function () {
                  e.setState(T(_, t))
                }
              }),
              v()(l()(e), '_handleMouseLeave', function (t) {
                return function () {
                  e.setState(k(_, t))
                }
              }),
              v()(l()(e), '_handleTouchStart', function (t) {
                return function () {
                  e.setState(T(C, t))
                }
              }),
              v()(l()(e), '_handleTouchEnd', function (t, n) {
                return function () {
                  var r = C
                  clearTimeout(e._timeoutCollection[r][t]),
                    n
                      ? (e._timeoutCollection[r][t] = setTimeout(function () {
                          return e.setState(k(r, t))
                        }, n))
                      : e.setState(k(r, t))
                }
              }),
              v()(l()(e), '_handleMouseMove', function (t, n) {
                return function () {
                  var r = g
                  e.state.observed[r].has(t) || e.setState(T(r, t)),
                    clearTimeout(e._timeoutCollection[r][t]),
                    (e._timeoutCollection[r][t] = setTimeout(function () {
                      return e.setState(k(r, t))
                    }, n))
                }
              }),
              v()(l()(e), '_handleClick', function (t, n) {
                return function () {
                  var r = E
                  e.state.observed[r].has(t) || e.setState(T(r, t)),
                    clearTimeout(e._timeoutCollection[r][t]),
                    (e._timeoutCollection[r][t] = setTimeout(function () {
                      return e.setState(k(r, t))
                    }, n))
                }
              }),
              v()(l()(e), '_handleActive', function (t) {
                return function () {
                  var n = w
                  clearTimeout(e._timeoutCollection[n][t])
                  var r = e.hasActiveInteractionWatcherChildren()
                  S.a.hadKeyboardEvent && r && e.setState(T(n, t))
                }
              }),
              v()(l()(e), '_handleBlur', function (t, n) {
                return function () {
                  var r = w
                  clearTimeout(e._timeoutCollection[r][t]),
                    e.state.observed[r].has(t) && (e._timeoutCollection[r][t] = setTimeout(e._handleFocusReset(t), n))
                }
              }),
              v()(l()(e), '_handleFocusReset', function (t) {
                return function () {
                  var n = w
                  e.setState(k(n, t)), clearTimeout(e._timeoutCollection[n][t])
                }
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this
                  Object.keys(this._timeoutCollection).forEach(function (t) {
                    var n = e._timeoutCollection[t]
                    Object.keys(n).forEach(function (e) {
                      clearTimeout(n[e])
                    })
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.children
                  if (!e) throw new Error('component requires children prop.')
                  var t = this._renderObserver
                  return y.a.createElement(
                    n.ObserverContext.Provider,
                    { value: t },
                    y.a.createElement(n.Context.Provider, { value: this.getContext() }, e),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(P, 'Context', L), v()(P, 'ObserverContext', O)
    },
    kCRK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'd', function () {
          return a
        }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        })
      var r = { VISIT: 'url', WATCH: 'watch' },
        a = { watch_now: 'watch_now', visit_site: 'visit_site', shop: 'shop', see_more: 'see_more', go_to: 'go_to' },
        o = { MEDIA: 'media_entity', GIF: 'gif', VMAP: 'vmap', BROADCAST: 'broadcast' },
        i = { AD: 'ad', CONTENT: 'content' },
        c = { BROADCAST: 'broadcast', DM: 'dm', TWEET: 'tweet' }
    },
    p6DB: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        u = n('shC7'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style, u.a.getConstants().isRTL && c.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M3.983 13.605c0 .414.336.75.75.75H8.57l-6.357 6.357c-.297.297-.297.777 0 1.074s.777.297 1.074 0l6.357-6.357v3.828c0 .414.336.75.75.75s.75-.336.75-.75v-5.653c0-.414-.336-.75-.75-.75h-5.66c-.415 0-.75.336-.75.75zm16.73-11.392L14.355 8.57V4.74c0-.413-.336-.75-.75-.75s-.75.337-.75.75v5.654c0 .414.336.75.75.75h5.653c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H15.43l6.357-6.357c.148-.148.223-.343.223-.537s-.074-.39-.223-.537c-.297-.297-.777-.297-1.074 0z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    wtsM: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return o
      }),
        n.d(t, 'f', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'g', function () {
          return s
        }),
        n.d(t, 'h', function () {
          return l
        }),
        n.d(t, 'a', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return f
        })
      var r = n('3XMw'),
        a = n.n(r),
        o = a.a.fb236727,
        i = a.a.e9bd453e,
        c = a.a.f17dfdb5,
        u = a.a.ec8ab8b4,
        s = a.a.b8b6344a,
        l = a.a.c9a642f9,
        d = a.a.c27e60bf,
        f = a.a.d2969f1f
    },
  },
])
//# sourceMappingURL=WIPED
