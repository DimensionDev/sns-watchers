;(window.webpackJsonp = window.webpackJsonp || []).push([
  [205],
  {
    '64vW': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = n.createContext({ heightsReady: !0 })
      t.a = a
    },
    QHXq: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'InlinePlayerContainer', function () {
          return be
        })
      r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('97Jx'),
        a = r.n(n),
        i = r('m3Bd'),
        o = r.n(i),
        l = r('VrFO'),
        s = r.n(l),
        c = r('Y9Ll'),
        u = r.n(c),
        p = r('1Pcy'),
        d = r.n(p),
        y = r('5Yy7'),
        f = r.n(y),
        h = r('N+ot'),
        _ = r.n(h),
        v = r('AuHH'),
        m = r.n(v),
        b = r('KEM+'),
        P = r.n(b),
        g = (r('hBpG'), r('ERkP')),
        I = r('6rlp'),
        w = r('H9MA'),
        C = r('RqPI'),
        A = r('yr4d'),
        O = r('XOJV'),
        R = r('rxPX'),
        k = r('0KEI'),
        E = r('eXeu'),
        S = function () {
          return function (e, t, r) {
            return r.api.getHttpClient()
          }
        },
        T = function (e, t) {
          var r = t.source && t.source.videoId
          return r && 'tweet' === r.type ? r.id : void 0
        },
        j = Object(R.a)()
          .propsFromState(function () {
            return { dataSaverMode: w.c, language: C.o, sourceTweet: O.a.createHydratedTweetSelector(T) }
          })
          .adjustStateProps(function (e) {
            var t = e.dataSaverMode,
              r = e.language,
              n = e.sourceTweet
            return {
              dataSaverMode: t,
              language: r,
              mediaAvailability: (n && Object(E.c)(n)) || void 0,
              publisherId: n ? Object(E.d)(n) : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'INLINE_PLAYER_CONTAINER',
              ),
              getTwitterAuthedHttpClient: S,
              logPromotedVideoEvent: I.b,
              tweetAdProvider: A.b,
            }
          })
          .withAnalytics(),
        H = (r('z84I'), r('6v1f')),
        F = r('ZeN/'),
        L = r('rHpw'),
        D = r('MWbm'),
        M = function (e) {
          e.stopPropagation()
        },
        x = function (e) {
          var t = e.children,
            r = e.testID
          return g.createElement(D.a, { onClick: M, style: L.a.absoluteFill, testID: r }, t)
        },
        V = r('epkG'),
        B = r('mN6z'),
        U = (r('2G9S'), r('gZV8')),
        N = r('ylrv'),
        z = (function () {
          function e(t, r, n) {
            s()(this, e), (this.placement = t), (this.obstructions = r), (this.layerId = n)
          }
          return (
            u()(e, [
              {
                key: 'getPositionData',
                value: function () {
                  return {
                    percentVisible: this.visibleFraction(),
                    percentOfViewportOccupied: this.placement.viewportOccupiedFraction(),
                    sizesInfo: { viewportSize: this.placement.viewport, mediaSize: this.placement.item },
                  }
                },
              },
              {
                key: 'visibleFraction',
                value: function () {
                  var e = this.placement.visiblePart()
                  if (!e) return 0
                  var t = this.layerId
                      ? this.obstructions.getObstructionAboveLayer(this.layerId, e)
                      : this.obstructions.getTotalObstruction(e),
                    r = N.a.area(this.placement.item),
                    n = (1 - t) * N.a.area(e)
                  return r > 0 ? n / r : 0
                },
              },
              {
                key: 'top',
                value: function () {
                  return this.placement.item.top
                },
              },
              {
                key: 'distanceToCenter',
                value: function () {
                  return this.placement.verticalDistanceToViewportCenter()
                },
              },
              {
                key: 'distanceToTop',
                value: function () {
                  return this.placement.verticalDistanceToViewportTop()
                },
              },
              {
                key: 'scrollY',
                value: function () {
                  return this.placement.scrollY
                },
              },
            ]),
            e
          )
        })(),
        q = r('vF3p'),
        W = r('S4UJ')
      function G(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return _()(this, r)
        }
      }
      var J = (function (e) {
        f()(r, e)
        var t = G(r)
        function r() {
          var e
          s()(this, r)
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            P()(d()(e), '_handlePlacementChange', function (t) {
              e._updateAndNotify({ placement: t }, e.props.onChange)
            }),
            P()(d()(e), '_handleObstructionChange', function () {
              var t = e.props,
                r = t.obstructionDetection,
                n = t.onChange
              e._updateAndNotify({ obstructions: r.getObstructions() }, n)
            }),
            P()(d()(e), '_setPlacementRef', function (t) {
              e._placementRef = t
            }),
            e
          )
        }
        return (
          u()(r, [
            {
              key: 'sample',
              value: function (e) {
                var t = this
                this._placementRef &&
                  this._placementRef.sample(function (r) {
                    t._updateAndNotify({ placement: r }, e)
                  })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  r = e.style
                return g.createElement(
                  U.e,
                  {
                    onPlacementChange: this._handlePlacementChange,
                    ref: this._setPlacementRef,
                    style: r,
                    withScrollListener: !0,
                  },
                  t,
                )
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props.obstructionDetection
                this._obstructionSubscription = e.subscribe(this._handleObstructionChange)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._obstructionSubscription &&
                  (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0))
              },
            },
            {
              key: '_updateAndNotify',
              value: function (e, t) {
                var r = this,
                  n = e.obstructions,
                  a = e.placement,
                  i = this.props,
                  o = i.layerId,
                  l = i.obstructionDetection
                ;(this._placement = a || this._placement),
                  (this._obstructions = n || this._obstructions || l.getObstructions()),
                  this._placement
                    ? t(new z(this._placement, this._obstructions, o))
                    : this._placementRef &&
                      this._placementRef.sample(function (e) {
                        ;(r._placement = e),
                          (r._obstructions = r._obstructions || l.getObstructions()),
                          t(new z(e, r._obstructions, o))
                      })
              },
            },
          ]),
          r
        )
      })(g.Component)
      P()(J, 'defaultProps', { obstructionDetection: q.a })
      var X = Object(W.a)(J),
        Y = r('efbI'),
        Z = r('mf9H'),
        K = r('zHh/'),
        Q = 'videoPlayer',
        $ = r('v/3V'),
        ee = r('aITJ'),
        te = r('Zl35'),
        re = r('9Xij'),
        ne = r('HT/6'),
        ae = r('v6aA'),
        ie = r('iOGT')
      function oe(e, t) {
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
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? oe(Object(r), !0).forEach(function (t) {
                P()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : oe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return _()(this, r)
        }
      }
      var ce = new V.a({}),
        ue = (function (e) {
          f()(r, e)
          var t = se(r)
          function r(e, n) {
            var i
            s()(this, r),
              (i = t.call(this, e, n)),
              P()(d()(i), '_emitter', null),
              P()(d()(i), '_playerInternal', null),
              P()(d()(i), '_placementRef', null),
              P()(d()(i), '_isLooping', !1),
              P()(d()(i), '_isPlayerFullscreen', !1),
              P()(d()(i), '_renderHorizonPlayer', function (e) {
                var t = i.props,
                  r = t.accessibilityLabel,
                  n = t.analytics,
                  o = t.aspectRatio,
                  l = t.displayOptions,
                  s = t.durationMs,
                  c = t.geolocationPrompt,
                  u = t.includeBroadcastEventAssociation,
                  p = t.intentToPlayTime,
                  d = t.language,
                  y = t.mediaAvailability,
                  f = t.noAuthHttpClient,
                  h = t.playerId,
                  _ = t.publisherId,
                  v = t.source,
                  m = v.contentId,
                  b = v.eventId,
                  P = v.videoId,
                  I = v.vmapUrl,
                  w = t.timecode,
                  C = t.twitterAuthedHttpClient,
                  A = t.uiStack,
                  O = t.videoEl,
                  R = t.videoPlayer,
                  k = t.viewCount
                return g.createElement(Y.a.Consumer, null, function (t) {
                  var v = t.prerollDisplayLocation
                  return g.createElement(
                    te.b,
                    a()(
                      {
                        accessibilityLabel: r,
                        adProvider: i._tweetAdProvider(v),
                        analytics: n,
                        aspectRatio: o,
                        basePlayerClass: R,
                        configType: 'static',
                        contentId: m,
                        cta: i._getPlayerCTA(),
                        disableHls: i._disableHls,
                        durationMs: s,
                        enableVideoPlayerCaptionRendering: !0,
                        eventId: b,
                        featureProvider: i.context.featureSwitches,
                        geolocationPrompt: c,
                        httpClient: f,
                        includeBroadcastEventAssociation: u,
                        initiallyMutedCaptions: !0,
                        intentToPlayTime: p,
                        language: d,
                        mediaAvailability: y,
                        objectFitVideo: l && l.objectFitVideo,
                        onApiReady: i._handleApiReady,
                        playbackSessionId: P.id,
                        playerId: h,
                        precache: i._shouldAutoplay,
                        publisherId: _,
                        requestedTimecode: w,
                        twitterAuthedHttpClient: C,
                        videoEl: O,
                        videoId: P,
                        viewCount: k,
                        vmapUrl: I,
                      },
                      e,
                    ),
                    A,
                  )
                })
              }),
              P()(d()(i), '_setPlayerApi', function (e) {
                var t = i.props,
                  r = t.customOverlay,
                  n = t.onMuteChange,
                  a = t.onSetPlayerApi
                'function' == typeof r && ((i._playerInternal = e), i.forceUpdate()),
                  n &&
                    (e.on('unmute', function () {
                      return n({ isPlayerMuted: !1 })
                    }),
                    e.on('mute', function () {
                      return n({ isPlayerMuted: !0 })
                    })),
                  e &&
                    (e.on('fullscreenEntered', function () {
                      return i._handleFullscreenChange({ isPlayerFullscreen: !0 })
                    }),
                    e.on('fullscreenExited', function () {
                      return i._handleFullscreenChange({ isPlayerFullscreen: !1 })
                    })),
                  i._setPlayerInternal(e),
                  a && a(e)
              }),
              P()(d()(i), '_getPlayerCTA', function () {
                var e = i.props,
                  t = e.cta,
                  r = e.promotedContent
                return (
                  t &&
                  le(
                    le({}, t),
                    {},
                    { url: Object($.a)(i.context.featureSwitches, t.url, null == r ? void 0 : r.click_tracking_info) },
                  )
                )
              }),
              P()(d()(i), '_handleApiReady', i._setPlayerApi),
              P()(d()(i), '_getLoopingThreshold', function () {
                var e = i.props,
                  t = e.loopingThresholdMs,
                  r = e.source.videoId
                return t || ('tweet' === r.type && 6e4) || 7e3
              }),
              P()(d()(i), '_handleAutoPlayRequest', function () {
                var e = i.props,
                  t = e.onAutoplay,
                  r = e.shouldAutoplayWithoutMuting
                i._playerInternal && (r ? i._playerInternal.play() : i._playerInternal.playPreview(), t && t())
              }),
              P()(d()(i), '_handlePauseRequest', function () {
                var e = i.props.onAutopause
                i._playerInternal && (i._playerInternal.pause(), e && e())
              }),
              P()(d()(i), '_handlePlacementChange', function (e) {
                i._emitter && !i._isPlayerFullscreen && i._emitter.signalPlacementChange(e),
                  i._playerInternal && !i._isPlayerFullscreen && i._playerInternal.updatePosition(e.getPositionData())
              }),
              P()(d()(i), '_handlePlaybackComplete', function () {
                var e = i.props.onPlaybackComplete
                i._emitter && i._emitter.signalPlaybackFinish(), e && e()
              }),
              P()(d()(i), '_handlePlaybackStarted', function () {
                i._emitter && i._emitter.signalPlay(), i.props.onPlaybackStarted && i.props.onPlaybackStarted()
              }),
              P()(d()(i), '_handlePlaybackPaused', function () {
                i._emitter && i._emitter.signalPause()
              }),
              P()(d()(i), '_handlePlayerState', function (e) {
                var t = i.props,
                  r = t.onPlayerState,
                  n = t.onProgressChange
                r && r(e)
                var a = (e.tracks || []).find(function (t) {
                  return t.id === e.currentTrackId
                })
                if (a) {
                  var o = (a.currentTimeMs || 0) / a.durationMs
                  n && n(o, e.tracksFinished)
                }
              }),
              P()(d()(i), '_handleError', function (e) {
                var t = i.props.onError,
                  r = e.error
                r
                  ? (i._emitter &&
                      (i._emitter.unregister(),
                      (i._emitter = void 0),
                      (i._hasInitialPlacementMeasurement = !1),
                      (i._lastPlayerError = r)),
                    e.errorInfo &&
                      !e.errorInfo.canRetry &&
                      (t && t(), i._onErrorUnsubscribe && i._onErrorUnsubscribe()))
                  : !i._emitter &&
                    i._lastPlayerError &&
                    (i._registerPlaybackCoordination(), i._submitInitialPlacement(), (i._lastPlayerError = void 0))
              }),
              P()(d()(i), '_handleFullscreenChange', function (e) {
                var t = i.context.viewport
                if (((i._isPlayerFullscreen = e.isPlayerFullscreen), t)) {
                  if ((t.temporarilySuppressScrollListeners(2e3), ee.b.isChrome() || ee.b.isSafari()))
                    if (i._isPlayerFullscreen) i._savedScrollPosition = { y: t.scrollY(), x: t.scrollX() }
                    else if (i._savedScrollPosition) {
                      var r = i._savedScrollPosition,
                        n = r.x,
                        a = r.y
                      ;(i._savedScrollPosition = void 0), t.scrollTo(n, a)
                    }
                  i._isPlayerFullscreen && i._playerInternal
                    ? i._playerInternal.updatePosition({
                        percentVisible: 1,
                        percentOfViewportOccupied: 1,
                        sizesInfo: { viewportSize: t.getRect2D(), mediaSize: t.getRect2D() },
                      })
                    : !i._isPlayerFullscreen && i._placementRef && i._placementRef.sample(i._handlePlacementChange)
                }
                var o = i.props.onFullscreenChange
                o && o(e), i._emitter && i._emitter.signalFullscreenChange(e.isPlayerFullscreen)
              }),
              P()(d()(i), '_registerPlaybackCoordination', function () {
                var e = i.props,
                  t = e.playbackCoordination,
                  r = e.playbackPriority,
                  n = {
                    onAutoPlayRequest: i._handleAutoPlayRequest,
                    onPauseRequest: i._handlePauseRequest,
                    canAutoplay: i._shouldAutoplay,
                    isLooping: i._isLooping,
                    playbackPriority: r,
                  }
                t && (i._emitter = t.register(n))
              }),
              P()(d()(i), '_setPlayerInternal', function (e) {
                if (((i._playerInternal = e), e)) {
                  var t = i.props,
                    r = t.onPlayerState,
                    n = t.onProgressChange
                  ;(r || n) && e.subscribe(i._handlePlayerState),
                    (i._onErrorUnsubscribe = e.subscribe(i._handleError)),
                    e.on('playbackComplete', i._handlePlaybackComplete),
                    e.on('play', i._handlePlaybackStarted),
                    e.on('pause', i._handlePlaybackPaused),
                    i._registerPlaybackCoordination(),
                    i._submitInitialPlacement()
                }
                if (i.props.setPlayer) {
                  var a = i._playerInternal && {
                    play: function () {
                      i._playerInternal && i._playerInternal.play()
                    },
                    pause: function () {
                      i._playerInternal && i._playerInternal.pause()
                    },
                    replay: function () {
                      i._playerInternal && i._playerInternal.replay()
                    },
                  }
                  i.props.setPlayer(a)
                }
              }),
              P()(d()(i), '_setPlacementAPI', function (e) {
                ;(i._placementRef = e), i._submitInitialPlacement()
              }),
              P()(d()(i), '_getTweetId', function () {
                var e = i.props.source.videoId
                if (e) {
                  if ('tweet' === e.type) return e.id
                  if ('broadcast' === e.type) return e.tweetId
                }
              }),
              P()(d()(i), '_tweetAdProvider', function (e) {
                var t = i._getTweetId()
                if (t)
                  return function () {
                    return i.props.tweetAdProvider(t, e)
                  }
              })
            var o = e.autoplay,
              l = e.forwardPivotInfo
            return (
              (i._disableHls = !(
                ee.b.isDesktopOS() ||
                (ee.b.isAndroid() && i.context.featureSwitches.isTrue('web_video_hls_android_mse_enabled'))
              )),
              (i._shouldAutoplay = Object(K.a)(o, l)),
              i
            )
          }
          return (
            u()(r, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.heightsReady,
                    n = t.playbackPriority
                  !e.heightsReady && r && this._submitInitialPlacement(),
                    !Object(B.a)(e.source, this.props.source) && this._emitter && this._emitter.reset(),
                    e.playbackPriority !== n &&
                      void 0 !== n &&
                      this._emitter &&
                      this._emitter.signalPlaybackPriorityChange(n, this._shouldAutoplay)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.aspectRatio
                  return g.createElement(
                    re.a,
                    { ratio: e, style: pe.aspectRatio },
                    g.createElement(
                      X,
                      { onChange: this._handlePlacementChange, ref: this._setPlacementAPI, style: L.a.absoluteFill },
                      this._renderPlayer(),
                    ),
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._emitter && (this._emitter.unregister(), (this._emitter = null)),
                    this._onErrorUnsubscribe && this._onErrorUnsubscribe()
                },
              },
              {
                key: '_renderPlayer',
                value: function () {
                  var e = this.props,
                    t = e.dataSaverMode,
                    r = e.durationMs,
                    n = e.forceLoop,
                    a = e.maxLoopCount,
                    i = e.poster,
                    o = e.promotedContent,
                    l = e.source.variants,
                    s = e.videoType,
                    c = 'animated_gif' === s,
                    u = 'vine' === s,
                    p = l && l.length ? (c ? 'gif' : 'media_entity') : 'vmap'
                  this._isLooping = !!(n || c || u || (r && r <= this._getLoopingThreshold()))
                  var d = {
                    bitrateCap: t ? F.a.MEDIUM : void 0,
                    contentType: p,
                    loop: this._isLooping,
                    maxLoopCount: this._isLooping ? a : void 0,
                    poster: i && i.url,
                    promotedContext:
                      o && (o.impression_id || o.disclosure_type)
                        ? { impressionId: o.impression_id, disclosureType: o.disclosure_type }
                        : void 0,
                    variants:
                      (l &&
                        Object(E.f)(
                          Object(ie.b)(l, t ? ie.a.MEDIUM : ie.a.HIGH).map(function (e) {
                            return { src: e.url, type: e.content_type }
                          }),
                        )) ||
                      [],
                  }
                  return g.createElement(x, { testID: Q }, this._renderHorizonPlayer(d))
                },
              },
              {
                key: '_submitInitialPlacement',
                value: function () {
                  var e = this.props.heightsReady && !this._hasInitialPlacementMeasurement
                  this._emitter &&
                    this._placementRef &&
                    e &&
                    (this._placementRef.sample(this._handlePlacementChange),
                    (this._hasInitialPlacementMeasurement = !0))
                },
              },
            ]),
            r
          )
        })(g.Component)
      P()(ue, 'contextType', ae.a),
        P()(ue, 'defaultProps', {
          autoplay: H.b.Off,
          playbackCoordination: Z.b,
          playbackPriority: ne.a.NORMAL,
          showControls: !0,
          dataSaverMode: !1,
          geolocationPrompt: !0,
          heightsReady: !0,
          noAuthHttpClient: ce,
          includeBroadcastEventAssociation: !1,
        })
      var pe = L.a.create({ aspectRatio: { zIndex: void 0 } }),
        de = r('fs1G'),
        ye = r('64vW'),
        fe = r('gOg7'),
        he = r('4oeU')
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _e(Object(r), !0).forEach(function (t) {
                P()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _e(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function me(e) {
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
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return _()(this, r)
        }
      }
      var be = (function (e) {
        f()(r, e)
        var t = me(r)
        function r(e, n) {
          var a
          return (
            s()(this, r),
            (a = t.call(this, e, n)),
            P()(d()(a), '_player', null),
            P()(d()(a), '_getBaseItem', function (e) {
              var t,
                r = a.props,
                n = r.analytics,
                i = r.includeBroadcastEventAssociation,
                o = r.source.videoId,
                l = n.contextualScribeData.event_id
              return (
                (t = 'broadcast' === o.type && o.tweetId ? o.tweetId : 'broadcast' === o.type && i && l ? l : o.id),
                e.find(function (e) {
                  return e.id === t
                })
              )
            }),
            P()(d()(a), '_createAnalytics', function (e) {
              var t = { log: a._scribeAction },
                r = a.props.analytics,
                n = {
                  log: a.context.featureSwitches.isTrue('responsive_web_video_promoted_logging_enabled')
                    ? a._logPromotedVideoEvent
                    : de.a,
                },
                i = r.contextualScribeNamespace,
                o = r.contextualScribeData,
                l = Array.isArray(o.items) ? a._getBaseItem(o.items) : void 0,
                s = {
                  scribeContext: ve({}, i),
                  baseScribeItem: l,
                  enableShortFormCompleteLogging: a.context.featureSwitches.isTrue(
                    'responsive_web_video_pcomplete_enabled',
                  ),
                }
              return new fe.a(t, n, e, s)
            }),
            P()(d()(a), '_logPromotedVideoEvent', function (e) {
              var t = a.props.createLocalApiErrorHandler
              a.props.logPromotedVideoEvent(e).catch(t())
            }),
            P()(d()(a), '_scribeAction', function (e) {
              var t = e.category,
                r = e.data,
                n = e.namespace,
                i = a.props.analytics
              null != n && n.action && i.scribe(ve(ve({}, n), {}, { data: ve(ve({}, r), {}, { _category_: t }) }))
            }),
            P()(d()(a), '_setPlayer', function (e) {
              if (((a._player = e), a.props.setPlayer)) {
                var t = a._player && {
                  play: function () {
                    a._player && a._player.play()
                  },
                  pause: function () {
                    a._player && a._player.pause()
                  },
                  replay: function () {
                    a._player && a._player.replay()
                  },
                }
                a.props.setPlayer(t)
              }
            }),
            (a._twitterAuthedHttpClient = e.getTwitterAuthedHttpClient()),
            (a._analytics = a._createAnalytics(a._twitterAuthedHttpClient)),
            a
          )
        }
        return (
          u()(r, [
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  r = (t.createLocalApiErrorHandler, t.getTwitterAuthedHttpClient, t.playbackPriority),
                  n = t.tweetAdProvider,
                  i = o()(t, [
                    'createLocalApiErrorHandler',
                    'getTwitterAuthedHttpClient',
                    'playbackPriority',
                    'tweetAdProvider',
                  ])
                return g.createElement(ye.a.Consumer, null, function (t) {
                  var o = t.heightsReady
                  return g.createElement(he.a.Consumer, null, function (t) {
                    var l = t.playbackPriority
                    return g.createElement(
                      ue,
                      a()({}, i, {
                        analytics: e._analytics,
                        heightsReady: o,
                        playbackPriority: l === ne.a.INELIGIBLE ? l : r,
                        setPlayer: e._setPlayer,
                        tweetAdProvider: n,
                        twitterAuthedHttpClient: e._twitterAuthedHttpClient,
                      }),
                    )
                  })
                })
              },
            },
          ]),
          r
        )
      })(g.PureComponent)
      P()(be, 'contextType', ae.a)
      var Pe = j(be)
      t.default = Pe
    },
  },
])
//# sourceMappingURL=WIPED
