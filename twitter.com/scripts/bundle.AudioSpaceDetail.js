;(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        c = n.n(a),
        o = n('1Pcy'),
        s = n.n(o),
        u = n('5Yy7'),
        l = n.n(u),
        p = n('2VqO'),
        h = n.n(p),
        d = n('KEM+'),
        f = n.n(d),
        m = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(m),
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
        E = Object(b.a)()
          .propsFromState(function () {
            return { broadcastId: k }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: P }
          }),
        w = (n('1t7P'), n('jQ/y'), n('3XMw')),
        T = n.n(w),
        A = n('rJoH'),
        _ = n('fzjU'),
        C = n('Tg44')
      function j(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                i,
                r,
                a = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                c = a ? O.hostSpace({ name: a }) : O.hostSpaceFallback,
                o = e.title || c,
                s = O.descriptionGeneric,
                u = (null == e ? void 0 : e.participants.total) || 0,
                l = _.a.formatCountShort(u),
                p = O.descriptionListening({ count: l })
              if (e.state === C.a.SpaceState.Running)
                (n = O.titleRunning({ spaceTitle: o })),
                  (i = O.descriptionFormatRunning({ hostSpace: c, descriptionListening: p, descriptionGeneric: s })),
                  (r = F.ttl.Frequent)
              else if (e.state === C.a.SpaceState.NotStarted || e.state === C.a.SpaceState.PrePublished) {
                var h = O.scheduledSpaceGeneric
                ;(n = O.titleScheduled({ date: h, spaceTitle: o })),
                  (i = O.descriptionFormatScheduled({ hostSpace: c, descriptionGeneric: s })),
                  (r = F.ttl.Frequent)
              } else
                (n = O.titleEnded({ spaceTitle: o })),
                  (i = O.descriptionFormatEnded({ hostSpace: c, descriptionGeneric: s })),
                  (r = F.ttl.LongLivedCache)
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
            image: F.image.url,
            imageType: F.image.type,
            imageW: F.image.width,
            imageH: F.image.height,
            imageAlt: F.image.alt,
            ttl: a,
          }
        })(t)
        return v.a.createElement(A.a, n)
      }
      var O = {
          twitterSpaces: T.a.gaa01f2c,
          hostSpace: T.a.b6d3e0ee,
          hostSpaceFallback: T.a.ab4fc8bb,
          descriptionGeneric: T.a.fec3c1ef,
          descriptionListeners: T.a.ce447fcb,
          descriptionListening: T.a.ef7da97e,
          scheduledSpaceGeneric: T.a.f8464691,
          titleRunning: T.a.a065e7e7,
          titleScheduled: T.a.hd5e7b20,
          titleEnded: T.a.f826f7ee,
          descriptionFormatRunning: T.a.b2a94e92,
          descriptionFormatScheduled: T.a.f6432ce5,
          descriptionFormatEnded: T.a.f6432ce5,
        },
        F = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: O.twitterSpaces,
          },
        },
        x = n('G8HL'),
        I = (function (e) {
          l()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c]
            return (e = t.call.apply(t, [this].concat(a))), f()(s()(e), 'state', { space: null }), e
          }
          return (
            c()(n, [
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
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(L, this.props),
                    v.a.createElement(j, { space: this.state.space }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      function L(e) {
        return (
          v.a.useEffect(function () {
            S.canUseDOM && g.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var M = E(Object(x.a)(I))
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        c = n.n(a),
        o = (n('849X'), n('TJCb'), n('7x/C'), n('JtPf'), n('KqXw'), n('LJOr'), n('yiKp')),
        s = n.n(o),
        u = n('KEM+'),
        l = n.n(u),
        p = (n('IAdD'), n('0zG9'), n('yH/f'), n('5Yy7')),
        h = n.n(p),
        d = n('2VqO'),
        f = n.n(d),
        m = n('mAxt'),
        v = n.n(m),
        g = (n('2G9S'), n('CEs6')),
        S = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e, i, a) {
            var c
            return (
              r()(this, n),
              ((c = t.call(
                this,
                ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(i, ' message: ').concat(a),
              )).url = e),
              (c.status = i),
              c
            )
          }
          return c()(n)
        })(v()(Error))
      l()(S, 'displayName', 'ProxseeApiError')
      var y,
        b,
        k = n('epkG'),
        P = n('SrIh'),
        E = n('RqPI'),
        w = 0,
        T = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x
            r()(this, e),
              l()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(s()({ abuse_type: M.AbusiveBehavior }, e))
                },
              })
            var i = n.httpConfig
            ;(this.client = new k.a(s()(s()({}, I), i))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            c()(e, [
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
                  return Object(E.n)(e)
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
                    r = Object.assign(O(), n.headers),
                    a = JSON.stringify(s()(s()({}, t), {}, { cookie: this._authToken })),
                    c = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(c), headers: r, params: i, data: a })
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
                  var t = { jwt: e, vendor_id: F, create_user: !1, direct: !0 }
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
                      r = Object.assign(O(), n.headers),
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
                key: 'createClip',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('createClip', e).catch(function (e) {
                      Object(P.a)('[ProxseeApi] failed to create clip', { extra: { err: e } })
                    })
                  })
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
        A = 'X-Idempotence',
        _ = 'X-Periscope-User-Agent',
        C = 'X-Attempt',
        j = ((y = {}), l()(y, _, 'Twitter/m5'), l()(y, C, 1), y)
      function O() {
        var e,
          t = Date.now()
        return (
          (w = t <= w ? w + 1 : t),
          Object.assign({}, j, ((e = {}), l()(e, A, w), l()(e, 'content-type', 'application/json'), e))
        )
      }
      var F = 'm5-proxsee-login-a2011357b73e',
        x = {},
        I = {
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
        M = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        z = new T(),
        G = n('G6rE'),
        H = new Error('[AudioModule] config not initialized'),
        R = new ((function () {
          function e() {
            r()(this, e), (this.proxsee = z)
          }
          return (
            c()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(L = e), z.init(L)
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
                    return G.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return L ? L.api.AudioSpaces.byId(e) : Promise.reject(H)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return L ? L.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(H)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return L ? L.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(H)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return L ? L.api.AudioSpaces.search(e, t) : Promise.reject(H)
                },
              },
            ]),
            e
          )
        })())()
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
    qTXf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return f
        })
      n('KqXw'), n('WNMA')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('Fg/a'),
        c = n('es0u'),
        o = n('SrtL'),
        s = n('Z5jE'),
        u = n('3XMw'),
        l = n.n(u),
        p = n('VS6U'),
        h = n('MWbm'),
        d = n('VRZ4')
      function f(e) {
        return r.a.createElement(a.a, e, r.a.createElement(m, e))
      }
      function m(e) {
        var t = S.title
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(o.a, { title: t, withMeta: !1 }),
          r.a.createElement(p.a, {
            backLocation: '/',
            documentTitle: t,
            history: e.history,
            primaryContent: r.a.createElement(v, e),
            sidebarContent: r.a.createElement(c.a, null),
            title: t,
          }),
        )
      }
      function v(e) {
        var t = Object(s.a)(e.match)
        return r.a.createElement(
          h.a,
          { style: g.container },
          r.a.createElement(
            h.a,
            { style: g.cardContainer },
            r.a.createElement(d.a, { audioSpaceId: t, withDirectJoin: !0 }),
          ),
        )
      }
      var g = n('rHpw').a.create(function (e) {
          return { container: { paddingHorizontal: e.spaces.space16 }, cardContainer: { marginTop: e.spaces.space12 } }
        }),
        S = { title: l.a.ab4fc8bb }
    },
  },
])
//# sourceMappingURL=WIPED
