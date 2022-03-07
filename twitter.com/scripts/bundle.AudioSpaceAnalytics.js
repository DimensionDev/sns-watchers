;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return G
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        l = n.n(u),
        p = n('2VqO'),
        h = n.n(p),
        d = n('KEM+'),
        f = n.n(d),
        v = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        m = n.n(v),
        g = n('Pc/x'),
        S = n('6/RC'),
        y = (n('KqXw'), n('WNMA'), n('Z5jE')),
        b = n('rxPX'),
        k = function (e, t) {
          return Object(y.a)(t.match)
        },
        P = function (e) {
          return function (t, n, i) {
            return i.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        w = Object(b.a)()
          .propsFromState(function () {
            return { broadcastId: k }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: P }
          }),
        A = (n('1t7P'), n('jQ/y'), n('3XMw')),
        E = n.n(A),
        T = n('rJoH'),
        _ = n('fzjU'),
        j = n('Tg44')
      function O(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                i,
                r,
                a = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                o = a ? C.hostSpace({ name: a }) : C.hostSpaceFallback,
                c = e.title || o,
                s = C.descriptionGeneric,
                u = (null == e ? void 0 : e.participants.total) || 0,
                l = _.a.formatCountShort(u),
                p = C.descriptionListening({ count: l })
              if (e.state === j.a.SpaceState.Running)
                (n = C.titleRunning({ spaceTitle: c })),
                  (i = C.descriptionFormatRunning({ hostSpace: o, descriptionListening: p, descriptionGeneric: s })),
                  (r = I.ttl.Frequent)
              else if (e.state === j.a.SpaceState.NotStarted || e.state === j.a.SpaceState.PrePublished) {
                var h = C.scheduledSpaceGeneric
                ;(n = C.titleScheduled({ date: h, spaceTitle: c })),
                  (i = C.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: s })),
                  (r = I.ttl.Frequent)
              } else
                (n = C.titleEnded({ spaceTitle: c })),
                  (i = C.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: s })),
                  (r = I.ttl.LongLivedCache)
              var d = 'https://twitter.com/i/spaces/'.concat(e.rest_id)
              return { title: n, canonical: d, description: i, ttl: r }
            })(e),
            n = t.canonical,
            i = t.description,
            r = t.title,
            a = t.ttl
          return {
            type: 'website',
            canonical: n,
            title: r,
            description: i,
            image: I.image.url,
            imageType: I.image.type,
            imageW: I.image.width,
            imageH: I.image.height,
            imageAlt: I.image.alt,
            ttl: a,
          }
        })(t)
        return m.a.createElement(T.a, n)
      }
      var C = {
          twitterSpaces: E.a.gaa01f2c,
          hostSpace: E.a.b6d3e0ee,
          hostSpaceFallback: E.a.ab4fc8bb,
          descriptionGeneric: E.a.fec3c1ef,
          descriptionListeners: E.a.ce447fcb,
          descriptionListening: E.a.ef7da97e,
          scheduledSpaceGeneric: E.a.f8464691,
          titleRunning: E.a.a065e7e7,
          titleScheduled: E.a.hd5e7b20,
          titleEnded: E.a.f826f7ee,
          descriptionFormatRunning: E.a.b2a94e92,
          descriptionFormatScheduled: E.a.f6432ce5,
          descriptionFormatEnded: E.a.f6432ce5,
        },
        I = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: C.twitterSpaces,
          },
        },
        F = n('G8HL'),
        x = (function (e) {
          l()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), f()(s()(e), 'state', { space: null }), e
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this.props
                    .fetchAudioSpace(this.props.broadcastId)
                    .catch(function () {
                      return null
                    })
                    .then(function (t) {
                      !t || t instanceof Error || e.setState({ space: t })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(L, this.props),
                    m.a.createElement(O, { space: this.state.space }),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      function L(e) {
        return (
          m.a.useEffect(function () {
            S.canUseDOM && g.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var G = w(Object(F.a)(x))
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return N
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        c = (n('849X'), n('TJCb'), n('7x/C'), n('JtPf'), n('KqXw'), n('LJOr'), n('yiKp')),
        s = n.n(c),
        u = n('KEM+'),
        l = n.n(u),
        p = (n('IAdD'), n('0zG9'), n('yH/f'), n('5Yy7')),
        h = n.n(p),
        d = n('2VqO'),
        f = n.n(d),
        v = n('mAxt'),
        m = n.n(v),
        g = (n('2G9S'), n('CEs6')),
        S = (function (e) {
          h()(n, e)
          var t = f()(n)
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
        })(m()(Error))
      l()(S, 'displayName', 'ProxseeApiError')
      var y,
        b,
        k = n('epkG'),
        P = n('SrIh'),
        w = n('RqPI'),
        A = 0,
        E = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F
            r()(this, e),
              l()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(s()({ abuse_type: G.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(s()({ abuse_type: G.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(s()({ abuse_type: G.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(s()({ abuse_type: G.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(s()({ abuse_type: G.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(s()({ abuse_type: G.AbusiveBehavior }, e))
                },
              })
            var i = n.httpConfig
            ;(this.client = new k.a(s()(s()({}, x), i))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  b = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!b
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
                  var e = b.store.getState()
                  return Object(w.m)(e)
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
                    ? this.client.dispatch(e).then(g.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n.params,
                    r = Object.assign(C(), n.headers),
                    a = JSON.stringify(s()(s()({}, t), {}, { cookie: this._authToken })),
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
                        : ((this._authPromise = b.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(P.a)('[ProxseeApi] failed to login', { extra: t })
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
                  var t = { jwt: e, vendor_id: I, create_user: !1, direct: !0 }
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
                      r = Object.assign(C(), n.headers),
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
                            Object(P.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
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
                      Object(P.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        T = 'X-Idempotence',
        _ = 'X-Periscope-User-Agent',
        j = 'X-Attempt',
        O = ((y = {}), l()(y, _, 'Twitter/m5'), l()(y, j, 1), y)
      function C() {
        var e,
          t = Date.now()
        return (
          (A = t <= A ? A + 1 : t),
          Object.assign({}, O, ((e = {}), l()(e, T, A), l()(e, 'content-type', 'application/json'), e))
        )
      }
      var I = 'm5-proxsee-login-a2011357b73e',
        F = {},
        x = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        i = t.status,
                        r = Object(g.a)(t)
                      return new S(n, i, r.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var L,
        G = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        R = new E(),
        z = n('G6rE'),
        M = new Error('[AudioModule] config not initialized'),
        N = new ((function () {
          function e() {
            r()(this, e), (this.proxsee = R)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(L = e), R.init(L)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!L
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = L.store.getState()
                    return z.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return L ? L.api.AudioSpaces.byId(e) : Promise.reject(M)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return L ? L.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(M)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return L ? L.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(M)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return L ? L.api.AudioSpaces.search(e, t) : Promise.reject(M)
                },
              },
            ]),
            e
          )
        })())()
    },
    RMBq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return s
        })
      n('KqXw'), n('WNMA')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('7lsG'),
        o = n('Fg/a'),
        c = n('Z5jE')
      function s(e) {
        return r.a.createElement(o.a, e, r.a.createElement(u, e))
      }
      function u(e) {
        var t = Object(c.a)(e.match)
        return r.a.createElement(a.a, { audioSpaceId: t, isInteractive: !1, withoutButton: !0 })
      }
    },
    Z5jE: function (e, t, n) {
      'use strict'
      function i(e) {
        return e.params.broadcastId || ''
      }
      n.d(t, 'a', function () {
        return i
      })
    },
  },
])
//# sourceMappingURL=WIPED
