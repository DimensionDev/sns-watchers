;(window.webpackJsonp = window.webpackJsonp || []).push([
  [216],
  {
    '64vW': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ heightsReady: !0 })
      t.a = r
    },
    QHXq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InlinePlayerContainer', function () {
          return me
        })
      var a = n('97Jx'),
        r = n.n(a),
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
        b = n.n(v),
        f = n('KEM+'),
        P = n.n(f),
        g = (n('hBpG'), n('7x/C'), n('ERkP')),
        I = n.n(g),
        C = n('6rlp'),
        A = n('H9MA'),
        w = n('wrlS'),
        k = n('RqPI'),
        S = n('yr4d'),
        E = n('XOJV'),
        R = n('mqpi'),
        T = n('rxPX'),
        O = n('0KEI'),
        H = n('eXeu'),
        F = function () {
          return function (e, t, n) {
            return n.api.getHttpClient()
          }
        },
        L = function (e, t) {
          var n = t.source && t.source.videoId
          return n && 'tweet' === n.type ? n.id : void 0
        },
        M = Object(T.a)()
          .propsFromState(function () {
            return {
              dataSaverMode: A.c,
              featureSwitches: w.d,
              language: k.p,
              sourceTweet: E.a.createHydratedTweetSelector(L),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.dataSaverMode,
              n = e.featureSwitches,
              a = e.language,
              r = e.sourceTweet
            return {
              dataSaverMode: t,
              disableAutoplay: !!r && Object(R.b)(n, r, R.a.Autoplay),
              language: a,
              mediaAvailability: (r && Object(H.c)(r)) || void 0,
              publisherId: r ? Object(H.d)(r) : void 0,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'INLINE_PLAYER_CONTAINER',
              ),
              getTwitterAuthedHttpClient: F,
              logPromotedVideoEvent: C.b,
              tweetAdProvider: S.b,
            }
          })
          .withAnalytics(),
        V = (n('z84I'), n('6v1f')),
        x = n('ZeN/'),
        D = n('rHpw'),
        j = n('MWbm'),
        z = function (e) {
          e.stopPropagation()
        },
        U = function (e) {
          var t = e.children,
            n = e.testID
          return I.a.createElement(j.a, { onClick: z, style: D.a.absoluteFill, testID: n }, t)
        },
        N = n('epkG'),
        q = n('mN6z'),
        B = (n('2G9S'), n('gZV8')),
        G = n('ylrv'),
        W = (function () {
          function e(t, n, a) {
            u()(this, e), (this.placement = t), (this.obstructions = n), (this.layerId = a)
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
                    n = G.a.area(this.placement.item),
                    a = (1 - t) * G.a.area(e)
                  return n > 0 ? a / n : 0
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
        X = n('vF3p'),
        J = n('S4UJ'),
        Y = (function (e) {
          m()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              P()(_()(e), '_handlePageVisibilityChange', function () {
                if (e._placement) {
                  var t = e.props,
                    n = t.layerId,
                    a = t.obstructionDetection,
                    r = t.onPageVisibilityChange,
                    i = document.visibilityState,
                    o = e._obstructions || a.getObstructions(),
                    l = new W(e._placement, o, n)
                  r && r(i, l)
                }
              }),
              P()(_()(e), '_handlePlacementChange', function (t) {
                e._updateAndNotify({ placement: t }, e.props.onChange)
              }),
              P()(_()(e), '_handleObstructionChange', function () {
                var t = e.props,
                  n = t.obstructionDetection,
                  a = t.onChange
                e._updateAndNotify({ obstructions: n.getObstructions() }, a)
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
                    B.e,
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
                  ;(this._obstructionSubscription = e.subscribe(this._handleObstructionChange)),
                    document.addEventListener('visibilitychange', this._handlePageVisibilityChange)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._obstructionSubscription &&
                    (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0)),
                    document.removeEventListener('visibilitychange', this._handlePageVisibilityChange)
                },
              },
              {
                key: '_updateAndNotify',
                value: function (e, t) {
                  var n = this,
                    a = e.obstructions,
                    r = e.placement,
                    i = this.props,
                    o = i.layerId,
                    l = i.obstructionDetection
                  ;(this._placement = r || this._placement),
                    (this._obstructions = a || this._obstructions || l.getObstructions()),
                    this._placement
                      ? t(new W(this._placement, this._obstructions, o))
                      : this._placementRef &&
                        this._placementRef.sample(function (e) {
                          ;(n._placement = e),
                            (n._obstructions = n._obstructions || l.getObstructions()),
                            t(new W(e, n._obstructions, o))
                        })
                },
              },
            ]),
            n
          )
        })(I.a.Component)
      P()(Y, 'defaultProps', { obstructionDetection: X.a })
      var K = Object(J.a)(Y),
        Z = n('efbI'),
        Q = n('mf9H'),
        $ = n('zHh/'),
        ee = 'videoPlayer',
        te = n('v/3V'),
        ne = n('aITJ'),
        ae = n('Zl35'),
        re = n('9Xij'),
        ie = n('HT/6'),
        oe = n('v6aA'),
        le = n('iOGT'),
        se = new N.a({}),
        ce = (function (e) {
          m()(n, e)
          var t = b()(n)
          function n(e, a) {
            var i
            u()(this, n),
              (i = t.call(this, e, a)),
              P()(_()(i), '_emitter', null),
              P()(_()(i), '_playerInternal', null),
              P()(_()(i), '_placementRef', null),
              P()(_()(i), '_isLooping', !1),
              P()(_()(i), '_isPlayerFullscreen', !1),
              P()(_()(i), '_renderHorizonPlayer', function (e) {
                var t = i.props,
                  n = t.accessibilityLabel,
                  a = t.analytics,
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
                  b = v.contentId,
                  f = v.eventId,
                  P = v.videoId,
                  g = v.vmapUrl,
                  C = t.timecode,
                  A = t.twitterAuthedHttpClient,
                  w = t.uiStack,
                  k = t.videoEl,
                  S = t.videoPlayer,
                  E = t.viewCount
                return I.a.createElement(Z.a.Consumer, null, function (t) {
                  var v = t.prerollDisplayLocation
                  return I.a.createElement(
                    ae.b,
                    r()(
                      {
                        accessibilityLabel: n,
                        adProvider: i._tweetAdProvider(v),
                        analytics: a,
                        aspectRatio: o,
                        basePlayerClass: S,
                        configType: 'static',
                        contentId: b,
                        cta: i._getPlayerCTA(),
                        disableHls: i._disableHls,
                        durationMs: s,
                        enableVideoPlayerCaptionRendering: !0,
                        eventId: f,
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
                        viewCount: E,
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
                  a = t.onMuteChange,
                  r = t.onSetPlayerApi
                'function' == typeof n && ((i._playerInternal = e), i.forceUpdate()),
                  a &&
                    (e.on('unmute', function () {
                      return a({ isPlayerMuted: !1 })
                    }),
                    e.on('mute', function () {
                      return a({ isPlayerMuted: !0 })
                    })),
                  e &&
                    (e.on('fullscreenEntered', function () {
                      return i._handleFullscreenChange({ isPlayerFullscreen: !0 })
                    }),
                    e.on('fullscreenExited', function () {
                      return i._handleFullscreenChange({ isPlayerFullscreen: !1 })
                    })),
                  i._setPlayerInternal(e),
                  r && r(e)
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
                    { url: Object(te.a)(i.context.featureSwitches, t.url, null == n ? void 0 : n.click_tracking_info) },
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
              P()(_()(i), '_handlePageVisibilityChange', function (e, t) {
                var n = t.getPositionData()
                'hidden' === e && i._playerInternal
                  ? i._playerInternal.updatePosition({
                      percentVisible: 0,
                      percentOfViewportOccupied: 0,
                      sizesInfo: n.sizesInfo,
                    })
                  : 'visible' === e && i._playerInternal && i._playerInternal.updatePosition(n)
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
                  a = t.onProgressChange
                n && n(e)
                var r = (e.tracks || []).find(function (t) {
                  return t.id === e.currentTrackId
                })
                if (r) {
                  var o = (r.currentTimeMs || 0) / r.durationMs
                  a && a(o, e.tracksFinished)
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
                  if ((t.temporarilySuppressScrollListeners(2e3), ne.b.isChrome() || ne.b.isSafari()))
                    if (i._isPlayerFullscreen) i._savedScrollPosition = { y: t.scrollY(), x: t.scrollX() }
                    else if (i._savedScrollPosition) {
                      var n = i._savedScrollPosition,
                        a = n.x,
                        r = n.y
                      ;(i._savedScrollPosition = void 0), t.scrollTo(a, r)
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
                  a = {
                    onAutoPlayRequest: i._handleAutoPlayRequest,
                    onPauseRequest: i._handlePauseRequest,
                    canAutoplay: i._shouldAutoplay,
                    isLooping: i._isLooping,
                    playbackPriority: n,
                  }
                t && (i._emitter = t.register(a))
              }),
              P()(_()(i), '_setPlayerInternal', function (e) {
                if (((i._playerInternal = e), e)) {
                  var t = i.props,
                    n = t.onPlayerState,
                    a = t.onProgressChange
                  ;(n || a) && e.subscribe(i._handlePlayerState),
                    (i._onErrorUnsubscribe = e.subscribe(i._handleError)),
                    e.on('playbackComplete', i._handlePlaybackComplete),
                    e.on('play', i._handlePlaybackStarted),
                    e.on('pause', i._handlePlaybackPaused),
                    i._registerPlaybackCoordination(),
                    i._submitInitialPlacement()
                }
                if (i.props.setPlayer) {
                  var r = i._playerInternal && {
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
                  i.props.setPlayer(r)
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
              l = e.disableAutoplay,
              c = e.forwardPivotInfo
            return (
              (i._disableHls = !(
                ne.b.isDesktopOS() ||
                (ne.b.isAndroid() && i.context.featureSwitches.isTrue('web_video_hls_android_mse_enabled'))
              )),
              (i._shouldAutoplay = !l && Object($.a)(o, c)),
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
                    a = t.playbackPriority
                  !e.heightsReady && n && this._submitInitialPlacement(),
                    !Object(q.a)(e.source, this.props.source) && this._emitter && this._emitter.reset(),
                    e.playbackPriority !== a &&
                      void 0 !== a &&
                      this._emitter &&
                      this._emitter.signalPlaybackPriorityChange(a, this._shouldAutoplay)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.aspectRatio
                  return I.a.createElement(
                    re.a,
                    { ratio: e, style: ue.aspectRatio },
                    I.a.createElement(
                      K,
                      {
                        onChange: this._handlePlacementChange,
                        onPageVisibilityChange: this._handlePageVisibilityChange,
                        ref: this._setPlacementAPI,
                        style: D.a.absoluteFill,
                      },
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
                    a = e.forceLoop,
                    r = e.maxLoopCount,
                    i = e.poster,
                    o = e.promotedContent,
                    l = e.source.variants,
                    s = e.videoType,
                    c = 'animated_gif' === s,
                    u = 'vine' === s,
                    p = l && l.length ? (c ? 'gif' : 'media_entity') : 'vmap'
                  this._isLooping = !!(a || c || u || (n && n <= this._getLoopingThreshold()))
                  var d = {
                    bitrateCap: t ? x.a.MEDIUM : void 0,
                    contentType: p,
                    loop: this._isLooping,
                    maxLoopCount: this._isLooping ? r : void 0,
                    poster: i && i.url,
                    promotedContext:
                      o && (o.impression_id || o.disclosure_type)
                        ? { impressionId: o.impression_id, disclosureType: o.disclosure_type }
                        : void 0,
                    variants:
                      (l &&
                        Object(H.f)(
                          Object(le.b)(l, t ? le.a.MEDIUM : le.a.HIGH).map(function (e) {
                            return { src: e.url, type: e.content_type }
                          }),
                        )) ||
                      [],
                  }
                  return I.a.createElement(U, { testID: ee }, this._renderHorizonPlayer(d))
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
      P()(ce, 'contextType', oe.a),
        P()(ce, 'defaultProps', {
          autoplay: V.b.Off,
          playbackCoordination: Q.b,
          playbackPriority: ie.a.NORMAL,
          showControls: !0,
          dataSaverMode: !1,
          geolocationPrompt: !0,
          heightsReady: !0,
          noAuthHttpClient: se,
          includeBroadcastEventAssociation: !1,
        })
      var ue = D.a.create({ aspectRatio: { zIndex: void 0 } }),
        pe = n('fs1G'),
        de = n('64vW'),
        ye = n('gOg7'),
        _e = n('r1tX'),
        he = ['createLocalApiErrorHandler', 'getTwitterAuthedHttpClient', 'playbackPriority', 'tweetAdProvider'],
        me = (function (e) {
          m()(n, e)
          var t = b()(n)
          function n(e, a) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e, a)),
              P()(_()(r), '_player', null),
              P()(_()(r), '_getBaseItem', function (e) {
                var t,
                  n = r.props,
                  a = n.analytics,
                  i = n.includeBroadcastEventAssociation,
                  o = n.source.videoId,
                  l = a.contextualScribeData.event_id
                return (
                  (t = 'broadcast' === o.type && o.tweetId ? o.tweetId : 'broadcast' === o.type && i && l ? l : o.id),
                  e.find(function (e) {
                    return e.id === t
                  })
                )
              }),
              P()(_()(r), '_createAnalytics', function (e) {
                var t = { log: r._scribeAction },
                  n = r.props.analytics,
                  a = {
                    log: r.context.featureSwitches.isTrue('responsive_web_video_promoted_logging_enabled')
                      ? r._logPromotedVideoEvent
                      : pe.a,
                  },
                  i = n.contextualScribeNamespace,
                  o = n.contextualScribeData,
                  l = Array.isArray(o.items) ? r._getBaseItem(o.items) : void 0,
                  c = {
                    scribeContext: s()({}, i),
                    baseScribeItem: l,
                    enableShortFormCompleteLogging: r.context.featureSwitches.isTrue(
                      'responsive_web_video_pcomplete_enabled',
                    ),
                  }
                return new ye.a(t, a, e, c)
              }),
              P()(_()(r), '_logPromotedVideoEvent', function (e) {
                var t = r.props.createLocalApiErrorHandler
                r.props.logPromotedVideoEvent(e).catch(t())
              }),
              P()(_()(r), '_scribeAction', function (e) {
                var t = e.category,
                  n = e.data,
                  a = e.namespace,
                  i = r.props.analytics
                null != a && a.action && i.scribe(s()(s()({}, a), {}, { data: s()(s()({}, n), {}, { _category_: t }) }))
              }),
              P()(_()(r), '_setPlayer', function (e) {
                if (((r._player = e), r.props.setPlayer)) {
                  var t = r._player && {
                    play: function () {
                      r._player && r._player.play()
                    },
                    pause: function () {
                      r._player && r._player.pause()
                    },
                    replay: function () {
                      r._player && r._player.replay()
                    },
                  }
                  r.props.setPlayer(t)
                }
              }),
              (r._twitterAuthedHttpClient = e.getTwitterAuthedHttpClient()),
              (r._analytics = r._createAnalytics(r._twitterAuthedHttpClient)),
              r
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
                    a = t.tweetAdProvider,
                    i = o()(t, he)
                  return I.a.createElement(de.a.Consumer, null, function (t) {
                    var o = t.heightsReady
                    return I.a.createElement(_e.a.Consumer, null, function (t) {
                      var l = t.playbackPriority
                      return I.a.createElement(
                        ce,
                        r()({}, i, {
                          analytics: e._analytics,
                          heightsReady: o,
                          playbackPriority: l === ie.a.INELIGIBLE ? l : n,
                          setPlayer: e._setPlayer,
                          tweetAdProvider: a,
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
      P()(me, 'contextType', oe.a)
      var ve = M(me)
      t.default = ve
    },
  },
])
//# sourceMappingURL=WIPED
