;(window.webpackJsonp = window.webpackJsonp || []).push([
  [171],
  {
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        u = (n('849X'), n('TJCb'), n('7x/C'), n('JtPf'), n('KqXw'), n('LJOr'), n('yiKp')),
        c = n.n(u),
        s = n('KEM+'),
        l = n.n(s),
        p = (n('IAdD'), n('0zG9'), n('yH/f'), n('5Yy7')),
        f = n.n(p),
        h = n('2VqO'),
        d = n.n(h),
        v = n('mAxt'),
        y = n.n(v),
        m = (n('2G9S'), n('CEs6')),
        g = (function (e) {
          f()(n, e)
          var t = d()(n)
          function n(e, i, a) {
            var o
            return (
              r()(this, n),
              ((o = t.call(
                this,
                ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(i, ' message: ').concat(a),
              )).url = e),
              (o.status = i),
              o
            )
          }
          return o()(n)
        })(y()(Error))
      l()(g, 'displayName', 'ProxseeApiError')
      var b,
        k,
        P = n('epkG'),
        _ = n('SrIh'),
        S = n('RqPI'),
        A = 0,
        T = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j
            r()(this, e),
              l()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(c()({ abuse_type: R.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(c()({ abuse_type: R.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(c()({ abuse_type: R.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(c()({ abuse_type: R.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(c()({ abuse_type: R.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(c()({ abuse_type: R.AbusiveBehavior }, e))
                },
              })
            var i = n.httpConfig
            ;(this.client = new P.a(c()(c()({}, H), i))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  k = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!k
                },
              },
              {
                key: 'isLoggedIn',
                value: function () {
                  return !!this._authToken
                },
              },
              {
                key: 'isTwitterAuthenticated',
                value: function () {
                  if (!this.initialized()) return !1
                  var e = k.store.getState()
                  return Object(S.m)(e)
                },
              },
              {
                key: 'authToken',
                value: function () {
                  return this._authToken
                },
              },
              {
                key: 'dispatch',
                value: function (e) {
                  return this.initialized()
                    ? this.client.dispatch(e).then(m.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n.params,
                    r = Object.assign(I(), n.headers),
                    a = JSON.stringify(c()(c()({}, t), {}, { cookie: this._authToken })),
                    o = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(o), headers: r, params: i, data: a })
                },
              },
              {
                key: 'login',
                value: function () {
                  var e = this
                  return this._authPromise
                    ? this._authPromise
                    : this.initialized()
                    ? this.isTwitterAuthenticated()
                      ? this.isLoggedIn()
                        ? Promise.resolve()
                        : ((this._authPromise = k.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(_.a)('[ProxseeApi] failed to login', { extra: t })
                            })
                            .then(function () {
                              e._authPromise = null
                            })),
                          this._authPromise)
                      : Promise.resolve()
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'loginTwitterToken',
                value: function (e) {
                  var t = { jwt: e, vendor_id: x, create_user: !1, direct: !0 }
                  return this.post('loginTwitterToken', t)
                },
              },
              {
                key: 'publicPath',
                value: function (e) {
                  return this.isLoggedIn() ? e : ''.concat(e, 'Public')
                },
              },
              {
                key: 'accessChat',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post(t.publicPath('accessChat'), { chat_token: e })
                  })
                },
              },
              {
                key: 'getChatHistory',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return this.login().then(function () {
                    var i = n.params,
                      r = Object.assign(I(), n.headers),
                      a = JSON.stringify({
                        access_token: e.access_token,
                        cursor: e.cursor,
                        limit: 1e3,
                        since: null,
                        quick_get: !0,
                      })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: r, params: i, data: a })
                  })
                },
              },
              {
                key: 'trackAudiospaceClientEvent',
                value: function (e) {
                  var t = this
                  return e.length
                    ? this.login().then(function () {
                        return t
                          .post(t.publicPath('trackAudiospaceClientEvent'), { time: Date.now(), log: e })
                          .catch(function (e) {
                            Object(_.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
                          })
                      })
                    : Promise.resolve()
                },
              },
              {
                key: '_reportSpace',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('markAbuse', e).catch(function (e) {
                      Object(_.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        C = 'X-Idempotence',
        w = 'X-Periscope-User-Agent',
        E = 'X-Attempt',
        O = ((b = {}), l()(b, w, 'Twitter/m5'), l()(b, E, 1), b)
      function I() {
        var e,
          t = Date.now()
        return (
          (A = t <= A ? A + 1 : t),
          Object.assign({}, O, ((e = {}), l()(e, C, A), l()(e, 'content-type', 'application/json'), e))
        )
      }
      var x = 'm5-proxsee-login-a2011357b73e',
        j = {},
        H = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        i = t.status,
                        r = Object(m.a)(t)
                      return new g(n, i, r.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var N,
        R = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        L = new T(),
        z = n('G6rE'),
        F = new Error('[AudioModule] config not initialized'),
        M = new ((function () {
          function e() {
            r()(this, e), (this.proxsee = L)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(N = e), L.init(N)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!N
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = N.store.getState()
                    return z.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return N ? N.api.AudioSpaces.byId(e) : Promise.reject(F)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return N ? N.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(F)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return N ? N.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(F)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return N ? N.api.AudioSpaces.search(e, t) : Promise.reject(F)
                },
              },
            ]),
            e
          )
        })())()
    },
    u2Vg: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, '__DANGEROUS_IMPORT_VIDEOPLAYER_BASE__', function () {
          return C
        }),
        n.d(t, '__DANGEROUS_IMPORT__', function () {
          return w
        })
      var i = n('yiKp'),
        r = n.n(i),
        a = n('ddV6'),
        o = n.n(a),
        u = (n('z84I'), n('ERkP')),
        c = n.n(u),
        s = n('v6aA'),
        l = n('rxPX'),
        p = function () {
          return function (e, t, n) {
            return n.api.getHttpClient()
          }
        },
        f = Object(l.a)()
          .propsFromActions(function () {
            return { getTwitterAuthedHttpClient: p }
          })
          .withAnalytics(),
        h = n('Pc/x'),
        d = n('gOg7')
      var v = n('epkG'),
        y = n('88qn'),
        m = n('fs1G'),
        g = n('mf9H'),
        b = n('lklz'),
        k = n('MWbm'),
        P = n('HT/6'),
        _ = n('Zl35'),
        S = n('rHpw')
      function A(e) {
        var t = c.a.useContext(s.a).featureSwitches,
          n = e.broadcastId,
          i = e.isLive,
          a = e.media,
          u = e.mediaKey,
          l = e.onEnded,
          p = e.onPlayerApi,
          f = e.onPlayerState,
          v = e.requestedTimecode,
          k = c.a.useState(null),
          _ = o()(k, 2),
          S = _[0],
          A = _[1],
          C = c.a.useRef({ playbackCoordinationEmitter: null, previousPlayerState: null }),
          w = a || (n && u)
        if (
          (c.a.useEffect(
            function () {
              null === S &&
                w &&
                Object(y.a)({ showControls: !1, source: {} }, t).then(function (e) {
                  return A(function () {
                    return e
                  })
                })
            },
            [S, w, t],
          ),
          c.a.useEffect(function () {
            return function () {
              var e = C.current.playbackCoordinationEmitter
              e && e.unregister()
            }
          }, []),
          null === S || !w)
        )
          return null
        var I = {
          analytics: (function (e, t) {
            var n = e.analytics.contextualScribeNamespace,
              i = {
                scribeContext: r()({}, n),
                enableShortFormCompleteLogging: t.isTrue('responsive_web_video_pcomplete_enabled'),
                periscopeAuthToken: h.a.proxsee.authToken(),
              },
              a = {
                log: function (t) {
                  var n = t.category,
                    i = t.data,
                    a = t.namespace
                  null != a &&
                    a.action &&
                    e.analytics.scribe(r()(r()({}, a), {}, { data: r()(r()({}, i), {}, { _category_: n }) }))
                },
              }
            return new d.a(a, { log: function () {} }, e.getTwitterAuthedHttpClient(), i)
          })(e, t),
          basePlayerClass: S,
          httpClient: O,
          onApiReady: function (t) {
            var i
            t.play(), 'function' == typeof p && p(t)
            var r = null == a || null === (i = a.video_info) || void 0 === i ? void 0 : i.duration_millis
            'number' == typeof r && 'number' == typeof v && t.scrubToFraction(v / r)
            var o = e.disablePlaybackCoordination
                ? m.a
                : function () {
                    return t.pause()
                  },
              c = n && u ? P.a.SPACE : P.a.NORMAL
            C.current.playbackCoordinationEmitter = (function (e, t) {
              var n = {
                onAutoPlayRequest: function () {},
                onPauseRequest: e,
                canAutoplay: !1,
                isLooping: !1,
                playbackPriority: t,
              }
              return g.b.register(n)
            })(o, c)
          },
          onStateUpdate: function (e, t) {
            'function' == typeof f && f(e, t),
              (function (e) {
                var t = E(e)
                e.isPlaying &&
                  t &&
                  t.durationMs === t.currentTimeMs &&
                  'function' == typeof l &&
                  (l(),
                  C.current.playbackCoordinationEmitter && C.current.playbackCoordinationEmitter.signalPlaybackFinish())
              })(e),
              (function (e) {
                var t = C.current,
                  n = t.playbackCoordinationEmitter,
                  i = t.previousPlayerState,
                  r = null === i,
                  a = null == i ? void 0 : i.isPlaying,
                  o = e.isPlaying,
                  u = !r && a && !o
                ;(!r && a) || !o ? u && n && n.signalPause() : n && n.signalPlay()
              })(e),
              (C.current.previousPlayerState = e)
          },
          twitterAuthedHttpClient: e.getTwitterAuthedHttpClient(),
        }
        if (n && u) {
          var x = r()(
            r()({}, I),
            {},
            {
              configType: 'static',
              contentId: u,
              contentType: 'broadcast',
              variants: [],
              videoId: b.b.forAudioSpace(n, u, i),
            },
          )
          return c.a.createElement(T, { key: n, playerConfig: x })
        }
        if (a) {
          var j = r()(
            r()({}, I),
            {},
            {
              configType: 'static',
              contentId: a.id_str,
              loop: !1,
              contentType: 'media_entity',
              durationMs: a.video_info.duration_millis,
              variants: a.video_info.variants.map(function (e) {
                e.bitrate
                return { type: e.content_type, src: e.url }
              }),
            },
          )
          return c.a.createElement(T, { key: a.id_str, playerConfig: j })
        }
        return null
      }
      function T(e) {
        var t = e.playerConfig
        return c.a.createElement(k.a, { style: I.displayNone }, c.a.createElement(_.b, t))
      }
      var C = A,
        w = f(A),
        E = function (e) {
          return e && e.tracks[e.currentTrackId]
        },
        O = new v.a({}),
        I = S.a.create(function (e) {
          return { displayNone: { display: 'none' } }
        })
    },
  },
])
//# sourceMappingURL=WIPED
