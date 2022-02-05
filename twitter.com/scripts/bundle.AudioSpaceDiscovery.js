;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
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
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var g = (function (e) {
        l()(n, e)
        var t = v(n)
        function n(e, r, o) {
          var c
          return (
            a()(this, n),
            ((c = t.call(
              this,
              ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(o),
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
            a()(this, e),
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
                    a = Object.assign(R(), n.headers),
                    o = JSON.stringify(E(E({}, t), {}, { cookie: this._authToken })),
                    c = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(c), headers: a, params: r, data: o })
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
                      a = Object.assign(R(), n.headers),
                      o = JSON.stringify({ access_token: e.access_token, cursor: e.cursor, limit: 1e3, since: null })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: a, params: r, data: o })
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
                        a = Object(b.a)(t)
                      return new g(n, r, a.msg)
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
            a()(this, e), (this.proxsee = F)
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
        return q
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
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
        v = n.n(b),
        g = n('sTyV'),
        O = n('6/RC'),
        w = n('sebV'),
        S = n('G6rE'),
        j = n('rxPX'),
        P = Object(j.a)()
          .propsFromState(function () {
            return { loggedInUser: S.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        E = n('3XMw'),
        k = n.n(E),
        _ = n('OrGc'),
        A = n('QK5w'),
        x = n('aITJ'),
        T = n('MWbm'),
        D = n('TnY3'),
        I = n('rHpw'),
        R = n('t62R'),
        C = n('v6aA'),
        L = n('uScj'),
        H = n('fs1G'),
        K = n('BcsE'),
        B = n('VPAj')
      function F(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function M(e) {
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
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var V = k.a.b47e760d,
        N = k.a.fd2c7b43,
        z = new L.a(),
        X = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        q = function (e) {
          return O.canUseDOM ? z.subscribe(e).unsubscribe : H.a
        },
        Q = (function (e) {
          l()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.history,
                  o = r.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        z.getListeners().length
                          ? z.notify(e)
                          : a.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  i =
                    ((t = {}),
                    m()(t, _.e.search, c()),
                    m()(t, _.e.goToUser, c('@')),
                    m()(t, _.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    m()(t, _.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    m()(t, _.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      m()(t, _.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      m()(t, _.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      m()(t, _.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    o && u
                      ? U(
                          U({}, s(o)),
                          {},
                          m()({}, _.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : o
                      ? s(o)
                      : {},
                  p = U(
                    U(U({}, i), l),
                    {},
                    ((n = {}),
                    m()(n, _.e.goHome, function () {
                      return a.push('/home')
                    }),
                    m()(n, _.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    m()(n, _.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    m()(n, _.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    m()(n, _.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    m()(n, _.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    m()(n, _.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    m()(n, _.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    m()(n, _.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  f = e.props.loggedInUserScreenName ? p : i
                e._unbindKeyboardShortcuts = Object(g.a)(f)
              }),
              m()(s()(e), '_handleKeyDown', function (t) {
                X(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              m()(s()(e), '_handleKeyUp', function (t) {
                if (!X(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(K.a)(n) && Date.now() - n < 500,
                    a = Object(A.a)({}, { location: e.props.location })
                  r && a ? e.props.history.goBack() : window.close()
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
                    x.b.isKaiOS() &&
                      w.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    x.b.isKaiOS() &&
                      w.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? v.a.createElement(
                        T.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: I.a.visuallyHidden },
                        v.a.createElement(R.b, null, V),
                        v.a.createElement(R.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, N),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(Q, 'contextType', C.a)
      var G = P(Q),
        J = O.canUseDOM ? Object(D.a)(G) : Object(B.a)(null)
      t.a = J
    },
    urU4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AudioSpaceDiscovery', function () {
          return we
        })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('zI2C'),
        c = n('KEM+'),
        i = n.n(c),
        s = (n('LW0h'), n('7xRU'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('kGix')),
        u = n('3XMw'),
        l = n.n(u),
        p = n('7JQg'),
        f = n('ddV6'),
        h = n.n(f),
        d = (n('ho0z'), n('z84I'), n('5BYb'), n('2G9S'), n('7lsG')),
        y = n('RgK2'),
        m = n.n(y),
        b = n('Irs7'),
        v = n('MWbm'),
        g = n('t62R'),
        O = n('AooF'),
        w = n('6iuV'),
        S = n('FIs5'),
        j = n('rHpw'),
        P = { section: 'search_results' },
        E = { emptyStateTitle: l.a.e67af8ef, emptyStateBody: l.a.f90fc5d8, emptySectionText: l.a.e8fe1eca }
      function k(e) {
        var t = e.hasItems,
          n = e.name,
          r = e.searchQuery,
          o = t
            ? null
            : a.a.createElement(
                g.b,
                { size: 'subtext1', style: T.title },
                E.emptySectionText({ section: n, searchQuery: r }),
              )
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(g.b, { size: 'title4', style: t && T.title, weight: 'heavy' }, n),
          o,
        )
      }
      function _(e) {
        var t = e.shouldFetch,
          n = e.spaceId
        return t
          ? a.a.createElement(d.a, { audioSpaceId: n })
          : a.a.createElement(O.a, { propsForV2: m.a, shouldUseV2: !0 })
      }
      function A(e) {
        var t = e.items,
          n = e.name,
          r = e.searchQuery,
          o = a.a.useState(0),
          c = h()(o, 2),
          i = c[0],
          s = c[1],
          u = !!t.length
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(k, { hasItems: u, name: n, searchQuery: r }),
          u
            ? a.a.createElement(
                w.a,
                {
                  childrenStyle: [T.children],
                  onVisibleRangeChange: function (e) {
                    var t = e.index
                    1 === e.intersectionRatio && s(t)
                  },
                  style: T.carousel,
                },
                t.map(function (e, t) {
                  var n = t - 3 < i
                  return a.a.createElement(_, { key: e, shouldFetch: n, spaceId: e })
                }),
              )
            : null,
        )
      }
      function x(e) {
        var t = e.data,
          n = e.searchQuery,
          r = Object(b.b)()
        a.a.useEffect(
          function () {
            r.scribeAction('impression')
          },
          [r, t],
        )
        var o = t.sections.some(function (e) {
          return !!e.items.length
        })
          ? a.a.createElement(
              v.a,
              { style: T.root },
              t.sections.map(function (e) {
                var t = e.items,
                  r = e.name
                return a.a.createElement(A, { items: t, key: ''.concat(n).concat(r), name: r, searchQuery: n })
              }),
            )
          : a.a.createElement(S.a, { header: E.emptyStateTitle({ searchQuery: n }), message: E.emptyStateBody })
        return a.a.createElement(p.b, { namespace: P }, o)
      }
      var T = j.a.create(function (e) {
          return {
            root: { paddingStart: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space36 },
            title: { marginBottom: e.spaces.space20 },
            carousel: { marginBottom: e.spaces.space28 },
            children: { width: '75%', height: '100%', marginEnd: e.spaces.space20 },
          }
        }),
        D = n('Pc/x'),
        I = n('0KEI')
      n('tVqn')
      var R = n('Hw0q'),
        C = n('3IPs'),
        L = n('Ty5D'),
        H = n('djnE')
      function K() {
        var e,
          t = Object(L.h)(),
          n = Object(R.a)(null === (e = t.query) || void 0 === e ? void 0 : e.q),
          r = Object(C.h)(H.a, H.a.Top, t)
        return { searchQuery: null == n ? void 0 : n.trim(), searchFilter: r }
      }
      var B = n('G1WX')
      function F(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = l.a.e9f1fbcb,
        V = { section: 'search_results' },
        N = function (e, t) {
          var n = [''.concat(e ? 'f='.concat(e) : ''), ''.concat(t ? 'q='.concat(t) : '')].filter(Boolean)
          return 'twitter://spaces/search'.concat(n.length ? '?'.concat(n.join('&')) : '')
        }
      var z = j.a.create(function (e) {
          return {
            root: { paddingVertical: e.componentDimensions.gutterVertical, paddingBottom: e.spaces.space64 },
            loading: { paddingTop: e.spaces.space36 },
          }
        }),
        X = function (e) {
          var t = K(),
            n = t.searchFilter,
            r = t.searchQuery,
            c = (function () {
              var e = a.a.useState(s.a.NONE),
                t = h()(e, 2),
                n = t[0],
                r = t[1],
                o = a.a.useState(),
                c = h()(o, 2),
                i = c[0],
                u = c[1],
                l = Object(I.useCreateLocalApiErrorHandler)('useAudioSpaceSearch')
              return {
                searchAudioSpaces: a.a.useCallback(
                  function (e, t) {
                    if (e) {
                      var n = l({ showToast: !1 })
                      r(s.a.LOADING)
                      var a = function () {
                        D.a
                          .searchAudioSpace(e, t)
                          .then(function (e) {
                            u(e), r(s.a.LOADED)
                          })
                          .catch(function (e) {
                            throw (r(s.a.FAILED), e)
                          })
                          .catch(n)
                      }
                      D.a.initialized() ? a() : setTimeout(a, 100)
                    }
                  },
                  [l],
                ),
                searchResults: i,
                fetchStatus: n,
              }
            })(),
            i = c.fetchStatus,
            u = c.searchAudioSpaces,
            l = c.searchResults
          a.a.useEffect(
            function () {
              r && u(r, n)
            },
            [r, n, u],
          )
          var f = r ? U(U({}, V), {}, { component: 'search_filter_'.concat(n.toLowerCase()) }) : V,
            d = i === s.a.NONE ? a.a.createElement(S.a, { header: M }) : null,
            y = a.a.createElement(B.a, {
              fetchStatus: i,
              onRequestRetry: function () {
                return r ? u(r, n) : void 0
              },
              render: function () {
                return r && l ? a.a.createElement(x, { data: l, searchQuery: r }) : null
              },
            })
          return a.a.createElement(
            p.b,
            { namespace: f },
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(o.a, { deepLink: N(n, r) }),
              a.a.createElement(v.a, { style: z.root }, d || y),
            ),
          )
        },
        q = n('es0u'),
        Q = n('rxPX'),
        G = Object(Q.a)().withAnalytics({ page: 'audiospace', section: 'tab' }),
        J = n('rJoH'),
        W = n('yoO3'),
        Y = n('VS6U'),
        Z = n('woHV'),
        $ = n('VwDm'),
        ee = n('rRIm')
      var te = n('6OUF')
      function ne(e, t) {
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
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ne(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ae = l.a.f2c85e92,
        oe = { component: 'search_box' },
        ce = '/i/spaces/search',
        ie = '/i/spaces/'
      function se(e) {
        var t = (function () {
            var e = a.a.useRef(null)
            return (
              a.a.useEffect(
                function () {
                  return Object(ee.b)(function () {
                    var t
                    null === (t = e.current) || void 0 === t || t.focus()
                  })
                },
                [e],
              ),
              { inputRef: e }
            )
          })().inputRef,
          n = Object(L.g)(),
          r = Object(L.h)(),
          o = Object(b.b)(),
          c = K().searchQuery,
          i = a.a.useState(c),
          s = h()(i, 2),
          u = s[0],
          l = s[1]
        return a.a.createElement(
          v.a,
          { style: ue.horizontal },
          a.a.createElement(
            Z.a,
            {
              accessibilityRole: 'search',
              onSubmit: function (e) {
                if ((e.preventDefault(), e.stopPropagation(), u)) {
                  var a,
                    c = null == u ? void 0 : u.trim()
                  n.push({ pathname: ce, query: re(re({}, r.query), {}, { q: c }) }),
                    o.scribe({ action: 'search', data: { search_details: { query: u } } }),
                    null === (a = t.current) || void 0 === a || a.blur()
                }
              },
              style: ue.wrapper,
            },
            a.a.createElement(te.a, {
              Icon: $.a,
              autoComplete: 'off',
              focusOnClear: !0,
              onChange: function (e) {
                l(e.target.value)
              },
              onClear: function () {
                l(''), o.scribeAction('clear'), n.push(ie)
              },
              onFocus: function () {
                o.scribe({ action: 'click', data: { message: c } })
              },
              placeholder: ae,
              ref: t,
              returnKeyType: 'search',
              spellCheck: 'false',
              value: u,
              withClearButton: !0,
            }),
          ),
        )
      }
      var ue = j.a.create(function (e) {
          return { wrapper: { alignItems: 'stretch', flex: 1 }, horizontal: { flex: 1, flexDirection: 'row' } }
        }),
        le = function (e) {
          return a.a.createElement(p.b, { namespace: oe }, a.a.createElement(se, e))
        },
        pe = n('m3Bd'),
        fe = n.n(pe),
        he = n('d0/V'),
        de = n('k/OQ'),
        ye = [
          { label: l.a.f8321d82, id: 'Top' },
          { label: l.a.e0197a30, id: 'Live' },
          { label: l.a.g88e2a29, id: 'Upcoming' },
        ],
        me = ye[0]
      var be = function () {
          var e = Object(L.h)(),
            t = Object(b.b)(),
            n = e.query,
            r = (n.f, fe()(n, ['f'])),
            o = Object.keys(r)
              .map(function (e) {
                return ''.concat(e, '=').concat(r[e])
              })
              .join('&'),
            c = ye.map(function (e) {
              var r = e.id,
                a = e.label
              return {
                key: r,
                to: ''.concat(he.a.AudioSpaceSearch, '?f=').concat(r, '&').concat(o),
                label: a,
                isActive: function () {
                  return null != n && n.f ? (null == n ? void 0 : n.f) === r : r === me.id
                },
                onClick: function () {
                  return (function (e) {
                    t.scribe({ component: 'search_filter_'.concat(e.toLowerCase()), action: 'click' })
                  })(r)
                },
              }
            })
          return a.a.createElement(de.a, { links: c })
        },
        ve = a.a.createElement(q.a, { withSearchBox: !1, withTrends: !1 }),
        ge = a.a.createElement(be, null),
        Oe = l.a.f5774e3a
      function we(e) {
        var t = e.history
        return a.a.createElement(
          W.a,
          null,
          a.a.createElement(J.a, { canonical: 'https://twitter.com/i/spaces', title: Oe, type: 'article' }),
          a.a.createElement(o.a, null),
          a.a.createElement(Y.a, {
            customSearchBox: a.a.createElement(le, null),
            history: t,
            primaryContent: a.a.createElement(X, null),
            secondaryBar: ge,
            sidebarContent: ve,
            title: Oe,
            withSearchBox: !0,
          }),
        )
      }
      var Se = G(we)
      t.default = Se
    },
    woHV: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
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
                a()(e, t, n[t])
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
