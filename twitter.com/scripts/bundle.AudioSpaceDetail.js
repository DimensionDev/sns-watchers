;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        o = n('1Pcy'),
        u = n.n(o),
        s = n('5Yy7'),
        l = n.n(s),
        p = n('N+ot'),
        h = n.n(p),
        f = n('AuHH'),
        d = n.n(f),
        v = n('KEM+'),
        m = n.n(v),
        y = (n('2G9S'), n('ERkP')),
        g = n('Pc/x'),
        S = n('6/RC'),
        b = (n('WNMA'), n('KqXw'), n('Z5jE')),
        P = n('rxPX'),
        k = function (e, t) {
          return Object(b.a)(t.match)
        },
        w = function (e) {
          return function (t, n, r) {
            return r.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        E = Object(P.a)()
          .propsFromState(function () {
            return { broadcastId: k }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: w }
          }),
        O = (n('1t7P'), n('jQ/y'), n('3XMw')),
        A = n.n(O),
        j = n('rJoH'),
        T = n('Rumh'),
        _ = n('AooF')
      function C(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                r,
                i,
                a = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                c = a ? F.hostSpace({ name: a }) : F.hostSpaceFallback,
                o = e.title || c,
                u = F.descriptionGeneric,
                s = (null == e ? void 0 : e.participants.total) || 0,
                l = T.a.formatCountShort(s),
                p = F.descriptionListening({ count: l })
              if (e.state === _.a.SpaceState.Running)
                (n = F.titleRunning({ spaceTitle: o })),
                  (r = F.descriptionFormatRunning({ hostSpace: c, descriptionListening: p, descriptionGeneric: u })),
                  (i = x.ttl.Frequent)
              else if (e.state === _.a.SpaceState.NotStarted || e.state === _.a.SpaceState.PrePublished) {
                var h = F.scheduledSpaceGeneric
                ;(n = F.titleScheduled({ date: h, spaceTitle: o })),
                  (r = F.descriptionFormatScheduled({ hostSpace: c, descriptionGeneric: u })),
                  (i = x.ttl.Frequent)
              } else
                (n = F.titleEnded({ spaceTitle: o })),
                  (r = F.descriptionFormatEnded({ hostSpace: c, descriptionGeneric: u })),
                  (i = x.ttl.LongLivedCache)
              var f = 'https://twitter.com/i/spaces/'.concat(e.rest_id)
              return { title: n, canonical: f, description: r, ttl: i }
            })(e),
            n = t.canonical,
            r = t.description,
            i = t.title,
            a = t.ttl
          return {
            type: 'website',
            canonical: n,
            title: i,
            description: r,
            image: x.image.url,
            imageType: x.image.type,
            imageW: x.image.width,
            imageH: x.image.height,
            imageAlt: x.image.alt,
            ttl: a,
          }
        })(t)
        return y.createElement(j.a, n)
      }
      var F = {
          twitterSpaces: A.a.gaa01f2c,
          hostSpace: A.a.b6d3e0ee,
          hostSpaceFallback: A.a.ab4fc8bb,
          descriptionGeneric: A.a.fec3c1ef,
          descriptionListeners: A.a.ce447fcb,
          descriptionListening: A.a.ef7da97e,
          scheduledSpaceGeneric: A.a.f8464691,
          titleRunning: A.a.a065e7e7,
          titleScheduled: A.a.hd5e7b20,
          titleEnded: A.a.f826f7ee,
          descriptionFormatRunning: A.a.b2a94e92,
          descriptionFormatScheduled: A.a.f6432ce5,
          descriptionFormatEnded: A.a.f6432ce5,
        },
        x = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: F.twitterSpaces,
          },
        },
        I = n('G8HL')
      function R(e) {
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
            r = d()(e)
          if (t) {
            var i = d()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var L = (function (e) {
        l()(n, e)
        var t = R(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
          return (e = t.call.apply(t, [this].concat(a))), m()(u()(e), 'state', { space: null }), e
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
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(H, this.props),
                  y.createElement(C, { space: this.state.space }),
                )
              },
            },
          ]),
          n
        )
      })(y.Component)
      function H(e) {
        return (
          y.useEffect(function () {
            S.canUseDOM && g.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var M = E(Object(I.a)(L))
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
      })
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        o =
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
        u = n.n(o),
        s = (n('IAdD'), n('yH/f'), n('OZaJ'), n('5Yy7')),
        l = n.n(s),
        p = n('N+ot'),
        h = n.n(p),
        f = n('AuHH'),
        d = n.n(f),
        v = n('mAxt'),
        m = n.n(v),
        y = (n('2G9S'), n('CEs6'))
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
            r = d()(e)
          if (t) {
            var i = d()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var S = (function (e) {
        l()(n, e)
        var t = g(n)
        function n(e, r, a) {
          var c
          return (
            i()(this, n),
            ((c = t.call(
              this,
              ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(a),
            )).url = e),
            (c.status = r),
            c
          )
        }
        return n
      })(m()(Error))
      u()(S, 'displayName', 'ProxseeApiError')
      var b,
        P = n('epkG'),
        k = n('SrIh'),
        w = n('RqPI')
      function E(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var A,
        j = 0,
        T = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L
            i()(this, e),
              u()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(O({ abuse_type: N.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(O({ abuse_type: N.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(O({ abuse_type: N.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(O({ abuse_type: N.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(O({ abuse_type: N.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(O({ abuse_type: N.AbusiveBehavior }, e))
                },
              })
            var r = n.httpConfig
            ;(this.client = new P.a(O(O({}, H), r))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            c()(e, [
              {
                key: 'init',
                value: function (e) {
                  A = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!A
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
                  var e = A.store.getState()
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
                    ? this.client.dispatch(e).then(y.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.params,
                    i = Object.assign(I(), n.headers),
                    a = JSON.stringify(O(O({}, t), {}, { cookie: this._authToken })),
                    c = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(c), headers: i, params: r, data: a })
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
                        : ((this._authPromise = A.api.Auth.authenticatePeriscope()
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
                  var t = { jwt: e, vendor_id: R, create_user: !1, direct: !0 }
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
                      i = Object.assign(I(), n.headers),
                      a = JSON.stringify({ access_token: e.access_token, cursor: e.cursor, limit: 1e3, since: null })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: i, params: r, data: a })
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
        _ = 'X-Idempotence',
        C = 'X-Periscope-User-Agent',
        F = 'X-Attempt',
        x = ((b = {}), u()(b, C, 'Twitter/m5'), u()(b, F, 1), b)
      function I() {
        var e,
          t = Date.now()
        return (
          (j = t <= j ? j + 1 : t),
          Object.assign({}, x, ((e = {}), u()(e, _, j), u()(e, 'content-type', 'application/json'), e))
        )
      }
      var R = 'm5-proxsee-login-a2011357b73e',
        L = {},
        H = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        r = t.status,
                        i = Object(y.a)(t)
                      return new S(n, r, i.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var M,
        N = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        G = new T(),
        X = n('G6rE'),
        z = new Error('[AudioModule] config not initialized'),
        D = new ((function () {
          function e() {
            i()(this, e), (this.proxsee = G)
          }
          return (
            c()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(M = e), G.init(M)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!M
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = M.store.getState()
                    return X.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return M ? M.api.AudioSpaces.byId(e) : Promise.reject(z)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return M ? M.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(z)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return M ? M.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(z)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return M ? M.api.AudioSpaces.search(e, t) : Promise.reject(z)
                },
              },
            ]),
            e
          )
        })())()
    },
    Z5jE: function (e, t, n) {
      'use strict'
      function r(e) {
        return e.params.broadcastId || ''
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    qTXf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return f
        })
      n('WNMA'), n('KqXw')
      var r = n('ERkP'),
        i = n('Fg/a'),
        a = n('es0u'),
        c = n('SrtL'),
        o = n('Z5jE'),
        u = n('3XMw'),
        s = n.n(u),
        l = n('VS6U'),
        p = n('MWbm'),
        h = n('bNYH')
      function f(e) {
        return r.createElement(i.a, e, r.createElement(d, e))
      }
      function d(e) {
        var t = y.title
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(c.a, { title: t, withMeta: !1 }),
          r.createElement(l.a, {
            backLocation: '/',
            documentTitle: t,
            history: e.history,
            primaryContent: r.createElement(v, e),
            sidebarContent: r.createElement(a.a, null),
            title: t,
          }),
        )
      }
      function v(e) {
        var t = Object(o.a)(e.match)
        return r.createElement(
          p.a,
          { style: m.container },
          r.createElement(
            p.a,
            { style: m.cardContainer },
            r.createElement(h.a, { audioSpaceId: t, withDirectJoin: !0 }),
          ),
        )
      }
      var m = n('rHpw').a.create(function (e) {
          return { container: { paddingHorizontal: e.spaces.space16 }, cardContainer: { marginTop: e.spaces.space12 } }
        }),
        y = { title: s.a.ab4fc8bb }
    },
  },
])
//# sourceMappingURL=WIPED
