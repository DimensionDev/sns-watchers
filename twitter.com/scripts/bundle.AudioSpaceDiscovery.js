;(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return B
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = (n('849X'), n('TJCb'), n('7x/C'), n('JtPf'), n('KqXw'), n('LJOr'), n('yiKp')),
        s = n.n(c),
        u = n('KEM+'),
        l = n.n(u),
        p = (n('IAdD'), n('0zG9'), n('yH/f'), n('5Yy7')),
        h = n.n(p),
        f = n('2VqO'),
        d = n.n(f),
        m = n('mAxt'),
        v = n.n(m),
        y = (n('2G9S'), n('CEs6')),
        g = (function (e) {
          h()(n, e)
          var t = d()(n)
          function n(e, a, i) {
            var o
            return (
              r()(this, n),
              ((o = t.call(
                this,
                ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(a, ' message: ').concat(i),
              )).url = e),
              (o.status = a),
              o
            )
          }
          return o()(n)
        })(v()(Error))
      l()(g, 'displayName', 'ProxseeApiError')
      var b,
        S,
        k = n('epkG'),
        E = n('SrIh'),
        w = n('RqPI'),
        _ = 0,
        O = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C
            r()(this, e),
              l()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(s()({ abuse_type: K.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(s()({ abuse_type: K.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(s()({ abuse_type: K.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(s()({ abuse_type: K.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(s()({ abuse_type: K.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(s()({ abuse_type: K.AbusiveBehavior }, e))
                },
              })
            var a = n.httpConfig
            ;(this.client = new k.a(s()(s()({}, L), a))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  S = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!S
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
                  var e = S.store.getState()
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
                    a = n.params,
                    r = Object.assign(I(), n.headers),
                    i = JSON.stringify(s()(s()({}, t), {}, { cookie: this._authToken })),
                    o = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(o), headers: r, params: a, data: i })
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
                        : ((this._authPromise = S.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(E.a)('[ProxseeApi] failed to login', { extra: t })
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
                  var t = { jwt: e, vendor_id: j, create_user: !1, direct: !0 }
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
                    var a = n.params,
                      r = Object.assign(I(), n.headers),
                      i = JSON.stringify({
                        access_token: e.access_token,
                        cursor: e.cursor,
                        limit: 1e3,
                        since: null,
                        quick_get: !0,
                      })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: r, params: a, data: i })
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
                            Object(E.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
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
                      Object(E.a)('[ProxseeApi] failed to create clip', { extra: { err: e } })
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
                      Object(E.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        P = 'X-Idempotence',
        A = 'X-Periscope-User-Agent',
        T = 'X-Attempt',
        x = ((b = {}), l()(b, A, 'Twitter/m5'), l()(b, T, 1), b)
      function I() {
        var e,
          t = Date.now()
        return (
          (_ = t <= _ ? _ + 1 : t),
          Object.assign({}, x, ((e = {}), l()(e, P, _), l()(e, 'content-type', 'application/json'), e))
        )
      }
      var j = 'm5-proxsee-login-a2011357b73e',
        C = {},
        L = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        a = t.status,
                        r = Object(y.a)(t)
                      return new g(n, a, r.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var D,
        K = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        U = new O(),
        R = n('G6rE'),
        V = new Error('[AudioModule] config not initialized'),
        B = new ((function () {
          function e() {
            r()(this, e), (this.proxsee = U)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(D = e), U.init(D)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!D
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = D.store.getState()
                    return R.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return D ? D.api.AudioSpaces.byId(e) : Promise.reject(V)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return D ? D.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(V)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return D ? D.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(V)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return D ? D.api.AudioSpaces.search(e, t) : Promise.reject(V)
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
        return N
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        l = n.n(u),
        p = n('5Yy7'),
        h = n.n(p),
        f = n('2VqO'),
        d = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y = (n('2G9S'), n('KqXw'), n('LJOr'), n('ERkP')),
        g = n.n(y),
        b = n('sTyV'),
        S = n('6/RC'),
        k = n('sebV'),
        E = n('G6rE'),
        w = n('rxPX'),
        _ = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: E.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        O = n('3XMw'),
        P = n.n(O),
        A = n('OrGc'),
        T = n('QK5w'),
        x = n('aITJ'),
        I = n('MWbm'),
        j = n('TnY3'),
        C = n('rHpw'),
        L = n('t62R'),
        D = n('v6aA'),
        K = n('uScj'),
        U = n('fs1G'),
        R = n('BcsE'),
        V = n('VPAj'),
        B = P.a.b47e760d,
        z = P.a.fd2c7b43,
        F = new K.a(),
        H = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        N = function (e) {
          return S.canUseDOM ? F.subscribe(e).unsubscribe : U.a
        },
        M = (function (e) {
          h()(n, e)
          var t = d()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(l()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  a = e.props,
                  i = a.history,
                  o = a.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        F.getListeners().length
                          ? F.notify(e)
                          : i.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  s =
                    ((t = {}),
                    v()(t, A.e.search, c()),
                    v()(t, A.e.goToUser, c('@')),
                    v()(t, A.e.openKeyboardShortcuts, function () {
                      return i.push('/i/keyboard_shortcuts')
                    }),
                    v()(t, A.e.goExplore, function () {
                      return i.push('/explore')
                    }),
                    v()(t, A.e.goSettings, function () {
                      return i.push('/settings')
                    }),
                    t),
                  u = function (e) {
                    var t
                    return (
                      (t = {}),
                      v()(t, A.e.goProfile, function () {
                        return i.push('/'.concat(e))
                      }),
                      v()(t, A.e.goLikes, function () {
                        return i.push('/'.concat(e, '/likes'))
                      }),
                      v()(t, A.e.goLists, function () {
                        return i.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  l = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  p =
                    o && l
                      ? r()(
                          r()({}, u(o)),
                          {},
                          v()({}, A.e.goTopArticles, function () {
                            return i.push('/i/articles')
                          }),
                        )
                      : o
                      ? u(o)
                      : {},
                  h = r()(
                    r()(r()({}, s), p),
                    {},
                    ((n = {}),
                    v()(n, A.e.goHome, function () {
                      return i.push('/home')
                    }),
                    v()(n, A.e.goDisplay, function () {
                      return i.push('/i/display')
                    }),
                    v()(n, A.e.goNotifications, function () {
                      return i.push('/notifications')
                    }),
                    v()(n, A.e.goMentions, function () {
                      return i.push('/notifications/mentions')
                    }),
                    v()(n, A.e.goMessages, function () {
                      return i.push('/messages')
                    }),
                    v()(n, A.e.newMessage, function () {
                      return i.push('/messages/compose')
                    }),
                    v()(n, A.e.newTweet, function () {
                      return i.push('/compose/tweet')
                    }),
                    v()(n, A.e.goMomentMaker, function () {
                      return i.push('/i/moment_maker')
                    }),
                    v()(n, A.e.goBookmarks, function () {
                      return i.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  f = e.props.loggedInUserScreenName ? h : s
                e._unbindKeyboardShortcuts = Object(b.a)(f)
              }),
              v()(l()(e), '_handleKeyDown', function (t) {
                H(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              v()(l()(e), '_handleKeyUp', function (t) {
                if (!H(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    a = !!Object(R.a)(n) && Date.now() - n < 500,
                    r = Object(T.a)({}, { location: e.props.location })
                  a && r ? e.props.history.goBack() : window.close()
                }
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._bindKeyboardShortcuts(),
                    x.b.isKaiOS() &&
                      k.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    x.b.isKaiOS() &&
                      k.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? g.a.createElement(
                        I.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: C.a.visuallyHidden },
                        g.a.createElement(L.b, null, B),
                        g.a.createElement(L.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, z),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(M, 'contextType', D.a)
      var q = _(M),
        Q = S.canUseDOM ? Object(j.a)(q) : Object(V.a)(null)
      t.a = Q
    },
    urU4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AudioSpaceDiscovery', function () {
          return ge
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('zI2C'),
        o = n('yiKp'),
        c = n.n(o),
        s = (n('LW0h'), n('7x/C'), n('7xRU'), n('kGix')),
        u = n('3XMw'),
        l = n.n(u),
        p = n('7JQg'),
        h = n('ddV6'),
        f = n.n(h),
        d = (n('ho0z'), n('z84I'), n('5BYb'), n('2G9S'), n('7lsG')),
        m = n('RgK2'),
        v = n.n(m),
        y = n('Irs7'),
        g = n('MWbm'),
        b = n('t62R'),
        S = n('Tg44'),
        k = n('6iuV'),
        E = n('FIs5'),
        w = n('rHpw'),
        _ = { section: 'search_results' },
        O = { emptyStateTitle: l.a.e67af8ef, emptyStateBody: l.a.f90fc5d8, emptySectionText: l.a.e8fe1eca }
      function P(e) {
        var t = e.hasItems,
          n = e.name,
          a = e.searchQuery,
          i = t
            ? null
            : r.a.createElement(
                b.b,
                { size: 'subtext1', style: I.title },
                O.emptySectionText({ section: n, searchQuery: a }),
              )
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(b.b, { size: 'title4', style: t && I.title, weight: 'heavy' }, n),
          i,
        )
      }
      function A(e) {
        var t = e.shouldFetch,
          n = e.spaceId
        return t
          ? r.a.createElement(d.a, { audioSpaceId: n })
          : r.a.createElement(S.a, { propsForV2: v.a, shouldUseV2: !0 })
      }
      function T(e) {
        var t = e.items,
          n = e.name,
          a = e.searchQuery,
          i = r.a.useState(0),
          o = f()(i, 2),
          c = o[0],
          s = o[1],
          u = !!t.length
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(P, { hasItems: u, name: n, searchQuery: a }),
          u
            ? r.a.createElement(
                k.a,
                {
                  childrenStyle: [I.children],
                  onVisibleRangeChange: function (e) {
                    var t = e.index
                    1 === e.intersectionRatio && s(t)
                  },
                  style: I.carousel,
                },
                t.map(function (e, t) {
                  var n = t - 3 < c
                  return r.a.createElement(A, { key: e, shouldFetch: n, spaceId: e })
                }),
              )
            : null,
        )
      }
      function x(e) {
        var t = e.data,
          n = e.searchQuery,
          a = Object(y.b)()
        r.a.useEffect(
          function () {
            a.scribeAction('impression')
          },
          [a, t],
        )
        var i = t.sections.some(function (e) {
          return !!e.items.length
        })
          ? r.a.createElement(
              g.a,
              { style: I.root },
              t.sections.map(function (e) {
                var t = e.items,
                  a = e.name
                return r.a.createElement(T, { items: t, key: ''.concat(n).concat(a), name: a, searchQuery: n })
              }),
            )
          : r.a.createElement(E.a, { header: O.emptyStateTitle({ searchQuery: n }), message: O.emptyStateBody })
        return r.a.createElement(p.c, { namespace: _ }, i)
      }
      var I = w.a.create(function (e) {
          return {
            root: { paddingStart: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space36 },
            title: { marginBottom: e.spaces.space20 },
            carousel: { marginBottom: e.spaces.space28 },
            children: { width: '75%', height: '100%', marginEnd: e.spaces.space20 },
          }
        }),
        j = n('Pc/x'),
        C = n('0KEI')
      n('tVqn')
      var L = n('Hw0q'),
        D = n('3IPs'),
        K = n('zCf4'),
        U = n('djnE')
      function R() {
        var e,
          t = Object(K.g)(),
          n = Object(L.a)(null === (e = t.query) || void 0 === e ? void 0 : e.q),
          a = Object(D.h)(U.a, U.a.Top, t)
        return { searchQuery: null == n ? void 0 : n.trim(), searchFilter: a }
      }
      var V = n('G1WX'),
        B = l.a.fc96261f,
        z = { section: 'search_results' },
        F = function (e, t) {
          var n = [''.concat(e ? 'f='.concat(e) : ''), ''.concat(t ? 'q='.concat(t) : '')].filter(Boolean)
          return 'twitter://spaces/search'.concat(n.length ? '?'.concat(n.join('&')) : '')
        }
      var H = w.a.create(function (e) {
          return {
            root: { paddingVertical: e.componentDimensions.gutterVertical, paddingBottom: e.spaces.space64 },
            loading: { paddingTop: e.spaces.space36 },
          }
        }),
        N = function (e) {
          var t = R(),
            n = t.searchFilter,
            a = t.searchQuery,
            o = (function () {
              var e = r.a.useState(s.a.NONE),
                t = f()(e, 2),
                n = t[0],
                a = t[1],
                i = r.a.useState(),
                o = f()(i, 2),
                c = o[0],
                u = o[1],
                l = Object(C.useCreateLocalApiErrorHandler)('useAudioSpaceSearch')
              return {
                searchAudioSpaces: r.a.useCallback(
                  function (e, t) {
                    if (e) {
                      var n = l({ showToast: !1 })
                      a(s.a.LOADING)
                      var r = function () {
                        j.a
                          .searchAudioSpace(e, t)
                          .then(function (e) {
                            u(e), a(s.a.LOADED)
                          })
                          .catch(function (e) {
                            throw (a(s.a.FAILED), e)
                          })
                          .catch(n)
                      }
                      j.a.initialized() ? r() : setTimeout(r, 100)
                    }
                  },
                  [l],
                ),
                searchResults: c,
                fetchStatus: n,
              }
            })(),
            u = o.fetchStatus,
            l = o.searchAudioSpaces,
            h = o.searchResults
          r.a.useEffect(
            function () {
              a && l(a, n)
            },
            [a, n, l],
          )
          var d = a ? c()(c()({}, z), {}, { component: 'search_filter_'.concat(n.toLowerCase()) }) : z,
            m = u === s.a.NONE ? r.a.createElement(E.a, { header: B }) : null,
            v = r.a.createElement(V.a, {
              fetchStatus: u,
              onRequestRetry: function () {
                return a ? l(a, n) : void 0
              },
              render: function () {
                return a && h ? r.a.createElement(x, { data: h, searchQuery: a }) : null
              },
            })
          return r.a.createElement(
            p.c,
            { namespace: d },
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(i.a, { deepLink: F(n, a) }),
              r.a.createElement(g.a, { style: H.root }, m || v),
            ),
          )
        },
        M = n('es0u'),
        q = n('rxPX'),
        Q = Object(q.a)().withAnalytics({ page: 'audiospace', section: 'tab' }),
        G = n('rJoH'),
        X = n('yoO3'),
        J = n('VS6U'),
        W = n('woHV'),
        Y = n('VwDm'),
        Z = n('rRIm')
      var $ = n('6OUF'),
        ee = l.a.f2c85e92,
        te = { component: 'search_box' },
        ne = '/i/spaces/search',
        ae = '/i/spaces/'
      function re(e) {
        var t = (function () {
            var e = r.a.useRef(null)
            return (
              r.a.useEffect(
                function () {
                  return Object(Z.b)(function () {
                    var t
                    null === (t = e.current) || void 0 === t || t.focus()
                  })
                },
                [e],
              ),
              { inputRef: e }
            )
          })().inputRef,
          n = Object(K.f)(),
          a = Object(K.g)(),
          i = Object(y.b)(),
          o = R().searchQuery,
          s = r.a.useState(o),
          u = f()(s, 2),
          l = u[0],
          p = u[1]
        return r.a.createElement(
          g.a,
          { style: ie.horizontal },
          r.a.createElement(
            W.a,
            {
              accessibilityRole: 'search',
              onSubmit: function (e) {
                if ((e.preventDefault(), e.stopPropagation(), l)) {
                  var r,
                    o = null == l ? void 0 : l.trim()
                  n.push({ pathname: ne, query: c()(c()({}, a.query), {}, { q: o }) }),
                    i.scribe({ action: 'search', data: { search_details: { query: l } } }),
                    null === (r = t.current) || void 0 === r || r.blur()
                }
              },
              style: ie.wrapper,
            },
            r.a.createElement($.a, {
              Icon: Y.a,
              autoComplete: 'off',
              focusOnClear: !0,
              onChange: function (e) {
                p(e.target.value)
              },
              onClear: function () {
                p(''), i.scribeAction('clear'), n.push(ae)
              },
              onFocus: function () {
                i.scribe({ action: 'click', data: { message: o } })
              },
              placeholder: ee,
              ref: t,
              returnKeyType: 'search',
              spellCheck: 'false',
              value: l,
              withClearButton: !0,
            }),
          ),
        )
      }
      var ie = w.a.create(function (e) {
          return { wrapper: { alignItems: 'stretch', flex: 1 }, horizontal: { flex: 1, flexDirection: 'row' } }
        }),
        oe = function (e) {
          return r.a.createElement(p.c, { namespace: te }, r.a.createElement(re, e))
        },
        ce = n('m3Bd'),
        se = n.n(ce),
        ue = (n('+KXO'), n('d0/V')),
        le = n('k/OQ'),
        pe = ['f'],
        he = [
          { label: l.a.f8321d82, id: 'Top' },
          { label: l.a.e0197a30, id: 'Live' },
          { label: l.a.g88e2a29, id: 'Upcoming' },
        ],
        fe = he[0]
      var de = function () {
          var e = Object(K.g)(),
            t = Object(y.b)(),
            n = e.query,
            a = (n.f, se()(n, pe)),
            i = Object.keys(a)
              .map(function (e) {
                return ''.concat(e, '=').concat(a[e])
              })
              .join('&'),
            o = he.map(function (e) {
              var a = e.id,
                r = e.label
              return {
                key: a,
                to: ''.concat(ue.a.AudioSpaceSearch, '?f=').concat(a, '&').concat(i),
                label: r,
                isActive: function () {
                  return null != n && n.f ? (null == n ? void 0 : n.f) === a : a === fe.id
                },
                onClick: function () {
                  return (function (e) {
                    t.scribe({ component: 'search_filter_'.concat(e.toLowerCase()), action: 'click' })
                  })(a)
                },
              }
            })
          return r.a.createElement(le.a, { links: o })
        },
        me = r.a.createElement(M.a, { withSearchBox: !1, withTrends: !1 }),
        ve = r.a.createElement(de, null),
        ye = l.a.f5774e3a
      function ge(e) {
        var t = e.history
        return r.a.createElement(
          X.a,
          null,
          r.a.createElement(G.a, { canonical: 'https://twitter.com/i/spaces', title: ye, type: 'article' }),
          r.a.createElement(i.a, null),
          r.a.createElement(J.a, {
            customSearchBox: r.a.createElement(oe, null),
            history: t,
            primaryContent: r.a.createElement(N, null),
            secondaryBar: ve,
            sidebarContent: me,
            title: ye,
            withSearchBox: !0,
          }),
        )
      }
      var be = Q(ge)
      t.default = be
    },
    woHV: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('ERkP'), n('k/Ka')),
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
        }),
        u = ['style']
      t.a = function (e) {
        var t = e.style,
          n = o()(e, u)
        return Object(c.a)('form', r()(r()({}, n), {}, { action: '#', style: [s.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
