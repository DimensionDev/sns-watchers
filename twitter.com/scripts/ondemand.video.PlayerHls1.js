;(window.webpackJsonp = window.webpackJsonp || []).push([
  [364],
  {
    '/Hsh': function (t, e, r) {
      var i
      'undefined' != typeof window &&
        ((i = function () {
          return (function (t) {
            var e = {}
            function r(i) {
              if (e[i]) return e[i].exports
              var n = (e[i] = { i: i, l: !1, exports: {} })
              return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
            }
            return (
              (r.m = t),
              (r.c = e),
              (r.d = function (t, e, i) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
              }),
              (r.r = function (t) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(t, '__esModule', { value: !0 })
              }),
              (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t
                var i = Object.create(null)
                if (
                  (r.r(i),
                  Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
                  2 & e && 'string' != typeof t)
                )
                  for (var n in t)
                    r.d(
                      i,
                      n,
                      function (e) {
                        return t[e]
                      }.bind(null, n),
                    )
                return i
              }),
              (r.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default
                      }
                    : function () {
                        return t
                      }
                return r.d(e, 'a', e), e
              }),
              (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
              }),
              (r.p = '/dist/'),
              r((r.s = './src/hls.ts'))
            )
          })({
            './node_modules/eventemitter3/index.js':
              /*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
              /*! no static exports found */ function (t, e, r) {
                'use strict'
                var i = Object.prototype.hasOwnProperty,
                  n = '~'
                function s() {}
                function a(t, e, r) {
                  ;(this.fn = t), (this.context = e), (this.once = r || !1)
                }
                function o(t, e, r, i, s) {
                  if ('function' != typeof r) throw new TypeError('The listener must be a function')
                  var o = new a(r, i || t, s),
                    l = n ? n + e : e
                  return (
                    t._events[l]
                      ? t._events[l].fn
                        ? (t._events[l] = [t._events[l], o])
                        : t._events[l].push(o)
                      : ((t._events[l] = o), t._eventsCount++),
                    t
                  )
                }
                function l(t, e) {
                  0 == --t._eventsCount ? (t._events = new s()) : delete t._events[e]
                }
                function u() {
                  ;(this._events = new s()), (this._eventsCount = 0)
                }
                Object.create && ((s.prototype = Object.create(null)), new s().__proto__ || (n = !1)),
                  (u.prototype.eventNames = function () {
                    var t,
                      e,
                      r = []
                    if (0 === this._eventsCount) return r
                    for (e in (t = this._events)) i.call(t, e) && r.push(n ? e.slice(1) : e)
                    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
                  }),
                  (u.prototype.listeners = function (t) {
                    var e = n ? n + t : t,
                      r = this._events[e]
                    if (!r) return []
                    if (r.fn) return [r.fn]
                    for (var i = 0, s = r.length, a = new Array(s); i < s; i++) a[i] = r[i].fn
                    return a
                  }),
                  (u.prototype.listenerCount = function (t) {
                    var e = n ? n + t : t,
                      r = this._events[e]
                    return r ? (r.fn ? 1 : r.length) : 0
                  }),
                  (u.prototype.emit = function (t, e, r, i, s, a) {
                    var o = n ? n + t : t
                    if (!this._events[o]) return !1
                    var l,
                      u,
                      c = this._events[o],
                      d = arguments.length
                    if (c.fn) {
                      switch ((c.once && this.removeListener(t, c.fn, void 0, !0), d)) {
                        case 1:
                          return c.fn.call(c.context), !0
                        case 2:
                          return c.fn.call(c.context, e), !0
                        case 3:
                          return c.fn.call(c.context, e, r), !0
                        case 4:
                          return c.fn.call(c.context, e, r, i), !0
                        case 5:
                          return c.fn.call(c.context, e, r, i, s), !0
                        case 6:
                          return c.fn.call(c.context, e, r, i, s, a), !0
                      }
                      for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u]
                      c.fn.apply(c.context, l)
                    } else {
                      var h,
                        f = c.length
                      for (u = 0; u < f; u++)
                        switch ((c[u].once && this.removeListener(t, c[u].fn, void 0, !0), d)) {
                          case 1:
                            c[u].fn.call(c[u].context)
                            break
                          case 2:
                            c[u].fn.call(c[u].context, e)
                            break
                          case 3:
                            c[u].fn.call(c[u].context, e, r)
                            break
                          case 4:
                            c[u].fn.call(c[u].context, e, r, i)
                            break
                          default:
                            if (!l) for (h = 1, l = new Array(d - 1); h < d; h++) l[h - 1] = arguments[h]
                            c[u].fn.apply(c[u].context, l)
                        }
                    }
                    return !0
                  }),
                  (u.prototype.on = function (t, e, r) {
                    return o(this, t, e, r, !1)
                  }),
                  (u.prototype.once = function (t, e, r) {
                    return o(this, t, e, r, !0)
                  }),
                  (u.prototype.removeListener = function (t, e, r, i) {
                    var s = n ? n + t : t
                    if (!this._events[s]) return this
                    if (!e) return l(this, s), this
                    var a = this._events[s]
                    if (a.fn) a.fn !== e || (i && !a.once) || (r && a.context !== r) || l(this, s)
                    else {
                      for (var o = 0, u = [], c = a.length; o < c; o++)
                        (a[o].fn !== e || (i && !a[o].once) || (r && a[o].context !== r)) && u.push(a[o])
                      u.length ? (this._events[s] = 1 === u.length ? u[0] : u) : l(this, s)
                    }
                    return this
                  }),
                  (u.prototype.removeAllListeners = function (t) {
                    var e
                    return (
                      t
                        ? ((e = n ? n + t : t), this._events[e] && l(this, e))
                        : ((this._events = new s()), (this._eventsCount = 0)),
                      this
                    )
                  }),
                  (u.prototype.off = u.prototype.removeListener),
                  (u.prototype.addListener = u.prototype.on),
                  (u.prefixed = n),
                  (u.EventEmitter = u),
                  (t.exports = u)
              },
            './node_modules/url-toolkit/src/url-toolkit.js':
              /*!*****************************************************!*\
  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
  \*****************************************************/
              /*! no static exports found */ function (t, e, r) {
                var i, n, s, a, o
                ;(i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/),
                  (n = /^([^\/?#]*)([^]*)$/),
                  (s = /(?:\/|^)\.(?=\/)/g),
                  (a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
                  (o = {
                    buildAbsoluteURL: function (t, e, r) {
                      if (((r = r || {}), (t = t.trim()), !(e = e.trim()))) {
                        if (!r.alwaysNormalize) return t
                        var i = o.parseURL(t)
                        if (!i) throw new Error('Error trying to parse base URL.')
                        return (i.path = o.normalizePath(i.path)), o.buildURLFromParts(i)
                      }
                      var s = o.parseURL(e)
                      if (!s) throw new Error('Error trying to parse relative URL.')
                      if (s.scheme)
                        return r.alwaysNormalize ? ((s.path = o.normalizePath(s.path)), o.buildURLFromParts(s)) : e
                      var a = o.parseURL(t)
                      if (!a) throw new Error('Error trying to parse base URL.')
                      if (!a.netLoc && a.path && '/' !== a.path[0]) {
                        var l = n.exec(a.path)
                        ;(a.netLoc = l[1]), (a.path = l[2])
                      }
                      a.netLoc && !a.path && (a.path = '/')
                      var u = {
                        scheme: a.scheme,
                        netLoc: s.netLoc,
                        path: null,
                        params: s.params,
                        query: s.query,
                        fragment: s.fragment,
                      }
                      if (!s.netLoc && ((u.netLoc = a.netLoc), '/' !== s.path[0]))
                        if (s.path) {
                          var c = a.path,
                            d = c.substring(0, c.lastIndexOf('/') + 1) + s.path
                          u.path = o.normalizePath(d)
                        } else (u.path = a.path), s.params || ((u.params = a.params), s.query || (u.query = a.query))
                      return (
                        null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(s.path) : s.path),
                        o.buildURLFromParts(u)
                      )
                    },
                    parseURL: function (t) {
                      var e = i.exec(t)
                      return e
                        ? {
                            scheme: e[1] || '',
                            netLoc: e[2] || '',
                            path: e[3] || '',
                            params: e[4] || '',
                            query: e[5] || '',
                            fragment: e[6] || '',
                          }
                        : null
                    },
                    normalizePath: function (t) {
                      for (
                        t = t.split('').reverse().join('').replace(s, '');
                        t.length !== (t = t.replace(a, '')).length;

                      );
                      return t.split('').reverse().join('')
                    },
                    buildURLFromParts: function (t) {
                      return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                    },
                  }),
                  (t.exports = o)
              },
            './node_modules/webworkify-webpack/index.js':
              /*!**************************************************!*\
  !*** ./node_modules/webworkify-webpack/index.js ***!
  \**************************************************/
              /*! no static exports found */ function (t, e, r) {
                function i(t) {
                  var e = {}
                  function r(i) {
                    if (e[i]) return e[i].exports
                    var n = (e[i] = { i: i, l: !1, exports: {} })
                    return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
                  }
                  ;(r.m = t),
                    (r.c = e),
                    (r.i = function (t) {
                      return t
                    }),
                    (r.d = function (t, e, i) {
                      r.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: i })
                    }),
                    (r.r = function (t) {
                      Object.defineProperty(t, '__esModule', { value: !0 })
                    }),
                    (r.n = function (t) {
                      var e =
                        t && t.__esModule
                          ? function () {
                              return t.default
                            }
                          : function () {
                              return t
                            }
                      return r.d(e, 'a', e), e
                    }),
                    (r.o = function (t, e) {
                      return Object.prototype.hasOwnProperty.call(t, e)
                    }),
                    (r.p = '/'),
                    (r.oe = function (t) {
                      throw t
                    })
                  var i = r((r.s = ENTRY_MODULE))
                  return i.default || i
                }
                var n = '[\\.|\\-|\\+|\\w|/|@]+',
                  s = '\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)'
                function a(t) {
                  return (t + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
                }
                function o(t, e, i) {
                  var o = {}
                  o[i] = []
                  var l = e.toString(),
                    u = l.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/)
                  if (!u) return o
                  for (var c, d = u[1], h = new RegExp('(\\\\n|\\W)' + a(d) + s, 'g'); (c = h.exec(l)); )
                    'dll-reference' !== c[3] && o[i].push(c[3])
                  for (
                    h = new RegExp('\\(' + a(d) + '\\("(dll-reference\\s(' + n + '))"\\)\\)' + s, 'g');
                    (c = h.exec(l));

                  )
                    t[c[2]] || (o[i].push(c[1]), (t[c[2]] = r(c[1]).m)), (o[c[2]] = o[c[2]] || []), o[c[2]].push(c[4])
                  for (var f, g = Object.keys(o), v = 0; v < g.length; v++)
                    for (var p = 0; p < o[g[v]].length; p++)
                      (f = o[g[v]][p]), isNaN(1 * f) || (o[g[v]][p] = 1 * o[g[v]][p])
                  return o
                }
                function l(t) {
                  return Object.keys(t).reduce(function (e, r) {
                    return e || t[r].length > 0
                  }, !1)
                }
                t.exports = function (t, e) {
                  e = e || {}
                  var n = { main: r.m },
                    s = e.all
                      ? { main: Object.keys(n.main) }
                      : (function (t, e) {
                          for (var r = { main: [e] }, i = { main: [] }, n = { main: {} }; l(r); )
                            for (var s = Object.keys(r), a = 0; a < s.length; a++) {
                              var u = s[a],
                                c = r[u].pop()
                              if (((n[u] = n[u] || {}), !n[u][c] && t[u][c])) {
                                ;(n[u][c] = !0), (i[u] = i[u] || []), i[u].push(c)
                                for (var d = o(t, t[u][c], u), h = Object.keys(d), f = 0; f < h.length; f++)
                                  (r[h[f]] = r[h[f]] || []), (r[h[f]] = r[h[f]].concat(d[h[f]]))
                              }
                            }
                          return i
                        })(n, t),
                    a = ''
                  Object.keys(s)
                    .filter(function (t) {
                      return 'main' !== t
                    })
                    .forEach(function (t) {
                      for (var e = 0; s[t][e]; ) e++
                      s[t].push(e),
                        (n[t][e] =
                          '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'),
                        (a =
                          a +
                          'var ' +
                          t +
                          ' = (' +
                          i.toString().replace('ENTRY_MODULE', JSON.stringify(e)) +
                          ')({' +
                          s[t]
                            .map(function (e) {
                              return JSON.stringify(e) + ': ' + n[t][e].toString()
                            })
                            .join(',') +
                          '});\n')
                    }),
                    (a =
                      a +
                      'new ((' +
                      i.toString().replace('ENTRY_MODULE', JSON.stringify(t)) +
                      ')({' +
                      s.main
                        .map(function (t) {
                          return JSON.stringify(t) + ': ' + n.main[t].toString()
                        })
                        .join(',') +
                      '}))(self);')
                  var u = new window.Blob([a], { type: 'text/javascript' })
                  if (e.bare) return u
                  var c = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
                    d = new window.Worker(c)
                  return (d.objectURL = c), d
                }
              },
            './src/config.ts':
              /*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
              /*! exports provided: hlsDefaultConfig, mergeConfig, enableStreamingMode */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'hlsDefaultConfig', function () {
                    return b
                  }),
                  r.d(e, 'mergeConfig', function () {
                    return L
                  }),
                  r.d(e, 'enableStreamingMode', function () {
                    return A
                  })
                var i = r(/*! ./controller/abr-controller */ './src/controller/abr-controller.ts'),
                  n = r(/*! ./controller/audio-stream-controller */ './src/controller/audio-stream-controller.ts'),
                  s = r(/*! ./controller/audio-track-controller */ './src/controller/audio-track-controller.ts'),
                  a = r(
                    /*! ./controller/subtitle-stream-controller */ './src/controller/subtitle-stream-controller.ts',
                  ),
                  o = r(/*! ./controller/subtitle-track-controller */ './src/controller/subtitle-track-controller.ts'),
                  l = r(/*! ./controller/buffer-controller */ './src/controller/buffer-controller.ts'),
                  u = r(/*! ./controller/timeline-controller */ './src/controller/timeline-controller.ts'),
                  c = r(/*! ./controller/cap-level-controller */ './src/controller/cap-level-controller.ts'),
                  d = r(/*! ./controller/fps-controller */ './src/controller/fps-controller.ts'),
                  h = r(/*! ./controller/eme-controller */ './src/controller/eme-controller.ts'),
                  f = r(/*! ./utils/xhr-loader */ './src/utils/xhr-loader.ts'),
                  g = r(/*! ./utils/fetch-loader */ './src/utils/fetch-loader.ts'),
                  v = r(/*! ./utils/cues */ './src/utils/cues.ts'),
                  p = r(/*! ./utils/mediakeys-helper */ './src/utils/mediakeys-helper.ts'),
                  m = r(/*! ./utils/logger */ './src/utils/logger.ts')
                function y() {
                  return (y =
                    Object.assign ||
                    function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e]
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                      }
                      return t
                    }).apply(this, arguments)
                }
                function E(t, e) {
                  var r = Object.keys(t)
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t)
                    e &&
                      (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                      })),
                      r.push.apply(r, i)
                  }
                  return r
                }
                function T(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                      ? E(Object(r), !0).forEach(function (e) {
                          S(t, e, r[e])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                      : E(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                  }
                  return t
                }
                function S(t, e, r) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (t[e] = r),
                    t
                  )
                }
                var b = T(
                  T(
                    {
                      autoStartLoad: !0,
                      startPosition: -1,
                      defaultAudioCodec: void 0,
                      debug: !1,
                      capLevelOnFPSDrop: !1,
                      capLevelToPlayerSize: !1,
                      initialLiveManifestSize: 1,
                      maxBufferLength: 30,
                      backBufferLength: 1 / 0,
                      maxBufferSize: 6e7,
                      maxBufferHole: 0.1,
                      highBufferWatchdogPeriod: 2,
                      nudgeOffset: 0.1,
                      nudgeMaxRetry: 3,
                      maxFragLookUpTolerance: 0.25,
                      liveSyncDurationCount: 3,
                      liveMaxLatencyDurationCount: 1 / 0,
                      liveSyncDuration: void 0,
                      liveMaxLatencyDuration: void 0,
                      maxLiveSyncPlaybackRate: 1,
                      liveDurationInfinity: !1,
                      liveBackBufferLength: null,
                      maxMaxBufferLength: 600,
                      enableWorker: !0,
                      enableSoftwareAES: !0,
                      manifestLoadingTimeOut: 1e4,
                      manifestLoadingMaxRetry: 1,
                      manifestLoadingRetryDelay: 1e3,
                      manifestLoadingMaxRetryTimeout: 64e3,
                      startLevel: void 0,
                      levelLoadingTimeOut: 1e4,
                      levelLoadingMaxRetry: 4,
                      levelLoadingRetryDelay: 1e3,
                      levelLoadingMaxRetryTimeout: 64e3,
                      fragLoadingTimeOut: 2e4,
                      fragLoadingMaxRetry: 6,
                      fragLoadingRetryDelay: 1e3,
                      fragLoadingMaxRetryTimeout: 64e3,
                      startFragPrefetch: !1,
                      fpsDroppedMonitoringPeriod: 5e3,
                      fpsDroppedMonitoringThreshold: 0.2,
                      appendErrorMaxRetry: 3,
                      loader: f.default,
                      fLoader: void 0,
                      pLoader: void 0,
                      xhrSetup: void 0,
                      licenseXhrSetup: void 0,
                      licenseResponseCallback: void 0,
                      abrController: i.default,
                      bufferController: l.default,
                      capLevelController: c.default,
                      fpsController: d.default,
                      stretchShortVideoTrack: !1,
                      maxAudioFramesDrift: 1,
                      forceKeyFrameOnDiscontinuity: !0,
                      abrEwmaFastLive: 3,
                      abrEwmaSlowLive: 9,
                      abrEwmaFastVoD: 3,
                      abrEwmaSlowVoD: 9,
                      abrEwmaDefaultEstimate: 5e5,
                      abrBandWidthFactor: 0.95,
                      abrBandWidthUpFactor: 0.7,
                      abrMaxWithRealBitrate: !1,
                      maxStarvationDelay: 4,
                      maxLoadingDelay: 4,
                      minAutoBitrate: 0,
                      emeEnabled: !1,
                      widevineLicenseUrl: void 0,
                      drmSystemOptions: {},
                      requestMediaKeySystemAccessFunc: p.requestMediaKeySystemAccess,
                      testBandwidth: !0,
                      progressive: !1,
                      lowLatencyMode: !0,
                    },
                    {
                      cueHandler: v.default,
                      enableCEA708Captions: !0,
                      enableWebVTT: !0,
                      enableIMSC1: !0,
                      captionsTextTrack1Label: 'English',
                      captionsTextTrack1LanguageCode: 'en',
                      captionsTextTrack2Label: 'Spanish',
                      captionsTextTrack2LanguageCode: 'es',
                      captionsTextTrack3Label: 'Unknown CC',
                      captionsTextTrack3LanguageCode: '',
                      captionsTextTrack4Label: 'Unknown CC',
                      captionsTextTrack4LanguageCode: '',
                      renderTextTracksNatively: !0,
                    },
                  ),
                  {},
                  {
                    subtitleStreamController: a.SubtitleStreamController,
                    subtitleTrackController: o.default,
                    timelineController: u.TimelineController,
                    audioStreamController: n.default,
                    audioTrackController: s.default,
                    emeController: h.default,
                  },
                )
                function L(t, e) {
                  if (
                    (e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) &&
                    (e.liveSyncDuration || e.liveMaxLatencyDuration)
                  )
                    throw new Error(
                      "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration",
                    )
                  if (
                    void 0 !== e.liveMaxLatencyDurationCount &&
                    (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)
                  )
                    throw new Error(
                      'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"',
                    )
                  if (
                    void 0 !== e.liveMaxLatencyDuration &&
                    (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)
                  )
                    throw new Error(
                      'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"',
                    )
                  return y({}, t, e)
                }
                function A(t) {
                  var e = t.loader
                  e !== g.default && e !== f.default
                    ? (m.logger.log('[config]: Custom loader detected, cannot enable progressive streaming'),
                      (t.progressive = !1))
                    : Object(g.fetchSupported)() &&
                      ((t.loader = g.default),
                      (t.progressive = !0),
                      (t.enableSoftwareAES = !0),
                      m.logger.log('[config]: Progressive streaming enabled, using FetchLoader'))
                }
              },
            './src/controller/abr-controller.ts':
              /*!******************************************!*\
  !*** ./src/controller/abr-controller.ts ***!
  \******************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../utils/ewma-bandwidth-estimator */ './src/utils/ewma-bandwidth-estimator.ts'),
                  s = r(/*! ../events */ './src/events.ts'),
                  a = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  o = r(/*! ../errors */ './src/errors.ts'),
                  l = r(/*! ../types/loader */ './src/types/loader.ts'),
                  u = r(/*! ../utils/logger */ './src/utils/logger.ts')
                function c(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var d = (function () {
                  function t(t) {
                    ;(this.hls = void 0),
                      (this.lastLoadedFragLevel = 0),
                      (this._nextAutoLevel = -1),
                      (this.timer = void 0),
                      (this.onCheck = this._abandonRulesCheck.bind(this)),
                      (this.fragCurrent = null),
                      (this.partCurrent = null),
                      (this.bitrateTestDelay = 0),
                      (this.bwEstimator = void 0),
                      (this.hls = t)
                    var e = t.config
                    ;(this.bwEstimator = new n.default(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate)),
                      this.registerListeners()
                  }
                  var e,
                    r,
                    d,
                    h = t.prototype
                  return (
                    (h.registerListeners = function () {
                      var t = this.hls
                      t.on(s.Events.FRAG_LOADING, this.onFragLoading, this),
                        t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this),
                        t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                        t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.on(s.Events.ERROR, this.onError, this)
                    }),
                    (h.unregisterListeners = function () {
                      var t = this.hls
                      t.off(s.Events.FRAG_LOADING, this.onFragLoading, this),
                        t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this),
                        t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                        t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.off(s.Events.ERROR, this.onError, this)
                    }),
                    (h.destroy = function () {
                      this.unregisterListeners(),
                        this.clearTimer(),
                        (this.hls = this.onCheck = null),
                        (this.fragCurrent = this.partCurrent = null)
                    }),
                    (h.onFragLoading = function (t, e) {
                      var r,
                        n = e.frag
                      n.type === l.PlaylistLevelType.MAIN &&
                        Object(i.isFiniteNumber)(n.sn) &&
                        (this.timer ||
                          ((this.fragCurrent = n),
                          (this.partCurrent = null != (r = e.part) ? r : null),
                          (this.timer = self.setInterval(this.onCheck, 100))))
                    }),
                    (h.onLevelLoaded = function (t, e) {
                      var r = this.hls.config
                      e.details.live
                        ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive)
                        : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
                    }),
                    (h._abandonRulesCheck = function () {
                      var t = this.fragCurrent,
                        e = this.partCurrent,
                        r = this.hls,
                        n = r.autoLevelEnabled,
                        o = r.config,
                        l = r.media
                      if (t && l) {
                        var c = e ? e.stats : t.stats,
                          d = e ? e.duration : t.duration
                        if (c.aborted)
                          return (
                            u.logger.warn('frag loader destroy or aborted, disarm abandonRules'),
                            this.clearTimer(),
                            void (this._nextAutoLevel = -1)
                          )
                        if (n && !l.paused && l.playbackRate && l.readyState) {
                          var h = performance.now() - c.loading.start,
                            f = Math.abs(l.playbackRate)
                          if (!(h <= (500 * d) / f)) {
                            var g = r.levels,
                              v = r.minAutoLevel,
                              p = g[t.level],
                              m = c.total || Math.max(c.loaded, Math.round((d * p.maxBitrate) / 8)),
                              y = Math.max(1, c.bwEstimate ? c.bwEstimate / 8 : (1e3 * c.loaded) / h),
                              E = (m - c.loaded) / y,
                              T = l.currentTime,
                              S = (a.BufferHelper.bufferInfo(l, T, o.maxBufferHole).end - T) / f
                            if (!(S >= (2 * d) / f || E <= S)) {
                              var b,
                                L = Number.POSITIVE_INFINITY
                              for (b = t.level - 1; b > v && !((L = (d * g[b].maxBitrate) / (6.4 * y)) < S); b--);
                              if (!(L >= E)) {
                                var A = this.bwEstimator.getEstimate()
                                u.logger.warn(
                                  'Fragment ' +
                                    t.sn +
                                    (e ? ' part ' + e.index : '') +
                                    ' of level ' +
                                    t.level +
                                    ' is loading too slowly and will cause an underbuffer; aborting and switching to level ' +
                                    b +
                                    '\n      Current BW estimate: ' +
                                    (Object(i.isFiniteNumber)(A) ? (A / 1024).toFixed(3) : 'Unknown') +
                                    ' Kb/s\n      Estimated load time for current fragment: ' +
                                    E.toFixed(3) +
                                    ' s\n      Estimated load time for the next fragment: ' +
                                    L.toFixed(3) +
                                    ' s\n      Time to underbuffer: ' +
                                    S.toFixed(3) +
                                    ' s',
                                ),
                                  (r.nextLoadLevel = b),
                                  this.bwEstimator.sample(h, c.loaded),
                                  this.clearTimer(),
                                  t.loader && ((this.fragCurrent = this.partCurrent = null), t.loader.abort()),
                                  r.trigger(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, { frag: t, part: e, stats: c })
                              }
                            }
                          }
                        }
                      }
                    }),
                    (h.onFragLoaded = function (t, e) {
                      var r = e.frag,
                        n = e.part
                      if (r.type === l.PlaylistLevelType.MAIN && Object(i.isFiniteNumber)(r.sn)) {
                        var a = n ? n.stats : r.stats,
                          o = n ? n.duration : r.duration
                        if (
                          (this.clearTimer(),
                          (this.lastLoadedFragLevel = r.level),
                          (this._nextAutoLevel = -1),
                          this.hls.config.abrMaxWithRealBitrate)
                        ) {
                          var u = this.hls.levels[r.level],
                            c = (u.loaded ? u.loaded.bytes : 0) + a.loaded,
                            d = (u.loaded ? u.loaded.duration : 0) + o
                          ;(u.loaded = { bytes: c, duration: d }), (u.realBitrate = Math.round((8 * c) / d))
                        }
                        if (r.bitrateTest) {
                          var h = { stats: a, frag: r, part: n, id: r.type }
                          this.onFragBuffered(s.Events.FRAG_BUFFERED, h), (r.bitrateTest = !1)
                        }
                      }
                    }),
                    (h.onFragBuffered = function (t, e) {
                      var r = e.frag,
                        i = e.part,
                        n = i ? i.stats : r.stats
                      if (!n.aborted && r.type === l.PlaylistLevelType.MAIN && 'initSegment' !== r.sn) {
                        var s = n.parsing.end - n.loading.start
                        this.bwEstimator.sample(s, n.loaded),
                          (n.bwEstimate = this.bwEstimator.getEstimate()),
                          r.bitrateTest ? (this.bitrateTestDelay = s / 1e3) : (this.bitrateTestDelay = 0)
                      }
                    }),
                    (h.onError = function (t, e) {
                      switch (e.details) {
                        case o.ErrorDetails.FRAG_LOAD_ERROR:
                        case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                          this.clearTimer()
                      }
                    }),
                    (h.clearTimer = function () {
                      self.clearInterval(this.timer), (this.timer = void 0)
                    }),
                    (h.getNextABRAutoLevel = function () {
                      var t = this.fragCurrent,
                        e = this.partCurrent,
                        r = this.hls,
                        i = r.maxAutoLevel,
                        n = r.config,
                        s = r.minAutoLevel,
                        o = r.media,
                        l = e ? e.duration : t ? t.duration : 0,
                        c = o ? o.currentTime : 0,
                        d = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
                        h = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                        f = (a.BufferHelper.bufferInfo(o, c, n.maxBufferHole).end - c) / d,
                        g = this.findBestLevel(h, s, i, f, n.abrBandWidthFactor, n.abrBandWidthUpFactor)
                      if (g >= 0) return g
                      u.logger.trace(
                        (f ? 'rebuffering expected' : 'buffer is empty') + ', finding optimal quality level',
                      )
                      var v = l ? Math.min(l, n.maxStarvationDelay) : n.maxStarvationDelay,
                        p = n.abrBandWidthFactor,
                        m = n.abrBandWidthUpFactor
                      if (!f) {
                        var y = this.bitrateTestDelay
                        y &&
                          ((v = (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - y),
                          u.logger.trace(
                            'bitrate test took ' +
                              Math.round(1e3 * y) +
                              'ms, set first fragment max fetchDuration to ' +
                              Math.round(1e3 * v) +
                              ' ms',
                          ),
                          (p = m = 1))
                      }
                      return (g = this.findBestLevel(h, s, i, f + v, p, m)), Math.max(g, 0)
                    }),
                    (h.findBestLevel = function (t, e, r, i, n, s) {
                      for (
                        var a,
                          o = this.fragCurrent,
                          l = this.partCurrent,
                          c = this.lastLoadedFragLevel,
                          d = this.hls.levels,
                          h = d[c],
                          f = !(null == h || null === (a = h.details) || void 0 === a || !a.live),
                          g = null == h ? void 0 : h.codecSet,
                          v = l ? l.duration : o ? o.duration : 0,
                          p = r;
                        p >= e;
                        p--
                      ) {
                        var m = d[p]
                        if (m && (!g || m.codecSet === g)) {
                          var y = m.details,
                            E =
                              (l
                                ? null == y
                                  ? void 0
                                  : y.partTarget
                                : null == y
                                ? void 0
                                : y.averagetargetduration) || v,
                            T = void 0
                          T = p <= c ? n * t : s * t
                          var S = d[p].maxBitrate,
                            b = (S * E) / T
                          if (
                            (u.logger.trace(
                              'level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ' +
                                p +
                                '/' +
                                Math.round(T) +
                                '/' +
                                S +
                                '/' +
                                E +
                                '/' +
                                i +
                                '/' +
                                b,
                            ),
                            T > S && (!b || (f && !this.bitrateTestDelay) || b < i))
                          )
                            return p
                        }
                      }
                      return -1
                    }),
                    (e = t),
                    (r = [
                      {
                        key: 'nextAutoLevel',
                        get: function () {
                          var t = this._nextAutoLevel,
                            e = this.bwEstimator
                          if (!(-1 === t || (e && e.canEstimate()))) return t
                          var r = this.getNextABRAutoLevel()
                          return -1 !== t && (r = Math.min(t, r)), r
                        },
                        set: function (t) {
                          this._nextAutoLevel = t
                        },
                      },
                    ]) && c(e.prototype, r),
                    d && c(e, d),
                    t
                  )
                })()
                e.default = d
              },
            './src/controller/audio-stream-controller.ts':
              /*!***************************************************!*\
  !*** ./src/controller/audio-stream-controller.ts ***!
  \***************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ./base-stream-controller */ './src/controller/base-stream-controller.ts'),
                  s = r(/*! ../events */ './src/events.ts'),
                  a = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  o = r(/*! ./fragment-tracker */ './src/controller/fragment-tracker.ts'),
                  l = r(/*! ../types/level */ './src/types/level.ts'),
                  u = r(/*! ../types/loader */ './src/types/loader.ts'),
                  c = r(/*! ../loader/fragment */ './src/loader/fragment.ts'),
                  d = r(/*! ../demux/chunk-cache */ './src/demux/chunk-cache.ts'),
                  h = r(/*! ../demux/transmuxer-interface */ './src/demux/transmuxer-interface.ts'),
                  f = r(/*! ../types/transmuxer */ './src/types/transmuxer.ts'),
                  g = r(/*! ./fragment-finders */ './src/controller/fragment-finders.ts'),
                  v = r(/*! ../utils/discontinuities */ './src/utils/discontinuities.ts'),
                  p = r(/*! ../errors */ './src/errors.ts'),
                  m = r(/*! ../utils/logger */ './src/utils/logger.ts')
                function y() {
                  return (y =
                    Object.assign ||
                    function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e]
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                      }
                      return t
                    }).apply(this, arguments)
                }
                function E(t, e) {
                  return (E =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var T = (function (t) {
                  var e, r
                  function T(e, r) {
                    var i
                    return (
                      ((i = t.call(this, e, r, '[audio-stream-controller]') || this).videoBuffer = null),
                      (i.videoTrackCC = -1),
                      (i.waitingVideoCC = -1),
                      (i.audioSwitch = !1),
                      (i.trackId = -1),
                      (i.waitingData = null),
                      (i.mainDetails = null),
                      (i.bufferFlushed = !1),
                      i._registerListeners(),
                      i
                    )
                  }
                  ;(r = t), ((e = T).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), E(e, r)
                  var S = T.prototype
                  return (
                    (S.onHandlerDestroying = function () {
                      this._unregisterListeners(), (this.mainDetails = null)
                    }),
                    (S._registerListeners = function () {
                      var t = this.hls
                      t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.on(s.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                        t.on(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                        t.on(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                        t.on(s.Events.ERROR, this.onError, this),
                        t.on(s.Events.BUFFER_RESET, this.onBufferReset, this),
                        t.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this),
                        t.on(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                        t.on(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                        t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                    }),
                    (S._unregisterListeners = function () {
                      var t = this.hls
                      t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.off(s.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                        t.off(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                        t.off(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                        t.off(s.Events.ERROR, this.onError, this),
                        t.off(s.Events.BUFFER_RESET, this.onBufferReset, this),
                        t.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this),
                        t.off(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                        t.off(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                        t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                    }),
                    (S.onInitPtsFound = function (t, e) {
                      var r = e.frag,
                        i = e.id,
                        s = e.initPTS
                      if ('main' === i) {
                        var a = r.cc
                        ;(this.initPTS[r.cc] = s),
                          this.log('InitPTS for cc: ' + a + ' found from main: ' + s),
                          (this.videoTrackCC = a),
                          this.state === n.State.WAITING_INIT_PTS && this.tick()
                      }
                    }),
                    (S.startLoad = function (t) {
                      if (!this.levels) return (this.startPosition = t), void (this.state = n.State.STOPPED)
                      var e = this.lastCurrentTime
                      this.stopLoad(),
                        this.setInterval(100),
                        (this.fragLoadError = 0),
                        e > 0 && -1 === t
                          ? (this.log('Override startPosition with lastCurrentTime @' + e.toFixed(3)),
                            (this.state = n.State.IDLE))
                          : ((this.loadedmetadata = !1), (this.state = n.State.WAITING_TRACK)),
                        (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t),
                        this.tick()
                    }),
                    (S.doTick = function () {
                      switch (this.state) {
                        case n.State.IDLE:
                          this.doTickIdle()
                          break
                        case n.State.WAITING_TRACK:
                          var e,
                            r = this.levels,
                            i = this.trackId,
                            s = null == r || null === (e = r[i]) || void 0 === e ? void 0 : e.details
                          if (s) {
                            if (this.waitForCdnTuneIn(s)) break
                            this.state = n.State.WAITING_INIT_PTS
                          }
                          break
                        case n.State.FRAG_LOADING_WAITING_RETRY:
                          var o,
                            l = performance.now(),
                            u = this.retryDate
                          ;(!u || l >= u || (null !== (o = this.media) && void 0 !== o && o.seeking)) &&
                            (this.log('RetryDate reached, switch back to IDLE state'), (this.state = n.State.IDLE))
                          break
                        case n.State.WAITING_INIT_PTS:
                          var c = this.waitingData
                          if (c) {
                            var d = c.frag,
                              h = c.part,
                              f = c.cache,
                              v = c.complete
                            if (void 0 !== this.initPTS[d.cc]) {
                              ;(this.waitingData = null),
                                (this.waitingVideoCC = -1),
                                (this.state = n.State.FRAG_LOADING)
                              var p = { frag: d, part: h, payload: f.flush(), networkDetails: null }
                              this._handleFragmentLoadProgress(p),
                                v && t.prototype._handleFragmentLoadComplete.call(this, p)
                            } else if (this.videoTrackCC !== this.waitingVideoCC)
                              m.logger.log(
                                'Waiting fragment cc (' +
                                  d.cc +
                                  ') cancelled because video is at cc ' +
                                  this.videoTrackCC,
                              ),
                                this.clearWaitingFragment()
                            else {
                              var y = this.getLoadPosition(),
                                E = a.BufferHelper.bufferInfo(this.mediaBuffer, y, this.config.maxBufferHole)
                              Object(g.fragmentWithinToleranceTest)(E.end, this.config.maxFragLookUpTolerance, d) < 0 &&
                                (m.logger.log(
                                  'Waiting fragment cc (' +
                                    d.cc +
                                    ') @ ' +
                                    d.start +
                                    ' cancelled because another fragment at ' +
                                    E.end +
                                    ' is needed',
                                ),
                                this.clearWaitingFragment())
                            }
                          } else this.state = n.State.IDLE
                      }
                      this.onTickEnd()
                    }),
                    (S.clearWaitingFragment = function () {
                      var t = this.waitingData
                      t &&
                        (this.fragmentTracker.removeFragment(t.frag),
                        (this.waitingData = null),
                        (this.waitingVideoCC = -1),
                        (this.state = n.State.IDLE))
                    }),
                    (S.onTickEnd = function () {
                      var t = this.media
                      if (t && t.readyState) {
                        var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered
                        !this.loadedmetadata && e.length && (this.loadedmetadata = !0),
                          (this.lastCurrentTime = t.currentTime)
                      }
                    }),
                    (S.doTickIdle = function () {
                      var t,
                        e,
                        r = this.hls,
                        i = this.levels,
                        a = this.media,
                        o = this.trackId,
                        l = r.config
                      if (i && i[o] && (a || (!this.startFragRequested && l.startFragPrefetch))) {
                        var d = i[o].details
                        if (!d || (d.live && this.levelLastLoaded !== o) || this.waitForCdnTuneIn(d))
                          this.state = n.State.WAITING_TRACK
                        else {
                          this.bufferFlushed &&
                            ((this.bufferFlushed = !1),
                            this.afterBufferFlushed(
                              this.mediaBuffer ? this.mediaBuffer : this.media,
                              c.ElementaryStreamTypes.AUDIO,
                              u.PlaylistLevelType.AUDIO,
                            ))
                          var h = this.getFwdBufferInfo(
                            this.mediaBuffer ? this.mediaBuffer : this.media,
                            u.PlaylistLevelType.AUDIO,
                          )
                          if (null !== h) {
                            var f = h.len,
                              g = this.getMaxBufferLength(),
                              v = this.audioSwitch
                            if (!(f >= g) || v) {
                              if (!v && this._streamEnded(h, d))
                                return (
                                  r.trigger(s.Events.BUFFER_EOS, { type: 'audio' }), void (this.state = n.State.ENDED)
                                )
                              var p = d.fragments[0].start,
                                m = h.end
                              if (v) {
                                var y = this.getLoadPosition()
                                ;(m = y),
                                  d.PTSKnown &&
                                    y < p &&
                                    (h.end > p || h.nextStart) &&
                                    (this.log('Alt audio track ahead of main track, seek to start of alt audio track'),
                                    (a.currentTime = p + 0.05))
                              }
                              var E = this.getNextFragment(m, d)
                              E
                                ? 'identity' !==
                                    (null === (t = E.decryptdata) || void 0 === t ? void 0 : t.keyFormat) ||
                                  (null !== (e = E.decryptdata) && void 0 !== e && e.key)
                                  ? this.loadFragment(E, d, m)
                                  : this.loadKey(E, d)
                                : (this.bufferFlushed = !0)
                            }
                          }
                        }
                      }
                    }),
                    (S.getMaxBufferLength = function () {
                      var e = t.prototype.getMaxBufferLength.call(this),
                        r = this.getFwdBufferInfo(
                          this.videoBuffer ? this.videoBuffer : this.media,
                          u.PlaylistLevelType.MAIN,
                        )
                      return null === r ? e : Math.max(e, r.len)
                    }),
                    (S.onMediaDetaching = function () {
                      ;(this.videoBuffer = null), t.prototype.onMediaDetaching.call(this)
                    }),
                    (S.onAudioTracksUpdated = function (t, e) {
                      var r = e.audioTracks
                      this.resetTransmuxer(),
                        (this.levels = r.map(function (t) {
                          return new l.Level(t)
                        }))
                    }),
                    (S.onAudioTrackSwitching = function (t, e) {
                      var r = !!e.url
                      this.trackId = e.id
                      var i = this.fragCurrent
                      null != i && i.loader && i.loader.abort(),
                        (this.fragCurrent = null),
                        this.clearWaitingFragment(),
                        r ? this.setInterval(100) : this.resetTransmuxer(),
                        r ? ((this.audioSwitch = !0), (this.state = n.State.IDLE)) : (this.state = n.State.STOPPED),
                        this.tick()
                    }),
                    (S.onManifestLoading = function () {
                      ;(this.mainDetails = null),
                        this.fragmentTracker.removeAllFragments(),
                        (this.startPosition = this.lastCurrentTime = 0),
                        (this.bufferFlushed = !1)
                    }),
                    (S.onLevelLoaded = function (t, e) {
                      this.mainDetails = e.details
                    }),
                    (S.onAudioTrackLoaded = function (t, e) {
                      var r,
                        i = this.levels,
                        s = e.details,
                        a = e.id
                      if (i) {
                        this.log(
                          'Track ' + a + ' loaded [' + s.startSN + ',' + s.endSN + '],duration:' + s.totalduration,
                        )
                        var o = i[a],
                          l = 0
                        if (s.live || (null !== (r = o.details) && void 0 !== r && r.live)) {
                          var u = this.mainDetails
                          if ((s.fragments[0] || (s.deltaUpdateFailed = !0), s.deltaUpdateFailed || !u)) return
                          !o.details && s.hasProgramDateTime && u.hasProgramDateTime
                            ? (Object(v.alignMediaPlaylistByPDT)(s, u), (l = s.fragments[0].start))
                            : (l = this.alignPlaylists(s, o.details))
                        }
                        ;(o.details = s),
                          (this.levelLastLoaded = a),
                          this.startFragRequested ||
                            (!this.mainDetails && s.live) ||
                            this.setStartPosition(o.details, l),
                          this.state !== n.State.WAITING_TRACK ||
                            this.waitForCdnTuneIn(s) ||
                            (this.state = n.State.IDLE),
                          this.tick()
                      } else this.warn('Audio tracks were reset while loading level ' + a)
                    }),
                    (S._handleFragmentLoadProgress = function (t) {
                      var e,
                        r = t.frag,
                        i = t.part,
                        s = t.payload,
                        a = this.config,
                        o = this.trackId,
                        l = this.levels
                      if (l) {
                        var c = l[o],
                          g = c.details,
                          v = a.defaultAudioCodec || c.audioCodec || 'mp4a.40.2',
                          p = this.transmuxer
                        p ||
                          (p = this.transmuxer =
                            new h.default(
                              this.hls,
                              u.PlaylistLevelType.AUDIO,
                              this._handleTransmuxComplete.bind(this),
                              this._handleTransmuxerFlush.bind(this),
                            ))
                        var y = this.initPTS[r.cc],
                          E = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data
                        if (void 0 !== y) {
                          var T = i ? i.index : -1,
                            S = -1 !== T,
                            b = new f.ChunkMetadata(r.level, r.sn, r.stats.chunkCount, s.byteLength, T, S)
                          p.push(s, E, v, '', r, i, g.totalduration, !1, b, y)
                        } else
                          m.logger.log(
                            'Unknown video PTS for cc ' +
                              r.cc +
                              ', waiting for video PTS before demuxing audio frag ' +
                              r.sn +
                              ' of [' +
                              g.startSN +
                              ' ,' +
                              g.endSN +
                              '],track ' +
                              o,
                          ),
                            (this.waitingData = this.waitingData || {
                              frag: r,
                              part: i,
                              cache: new d.default(),
                              complete: !1,
                            }).cache.push(new Uint8Array(s)),
                            (this.waitingVideoCC = this.videoTrackCC),
                            (this.state = n.State.WAITING_INIT_PTS)
                      } else
                        this.warn(
                          'Audio tracks were reset while fragment load was in progress. Fragment ' +
                            r.sn +
                            ' of level ' +
                            r.level +
                            ' will not be buffered',
                        )
                    }),
                    (S._handleFragmentLoadComplete = function (e) {
                      this.waitingData
                        ? (this.waitingData.complete = !0)
                        : t.prototype._handleFragmentLoadComplete.call(this, e)
                    }),
                    (S.onBufferReset = function () {
                      ;(this.mediaBuffer = this.videoBuffer = null), (this.loadedmetadata = !1)
                    }),
                    (S.onBufferCreated = function (t, e) {
                      var r = e.tracks.audio
                      r && (this.mediaBuffer = r.buffer), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                    }),
                    (S.onFragBuffered = function (t, e) {
                      var r = e.frag,
                        i = e.part
                      r.type === u.PlaylistLevelType.AUDIO &&
                        (this.fragContextChanged(r)
                          ? this.warn(
                              'Fragment ' +
                                r.sn +
                                (i ? ' p: ' + i.index : '') +
                                ' of level ' +
                                r.level +
                                ' finished buffering, but was aborted. state: ' +
                                this.state +
                                ', audioSwitch: ' +
                                this.audioSwitch,
                            )
                          : ('initSegment' !== r.sn &&
                              ((this.fragPrevious = r),
                              this.audioSwitch &&
                                ((this.audioSwitch = !1),
                                this.hls.trigger(s.Events.AUDIO_TRACK_SWITCHED, { id: this.trackId }))),
                            this.fragBufferedComplete(r, i)))
                    }),
                    (S.onError = function (e, r) {
                      switch (r.details) {
                        case p.ErrorDetails.FRAG_LOAD_ERROR:
                        case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        case p.ErrorDetails.KEY_LOAD_ERROR:
                        case p.ErrorDetails.KEY_LOAD_TIMEOUT:
                          this.onFragmentOrKeyLoadError(u.PlaylistLevelType.AUDIO, r)
                          break
                        case p.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                        case p.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                          this.state !== n.State.ERROR &&
                            this.state !== n.State.STOPPED &&
                            ((this.state = r.fatal ? n.State.ERROR : n.State.IDLE),
                            this.warn(r.details + ' while loading frag, switching to ' + this.state + ' state'))
                          break
                        case p.ErrorDetails.BUFFER_FULL_ERROR:
                          if (
                            'audio' === r.parent &&
                            (this.state === n.State.PARSING || this.state === n.State.PARSED)
                          ) {
                            var i = !0,
                              s = this.getFwdBufferInfo(this.mediaBuffer, u.PlaylistLevelType.AUDIO)
                            s && s.len > 0.5 && (i = !this.reduceMaxBufferLength(s.len)),
                              i &&
                                (this.warn(
                                  'Buffer full error also media.currentTime is not buffered, flush audio buffer',
                                ),
                                (this.fragCurrent = null),
                                t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, 'audio')),
                              this.resetLoadingState()
                          }
                      }
                    }),
                    (S.onBufferFlushed = function (t, e) {
                      e.type === c.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0)
                    }),
                    (S._handleTransmuxComplete = function (t) {
                      var e,
                        r = 'audio',
                        i = this.hls,
                        a = t.remuxResult,
                        o = t.chunkMeta,
                        l = this.getCurrentContext(o)
                      if (!l)
                        return (
                          this.warn(
                            'The loading context changed while buffering fragment ' +
                              o.sn +
                              ' of level ' +
                              o.level +
                              '. This chunk will not be buffered.',
                          ),
                          void this.resetLiveStartWhenNotLoaded(o.level)
                        )
                      var u = l.frag,
                        d = l.part,
                        h = a.audio,
                        f = a.text,
                        g = a.id3,
                        v = a.initSegment
                      if (!this.fragContextChanged(u)) {
                        if (
                          ((this.state = n.State.PARSING),
                          this.audioSwitch && h && this.completeAudioSwitch(),
                          null != v &&
                            v.tracks &&
                            (this._bufferInitSegment(v.tracks, u, o),
                            i.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT, { frag: u, id: r, tracks: v.tracks })),
                          h)
                        ) {
                          var p = h.startPTS,
                            m = h.endPTS,
                            E = h.startDTS,
                            T = h.endDTS
                          d &&
                            (d.elementaryStreams[c.ElementaryStreamTypes.AUDIO] = {
                              startPTS: p,
                              endPTS: m,
                              startDTS: E,
                              endDTS: T,
                            }),
                            u.setElementaryStreamInfo(c.ElementaryStreamTypes.AUDIO, p, m, E, T),
                            this.bufferFragmentData(h, u, d, o)
                        }
                        if (null != g && null !== (e = g.samples) && void 0 !== e && e.length) {
                          var S = y({ frag: u, id: r }, g)
                          i.trigger(s.Events.FRAG_PARSING_METADATA, S)
                        }
                        if (f) {
                          var b = y({ frag: u, id: r }, f)
                          i.trigger(s.Events.FRAG_PARSING_USERDATA, b)
                        }
                      }
                    }),
                    (S._bufferInitSegment = function (t, e, r) {
                      if (this.state === n.State.PARSING) {
                        t.video && delete t.video
                        var i = t.audio
                        if (i) {
                          ;(i.levelCodec = i.codec),
                            (i.id = 'audio'),
                            this.log(
                              'Init audio buffer, container:' + i.container + ', codecs[parsed]=[' + i.codec + ']',
                            ),
                            this.hls.trigger(s.Events.BUFFER_CODECS, t)
                          var a = i.initSegment
                          if (null != a && a.byteLength) {
                            var o = { type: 'audio', frag: e, part: null, chunkMeta: r, parent: e.type, data: a }
                            this.hls.trigger(s.Events.BUFFER_APPENDING, o)
                          }
                          this.tick()
                        }
                      }
                    }),
                    (S.loadFragment = function (e, r, s) {
                      var a = this.fragmentTracker.getState(e)
                      ;(this.fragCurrent = e),
                        (this.audioSwitch || a === o.FragmentState.NOT_LOADED || a === o.FragmentState.PARTIAL) &&
                          ('initSegment' === e.sn
                            ? this._loadInitSegment(e)
                            : r.live && !Object(i.isFiniteNumber)(this.initPTS[e.cc])
                            ? (this.log(
                                'Waiting for video PTS in continuity counter ' +
                                  e.cc +
                                  ' of live stream before loading audio fragment ' +
                                  e.sn +
                                  ' of level ' +
                                  this.trackId,
                              ),
                              (this.state = n.State.WAITING_INIT_PTS))
                            : ((this.startFragRequested = !0), t.prototype.loadFragment.call(this, e, r, s)))
                    }),
                    (S.completeAudioSwitch = function () {
                      var e = this.hls,
                        r = this.media,
                        i = this.trackId
                      r &&
                        (this.log('Switching audio track : flushing all audio'),
                        t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, 'audio')),
                        (this.audioSwitch = !1),
                        e.trigger(s.Events.AUDIO_TRACK_SWITCHED, { id: i })
                    }),
                    T
                  )
                })(n.default)
                e.default = T
              },
            './src/controller/audio-track-controller.ts':
              /*!**************************************************!*\
  !*** ./src/controller/audio-track-controller.ts ***!
  \**************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../errors */ './src/errors.ts'),
                  s = r(/*! ./base-playlist-controller */ './src/controller/base-playlist-controller.ts'),
                  a = r(/*! ../types/loader */ './src/types/loader.ts')
                function o(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function l(t, e) {
                  return (l =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var u = (function (t) {
                  var e, r
                  function s(e) {
                    var r
                    return (
                      ((r = t.call(this, e, '[audio-track-controller]') || this).tracks = []),
                      (r.groupId = null),
                      (r.tracksInGroup = []),
                      (r.trackId = -1),
                      (r.trackName = ''),
                      (r.selectDefaultTrack = !0),
                      r.registerListeners(),
                      r
                    )
                  }
                  ;(r = t), ((e = s).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), l(e, r)
                  var u,
                    c,
                    d,
                    h = s.prototype
                  return (
                    (h.registerListeners = function () {
                      var t = this.hls
                      t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.on(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                        t.on(i.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                        t.on(i.Events.ERROR, this.onError, this)
                    }),
                    (h.unregisterListeners = function () {
                      var t = this.hls
                      t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.off(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                        t.off(i.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                        t.off(i.Events.ERROR, this.onError, this)
                    }),
                    (h.destroy = function () {
                      this.unregisterListeners(),
                        (this.tracks.length = 0),
                        (this.tracksInGroup.length = 0),
                        t.prototype.destroy.call(this)
                    }),
                    (h.onManifestLoading = function () {
                      ;(this.tracks = []),
                        (this.groupId = null),
                        (this.tracksInGroup = []),
                        (this.trackId = -1),
                        (this.trackName = ''),
                        (this.selectDefaultTrack = !0)
                    }),
                    (h.onManifestParsed = function (t, e) {
                      this.tracks = e.audioTracks || []
                    }),
                    (h.onAudioTrackLoaded = function (t, e) {
                      var r = e.id,
                        i = e.details,
                        n = this.tracksInGroup[r]
                      if (n) {
                        var s = n.details
                        ;(n.details = e.details),
                          this.log('audioTrack ' + r + ' loaded [' + i.startSN + '-' + i.endSN + ']'),
                          r === this.trackId && ((this.retryCount = 0), this.playlistLoaded(r, e, s))
                      } else this.warn('Invalid audio track id ' + r)
                    }),
                    (h.onLevelLoading = function (t, e) {
                      this.switchLevel(e.level)
                    }),
                    (h.onLevelSwitching = function (t, e) {
                      this.switchLevel(e.level)
                    }),
                    (h.switchLevel = function (t) {
                      var e = this.hls.levels[t]
                      if (null != e && e.audioGroupIds) {
                        var r = e.audioGroupIds[e.urlId]
                        if (this.groupId !== r) {
                          this.groupId = r
                          var n = this.tracks.filter(function (t) {
                            return !r || t.groupId === r
                          })
                          this.selectDefaultTrack &&
                            !n.some(function (t) {
                              return t.default
                            }) &&
                            (this.selectDefaultTrack = !1),
                            (this.tracksInGroup = n)
                          var s = { audioTracks: n }
                          this.log('Updating audio tracks, ' + n.length + ' track(s) found in "' + r + '" group-id'),
                            this.hls.trigger(i.Events.AUDIO_TRACKS_UPDATED, s),
                            this.selectInitialTrack()
                        }
                      }
                    }),
                    (h.onError = function (e, r) {
                      t.prototype.onError.call(this, e, r),
                        !r.fatal &&
                          r.context &&
                          r.context.type === a.PlaylistContextType.AUDIO_TRACK &&
                          r.context.id === this.trackId &&
                          r.context.groupId === this.groupId &&
                          this.retryLoadingOrFail(r)
                    }),
                    (h.setAudioTrack = function (t) {
                      var e = this.tracksInGroup
                      if (t < 0 || t >= e.length) this.warn('Invalid id passed to audio-track controller')
                      else {
                        this.clearTimer()
                        var r = e[this.trackId]
                        this.log('Now switching to audio-track index ' + t)
                        var n = e[t],
                          s = n.id,
                          a = n.groupId,
                          o = void 0 === a ? '' : a,
                          l = n.name,
                          u = n.type,
                          c = n.url
                        if (
                          ((this.trackId = t),
                          (this.trackName = l),
                          (this.selectDefaultTrack = !1),
                          this.hls.trigger(i.Events.AUDIO_TRACK_SWITCHING, {
                            id: s,
                            groupId: o,
                            name: l,
                            type: u,
                            url: c,
                          }),
                          !n.details || n.details.live)
                        ) {
                          var d = this.switchParams(n.url, null == r ? void 0 : r.details)
                          this.loadPlaylist(d)
                        }
                      }
                    }),
                    (h.selectInitialTrack = function () {
                      this.tracksInGroup
                      var t = this.trackName,
                        e = this.findTrackId(t) || this.findTrackId()
                      ;-1 !== e
                        ? this.setAudioTrack(e)
                        : (this.warn('No track found for running audio group-ID: ' + this.groupId),
                          this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.MEDIA_ERROR,
                            details: n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                            fatal: !0,
                          }))
                    }),
                    (h.findTrackId = function (t) {
                      for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                        var i = e[r]
                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                      }
                      return -1
                    }),
                    (h.loadPlaylist = function (t) {
                      var e = this.tracksInGroup[this.trackId]
                      if (this.shouldLoadTrack(e)) {
                        var r = e.id,
                          n = e.groupId,
                          s = e.url
                        if (t)
                          try {
                            s = t.addDirectives(s)
                          } catch (a) {
                            this.warn('Could not construct new URL with HLS Delivery Directives: ' + a)
                          }
                        this.log('loading audio-track playlist for id: ' + r),
                          this.clearTimer(),
                          this.hls.trigger(i.Events.AUDIO_TRACK_LOADING, {
                            url: s,
                            id: r,
                            groupId: n,
                            deliveryDirectives: t || null,
                          })
                      }
                    }),
                    (u = s),
                    (c = [
                      {
                        key: 'audioTracks',
                        get: function () {
                          return this.tracksInGroup
                        },
                      },
                      {
                        key: 'audioTrack',
                        get: function () {
                          return this.trackId
                        },
                        set: function (t) {
                          ;(this.selectDefaultTrack = !1), this.setAudioTrack(t)
                        },
                      },
                    ]) && o(u.prototype, c),
                    d && o(u, d),
                    s
                  )
                })(s.default)
                e.default = u
              },
            './src/controller/base-playlist-controller.ts':
              /*!****************************************************!*\
  !*** ./src/controller/base-playlist-controller.ts ***!
  \****************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return l
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../types/level */ './src/types/level.ts'),
                  s = r(/*! ./level-helper */ './src/controller/level-helper.ts'),
                  a = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  o = r(/*! ../errors */ './src/errors.ts'),
                  l = (function () {
                    function t(t, e) {
                      ;(this.hls = void 0),
                        (this.timer = -1),
                        (this.canLoad = !1),
                        (this.retryCount = 0),
                        (this.log = void 0),
                        (this.warn = void 0),
                        (this.log = a.logger.log.bind(a.logger, e + ':')),
                        (this.warn = a.logger.warn.bind(a.logger, e + ':')),
                        (this.hls = t)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        this.clearTimer(), (this.hls = this.log = this.warn = null)
                      }),
                      (e.onError = function (t, e) {
                        e.fatal && e.type === o.ErrorTypes.NETWORK_ERROR && this.clearTimer()
                      }),
                      (e.clearTimer = function () {
                        clearTimeout(this.timer), (this.timer = -1)
                      }),
                      (e.startLoad = function () {
                        ;(this.canLoad = !0), (this.retryCount = 0), this.loadPlaylist()
                      }),
                      (e.stopLoad = function () {
                        ;(this.canLoad = !1), this.clearTimer()
                      }),
                      (e.switchParams = function (t, e) {
                        var r = null == e ? void 0 : e.renditionReports
                        if (r)
                          for (var s = 0; s < r.length; s++) {
                            var a = r[s],
                              o = '' + a.URI
                            if (o === t.substr(-o.length)) {
                              var l = parseInt(a['LAST-MSN']),
                                u = parseInt(a['LAST-PART'])
                              if (e && this.hls.config.lowLatencyMode) {
                                var c = Math.min(e.age - e.partTarget, e.targetduration)
                                void 0 !== u && c > e.partTarget && (u += 1)
                              }
                              if (Object(i.isFiniteNumber)(l))
                                return new n.HlsUrlParameters(l, Object(i.isFiniteNumber)(u) ? u : void 0, n.HlsSkip.No)
                            }
                          }
                      }),
                      (e.loadPlaylist = function (t) {}),
                      (e.shouldLoadTrack = function (t) {
                        return this.canLoad && t && !!t.url && (!t.details || t.details.live)
                      }),
                      (e.playlistLoaded = function (t, e, r) {
                        var i = this,
                          n = e.details,
                          a = e.stats,
                          o = a.loading.end ? Math.max(0, self.performance.now() - a.loading.end) : 0
                        if (((n.advancedDateTime = Date.now() - o), n.live || (null != r && r.live))) {
                          if (
                            (n.reloaded(r),
                            r &&
                              this.log(
                                'live playlist ' +
                                  t +
                                  ' ' +
                                  (n.advanced ? 'REFRESHED ' + n.lastPartSn + '-' + n.lastPartIndex : 'MISSED'),
                              ),
                            r && n.fragments.length > 0 && Object(s.mergeDetails)(r, n),
                            !this.canLoad || !n.live)
                          )
                            return
                          var l,
                            u = void 0,
                            c = void 0
                          if (n.canBlockReload && n.endSN && n.advanced) {
                            var d = this.hls.config.lowLatencyMode,
                              h = n.lastPartSn,
                              f = n.endSN,
                              g = n.lastPartIndex,
                              v = h === f
                            ;-1 !== g ? ((u = v ? f + 1 : h), (c = v ? (d ? 0 : g) : g + 1)) : (u = f + 1)
                            var p = n.age,
                              m = p + n.ageHeader,
                              y = Math.min(m - n.partTarget, 1.5 * n.targetduration)
                            if (y > 0) {
                              if (r && y > r.tuneInGoal)
                                this.warn(
                                  'CDN Tune-in goal increased from: ' +
                                    r.tuneInGoal +
                                    ' to: ' +
                                    y +
                                    ' with playlist age: ' +
                                    n.age,
                                ),
                                  (y = 0)
                              else {
                                var E = Math.floor(y / n.targetduration)
                                ;(u += E),
                                  void 0 !== c && (c += Math.round((y % n.targetduration) / n.partTarget)),
                                  this.log(
                                    'CDN Tune-in age: ' +
                                      n.ageHeader +
                                      's last advanced ' +
                                      p.toFixed(2) +
                                      's goal: ' +
                                      y +
                                      ' skip sn ' +
                                      E +
                                      ' to part ' +
                                      c,
                                  )
                              }
                              n.tuneInGoal = y
                            }
                            if (((l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, c)), d || !v))
                              return void this.loadPlaylist(l)
                          } else l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, c)
                          var T = Object(s.computeReloadInterval)(n, a)
                          void 0 !== u && n.canBlockReload && (T -= n.partTarget || 1),
                            this.log('reload live playlist ' + t + ' in ' + Math.round(T) + ' ms'),
                            (this.timer = self.setTimeout(function () {
                              return i.loadPlaylist(l)
                            }, T))
                        } else this.clearTimer()
                      }),
                      (e.getDeliveryDirectives = function (t, e, r, i) {
                        var s = Object(n.getSkipValue)(t, r)
                        return (
                          null != e && e.skip && t.deltaUpdateFailed && ((r = e.msn), (i = e.part), (s = n.HlsSkip.No)),
                          new n.HlsUrlParameters(r, i, s)
                        )
                      }),
                      (e.retryLoadingOrFail = function (t) {
                        var e,
                          r = this,
                          i = this.hls.config,
                          n = this.retryCount < i.levelLoadingMaxRetry
                        if (n)
                          if (
                            (this.retryCount++,
                            t.details.indexOf('LoadTimeOut') > -1 &&
                              null !== (e = t.context) &&
                              void 0 !== e &&
                              e.deliveryDirectives)
                          )
                            this.warn('retry playlist loading #' + this.retryCount + ' after "' + t.details + '"'),
                              this.loadPlaylist()
                          else {
                            var s = Math.min(
                              Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay,
                              i.levelLoadingMaxRetryTimeout,
                            )
                            ;(this.timer = self.setTimeout(function () {
                              return r.loadPlaylist()
                            }, s)),
                              this.warn(
                                'retry playlist loading #' +
                                  this.retryCount +
                                  ' in ' +
                                  s +
                                  ' ms after "' +
                                  t.details +
                                  '"',
                              )
                          }
                        else
                          this.warn('cannot recover from error "' + t.details + '"'), this.clearTimer(), (t.fatal = !0)
                        return n
                      }),
                      t
                    )
                  })()
              },
            './src/controller/base-stream-controller.ts':
              /*!**************************************************!*\
  !*** ./src/controller/base-stream-controller.ts ***!
  \**************************************************/
              /*! exports provided: State, default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'State', function () {
                    return S
                  }),
                  r.d(e, 'default', function () {
                    return b
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../task-loop */ './src/task-loop.ts'),
                  s = r(/*! ./fragment-tracker */ './src/controller/fragment-tracker.ts'),
                  a = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  o = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  l = r(/*! ../events */ './src/events.ts'),
                  u = r(/*! ../errors */ './src/errors.ts'),
                  c = r(/*! ../types/transmuxer */ './src/types/transmuxer.ts'),
                  d = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  h = r(/*! ../utils/discontinuities */ './src/utils/discontinuities.ts'),
                  f = r(/*! ./fragment-finders */ './src/controller/fragment-finders.ts'),
                  g = r(/*! ./level-helper */ './src/controller/level-helper.ts'),
                  v = r(/*! ../loader/fragment-loader */ './src/loader/fragment-loader.ts'),
                  p = r(/*! ../crypt/decrypter */ './src/crypt/decrypter.ts'),
                  m = r(/*! ../utils/time-ranges */ './src/utils/time-ranges.ts'),
                  y = r(/*! ../types/loader */ './src/types/loader.ts')
                function E(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function T(t, e) {
                  return (T =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var S = {
                    STOPPED: 'STOPPED',
                    IDLE: 'IDLE',
                    KEY_LOADING: 'KEY_LOADING',
                    FRAG_LOADING: 'FRAG_LOADING',
                    FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
                    WAITING_TRACK: 'WAITING_TRACK',
                    PARSING: 'PARSING',
                    PARSED: 'PARSED',
                    BACKTRACKING: 'BACKTRACKING',
                    ENDED: 'ENDED',
                    ERROR: 'ERROR',
                    WAITING_INIT_PTS: 'WAITING_INIT_PTS',
                    WAITING_LEVEL: 'WAITING_LEVEL',
                  },
                  b = (function (t) {
                    var e, r
                    function n(e, r, i) {
                      var n
                      return (
                        ((n = t.call(this) || this).hls = void 0),
                        (n.fragPrevious = null),
                        (n.fragCurrent = null),
                        (n.fragmentTracker = void 0),
                        (n.transmuxer = null),
                        (n._state = S.STOPPED),
                        (n.media = void 0),
                        (n.mediaBuffer = void 0),
                        (n.config = void 0),
                        (n.bitrateTest = !1),
                        (n.lastCurrentTime = 0),
                        (n.nextLoadPosition = 0),
                        (n.startPosition = 0),
                        (n.loadedmetadata = !1),
                        (n.fragLoadError = 0),
                        (n.retryDate = 0),
                        (n.levels = null),
                        (n.fragmentLoader = void 0),
                        (n.levelLastLoaded = null),
                        (n.startFragRequested = !1),
                        (n.decrypter = void 0),
                        (n.initPTS = []),
                        (n.onvseeking = null),
                        (n.onvended = null),
                        (n.logPrefix = ''),
                        (n.log = void 0),
                        (n.warn = void 0),
                        (n.logPrefix = i),
                        (n.log = o.logger.log.bind(o.logger, i + ':')),
                        (n.warn = o.logger.warn.bind(o.logger, i + ':')),
                        (n.hls = e),
                        (n.fragmentLoader = new v.default(e.config)),
                        (n.fragmentTracker = r),
                        (n.config = e.config),
                        (n.decrypter = new p.default(e, e.config)),
                        e.on(
                          l.Events.KEY_LOADED,
                          n.onKeyLoaded,
                          (function (t) {
                            if (void 0 === t)
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                            return t
                          })(n),
                        ),
                        n
                      )
                    }
                    ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), T(e, r)
                    var b,
                      L,
                      A,
                      D = n.prototype
                    return (
                      (D.doTick = function () {
                        this.onTickEnd()
                      }),
                      (D.onTickEnd = function () {}),
                      (D.startLoad = function (t) {}),
                      (D.stopLoad = function () {
                        this.fragmentLoader.abort()
                        var t = this.fragCurrent
                        t && this.fragmentTracker.removeFragment(t),
                          this.resetTransmuxer(),
                          (this.fragCurrent = null),
                          (this.fragPrevious = null),
                          this.clearInterval(),
                          this.clearNextTick(),
                          (this.state = S.STOPPED)
                      }),
                      (D._streamEnded = function (t, e) {
                        var r = this.fragCurrent,
                          i = this.fragmentTracker
                        if (!e.live && r && r.sn === e.endSN && !t.nextStart) {
                          var n = i.getState(r)
                          return n === s.FragmentState.PARTIAL || n === s.FragmentState.OK
                        }
                        return !1
                      }),
                      (D.onMediaAttached = function (t, e) {
                        var r = (this.media = this.mediaBuffer = e.media)
                        ;(this.onvseeking = this.onMediaSeeking.bind(this)),
                          (this.onvended = this.onMediaEnded.bind(this)),
                          r.addEventListener('seeking', this.onvseeking),
                          r.addEventListener('ended', this.onvended)
                        var i = this.config
                        this.levels && i.autoStartLoad && this.state === S.STOPPED && this.startLoad(i.startPosition)
                      }),
                      (D.onMediaDetaching = function () {
                        var t = this.media
                        null != t &&
                          t.ended &&
                          (this.log('MSE detaching and video ended, reset startPosition'),
                          (this.startPosition = this.lastCurrentTime = 0)),
                          t &&
                            (t.removeEventListener('seeking', this.onvseeking),
                            t.removeEventListener('ended', this.onvended),
                            (this.onvseeking = this.onvended = null)),
                          (this.media = this.mediaBuffer = null),
                          (this.loadedmetadata = !1),
                          this.fragmentTracker.removeAllFragments(),
                          this.stopLoad()
                      }),
                      (D.onMediaSeeking = function () {
                        var t = this.config,
                          e = this.fragCurrent,
                          r = this.media,
                          n = this.mediaBuffer,
                          s = this.state,
                          o = r ? r.currentTime : 0,
                          l = a.BufferHelper.bufferInfo(n || r, o, t.maxBufferHole)
                        if (
                          (this.log(
                            'media seeking to ' + (Object(i.isFiniteNumber)(o) ? o.toFixed(3) : o) + ', state: ' + s,
                          ),
                          s === S.ENDED)
                        )
                          this.resetLoadingState()
                        else if (e && !l.len) {
                          var u = t.maxFragLookUpTolerance,
                            c = e.start - u,
                            d = o > e.start + e.duration + u
                          ;(o < c || d) &&
                            (d &&
                              e.loader &&
                              (this.log(
                                'seeking outside of buffer while fragment load in progress, cancel fragment load',
                              ),
                              e.loader.abort()),
                            this.resetLoadingState())
                        }
                        r && (this.lastCurrentTime = o),
                          this.loadedmetadata || l.len || (this.nextLoadPosition = this.startPosition = o),
                          this.tickImmediate()
                      }),
                      (D.onMediaEnded = function () {
                        this.startPosition = this.lastCurrentTime = 0
                      }),
                      (D.onKeyLoaded = function (t, e) {
                        if (this.state === S.KEY_LOADING && e.frag === this.fragCurrent && this.levels) {
                          this.state = S.IDLE
                          var r = this.levels[e.frag.level].details
                          r && this.loadFragment(e.frag, r, e.frag.start)
                        }
                      }),
                      (D.onHandlerDestroying = function () {
                        this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                      }),
                      (D.onHandlerDestroyed = function () {
                        ;(this.state = S.STOPPED),
                          this.hls.off(l.Events.KEY_LOADED, this.onKeyLoaded, this),
                          this.fragmentLoader && this.fragmentLoader.destroy(),
                          this.decrypter && this.decrypter.destroy(),
                          (this.hls =
                            this.log =
                            this.warn =
                            this.decrypter =
                            this.fragmentLoader =
                            this.fragmentTracker =
                              null),
                          t.prototype.onHandlerDestroyed.call(this)
                      }),
                      (D.loadKey = function (t, e) {
                        this.log(
                          'Loading key for ' +
                            t.sn +
                            ' of [' +
                            e.startSN +
                            '-' +
                            e.endSN +
                            '], ' +
                            ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                            ' ' +
                            t.level,
                        ),
                          (this.state = S.KEY_LOADING),
                          (this.fragCurrent = t),
                          this.hls.trigger(l.Events.KEY_LOADING, { frag: t })
                      }),
                      (D.loadFragment = function (t, e, r) {
                        this._loadFragForPlayback(t, e, r)
                      }),
                      (D._loadFragForPlayback = function (t, e, r) {
                        var i = this
                        this._doFragLoad(t, e, r, function (e) {
                          if (i.fragContextChanged(t))
                            return (
                              i.warn(
                                'Fragment ' +
                                  t.sn +
                                  (e.part ? ' p: ' + e.part.index : '') +
                                  ' of level ' +
                                  t.level +
                                  ' was dropped during download.',
                              ),
                              void i.fragmentTracker.removeFragment(t)
                            )
                          t.stats.chunkCount++, i._handleFragmentLoadProgress(e)
                        })
                          .then(function (e) {
                            if (e) {
                              i.fragLoadError = 0
                              var r = i.state
                              if (!i.fragContextChanged(t))
                                return 'payload' in e &&
                                  (i.log('Loaded fragment ' + t.sn + ' of level ' + t.level),
                                  i.hls.trigger(l.Events.FRAG_LOADED, e),
                                  i.state === S.BACKTRACKING)
                                  ? (i.fragmentTracker.backtrack(t, e), void i.resetFragmentLoading(t))
                                  : void i._handleFragmentLoadComplete(e)
                              ;(r === S.FRAG_LOADING || r === S.BACKTRACKING || (!i.fragCurrent && r === S.PARSING)) &&
                                (i.fragmentTracker.removeFragment(t), (i.state = S.IDLE))
                            }
                          })
                          .catch(function (e) {
                            i.warn(e), i.resetFragmentLoading(t)
                          })
                          .catch(function () {})
                      }),
                      (D.flushMainBuffer = function (t, e, r) {
                        if ((void 0 === r && (r = null), t - e)) {
                          var i = { startOffset: t, endOffset: e, type: r }
                          ;(this.fragLoadError = 0), this.hls.trigger(l.Events.BUFFER_FLUSHING, i)
                        }
                      }),
                      (D._loadInitSegment = function (t) {
                        var e = this
                        this._doFragLoad(t)
                          .then(function (r) {
                            if (!r || e.fragContextChanged(t) || !e.levels) throw new Error('init load aborted')
                            return r
                          })
                          .then(function (r) {
                            var i = e.hls,
                              n = r.payload,
                              s = t.decryptdata
                            if (n && n.byteLength > 0 && s && s.key && s.iv && 'AES-128' === s.method) {
                              var a = self.performance.now()
                              return e.decrypter
                                .webCryptoDecrypt(new Uint8Array(n), s.key.buffer, s.iv.buffer)
                                .then(function (e) {
                                  var n = self.performance.now()
                                  return (
                                    i.trigger(l.Events.FRAG_DECRYPTED, {
                                      frag: t,
                                      payload: e,
                                      stats: { tstart: a, tdecrypt: n },
                                    }),
                                    (r.payload = e),
                                    r
                                  )
                                })
                            }
                            return r
                          })
                          .then(function (r) {
                            var i = e.fragCurrent,
                              n = e.hls,
                              s = e.levels
                            if (!s) throw new Error('init load aborted, missing levels')
                            s[t.level].details
                            var a = t.stats
                            ;(e.state = S.IDLE),
                              (e.fragLoadError = 0),
                              (t.data = new Uint8Array(r.payload)),
                              (a.parsing.start = a.buffering.start = self.performance.now()),
                              (a.parsing.end = a.buffering.end = self.performance.now()),
                              r.frag === i &&
                                n.trigger(l.Events.FRAG_BUFFERED, { stats: a, frag: i, part: null, id: t.type }),
                              e.tick()
                          })
                          .catch(function (r) {
                            e.warn(r), e.resetFragmentLoading(t)
                          })
                          .catch(function () {})
                      }),
                      (D.fragContextChanged = function (t) {
                        var e = this.fragCurrent
                        return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                      }),
                      (D.fragBufferedComplete = function (t, e) {
                        var r = this.mediaBuffer ? this.mediaBuffer : this.media
                        this.log(
                          'Buffered ' +
                            t.type +
                            ' sn: ' +
                            t.sn +
                            (e ? ' part: ' + e.index : '') +
                            ' of ' +
                            ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                            ' ' +
                            t.level +
                            ' ' +
                            m.default.toString(a.BufferHelper.getBuffered(r)),
                        ),
                          (this.state = S.IDLE),
                          this.tick()
                      }),
                      (D._handleFragmentLoadComplete = function (t) {
                        var e = this.transmuxer
                        if (e) {
                          var r = t.frag,
                            i = t.part,
                            n = t.partsLoaded,
                            s =
                              !n ||
                              0 === n.length ||
                              n.some(function (t) {
                                return !t
                              }),
                            a = new c.ChunkMetadata(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !s)
                          e.flush(a)
                        }
                      }),
                      (D._handleFragmentLoadProgress = function (t) {}),
                      (D._doFragLoad = function (t, e, r, n) {
                        var s = this
                        if ((void 0 === r && (r = null), !this.levels))
                          throw new Error('frag load aborted, missing levels')
                        if (((r = Math.max(t.start, r || 0)), this.config.lowLatencyMode && e)) {
                          var a = e.partList
                          if (a && n) {
                            r > t.end && e.fragmentHint && (t = e.fragmentHint)
                            var o = this.getNextPart(a, t, r)
                            if (o > -1) {
                              var u = a[o]
                              return (
                                this.log(
                                  'Loading part sn: ' +
                                    t.sn +
                                    ' p: ' +
                                    u.index +
                                    ' cc: ' +
                                    t.cc +
                                    ' of playlist [' +
                                    e.startSN +
                                    '-' +
                                    e.endSN +
                                    '] parts [0-' +
                                    o +
                                    '-' +
                                    (a.length - 1) +
                                    '] ' +
                                    ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                                    ': ' +
                                    t.level +
                                    ', target: ' +
                                    parseFloat(r.toFixed(3)),
                                ),
                                (this.nextLoadPosition = u.start + u.duration),
                                (this.state = S.FRAG_LOADING),
                                this.hls.trigger(l.Events.FRAG_LOADING, { frag: t, part: a[o], targetBufferTime: r }),
                                this.doFragPartsLoad(t, a, o, n).catch(function (t) {
                                  return s.handleFragLoadError(t)
                                })
                              )
                            }
                            if (!t.url || this.loadedEndOfParts(a, r)) return Promise.resolve(null)
                          }
                        }
                        return (
                          this.log(
                            'Loading fragment ' +
                              t.sn +
                              ' cc: ' +
                              t.cc +
                              ' ' +
                              (e ? 'of [' + e.startSN + '-' + e.endSN + '] ' : '') +
                              ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                              ': ' +
                              t.level +
                              ', target: ' +
                              parseFloat(r.toFixed(3)),
                          ),
                          Object(i.isFiniteNumber)(t.sn) &&
                            !this.bitrateTest &&
                            (this.nextLoadPosition = t.start + t.duration),
                          (this.state = S.FRAG_LOADING),
                          this.hls.trigger(l.Events.FRAG_LOADING, { frag: t, targetBufferTime: r }),
                          this.fragmentLoader.load(t, n).catch(function (t) {
                            return s.handleFragLoadError(t)
                          })
                        )
                      }),
                      (D.doFragPartsLoad = function (t, e, r, i) {
                        var n = this
                        return new Promise(function (s, a) {
                          var o = []
                          !(function r(u) {
                            var c = e[u]
                            n.fragmentLoader
                              .loadPart(t, c, i)
                              .then(function (i) {
                                o[c.index] = i
                                var a = i.part
                                n.hls.trigger(l.Events.FRAG_LOADED, i)
                                var d = e[u + 1]
                                if (!d || d.fragment !== t) return s({ frag: t, part: a, partsLoaded: o })
                                r(u + 1)
                              })
                              .catch(a)
                          })(r)
                        })
                      }),
                      (D.handleFragLoadError = function (t) {
                        var e = t.data
                        return (
                          e && e.details === u.ErrorDetails.INTERNAL_ABORTED
                            ? this.handleFragLoadAborted(e.frag, e.part)
                            : this.hls.trigger(l.Events.ERROR, e),
                          null
                        )
                      }),
                      (D._handleTransmuxerFlush = function (t) {
                        var e = this.getCurrentContext(t)
                        if (e && this.state === S.PARSING) {
                          var r = e.frag,
                            i = e.part,
                            n = e.level,
                            s = self.performance.now()
                          ;(r.stats.parsing.end = s),
                            i && (i.stats.parsing.end = s),
                            this.updateLevelTiming(r, i, n, t.partial)
                        } else this.fragCurrent || (this.state = S.IDLE)
                      }),
                      (D.getCurrentContext = function (t) {
                        var e = this.levels,
                          r = t.level,
                          i = t.sn,
                          n = t.part
                        if (!e || !e[r])
                          return (
                            this.warn(
                              'Levels object was unset while buffering fragment ' +
                                i +
                                ' of level ' +
                                r +
                                '. The current chunk will not be buffered.',
                            ),
                            null
                          )
                        var s = e[r],
                          a = n > -1 ? Object(g.getPartWith)(s, i, n) : null,
                          o = a ? a.fragment : Object(g.getFragmentWithSN)(s, i, this.fragCurrent)
                        return o ? { frag: o, part: a, level: s } : null
                      }),
                      (D.bufferFragmentData = function (t, e, r, i) {
                        if (t && this.state === S.PARSING) {
                          var n = t.data1,
                            s = t.data2,
                            a = n
                          if ((n && s && (a = Object(d.appendUint8Array)(n, s)), a && a.length)) {
                            var o = { type: t.type, frag: e, part: r, chunkMeta: i, parent: e.type, data: a }
                            this.hls.trigger(l.Events.BUFFER_APPENDING, o),
                              t.dropped && t.independent && !r && this.flushBufferGap(e)
                          }
                        }
                      }),
                      (D.flushBufferGap = function (t) {
                        var e = this.media
                        if (e)
                          if (a.BufferHelper.isBuffered(e, e.currentTime)) {
                            var r = e.currentTime,
                              i = a.BufferHelper.bufferInfo(e, r, 0),
                              n = t.duration,
                              s = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * n),
                              o = Math.max(Math.min(t.start - s, i.end - s), r + s)
                            t.start - o > s && this.flushMainBuffer(o, t.start)
                          } else this.flushMainBuffer(0, t.start)
                      }),
                      (D.getFwdBufferInfo = function (t, e) {
                        var r = this.config,
                          n = this.getLoadPosition()
                        if (!Object(i.isFiniteNumber)(n)) return null
                        var s = a.BufferHelper.bufferInfo(t, n, r.maxBufferHole)
                        if (0 === s.len && void 0 !== s.nextStart) {
                          var o = this.fragmentTracker.getBufferedFrag(n, e)
                          if (o && s.nextStart < o.end)
                            return a.BufferHelper.bufferInfo(t, n, Math.max(s.nextStart, r.maxBufferHole))
                        }
                        return s
                      }),
                      (D.getMaxBufferLength = function (t) {
                        var e,
                          r = this.config
                        return (
                          (e = t ? Math.max((8 * r.maxBufferSize) / t, r.maxBufferLength) : r.maxBufferLength),
                          Math.min(e, r.maxMaxBufferLength)
                        )
                      }),
                      (D.reduceMaxBufferLength = function (t) {
                        var e = this.config,
                          r = t || e.maxBufferLength
                        return (
                          e.maxMaxBufferLength >= r &&
                          ((e.maxMaxBufferLength /= 2),
                          this.warn('Reduce max buffer length to ' + e.maxMaxBufferLength + 's'),
                          !0)
                        )
                      }),
                      (D.getNextFragment = function (t, e) {
                        var r,
                          i,
                          n = e.fragments,
                          s = n.length
                        if (!s) return null
                        var a,
                          o = this.config,
                          l = n[0].start
                        if (e.live) {
                          var u = o.initialLiveManifestSize
                          if (s < u)
                            return (
                              this.warn('Not enough fragments to start playback (have: ' + s + ', need: ' + u + ')'),
                              null
                            )
                          e.PTSKnown ||
                            this.startFragRequested ||
                            -1 !== this.startPosition ||
                            ((a = this.getInitialLiveFragment(e, n)),
                            (this.startPosition = a ? this.hls.liveSyncPosition || a.start : t))
                        } else t <= l && (a = n[0])
                        if (!a) {
                          var c = o.lowLatencyMode ? e.partEnd : e.fragmentEnd
                          a = this.getFragmentAtPosition(t, c, e)
                        }
                        return (
                          null === (r = a) ||
                            void 0 === r ||
                            !r.initSegment ||
                            (null !== (i = a) && void 0 !== i && i.initSegment.data) ||
                            this.bitrateTest ||
                            (a = a.initSegment),
                          a
                        )
                      }),
                      (D.getNextPart = function (t, e, r) {
                        for (var i = -1, n = !1, s = !0, a = 0, o = t.length; a < o; a++) {
                          var l = t[a]
                          if (((s = s && !l.independent), i > -1 && r < l.start)) break
                          var u = l.loaded
                          !u && (n || l.independent || s) && l.fragment === e && (i = a), (n = u)
                        }
                        return i
                      }),
                      (D.loadedEndOfParts = function (t, e) {
                        var r = t[t.length - 1]
                        return r && e > r.start && r.loaded
                      }),
                      (D.getInitialLiveFragment = function (t, e) {
                        var r = this.fragPrevious,
                          i = null
                        if (r) {
                          if (
                            (t.hasProgramDateTime &&
                              (this.log(
                                'Live playlist, switching playlist, load frag with same PDT: ' + r.programDateTime,
                              ),
                              (i = Object(f.findFragmentByPDT)(
                                e,
                                r.endProgramDateTime,
                                this.config.maxFragLookUpTolerance,
                              ))),
                            !i)
                          ) {
                            var n = r.sn + 1
                            if (n >= t.startSN && n <= t.endSN) {
                              var s = e[n - t.startSN]
                              r.cc === s.cc &&
                                ((i = s),
                                this.log('Live playlist, switching playlist, load frag with next SN: ' + i.sn))
                            }
                            i ||
                              ((i = Object(f.findFragWithCC)(e, r.cc)) &&
                                this.log('Live playlist, switching playlist, load frag with same CC: ' + i.sn))
                          }
                        } else {
                          var a = this.hls.liveSyncPosition
                          null !== a &&
                            (i = this.getFragmentAtPosition(a, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                        }
                        return i
                      }),
                      (D.getFragmentAtPosition = function (t, e, r) {
                        var i,
                          n = this.config,
                          a = this.fragPrevious,
                          o = r.fragments,
                          l = r.endSN,
                          u = r.fragmentHint,
                          c = n.maxFragLookUpTolerance,
                          d = !!(n.lowLatencyMode && r.partList && u)
                        if ((d && u && !this.bitrateTest && ((o = o.concat(u)), (l = u.sn)), t < e)) {
                          var h = t > e - c ? 0 : c
                          i = Object(f.findFragmentByPTS)(a, o, t, h)
                        } else i = o[o.length - 1]
                        if (i) {
                          var g = i.sn - r.startSN,
                            v = a && i.level === a.level,
                            p = o[g + 1]
                          if (this.fragmentTracker.getState(i) === s.FragmentState.BACKTRACKED) {
                            i = null
                            for (
                              var m = g;
                              o[m] && this.fragmentTracker.getState(o[m]) === s.FragmentState.BACKTRACKED;

                            )
                              i = a ? o[m--] : o[--m]
                            i || (i = p)
                          } else
                            a &&
                              i.sn === a.sn &&
                              !d &&
                              v &&
                              (i.sn < l && this.fragmentTracker.getState(p) !== s.FragmentState.OK
                                ? (this.log('SN ' + i.sn + ' just loaded, load next one: ' + p.sn), (i = p))
                                : (i = null))
                        }
                        return i
                      }),
                      (D.synchronizeToLiveEdge = function (t) {
                        var e = this.config,
                          r = this.media
                        if (r) {
                          var i = this.hls.liveSyncPosition,
                            n = r.currentTime,
                            s = t.fragments[0].start,
                            a = t.edge,
                            o = n >= s - e.maxFragLookUpTolerance && n <= a
                          if (null !== i && r.duration > i && (n < i || !o)) {
                            var l =
                              void 0 !== e.liveMaxLatencyDuration
                                ? e.liveMaxLatencyDuration
                                : e.liveMaxLatencyDurationCount * t.targetduration
                            ;((!o && r.readyState < 4) || n < a - l) &&
                              (this.loadedmetadata || (this.nextLoadPosition = i),
                              r.readyState &&
                                (this.warn(
                                  'Playback: ' +
                                    n.toFixed(3) +
                                    ' is located too far from the end of live sliding playlist: ' +
                                    a +
                                    ', reset currentTime to : ' +
                                    i.toFixed(3),
                                ),
                                (r.currentTime = i)))
                          }
                        }
                      }),
                      (D.alignPlaylists = function (t, e) {
                        var r = this.levels,
                          n = this.levelLastLoaded,
                          s = this.fragPrevious,
                          a = null !== n ? r[n] : null,
                          o = t.fragments.length
                        if (!o) return this.warn('No fragments in live playlist'), 0
                        var l = t.fragments[0].start,
                          u = !e,
                          c = t.alignedSliding && Object(i.isFiniteNumber)(l)
                        if (u || (!c && !l)) {
                          Object(h.alignStream)(s, a, t)
                          var d = t.fragments[0].start
                          return (
                            this.log(
                              'Live playlist sliding: ' +
                                d.toFixed(2) +
                                ' start-sn: ' +
                                (e ? e.startSN : 'na') +
                                '->' +
                                t.startSN +
                                ' prev-sn: ' +
                                (s ? s.sn : 'na') +
                                ' fragments: ' +
                                o,
                            ),
                            d
                          )
                        }
                        return l
                      }),
                      (D.waitForCdnTuneIn = function (t) {
                        return t.live && t.canBlockReload && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                      }),
                      (D.setStartPosition = function (t, e) {
                        var r = this.startPosition
                        if ((r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime)) {
                          var n = t.startTimeOffset
                          Object(i.isFiniteNumber)(n)
                            ? ((r = e + n),
                              n < 0 && (r += t.totalduration),
                              (r = Math.min(Math.max(e, r), e + t.totalduration)),
                              this.log('Start time offset ' + n + ' found in playlist, adjust startPosition to ' + r),
                              (this.startPosition = r))
                            : t.live
                            ? (r = this.hls.liveSyncPosition || e)
                            : (this.startPosition = r = 0),
                            (this.lastCurrentTime = r)
                        }
                        this.nextLoadPosition = r
                      }),
                      (D.getLoadPosition = function () {
                        var t = this.media,
                          e = 0
                        return (
                          this.loadedmetadata && t
                            ? (e = t.currentTime)
                            : this.nextLoadPosition && (e = this.nextLoadPosition),
                          e
                        )
                      }),
                      (D.handleFragLoadAborted = function (t, e) {
                        this.transmuxer &&
                          'initSegment' !== t.sn &&
                          t.stats.aborted &&
                          (this.warn(
                            'Fragment ' + t.sn + (e ? ' part' + e.index : '') + ' of level ' + t.level + ' was aborted',
                          ),
                          this.resetFragmentLoading(t))
                      }),
                      (D.resetFragmentLoading = function (t) {
                        ;(this.fragCurrent && this.fragContextChanged(t)) || (this.state = S.IDLE)
                      }),
                      (D.onFragmentOrKeyLoadError = function (t, e) {
                        if (!e.fatal) {
                          var r = e.frag
                          if (r && r.type === t) {
                            this.fragCurrent
                            var i = this.config
                            if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
                              if (this.resetLiveStartWhenNotLoaded(r.level)) return
                              var n = Math.min(
                                Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay,
                                i.fragLoadingMaxRetryTimeout,
                              )
                              this.warn(
                                'Fragment ' +
                                  r.sn +
                                  ' of ' +
                                  t +
                                  ' ' +
                                  r.level +
                                  ' failed to load, retrying in ' +
                                  n +
                                  'ms',
                              ),
                                (this.retryDate = self.performance.now() + n),
                                this.fragLoadError++,
                                (this.state = S.FRAG_LOADING_WAITING_RETRY)
                            } else
                              e.levelRetry
                                ? (t === y.PlaylistLevelType.AUDIO && (this.fragCurrent = null),
                                  (this.fragLoadError = 0),
                                  (this.state = S.IDLE))
                                : (o.logger.error(e.details + ' reaches max retry, redispatch as fatal ...'),
                                  (e.fatal = !0),
                                  this.hls.stopLoad(),
                                  (this.state = S.ERROR))
                          }
                        }
                      }),
                      (D.afterBufferFlushed = function (t, e, r) {
                        if (t) {
                          var i = a.BufferHelper.getBuffered(t)
                          this.fragmentTracker.detectEvictedFragments(e, i, r),
                            this.state === S.ENDED && this.resetLoadingState()
                        }
                      }),
                      (D.resetLoadingState = function () {
                        ;(this.fragCurrent = null), (this.fragPrevious = null), (this.state = S.IDLE)
                      }),
                      (D.resetLiveStartWhenNotLoaded = function (t) {
                        if (!this.loadedmetadata) {
                          this.startFragRequested = !1
                          var e = this.levels ? this.levels[t].details : null
                          if (null != e && e.live)
                            return (this.startPosition = -1), this.setStartPosition(e, 0), this.resetLoadingState(), !0
                          this.nextLoadPosition = this.startPosition
                        }
                        return !1
                      }),
                      (D.updateLevelTiming = function (t, e, r, i) {
                        var n = this,
                          s = r.details
                        Object.keys(t.elementaryStreams).reduce(function (e, a) {
                          var o = t.elementaryStreams[a]
                          if (o) {
                            var u = o.endPTS - o.startPTS
                            if (u <= 0)
                              return (
                                n.warn(
                                  'Could not parse fragment ' +
                                    t.sn +
                                    ' ' +
                                    a +
                                    ' duration reliably (' +
                                    u +
                                    ') resetting transmuxer to fallback to playlist timing',
                                ),
                                n.resetTransmuxer(),
                                e || !1
                              )
                            var c = i ? 0 : Object(g.updateFragPTSDTS)(s, t, o.startPTS, o.endPTS, o.startDTS, o.endDTS)
                            return (
                              n.hls.trigger(l.Events.LEVEL_PTS_UPDATED, {
                                details: s,
                                level: r,
                                drift: c,
                                type: a,
                                frag: t,
                                start: o.startPTS,
                                end: o.endPTS,
                              }),
                              !0
                            )
                          }
                          return e
                        }, !1)
                          ? ((this.state = S.PARSED), this.hls.trigger(l.Events.FRAG_PARSED, { frag: t, part: e }))
                          : this.resetLoadingState()
                      }),
                      (D.resetTransmuxer = function () {
                        this.transmuxer && (this.transmuxer.destroy(), (this.transmuxer = null))
                      }),
                      (b = n),
                      (L = [
                        {
                          key: 'state',
                          get: function () {
                            return this._state
                          },
                          set: function (t) {
                            var e = this._state
                            e !== t && ((this._state = t), this.log(e + '->' + t))
                          },
                        },
                      ]) && E(b.prototype, L),
                      A && E(b, A),
                      n
                    )
                  })(n.default)
              },
            './src/controller/buffer-controller.ts':
              /*!*********************************************!*\
  !*** ./src/controller/buffer-controller.ts ***!
  \*********************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return f
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  a = r(/*! ../errors */ './src/errors.ts'),
                  o = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  l = r(/*! ../utils/mediasource-helper */ './src/utils/mediasource-helper.ts'),
                  u = r(/*! ../loader/fragment */ './src/loader/fragment.ts'),
                  c = r(/*! ./buffer-operation-queue */ './src/controller/buffer-operation-queue.ts'),
                  d = Object(l.getMediaSource)(),
                  h = /([ha]vc.)(?:\.[^.,]+)+/,
                  f = (function () {
                    function t(t) {
                      var e = this
                      ;(this.details = null),
                        (this._objectUrl = null),
                        (this.operationQueue = void 0),
                        (this.listeners = void 0),
                        (this.hls = void 0),
                        (this.bufferCodecEventsExpected = 0),
                        (this._bufferCodecEventsTotal = 0),
                        (this.media = null),
                        (this.mediaSource = null),
                        (this.appendError = 0),
                        (this.tracks = {}),
                        (this.pendingTracks = {}),
                        (this.sourceBuffer = void 0),
                        (this._onMediaSourceOpen = function () {
                          var t = e.hls,
                            r = e.media,
                            i = e.mediaSource
                          s.logger.log('[buffer-controller]: Media source opened'),
                            r && (e.updateMediaElementDuration(), t.trigger(n.Events.MEDIA_ATTACHED, { media: r })),
                            i && i.removeEventListener('sourceopen', e._onMediaSourceOpen),
                            e.checkPendingTracks()
                        }),
                        (this._onMediaSourceClose = function () {
                          s.logger.log('[buffer-controller]: Media source closed')
                        }),
                        (this._onMediaSourceEnded = function () {
                          s.logger.log('[buffer-controller]: Media source ended')
                        }),
                        (this.hls = t),
                        this._initSourceBuffer(),
                        this.registerListeners()
                    }
                    var e = t.prototype
                    return (
                      (e.hasSourceTypes = function () {
                        return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                      }),
                      (e.destroy = function () {
                        this.unregisterListeners(), (this.details = null)
                      }),
                      (e.registerListeners = function () {
                        var t = this.hls
                        t.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                          t.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          t.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          t.on(n.Events.BUFFER_RESET, this.onBufferReset, this),
                          t.on(n.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                          t.on(n.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                          t.on(n.Events.BUFFER_EOS, this.onBufferEos, this),
                          t.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                          t.on(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                          t.on(n.Events.FRAG_PARSED, this.onFragParsed, this),
                          t.on(n.Events.FRAG_CHANGED, this.onFragChanged, this)
                      }),
                      (e.unregisterListeners = function () {
                        var t = this.hls
                        t.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                          t.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          t.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          t.off(n.Events.BUFFER_RESET, this.onBufferReset, this),
                          t.off(n.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                          t.off(n.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                          t.off(n.Events.BUFFER_EOS, this.onBufferEos, this),
                          t.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                          t.off(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                          t.off(n.Events.FRAG_PARSED, this.onFragParsed, this),
                          t.off(n.Events.FRAG_CHANGED, this.onFragChanged, this)
                      }),
                      (e._initSourceBuffer = function () {
                        ;(this.sourceBuffer = {}),
                          (this.operationQueue = new c.default(this.sourceBuffer)),
                          (this.listeners = { audio: [], video: [], audiovideo: [] })
                      }),
                      (e.onManifestParsed = function (t, e) {
                        var r = 2
                        ;((e.audio && !e.video) || !e.altAudio) && (r = 1),
                          (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r),
                          (this.details = null),
                          s.logger.log(this.bufferCodecEventsExpected + ' bufferCodec event(s) expected')
                      }),
                      (e.onMediaAttaching = function (t, e) {
                        var r = (this.media = e.media)
                        if (r && d) {
                          var i = (this.mediaSource = new d())
                          i.addEventListener('sourceopen', this._onMediaSourceOpen),
                            i.addEventListener('sourceended', this._onMediaSourceEnded),
                            i.addEventListener('sourceclose', this._onMediaSourceClose),
                            (r.src = self.URL.createObjectURL(i)),
                            (this._objectUrl = r.src)
                        }
                      }),
                      (e.onMediaDetaching = function () {
                        var t = this.media,
                          e = this.mediaSource,
                          r = this._objectUrl
                        if (e) {
                          if ((s.logger.log('[buffer-controller]: media source detaching'), 'open' === e.readyState))
                            try {
                              e.endOfStream()
                            } catch (i) {
                              s.logger.warn(
                                '[buffer-controller]: onMediaDetaching: ' + i.message + ' while calling endOfStream',
                              )
                            }
                          this.onBufferReset(),
                            e.removeEventListener('sourceopen', this._onMediaSourceOpen),
                            e.removeEventListener('sourceended', this._onMediaSourceEnded),
                            e.removeEventListener('sourceclose', this._onMediaSourceClose),
                            t &&
                              (r && self.URL.revokeObjectURL(r),
                              t.src === r
                                ? (t.removeAttribute('src'), t.load())
                                : s.logger.warn(
                                    '[buffer-controller]: media.src was changed by a third party - skip cleanup',
                                  )),
                            (this.mediaSource = null),
                            (this.media = null),
                            (this._objectUrl = null),
                            (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal),
                            (this.pendingTracks = {}),
                            (this.tracks = {})
                        }
                        this.hls.trigger(n.Events.MEDIA_DETACHED, void 0)
                      }),
                      (e.onBufferReset = function () {
                        var t = this
                        this.getSourceBufferTypes().forEach(function (e) {
                          var r = t.sourceBuffer[e]
                          try {
                            r &&
                              (t.removeBufferListeners(e),
                              t.mediaSource && t.mediaSource.removeSourceBuffer(r),
                              (t.sourceBuffer[e] = void 0))
                          } catch (i) {
                            s.logger.warn('[buffer-controller]: Failed to reset the ' + e + ' buffer', i)
                          }
                        }),
                          this._initSourceBuffer()
                      }),
                      (e.onBufferCodecs = function (t, e) {
                        var r = this,
                          i = this.getSourceBufferTypes().length
                        Object.keys(e).forEach(function (t) {
                          if (i) {
                            var n = r.tracks[t]
                            if (n && 'function' == typeof n.buffer.changeType) {
                              var s = e[t],
                                a = s.codec,
                                o = s.levelCodec,
                                l = s.container
                              if ((n.levelCodec || n.codec).replace(h, '$1') !== (o || a).replace(h, '$1')) {
                                var u = l + ';codecs=' + (o || a)
                                r.appendChangeType(t, u)
                              }
                            }
                          } else r.pendingTracks[t] = e[t]
                        }),
                          i ||
                            ((this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0)),
                            this.mediaSource && 'open' === this.mediaSource.readyState && this.checkPendingTracks())
                      }),
                      (e.appendChangeType = function (t, e) {
                        var r = this,
                          i = this.operationQueue,
                          n = {
                            execute: function () {
                              var n = r.sourceBuffer[t]
                              n &&
                                (s.logger.log('[buffer-controller]: changing ' + t + ' sourceBuffer type to ' + e),
                                n.changeType(e)),
                                i.shiftAndExecuteNext(t)
                            },
                            onStart: function () {},
                            onComplete: function () {},
                            onError: function (e) {
                              s.logger.warn('[buffer-controller]: Failed to change ' + t + ' SourceBuffer type', e)
                            },
                          }
                        i.append(n, t)
                      }),
                      (e.onBufferAppending = function (t, e) {
                        var r = this,
                          i = this.hls,
                          l = this.operationQueue,
                          u = this.tracks,
                          c = e.data,
                          d = e.type,
                          h = e.frag,
                          f = e.part,
                          g = e.chunkMeta,
                          v = g.buffering[d],
                          p = self.performance.now()
                        v.start = p
                        var m = h.stats.buffering,
                          y = f ? f.stats.buffering : null
                        0 === m.start && (m.start = p), y && 0 === y.start && (y.start = p)
                        var E = u.audio,
                          T = 'audio' === d && 1 === g.id && 'audio/mpeg' === (null == E ? void 0 : E.container),
                          S = {
                            execute: function () {
                              if (((v.executeStart = self.performance.now()), T)) {
                                var t = r.sourceBuffer[d]
                                if (t) {
                                  var e = h.start - t.timestampOffset
                                  Math.abs(e) >= 0.1 &&
                                    (s.logger.log(
                                      '[buffer-controller]: Updating audio SourceBuffer timestampOffset to ' +
                                        h.start +
                                        ' (delta: ' +
                                        e +
                                        ') sn: ' +
                                        h.sn +
                                        ')',
                                    ),
                                    (t.timestampOffset = h.start))
                                }
                              }
                              r.appendExecutor(c, d)
                            },
                            onStart: function () {},
                            onComplete: function () {
                              var t = self.performance.now()
                              ;(v.executeEnd = v.end = t),
                                0 === m.first && (m.first = t),
                                y && 0 === y.first && (y.first = t)
                              var e = r.sourceBuffer,
                                i = {}
                              for (var s in e) i[s] = o.BufferHelper.getBuffered(e[s])
                              ;(r.appendError = 0),
                                r.hls.trigger(n.Events.BUFFER_APPENDED, {
                                  type: d,
                                  frag: h,
                                  part: f,
                                  chunkMeta: g,
                                  parent: h.type,
                                  timeRanges: i,
                                })
                            },
                            onError: function (t) {
                              s.logger.error(
                                '[buffer-controller]: Error encountered while trying to append to the ' +
                                  d +
                                  ' SourceBuffer',
                                t,
                              )
                              var e = {
                                type: a.ErrorTypes.MEDIA_ERROR,
                                parent: h.type,
                                details: a.ErrorDetails.BUFFER_APPEND_ERROR,
                                err: t,
                                fatal: !1,
                              }
                              t.code === DOMException.QUOTA_EXCEEDED_ERR
                                ? (e.details = a.ErrorDetails.BUFFER_FULL_ERROR)
                                : (r.appendError++,
                                  (e.details = a.ErrorDetails.BUFFER_APPEND_ERROR),
                                  r.appendError > i.config.appendErrorMaxRetry &&
                                    (s.logger.error(
                                      '[buffer-controller]: Failed ' +
                                        i.config.appendErrorMaxRetry +
                                        ' times to append segment in sourceBuffer',
                                    ),
                                    (e.fatal = !0))),
                                i.trigger(n.Events.ERROR, e)
                            },
                          }
                        l.append(S, d)
                      }),
                      (e.onBufferFlushing = function (t, e) {
                        var r = this,
                          i = this.operationQueue,
                          a = function (t) {
                            return {
                              execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                              onStart: function () {},
                              onComplete: function () {
                                r.hls.trigger(n.Events.BUFFER_FLUSHED, { type: t })
                              },
                              onError: function (e) {
                                s.logger.warn('[buffer-controller]: Failed to remove from ' + t + ' SourceBuffer', e)
                              },
                            }
                          }
                        e.type
                          ? i.append(a(e.type), e.type)
                          : this.getSourceBufferTypes().forEach(function (t) {
                              i.append(a(t), t)
                            })
                      }),
                      (e.onFragParsed = function (t, e) {
                        var r = this,
                          i = e.frag,
                          a = e.part,
                          o = [],
                          l = a ? a.elementaryStreams : i.elementaryStreams
                        l[u.ElementaryStreamTypes.AUDIOVIDEO]
                          ? o.push('audiovideo')
                          : (l[u.ElementaryStreamTypes.AUDIO] && o.push('audio'),
                            l[u.ElementaryStreamTypes.VIDEO] && o.push('video')),
                          0 === o.length &&
                            s.logger.warn(
                              'Fragments must have at least one ElementaryStreamType set. type: ' +
                                i.type +
                                ' level: ' +
                                i.level +
                                ' sn: ' +
                                i.sn,
                            ),
                          this.blockBuffers(function () {
                            var t = self.performance.now()
                            ;(i.stats.buffering.end = t), a && (a.stats.buffering.end = t)
                            var e = a ? a.stats : i.stats
                            r.hls.trigger(n.Events.FRAG_BUFFERED, { frag: i, part: a, stats: e, id: i.type })
                          }, o)
                      }),
                      (e.onFragChanged = function (t, e) {
                        this.flushBackBuffer()
                      }),
                      (e.onBufferEos = function (t, e) {
                        var r = this
                        this.getSourceBufferTypes().reduce(function (t, i) {
                          var n = r.sourceBuffer[i]
                          return (
                            (e.type && e.type !== i) ||
                              (n &&
                                !n.ended &&
                                ((n.ended = !0), s.logger.log('[buffer-controller]: ' + i + ' sourceBuffer now EOS'))),
                            t && !(n && !n.ended)
                          )
                        }, !0) &&
                          this.blockBuffers(function () {
                            var t = r.mediaSource
                            t && 'open' === t.readyState && t.endOfStream()
                          })
                      }),
                      (e.onLevelUpdated = function (t, e) {
                        var r = e.details
                        r.fragments.length &&
                          ((this.details = r),
                          this.getSourceBufferTypes().length
                            ? this.blockBuffers(this.updateMediaElementDuration.bind(this))
                            : this.updateMediaElementDuration())
                      }),
                      (e.flushBackBuffer = function () {
                        var t = this.hls,
                          e = this.details,
                          r = this.media,
                          s = this.sourceBuffer
                        if (r && null !== e) {
                          var a = this.getSourceBufferTypes()
                          if (a.length) {
                            var l =
                              e.live && null !== t.config.liveBackBufferLength
                                ? t.config.liveBackBufferLength
                                : t.config.backBufferLength
                            if (Object(i.isFiniteNumber)(l) && !(l < 0)) {
                              var u = r.currentTime,
                                c = e.levelTargetDuration,
                                d = Math.max(l, c),
                                h = Math.floor(u / c) * c - d
                              a.forEach(function (r) {
                                var i = s[r]
                                if (i) {
                                  var a = o.BufferHelper.getBuffered(i)
                                  a.length > 0 &&
                                    h > a.start(0) &&
                                    (t.trigger(n.Events.BACK_BUFFER_REACHED, { bufferEnd: h }),
                                    e.live && t.trigger(n.Events.LIVE_BACK_BUFFER_REACHED, { bufferEnd: h }),
                                    t.trigger(n.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: h, type: r }))
                                }
                              })
                            }
                          }
                        }
                      }),
                      (e.updateMediaElementDuration = function () {
                        if (this.details && this.media && this.mediaSource && 'open' === this.mediaSource.readyState) {
                          var t = this.details,
                            e = this.hls,
                            r = this.media,
                            n = this.mediaSource,
                            a = t.fragments[0].start + t.totalduration,
                            o = r.duration,
                            l = Object(i.isFiniteNumber)(n.duration) ? n.duration : 0
                          t.live && e.config.liveDurationInfinity
                            ? (s.logger.log('[buffer-controller]: Media Source duration is set to Infinity'),
                              (n.duration = 1 / 0),
                              this.updateSeekableRange(t))
                            : ((a > l && a > o) || !Object(i.isFiniteNumber)(o)) &&
                              (s.logger.log('[buffer-controller]: Updating Media Source duration to ' + a.toFixed(3)),
                              (n.duration = a))
                        }
                      }),
                      (e.updateSeekableRange = function (t) {
                        var e = this.mediaSource,
                          r = t.fragments
                        if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                          var i = Math.max(0, r[0].start),
                            n = Math.max(i, i + t.totalduration)
                          e.setLiveSeekableRange(i, n)
                        }
                      }),
                      (e.checkPendingTracks = function () {
                        var t = this.bufferCodecEventsExpected,
                          e = this.operationQueue,
                          r = this.pendingTracks,
                          i = Object.keys(r).length
                        if ((i && !t) || 2 === i) {
                          this.createSourceBuffers(r), (this.pendingTracks = {})
                          var s = this.getSourceBufferTypes()
                          if (0 === s.length)
                            return void this.hls.trigger(n.Events.ERROR, {
                              type: a.ErrorTypes.MEDIA_ERROR,
                              details: a.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                              fatal: !0,
                              reason: 'could not create source buffer for media codec(s)',
                            })
                          s.forEach(function (t) {
                            e.executeNext(t)
                          })
                        }
                      }),
                      (e.createSourceBuffers = function (t) {
                        var e = this.sourceBuffer,
                          r = this.mediaSource
                        if (!r) throw Error('createSourceBuffers called when mediaSource was null')
                        var i = 0
                        for (var o in t)
                          if (!e[o]) {
                            var l = t[o]
                            if (!l) throw Error('source buffer exists for track ' + o + ', however track does not')
                            var u = l.levelCodec || l.codec,
                              c = l.container + ';codecs=' + u
                            s.logger.log('[buffer-controller]: creating sourceBuffer(' + c + ')')
                            try {
                              var d = (e[o] = r.addSourceBuffer(c)),
                                h = o
                              this.addBufferListener(h, 'updatestart', this._onSBUpdateStart),
                                this.addBufferListener(h, 'updateend', this._onSBUpdateEnd),
                                this.addBufferListener(h, 'error', this._onSBUpdateError),
                                (this.tracks[o] = {
                                  buffer: d,
                                  codec: u,
                                  container: l.container,
                                  levelCodec: l.levelCodec,
                                  id: l.id,
                                }),
                                i++
                            } catch (f) {
                              s.logger.error(
                                '[buffer-controller]: error while trying to add sourceBuffer: ' + f.message,
                              ),
                                this.hls.trigger(n.Events.ERROR, {
                                  type: a.ErrorTypes.MEDIA_ERROR,
                                  details: a.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                  fatal: !1,
                                  error: f,
                                  mimeType: c,
                                })
                            }
                          }
                        i && this.hls.trigger(n.Events.BUFFER_CREATED, { tracks: this.tracks })
                      }),
                      (e._onSBUpdateStart = function (t) {
                        this.operationQueue.current(t).onStart()
                      }),
                      (e._onSBUpdateEnd = function (t) {
                        var e = this.operationQueue
                        e.current(t).onComplete(), e.shiftAndExecuteNext(t)
                      }),
                      (e._onSBUpdateError = function (t, e) {
                        s.logger.error('[buffer-controller]: ' + t + ' SourceBuffer error', e),
                          this.hls.trigger(n.Events.ERROR, {
                            type: a.ErrorTypes.MEDIA_ERROR,
                            details: a.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1,
                          })
                        var r = this.operationQueue.current(t)
                        r && r.onError(e)
                      }),
                      (e.removeExecutor = function (t, e, r) {
                        var n = this.media,
                          a = this.mediaSource,
                          o = this.operationQueue,
                          l = this.sourceBuffer[t]
                        if (!n || !a || !l)
                          return (
                            s.logger.warn(
                              '[buffer-controller]: Attempting to remove from the ' +
                                t +
                                ' SourceBuffer, but it does not exist',
                            ),
                            void o.shiftAndExecuteNext(t)
                          )
                        var u = Object(i.isFiniteNumber)(n.duration) ? n.duration : 1 / 0,
                          c = Object(i.isFiniteNumber)(a.duration) ? a.duration : 1 / 0,
                          d = Math.max(0, e),
                          h = Math.min(r, u, c)
                        h > d
                          ? (s.logger.log(
                              '[buffer-controller]: Removing [' + d + ',' + h + '] from the ' + t + ' SourceBuffer',
                            ),
                            l.remove(d, h))
                          : o.shiftAndExecuteNext(t)
                      }),
                      (e.appendExecutor = function (t, e) {
                        var r = this.operationQueue,
                          i = this.sourceBuffer[e]
                        if (!i)
                          return (
                            s.logger.warn(
                              '[buffer-controller]: Attempting to append to the ' +
                                e +
                                ' SourceBuffer, but it does not exist',
                            ),
                            void r.shiftAndExecuteNext(e)
                          )
                        ;(i.ended = !1), i.appendBuffer(t)
                      }),
                      (e.blockBuffers = function (t, e) {
                        var r = this
                        if ((void 0 === e && (e = this.getSourceBufferTypes()), !e.length))
                          return (
                            s.logger.log(
                              '[buffer-controller]: Blocking operation requested, but no SourceBuffers exist',
                            ),
                            void Promise.resolve(t)
                          )
                        var i = this.operationQueue,
                          n = e.map(function (t) {
                            return i.appendBlocker(t)
                          })
                        Promise.all(n).then(function () {
                          t(),
                            e.forEach(function (t) {
                              var e = r.sourceBuffer[t]
                              ;(e && e.updating) || i.shiftAndExecuteNext(t)
                            })
                        })
                      }),
                      (e.getSourceBufferTypes = function () {
                        return Object.keys(this.sourceBuffer)
                      }),
                      (e.addBufferListener = function (t, e, r) {
                        var i = this.sourceBuffer[t]
                        if (i) {
                          var n = r.bind(this, t)
                          this.listeners[t].push({ event: e, listener: n }), i.addEventListener(e, n)
                        }
                      }),
                      (e.removeBufferListeners = function (t) {
                        var e = this.sourceBuffer[t]
                        e &&
                          this.listeners[t].forEach(function (t) {
                            e.removeEventListener(t.event, t.listener)
                          })
                      }),
                      t
                    )
                  })()
              },
            './src/controller/buffer-operation-queue.ts':
              /*!**************************************************!*\
  !*** ./src/controller/buffer-operation-queue.ts ***!
  \**************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return n
                  })
                var i = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  n = (function () {
                    function t(t) {
                      ;(this.buffers = void 0),
                        (this.queues = { video: [], audio: [], audiovideo: [] }),
                        (this.buffers = t)
                    }
                    var e = t.prototype
                    return (
                      (e.append = function (t, e) {
                        var r = this.queues[e]
                        r.push(t), 1 === r.length && this.buffers[e] && this.executeNext(e)
                      }),
                      (e.insertAbort = function (t, e) {
                        this.queues[e].unshift(t), this.executeNext(e)
                      }),
                      (e.appendBlocker = function (t) {
                        var e,
                          r = new Promise(function (t) {
                            e = t
                          }),
                          i = {
                            execute: e,
                            onStart: function () {},
                            onComplete: function () {},
                            onError: function () {},
                          }
                        return this.append(i, t), r
                      }),
                      (e.executeNext = function (t) {
                        var e = this.buffers,
                          r = this.queues,
                          n = e[t],
                          s = r[t]
                        if (s.length) {
                          var a = s[0]
                          try {
                            a.execute()
                          } catch (o) {
                            i.logger.warn(
                              '[buffer-operation-queue]: Unhandled exception executing the current operation',
                            ),
                              a.onError(o),
                              (n && n.updating) || (s.shift(), this.executeNext(t))
                          }
                        }
                      }),
                      (e.shiftAndExecuteNext = function (t) {
                        this.queues[t].shift(), this.executeNext(t)
                      }),
                      (e.current = function (t) {
                        return this.queues[t][0]
                      }),
                      t
                    )
                  })()
              },
            './src/controller/cap-level-controller.ts':
              /*!************************************************!*\
  !*** ./src/controller/cap-level-controller.ts ***!
  \************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../events */ './src/events.ts')
                function n(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var s = (function () {
                  function t(t) {
                    ;(this.autoLevelCapping = void 0),
                      (this.firstLevel = void 0),
                      (this.media = void 0),
                      (this.restrictedLevels = void 0),
                      (this.timer = void 0),
                      (this.hls = void 0),
                      (this.streamController = void 0),
                      (this.clientRect = void 0),
                      (this.hls = t),
                      (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                      (this.firstLevel = -1),
                      (this.media = null),
                      (this.restrictedLevels = []),
                      (this.timer = void 0),
                      (this.clientRect = null),
                      this.registerListeners()
                  }
                  var e,
                    r,
                    s,
                    a = t.prototype
                  return (
                    (a.setStreamController = function (t) {
                      this.streamController = t
                    }),
                    (a.destroy = function () {
                      this.unregisterListener(),
                        this.hls.config.capLevelToPlayerSize && this.stopCapping(),
                        (this.media = null),
                        (this.clientRect = null),
                        (this.hls = this.streamController = null)
                    }),
                    (a.registerListeners = function () {
                      var t = this.hls
                      t.on(i.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                        t.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.on(i.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                        t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
                    }),
                    (a.unregisterListener = function () {
                      var t = this.hls
                      t.off(i.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                        t.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.off(i.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                        t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
                    }),
                    (a.onFpsDropLevelCapping = function (e, r) {
                      t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) &&
                        this.restrictedLevels.push(r.droppedLevel)
                    }),
                    (a.onMediaAttaching = function (t, e) {
                      this.media = e.media instanceof HTMLVideoElement ? e.media : null
                    }),
                    (a.onManifestParsed = function (t, e) {
                      var r = this.hls
                      ;(this.restrictedLevels = []),
                        (this.firstLevel = e.firstLevel),
                        r.config.capLevelToPlayerSize && e.video && this.startCapping()
                    }),
                    (a.onBufferCodecs = function (t, e) {
                      this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                    }),
                    (a.onMediaDetaching = function () {
                      this.stopCapping()
                    }),
                    (a.detectPlayerSize = function () {
                      if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                        var t = this.hls.levels
                        if (t.length) {
                          var e = this.hls
                          ;(e.autoLevelCapping = this.getMaxLevel(t.length - 1)),
                            e.autoLevelCapping > this.autoLevelCapping &&
                              this.streamController &&
                              this.streamController.nextLevelSwitch(),
                            (this.autoLevelCapping = e.autoLevelCapping)
                        }
                      }
                    }),
                    (a.getMaxLevel = function (e) {
                      var r = this,
                        i = this.hls.levels
                      if (!i.length) return -1
                      var n = i.filter(function (i, n) {
                        return t.isLevelAllowed(n, r.restrictedLevels) && n <= e
                      })
                      return (this.clientRect = null), t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                    }),
                    (a.startCapping = function () {
                      this.timer ||
                        ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
                        (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
                        self.clearInterval(this.timer),
                        (this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3)),
                        this.detectPlayerSize())
                    }),
                    (a.stopCapping = function () {
                      ;(this.restrictedLevels = []),
                        (this.firstLevel = -1),
                        (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                        this.timer && (self.clearInterval(this.timer), (this.timer = void 0))
                    }),
                    (a.getDimensions = function () {
                      if (this.clientRect) return this.clientRect
                      var t = this.media,
                        e = { width: 0, height: 0 }
                      if (t) {
                        var r = t.getBoundingClientRect()
                        ;(e.width = r.width),
                          (e.height = r.height),
                          e.width ||
                            e.height ||
                            ((e.width = r.right - r.left || t.width || 0),
                            (e.height = r.bottom - r.top || t.height || 0))
                      }
                      return (this.clientRect = e), e
                    }),
                    (t.isLevelAllowed = function (t, e) {
                      return void 0 === e && (e = []), -1 === e.indexOf(t)
                    }),
                    (t.getMaxLevelByMediaSize = function (t, e, r) {
                      if (!t || !t.length) return -1
                      for (var i, n, s = t.length - 1, a = 0; a < t.length; a += 1) {
                        var o = t[a]
                        if (
                          (o.width >= e || o.height >= r) &&
                          ((i = o), !(n = t[a + 1]) || i.width !== n.width || i.height !== n.height)
                        ) {
                          s = a
                          break
                        }
                      }
                      return s
                    }),
                    (e = t),
                    (s = [
                      {
                        key: 'contentScaleFactor',
                        get: function () {
                          var t = 1
                          try {
                            t = self.devicePixelRatio
                          } catch (e) {}
                          return t
                        },
                      },
                    ]),
                    (r = [
                      {
                        key: 'mediaWidth',
                        get: function () {
                          return this.getDimensions().width * t.contentScaleFactor
                        },
                      },
                      {
                        key: 'mediaHeight',
                        get: function () {
                          return this.getDimensions().height * t.contentScaleFactor
                        },
                      },
                    ]) && n(e.prototype, r),
                    s && n(e, s),
                    t
                  )
                })()
                e.default = s
              },
            './src/controller/eme-controller.ts':
              /*!******************************************!*\
  !*** ./src/controller/eme-controller.ts ***!
  \******************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../errors */ './src/errors.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  a = r(/*! ../utils/mediakeys-helper */ './src/utils/mediakeys-helper.ts')
                function o(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var l = (function () {
                  function t(t) {
                    ;(this.hls = void 0),
                      (this._widevineLicenseUrl = void 0),
                      (this._licenseXhrSetup = void 0),
                      (this._licenseResponseCallback = void 0),
                      (this._emeEnabled = void 0),
                      (this._requestMediaKeySystemAccess = void 0),
                      (this._drmSystemOptions = void 0),
                      (this._config = void 0),
                      (this._mediaKeysList = []),
                      (this._media = null),
                      (this._hasSetMediaKeys = !1),
                      (this._requestLicenseFailureCount = 0),
                      (this.mediaKeysPromise = null),
                      (this._onMediaEncrypted = this.onMediaEncrypted.bind(this)),
                      (this.hls = t),
                      (this._config = t.config),
                      (this._widevineLicenseUrl = this._config.widevineLicenseUrl),
                      (this._licenseXhrSetup = this._config.licenseXhrSetup),
                      (this._licenseResponseCallback = this._config.licenseResponseCallback),
                      (this._emeEnabled = this._config.emeEnabled),
                      (this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc),
                      (this._drmSystemOptions = this._config.drmSystemOptions),
                      this._registerListeners()
                  }
                  var e,
                    r,
                    l,
                    u = t.prototype
                  return (
                    (u.destroy = function () {
                      this._unregisterListeners(),
                        (this.hls = this._onMediaEncrypted = null),
                        (this._requestMediaKeySystemAccess = null)
                    }),
                    (u._registerListeners = function () {
                      this.hls.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        this.hls.on(i.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                        this.hls.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this)
                    }),
                    (u._unregisterListeners = function () {
                      this.hls.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        this.hls.off(i.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                        this.hls.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this)
                    }),
                    (u.getLicenseServerUrl = function (t) {
                      switch (t) {
                        case a.KeySystems.WIDEVINE:
                          if (!this._widevineLicenseUrl) break
                          return this._widevineLicenseUrl
                      }
                      throw new Error('no license server URL configured for key-system "' + t + '"')
                    }),
                    (u._attemptKeySystemAccess = function (t, e, r) {
                      var i = this,
                        n = (function (t, e, r, i) {
                          switch (t) {
                            case a.KeySystems.WIDEVINE:
                              return (function (t, e, r) {
                                var i = { audioCapabilities: [], videoCapabilities: [] }
                                return (
                                  t.forEach(function (t) {
                                    i.audioCapabilities.push({
                                      contentType: 'audio/mp4; codecs="' + t + '"',
                                      robustness: r.audioRobustness || '',
                                    })
                                  }),
                                  e.forEach(function (t) {
                                    i.videoCapabilities.push({
                                      contentType: 'video/mp4; codecs="' + t + '"',
                                      robustness: r.videoRobustness || '',
                                    })
                                  }),
                                  [i]
                                )
                              })(e, r, i)
                            default:
                              throw new Error('Unknown key-system: ' + t)
                          }
                        })(t, e, r, this._drmSystemOptions)
                      s.logger.log('Requesting encrypted media key-system access')
                      var o = this.requestMediaKeySystemAccess(t, n)
                      ;(this.mediaKeysPromise = o.then(function (e) {
                        return i._onMediaKeySystemAccessObtained(t, e)
                      })),
                        o.catch(function (e) {
                          s.logger.error('Failed to obtain key-system "' + t + '" access:', e)
                        })
                    }),
                    (u._onMediaKeySystemAccessObtained = function (t, e) {
                      var r = this
                      s.logger.log('Access for key-system "' + t + '" obtained')
                      var i = { mediaKeysSessionInitialized: !1, mediaKeySystemAccess: e, mediaKeySystemDomain: t }
                      this._mediaKeysList.push(i)
                      var n = Promise.resolve()
                        .then(function () {
                          return e.createMediaKeys()
                        })
                        .then(function (e) {
                          return (
                            (i.mediaKeys = e),
                            s.logger.log('Media-keys created for key-system "' + t + '"'),
                            r._onMediaKeysCreated(),
                            e
                          )
                        })
                      return (
                        n.catch(function (t) {
                          s.logger.error('Failed to create media-keys:', t)
                        }),
                        n
                      )
                    }),
                    (u._onMediaKeysCreated = function () {
                      var t = this
                      this._mediaKeysList.forEach(function (e) {
                        e.mediaKeysSession ||
                          ((e.mediaKeysSession = e.mediaKeys.createSession()),
                          t._onNewMediaKeySession(e.mediaKeysSession))
                      })
                    }),
                    (u._onNewMediaKeySession = function (t) {
                      var e = this
                      s.logger.log('New key-system session ' + t.sessionId),
                        t.addEventListener(
                          'message',
                          function (r) {
                            e._onKeySessionMessage(t, r.message)
                          },
                          !1,
                        )
                    }),
                    (u._onKeySessionMessage = function (t, e) {
                      s.logger.log('Got EME message event, creating license request'),
                        this._requestLicense(e, function (e) {
                          s.logger.log(
                            'Received license data (length: ' + (e ? e.byteLength : e) + '), updating key-session',
                          ),
                            t.update(e)
                        })
                    }),
                    (u.onMediaEncrypted = function (t) {
                      var e = this
                      if (
                        (s.logger.log('Media is encrypted using "' + t.initDataType + '" init data type'),
                        !this.mediaKeysPromise)
                      )
                        return (
                          s.logger.error('Fatal: Media is encrypted but no CDM access or no keys have been requested'),
                          void this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                            fatal: !0,
                          })
                        )
                      var r = function (r) {
                        e._media &&
                          (e._attemptSetMediaKeys(r),
                          e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
                      }
                      this.mediaKeysPromise.then(r).catch(r)
                    }),
                    (u._attemptSetMediaKeys = function (t) {
                      if (!this._media)
                        throw new Error('Attempted to set mediaKeys without first attaching a media element')
                      if (!this._hasSetMediaKeys) {
                        var e = this._mediaKeysList[0]
                        if (!e || !e.mediaKeys)
                          return (
                            s.logger.error(
                              'Fatal: Media is encrypted but no CDM access or no keys have been obtained yet',
                            ),
                            void this.hls.trigger(i.Events.ERROR, {
                              type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                              details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                              fatal: !0,
                            })
                          )
                        s.logger.log('Setting keys for encrypted media'),
                          this._media.setMediaKeys(e.mediaKeys),
                          (this._hasSetMediaKeys = !0)
                      }
                    }),
                    (u._generateRequestWithPreferredKeySession = function (t, e) {
                      var r = this,
                        a = this._mediaKeysList[0]
                      if (!a)
                        return (
                          s.logger.error(
                            'Fatal: Media is encrypted but not any key-system access has been obtained yet',
                          ),
                          void this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                            fatal: !0,
                          })
                        )
                      if (a.mediaKeysSessionInitialized)
                        s.logger.warn('Key-Session already initialized but requested again')
                      else {
                        var o = a.mediaKeysSession
                        if (!o)
                          return (
                            s.logger.error('Fatal: Media is encrypted but no key-session existing'),
                            void this.hls.trigger(i.Events.ERROR, {
                              type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                              details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                              fatal: !0,
                            })
                          )
                        if (!e)
                          return (
                            s.logger.warn('Fatal: initData required for generating a key session is null'),
                            void this.hls.trigger(i.Events.ERROR, {
                              type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                              details: n.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                              fatal: !0,
                            })
                          )
                        s.logger.log('Generating key-session request for "' + t + '" init data type'),
                          (a.mediaKeysSessionInitialized = !0),
                          o
                            .generateRequest(t, e)
                            .then(function () {
                              s.logger.debug('Key-session generation succeeded')
                            })
                            .catch(function (t) {
                              s.logger.error('Error generating key-session request:', t),
                                r.hls.trigger(i.Events.ERROR, {
                                  type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                  details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                  fatal: !1,
                                })
                            })
                      }
                    }),
                    (u._createLicenseXhr = function (t, e, r) {
                      var i = new XMLHttpRequest()
                      ;(i.responseType = 'arraybuffer'),
                        (i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r))
                      var n = this._licenseXhrSetup
                      if (n)
                        try {
                          n.call(this.hls, i, t), (n = void 0)
                        } catch (a) {
                          s.logger.error(a)
                        }
                      try {
                        i.readyState || i.open('POST', t, !0), n && n.call(this.hls, i, t)
                      } catch (a) {
                        throw new Error('issue setting up KeySystem license XHR ' + a)
                      }
                      return i
                    }),
                    (u._onLicenseRequestReadyStageChange = function (t, e, r, a) {
                      switch (t.readyState) {
                        case 4:
                          if (200 === t.status) {
                            ;(this._requestLicenseFailureCount = 0), s.logger.log('License request succeeded')
                            var o = t.response,
                              l = this._licenseResponseCallback
                            if (l)
                              try {
                                o = l.call(this.hls, t, e)
                              } catch (c) {
                                s.logger.error(c)
                              }
                            a(o)
                          } else {
                            if (
                              (s.logger.error(
                                'License Request XHR failed (' +
                                  e +
                                  '). Status: ' +
                                  t.status +
                                  ' (' +
                                  t.statusText +
                                  ')',
                              ),
                              this._requestLicenseFailureCount++,
                              this._requestLicenseFailureCount > 3)
                            )
                              return void this.hls.trigger(i.Events.ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0,
                              })
                            var u = 3 - this._requestLicenseFailureCount + 1
                            s.logger.warn('Retrying license request, ' + u + ' attempts left'),
                              this._requestLicense(r, a)
                          }
                      }
                    }),
                    (u._generateLicenseRequestChallenge = function (t, e) {
                      switch (t.mediaKeySystemDomain) {
                        case a.KeySystems.WIDEVINE:
                          return e
                      }
                      throw new Error('unsupported key-system: ' + t.mediaKeySystemDomain)
                    }),
                    (u._requestLicense = function (t, e) {
                      s.logger.log('Requesting content license for key-system')
                      var r = this._mediaKeysList[0]
                      if (!r)
                        return (
                          s.logger.error(
                            'Fatal error: Media is encrypted but no key-system access has been obtained yet',
                          ),
                          void this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                            fatal: !0,
                          })
                        )
                      try {
                        var a = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                          o = this._createLicenseXhr(a, t, e)
                        s.logger.log('Sending license request to URL: ' + a)
                        var l = this._generateLicenseRequestChallenge(r, t)
                        o.send(l)
                      } catch (u) {
                        s.logger.error('Failure requesting DRM license: ' + u),
                          this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0,
                          })
                      }
                    }),
                    (u.onMediaAttached = function (t, e) {
                      if (this._emeEnabled) {
                        var r = e.media
                        ;(this._media = r), r.addEventListener('encrypted', this._onMediaEncrypted)
                      }
                    }),
                    (u.onMediaDetached = function () {
                      var t = this._media,
                        e = this._mediaKeysList
                      t &&
                        (t.removeEventListener('encrypted', this._onMediaEncrypted),
                        (this._media = null),
                        (this._mediaKeysList = []),
                        Promise.all(
                          e.map(function (t) {
                            if (t.mediaKeysSession) return t.mediaKeysSession.close().catch(function () {})
                          }),
                        )
                          .then(function () {
                            return t.setMediaKeys(null)
                          })
                          .catch(function () {}))
                    }),
                    (u.onManifestParsed = function (t, e) {
                      if (this._emeEnabled) {
                        var r = e.levels
                            .map(function (t) {
                              return t.audioCodec
                            })
                            .filter(function (t) {
                              return !!t
                            }),
                          i = e.levels
                            .map(function (t) {
                              return t.videoCodec
                            })
                            .filter(function (t) {
                              return !!t
                            })
                        this._attemptKeySystemAccess(a.KeySystems.WIDEVINE, r, i)
                      }
                    }),
                    (e = t),
                    (r = [
                      {
                        key: 'requestMediaKeySystemAccess',
                        get: function () {
                          if (!this._requestMediaKeySystemAccess)
                            throw new Error('No requestMediaKeySystemAccess function configured')
                          return this._requestMediaKeySystemAccess
                        },
                      },
                    ]) && o(e.prototype, r),
                    l && o(e, l),
                    t
                  )
                })()
                e.default = l
              },
            './src/controller/fps-controller.ts':
              /*!******************************************!*\
  !*** ./src/controller/fps-controller.ts ***!
  \******************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  s = (function () {
                    function t(t) {
                      ;(this.hls = void 0),
                        (this.isVideoPlaybackQualityAvailable = !1),
                        (this.timer = void 0),
                        (this.media = null),
                        (this.lastTime = void 0),
                        (this.lastDroppedFrames = 0),
                        (this.lastDecodedFrames = 0),
                        (this.streamController = void 0),
                        (this.hls = t),
                        this.registerListeners()
                    }
                    var e = t.prototype
                    return (
                      (e.setStreamController = function (t) {
                        this.streamController = t
                      }),
                      (e.registerListeners = function () {
                        this.hls.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this)
                      }),
                      (e.unregisterListeners = function () {
                        this.hls.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching)
                      }),
                      (e.destroy = function () {
                        this.timer && clearInterval(this.timer),
                          this.unregisterListeners(),
                          (this.isVideoPlaybackQualityAvailable = !1),
                          (this.media = null)
                      }),
                      (e.onMediaAttaching = function (t, e) {
                        var r = this.hls.config
                        if (r.capLevelOnFPSDrop) {
                          var i = e.media instanceof self.HTMLVideoElement ? e.media : null
                          ;(this.media = i),
                            i &&
                              'function' == typeof i.getVideoPlaybackQuality &&
                              (this.isVideoPlaybackQualityAvailable = !0),
                            self.clearInterval(this.timer),
                            (this.timer = self.setInterval(
                              this.checkFPSInterval.bind(this),
                              r.fpsDroppedMonitoringPeriod,
                            ))
                        }
                      }),
                      (e.checkFPS = function (t, e, r) {
                        var s = performance.now()
                        if (e) {
                          if (this.lastTime) {
                            var a = s - this.lastTime,
                              o = r - this.lastDroppedFrames,
                              l = e - this.lastDecodedFrames,
                              u = (1e3 * o) / a,
                              c = this.hls
                            if (
                              (c.trigger(i.Events.FPS_DROP, {
                                currentDropped: o,
                                currentDecoded: l,
                                totalDroppedFrames: r,
                              }),
                              u > 0 && o > c.config.fpsDroppedMonitoringThreshold * l)
                            ) {
                              var d = c.currentLevel
                              n.logger.warn('drop FPS ratio greater than max allowed value for currentLevel: ' + d),
                                d > 0 &&
                                  (-1 === c.autoLevelCapping || c.autoLevelCapping >= d) &&
                                  ((d -= 1),
                                  c.trigger(i.Events.FPS_DROP_LEVEL_CAPPING, {
                                    level: d,
                                    droppedLevel: c.currentLevel,
                                  }),
                                  (c.autoLevelCapping = d),
                                  this.streamController.nextLevelSwitch())
                            }
                          }
                          ;(this.lastTime = s), (this.lastDroppedFrames = r), (this.lastDecodedFrames = e)
                        }
                      }),
                      (e.checkFPSInterval = function () {
                        var t = this.media
                        if (t)
                          if (this.isVideoPlaybackQualityAvailable) {
                            var e = t.getVideoPlaybackQuality()
                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                          } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                      }),
                      t
                    )
                  })()
                e.default = s
              },
            './src/controller/fragment-finders.ts':
              /*!********************************************!*\
  !*** ./src/controller/fragment-finders.ts ***!
  \********************************************/
              /*! exports provided: findFragmentByPDT, findFragmentByPTS, fragmentWithinToleranceTest, pdtWithinToleranceTest, findFragWithCC */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'findFragmentByPDT', function () {
                    return s
                  }),
                  r.d(e, 'findFragmentByPTS', function () {
                    return a
                  }),
                  r.d(e, 'fragmentWithinToleranceTest', function () {
                    return o
                  }),
                  r.d(e, 'pdtWithinToleranceTest', function () {
                    return l
                  }),
                  r.d(e, 'findFragWithCC', function () {
                    return u
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../utils/binary-search */ './src/utils/binary-search.ts')
                function s(t, e, r) {
                  if (null === e || !Array.isArray(t) || !t.length || !Object(i.isFiniteNumber)(e)) return null
                  if (e < (t[0].programDateTime || 0)) return null
                  if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null
                  r = r || 0
                  for (var n = 0; n < t.length; ++n) {
                    var s = t[n]
                    if (l(e, r, s)) return s
                  }
                  return null
                }
                function a(t, e, r, i) {
                  void 0 === r && (r = 0), void 0 === i && (i = 0)
                  var s = null
                  if (
                    (t ? (s = e[t.sn - e[0].sn + 1] || null) : 0 === r && 0 === e[0].start && (s = e[0]),
                    s && 0 === o(r, i, s))
                  )
                    return s
                  var a = n.default.search(e, o.bind(null, r, i))
                  return a || s
                }
                function o(t, e, r) {
                  void 0 === t && (t = 0), void 0 === e && (e = 0)
                  var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0))
                  return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
                }
                function l(t, e, r) {
                  var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0))
                  return (r.endProgramDateTime || 0) - i > t
                }
                function u(t, e) {
                  return n.default.search(t, function (t) {
                    return t.cc < e ? 1 : t.cc > e ? -1 : 0
                  })
                }
              },
            './src/controller/fragment-tracker.ts':
              /*!********************************************!*\
  !*** ./src/controller/fragment-tracker.ts ***!
  \********************************************/
              /*! exports provided: FragmentState, FragmentTracker */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'FragmentState', function () {
                    return i
                  }),
                  r.d(e, 'FragmentTracker', function () {
                    return a
                  })
                var i,
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../types/loader */ './src/types/loader.ts')
                !(function (t) {
                  ;(t.NOT_LOADED = 'NOT_LOADED'),
                    (t.BACKTRACKED = 'BACKTRACKED'),
                    (t.APPENDING = 'APPENDING'),
                    (t.PARTIAL = 'PARTIAL'),
                    (t.OK = 'OK')
                })(i || (i = {}))
                var a = (function () {
                  function t(t) {
                    ;(this.activeFragment = null),
                      (this.activeParts = null),
                      (this.fragments = Object.create(null)),
                      (this.timeRanges = Object.create(null)),
                      (this.bufferPadding = 0.2),
                      (this.hls = void 0),
                      (this.hls = t),
                      this._registerListeners()
                  }
                  var e = t.prototype
                  return (
                    (e._registerListeners = function () {
                      var t = this.hls
                      t.on(n.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                        t.on(n.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                        t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this)
                    }),
                    (e._unregisterListeners = function () {
                      var t = this.hls
                      t.off(n.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                        t.off(n.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                        t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this)
                    }),
                    (e.destroy = function () {
                      this._unregisterListeners(), (this.fragments = this.timeRanges = null)
                    }),
                    (e.getAppendedFrag = function (t, e) {
                      if (e === s.PlaylistLevelType.MAIN) {
                        var r = this.activeFragment,
                          i = this.activeParts
                        if (!r) return null
                        if (i)
                          for (var n = i.length; n--; ) {
                            var a = i[n],
                              o = a ? a.end : r.appendedPTS
                            if (a.start <= t && void 0 !== o && t <= o)
                              return n > 9 && (this.activeParts = i.slice(n - 9)), a
                          }
                        else if (r.start <= t && void 0 !== r.appendedPTS && t <= r.appendedPTS) return r
                      }
                      return this.getBufferedFrag(t, e)
                    }),
                    (e.getBufferedFrag = function (t, e) {
                      for (var r = this.fragments, i = Object.keys(r), n = i.length; n--; ) {
                        var s = r[i[n]]
                        if ((null == s ? void 0 : s.body.type) === e && s.buffered) {
                          var a = s.body
                          if (a.start <= t && t <= a.end) return a
                        }
                      }
                      return null
                    }),
                    (e.detectEvictedFragments = function (t, e, r) {
                      var i = this
                      Object.keys(this.fragments).forEach(function (n) {
                        var s = i.fragments[n]
                        if (s)
                          if (s.buffered) {
                            var a = s.range[t]
                            a &&
                              a.time.some(function (t) {
                                var r = !i.isTimeBuffered(t.startPTS, t.endPTS, e)
                                return r && i.removeFragment(s.body), r
                              })
                          } else s.body.type === r && i.removeFragment(s.body)
                      })
                    }),
                    (e.detectPartialFragments = function (t) {
                      var e = this,
                        r = this.timeRanges,
                        i = t.frag,
                        n = t.part
                      if (r && 'initSegment' !== i.sn) {
                        var s = l(i),
                          a = this.fragments[s]
                        a &&
                          (Object.keys(r).forEach(function (t) {
                            var s = i.elementaryStreams[t]
                            if (s) {
                              var o = r[t],
                                l = null !== n || !0 === s.partial
                              a.range[t] = e.getBufferedTimes(i, n, l, o)
                            }
                          }),
                          (a.backtrack = a.loaded = null),
                          Object.keys(a.range).length ? (a.buffered = !0) : this.removeFragment(a.body))
                      }
                    }),
                    (e.fragBuffered = function (t) {
                      var e = l(t),
                        r = this.fragments[e]
                      r && ((r.backtrack = r.loaded = null), (r.buffered = !0))
                    }),
                    (e.getBufferedTimes = function (t, e, r, i) {
                      for (
                        var n = { time: [], partial: r },
                          s = e ? e.start : t.start,
                          a = e ? e.end : t.end,
                          o = t.minEndPTS || a,
                          l = t.maxStartPTS || s,
                          u = 0;
                        u < i.length;
                        u++
                      ) {
                        var c = i.start(u) - this.bufferPadding,
                          d = i.end(u) + this.bufferPadding
                        if (l >= c && o <= d) {
                          n.time.push({ startPTS: Math.max(s, i.start(u)), endPTS: Math.min(a, i.end(u)) })
                          break
                        }
                        if (s < d && a > c)
                          (n.partial = !0),
                            n.time.push({ startPTS: Math.max(s, i.start(u)), endPTS: Math.min(a, i.end(u)) })
                        else if (a <= c) break
                      }
                      return n
                    }),
                    (e.getPartialFragment = function (t) {
                      var e,
                        r,
                        i,
                        n = null,
                        s = 0,
                        a = this.bufferPadding,
                        l = this.fragments
                      return (
                        Object.keys(l).forEach(function (u) {
                          var c = l[u]
                          c &&
                            o(c) &&
                            ((r = c.body.start - a),
                            (i = c.body.end + a),
                            t >= r && t <= i && ((e = Math.min(t - r, i - t)), s <= e && ((n = c.body), (s = e))))
                        }),
                        n
                      )
                    }),
                    (e.getState = function (t) {
                      var e = l(t),
                        r = this.fragments[e]
                      return r
                        ? r.buffered
                          ? o(r)
                            ? i.PARTIAL
                            : i.OK
                          : r.backtrack
                          ? i.BACKTRACKED
                          : i.APPENDING
                        : i.NOT_LOADED
                    }),
                    (e.backtrack = function (t, e) {
                      var r = l(t),
                        i = this.fragments[r]
                      if (!i || i.backtrack) return null
                      var n = (i.backtrack = e || i.loaded)
                      return (i.loaded = null), n
                    }),
                    (e.getBacktrackData = function (t) {
                      var e = l(t),
                        r = this.fragments[e]
                      if (r) {
                        var i,
                          n = r.backtrack
                        if (null != n && null !== (i = n.payload) && void 0 !== i && i.byteLength) return n
                        this.removeFragment(t)
                      }
                      return null
                    }),
                    (e.isTimeBuffered = function (t, e, r) {
                      for (var i, n, s = 0; s < r.length; s++) {
                        if (
                          ((i = r.start(s) - this.bufferPadding), (n = r.end(s) + this.bufferPadding), t >= i && e <= n)
                        )
                          return !0
                        if (e <= i) return !1
                      }
                      return !1
                    }),
                    (e.onFragLoaded = function (t, e) {
                      var r = e.frag,
                        i = e.part
                      if ('initSegment' !== r.sn && !r.bitrateTest && !i) {
                        var n = l(r)
                        this.fragments[n] = {
                          body: r,
                          loaded: e,
                          backtrack: null,
                          buffered: !1,
                          range: Object.create(null),
                        }
                      }
                    }),
                    (e.onBufferAppended = function (t, e) {
                      var r = this,
                        i = e.frag,
                        n = e.part,
                        a = e.timeRanges
                      if (i.type === s.PlaylistLevelType.MAIN)
                        if (((this.activeFragment = i), n)) {
                          var o = this.activeParts
                          o || (this.activeParts = o = []), o.push(n)
                        } else this.activeParts = null
                      ;(this.timeRanges = a),
                        Object.keys(a).forEach(function (t) {
                          var e = a[t]
                          if ((r.detectEvictedFragments(t, e), !n))
                            for (var s = 0; s < e.length; s++) i.appendedPTS = Math.max(e.end(s), i.appendedPTS || 0)
                        })
                    }),
                    (e.onFragBuffered = function (t, e) {
                      this.detectPartialFragments(e)
                    }),
                    (e.hasFragment = function (t) {
                      var e = l(t)
                      return !!this.fragments[e]
                    }),
                    (e.removeFragmentsInRange = function (t, e, r) {
                      var i = this
                      Object.keys(this.fragments).forEach(function (n) {
                        var s = i.fragments[n]
                        if (s && s.buffered) {
                          var a = s.body
                          a.type === r && a.start < e && a.end > t && i.removeFragment(a)
                        }
                      })
                    }),
                    (e.removeFragment = function (t) {
                      var e = l(t)
                      ;(t.stats.loaded = 0), t.clearElementaryStreamInfo(), delete this.fragments[e]
                    }),
                    (e.removeAllFragments = function () {
                      ;(this.fragments = Object.create(null)), (this.activeFragment = null), (this.activeParts = null)
                    }),
                    t
                  )
                })()
                function o(t) {
                  var e, r
                  return (
                    t.buffered &&
                    ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) ||
                      (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
                  )
                }
                function l(t) {
                  return t.type + '_' + t.level + '_' + t.urlId + '_' + t.sn
                }
              },
            './src/controller/gap-controller.ts':
              /*!******************************************!*\
  !*** ./src/controller/gap-controller.ts ***!
  \******************************************/
              /*! exports provided: STALL_MINIMUM_DURATION_MS, MAX_START_GAP_JUMP, SKIP_BUFFER_HOLE_STEP_SECONDS, SKIP_BUFFER_RANGE_START, default */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'STALL_MINIMUM_DURATION_MS', function () {
                    return o
                  }),
                  r.d(e, 'MAX_START_GAP_JUMP', function () {
                    return l
                  }),
                  r.d(e, 'SKIP_BUFFER_HOLE_STEP_SECONDS', function () {
                    return u
                  }),
                  r.d(e, 'SKIP_BUFFER_RANGE_START', function () {
                    return c
                  }),
                  r.d(e, 'default', function () {
                    return d
                  })
                var i = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  n = r(/*! ../errors */ './src/errors.ts'),
                  s = r(/*! ../events */ './src/events.ts'),
                  a = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  o = 250,
                  l = 2,
                  u = 0.1,
                  c = 0.05,
                  d = (function () {
                    function t(t, e, r, i) {
                      ;(this.config = void 0),
                        (this.media = void 0),
                        (this.fragmentTracker = void 0),
                        (this.hls = void 0),
                        (this.nudgeRetry = 0),
                        (this.stallReported = !1),
                        (this.stalled = null),
                        (this.moved = !1),
                        (this.seeking = !1),
                        (this.config = t),
                        (this.media = e),
                        (this.fragmentTracker = r),
                        (this.hls = i)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        this.hls = this.fragmentTracker = this.media = null
                      }),
                      (e.poll = function (t) {
                        var e = this.config,
                          r = this.media,
                          n = this.stalled,
                          s = r.currentTime,
                          u = r.seeking,
                          c = this.seeking && !u,
                          d = !this.seeking && u
                        if (((this.seeking = u), s === t)) {
                          if (
                            ((d || c) && (this.stalled = null),
                            !r.paused && !r.ended && 0 !== r.playbackRate && i.BufferHelper.getBuffered(r).length)
                          ) {
                            var h = i.BufferHelper.bufferInfo(r, s, 0),
                              f = h.len > 0,
                              g = h.nextStart || 0
                            if (f || g) {
                              if (u) {
                                var v = h.len > l,
                                  p = !g || (g - s > l && !this.fragmentTracker.getPartialFragment(s))
                                if (v || p) return
                                this.moved = !1
                              }
                              if (!this.moved && null !== this.stalled) {
                                var m,
                                  y = Math.max(g, h.start || 0) - s,
                                  E = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                  T = (null == E || null === (m = E.details) || void 0 === m ? void 0 : m.live)
                                    ? 2 * E.details.targetduration
                                    : l
                                if (y > 0 && y <= T) return void this._trySkipBufferHole(null)
                              }
                              var S = self.performance.now()
                              if (null !== n) {
                                var b = S - n
                                !u && b >= o && this._reportStall(h.len)
                                var L = i.BufferHelper.bufferInfo(r, s, e.maxBufferHole)
                                this._tryFixBufferStall(L, b)
                              } else this.stalled = S
                            }
                          }
                        } else if (((this.moved = !0), null !== n)) {
                          if (this.stallReported) {
                            var A = self.performance.now() - n
                            a.logger.warn('playback not stuck anymore @' + s + ', after ' + Math.round(A) + 'ms'),
                              (this.stallReported = !1)
                          }
                          ;(this.stalled = null), (this.nudgeRetry = 0)
                        }
                      }),
                      (e._tryFixBufferStall = function (t, e) {
                        var r = this.config,
                          i = this.fragmentTracker,
                          n = this.media.currentTime,
                          s = i.getPartialFragment(n)
                        ;(s && this._trySkipBufferHole(s)) ||
                          (t.len > r.maxBufferHole &&
                            e > 1e3 * r.highBufferWatchdogPeriod &&
                            (a.logger.warn('Trying to nudge playhead over buffer-hole'),
                            (this.stalled = null),
                            this._tryNudgeBuffer()))
                      }),
                      (e._reportStall = function (t) {
                        var e = this.hls,
                          r = this.media
                        this.stallReported ||
                          ((this.stallReported = !0),
                          a.logger.warn(
                            'Playback stalling at @' + r.currentTime + ' due to low buffer (buffer=' + t + ')',
                          ),
                          e.trigger(s.Events.ERROR, {
                            type: n.ErrorTypes.MEDIA_ERROR,
                            details: n.ErrorDetails.BUFFER_STALLED_ERROR,
                            fatal: !1,
                            buffer: t,
                          }))
                      }),
                      (e._trySkipBufferHole = function (t) {
                        for (
                          var e = this.config,
                            r = this.hls,
                            o = this.media,
                            l = o.currentTime,
                            d = 0,
                            h = i.BufferHelper.getBuffered(o),
                            f = 0;
                          f < h.length;
                          f++
                        ) {
                          var g = h.start(f)
                          if (l + e.maxBufferHole >= d && l < g) {
                            var v = Math.max(g + c, o.currentTime + u)
                            return (
                              a.logger.warn('skipping hole, adjusting currentTime from ' + l + ' to ' + v),
                              (this.moved = !0),
                              (this.stalled = null),
                              (o.currentTime = v),
                              t &&
                                r.trigger(s.Events.ERROR, {
                                  type: n.ErrorTypes.MEDIA_ERROR,
                                  details: n.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                  fatal: !1,
                                  reason: 'fragment loaded with buffer holes, seeking from ' + l + ' to ' + v,
                                  frag: t,
                                }),
                              v
                            )
                          }
                          d = h.end(f)
                        }
                        return 0
                      }),
                      (e._tryNudgeBuffer = function () {
                        var t = this.config,
                          e = this.hls,
                          r = this.media,
                          i = r.currentTime,
                          o = (this.nudgeRetry || 0) + 1
                        if (((this.nudgeRetry = o), o < t.nudgeMaxRetry)) {
                          var l = i + o * t.nudgeOffset
                          a.logger.warn("Nudging 'currentTime' from " + i + ' to ' + l),
                            (r.currentTime = l),
                            e.trigger(s.Events.ERROR, {
                              type: n.ErrorTypes.MEDIA_ERROR,
                              details: n.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                              fatal: !1,
                            })
                        } else
                          a.logger.error(
                            'Playhead still not moving while enough data buffered @' +
                              i +
                              ' after ' +
                              t.nudgeMaxRetry +
                              ' nudges',
                          ),
                            e.trigger(s.Events.ERROR, {
                              type: n.ErrorTypes.MEDIA_ERROR,
                              details: n.ErrorDetails.BUFFER_STALLED_ERROR,
                              fatal: !0,
                            })
                      }),
                      t
                    )
                  })()
              },
            './src/controller/id3-track-controller.ts':
              /*!************************************************!*\
  !*** ./src/controller/id3-track-controller.ts ***!
  \************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../utils/texttrack-utils */ './src/utils/texttrack-utils.ts'),
                  s = r(/*! ../demux/id3 */ './src/demux/id3.ts'),
                  a = (function () {
                    function t(t) {
                      ;(this.hls = void 0),
                        (this.id3Track = null),
                        (this.media = null),
                        (this.hls = t),
                        this._registerListeners()
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        this._unregisterListeners()
                      }),
                      (e._registerListeners = function () {
                        var t = this.hls
                        t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          t.on(i.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                          t.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                      }),
                      (e._unregisterListeners = function () {
                        var t = this.hls
                        t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          t.off(i.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                          t.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                      }),
                      (e.onMediaAttached = function (t, e) {
                        this.media = e.media
                      }),
                      (e.onMediaDetaching = function () {
                        this.id3Track &&
                          (Object(n.clearCurrentCues)(this.id3Track), (this.id3Track = null), (this.media = null))
                      }),
                      (e.getID3Track = function (t) {
                        if (this.media) {
                          for (var e = 0; e < t.length; e++) {
                            var r = t[e]
                            if ('metadata' === r.kind && 'id3' === r.label)
                              return Object(n.sendAddTrackEvent)(r, this.media), r
                          }
                          return this.media.addTextTrack('metadata', 'id3')
                        }
                      }),
                      (e.onFragParsingMetadata = function (t, e) {
                        if (this.media) {
                          var r = e.frag,
                            i = e.samples
                          this.id3Track ||
                            ((this.id3Track = this.getID3Track(this.media.textTracks)), (this.id3Track.mode = 'hidden'))
                          for (
                            var n = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, a = 0;
                            a < i.length;
                            a++
                          ) {
                            var o = s.getID3Frames(i[a].data)
                            if (o) {
                              var l = i[a].pts,
                                u = a < i.length - 1 ? i[a + 1].pts : r.end
                              u - l <= 0 && (u = l + 0.25)
                              for (var c = 0; c < o.length; c++) {
                                var d = o[c]
                                if (!s.isTimeStampFrame(d)) {
                                  var h = new n(l, u, '')
                                  ;(h.value = d), this.id3Track.addCue(h)
                                }
                              }
                            }
                          }
                        }
                      }),
                      (e.onBufferFlushing = function (t, e) {
                        var r = e.startOffset,
                          i = e.endOffset,
                          s = e.type
                        if (!s || 'audio' === s) {
                          var a = this.id3Track
                          a && Object(n.removeCuesInRange)(a, r, i)
                        }
                      }),
                      t
                    )
                  })()
                e.default = a
              },
            './src/controller/latency-controller.ts':
              /*!**********************************************!*\
  !*** ./src/controller/latency-controller.ts ***!
  \**********************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return o
                  })
                var i = r(/*! ../errors */ './src/errors.ts'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts')
                function a(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var o = (function () {
                  function t(t) {
                    var e = this
                    ;(this.hls = void 0),
                      (this.config = void 0),
                      (this.media = null),
                      (this.levelDetails = null),
                      (this.currentTime = 0),
                      (this.stallCount = 0),
                      (this._latency = null),
                      (this.timeupdateHandler = function () {
                        return e.timeupdate()
                      }),
                      (this.hls = t),
                      (this.config = t.config),
                      this.registerListeners()
                  }
                  var e,
                    r,
                    o,
                    l = t.prototype
                  return (
                    (l.destroy = function () {
                      this.unregisterListeners(),
                        this.onMediaDetaching(),
                        (this.levelDetails = null),
                        (this.hls = this.timeupdateHandler = null)
                    }),
                    (l.registerListeners = function () {
                      this.hls.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        this.hls.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        this.hls.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        this.hls.on(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                        this.hls.on(n.Events.ERROR, this.onError, this)
                    }),
                    (l.unregisterListeners = function () {
                      this.hls.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached),
                        this.hls.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching),
                        this.hls.off(n.Events.MANIFEST_LOADING, this.onManifestLoading),
                        this.hls.off(n.Events.LEVEL_UPDATED, this.onLevelUpdated),
                        this.hls.off(n.Events.ERROR, this.onError)
                    }),
                    (l.onMediaAttached = function (t, e) {
                      ;(this.media = e.media), this.media.addEventListener('timeupdate', this.timeupdateHandler)
                    }),
                    (l.onMediaDetaching = function () {
                      this.media &&
                        (this.media.removeEventListener('timeupdate', this.timeupdateHandler), (this.media = null))
                    }),
                    (l.onManifestLoading = function () {
                      ;(this.levelDetails = null), (this._latency = null), (this.stallCount = 0)
                    }),
                    (l.onLevelUpdated = function (t, e) {
                      var r = e.details
                      ;(this.levelDetails = r),
                        r.advanced && this.timeupdate(),
                        !r.live && this.media && this.media.removeEventListener('timeupdate', this.timeupdateHandler)
                    }),
                    (l.onError = function (t, e) {
                      e.details === i.ErrorDetails.BUFFER_STALLED_ERROR &&
                        (this.stallCount++,
                        s.logger.warn('[playback-rate-controller]: Stall detected, adjusting target latency'))
                    }),
                    (l.timeupdate = function () {
                      var t = this.media,
                        e = this.levelDetails
                      if (t && e) {
                        this.currentTime = t.currentTime
                        var r = this.computeLatency()
                        if (null !== r) {
                          this._latency = r
                          var i = this.config,
                            n = i.lowLatencyMode,
                            s = i.maxLiveSyncPlaybackRate
                          if (n && 1 !== s) {
                            var a = this.targetLatency
                            if (null !== a) {
                              var o = r - a,
                                l = o < Math.min(this.maxLatency, a + e.targetduration)
                              if (e.live && l && o > 0.05 && this.forwardBufferLength > 1) {
                                var u = Math.min(2, Math.max(1, s)),
                                  c = Math.round((2 / (1 + Math.exp(-0.75 * o - this.edgeStalled))) * 20) / 20
                                t.playbackRate = Math.min(u, Math.max(1, c))
                              } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                            }
                          }
                        }
                      }
                    }),
                    (l.estimateLiveEdge = function () {
                      var t = this.levelDetails
                      return null === t ? null : t.edge + t.age
                    }),
                    (l.computeLatency = function () {
                      var t = this.estimateLiveEdge()
                      return null === t ? null : t - this.currentTime
                    }),
                    (e = t),
                    (r = [
                      {
                        key: 'latency',
                        get: function () {
                          return this._latency || 0
                        },
                      },
                      {
                        key: 'maxLatency',
                        get: function () {
                          var t = this.config,
                            e = this.levelDetails
                          return void 0 !== t.liveMaxLatencyDuration
                            ? t.liveMaxLatencyDuration
                            : e
                            ? t.liveMaxLatencyDurationCount * e.targetduration
                            : 0
                        },
                      },
                      {
                        key: 'targetLatency',
                        get: function () {
                          var t = this.levelDetails
                          if (null === t) return null
                          var e = t.holdBack,
                            r = t.partHoldBack,
                            i = t.targetduration,
                            n = this.config,
                            s = n.liveSyncDuration,
                            a = n.liveSyncDurationCount,
                            o = n.lowLatencyMode,
                            l = this.hls.userConfig,
                            u = (o && r) || e
                          ;(l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== s ? s : a * i)
                          var c = i
                          return u + Math.min(1 * this.stallCount, c)
                        },
                      },
                      {
                        key: 'liveSyncPosition',
                        get: function () {
                          var t = this.estimateLiveEdge(),
                            e = this.targetLatency,
                            r = this.levelDetails
                          if (null === t || null === e || null === r) return null
                          var i = r.edge,
                            n = t - e - this.edgeStalled,
                            s = i - r.totalduration,
                            a = i - ((this.config.lowLatencyMode && r.partTarget) || r.targetduration)
                          return Math.min(Math.max(s, n), a)
                        },
                      },
                      {
                        key: 'drift',
                        get: function () {
                          var t = this.levelDetails
                          return null === t ? 1 : t.drift
                        },
                      },
                      {
                        key: 'edgeStalled',
                        get: function () {
                          var t = this.levelDetails
                          if (null === t) return 0
                          var e = 3 * ((this.config.lowLatencyMode && t.partTarget) || t.targetduration)
                          return Math.max(t.age - e, 0)
                        },
                      },
                      {
                        key: 'forwardBufferLength',
                        get: function () {
                          var t = this.media,
                            e = this.levelDetails
                          if (!t || !e) return 0
                          var r = t.buffered.length
                          return r ? t.buffered.end(r - 1) : e.edge - this.currentTime
                        },
                      },
                    ]) && a(e.prototype, r),
                    o && a(e, o),
                    t
                  )
                })()
              },
            './src/controller/level-controller.ts':
              /*!********************************************!*\
  !*** ./src/controller/level-controller.ts ***!
  \********************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return g
                  })
                var i = r(/*! ../types/level */ './src/types/level.ts'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../errors */ './src/errors.ts'),
                  a = r(/*! ../utils/codecs */ './src/utils/codecs.ts'),
                  o = r(/*! ./level-helper */ './src/controller/level-helper.ts'),
                  l = r(/*! ./base-playlist-controller */ './src/controller/base-playlist-controller.ts'),
                  u = r(/*! ../types/loader */ './src/types/loader.ts')
                function c() {
                  return (c =
                    Object.assign ||
                    function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e]
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                      }
                      return t
                    }).apply(this, arguments)
                }
                function d(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function h(t, e) {
                  return (h =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var f = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                  g = (function (t) {
                    var e, r
                    function l(e) {
                      var r
                      return (
                        ((r = t.call(this, e, '[level-controller]') || this)._levels = []),
                        (r._firstLevel = -1),
                        (r._startLevel = void 0),
                        (r.currentLevelIndex = -1),
                        (r.manualLevelIndex = -1),
                        (r.onParsedComplete = void 0),
                        r._registerListeners(),
                        r
                      )
                    }
                    ;(r = t), ((e = l).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), h(e, r)
                    var g,
                      v,
                      p,
                      m = l.prototype
                    return (
                      (m._registerListeners = function () {
                        var t = this.hls
                        t.on(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                          t.on(n.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          t.on(n.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                          t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                          t.on(n.Events.ERROR, this.onError, this)
                      }),
                      (m._unregisterListeners = function () {
                        var t = this.hls
                        t.off(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                          t.off(n.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          t.off(n.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                          t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                          t.off(n.Events.ERROR, this.onError, this)
                      }),
                      (m.destroy = function () {
                        this._unregisterListeners(),
                          (this.manualLevelIndex = -1),
                          (this._levels.length = 0),
                          t.prototype.destroy.call(this)
                      }),
                      (m.startLoad = function () {
                        this._levels.forEach(function (t) {
                          t.loadError = 0
                        }),
                          t.prototype.startLoad.call(this)
                      }),
                      (m.onManifestLoaded = function (t, e) {
                        var r,
                          l,
                          u = [],
                          c = [],
                          d = [],
                          h = {},
                          g = !1,
                          v = !1,
                          p = !1
                        if (
                          (e.levels.forEach(function (t) {
                            var e = t.attrs
                            ;(g = g || !(!t.width || !t.height)),
                              (v = v || !!t.videoCodec),
                              (p = p || !!t.audioCodec),
                              f && t.audioCodec && -1 !== t.audioCodec.indexOf('mp4a.40.34') && (t.audioCodec = void 0)
                            var r = t.bitrate + '-' + t.attrs.RESOLUTION + '-' + t.attrs.CODECS
                            ;(l = h[r]) ? l.url.push(t.url) : ((l = new i.Level(t)), (h[r] = l), u.push(l)),
                              e &&
                                (e.AUDIO && Object(o.addGroupId)(l, 'audio', e.AUDIO),
                                e.SUBTITLES && Object(o.addGroupId)(l, 'text', e.SUBTITLES))
                          }),
                          (g || v) &&
                            p &&
                            (u = u.filter(function (t) {
                              var e = t.videoCodec,
                                r = t.width,
                                i = t.height
                              return !!e || !(!r || !i)
                            })),
                          (u = u.filter(function (t) {
                            var e = t.audioCodec,
                              r = t.videoCodec
                            return (
                              (!e || Object(a.isCodecSupportedInMp4)(e, 'audio')) &&
                              (!r || Object(a.isCodecSupportedInMp4)(r, 'video'))
                            )
                          })),
                          e.audioTracks &&
                            ((c = e.audioTracks.filter(function (t) {
                              return !t.audioCodec || Object(a.isCodecSupportedInMp4)(t.audioCodec, 'audio')
                            })),
                            Object(o.assignTrackIdsByGroup)(c)),
                          e.subtitles && ((d = e.subtitles), Object(o.assignTrackIdsByGroup)(d)),
                          u.length > 0)
                        ) {
                          ;(r = u[0].bitrate),
                            u.sort(function (t, e) {
                              return t.bitrate - e.bitrate
                            }),
                            (this._levels = u)
                          for (var m = 0; m < u.length; m++)
                            if (u[m].bitrate === r) {
                              ;(this._firstLevel = m),
                                this.log('manifest loaded, ' + u.length + ' level(s) found, first bitrate: ' + r)
                              break
                            }
                          var y = p && !v,
                            E = {
                              levels: u,
                              audioTracks: c,
                              subtitleTracks: d,
                              firstLevel: this._firstLevel,
                              stats: e.stats,
                              audio: p,
                              video: v,
                              altAudio:
                                !y &&
                                c.some(function (t) {
                                  return !!t.url
                                }),
                            }
                          this.hls.trigger(n.Events.MANIFEST_PARSED, E),
                            (this.hls.config.autoStartLoad || this.hls.forceStartLoad) &&
                              this.hls.startLoad(this.hls.config.startPosition)
                        } else
                          this.hls.trigger(n.Events.ERROR, {
                            type: s.ErrorTypes.MEDIA_ERROR,
                            details: s.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: e.url,
                            reason: 'no level with compatible codecs found in manifest',
                          })
                      }),
                      (m.onError = function (e, r) {
                        if ((t.prototype.onError.call(this, e, r), !r.fatal)) {
                          var i = r.context,
                            n = this._levels[this.currentLevelIndex]
                          if (
                            i &&
                            ((i.type === u.PlaylistContextType.AUDIO_TRACK &&
                              n.audioGroupIds &&
                              i.groupId === n.audioGroupIds[n.urlId]) ||
                              (i.type === u.PlaylistContextType.SUBTITLE_TRACK &&
                                n.textGroupIds &&
                                i.groupId === n.textGroupIds[n.urlId]))
                          )
                            this.redundantFailover(this.currentLevelIndex)
                          else {
                            var a,
                              o = !1,
                              l = !0
                            switch (r.details) {
                              case s.ErrorDetails.FRAG_LOAD_ERROR:
                              case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                              case s.ErrorDetails.KEY_LOAD_ERROR:
                              case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                                if (r.frag) {
                                  var c = this._levels[r.frag.level]
                                  c
                                    ? (c.fragmentError++,
                                      c.fragmentError > this.hls.config.fragLoadingMaxRetry && (a = r.frag.level))
                                    : (a = r.frag.level)
                                }
                                break
                              case s.ErrorDetails.LEVEL_LOAD_ERROR:
                              case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                i && (i.deliveryDirectives && (l = !1), (a = i.level)), (o = !0)
                                break
                              case s.ErrorDetails.REMUX_ALLOC_ERROR:
                                ;(a = r.level), (o = !0)
                            }
                            void 0 !== a && this.recoverLevel(r, a, o, l)
                          }
                        }
                      }),
                      (m.recoverLevel = function (t, e, r, i) {
                        var n = t.details,
                          s = this._levels[e]
                        if ((s.loadError++, r)) {
                          if (!this.retryLoadingOrFail(t)) return void (this.currentLevelIndex = -1)
                          t.levelRetry = !0
                        }
                        if (i) {
                          var a = s.url.length
                          if (a > 1 && s.loadError < a) (t.levelRetry = !0), this.redundantFailover(e)
                          else if (-1 === this.manualLevelIndex) {
                            var o = 0 === e ? this._levels.length - 1 : e - 1
                            this.currentLevelIndex !== o &&
                              0 === this._levels[o].loadError &&
                              (this.warn(n + ': switch to ' + o), (t.levelRetry = !0), (this.hls.nextAutoLevel = o))
                          }
                        }
                      }),
                      (m.redundantFailover = function (t) {
                        var e = this._levels[t],
                          r = e.url.length
                        if (r > 1) {
                          var i = (e.urlId + 1) % r
                          this.warn('Switching to redundant URL-id ' + i),
                            this._levels.forEach(function (t) {
                              t.urlId = i
                            }),
                            (this.level = t)
                        }
                      }),
                      (m.onFragLoaded = function (t, e) {
                        var r = e.frag
                        if (void 0 !== r && r.type === u.PlaylistLevelType.MAIN) {
                          var i = this._levels[r.level]
                          void 0 !== i && ((i.fragmentError = 0), (i.loadError = 0))
                        }
                      }),
                      (m.onLevelLoaded = function (t, e) {
                        var r,
                          i,
                          n = e.level,
                          s = e.details,
                          a = this._levels[n]
                        if (!a)
                          return (
                            this.warn('Invalid level index ' + n),
                            void (
                              null !== (i = e.deliveryDirectives) &&
                              void 0 !== i &&
                              i.skip &&
                              (s.deltaUpdateFailed = !0)
                            )
                          )
                        n === this.currentLevelIndex
                          ? (0 === a.fragmentError && ((a.loadError = 0), (this.retryCount = 0)),
                            this.playlistLoaded(n, e, a.details))
                          : null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (s.deltaUpdateFailed = !0)
                      }),
                      (m.onAudioTrackSwitched = function (t, e) {
                        var r = this.hls.levels[this.currentLevelIndex]
                        if (r && r.audioGroupIds) {
                          for (
                            var i = -1, n = this.hls.audioTracks[e.id].groupId, s = 0;
                            s < r.audioGroupIds.length;
                            s++
                          )
                            if (r.audioGroupIds[s] === n) {
                              i = s
                              break
                            }
                          i !== r.urlId && ((r.urlId = i), this.startLoad())
                        }
                      }),
                      (m.loadPlaylist = function (t) {
                        var e = this.currentLevelIndex,
                          r = this._levels[e]
                        if (this.canLoad && r && r.url.length > 0) {
                          var i = r.urlId,
                            s = r.url[i]
                          if (t)
                            try {
                              s = t.addDirectives(s)
                            } catch (a) {
                              this.warn('Could not construct new URL with HLS Delivery Directives: ' + a)
                            }
                          this.log(
                            'Attempt loading level index ' +
                              e +
                              (t ? ' at sn ' + t.msn + ' part ' + t.part : '') +
                              ' with URL-id ' +
                              i +
                              ' ' +
                              s,
                          ),
                            this.clearTimer(),
                            this.hls.trigger(n.Events.LEVEL_LOADING, {
                              url: s,
                              level: e,
                              id: i,
                              deliveryDirectives: t || null,
                            })
                        }
                      }),
                      (m.removeLevel = function (t, e) {
                        var r = function (t, r) {
                            return r !== e
                          },
                          i = this._levels
                            .filter(function (i, n) {
                              return (
                                n !== t ||
                                (i.url.length > 1 &&
                                  void 0 !== e &&
                                  ((i.url = i.url.filter(r)),
                                  i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(r)),
                                  i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(r)),
                                  (i.urlId = 0),
                                  !0))
                              )
                            })
                            .map(function (t, e) {
                              var r = t.details
                              return (
                                null != r &&
                                  r.fragments &&
                                  r.fragments.forEach(function (t) {
                                    t.level = e
                                  }),
                                t
                              )
                            })
                        ;(this._levels = i), this.hls.trigger(n.Events.LEVELS_UPDATED, { levels: i })
                      }),
                      (g = l),
                      (v = [
                        {
                          key: 'levels',
                          get: function () {
                            return 0 === this._levels.length ? null : this._levels
                          },
                        },
                        {
                          key: 'level',
                          get: function () {
                            return this.currentLevelIndex
                          },
                          set: function (t) {
                            var e,
                              r = this._levels
                            if (
                              0 !== r.length &&
                              (this.currentLevelIndex !== t || null === (e = r[t]) || void 0 === e || !e.details)
                            ) {
                              if (t < 0 || t >= r.length) {
                                var i = t < 0
                                if (
                                  (this.hls.trigger(n.Events.ERROR, {
                                    type: s.ErrorTypes.OTHER_ERROR,
                                    details: s.ErrorDetails.LEVEL_SWITCH_ERROR,
                                    level: t,
                                    fatal: i,
                                    reason: 'invalid level idx',
                                  }),
                                  i)
                                )
                                  return
                                t = Math.min(t, r.length - 1)
                              }
                              this.clearTimer()
                              var a = this.currentLevelIndex,
                                o = r[a],
                                l = r[t]
                              this.log('switching to level ' + t + ' from ' + a), (this.currentLevelIndex = t)
                              var u = c({}, l, { level: t, maxBitrate: l.maxBitrate, uri: l.uri, urlId: l.urlId })
                              delete u._urlId, this.hls.trigger(n.Events.LEVEL_SWITCHING, u)
                              var d = l.details
                              if (!d || d.live) {
                                var h = this.switchParams(l.uri, null == o ? void 0 : o.details)
                                this.loadPlaylist(h)
                              }
                            }
                          },
                        },
                        {
                          key: 'manualLevel',
                          get: function () {
                            return this.manualLevelIndex
                          },
                          set: function (t) {
                            ;(this.manualLevelIndex = t),
                              void 0 === this._startLevel && (this._startLevel = t),
                              -1 !== t && (this.level = t)
                          },
                        },
                        {
                          key: 'firstLevel',
                          get: function () {
                            return this._firstLevel
                          },
                          set: function (t) {
                            this._firstLevel = t
                          },
                        },
                        {
                          key: 'startLevel',
                          get: function () {
                            if (void 0 === this._startLevel) {
                              var t = this.hls.config.startLevel
                              return void 0 !== t ? t : this._firstLevel
                            }
                            return this._startLevel
                          },
                          set: function (t) {
                            this._startLevel = t
                          },
                        },
                        {
                          key: 'nextLoadLevel',
                          get: function () {
                            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                          },
                          set: function (t) {
                            ;(this.level = t), -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                          },
                        },
                      ]) && d(g.prototype, v),
                      p && d(g, p),
                      l
                    )
                  })(l.default)
              },
            './src/controller/level-helper.ts':
              /*!****************************************!*\
  !*** ./src/controller/level-helper.ts ***!
  \****************************************/
              /*! exports provided: addGroupId, assignTrackIdsByGroup, updatePTS, updateFragPTSDTS, mergeDetails, mapPartIntersection, mapFragmentIntersection, adjustSliding, addSliding, computeReloadInterval, getFragmentWithSN, getPartWith */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'addGroupId', function () {
                    return s
                  }),
                  r.d(e, 'assignTrackIdsByGroup', function () {
                    return a
                  }),
                  r.d(e, 'updatePTS', function () {
                    return o
                  }),
                  r.d(e, 'updateFragPTSDTS', function () {
                    return u
                  }),
                  r.d(e, 'mergeDetails', function () {
                    return c
                  }),
                  r.d(e, 'mapPartIntersection', function () {
                    return d
                  }),
                  r.d(e, 'mapFragmentIntersection', function () {
                    return h
                  }),
                  r.d(e, 'adjustSliding', function () {
                    return f
                  }),
                  r.d(e, 'addSliding', function () {
                    return g
                  }),
                  r.d(e, 'computeReloadInterval', function () {
                    return v
                  }),
                  r.d(e, 'getFragmentWithSN', function () {
                    return p
                  }),
                  r.d(e, 'getPartWith', function () {
                    return m
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../utils/logger */ './src/utils/logger.ts')
                function s(t, e, r) {
                  switch (e) {
                    case 'audio':
                      t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(r)
                      break
                    case 'text':
                      t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(r)
                  }
                }
                function a(t) {
                  var e = {}
                  t.forEach(function (t) {
                    var r = t.groupId || ''
                    ;(t.id = e[r] = e[r] || 0), e[r]++
                  })
                }
                function o(t, e, r) {
                  l(t[e], t[r])
                }
                function l(t, e) {
                  var r = e.startPTS
                  if (Object(i.isFiniteNumber)(r)) {
                    var n,
                      s = 0
                    e.sn > t.sn ? ((s = r - t.start), (n = t)) : ((s = t.start - r), (n = e)),
                      n.duration !== s && (n.duration = s)
                  } else
                    e.sn > t.sn
                      ? t.cc === e.cc && t.minEndPTS
                        ? (e.start = t.start + (t.minEndPTS - t.start))
                        : (e.start = t.start + t.duration)
                      : (e.start = Math.max(t.start - e.duration, 0))
                }
                function u(t, e, r, s, a, o) {
                  s - r <= 0 &&
                    (n.logger.warn('Fragment should have a positive duration', e),
                    (s = r + e.duration),
                    (o = a + e.duration))
                  var u = r,
                    c = s,
                    d = e.startPTS,
                    h = e.endPTS
                  if (Object(i.isFiniteNumber)(d)) {
                    var f = Math.abs(d - r)
                    Object(i.isFiniteNumber)(e.deltaPTS) ? (e.deltaPTS = Math.max(f, e.deltaPTS)) : (e.deltaPTS = f),
                      (u = Math.max(r, d)),
                      (r = Math.min(r, d)),
                      (a = Math.min(a, e.startDTS)),
                      (c = Math.min(s, h)),
                      (s = Math.max(s, h)),
                      (o = Math.max(o, e.endDTS))
                  }
                  e.duration = s - r
                  var g = r - e.start
                  ;(e.appendedPTS = s),
                    (e.start = e.startPTS = r),
                    (e.maxStartPTS = u),
                    (e.startDTS = a),
                    (e.endPTS = s),
                    (e.minEndPTS = c),
                    (e.endDTS = o)
                  var v,
                    p = e.sn
                  if (!t || p < t.startSN || p > t.endSN) return 0
                  var m = p - t.startSN,
                    y = t.fragments
                  for (y[m] = e, v = m; v > 0; v--) l(y[v], y[v - 1])
                  for (v = m; v < y.length - 1; v++) l(y[v], y[v + 1])
                  return t.fragmentHint && l(y[y.length - 1], t.fragmentHint), (t.PTSKnown = t.alignedSliding = !0), g
                }
                function c(t, e) {
                  for (var r = null, s = t.fragments, a = s.length - 1; a >= 0; a--) {
                    var o = s[a].initSegment
                    if (o) {
                      r = o
                      break
                    }
                  }
                  t.fragmentHint && delete t.fragmentHint.endPTS
                  var l,
                    c = 0
                  if (
                    (h(t, e, function (t, n) {
                      var s
                      t.relurl && (c = t.cc - n.cc),
                        Object(i.isFiniteNumber)(t.startPTS) &&
                          Object(i.isFiniteNumber)(t.endPTS) &&
                          ((n.start = n.startPTS = t.startPTS),
                          (n.startDTS = t.startDTS),
                          (n.appendedPTS = t.appendedPTS),
                          (n.maxStartPTS = t.maxStartPTS),
                          (n.endPTS = t.endPTS),
                          (n.endDTS = t.endDTS),
                          (n.minEndPTS = t.minEndPTS),
                          (n.duration = t.endPTS - t.startPTS),
                          n.duration && (l = n),
                          (e.PTSKnown = e.alignedSliding = !0)),
                        (n.elementaryStreams = t.elementaryStreams),
                        (n.loader = t.loader),
                        (n.stats = t.stats),
                        (n.urlId = t.urlId),
                        t.initSegment
                          ? ((n.initSegment = t.initSegment), (r = t.initSegment))
                          : (n.initSegment &&
                              n.initSegment.relurl != (null === (s = r) || void 0 === s ? void 0 : s.relurl)) ||
                            (n.initSegment = r)
                    }),
                    e.skippedSegments &&
                      ((e.deltaUpdateFailed = e.fragments.some(function (t) {
                        return !t
                      })),
                      e.deltaUpdateFailed))
                  ) {
                    n.logger.warn('[level-helper] Previous playlist missing segments skipped in delta playlist')
                    for (var g = e.skippedSegments; g--; ) e.fragments.shift()
                    ;(e.startSN = e.fragments[0].sn), (e.startCC = e.fragments[0].cc)
                  }
                  var v = e.fragments
                  if (c) {
                    n.logger.warn('discontinuity sliding from playlist, take drift into account')
                    for (var p = 0; p < v.length; p++) v[p].cc += c
                  }
                  e.skippedSegments && (e.startCC = e.fragments[0].cc),
                    d(t.partList, e.partList, function (t, e) {
                      ;(e.elementaryStreams = t.elementaryStreams), (e.stats = t.stats)
                    }),
                    l ? u(e, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS) : f(t, e),
                    v.length && (e.totalduration = e.edge - v[0].start),
                    (e.driftStartTime = t.driftStartTime),
                    (e.driftStart = t.driftStart)
                  var m = e.advancedDateTime
                  if (e.advanced && m) {
                    var y = e.edge
                    e.driftStart || ((e.driftStartTime = m), (e.driftStart = y)), (e.driftEndTime = m), (e.driftEnd = y)
                  } else
                    (e.driftEndTime = t.driftEndTime),
                      (e.driftEnd = t.driftEnd),
                      (e.advancedDateTime = t.advancedDateTime)
                }
                function d(t, e, r) {
                  if (t && e)
                    for (var i = 0, n = 0, s = t.length; n <= s; n++) {
                      var a = t[n],
                        o = e[n + i]
                      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? r(a, o) : i--
                    }
                }
                function h(t, e, r) {
                  for (
                    var i = e.skippedSegments,
                      n = Math.max(t.startSN, e.startSN) - e.startSN,
                      s = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN,
                      a = e.startSN - t.startSN,
                      o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments,
                      l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
                      u = n;
                    u <= s;
                    u++
                  ) {
                    var c = l[a + u],
                      d = o[u]
                    i && !d && u < i && (d = e.fragments[u] = c), c && d && r(c, d)
                  }
                }
                function f(t, e) {
                  var r = e.startSN + e.skippedSegments - t.startSN,
                    i = t.fragments
                  r < 0 || r >= i.length || g(e, i[r].start)
                }
                function g(t, e) {
                  if (e) {
                    for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++) r[i].start += e
                    t.fragmentHint && (t.fragmentHint.start += e)
                  }
                }
                function v(t, e) {
                  var r,
                    i = 1e3 * t.levelTargetDuration,
                    n = i / 2,
                    s = t.age,
                    a = s > 0 && s < 3 * i,
                    o = e.loading.end - e.loading.start,
                    l = t.availabilityDelay
                  if (!1 === t.updated)
                    if (a) {
                      var u = 333 * t.misses
                      ;(r = Math.max(Math.min(n, 2 * o), u)), (t.availabilityDelay = (t.availabilityDelay || 0) + r)
                    } else r = n
                  else a ? ((l = Math.min(l || i / 2, s)), (t.availabilityDelay = l), (r = l + i - s)) : (r = i - o)
                  return Math.round(r)
                }
                function p(t, e, r) {
                  if (!t || !t.details) return null
                  var i = t.details,
                    n = i.fragments[e - i.startSN]
                  return n || ((n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null)
                }
                function m(t, e, r) {
                  if (!t || !t.details) return null
                  var i = t.details.partList
                  if (i)
                    for (var n = i.length; n--; ) {
                      var s = i[n]
                      if (s.index === r && s.fragment.sn === e) return s
                    }
                  return null
                }
              },
            './src/controller/stream-controller.ts':
              /*!*********************************************!*\
  !*** ./src/controller/stream-controller.ts ***!
  \*********************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return y
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ./base-stream-controller */ './src/controller/base-stream-controller.ts'),
                  s = r(/*! ../is-supported */ './src/is-supported.ts'),
                  a = r(/*! ../events */ './src/events.ts'),
                  o = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  l = r(/*! ./fragment-tracker */ './src/controller/fragment-tracker.ts'),
                  u = r(/*! ../types/loader */ './src/types/loader.ts'),
                  c = r(/*! ../loader/fragment */ './src/loader/fragment.ts'),
                  d = r(/*! ../demux/transmuxer-interface */ './src/demux/transmuxer-interface.ts'),
                  h = r(/*! ../types/transmuxer */ './src/types/transmuxer.ts'),
                  f = r(/*! ./gap-controller */ './src/controller/gap-controller.ts'),
                  g = r(/*! ../errors */ './src/errors.ts'),
                  v = r(/*! ../utils/logger */ './src/utils/logger.ts')
                function p(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function m(t, e) {
                  return (m =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var y = (function (t) {
                  var e, r
                  function y(e, r) {
                    var i
                    return (
                      ((i = t.call(this, e, r, '[stream-controller]') || this).audioCodecSwap = !1),
                      (i.gapController = null),
                      (i.level = -1),
                      (i._forceStartLoad = !1),
                      (i.altAudio = !1),
                      (i.audioOnly = !1),
                      (i.fragPlaying = null),
                      (i.onvplaying = null),
                      (i.onvseeked = null),
                      (i.fragLastKbps = 0),
                      (i.stalled = !1),
                      (i.couldBacktrack = !1),
                      (i.audioCodecSwitch = !1),
                      (i.videoBuffer = null),
                      i._registerListeners(),
                      i
                    )
                  }
                  ;(r = t), ((e = y).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), m(e, r)
                  var E,
                    T,
                    S,
                    b = y.prototype
                  return (
                    (b._registerListeners = function () {
                      var t = this.hls
                      t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.on(a.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                        t.on(a.Events.ERROR, this.onError, this),
                        t.on(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                        t.on(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                        t.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                        t.on(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                        t.on(a.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                        t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                    }),
                    (b._unregisterListeners = function () {
                      var t = this.hls
                      t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                        t.off(a.Events.ERROR, this.onError, this),
                        t.off(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                        t.off(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                        t.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this),
                        t.off(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                        t.off(a.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                        t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                    }),
                    (b.onHandlerDestroying = function () {
                      this._unregisterListeners(), this.onMediaDetaching()
                    }),
                    (b.startLoad = function (t) {
                      if (this.levels) {
                        var e = this.lastCurrentTime,
                          r = this.hls
                        if (
                          (this.stopLoad(),
                          this.setInterval(100),
                          (this.level = -1),
                          (this.fragLoadError = 0),
                          !this.startFragRequested)
                        ) {
                          var i = r.startLevel
                          ;-1 === i &&
                            (r.config.testBandwidth ? ((i = 0), (this.bitrateTest = !0)) : (i = r.nextAutoLevel)),
                            (this.level = r.nextLoadLevel = i),
                            (this.loadedmetadata = !1)
                        }
                        e > 0 &&
                          -1 === t &&
                          (this.log('Override startPosition with lastCurrentTime @' + e.toFixed(3)), (t = e)),
                          (this.state = n.State.IDLE),
                          (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t),
                          this.tick()
                      } else (this._forceStartLoad = !0), (this.state = n.State.STOPPED)
                    }),
                    (b.stopLoad = function () {
                      ;(this._forceStartLoad = !1), t.prototype.stopLoad.call(this)
                    }),
                    (b.doTick = function () {
                      switch (this.state) {
                        case n.State.IDLE:
                          this.doTickIdle()
                          break
                        case n.State.WAITING_LEVEL:
                          var t,
                            e = this.levels,
                            r = this.level,
                            i = null == e || null === (t = e[r]) || void 0 === t ? void 0 : t.details
                          if (i && (!i.live || this.levelLastLoaded === this.level)) {
                            if (this.waitForCdnTuneIn(i)) break
                            this.state = n.State.IDLE
                            break
                          }
                          break
                        case n.State.FRAG_LOADING_WAITING_RETRY:
                          var s,
                            a = self.performance.now(),
                            o = this.retryDate
                          ;(!o || a >= o || (null !== (s = this.media) && void 0 !== s && s.seeking)) &&
                            (this.log('retryDate reached, switch back to IDLE state'), (this.state = n.State.IDLE))
                      }
                      this.onTickEnd()
                    }),
                    (b.onTickEnd = function () {
                      t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
                    }),
                    (b.doTickIdle = function () {
                      var t,
                        e,
                        r = this.hls,
                        i = this.levelLastLoaded,
                        s = this.levels,
                        o = this.media,
                        d = r.config,
                        h = r.nextLoadLevel
                      if (
                        null !== i &&
                        (o || (!this.startFragRequested && d.startFragPrefetch)) &&
                        (!this.altAudio || !this.audioOnly) &&
                        s &&
                        s[h]
                      ) {
                        var f = s[h]
                        this.level = r.nextLoadLevel = h
                        var g = f.details
                        if (!g || this.state === n.State.WAITING_LEVEL || (g.live && this.levelLastLoaded !== h))
                          this.state = n.State.WAITING_LEVEL
                        else {
                          var v = this.getFwdBufferInfo(
                            this.mediaBuffer ? this.mediaBuffer : o,
                            u.PlaylistLevelType.MAIN,
                          )
                          if (null !== v && !(v.len >= this.getMaxBufferLength(f.maxBitrate))) {
                            if (this._streamEnded(v, g)) {
                              var p = {}
                              return (
                                this.altAudio && (p.type = 'video'),
                                this.hls.trigger(a.Events.BUFFER_EOS, p),
                                void (this.state = n.State.ENDED)
                              )
                            }
                            var m = v.end,
                              y = this.getNextFragment(m, g)
                            if (this.couldBacktrack && !this.fragPrevious && y && 'initSegment' !== y.sn) {
                              var E = y.sn - g.startSN
                              E > 1 && ((y = g.fragments[E - 1]), this.fragmentTracker.removeFragment(y))
                            }
                            if (
                              y &&
                              this.fragmentTracker.getState(y) === l.FragmentState.OK &&
                              this.nextLoadPosition > m
                            ) {
                              var T =
                                this.audioOnly && !this.altAudio
                                  ? c.ElementaryStreamTypes.AUDIO
                                  : c.ElementaryStreamTypes.VIDEO
                              this.afterBufferFlushed(o, T, u.PlaylistLevelType.MAIN),
                                (y = this.getNextFragment(this.nextLoadPosition, g))
                            }
                            y &&
                              (!y.initSegment || y.initSegment.data || this.bitrateTest || (y = y.initSegment),
                              'identity' !== (null === (t = y.decryptdata) || void 0 === t ? void 0 : t.keyFormat) ||
                              (null !== (e = y.decryptdata) && void 0 !== e && e.key)
                                ? this.loadFragment(y, g, m)
                                : this.loadKey(y, g))
                          }
                        }
                      }
                    }),
                    (b.loadFragment = function (e, r, i) {
                      var n,
                        s = this.fragmentTracker.getState(e)
                      if (((this.fragCurrent = e), s === l.FragmentState.BACKTRACKED)) {
                        var a = this.fragmentTracker.getBacktrackData(e)
                        if (a) return this._handleFragmentLoadProgress(a), void this._handleFragmentLoadComplete(a)
                        s = l.FragmentState.NOT_LOADED
                      }
                      s === l.FragmentState.NOT_LOADED || s === l.FragmentState.PARTIAL
                        ? 'initSegment' === e.sn
                          ? this._loadInitSegment(e)
                          : this.bitrateTest
                          ? ((e.bitrateTest = !0),
                            this.log(
                              'Fragment ' +
                                e.sn +
                                ' of level ' +
                                e.level +
                                ' is being downloaded to test bitrate and will not be buffered',
                            ),
                            this._loadBitrateTestFrag(e))
                          : ((this.startFragRequested = !0), t.prototype.loadFragment.call(this, e, r, i))
                        : s === l.FragmentState.APPENDING
                        ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
                        : 0 === (null === (n = this.media) || void 0 === n ? void 0 : n.buffered.length) &&
                          this.fragmentTracker.removeAllFragments()
                    }),
                    (b.getAppendedFrag = function (t) {
                      var e = this.fragmentTracker.getAppendedFrag(t, u.PlaylistLevelType.MAIN)
                      return e && 'fragment' in e ? e.fragment : e
                    }),
                    (b.getBufferedFrag = function (t) {
                      return this.fragmentTracker.getBufferedFrag(t, u.PlaylistLevelType.MAIN)
                    }),
                    (b.followingBufferedFrag = function (t) {
                      return t ? this.getBufferedFrag(t.end + 0.5) : null
                    }),
                    (b.immediateLevelSwitch = function () {
                      this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                    }),
                    (b.nextLevelSwitch = function () {
                      var t = this.levels,
                        e = this.media
                      if (null != e && e.readyState) {
                        var r,
                          i = this.getAppendedFrag(e.currentTime)
                        if ((i && i.start > 1 && this.flushMainBuffer(0, i.start - 1), !e.paused && t)) {
                          var n = t[this.hls.nextLoadLevel],
                            s = this.fragLastKbps
                          r = s && this.fragCurrent ? (this.fragCurrent.duration * n.maxBitrate) / (1e3 * s) + 1 : 0
                        } else r = 0
                        var a = this.getBufferedFrag(e.currentTime + r)
                        if (a) {
                          var o = this.followingBufferedFrag(a)
                          if (o) {
                            this.abortCurrentFrag()
                            var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                              u = o.duration,
                              c = Math.max(
                                a.end,
                                l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, 0.5 * u), 0.75 * u),
                              )
                            this.flushMainBuffer(c, Number.POSITIVE_INFINITY)
                          }
                        }
                      }
                    }),
                    (b.abortCurrentFrag = function () {
                      var t = this.fragCurrent
                      ;(this.fragCurrent = null),
                        null != t && t.loader && t.loader.abort(),
                        this.state === n.State.KEY_LOADING && (this.state = n.State.IDLE),
                        (this.nextLoadPosition = this.getLoadPosition())
                    }),
                    (b.flushMainBuffer = function (e, r) {
                      t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? 'video' : null)
                    }),
                    (b.onMediaAttached = function (e, r) {
                      t.prototype.onMediaAttached.call(this, e, r)
                      var i = r.media
                      ;(this.onvplaying = this.onMediaPlaying.bind(this)),
                        (this.onvseeked = this.onMediaSeeked.bind(this)),
                        i.addEventListener('playing', this.onvplaying),
                        i.addEventListener('seeked', this.onvseeked),
                        (this.gapController = new f.default(this.config, i, this.fragmentTracker, this.hls))
                    }),
                    (b.onMediaDetaching = function () {
                      var e = this.media
                      e &&
                        (e.removeEventListener('playing', this.onvplaying),
                        e.removeEventListener('seeked', this.onvseeked),
                        (this.onvplaying = this.onvseeked = null),
                        (this.videoBuffer = null)),
                        (this.fragPlaying = null),
                        this.gapController && (this.gapController.destroy(), (this.gapController = null)),
                        t.prototype.onMediaDetaching.call(this)
                    }),
                    (b.onMediaPlaying = function () {
                      this.tick()
                    }),
                    (b.onMediaSeeked = function () {
                      var t = this.media,
                        e = t ? t.currentTime : null
                      Object(i.isFiniteNumber)(e) && this.log('Media seeked to ' + e.toFixed(3)), this.tick()
                    }),
                    (b.onManifestLoading = function () {
                      this.log('Trigger BUFFER_RESET'),
                        this.hls.trigger(a.Events.BUFFER_RESET, void 0),
                        this.fragmentTracker.removeAllFragments(),
                        (this.couldBacktrack = this.stalled = !1),
                        (this.startPosition = this.lastCurrentTime = 0),
                        (this.fragPlaying = null)
                    }),
                    (b.onManifestParsed = function (t, e) {
                      var r,
                        i = !1,
                        n = !1
                      e.levels.forEach(function (t) {
                        ;(r = t.audioCodec) &&
                          (-1 !== r.indexOf('mp4a.40.2') && (i = !0), -1 !== r.indexOf('mp4a.40.5') && (n = !0))
                      }),
                        (this.audioCodecSwitch = i && n && !Object(s.changeTypeSupported)()),
                        this.audioCodecSwitch &&
                          this.log('Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC'),
                        (this.levels = e.levels),
                        (this.startFragRequested = !1)
                    }),
                    (b.onLevelLoading = function (t, e) {
                      var r = this.levels
                      if (r && this.state === n.State.IDLE) {
                        var i = r[e.level]
                        ;(!i.details ||
                          (i.details.live && this.levelLastLoaded !== e.level) ||
                          this.waitForCdnTuneIn(i.details)) &&
                          (this.state = n.State.WAITING_LEVEL)
                      }
                    }),
                    (b.onLevelLoaded = function (t, e) {
                      var r,
                        i = this.levels,
                        s = e.level,
                        o = e.details,
                        l = o.totalduration
                      if (i) {
                        this.log(
                          'Level ' +
                            s +
                            ' loaded [' +
                            o.startSN +
                            ',' +
                            o.endSN +
                            '], cc [' +
                            o.startCC +
                            ', ' +
                            o.endCC +
                            '] duration:' +
                            l,
                        )
                        var u = this.fragCurrent
                        !u ||
                          (this.state !== n.State.FRAG_LOADING && this.state !== n.State.FRAG_LOADING_WAITING_RETRY) ||
                          (u.level !== e.level && u.loader && ((this.state = n.State.IDLE), u.loader.abort()))
                        var c = i[s],
                          d = 0
                        if (o.live || (null !== (r = c.details) && void 0 !== r && r.live)) {
                          if ((o.fragments[0] || (o.deltaUpdateFailed = !0), o.deltaUpdateFailed)) return
                          d = this.alignPlaylists(o, c.details)
                        }
                        if (
                          ((c.details = o),
                          (this.levelLastLoaded = s),
                          this.hls.trigger(a.Events.LEVEL_UPDATED, { details: o, level: s }),
                          this.state === n.State.WAITING_LEVEL)
                        ) {
                          if (this.waitForCdnTuneIn(o)) return
                          this.state = n.State.IDLE
                        }
                        this.startFragRequested ? o.live && this.synchronizeToLiveEdge(o) : this.setStartPosition(o, d),
                          this.tick()
                      } else this.warn('Levels were reset while loading level ' + s)
                    }),
                    (b._handleFragmentLoadProgress = function (t) {
                      var e,
                        r = t.frag,
                        i = t.part,
                        n = t.payload,
                        s = this.levels
                      if (s) {
                        var a = s[r.level],
                          o = a.details
                        if (o) {
                          var l = a.videoCodec,
                            c = o.PTSKnown || !o.live,
                            f = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data,
                            g = this._getAudioCodec(a),
                            v = (this.transmuxer =
                              this.transmuxer ||
                              new d.default(
                                this.hls,
                                u.PlaylistLevelType.MAIN,
                                this._handleTransmuxComplete.bind(this),
                                this._handleTransmuxerFlush.bind(this),
                              )),
                            p = i ? i.index : -1,
                            m = -1 !== p,
                            y = new h.ChunkMetadata(r.level, r.sn, r.stats.chunkCount, n.byteLength, p, m),
                            E = this.initPTS[r.cc]
                          v.push(n, f, g, l, r, i, o.totalduration, c, y, E)
                        } else
                          this.warn(
                            'Dropping fragment ' + r.sn + ' of level ' + r.level + ' after level details were reset',
                          )
                      } else
                        this.warn(
                          'Levels were reset while fragment load was in progress. Fragment ' +
                            r.sn +
                            ' of level ' +
                            r.level +
                            ' will not be buffered',
                        )
                    }),
                    (b.onAudioTrackSwitching = function (t, e) {
                      var r = this.altAudio,
                        i = !!e.url,
                        n = e.id
                      if (!i) {
                        if (this.mediaBuffer !== this.media) {
                          this.log('Switching on main audio, use media.buffered to schedule main fragment loading'),
                            (this.mediaBuffer = this.media)
                          var s = this.fragCurrent
                          null != s &&
                            s.loader &&
                            (this.log('Switching to main audio track, cancel main fragment load'), s.loader.abort()),
                            this.resetTransmuxer(),
                            this.resetLoadingState()
                        } else this.audioOnly && this.resetTransmuxer()
                        var o = this.hls
                        r &&
                          o.trigger(a.Events.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: 'audio',
                          }),
                          o.trigger(a.Events.AUDIO_TRACK_SWITCHED, { id: n })
                      }
                    }),
                    (b.onAudioTrackSwitched = function (t, e) {
                      var r = e.id,
                        i = !!this.hls.audioTracks[r].url
                      if (i) {
                        var n = this.videoBuffer
                        n &&
                          this.mediaBuffer !== n &&
                          (this.log(
                            'Switching on alternate audio, use video.buffered to schedule main fragment loading',
                          ),
                          (this.mediaBuffer = n))
                      }
                      ;(this.altAudio = i), this.tick()
                    }),
                    (b.onBufferCreated = function (t, e) {
                      var r,
                        i,
                        n = e.tracks,
                        s = !1
                      for (var a in n) {
                        var o = n[a]
                        if ('main' === o.id) {
                          if (((i = a), (r = o), 'video' === a)) {
                            var l = n[a]
                            l && (this.videoBuffer = l.buffer)
                          }
                        } else s = !0
                      }
                      s && r
                        ? (this.log('Alternate track found, use ' + i + '.buffered to schedule main fragment loading'),
                          (this.mediaBuffer = r.buffer))
                        : (this.mediaBuffer = this.media)
                    }),
                    (b.onFragBuffered = function (t, e) {
                      var r = e.frag,
                        i = e.part
                      if (!r || r.type === u.PlaylistLevelType.MAIN) {
                        if (this.fragContextChanged(r))
                          return (
                            this.warn(
                              'Fragment ' +
                                r.sn +
                                (i ? ' p: ' + i.index : '') +
                                ' of level ' +
                                r.level +
                                ' finished buffering, but was aborted. state: ' +
                                this.state,
                            ),
                            void (this.state === n.State.PARSED && (this.state = n.State.IDLE))
                          )
                        var s = i ? i.stats : r.stats
                        ;(this.fragLastKbps = Math.round((8 * s.total) / (s.buffering.end - s.loading.first))),
                          'initSegment' !== r.sn && (this.fragPrevious = r),
                          this.fragBufferedComplete(r, i)
                      }
                    }),
                    (b.onError = function (t, e) {
                      switch (e.details) {
                        case g.ErrorDetails.FRAG_LOAD_ERROR:
                        case g.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        case g.ErrorDetails.KEY_LOAD_ERROR:
                        case g.ErrorDetails.KEY_LOAD_TIMEOUT:
                          this.onFragmentOrKeyLoadError(u.PlaylistLevelType.MAIN, e)
                          break
                        case g.ErrorDetails.LEVEL_LOAD_ERROR:
                        case g.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                          this.state !== n.State.ERROR &&
                            (e.fatal
                              ? (this.warn('' + e.details), (this.state = n.State.ERROR))
                              : e.levelRetry || this.state !== n.State.WAITING_LEVEL || (this.state = n.State.IDLE))
                          break
                        case g.ErrorDetails.BUFFER_FULL_ERROR:
                          if (
                            'main' === e.parent &&
                            (this.state === n.State.PARSING || this.state === n.State.PARSED)
                          ) {
                            var r = !0,
                              i = this.getFwdBufferInfo(this.media, u.PlaylistLevelType.MAIN)
                            i && i.len > 0.5 && (r = !this.reduceMaxBufferLength(i.len)),
                              r &&
                                (this.warn('buffer full error also media.currentTime is not buffered, flush main'),
                                this.immediateLevelSwitch()),
                              this.resetLoadingState()
                          }
                      }
                    }),
                    (b.checkBuffer = function () {
                      var t = this.media,
                        e = this.gapController
                      if (t && e && t.readyState) {
                        var r = o.BufferHelper.getBuffered(t)
                        !this.loadedmetadata && r.length
                          ? ((this.loadedmetadata = !0), this.seekToStartPos())
                          : e.poll(this.lastCurrentTime),
                          (this.lastCurrentTime = t.currentTime)
                      }
                    }),
                    (b.onFragLoadEmergencyAborted = function () {
                      ;(this.state = n.State.IDLE),
                        this.loadedmetadata ||
                          ((this.startFragRequested = !1), (this.nextLoadPosition = this.startPosition)),
                        this.tickImmediate()
                    }),
                    (b.onBufferFlushed = function (t, e) {
                      var r = e.type
                      if (r !== c.ElementaryStreamTypes.AUDIO || (this.audioOnly && !this.altAudio)) {
                        var i =
                          (r === c.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media
                        this.afterBufferFlushed(i, r, u.PlaylistLevelType.MAIN)
                      }
                    }),
                    (b.onLevelsUpdated = function (t, e) {
                      this.levels = e.levels
                    }),
                    (b.swapAudioCodec = function () {
                      this.audioCodecSwap = !this.audioCodecSwap
                    }),
                    (b.seekToStartPos = function () {
                      var t = this.media,
                        e = t.currentTime,
                        r = this.startPosition
                      if (r >= 0 && e < r) {
                        if (t.seeking) return void v.logger.log('could not seek to ' + r + ', already seeking at ' + e)
                        var i = o.BufferHelper.getBuffered(t),
                          n = (i.length ? i.start(0) : 0) - r
                        n > 0 &&
                          (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) &&
                          (v.logger.log('adjusting start position by ' + n + ' to match buffer start'),
                          (r += n),
                          (this.startPosition = r)),
                          this.log('seek to target start position ' + r + ' from current time ' + e),
                          (t.currentTime = r)
                      }
                    }),
                    (b._getAudioCodec = function (t) {
                      var e = this.config.defaultAudioCodec || t.audioCodec
                      return (
                        this.audioCodecSwap &&
                          e &&
                          (this.log('Swapping audio codec'),
                          (e = -1 !== e.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5')),
                        e
                      )
                    }),
                    (b._loadBitrateTestFrag = function (t) {
                      var e = this
                      this._doFragLoad(t).then(function (r) {
                        var i = e.hls
                        if (r && !i.nextLoadLevel && !e.fragContextChanged(t)) {
                          ;(e.fragLoadError = 0),
                            (e.state = n.State.IDLE),
                            (e.startFragRequested = !1),
                            (e.bitrateTest = !1)
                          var s = t.stats
                          ;(s.parsing.start =
                            s.parsing.end =
                            s.buffering.start =
                            s.buffering.end =
                              self.performance.now()),
                            i.trigger(a.Events.FRAG_LOADED, r)
                        }
                      })
                    }),
                    (b._handleTransmuxComplete = function (t) {
                      var e,
                        r = 'main',
                        s = this.hls,
                        o = t.remuxResult,
                        l = t.chunkMeta,
                        u = this.getCurrentContext(l)
                      if (!u)
                        return (
                          this.warn(
                            'The loading context changed while buffering fragment ' +
                              l.sn +
                              ' of level ' +
                              l.level +
                              '. This chunk will not be buffered.',
                          ),
                          void this.resetLiveStartWhenNotLoaded(l.level)
                        )
                      var d = u.frag,
                        h = u.part,
                        f = u.level,
                        g = o.video,
                        v = o.text,
                        p = o.id3,
                        m = o.initSegment,
                        y = this.altAudio ? void 0 : o.audio
                      if (!this.fragContextChanged(d)) {
                        if (((this.state = n.State.PARSING), m)) {
                          m.tracks &&
                            (this._bufferInitSegment(f, m.tracks, d, l),
                            s.trigger(a.Events.FRAG_PARSING_INIT_SEGMENT, { frag: d, id: r, tracks: m.tracks }))
                          var E = m.initPTS,
                            T = m.timescale
                          Object(i.isFiniteNumber)(E) &&
                            ((this.initPTS[d.cc] = E),
                            s.trigger(a.Events.INIT_PTS_FOUND, { frag: d, id: r, initPTS: E, timescale: T }))
                        }
                        if (g && !1 !== o.independent) {
                          if (f.details) {
                            var S = g.startPTS,
                              b = g.endPTS,
                              L = g.startDTS,
                              A = g.endDTS
                            if (h) h.elementaryStreams[g.type] = { startPTS: S, endPTS: b, startDTS: L, endDTS: A }
                            else if (
                              (g.firstKeyFrame && g.independent && (this.couldBacktrack = !0),
                              g.dropped && g.independent)
                            ) {
                              if (this.getLoadPosition() + this.config.maxBufferHole < S) return void this.backtrack(d)
                              d.setElementaryStreamInfo(g.type, d.start, b, d.start, A, !0)
                            }
                            d.setElementaryStreamInfo(g.type, S, b, L, A), this.bufferFragmentData(g, d, h, l)
                          }
                        } else if (!1 === o.independent) return void this.backtrack(d)
                        if (y) {
                          var D = y.startPTS,
                            R = y.endPTS,
                            k = y.startDTS,
                            _ = y.endDTS
                          h &&
                            (h.elementaryStreams[c.ElementaryStreamTypes.AUDIO] = {
                              startPTS: D,
                              endPTS: R,
                              startDTS: k,
                              endDTS: _,
                            }),
                            d.setElementaryStreamInfo(c.ElementaryStreamTypes.AUDIO, D, R, k, _),
                            this.bufferFragmentData(y, d, h, l)
                        }
                        if (null != p && null !== (e = p.samples) && void 0 !== e && e.length) {
                          var I = { frag: d, id: r, samples: p.samples }
                          s.trigger(a.Events.FRAG_PARSING_METADATA, I)
                        }
                        if (v) {
                          var C = { frag: d, id: r, samples: v.samples }
                          s.trigger(a.Events.FRAG_PARSING_USERDATA, C)
                        }
                      }
                    }),
                    (b._bufferInitSegment = function (t, e, r, i) {
                      var s = this
                      if (this.state === n.State.PARSING) {
                        ;(this.audioOnly = !!e.audio && !e.video), this.altAudio && !this.audioOnly && delete e.audio
                        var o = e.audio,
                          l = e.video,
                          u = e.audiovideo
                        if (o) {
                          var c = t.audioCodec,
                            d = navigator.userAgent.toLowerCase()
                          this.audioCodecSwitch &&
                            (c && (c = -1 !== c.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5'),
                            1 !== o.metadata.channelCount && -1 === d.indexOf('firefox') && (c = 'mp4a.40.5')),
                            -1 !== d.indexOf('android') &&
                              'audio/mpeg' !== o.container &&
                              ((c = 'mp4a.40.2'), this.log('Android: force audio codec to ' + c)),
                            t.audioCodec &&
                              t.audioCodec !== c &&
                              this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + c + '"'),
                            (o.levelCodec = c),
                            (o.id = 'main'),
                            this.log(
                              'Init audio buffer, container:' +
                                o.container +
                                ', codecs[selected/level/parsed]=[' +
                                (c || '') +
                                '/' +
                                (t.audioCodec || '') +
                                '/' +
                                o.codec +
                                ']',
                            )
                        }
                        l &&
                          ((l.levelCodec = t.videoCodec),
                          (l.id = 'main'),
                          this.log(
                            'Init video buffer, container:' +
                              l.container +
                              ', codecs[level/parsed]=[' +
                              (t.videoCodec || '') +
                              '/' +
                              l.codec +
                              ']',
                          )),
                          u &&
                            this.log(
                              'Init audiovideo buffer, container:' +
                                u.container +
                                ', codecs[level/parsed]=[' +
                                (t.attrs.CODECS || '') +
                                '/' +
                                u.codec +
                                ']',
                            ),
                          this.hls.trigger(a.Events.BUFFER_CODECS, e),
                          Object.keys(e).forEach(function (t) {
                            var n = e[t].initSegment
                            null != n &&
                              n.byteLength &&
                              s.hls.trigger(a.Events.BUFFER_APPENDING, {
                                type: t,
                                data: n,
                                frag: r,
                                part: null,
                                chunkMeta: i,
                                parent: r.type,
                              })
                          }),
                          this.tick()
                      }
                    }),
                    (b.backtrack = function (t) {
                      ;(this.couldBacktrack = !0), this.resetTransmuxer(), this.flushBufferGap(t)
                      var e = this.fragmentTracker.backtrack(t)
                      ;(this.fragPrevious = null),
                        (this.nextLoadPosition = t.start),
                        e ? this.resetFragmentLoading(t) : (this.state = n.State.BACKTRACKING)
                    }),
                    (b.checkFragmentChanged = function () {
                      var t = this.media,
                        e = null
                      if (t && t.readyState > 1 && !1 === t.seeking) {
                        var r = t.currentTime
                        if (
                          (o.BufferHelper.isBuffered(t, r)
                            ? (e = this.getAppendedFrag(r))
                            : o.BufferHelper.isBuffered(t, r + 0.1) && (e = this.getAppendedFrag(r + 0.1)),
                          e)
                        ) {
                          var i = this.fragPlaying,
                            n = e.level
                          ;(i && e.sn === i.sn && i.level === n && e.urlId === i.urlId) ||
                            (this.hls.trigger(a.Events.FRAG_CHANGED, { frag: e }),
                            (i && i.level === n) || this.hls.trigger(a.Events.LEVEL_SWITCHED, { level: n }),
                            (this.fragPlaying = e))
                        }
                      }
                    }),
                    (E = y),
                    (T = [
                      {
                        key: 'nextLevel',
                        get: function () {
                          var t = this.nextBufferedFrag
                          return t ? t.level : -1
                        },
                      },
                      {
                        key: 'currentLevel',
                        get: function () {
                          var t = this.media
                          if (t) {
                            var e = this.getAppendedFrag(t.currentTime)
                            if (e) return e.level
                          }
                          return -1
                        },
                      },
                      {
                        key: 'nextBufferedFrag',
                        get: function () {
                          var t = this.media
                          if (t) {
                            var e = this.getAppendedFrag(t.currentTime)
                            return this.followingBufferedFrag(e)
                          }
                          return null
                        },
                      },
                      {
                        key: 'forceStartLoad',
                        get: function () {
                          return this._forceStartLoad
                        },
                      },
                    ]) && p(E.prototype, T),
                    S && p(E, S),
                    y
                  )
                })(n.default)
              },
            './src/controller/subtitle-stream-controller.ts':
              /*!******************************************************!*\
  !*** ./src/controller/subtitle-stream-controller.ts ***!
  \******************************************************/
              /*! exports provided: SubtitleStreamController */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'SubtitleStreamController', function () {
                    return v
                  })
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  s = r(/*! ../utils/buffer-helper */ './src/utils/buffer-helper.ts'),
                  a = r(/*! ./fragment-finders */ './src/controller/fragment-finders.ts'),
                  o = r(/*! ../utils/discontinuities */ './src/utils/discontinuities.ts'),
                  l = r(/*! ./level-helper */ './src/controller/level-helper.ts'),
                  u = r(/*! ./fragment-tracker */ './src/controller/fragment-tracker.ts'),
                  c = r(/*! ./base-stream-controller */ './src/controller/base-stream-controller.ts'),
                  d = r(/*! ../types/loader */ './src/types/loader.ts'),
                  h = r(/*! ../types/level */ './src/types/level.ts')
                function f(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function g(t, e) {
                  return (g =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var v = (function (t) {
                  var e, r
                  function v(e, r) {
                    var i
                    return (
                      ((i = t.call(this, e, r, '[subtitle-stream-controller]') || this).levels = []),
                      (i.currentTrackId = -1),
                      (i.tracksBuffered = []),
                      (i.mainDetails = null),
                      i._registerListeners(),
                      i
                    )
                  }
                  ;(r = t), ((e = v).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), g(e, r)
                  var p,
                    m,
                    y,
                    E = v.prototype
                  return (
                    (E.onHandlerDestroying = function () {
                      this._unregisterListeners(), (this.mainDetails = null)
                    }),
                    (E._registerListeners = function () {
                      var t = this.hls
                      t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(i.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.on(i.Events.ERROR, this.onError, this),
                        t.on(i.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                        t.on(i.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                        t.on(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                        t.on(i.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                        t.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                    }),
                    (E._unregisterListeners = function () {
                      var t = this.hls
                      t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.off(i.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                        t.off(i.Events.ERROR, this.onError, this),
                        t.off(i.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                        t.off(i.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                        t.off(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                        t.off(i.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                        t.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                    }),
                    (E.startLoad = function () {
                      this.stopLoad(), (this.state = c.State.IDLE), this.setInterval(500), this.tick()
                    }),
                    (E.onManifestLoading = function () {
                      ;(this.mainDetails = null), this.fragmentTracker.removeAllFragments()
                    }),
                    (E.onLevelLoaded = function (t, e) {
                      this.mainDetails = e.details
                    }),
                    (E.onSubtitleFragProcessed = function (t, e) {
                      var r = e.frag,
                        i = e.success
                      if (((this.fragPrevious = r), (this.state = c.State.IDLE), i)) {
                        var n = this.tracksBuffered[this.currentTrackId]
                        if (n) {
                          for (var s, a = r.start, o = 0; o < n.length; o++)
                            if (a >= n[o].start && a <= n[o].end) {
                              s = n[o]
                              break
                            }
                          var l = r.start + r.duration
                          s ? (s.end = l) : ((s = { start: a, end: l }), n.push(s)),
                            this.fragmentTracker.fragBuffered(r)
                        }
                      }
                    }),
                    (E.onBufferFlushing = function (t, e) {
                      var r = e.startOffset,
                        i = e.endOffset
                      if (0 === r && i !== Number.POSITIVE_INFINITY) {
                        var n = this.currentTrackId,
                          s = this.levels
                        if (!s.length || !s[n] || !s[n].details) return
                        var a = i - s[n].details.targetduration
                        if (a <= 0) return
                        ;(e.endOffsetSubtitles = Math.max(0, a)),
                          this.tracksBuffered.forEach(function (t) {
                            for (var e = 0; e < t.length; )
                              if (t[e].end <= a) t.shift()
                              else {
                                if (!(t[e].start < a)) break
                                ;(t[e].start = a), e++
                              }
                          }),
                          this.fragmentTracker.removeFragmentsInRange(r, a, d.PlaylistLevelType.SUBTITLE)
                      }
                    }),
                    (E.onError = function (t, e) {
                      var r,
                        i = e.frag
                      i &&
                        i.type === d.PlaylistLevelType.SUBTITLE &&
                        (null !== (r = this.fragCurrent) && void 0 !== r && r.loader && this.fragCurrent.loader.abort(),
                        (this.state = c.State.IDLE))
                    }),
                    (E.onSubtitleTracksUpdated = function (t, e) {
                      var r = this,
                        i = e.subtitleTracks
                      ;(this.tracksBuffered = []),
                        (this.levels = i.map(function (t) {
                          return new h.Level(t)
                        })),
                        this.fragmentTracker.removeAllFragments(),
                        (this.fragPrevious = null),
                        this.levels.forEach(function (t) {
                          r.tracksBuffered[t.id] = []
                        }),
                        (this.mediaBuffer = null)
                    }),
                    (E.onSubtitleTrackSwitch = function (t, e) {
                      if (((this.currentTrackId = e.id), this.levels.length && -1 !== this.currentTrackId)) {
                        var r = this.levels[this.currentTrackId]
                        null != r && r.details
                          ? ((this.mediaBuffer = this.mediaBufferTimeRanges), this.setInterval(500))
                          : (this.mediaBuffer = null)
                      } else this.clearInterval()
                    }),
                    (E.onSubtitleTrackLoaded = function (t, e) {
                      var r,
                        i = e.details,
                        n = e.id,
                        s = this.currentTrackId,
                        u = this.levels
                      if (u.length) {
                        var d = u[s]
                        if (!(n >= u.length || n !== s) && d) {
                          if (
                            ((this.mediaBuffer = this.mediaBufferTimeRanges),
                            i.live || (null !== (r = d.details) && void 0 !== r && r.live))
                          ) {
                            var h = this.mainDetails
                            if (i.deltaUpdateFailed || !h) return
                            var f = h.fragments[0]
                            d.details
                              ? 0 === this.alignPlaylists(i, d.details) && f && Object(l.addSliding)(i, f.start)
                              : i.hasProgramDateTime && h.hasProgramDateTime
                              ? Object(o.alignMediaPlaylistByPDT)(i, h)
                              : f && Object(l.addSliding)(i, f.start)
                          }
                          ;(d.details = i),
                            (this.levelLastLoaded = n),
                            this.tick(),
                            i.live &&
                              !this.fragCurrent &&
                              this.media &&
                              this.state === c.State.IDLE &&
                              (Object(a.findFragmentByPTS)(null, i.fragments, this.media.currentTime, 0) ||
                                (this.warn('Subtitle playlist not aligned with playback'), (d.details = void 0)))
                        }
                      }
                    }),
                    (E._handleFragmentLoadComplete = function (t) {
                      var e = t.frag,
                        r = t.payload,
                        n = e.decryptdata,
                        s = this.hls
                      if (
                        !this.fragContextChanged(e) &&
                        r &&
                        r.byteLength > 0 &&
                        n &&
                        n.key &&
                        n.iv &&
                        'AES-128' === n.method
                      ) {
                        var a = performance.now()
                        this.decrypter
                          .webCryptoDecrypt(new Uint8Array(r), n.key.buffer, n.iv.buffer)
                          .then(function (t) {
                            var r = performance.now()
                            s.trigger(i.Events.FRAG_DECRYPTED, {
                              frag: e,
                              payload: t,
                              stats: { tstart: a, tdecrypt: r },
                            })
                          })
                      }
                    }),
                    (E.doTick = function () {
                      if (this.media) {
                        if (this.state === c.State.IDLE) {
                          var t,
                            e = this.currentTrackId,
                            r = this.levels
                          if (!r.length || !r[e] || !r[e].details) return
                          var o = r[e].details,
                            l = o.targetduration,
                            d = this.config,
                            h = this.media,
                            f = s.BufferHelper.bufferedInfo(
                              this.mediaBufferTimeRanges,
                              h.currentTime - l,
                              d.maxBufferHole,
                            ),
                            g = f.end
                          if (f.len > this.getMaxBufferLength() + l) return
                          var v,
                            p = o.fragments,
                            m = p.length,
                            y = o.edge,
                            E = this.fragPrevious
                          if (g < y) {
                            var T = d.maxFragLookUpTolerance
                            E && o.hasProgramDateTime && (v = Object(a.findFragmentByPDT)(p, E.endProgramDateTime, T)),
                              v ||
                                (!(v = Object(a.findFragmentByPTS)(E, p, g, T)) &&
                                  E &&
                                  E.start < p[0].start &&
                                  (v = p[0]))
                          } else v = p[m - 1]
                          null !== (t = v) && void 0 !== t && t.encrypted
                            ? (n.logger.log('Loading key for ' + v.sn),
                              (this.state = c.State.KEY_LOADING),
                              this.hls.trigger(i.Events.KEY_LOADING, { frag: v }))
                            : v &&
                              this.fragmentTracker.getState(v) === u.FragmentState.NOT_LOADED &&
                              this.loadFragment(v, o, g)
                        }
                      } else this.state = c.State.IDLE
                    }),
                    (E.loadFragment = function (e, r, i) {
                      ;(this.fragCurrent = e), t.prototype.loadFragment.call(this, e, r, i)
                    }),
                    (p = v),
                    (m = [
                      {
                        key: 'mediaBufferTimeRanges',
                        get: function () {
                          return this.tracksBuffered[this.currentTrackId] || []
                        },
                      },
                    ]) && f(p.prototype, m),
                    y && f(p, y),
                    v
                  )
                })(c.default)
              },
            './src/controller/subtitle-track-controller.ts':
              /*!*****************************************************!*\
  !*** ./src/controller/subtitle-track-controller.ts ***!
  \*****************************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../utils/texttrack-utils */ './src/utils/texttrack-utils.ts'),
                  s = r(/*! ./base-playlist-controller */ './src/controller/base-playlist-controller.ts'),
                  a = r(/*! ../types/loader */ './src/types/loader.ts')
                function o(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function l(t, e) {
                  return (l =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var u = (function (t) {
                  var e, r
                  function s(e) {
                    var r
                    return (
                      ((r = t.call(this, e, '[subtitle-track-controller]') || this).media = null),
                      (r.tracks = []),
                      (r.groupId = null),
                      (r.tracksInGroup = []),
                      (r.trackId = -1),
                      (r.selectDefaultTrack = !0),
                      (r.queuedDefaultTrack = -1),
                      (r.trackChangeListener = function () {
                        return r.onTextTracksChanged()
                      }),
                      (r.asyncPollTrackChange = function () {
                        return r.pollTrackChange(0)
                      }),
                      (r.useTextTrackPolling = !1),
                      (r.subtitlePollingInterval = -1),
                      (r.subtitleDisplay = !0),
                      r.registerListeners(),
                      r
                    )
                  }
                  ;(r = t), ((e = s).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), l(e, r)
                  var u,
                    d,
                    h,
                    f = s.prototype
                  return (
                    (f.destroy = function () {
                      this.unregisterListeners(),
                        (this.tracks.length = 0),
                        (this.tracksInGroup.length = 0),
                        (this.trackChangeListener = this.asyncPollTrackChange = null),
                        t.prototype.destroy.call(this)
                    }),
                    (f.registerListeners = function () {
                      var t = this.hls
                      t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.on(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                        t.on(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                        t.on(i.Events.ERROR, this.onError, this)
                    }),
                    (f.unregisterListeners = function () {
                      var t = this.hls
                      t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                        t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                        t.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.off(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                        t.off(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                        t.off(i.Events.ERROR, this.onError, this)
                    }),
                    (f.onMediaAttached = function (t, e) {
                      ;(this.media = e.media),
                        this.media &&
                          (this.queuedDefaultTrack > -1 &&
                            ((this.subtitleTrack = this.queuedDefaultTrack), (this.queuedDefaultTrack = -1)),
                          (this.useTextTrackPolling = !(this.media.textTracks && 'onchange' in this.media.textTracks)),
                          this.useTextTrackPolling
                            ? this.pollTrackChange(500)
                            : this.media.textTracks.addEventListener('change', this.asyncPollTrackChange))
                    }),
                    (f.pollTrackChange = function (t) {
                      self.clearInterval(this.subtitlePollingInterval),
                        (this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t))
                    }),
                    (f.onMediaDetaching = function () {
                      this.media &&
                        (self.clearInterval(this.subtitlePollingInterval),
                        this.useTextTrackPolling ||
                          this.media.textTracks.removeEventListener('change', this.asyncPollTrackChange),
                        this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
                        c(this.media.textTracks).forEach(function (t) {
                          Object(n.clearCurrentCues)(t)
                        }),
                        (this.subtitleTrack = -1),
                        (this.media = null))
                    }),
                    (f.onManifestLoading = function () {
                      ;(this.tracks = []),
                        (this.groupId = null),
                        (this.tracksInGroup = []),
                        (this.trackId = -1),
                        (this.selectDefaultTrack = !0)
                    }),
                    (f.onManifestParsed = function (t, e) {
                      this.tracks = e.subtitleTracks
                    }),
                    (f.onSubtitleTrackLoaded = function (t, e) {
                      var r = e.id,
                        i = e.details,
                        n = this.trackId,
                        s = this.tracksInGroup[n]
                      if (s) {
                        var a = s.details
                        ;(s.details = e.details),
                          this.log('subtitle track ' + r + ' loaded [' + i.startSN + '-' + i.endSN + ']'),
                          r === this.trackId && ((this.retryCount = 0), this.playlistLoaded(r, e, a))
                      } else this.warn('Invalid subtitle track id ' + r)
                    }),
                    (f.onLevelLoading = function (t, e) {
                      this.switchLevel(e.level)
                    }),
                    (f.onLevelSwitching = function (t, e) {
                      this.switchLevel(e.level)
                    }),
                    (f.switchLevel = function (t) {
                      var e = this.hls.levels[t]
                      if (null != e && e.textGroupIds) {
                        var r = e.textGroupIds[e.urlId]
                        if (this.groupId !== r) {
                          var n = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                            s = this.tracks.filter(function (t) {
                              return !r || t.groupId === r
                            })
                          this.tracksInGroup = s
                          var a = this.findTrackId(null == n ? void 0 : n.name) || this.findTrackId()
                          this.groupId = r
                          var o = { subtitleTracks: s }
                          this.log('Updating subtitle tracks, ' + s.length + ' track(s) found in "' + r + '" group-id'),
                            this.hls.trigger(i.Events.SUBTITLE_TRACKS_UPDATED, o),
                            -1 !== a && this.setSubtitleTrack(a, n)
                        }
                      }
                    }),
                    (f.findTrackId = function (t) {
                      for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                        var i = e[r]
                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                      }
                      return -1
                    }),
                    (f.onError = function (e, r) {
                      t.prototype.onError.call(this, e, r),
                        !r.fatal &&
                          r.context &&
                          r.context.type === a.PlaylistContextType.SUBTITLE_TRACK &&
                          r.context.id === this.trackId &&
                          r.context.groupId === this.groupId &&
                          this.retryLoadingOrFail(r)
                    }),
                    (f.loadPlaylist = function (t) {
                      var e = this.tracksInGroup[this.trackId]
                      if (this.shouldLoadTrack(e)) {
                        var r = e.id,
                          n = e.groupId,
                          s = e.url
                        if (t)
                          try {
                            s = t.addDirectives(s)
                          } catch (a) {
                            this.warn('Could not construct new URL with HLS Delivery Directives: ' + a)
                          }
                        this.log('Loading subtitle playlist for id ' + r),
                          this.hls.trigger(i.Events.SUBTITLE_TRACK_LOADING, {
                            url: s,
                            id: r,
                            groupId: n,
                            deliveryDirectives: t || null,
                          })
                      }
                    }),
                    (f.toggleTrackModes = function (t) {
                      var e = this,
                        r = this.media,
                        i = this.subtitleDisplay,
                        n = this.trackId
                      if (r) {
                        var s = c(r.textTracks),
                          a = s.filter(function (t) {
                            return t.groupId === e.groupId
                          })
                        if (-1 === t)
                          [].slice.call(s).forEach(function (t) {
                            t.mode = 'disabled'
                          })
                        else {
                          var o = a[n]
                          o && (o.mode = 'disabled')
                        }
                        var l = a[t]
                        l && (l.mode = i ? 'showing' : 'hidden')
                      }
                    }),
                    (f.setSubtitleTrack = function (t, e) {
                      var r,
                        n = this.tracksInGroup
                      if (this.media) {
                        if (
                          (this.trackId !== t && this.toggleTrackModes(t),
                          !(
                            (this.trackId === t && (-1 === t || (null !== (r = n[t]) && void 0 !== r && r.details))) ||
                            t < -1 ||
                            t >= n.length
                          ))
                        ) {
                          this.clearTimer()
                          var s = n[t]
                          if ((this.log('Switching to subtitle track ' + t), (this.trackId = t), s)) {
                            var a = s.id,
                              o = s.groupId,
                              l = void 0 === o ? '' : o,
                              u = s.name,
                              c = s.type,
                              d = s.url
                            this.hls.trigger(i.Events.SUBTITLE_TRACK_SWITCH, {
                              id: a,
                              groupId: l,
                              name: u,
                              type: c,
                              url: d,
                            })
                            var h = this.switchParams(s.url, null == e ? void 0 : e.details)
                            this.loadPlaylist(h)
                          } else this.hls.trigger(i.Events.SUBTITLE_TRACK_SWITCH, { id: t })
                        }
                      } else this.queuedDefaultTrack = t
                    }),
                    (f.onTextTracksChanged = function () {
                      if (
                        (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval),
                        this.media && this.hls.config.renderTextTracksNatively)
                      ) {
                        for (var t = -1, e = c(this.media.textTracks), r = 0; r < e.length; r++)
                          if ('hidden' === e[r].mode) t = r
                          else if ('showing' === e[r].mode) {
                            t = r
                            break
                          }
                        this.subtitleTrack !== t && (this.subtitleTrack = t)
                      }
                    }),
                    (u = s),
                    (d = [
                      {
                        key: 'subtitleTracks',
                        get: function () {
                          return this.tracksInGroup
                        },
                      },
                      {
                        key: 'subtitleTrack',
                        get: function () {
                          return this.trackId
                        },
                        set: function (t) {
                          this.selectDefaultTrack = !1
                          var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0
                          this.setSubtitleTrack(t, e)
                        },
                      },
                    ]) && o(u.prototype, d),
                    h && o(u, h),
                    s
                  )
                })(s.default)
                function c(t) {
                  for (var e = [], r = 0; r < t.length; r++) {
                    var i = t[r]
                    'subtitles' === i.kind && i.label && e.push(t[r])
                  }
                  return e
                }
                e.default = u
              },
            './src/controller/timeline-controller.ts':
              /*!***********************************************!*\
  !*** ./src/controller/timeline-controller.ts ***!
  \***********************************************/
              /*! exports provided: TimelineController */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'TimelineController', function () {
                    return h
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../utils/cea-608-parser */ './src/utils/cea-608-parser.ts'),
                  a = r(/*! ../utils/output-filter */ './src/utils/output-filter.ts'),
                  o = r(/*! ../utils/webvtt-parser */ './src/utils/webvtt-parser.ts'),
                  l = r(/*! ../utils/texttrack-utils */ './src/utils/texttrack-utils.ts'),
                  u = r(/*! ../utils/imsc1-ttml-parser */ './src/utils/imsc1-ttml-parser.ts'),
                  c = r(/*! ../types/loader */ './src/types/loader.ts'),
                  d = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  h = (function () {
                    function t(t) {
                      if (
                        ((this.hls = void 0),
                        (this.media = null),
                        (this.config = void 0),
                        (this.enabled = !0),
                        (this.Cues = void 0),
                        (this.textTracks = []),
                        (this.tracks = []),
                        (this.initPTS = []),
                        (this.timescale = []),
                        (this.unparsedVttFrags = []),
                        (this.captionsTracks = {}),
                        (this.nonNativeCaptionsTracks = {}),
                        (this.cea608Parser1 = void 0),
                        (this.cea608Parser2 = void 0),
                        (this.lastSn = -1),
                        (this.lastPartIndex = -1),
                        (this.prevCC = -1),
                        (this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } }),
                        (this.captionsProperties = void 0),
                        (this.hls = t),
                        (this.config = t.config),
                        (this.Cues = t.config.cueHandler),
                        (this.captionsProperties = {
                          textTrack1: {
                            label: this.config.captionsTextTrack1Label,
                            languageCode: this.config.captionsTextTrack1LanguageCode,
                          },
                          textTrack2: {
                            label: this.config.captionsTextTrack2Label,
                            languageCode: this.config.captionsTextTrack2LanguageCode,
                          },
                          textTrack3: {
                            label: this.config.captionsTextTrack3Label,
                            languageCode: this.config.captionsTextTrack3LanguageCode,
                          },
                          textTrack4: {
                            label: this.config.captionsTextTrack4Label,
                            languageCode: this.config.captionsTextTrack4LanguageCode,
                          },
                        }),
                        this.config.enableCEA708Captions)
                      ) {
                        var e = new a.default(this, 'textTrack1'),
                          r = new a.default(this, 'textTrack2'),
                          i = new a.default(this, 'textTrack3'),
                          o = new a.default(this, 'textTrack4')
                        ;(this.cea608Parser1 = new s.default(1, e, r)), (this.cea608Parser2 = new s.default(3, i, o))
                      }
                      t.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                        t.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                        t.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                        t.on(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                        t.on(n.Events.FRAG_LOADING, this.onFragLoading, this),
                        t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                        t.on(n.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                        t.on(n.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                        t.on(n.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                        t.on(n.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                        t.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        var t = this.hls
                        t.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                          t.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          t.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          t.off(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                          t.off(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                          t.off(n.Events.FRAG_LOADING, this.onFragLoading, this),
                          t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this),
                          t.off(n.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                          t.off(n.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                          t.off(n.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                          t.off(n.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                          t.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                          (this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null)
                      }),
                      (e.addCues = function (t, e, r, i, s) {
                        for (var a, o, l, u, c = !1, d = s.length; d--; ) {
                          var h = s[d],
                            f = ((a = h[0]), (o = h[1]), (l = e), (u = r), Math.min(o, u) - Math.max(a, l))
                          if (
                            f >= 0 &&
                            ((h[0] = Math.min(h[0], e)), (h[1] = Math.max(h[1], r)), (c = !0), f / (r - e) > 0.5)
                          )
                            return
                        }
                        if ((c || s.push([e, r]), this.config.renderTextTracksNatively)) {
                          var g = this.captionsTracks[t]
                          this.Cues.newCue(g, e, r, i)
                        } else {
                          var v = this.Cues.newCue(null, e, r, i)
                          this.hls.trigger(n.Events.CUES_PARSED, { type: 'captions', cues: v, track: t })
                        }
                      }),
                      (e.onInitPtsFound = function (t, e) {
                        var r = this,
                          i = e.frag,
                          s = e.id,
                          a = e.initPTS,
                          o = e.timescale,
                          l = this.unparsedVttFrags
                        'main' === s && ((this.initPTS[i.cc] = a), (this.timescale[i.cc] = o)),
                          l.length &&
                            ((this.unparsedVttFrags = []),
                            l.forEach(function (t) {
                              r.onFragLoaded(n.Events.FRAG_LOADED, t)
                            }))
                      }),
                      (e.getExistingTrack = function (t) {
                        var e = this.media
                        if (e)
                          for (var r = 0; r < e.textTracks.length; r++) {
                            var i = e.textTracks[r]
                            if (i[t]) return i
                          }
                        return null
                      }),
                      (e.createCaptionsTrack = function (t) {
                        this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
                      }),
                      (e.createNativeTrack = function (t) {
                        if (!this.captionsTracks[t]) {
                          var e = this.captionsProperties,
                            r = this.captionsTracks,
                            i = this.media,
                            n = e[t],
                            s = n.label,
                            a = n.languageCode,
                            o = this.getExistingTrack(t)
                          if (o) (r[t] = o), Object(l.clearCurrentCues)(r[t]), Object(l.sendAddTrackEvent)(r[t], i)
                          else {
                            var u = this.createTextTrack('captions', s, a)
                            u && ((u[t] = !0), (r[t] = u))
                          }
                        }
                      }),
                      (e.createNonNativeTrack = function (t) {
                        if (!this.nonNativeCaptionsTracks[t]) {
                          var e = this.captionsProperties[t]
                          if (e) {
                            var r = {
                              _id: t,
                              label: e.label,
                              kind: 'captions',
                              default: !!e.media && !!e.media.default,
                              closedCaptions: e.media,
                            }
                            ;(this.nonNativeCaptionsTracks[t] = r),
                              this.hls.trigger(n.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [r] })
                          }
                        }
                      }),
                      (e.createTextTrack = function (t, e, r) {
                        var i = this.media
                        if (i) return i.addTextTrack(t, e, r)
                      }),
                      (e.onMediaAttaching = function (t, e) {
                        ;(this.media = e.media), this._cleanTracks()
                      }),
                      (e.onMediaDetaching = function () {
                        var t = this.captionsTracks
                        Object.keys(t).forEach(function (e) {
                          Object(l.clearCurrentCues)(t[e]), delete t[e]
                        }),
                          (this.nonNativeCaptionsTracks = {})
                      }),
                      (e.onManifestLoading = function () {
                        ;(this.lastSn = -1),
                          (this.lastPartIndex = -1),
                          (this.prevCC = -1),
                          (this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } }),
                          this._cleanTracks(),
                          (this.tracks = []),
                          (this.captionsTracks = {}),
                          (this.nonNativeCaptionsTracks = {}),
                          (this.textTracks = []),
                          (this.unparsedVttFrags = this.unparsedVttFrags || []),
                          (this.initPTS = []),
                          (this.timescale = []),
                          this.cea608Parser1 &&
                            this.cea608Parser2 &&
                            (this.cea608Parser1.reset(), this.cea608Parser2.reset())
                      }),
                      (e._cleanTracks = function () {
                        var t = this.media
                        if (t) {
                          var e = t.textTracks
                          if (e) for (var r = 0; r < e.length; r++) Object(l.clearCurrentCues)(e[r])
                        }
                      }),
                      (e.onSubtitleTracksUpdated = function (t, e) {
                        var r = this
                        this.textTracks = []
                        var i = e.subtitleTracks || [],
                          s = i.some(function (t) {
                            return t.textCodec === u.IMSC1_CODEC
                          })
                        if (this.config.enableWebVTT || (s && this.config.enableIMSC1)) {
                          var a = this.tracks && i && this.tracks.length === i.length
                          if (((this.tracks = i || []), this.config.renderTextTracksNatively)) {
                            var o = this.media ? this.media.textTracks : []
                            this.tracks.forEach(function (t, e) {
                              var i
                              if (e < o.length) {
                                for (var n = null, s = 0; s < o.length; s++)
                                  if (f(o[s], t)) {
                                    n = o[s]
                                    break
                                  }
                                n && (i = n)
                              }
                              i
                                ? Object(l.clearCurrentCues)(i)
                                : (i = r.createTextTrack('subtitles', t.name, t.lang)) && (i.mode = 'disabled'),
                                i && ((i.groupId = t.groupId), r.textTracks.push(i))
                            })
                          } else if (!a && this.tracks && this.tracks.length) {
                            var c = this.tracks.map(function (t) {
                              return { label: t.name, kind: t.type.toLowerCase(), default: t.default, subtitleTrack: t }
                            })
                            this.hls.trigger(n.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: c })
                          }
                        }
                      }),
                      (e.onManifestLoaded = function (t, e) {
                        var r = this
                        this.config.enableCEA708Captions &&
                          e.captions &&
                          e.captions.forEach(function (t) {
                            var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId)
                            if (e) {
                              var i = 'textTrack' + e[1],
                                n = r.captionsProperties[i]
                              n && ((n.label = t.name), t.lang && (n.languageCode = t.lang), (n.media = t))
                            }
                          })
                      }),
                      (e.onFragLoading = function (t, e) {
                        var r = this.cea608Parser1,
                          i = this.cea608Parser2,
                          n = this.lastSn,
                          s = this.lastPartIndex
                        if (this.enabled && r && i && e.frag.type === c.PlaylistLevelType.MAIN) {
                          var a,
                            o,
                            l = e.frag.sn,
                            u =
                              null != (a = null == e || null === (o = e.part) || void 0 === o ? void 0 : o.index)
                                ? a
                                : -1
                          l === n + 1 || (l === n && u === s + 1) || (r.reset(), i.reset()),
                            (this.lastSn = l),
                            (this.lastPartIndex = u)
                        }
                      }),
                      (e.onFragLoaded = function (t, e) {
                        var r = e.frag,
                          s = e.payload,
                          a = this.initPTS,
                          o = this.unparsedVttFrags
                        if (r.type === c.PlaylistLevelType.SUBTITLE)
                          if (s.byteLength) {
                            if (!Object(i.isFiniteNumber)(a[r.cc]))
                              return (
                                o.push(e),
                                void (
                                  a.length &&
                                  this.hls.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: r,
                                    error: new Error('Missing initial subtitle PTS'),
                                  })
                                )
                              )
                            var l = r.decryptdata
                            if (null == l || null == l.key || 'AES-128' !== l.method) {
                              var d = this.tracks[r.level],
                                h = this.vttCCs
                              h[r.cc] ||
                                ((h[r.cc] = { start: r.start, prevCC: this.prevCC, new: !0 }), (this.prevCC = r.cc)),
                                d && d.textCodec === u.IMSC1_CODEC ? this._parseIMSC1(r, s) : this._parseVTTs(r, s, h)
                            }
                          } else
                            this.hls.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                              success: !1,
                              frag: r,
                              error: new Error('Empty subtitle payload'),
                            })
                      }),
                      (e._parseIMSC1 = function (t, e) {
                        var r = this,
                          i = this.hls
                        Object(u.parseIMSC1)(
                          e,
                          this.initPTS[t.cc],
                          this.timescale[t.cc],
                          function (e) {
                            r._appendCues(e, t.level),
                              i.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: t })
                          },
                          function (e) {
                            d.logger.log('Failed to parse IMSC1: ' + e),
                              i.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t, error: e })
                          },
                        )
                      }),
                      (e._parseVTTs = function (t, e, r) {
                        var i = this,
                          s = this.hls
                        Object(o.parseWebVTT)(
                          e,
                          this.initPTS[t.cc],
                          this.timescale[t.cc],
                          r,
                          t.cc,
                          t.start,
                          function (e) {
                            i._appendCues(e, t.level),
                              s.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: t })
                          },
                          function (r) {
                            i._fallbackToIMSC1(t, e),
                              d.logger.log('Failed to parse VTT cue: ' + r),
                              s.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t, error: r })
                          },
                        )
                      }),
                      (e._fallbackToIMSC1 = function (t, e) {
                        var r = this,
                          i = this.tracks[t.level]
                        i.textCodec ||
                          Object(u.parseIMSC1)(
                            e,
                            this.initPTS[t.cc],
                            this.timescale[t.cc],
                            function () {
                              ;(i.textCodec = u.IMSC1_CODEC), r._parseIMSC1(t, e)
                            },
                            function () {
                              i.textCodec = 'wvtt'
                            },
                          )
                      }),
                      (e._appendCues = function (t, e) {
                        var r = this.hls
                        if (this.config.renderTextTracksNatively) {
                          var i = this.textTracks[e]
                          if ('disabled' === i.mode) return
                          t.forEach(function (t) {
                            return Object(l.addCueToTrack)(i, t)
                          })
                        } else {
                          var s = this.tracks[e].default ? 'default' : 'subtitles' + e
                          r.trigger(n.Events.CUES_PARSED, { type: 'subtitles', cues: t, track: s })
                        }
                      }),
                      (e.onFragDecrypted = function (t, e) {
                        var r = e.frag
                        if (r.type === c.PlaylistLevelType.SUBTITLE) {
                          if (!Object(i.isFiniteNumber)(this.initPTS[r.cc])) return void this.unparsedVttFrags.push(e)
                          this.onFragLoaded(n.Events.FRAG_LOADED, e)
                        }
                      }),
                      (e.onSubtitleTracksCleared = function () {
                        ;(this.tracks = []), (this.captionsTracks = {})
                      }),
                      (e.onFragParsingUserdata = function (t, e) {
                        var r = this.cea608Parser1,
                          i = this.cea608Parser2
                        if (this.enabled && r && i)
                          for (var n = 0; n < e.samples.length; n++) {
                            var s = e.samples[n].bytes
                            if (s) {
                              var a = this.extractCea608Data(s)
                              r.addData(e.samples[n].pts, a[0]), i.addData(e.samples[n].pts, a[1])
                            }
                          }
                      }),
                      (e.onBufferFlushing = function (t, e) {
                        var r = e.startOffset,
                          i = e.endOffset,
                          n = e.endOffsetSubtitles,
                          s = e.type,
                          a = this.media
                        if (a && !(a.currentTime < i)) {
                          if (!s || 'video' === s) {
                            var o = this.captionsTracks
                            Object.keys(o).forEach(function (t) {
                              return Object(l.removeCuesInRange)(o[t], r, i)
                            })
                          }
                          if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                            var u = this.textTracks
                            Object.keys(u).forEach(function (t) {
                              return Object(l.removeCuesInRange)(u[t], r, n)
                            })
                          }
                        }
                      }),
                      (e.extractCea608Data = function (t) {
                        for (var e = [[], []], r = 31 & t[0], i = 2, n = 0; n < r; n++) {
                          var s = t[i++],
                            a = 127 & t[i++],
                            o = 127 & t[i++]
                          if ((0 !== a || 0 !== o) && 0 != (4 & s)) {
                            var l = 3 & s
                            ;(0 !== l && 1 !== l) || (e[l].push(a), e[l].push(o))
                          }
                        }
                        return e
                      }),
                      t
                    )
                  })()
                function f(t, e) {
                  return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
                }
              },
            './src/crypt/aes-crypto.ts':
              /*!*********************************!*\
  !*** ./src/crypt/aes-crypto.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return i
                  })
                var i = (function () {
                  function t(t, e) {
                    ;(this.subtle = void 0), (this.aesIV = void 0), (this.subtle = t), (this.aesIV = e)
                  }
                  return (
                    (t.prototype.decrypt = function (t, e) {
                      return this.subtle.decrypt({ name: 'AES-CBC', iv: this.aesIV }, e, t)
                    }),
                    t
                  )
                })()
              },
            './src/crypt/aes-decryptor.ts':
              /*!************************************!*\
  !*** ./src/crypt/aes-decryptor.ts ***!
  \************************************/
              /*! exports provided: removePadding, default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'removePadding', function () {
                    return n
                  }),
                  r.d(e, 'default', function () {
                    return s
                  })
                var i = r(/*! ../utils/typed-array */ './src/utils/typed-array.ts')
                function n(t) {
                  var e = t.byteLength,
                    r = e && new DataView(t.buffer).getUint8(e - 1)
                  return r ? Object(i.sliceUint8)(t, 0, e - r) : t
                }
                var s = (function () {
                  function t() {
                    ;(this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
                      (this.subMix = [
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                      ]),
                      (this.invSubMix = [
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                        new Uint32Array(256),
                      ]),
                      (this.sBox = new Uint32Array(256)),
                      (this.invSBox = new Uint32Array(256)),
                      (this.key = new Uint32Array(0)),
                      (this.ksRows = 0),
                      (this.keySize = 0),
                      (this.keySchedule = void 0),
                      (this.invKeySchedule = void 0),
                      this.initTable()
                  }
                  var e = t.prototype
                  return (
                    (e.uint8ArrayToUint32Array_ = function (t) {
                      for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i)
                      return r
                    }),
                    (e.initTable = function () {
                      var t = this.sBox,
                        e = this.invSBox,
                        r = this.subMix,
                        i = r[0],
                        n = r[1],
                        s = r[2],
                        a = r[3],
                        o = this.invSubMix,
                        l = o[0],
                        u = o[1],
                        c = o[2],
                        d = o[3],
                        h = new Uint32Array(256),
                        f = 0,
                        g = 0,
                        v = 0
                      for (v = 0; v < 256; v++) h[v] = v < 128 ? v << 1 : (v << 1) ^ 283
                      for (v = 0; v < 256; v++) {
                        var p = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4)
                        ;(p = (p >>> 8) ^ (255 & p) ^ 99), (t[f] = p), (e[p] = f)
                        var m = h[f],
                          y = h[m],
                          E = h[y],
                          T = (257 * h[p]) ^ (16843008 * p)
                        ;(i[f] = (T << 24) | (T >>> 8)),
                          (n[f] = (T << 16) | (T >>> 16)),
                          (s[f] = (T << 8) | (T >>> 24)),
                          (a[f] = T),
                          (T = (16843009 * E) ^ (65537 * y) ^ (257 * m) ^ (16843008 * f)),
                          (l[p] = (T << 24) | (T >>> 8)),
                          (u[p] = (T << 16) | (T >>> 16)),
                          (c[p] = (T << 8) | (T >>> 24)),
                          (d[p] = T),
                          f ? ((f = m ^ h[h[h[E ^ m]]]), (g ^= h[h[g]])) : (f = g = 1)
                      }
                    }),
                    (e.expandKey = function (t) {
                      for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r; )
                        (r = e[i] === this.key[i]), i++
                      if (!r) {
                        this.key = e
                        var n = (this.keySize = e.length)
                        if (4 !== n && 6 !== n && 8 !== n) throw new Error('Invalid aes key size=' + n)
                        var s,
                          a,
                          o,
                          l,
                          u = (this.ksRows = 4 * (n + 6 + 1)),
                          c = (this.keySchedule = new Uint32Array(u)),
                          d = (this.invKeySchedule = new Uint32Array(u)),
                          h = this.sBox,
                          f = this.rcon,
                          g = this.invSubMix,
                          v = g[0],
                          p = g[1],
                          m = g[2],
                          y = g[3]
                        for (s = 0; s < u; s++)
                          s < n
                            ? (o = c[s] = e[s])
                            : ((l = o),
                              s % n == 0
                                ? ((l =
                                    (h[(l = (l << 8) | (l >>> 24)) >>> 24] << 24) |
                                    (h[(l >>> 16) & 255] << 16) |
                                    (h[(l >>> 8) & 255] << 8) |
                                    h[255 & l]),
                                  (l ^= f[(s / n) | 0] << 24))
                                : n > 6 &&
                                  s % n == 4 &&
                                  (l =
                                    (h[l >>> 24] << 24) |
                                    (h[(l >>> 16) & 255] << 16) |
                                    (h[(l >>> 8) & 255] << 8) |
                                    h[255 & l]),
                              (c[s] = o = (c[s - n] ^ l) >>> 0))
                        for (a = 0; a < u; a++)
                          (s = u - a),
                            (l = 3 & a ? c[s] : c[s - 4]),
                            (d[a] =
                              a < 4 || s <= 4
                                ? l
                                : v[h[l >>> 24]] ^ p[h[(l >>> 16) & 255]] ^ m[h[(l >>> 8) & 255]] ^ y[h[255 & l]]),
                            (d[a] = d[a] >>> 0)
                      }
                    }),
                    (e.networkToHostOrderSwap = function (t) {
                      return (t << 24) | ((65280 & t) << 8) | ((16711680 & t) >> 8) | (t >>> 24)
                    }),
                    (e.decrypt = function (t, e, r) {
                      for (
                        var i,
                          n,
                          s,
                          a,
                          o,
                          l,
                          u,
                          c,
                          d,
                          h,
                          f,
                          g,
                          v,
                          p,
                          m = this.keySize + 6,
                          y = this.invKeySchedule,
                          E = this.invSBox,
                          T = this.invSubMix,
                          S = T[0],
                          b = T[1],
                          L = T[2],
                          A = T[3],
                          D = this.uint8ArrayToUint32Array_(r),
                          R = D[0],
                          k = D[1],
                          _ = D[2],
                          I = D[3],
                          C = new Int32Array(t),
                          O = new Int32Array(C.length),
                          w = this.networkToHostOrderSwap;
                        e < C.length;

                      ) {
                        for (
                          d = w(C[e]),
                            h = w(C[e + 1]),
                            f = w(C[e + 2]),
                            g = w(C[e + 3]),
                            o = d ^ y[0],
                            l = g ^ y[1],
                            u = f ^ y[2],
                            c = h ^ y[3],
                            v = 4,
                            p = 1;
                          p < m;
                          p++
                        )
                          (i = S[o >>> 24] ^ b[(l >> 16) & 255] ^ L[(u >> 8) & 255] ^ A[255 & c] ^ y[v]),
                            (n = S[l >>> 24] ^ b[(u >> 16) & 255] ^ L[(c >> 8) & 255] ^ A[255 & o] ^ y[v + 1]),
                            (s = S[u >>> 24] ^ b[(c >> 16) & 255] ^ L[(o >> 8) & 255] ^ A[255 & l] ^ y[v + 2]),
                            (a = S[c >>> 24] ^ b[(o >> 16) & 255] ^ L[(l >> 8) & 255] ^ A[255 & u] ^ y[v + 3]),
                            (o = i),
                            (l = n),
                            (u = s),
                            (c = a),
                            (v += 4)
                        ;(i =
                          (E[o >>> 24] << 24) ^
                          (E[(l >> 16) & 255] << 16) ^
                          (E[(u >> 8) & 255] << 8) ^
                          E[255 & c] ^
                          y[v]),
                          (n =
                            (E[l >>> 24] << 24) ^
                            (E[(u >> 16) & 255] << 16) ^
                            (E[(c >> 8) & 255] << 8) ^
                            E[255 & o] ^
                            y[v + 1]),
                          (s =
                            (E[u >>> 24] << 24) ^
                            (E[(c >> 16) & 255] << 16) ^
                            (E[(o >> 8) & 255] << 8) ^
                            E[255 & l] ^
                            y[v + 2]),
                          (a =
                            (E[c >>> 24] << 24) ^
                            (E[(o >> 16) & 255] << 16) ^
                            (E[(l >> 8) & 255] << 8) ^
                            E[255 & u] ^
                            y[v + 3]),
                          (O[e] = w(i ^ R)),
                          (O[e + 1] = w(a ^ k)),
                          (O[e + 2] = w(s ^ _)),
                          (O[e + 3] = w(n ^ I)),
                          (R = d),
                          (k = h),
                          (_ = f),
                          (I = g),
                          (e += 4)
                      }
                      return O.buffer
                    }),
                    t
                  )
                })()
              },
            './src/crypt/decrypter.ts':
              /*!********************************!*\
  !*** ./src/crypt/decrypter.ts ***!
  \********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return u
                  })
                var i = r(/*! ./aes-crypto */ './src/crypt/aes-crypto.ts'),
                  n = r(/*! ./fast-aes-key */ './src/crypt/fast-aes-key.ts'),
                  s = r(/*! ./aes-decryptor */ './src/crypt/aes-decryptor.ts'),
                  a = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  o = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  l = r(/*! ../utils/typed-array */ './src/utils/typed-array.ts'),
                  u = (function () {
                    function t(t, e, r) {
                      var i = (void 0 === r ? {} : r).removePKCS7Padding,
                        n = void 0 === i || i
                      if (
                        ((this.logEnabled = !0),
                        (this.observer = void 0),
                        (this.config = void 0),
                        (this.removePKCS7Padding = void 0),
                        (this.subtle = null),
                        (this.softwareDecrypter = null),
                        (this.key = null),
                        (this.fastAesKey = null),
                        (this.remainderData = null),
                        (this.currentIV = null),
                        (this.currentResult = null),
                        (this.observer = t),
                        (this.config = e),
                        (this.removePKCS7Padding = n),
                        n)
                      )
                        try {
                          var s = self.crypto
                          s && (this.subtle = s.subtle || s.webkitSubtle)
                        } catch (a) {}
                      null === this.subtle && (this.config.enableSoftwareAES = !0)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        this.observer = null
                      }),
                      (e.isSync = function () {
                        return this.config.enableSoftwareAES
                      }),
                      (e.flush = function () {
                        var t = this.currentResult
                        if (t) {
                          var e = new Uint8Array(t)
                          return this.reset(), this.removePKCS7Padding ? Object(s.removePadding)(e) : e
                        }
                        this.reset()
                      }),
                      (e.reset = function () {
                        ;(this.currentResult = null),
                          (this.currentIV = null),
                          (this.remainderData = null),
                          this.softwareDecrypter && (this.softwareDecrypter = null)
                      }),
                      (e.decrypt = function (t, e, r, i) {
                        if (this.config.enableSoftwareAES) {
                          this.softwareDecrypt(new Uint8Array(t), e, r)
                          var n = this.flush()
                          n && i(n.buffer)
                        } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i)
                      }),
                      (e.softwareDecrypt = function (t, e, r) {
                        var i = this.currentIV,
                          n = this.currentResult,
                          a = this.remainderData
                        this.logOnce('JS AES decrypt'),
                          a && ((t = Object(o.appendUint8Array)(a, t)), (this.remainderData = null))
                        var u = this.getValidChunk(t)
                        if (!u.length) return null
                        i && (r = i)
                        var c = this.softwareDecrypter
                        c || (c = this.softwareDecrypter = new s.default()), c.expandKey(e)
                        var d = n
                        return (
                          (this.currentResult = c.decrypt(u.buffer, 0, r)),
                          (this.currentIV = Object(l.sliceUint8)(u, -16).buffer),
                          d || null
                        )
                      }),
                      (e.webCryptoDecrypt = function (t, e, r) {
                        var s = this,
                          a = this.subtle
                        return (
                          (this.key === e && this.fastAesKey) ||
                            ((this.key = e), (this.fastAesKey = new n.default(a, e))),
                          this.fastAesKey
                            .expandKey()
                            .then(function (e) {
                              return a
                                ? new i.default(a, r).decrypt(t.buffer, e)
                                : Promise.reject(new Error('web crypto not initialized'))
                            })
                            .catch(function (i) {
                              return s.onWebCryptoError(i, t, e, r)
                            })
                        )
                      }),
                      (e.onWebCryptoError = function (t, e, r, i) {
                        return (
                          a.logger.warn('[decrypter.ts]: WebCrypto Error, disable WebCrypto API:', t),
                          (this.config.enableSoftwareAES = !0),
                          (this.logEnabled = !0),
                          this.softwareDecrypt(e, r, i)
                        )
                      }),
                      (e.getValidChunk = function (t) {
                        var e = t,
                          r = t.length - (t.length % 16)
                        return (
                          r !== t.length &&
                            ((e = Object(l.sliceUint8)(t, 0, r)), (this.remainderData = Object(l.sliceUint8)(t, r))),
                          e
                        )
                      }),
                      (e.logOnce = function (t) {
                        this.logEnabled && (a.logger.log('[decrypter.ts]: ' + t), (this.logEnabled = !1))
                      }),
                      t
                    )
                  })()
              },
            './src/crypt/fast-aes-key.ts':
              /*!***********************************!*\
  !*** ./src/crypt/fast-aes-key.ts ***!
  \***********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return i
                  })
                var i = (function () {
                  function t(t, e) {
                    ;(this.subtle = void 0), (this.key = void 0), (this.subtle = t), (this.key = e)
                  }
                  return (
                    (t.prototype.expandKey = function () {
                      return this.subtle.importKey('raw', this.key, { name: 'AES-CBC' }, !1, ['encrypt', 'decrypt'])
                    }),
                    t
                  )
                })()
              },
            './src/demux/aacdemuxer.ts':
              /*!*********************************!*\
  !*** ./src/demux/aacdemuxer.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./base-audio-demuxer */ './src/demux/base-audio-demuxer.ts'),
                  n = r(/*! ./adts */ './src/demux/adts.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  a = r(/*! ../demux/id3 */ './src/demux/id3.ts')
                function o(t, e) {
                  return (o =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var l = (function (t) {
                  var e, r
                  function i(e, r) {
                    var i
                    return (
                      ((i = t.call(this) || this).observer = void 0),
                      (i.config = void 0),
                      (i.observer = e),
                      (i.config = r),
                      i
                    )
                  }
                  ;(r = t), ((e = i).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), o(e, r)
                  var l = i.prototype
                  return (
                    (l.resetInitSegment = function (e, r, i, n) {
                      t.prototype.resetInitSegment.call(this, e, r, i, n),
                        (this._audioTrack = {
                          container: 'audio/adts',
                          type: 'audio',
                          id: 0,
                          pid: -1,
                          sequenceNumber: 0,
                          isAAC: !0,
                          samples: [],
                          manifestCodec: r,
                          duration: n,
                          inputTimeScale: 9e4,
                          dropped: 0,
                        })
                    }),
                    (i.probe = function (t) {
                      if (!t) return !1
                      for (var e = (a.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                        if (n.probe(t, e)) return s.logger.log('ADTS sync word found !'), !0
                      return !1
                    }),
                    (l.canParse = function (t, e) {
                      return n.canParse(t, e)
                    }),
                    (l.appendFrame = function (t, e, r) {
                      n.initTrackConfig(t, this.observer, e, r, t.manifestCodec)
                      var i = n.appendFrame(t, e, r, this.initPTS, this.frameIndex)
                      if (i && 0 === i.missing) return i
                    }),
                    i
                  )
                })(i.default)
                ;(l.minProbeByteLength = 9), (e.default = l)
              },
            './src/demux/adts.ts':
              /*!***************************!*\
  !*** ./src/demux/adts.ts ***!
  \***************************/
              /*! exports provided: getAudioConfig, isHeaderPattern, getHeaderLength, getFullFrameLength, canGetFrameLength, isHeader, canParse, probe, initTrackConfig, getFrameDuration, parseFrameHeader, appendFrame */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'getAudioConfig', function () {
                    return a
                  }),
                  r.d(e, 'isHeaderPattern', function () {
                    return o
                  }),
                  r.d(e, 'getHeaderLength', function () {
                    return l
                  }),
                  r.d(e, 'getFullFrameLength', function () {
                    return u
                  }),
                  r.d(e, 'canGetFrameLength', function () {
                    return c
                  }),
                  r.d(e, 'isHeader', function () {
                    return d
                  }),
                  r.d(e, 'canParse', function () {
                    return h
                  }),
                  r.d(e, 'probe', function () {
                    return f
                  }),
                  r.d(e, 'initTrackConfig', function () {
                    return g
                  }),
                  r.d(e, 'getFrameDuration', function () {
                    return v
                  }),
                  r.d(e, 'parseFrameHeader', function () {
                    return p
                  }),
                  r.d(e, 'appendFrame', function () {
                    return m
                  })
                var i = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  n = r(/*! ../errors */ './src/errors.ts'),
                  s = r(/*! ../events */ './src/events.ts')
                function a(t, e, r, a) {
                  var o,
                    l,
                    u,
                    c,
                    d = navigator.userAgent.toLowerCase(),
                    h = a,
                    f = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
                  o = 1 + ((192 & e[r + 2]) >>> 6)
                  var g = (60 & e[r + 2]) >>> 2
                  if (!(g > f.length - 1))
                    return (
                      (u = (1 & e[r + 2]) << 2),
                      (u |= (192 & e[r + 3]) >>> 6),
                      i.logger.log('manifest codec:' + a + ', ADTS type:' + o + ', samplingIndex:' + g),
                      /firefox/i.test(d)
                        ? g >= 6
                          ? ((o = 5), (c = new Array(4)), (l = g - 3))
                          : ((o = 2), (c = new Array(2)), (l = g))
                        : -1 !== d.indexOf('android')
                        ? ((o = 2), (c = new Array(2)), (l = g))
                        : ((o = 5),
                          (c = new Array(4)),
                          (a && (-1 !== a.indexOf('mp4a.40.29') || -1 !== a.indexOf('mp4a.40.5'))) || (!a && g >= 6)
                            ? (l = g - 3)
                            : (((a && -1 !== a.indexOf('mp4a.40.2') && ((g >= 6 && 1 === u) || /vivaldi/i.test(d))) ||
                                (!a && 1 === u)) &&
                                ((o = 2), (c = new Array(2))),
                              (l = g))),
                      (c[0] = o << 3),
                      (c[0] |= (14 & g) >> 1),
                      (c[1] |= (1 & g) << 7),
                      (c[1] |= u << 3),
                      5 === o && ((c[1] |= (14 & l) >> 1), (c[2] = (1 & l) << 7), (c[2] |= 8), (c[3] = 0)),
                      { config: c, samplerate: f[g], channelCount: u, codec: 'mp4a.40.' + o, manifestCodec: h }
                    )
                  t.trigger(s.Events.ERROR, {
                    type: n.ErrorTypes.MEDIA_ERROR,
                    details: n.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !0,
                    reason: 'invalid ADTS sampling index:' + g,
                  })
                }
                function o(t, e) {
                  return 255 === t[e] && 240 == (246 & t[e + 1])
                }
                function l(t, e) {
                  return 1 & t[e + 1] ? 7 : 9
                }
                function u(t, e) {
                  return ((3 & t[e + 3]) << 11) | (t[e + 4] << 3) | ((224 & t[e + 5]) >>> 5)
                }
                function c(t, e) {
                  return e + 5 < t.length
                }
                function d(t, e) {
                  return e + 1 < t.length && o(t, e)
                }
                function h(t, e) {
                  return c(t, e) && o(t, e) && u(t, e) <= t.length - e
                }
                function f(t, e) {
                  if (d(t, e)) {
                    var r = l(t, e)
                    if (e + r >= t.length) return !1
                    var i = u(t, e)
                    if (i <= r) return !1
                    var n = e + i
                    return n === t.length || d(t, n)
                  }
                  return !1
                }
                function g(t, e, r, n, s) {
                  if (!t.samplerate) {
                    var o = a(e, r, n, s)
                    if (!o) return
                    ;(t.config = o.config),
                      (t.samplerate = o.samplerate),
                      (t.channelCount = o.channelCount),
                      (t.codec = o.codec),
                      (t.manifestCodec = o.manifestCodec),
                      i.logger.log(
                        'parsed codec:' + t.codec + ', rate:' + o.samplerate + ', channels:' + o.channelCount,
                      )
                  }
                }
                function v(t) {
                  return 9216e4 / t
                }
                function p(t, e, r, i, n) {
                  var s = l(t, e),
                    a = u(t, e)
                  if ((a -= s) > 0) return { headerLength: s, frameLength: a, stamp: r + i * n }
                }
                function m(t, e, r, i, n) {
                  var s = p(e, r, i, n, v(t.samplerate))
                  if (s) {
                    var a,
                      o = s.frameLength,
                      l = s.headerLength,
                      u = s.stamp,
                      c = l + o,
                      d = Math.max(0, r + c - e.length)
                    d ? (a = new Uint8Array(c - l)).set(e.subarray(r + l, e.length), 0) : (a = e.subarray(r + l, r + c))
                    var h = { unit: a, pts: u }
                    return d || t.samples.push(h), { sample: h, length: c, missing: d }
                  }
                }
              },
            './src/demux/base-audio-demuxer.ts':
              /*!*****************************************!*\
  !*** ./src/demux/base-audio-demuxer.ts ***!
  \*****************************************/
              /*! exports provided: initPTSFn, default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'initPTSFn', function () {
                    return u
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../demux/id3 */ './src/demux/id3.ts'),
                  s = r(/*! ./dummy-demuxed-track */ './src/demux/dummy-demuxed-track.ts'),
                  a = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  o = r(/*! ../utils/typed-array */ './src/utils/typed-array.ts'),
                  l = (function () {
                    function t() {
                      ;(this._audioTrack = void 0),
                        (this._id3Track = void 0),
                        (this.frameIndex = 0),
                        (this.cachedData = null),
                        (this.initPTS = null)
                    }
                    var e = t.prototype
                    return (
                      (e.resetInitSegment = function (t, e, r, i) {
                        this._id3Track = {
                          type: 'id3',
                          id: 0,
                          pid: -1,
                          inputTimeScale: 9e4,
                          sequenceNumber: 0,
                          samples: [],
                          dropped: 0,
                        }
                      }),
                      (e.resetTimeStamp = function () {}),
                      (e.resetContiguity = function () {}),
                      (e.canParse = function (t, e) {
                        return !1
                      }),
                      (e.appendFrame = function (t, e, r) {}),
                      (e.demux = function (t, e) {
                        this.cachedData &&
                          ((t = Object(a.appendUint8Array)(this.cachedData, t)), (this.cachedData = null))
                        var r,
                          i,
                          l = n.getID3Data(t, 0),
                          c = l ? l.length : 0,
                          d = this._audioTrack,
                          h = this._id3Track,
                          f = l ? n.getTimeStamp(l) : void 0,
                          g = t.length
                        for (
                          (0 !== this.frameIndex && null !== this.initPTS) || (this.initPTS = u(f, e)),
                            l && l.length > 0 && h.samples.push({ pts: this.initPTS, dts: this.initPTS, data: l }),
                            i = this.initPTS;
                          c < g;

                        ) {
                          if (this.canParse(t, c)) {
                            var v = this.appendFrame(d, t, c)
                            v ? (this.frameIndex++, (i = v.sample.pts), (r = c += v.length)) : (c = g)
                          } else
                            n.canParse(t, c)
                              ? ((l = n.getID3Data(t, c)),
                                h.samples.push({ pts: i, dts: i, data: l }),
                                (r = c += l.length))
                              : c++
                          if (c === g && r !== g) {
                            var p = Object(o.sliceUint8)(t, r)
                            this.cachedData
                              ? (this.cachedData = Object(a.appendUint8Array)(this.cachedData, p))
                              : (this.cachedData = p)
                          }
                        }
                        return {
                          audioTrack: d,
                          videoTrack: Object(s.dummyTrack)(),
                          id3Track: h,
                          textTrack: Object(s.dummyTrack)(),
                        }
                      }),
                      (e.demuxSampleAes = function (t, e, r) {
                        return Promise.reject(
                          new Error('[' + this + '] This demuxer does not support Sample-AES decryption'),
                        )
                      }),
                      (e.flush = function (t) {
                        var e = this.cachedData
                        return (
                          e && ((this.cachedData = null), this.demux(e, 0)),
                          (this.frameIndex = 0),
                          {
                            audioTrack: this._audioTrack,
                            videoTrack: Object(s.dummyTrack)(),
                            id3Track: this._id3Track,
                            textTrack: Object(s.dummyTrack)(),
                          }
                        )
                      }),
                      (e.destroy = function () {}),
                      t
                    )
                  })(),
                  u = function (t, e) {
                    return Object(i.isFiniteNumber)(t) ? 90 * t : 9e4 * e
                  }
                e.default = l
              },
            './src/demux/chunk-cache.ts':
              /*!**********************************!*\
  !*** ./src/demux/chunk-cache.ts ***!
  \**********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return i
                  })
                var i = (function () {
                  function t() {
                    ;(this.chunks = []), (this.dataLength = 0)
                  }
                  var e = t.prototype
                  return (
                    (e.push = function (t) {
                      this.chunks.push(t), (this.dataLength += t.length)
                    }),
                    (e.flush = function () {
                      var t,
                        e = this.chunks,
                        r = this.dataLength
                      return e.length
                        ? ((t =
                            1 === e.length
                              ? e[0]
                              : (function (t, e) {
                                  for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                                    var s = t[n]
                                    r.set(s, i), (i += s.length)
                                  }
                                  return r
                                })(e, r)),
                          this.reset(),
                          t)
                        : new Uint8Array(0)
                    }),
                    (e.reset = function () {
                      ;(this.chunks.length = 0), (this.dataLength = 0)
                    }),
                    t
                  )
                })()
              },
            './src/demux/dummy-demuxed-track.ts':
              /*!******************************************!*\
  !*** ./src/demux/dummy-demuxed-track.ts ***!
  \******************************************/
              /*! exports provided: dummyTrack */ function (t, e, r) {
                'use strict'
                function i(t, e) {
                  return (
                    void 0 === t && (t = ''),
                    void 0 === e && (e = 9e4),
                    { type: t, id: -1, pid: -1, inputTimeScale: e, sequenceNumber: -1, samples: [], dropped: 0 }
                  )
                }
                r.r(e),
                  r.d(e, 'dummyTrack', function () {
                    return i
                  })
              },
            './src/demux/exp-golomb.ts':
              /*!*********************************!*\
  !*** ./src/demux/exp-golomb.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  n = (function () {
                    function t(t) {
                      ;(this.data = void 0),
                        (this.bytesAvailable = void 0),
                        (this.word = void 0),
                        (this.bitsAvailable = void 0),
                        (this.data = t),
                        (this.bytesAvailable = t.byteLength),
                        (this.word = 0),
                        (this.bitsAvailable = 0)
                    }
                    var e = t.prototype
                    return (
                      (e.loadWord = function () {
                        var t = this.data,
                          e = this.bytesAvailable,
                          r = t.byteLength - e,
                          i = new Uint8Array(4),
                          n = Math.min(4, e)
                        if (0 === n) throw new Error('no bytes available')
                        i.set(t.subarray(r, r + n)),
                          (this.word = new DataView(i.buffer).getUint32(0)),
                          (this.bitsAvailable = 8 * n),
                          (this.bytesAvailable -= n)
                      }),
                      (e.skipBits = function (t) {
                        var e
                        this.bitsAvailable > t
                          ? ((this.word <<= t), (this.bitsAvailable -= t))
                          : ((t -= this.bitsAvailable),
                            (t -= (e = t >> 3) >> 3),
                            (this.bytesAvailable -= e),
                            this.loadWord(),
                            (this.word <<= t),
                            (this.bitsAvailable -= t))
                      }),
                      (e.readBits = function (t) {
                        var e = Math.min(this.bitsAvailable, t),
                          r = this.word >>> (32 - e)
                        return (
                          t > 32 && i.logger.error('Cannot read more than 32 bits at a time'),
                          (this.bitsAvailable -= e),
                          this.bitsAvailable > 0 ? (this.word <<= e) : this.bytesAvailable > 0 && this.loadWord(),
                          (e = t - e) > 0 && this.bitsAvailable ? (r << e) | this.readBits(e) : r
                        )
                      }),
                      (e.skipLZ = function () {
                        var t
                        for (t = 0; t < this.bitsAvailable; ++t)
                          if (0 != (this.word & (2147483648 >>> t)))
                            return (this.word <<= t), (this.bitsAvailable -= t), t
                        return this.loadWord(), t + this.skipLZ()
                      }),
                      (e.skipUEG = function () {
                        this.skipBits(1 + this.skipLZ())
                      }),
                      (e.skipEG = function () {
                        this.skipBits(1 + this.skipLZ())
                      }),
                      (e.readUEG = function () {
                        var t = this.skipLZ()
                        return this.readBits(t + 1) - 1
                      }),
                      (e.readEG = function () {
                        var t = this.readUEG()
                        return 1 & t ? (1 + t) >>> 1 : -1 * (t >>> 1)
                      }),
                      (e.readBoolean = function () {
                        return 1 === this.readBits(1)
                      }),
                      (e.readUByte = function () {
                        return this.readBits(8)
                      }),
                      (e.readUShort = function () {
                        return this.readBits(16)
                      }),
                      (e.readUInt = function () {
                        return this.readBits(32)
                      }),
                      (e.skipScalingList = function (t) {
                        for (var e = 8, r = 8, i = 0; i < t; i++)
                          0 !== r && (r = (e + this.readEG() + 256) % 256), (e = 0 === r ? e : r)
                      }),
                      (e.readSPS = function () {
                        var t,
                          e,
                          r,
                          i = 0,
                          n = 0,
                          s = 0,
                          a = 0,
                          o = this.readUByte.bind(this),
                          l = this.readBits.bind(this),
                          u = this.readUEG.bind(this),
                          c = this.readBoolean.bind(this),
                          d = this.skipBits.bind(this),
                          h = this.skipEG.bind(this),
                          f = this.skipUEG.bind(this),
                          g = this.skipScalingList.bind(this)
                        o()
                        var v = o()
                        if (
                          (l(5),
                          d(3),
                          o(),
                          f(),
                          100 === v ||
                            110 === v ||
                            122 === v ||
                            244 === v ||
                            44 === v ||
                            83 === v ||
                            86 === v ||
                            118 === v ||
                            128 === v)
                        ) {
                          var p = u()
                          if ((3 === p && d(1), f(), f(), d(1), c()))
                            for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++) c() && g(r < 6 ? 16 : 64)
                        }
                        f()
                        var m = u()
                        if (0 === m) u()
                        else if (1 === m) for (d(1), h(), h(), t = u(), r = 0; r < t; r++) h()
                        f(), d(1)
                        var y = u(),
                          E = u(),
                          T = l(1)
                        0 === T && d(1), d(1), c() && ((i = u()), (n = u()), (s = u()), (a = u()))
                        var S = [1, 1]
                        if (c() && c())
                          switch (o()) {
                            case 1:
                              S = [1, 1]
                              break
                            case 2:
                              S = [12, 11]
                              break
                            case 3:
                              S = [10, 11]
                              break
                            case 4:
                              S = [16, 11]
                              break
                            case 5:
                              S = [40, 33]
                              break
                            case 6:
                              S = [24, 11]
                              break
                            case 7:
                              S = [20, 11]
                              break
                            case 8:
                              S = [32, 11]
                              break
                            case 9:
                              S = [80, 33]
                              break
                            case 10:
                              S = [18, 11]
                              break
                            case 11:
                              S = [15, 11]
                              break
                            case 12:
                              S = [64, 33]
                              break
                            case 13:
                              S = [160, 99]
                              break
                            case 14:
                              S = [4, 3]
                              break
                            case 15:
                              S = [3, 2]
                              break
                            case 16:
                              S = [2, 1]
                              break
                            case 255:
                              S = [(o() << 8) | o(), (o() << 8) | o()]
                          }
                        return {
                          width: Math.ceil(16 * (y + 1) - 2 * i - 2 * n),
                          height: (2 - T) * (E + 1) * 16 - (T ? 2 : 4) * (s + a),
                          pixelRatio: S,
                        }
                      }),
                      (e.readSliceType = function () {
                        return this.readUByte(), this.readUEG(), this.readUEG()
                      }),
                      t
                    )
                  })()
                e.default = n
              },
            './src/demux/id3.ts':
              /*!**************************!*\
  !*** ./src/demux/id3.ts ***!
  \**************************/
              /*! exports provided: isHeader, isFooter, getID3Data, canParse, getTimeStamp, isTimeStampFrame, getID3Frames, decodeFrame, utf8ArrayToStr, testables */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'isHeader', function () {
                    return n
                  }),
                  r.d(e, 'isFooter', function () {
                    return s
                  }),
                  r.d(e, 'getID3Data', function () {
                    return a
                  }),
                  r.d(e, 'canParse', function () {
                    return l
                  }),
                  r.d(e, 'getTimeStamp', function () {
                    return u
                  }),
                  r.d(e, 'isTimeStampFrame', function () {
                    return c
                  }),
                  r.d(e, 'getID3Frames', function () {
                    return h
                  }),
                  r.d(e, 'decodeFrame', function () {
                    return f
                  }),
                  r.d(e, 'utf8ArrayToStr', function () {
                    return y
                  }),
                  r.d(e, 'testables', function () {
                    return E
                  })
                var i,
                  n = function (t, e) {
                    return (
                      e + 10 <= t.length &&
                      73 === t[e] &&
                      68 === t[e + 1] &&
                      51 === t[e + 2] &&
                      t[e + 3] < 255 &&
                      t[e + 4] < 255 &&
                      t[e + 6] < 128 &&
                      t[e + 7] < 128 &&
                      t[e + 8] < 128 &&
                      t[e + 9] < 128
                    )
                  },
                  s = function (t, e) {
                    return (
                      e + 10 <= t.length &&
                      51 === t[e] &&
                      68 === t[e + 1] &&
                      73 === t[e + 2] &&
                      t[e + 3] < 255 &&
                      t[e + 4] < 255 &&
                      t[e + 6] < 128 &&
                      t[e + 7] < 128 &&
                      t[e + 8] < 128 &&
                      t[e + 9] < 128
                    )
                  },
                  a = function (t, e) {
                    for (var r = e, i = 0; n(t, e); ) (i += 10), (i += o(t, e + 6)), s(t, e + 10) && (i += 10), (e += i)
                    if (i > 0) return t.subarray(r, r + i)
                  },
                  o = function (t, e) {
                    var r = 0
                    return (
                      (r = (127 & t[e]) << 21),
                      (r |= (127 & t[e + 1]) << 14),
                      (r |= (127 & t[e + 2]) << 7),
                      (r |= 127 & t[e + 3])
                    )
                  },
                  l = function (t, e) {
                    return n(t, e) && o(t, e + 6) + 10 <= t.length - e
                  },
                  u = function (t) {
                    for (var e = h(t), r = 0; r < e.length; r++) {
                      var i = e[r]
                      if (c(i)) return m(i)
                    }
                  },
                  c = function (t) {
                    return t && 'PRIV' === t.key && 'com.apple.streaming.transportStreamTimestamp' === t.info
                  },
                  d = function (t) {
                    var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                      r = o(t, 4)
                    return { type: e, size: r, data: t.subarray(10, 10 + r) }
                  },
                  h = function (t) {
                    for (var e = 0, r = []; n(t, e); ) {
                      for (var i = o(t, e + 6), a = (e += 10) + i; e + 8 < a; ) {
                        var l = d(t.subarray(e)),
                          u = f(l)
                        u && r.push(u), (e += l.size + 10)
                      }
                      s(t, e) && (e += 10)
                    }
                    return r
                  },
                  f = function (t) {
                    return 'PRIV' === t.type ? g(t) : 'W' === t.type[0] ? p(t) : v(t)
                  },
                  g = function (t) {
                    if (!(t.size < 2)) {
                      var e = y(t.data, !0),
                        r = new Uint8Array(t.data.subarray(e.length + 1))
                      return { key: t.type, info: e, data: r.buffer }
                    }
                  },
                  v = function (t) {
                    if (!(t.size < 2)) {
                      if ('TXXX' === t.type) {
                        var e = 1,
                          r = y(t.data.subarray(e), !0)
                        e += r.length + 1
                        var i = y(t.data.subarray(e))
                        return { key: t.type, info: r, data: i }
                      }
                      var n = y(t.data.subarray(1))
                      return { key: t.type, data: n }
                    }
                  },
                  p = function (t) {
                    if ('WXXX' === t.type) {
                      if (t.size < 2) return
                      var e = 1,
                        r = y(t.data.subarray(e), !0)
                      e += r.length + 1
                      var i = y(t.data.subarray(e))
                      return { key: t.type, info: r, data: i }
                    }
                    var n = y(t.data)
                    return { key: t.type, data: n }
                  },
                  m = function (t) {
                    if (8 === t.data.byteLength) {
                      var e = new Uint8Array(t.data),
                        r = 1 & e[3],
                        i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7]
                      return (i /= 45), r && (i += 47721858.84), Math.round(i)
                    }
                  },
                  y = function (t, e) {
                    void 0 === e && (e = !1)
                    var r = T()
                    if (r) {
                      var i = r.decode(t)
                      if (e) {
                        var n = i.indexOf('\0')
                        return -1 !== n ? i.substring(0, n) : i
                      }
                      return i.replace(/\0/g, '')
                    }
                    for (var s, a, o, l = t.length, u = '', c = 0; c < l; ) {
                      if (0 === (s = t[c++]) && e) return u
                      if (0 !== s && 3 !== s)
                        switch (s >> 4) {
                          case 0:
                          case 1:
                          case 2:
                          case 3:
                          case 4:
                          case 5:
                          case 6:
                          case 7:
                            u += String.fromCharCode(s)
                            break
                          case 12:
                          case 13:
                            ;(a = t[c++]), (u += String.fromCharCode(((31 & s) << 6) | (63 & a)))
                            break
                          case 14:
                            ;(a = t[c++]),
                              (o = t[c++]),
                              (u += String.fromCharCode(((15 & s) << 12) | ((63 & a) << 6) | ((63 & o) << 0)))
                        }
                    }
                    return u
                  },
                  E = { decodeTextFrame: v }
                function T() {
                  return i || void 0 === self.TextDecoder || (i = new self.TextDecoder('utf-8')), i
                }
              },
            './src/demux/mp3demuxer.ts':
              /*!*********************************!*\
  !*** ./src/demux/mp3demuxer.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./base-audio-demuxer */ './src/demux/base-audio-demuxer.ts'),
                  n = r(/*! ../demux/id3 */ './src/demux/id3.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  a = r(/*! ./mpegaudio */ './src/demux/mpegaudio.ts')
                function o(t, e) {
                  return (o =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                var l = (function (t) {
                  var e, r
                  function i() {
                    return t.apply(this, arguments) || this
                  }
                  ;(r = t), ((e = i).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), o(e, r)
                  var l = i.prototype
                  return (
                    (l.resetInitSegment = function (e, r, i, n) {
                      t.prototype.resetInitSegment.call(this, e, r, i, n),
                        (this._audioTrack = {
                          container: 'audio/mpeg',
                          type: 'audio',
                          id: 0,
                          pid: -1,
                          sequenceNumber: 0,
                          isAAC: !1,
                          samples: [],
                          manifestCodec: r,
                          duration: n,
                          inputTimeScale: 9e4,
                          dropped: 0,
                        })
                    }),
                    (i.probe = function (t) {
                      if (!t) return !1
                      for (var e = (n.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                        if (a.probe(t, e)) return s.logger.log('MPEG Audio sync word found !'), !0
                      return !1
                    }),
                    (l.canParse = function (t, e) {
                      return a.canParse(t, e)
                    }),
                    (l.appendFrame = function (t, e, r) {
                      if (null !== this.initPTS) return a.appendFrame(t, e, r, this.initPTS, this.frameIndex)
                    }),
                    i
                  )
                })(i.default)
                ;(l.minProbeByteLength = 4), (e.default = l)
              },
            './src/demux/mp4demuxer.ts':
              /*!*********************************!*\
  !*** ./src/demux/mp4demuxer.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  s = r(/*! ./dummy-demuxed-track */ './src/demux/dummy-demuxed-track.ts'),
                  a = /\/emsg[-/]ID3/i,
                  o = (function () {
                    function t(t, e) {
                      ;(this.remainderData = null),
                        (this.timeOffset = 0),
                        (this.config = void 0),
                        (this.videoTrack = void 0),
                        (this.audioTrack = void 0),
                        (this.id3Track = void 0),
                        (this.txtTrack = void 0),
                        (this.config = e)
                    }
                    var e = t.prototype
                    return (
                      (e.resetTimeStamp = function () {}),
                      (e.resetInitSegment = function (t, e, r, i) {
                        var a = Object(n.parseInitSegment)(t),
                          o = (this.videoTrack = Object(s.dummyTrack)('video', 1)),
                          l = (this.audioTrack = Object(s.dummyTrack)('audio', 1)),
                          u = (this.txtTrack = Object(s.dummyTrack)('text', 1))
                        if (((this.id3Track = Object(s.dummyTrack)('id3', 1)), (this.timeOffset = 0), a.video)) {
                          var c = a.video,
                            d = c.id,
                            h = c.timescale,
                            f = c.codec
                          ;(o.id = d), (o.timescale = u.timescale = h), (o.codec = f)
                        }
                        if (a.audio) {
                          var g = a.audio,
                            v = g.id,
                            p = g.timescale,
                            m = g.codec
                          ;(l.id = v), (l.timescale = p), (l.codec = m)
                        }
                        ;(u.id = n.RemuxerTrackIdConfig.text), (o.sampleDuration = 0), (o.duration = l.duration = i)
                      }),
                      (e.resetContiguity = function () {}),
                      (t.probe = function (t) {
                        return (
                          (t = t.length > 16384 ? t.subarray(0, 16384) : t), Object(n.findBox)(t, ['moof']).length > 0
                        )
                      }),
                      (e.demux = function (t, e) {
                        this.timeOffset = e
                        var r = t,
                          i = this.videoTrack,
                          s = this.txtTrack
                        if (this.config.progressive) {
                          this.remainderData && (r = Object(n.appendUint8Array)(this.remainderData, t))
                          var a = Object(n.segmentValidRange)(r)
                          ;(this.remainderData = a.remainder), (i.samples = a.valid || new Uint8Array())
                        } else i.samples = r
                        var o = this.extractID3Track(i, e)
                        return (
                          (s.samples = Object(n.parseSamples)(e, i)),
                          { videoTrack: i, audioTrack: this.audioTrack, id3Track: o, textTrack: this.txtTrack }
                        )
                      }),
                      (e.flush = function () {
                        var t = this.timeOffset,
                          e = this.videoTrack,
                          r = this.txtTrack
                        ;(e.samples = this.remainderData || new Uint8Array()), (this.remainderData = null)
                        var i = this.extractID3Track(e, this.timeOffset)
                        return (
                          (r.samples = Object(n.parseSamples)(t, e)),
                          {
                            videoTrack: e,
                            audioTrack: Object(s.dummyTrack)(),
                            id3Track: i,
                            textTrack: Object(s.dummyTrack)(),
                          }
                        )
                      }),
                      (e.extractID3Track = function (t, e) {
                        var r = this.id3Track
                        if (t.samples.length) {
                          var s = Object(n.findBox)(t.samples, ['emsg'])
                          s &&
                            s.forEach(function (t) {
                              var s = Object(n.parseEmsg)(t)
                              if (a.test(s.schemeIdUri)) {
                                var o = Object(i.isFiniteNumber)(s.presentationTime)
                                    ? s.presentationTime / s.timeScale
                                    : e + s.presentationTimeDelta / s.timeScale,
                                  l = s.payload
                                r.samples.push({ data: l, len: l.byteLength, dts: o, pts: o })
                              }
                            })
                        }
                        return r
                      }),
                      (e.demuxSampleAes = function (t, e, r) {
                        return Promise.reject(new Error('The MP4 demuxer does not support SAMPLE-AES decryption'))
                      }),
                      (e.destroy = function () {}),
                      t
                    )
                  })()
                ;(o.minProbeByteLength = 1024), (e.default = o)
              },
            './src/demux/mpegaudio.ts':
              /*!********************************!*\
  !*** ./src/demux/mpegaudio.ts ***!
  \********************************/
              /*! exports provided: appendFrame, parseHeader, isHeaderPattern, isHeader, canParse, probe */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'appendFrame', function () {
                    return l
                  }),
                  r.d(e, 'parseHeader', function () {
                    return u
                  }),
                  r.d(e, 'isHeaderPattern', function () {
                    return c
                  }),
                  r.d(e, 'isHeader', function () {
                    return d
                  }),
                  r.d(e, 'canParse', function () {
                    return h
                  }),
                  r.d(e, 'probe', function () {
                    return f
                  })
                var i = null,
                  n = [
                    32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128,
                    160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48,
                    56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112,
                    128, 144, 160,
                  ],
                  s = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                  a = [
                    [0, 72, 144, 12],
                    [0, 0, 0, 0],
                    [0, 72, 144, 12],
                    [0, 144, 144, 12],
                  ],
                  o = [0, 1, 1, 4]
                function l(t, e, r, i, n) {
                  if (!(r + 24 > e.length)) {
                    var s = u(e, r)
                    if (s && r + s.frameLength <= e.length) {
                      var a = i + n * ((9e4 * s.samplesPerFrame) / s.sampleRate),
                        o = { unit: e.subarray(r, r + s.frameLength), pts: a, dts: a }
                      return (
                        (t.config = []),
                        (t.channelCount = s.channelCount),
                        (t.samplerate = s.sampleRate),
                        t.samples.push(o),
                        { sample: o, length: s.frameLength, missing: 0 }
                      )
                    }
                  }
                }
                function u(t, e) {
                  var r = (t[e + 1] >> 3) & 3,
                    l = (t[e + 1] >> 1) & 3,
                    u = (t[e + 2] >> 4) & 15,
                    c = (t[e + 2] >> 2) & 3
                  if (1 !== r && 0 !== u && 15 !== u && 3 !== c) {
                    var d = (t[e + 2] >> 1) & 1,
                      h = t[e + 3] >> 6,
                      f = 1e3 * n[14 * (3 === r ? 3 - l : 3 === l ? 3 : 4) + u - 1],
                      g = s[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + c],
                      v = 3 === h ? 1 : 2,
                      p = a[r][l],
                      m = o[l],
                      y = 8 * p * m,
                      E = Math.floor((p * f) / g + d) * m
                    if (null === i) {
                      var T = (navigator.userAgent || '').match(/Chrome\/(\d+)/i)
                      i = T ? parseInt(T[1]) : 0
                    }
                    return (
                      !!i && i <= 87 && 2 === l && f >= 224e3 && 0 === h && (t[e + 3] = 128 | t[e + 3]),
                      { sampleRate: g, channelCount: v, frameLength: E, samplesPerFrame: y }
                    )
                  }
                }
                function c(t, e) {
                  return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
                }
                function d(t, e) {
                  return e + 1 < t.length && c(t, e)
                }
                function h(t, e) {
                  return c(t, e) && 4 <= t.length - e
                }
                function f(t, e) {
                  if (e + 1 < t.length && c(t, e)) {
                    var r = u(t, e),
                      i = 4
                    null != r && r.frameLength && (i = r.frameLength)
                    var n = e + i
                    return n === t.length || d(t, n)
                  }
                  return !1
                }
              },
            './src/demux/sample-aes.ts':
              /*!*********************************!*\
  !*** ./src/demux/sample-aes.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../crypt/decrypter */ './src/crypt/decrypter.ts'),
                  n = r(/*! ./tsdemuxer */ './src/demux/tsdemuxer.ts'),
                  s = (function () {
                    function t(t, e, r) {
                      ;(this.keyData = void 0),
                        (this.decrypter = void 0),
                        (this.keyData = r),
                        (this.decrypter = new i.default(t, e, { removePKCS7Padding: !1 }))
                    }
                    var e = t.prototype
                    return (
                      (e.decryptBuffer = function (t, e) {
                        this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
                      }),
                      (e.decryptAacSample = function (t, e, r, i) {
                        var n = t[e].unit,
                          s = n.subarray(16, n.length - (n.length % 16)),
                          a = s.buffer.slice(s.byteOffset, s.byteOffset + s.length),
                          o = this
                        this.decryptBuffer(a, function (s) {
                          var a = new Uint8Array(s)
                          n.set(a, 16), i || o.decryptAacSamples(t, e + 1, r)
                        })
                      }),
                      (e.decryptAacSamples = function (t, e, r) {
                        for (; ; e++) {
                          if (e >= t.length) return void r()
                          if (!(t[e].unit.length < 32)) {
                            var i = this.decrypter.isSync()
                            if ((this.decryptAacSample(t, e, r, i), !i)) return
                          }
                        }
                      }),
                      (e.getAvcEncryptedData = function (t) {
                        for (
                          var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32;
                          n <= t.length - 16;
                          n += 160, i += 16
                        )
                          r.set(t.subarray(n, n + 16), i)
                        return r
                      }),
                      (e.getAvcDecryptedUnit = function (t, e) {
                        for (var r = new Uint8Array(e), i = 0, n = 32; n <= t.length - 16; n += 160, i += 16)
                          t.set(r.subarray(i, i + 16), n)
                        return t
                      }),
                      (e.decryptAvcSample = function (t, e, r, i, s, a) {
                        var o = Object(n.discardEPB)(s.data),
                          l = this.getAvcEncryptedData(o),
                          u = this
                        this.decryptBuffer(l.buffer, function (n) {
                          ;(s.data = u.getAvcDecryptedUnit(o, n)), a || u.decryptAvcSamples(t, e, r + 1, i)
                        })
                      }),
                      (e.decryptAvcSamples = function (t, e, r, i) {
                        if (t instanceof Uint8Array) throw new Error('Cannot decrypt samples of type Uint8Array')
                        for (; ; e++, r = 0) {
                          if (e >= t.length) return void i()
                          for (var n = t[e].units; !(r >= n.length); r++) {
                            var s = n[r]
                            if (!(s.data.length <= 48 || (1 !== s.type && 5 !== s.type))) {
                              var a = this.decrypter.isSync()
                              if ((this.decryptAvcSample(t, e, r, i, s, a), !a)) return
                            }
                          }
                        }
                      }),
                      t
                    )
                  })()
                e.default = s
              },
            './src/demux/transmuxer-interface.ts':
              /*!*******************************************!*\
  !*** ./src/demux/transmuxer-interface.ts ***!
  \*******************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return d
                  })
                var i = r(/*! webworkify-webpack */ './node_modules/webworkify-webpack/index.js'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../demux/transmuxer */ './src/demux/transmuxer.ts'),
                  a = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  o = r(/*! ../errors */ './src/errors.ts'),
                  l = r(/*! ../utils/mediasource-helper */ './src/utils/mediasource-helper.ts'),
                  u = r(/*! eventemitter3 */ './node_modules/eventemitter3/index.js'),
                  c = Object(l.getMediaSource)() || {
                    isTypeSupported: function () {
                      return !1
                    },
                  },
                  d = (function () {
                    function t(t, e, r, l) {
                      var d = this
                      ;(this.hls = void 0),
                        (this.id = void 0),
                        (this.observer = void 0),
                        (this.frag = null),
                        (this.part = null),
                        (this.worker = void 0),
                        (this.onwmsg = void 0),
                        (this.transmuxer = null),
                        (this.onTransmuxComplete = void 0),
                        (this.onFlush = void 0),
                        (this.hls = t),
                        (this.id = e),
                        (this.onTransmuxComplete = r),
                        (this.onFlush = l)
                      var h = t.config,
                        f = function (e, r) {
                          ;((r = r || {}).frag = d.frag), (r.id = d.id), t.trigger(e, r)
                        }
                      ;(this.observer = new u.EventEmitter()),
                        this.observer.on(n.Events.FRAG_DECRYPTED, f),
                        this.observer.on(n.Events.ERROR, f)
                      var g = {
                          mp4: c.isTypeSupported('video/mp4'),
                          mpeg: c.isTypeSupported('audio/mpeg'),
                          mp3: c.isTypeSupported('audio/mp4; codecs="mp3"'),
                        },
                        v = navigator.vendor
                      if (h.enableWorker && 'undefined' != typeof Worker) {
                        var p
                        a.logger.log('demuxing in webworker')
                        try {
                          ;(p = this.worker =
                            i(/*! ../demux/transmuxer-worker.ts */ './src/demux/transmuxer-worker.ts')),
                            (this.onwmsg = this.onWorkerMessage.bind(this)),
                            p.addEventListener('message', this.onwmsg),
                            (p.onerror = function (e) {
                              t.trigger(n.Events.ERROR, {
                                type: o.ErrorTypes.OTHER_ERROR,
                                details: o.ErrorDetails.INTERNAL_EXCEPTION,
                                fatal: !0,
                                event: 'demuxerWorker',
                                error: new Error(e.message + '  (' + e.filename + ':' + e.lineno + ')'),
                              })
                            }),
                            p.postMessage({
                              cmd: 'init',
                              typeSupported: g,
                              vendor: v,
                              id: e,
                              config: JSON.stringify(h),
                            })
                        } catch (m) {
                          a.logger.warn('Error in worker:', m),
                            a.logger.error('Error while initializing DemuxerWorker, fallback to inline'),
                            p && self.URL.revokeObjectURL(p.objectURL),
                            (this.transmuxer = new s.default(this.observer, g, h, v, e)),
                            (this.worker = null)
                        }
                      } else this.transmuxer = new s.default(this.observer, g, h, v, e)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        var t = this.worker
                        if (t) t.removeEventListener('message', this.onwmsg), t.terminate(), (this.worker = null)
                        else {
                          var e = this.transmuxer
                          e && (e.destroy(), (this.transmuxer = null))
                        }
                        var r = this.observer
                        r && r.removeAllListeners(), (this.observer = null)
                      }),
                      (e.push = function (t, e, r, i, n, o, l, u, c, d) {
                        var h,
                          f,
                          g = this
                        c.transmuxing.start = self.performance.now()
                        var v = this.transmuxer,
                          p = this.worker,
                          m = o ? o.start : n.start,
                          y = n.decryptdata,
                          E = this.frag,
                          T = !(E && n.cc === E.cc),
                          S = !(E && c.level === E.level),
                          b = E ? c.sn - E.sn : -1,
                          L = this.part ? c.part - this.part.index : 1,
                          A = !S && (1 === b || (0 === b && 1 === L)),
                          D = self.performance.now()
                        ;(S || b || 0 === n.stats.parsing.start) && (n.stats.parsing.start = D),
                          !o || (!L && A) || (o.stats.parsing.start = D)
                        var R = !(
                            E &&
                            (null === (h = n.initSegment) || void 0 === h ? void 0 : h.url) ===
                              (null === (f = E.initSegment) || void 0 === f ? void 0 : f.url)
                          ),
                          k = new s.TransmuxState(T, A, u, S, m, R)
                        if (!A || T || R) {
                          a.logger.log(
                            '[transmuxer-interface, ' +
                              n.type +
                              ']: Starting new transmux session for sn: ' +
                              c.sn +
                              ' p: ' +
                              c.part +
                              ' level: ' +
                              c.level +
                              ' id: ' +
                              c.id +
                              '\n        discontinuity: ' +
                              T +
                              '\n        trackSwitch: ' +
                              S +
                              '\n        contiguous: ' +
                              A +
                              '\n        accurateTimeOffset: ' +
                              u +
                              '\n        timeOffset: ' +
                              m,
                          )
                          var _ = new s.TransmuxConfig(r, i, e, l, d)
                          this.configureTransmuxer(_)
                        }
                        if (((this.frag = n), (this.part = o), p))
                          p.postMessage(
                            { cmd: 'demux', data: t, decryptdata: y, chunkMeta: c, state: k },
                            t instanceof ArrayBuffer ? [t] : [],
                          )
                        else if (v) {
                          var I = v.push(t, y, c, k)
                          Object(s.isPromise)(I)
                            ? I.then(function (t) {
                                g.handleTransmuxComplete(t)
                              })
                            : this.handleTransmuxComplete(I)
                        }
                      }),
                      (e.flush = function (t) {
                        var e = this
                        t.transmuxing.start = self.performance.now()
                        var r = this.transmuxer,
                          i = this.worker
                        if (i) i.postMessage({ cmd: 'flush', chunkMeta: t })
                        else if (r) {
                          var n = r.flush(t)
                          Object(s.isPromise)(n)
                            ? n.then(function (r) {
                                e.handleFlushResult(r, t)
                              })
                            : this.handleFlushResult(n, t)
                        }
                      }),
                      (e.handleFlushResult = function (t, e) {
                        var r = this
                        t.forEach(function (t) {
                          r.handleTransmuxComplete(t)
                        }),
                          this.onFlush(e)
                      }),
                      (e.onWorkerMessage = function (t) {
                        var e = t.data,
                          r = this.hls
                        switch (e.event) {
                          case 'init':
                            self.URL.revokeObjectURL(this.worker.objectURL)
                            break
                          case 'transmuxComplete':
                            this.handleTransmuxComplete(e.data)
                            break
                          case 'flush':
                            this.onFlush(e.data)
                            break
                          default:
                            ;(e.data = e.data || {}),
                              (e.data.frag = this.frag),
                              (e.data.id = this.id),
                              r.trigger(e.event, e.data)
                        }
                      }),
                      (e.configureTransmuxer = function (t) {
                        var e = this.worker,
                          r = this.transmuxer
                        e ? e.postMessage({ cmd: 'configure', config: t }) : r && r.configure(t)
                      }),
                      (e.handleTransmuxComplete = function (t) {
                        ;(t.chunkMeta.transmuxing.end = self.performance.now()), this.onTransmuxComplete(t)
                      }),
                      t
                    )
                  })()
              },
            './src/demux/transmuxer-worker.ts':
              /*!****************************************!*\
  !*** ./src/demux/transmuxer-worker.ts ***!
  \****************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return o
                  })
                var i = r(/*! ../demux/transmuxer */ './src/demux/transmuxer.ts'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  a = r(/*! eventemitter3 */ './node_modules/eventemitter3/index.js')
                function o(t) {
                  var e = new a.EventEmitter(),
                    r = function (e, r) {
                      t.postMessage({ event: e, data: r })
                    }
                  e.on(n.Events.FRAG_DECRYPTED, r),
                    e.on(n.Events.ERROR, r),
                    t.addEventListener('message', function (n) {
                      var a = n.data
                      switch (a.cmd) {
                        case 'init':
                          var o = JSON.parse(a.config)
                          ;(t.transmuxer = new i.default(e, a.typeSupported, o, a.vendor, a.id)),
                            Object(s.enableLogs)(o.debug),
                            r('init', null)
                          break
                        case 'configure':
                          t.transmuxer.configure(a.config)
                          break
                        case 'demux':
                          var u = t.transmuxer.push(a.data, a.decryptdata, a.chunkMeta, a.state)
                          Object(i.isPromise)(u)
                            ? u.then(function (e) {
                                l(t, e)
                              })
                            : l(t, u)
                          break
                        case 'flush':
                          var d = a.chunkMeta,
                            h = t.transmuxer.flush(d)
                          Object(i.isPromise)(h)
                            ? h.then(function (e) {
                                c(t, e, d)
                              })
                            : c(t, h, d)
                      }
                    })
                }
                function l(t, e) {
                  if ((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment) {
                    var r,
                      i = [],
                      n = e.remuxResult,
                      s = n.audio,
                      a = n.video
                    s && u(i, s), a && u(i, a), t.postMessage({ event: 'transmuxComplete', data: e }, i)
                  }
                }
                function u(t, e) {
                  e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
                }
                function c(t, e, r) {
                  e.forEach(function (e) {
                    l(t, e)
                  }),
                    t.postMessage({ event: 'flush', data: r })
                }
              },
            './src/demux/transmuxer.ts':
              /*!*********************************!*\
  !*** ./src/demux/transmuxer.ts ***!
  \*********************************/
              /*! exports provided: default, isPromise, TransmuxConfig, TransmuxState */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return y
                  }),
                  r.d(e, 'isPromise', function () {
                    return T
                  }),
                  r.d(e, 'TransmuxConfig', function () {
                    return S
                  }),
                  r.d(e, 'TransmuxState', function () {
                    return b
                  })
                var i,
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../errors */ './src/errors.ts'),
                  a = r(/*! ../crypt/decrypter */ './src/crypt/decrypter.ts'),
                  o = r(/*! ../demux/aacdemuxer */ './src/demux/aacdemuxer.ts'),
                  l = r(/*! ../demux/mp4demuxer */ './src/demux/mp4demuxer.ts'),
                  u = r(/*! ../demux/tsdemuxer */ './src/demux/tsdemuxer.ts'),
                  c = r(/*! ../demux/mp3demuxer */ './src/demux/mp3demuxer.ts'),
                  d = r(/*! ../remux/mp4-remuxer */ './src/remux/mp4-remuxer.ts'),
                  h = r(/*! ../remux/passthrough-remuxer */ './src/remux/passthrough-remuxer.ts'),
                  f = r(/*! ./chunk-cache */ './src/demux/chunk-cache.ts'),
                  g = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  v = r(/*! ../utils/logger */ './src/utils/logger.ts')
                try {
                  i = self.performance.now.bind(self.performance)
                } catch (L) {
                  v.logger.debug('Unable to use Performance API on this environment'), (i = self.Date.now)
                }
                var p = [
                    { demux: u.default, remux: d.default },
                    { demux: l.default, remux: h.default },
                    { demux: o.default, remux: d.default },
                    { demux: c.default, remux: d.default },
                  ],
                  m = 1024
                p.forEach(function (t) {
                  var e = t.demux
                  m = Math.max(m, e.minProbeByteLength)
                })
                var y = (function () {
                    function t(t, e, r, i, n) {
                      ;(this.observer = void 0),
                        (this.typeSupported = void 0),
                        (this.config = void 0),
                        (this.vendor = void 0),
                        (this.id = void 0),
                        (this.demuxer = void 0),
                        (this.remuxer = void 0),
                        (this.decrypter = void 0),
                        (this.probe = void 0),
                        (this.decryptionPromise = null),
                        (this.transmuxConfig = void 0),
                        (this.currentTransmuxState = void 0),
                        (this.cache = new f.default()),
                        (this.observer = t),
                        (this.typeSupported = e),
                        (this.config = r),
                        (this.vendor = i),
                        (this.id = n)
                    }
                    var e = t.prototype
                    return (
                      (e.configure = function (t) {
                        ;(this.transmuxConfig = t), this.decrypter && this.decrypter.reset()
                      }),
                      (e.push = function (t, e, r, n) {
                        var s = this,
                          a = r.transmuxing
                        a.executeStart = i()
                        var o = new Uint8Array(t),
                          l = this.cache,
                          u = this.config,
                          c = this.currentTransmuxState,
                          d = this.transmuxConfig
                        n && (this.currentTransmuxState = n)
                        var h = (function (t, e) {
                          var r = null
                          return (
                            t.byteLength > 0 &&
                              null != e &&
                              null != e.key &&
                              null !== e.iv &&
                              null != e.method &&
                              (r = e),
                            r
                          )
                        })(o, e)
                        if (h && 'AES-128' === h.method) {
                          var f = this.getDecrypter()
                          if (!u.enableSoftwareAES)
                            return (
                              (this.decryptionPromise = f
                                .webCryptoDecrypt(o, h.key.buffer, h.iv.buffer)
                                .then(function (t) {
                                  var e = s.push(t, null, r)
                                  return (s.decryptionPromise = null), e
                                })),
                              this.decryptionPromise
                            )
                          var v = f.softwareDecrypt(o, h.key.buffer, h.iv.buffer)
                          if (!v) return (a.executeEnd = i()), E(r)
                          o = new Uint8Array(v)
                        }
                        var p = n || c,
                          m = p.contiguous,
                          y = p.discontinuity,
                          T = p.trackSwitch,
                          S = p.accurateTimeOffset,
                          b = p.timeOffset,
                          L = p.initSegmentChange,
                          A = d.audioCodec,
                          D = d.videoCodec,
                          R = d.defaultInitPts,
                          k = d.duration,
                          _ = d.initSegmentData
                        if (
                          ((y || T || L) && this.resetInitSegment(_, A, D, k),
                          y && this.resetInitialTimestamp(R),
                          m || this.resetContiguity(),
                          this.needsProbing(o, y, T))
                        ) {
                          if (l.dataLength) {
                            var I = l.flush()
                            o = Object(g.appendUint8Array)(I, o)
                          }
                          this.configureTransmuxer(o, d)
                        }
                        var C = this.transmux(o, h, b, S, r),
                          O = this.currentTransmuxState
                        return (
                          (O.contiguous = !0), (O.discontinuity = !1), (O.trackSwitch = !1), (a.executeEnd = i()), C
                        )
                      }),
                      (e.flush = function (t) {
                        var e = this,
                          r = t.transmuxing
                        r.executeStart = i()
                        var a = this.decrypter,
                          o = this.cache,
                          l = this.currentTransmuxState,
                          u = this.decryptionPromise
                        if (u)
                          return u.then(function () {
                            return e.flush(t)
                          })
                        var c = [],
                          d = l.timeOffset
                        if (a) {
                          var h = a.flush()
                          h && c.push(this.push(h, null, t))
                        }
                        var f = o.dataLength
                        o.reset()
                        var g = this.demuxer,
                          v = this.remuxer
                        if (!g || !v)
                          return (
                            f >= m &&
                              this.observer.emit(n.Events.ERROR, n.Events.ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: 'no demux matching with content found',
                              }),
                            (r.executeEnd = i()),
                            [E(t)]
                          )
                        var p = g.flush(d)
                        return T(p)
                          ? p.then(function (r) {
                              return e.flushRemux(c, r, t), c
                            })
                          : (this.flushRemux(c, p, t), c)
                      }),
                      (e.flushRemux = function (t, e, r) {
                        var n = e.audioTrack,
                          s = e.videoTrack,
                          a = e.id3Track,
                          o = e.textTrack,
                          l = this.currentTransmuxState,
                          u = l.accurateTimeOffset,
                          c = l.timeOffset
                        v.logger.log(
                          '[transmuxer.ts]: Flushed fragment ' +
                            r.sn +
                            (r.part > -1 ? ' p: ' + r.part : '') +
                            ' of level ' +
                            r.level,
                        )
                        var d = this.remuxer.remux(n, s, a, o, c, u, !0, this.id)
                        t.push({ remuxResult: d, chunkMeta: r }), (r.transmuxing.executeEnd = i())
                      }),
                      (e.resetInitialTimestamp = function (t) {
                        var e = this.demuxer,
                          r = this.remuxer
                        e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
                      }),
                      (e.resetContiguity = function () {
                        var t = this.demuxer,
                          e = this.remuxer
                        t && e && (t.resetContiguity(), e.resetNextTimestamp())
                      }),
                      (e.resetInitSegment = function (t, e, r, i) {
                        var n = this.demuxer,
                          s = this.remuxer
                        n && s && (n.resetInitSegment(t, e, r, i), s.resetInitSegment(t, e, r))
                      }),
                      (e.destroy = function () {
                        this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
                          this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0))
                      }),
                      (e.transmux = function (t, e, r, i, n) {
                        return e && 'SAMPLE-AES' === e.method
                          ? this.transmuxSampleAes(t, e, r, i, n)
                          : this.transmuxUnencrypted(t, r, i, n)
                      }),
                      (e.transmuxUnencrypted = function (t, e, r, i) {
                        var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                          s = n.audioTrack,
                          a = n.videoTrack,
                          o = n.id3Track,
                          l = n.textTrack
                        return { remuxResult: this.remuxer.remux(s, a, o, l, e, r, !1, this.id), chunkMeta: i }
                      }),
                      (e.transmuxSampleAes = function (t, e, r, i, n) {
                        var s = this
                        return this.demuxer.demuxSampleAes(t, e, r).then(function (t) {
                          return {
                            remuxResult: s.remuxer.remux(
                              t.audioTrack,
                              t.videoTrack,
                              t.id3Track,
                              t.textTrack,
                              r,
                              i,
                              !1,
                              s.id,
                            ),
                            chunkMeta: n,
                          }
                        })
                      }),
                      (e.configureTransmuxer = function (t, e) {
                        for (
                          var r,
                            i = this.config,
                            n = this.observer,
                            s = this.typeSupported,
                            a = this.vendor,
                            o = e.audioCodec,
                            u = e.defaultInitPts,
                            c = e.duration,
                            d = e.initSegmentData,
                            f = e.videoCodec,
                            g = 0,
                            m = p.length;
                          g < m;
                          g++
                        )
                          if (p[g].demux.probe(t)) {
                            r = p[g]
                            break
                          }
                        r ||
                          (v.logger.warn('Failed to find demuxer by probing frag, treating as mp4 passthrough'),
                          (r = { demux: l.default, remux: h.default }))
                        var y = this.demuxer,
                          E = this.remuxer,
                          T = r.remux,
                          S = r.demux
                        ;(E && E instanceof T) || (this.remuxer = new T(n, i, s, a)),
                          (y && y instanceof S) || ((this.demuxer = new S(n, i, s)), (this.probe = S.probe)),
                          this.resetInitSegment(d, o, f, c),
                          this.resetInitialTimestamp(u)
                      }),
                      (e.needsProbing = function (t, e, r) {
                        return !this.demuxer || !this.remuxer || e || r
                      }),
                      (e.getDecrypter = function () {
                        var t = this.decrypter
                        return t || (t = this.decrypter = new a.default(this.observer, this.config)), t
                      }),
                      t
                    )
                  })(),
                  E = function (t) {
                    return { remuxResult: {}, chunkMeta: t }
                  }
                function T(t) {
                  return 'then' in t && t.then instanceof Function
                }
                var S = function (t, e, r, i, n) {
                    ;(this.audioCodec = void 0),
                      (this.videoCodec = void 0),
                      (this.initSegmentData = void 0),
                      (this.duration = void 0),
                      (this.defaultInitPts = void 0),
                      (this.audioCodec = t),
                      (this.videoCodec = e),
                      (this.initSegmentData = r),
                      (this.duration = i),
                      (this.defaultInitPts = n)
                  },
                  b = function (t, e, r, i, n, s) {
                    ;(this.discontinuity = void 0),
                      (this.contiguous = void 0),
                      (this.accurateTimeOffset = void 0),
                      (this.trackSwitch = void 0),
                      (this.timeOffset = void 0),
                      (this.initSegmentChange = void 0),
                      (this.discontinuity = t),
                      (this.contiguous = e),
                      (this.accurateTimeOffset = r),
                      (this.trackSwitch = i),
                      (this.timeOffset = n),
                      (this.initSegmentChange = s)
                  }
              },
            './src/demux/tsdemuxer.ts':
              /*!********************************!*\
  !*** ./src/demux/tsdemuxer.ts ***!
  \********************************/
              /*! exports provided: discardEPB, default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'discardEPB', function () {
                    return m
                  })
                var i = r(/*! ./adts */ './src/demux/adts.ts'),
                  n = r(/*! ./mpegaudio */ './src/demux/mpegaudio.ts'),
                  s = r(/*! ./exp-golomb */ './src/demux/exp-golomb.ts'),
                  a = r(/*! ./sample-aes */ './src/demux/sample-aes.ts'),
                  o = r(/*! ../events */ './src/events.ts'),
                  l = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  u = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  c = r(/*! ../errors */ './src/errors.ts'),
                  d = (function () {
                    function t(t, e, r) {
                      ;(this.observer = void 0),
                        (this.config = void 0),
                        (this.typeSupported = void 0),
                        (this.sampleAes = null),
                        (this.pmtParsed = !1),
                        (this.audioCodec = void 0),
                        (this.videoCodec = void 0),
                        (this._duration = 0),
                        (this._pmtId = -1),
                        (this._avcTrack = void 0),
                        (this._audioTrack = void 0),
                        (this._id3Track = void 0),
                        (this._txtTrack = void 0),
                        (this.aacOverFlow = null),
                        (this.avcSample = null),
                        (this.remainderData = null),
                        (this.observer = t),
                        (this.config = e),
                        (this.typeSupported = r)
                    }
                    ;(t.probe = function (e) {
                      var r = t.syncOffset(e)
                      return !(
                        r < 0 ||
                        (r &&
                          u.logger.warn('MPEG2-TS detected but first sync word found @ offset ' + r + ', junk ahead ?'),
                        0)
                      )
                    }),
                      (t.syncOffset = function (t) {
                        for (
                          var e = Math.min(2e3, t.length - 1128), r = Math.min(3e3, t.length - 188), i = 0, n = 0;
                          n <= e;
                          n++
                        )
                          for (var s = n; s <= r; s += 188) {
                            if (!(71 === t[s] && 48 & t[s + 3])) {
                              i = 0
                              break
                            }
                            if (++i >= 6) return n
                          }
                        return -1
                      }),
                      (t.createTrack = function (t, e) {
                        return {
                          container: 'video' === t || 'audio' === t ? 'video/mp2t' : void 0,
                          type: t,
                          id: l.RemuxerTrackIdConfig[t],
                          pid: -1,
                          inputTimeScale: 9e4,
                          sequenceNumber: 0,
                          samples: [],
                          dropped: 0,
                          duration: 'audio' === t ? e : void 0,
                        }
                      })
                    var e = t.prototype
                    return (
                      (e.resetInitSegment = function (e, r, i, n) {
                        ;(this.pmtParsed = !1),
                          (this._pmtId = -1),
                          (this._avcTrack = t.createTrack('video')),
                          (this._audioTrack = t.createTrack('audio', n)),
                          (this._id3Track = t.createTrack('id3')),
                          (this._txtTrack = t.createTrack('text')),
                          (this._audioTrack.isAAC = !0),
                          (this.aacOverFlow = null),
                          (this.avcSample = null),
                          (this.audioCodec = r),
                          (this.videoCodec = i),
                          (this._duration = n)
                      }),
                      (e.resetTimeStamp = function () {}),
                      (e.resetContiguity = function () {
                        var t = this._audioTrack,
                          e = this._avcTrack,
                          r = this._id3Track
                        t && (t.pesData = null),
                          e && (e.pesData = null),
                          r && (r.pesData = null),
                          (this.aacOverFlow = null)
                      }),
                      (e.demux = function (e, r, i, n) {
                        var s
                        void 0 === i && (i = !1), void 0 === n && (n = !1), i || (this.sampleAes = null)
                        var a = this._avcTrack,
                          d = this._audioTrack,
                          h = this._id3Track,
                          p = this._txtTrack,
                          m = a.pid,
                          y = a.pesData,
                          E = d.pid,
                          T = h.pid,
                          S = d.pesData,
                          b = h.pesData,
                          L = !1,
                          A = this.pmtParsed,
                          D = this._pmtId,
                          R = e.length
                        if (
                          (this.remainderData &&
                            ((R = (e = Object(l.appendUint8Array)(this.remainderData, e)).length),
                            (this.remainderData = null)),
                          R < 188 && !n)
                        )
                          return (this.remainderData = e), { audioTrack: d, videoTrack: a, id3Track: h, textTrack: p }
                        var k = Math.max(0, t.syncOffset(e))
                        ;(R -= (R + k) % 188) < e.byteLength &&
                          !n &&
                          (this.remainderData = new Uint8Array(e.buffer, R, e.buffer.byteLength - R))
                        for (var _ = 0, I = k; I < R; I += 188)
                          if (71 === e[I]) {
                            var C = !!(64 & e[I + 1]),
                              O = ((31 & e[I + 1]) << 8) + e[I + 2],
                              w = void 0
                            if ((48 & e[I + 3]) >> 4 > 1) {
                              if ((w = I + 5 + e[I + 4]) === I + 188) continue
                            } else w = I + 4
                            switch (O) {
                              case m:
                                C && (y && (s = v(y)) && this.parseAVCPES(a, p, s, !1), (y = { data: [], size: 0 })),
                                  y && (y.data.push(e.subarray(w, I + 188)), (y.size += I + 188 - w))
                                break
                              case E:
                                C &&
                                  (S && (s = v(S)) && (d.isAAC ? this.parseAACPES(d, s) : this.parseMPEGPES(d, s)),
                                  (S = { data: [], size: 0 })),
                                  S && (S.data.push(e.subarray(w, I + 188)), (S.size += I + 188 - w))
                                break
                              case T:
                                C && (b && (s = v(b)) && this.parseID3PES(h, s), (b = { data: [], size: 0 })),
                                  b && (b.data.push(e.subarray(w, I + 188)), (b.size += I + 188 - w))
                                break
                              case 0:
                                C && (w += e[w] + 1), (D = this._pmtId = f(e, w))
                                break
                              case D:
                                C && (w += e[w] + 1)
                                var x = g(e, w, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, i)
                                ;(m = x.avc) > 0 && (a.pid = m),
                                  (E = x.audio) > 0 && ((d.pid = E), (d.isAAC = x.isAAC)),
                                  (T = x.id3) > 0 && (h.pid = T),
                                  L && !A && (u.logger.log('reparse from beginning'), (L = !1), (I = k - 188)),
                                  (A = this.pmtParsed = !0)
                                break
                              case 17:
                              case 8191:
                                break
                              default:
                                L = !0
                            }
                          } else _++
                        _ > 0 &&
                          this.observer.emit(o.Events.ERROR, o.Events.ERROR, {
                            type: c.ErrorTypes.MEDIA_ERROR,
                            details: c.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: 'Found ' + _ + ' TS packet/s that do not start with 0x47',
                          }),
                          (a.pesData = y),
                          (d.pesData = S),
                          (h.pesData = b)
                        var P = { audioTrack: d, videoTrack: a, id3Track: h, textTrack: p }
                        return n && this.extractRemainingSamples(P), P
                      }),
                      (e.flush = function () {
                        var t,
                          e = this.remainderData
                        return (
                          (this.remainderData = null),
                          (t = e
                            ? this.demux(e, -1, !1, !0)
                            : {
                                videoTrack: this._avcTrack,
                                audioTrack: this._audioTrack,
                                id3Track: this._id3Track,
                                textTrack: this._txtTrack,
                              }),
                          this.extractRemainingSamples(t),
                          this.sampleAes ? this.decrypt(t, this.sampleAes) : t
                        )
                      }),
                      (e.extractRemainingSamples = function (t) {
                        var e,
                          r = t.audioTrack,
                          i = t.videoTrack,
                          n = t.id3Track,
                          s = t.textTrack,
                          a = i.pesData,
                          o = r.pesData,
                          l = n.pesData
                        a && (e = v(a)) ? (this.parseAVCPES(i, s, e, !0), (i.pesData = null)) : (i.pesData = a),
                          o && (e = v(o))
                            ? (r.isAAC ? this.parseAACPES(r, e) : this.parseMPEGPES(r, e), (r.pesData = null))
                            : (null != o &&
                                o.size &&
                                u.logger.log('last AAC PES packet truncated,might overlap between fragments'),
                              (r.pesData = o)),
                          l && (e = v(l)) ? (this.parseID3PES(n, e), (n.pesData = null)) : (n.pesData = l)
                      }),
                      (e.demuxSampleAes = function (t, e, r) {
                        var i = this.demux(t, r, !0, !this.config.progressive),
                          n = (this.sampleAes = new a.default(this.observer, this.config, e))
                        return this.decrypt(i, n)
                      }),
                      (e.decrypt = function (t, e) {
                        return new Promise(function (r) {
                          var i = t.audioTrack,
                            n = t.videoTrack
                          i.samples && i.isAAC
                            ? e.decryptAacSamples(i.samples, 0, function () {
                                n.samples
                                  ? e.decryptAvcSamples(n.samples, 0, 0, function () {
                                      r(t)
                                    })
                                  : r(t)
                              })
                            : n.samples &&
                              e.decryptAvcSamples(n.samples, 0, 0, function () {
                                r(t)
                              })
                        })
                      }),
                      (e.destroy = function () {
                        this._duration = 0
                      }),
                      (e.parseAVCPES = function (t, e, r, i) {
                        var n,
                          a = this,
                          o = this.parseAVCNALu(t, r.data),
                          u = this.avcSample,
                          c = !1
                        ;(r.data = null),
                          u && o.length && !t.audFound && (p(u, t), (u = this.avcSample = h(!1, r.pts, r.dts, ''))),
                          o.forEach(function (i) {
                            switch (i.type) {
                              case 1:
                                ;(n = !0), u || (u = a.avcSample = h(!0, r.pts, r.dts, '')), (u.frame = !0)
                                var o = i.data
                                if (c && o.length > 4) {
                                  var d = new s.default(o).readSliceType()
                                  ;(2 !== d && 4 !== d && 7 !== d && 9 !== d) || (u.key = !0)
                                }
                                break
                              case 5:
                                ;(n = !0),
                                  u || (u = a.avcSample = h(!0, r.pts, r.dts, '')),
                                  (u.key = !0),
                                  (u.frame = !0)
                                break
                              case 6:
                                ;(n = !0), Object(l.parseSEIMessageFromNALu)(m(i.data), r.pts, e.samples)
                                break
                              case 7:
                                if (((n = !0), (c = !0), !t.sps)) {
                                  var f = new s.default(i.data).readSPS()
                                  ;(t.width = f.width),
                                    (t.height = f.height),
                                    (t.pixelRatio = f.pixelRatio),
                                    (t.sps = [i.data]),
                                    (t.duration = a._duration)
                                  for (var g = i.data.subarray(1, 4), v = 'avc1.', y = 0; y < 3; y++) {
                                    var E = g[y].toString(16)
                                    E.length < 2 && (E = '0' + E), (v += E)
                                  }
                                  t.codec = v
                                }
                                break
                              case 8:
                                ;(n = !0), t.pps || (t.pps = [i.data])
                                break
                              case 9:
                                ;(n = !1), (t.audFound = !0), u && p(u, t), (u = a.avcSample = h(!1, r.pts, r.dts, ''))
                                break
                              case 12:
                                n = !1
                                break
                              default:
                                ;(n = !1), u && (u.debug += 'unknown NAL ' + i.type + ' ')
                            }
                            u && n && u.units.push(i)
                          }),
                          i && u && (p(u, t), (this.avcSample = null))
                      }),
                      (e.getLastNalUnit = function (t) {
                        var e,
                          r,
                          i = this.avcSample
                        if (
                          ((i && 0 !== i.units.length) || (i = t[t.length - 1]),
                          null !== (e = i) && void 0 !== e && e.units)
                        ) {
                          var n = i.units
                          r = n[n.length - 1]
                        }
                        return r
                      }),
                      (e.parseAVCNALu = function (t, e) {
                        var r,
                          i,
                          n = e.byteLength,
                          s = t.naluState || 0,
                          a = s,
                          o = [],
                          l = 0,
                          u = -1,
                          c = 0
                        for (-1 === s && ((u = 0), (c = 31 & e[0]), (s = 0), (l = 1)); l < n; )
                          if (((r = e[l++]), s))
                            if (1 !== s)
                              if (r)
                                if (1 === r) {
                                  if (u >= 0) {
                                    var d = { data: e.subarray(u, l - s - 1), type: c }
                                    o.push(d)
                                  } else {
                                    var h = this.getLastNalUnit(t.samples)
                                    if (
                                      h &&
                                      (a &&
                                        l <= 4 - a &&
                                        h.state &&
                                        (h.data = h.data.subarray(0, h.data.byteLength - a)),
                                      (i = l - s - 1) > 0)
                                    ) {
                                      var f = new Uint8Array(h.data.byteLength + i)
                                      f.set(h.data, 0),
                                        f.set(e.subarray(0, i), h.data.byteLength),
                                        (h.data = f),
                                        (h.state = 0)
                                    }
                                  }
                                  l < n ? ((u = l), (c = 31 & e[l]), (s = 0)) : (s = -1)
                                } else s = 0
                              else s = 3
                            else s = r ? 0 : 2
                          else s = r ? 0 : 1
                        if (u >= 0 && s >= 0) {
                          var g = { data: e.subarray(u, n), type: c, state: s }
                          o.push(g)
                        }
                        if (0 === o.length) {
                          var v = this.getLastNalUnit(t.samples)
                          if (v) {
                            var p = new Uint8Array(v.data.byteLength + e.byteLength)
                            p.set(v.data, 0), p.set(e, v.data.byteLength), (v.data = p)
                          }
                        }
                        return (t.naluState = s), o
                      }),
                      (e.parseAACPES = function (t, e) {
                        var r,
                          n,
                          s,
                          a,
                          l,
                          d = 0,
                          h = this.aacOverFlow,
                          f = e.data
                        if (h) {
                          this.aacOverFlow = null
                          var g = h.sample.unit.byteLength,
                            v = Math.min(h.missing, g),
                            p = g - v
                          h.sample.unit.set(f.subarray(0, v), p), t.samples.push(h.sample), (d = h.missing)
                        }
                        for (r = d, n = f.length; r < n - 1 && !i.isHeader(f, r); r++);
                        if (
                          r === d ||
                          (r < n - 1
                            ? ((s = 'AAC PES did not start with ADTS header,offset:' + r), (a = !1))
                            : ((s = 'no ADTS header found in AAC PES'), (a = !0)),
                          u.logger.warn('parsing error:' + s),
                          this.observer.emit(o.Events.ERROR, o.Events.ERROR, {
                            type: c.ErrorTypes.MEDIA_ERROR,
                            details: c.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: a,
                            reason: s,
                          }),
                          !a)
                        ) {
                          if ((i.initTrackConfig(t, this.observer, f, r, this.audioCodec), void 0 !== e.pts)) l = e.pts
                          else {
                            if (!h) return void u.logger.warn('[tsdemuxer]: AAC PES unknown PTS')
                            var m = i.getFrameDuration(t.samplerate)
                            l = h.sample.pts + m
                          }
                          for (var y = 0; r < n; ) {
                            if (i.isHeader(f, r)) {
                              if (r + 5 < n) {
                                var E = i.appendFrame(t, f, r, l, y)
                                if (E) {
                                  if (!E.missing) {
                                    ;(r += E.length), y++
                                    continue
                                  }
                                  this.aacOverFlow = E
                                }
                              }
                              break
                            }
                            r++
                          }
                        }
                      }),
                      (e.parseMPEGPES = function (t, e) {
                        var r = e.data,
                          i = r.length,
                          s = 0,
                          a = 0,
                          o = e.pts
                        if (void 0 !== o)
                          for (; a < i; )
                            if (n.isHeader(r, a)) {
                              var l = n.appendFrame(t, r, a, o, s)
                              if (!l) break
                              ;(a += l.length), s++
                            } else a++
                        else u.logger.warn('[tsdemuxer]: MPEG PES unknown PTS')
                      }),
                      (e.parseID3PES = function (t, e) {
                        void 0 !== e.pts ? t.samples.push(e) : u.logger.warn('[tsdemuxer]: ID3 PES unknown PTS')
                      }),
                      t
                    )
                  })()
                function h(t, e, r, i) {
                  return { key: t, frame: !1, pts: e, dts: r, units: [], debug: i, length: 0 }
                }
                function f(t, e) {
                  return ((31 & t[e + 10]) << 8) | t[e + 11]
                }
                function g(t, e, r, i) {
                  var n = { audio: -1, avc: -1, id3: -1, isAAC: !0 },
                    s = e + 3 + (((15 & t[e + 1]) << 8) | t[e + 2]) - 4
                  for (e += 12 + (((15 & t[e + 10]) << 8) | t[e + 11]); e < s; ) {
                    var a = ((31 & t[e + 1]) << 8) | t[e + 2]
                    switch (t[e]) {
                      case 207:
                        if (!i) {
                          u.logger.log('ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream')
                          break
                        }
                      case 15:
                        ;-1 === n.audio && (n.audio = a)
                        break
                      case 21:
                        ;-1 === n.id3 && (n.id3 = a)
                        break
                      case 219:
                        if (!i) {
                          u.logger.log('H.264 with AES-128-CBC slice encryption found in unencrypted stream')
                          break
                        }
                      case 27:
                        ;-1 === n.avc && (n.avc = a)
                        break
                      case 3:
                      case 4:
                        r
                          ? -1 === n.audio && ((n.audio = a), (n.isAAC = !1))
                          : u.logger.log('MPEG audio found, not supported in this browser')
                        break
                      case 36:
                        u.logger.warn('Unsupported HEVC stream type found')
                    }
                    e += 5 + (((15 & t[e + 3]) << 8) | t[e + 4])
                  }
                  return n
                }
                function v(t) {
                  var e,
                    r,
                    i,
                    n,
                    s,
                    a = 0,
                    o = t.data
                  if (!t || 0 === t.size) return null
                  for (; o[0].length < 19 && o.length > 1; ) {
                    var l = new Uint8Array(o[0].length + o[1].length)
                    l.set(o[0]), l.set(o[1], o[0].length), (o[0] = l), o.splice(1, 1)
                  }
                  if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                    if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null
                    var c = e[7]
                    192 & c &&
                      ((n =
                        536870912 * (14 & e[9]) +
                        4194304 * (255 & e[10]) +
                        16384 * (254 & e[11]) +
                        128 * (255 & e[12]) +
                        (254 & e[13]) / 2),
                      64 & c
                        ? n -
                            (s =
                              536870912 * (14 & e[14]) +
                              4194304 * (255 & e[15]) +
                              16384 * (254 & e[16]) +
                              128 * (255 & e[17]) +
                              (254 & e[18]) / 2) >
                            54e5 &&
                          (u.logger.warn(Math.round((n - s) / 9e4) + 's delta between PTS and DTS, align them'),
                          (n = s))
                        : (s = n))
                    var d = (i = e[8]) + 9
                    if (t.size <= d) return null
                    t.size -= d
                    for (var h = new Uint8Array(t.size), f = 0, g = o.length; f < g; f++) {
                      var v = (e = o[f]).byteLength
                      if (d) {
                        if (d > v) {
                          d -= v
                          continue
                        }
                        ;(e = e.subarray(d)), (v -= d), (d = 0)
                      }
                      h.set(e, a), (a += v)
                    }
                    return r && (r -= i + 3), { data: h, pts: n, dts: s, len: r }
                  }
                  return null
                }
                function p(t, e) {
                  if (t.units.length && t.frame) {
                    if (void 0 === t.pts) {
                      var r = e.samples,
                        i = r.length
                      if (!i) return void e.dropped++
                      var n = r[i - 1]
                      ;(t.pts = n.pts), (t.dts = n.dts)
                    }
                    e.samples.push(t)
                  }
                  t.debug.length && u.logger.log(t.pts + '/' + t.dts + ':' + t.debug)
                }
                function m(t) {
                  for (var e = t.byteLength, r = [], i = 1; i < e - 2; )
                    0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), (i += 2)) : i++
                  if (0 === r.length) return t
                  var n = e - r.length,
                    s = new Uint8Array(n),
                    a = 0
                  for (i = 0; i < n; a++, i++) a === r[0] && (a++, r.shift()), (s[i] = t[a])
                  return s
                }
                ;(d.minProbeByteLength = 188), (e.default = d)
              },
            './src/errors.ts':
              /*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
              /*! exports provided: ErrorTypes, ErrorDetails */ function (t, e, r) {
                'use strict'
                var i, n
                r.r(e),
                  r.d(e, 'ErrorTypes', function () {
                    return i
                  }),
                  r.d(e, 'ErrorDetails', function () {
                    return n
                  }),
                  (function (t) {
                    ;(t.NETWORK_ERROR = 'networkError'),
                      (t.MEDIA_ERROR = 'mediaError'),
                      (t.KEY_SYSTEM_ERROR = 'keySystemError'),
                      (t.MUX_ERROR = 'muxError'),
                      (t.OTHER_ERROR = 'otherError')
                  })(i || (i = {})),
                  (function (t) {
                    ;(t.KEY_SYSTEM_NO_KEYS = 'keySystemNoKeys'),
                      (t.KEY_SYSTEM_NO_ACCESS = 'keySystemNoAccess'),
                      (t.KEY_SYSTEM_NO_SESSION = 'keySystemNoSession'),
                      (t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = 'keySystemLicenseRequestFailed'),
                      (t.KEY_SYSTEM_NO_INIT_DATA = 'keySystemNoInitData'),
                      (t.MANIFEST_LOAD_ERROR = 'manifestLoadError'),
                      (t.MANIFEST_LOAD_TIMEOUT = 'manifestLoadTimeOut'),
                      (t.MANIFEST_PARSING_ERROR = 'manifestParsingError'),
                      (t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = 'manifestIncompatibleCodecsError'),
                      (t.LEVEL_EMPTY_ERROR = 'levelEmptyError'),
                      (t.LEVEL_LOAD_ERROR = 'levelLoadError'),
                      (t.LEVEL_LOAD_TIMEOUT = 'levelLoadTimeOut'),
                      (t.LEVEL_SWITCH_ERROR = 'levelSwitchError'),
                      (t.AUDIO_TRACK_LOAD_ERROR = 'audioTrackLoadError'),
                      (t.AUDIO_TRACK_LOAD_TIMEOUT = 'audioTrackLoadTimeOut'),
                      (t.SUBTITLE_LOAD_ERROR = 'subtitleTrackLoadError'),
                      (t.SUBTITLE_TRACK_LOAD_TIMEOUT = 'subtitleTrackLoadTimeOut'),
                      (t.FRAG_LOAD_ERROR = 'fragLoadError'),
                      (t.FRAG_LOAD_TIMEOUT = 'fragLoadTimeOut'),
                      (t.FRAG_DECRYPT_ERROR = 'fragDecryptError'),
                      (t.FRAG_PARSING_ERROR = 'fragParsingError'),
                      (t.REMUX_ALLOC_ERROR = 'remuxAllocError'),
                      (t.KEY_LOAD_ERROR = 'keyLoadError'),
                      (t.KEY_LOAD_TIMEOUT = 'keyLoadTimeOut'),
                      (t.BUFFER_ADD_CODEC_ERROR = 'bufferAddCodecError'),
                      (t.BUFFER_INCOMPATIBLE_CODECS_ERROR = 'bufferIncompatibleCodecsError'),
                      (t.BUFFER_APPEND_ERROR = 'bufferAppendError'),
                      (t.BUFFER_APPENDING_ERROR = 'bufferAppendingError'),
                      (t.BUFFER_STALLED_ERROR = 'bufferStalledError'),
                      (t.BUFFER_FULL_ERROR = 'bufferFullError'),
                      (t.BUFFER_SEEK_OVER_HOLE = 'bufferSeekOverHole'),
                      (t.BUFFER_NUDGE_ON_STALL = 'bufferNudgeOnStall'),
                      (t.INTERNAL_EXCEPTION = 'internalException'),
                      (t.INTERNAL_ABORTED = 'aborted'),
                      (t.UNKNOWN = 'unknown')
                  })(n || (n = {}))
              },
            './src/events.ts':
              /*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
              /*! exports provided: Events */ function (t, e, r) {
                'use strict'
                var i
                r.r(e),
                  r.d(e, 'Events', function () {
                    return i
                  }),
                  (function (t) {
                    ;(t.MEDIA_ATTACHING = 'hlsMediaAttaching'),
                      (t.MEDIA_ATTACHED = 'hlsMediaAttached'),
                      (t.MEDIA_DETACHING = 'hlsMediaDetaching'),
                      (t.MEDIA_DETACHED = 'hlsMediaDetached'),
                      (t.BUFFER_RESET = 'hlsBufferReset'),
                      (t.BUFFER_CODECS = 'hlsBufferCodecs'),
                      (t.BUFFER_CREATED = 'hlsBufferCreated'),
                      (t.BUFFER_APPENDING = 'hlsBufferAppending'),
                      (t.BUFFER_APPENDED = 'hlsBufferAppended'),
                      (t.BUFFER_EOS = 'hlsBufferEos'),
                      (t.BUFFER_FLUSHING = 'hlsBufferFlushing'),
                      (t.BUFFER_FLUSHED = 'hlsBufferFlushed'),
                      (t.MANIFEST_LOADING = 'hlsManifestLoading'),
                      (t.MANIFEST_LOADED = 'hlsManifestLoaded'),
                      (t.MANIFEST_PARSED = 'hlsManifestParsed'),
                      (t.LEVEL_SWITCHING = 'hlsLevelSwitching'),
                      (t.LEVEL_SWITCHED = 'hlsLevelSwitched'),
                      (t.LEVEL_LOADING = 'hlsLevelLoading'),
                      (t.LEVEL_LOADED = 'hlsLevelLoaded'),
                      (t.LEVEL_UPDATED = 'hlsLevelUpdated'),
                      (t.LEVEL_PTS_UPDATED = 'hlsLevelPtsUpdated'),
                      (t.LEVELS_UPDATED = 'hlsLevelsUpdated'),
                      (t.AUDIO_TRACKS_UPDATED = 'hlsAudioTracksUpdated'),
                      (t.AUDIO_TRACK_SWITCHING = 'hlsAudioTrackSwitching'),
                      (t.AUDIO_TRACK_SWITCHED = 'hlsAudioTrackSwitched'),
                      (t.AUDIO_TRACK_LOADING = 'hlsAudioTrackLoading'),
                      (t.AUDIO_TRACK_LOADED = 'hlsAudioTrackLoaded'),
                      (t.SUBTITLE_TRACKS_UPDATED = 'hlsSubtitleTracksUpdated'),
                      (t.SUBTITLE_TRACKS_CLEARED = 'hlsSubtitleTracksCleared'),
                      (t.SUBTITLE_TRACK_SWITCH = 'hlsSubtitleTrackSwitch'),
                      (t.SUBTITLE_TRACK_LOADING = 'hlsSubtitleTrackLoading'),
                      (t.SUBTITLE_TRACK_LOADED = 'hlsSubtitleTrackLoaded'),
                      (t.SUBTITLE_FRAG_PROCESSED = 'hlsSubtitleFragProcessed'),
                      (t.CUES_PARSED = 'hlsCuesParsed'),
                      (t.NON_NATIVE_TEXT_TRACKS_FOUND = 'hlsNonNativeTextTracksFound'),
                      (t.INIT_PTS_FOUND = 'hlsInitPtsFound'),
                      (t.FRAG_LOADING = 'hlsFragLoading'),
                      (t.FRAG_LOAD_EMERGENCY_ABORTED = 'hlsFragLoadEmergencyAborted'),
                      (t.FRAG_LOADED = 'hlsFragLoaded'),
                      (t.FRAG_DECRYPTED = 'hlsFragDecrypted'),
                      (t.FRAG_PARSING_INIT_SEGMENT = 'hlsFragParsingInitSegment'),
                      (t.FRAG_PARSING_USERDATA = 'hlsFragParsingUserdata'),
                      (t.FRAG_PARSING_METADATA = 'hlsFragParsingMetadata'),
                      (t.FRAG_PARSED = 'hlsFragParsed'),
                      (t.FRAG_BUFFERED = 'hlsFragBuffered'),
                      (t.FRAG_CHANGED = 'hlsFragChanged'),
                      (t.FPS_DROP = 'hlsFpsDrop'),
                      (t.FPS_DROP_LEVEL_CAPPING = 'hlsFpsDropLevelCapping'),
                      (t.ERROR = 'hlsError'),
                      (t.DESTROYING = 'hlsDestroying'),
                      (t.KEY_LOADING = 'hlsKeyLoading'),
                      (t.KEY_LOADED = 'hlsKeyLoaded'),
                      (t.LIVE_BACK_BUFFER_REACHED = 'hlsLiveBackBufferReached'),
                      (t.BACK_BUFFER_REACHED = 'hlsBackBufferReached')
                  })(i || (i = {}))
              },
            './src/hls.ts':
              /*!********************!*\
  !*** ./src/hls.ts ***!
  \********************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return E
                  })
                var i = r(/*! url-toolkit */ './node_modules/url-toolkit/src/url-toolkit.js'),
                  n = r(/*! ./loader/playlist-loader */ './src/loader/playlist-loader.ts'),
                  s = r(/*! ./loader/key-loader */ './src/loader/key-loader.ts'),
                  a = r(/*! ./controller/id3-track-controller */ './src/controller/id3-track-controller.ts'),
                  o = r(/*! ./controller/latency-controller */ './src/controller/latency-controller.ts'),
                  l = r(/*! ./controller/level-controller */ './src/controller/level-controller.ts'),
                  u = r(/*! ./loader/resource-types */ './src/loader/resource-types.js'),
                  c = r(/*! ./controller/fragment-tracker */ './src/controller/fragment-tracker.ts'),
                  d = r(/*! ./controller/stream-controller */ './src/controller/stream-controller.ts'),
                  h = r(/*! ./is-supported */ './src/is-supported.ts'),
                  f = r(/*! ./utils/logger */ './src/utils/logger.ts'),
                  g = r(/*! ./config */ './src/config.ts'),
                  v = r(/*! eventemitter3 */ './node_modules/eventemitter3/index.js'),
                  p = r(/*! ./events */ './src/events.ts'),
                  m = r(/*! ./errors */ './src/errors.ts')
                function y(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var E = (function () {
                  function t(e) {
                    void 0 === e && (e = {}),
                      (this.config = void 0),
                      (this.userConfig = void 0),
                      (this.coreComponents = void 0),
                      (this.networkControllers = void 0),
                      (this._emitter = new v.EventEmitter()),
                      (this._autoLevelCapping = void 0),
                      (this.abrController = void 0),
                      (this.bufferController = void 0),
                      (this.capLevelController = void 0),
                      (this.latencyController = void 0),
                      (this.levelController = void 0),
                      (this.streamController = void 0),
                      (this.audioTrackController = void 0),
                      (this.subtitleTrackController = void 0),
                      (this.emeController = void 0),
                      (this._media = null),
                      (this.url = null)
                    var r = (this.config = Object(g.mergeConfig)(t.DefaultConfig, e))
                    ;(this.userConfig = e),
                      Object(f.enableLogs)(r.debug),
                      (this._autoLevelCapping = -1),
                      r.progressive && Object(g.enableStreamingMode)(r)
                    var i = r.abrController,
                      u = r.bufferController,
                      h = r.capLevelController,
                      p = r.fpsController,
                      m = (this.abrController = new i(this)),
                      y = (this.bufferController = new u(this)),
                      E = (this.capLevelController = new h(this)),
                      T = new p(this),
                      S = new n.default(this),
                      b = new s.default(this),
                      L = new a.default(this),
                      A = (this.levelController = new l.default(this)),
                      D = new c.FragmentTracker(this),
                      R = (this.streamController = new d.default(this, D))
                    E.setStreamController(R), T.setStreamController(R)
                    var k = [A, R]
                    this.networkControllers = k
                    var _ = [S, b, m, y, E, T, L, D]
                    ;(this.audioTrackController = this.createController(r.audioTrackController, null, k)),
                      this.createController(r.audioStreamController, D, k),
                      (this.subtitleTrackController = this.createController(r.subtitleTrackController, null, k)),
                      this.createController(r.subtitleStreamController, D, k),
                      this.createController(r.timelineController, null, _),
                      (this.emeController = this.createController(r.emeController, null, _)),
                      (this.latencyController = this.createController(o.default, null, _)),
                      (this.coreComponents = _)
                  }
                  t.isSupported = function () {
                    return Object(h.isSupported)()
                  }
                  var e,
                    r,
                    E,
                    T = t.prototype
                  return (
                    (T.createController = function (t, e, r) {
                      if (t) {
                        var i = e ? new t(this, e) : new t(this)
                        return r && r.push(i), i
                      }
                      return null
                    }),
                    (T.on = function (t, e, r) {
                      void 0 === r && (r = this), this._emitter.on(t, e, r)
                    }),
                    (T.once = function (t, e, r) {
                      void 0 === r && (r = this), this._emitter.once(t, e, r)
                    }),
                    (T.removeAllListeners = function (t) {
                      this._emitter.removeAllListeners(t)
                    }),
                    (T.off = function (t, e, r, i) {
                      void 0 === r && (r = this), this._emitter.off(t, e, r, i)
                    }),
                    (T.listeners = function (t) {
                      return this._emitter.listeners(t)
                    }),
                    (T.emit = function (t, e, r) {
                      return this._emitter.emit(t, e, r)
                    }),
                    (T.trigger = function (t, e) {
                      if (this.config.debug) return this.emit(t, t, e)
                      try {
                        return this.emit(t, t, e)
                      } catch (r) {
                        f.logger.error(
                          'An internal error happened while handling event ' +
                            t +
                            '. Error message: "' +
                            r.message +
                            '". Here is a stacktrace:',
                          r,
                        ),
                          this.trigger(p.Events.ERROR, {
                            type: m.ErrorTypes.OTHER_ERROR,
                            details: m.ErrorDetails.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: t,
                            error: r,
                          })
                      }
                      return !1
                    }),
                    (T.listenerCount = function (t) {
                      return this._emitter.listenerCount(t)
                    }),
                    (T.destroy = function () {
                      f.logger.log('destroy'),
                        this.trigger(p.Events.DESTROYING, void 0),
                        this.detachMedia(),
                        this.removeAllListeners(),
                        (this._autoLevelCapping = -1),
                        (this.url = null),
                        this.networkControllers.forEach(function (t) {
                          return t.destroy()
                        }),
                        (this.networkControllers.length = 0),
                        this.coreComponents.forEach(function (t) {
                          return t.destroy()
                        }),
                        (this.coreComponents.length = 0)
                    }),
                    (T.attachMedia = function (t) {
                      f.logger.log('attachMedia'),
                        (this._media = t),
                        this.trigger(p.Events.MEDIA_ATTACHING, { media: t })
                    }),
                    (T.detachMedia = function () {
                      f.logger.log('detachMedia'), this.trigger(p.Events.MEDIA_DETACHING, void 0), (this._media = null)
                    }),
                    (T.loadSource = function (t) {
                      this.stopLoad()
                      var e = this.media,
                        r = this.url,
                        n = (this.url = i.buildAbsoluteURL(self.location.href, t, { alwaysNormalize: !0 }))
                      f.logger.log('loadSource:' + n),
                        e &&
                          r &&
                          r !== n &&
                          this.bufferController.hasSourceTypes() &&
                          (this.detachMedia(), this.attachMedia(e)),
                        this.trigger(p.Events.MANIFEST_LOADING, { url: t })
                    }),
                    (T.startLoad = function (t) {
                      void 0 === t && (t = -1),
                        f.logger.log('startLoad(' + t + ')'),
                        this.networkControllers.forEach(function (e) {
                          e.startLoad(t)
                        })
                    }),
                    (T.stopLoad = function () {
                      f.logger.log('stopLoad'),
                        this.networkControllers.forEach(function (t) {
                          t.stopLoad()
                        })
                    }),
                    (T.swapAudioCodec = function () {
                      f.logger.log('swapAudioCodec'), this.streamController.swapAudioCodec()
                    }),
                    (T.recoverMediaError = function () {
                      f.logger.log('recoverMediaError')
                      var t = this._media
                      this.detachMedia(), t && this.attachMedia(t)
                    }),
                    (T.removeLevel = function (t, e) {
                      void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
                    }),
                    (e = t),
                    (E = [
                      {
                        key: 'version',
                        get: function () {
                          return '1.0.2'
                        },
                      },
                      {
                        key: 'Events',
                        get: function () {
                          return p.Events
                        },
                      },
                      {
                        key: 'ErrorTypes',
                        get: function () {
                          return m.ErrorTypes
                        },
                      },
                      {
                        key: 'ErrorDetails',
                        get: function () {
                          return m.ErrorDetails
                        },
                      },
                      {
                        key: 'ResourceTypes',
                        get: function () {
                          return u.ResourceTypes
                        },
                      },
                      {
                        key: 'DefaultConfig',
                        get: function () {
                          return t.defaultConfig ? t.defaultConfig : g.hlsDefaultConfig
                        },
                        set: function (e) {
                          t.defaultConfig = e
                        },
                      },
                    ]),
                    (r = [
                      {
                        key: 'levels',
                        get: function () {
                          var t = this.levelController.levels
                          return t || []
                        },
                      },
                      {
                        key: 'currentLevel',
                        get: function () {
                          return this.streamController.currentLevel
                        },
                        set: function (t) {
                          f.logger.log('set currentLevel:' + t),
                            (this.loadLevel = t),
                            this.abrController.clearTimer(),
                            this.streamController.immediateLevelSwitch()
                        },
                      },
                      {
                        key: 'nextLevel',
                        get: function () {
                          return this.streamController.nextLevel
                        },
                        set: function (t) {
                          f.logger.log('set nextLevel:' + t),
                            (this.levelController.manualLevel = t),
                            this.streamController.nextLevelSwitch()
                        },
                      },
                      {
                        key: 'loadLevel',
                        get: function () {
                          return this.levelController.level
                        },
                        set: function (t) {
                          f.logger.log('set loadLevel:' + t), (this.levelController.manualLevel = t)
                        },
                      },
                      {
                        key: 'nextLoadLevel',
                        get: function () {
                          return this.levelController.nextLoadLevel
                        },
                        set: function (t) {
                          this.levelController.nextLoadLevel = t
                        },
                      },
                      {
                        key: 'firstLevel',
                        get: function () {
                          return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                        },
                        set: function (t) {
                          f.logger.log('set firstLevel:' + t), (this.levelController.firstLevel = t)
                        },
                      },
                      {
                        key: 'startLevel',
                        get: function () {
                          return this.levelController.startLevel
                        },
                        set: function (t) {
                          f.logger.log('set startLevel:' + t),
                            -1 !== t && (t = Math.max(t, this.minAutoLevel)),
                            (this.levelController.startLevel = t)
                        },
                      },
                      {
                        key: 'capLevelToPlayerSize',
                        get: function () {
                          return this.config.capLevelToPlayerSize
                        },
                        set: function (t) {
                          var e = !!t
                          e !== this.config.capLevelToPlayerSize &&
                            (e
                              ? this.capLevelController.startCapping()
                              : (this.capLevelController.stopCapping(),
                                (this.autoLevelCapping = -1),
                                this.streamController.nextLevelSwitch()),
                            (this.config.capLevelToPlayerSize = e))
                        },
                      },
                      {
                        key: 'autoLevelCapping',
                        get: function () {
                          return this._autoLevelCapping
                        },
                        set: function (t) {
                          this._autoLevelCapping !== t &&
                            (f.logger.log('set autoLevelCapping:' + t), (this._autoLevelCapping = t))
                        },
                      },
                      {
                        key: 'bandwidthEstimate',
                        get: function () {
                          var t = this.abrController.bwEstimator
                          return t ? t.getEstimate() : NaN
                        },
                      },
                      {
                        key: 'autoLevelEnabled',
                        get: function () {
                          return -1 === this.levelController.manualLevel
                        },
                      },
                      {
                        key: 'manualLevel',
                        get: function () {
                          return this.levelController.manualLevel
                        },
                      },
                      {
                        key: 'minAutoLevel',
                        get: function () {
                          var t = this.levels,
                            e = this.config.minAutoBitrate
                          if (!t) return 0
                          for (var r = t.length, i = 0; i < r; i++) if (t[i].maxBitrate > e) return i
                          return 0
                        },
                      },
                      {
                        key: 'maxAutoLevel',
                        get: function () {
                          var t = this.levels,
                            e = this.autoLevelCapping
                          return -1 === e && t && t.length ? t.length - 1 : e
                        },
                      },
                      {
                        key: 'nextAutoLevel',
                        get: function () {
                          return Math.min(
                            Math.max(this.abrController.nextAutoLevel, this.minAutoLevel),
                            this.maxAutoLevel,
                          )
                        },
                        set: function (t) {
                          this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                        },
                      },
                      {
                        key: 'audioTracks',
                        get: function () {
                          var t = this.audioTrackController
                          return t ? t.audioTracks : []
                        },
                      },
                      {
                        key: 'audioTrack',
                        get: function () {
                          var t = this.audioTrackController
                          return t ? t.audioTrack : -1
                        },
                        set: function (t) {
                          var e = this.audioTrackController
                          e && (e.audioTrack = t)
                        },
                      },
                      {
                        key: 'subtitleTracks',
                        get: function () {
                          var t = this.subtitleTrackController
                          return t ? t.subtitleTracks : []
                        },
                      },
                      {
                        key: 'subtitleTrack',
                        get: function () {
                          var t = this.subtitleTrackController
                          return t ? t.subtitleTrack : -1
                        },
                        set: function (t) {
                          var e = this.subtitleTrackController
                          e && (e.subtitleTrack = t)
                        },
                      },
                      {
                        key: 'media',
                        get: function () {
                          return this._media
                        },
                      },
                      {
                        key: 'subtitleDisplay',
                        get: function () {
                          var t = this.subtitleTrackController
                          return !!t && t.subtitleDisplay
                        },
                        set: function (t) {
                          var e = this.subtitleTrackController
                          e && (e.subtitleDisplay = t)
                        },
                      },
                      {
                        key: 'lowLatencyMode',
                        get: function () {
                          return this.config.lowLatencyMode
                        },
                        set: function (t) {
                          this.config.lowLatencyMode = t
                        },
                      },
                      {
                        key: 'liveSyncPosition',
                        get: function () {
                          return this.latencyController.liveSyncPosition
                        },
                      },
                      {
                        key: 'latency',
                        get: function () {
                          return this.latencyController.latency
                        },
                      },
                      {
                        key: 'maxLatency',
                        get: function () {
                          return this.latencyController.maxLatency
                        },
                      },
                      {
                        key: 'targetLatency',
                        get: function () {
                          return this.latencyController.targetLatency
                        },
                      },
                      {
                        key: 'drift',
                        get: function () {
                          return this.latencyController.drift
                        },
                      },
                      {
                        key: 'forceStartLoad',
                        get: function () {
                          return this.streamController.forceStartLoad
                        },
                      },
                    ]) && y(e.prototype, r),
                    E && y(e, E),
                    t
                  )
                })()
                E.defaultConfig = void 0
              },
            './src/is-supported.ts':
              /*!*****************************!*\
  !*** ./src/is-supported.ts ***!
  \*****************************/
              /*! exports provided: isSupported, changeTypeSupported */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'isSupported', function () {
                    return s
                  }),
                  r.d(e, 'changeTypeSupported', function () {
                    return a
                  })
                var i = r(/*! ./utils/mediasource-helper */ './src/utils/mediasource-helper.ts')
                function n() {
                  return self.SourceBuffer || self.WebKitSourceBuffer
                }
                function s() {
                  var t = Object(i.getMediaSource)()
                  if (!t) return !1
                  var e = n(),
                    r =
                      t &&
                      'function' == typeof t.isTypeSupported &&
                      t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                    s =
                      !e ||
                      (e.prototype &&
                        'function' == typeof e.prototype.appendBuffer &&
                        'function' == typeof e.prototype.remove)
                  return !!r && !!s
                }
                function a() {
                  var t,
                    e = n()
                  return (
                    'function' ==
                    typeof (null == e || null === (t = e.prototype) || void 0 === t ? void 0 : t.changeType)
                  )
                }
              },
            './src/loader/fragment-loader.ts':
              /*!***************************************!*\
  !*** ./src/loader/fragment-loader.ts ***!
  \***************************************/
              /*! exports provided: default, LoadError */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return h
                  }),
                  r.d(e, 'LoadError', function () {
                    return g
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../errors */ './src/errors.ts'),
                  s = r(/*! ./resource-types */ './src/loader/resource-types.js')
                function a(t) {
                  var e = 'function' == typeof Map ? new Map() : void 0
                  return (a = function (t) {
                    if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf('[native code]'))) return t
                    var r
                    if ('function' != typeof t)
                      throw new TypeError('Super expression must either be null or a function')
                    if (void 0 !== e) {
                      if (e.has(t)) return e.get(t)
                      e.set(t, i)
                    }
                    function i() {
                      return o(t, arguments, c(this).constructor)
                    }
                    return (
                      (i.prototype = Object.create(t.prototype, {
                        constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
                      })),
                      u(i, t)
                    )
                  })(t)
                }
                function o(t, e, r) {
                  return (o = l()
                    ? Reflect.construct
                    : function (t, e, r) {
                        var i = [null]
                        i.push.apply(i, e)
                        var n = new (Function.bind.apply(t, i))()
                        return r && u(n, r.prototype), n
                      }).apply(null, arguments)
                }
                function l() {
                  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                  } catch (t) {
                    return !1
                  }
                }
                function u(t, e) {
                  return (u =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                function c(t) {
                  return (c = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
                }
                var d = Math.pow(2, 17),
                  h = (function () {
                    function t(t) {
                      ;(this.config = void 0), (this.loader = null), (this.partLoadTimeout = -1), (this.config = t)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        this.loader && (this.loader.destroy(), (this.loader = null))
                      }),
                      (e.abort = function () {
                        this.loader && this.loader.abort()
                      }),
                      (e.load = function (t, e) {
                        var r = this,
                          i = t.url
                        if (!i)
                          return Promise.reject(
                            new g(
                              {
                                type: n.ErrorTypes.NETWORK_ERROR,
                                details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t,
                                networkDetails: null,
                              },
                              'Fragment does not have a ' + (i ? 'part list' : 'url'),
                            ),
                          )
                        this.abort()
                        var a = this.config,
                          o = a.fLoader,
                          l = a.loader
                        return new Promise(function (i, u) {
                          r.loader && r.loader.destroy()
                          var c = (r.loader = t.loader = o ? new o(a) : new l(a)),
                            h = f(t),
                            v = {
                              timeout: a.fragLoadingTimeOut,
                              maxRetry: 0,
                              retryDelay: 0,
                              maxRetryDelay: a.fragLoadingMaxRetryTimeout,
                              highWaterMark: 'initSegment' === t.sn ? 1 / 0 : d,
                              type: s.ResourceTypes.FRAGMENT,
                            }
                          ;(t.stats = c.stats),
                            c.load(h, v, {
                              onSuccess: function (e, n, s, a) {
                                r.resetLoader(t, c), i({ frag: t, part: null, payload: e.data, networkDetails: a })
                              },
                              onError: function (e, i, s) {
                                r.resetLoader(t, c),
                                  u(
                                    new g({
                                      type: n.ErrorTypes.NETWORK_ERROR,
                                      details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                      fatal: !1,
                                      frag: t,
                                      response: e,
                                      networkDetails: s,
                                    }),
                                  )
                              },
                              onAbort: function (e, i, s) {
                                r.resetLoader(t, c),
                                  u(
                                    new g({
                                      type: n.ErrorTypes.NETWORK_ERROR,
                                      details: n.ErrorDetails.INTERNAL_ABORTED,
                                      fatal: !1,
                                      frag: t,
                                      networkDetails: s,
                                    }),
                                  )
                              },
                              onTimeout: function (e, i, s) {
                                r.resetLoader(t, c),
                                  u(
                                    new g({
                                      type: n.ErrorTypes.NETWORK_ERROR,
                                      details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                      fatal: !1,
                                      frag: t,
                                      networkDetails: s,
                                    }),
                                  )
                              },
                              onProgress: function (r, i, n, s) {
                                e && e({ frag: t, part: null, payload: n, networkDetails: s })
                              },
                            })
                        })
                      }),
                      (e.loadPart = function (t, e, r) {
                        var i = this
                        this.abort()
                        var a = this.config,
                          o = a.fLoader,
                          l = a.loader
                        return new Promise(function (u, c) {
                          i.loader && i.loader.destroy()
                          var h = (i.loader = t.loader = o ? new o(a) : new l(a)),
                            v = f(t, e),
                            p = {
                              timeout: a.fragLoadingTimeOut,
                              maxRetry: 0,
                              retryDelay: 0,
                              maxRetryDelay: a.fragLoadingMaxRetryTimeout,
                              highWaterMark: d,
                              type: s.ResourceTypes.FRAGMENT,
                            }
                          ;(e.stats = h.stats),
                            h.load(v, p, {
                              onSuccess: function (n, s, a, o) {
                                i.resetLoader(t, h), i.updateStatsFromPart(t, e)
                                var l = { frag: t, part: e, payload: n.data, networkDetails: o }
                                r(l), u(l)
                              },
                              onError: function (r, s, a) {
                                i.resetLoader(t, h),
                                  c(
                                    new g({
                                      type: n.ErrorTypes.NETWORK_ERROR,
                                      details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                      fatal: !1,
                                      frag: t,
                                      part: e,
                                      response: r,
                                      networkDetails: a,
                                    }),
                                  )
                              },
                              onAbort: function (r, s, a) {
                                ;(t.stats.aborted = e.stats.aborted),
                                  i.resetLoader(t, h),
                                  c(
                                    new g({
                                      type: n.ErrorTypes.NETWORK_ERROR,
                                      details: n.ErrorDetails.INTERNAL_ABORTED,
                                      fatal: !1,
                                      frag: t,
                                      part: e,
                                      networkDetails: a,
                                    }),
                                  )
                              },
                              onTimeout: function (r, s, a) {
                                i.resetLoader(t, h),
                                  c(
                                    new g({
                                      type: n.ErrorTypes.NETWORK_ERROR,
                                      details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                      fatal: !1,
                                      frag: t,
                                      part: e,
                                      networkDetails: a,
                                    }),
                                  )
                              },
                            })
                        })
                      }),
                      (e.updateStatsFromPart = function (t, e) {
                        var r = t.stats,
                          i = e.stats,
                          n = i.total
                        if (((r.loaded += i.loaded), n)) {
                          var s = Math.round(t.duration / e.duration),
                            a = Math.min(Math.round(r.loaded / n), s),
                            o = (s - a) * Math.round(r.loaded / a)
                          r.total = r.loaded + o
                        } else r.total = Math.max(r.loaded, r.total)
                        var l = r.loading,
                          u = i.loading
                        l.start ? (l.first += u.first - u.start) : ((l.start = u.start), (l.first = u.first)),
                          (l.end = u.end)
                      }),
                      (e.resetLoader = function (t, e) {
                        ;(t.loader = null),
                          this.loader === e && (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
                          e.destroy()
                      }),
                      t
                    )
                  })()
                function f(t, e) {
                  void 0 === e && (e = null)
                  var r = e || t,
                    n = { frag: t, part: e, responseType: 'arraybuffer', url: r.url, rangeStart: 0, rangeEnd: 0 },
                    s = r.byteRangeStartOffset,
                    a = r.byteRangeEndOffset
                  return (
                    Object(i.isFiniteNumber)(s) &&
                      Object(i.isFiniteNumber)(a) &&
                      ((n.rangeStart = s), (n.rangeEnd = a)),
                    n
                  )
                }
                var g = (function (t) {
                  var e, r
                  function i(e) {
                    for (var r, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                      n[s - 1] = arguments[s]
                    return ((r = t.call.apply(t, [this].concat(n)) || this).data = void 0), (r.data = e), r
                  }
                  return (
                    (r = t), ((e = i).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), u(e, r), i
                  )
                })(a(Error))
              },
            './src/loader/fragment.ts':
              /*!********************************!*\
  !*** ./src/loader/fragment.ts ***!
  \********************************/
              /*! exports provided: ElementaryStreamTypes, BaseSegment, Fragment, Part */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'ElementaryStreamTypes', function () {
                    return i
                  }),
                  r.d(e, 'BaseSegment', function () {
                    return f
                  }),
                  r.d(e, 'Fragment', function () {
                    return g
                  }),
                  r.d(e, 'Part', function () {
                    return v
                  })
                var i,
                  n = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  s = r(/*! url-toolkit */ './node_modules/url-toolkit/src/url-toolkit.js'),
                  a = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  o = r(/*! ./level-key */ './src/loader/level-key.ts'),
                  l = r(/*! ./load-stats */ './src/loader/load-stats.ts')
                function u(t, e) {
                  ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), c(t, e)
                }
                function c(t, e) {
                  return (c =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                function d(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                function h(t, e, r) {
                  return e && d(t.prototype, e), r && d(t, r), t
                }
                !(function (t) {
                  ;(t.AUDIO = 'audio'), (t.VIDEO = 'video'), (t.AUDIOVIDEO = 'audiovideo')
                })(i || (i = {}))
                var f = (function () {
                    function t(t) {
                      var e
                      ;(this._byteRange = null),
                        (this._url = null),
                        (this.baseurl = void 0),
                        (this.relurl = void 0),
                        (this.elementaryStreams =
                          (((e = {})[i.AUDIO] = null), (e[i.VIDEO] = null), (e[i.AUDIOVIDEO] = null), e)),
                        (this.baseurl = t)
                    }
                    return (
                      (t.prototype.setByteRange = function (t, e) {
                        var r = t.split('@', 2),
                          i = []
                        1 === r.length ? (i[0] = e ? e.byteRangeEndOffset : 0) : (i[0] = parseInt(r[1])),
                          (i[1] = parseInt(r[0]) + i[0]),
                          (this._byteRange = i)
                      }),
                      h(t, [
                        {
                          key: 'byteRange',
                          get: function () {
                            return this._byteRange ? this._byteRange : []
                          },
                        },
                        {
                          key: 'byteRangeStartOffset',
                          get: function () {
                            return this.byteRange[0]
                          },
                        },
                        {
                          key: 'byteRangeEndOffset',
                          get: function () {
                            return this.byteRange[1]
                          },
                        },
                        {
                          key: 'url',
                          get: function () {
                            return (
                              !this._url &&
                                this.baseurl &&
                                this.relurl &&
                                (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                  alwaysNormalize: !0,
                                })),
                              this._url || ''
                            )
                          },
                          set: function (t) {
                            this._url = t
                          },
                        },
                      ]),
                      t
                    )
                  })(),
                  g = (function (t) {
                    function e(e, r) {
                      var i
                      return (
                        ((i = t.call(this, r) || this)._decryptdata = null),
                        (i.rawProgramDateTime = null),
                        (i.programDateTime = null),
                        (i.tagList = []),
                        (i.duration = 0),
                        (i.sn = 0),
                        (i.levelkey = void 0),
                        (i.type = void 0),
                        (i.loader = null),
                        (i.level = -1),
                        (i.cc = 0),
                        (i.startPTS = void 0),
                        (i.endPTS = void 0),
                        (i.appendedPTS = void 0),
                        (i.startDTS = void 0),
                        (i.endDTS = void 0),
                        (i.start = 0),
                        (i.deltaPTS = void 0),
                        (i.maxStartPTS = void 0),
                        (i.minEndPTS = void 0),
                        (i.stats = new l.LoadStats()),
                        (i.urlId = 0),
                        (i.data = void 0),
                        (i.bitrateTest = !1),
                        (i.title = null),
                        (i.initSegment = null),
                        (i.type = e),
                        i
                      )
                    }
                    u(e, t)
                    var r = e.prototype
                    return (
                      (r.createInitializationVector = function (t) {
                        for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = (t >> (8 * (15 - r))) & 255
                        return e
                      }),
                      (r.setDecryptDataFromLevelKey = function (t, e) {
                        var r = t
                        return (
                          'AES-128' === (null == t ? void 0 : t.method) &&
                            t.uri &&
                            !t.iv &&
                            (((r = o.LevelKey.fromURI(t.uri)).method = t.method),
                            (r.iv = this.createInitializationVector(e)),
                            (r.keyFormat = 'identity')),
                          r
                        )
                      }),
                      (r.setElementaryStreamInfo = function (t, e, r, i, n, s) {
                        void 0 === s && (s = !1)
                        var a = this.elementaryStreams,
                          o = a[t]
                        o
                          ? ((o.startPTS = Math.min(o.startPTS, e)),
                            (o.endPTS = Math.max(o.endPTS, r)),
                            (o.startDTS = Math.min(o.startDTS, i)),
                            (o.endDTS = Math.max(o.endDTS, n)))
                          : (a[t] = { startPTS: e, endPTS: r, startDTS: i, endDTS: n, partial: s })
                      }),
                      (r.clearElementaryStreamInfo = function () {
                        var t = this.elementaryStreams
                        ;(t[i.AUDIO] = null), (t[i.VIDEO] = null), (t[i.AUDIOVIDEO] = null)
                      }),
                      h(e, [
                        {
                          key: 'decryptdata',
                          get: function () {
                            if (!this.levelkey && !this._decryptdata) return null
                            if (!this._decryptdata && this.levelkey) {
                              var t = this.sn
                              'number' != typeof t &&
                                (this.levelkey &&
                                  'AES-128' === this.levelkey.method &&
                                  !this.levelkey.iv &&
                                  a.logger.warn(
                                    'missing IV for initialization segment with method="' +
                                      this.levelkey.method +
                                      '" - compliance issue',
                                  ),
                                (t = 0)),
                                (this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t))
                            }
                            return this._decryptdata
                          },
                        },
                        {
                          key: 'end',
                          get: function () {
                            return this.start + this.duration
                          },
                        },
                        {
                          key: 'endProgramDateTime',
                          get: function () {
                            if (null === this.programDateTime) return null
                            if (!Object(n.isFiniteNumber)(this.programDateTime)) return null
                            var t = Object(n.isFiniteNumber)(this.duration) ? this.duration : 0
                            return this.programDateTime + 1e3 * t
                          },
                        },
                        {
                          key: 'encrypted',
                          get: function () {
                            var t
                            return !(
                              null === (t = this.decryptdata) ||
                              void 0 === t ||
                              !t.keyFormat ||
                              !this.decryptdata.uri
                            )
                          },
                        },
                      ]),
                      e
                    )
                  })(f),
                  v = (function (t) {
                    function e(e, r, i, n, s) {
                      var a
                      ;((a = t.call(this, i) || this).fragOffset = 0),
                        (a.duration = 0),
                        (a.gap = !1),
                        (a.independent = !1),
                        (a.relurl = void 0),
                        (a.fragment = void 0),
                        (a.index = void 0),
                        (a.stats = new l.LoadStats()),
                        (a.duration = e.decimalFloatingPoint('DURATION')),
                        (a.gap = e.bool('GAP')),
                        (a.independent = e.bool('INDEPENDENT')),
                        (a.relurl = e.enumeratedString('URI')),
                        (a.fragment = r),
                        (a.index = n)
                      var o = e.enumeratedString('BYTERANGE')
                      return o && a.setByteRange(o, s), s && (a.fragOffset = s.fragOffset + s.duration), a
                    }
                    return (
                      u(e, t),
                      h(e, [
                        {
                          key: 'start',
                          get: function () {
                            return this.fragment.start + this.fragOffset
                          },
                        },
                        {
                          key: 'end',
                          get: function () {
                            return this.start + this.duration
                          },
                        },
                        {
                          key: 'loaded',
                          get: function () {
                            var t = this.elementaryStreams
                            return !!(t.audio || t.video || t.audiovideo)
                          },
                        },
                      ]),
                      e
                    )
                  })(f)
              },
            './src/loader/key-loader.ts':
              /*!**********************************!*\
  !*** ./src/loader/key-loader.ts ***!
  \**********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return o
                  })
                var i = r(/*! ../events */ './src/events.ts'),
                  n = r(/*! ../errors */ './src/errors.ts'),
                  s = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  a = r(/*! ./resource-types */ './src/loader/resource-types.js'),
                  o = (function () {
                    function t(t) {
                      ;(this.hls = void 0),
                        (this.loaders = {}),
                        (this.decryptkey = null),
                        (this.decrypturl = null),
                        (this.hls = t),
                        this._registerListeners()
                    }
                    var e = t.prototype
                    return (
                      (e._registerListeners = function () {
                        this.hls.on(i.Events.KEY_LOADING, this.onKeyLoading, this)
                      }),
                      (e._unregisterListeners = function () {
                        this.hls.off(i.Events.KEY_LOADING, this.onKeyLoading)
                      }),
                      (e.destroy = function () {
                        for (var t in (this._unregisterListeners(), this.loaders)) {
                          var e = this.loaders[t]
                          e && e.destroy()
                        }
                        this.loaders = {}
                      }),
                      (e.onKeyLoading = function (t, e) {
                        var r = e.frag,
                          n = r.type,
                          o = this.loaders[n]
                        if (r.decryptdata) {
                          var l = r.decryptdata.uri
                          if (l !== this.decrypturl || null === this.decryptkey) {
                            var u = this.hls.config
                            if ((o && (s.logger.warn('abort previous key loader for type:' + n), o.abort()), !l))
                              return void s.logger.warn('key uri is falsy')
                            var c = u.loader,
                              d = (r.loader = this.loaders[n] = new c(u))
                            ;(this.decrypturl = l), (this.decryptkey = null)
                            var h = { url: l, frag: r, responseType: 'arraybuffer' },
                              f = {
                                timeout: u.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: u.fragLoadingRetryDelay,
                                maxRetryDelay: u.fragLoadingMaxRetryTimeout,
                                highWaterMark: 0,
                                type: a.ResourceTypes.KEY,
                              },
                              g = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this),
                              }
                            d.load(h, f, g)
                          } else
                            this.decryptkey &&
                              ((r.decryptdata.key = this.decryptkey),
                              this.hls.trigger(i.Events.KEY_LOADED, { frag: r }))
                        } else s.logger.warn('Missing decryption data on fragment in onKeyLoading')
                      }),
                      (e.loadsuccess = function (t, e, r) {
                        var n = r.frag
                        n.decryptdata
                          ? ((this.decryptkey = n.decryptdata.key = new Uint8Array(t.data)),
                            (n.loader = null),
                            delete this.loaders[n.type],
                            this.hls.trigger(i.Events.KEY_LOADED, { frag: n }))
                          : s.logger.error('after key load, decryptdata unset')
                      }),
                      (e.loaderror = function (t, e) {
                        var r = e.frag,
                          s = r.loader
                        s && s.abort(),
                          delete this.loaders[r.type],
                          this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.KEY_LOAD_ERROR,
                            fatal: !1,
                            frag: r,
                            response: t,
                          })
                      }),
                      (e.loadtimeout = function (t, e) {
                        var r = e.frag,
                          s = r.loader
                        s && s.abort(),
                          delete this.loaders[r.type],
                          this.hls.trigger(i.Events.ERROR, {
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.KEY_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: r,
                          })
                      }),
                      t
                    )
                  })()
              },
            './src/loader/level-details.ts':
              /*!*************************************!*\
  !*** ./src/loader/level-details.ts ***!
  \*************************************/
              /*! exports provided: LevelDetails */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'LevelDetails', function () {
                    return s
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts')
                function n(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var s = (function () {
                  function t(t) {
                    ;(this.PTSKnown = !1),
                      (this.alignedSliding = !1),
                      (this.averagetargetduration = void 0),
                      (this.endCC = 0),
                      (this.endSN = 0),
                      (this.fragments = void 0),
                      (this.fragmentHint = void 0),
                      (this.partList = null),
                      (this.live = !0),
                      (this.ageHeader = 0),
                      (this.advancedDateTime = void 0),
                      (this.updated = !0),
                      (this.advanced = !0),
                      (this.availabilityDelay = void 0),
                      (this.misses = 0),
                      (this.needSidxRanges = !1),
                      (this.startCC = 0),
                      (this.startSN = 0),
                      (this.startTimeOffset = null),
                      (this.targetduration = 0),
                      (this.totalduration = 0),
                      (this.type = null),
                      (this.url = void 0),
                      (this.m3u8 = ''),
                      (this.version = null),
                      (this.canBlockReload = !1),
                      (this.canSkipUntil = 0),
                      (this.canSkipDateRanges = !1),
                      (this.skippedSegments = 0),
                      (this.recentlyRemovedDateranges = void 0),
                      (this.partHoldBack = 0),
                      (this.holdBack = 0),
                      (this.partTarget = 0),
                      (this.preloadHint = void 0),
                      (this.renditionReports = void 0),
                      (this.tuneInGoal = 0),
                      (this.deltaUpdateFailed = void 0),
                      (this.driftStartTime = 0),
                      (this.driftEndTime = 0),
                      (this.driftStart = 0),
                      (this.driftEnd = 0),
                      (this.fragments = []),
                      (this.url = t)
                  }
                  var e, r, s
                  return (
                    (t.prototype.reloaded = function (t) {
                      if (!t) return (this.advanced = !0), void (this.updated = !0)
                      var e = this.lastPartSn - t.lastPartSn,
                        r = this.lastPartIndex - t.lastPartIndex
                      ;(this.updated = this.endSN !== t.endSN || !!r || !!e),
                        (this.advanced = this.endSN > t.endSN || e > 0 || (0 === e && r > 0)),
                        this.updated || this.advanced
                          ? (this.misses = Math.floor(0.6 * t.misses))
                          : (this.misses = t.misses + 1),
                        (this.availabilityDelay = t.availabilityDelay)
                    }),
                    (e = t),
                    (r = [
                      {
                        key: 'hasProgramDateTime',
                        get: function () {
                          return (
                            !!this.fragments.length &&
                            Object(i.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
                          )
                        },
                      },
                      {
                        key: 'levelTargetDuration',
                        get: function () {
                          return this.averagetargetduration || this.targetduration || 10
                        },
                      },
                      {
                        key: 'drift',
                        get: function () {
                          var t = this.driftEndTime - this.driftStartTime
                          return t > 0 ? (1e3 * (this.driftEnd - this.driftStart)) / t : 1
                        },
                      },
                      {
                        key: 'edge',
                        get: function () {
                          return this.partEnd || this.fragmentEnd
                        },
                      },
                      {
                        key: 'partEnd',
                        get: function () {
                          var t
                          return null !== (t = this.partList) && void 0 !== t && t.length
                            ? this.partList[this.partList.length - 1].end
                            : this.fragmentEnd
                        },
                      },
                      {
                        key: 'fragmentEnd',
                        get: function () {
                          var t
                          return null !== (t = this.fragments) && void 0 !== t && t.length
                            ? this.fragments[this.fragments.length - 1].end
                            : 0
                        },
                      },
                      {
                        key: 'age',
                        get: function () {
                          return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                        },
                      },
                      {
                        key: 'lastPartIndex',
                        get: function () {
                          var t
                          return null !== (t = this.partList) && void 0 !== t && t.length
                            ? this.partList[this.partList.length - 1].index
                            : -1
                        },
                      },
                      {
                        key: 'lastPartSn',
                        get: function () {
                          var t
                          return null !== (t = this.partList) && void 0 !== t && t.length
                            ? this.partList[this.partList.length - 1].fragment.sn
                            : this.endSN
                        },
                      },
                    ]) && n(e.prototype, r),
                    s && n(e, s),
                    t
                  )
                })()
              },
            './src/loader/level-key.ts':
              /*!*********************************!*\
  !*** ./src/loader/level-key.ts ***!
  \*********************************/
              /*! exports provided: LevelKey */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'LevelKey', function () {
                    return s
                  })
                var i = r(/*! url-toolkit */ './node_modules/url-toolkit/src/url-toolkit.js')
                function n(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var s = (function () {
                  function t(t, e) {
                    ;(this._uri = null),
                      (this.method = null),
                      (this.keyFormat = null),
                      (this.keyFormatVersions = null),
                      (this.keyID = null),
                      (this.key = null),
                      (this.iv = null),
                      (this._uri = e ? Object(i.buildAbsoluteURL)(t, e, { alwaysNormalize: !0 }) : t)
                  }
                  var e, r, s
                  return (
                    (t.fromURL = function (e, r) {
                      return new t(e, r)
                    }),
                    (t.fromURI = function (e) {
                      return new t(e)
                    }),
                    (e = t),
                    (r = [
                      {
                        key: 'uri',
                        get: function () {
                          return this._uri
                        },
                      },
                    ]) && n(e.prototype, r),
                    s && n(e, s),
                    t
                  )
                })()
              },
            './src/loader/load-stats.ts':
              /*!**********************************!*\
  !*** ./src/loader/load-stats.ts ***!
  \**********************************/
              /*! exports provided: LoadStats */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'LoadStats', function () {
                    return i
                  })
                var i = function () {
                  ;(this.aborted = !1),
                    (this.loaded = 0),
                    (this.retry = 0),
                    (this.total = 0),
                    (this.chunkCount = 0),
                    (this.bwEstimate = 0),
                    (this.loading = { start: 0, first: 0, end: 0 }),
                    (this.parsing = { start: 0, end: 0 }),
                    (this.buffering = { start: 0, first: 0, end: 0 })
                }
              },
            './src/loader/m3u8-parser.ts':
              /*!***********************************!*\
  !*** ./src/loader/m3u8-parser.ts ***!
  \***********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return p
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! url-toolkit */ './node_modules/url-toolkit/src/url-toolkit.js'),
                  s = r(/*! ./fragment */ './src/loader/fragment.ts'),
                  a = r(/*! ./level-details */ './src/loader/level-details.ts'),
                  o = r(/*! ./level-key */ './src/loader/level-key.ts'),
                  l = r(/*! ../utils/attr-list */ './src/utils/attr-list.ts'),
                  u = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  c = r(/*! ../utils/codecs */ './src/utils/codecs.ts'),
                  d =
                    /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
                  h = /#EXT-X-MEDIA:(.*)/g,
                  f = new RegExp(
                    [
                      /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
                      /(?!#) *(\S[\S ]*)/.source,
                      /#EXT-X-BYTERANGE:*(.+)/.source,
                      /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
                      /#.*/.source,
                    ].join('|'),
                    'g',
                  ),
                  g = new RegExp(
                    [
                      /#(EXTM3U)/.source,
                      /#EXT-X-(PLAYLIST-TYPE):(.+)/.source,
                      /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,
                      /#EXT-X-(SKIP):(.+)/.source,
                      /#EXT-X-(TARGETDURATION): *(\d+)/.source,
                      /#EXT-X-(KEY):(.+)/.source,
                      /#EXT-X-(START):(.+)/.source,
                      /#EXT-X-(ENDLIST)/.source,
                      /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,
                      /#EXT-X-(DIS)CONTINUITY/.source,
                      /#EXT-X-(VERSION):(\d+)/.source,
                      /#EXT-X-(MAP):(.+)/.source,
                      /#EXT-X-(SERVER-CONTROL):(.+)/.source,
                      /#EXT-X-(PART-INF):(.+)/.source,
                      /#EXT-X-(GAP)/.source,
                      /#EXT-X-(BITRATE):\s*(\d+)/.source,
                      /#EXT-X-(PART):(.+)/.source,
                      /#EXT-X-(PRELOAD-HINT):(.+)/.source,
                      /#EXT-X-(RENDITION-REPORT):(.+)/.source,
                      /(#)([^:]*):(.*)/.source,
                      /(#)(.*)(?:.*)\r?\n?/.source,
                    ].join('|'),
                  ),
                  v = /\.(mp4|m4s|m4v|m4a)$/i,
                  p = (function () {
                    function t() {}
                    return (
                      (t.findGroup = function (t, e) {
                        for (var r = 0; r < t.length; r++) {
                          var i = t[r]
                          if (i.id === e) return i
                        }
                      }),
                      (t.convertAVC1ToAVCOTI = function (t) {
                        var e = t.split('.')
                        if (e.length > 2) {
                          var r = e.shift() + '.'
                          return (
                            (r += parseInt(e.shift()).toString(16)),
                            (r += ('000' + parseInt(e.shift()).toString(16)).substr(-4))
                          )
                        }
                        return t
                      }),
                      (t.resolve = function (t, e) {
                        return n.buildAbsoluteURL(e, t, { alwaysNormalize: !0 })
                      }),
                      (t.parseMasterPlaylist = function (e, r) {
                        var i,
                          n = [],
                          s = {},
                          a = !1
                        for (d.lastIndex = 0; null != (i = d.exec(e)); )
                          if (i[1]) {
                            var o = new l.AttrList(i[1]),
                              u = {
                                attrs: o,
                                bitrate: o.decimalInteger('AVERAGE-BANDWIDTH') || o.decimalInteger('BANDWIDTH'),
                                name: o.NAME,
                                url: t.resolve(i[2], r),
                              },
                              c = o.decimalResolution('RESOLUTION')
                            c && ((u.width = c.width), (u.height = c.height)),
                              m(
                                (o.CODECS || '').split(/[ ,]+/).filter(function (t) {
                                  return t
                                }),
                                u,
                              ),
                              u.videoCodec &&
                                -1 !== u.videoCodec.indexOf('avc1') &&
                                (u.videoCodec = t.convertAVC1ToAVCOTI(u.videoCodec)),
                              n.push(u)
                          } else if (i[3]) {
                            var h = new l.AttrList(i[3])
                            h['DATA-ID'] && ((a = !0), (s[h['DATA-ID']] = h))
                          }
                        return { levels: n, sessionData: a ? s : null }
                      }),
                      (t.parseMasterPlaylistMedia = function (e, r, i, n) {
                        var s
                        void 0 === n && (n = [])
                        var a = [],
                          o = 0
                        for (h.lastIndex = 0; null !== (s = h.exec(e)); ) {
                          var u = new l.AttrList(s[1])
                          if (u.TYPE === i) {
                            var c = {
                              attrs: u,
                              bitrate: 0,
                              id: o++,
                              groupId: u['GROUP-ID'],
                              instreamId: u['INSTREAM-ID'],
                              name: u.NAME || u.LANGUAGE || '',
                              type: i,
                              default: u.bool('DEFAULT'),
                              autoselect: u.bool('AUTOSELECT'),
                              forced: u.bool('FORCED'),
                              lang: u.LANGUAGE,
                              url: u.URI ? t.resolve(u.URI, r) : '',
                            }
                            if (n.length) {
                              var d = t.findGroup(n, c.groupId) || n[0]
                              y(c, d, 'audioCodec'), y(c, d, 'textCodec')
                            }
                            a.push(c)
                          }
                        }
                        return a
                      }),
                      (t.parseLevelPlaylist = function (t, e, r, c, d) {
                        var h,
                          p,
                          m,
                          y = new a.LevelDetails(e),
                          T = y.fragments,
                          S = null,
                          b = 0,
                          L = 0,
                          A = 0,
                          D = 0,
                          R = null,
                          k = new s.Fragment(c, e),
                          _ = -1,
                          I = !1
                        for (f.lastIndex = 0, y.m3u8 = t; null !== (h = f.exec(t)); ) {
                          I &&
                            ((I = !1),
                            ((k = new s.Fragment(c, e)).start = A),
                            (k.sn = b),
                            (k.cc = D),
                            (k.level = r),
                            S && ((k.initSegment = S), (k.rawProgramDateTime = S.rawProgramDateTime)))
                          var C = h[1]
                          if (C) {
                            k.duration = parseFloat(C)
                            var O = (' ' + h[2]).slice(1)
                            ;(k.title = O || null), k.tagList.push(O ? ['INF', C, O] : ['INF', C])
                          } else if (h[3])
                            Object(i.isFiniteNumber)(k.duration) &&
                              ((k.start = A),
                              m && (k.levelkey = m),
                              (k.sn = b),
                              (k.level = r),
                              (k.cc = D),
                              (k.urlId = d),
                              T.push(k),
                              (k.relurl = (' ' + h[3]).slice(1)),
                              E(k, R),
                              (R = k),
                              (A += k.duration),
                              b++,
                              (L = 0),
                              (I = !0))
                          else if (h[4]) {
                            var w = (' ' + h[4]).slice(1)
                            R ? k.setByteRange(w, R) : k.setByteRange(w)
                          } else if (h[5])
                            (k.rawProgramDateTime = (' ' + h[5]).slice(1)),
                              k.tagList.push(['PROGRAM-DATE-TIME', k.rawProgramDateTime]),
                              -1 === _ && (_ = T.length)
                          else {
                            if (!(h = h[0].match(g))) {
                              u.logger.warn('No matches on slow regex match for level playlist!')
                              continue
                            }
                            for (p = 1; p < h.length && void 0 === h[p]; p++);
                            var x = (' ' + h[p]).slice(1),
                              P = (' ' + h[p + 1]).slice(1),
                              F = h[p + 2] ? (' ' + h[p + 2]).slice(1) : ''
                            switch (x) {
                              case 'PLAYLIST-TYPE':
                                y.type = P.toUpperCase()
                                break
                              case 'MEDIA-SEQUENCE':
                                b = y.startSN = parseInt(P)
                                break
                              case 'SKIP':
                                var M = new l.AttrList(P),
                                  N = M.decimalInteger('SKIPPED-SEGMENTS')
                                if (Object(i.isFiniteNumber)(N)) {
                                  y.skippedSegments = N
                                  for (var U = N; U--; ) T.unshift(null)
                                  b += N
                                }
                                var B = M.enumeratedString('RECENTLY-REMOVED-DATERANGES')
                                B && (y.recentlyRemovedDateranges = B.split('\t'))
                                break
                              case 'TARGETDURATION':
                                y.targetduration = parseFloat(P)
                                break
                              case 'VERSION':
                                y.version = parseInt(P)
                                break
                              case 'EXTM3U':
                                break
                              case 'ENDLIST':
                                y.live = !1
                                break
                              case '#':
                                ;(P || F) && k.tagList.push(F ? [P, F] : [P])
                                break
                              case 'DIS':
                                D++
                              case 'GAP':
                                k.tagList.push([x])
                                break
                              case 'BITRATE':
                                k.tagList.push([x, P])
                                break
                              case 'DISCONTINUITY-SEQ':
                                D = parseInt(P)
                                break
                              case 'KEY':
                                var G,
                                  j = new l.AttrList(P),
                                  K = j.enumeratedString('METHOD'),
                                  H = j.URI,
                                  V = j.hexadecimalInteger('IV'),
                                  W = j.enumeratedString('KEYFORMATVERSIONS'),
                                  Y = j.enumeratedString('KEYID'),
                                  q = null != (G = j.enumeratedString('KEYFORMAT')) ? G : 'identity'
                                if (
                                  [
                                    'com.apple.streamingkeydelivery',
                                    'com.microsoft.playready',
                                    'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
                                    'com.widevine',
                                  ].indexOf(q) > -1
                                ) {
                                  u.logger.warn('Keyformat ' + q + ' is not supported from the manifest')
                                  continue
                                }
                                if ('identity' !== q) continue
                                K &&
                                  ((m = o.LevelKey.fromURL(e, H)),
                                  H &&
                                    ['AES-128', 'SAMPLE-AES', 'SAMPLE-AES-CENC'].indexOf(K) >= 0 &&
                                    ((m.method = K),
                                    (m.keyFormat = q),
                                    Y && (m.keyID = Y),
                                    W && (m.keyFormatVersions = W),
                                    (m.iv = V)))
                                break
                              case 'START':
                                var X = new l.AttrList(P).decimalFloatingPoint('TIME-OFFSET')
                                Object(i.isFiniteNumber)(X) && (y.startTimeOffset = X)
                                break
                              case 'MAP':
                                var z = new l.AttrList(P)
                                ;(k.relurl = z.URI),
                                  z.BYTERANGE && k.setByteRange(z.BYTERANGE),
                                  (k.level = r),
                                  (k.sn = 'initSegment'),
                                  m && (k.levelkey = m),
                                  (k.initSegment = null),
                                  (S = k),
                                  (I = !0)
                                break
                              case 'SERVER-CONTROL':
                                var Q = new l.AttrList(P)
                                ;(y.canBlockReload = Q.bool('CAN-BLOCK-RELOAD')),
                                  (y.canSkipUntil = Q.optionalFloat('CAN-SKIP-UNTIL', 0)),
                                  (y.canSkipDateRanges = y.canSkipUntil > 0 && Q.bool('CAN-SKIP-DATERANGES')),
                                  (y.partHoldBack = Q.optionalFloat('PART-HOLD-BACK', 0)),
                                  (y.holdBack = Q.optionalFloat('HOLD-BACK', 0))
                                break
                              case 'PART-INF':
                                var $ = new l.AttrList(P)
                                y.partTarget = $.decimalFloatingPoint('PART-TARGET')
                                break
                              case 'PART':
                                var J = y.partList
                                J || (J = y.partList = [])
                                var Z = L > 0 ? J[J.length - 1] : void 0,
                                  tt = L++,
                                  et = new s.Part(new l.AttrList(P), k, e, tt, Z)
                                J.push(et), (k.duration += et.duration)
                                break
                              case 'PRELOAD-HINT':
                                var rt = new l.AttrList(P)
                                y.preloadHint = rt
                                break
                              case 'RENDITION-REPORT':
                                var it = new l.AttrList(P)
                                ;(y.renditionReports = y.renditionReports || []), y.renditionReports.push(it)
                                break
                              default:
                                u.logger.warn('line parsed but not handled: ' + h)
                            }
                          }
                        }
                        R && !R.relurl
                          ? (T.pop(), (A -= R.duration), y.partList && (y.fragmentHint = R))
                          : y.partList && (E(k, R), (k.cc = D), (y.fragmentHint = k))
                        var nt = T.length,
                          st = T[0],
                          at = T[nt - 1]
                        if ((A += y.skippedSegments * y.targetduration) > 0 && nt && at) {
                          y.averagetargetduration = A / nt
                          var ot = at.sn
                          ;(y.endSN = 'initSegment' !== ot ? ot : 0),
                            st &&
                              ((y.startCC = st.cc),
                              st.initSegment ||
                                (y.fragments.every(function (t) {
                                  return (
                                    t.relurl &&
                                    ((e = t.relurl),
                                    v.test(
                                      null != (r = null === (i = n.parseURL(e)) || void 0 === i ? void 0 : i.path)
                                        ? r
                                        : '',
                                    ))
                                  )
                                  var e, r, i
                                }) &&
                                  (u.logger.warn(
                                    'MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX',
                                  ),
                                  ((k = new s.Fragment(c, e)).relurl = at.relurl),
                                  (k.level = r),
                                  (k.sn = 'initSegment'),
                                  (st.initSegment = k),
                                  (y.needSidxRanges = !0))))
                        } else (y.endSN = 0), (y.startCC = 0)
                        return (
                          y.fragmentHint && (A += y.fragmentHint.duration),
                          (y.totalduration = A),
                          (y.endCC = D),
                          _ > 0 &&
                            (function (t, e) {
                              for (var r = t[e], i = e; i--; ) {
                                var n = t[i]
                                if (!n) return
                                ;(n.programDateTime = r.programDateTime - 1e3 * n.duration), (r = n)
                              }
                            })(T, _),
                          y
                        )
                      }),
                      t
                    )
                  })()
                function m(t, e) {
                  ;['video', 'audio', 'text'].forEach(function (r) {
                    var i = t.filter(function (t) {
                      return Object(c.isCodecType)(t, r)
                    })
                    if (i.length) {
                      var n = i.filter(function (t) {
                        return 0 === t.lastIndexOf('avc1', 0) || 0 === t.lastIndexOf('mp4a', 0)
                      })
                      ;(e[r + 'Codec'] = n.length > 0 ? n[0] : i[0]),
                        (t = t.filter(function (t) {
                          return -1 === i.indexOf(t)
                        }))
                    }
                  }),
                    (e.unknownCodecs = t)
                }
                function y(t, e, r) {
                  var i = e[r]
                  i && (t[r] = i)
                }
                function E(t, e) {
                  t.rawProgramDateTime
                    ? (t.programDateTime = Date.parse(t.rawProgramDateTime))
                    : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime),
                    Object(i.isFiniteNumber)(t.programDateTime) ||
                      ((t.programDateTime = null), (t.rawProgramDateTime = null))
                }
              },
            './src/loader/playlist-loader.ts':
              /*!***************************************!*\
  !*** ./src/loader/playlist-loader.ts ***!
  \***************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../events */ './src/events.ts'),
                  s = r(/*! ../errors */ './src/errors.ts'),
                  a = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  o = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  l = r(/*! ./m3u8-parser */ './src/loader/m3u8-parser.ts'),
                  u = r(/*! ./resource-types */ './src/loader/resource-types.js'),
                  c = r(/*! ../types/loader */ './src/types/loader.ts'),
                  d = r(/*! ../utils/attr-list */ './src/utils/attr-list.ts')
                function h(t, e) {
                  var r = t.url
                  return (void 0 !== r && 0 !== r.indexOf('data:')) || (r = e.url), r
                }
                var f = (function () {
                  function t(t) {
                    ;(this.hls = void 0), (this.loaders = Object.create(null)), (this.hls = t), this.registerListeners()
                  }
                  var e = t.prototype
                  return (
                    (e.registerListeners = function () {
                      var t = this.hls
                      t.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.on(n.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.on(n.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                        t.on(n.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                    }),
                    (e.unregisterListeners = function () {
                      var t = this.hls
                      t.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                        t.off(n.Events.LEVEL_LOADING, this.onLevelLoading, this),
                        t.off(n.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                        t.off(n.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                    }),
                    (e.createInternalLoader = function (t) {
                      var e = this.hls.config,
                        r = e.pLoader,
                        i = e.loader,
                        n = new (r || i)(e)
                      return (t.loader = n), (this.loaders[t.type] = n), n
                    }),
                    (e.getInternalLoader = function (t) {
                      return this.loaders[t.type]
                    }),
                    (e.resetInternalLoader = function (t) {
                      this.loaders[t] && delete this.loaders[t]
                    }),
                    (e.destroyInternalLoaders = function () {
                      for (var t in this.loaders) {
                        var e = this.loaders[t]
                        e && e.destroy(), this.resetInternalLoader(t)
                      }
                    }),
                    (e.destroy = function () {
                      this.unregisterListeners(), this.destroyInternalLoaders()
                    }),
                    (e.onManifestLoading = function (t, e) {
                      var r = e.url
                      this.load({
                        id: null,
                        groupId: null,
                        level: 0,
                        responseType: 'text',
                        type: c.PlaylistContextType.MANIFEST,
                        url: r,
                        deliveryDirectives: null,
                      })
                    }),
                    (e.onLevelLoading = function (t, e) {
                      var r = e.id,
                        i = e.level,
                        n = e.url,
                        s = e.deliveryDirectives
                      this.load({
                        id: r,
                        groupId: null,
                        level: i,
                        responseType: 'text',
                        type: c.PlaylistContextType.LEVEL,
                        url: n,
                        deliveryDirectives: s,
                      })
                    }),
                    (e.onAudioTrackLoading = function (t, e) {
                      var r = e.id,
                        i = e.groupId,
                        n = e.url,
                        s = e.deliveryDirectives
                      this.load({
                        id: r,
                        groupId: i,
                        level: null,
                        responseType: 'text',
                        type: c.PlaylistContextType.AUDIO_TRACK,
                        url: n,
                        deliveryDirectives: s,
                      })
                    }),
                    (e.onSubtitleTrackLoading = function (t, e) {
                      var r = e.id,
                        i = e.groupId,
                        n = e.url,
                        s = e.deliveryDirectives
                      this.load({
                        id: r,
                        groupId: i,
                        level: null,
                        responseType: 'text',
                        type: c.PlaylistContextType.SUBTITLE_TRACK,
                        url: n,
                        deliveryDirectives: s,
                      })
                    }),
                    (e.load = function (t) {
                      var e,
                        r,
                        i,
                        n,
                        s,
                        o,
                        l = this.hls.config,
                        d = this.getInternalLoader(t)
                      if (d) {
                        var h = d.context
                        if (h && h.url === t.url)
                          return void a.logger.trace('[playlist-loader]: playlist request ongoing')
                        a.logger.log('[playlist-loader]: aborting previous loader for type: ' + t.type), d.abort()
                      }
                      switch (t.type) {
                        case c.PlaylistContextType.MANIFEST:
                          ;(r = l.manifestLoadingMaxRetry),
                            (i = l.manifestLoadingTimeOut),
                            (n = l.manifestLoadingRetryDelay),
                            (s = l.manifestLoadingMaxRetryTimeout)
                          break
                        case c.PlaylistContextType.LEVEL:
                        case c.PlaylistContextType.AUDIO_TRACK:
                        case c.PlaylistContextType.SUBTITLE_TRACK:
                          ;(r = 0), (i = l.levelLoadingTimeOut)
                          break
                        default:
                          ;(r = l.levelLoadingMaxRetry),
                            (i = l.levelLoadingTimeOut),
                            (n = l.levelLoadingRetryDelay),
                            (s = l.levelLoadingMaxRetryTimeout)
                      }
                      if (
                        ((d = this.createInternalLoader(t)),
                        null !== (e = t.deliveryDirectives) &&
                          void 0 !== e &&
                          e.part &&
                          (t.type === c.PlaylistContextType.LEVEL && null !== t.level
                            ? (o = this.hls.levels[t.level].details)
                            : t.type === c.PlaylistContextType.AUDIO_TRACK && null !== t.id
                            ? (o = this.hls.audioTracks[t.id].details)
                            : t.type === c.PlaylistContextType.SUBTITLE_TRACK &&
                              null !== t.id &&
                              (o = this.hls.subtitleTracks[t.id].details),
                          o))
                      ) {
                        var f = o.partTarget,
                          g = o.targetduration
                        f && g && (i = Math.min(1e3 * Math.max(3 * f, 0.8 * g), i))
                      }
                      var v = {
                          timeout: i,
                          maxRetry: r,
                          retryDelay: n,
                          maxRetryDelay: s,
                          highWaterMark: 0,
                          type: u.ResourceTypes.PLAYLIST,
                        },
                        p = {
                          onSuccess: this.loadsuccess.bind(this),
                          onError: this.loaderror.bind(this),
                          onTimeout: this.loadtimeout.bind(this),
                        }
                      d.load(t, v, p)
                    }),
                    (e.loadsuccess = function (t, e, r, i) {
                      if ((void 0 === i && (i = null), r.isSidxRequest))
                        return this.handleSidxRequest(t, r), void this.handlePlaylistLoaded(t, e, r, i)
                      this.resetInternalLoader(r.type)
                      var n = t.data
                      0 === n.indexOf('#EXTM3U')
                        ? ((e.parsing.start = performance.now()),
                          n.indexOf('#EXTINF:') > 0 || n.indexOf('#EXT-X-TARGETDURATION:') > 0
                            ? this.handleTrackOrLevelPlaylist(t, e, r, i)
                            : this.handleMasterPlaylist(t, e, r, i))
                        : this.handleManifestParsingError(t, r, 'no EXTM3U delimiter', i)
                    }),
                    (e.loaderror = function (t, e, r) {
                      void 0 === r && (r = null), this.handleNetworkError(e, r, !1, t)
                    }),
                    (e.loadtimeout = function (t, e, r) {
                      void 0 === r && (r = null), this.handleNetworkError(e, r, !0)
                    }),
                    (e.handleMasterPlaylist = function (t, e, r, i) {
                      var s = this.hls,
                        o = t.data,
                        u = h(t, r),
                        c = l.default.parseMasterPlaylist(o, u),
                        f = c.levels,
                        g = c.sessionData
                      if (f.length) {
                        var v = f.map(function (t) {
                            return { id: t.attrs.AUDIO, audioCodec: t.audioCodec }
                          }),
                          p = f.map(function (t) {
                            return { id: t.attrs.SUBTITLES, textCodec: t.textCodec }
                          }),
                          m = l.default.parseMasterPlaylistMedia(o, u, 'AUDIO', v),
                          y = l.default.parseMasterPlaylistMedia(o, u, 'SUBTITLES', p),
                          E = l.default.parseMasterPlaylistMedia(o, u, 'CLOSED-CAPTIONS')
                        m.length &&
                          (m.some(function (t) {
                            return !t.url
                          }) ||
                            !f[0].audioCodec ||
                            f[0].attrs.AUDIO ||
                            (a.logger.log(
                              '[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one',
                            ),
                            m.unshift({
                              type: 'main',
                              name: 'main',
                              default: !1,
                              autoselect: !1,
                              forced: !1,
                              id: -1,
                              attrs: new d.AttrList({}),
                              bitrate: 0,
                              url: '',
                            }))),
                          s.trigger(n.Events.MANIFEST_LOADED, {
                            levels: f,
                            audioTracks: m,
                            subtitles: y,
                            captions: E,
                            url: u,
                            stats: e,
                            networkDetails: i,
                            sessionData: g,
                          })
                      } else this.handleManifestParsingError(t, r, 'no level found in manifest', i)
                    }),
                    (e.handleTrackOrLevelPlaylist = function (t, e, r, a) {
                      var o = this.hls,
                        u = r.id,
                        f = r.level,
                        g = r.type,
                        v = h(t, r),
                        p = Object(i.isFiniteNumber)(u) ? u : 0,
                        m = Object(i.isFiniteNumber)(f) ? f : p,
                        y = (function (t) {
                          switch (t.type) {
                            case c.PlaylistContextType.AUDIO_TRACK:
                              return c.PlaylistLevelType.AUDIO
                            case c.PlaylistContextType.SUBTITLE_TRACK:
                              return c.PlaylistLevelType.SUBTITLE
                            default:
                              return c.PlaylistLevelType.MAIN
                          }
                        })(r),
                        E = l.default.parseLevelPlaylist(t.data, v, m, y, p)
                      if (E.fragments.length) {
                        if (g === c.PlaylistContextType.MANIFEST) {
                          var T = { attrs: new d.AttrList({}), bitrate: 0, details: E, name: '', url: v }
                          o.trigger(n.Events.MANIFEST_LOADED, {
                            levels: [T],
                            audioTracks: [],
                            url: v,
                            stats: e,
                            networkDetails: a,
                            sessionData: null,
                          })
                        }
                        if (((e.parsing.end = performance.now()), E.needSidxRanges)) {
                          var S,
                            b = null === (S = E.fragments[0].initSegment) || void 0 === S ? void 0 : S.url
                          this.load({
                            url: b,
                            isSidxRequest: !0,
                            type: g,
                            level: f,
                            levelDetails: E,
                            id: u,
                            groupId: null,
                            rangeStart: 0,
                            rangeEnd: 2048,
                            responseType: 'arraybuffer',
                            deliveryDirectives: null,
                          })
                        } else (r.levelDetails = E), this.handlePlaylistLoaded(t, e, r, a)
                      } else
                        o.trigger(n.Events.ERROR, {
                          type: s.ErrorTypes.NETWORK_ERROR,
                          details: s.ErrorDetails.LEVEL_EMPTY_ERROR,
                          fatal: !1,
                          url: v,
                          reason: 'no fragments found in level',
                          level: 'number' == typeof r.level ? r.level : void 0,
                        })
                    }),
                    (e.handleSidxRequest = function (t, e) {
                      var r = Object(o.parseSegmentIndex)(new Uint8Array(t.data))
                      if (r) {
                        var i = r.references,
                          n = e.levelDetails
                        i.forEach(function (t, e) {
                          var i = t.info,
                            s = n.fragments[e]
                          0 === s.byteRange.length &&
                            s.setByteRange(String(1 + i.end - i.start) + '@' + String(i.start)),
                            s.initSegment && s.initSegment.setByteRange(String(r.moovEndOffset) + '@0')
                        })
                      }
                    }),
                    (e.handleManifestParsingError = function (t, e, r, i) {
                      this.hls.trigger(n.Events.ERROR, {
                        type: s.ErrorTypes.NETWORK_ERROR,
                        details: s.ErrorDetails.MANIFEST_PARSING_ERROR,
                        fatal: e.type === c.PlaylistContextType.MANIFEST,
                        url: t.url,
                        reason: r,
                        response: t,
                        context: e,
                        networkDetails: i,
                      })
                    }),
                    (e.handleNetworkError = function (t, e, r, i) {
                      void 0 === r && (r = !1),
                        a.logger.warn(
                          '[playlist-loader]: A network ' +
                            (r ? 'timeout' : 'error') +
                            ' occurred while loading ' +
                            t.type +
                            ' level: ' +
                            t.level +
                            ' id: ' +
                            t.id +
                            ' group-id: "' +
                            t.groupId +
                            '"',
                        )
                      var o = s.ErrorDetails.UNKNOWN,
                        l = !1,
                        u = this.getInternalLoader(t)
                      switch (t.type) {
                        case c.PlaylistContextType.MANIFEST:
                          ;(o = r ? s.ErrorDetails.MANIFEST_LOAD_TIMEOUT : s.ErrorDetails.MANIFEST_LOAD_ERROR), (l = !0)
                          break
                        case c.PlaylistContextType.LEVEL:
                          ;(o = r ? s.ErrorDetails.LEVEL_LOAD_TIMEOUT : s.ErrorDetails.LEVEL_LOAD_ERROR), (l = !1)
                          break
                        case c.PlaylistContextType.AUDIO_TRACK:
                          ;(o = r ? s.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR),
                            (l = !1)
                          break
                        case c.PlaylistContextType.SUBTITLE_TRACK:
                          ;(o = r ? s.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : s.ErrorDetails.SUBTITLE_LOAD_ERROR),
                            (l = !1)
                      }
                      u && this.resetInternalLoader(t.type)
                      var d = {
                        type: s.ErrorTypes.NETWORK_ERROR,
                        details: o,
                        fatal: l,
                        url: t.url,
                        loader: u,
                        context: t,
                        networkDetails: e,
                      }
                      i && (d.response = i), this.hls.trigger(n.Events.ERROR, d)
                    }),
                    (e.handlePlaylistLoaded = function (t, e, r, i) {
                      var s = r.type,
                        a = r.level,
                        o = r.id,
                        l = r.groupId,
                        u = r.loader,
                        d = r.levelDetails,
                        h = r.deliveryDirectives
                      if (null != d && d.targetduration) {
                        if (u)
                          switch (
                            (d.live &&
                              (u.getCacheAge && (d.ageHeader = u.getCacheAge() || 0),
                              (u.getCacheAge && !isNaN(d.ageHeader)) || (d.ageHeader = 0)),
                            s)
                          ) {
                            case c.PlaylistContextType.MANIFEST:
                            case c.PlaylistContextType.LEVEL:
                              this.hls.trigger(n.Events.LEVEL_LOADED, {
                                details: d,
                                level: a || 0,
                                id: o || 0,
                                stats: e,
                                networkDetails: i,
                                deliveryDirectives: h,
                              })
                              break
                            case c.PlaylistContextType.AUDIO_TRACK:
                              this.hls.trigger(n.Events.AUDIO_TRACK_LOADED, {
                                details: d,
                                id: o || 0,
                                groupId: l || '',
                                stats: e,
                                networkDetails: i,
                                deliveryDirectives: h,
                              })
                              break
                            case c.PlaylistContextType.SUBTITLE_TRACK:
                              this.hls.trigger(n.Events.SUBTITLE_TRACK_LOADED, {
                                details: d,
                                id: o || 0,
                                groupId: l || '',
                                stats: e,
                                networkDetails: i,
                                deliveryDirectives: h,
                              })
                          }
                      } else this.handleManifestParsingError(t, r, 'invalid target duration', i)
                    }),
                    t
                  )
                })()
                e.default = f
              },
            './src/loader/resource-types.js':
              /*!**************************************!*\
  !*** ./src/loader/resource-types.js ***!
  \**************************************/
              /*! exports provided: ResourceTypes */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'ResourceTypes', function () {
                    return i
                  })
                var i = { PLAYLIST: 'playlist', FRAGMENT: 'fragment', KEY: 'key' }
              },
            './src/polyfills/number.ts':
              /*!*********************************!*\
  !*** ./src/polyfills/number.ts ***!
  \*********************************/
              /*! exports provided: isFiniteNumber, MAX_SAFE_INTEGER */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'isFiniteNumber', function () {
                    return i
                  }),
                  r.d(e, 'MAX_SAFE_INTEGER', function () {
                    return n
                  })
                var i =
                    Number.isFinite ||
                    function (t) {
                      return 'number' == typeof t && isFinite(t)
                    },
                  n = Number.MAX_SAFE_INTEGER || 9007199254740991
              },
            './src/remux/aac-helper.ts':
              /*!*********************************!*\
  !*** ./src/remux/aac-helper.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = (function () {
                  function t() {}
                  return (
                    (t.getSilentFrame = function (t, e) {
                      switch (t) {
                        case 'mp4a.40.2':
                          if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128])
                          if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128])
                          if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142])
                          if (4 === e)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56,
                            ])
                          if (5 === e)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56,
                            ])
                          if (6 === e)
                            return new Uint8Array([
                              0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0,
                              32, 8, 224,
                            ])
                          break
                        default:
                          if (1 === e)
                            return new Uint8Array([
                              1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                            ])
                          if (2 === e)
                            return new Uint8Array([
                              1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                            ])
                          if (3 === e)
                            return new Uint8Array([
                              1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                              90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                            ])
                      }
                    }),
                    t
                  )
                })()
                e.default = i
              },
            './src/remux/mp4-generator.ts':
              /*!************************************!*\
  !*** ./src/remux/mp4-generator.ts ***!
  \************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = Math.pow(2, 32) - 1,
                  n = (function () {
                    function t() {}
                    return (
                      (t.init = function () {
                        var e
                        for (e in ((t.types = {
                          avc1: [],
                          avcC: [],
                          btrt: [],
                          dinf: [],
                          dref: [],
                          esds: [],
                          ftyp: [],
                          hdlr: [],
                          mdat: [],
                          mdhd: [],
                          mdia: [],
                          mfhd: [],
                          minf: [],
                          moof: [],
                          moov: [],
                          mp4a: [],
                          '.mp3': [],
                          mvex: [],
                          mvhd: [],
                          pasp: [],
                          sdtp: [],
                          stbl: [],
                          stco: [],
                          stsc: [],
                          stsd: [],
                          stsz: [],
                          stts: [],
                          tfdt: [],
                          tfhd: [],
                          traf: [],
                          trak: [],
                          trun: [],
                          trex: [],
                          tkhd: [],
                          vmhd: [],
                          smhd: [],
                        }),
                        t.types))
                          t.types.hasOwnProperty(e) &&
                            (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)])
                        var r = new Uint8Array([
                            0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105,
                            100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
                          ]),
                          i = new Uint8Array([
                            0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111,
                            117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
                          ])
                        t.HDLR_TYPES = { video: r, audio: i }
                        var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                          s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])
                        ;(t.STTS = t.STSC = t.STCO = s),
                          (t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                          (t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
                          (t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                          (t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]))
                        var a = new Uint8Array([105, 115, 111, 109]),
                          o = new Uint8Array([97, 118, 99, 49]),
                          l = new Uint8Array([0, 0, 0, 1])
                        ;(t.FTYP = t.box(t.types.ftyp, a, l, a, o)),
                          (t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n)))
                      }),
                      (t.box = function (t) {
                        for (var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                          i[n - 1] = arguments[n]
                        for (var s = i.length, a = s; s--; ) e += i[s].byteLength
                        var o = new Uint8Array(e)
                        for (
                          o[0] = (e >> 24) & 255,
                            o[1] = (e >> 16) & 255,
                            o[2] = (e >> 8) & 255,
                            o[3] = 255 & e,
                            o.set(t, 4),
                            s = 0,
                            e = 8;
                          s < a;
                          s++
                        )
                          o.set(i[s], e), (e += i[s].byteLength)
                        return o
                      }),
                      (t.hdlr = function (e) {
                        return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                      }),
                      (t.mdat = function (e) {
                        return t.box(t.types.mdat, e)
                      }),
                      (t.mdhd = function (e, r) {
                        r *= e
                        var n = Math.floor(r / (i + 1)),
                          s = Math.floor(r % (i + 1))
                        return t.box(
                          t.types.mdhd,
                          new Uint8Array([
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            2,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            3,
                            (e >> 24) & 255,
                            (e >> 16) & 255,
                            (e >> 8) & 255,
                            255 & e,
                            n >> 24,
                            (n >> 16) & 255,
                            (n >> 8) & 255,
                            255 & n,
                            s >> 24,
                            (s >> 16) & 255,
                            (s >> 8) & 255,
                            255 & s,
                            85,
                            196,
                            0,
                            0,
                          ]),
                        )
                      }),
                      (t.mdia = function (e) {
                        return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                      }),
                      (t.mfhd = function (e) {
                        return t.box(
                          t.types.mfhd,
                          new Uint8Array([0, 0, 0, 0, e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e]),
                        )
                      }),
                      (t.minf = function (e) {
                        return 'audio' === e.type
                          ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e))
                          : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                      }),
                      (t.moof = function (e, r, i) {
                        return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                      }),
                      (t.moov = function (e) {
                        for (var r = e.length, i = []; r--; ) i[r] = t.trak(e[r])
                        return t.box.apply(
                          null,
                          [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)),
                        )
                      }),
                      (t.mvex = function (e) {
                        for (var r = e.length, i = []; r--; ) i[r] = t.trex(e[r])
                        return t.box.apply(null, [t.types.mvex].concat(i))
                      }),
                      (t.mvhd = function (e, r) {
                        r *= e
                        var n = Math.floor(r / (i + 1)),
                          s = Math.floor(r % (i + 1)),
                          a = new Uint8Array([
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            2,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            3,
                            (e >> 24) & 255,
                            (e >> 16) & 255,
                            (e >> 8) & 255,
                            255 & e,
                            n >> 24,
                            (n >> 16) & 255,
                            (n >> 8) & 255,
                            255 & n,
                            s >> 24,
                            (s >> 16) & 255,
                            (s >> 8) & 255,
                            255 & s,
                            0,
                            1,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            64,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            255,
                            255,
                            255,
                            255,
                          ])
                        return t.box(t.types.mvhd, a)
                      }),
                      (t.sdtp = function (e) {
                        var r,
                          i,
                          n = e.samples || [],
                          s = new Uint8Array(4 + n.length)
                        for (r = 0; r < n.length; r++)
                          (i = n[r].flags), (s[r + 4] = (i.dependsOn << 4) | (i.isDependedOn << 2) | i.hasRedundancy)
                        return t.box(t.types.sdtp, s)
                      }),
                      (t.stbl = function (e) {
                        return t.box(
                          t.types.stbl,
                          t.stsd(e),
                          t.box(t.types.stts, t.STTS),
                          t.box(t.types.stsc, t.STSC),
                          t.box(t.types.stsz, t.STSZ),
                          t.box(t.types.stco, t.STCO),
                        )
                      }),
                      (t.avc1 = function (e) {
                        var r,
                          i,
                          n,
                          s = [],
                          a = []
                        for (r = 0; r < e.sps.length; r++)
                          (n = (i = e.sps[r]).byteLength),
                            s.push((n >>> 8) & 255),
                            s.push(255 & n),
                            (s = s.concat(Array.prototype.slice.call(i)))
                        for (r = 0; r < e.pps.length; r++)
                          (n = (i = e.pps[r]).byteLength),
                            a.push((n >>> 8) & 255),
                            a.push(255 & n),
                            (a = a.concat(Array.prototype.slice.call(i)))
                        var o = t.box(
                            t.types.avcC,
                            new Uint8Array(
                              [1, s[3], s[4], s[5], 255, 224 | e.sps.length].concat(s).concat([e.pps.length]).concat(a),
                            ),
                          ),
                          l = e.width,
                          u = e.height,
                          c = e.pixelRatio[0],
                          d = e.pixelRatio[1]
                        return t.box(
                          t.types.avc1,
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            (l >> 8) & 255,
                            255 & l,
                            (u >> 8) & 255,
                            255 & u,
                            0,
                            72,
                            0,
                            0,
                            0,
                            72,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            18,
                            100,
                            97,
                            105,
                            108,
                            121,
                            109,
                            111,
                            116,
                            105,
                            111,
                            110,
                            47,
                            104,
                            108,
                            115,
                            46,
                            106,
                            115,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            24,
                            17,
                            17,
                          ]),
                          o,
                          t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
                          t.box(
                            t.types.pasp,
                            new Uint8Array([
                              c >> 24,
                              (c >> 16) & 255,
                              (c >> 8) & 255,
                              255 & c,
                              d >> 24,
                              (d >> 16) & 255,
                              (d >> 8) & 255,
                              255 & d,
                            ]),
                          ),
                        )
                      }),
                      (t.esds = function (t) {
                        var e = t.config.length
                        return new Uint8Array(
                          [0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5]
                            .concat([e])
                            .concat(t.config)
                            .concat([6, 1, 2]),
                        )
                      }),
                      (t.mp4a = function (e) {
                        var r = e.samplerate
                        return t.box(
                          t.types.mp4a,
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            e.channelCount,
                            0,
                            16,
                            0,
                            0,
                            0,
                            0,
                            (r >> 8) & 255,
                            255 & r,
                            0,
                            0,
                          ]),
                          t.box(t.types.esds, t.esds(e)),
                        )
                      }),
                      (t.mp3 = function (e) {
                        var r = e.samplerate
                        return t.box(
                          t.types['.mp3'],
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            e.channelCount,
                            0,
                            16,
                            0,
                            0,
                            0,
                            0,
                            (r >> 8) & 255,
                            255 & r,
                            0,
                            0,
                          ]),
                        )
                      }),
                      (t.stsd = function (e) {
                        return 'audio' === e.type
                          ? e.isAAC || 'mp3' !== e.codec
                            ? t.box(t.types.stsd, t.STSD, t.mp4a(e))
                            : t.box(t.types.stsd, t.STSD, t.mp3(e))
                          : t.box(t.types.stsd, t.STSD, t.avc1(e))
                      }),
                      (t.tkhd = function (e) {
                        var r = e.id,
                          n = e.duration * e.timescale,
                          s = e.width,
                          a = e.height,
                          o = Math.floor(n / (i + 1)),
                          l = Math.floor(n % (i + 1))
                        return t.box(
                          t.types.tkhd,
                          new Uint8Array([
                            1,
                            0,
                            0,
                            7,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            2,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            3,
                            (r >> 24) & 255,
                            (r >> 16) & 255,
                            (r >> 8) & 255,
                            255 & r,
                            0,
                            0,
                            0,
                            0,
                            o >> 24,
                            (o >> 16) & 255,
                            (o >> 8) & 255,
                            255 & o,
                            l >> 24,
                            (l >> 16) & 255,
                            (l >> 8) & 255,
                            255 & l,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            64,
                            0,
                            0,
                            0,
                            (s >> 8) & 255,
                            255 & s,
                            0,
                            0,
                            (a >> 8) & 255,
                            255 & a,
                            0,
                            0,
                          ]),
                        )
                      }),
                      (t.traf = function (e, r) {
                        var n = t.sdtp(e),
                          s = e.id,
                          a = Math.floor(r / (i + 1)),
                          o = Math.floor(r % (i + 1))
                        return t.box(
                          t.types.traf,
                          t.box(
                            t.types.tfhd,
                            new Uint8Array([0, 0, 0, 0, s >> 24, (s >> 16) & 255, (s >> 8) & 255, 255 & s]),
                          ),
                          t.box(
                            t.types.tfdt,
                            new Uint8Array([
                              1,
                              0,
                              0,
                              0,
                              a >> 24,
                              (a >> 16) & 255,
                              (a >> 8) & 255,
                              255 & a,
                              o >> 24,
                              (o >> 16) & 255,
                              (o >> 8) & 255,
                              255 & o,
                            ]),
                          ),
                          t.trun(e, n.length + 16 + 20 + 8 + 16 + 8 + 8),
                          n,
                        )
                      }),
                      (t.trak = function (e) {
                        return (e.duration = e.duration || 4294967295), t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                      }),
                      (t.trex = function (e) {
                        var r = e.id
                        return t.box(
                          t.types.trex,
                          new Uint8Array([
                            0,
                            0,
                            0,
                            0,
                            r >> 24,
                            (r >> 16) & 255,
                            (r >> 8) & 255,
                            255 & r,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            1,
                          ]),
                        )
                      }),
                      (t.trun = function (e, r) {
                        var i,
                          n,
                          s,
                          a,
                          o,
                          l,
                          u = e.samples || [],
                          c = u.length,
                          d = 12 + 16 * c,
                          h = new Uint8Array(d)
                        for (
                          r += 8 + d,
                            h.set(
                              [
                                0,
                                0,
                                15,
                                1,
                                (c >>> 24) & 255,
                                (c >>> 16) & 255,
                                (c >>> 8) & 255,
                                255 & c,
                                (r >>> 24) & 255,
                                (r >>> 16) & 255,
                                (r >>> 8) & 255,
                                255 & r,
                              ],
                              0,
                            ),
                            i = 0;
                          i < c;
                          i++
                        )
                          (s = (n = u[i]).duration),
                            (a = n.size),
                            (o = n.flags),
                            (l = n.cts),
                            h.set(
                              [
                                (s >>> 24) & 255,
                                (s >>> 16) & 255,
                                (s >>> 8) & 255,
                                255 & s,
                                (a >>> 24) & 255,
                                (a >>> 16) & 255,
                                (a >>> 8) & 255,
                                255 & a,
                                (o.isLeading << 2) | o.dependsOn,
                                (o.isDependedOn << 6) | (o.hasRedundancy << 4) | (o.paddingValue << 1) | o.isNonSync,
                                61440 & o.degradPrio,
                                15 & o.degradPrio,
                                (l >>> 24) & 255,
                                (l >>> 16) & 255,
                                (l >>> 8) & 255,
                                255 & l,
                              ],
                              12 + 16 * i,
                            )
                        return t.box(t.types.trun, h)
                      }),
                      (t.initSegment = function (e) {
                        t.types || t.init()
                        var r = t.moov(e),
                          i = new Uint8Array(t.FTYP.byteLength + r.byteLength)
                        return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
                      }),
                      t
                    )
                  })()
                ;(n.types = void 0),
                  (n.HDLR_TYPES = void 0),
                  (n.STTS = void 0),
                  (n.STSC = void 0),
                  (n.STCO = void 0),
                  (n.STSZ = void 0),
                  (n.VMHD = void 0),
                  (n.SMHD = void 0),
                  (n.STSD = void 0),
                  (n.FTYP = void 0),
                  (n.DINF = void 0),
                  (e.default = n)
              },
            './src/remux/mp4-remuxer.ts':
              /*!**********************************!*\
  !*** ./src/remux/mp4-remuxer.ts ***!
  \**********************************/
              /*! exports provided: default, normalizePts, flushTextTrackMetadataCueSamples, flushTextTrackUserdataCueSamples */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return v
                  }),
                  r.d(e, 'normalizePts', function () {
                    return p
                  }),
                  r.d(e, 'flushTextTrackMetadataCueSamples', function () {
                    return m
                  }),
                  r.d(e, 'flushTextTrackUserdataCueSamples', function () {
                    return y
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ./aac-helper */ './src/remux/aac-helper.ts'),
                  s = r(/*! ./mp4-generator */ './src/remux/mp4-generator.ts'),
                  a = r(/*! ../events */ './src/events.ts'),
                  o = r(/*! ../errors */ './src/errors.ts'),
                  l = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  u = r(/*! ../types/loader */ './src/types/loader.ts'),
                  c = r(/*! ../utils/timescale-conversion */ './src/utils/timescale-conversion.ts')
                function d() {
                  return (d =
                    Object.assign ||
                    function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e]
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                      }
                      return t
                    }).apply(this, arguments)
                }
                var h = null,
                  f = null,
                  g = !1,
                  v = (function () {
                    function t(t, e, r, i) {
                      if (
                        (void 0 === i && (i = ''),
                        (this.observer = void 0),
                        (this.config = void 0),
                        (this.typeSupported = void 0),
                        (this.ISGenerated = !1),
                        (this._initPTS = void 0),
                        (this._initDTS = void 0),
                        (this.nextAvcDts = null),
                        (this.nextAudioPts = null),
                        (this.isAudioContiguous = !1),
                        (this.isVideoContiguous = !1),
                        (this.observer = t),
                        (this.config = e),
                        (this.typeSupported = r),
                        (this.ISGenerated = !1),
                        null === h)
                      ) {
                        var n = (navigator.userAgent || '').match(/Chrome\/(\d+)/i)
                        h = n ? parseInt(n[1]) : 0
                      }
                      if (null === f) {
                        var s = navigator.userAgent.match(/Safari\/(\d+)/i)
                        f = s ? parseInt(s[1]) : 0
                      }
                      g = (!!h && h < 75) || (!!f && f < 600)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {}),
                      (e.resetTimeStamp = function (t) {
                        l.logger.log('[mp4-remuxer]: initPTS & initDTS reset'), (this._initPTS = this._initDTS = t)
                      }),
                      (e.resetNextTimestamp = function () {
                        l.logger.log('[mp4-remuxer]: reset next timestamp'),
                          (this.isVideoContiguous = !1),
                          (this.isAudioContiguous = !1)
                      }),
                      (e.resetInitSegment = function () {
                        l.logger.log('[mp4-remuxer]: ISGenerated flag reset'), (this.ISGenerated = !1)
                      }),
                      (e.getVideoStartPts = function (t) {
                        var e = !1,
                          r = t.reduce(function (t, r) {
                            var i = r.pts - t
                            return i < -4294967296 ? ((e = !0), p(t, r.pts)) : i > 0 ? t : r.pts
                          }, t[0].pts)
                        return e && l.logger.debug('PTS rollover detected'), r
                      }),
                      (e.remux = function (t, e, r, i, n, s, a, o) {
                        var c,
                          d,
                          h,
                          f,
                          g,
                          v,
                          E = n,
                          T = n,
                          S = t.pid > -1,
                          b = e.pid > -1,
                          L = e.samples.length,
                          A = t.samples.length > 0,
                          D = L > 1
                        if (((!S || A) && (!b || D)) || this.ISGenerated || a) {
                          this.ISGenerated || (h = this.generateIS(t, e, n))
                          var R = this.isVideoContiguous,
                            k = -1
                          if (
                            D &&
                            ((k = (function (t) {
                              for (var e = 0; e < t.length; e++) if (t[e].key) return e
                              return -1
                            })(e.samples)),
                            !R && this.config.forceKeyFrameOnDiscontinuity)
                          )
                            if (((v = !0), k > 0)) {
                              l.logger.warn(
                                '[mp4-remuxer]: Dropped ' +
                                  k +
                                  ' out of ' +
                                  L +
                                  ' video samples due to a missing keyframe',
                              )
                              var _ = this.getVideoStartPts(e.samples)
                              ;(e.samples = e.samples.slice(k)),
                                (e.dropped += k),
                                (T += (e.samples[0].pts - _) / (e.timescale || 9e4))
                            } else
                              -1 === k &&
                                (l.logger.warn('[mp4-remuxer]: No keyframe found out of ' + L + ' video samples'),
                                (v = !1))
                          if (this.ISGenerated) {
                            if (A && D) {
                              var I = this.getVideoStartPts(e.samples),
                                C = (p(t.samples[0].pts, I) - I) / e.inputTimeScale
                              ;(E += Math.max(0, C)), (T += Math.max(0, -C))
                            }
                            if (A) {
                              if (
                                (t.samplerate ||
                                  (l.logger.warn('[mp4-remuxer]: regenerate InitSegment as audio detected'),
                                  (h = this.generateIS(t, e, n))),
                                (d = this.remuxAudio(
                                  t,
                                  E,
                                  this.isAudioContiguous,
                                  s,
                                  b || D || o === u.PlaylistLevelType.AUDIO ? T : void 0,
                                )),
                                D)
                              ) {
                                var O = d ? d.endPTS - d.startPTS : 0
                                e.inputTimeScale ||
                                  (l.logger.warn('[mp4-remuxer]: regenerate InitSegment as video detected'),
                                  (h = this.generateIS(t, e, n))),
                                  (c = this.remuxVideo(e, T, R, O))
                              }
                            } else D && (c = this.remuxVideo(e, T, R, 0))
                            c && ((c.firstKeyFrame = k), (c.independent = -1 !== k))
                          }
                        }
                        return (
                          this.ISGenerated &&
                            (r.samples.length && (g = m(r, n, this._initPTS, this._initDTS)),
                            i.samples.length && (f = y(i, n, this._initPTS))),
                          { audio: d, video: c, initSegment: h, independent: v, text: f, id3: g }
                        )
                      }),
                      (e.generateIS = function (t, e, r) {
                        var n,
                          a,
                          o,
                          l = t.samples,
                          u = e.samples,
                          c = this.typeSupported,
                          d = {},
                          h = !Object(i.isFiniteNumber)(this._initPTS),
                          f = 'audio/mp4'
                        if (
                          (h && (n = a = 1 / 0),
                          t.config &&
                            l.length &&
                            ((t.timescale = t.samplerate),
                            t.isAAC || (c.mpeg ? ((f = 'audio/mpeg'), (t.codec = '')) : c.mp3 && (t.codec = 'mp3')),
                            (d.audio = {
                              id: 'audio',
                              container: f,
                              codec: t.codec,
                              initSegment: !t.isAAC && c.mpeg ? new Uint8Array(0) : s.default.initSegment([t]),
                              metadata: { channelCount: t.channelCount },
                            }),
                            h && ((o = t.inputTimeScale), (n = a = l[0].pts - Math.round(o * r)))),
                          e.sps &&
                            e.pps &&
                            u.length &&
                            ((e.timescale = e.inputTimeScale),
                            (d.video = {
                              id: 'main',
                              container: 'video/mp4',
                              codec: e.codec,
                              initSegment: s.default.initSegment([e]),
                              metadata: { width: e.width, height: e.height },
                            }),
                            h))
                        ) {
                          o = e.inputTimeScale
                          var g = this.getVideoStartPts(u),
                            v = Math.round(o * r)
                          ;(a = Math.min(a, p(u[0].dts, g) - v)), (n = Math.min(n, g - v))
                        }
                        if (Object.keys(d).length)
                          return (
                            (this.ISGenerated = !0),
                            h && ((this._initPTS = n), (this._initDTS = a)),
                            { tracks: d, initPTS: n, timescale: o }
                          )
                      }),
                      (e.remuxVideo = function (t, e, r, i) {
                        var n,
                          u,
                          f,
                          v = t.inputTimeScale,
                          m = t.samples,
                          y = [],
                          T = m.length,
                          S = this._initPTS,
                          b = this.nextAvcDts,
                          L = 8,
                          A = Number.POSITIVE_INFINITY,
                          D = Number.NEGATIVE_INFINITY,
                          R = 0,
                          k = !1
                        ;(r && null !== b) || (b = e * v - (m[0].pts - p(m[0].dts, m[0].pts)))
                        for (var _ = 0; _ < T; _++) {
                          var I = m[_]
                          ;(I.pts = p(I.pts - S, b)),
                            (I.dts = p(I.dts - S, b)),
                            I.dts > I.pts && (R = Math.max(Math.min(R, I.pts - I.dts), -18e3)),
                            I.dts < m[_ > 0 ? _ - 1 : _].dts && (k = !0)
                        }
                        k &&
                          m.sort(function (t, e) {
                            var r = t.dts - e.dts,
                              i = t.pts - e.pts
                            return r || i
                          }),
                          (u = m[0].dts),
                          (f = m[m.length - 1].dts)
                        var C = Math.round((f - u) / (T - 1))
                        if (R < 0) {
                          if (R < -2 * C) {
                            l.logger.warn(
                              'PTS < DTS detected in video samples, offsetting DTS from PTS by ' +
                                Object(c.toMsFromMpegTsClock)(-C, !0) +
                                ' ms',
                            )
                            for (var O = R, w = 0; w < T; w++)
                              (m[w].dts = O = Math.max(O, m[w].pts - C)), (m[w].pts = Math.max(O, m[w].pts))
                          } else {
                            l.logger.warn(
                              'PTS < DTS detected in video samples, shifting DTS by ' +
                                Object(c.toMsFromMpegTsClock)(R, !0) +
                                ' ms to overcome this issue',
                            )
                            for (var x = 0; x < T; x++) m[x].dts = m[x].dts + R
                          }
                          u = m[0].dts
                        }
                        if (r) {
                          var P = u - b,
                            F = P > C
                          if (F || P < -1) {
                            F
                              ? l.logger.warn(
                                  'AVC: ' +
                                    Object(c.toMsFromMpegTsClock)(P, !0) +
                                    ' ms (' +
                                    P +
                                    'dts) hole between fragments detected, filling it',
                                )
                              : l.logger.warn(
                                  'AVC: ' +
                                    Object(c.toMsFromMpegTsClock)(-P, !0) +
                                    ' ms (' +
                                    P +
                                    'dts) overlapping between fragments detected',
                                ),
                              (u = b)
                            var M = m[0].pts - P
                            ;(m[0].dts = u),
                              (m[0].pts = M),
                              l.logger.log(
                                'Video: First PTS/DTS adjusted: ' +
                                  Object(c.toMsFromMpegTsClock)(M, !0) +
                                  '/' +
                                  Object(c.toMsFromMpegTsClock)(u, !0) +
                                  ', delta: ' +
                                  Object(c.toMsFromMpegTsClock)(P, !0) +
                                  ' ms',
                              )
                          }
                        }
                        g && (u = Math.max(0, u))
                        for (var N = 0, U = 0, B = 0; B < T; B++) {
                          for (var G = m[B], j = G.units, K = j.length, H = 0, V = 0; V < K; V++) H += j[V].data.length
                          ;(U += H),
                            (N += K),
                            (G.length = H),
                            (G.dts = Math.max(G.dts, u)),
                            (G.pts = Math.max(G.pts, G.dts, 0)),
                            (A = Math.min(G.pts, A)),
                            (D = Math.max(G.pts, D))
                        }
                        f = m[T - 1].dts
                        var W,
                          Y = U + 4 * N + 8
                        try {
                          W = new Uint8Array(Y)
                        } catch (ct) {
                          return void this.observer.emit(a.Events.ERROR, a.Events.ERROR, {
                            type: o.ErrorTypes.MUX_ERROR,
                            details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: Y,
                            reason: 'fail allocating video mdat ' + Y,
                          })
                        }
                        var q = new DataView(W.buffer)
                        q.setUint32(0, Y), W.set(s.default.types.mdat, 4)
                        for (var X = 0; X < T; X++) {
                          for (var z = m[X], Q = z.units, $ = 0, J = 0, Z = Q.length; J < Z; J++) {
                            var tt = Q[J],
                              et = tt.data,
                              rt = tt.data.byteLength
                            q.setUint32(L, rt), (L += 4), W.set(et, L), (L += rt), ($ += 4 + rt)
                          }
                          if (X < T - 1) n = m[X + 1].dts - z.dts
                          else {
                            var it = this.config,
                              nt = z.dts - m[X > 0 ? X - 1 : X].dts
                            if (it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                              var st = Math.floor(it.maxBufferHole * v),
                                at = (i ? A + i * v : this.nextAudioPts) - z.pts
                              at > st
                                ? ((n = at - nt) < 0 && (n = nt),
                                  l.logger.log(
                                    '[mp4-remuxer]: It is approximately ' +
                                      at / 90 +
                                      ' ms to the next segment; using duration ' +
                                      n / 90 +
                                      ' ms for the last video frame.',
                                  ))
                                : (n = nt)
                            } else n = nt
                          }
                          var ot = Math.round(z.pts - z.dts)
                          y.push(new E(z.key, n, $, ot))
                        }
                        if (y.length && h && h < 70) {
                          var lt = y[0].flags
                          ;(lt.dependsOn = 2), (lt.isNonSync = 0)
                        }
                        ;(this.nextAvcDts = b = f + n), (this.isVideoContiguous = !0)
                        var ut = {
                          data1: s.default.moof(t.sequenceNumber++, u, d({}, t, { samples: y })),
                          data2: W,
                          startPTS: A / v,
                          endPTS: (D + n) / v,
                          startDTS: u / v,
                          endDTS: b / v,
                          type: 'video',
                          hasAudio: !1,
                          hasVideo: !0,
                          nb: y.length,
                          dropped: t.dropped,
                        }
                        return (t.samples = []), (t.dropped = 0), ut
                      }),
                      (e.remuxAudio = function (t, e, r, i, u) {
                        var c = t.inputTimeScale,
                          h = c / (t.samplerate ? t.samplerate : c),
                          f = t.isAAC ? 1024 : 1152,
                          g = f * h,
                          v = this._initPTS,
                          m = !t.isAAC && this.typeSupported.mpeg,
                          y = [],
                          T = t.samples,
                          S = m ? 0 : 8,
                          b = this.nextAudioPts || -1,
                          L = e * c
                        if (
                          ((this.isAudioContiguous = r =
                            r ||
                            (T.length &&
                              b > 0 &&
                              ((i && Math.abs(L - b) < 9e3) || Math.abs(p(T[0].pts - v, L) - b) < 20 * g))),
                          T.forEach(function (t) {
                            t.pts = p(t.pts - v, L)
                          }),
                          !r || b < 0)
                        ) {
                          if (
                            !(T = T.filter(function (t) {
                              return t.pts >= 0
                            })).length
                          )
                            return
                          b = 0 === u ? 0 : i ? Math.max(0, L) : T[0].pts
                        }
                        if (t.isAAC)
                          for (
                            var A = void 0 !== u, D = this.config.maxAudioFramesDrift, R = 0, k = b;
                            R < T.length;
                            R++
                          ) {
                            var _ = T[R],
                              I = _.pts,
                              C = I - k,
                              O = Math.abs((1e3 * C) / c)
                            if (C <= -D * g && A)
                              0 === R &&
                                (l.logger.warn(
                                  'Audio frame @ ' +
                                    (I / c).toFixed(3) +
                                    's overlaps nextAudioPts by ' +
                                    Math.round((1e3 * C) / c) +
                                    ' ms.',
                                ),
                                (this.nextAudioPts = b = k = I))
                            else if (C >= D * g && O < 1e4 && A) {
                              var w = Math.round(C / g)
                              ;(k = I - w * g) < 0 && (w--, (k += g)),
                                0 === R && (this.nextAudioPts = b = k),
                                l.logger.warn(
                                  '[mp4-remuxer]: Injecting ' +
                                    w +
                                    ' audio frame @ ' +
                                    (k / c).toFixed(3) +
                                    's due to ' +
                                    Math.round((1e3 * C) / c) +
                                    ' ms gap.',
                                )
                              for (var x = 0; x < w; x++) {
                                var P = Math.max(k, 0),
                                  F = n.default.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)
                                F ||
                                  (l.logger.log(
                                    '[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead.',
                                  ),
                                  (F = _.unit.subarray())),
                                  T.splice(R, 0, { unit: F, pts: P }),
                                  (k += g),
                                  R++
                              }
                            }
                            ;(_.pts = k), (k += g)
                          }
                        for (var M, N = null, U = null, B = 0, G = T.length; G--; ) B += T[G].unit.byteLength
                        for (var j = 0, K = T.length; j < K; j++) {
                          var H = T[j],
                            V = H.unit,
                            W = H.pts
                          if (null !== U) y[j - 1].duration = Math.round((W - U) / h)
                          else {
                            if ((r && t.isAAC && (W = b), (N = W), !(B > 0))) return
                            B += S
                            try {
                              M = new Uint8Array(B)
                            } catch (Z) {
                              return void this.observer.emit(a.Events.ERROR, a.Events.ERROR, {
                                type: o.ErrorTypes.MUX_ERROR,
                                details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: B,
                                reason: 'fail allocating audio mdat ' + B,
                              })
                            }
                            m || (new DataView(M.buffer).setUint32(0, B), M.set(s.default.types.mdat, 4))
                          }
                          M.set(V, S)
                          var Y = V.byteLength
                          ;(S += Y), y.push(new E(!0, f, Y, 0)), (U = W)
                        }
                        var q = y.length
                        if (q) {
                          var X = y[y.length - 1]
                          this.nextAudioPts = b = U + h * X.duration
                          var z = m
                            ? new Uint8Array(0)
                            : s.default.moof(t.sequenceNumber++, N / h, d({}, t, { samples: y }))
                          t.samples = []
                          var Q = N / c,
                            $ = b / c,
                            J = {
                              data1: z,
                              data2: M,
                              startPTS: Q,
                              endPTS: $,
                              startDTS: Q,
                              endDTS: $,
                              type: 'audio',
                              hasAudio: !0,
                              hasVideo: !1,
                              nb: q,
                            }
                          return (this.isAudioContiguous = !0), J
                        }
                      }),
                      (e.remuxEmptyAudio = function (t, e, r, i) {
                        var s = t.inputTimeScale,
                          a = s / (t.samplerate ? t.samplerate : s),
                          o = this.nextAudioPts,
                          u = (null !== o ? o : i.startDTS * s) + this._initDTS,
                          c = i.endDTS * s + this._initDTS,
                          d = 1024 * a,
                          h = Math.ceil((c - u) / d),
                          f = n.default.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)
                        if ((l.logger.warn('[mp4-remuxer]: remux empty Audio'), f)) {
                          for (var g = [], v = 0; v < h; v++) {
                            var p = u + v * d
                            g.push({ unit: f, pts: p, dts: p })
                          }
                          return (t.samples = g), this.remuxAudio(t, e, r, !1)
                        }
                        l.logger.trace(
                          '[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec',
                        )
                      }),
                      t
                    )
                  })()
                function p(t, e) {
                  var r
                  if (null === e) return t
                  for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296; ) t += r
                  return t
                }
                function m(t, e, r, i) {
                  var n = t.samples.length
                  if (n) {
                    for (var s = t.inputTimeScale, a = 0; a < n; a++) {
                      var o = t.samples[a]
                      ;(o.pts = p(o.pts - r, e * s) / s), (o.dts = p(o.dts - i, e * s) / s)
                    }
                    var l = t.samples
                    return (t.samples = []), { samples: l }
                  }
                }
                function y(t, e, r) {
                  var i = t.samples.length
                  if (i) {
                    for (var n = t.inputTimeScale, s = 0; s < i; s++) {
                      var a = t.samples[s]
                      a.pts = p(a.pts - r, e * n) / n
                    }
                    t.samples.sort(function (t, e) {
                      return t.pts - e.pts
                    })
                    var o = t.samples
                    return (t.samples = []), { samples: o }
                  }
                }
                var E = function (t, e, r, i) {
                    ;(this.size = void 0),
                      (this.duration = void 0),
                      (this.cts = void 0),
                      (this.flags = void 0),
                      (this.duration = e),
                      (this.size = r),
                      (this.cts = i),
                      (this.flags = new T(t))
                  },
                  T = function (t) {
                    ;(this.isLeading = 0),
                      (this.isDependedOn = 0),
                      (this.hasRedundancy = 0),
                      (this.degradPrio = 0),
                      (this.dependsOn = 1),
                      (this.isNonSync = 1),
                      (this.dependsOn = t ? 2 : 1),
                      (this.isNonSync = t ? 0 : 1)
                  }
              },
            './src/remux/passthrough-remuxer.ts':
              /*!******************************************!*\
  !*** ./src/remux/passthrough-remuxer.ts ***!
  \******************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ./mp4-remuxer */ './src/remux/mp4-remuxer.ts'),
                  s = r(/*! ../utils/mp4-tools */ './src/utils/mp4-tools.ts'),
                  a = r(/*! ../loader/fragment */ './src/loader/fragment.ts'),
                  o = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  l = (function () {
                    function t() {
                      ;(this.emitInitSegment = !1),
                        (this.audioCodec = void 0),
                        (this.videoCodec = void 0),
                        (this.initData = void 0),
                        (this.initPTS = void 0),
                        (this.initTracks = void 0),
                        (this.lastEndDTS = null)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {}),
                      (e.resetTimeStamp = function (t) {
                        ;(this.initPTS = t), (this.lastEndDTS = null)
                      }),
                      (e.resetNextTimestamp = function () {
                        this.lastEndDTS = null
                      }),
                      (e.resetInitSegment = function (t, e, r) {
                        ;(this.audioCodec = e),
                          (this.videoCodec = r),
                          this.generateInitSegment(t),
                          (this.emitInitSegment = !0)
                      }),
                      (e.generateInitSegment = function (t) {
                        var e = this.audioCodec,
                          r = this.videoCodec
                        if (!t || !t.byteLength) return (this.initTracks = void 0), void (this.initData = void 0)
                        var i = (this.initData = Object(s.parseInitSegment)(t))
                        e || (e = c(i.audio, a.ElementaryStreamTypes.AUDIO)),
                          r || (r = c(i.video, a.ElementaryStreamTypes.VIDEO))
                        var n = {}
                        i.audio && i.video
                          ? (n.audiovideo = { container: 'video/mp4', codec: e + ',' + r, initSegment: t, id: 'main' })
                          : i.audio
                          ? (n.audio = { container: 'audio/mp4', codec: e, initSegment: t, id: 'audio' })
                          : i.video
                          ? (n.video = { container: 'video/mp4', codec: r, initSegment: t, id: 'main' })
                          : o.logger.warn('[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes.'),
                          (this.initTracks = n)
                      }),
                      (e.remux = function (t, e, r, a, l) {
                        var c,
                          d = this.initPTS,
                          h = this.lastEndDTS,
                          f = { audio: void 0, video: void 0, text: a, id3: r, initSegment: void 0 }
                        Object(i.isFiniteNumber)(h) || (h = this.lastEndDTS = l || 0)
                        var g = e.samples
                        if (!g || !g.length) return f
                        var v = { initPTS: void 0, timescale: 1 },
                          p = this.initData
                        if (((p && p.length) || (this.generateInitSegment(g), (p = this.initData)), !p || !p.length))
                          return o.logger.warn('[passthrough-remuxer.ts]: Failed to generate initSegment.'), f
                        this.emitInitSegment && ((v.tracks = this.initTracks), (this.emitInitSegment = !1)),
                          Object(i.isFiniteNumber)(d) || (this.initPTS = v.initPTS = d = u(p, g, h))
                        var m = Object(s.getDuration)(g, p),
                          y = h,
                          E = m + y
                        Object(s.offsetStartDTS)(p, g, d),
                          m > 0
                            ? (this.lastEndDTS = E)
                            : (o.logger.warn('Duration parsed from mp4 should be greater than zero'),
                              this.resetNextTimestamp())
                        var T = !!p.audio,
                          S = !!p.video,
                          b = ''
                        T && (b += 'audio'), S && (b += 'video')
                        var L = {
                          data1: g,
                          startPTS: y,
                          startDTS: y,
                          endPTS: E,
                          endDTS: E,
                          type: b,
                          hasAudio: T,
                          hasVideo: S,
                          nb: 1,
                          dropped: 0,
                        }
                        ;(f.audio = 'audio' === L.type ? L : void 0),
                          (f.video = 'audio' !== L.type ? L : void 0),
                          (f.initSegment = v)
                        var A = null != (c = this.initPTS) ? c : 0
                        return (
                          (f.id3 = Object(n.flushTextTrackMetadataCueSamples)(r, l, A, A)),
                          a.samples.length && (f.text = Object(n.flushTextTrackUserdataCueSamples)(a, l, A)),
                          f
                        )
                      }),
                      t
                    )
                  })(),
                  u = function (t, e, r) {
                    return Object(s.getStartDTS)(t, e) - r
                  }
                function c(t, e) {
                  var r = null == t ? void 0 : t.codec
                  return r && r.length > 4
                    ? r
                    : 'hvc1' === r
                    ? 'hvc1.1.c.L120.90'
                    : 'av01' === r
                    ? 'av01.0.04M.08'
                    : 'avc1' === r || e === a.ElementaryStreamTypes.VIDEO
                    ? 'avc1.42e01e'
                    : 'mp4a.40.5'
                }
                e.default = l
              },
            './src/task-loop.ts':
              /*!**************************!*\
  !*** ./src/task-loop.ts ***!
  \**************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return i
                  })
                var i = (function () {
                  function t() {
                    ;(this._boundTick = void 0),
                      (this._tickTimer = null),
                      (this._tickInterval = null),
                      (this._tickCallCount = 0),
                      (this._boundTick = this.tick.bind(this))
                  }
                  var e = t.prototype
                  return (
                    (e.destroy = function () {
                      this.onHandlerDestroying(), this.onHandlerDestroyed()
                    }),
                    (e.onHandlerDestroying = function () {
                      this.clearNextTick(), this.clearInterval()
                    }),
                    (e.onHandlerDestroyed = function () {}),
                    (e.hasInterval = function () {
                      return !!this._tickInterval
                    }),
                    (e.hasNextTick = function () {
                      return !!this._tickTimer
                    }),
                    (e.setInterval = function (t) {
                      return !this._tickInterval && ((this._tickInterval = self.setInterval(this._boundTick, t)), !0)
                    }),
                    (e.clearInterval = function () {
                      return (
                        !!this._tickInterval &&
                        (self.clearInterval(this._tickInterval), (this._tickInterval = null), !0)
                      )
                    }),
                    (e.clearNextTick = function () {
                      return !!this._tickTimer && (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0)
                    }),
                    (e.tick = function () {
                      this._tickCallCount++,
                        1 === this._tickCallCount &&
                          (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), (this._tickCallCount = 0))
                    }),
                    (e.tickImmediate = function () {
                      this.clearNextTick(), (this._tickTimer = self.setTimeout(this._boundTick, 0))
                    }),
                    (e.doTick = function () {}),
                    t
                  )
                })()
              },
            './src/types/level.ts':
              /*!****************************!*\
  !*** ./src/types/level.ts ***!
  \****************************/
              /*! exports provided: HlsSkip, getSkipValue, HlsUrlParameters, Level */ function (t, e, r) {
                'use strict'
                function i(t, e) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r]
                    ;(i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      'value' in i && (i.writable = !0),
                      Object.defineProperty(t, i.key, i)
                  }
                }
                var n
                function s(t, e) {
                  var r = t.canSkipUntil,
                    i = t.canSkipDateRanges,
                    s = t.endSN
                  return r && (void 0 !== e ? e - s : 0) < r ? (i ? n.v2 : n.Yes) : n.No
                }
                r.r(e),
                  r.d(e, 'HlsSkip', function () {
                    return n
                  }),
                  r.d(e, 'getSkipValue', function () {
                    return s
                  }),
                  r.d(e, 'HlsUrlParameters', function () {
                    return a
                  }),
                  r.d(e, 'Level', function () {
                    return o
                  }),
                  (function (t) {
                    ;(t.No = ''), (t.Yes = 'YES'), (t.v2 = 'v2')
                  })(n || (n = {}))
                var a = (function () {
                    function t(t, e, r) {
                      ;(this.msn = void 0),
                        (this.part = void 0),
                        (this.skip = void 0),
                        (this.msn = t),
                        (this.part = e),
                        (this.skip = r)
                    }
                    return (
                      (t.prototype.addDirectives = function (t) {
                        var e = new self.URL(t)
                        return (
                          void 0 !== this.msn && e.searchParams.set('_HLS_msn', this.msn.toString()),
                          void 0 !== this.part && e.searchParams.set('_HLS_part', this.part.toString()),
                          this.skip && e.searchParams.set('_HLS_skip', this.skip),
                          e.toString()
                        )
                      }),
                      t
                    )
                  })(),
                  o = (function () {
                    function t(t) {
                      ;(this.attrs = void 0),
                        (this.audioCodec = void 0),
                        (this.bitrate = void 0),
                        (this.codecSet = void 0),
                        (this.height = void 0),
                        (this.id = void 0),
                        (this.name = void 0),
                        (this.videoCodec = void 0),
                        (this.width = void 0),
                        (this.unknownCodecs = void 0),
                        (this.audioGroupIds = void 0),
                        (this.details = void 0),
                        (this.fragmentError = 0),
                        (this.loadError = 0),
                        (this.loaded = void 0),
                        (this.realBitrate = 0),
                        (this.textGroupIds = void 0),
                        (this.url = void 0),
                        (this._urlId = 0),
                        (this.url = [t.url]),
                        (this.attrs = t.attrs),
                        (this.bitrate = t.bitrate),
                        t.details && (this.details = t.details),
                        (this.id = t.id || 0),
                        (this.name = t.name),
                        (this.width = t.width || 0),
                        (this.height = t.height || 0),
                        (this.audioCodec = t.audioCodec),
                        (this.videoCodec = t.videoCodec),
                        (this.unknownCodecs = t.unknownCodecs),
                        (this.codecSet = [t.videoCodec, t.audioCodec]
                          .filter(function (t) {
                            return t
                          })
                          .join(',')
                          .replace(/\.[^.,]+/g, ''))
                    }
                    var e, r, n
                    return (
                      (e = t),
                      (r = [
                        {
                          key: 'maxBitrate',
                          get: function () {
                            return Math.max(this.realBitrate, this.bitrate)
                          },
                        },
                        {
                          key: 'uri',
                          get: function () {
                            return this.url[this._urlId] || ''
                          },
                        },
                        {
                          key: 'urlId',
                          get: function () {
                            return this._urlId
                          },
                          set: function (t) {
                            var e = t % this.url.length
                            this._urlId !== e && ((this.details = void 0), (this._urlId = e))
                          },
                        },
                      ]) && i(e.prototype, r),
                      n && i(e, n),
                      t
                    )
                  })()
              },
            './src/types/loader.ts':
              /*!*****************************!*\
  !*** ./src/types/loader.ts ***!
  \*****************************/
              /*! exports provided: PlaylistContextType, PlaylistLevelType */ function (t, e, r) {
                'use strict'
                var i, n
                r.r(e),
                  r.d(e, 'PlaylistContextType', function () {
                    return i
                  }),
                  r.d(e, 'PlaylistLevelType', function () {
                    return n
                  }),
                  (function (t) {
                    ;(t.MANIFEST = 'manifest'),
                      (t.LEVEL = 'level'),
                      (t.AUDIO_TRACK = 'audioTrack'),
                      (t.SUBTITLE_TRACK = 'subtitleTrack')
                  })(i || (i = {})),
                  (function (t) {
                    ;(t.MAIN = 'main'), (t.AUDIO = 'audio'), (t.SUBTITLE = 'subtitle')
                  })(n || (n = {}))
              },
            './src/types/transmuxer.ts':
              /*!*********************************!*\
  !*** ./src/types/transmuxer.ts ***!
  \*********************************/
              /*! exports provided: ChunkMetadata */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'ChunkMetadata', function () {
                    return i
                  })
                var i = function (t, e, r, i, n, s) {
                  void 0 === i && (i = 0),
                    void 0 === n && (n = -1),
                    void 0 === s && (s = !1),
                    (this.level = void 0),
                    (this.sn = void 0),
                    (this.part = void 0),
                    (this.id = void 0),
                    (this.size = void 0),
                    (this.partial = void 0),
                    (this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }),
                    (this.buffering = {
                      audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                      video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                      audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                    }),
                    (this.level = t),
                    (this.sn = e),
                    (this.id = r),
                    (this.size = i),
                    (this.part = n),
                    (this.partial = s)
                }
              },
            './src/utils/attr-list.ts':
              /*!********************************!*\
  !*** ./src/utils/attr-list.ts ***!
  \********************************/
              /*! exports provided: AttrList */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'AttrList', function () {
                    return s
                  })
                var i = /^(\d+)x(\d+)$/,
                  n = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                  s = (function () {
                    function t(e) {
                      for (var r in ('string' == typeof e && (e = t.parseAttrList(e)), e))
                        e.hasOwnProperty(r) && (this[r] = e[r])
                    }
                    var e = t.prototype
                    return (
                      (e.decimalInteger = function (t) {
                        var e = parseInt(this[t], 10)
                        return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                      }),
                      (e.hexadecimalInteger = function (t) {
                        if (this[t]) {
                          var e = (this[t] || '0x').slice(2)
                          e = (1 & e.length ? '0' : '') + e
                          for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++)
                            r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16)
                          return r
                        }
                        return null
                      }),
                      (e.hexadecimalIntegerAsNumber = function (t) {
                        var e = parseInt(this[t], 16)
                        return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                      }),
                      (e.decimalFloatingPoint = function (t) {
                        return parseFloat(this[t])
                      }),
                      (e.optionalFloat = function (t, e) {
                        var r = this[t]
                        return r ? parseFloat(r) : e
                      }),
                      (e.enumeratedString = function (t) {
                        return this[t]
                      }),
                      (e.bool = function (t) {
                        return 'YES' === this[t]
                      }),
                      (e.decimalResolution = function (t) {
                        var e = i.exec(this[t])
                        if (null !== e) return { width: parseInt(e[1], 10), height: parseInt(e[2], 10) }
                      }),
                      (t.parseAttrList = function (t) {
                        var e,
                          r = {}
                        for (n.lastIndex = 0; null !== (e = n.exec(t)); ) {
                          var i = e[2]
                          0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)),
                            (r[e[1]] = i)
                        }
                        return r
                      }),
                      t
                    )
                  })()
              },
            './src/utils/binary-search.ts':
              /*!************************************!*\
  !*** ./src/utils/binary-search.ts ***!
  \************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  (e.default = {
                    search: function (t, e) {
                      for (var r = 0, i = t.length - 1, n = null, s = null; r <= i; ) {
                        var a = e((s = t[(n = ((r + i) / 2) | 0)]))
                        if (a > 0) r = n + 1
                        else {
                          if (!(a < 0)) return s
                          i = n - 1
                        }
                      }
                      return null
                    },
                  })
              },
            './src/utils/buffer-helper.ts':
              /*!************************************!*\
  !*** ./src/utils/buffer-helper.ts ***!
  \************************************/
              /*! exports provided: BufferHelper */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'BufferHelper', function () {
                    return s
                  })
                var i = r(/*! ./logger */ './src/utils/logger.ts'),
                  n = {
                    length: 0,
                    start: function () {
                      return 0
                    },
                    end: function () {
                      return 0
                    },
                  },
                  s = (function () {
                    function t() {}
                    return (
                      (t.isBuffered = function (e, r) {
                        try {
                          if (e)
                            for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                              if (r >= i.start(n) && r <= i.end(n)) return !0
                        } catch (s) {}
                        return !1
                      }),
                      (t.bufferInfo = function (e, r, i) {
                        try {
                          if (e) {
                            var n,
                              s = t.getBuffered(e),
                              a = []
                            for (n = 0; n < s.length; n++) a.push({ start: s.start(n), end: s.end(n) })
                            return this.bufferedInfo(a, r, i)
                          }
                        } catch (o) {}
                        return { len: 0, start: r, end: r, nextStart: void 0 }
                      }),
                      (t.bufferedInfo = function (t, e, r) {
                        ;(e = Math.max(0, e)),
                          t.sort(function (t, e) {
                            var r = t.start - e.start
                            return r || e.end - t.end
                          })
                        var i = []
                        if (r)
                          for (var n = 0; n < t.length; n++) {
                            var s = i.length
                            if (s) {
                              var a = i[s - 1].end
                              t[n].start - a < r ? t[n].end > a && (i[s - 1].end = t[n].end) : i.push(t[n])
                            } else i.push(t[n])
                          }
                        else i = t
                        for (var o, l = 0, u = e, c = e, d = 0; d < i.length; d++) {
                          var h = i[d].start,
                            f = i[d].end
                          if (e + r >= h && e < f) (u = h), (l = (c = f) - e)
                          else if (e + r < h) {
                            o = h
                            break
                          }
                        }
                        return { len: l, start: u || 0, end: c || 0, nextStart: o }
                      }),
                      (t.getBuffered = function (t) {
                        try {
                          return t.buffered
                        } catch (e) {
                          return i.logger.log('failed to get media.buffered', e), n
                        }
                      }),
                      t
                    )
                  })()
              },
            './src/utils/cea-608-parser.ts':
              /*!*************************************!*\
  !*** ./src/utils/cea-608-parser.ts ***!
  \*************************************/
              /*! exports provided: Row, CaptionScreen, default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'Row', function () {
                    return y
                  }),
                  r.d(e, 'CaptionScreen', function () {
                    return E
                  })
                var i,
                  n = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  s = {
                    42: 225,
                    92: 233,
                    94: 237,
                    95: 243,
                    96: 250,
                    123: 231,
                    124: 247,
                    125: 209,
                    126: 241,
                    127: 9608,
                    128: 174,
                    129: 176,
                    130: 189,
                    131: 191,
                    132: 8482,
                    133: 162,
                    134: 163,
                    135: 9834,
                    136: 224,
                    137: 32,
                    138: 232,
                    139: 226,
                    140: 234,
                    141: 238,
                    142: 244,
                    143: 251,
                    144: 193,
                    145: 201,
                    146: 211,
                    147: 218,
                    148: 220,
                    149: 252,
                    150: 8216,
                    151: 161,
                    152: 42,
                    153: 8217,
                    154: 9473,
                    155: 169,
                    156: 8480,
                    157: 8226,
                    158: 8220,
                    159: 8221,
                    160: 192,
                    161: 194,
                    162: 199,
                    163: 200,
                    164: 202,
                    165: 203,
                    166: 235,
                    167: 206,
                    168: 207,
                    169: 239,
                    170: 212,
                    171: 217,
                    172: 249,
                    173: 219,
                    174: 171,
                    175: 187,
                    176: 195,
                    177: 227,
                    178: 205,
                    179: 204,
                    180: 236,
                    181: 210,
                    182: 242,
                    183: 213,
                    184: 245,
                    185: 123,
                    186: 125,
                    187: 92,
                    188: 94,
                    189: 95,
                    190: 124,
                    191: 8764,
                    192: 196,
                    193: 228,
                    194: 214,
                    195: 246,
                    196: 223,
                    197: 165,
                    198: 164,
                    199: 9475,
                    200: 197,
                    201: 229,
                    202: 216,
                    203: 248,
                    204: 9487,
                    205: 9491,
                    206: 9495,
                    207: 9499,
                  },
                  a = function (t) {
                    var e = t
                    return s.hasOwnProperty(t) && (e = s[t]), String.fromCharCode(e)
                  },
                  o = 15,
                  l = 100,
                  u = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
                  c = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
                  d = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
                  h = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
                  f = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent']
                !(function (t) {
                  ;(t[(t.ERROR = 0)] = 'ERROR'),
                    (t[(t.TEXT = 1)] = 'TEXT'),
                    (t[(t.WARNING = 2)] = 'WARNING'),
                    (t[(t.INFO = 2)] = 'INFO'),
                    (t[(t.DEBUG = 3)] = 'DEBUG'),
                    (t[(t.DATA = 3)] = 'DATA')
                })(i || (i = {}))
                var g = (function () {
                    function t() {
                      ;(this.time = null), (this.verboseLevel = i.ERROR)
                    }
                    return (
                      (t.prototype.log = function (t, e) {
                        this.verboseLevel >= t && n.logger.log(this.time + ' [' + t + '] ' + e)
                      }),
                      t
                    )
                  })(),
                  v = function (t) {
                    for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16))
                    return e
                  },
                  p = (function () {
                    function t(t, e, r, i, n) {
                      ;(this.foreground = void 0),
                        (this.underline = void 0),
                        (this.italics = void 0),
                        (this.background = void 0),
                        (this.flash = void 0),
                        (this.foreground = t || 'white'),
                        (this.underline = e || !1),
                        (this.italics = r || !1),
                        (this.background = i || 'black'),
                        (this.flash = n || !1)
                    }
                    var e = t.prototype
                    return (
                      (e.reset = function () {
                        ;(this.foreground = 'white'),
                          (this.underline = !1),
                          (this.italics = !1),
                          (this.background = 'black'),
                          (this.flash = !1)
                      }),
                      (e.setStyles = function (t) {
                        for (
                          var e = ['foreground', 'underline', 'italics', 'background', 'flash'], r = 0;
                          r < e.length;
                          r++
                        ) {
                          var i = e[r]
                          t.hasOwnProperty(i) && (this[i] = t[i])
                        }
                      }),
                      (e.isDefault = function () {
                        return (
                          'white' === this.foreground &&
                          !this.underline &&
                          !this.italics &&
                          'black' === this.background &&
                          !this.flash
                        )
                      }),
                      (e.equals = function (t) {
                        return (
                          this.foreground === t.foreground &&
                          this.underline === t.underline &&
                          this.italics === t.italics &&
                          this.background === t.background &&
                          this.flash === t.flash
                        )
                      }),
                      (e.copy = function (t) {
                        ;(this.foreground = t.foreground),
                          (this.underline = t.underline),
                          (this.italics = t.italics),
                          (this.background = t.background),
                          (this.flash = t.flash)
                      }),
                      (e.toString = function () {
                        return (
                          'color=' +
                          this.foreground +
                          ', underline=' +
                          this.underline +
                          ', italics=' +
                          this.italics +
                          ', background=' +
                          this.background +
                          ', flash=' +
                          this.flash
                        )
                      }),
                      t
                    )
                  })(),
                  m = (function () {
                    function t(t, e, r, i, n, s) {
                      ;(this.uchar = void 0),
                        (this.penState = void 0),
                        (this.uchar = t || ' '),
                        (this.penState = new p(e, r, i, n, s))
                    }
                    var e = t.prototype
                    return (
                      (e.reset = function () {
                        ;(this.uchar = ' '), this.penState.reset()
                      }),
                      (e.setChar = function (t, e) {
                        ;(this.uchar = t), this.penState.copy(e)
                      }),
                      (e.setPenState = function (t) {
                        this.penState.copy(t)
                      }),
                      (e.equals = function (t) {
                        return this.uchar === t.uchar && this.penState.equals(t.penState)
                      }),
                      (e.copy = function (t) {
                        ;(this.uchar = t.uchar), this.penState.copy(t.penState)
                      }),
                      (e.isEmpty = function () {
                        return ' ' === this.uchar && this.penState.isDefault()
                      }),
                      t
                    )
                  })(),
                  y = (function () {
                    function t(t) {
                      ;(this.chars = void 0),
                        (this.pos = void 0),
                        (this.currPenState = void 0),
                        (this.cueStartTime = void 0),
                        (this.logger = void 0),
                        (this.chars = [])
                      for (var e = 0; e < l; e++) this.chars.push(new m())
                      ;(this.logger = t), (this.pos = 0), (this.currPenState = new p())
                    }
                    var e = t.prototype
                    return (
                      (e.equals = function (t) {
                        for (var e = !0, r = 0; r < l; r++)
                          if (!this.chars[r].equals(t.chars[r])) {
                            e = !1
                            break
                          }
                        return e
                      }),
                      (e.copy = function (t) {
                        for (var e = 0; e < l; e++) this.chars[e].copy(t.chars[e])
                      }),
                      (e.isEmpty = function () {
                        for (var t = !0, e = 0; e < l; e++)
                          if (!this.chars[e].isEmpty()) {
                            t = !1
                            break
                          }
                        return t
                      }),
                      (e.setCursor = function (t) {
                        this.pos !== t && (this.pos = t),
                          this.pos < 0
                            ? (this.logger.log(i.DEBUG, 'Negative cursor position ' + this.pos), (this.pos = 0))
                            : this.pos >= l &&
                              (this.logger.log(i.DEBUG, 'Too large cursor position ' + this.pos), (this.pos = 99))
                      }),
                      (e.moveCursor = function (t) {
                        var e = this.pos + t
                        if (t > 1)
                          for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState)
                        this.setCursor(e)
                      }),
                      (e.backSpace = function () {
                        this.moveCursor(-1), this.chars[this.pos].setChar(' ', this.currPenState)
                      }),
                      (e.insertChar = function (t) {
                        t >= 144 && this.backSpace()
                        var e = a(t)
                        this.pos >= l
                          ? this.logger.log(
                              i.WARNING,
                              'Cannot insert ' +
                                t.toString(16) +
                                ' (' +
                                e +
                                ') at position ' +
                                this.pos +
                                '. Skipping it!',
                            )
                          : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
                      }),
                      (e.clearFromPos = function (t) {
                        var e
                        for (e = t; e < l; e++) this.chars[e].reset()
                      }),
                      (e.clear = function () {
                        this.clearFromPos(0), (this.pos = 0), this.currPenState.reset()
                      }),
                      (e.clearToEndOfRow = function () {
                        this.clearFromPos(this.pos)
                      }),
                      (e.getTextString = function () {
                        for (var t = [], e = !0, r = 0; r < l; r++) {
                          var i = this.chars[r].uchar
                          ' ' !== i && (e = !1), t.push(i)
                        }
                        return e ? '' : t.join('')
                      }),
                      (e.setPenStyles = function (t) {
                        this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                      }),
                      t
                    )
                  })(),
                  E = (function () {
                    function t(t) {
                      ;(this.rows = void 0),
                        (this.currRow = void 0),
                        (this.nrRollUpRows = void 0),
                        (this.lastOutputScreen = void 0),
                        (this.logger = void 0),
                        (this.rows = [])
                      for (var e = 0; e < o; e++) this.rows.push(new y(t))
                      ;(this.logger = t),
                        (this.currRow = 14),
                        (this.nrRollUpRows = null),
                        (this.lastOutputScreen = null),
                        this.reset()
                    }
                    var e = t.prototype
                    return (
                      (e.reset = function () {
                        for (var t = 0; t < o; t++) this.rows[t].clear()
                        this.currRow = 14
                      }),
                      (e.equals = function (t) {
                        for (var e = !0, r = 0; r < o; r++)
                          if (!this.rows[r].equals(t.rows[r])) {
                            e = !1
                            break
                          }
                        return e
                      }),
                      (e.copy = function (t) {
                        for (var e = 0; e < o; e++) this.rows[e].copy(t.rows[e])
                      }),
                      (e.isEmpty = function () {
                        for (var t = !0, e = 0; e < o; e++)
                          if (!this.rows[e].isEmpty()) {
                            t = !1
                            break
                          }
                        return t
                      }),
                      (e.backSpace = function () {
                        this.rows[this.currRow].backSpace()
                      }),
                      (e.clearToEndOfRow = function () {
                        this.rows[this.currRow].clearToEndOfRow()
                      }),
                      (e.insertChar = function (t) {
                        this.rows[this.currRow].insertChar(t)
                      }),
                      (e.setPen = function (t) {
                        this.rows[this.currRow].setPenStyles(t)
                      }),
                      (e.moveCursor = function (t) {
                        this.rows[this.currRow].moveCursor(t)
                      }),
                      (e.setCursor = function (t) {
                        this.logger.log(i.INFO, 'setCursor: ' + t), this.rows[this.currRow].setCursor(t)
                      }),
                      (e.setPAC = function (t) {
                        this.logger.log(i.INFO, 'pacData = ' + JSON.stringify(t))
                        var e = t.row - 1
                        if (
                          (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1),
                          this.nrRollUpRows && this.currRow !== e)
                        ) {
                          for (var r = 0; r < o; r++) this.rows[r].clear()
                          var n = this.currRow + 1 - this.nrRollUpRows,
                            s = this.lastOutputScreen
                          if (s) {
                            var a = s.rows[n].cueStartTime,
                              l = this.logger.time
                            if (a && null !== l && a < l)
                              for (var u = 0; u < this.nrRollUpRows; u++)
                                this.rows[e - this.nrRollUpRows + u + 1].copy(s.rows[n + u])
                          }
                        }
                        this.currRow = e
                        var c = this.rows[this.currRow]
                        if (null !== t.indent) {
                          var d = t.indent,
                            h = Math.max(d - 1, 0)
                          c.setCursor(t.indent), (t.color = c.chars[h].penState.foreground)
                        }
                        var f = {
                          foreground: t.color,
                          underline: t.underline,
                          italics: t.italics,
                          background: 'black',
                          flash: !1,
                        }
                        this.setPen(f)
                      }),
                      (e.setBkgData = function (t) {
                        this.logger.log(i.INFO, 'bkgData = ' + JSON.stringify(t)),
                          this.backSpace(),
                          this.setPen(t),
                          this.insertChar(32)
                      }),
                      (e.setRollUpRows = function (t) {
                        this.nrRollUpRows = t
                      }),
                      (e.rollUp = function () {
                        if (null !== this.nrRollUpRows) {
                          this.logger.log(i.TEXT, this.getDisplayText())
                          var t = this.currRow + 1 - this.nrRollUpRows,
                            e = this.rows.splice(t, 1)[0]
                          e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(i.INFO, 'Rolling up')
                        } else this.logger.log(i.DEBUG, 'roll_up but nrRollUpRows not set yet')
                      }),
                      (e.getDisplayText = function (t) {
                        t = t || !1
                        for (var e = [], r = '', i = -1, n = 0; n < o; n++) {
                          var s = this.rows[n].getTextString()
                          s && ((i = n + 1), t ? e.push('Row ' + i + ": '" + s + "'") : e.push(s.trim()))
                        }
                        return e.length > 0 && (r = t ? '[' + e.join(' | ') + ']' : e.join('\n')), r
                      }),
                      (e.getTextAndFormat = function () {
                        return this.rows
                      }),
                      t
                    )
                  })(),
                  T = (function () {
                    function t(t, e, r) {
                      ;(this.chNr = void 0),
                        (this.outputFilter = void 0),
                        (this.mode = void 0),
                        (this.verbose = void 0),
                        (this.displayedMemory = void 0),
                        (this.nonDisplayedMemory = void 0),
                        (this.lastOutputScreen = void 0),
                        (this.currRollUpRow = void 0),
                        (this.writeScreen = void 0),
                        (this.cueStartTime = void 0),
                        (this.logger = void 0),
                        (this.chNr = t),
                        (this.outputFilter = e),
                        (this.mode = null),
                        (this.verbose = 0),
                        (this.displayedMemory = new E(r)),
                        (this.nonDisplayedMemory = new E(r)),
                        (this.lastOutputScreen = new E(r)),
                        (this.currRollUpRow = this.displayedMemory.rows[14]),
                        (this.writeScreen = this.displayedMemory),
                        (this.mode = null),
                        (this.cueStartTime = null),
                        (this.logger = r)
                    }
                    var e = t.prototype
                    return (
                      (e.reset = function () {
                        ;(this.mode = null),
                          this.displayedMemory.reset(),
                          this.nonDisplayedMemory.reset(),
                          this.lastOutputScreen.reset(),
                          this.outputFilter.reset(),
                          (this.currRollUpRow = this.displayedMemory.rows[14]),
                          (this.writeScreen = this.displayedMemory),
                          (this.mode = null),
                          (this.cueStartTime = null)
                      }),
                      (e.getHandler = function () {
                        return this.outputFilter
                      }),
                      (e.setHandler = function (t) {
                        this.outputFilter = t
                      }),
                      (e.setPAC = function (t) {
                        this.writeScreen.setPAC(t)
                      }),
                      (e.setBkgData = function (t) {
                        this.writeScreen.setBkgData(t)
                      }),
                      (e.setMode = function (t) {
                        t !== this.mode &&
                          ((this.mode = t),
                          this.logger.log(i.INFO, 'MODE=' + t),
                          'MODE_POP-ON' === this.mode
                            ? (this.writeScreen = this.nonDisplayedMemory)
                            : ((this.writeScreen = this.displayedMemory), this.writeScreen.reset()),
                          'MODE_ROLL-UP' !== this.mode &&
                            ((this.displayedMemory.nrRollUpRows = null), (this.nonDisplayedMemory.nrRollUpRows = null)),
                          (this.mode = t))
                      }),
                      (e.insertChars = function (t) {
                        for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e])
                        var r = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP'
                        this.logger.log(i.INFO, r + ': ' + this.writeScreen.getDisplayText(!0)),
                          ('MODE_PAINT-ON' !== this.mode && 'MODE_ROLL-UP' !== this.mode) ||
                            (this.logger.log(i.TEXT, 'DISPLAYED: ' + this.displayedMemory.getDisplayText(!0)),
                            this.outputDataUpdate())
                      }),
                      (e.ccRCL = function () {
                        this.logger.log(i.INFO, 'RCL - Resume Caption Loading'), this.setMode('MODE_POP-ON')
                      }),
                      (e.ccBS = function () {
                        this.logger.log(i.INFO, 'BS - BackSpace'),
                          'MODE_TEXT' !== this.mode &&
                            (this.writeScreen.backSpace(),
                            this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                      }),
                      (e.ccAOF = function () {}),
                      (e.ccAON = function () {}),
                      (e.ccDER = function () {
                        this.logger.log(i.INFO, 'DER- Delete to End of Row'),
                          this.writeScreen.clearToEndOfRow(),
                          this.outputDataUpdate()
                      }),
                      (e.ccRU = function (t) {
                        this.logger.log(i.INFO, 'RU(' + t + ') - Roll Up'),
                          (this.writeScreen = this.displayedMemory),
                          this.setMode('MODE_ROLL-UP'),
                          this.writeScreen.setRollUpRows(t)
                      }),
                      (e.ccFON = function () {
                        this.logger.log(i.INFO, 'FON - Flash On'), this.writeScreen.setPen({ flash: !0 })
                      }),
                      (e.ccRDC = function () {
                        this.logger.log(i.INFO, 'RDC - Resume Direct Captioning'), this.setMode('MODE_PAINT-ON')
                      }),
                      (e.ccTR = function () {
                        this.logger.log(i.INFO, 'TR'), this.setMode('MODE_TEXT')
                      }),
                      (e.ccRTD = function () {
                        this.logger.log(i.INFO, 'RTD'), this.setMode('MODE_TEXT')
                      }),
                      (e.ccEDM = function () {
                        this.logger.log(i.INFO, 'EDM - Erase Displayed Memory'),
                          this.displayedMemory.reset(),
                          this.outputDataUpdate(!0)
                      }),
                      (e.ccCR = function () {
                        this.logger.log(i.INFO, 'CR - Carriage Return'),
                          this.writeScreen.rollUp(),
                          this.outputDataUpdate(!0)
                      }),
                      (e.ccENM = function () {
                        this.logger.log(i.INFO, 'ENM - Erase Non-displayed Memory'), this.nonDisplayedMemory.reset()
                      }),
                      (e.ccEOC = function () {
                        if ((this.logger.log(i.INFO, 'EOC - End Of Caption'), 'MODE_POP-ON' === this.mode)) {
                          var t = this.displayedMemory
                          ;(this.displayedMemory = this.nonDisplayedMemory),
                            (this.nonDisplayedMemory = t),
                            (this.writeScreen = this.nonDisplayedMemory),
                            this.logger.log(i.TEXT, 'DISP: ' + this.displayedMemory.getDisplayText())
                        }
                        this.outputDataUpdate(!0)
                      }),
                      (e.ccTO = function (t) {
                        this.logger.log(i.INFO, 'TO(' + t + ') - Tab Offset'), this.writeScreen.moveCursor(t)
                      }),
                      (e.ccMIDROW = function (t) {
                        var e = { flash: !1 }
                        if (((e.underline = t % 2 == 1), (e.italics = t >= 46), e.italics)) e.foreground = 'white'
                        else {
                          var r = Math.floor(t / 2) - 16
                          e.foreground = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'][r]
                        }
                        this.logger.log(i.INFO, 'MIDROW: ' + JSON.stringify(e)), this.writeScreen.setPen(e)
                      }),
                      (e.outputDataUpdate = function (t) {
                        void 0 === t && (t = !1)
                        var e = this.logger.time
                        null !== e &&
                          this.outputFilter &&
                          (null !== this.cueStartTime || this.displayedMemory.isEmpty()
                            ? this.displayedMemory.equals(this.lastOutputScreen) ||
                              (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen),
                              t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                              (this.cueStartTime = this.displayedMemory.isEmpty() ? null : e))
                            : (this.cueStartTime = e),
                          this.lastOutputScreen.copy(this.displayedMemory))
                      }),
                      (e.cueSplitAtTime = function (t) {
                        this.outputFilter &&
                          (this.displayedMemory.isEmpty() ||
                            (this.outputFilter.newCue &&
                              this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory),
                            (this.cueStartTime = t)))
                      }),
                      t
                    )
                  })(),
                  S = (function () {
                    function t(t, e, r) {
                      ;(this.channels = void 0),
                        (this.currentChannel = 0),
                        (this.cmdHistory = void 0),
                        (this.logger = void 0)
                      var i = new g()
                      ;(this.channels = [null, new T(t, e, i), new T(t + 1, r, i)]),
                        (this.cmdHistory = { a: null, b: null }),
                        (this.logger = i)
                    }
                    var e = t.prototype
                    return (
                      (e.getHandler = function (t) {
                        return this.channels[t].getHandler()
                      }),
                      (e.setHandler = function (t, e) {
                        this.channels[t].setHandler(e)
                      }),
                      (e.addData = function (t, e) {
                        var r,
                          n,
                          s,
                          a = !1
                        this.logger.time = t
                        for (var o = 0; o < e.length; o += 2)
                          if (((n = 127 & e[o]), (s = 127 & e[o + 1]), 0 !== n || 0 !== s)) {
                            if (
                              (this.logger.log(i.DATA, '[' + v([e[o], e[o + 1]]) + '] -> (' + v([n, s]) + ')'),
                              (r = this.parseCmd(n, s)) || (r = this.parseMidrow(n, s)),
                              r || (r = this.parsePAC(n, s)),
                              r || (r = this.parseBackgroundAttributes(n, s)),
                              !r && (a = this.parseChars(n, s)))
                            ) {
                              var l = this.currentChannel
                              l && l > 0
                                ? this.channels[l].insertChars(a)
                                : this.logger.log(i.WARNING, 'No channel found yet. TEXT-MODE?')
                            }
                            r ||
                              a ||
                              this.logger.log(
                                i.WARNING,
                                "Couldn't parse cleaned data " + v([n, s]) + ' orig: ' + v([e[o], e[o + 1]]),
                              )
                          }
                      }),
                      (e.parseCmd = function (t, e) {
                        var r = this.cmdHistory
                        if (
                          !(
                            ((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47) ||
                            ((23 === t || 31 === t) && e >= 33 && e <= 35)
                          )
                        )
                          return !1
                        if (L(t, e, r))
                          return (
                            b(null, null, r),
                            this.logger.log(i.DEBUG, 'Repeated command (' + v([t, e]) + ') is dropped'),
                            !0
                          )
                        var n = 20 === t || 21 === t || 23 === t ? 1 : 2,
                          s = this.channels[n]
                        return (
                          20 === t || 21 === t || 28 === t || 29 === t
                            ? 32 === e
                              ? s.ccRCL()
                              : 33 === e
                              ? s.ccBS()
                              : 34 === e
                              ? s.ccAOF()
                              : 35 === e
                              ? s.ccAON()
                              : 36 === e
                              ? s.ccDER()
                              : 37 === e
                              ? s.ccRU(2)
                              : 38 === e
                              ? s.ccRU(3)
                              : 39 === e
                              ? s.ccRU(4)
                              : 40 === e
                              ? s.ccFON()
                              : 41 === e
                              ? s.ccRDC()
                              : 42 === e
                              ? s.ccTR()
                              : 43 === e
                              ? s.ccRTD()
                              : 44 === e
                              ? s.ccEDM()
                              : 45 === e
                              ? s.ccCR()
                              : 46 === e
                              ? s.ccENM()
                              : 47 === e && s.ccEOC()
                            : s.ccTO(e - 32),
                          b(t, e, r),
                          (this.currentChannel = n),
                          !0
                        )
                      }),
                      (e.parseMidrow = function (t, e) {
                        var r = 0
                        if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                          if ((r = 17 === t ? 1 : 2) !== this.currentChannel)
                            return this.logger.log(i.ERROR, 'Mismatch channel in midrow parsing'), !1
                          var n = this.channels[r]
                          return !!n && (n.ccMIDROW(e), this.logger.log(i.DEBUG, 'MIDROW (' + v([t, e]) + ')'), !0)
                        }
                        return !1
                      }),
                      (e.parsePAC = function (t, e) {
                        var r,
                          i = this.cmdHistory
                        if (
                          !(
                            (((t >= 17 && t <= 23) || (t >= 25 && t <= 31)) && e >= 64 && e <= 127) ||
                            ((16 === t || 24 === t) && e >= 64 && e <= 95)
                          )
                        )
                          return !1
                        if (L(t, e, i)) return b(null, null, i), !0
                        var n = t <= 23 ? 1 : 2
                        r = e >= 64 && e <= 95 ? (1 === n ? u[t] : d[t]) : 1 === n ? c[t] : h[t]
                        var s = this.channels[n]
                        return !!s && (s.setPAC(this.interpretPAC(r, e)), b(t, e, i), (this.currentChannel = n), !0)
                      }),
                      (e.interpretPAC = function (t, e) {
                        var r,
                          i = { color: null, italics: !1, indent: null, underline: !1, row: t }
                        return (
                          (r = e > 95 ? e - 96 : e - 64),
                          (i.underline = 1 == (1 & r)),
                          r <= 13
                            ? (i.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][
                                Math.floor(r / 2)
                              ])
                            : r <= 15
                            ? ((i.italics = !0), (i.color = 'white'))
                            : (i.indent = 4 * Math.floor((r - 16) / 2)),
                          i
                        )
                      }),
                      (e.parseChars = function (t, e) {
                        var r,
                          n,
                          s = null,
                          o = null
                        if (
                          (t >= 25 ? ((r = 2), (o = t - 8)) : ((r = 1), (o = t)),
                          o >= 17 && o <= 19
                            ? ((n = 17 === o ? e + 80 : 18 === o ? e + 112 : e + 144),
                              this.logger.log(i.INFO, "Special char '" + a(n) + "' in channel " + r),
                              (s = [n]))
                            : t >= 32 && t <= 127 && (s = 0 === e ? [t] : [t, e]),
                          s)
                        ) {
                          var l = v(s)
                          this.logger.log(i.DEBUG, 'Char codes =  ' + l.join(',')), b(t, e, this.cmdHistory)
                        }
                        return s
                      }),
                      (e.parseBackgroundAttributes = function (t, e) {
                        var r
                        if (
                          !(
                            ((16 === t || 24 === t) && e >= 32 && e <= 47) ||
                            ((23 === t || 31 === t) && e >= 45 && e <= 47)
                          )
                        )
                          return !1
                        var i = {}
                        16 === t || 24 === t
                          ? ((r = Math.floor((e - 32) / 2)),
                            (i.background = f[r]),
                            e % 2 == 1 && (i.background = i.background + '_semi'))
                          : 45 === e
                          ? (i.background = 'transparent')
                          : ((i.foreground = 'black'), 47 === e && (i.underline = !0))
                        var n = t <= 23 ? 1 : 2
                        return this.channels[n].setBkgData(i), b(t, e, this.cmdHistory), !0
                      }),
                      (e.reset = function () {
                        for (var t = 0; t < Object.keys(this.channels).length; t++) {
                          var e = this.channels[t]
                          e && e.reset()
                        }
                        this.cmdHistory = { a: null, b: null }
                      }),
                      (e.cueSplitAtTime = function (t) {
                        for (var e = 0; e < this.channels.length; e++) {
                          var r = this.channels[e]
                          r && r.cueSplitAtTime(t)
                        }
                      }),
                      t
                    )
                  })()
                function b(t, e, r) {
                  ;(r.a = t), (r.b = e)
                }
                function L(t, e, r) {
                  return r.a === t && r.b === e
                }
                e.default = S
              },
            './src/utils/codecs.ts':
              /*!*****************************!*\
  !*** ./src/utils/codecs.ts ***!
  \*****************************/
              /*! exports provided: isCodecType, isCodecSupportedInMp4 */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'isCodecType', function () {
                    return n
                  }),
                  r.d(e, 'isCodecSupportedInMp4', function () {
                    return s
                  })
                var i = {
                  audio: {
                    a3ds: !0,
                    'ac-3': !0,
                    'ac-4': !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    'dts+': !0,
                    'dts-': !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    'ec-3': !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    'raw ': !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0,
                  },
                  video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    av01: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    'vc-1': !0,
                    vp08: !0,
                    vp09: !0,
                  },
                  text: { stpp: !0, wvtt: !0 },
                }
                function n(t, e) {
                  var r = i[e]
                  return !!r && !0 === r[t.slice(0, 4)]
                }
                function s(t, e) {
                  return MediaSource.isTypeSupported((e || 'video') + '/mp4;codecs="' + t + '"')
                }
              },
            './src/utils/cues.ts':
              /*!***************************!*\
  !*** ./src/utils/cues.ts ***!
  \***************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ./vttparser */ './src/utils/vttparser.ts'),
                  n = r(/*! ./webvtt-parser */ './src/utils/webvtt-parser.ts'),
                  s = r(/*! ./texttrack-utils */ './src/utils/texttrack-utils.ts'),
                  a = /\s/,
                  o = {
                    newCue: function (t, e, r, o) {
                      for (
                        var l, u, c, d, h, f = [], g = self.VTTCue || self.TextTrackCue, v = 0;
                        v < o.rows.length;
                        v++
                      )
                        if (((c = !0), (d = 0), (h = ''), !(l = o.rows[v]).isEmpty())) {
                          for (var p = 0; p < l.chars.length; p++)
                            a.test(l.chars[p].uchar) && c ? d++ : ((h += l.chars[p].uchar), (c = !1))
                          ;(l.cueStartTime = e), e === r && (r += 1e-4), d >= 16 ? d-- : d++
                          var m = Object(i.fixLineBreaks)(h.trim()),
                            y = Object(n.generateCueId)(e, r, m)
                          if (!t || !t.cues || !t.cues.getCueById(y)) {
                            ;((u = new g(e, r, m)).id = y),
                              (u.line = Math.min(v + 1, navigator.userAgent.match(/Firefox\//) ? 13 : 8)),
                              (u.align = 'left'),
                              (u.position = 10 + Math.min(80, 10 * Math.floor((8 * d) / 32)))
                            var E = u.size,
                              T = u.text.length,
                              S = u.position
                            ;(u.size = E >= T + 2 * S ? E - 2 * S : Math.min(100, Math.max(1.05 * T, E) + S)), f.push(u)
                          }
                        }
                      return (
                        t &&
                          f.length &&
                          (f.sort(function (t, e) {
                            return 'auto' === t.line || 'auto' === e.line
                              ? 0
                              : t.line > 8 && e.line > 8
                              ? e.line - t.line
                              : t.line - e.line
                          }),
                          f.forEach(function (e) {
                            return Object(s.addCueToTrack)(t, e)
                          })),
                        f
                      )
                    },
                  }
                e.default = o
              },
            './src/utils/discontinuities.ts':
              /*!**************************************!*\
  !*** ./src/utils/discontinuities.ts ***!
  \**************************************/
              /*! exports provided: findFirstFragWithCC, shouldAlignOnDiscontinuities, findDiscontinuousReferenceFrag, adjustSlidingStart, alignStream, alignPDT, alignFragmentByPDTDelta, alignMediaPlaylistByPDT */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'findFirstFragWithCC', function () {
                    return a
                  }),
                  r.d(e, 'shouldAlignOnDiscontinuities', function () {
                    return o
                  }),
                  r.d(e, 'findDiscontinuousReferenceFrag', function () {
                    return l
                  }),
                  r.d(e, 'adjustSlidingStart', function () {
                    return c
                  }),
                  r.d(e, 'alignStream', function () {
                    return d
                  }),
                  r.d(e, 'alignPDT', function () {
                    return h
                  }),
                  r.d(e, 'alignFragmentByPDTDelta', function () {
                    return f
                  }),
                  r.d(e, 'alignMediaPlaylistByPDT', function () {
                    return g
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ./logger */ './src/utils/logger.ts'),
                  s = r(/*! ../controller/level-helper */ './src/controller/level-helper.ts')
                function a(t, e) {
                  for (var r = null, i = 0, n = t.length; i < n; i++) {
                    var s = t[i]
                    if (s && s.cc === e) {
                      r = s
                      break
                    }
                  }
                  return r
                }
                function o(t, e, r) {
                  return !(!e.details || !(r.endCC > r.startCC || (t && t.cc < r.startCC)))
                }
                function l(t, e) {
                  var r = t.fragments,
                    i = e.fragments
                  if (i.length && r.length) {
                    var s = a(r, i[0].cc)
                    if (s && (!s || s.startPTS)) return s
                    n.logger.log('No frag in previous level to align on')
                  } else n.logger.log('No fragments to align')
                }
                function u(t, e) {
                  if (t) {
                    var r = t.start + e
                    ;(t.start = t.startPTS = r), (t.endPTS = r + t.duration)
                  }
                }
                function c(t, e) {
                  for (var r = e.fragments, i = 0, n = r.length; i < n; i++) u(r[i], t)
                  e.fragmentHint && u(e.fragmentHint, t), (e.alignedSliding = !0)
                }
                function d(t, e, r) {
                  e &&
                    ((function (t, e, r) {
                      if (o(t, r, e)) {
                        var s = l(r.details, e)
                        s &&
                          Object(i.isFiniteNumber)(s.start) &&
                          (n.logger.log(
                            'Adjusting PTS using last level due to CC increase within current level ' + e.url,
                          ),
                          c(s.start, e))
                      }
                    })(t, r, e),
                    !r.alignedSliding && e.details && h(r, e.details),
                    r.alignedSliding || !e.details || r.skippedSegments || Object(s.adjustSliding)(e.details, r))
                }
                function h(t, e) {
                  if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                    var r = e.fragments[0].programDateTime,
                      s = t.fragments[0].programDateTime,
                      a = (s - r) / 1e3 + e.fragments[0].start
                    a &&
                      Object(i.isFiniteNumber)(a) &&
                      (n.logger.log(
                        'Adjusting PTS using programDateTime delta ' +
                          (s - r) +
                          'ms, sliding:' +
                          a.toFixed(3) +
                          ' ' +
                          t.url +
                          ' ',
                      ),
                      c(a, t))
                  }
                }
                function f(t, e) {
                  var r = t.programDateTime
                  if (r) {
                    var i = (r - e) / 1e3
                    ;(t.start = t.startPTS = i), (t.endPTS = i + t.duration)
                  }
                }
                function g(t, e) {
                  if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                    var r = e.fragments[0].programDateTime - 1e3 * e.fragments[0].start
                    t.fragments.forEach(function (t) {
                      f(t, r)
                    }),
                      t.fragmentHint && f(t.fragmentHint, r),
                      (t.alignedSliding = !0)
                  }
                }
              },
            './src/utils/ewma-bandwidth-estimator.ts':
              /*!***********************************************!*\
  !*** ./src/utils/ewma-bandwidth-estimator.ts ***!
  \***********************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../utils/ewma */ './src/utils/ewma.ts'),
                  n = (function () {
                    function t(t, e, r) {
                      ;(this.defaultEstimate_ = void 0),
                        (this.minWeight_ = void 0),
                        (this.minDelayMs_ = void 0),
                        (this.slow_ = void 0),
                        (this.fast_ = void 0),
                        (this.defaultEstimate_ = r),
                        (this.minWeight_ = 0.001),
                        (this.minDelayMs_ = 50),
                        (this.slow_ = new i.default(t)),
                        (this.fast_ = new i.default(e))
                    }
                    var e = t.prototype
                    return (
                      (e.update = function (t, e) {
                        var r = this.slow_,
                          n = this.fast_
                        this.slow_.halfLife !== t &&
                          (this.slow_ = new i.default(t, r.getEstimate(), r.getTotalWeight())),
                          this.fast_.halfLife !== e &&
                            (this.fast_ = new i.default(e, n.getEstimate(), n.getTotalWeight()))
                      }),
                      (e.sample = function (t, e) {
                        var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                          i = (8 * e) / r
                        this.fast_.sample(r, i), this.slow_.sample(r, i)
                      }),
                      (e.canEstimate = function () {
                        var t = this.fast_
                        return t && t.getTotalWeight() >= this.minWeight_
                      }),
                      (e.getEstimate = function () {
                        return this.canEstimate()
                          ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
                          : this.defaultEstimate_
                      }),
                      (e.destroy = function () {}),
                      t
                    )
                  })()
                e.default = n
              },
            './src/utils/ewma.ts':
              /*!***************************!*\
  !*** ./src/utils/ewma.ts ***!
  \***************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = (function () {
                  function t(t, e, r) {
                    void 0 === e && (e = 0),
                      void 0 === r && (r = 0),
                      (this.halfLife = void 0),
                      (this.alpha_ = void 0),
                      (this.estimate_ = void 0),
                      (this.totalWeight_ = void 0),
                      (this.halfLife = t),
                      (this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0),
                      (this.estimate_ = e),
                      (this.totalWeight_ = r)
                  }
                  var e = t.prototype
                  return (
                    (e.sample = function (t, e) {
                      var r = Math.pow(this.alpha_, t)
                      ;(this.estimate_ = e * (1 - r) + r * this.estimate_), (this.totalWeight_ += t)
                    }),
                    (e.getTotalWeight = function () {
                      return this.totalWeight_
                    }),
                    (e.getEstimate = function () {
                      if (this.alpha_) {
                        var t = 1 - Math.pow(this.alpha_, this.totalWeight_)
                        if (t) return this.estimate_ / t
                      }
                      return this.estimate_
                    }),
                    t
                  )
                })()
                e.default = i
              },
            './src/utils/fetch-loader.ts':
              /*!***********************************!*\
  !*** ./src/utils/fetch-loader.ts ***!
  \***********************************/
              /*! exports provided: fetchSupported, default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'fetchSupported', function () {
                    return d
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ../loader/load-stats */ './src/loader/load-stats.ts'),
                  s = r(/*! ../demux/chunk-cache */ './src/demux/chunk-cache.ts')
                function a(t) {
                  var e = 'function' == typeof Map ? new Map() : void 0
                  return (a = function (t) {
                    if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf('[native code]'))) return t
                    var r
                    if ('function' != typeof t)
                      throw new TypeError('Super expression must either be null or a function')
                    if (void 0 !== e) {
                      if (e.has(t)) return e.get(t)
                      e.set(t, i)
                    }
                    function i() {
                      return o(t, arguments, c(this).constructor)
                    }
                    return (
                      (i.prototype = Object.create(t.prototype, {
                        constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
                      })),
                      u(i, t)
                    )
                  })(t)
                }
                function o(t, e, r) {
                  return (o = l()
                    ? Reflect.construct
                    : function (t, e, r) {
                        var i = [null]
                        i.push.apply(i, e)
                        var n = new (Function.bind.apply(t, i))()
                        return r && u(n, r.prototype), n
                      }).apply(null, arguments)
                }
                function l() {
                  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                  } catch (t) {
                    return !1
                  }
                }
                function u(t, e) {
                  return (u =
                    Object.setPrototypeOf ||
                    function (t, e) {
                      return (t.__proto__ = e), t
                    })(t, e)
                }
                function c(t) {
                  return (c = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
                }
                function d() {
                  if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                    try {
                      return new self.ReadableStream({}), !0
                    } catch (t) {}
                  return !1
                }
                var h = (function () {
                  function t(t) {
                    ;(this.fetchSetup = void 0),
                      (this.requestTimeout = void 0),
                      (this.request = void 0),
                      (this.response = void 0),
                      (this.controller = void 0),
                      (this.context = void 0),
                      (this.config = null),
                      (this.callbacks = null),
                      (this.stats = void 0),
                      (this.loader = null),
                      (this.fetchSetup = t.fetchSetup || f),
                      (this.controller = new self.AbortController()),
                      (this.stats = new n.LoadStats())
                  }
                  var e = t.prototype
                  return (
                    (e.destroy = function () {
                      ;(this.loader = this.callbacks = null), this.abortInternal()
                    }),
                    (e.abortInternal = function () {
                      var t = this.response
                      ;(t && t.ok) || ((this.stats.aborted = !0), this.controller.abort())
                    }),
                    (e.abort = function () {
                      var t
                      this.abortInternal(),
                        null !== (t = this.callbacks) &&
                          void 0 !== t &&
                          t.onAbort &&
                          this.callbacks.onAbort(this.stats, this.context, this.response)
                    }),
                    (e.load = function (t, e, r) {
                      var n = this,
                        s = this.stats
                      if (s.loading.start) throw new Error('Loader can only be used once.')
                      s.loading.start = self.performance.now()
                      var a = (function (t, e) {
                          var r = { method: 'GET', mode: 'cors', credentials: 'same-origin', signal: e }
                          return (
                            t.rangeEnd &&
                              (r.headers = new self.Headers({
                                Range: 'bytes=' + t.rangeStart + '-' + String(t.rangeEnd - 1),
                              })),
                            r
                          )
                        })(t, this.controller.signal),
                        o = r.onProgress,
                        l = 'arraybuffer' === t.responseType,
                        u = l ? 'byteLength' : 'length'
                      ;(this.context = t),
                        (this.config = e),
                        (this.callbacks = r),
                        (this.request = this.fetchSetup(t, a)),
                        self.clearTimeout(this.requestTimeout),
                        (this.requestTimeout = self.setTimeout(function () {
                          n.abortInternal(), r.onTimeout(s, t, n.response)
                        }, e.timeout)),
                        self
                          .fetch(this.request)
                          .then(function (r) {
                            if (((n.response = n.loader = r), !r.ok)) {
                              var a = r.status,
                                u = r.statusText
                              throw new g(u || 'fetch, bad network response', a, r)
                            }
                            return (
                              (s.loading.first = Math.max(self.performance.now(), s.loading.start)),
                              (s.total = parseInt(r.headers.get('Content-Length') || '0')),
                              o && Object(i.isFiniteNumber)(e.highWaterMark)
                                ? n.loadProgressively(r, s, t, e.highWaterMark, o)
                                : l
                                ? r.arrayBuffer()
                                : r.text()
                            )
                          })
                          .then(function (a) {
                            var l = n.response
                            self.clearTimeout(n.requestTimeout),
                              (s.loading.end = Math.max(self.performance.now(), s.loading.first)),
                              (s.loaded = s.total = a[u])
                            var c = { url: l.url, data: a }
                            o && !Object(i.isFiniteNumber)(e.highWaterMark) && o(s, t, a, l), r.onSuccess(c, s, t, l)
                          })
                          .catch(function (e) {
                            if ((self.clearTimeout(n.requestTimeout), !s.aborted)) {
                              var i = e.code || 0
                              r.onError({ code: i, text: e.message }, t, e.details)
                            }
                          })
                    }),
                    (e.getCacheAge = function () {
                      var t = null
                      if (this.response) {
                        var e = this.response.headers.get('age')
                        t = e ? parseFloat(e) : null
                      }
                      return t
                    }),
                    (e.loadProgressively = function (t, e, r, i, n) {
                      void 0 === i && (i = 0)
                      var a = new s.default(),
                        o = t.body.getReader()
                      return (function s() {
                        return o
                          .read()
                          .then(function (o) {
                            if (o.done)
                              return a.dataLength && n(e, r, a.flush(), t), Promise.resolve(new ArrayBuffer(0))
                            var l = o.value,
                              u = l.length
                            return (
                              (e.loaded += u),
                              u < i || a.dataLength
                                ? (a.push(l), a.dataLength >= i && n(e, r, a.flush(), t))
                                : n(e, r, l, t),
                              s()
                            )
                          })
                          .catch(function () {
                            return Promise.reject()
                          })
                      })()
                    }),
                    t
                  )
                })()
                function f(t, e) {
                  return new self.Request(t.url, e)
                }
                var g = (function (t) {
                  var e, r
                  function i(e, r, i) {
                    var n
                    return (
                      ((n = t.call(this, e) || this).code = void 0),
                      (n.details = void 0),
                      (n.code = r),
                      (n.details = i),
                      n
                    )
                  }
                  return (
                    (r = t), ((e = i).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), u(e, r), i
                  )
                })(a(Error))
                e.default = h
              },
            './src/utils/imsc1-ttml-parser.ts':
              /*!****************************************!*\
  !*** ./src/utils/imsc1-ttml-parser.ts ***!
  \****************************************/
              /*! exports provided: IMSC1_CODEC, parseIMSC1 */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'IMSC1_CODEC', function () {
                    return c
                  }),
                  r.d(e, 'parseIMSC1', function () {
                    return g
                  })
                var i = r(/*! ./mp4-tools */ './src/utils/mp4-tools.ts'),
                  n = r(/*! ./vttparser */ './src/utils/vttparser.ts'),
                  s = r(/*! ./vttcue */ './src/utils/vttcue.ts'),
                  a = r(/*! ../demux/id3 */ './src/demux/id3.ts'),
                  o = r(/*! ./timescale-conversion */ './src/utils/timescale-conversion.ts'),
                  l = r(/*! ./webvtt-parser */ './src/utils/webvtt-parser.ts')
                function u() {
                  return (u =
                    Object.assign ||
                    function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e]
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                      }
                      return t
                    }).apply(this, arguments)
                }
                var c = 'stpp.ttml.im1t',
                  d = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                  h = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
                  f = { left: 'start', center: 'center', right: 'end', start: 'start', end: 'end' }
                function g(t, e, r, n, c) {
                  var d = Object(i.findBox)(new Uint8Array(t), ['mdat'])
                  if (0 !== d.length) {
                    var h = d[0],
                      g = Object(a.utf8ArrayToStr)(h),
                      S = Object(o.toTimescaleFromScale)(e, 1, r)
                    try {
                      n(
                        (function (t, e) {
                          var r = new DOMParser().parseFromString(t, 'text/xml').getElementsByTagName('tt')[0]
                          if (!r) throw new Error('Invalid ttml')
                          var i = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 },
                            n = Object.keys(i).reduce(function (t, e) {
                              return (t[e] = r.getAttribute('ttp:' + e) || i[e]), t
                            }, {}),
                            a = 'preserve' !== r.getAttribute('xml:space'),
                            o = p(v(r, 'styling', 'style')),
                            c = p(v(r, 'layout', 'region')),
                            d = v(r, 'body', '[begin]')
                          return [].map
                            .call(d, function (t) {
                              var r = m(t, a)
                              if (!r || !t.hasAttribute('begin')) return null
                              var i = T(t.getAttribute('begin'), n),
                                d = T(t.getAttribute('dur'), n),
                                h = T(t.getAttribute('end'), n)
                              if (null === i) throw E(t)
                              if (null === h) {
                                if (null === d) throw E(t)
                                h = i + d
                              }
                              var g = new s.default(i - e, h - e, r)
                              g.id = Object(l.generateCueId)(g.startTime, g.endTime, g.text)
                              var v = c[t.getAttribute('region')],
                                p = o[t.getAttribute('style')]
                              ;(g.position = 10), (g.size = 80)
                              var S = (function (t, e) {
                                  var r = 'http://www.w3.org/ns/ttml#styling'
                                  return [
                                    'displayAlign',
                                    'textAlign',
                                    'color',
                                    'backgroundColor',
                                    'fontSize',
                                    'fontFamily',
                                  ].reduce(function (i, n) {
                                    var s = y(e, r, n) || y(t, r, n)
                                    return s && (i[n] = s), i
                                  }, {})
                                })(v, p),
                                b = S.textAlign
                              if (b) {
                                var L = f[b]
                                L && (g.lineAlign = L), (g.align = b)
                              }
                              return u(g, S), g
                            })
                            .filter(function (t) {
                              return null !== t
                            })
                        })(g, S),
                      )
                    } catch (b) {
                      c(b)
                    }
                  } else c(new Error('Could not parse IMSC1 mdat'))
                }
                function v(t, e, r) {
                  var i = t.getElementsByTagName(e)[0]
                  return i ? [].slice.call(i.querySelectorAll(r)) : []
                }
                function p(t) {
                  return t.reduce(function (t, e) {
                    var r = e.getAttribute('xml:id')
                    return r && (t[r] = e), t
                  }, {})
                }
                function m(t, e) {
                  return [].slice.call(t.childNodes).reduce(function (t, r, i) {
                    var n
                    return 'br' === r.nodeName && i
                      ? t + '\n'
                      : null !== (n = r.childNodes) && void 0 !== n && n.length
                      ? m(r, e)
                      : e
                      ? t + r.textContent.trim().replace(/\s+/g, ' ')
                      : t + r.textContent
                  }, '')
                }
                function y(t, e, r) {
                  return t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
                }
                function E(t) {
                  return new Error('Could not parse ttml timestamp ' + t)
                }
                function T(t, e) {
                  if (!t) return null
                  var r = Object(n.parseTimeStamp)(t)
                  return (
                    null === r &&
                      (d.test(t)
                        ? (r = (function (t, e) {
                            var r = d.exec(t),
                              i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate
                            return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
                          })(t, e))
                        : h.test(t) &&
                          (r = (function (t, e) {
                            var r = h.exec(t),
                              i = Number(r[1])
                            switch (r[2]) {
                              case 'h':
                                return 3600 * i
                              case 'm':
                                return 60 * i
                              case 'ms':
                                return 1e3 * i
                              case 'f':
                                return i / e.frameRate
                              case 't':
                                return i / e.tickRate
                            }
                            return i
                          })(t, e))),
                    r
                  )
                }
              },
            './src/utils/logger.ts':
              /*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
              /*! exports provided: enableLogs, logger */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'enableLogs', function () {
                    return o
                  }),
                  r.d(e, 'logger', function () {
                    return l
                  })
                var i = function () {},
                  n = { trace: i, debug: i, log: i, warn: i, info: i, error: i },
                  s = n
                function a(t) {
                  var e = self.console[t]
                  return e ? e.bind(self.console, '[' + t + '] >') : i
                }
                function o(t) {
                  if ((self.console && !0 === t) || 'object' == typeof t) {
                    !(function (t) {
                      for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i]
                      r.forEach(function (e) {
                        s[e] = t[e] ? t[e].bind(t) : a(e)
                      })
                    })(t, 'debug', 'log', 'info', 'warn', 'error')
                    try {
                      s.log()
                    } catch (e) {
                      s = n
                    }
                  } else s = n
                }
                var l = n
              },
            './src/utils/mediakeys-helper.ts':
              /*!***************************************!*\
  !*** ./src/utils/mediakeys-helper.ts ***!
  \***************************************/
              /*! exports provided: KeySystems, requestMediaKeySystemAccess */ function (t, e, r) {
                'use strict'
                var i
                r.r(e),
                  r.d(e, 'KeySystems', function () {
                    return i
                  }),
                  r.d(e, 'requestMediaKeySystemAccess', function () {
                    return n
                  }),
                  (function (t) {
                    ;(t.WIDEVINE = 'com.widevine.alpha'), (t.PLAYREADY = 'com.microsoft.playready')
                  })(i || (i = {}))
                var n =
                  'undefined' != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess
                    ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
                    : null
              },
            './src/utils/mediasource-helper.ts':
              /*!*****************************************!*\
  !*** ./src/utils/mediasource-helper.ts ***!
  \*****************************************/
              /*! exports provided: getMediaSource */ function (t, e, r) {
                'use strict'
                function i() {
                  return self.MediaSource || self.WebKitMediaSource
                }
                r.r(e),
                  r.d(e, 'getMediaSource', function () {
                    return i
                  })
              },
            './src/utils/mp4-tools.ts':
              /*!********************************!*\
  !*** ./src/utils/mp4-tools.ts ***!
  \********************************/
              /*! exports provided: RemuxerTrackIdConfig, bin2str, readUint16, readUint32, readSint32, writeUint32, findBox, parseSegmentIndex, parseInitSegment, getStartDTS, getDuration, computeRawDurationFromSamples, offsetStartDTS, segmentValidRange, appendUint8Array, parseSamples, parseSEIMessageFromNALu, parseEmsg */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'RemuxerTrackIdConfig', function () {
                    return l
                  }),
                  r.d(e, 'bin2str', function () {
                    return u
                  }),
                  r.d(e, 'readUint16', function () {
                    return c
                  }),
                  r.d(e, 'readUint32', function () {
                    return d
                  }),
                  r.d(e, 'readSint32', function () {
                    return h
                  }),
                  r.d(e, 'writeUint32', function () {
                    return f
                  }),
                  r.d(e, 'findBox', function () {
                    return g
                  }),
                  r.d(e, 'parseSegmentIndex', function () {
                    return v
                  }),
                  r.d(e, 'parseInitSegment', function () {
                    return p
                  }),
                  r.d(e, 'getStartDTS', function () {
                    return m
                  }),
                  r.d(e, 'getDuration', function () {
                    return y
                  }),
                  r.d(e, 'computeRawDurationFromSamples', function () {
                    return E
                  }),
                  r.d(e, 'offsetStartDTS', function () {
                    return T
                  }),
                  r.d(e, 'segmentValidRange', function () {
                    return S
                  }),
                  r.d(e, 'appendUint8Array', function () {
                    return b
                  }),
                  r.d(e, 'parseSamples', function () {
                    return L
                  }),
                  r.d(e, 'parseSEIMessageFromNALu', function () {
                    return D
                  }),
                  r.d(e, 'parseEmsg', function () {
                    return R
                  })
                var i = r(/*! ./typed-array */ './src/utils/typed-array.ts'),
                  n = r(/*! ../loader/fragment */ './src/loader/fragment.ts'),
                  s = r(/*! ../demux/id3 */ './src/demux/id3.ts'),
                  a = Math.pow(2, 32) - 1,
                  o = [].push,
                  l = { video: 1, audio: 2, id3: 3, text: 4 }
                function u(t) {
                  return String.fromCharCode.apply(null, t)
                }
                function c(t, e) {
                  var r = (t[e] << 8) | t[e + 1]
                  return r < 0 ? 65536 + r : r
                }
                function d(t, e) {
                  var r = h(t, e)
                  return r < 0 ? 4294967296 + r : r
                }
                function h(t, e) {
                  return (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]
                }
                function f(t, e, r) {
                  ;(t[e] = r >> 24), (t[e + 1] = (r >> 16) & 255), (t[e + 2] = (r >> 8) & 255), (t[e + 3] = 255 & r)
                }
                function g(t, e) {
                  var r = []
                  if (!e.length) return r
                  for (var i = t.byteLength, n = 0; n < i; ) {
                    var s = d(t, n),
                      a = s > 1 ? n + s : i
                    if (u(t.subarray(n + 4, n + 8)) === e[0])
                      if (1 === e.length) r.push(t.subarray(n + 8, a))
                      else {
                        var l = g(t.subarray(n + 8, a), e.slice(1))
                        l.length && o.apply(r, l)
                      }
                    n = a
                  }
                  return r
                }
                function v(t) {
                  var e = g(t, ['moov'])[0],
                    r = e ? e.length : null,
                    i = g(t, ['sidx'])
                  if (!i || !i[0]) return null
                  var n = [],
                    s = i[0],
                    a = s[0],
                    o = 0 === a ? 8 : 16,
                    l = d(s, o)
                  ;(o += 4), (o += 0 === a ? 8 : 16), (o += 2)
                  var u = s.length + 0,
                    h = c(s, o)
                  o += 2
                  for (var f = 0; f < h; f++) {
                    var v = o,
                      p = d(s, v),
                      m = 2147483647 & p
                    if (1 == (2147483648 & p) >>> 31) return null
                    var y = d(s, (v += 4))
                    ;(v += 4),
                      n.push({
                        referenceSize: m,
                        subsegmentDuration: y,
                        info: { duration: y / l, start: u, end: u + m - 1 },
                      }),
                      (u += m),
                      (o = v += 4)
                  }
                  return {
                    earliestPresentationTime: 0,
                    timescale: l,
                    version: a,
                    referencesCount: h,
                    references: n,
                    moovEndOffset: r,
                  }
                }
                function p(t) {
                  for (var e = [], r = g(t, ['moov', 'trak']), i = 0; i < r.length; i++) {
                    var s = r[i],
                      a = g(s, ['tkhd'])[0]
                    if (a) {
                      var o = a[0],
                        l = 0 === o ? 12 : 20,
                        c = d(a, l),
                        h = g(s, ['mdia', 'mdhd'])[0]
                      if (h) {
                        var f = d(h, (l = 0 === (o = h[0]) ? 12 : 20)),
                          v = g(s, ['mdia', 'hdlr'])[0]
                        if (v) {
                          var p = u(v.subarray(8, 12)),
                            m = { soun: n.ElementaryStreamTypes.AUDIO, vide: n.ElementaryStreamTypes.VIDEO }[p]
                          if (m) {
                            var y = g(s, ['mdia', 'minf', 'stbl', 'stsd'])[0],
                              E = void 0
                            y && (E = u(y.subarray(12, 16))),
                              (e[c] = { timescale: f, type: m }),
                              (e[m] = { timescale: f, id: c, codec: E })
                          }
                        }
                      }
                    }
                  }
                  return (
                    g(t, ['moov', 'mvex', 'trex']).forEach(function (t) {
                      var r = d(t, 4),
                        i = e[r]
                      i && (i.default = { duration: d(t, 12), flags: d(t, 20) })
                    }),
                    e
                  )
                }
                function m(t, e) {
                  return (
                    g(e, ['moof', 'traf']).reduce(function (e, r) {
                      var i = g(r, ['tfdt'])[0],
                        n = i[0],
                        s = g(r, ['tfhd']).reduce(function (e, r) {
                          var s = d(r, 4),
                            a = t[s]
                          if (a) {
                            var o = d(i, 4)
                            1 === n && ((o *= Math.pow(2, 32)), (o += d(i, 8)))
                            var l = o / (a.timescale || 9e4)
                            if (isFinite(l) && (null === e || l < e)) return l
                          }
                          return e
                        }, null)
                      return null !== s && isFinite(s) && (null === e || s < e) ? s : e
                    }, null) || 0
                  )
                }
                function y(t, e) {
                  for (var r = 0, i = 0, s = 0, a = g(t, ['moof', 'traf']), o = 0; o < a.length; o++) {
                    var l = a[o],
                      u = g(l, ['tfhd'])[0],
                      c = e[d(u, 4)]
                    if (c) {
                      var h = c.default,
                        f = d(u, 0) | (null == h ? void 0 : h.flags),
                        p = null == h ? void 0 : h.duration
                      8 & f && (p = d(u, 2 & f ? 12 : 8))
                      for (var m = c.timescale || 9e4, y = g(l, ['trun']), T = 0; T < y.length; T++)
                        !(r = E(y[T])) && p && (r = p * d(y[T], 4)),
                          c.type === n.ElementaryStreamTypes.VIDEO
                            ? (i += r / m)
                            : c.type === n.ElementaryStreamTypes.AUDIO && (s += r / m)
                    }
                  }
                  if (0 === i && 0 === s) {
                    var S = v(t)
                    if (null != S && S.references)
                      return S.references.reduce(function (t, e) {
                        return t + e.info.duration || 0
                      }, 0)
                  }
                  return i || s
                }
                function E(t) {
                  var e = d(t, 0),
                    r = 8
                  1 & e && (r += 4), 4 & e && (r += 4)
                  for (var i = 0, n = d(t, 4), s = 0; s < n; s++)
                    256 & e && ((i += d(t, r)), (r += 4)),
                      512 & e && (r += 4),
                      1024 & e && (r += 4),
                      2048 & e && (r += 4)
                  return i
                }
                function T(t, e, r) {
                  g(e, ['moof', 'traf']).forEach(function (e) {
                    g(e, ['tfhd']).forEach(function (i) {
                      var n = d(i, 4),
                        s = t[n]
                      if (s) {
                        var o = s.timescale || 9e4
                        g(e, ['tfdt']).forEach(function (t) {
                          var e = t[0],
                            i = d(t, 4)
                          if (0 === e) f(t, 4, i - r * o)
                          else {
                            ;(i *= Math.pow(2, 32)), (i += d(t, 8)), (i -= r * o), (i = Math.max(i, 0))
                            var n = Math.floor(i / (a + 1)),
                              s = Math.floor(i % (a + 1))
                            f(t, 4, n), f(t, 8, s)
                          }
                        })
                      }
                    })
                  })
                }
                function S(t) {
                  var e = { valid: null, remainder: null },
                    r = g(t, ['moof'])
                  if (!r) return e
                  if (r.length < 2) return (e.remainder = t), e
                  var n = r[r.length - 1]
                  return (
                    (e.valid = Object(i.sliceUint8)(t, 0, n.byteOffset - 8)),
                    (e.remainder = Object(i.sliceUint8)(t, n.byteOffset - 8)),
                    e
                  )
                }
                function b(t, e) {
                  var r = new Uint8Array(t.length + e.length)
                  return r.set(t), r.set(e, t.length), r
                }
                function L(t, e) {
                  var r = [],
                    i = e.samples,
                    s = e.timescale,
                    a = e.id,
                    o = !1
                  return (
                    g(i, ['moof']).map(function (l) {
                      var u = l.byteOffset - 8
                      g(l, ['traf']).map(function (l) {
                        var c = g(l, ['tfdt']).map(function (t) {
                          var e = t[0],
                            r = d(t, 4)
                          return 1 === e && ((r *= Math.pow(2, 32)), (r += d(t, 8))), r / s
                        })[0]
                        return (
                          void 0 !== c && (t = c),
                          g(l, ['tfhd']).map(function (c) {
                            var f = d(c, 4),
                              v = 16777215 & d(c, 0),
                              p = 0,
                              m = 0 != (16 & v),
                              y = 0,
                              E = 0 != (32 & v),
                              T = 8
                            f === a &&
                              (0 != (1 & v) && (T += 8),
                              0 != (2 & v) && (T += 4),
                              0 != (8 & v) && ((p = d(c, T)), (T += 4)),
                              m && ((y = d(c, T)), (T += 4)),
                              E && (T += 4),
                              'video' === e.type &&
                                (o = (function (t) {
                                  if (!t) return !1
                                  var e = t.indexOf('.'),
                                    r = e < 0 ? t : t.substring(0, e)
                                  return 'hvc1' === r || 'hev1' === r || 'dvh1' === r || 'dvhe' === r
                                })(e.codec)),
                              g(l, ['trun']).map(function (a) {
                                var l = a[0],
                                  c = 16777215 & d(a, 0),
                                  f = 0 != (1 & c),
                                  g = 0,
                                  v = 0 != (4 & c),
                                  m = 0 != (256 & c),
                                  E = 0,
                                  T = 0 != (512 & c),
                                  S = 0,
                                  b = 0 != (1024 & c),
                                  L = 0 != (2048 & c),
                                  R = 0,
                                  k = d(a, 4),
                                  _ = 8
                                f && ((g = d(a, _)), (_ += 4)), v && (_ += 4)
                                for (var I = g + u, C = 0; C < k; C++) {
                                  if (
                                    (m ? ((E = d(a, _)), (_ += 4)) : (E = p),
                                    T ? ((S = d(a, _)), (_ += 4)) : (S = y),
                                    b && (_ += 4),
                                    L && ((R = 0 === l ? d(a, _) : h(a, _)), (_ += 4)),
                                    e.type === n.ElementaryStreamTypes.VIDEO)
                                  )
                                    for (var O = 0; O < S; ) {
                                      var w = d(i, I),
                                        x = 31 & i[(I += 4)]
                                      A(o, x) && D(i.subarray(I, I + w), t + R / s, r), (I += w), (O += w + 4)
                                    }
                                  t += E / s
                                }
                              }))
                          })
                        )
                      })
                    }),
                    r
                  )
                }
                function A(t, e) {
                  return t ? 39 === e || 40 === e : 6 === e
                }
                function D(t, e, r) {
                  var i = (function (t) {
                      for (var e = t.byteLength, r = [], i = 1; i < e - 2; )
                        0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), (i += 2)) : i++
                      if (0 === r.length) return t
                      var n = e - r.length,
                        s = new Uint8Array(n),
                        a = 0
                      for (i = 0; i < n; a++, i++) a === r[0] && (a++, r.shift()), (s[i] = t[a])
                      return s
                    })(t),
                    n = 0
                  n++
                  for (var a = 0, o = 0, l = !1, u = 0; n < i.length; ) {
                    a = 0
                    do {
                      if (n >= i.length) break
                      a += u = i[n++]
                    } while (255 === u)
                    o = 0
                    do {
                      if (n >= i.length) break
                      o += u = i[n++]
                    } while (255 === u)
                    var h = i.length - n
                    if (!l && 4 === a && n < i.length) {
                      if (((l = !0), 181 === i[n++])) {
                        var f = c(i, n)
                        if (((n += 2), 49 === f)) {
                          var g = d(i, n)
                          if (((n += 4), 1195456820 === g)) {
                            var v = i[n++]
                            if (3 === v) {
                              var p = i[n++],
                                m = 64 & p,
                                y = m ? 2 + 3 * (31 & p) : 0,
                                E = new Uint8Array(y)
                              if (m) {
                                E[0] = p
                                for (var T = 1; T < y; T++) E[T] = i[n++]
                              }
                              r.push({ type: v, payloadType: a, pts: e, bytes: E })
                            }
                          }
                        }
                      }
                    } else if (5 === a && o < h) {
                      if (((l = !0), o > 16)) {
                        for (var S = [], b = 0; b < 16; b++) {
                          var L = i[n++].toString(16)
                          S.push(1 == L.length ? '0' + L : L), (3 !== b && 5 !== b && 7 !== b && 9 !== b) || S.push('-')
                        }
                        for (var A = o - 16, D = new Uint8Array(A), R = 0; R < A; R++) D[R] = i[n++]
                        r.push({
                          payloadType: a,
                          pts: e,
                          uuid: S.join(''),
                          userData: Object(s.utf8ArrayToStr)(D),
                          userDataBytes: D,
                        })
                      }
                    } else if (o < h) n += o
                    else if (o > h) break
                  }
                }
                function R(t) {
                  var e = t[0],
                    r = '',
                    i = '',
                    n = 0,
                    s = 0,
                    a = 0,
                    o = 0,
                    l = 0,
                    c = 0
                  if (0 === e) {
                    for (; '\0' !== u(t.subarray(c, c + 1)); ) (r += u(t.subarray(c, c + 1))), (c += 1)
                    for (r += u(t.subarray(c, c + 1)), c += 1; '\0' !== u(t.subarray(c, c + 1)); )
                      (i += u(t.subarray(c, c + 1))), (c += 1)
                    ;(i += u(t.subarray(c, c + 1))),
                      (c += 1),
                      (n = d(t, 12)),
                      (s = d(t, 16)),
                      (o = d(t, 20)),
                      (l = d(t, 24)),
                      (c = 28)
                  } else if (1 === e) {
                    n = d(t, (c += 4))
                    var h = d(t, (c += 4)),
                      f = d(t, (c += 4))
                    for (
                      c += 4,
                        a = Math.pow(2, 32) * h + f,
                        Number.isSafeInteger(a) || (a = Number.MAX_SAFE_INTEGER),
                        o = d(t, c),
                        l = d(t, (c += 4)),
                        c += 4;
                      '\0' !== u(t.subarray(c, c + 1));

                    )
                      (r += u(t.subarray(c, c + 1))), (c += 1)
                    for (r += u(t.subarray(c, c + 1)), c += 1; '\0' !== u(t.subarray(c, c + 1)); )
                      (i += u(t.subarray(c, c + 1))), (c += 1)
                    ;(i += u(t.subarray(c, c + 1))), (c += 1)
                  }
                  return {
                    schemeIdUri: r,
                    value: i,
                    timeScale: n,
                    presentationTime: a,
                    presentationTimeDelta: s,
                    eventDuration: o,
                    id: l,
                    payload: t.subarray(c, t.byteLength),
                  }
                }
              },
            './src/utils/output-filter.ts':
              /*!************************************!*\
  !*** ./src/utils/output-filter.ts ***!
  \************************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'default', function () {
                    return i
                  })
                var i = (function () {
                  function t(t, e) {
                    ;(this.timelineController = void 0),
                      (this.cueRanges = []),
                      (this.trackName = void 0),
                      (this.startTime = null),
                      (this.endTime = null),
                      (this.screen = null),
                      (this.timelineController = t),
                      (this.trackName = e)
                  }
                  var e = t.prototype
                  return (
                    (e.dispatchCue = function () {
                      null !== this.startTime &&
                        (this.timelineController.addCues(
                          this.trackName,
                          this.startTime,
                          this.endTime,
                          this.screen,
                          this.cueRanges,
                        ),
                        (this.startTime = null))
                    }),
                    (e.newCue = function (t, e, r) {
                      ;(null === this.startTime || this.startTime > t) && (this.startTime = t),
                        (this.endTime = e),
                        (this.screen = r),
                        this.timelineController.createCaptionsTrack(this.trackName)
                    }),
                    (e.reset = function () {
                      this.cueRanges = []
                    }),
                    t
                  )
                })()
              },
            './src/utils/texttrack-utils.ts':
              /*!**************************************!*\
  !*** ./src/utils/texttrack-utils.ts ***!
  \**************************************/
              /*! exports provided: sendAddTrackEvent, addCueToTrack, clearCurrentCues, removeCuesInRange, getCuesInRange */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                r.r(e),
                  r.d(e, 'sendAddTrackEvent', function () {
                    return n
                  }),
                  r.d(e, 'addCueToTrack', function () {
                    return s
                  }),
                  r.d(e, 'clearCurrentCues', function () {
                    return a
                  }),
                  r.d(e, 'removeCuesInRange', function () {
                    return o
                  }),
                  r.d(e, 'getCuesInRange', function () {
                    return l
                  })
                var i = r(/*! ./logger */ './src/utils/logger.ts')
                function n(t, e) {
                  var r
                  try {
                    r = new Event('addtrack')
                  } catch (i) {
                    ;(r = document.createEvent('Event')).initEvent('addtrack', !1, !1)
                  }
                  ;(r.track = t), e.dispatchEvent(r)
                }
                function s(t, e) {
                  var r = t.mode
                  if (('disabled' === r && (t.mode = 'hidden'), t.cues && !t.cues.getCueById(e.id)))
                    try {
                      if ((t.addCue(e), !t.cues.getCueById(e.id))) throw new Error('addCue is failed for: ' + e)
                    } catch (s) {
                      i.logger.debug('[texttrack-utils]: ' + s)
                      var n = new self.TextTrackCue(e.startTime, e.endTime, e.text)
                      ;(n.id = e.id), t.addCue(n)
                    }
                  'disabled' === r && (t.mode = r)
                }
                function a(t) {
                  var e = t.mode
                  if (('disabled' === e && (t.mode = 'hidden'), t.cues))
                    for (var r = t.cues.length; r--; ) t.removeCue(t.cues[r])
                  'disabled' === e && (t.mode = e)
                }
                function o(t, e, r) {
                  var i = t.mode
                  if (('disabled' === i && (t.mode = 'hidden'), t.cues && t.cues.length > 0))
                    for (var n = l(t.cues, e, r), s = 0; s < n.length; s++) t.removeCue(n[s])
                  'disabled' === i && (t.mode = i)
                }
                function l(t, e, r) {
                  var i = [],
                    n = (function (t, e) {
                      if (e < t[0].startTime) return 0
                      var r = t.length - 1
                      if (e > t[r].endTime) return -1
                      for (var i = 0, n = r; i <= n; ) {
                        var s = Math.floor((n + i) / 2)
                        if (e < t[s].startTime) n = s - 1
                        else {
                          if (!(e > t[s].startTime && i < r)) return s
                          i = s + 1
                        }
                      }
                      return t[i].startTime - e < e - t[n].startTime ? i : n
                    })(t, e)
                  if (n > -1)
                    for (var s = n, a = t.length; s < a; s++) {
                      var o = t[s]
                      if (o.startTime >= e && o.endTime <= r) i.push(o)
                      else if (o.startTime > r) return i
                    }
                  return i
                }
              },
            './src/utils/time-ranges.ts':
              /*!**********************************!*\
  !*** ./src/utils/time-ranges.ts ***!
  \**********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  (e.default = {
                    toString: function (t) {
                      for (var e = '', r = t.length, i = 0; i < r; i++)
                        e += '[' + t.start(i).toFixed(3) + ',' + t.end(i).toFixed(3) + ']'
                      return e
                    },
                  })
              },
            './src/utils/timescale-conversion.ts':
              /*!*******************************************!*\
  !*** ./src/utils/timescale-conversion.ts ***!
  \*******************************************/
              /*! exports provided: toTimescaleFromBase, toTimescaleFromScale, toMsFromMpegTsClock, toMpegTsClockFromTimescale */ function (
                t,
                e,
                r,
              ) {
                'use strict'
                function i(t, e, r, i) {
                  void 0 === r && (r = 1), void 0 === i && (i = !1)
                  var n = t * e * r
                  return i ? Math.round(n) : n
                }
                function n(t, e, r, n) {
                  return void 0 === r && (r = 1), void 0 === n && (n = !1), i(t, e, 1 / r, n)
                }
                function s(t, e) {
                  return void 0 === e && (e = !1), i(t, 1e3, 1 / 9e4, e)
                }
                function a(t, e) {
                  return void 0 === e && (e = 1), i(t, 9e4, 1 / e)
                }
                r.r(e),
                  r.d(e, 'toTimescaleFromBase', function () {
                    return i
                  }),
                  r.d(e, 'toTimescaleFromScale', function () {
                    return n
                  }),
                  r.d(e, 'toMsFromMpegTsClock', function () {
                    return s
                  }),
                  r.d(e, 'toMpegTsClockFromTimescale', function () {
                    return a
                  })
              },
            './src/utils/typed-array.ts':
              /*!**********************************!*\
  !*** ./src/utils/typed-array.ts ***!
  \**********************************/
              /*! exports provided: sliceUint8 */ function (t, e, r) {
                'use strict'
                function i(t, e, r) {
                  return Uint8Array.prototype.slice
                    ? t.slice(e, r)
                    : new Uint8Array(Array.prototype.slice.call(t, e, r))
                }
                r.r(e),
                  r.d(e, 'sliceUint8', function () {
                    return i
                  })
              },
            './src/utils/vttcue.ts':
              /*!*****************************!*\
  !*** ./src/utils/vttcue.ts ***!
  \*****************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e),
                  (e.default = (function () {
                    if ('undefined' != typeof self && self.VTTCue) return self.VTTCue
                    var t = ['', 'lr', 'rl'],
                      e = ['start', 'middle', 'end', 'left', 'right']
                    function r(t, e) {
                      if ('string' != typeof e) return !1
                      if (!Array.isArray(t)) return !1
                      var r = e.toLowerCase()
                      return !!~t.indexOf(r) && r
                    }
                    function i(t) {
                      return r(e, t)
                    }
                    function n(t) {
                      for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i]
                      for (var n = 1; n < arguments.length; n++) {
                        var s = arguments[n]
                        for (var a in s) t[a] = s[a]
                      }
                      return t
                    }
                    function s(e, s, a) {
                      var o = this,
                        l = { enumerable: !0 }
                      o.hasBeenReset = !1
                      var u = '',
                        c = !1,
                        d = e,
                        h = s,
                        f = a,
                        g = null,
                        v = '',
                        p = !0,
                        m = 'auto',
                        y = 'start',
                        E = 50,
                        T = 'middle',
                        S = 50,
                        b = 'middle'
                      Object.defineProperty(
                        o,
                        'id',
                        n({}, l, {
                          get: function () {
                            return u
                          },
                          set: function (t) {
                            u = '' + t
                          },
                        }),
                      ),
                        Object.defineProperty(
                          o,
                          'pauseOnExit',
                          n({}, l, {
                            get: function () {
                              return c
                            },
                            set: function (t) {
                              c = !!t
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'startTime',
                          n({}, l, {
                            get: function () {
                              return d
                            },
                            set: function (t) {
                              if ('number' != typeof t) throw new TypeError('Start time must be set to a number.')
                              ;(d = t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'endTime',
                          n({}, l, {
                            get: function () {
                              return h
                            },
                            set: function (t) {
                              if ('number' != typeof t) throw new TypeError('End time must be set to a number.')
                              ;(h = t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'text',
                          n({}, l, {
                            get: function () {
                              return f
                            },
                            set: function (t) {
                              ;(f = '' + t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'region',
                          n({}, l, {
                            get: function () {
                              return g
                            },
                            set: function (t) {
                              ;(g = t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'vertical',
                          n({}, l, {
                            get: function () {
                              return v
                            },
                            set: function (e) {
                              var i = (function (e) {
                                return r(t, e)
                              })(e)
                              if (!1 === i) throw new SyntaxError('An invalid or illegal string was specified.')
                              ;(v = i), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'snapToLines',
                          n({}, l, {
                            get: function () {
                              return p
                            },
                            set: function (t) {
                              ;(p = !!t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'line',
                          n({}, l, {
                            get: function () {
                              return m
                            },
                            set: function (t) {
                              if ('number' != typeof t && 'auto' !== t)
                                throw new SyntaxError('An invalid number or illegal string was specified.')
                              ;(m = t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'lineAlign',
                          n({}, l, {
                            get: function () {
                              return y
                            },
                            set: function (t) {
                              var e = i(t)
                              if (!e) throw new SyntaxError('An invalid or illegal string was specified.')
                              ;(y = e), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'position',
                          n({}, l, {
                            get: function () {
                              return E
                            },
                            set: function (t) {
                              if (t < 0 || t > 100) throw new Error('Position must be between 0 and 100.')
                              ;(E = t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'positionAlign',
                          n({}, l, {
                            get: function () {
                              return T
                            },
                            set: function (t) {
                              var e = i(t)
                              if (!e) throw new SyntaxError('An invalid or illegal string was specified.')
                              ;(T = e), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'size',
                          n({}, l, {
                            get: function () {
                              return S
                            },
                            set: function (t) {
                              if (t < 0 || t > 100) throw new Error('Size must be between 0 and 100.')
                              ;(S = t), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        Object.defineProperty(
                          o,
                          'align',
                          n({}, l, {
                            get: function () {
                              return b
                            },
                            set: function (t) {
                              var e = i(t)
                              if (!e) throw new SyntaxError('An invalid or illegal string was specified.')
                              ;(b = e), (this.hasBeenReset = !0)
                            },
                          }),
                        ),
                        (o.displayState = void 0)
                    }
                    return (
                      (s.prototype.getCueAsHTML = function () {
                        return self.WebVTT.convertCueToDOMTree(self, this.text)
                      }),
                      s
                    )
                  })())
              },
            './src/utils/vttparser.ts':
              /*!********************************!*\
  !*** ./src/utils/vttparser.ts ***!
  \********************************/
              /*! exports provided: parseTimeStamp, fixLineBreaks, VTTParser */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'parseTimeStamp', function () {
                    return s
                  }),
                  r.d(e, 'fixLineBreaks', function () {
                    return d
                  }),
                  r.d(e, 'VTTParser', function () {
                    return h
                  })
                var i = r(/*! ./vttcue */ './src/utils/vttcue.ts'),
                  n = (function () {
                    function t() {}
                    return (
                      (t.prototype.decode = function (t, e) {
                        if (!t) return ''
                        if ('string' != typeof t) throw new Error('Error - expected string data.')
                        return decodeURIComponent(encodeURIComponent(t))
                      }),
                      t
                    )
                  })()
                function s(t) {
                  function e(t, e, r, i) {
                    return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
                  }
                  var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/)
                  return r ? (parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4])) : null
                }
                var a = (function () {
                  function t() {
                    this.values = Object.create(null)
                  }
                  var e = t.prototype
                  return (
                    (e.set = function (t, e) {
                      this.get(t) || '' === e || (this.values[t] = e)
                    }),
                    (e.get = function (t, e, r) {
                      return r ? (this.has(t) ? this.values[t] : e[r]) : this.has(t) ? this.values[t] : e
                    }),
                    (e.has = function (t) {
                      return t in this.values
                    }),
                    (e.alt = function (t, e, r) {
                      for (var i = 0; i < r.length; ++i)
                        if (e === r[i]) {
                          this.set(t, e)
                          break
                        }
                    }),
                    (e.integer = function (t, e) {
                      ;/^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                    }),
                    (e.percent = function (t, e) {
                      if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                        var r = parseFloat(e)
                        if (r >= 0 && r <= 100) return this.set(t, r), !0
                      }
                      return !1
                    }),
                    t
                  )
                })()
                function o(t, e, r, i) {
                  var n = i ? t.split(i) : [t]
                  for (var s in n)
                    if ('string' == typeof n[s]) {
                      var a = n[s].split(r)
                      2 === a.length && e(a[0], a[1])
                    }
                }
                var l = new i.default(0, 0, ''),
                  u = 'middle' === l.align ? 'middle' : 'center'
                function c(t, e, r) {
                  var i = t
                  function n() {
                    var e = s(t)
                    if (null === e) throw new Error('Malformed timestamp: ' + i)
                    return (t = t.replace(/^[^\sa-zA-Z-]+/, '')), e
                  }
                  function c() {
                    t = t.replace(/^\s+/, '')
                  }
                  if ((c(), (e.startTime = n()), c(), '--\x3e' !== t.substr(0, 3)))
                    throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i)
                  ;(t = t.substr(3)),
                    c(),
                    (e.endTime = n()),
                    c(),
                    (function (t, e) {
                      var i = new a()
                      o(
                        t,
                        function (t, e) {
                          var n
                          switch (t) {
                            case 'region':
                              for (var s = r.length - 1; s >= 0; s--)
                                if (r[s].id === e) {
                                  i.set(t, r[s].region)
                                  break
                                }
                              break
                            case 'vertical':
                              i.alt(t, e, ['rl', 'lr'])
                              break
                            case 'line':
                              ;(n = e.split(',')),
                                i.integer(t, n[0]),
                                i.percent(t, n[0]) && i.set('snapToLines', !1),
                                i.alt(t, n[0], ['auto']),
                                2 === n.length && i.alt('lineAlign', n[1], ['start', u, 'end'])
                              break
                            case 'position':
                              ;(n = e.split(',')),
                                i.percent(t, n[0]),
                                2 === n.length &&
                                  i.alt('positionAlign', n[1], ['start', u, 'end', 'line-left', 'line-right', 'auto'])
                              break
                            case 'size':
                              i.percent(t, e)
                              break
                            case 'align':
                              i.alt(t, e, ['start', u, 'end', 'left', 'right'])
                          }
                        },
                        /:/,
                        /\s/,
                      ),
                        (e.region = i.get('region', null)),
                        (e.vertical = i.get('vertical', ''))
                      var n = i.get('line', 'auto')
                      'auto' === n && -1 === l.line && (n = -1),
                        (e.line = n),
                        (e.lineAlign = i.get('lineAlign', 'start')),
                        (e.snapToLines = i.get('snapToLines', !0)),
                        (e.size = i.get('size', 100)),
                        (e.align = i.get('align', u))
                      var s = i.get('position', 'auto')
                      'auto' === s &&
                        50 === l.position &&
                        (s =
                          'start' === e.align || 'left' === e.align
                            ? 0
                            : 'end' === e.align || 'right' === e.align
                            ? 100
                            : 50),
                        (e.position = s)
                    })(t, e)
                }
                function d(t) {
                  return t.replace(/<br(?: \/)?>/gi, '\n')
                }
                var h = (function () {
                  function t() {
                    ;(this.state = 'INITIAL'),
                      (this.buffer = ''),
                      (this.decoder = new n()),
                      (this.regionList = []),
                      (this.cue = null),
                      (this.oncue = void 0),
                      (this.onparsingerror = void 0),
                      (this.onflush = void 0)
                  }
                  var e = t.prototype
                  return (
                    (e.parse = function (t) {
                      var e = this
                      function r() {
                        var t = e.buffer,
                          r = 0
                        for (t = d(t); r < t.length && '\r' !== t[r] && '\n' !== t[r]; ) ++r
                        var i = t.substr(0, r)
                        return '\r' === t[r] && ++r, '\n' === t[r] && ++r, (e.buffer = t.substr(r)), i
                      }
                      t && (e.buffer += e.decoder.decode(t, { stream: !0 }))
                      try {
                        var n = ''
                        if ('INITIAL' === e.state) {
                          if (!/\r\n|\n/.test(e.buffer)) return this
                          var s = (n = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/)
                          if (!s || !s[0]) throw new Error('Malformed WebVTT signature.')
                          e.state = 'HEADER'
                        }
                        for (var a = !1; e.buffer; ) {
                          if (!/\r\n|\n/.test(e.buffer)) return this
                          switch ((a ? (a = !1) : (n = r()), e.state)) {
                            case 'HEADER':
                              ;/:/.test(n) ? o(n, function (t, e) {}, /:/) : n || (e.state = 'ID')
                              continue
                            case 'NOTE':
                              n || (e.state = 'ID')
                              continue
                            case 'ID':
                              if (/^NOTE($|[ \t])/.test(n)) {
                                e.state = 'NOTE'
                                break
                              }
                              if (!n) continue
                              if (((e.cue = new i.default(0, 0, '')), (e.state = 'CUE'), -1 === n.indexOf('--\x3e'))) {
                                e.cue.id = n
                                continue
                              }
                            case 'CUE':
                              if (!e.cue) {
                                e.state = 'BADCUE'
                                continue
                              }
                              try {
                                c(n, e.cue, e.regionList)
                              } catch (u) {
                                ;(e.cue = null), (e.state = 'BADCUE')
                                continue
                              }
                              e.state = 'CUETEXT'
                              continue
                            case 'CUETEXT':
                              var l = -1 !== n.indexOf('--\x3e')
                              if (!n || (l && (a = !0))) {
                                e.oncue && e.cue && e.oncue(e.cue), (e.cue = null), (e.state = 'ID')
                                continue
                              }
                              if (null === e.cue) continue
                              e.cue.text && (e.cue.text += '\n'), (e.cue.text += n)
                              continue
                            case 'BADCUE':
                              n || (e.state = 'ID')
                          }
                        }
                      } catch (u) {
                        'CUETEXT' === e.state && e.cue && e.oncue && e.oncue(e.cue),
                          (e.cue = null),
                          (e.state = 'INITIAL' === e.state ? 'BADWEBVTT' : 'BADCUE')
                      }
                      return this
                    }),
                    (e.flush = function () {
                      var t = this
                      try {
                        if (
                          ((t.cue || 'HEADER' === t.state) && ((t.buffer += '\n\n'), t.parse()),
                          'INITIAL' === t.state || 'BADWEBVTT' === t.state)
                        )
                          throw new Error('Malformed WebVTT signature.')
                      } catch (e) {
                        t.onparsingerror && t.onparsingerror(e)
                      }
                      return t.onflush && t.onflush(), this
                    }),
                    t
                  )
                })()
              },
            './src/utils/webvtt-parser.ts':
              /*!************************************!*\
  !*** ./src/utils/webvtt-parser.ts ***!
  \************************************/
              /*! exports provided: generateCueId, parseWebVTT */ function (t, e, r) {
                'use strict'
                r.r(e),
                  r.d(e, 'generateCueId', function () {
                    return d
                  }),
                  r.d(e, 'parseWebVTT', function () {
                    return h
                  })
                var i = r(/*! ./src/polyfills/number */ './src/polyfills/number.ts'),
                  n = r(/*! ./vttparser */ './src/utils/vttparser.ts'),
                  s = r(/*! ../demux/id3 */ './src/demux/id3.ts'),
                  a = r(/*! ./timescale-conversion */ './src/utils/timescale-conversion.ts'),
                  o = r(/*! ../remux/mp4-remuxer */ './src/remux/mp4-remuxer.ts'),
                  l = /\r\n|\n\r|\n|\r/g,
                  u = function (t, e, r) {
                    return void 0 === r && (r = 0), t.substr(r, e.length) === e
                  },
                  c = function (t) {
                    for (var e = 5381, r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r)
                    return (e >>> 0).toString()
                  }
                function d(t, e, r) {
                  return c(t.toString()) + c(e.toString()) + c(r)
                }
                function h(t, e, r, c, h, f, g, v) {
                  var p,
                    m = new n.VTTParser(),
                    y = Object(s.utf8ArrayToStr)(new Uint8Array(t)).trim().replace(l, '\n').split('\n'),
                    E = [],
                    T = Object(a.toMpegTsClockFromTimescale)(e, r),
                    S = '00:00.000',
                    b = 0,
                    L = 0,
                    A = !0,
                    D = !1
                  ;(m.oncue = function (t) {
                    var e = c[h],
                      r = c.ccOffset,
                      i = (b - T) / 9e4
                    if (
                      (null != e &&
                        e.new &&
                        (void 0 !== L
                          ? (r = c.ccOffset = e.start)
                          : (function (t, e, r) {
                              var i = t[e],
                                n = t[i.prevCC]
                              if (!n || (!n.new && i.new))
                                return (t.ccOffset = t.presentationOffset = i.start), void (i.new = !1)
                              for (; null !== (s = n) && void 0 !== s && s.new; ) {
                                var s
                                ;(t.ccOffset += i.start - n.start), (i.new = !1), (n = t[(i = n).prevCC])
                              }
                              t.presentationOffset = r
                            })(c, h, i)),
                      i && (r = i - c.presentationOffset),
                      D)
                    ) {
                      var n = t.endTime - t.startTime,
                        s = Object(o.normalizePts)(9e4 * (t.startTime + r - L), 9e4 * f) / 9e4
                      ;(t.startTime = s), (t.endTime = s + n)
                    }
                    var a = t.text.trim()
                    ;(t.text = decodeURIComponent(encodeURIComponent(a))),
                      t.id || (t.id = d(t.startTime, t.endTime, a)),
                      t.endTime > 0 && E.push(t)
                  }),
                    (m.onparsingerror = function (t) {
                      p = t
                    }),
                    (m.onflush = function () {
                      p ? v(p) : g(E)
                    }),
                    y.forEach(function (t) {
                      if (A) {
                        if (u(t, 'X-TIMESTAMP-MAP=')) {
                          ;(A = !1),
                            (D = !0),
                            t
                              .substr(16)
                              .split(',')
                              .forEach(function (t) {
                                u(t, 'LOCAL:') ? (S = t.substr(6)) : u(t, 'MPEGTS:') && (b = parseInt(t.substr(7)))
                              })
                          try {
                            L =
                              (function (t) {
                                var e = parseInt(t.substr(-3)),
                                  r = parseInt(t.substr(-6, 2)),
                                  n = parseInt(t.substr(-9, 2)),
                                  s = t.length > 9 ? parseInt(t.substr(0, t.indexOf(':'))) : 0
                                if (
                                  !(
                                    Object(i.isFiniteNumber)(e) &&
                                    Object(i.isFiniteNumber)(r) &&
                                    Object(i.isFiniteNumber)(n) &&
                                    Object(i.isFiniteNumber)(s)
                                  )
                                )
                                  throw Error('Malformed X-TIMESTAMP-MAP: Local:' + t)
                                return (e += 1e3 * r), (e += 6e4 * n) + 36e5 * s
                              })(S) / 1e3
                          } catch (e) {
                            ;(D = !1), (p = e)
                          }
                          return
                        }
                        '' === t && (A = !1)
                      }
                      m.parse(t + '\n')
                    }),
                    m.flush()
                }
              },
            './src/utils/xhr-loader.ts':
              /*!*********************************!*\
  !*** ./src/utils/xhr-loader.ts ***!
  \*********************************/
              /*! exports provided: default */ function (t, e, r) {
                'use strict'
                r.r(e)
                var i = r(/*! ../utils/logger */ './src/utils/logger.ts'),
                  n = r(/*! ../loader/load-stats */ './src/loader/load-stats.ts'),
                  s = /^age:\s*[\d.]+\s*$/m,
                  a = (function () {
                    function t(t) {
                      ;(this.xhrSetup = void 0),
                        (this.requestTimeout = void 0),
                        (this.retryTimeout = void 0),
                        (this.retryDelay = void 0),
                        (this.type = null),
                        (this.config = null),
                        (this.callbacks = null),
                        (this.context = void 0),
                        (this.loader = null),
                        (this.stats = void 0),
                        (this.xhrSetup = t ? t.xhrSetup : null),
                        (this.stats = new n.LoadStats()),
                        (this.retryDelay = 0)
                    }
                    var e = t.prototype
                    return (
                      (e.destroy = function () {
                        ;(this.callbacks = null), this.abortInternal(), (this.loader = null), (this.config = null)
                      }),
                      (e.abortInternal = function () {
                        var t = this.loader
                        self.clearTimeout(this.requestTimeout),
                          self.clearTimeout(this.retryTimeout),
                          t &&
                            ((t.onreadystatechange = null),
                            (t.onprogress = null),
                            4 !== t.readyState && ((this.stats.aborted = !0), t.abort()))
                      }),
                      (e.abort = function () {
                        var t
                        this.abortInternal(),
                          null !== (t = this.callbacks) &&
                            void 0 !== t &&
                            t.onAbort &&
                            this.callbacks.onAbort(this.stats, this.context, this.loader)
                      }),
                      (e.load = function (t, e, r) {
                        if (this.stats.loading.start) throw new Error('Loader can only be used once.')
                        ;(this.stats.loading.start = self.performance.now()),
                          (this.context = t),
                          (this.config = e),
                          (this.callbacks = r),
                          (this.retryDelay = e.retryDelay),
                          (this.type = e.type),
                          this.loadInternal()
                      }),
                      (e.loadInternal = function () {
                        var t = this.config,
                          e = this.context
                        if (t) {
                          var r = (this.loader = new self.XMLHttpRequest()),
                            i = this.stats
                          ;(i.loading.first = 0), (i.loaded = 0)
                          var n = this.xhrSetup
                          try {
                            if (n)
                              try {
                                n(r, e.url, this.type)
                              } catch (s) {
                                r.open('GET', e.url, !0), n(r, e.url)
                              }
                            r.readyState || r.open('GET', e.url, !0)
                          } catch (s) {
                            return void this.callbacks.onError({ code: r.status, text: s.message }, e, r)
                          }
                          e.rangeEnd && r.setRequestHeader('Range', 'bytes=' + e.rangeStart + '-' + (e.rangeEnd - 1)),
                            (r.onreadystatechange = this.readystatechange.bind(this)),
                            (r.onprogress = this.loadprogress.bind(this)),
                            (r.responseType = e.responseType),
                            self.clearTimeout(this.requestTimeout),
                            (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout)),
                            r.send()
                        }
                      }),
                      (e.readystatechange = function () {
                        var t = this.context,
                          e = this.loader,
                          r = this.stats
                        if (t && e) {
                          var n = e.readyState,
                            s = this.config
                          if (!r.aborted && n >= 2)
                            if (
                              (self.clearTimeout(this.requestTimeout),
                              0 === r.loading.first &&
                                (r.loading.first = Math.max(self.performance.now(), r.loading.start)),
                              4 === n)
                            ) {
                              ;(e.onreadystatechange = null), (e.onprogress = null)
                              var a = e.status
                              if (a >= 200 && a < 300) {
                                var o, l
                                if (
                                  ((r.loading.end = Math.max(self.performance.now(), r.loading.first)),
                                  (l =
                                    'arraybuffer' === t.responseType
                                      ? (o = e.response).byteLength
                                      : (o = e.responseText).length),
                                  (r.loaded = r.total = l),
                                  !this.callbacks)
                                )
                                  return
                                var u = this.callbacks.onProgress
                                if ((u && u(r, t, o, e), !this.callbacks)) return
                                var c = { url: e.responseURL, data: o }
                                this.callbacks.onSuccess(c, r, t, e)
                              } else
                                r.retry >= s.maxRetry || (a >= 400 && a < 499)
                                  ? (i.logger.error(a + ' while loading ' + t.url),
                                    this.callbacks.onError({ code: a, text: e.statusText }, t, e))
                                  : (i.logger.warn(
                                      a + ' while loading ' + t.url + ', retrying in ' + this.retryDelay + '...',
                                    ),
                                    this.abortInternal(),
                                    (this.loader = null),
                                    self.clearTimeout(this.retryTimeout),
                                    (this.retryTimeout = self.setTimeout(
                                      this.loadInternal.bind(this),
                                      this.retryDelay,
                                    )),
                                    (this.retryDelay = Math.min(2 * this.retryDelay, s.maxRetryDelay)),
                                    r.retry++)
                            } else
                              self.clearTimeout(this.requestTimeout),
                                (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout))
                        }
                      }),
                      (e.loadtimeout = function () {
                        i.logger.warn('timeout while loading ' + this.context.url)
                        var t = this.callbacks
                        t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
                      }),
                      (e.loadprogress = function (t) {
                        var e = this.stats
                        ;(e.loaded = t.loaded), t.lengthComputable && (e.total = t.total)
                      }),
                      (e.getCacheAge = function () {
                        var t = null
                        if (this.loader && s.test(this.loader.getAllResponseHeaders())) {
                          var e = this.loader.getResponseHeader('age')
                          t = e ? parseFloat(e) : null
                        }
                        return t
                      }),
                      t
                    )
                  })()
                e.default = a
              },
          }).default
        }),
        (t.exports = i()))
    },
    '3YN3': function (t, e, r) {
      'use strict'
      r.r(e)
      var i = r('/Hsh'),
        n = r.n(i)
      e.default = n.a
    },
  },
])
//# sourceMappingURL=WIPED
