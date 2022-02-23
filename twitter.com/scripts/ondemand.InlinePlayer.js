;(window.webpackJsonp = window.webpackJsonp || []).push([
  [215],
  {
    '64vW': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r).a.createContext({ heightsReady: !0 })
      t.a = a
    },
    QHXq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InlinePlayerContainer', function () {
          return _e
        })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('yiKp'),
        s = n.n(l),
        c = n('VrFO'),
        u = n.n(c),
        p = n('Y9Ll'),
        d = n.n(p),
        y = n('1Pcy'),
        _ = n.n(y),
        h = n('5Yy7'),
        m = n.n(h),
        v = n('2VqO'),
        f = n.n(v),
        b = n('KEM+'),
        P = n.n(b),
        g = (n('hBpG'), n('7x/C'), n('ERkP')),
        I = n.n(g),
        C = n('6rlp'),
        A = n('H9MA'),
        w = n('RqPI'),
        k = n('yr4d'),
        E = n('XOJV'),
        S = n('rxPX'),
        R = n('0KEI'),
        T = n('eXeu'),
        O = function () {
          return function (e, t, n) {
            return n.api.getHttpClient()
          }
        },
        H = function (e, t) {
          var n = t.source && t.source.videoId
          return n && 'tweet' === n.type ? n.id : void 0
        },
        F = Object(S.a)()
          .propsFromState(function () {
            return { dataSaverMode: A.c, language: w.o, sourceTweet: E.a.createHydratedTweetSelector(H) }
          })
          .adjustStateProps(function (e) {
            var t = e.dataSaverMode,
              n = e.language,
              r = e.sourceTweet
            return {
              dataSaverMode: t,
              language: n,
              mediaAvailability: (r && Object(T.c)(r)) || void 0,
              publisherId: r ? Object(T.d)(r) : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
                'INLINE_PLAYER_CONTAINER',
              ),
              getTwitterAuthedHttpClient: O,
              logPromotedVideoEvent: C.b,
              tweetAdProvider: k.b,
            }
          })
          .withAnalytics(),
        L = (n('z84I'), n('6v1f')),
        M = n('ZeN/'),
        x = n('rHpw'),
        D = n('MWbm'),
        V = function (e) {
          e.stopPropagation()
        },
        U = function (e) {
          var t = e.children,
            n = e.testID
          return I.a.createElement(D.a, { onClick: V, style: x.a.absoluteFill, testID: n }, t)
        },
        j = n('epkG'),
        N = n('mN6z'),
        z = (n('2G9S'), n('gZV8')),
        q = n('ylrv'),
        B = (function () {
          function e(t, n, r) {
            u()(this, e), (this.placement = t), (this.obstructions = n), (this.layerId = r)
          }
          return (
            d()(e, [
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
                    n = q.a.area(this.placement.item),
                    r = (1 - t) * q.a.area(e)
                  return n > 0 ? r / n : 0
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
        G = n('vF3p'),
        W = n('S4UJ'),
        J = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            u()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              P()(_()(e), '_handlePlacementChange', function (t) {
                e._updateAndNotify({ placement: t }, e.props.onChange)
              }),
              P()(_()(e), '_handleObstructionChange', function () {
                var t = e.props,
                  n = t.obstructionDetection,
                  r = t.onChange
                e._updateAndNotify({ obstructions: n.getObstructions() }, r)
              }),
              P()(_()(e), '_setPlacementRef', function (t) {
                e._placementRef = t
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'sample',
                value: function (e) {
                  var t = this
                  this._placementRef &&
                    this._placementRef.sample(function (n) {
                      t._updateAndNotify({ placement: n }, e)
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.style
                  return I.a.createElement(
                    z.e,
                    {
                      onPlacementChange: this._handlePlacementChange,
                      ref: this._setPlacementRef,
                      style: n,
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
                  var n = this,
                    r = e.obstructions,
                    a = e.placement,
                    i = this.props,
                    o = i.layerId,
                    l = i.obstructionDetection
                  ;(this._placement = a || this._placement),
                    (this._obstructions = r || this._obstructions || l.getObstructions()),
                    this._placement
                      ? t(new B(this._placement, this._obstructions, o))
                      : this._placementRef &&
                        this._placementRef.sample(function (e) {
                          ;(n._placement = e),
                            (n._obstructions = n._obstructions || l.getObstructions()),
                            t(new B(e, n._obstructions, o))
                        })
                },
              },
            ]),
            n
          )
        })(I.a.Component)
      P()(J, 'defaultProps', { obstructionDetection: G.a })
      var X = Object(W.a)(J),
        Y = n('efbI'),
        K = n('mf9H'),
        Z = n('zHh/'),
        Q = 'videoPlayer',
        $ = n('v/3V'),
        ee = n('aITJ'),
        te = n('Zl35'),
        ne = n('9Xij'),
        re = n('HT/6'),
        ae = n('v6aA'),
        ie = n('iOGT'),
        oe = new j.a({}),
        le = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n(e, r) {
            var i
            u()(this, n),
              (i = t.call(this, e, r)),
              P()(_()(i), '_emitter', null),
              P()(_()(i), '_playerInternal', null),
              P()(_()(i), '_placementRef', null),
              P()(_()(i), '_isLooping', !1),
              P()(_()(i), '_isPlayerFullscreen', !1),
              P()(_()(i), '_renderHorizonPlayer', function (e) {
                var t = i.props,
                  n = t.accessibilityLabel,
                  r = t.analytics,
                  o = t.aspectRatio,
                  l = t.displayOptions,
                  s = t.durationMs,
                  c = t.geolocationPrompt,
                  u = t.includeBroadcastEventAssociation,
                  p = t.intentToPlayTime,
                  d = t.language,
                  y = t.mediaAvailability,
                  _ = t.noAuthHttpClient,
                  h = t.playerId,
                  m = t.publisherId,
                  v = t.source,
                  f = v.contentId,
                  b = v.eventId,
                  P = v.videoId,
                  g = v.vmapUrl,
                  C = t.timecode,
                  A = t.twitterAuthedHttpClient,
                  w = t.uiStack,
                  k = t.videoEl,
                  E = t.videoPlayer,
                  S = t.viewCount
                return I.a.createElement(Y.a.Consumer, null, function (t) {
                  var v = t.prerollDisplayLocation
                  return I.a.createElement(
                    te.b,
                    a()(
                      {
                        accessibilityLabel: n,
                        adProvider: i._tweetAdProvider(v),
                        analytics: r,
                        aspectRatio: o,
                        basePlayerClass: E,
                        configType: 'static',
                        contentId: f,
                        cta: i._getPlayerCTA(),
                        disableHls: i._disableHls,
                        durationMs: s,
                        enableVideoPlayerCaptionRendering: !0,
                        eventId: b,
                        featureProvider: i.context.featureSwitches,
                        geolocationPrompt: c,
                        httpClient: _,
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
                        publisherId: m,
                        requestedTimecode: C,
                        twitterAuthedHttpClient: A,
                        videoEl: k,
                        videoId: P,
                        viewCount: S,
                        vmapUrl: g,
                      },
                      e,
                    ),
                    w,
                  )
                })
              }),
              P()(_()(i), '_setPlayerApi', function (e) {
                var t = i.props,
                  n = t.customOverlay,
                  r = t.onMuteChange,
                  a = t.onSetPlayerApi
                'function' == typeof n && ((i._playerInternal = e), i.forceUpdate()),
                  r &&
                    (e.on('unmute', function () {
                      return r({ isPlayerMuted: !1 })
                    }),
                    e.on('mute', function () {
                      return r({ isPlayerMuted: !0 })
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
              P()(_()(i), '_getPlayerCTA', function () {
                var e = i.props,
                  t = e.cta,
                  n = e.promotedContent
                return (
                  t &&
                  s()(
                    s()({}, t),
                    {},
                    { url: Object($.a)(i.context.featureSwitches, t.url, null == n ? void 0 : n.click_tracking_info) },
                  )
                )
              }),
              P()(_()(i), '_handleApiReady', i._setPlayerApi),
              P()(_()(i), '_getLoopingThreshold', function () {
                var e = i.props,
                  t = e.loopingThresholdMs,
                  n = e.source.videoId
                return t || ('tweet' === n.type && 6e4) || 7e3
              }),
              P()(_()(i), '_handleAutoPlayRequest', function () {
                var e = i.props,
                  t = e.onAutoplay,
                  n = e.shouldAutoplayWithoutMuting
                i._playerInternal && (n ? i._playerInternal.play() : i._playerInternal.playPreview(), t && t())
              }),
              P()(_()(i), '_handlePauseRequest', function () {
                var e = i.props.onAutopause
                i._playerInternal && (i._playerInternal.pause(), e && e())
              }),
              P()(_()(i), '_handlePlacementChange', function (e) {
                i._emitter && !i._isPlayerFullscreen && i._emitter.signalPlacementChange(e),
                  i._playerInternal && !i._isPlayerFullscreen && i._playerInternal.updatePosition(e.getPositionData())
              }),
              P()(_()(i), '_handlePlaybackComplete', function () {
                var e = i.props.onPlaybackComplete
                i._emitter && i._emitter.signalPlaybackFinish(), e && e()
              }),
              P()(_()(i), '_handlePlaybackStarted', function () {
                i._emitter && i._emitter.signalPlay(), i.props.onPlaybackStarted && i.props.onPlaybackStarted()
              }),
              P()(_()(i), '_handlePlaybackPaused', function () {
                i._emitter && i._emitter.signalPause()
              }),
              P()(_()(i), '_handlePlayerState', function (e) {
                var t = i.props,
                  n = t.onPlayerState,
                  r = t.onProgressChange
                n && n(e)
                var a = (e.tracks || []).find(function (t) {
                  return t.id === e.currentTrackId
                })
                if (a) {
                  var o = (a.currentTimeMs || 0) / a.durationMs
                  r && r(o, e.tracksFinished)
                }
              }),
              P()(_()(i), '_handleError', function (e) {
                var t = i.props.onError,
                  n = e.error
                n
                  ? (i._emitter &&
                      (i._emitter.unregister(),
                      (i._emitter = void 0),
                      (i._hasInitialPlacementMeasurement = !1),
                      (i._lastPlayerError = n)),
                    e.errorInfo &&
                      !e.errorInfo.canRetry &&
                      (t && t(), i._onErrorUnsubscribe && i._onErrorUnsubscribe()))
                  : !i._emitter &&
                    i._lastPlayerError &&
                    (i._registerPlaybackCoordination(), i._submitInitialPlacement(), (i._lastPlayerError = void 0))
              }),
              P()(_()(i), '_handleFullscreenChange', function (e) {
                var t = i.context.viewport
                if (((i._isPlayerFullscreen = e.isPlayerFullscreen), t)) {
                  if ((t.temporarilySuppressScrollListeners(2e3), ee.b.isChrome() || ee.b.isSafari()))
                    if (i._isPlayerFullscreen) i._savedScrollPosition = { y: t.scrollY(), x: t.scrollX() }
                    else if (i._savedScrollPosition) {
                      var n = i._savedScrollPosition,
                        r = n.x,
                        a = n.y
                      ;(i._savedScrollPosition = void 0), t.scrollTo(r, a)
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
              P()(_()(i), '_registerPlaybackCoordination', function () {
                var e = i.props,
                  t = e.playbackCoordination,
                  n = e.playbackPriority,
                  r = {
                    onAutoPlayRequest: i._handleAutoPlayRequest,
                    onPauseRequest: i._handlePauseRequest,
                    canAutoplay: i._shouldAutoplay,
                    isLooping: i._isLooping,
                    playbackPriority: n,
                  }
                t && (i._emitter = t.register(r))
              }),
              P()(_()(i), '_setPlayerInternal', function (e) {
                if (((i._playerInternal = e), e)) {
                  var t = i.props,
                    n = t.onPlayerState,
                    r = t.onProgressChange
                  ;(n || r) && e.subscribe(i._handlePlayerState),
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
              P()(_()(i), '_setPlacementAPI', function (e) {
                ;(i._placementRef = e), i._submitInitialPlacement()
              }),
              P()(_()(i), '_getTweetId', function () {
                var e = i.props.source.videoId
                if (e) {
                  if ('tweet' === e.type) return e.id
                  if ('broadcast' === e.type) return e.tweetId
                }
              }),
              P()(_()(i), '_tweetAdProvider', function (e) {
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
              (i._shouldAutoplay = Object(Z.a)(o, l)),
              i
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.heightsReady,
                    r = t.playbackPriority
                  !e.heightsReady && n && this._submitInitialPlacement(),
                    !Object(N.a)(e.source, this.props.source) && this._emitter && this._emitter.reset(),
                    e.playbackPriority !== r &&
                      void 0 !== r &&
                      this._emitter &&
                      this._emitter.signalPlaybackPriorityChange(r, this._shouldAutoplay)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.aspectRatio
                  return I.a.createElement(
                    ne.a,
                    { ratio: e, style: se.aspectRatio },
                    I.a.createElement(
                      X,
                      { onChange: this._handlePlacementChange, ref: this._setPlacementAPI, style: x.a.absoluteFill },
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
                    n = e.durationMs,
                    r = e.forceLoop,
                    a = e.maxLoopCount,
                    i = e.poster,
                    o = e.promotedContent,
                    l = e.source.variants,
                    s = e.videoType,
                    c = 'animated_gif' === s,
                    u = 'vine' === s,
                    p = l && l.length ? (c ? 'gif' : 'media_entity') : 'vmap'
                  this._isLooping = !!(r || c || u || (n && n <= this._getLoopingThreshold()))
                  var d = {
                    bitrateCap: t ? M.a.MEDIUM : void 0,
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
                        Object(T.f)(
                          Object(ie.b)(l, t ? ie.a.MEDIUM : ie.a.HIGH).map(function (e) {
                            return { src: e.url, type: e.content_type }
                          }),
                        )) ||
                      [],
                  }
                  return I.a.createElement(U, { testID: Q }, this._renderHorizonPlayer(d))
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
            n
          )
        })(I.a.Component)
      P()(le, 'contextType', ae.a),
        P()(le, 'defaultProps', {
          autoplay: L.b.Off,
          playbackCoordination: K.b,
          playbackPriority: re.a.NORMAL,
          showControls: !0,
          dataSaverMode: !1,
          geolocationPrompt: !0,
          heightsReady: !0,
          noAuthHttpClient: oe,
          includeBroadcastEventAssociation: !1,
        })
      var se = x.a.create({ aspectRatio: { zIndex: void 0 } }),
        ce = n('fs1G'),
        ue = n('64vW'),
        pe = n('gOg7'),
        de = n('4oeU'),
        ye = ['createLocalApiErrorHandler', 'getTwitterAuthedHttpClient', 'playbackPriority', 'tweetAdProvider'],
        _e = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n(e, r) {
            var a
            return (
              u()(this, n),
              (a = t.call(this, e, r)),
              P()(_()(a), '_player', null),
              P()(_()(a), '_getBaseItem', function (e) {
                var t,
                  n = a.props,
                  r = n.analytics,
                  i = n.includeBroadcastEventAssociation,
                  o = n.source.videoId,
                  l = r.contextualScribeData.event_id
                return (
                  (t = 'broadcast' === o.type && o.tweetId ? o.tweetId : 'broadcast' === o.type && i && l ? l : o.id),
                  e.find(function (e) {
                    return e.id === t
                  })
                )
              }),
              P()(_()(a), '_createAnalytics', function (e) {
                var t = { log: a._scribeAction },
                  n = a.props.analytics,
                  r = {
                    log: a.context.featureSwitches.isTrue('responsive_web_video_promoted_logging_enabled')
                      ? a._logPromotedVideoEvent
                      : ce.a,
                  },
                  i = n.contextualScribeNamespace,
                  o = n.contextualScribeData,
                  l = Array.isArray(o.items) ? a._getBaseItem(o.items) : void 0,
                  c = {
                    scribeContext: s()({}, i),
                    baseScribeItem: l,
                    enableShortFormCompleteLogging: a.context.featureSwitches.isTrue(
                      'responsive_web_video_pcomplete_enabled',
                    ),
                  }
                return new pe.a(t, r, e, c)
              }),
              P()(_()(a), '_logPromotedVideoEvent', function (e) {
                var t = a.props.createLocalApiErrorHandler
                a.props.logPromotedVideoEvent(e).catch(t())
              }),
              P()(_()(a), '_scribeAction', function (e) {
                var t = e.category,
                  n = e.data,
                  r = e.namespace,
                  i = a.props.analytics
                null != r && r.action && i.scribe(s()(s()({}, r), {}, { data: s()(s()({}, n), {}, { _category_: t }) }))
              }),
              P()(_()(a), '_setPlayer', function (e) {
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
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.createLocalApiErrorHandler, t.getTwitterAuthedHttpClient, t.playbackPriority),
                    r = t.tweetAdProvider,
                    i = o()(t, ye)
                  return I.a.createElement(ue.a.Consumer, null, function (t) {
                    var o = t.heightsReady
                    return I.a.createElement(de.a.Consumer, null, function (t) {
                      var l = t.playbackPriority
                      return I.a.createElement(
                        le,
                        a()({}, i, {
                          analytics: e._analytics,
                          heightsReady: o,
                          playbackPriority: l === re.a.INELIGIBLE ? l : n,
                          setPlayer: e._setPlayer,
                          tweetAdProvider: r,
                          twitterAuthedHttpClient: e._twitterAuthedHttpClient,
                        }),
                      )
                    })
                  })
                },
              },
            ]),
            n
          )
        })(I.a.PureComponent)
      P()(_e, 'contextType', ae.a)
      var he = F(_e)
      t.default = he
    },
  },
])
//# sourceMappingURL=WIPED
