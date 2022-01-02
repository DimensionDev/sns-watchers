;(window.webpackJsonp = window.webpackJsonp || []).push([
  [163],
  {
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c =
          (n('JtPf'),
          n('7x/C'),
          n('LJOr'),
          n('KqXw'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('KEM+')),
        u = n.n(c),
        s = (n('IAdD'), n('yH/f'), n('OZaJ'), n('5Yy7')),
        l = n.n(s),
        p = n('N+ot'),
        f = n.n(p),
        h = n('AuHH'),
        y = n.n(h),
        d = n('mAxt'),
        v = n.n(d),
        b = (n('2G9S'), n('CEs6'))
      function g(e) {
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
            r = y()(e)
          if (t) {
            var i = y()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var P = (function (e) {
        l()(n, e)
        var t = g(n)
        function n(e, r, o) {
          var a
          return (
            i()(this, n),
            ((a = t.call(
              this,
              ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(o),
            )).url = e),
            (a.status = r),
            a
          )
        }
        return n
      })(v()(Error))
      u()(P, 'displayName', 'ProxseeApiError')
      var O,
        m = n('epkG'),
        k = n('SrIh'),
        S = n('RqPI')
      function _(e, t) {
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
            ? _(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j,
        A = 0,
        T = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D
            i()(this, e),
              u()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(w({ abuse_type: M.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(w({ abuse_type: M.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(w({ abuse_type: M.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(w({ abuse_type: M.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(w({ abuse_type: M.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(w({ abuse_type: M.AbusiveBehavior }, e))
                },
              })
            var r = n.httpConfig
            ;(this.client = new m.a(w(w({}, L), r))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            a()(e, [
              {
                key: 'init',
                value: function (e) {
                  j = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!j
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
                  var e = j.store.getState()
                  return Object(S.l)(e)
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
                    ? this.client.dispatch(e).then(b.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.params,
                    i = Object.assign(R(), n.headers),
                    o = JSON.stringify(w(w({}, t), {}, { cookie: this._authToken })),
                    a = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(a), headers: i, params: r, data: o })
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
                        : ((this._authPromise = j.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(k.a)('[ProxseeApi] failed to login', { extra: t })
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
                  var t = { jwt: e, vendor_id: H, create_user: !1, direct: !0 }
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
                    var r = n.params,
                      i = Object.assign(R(), n.headers),
                      o = JSON.stringify({ access_token: e.access_token, cursor: e.cursor, limit: 1e3, since: null })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: i, params: r, data: o })
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
                            Object(k.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
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
                      Object(k.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        E = 'X-Idempotence',
        C = 'X-Periscope-User-Agent',
        x = 'X-Attempt',
        I = ((O = {}), u()(O, C, 'Twitter/m5'), u()(O, x, 1), O)
      function R() {
        var e,
          t = Date.now()
        return (
          (A = t <= A ? A + 1 : t),
          Object.assign({}, I, ((e = {}), u()(e, E, A), u()(e, 'content-type', 'application/json'), e))
        )
      }
      var H = 'm5-proxsee-login-a2011357b73e',
        D = {},
        L = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        r = t.status,
                        i = Object(b.a)(t)
                      return new P(n, r, i.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var N,
        M = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        F = new T(),
        z = n('G6rE'),
        U = new Error('[AudioModule] config not initialized'),
        V = new ((function () {
          function e() {
            i()(this, e), (this.proxsee = F)
          }
          return (
            a()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(N = e), F.init(N)
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
                  return N ? N.api.AudioSpaces.byId(e) : Promise.reject(U)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return N ? N.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(U)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return N ? N.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(U)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return N ? N.api.AudioSpaces.search(e, t) : Promise.reject(U)
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
          return E
        }),
        n.d(t, '__DANGEROUS_IMPORT__', function () {
          return C
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        o = n('ddV6'),
        a = n.n(o),
        c = (n('z84I'), n('ERkP')),
        u = n('v6aA'),
        s = n('rxPX'),
        l = function () {
          return function (e, t, n) {
            return n.api.getHttpClient()
          }
        },
        p = Object(s.a)()
          .propsFromActions(function () {
            return { getTwitterAuthedHttpClient: l }
          })
          .withAnalytics(),
        f = n('Pc/x'),
        h = n('gOg7')
      function y(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var v = n('epkG'),
        b = n('88qn'),
        g = n('fs1G'),
        P = n('mf9H'),
        O = n('lklz'),
        m = n('MWbm'),
        k = n('HT/6'),
        S = n('Zl35'),
        _ = n('rHpw')
      function w(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function A(e) {
        var t = c.useContext(u.a).featureSwitches,
          n = e.broadcastId,
          r = e.isLive,
          i = e.media,
          o = e.mediaKey,
          s = e.onEnded,
          l = e.onPlayerApi,
          p = e.onPlayerState,
          y = e.requestedTimecode,
          v = c.useState(null),
          m = a()(v, 2),
          S = m[0],
          _ = m[1],
          w = c.useRef({ playbackCoordinationEmitter: null, previousPlayerState: null }),
          A = i || (n && o)
        if (
          (c.useEffect(
            function () {
              null === S &&
                A &&
                Object(b.a)({ showControls: !1, source: {} }, t).then(function (e) {
                  return _(function () {
                    return e
                  })
                })
            },
            [S, A, t],
          ),
          c.useEffect(function () {
            return function () {
              var e = w.current.playbackCoordinationEmitter
              e && e.unregister()
            }
          }, []),
          null === S || !A)
        )
          return null
        var E = {
          analytics: (function (e, t) {
            var n = {
                scribeContext: d({}, e.analytics.contextualScribeNamespace),
                enableShortFormCompleteLogging: t.isTrue('responsive_web_video_pcomplete_enabled'),
                periscopeAuthToken: f.a.proxsee.authToken(),
              },
              r = {
                log: function (t) {
                  var n = t.category,
                    r = t.data,
                    i = t.namespace
                  null != i &&
                    i.action &&
                    e.analytics.scribe(d(d({}, i), {}, { data: d(d({}, r), {}, { _category_: n }) }))
                },
              }
            return new h.a(r, { log: function () {} }, e.getTwitterAuthedHttpClient(), n)
          })(e, t),
          basePlayerClass: S,
          httpClient: I,
          onApiReady: function (t) {
            var r
            t.play(), 'function' == typeof l && l(t)
            var a = null == i || null === (r = i.video_info) || void 0 === r ? void 0 : r.duration_millis
            'number' == typeof a && 'number' == typeof y && t.scrubToFraction(y / a)
            var c = e.disablePlaybackCoordination
                ? g.a
                : function () {
                    return t.pause()
                  },
              u = n && o ? k.a.SPACE : k.a.NORMAL
            w.current.playbackCoordinationEmitter = (function (e, t) {
              var n = {
                onAutoPlayRequest: function () {},
                onPauseRequest: e,
                canAutoplay: !1,
                isLooping: !1,
                playbackPriority: t,
              }
              return P.b.register(n)
            })(c, u)
          },
          onStateUpdate: function (e, t) {
            'function' == typeof p && p(e, t),
              (function (e) {
                var t = x(e)
                e.isPlaying &&
                  t &&
                  t.durationMs === t.currentTimeMs &&
                  'function' == typeof s &&
                  (s(),
                  w.current.playbackCoordinationEmitter && w.current.playbackCoordinationEmitter.signalPlaybackFinish())
              })(e),
              (function (e) {
                var t = w.current,
                  n = t.playbackCoordinationEmitter,
                  r = t.previousPlayerState,
                  i = null === r,
                  o = null == r ? void 0 : r.isPlaying,
                  a = e.isPlaying,
                  c = !i && o && !a
                ;(!i && o) || !a ? c && n && n.signalPause() : n && n.signalPlay()
              })(e),
              (w.current.previousPlayerState = e)
          },
          twitterAuthedHttpClient: e.getTwitterAuthedHttpClient(),
        }
        if (n && o) {
          var C = j(
            j({}, E),
            {},
            {
              configType: 'static',
              contentId: o,
              contentType: 'broadcast',
              variants: [],
              videoId: O.b.forAudioSpace(n, o, r),
            },
          )
          return c.createElement(T, { key: n, playerConfig: C })
        }
        if (i) {
          var R = j(
            j({}, E),
            {},
            {
              configType: 'static',
              contentId: i.id_str,
              loop: !1,
              contentType: 'media_entity',
              durationMs: i.video_info.duration_millis,
              variants: i.video_info.variants.map(function (e) {
                e.bitrate
                return { type: e.content_type, src: e.url }
              }),
            },
          )
          return c.createElement(T, { key: i.id_str, playerConfig: R })
        }
        return null
      }
      function T(e) {
        var t = e.playerConfig
        return c.createElement(m.a, { style: R.displayNone }, c.createElement(S.b, t))
      }
      var E = A,
        C = p(A),
        x = function (e) {
          return e && e.tracks[e.currentTrackId]
        },
        I = new v.a({}),
        R = _.a.create(function (e) {
          return { displayNone: { display: 'none' } }
        })
    },
  },
])
//# sourceMappingURL=WIPED
