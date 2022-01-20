;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i =
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
        s = n.n(i),
        u = (n('IAdD'), n('yH/f'), n('OZaJ'), n('5Yy7')),
        l = n.n(u),
        p = n('N+ot'),
        f = n.n(p),
        h = n('AuHH'),
        d = n.n(h),
        y = n('mAxt'),
        m = n.n(y),
        b = (n('2G9S'), n('CEs6'))
      function v(e) {
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
            var o = d()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var g = (function (e) {
        l()(n, e)
        var t = v(n)
        function n(e, r, a) {
          var c
          return (
            o()(this, n),
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
      s()(g, 'displayName', 'ProxseeApiError')
      var O,
        w = n('epkG'),
        S = n('SrIh'),
        j = n('RqPI')
      function P(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k,
        _ = 0,
        A = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L
            o()(this, e),
              s()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(E({ abuse_type: B.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(E({ abuse_type: B.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(E({ abuse_type: B.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(E({ abuse_type: B.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(E({ abuse_type: B.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(E({ abuse_type: B.AbusiveBehavior }, e))
                },
              })
            var r = n.httpConfig
            ;(this.client = new w.a(E(E({}, H), r))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            c()(e, [
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
                  return Object(j.m)(e)
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
                    o = Object.assign(R(), n.headers),
                    a = JSON.stringify(E(E({}, t), {}, { cookie: this._authToken })),
                    c = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(c), headers: o, params: r, data: a })
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
                              Object(S.a)('[ProxseeApi] failed to login', { extra: t })
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
                  var t = { jwt: e, vendor_id: C, create_user: !1, direct: !0 }
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
                      o = Object.assign(R(), n.headers),
                      a = JSON.stringify({ access_token: e.access_token, cursor: e.cursor, limit: 1e3, since: null })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: o, params: r, data: a })
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
                            Object(S.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
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
                      Object(S.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        x = 'X-Idempotence',
        T = 'X-Periscope-User-Agent',
        D = 'X-Attempt',
        I = ((O = {}), s()(O, T, 'Twitter/m5'), s()(O, D, 1), O)
      function R() {
        var e,
          t = Date.now()
        return (
          (_ = t <= _ ? _ + 1 : t),
          Object.assign({}, I, ((e = {}), s()(e, x, _), s()(e, 'content-type', 'application/json'), e))
        )
      }
      var C = 'm5-proxsee-login-a2011357b73e',
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
                        o = Object(b.a)(t)
                      return new g(n, r, o.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var K,
        B = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        F = new A(),
        U = n('G6rE'),
        M = new Error('[AudioModule] config not initialized'),
        V = new ((function () {
          function e() {
            o()(this, e), (this.proxsee = F)
          }
          return (
            c()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(K = e), F.init(K)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!K
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = K.store.getState()
                    return U.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return K ? K.api.AudioSpaces.byId(e) : Promise.reject(M)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return K ? K.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(M)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return K ? K.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(M)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return K ? K.api.AudioSpaces.search(e, t) : Promise.reject(M)
                },
              },
            ]),
            e
          )
        })())()
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return X
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        p = n('N+ot'),
        f = n.n(p),
        h = n('AuHH'),
        d = n.n(h),
        y = n('KEM+'),
        m = n.n(y),
        b = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        v = n('sTyV'),
        g = n('6/RC'),
        O = n('sebV'),
        w = n('G6rE'),
        S = n('rxPX'),
        j = Object(S.a)()
          .propsFromState(function () {
            return { loggedInUser: w.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        P = n('3XMw'),
        E = n.n(P),
        k = n('OrGc'),
        _ = n('QK5w'),
        A = n('aITJ'),
        x = n('MWbm'),
        T = n('TnY3'),
        D = n('rHpw'),
        I = n('t62R'),
        R = n('v6aA'),
        C = n('uScj'),
        L = n('fs1G'),
        H = n('BcsE'),
        K = n('VPAj')
      function B(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function U(e) {
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
            var o = d()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var M = E.a.b47e760d,
        V = E.a.fd2c7b43,
        N = new C.a(),
        z = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        X = function (e) {
          return g.canUseDOM ? N.subscribe(e).unsubscribe : L.a
        },
        q = (function (e) {
          l()(n, e)
          var t = U(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  o = r.history,
                  a = r.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        N.getListeners().length
                          ? N.notify(e)
                          : o.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  i =
                    ((t = {}),
                    m()(t, k.e.search, c()),
                    m()(t, k.e.goToUser, c('@')),
                    m()(t, k.e.openKeyboardShortcuts, function () {
                      return o.push('/i/keyboard_shortcuts')
                    }),
                    m()(t, k.e.goExplore, function () {
                      return o.push('/explore')
                    }),
                    m()(t, k.e.goSettings, function () {
                      return o.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      m()(t, k.e.goProfile, function () {
                        return o.push('/'.concat(e))
                      }),
                      m()(t, k.e.goLikes, function () {
                        return o.push('/'.concat(e, '/likes'))
                      }),
                      m()(t, k.e.goLists, function () {
                        return o.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    a && u
                      ? F(
                          F({}, s(a)),
                          {},
                          m()({}, k.e.goTopArticles, function () {
                            return o.push('/i/articles')
                          }),
                        )
                      : a
                      ? s(a)
                      : {},
                  p = F(
                    F(F({}, i), l),
                    {},
                    ((n = {}),
                    m()(n, k.e.goHome, function () {
                      return o.push('/home')
                    }),
                    m()(n, k.e.goDisplay, function () {
                      return o.push('/i/display')
                    }),
                    m()(n, k.e.goNotifications, function () {
                      return o.push('/notifications')
                    }),
                    m()(n, k.e.goMentions, function () {
                      return o.push('/notifications/mentions')
                    }),
                    m()(n, k.e.goMessages, function () {
                      return o.push('/messages')
                    }),
                    m()(n, k.e.newMessage, function () {
                      return o.push('/messages/compose')
                    }),
                    m()(n, k.e.newTweet, function () {
                      return o.push('/compose/tweet')
                    }),
                    m()(n, k.e.goMomentMaker, function () {
                      return o.push('/i/moment_maker')
                    }),
                    m()(n, k.e.goBookmarks, function () {
                      return o.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  f = e.props.loggedInUserScreenName ? p : i
                e._unbindKeyboardShortcuts = Object(v.a)(f)
              }),
              m()(s()(e), '_handleKeyDown', function (t) {
                z(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              m()(s()(e), '_handleKeyUp', function (t) {
                if (!z(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(H.a)(n) && Date.now() - n < 500,
                    o = Object(_.a)({}, { location: e.props.location })
                  r && o ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    A.b.isKaiOS() &&
                      O.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    A.b.isKaiOS() &&
                      O.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? b.createElement(
                        x.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: D.a.visuallyHidden },
                        b.createElement(I.b, null, M),
                        b.createElement(I.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, V),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      m()(q, 'contextType', R.a)
      var Q = j(q),
        G = g.canUseDOM ? Object(T.a)(Q) : Object(K.a)(null)
      t.a = G
    },
    urU4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AudioSpaceDiscovery', function () {
          return Oe
        })
      var r = n('ERkP'),
        o = n('zI2C'),
        a = n('KEM+'),
        c = n.n(a),
        i = (n('LW0h'), n('7xRU'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('kGix')),
        s = n('3XMw'),
        u = n.n(s),
        l = n('7JQg'),
        p = n('ddV6'),
        f = n.n(p),
        h = (n('ho0z'), n('z84I'), n('5BYb'), n('2G9S'), n('7lsG')),
        d = n('RgK2'),
        y = n.n(d),
        m = n('Irs7'),
        b = n('MWbm'),
        v = n('t62R'),
        g = n('AooF'),
        O = n('6iuV'),
        w = n('FIs5'),
        S = n('rHpw'),
        j = { section: 'search_results' },
        P = { emptyStateTitle: u.a.e67af8ef, emptyStateBody: u.a.f90fc5d8, emptySectionText: u.a.e8fe1eca }
      function E(e) {
        var t = e.hasItems,
          n = e.name,
          o = e.searchQuery,
          a = t
            ? null
            : r.createElement(
                v.b,
                { size: 'subtext1', style: x.title },
                P.emptySectionText({ section: n, searchQuery: o }),
              )
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(v.b, { size: 'title4', style: t && x.title, weight: 'heavy' }, n),
          a,
        )
      }
      function k(e) {
        var t = e.shouldFetch,
          n = e.spaceId
        return t
          ? r.createElement(h.a, { audioSpaceId: n })
          : r.createElement(g.a, { propsForV2: y.a, shouldUseV2: !0 })
      }
      function _(e) {
        var t = e.items,
          n = e.name,
          o = e.searchQuery,
          a = r.useState(0),
          c = f()(a, 2),
          i = c[0],
          s = c[1],
          u = !!t.length
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(E, { hasItems: u, name: n, searchQuery: o }),
          u
            ? r.createElement(
                O.a,
                {
                  childrenStyle: [x.children],
                  onVisibleRangeChange: function (e) {
                    var t = e.index
                    1 === e.intersectionRatio && s(t)
                  },
                  style: x.carousel,
                },
                t.map(function (e, t) {
                  var n = t - 3 < i
                  return r.createElement(k, { key: e, shouldFetch: n, spaceId: e })
                }),
              )
            : null,
        )
      }
      function A(e) {
        var t = e.data,
          n = e.searchQuery,
          o = Object(m.b)()
        r.useEffect(
          function () {
            o.scribeAction('impression')
          },
          [o, t],
        )
        var a = t.sections.some(function (e) {
          return !!e.items.length
        })
          ? r.createElement(
              b.a,
              { style: x.root },
              t.sections.map(function (e) {
                var t = e.items,
                  o = e.name
                return r.createElement(_, { items: t, key: ''.concat(n).concat(o), name: o, searchQuery: n })
              }),
            )
          : r.createElement(w.a, { header: P.emptyStateTitle({ searchQuery: n }), message: P.emptyStateBody })
        return r.createElement(l.b, { namespace: j }, a)
      }
      var x = S.a.create(function (e) {
          return {
            root: { paddingStart: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space36 },
            title: { marginBottom: e.spaces.space20 },
            carousel: { marginBottom: e.spaces.space28 },
            children: { width: '75%', height: '100%', marginEnd: e.spaces.space20 },
          }
        }),
        T = n('Pc/x'),
        D = n('0KEI')
      n('tVqn')
      var I = n('Hw0q'),
        R = n('3IPs'),
        C = n('Ty5D'),
        L = n('djnE')
      function H() {
        var e,
          t = Object(C.h)(),
          n = Object(I.a)(null === (e = t.query) || void 0 === e ? void 0 : e.q),
          r = Object(R.h)(L.a, L.a.Top, t)
        return { searchQuery: null == n ? void 0 : n.trim(), searchFilter: r }
      }
      var K = n('G1WX')
      function B(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var U = u.a.e9f1fbcb,
        M = { section: 'search_results' },
        V = function (e, t) {
          var n = [''.concat(e ? 'f='.concat(e) : ''), ''.concat(t ? 'q='.concat(t) : '')].filter(Boolean)
          return 'twitter://spaces/search'.concat(n.length ? '?'.concat(n.join('&')) : '')
        }
      var N = S.a.create(function (e) {
          return {
            root: { paddingVertical: e.componentDimensions.gutterVertical, paddingBottom: e.spaces.space64 },
            loading: { paddingTop: e.spaces.space36 },
          }
        }),
        z = function (e) {
          var t = H(),
            n = t.searchFilter,
            a = t.searchQuery,
            c = (function () {
              var e = r.useState(i.a.NONE),
                t = f()(e, 2),
                n = t[0],
                o = t[1],
                a = r.useState(),
                c = f()(a, 2),
                s = c[0],
                u = c[1],
                l = Object(D.useCreateLocalApiErrorHandler)('useAudioSpaceSearch')
              return {
                searchAudioSpaces: r.useCallback(
                  function (e, t) {
                    if (e) {
                      var n = l({ showToast: !1 })
                      o(i.a.LOADING)
                      var r = function () {
                        T.a
                          .searchAudioSpace(e, t)
                          .then(function (e) {
                            u(e), o(i.a.LOADED)
                          })
                          .catch(function (e) {
                            throw (o(i.a.FAILED), e)
                          })
                          .catch(n)
                      }
                      T.a.initialized() ? r() : setTimeout(r, 100)
                    }
                  },
                  [l],
                ),
                searchResults: s,
                fetchStatus: n,
              }
            })(),
            s = c.fetchStatus,
            u = c.searchAudioSpaces,
            p = c.searchResults
          r.useEffect(
            function () {
              a && u(a, n)
            },
            [a, n, u],
          )
          var h = a ? F(F({}, M), {}, { component: 'search_filter_'.concat(n.toLowerCase()) }) : M,
            d = s === i.a.NONE ? r.createElement(w.a, { header: U }) : null,
            y = r.createElement(K.a, {
              fetchStatus: s,
              onRequestRetry: function () {
                return a ? u(a, n) : void 0
              },
              render: function () {
                return a && p ? r.createElement(A, { data: p, searchQuery: a }) : null
              },
            })
          return r.createElement(
            l.b,
            { namespace: h },
            r.createElement(
              r.Fragment,
              null,
              r.createElement(o.a, { deepLink: V(n, a) }),
              r.createElement(b.a, { style: N.root }, d || y),
            ),
          )
        },
        X = n('es0u'),
        q = n('rxPX'),
        Q = Object(q.a)().withAnalytics({ page: 'audiospace', section: 'tab' }),
        G = n('rJoH'),
        J = n('yoO3'),
        W = n('VS6U'),
        Y = n('woHV'),
        Z = n('VwDm'),
        $ = n('rRIm')
      var ee = n('6OUF')
      function te(e, t) {
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
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var re = u.a.f2c85e92,
        oe = { component: 'search_box' },
        ae = '/i/spaces/search',
        ce = '/i/spaces/'
      function ie(e) {
        var t = (function () {
            var e = r.useRef(null)
            return (
              r.useEffect(
                function () {
                  return Object($.b)(function () {
                    var t
                    null === (t = e.current) || void 0 === t || t.focus()
                  })
                },
                [e],
              ),
              { inputRef: e }
            )
          })().inputRef,
          n = Object(C.g)(),
          o = Object(C.h)(),
          a = Object(m.b)(),
          c = H().searchQuery,
          i = r.useState(c),
          s = f()(i, 2),
          u = s[0],
          l = s[1]
        return r.createElement(
          b.a,
          { style: se.horizontal },
          r.createElement(
            Y.a,
            {
              accessibilityRole: 'search',
              onSubmit: function (e) {
                if ((e.preventDefault(), e.stopPropagation(), u)) {
                  var r,
                    c = null == u ? void 0 : u.trim()
                  n.push({ pathname: ae, query: ne(ne({}, o.query), {}, { q: c }) }),
                    a.scribe({ action: 'search', data: { search_details: { query: u } } }),
                    null === (r = t.current) || void 0 === r || r.blur()
                }
              },
              style: se.wrapper,
            },
            r.createElement(ee.a, {
              Icon: Z.a,
              autoComplete: 'off',
              focusOnClear: !0,
              onChange: function (e) {
                l(e.target.value)
              },
              onClear: function () {
                l(''), a.scribeAction('clear'), n.push(ce)
              },
              onFocus: function () {
                a.scribe({ action: 'click', data: { message: c } })
              },
              placeholder: re,
              ref: t,
              returnKeyType: 'search',
              spellCheck: 'false',
              value: u,
              withClearButton: !0,
            }),
          ),
        )
      }
      var se = S.a.create(function (e) {
          return { wrapper: { alignItems: 'stretch', flex: 1 }, horizontal: { flex: 1, flexDirection: 'row' } }
        }),
        ue = function (e) {
          return r.createElement(l.b, { namespace: oe }, r.createElement(ie, e))
        },
        le = n('m3Bd'),
        pe = n.n(le),
        fe = n('d0/V'),
        he = n('k/OQ'),
        de = [
          { label: u.a.f8321d82, id: 'Top' },
          { label: u.a.e0197a30, id: 'Live' },
          { label: u.a.g88e2a29, id: 'Upcoming' },
        ],
        ye = de[0]
      var me = function () {
          var e = Object(C.h)(),
            t = Object(m.b)(),
            n = e.query,
            o = (n.f, pe()(n, ['f'])),
            a = Object.keys(o)
              .map(function (e) {
                return ''.concat(e, '=').concat(o[e])
              })
              .join('&'),
            c = de.map(function (e) {
              var r = e.id,
                o = e.label
              return {
                key: r,
                to: ''.concat(fe.a.AudioSpaceSearch, '?f=').concat(r, '&').concat(a),
                label: o,
                isActive: function () {
                  return null != n && n.f ? (null == n ? void 0 : n.f) === r : r === ye.id
                },
                onClick: function () {
                  return (function (e) {
                    t.scribe({ component: 'search_filter_'.concat(e.toLowerCase()), action: 'click' })
                  })(r)
                },
              }
            })
          return r.createElement(he.a, { links: c })
        },
        be = r.createElement(X.a, { withSearchBox: !1, withTrends: !1 }),
        ve = r.createElement(me, null),
        ge = u.a.f5774e3a
      function Oe(e) {
        var t = e.history
        return r.createElement(
          J.a,
          null,
          r.createElement(G.a, { canonical: 'https://twitter.com/i/spaces', title: ge, type: 'article' }),
          r.createElement(o.a, null),
          r.createElement(W.a, {
            customSearchBox: r.createElement(ue, null),
            history: t,
            primaryContent: r.createElement(z, null),
            secondaryBar: ve,
            sidebarContent: be,
            title: ge,
            withSearchBox: !0,
          }),
        )
      }
      var we = Q(Oe)
      t.default = we
    },
    woHV: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('m3Bd'),
        c = n.n(a),
        i = (n('ERkP'), n('k/Ka')),
        s = n('rHpw').a.create({
          initial: {
            alignItems: 'stretch',
            borderWidth: 0,
            borderStyle: 'solid',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            position: 'relative',
            zIndex: 0,
            minHeight: 0,
            minWidth: 0,
          },
        })
      function u(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.style,
          n = c()(e, ['style'])
        return Object(i.a)('form', l(l({}, n), {}, { action: '#', style: [s.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
