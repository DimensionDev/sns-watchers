;(window.webpackJsonp = window.webpackJsonp || []).push([
  [91],
  {
    '4UZQ': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardTwitterInterestsScreen', function () {
          return re
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('z84I'), n('7x/C'), n('DZ+c'), n('ERkP')),
        b = n.n(y),
        E = n('zrOZ'),
        _ = n('zh9S'),
        v = n('NeAX'),
        S = n('hqKg'),
        w = n('kGix'),
        P = n('0KEI'),
        A = n('oEGd'),
        O = Object(S.createSelector)(
          function (e, t) {
            return Object(w.d)(v.selectFetchTwitterInterestsStatus(e), v.selectPreferencesFetchStatus(e))
          },
          v.selectTwitterInterests,
          v.selectPreferences,
          function (e, t, n) {
            return { fetchStatus: e, interests: t, preferences: n }
          },
        ),
        I = {
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN',
          ),
          fetchInterests: v.fetchTwitterInterestsIfNeeded,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: _.a,
          scribeAction: _.c,
          scribePageImpression: _.d,
          updateInterest: v.updateInterest,
        },
        D = Object(A.g)(O, I),
        R = n('xCYy'),
        k = n('v//M'),
        x = n('3XMw'),
        C = n.n(x),
        F = n('yoO3'),
        T = n('7JQg'),
        L = n('eM8g'),
        j = n('7FtF'),
        N = n('iCwC'),
        B = n('XYIJ'),
        H = n('MWbm'),
        M = n('k/OQ'),
        Y = n('cCdp'),
        G = n('t62R'),
        z = n('mw9i'),
        X = n('v6aA')
      function K(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function V(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var U = C.a.h1f01a24,
        W = C.a.c07b4316,
        Z = C.a.e97196fe,
        q = C.a.e652513d,
        $ = C.a.gd1ce493,
        Q = C.a.e9f1fbcb,
        ee = C.a.cf0daa24,
        te = '/settings/your_twitter_data/twitter_interests',
        ne = '/settings/your_twitter_data/twitter_interests/interest',
        ae = { page: 'settings', section: 'your_twitter_data', component: 'twitter_interests' },
        re = (function (e) {
          u()(n, e)
          var t = V(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_renderTabs', function () {
                if (!e._hasKnownInterests()) return null
                var t = [
                  { to: te, key: Z, label: Z },
                  { to: ne, key: W, label: W },
                ]
                return b.a.createElement(M.a, { accessibilityLabel: U, links: t })
              }),
              g()(l()(e), '_render', function () {
                return e.props.location.pathname !== ne && e._hasKnownInterests()
                  ? e._renderKnownInterests()
                  : e._renderInterests()
              }),
              g()(l()(e), '_renderInterests', function () {
                var t = e.props,
                  n = t.interests,
                  a = t.preferences.interest_preferences,
                  r = void 0 === a ? {} : a,
                  c = n.interested_in || [],
                  o = Object(E.a)(r.disabled_interests || []),
                  i = !c.length
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(L.a, null, q),
                  c.map(function (t, n) {
                    return b.a.createElement(Y.a, {
                      checked: !o.has(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  i ? e._renderMessage(Q, ee) : null,
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  H.a,
                  { style: [N.a.calloutTextBlock, N.a.bottomBorder] },
                  b.a.createElement(G.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(G.b, { align: 'center', color: 'gray700', style: B.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_renderKnownInterests', function () {
                var t = e.props,
                  n = t.interests,
                  a = t.preferences.interest_preferences,
                  r = void 0 === a ? {} : a,
                  c = n.known_for || [],
                  o = Object(E.a)(r.disabled_interests || [])
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(L.a, null, $),
                  c.map(function (t, n) {
                    return b.a.createElement(Y.a, {
                      checked: !o.has(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                )
              }),
              g()(l()(e), '_hasKnownInterests', function () {
                var t = e.props.interests
                return t && t.known_for && t.known_for.length > 0
              }),
              g()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchPreferences().catch(t()), e.props.fetchInterests().catch(t())
              }),
              g()(l()(e), '_handleUpdateInterest', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler,
                  c = a.updateInterest
                e._scribeAction(), c(t, n, 'ads').catch(r({ showToast: !0 }))
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(J(J({}, ae), {}, { action: 'edit' }))
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchData()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    T.b,
                    { namespace: ae },
                    b.a.createElement(
                      F.a,
                      null,
                      b.a.createElement(
                        j.a,
                        { location: n, secondaryBar: this._renderTabs(), title: U },
                        b.a.createElement(
                          R.a,
                          null,
                          b.a.createElement(
                            z.a,
                            null,
                            b.a.createElement(k.a, {
                              fetchStatus: t,
                              onRequestRetry: this._handleFetchData,
                              render: this._render,
                            }),
                          ),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(re, 'contextType', X.a)
      t.default = D(re)
    },
    '67GR': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardLanguageScreen', function () {
          return U
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y =
          (n('2G9S'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('M+/F'),
          n('z84I'),
          n('vrRf'),
          n('ERkP')),
        b = n.n(y),
        E = n('zh9S'),
        _ = n('NeAX'),
        v = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        A = Object(v.createSelector)(
          _.selectData,
          function (e, t) {
            return Object(S.d)(_.selectFetchDataStatus(e), _.selectPreferencesFetchStatus(e))
          },
          _.selectPreferences,
          function (e, t, n) {
            return { data: e, fetchStatus: t, preferences: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN',
          ),
          fetchData: _.fetchDataIfNeeded,
          fetchPreferences: _.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateLanguage: _.updateLanguage,
        },
        I = Object(P.g)(A, O),
        D = n('xCYy'),
        R = n('3XMw'),
        k = n.n(R),
        x = n('PK8P'),
        C = n('7JQg'),
        F = n('7FtF'),
        T = n('iCwC'),
        L = n('XYIJ'),
        j = n('MWbm'),
        N = n('t62R'),
        B = n('cCdp')
      function H(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Y(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var G = k.a.a03dacaa,
        z = k.a.b056d9dc,
        X = k.a.h68bc23c,
        K = k.a.e9f1fbcb,
        J = k.a.cf0daa24,
        V = { page: 'settings', section: 'your_twitter_data', component: 'language' },
        U = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  a = t.fetchPreferences
                return Promise.all([n(), a()])
              }),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.data.languages,
                  a = void 0 === n ? [] : n,
                  r = t.preferences,
                  c = a[0],
                  o = a.length > 1 ? a.slice(1) : [],
                  i = r.language_preferences && r.language_preferences.disabled_languages
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    j.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    b.a.createElement(N.b, { color: 'gray700' }, z),
                  ),
                  c
                    ? b.a.createElement(
                        j.a,
                        { style: [L.a.infoItem, o.length > 0 && L.a.bottomBorder] },
                        b.a.createElement(N.b, null, c.display),
                      )
                    : b.a.createElement(j.a, { style: o.length > 0 && L.a.bottomBorder }, e._renderMessage(K, J)),
                  o.length > 0
                    ? b.a.createElement(
                        j.a,
                        { style: [L.a.infoItem, L.a.bottomBorder] },
                        b.a.createElement(N.b, { color: 'gray700' }, X),
                      )
                    : null,
                  o.map(function (t, n) {
                    return b.a.createElement(B.a, {
                      checked: !i || -1 === i.indexOf(t.key),
                      key: t.key,
                      label: t.display,
                      name: t.key,
                      onChange: e._handleUpdateLanguage,
                    })
                  }),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  j.a,
                  { style: T.a.calloutTextBlock },
                  b.a.createElement(N.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(N.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_handleUpdateLanguage', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateLanguage)(t, n).catch(r({ showToast: !0 })), e._scribeAction()
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(M(M({}, V), {}, { action: 'edit' }))
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this.props.fetchPreferences()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(V), t(V)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    C.b,
                    { namespace: V },
                    b.a.createElement(
                      F.a,
                      { location: n, title: G },
                      b.a.createElement(
                        D.a,
                        null,
                        b.a.createElement(x.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      t.default = I(U)
    },
    C40e: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountActivityScreen', function () {
          return m
        })
      var a = n('ERkP'),
        r = n.n(a),
        c = n('3XMw'),
        o = n.n(c),
        i = n('yoO3'),
        l = n('csss'),
        s = n('7FtF'),
        u = n('7JQg'),
        f = o.a.j9d10268,
        d = o.a.a5f32aa2,
        p = o.a.daef29b7,
        m = function (e) {
          var t = e.location
          return r.a.createElement(
            i.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, title: f },
              r.a.createElement(l.a, { label: d, link: '/settings/blocked/all' }),
              r.a.createElement(l.a, { label: p, link: '/settings/muted/all' }),
            ),
          )
        }
      t.default = Object(u.c)({ page: 'settings', section: 'your_twitter_data', component: 'account_activity' })(m)
    },
    E7qF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardRequestDataScreen', function () {
          return G
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        b = n.n(y),
        E = n('t62R'),
        _ = n('vEo5'),
        v = n('NeAX'),
        S = n('1YZw'),
        w = n('rxPX'),
        P = Object(w.a)()
          .propsFromState(function () {
            return { deviceFetchStatus: _.selectFetchStatus, primaryEmail: _.selectFirstEmail }
          })
          .propsFromActions(function () {
            return { addToast: S.b, createDataDownload: v.createDataDownload, fetchDevices: _.fetchDevices }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'request_data' }),
        A = n('xCYy'),
        O = n('v//M'),
        I = n('3XMw'),
        D = n.n(I),
        R = n('yoO3'),
        k = n('7FtF'),
        x = n('iCwC'),
        C = n('XYIJ'),
        F = n('MWbm'),
        T = n('v6aA')
      function L(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var j = D.a.d3310e48,
        N = D.a.ib03e8c8,
        B = D.a.abedd45c,
        H = D.a.abedd45c,
        M = D.a.g49741e8,
        Y = D.a.dc370a0c,
        G = (function (e) {
          u()(n, e)
          var t = L(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_render', function () {
                var t = e.props.primaryEmail
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    F.a,
                    { style: [C.a.infoItem, C.a.bottomBorder] },
                    b.a.createElement(E.b, null, t ? j({ primaryEmail: t }) : N),
                  ),
                  b.a.createElement(
                    F.a,
                    { accessibilityRole: 'button', onClick: e._handleRequestDataClick, style: x.a.viewItem },
                    b.a.createElement(E.b, { align: 'center', color: 'link' }, t ? H : M),
                  ),
                )
              }),
              g()(l()(e), '_handleRequestDataClick', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.createDataDownload
                t.primaryEmail
                  ? (e._scribeAction('email'),
                    a().then(function () {
                      return n({ text: Y })
                    }))
                  : (e._scribeAction('download'),
                    window.open('https://twitter.com/account/personalization/download_your_data.pdf', '_blank'))
              }),
              g()(l()(e), '_handleFetchDevices', function () {
                var t = e.props.fetchDevices
                t && t()
              }),
              g()(l()(e), '_scribeAction', function (t) {
                e.props.analytics.scribe({ action: t })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this.isLoggedIn && this.props.fetchDevices()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.deviceFetchStatus,
                    n = e.location
                  return b.a.createElement(
                    R.a,
                    null,
                    b.a.createElement(
                      k.a,
                      { location: n, title: B },
                      b.a.createElement(
                        A.a,
                        null,
                        this.isLoggedIn
                          ? b.a.createElement(O.a, {
                              fetchStatus: t,
                              onRequestRetry: this._handleFetchDevices,
                              render: this._render,
                            })
                          : this._render(),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(G, 'contextType', T.a)
      t.default = P(G)
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = n('ERkP'),
        b = n.n(y),
        E = n('jtO7'),
        _ = n('eb3s')
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var S = (function (e) {
        u()(n, e)
        var t = v(n)
        function n(e) {
          var a
          return (
            r()(this, n),
            (a = t.call(this, e)),
            g()(l()(a), '_handleClick', function (e) {
              a.setState({ showConfirmation: !0 })
            }),
            g()(l()(a), '_handleCancel', function () {
              a.setState({ showConfirmation: !1 })
            }),
            g()(l()(a), '_handleConfirm', function () {
              a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
            }),
            (a.state = { showConfirmation: !1 }),
            a
          )
        }
        return (
          o()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.align,
                  n = e.color,
                  a = e.confirmationSheetConfirmButtonLabel,
                  r = e.confirmationSheetConfirmButtonType,
                  c = e.confirmationSheetHeadline,
                  o = e.confirmationSheetText,
                  i = e.label
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(E.a, { align: t, color: n, label: i, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? b.a.createElement(_.a, {
                        confirmButtonLabel: a,
                        confirmButtonType: r,
                        headline: c,
                        onCancel: this._handleCancel,
                        onConfirm: this._handleConfirm,
                        text: o,
                      })
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      g()(S, 'defaultProps', { color: 'red500', align: 'center' })
    },
    MG1F: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardDevicesScreen', function () {
          return me
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ho0z'), n('ERkP')),
        b = n.n(y),
        E = n('zh9S'),
        _ = n('NeAX'),
        v = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        A = Object(v.createSelector)(
          _.selectData,
          function (e, t) {
            return Object(S.d)(_.selectFetchDataStatus(e), _.selectPreferencesFetchStatus(e))
          },
          _.selectUserPreferences,
          function (e, t, n) {
            return { data: e, fetchStatus: t, settings: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN',
          ),
          fetchData: _.fetchDataIfNeeded,
          fetchPreferences: _.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribePageImpression: E.d,
        },
        I = Object(P.g)(A, O),
        D = n('xCYy'),
        R = n('PK8P'),
        k = n('7JQg'),
        x = n('7FtF'),
        C = n('iCwC'),
        F = n('XYIJ'),
        T = 'linkedBrowsersView',
        L = 'linkedMobileDevicesView',
        j = 'linkedEmailAddressesView',
        N = 'helpText',
        B = n('MWbm'),
        H = n('t62R'),
        M = n('0yYu'),
        Y = n('6vad'),
        G = n('v6aA'),
        z = n('3XMw'),
        X = n.n(z)
      function K(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var J = X.a.g1aced04,
        V = X.a.hc36dbba,
        U = X.a.j4fa776e,
        W = X.a.i7acdb35,
        Z = X.a.c112dfc8,
        q = X.a.jd8607b9,
        $ = X.a.ea4f6c9e,
        Q = X.a.d750b93e,
        ee = X.a.a9783601,
        te = X.a.j043aa31,
        ne = X.a.f2aa6e95,
        ae = X.a.i4d7deee,
        re = X.a.ae415fd2,
        ce = '/settings/off_twitter_activity',
        oe = '/settings/personalization',
        ie = X.a.a90be7b3,
        le = X.a.e7989d0b,
        se = X.a.ba2e82a1,
        ue = 'https://support.twitter.com/articles/20175257',
        fe = '/personalization',
        de = { page: 'settings', section: 'your_twitter_data', component: 'devices' },
        pe = [],
        me = (function (e) {
          u()(n, e)
          var t = K(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(
                l()(e),
                '_fsSettingsRevamp',
                e.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  a = t.fetchPreferences
                return Promise.all([n(), a()])
              }),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.data.known_devices,
                  a = void 0 === n ? {} : n,
                  r = t.settings,
                  c = a.phone || pe,
                  o = a.tablet || pe,
                  i = a.desktop || pe,
                  l = { supportLink: b.a.createElement(H.b, { link: ue }) }
                return b.a.createElement(
                  B.a,
                  null,
                  !e.isLoggedIn &&
                    b.a.createElement(
                      H.b,
                      { color: 'gray700', size: 'subtext2', style: [C.a.infoText, C.a.bottomBorder] },
                      b.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f870a95b' },
                        b.a.cloneElement(l.supportLink, null, X.a.b1d602d6),
                      ),
                    ),
                  e.isLoggedIn &&
                    c.length > 0 &&
                    o.length > 0 &&
                    i.length > 0 &&
                    b.a.createElement(
                      H.b,
                      { color: 'gray700', size: 'subtext2', style: [C.a.infoText, C.a.bottomBorder] },
                      b.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'e21b623d' },
                        b.a.cloneElement(l.supportLink, null, X.a.d1597cc9),
                      ),
                    ),
                  e._renderDeviceGroup(c, U, !!e._fsSettingsRevamp && 0 === o.length && 0 === i.length),
                  e._renderDeviceGroup(o, W, !!e._fsSettingsRevamp && 0 === i.length),
                  e._renderDeviceGroup(i, Z, e._fsSettingsRevamp),
                  e._fsSettingsRevamp && b.a.createElement(M.a, null),
                  e.isLoggedIn &&
                    b.a.createElement(
                      H.b,
                      {
                        color: 'gray700',
                        size: 'subtext2',
                        style: [C.a.infoText, r.allowDeviceAccess || !e._fsSettingsRevamp ? C.a.bottomBorder : null],
                      },
                      e._fsSettingsRevamp
                        ? b.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'b6baf554' },
                            b.a.cloneElement(l.supportLink, null, X.a.dc546af8),
                          )
                        : r.allowDeviceAccess
                        ? b.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'h185b86a' },
                            b.a.cloneElement(l.supportLink, null, X.a.b6fe9d79),
                          )
                        : le,
                    ),
                  r.allowDeviceAccess ? e._renderLinkedDevices() : e._renderFeatureDisabledMessage(),
                )
              }),
              g()(l()(e), '_renderFeatureDisabledMessage', function () {
                return b.a.createElement(
                  B.a,
                  { style: e._fsSettingsRevamp ? F.a.featureDisabledCallout : C.a.calloutTextBlock },
                  b.a.createElement(
                    H.b,
                    { align: 'center', size: 'headline1', style: e._fsSettingsRevamp && F.a.featureDisabledTitle },
                    e._fsSettingsRevamp ? re : ne,
                  ),
                  b.a.createElement(
                    H.b,
                    { align: 'center', color: 'gray700', style: F.a.helpText },
                    e._fsSettingsRevamp
                      ? b.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'e1d684b1' },
                          b.a.createElement(H.b, { link: e._fsSettingsRevamp ? ce : oe }, X.a.e440acda),
                        )
                      : ae,
                  ),
                )
              }),
              g()(l()(e), '_renderLinkedDevices', function () {
                var t = e.props.data,
                  n = { personalizationLink: b.a.createElement(H.b, { link: fe }) },
                  a = { offTwitterActivitySettingLink: b.a.createElement(H.b, { link: ce }) },
                  r = e._fsSettingsRevamp
                    ? b.a.createElement(
                        H.b,
                        { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                        b.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'h7173352', testID: N },
                          b.a.cloneElement(a.offTwitterActivitySettingLink, null, X.a.f6325f47),
                        ),
                      )
                    : b.a.createElement(
                        H.b,
                        { color: 'gray700', style: F.a.helpText },
                        b.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'j7454249', testID: N },
                          b.a.cloneElement(n.personalizationLink, null, X.a.j291883b),
                        ),
                      )
                return b.a.createElement(
                  B.a,
                  null,
                  t.associated_devices
                    ? b.a.createElement(
                        B.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: T },
                        b.a.createElement(H.b, { color: 'normal', weight: 'bold' }, $),
                        b.a.createElement(
                          H.b,
                          { color: 'gray700', style: F.a.helpText },
                          Q({ count: t.associated_devices.num_browsers }),
                        ),
                        r,
                      )
                    : null,
                  t.associated_devices
                    ? b.a.createElement(
                        B.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: L },
                        b.a.createElement(H.b, { color: 'normal', weight: 'bold' }, ee),
                        b.a.createElement(
                          H.b,
                          { color: 'gray700', style: F.a.helpText },
                          te({ count: t.associated_devices.num_devices }),
                        ),
                        r,
                      )
                    : null,
                  b.a.createElement(
                    B.a,
                    { style: F.a.infoItem, testID: j },
                    b.a.createElement(H.b, { color: 'normal', weight: 'bold' }, ie),
                    e._fsSettingsRevamp
                      ? b.a.createElement(
                          H.b,
                          { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                          b.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'ad5f7016', testID: N },
                            b.a.cloneElement(a.offTwitterActivitySettingLink, null, X.a.id414293),
                          ),
                        )
                      : b.a.createElement(
                          H.b,
                          { color: 'gray700', style: F.a.helpText },
                          b.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'e49dd294', testID: N },
                            b.a.cloneElement(n.personalizationLink, null, X.a.b352177d),
                          ),
                        ),
                  ),
                )
              }),
              g()(l()(e), '_renderDeviceGroup', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                return e.length
                  ? b.a.createElement(
                      B.a,
                      null,
                      b.a.createElement(B.a, null, b.a.createElement(Y.b, { text: t })),
                      e.map(function (t, a) {
                        var r = e && e.length - 1 === a
                        return b.a.createElement(
                          B.a,
                          { key: "device-'".concat(a), style: [F.a.infoItem, r && !n && F.a.bottomBorder] },
                          b.a.createElement(H.b, { color: 'normal' }, t.name),
                          b.a.createElement(
                            H.b,
                            { color: 'gray700', style: F.a.helpText },
                            q,
                            ' ',
                            se(new Date(t.created_at)),
                          ),
                        )
                      }),
                    )
                  : null
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this.props.fetchPreferences()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(de), t(de)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    k.b,
                    { namespace: de },
                    b.a.createElement(
                      x.a,
                      { location: n, title: this._fsSettingsRevamp ? V : J },
                      b.a.createElement(
                        D.a,
                        null,
                        b.a.createElement(R.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(me, 'contextType', G.a)
      t.default = I(me)
    },
    O6Qx: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardProfileScreen', function () {
          return ue
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        b = n.n(y),
        E = n('vEo5'),
        _ = n('NeAX'),
        v = n('YeIG'),
        S = n('G6rE'),
        w = n('rxPX'),
        P = n('0KEI'),
        A = n('kGix'),
        O = function (e, t) {
          var n = S.e.selectLoggedInUser(e),
            a = Object(v.a)(n) ? A.a.LOADED : E.selectFetchStatus(e)
          return Object(A.d)(_.selectFetchDataStatus(e), _.selectPreferencesFetchStatus(e), a)
        },
        I = Object(w.a)()
          .propsFromState(function () {
            return {
              email: E.selectFirstEmail,
              fetchStatus: O,
              loggedInUser: S.e.selectLoggedInUser,
              phone: E.selectFirstPhoneNumber,
              ages: _.selectAge,
              birthdate: _.selectBirthdate,
              gender: _.selectGender,
              hasExactAge: _.selectHasExactAge,
              languages: _.selectLanguage,
              signupDetails: _.selectSignupDetails,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_PROFILE_SCREEN',
              ),
              fetchDevices: E.fetchDevices,
              fetchData: _.fetchDataIfNeeded,
              fetchPreferences: _.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'your_profile' }),
        D = n('xCYy'),
        R = n('yoO3'),
        k = n('PK8P'),
        x = n('7FtF'),
        C = n('XYIJ'),
        F = n('MWbm'),
        T = n('Xrkv'),
        L = n('csss'),
        j = n('pjBI'),
        N = n('t62R'),
        B = n('o1YB'),
        H = n('3XMw'),
        M = n.n(H)
      function Y(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var G = M.a.i5f7b6b8,
        z = M.a.d0a77c9a,
        X = M.a.jade381b,
        K = M.a.d1f6d336,
        J = M.a.a3841918,
        V = M.a.f70cd5ed,
        U = M.a.ib6f1694,
        W = M.a.fa98627a,
        Z = M.a.a8d0108d,
        q = M.a.ac77c66c,
        $ = M.a.h3290871,
        Q = M.a.b7ec04f3,
        ee = M.a.i62a03aa,
        te = M.a.c119dee8,
        ne = M.a.bf96fda4,
        ae = M.a.a03dacaa,
        re = M.a.f445dc78,
        ce = M.a.je99e595,
        oe = M.a.d6d80990,
        ie = M.a.i859a9d3,
        le = '/settings/account/personalization',
        se = 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
        ue = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  a = t.fetchDevices,
                  r = t.fetchPreferences,
                  c = t.loggedInUser,
                  o = [n(), r()]
                return c && o.push(a()), Promise.all(o)
              }),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.ages,
                  a = t.birthdate,
                  r = t.email,
                  c = t.gender,
                  o = t.languages,
                  i = t.loggedInUser,
                  l = t.phone,
                  s = t.signupDetails,
                  u = Object(T.a)(
                    n.map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    }),
                    true,
                  ),
                  f = a && X(new Date(''.concat(a, 'T00:00:00'))),
                  d = Object(T.a)(
                    o.map(function (e) {
                      return e.display
                    }),
                    true,
                  )
                return b.a.createElement(
                  F.a,
                  null,
                  i
                    ? b.a.createElement(L.a, {
                        description: b.a.createElement(
                          j.a,
                          null,
                          i.screen_name &&
                            b.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(i.screen_name)),
                          b.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, ce({ userid: i.id_str })),
                        ),
                        label: K,
                        link: '/settings/screen_name',
                      })
                    : null,
                  i
                    ? b.a.createElement(
                        F.a,
                        { style: [C.a.infoItem, C.a.bottomBorder] },
                        b.a.createElement(N.b, { color: 'normal' }, U),
                        b.a.createElement(N.b, { color: 'gray700', style: C.a.helpText }, z(new Date(i.created_at))),
                        s.creation_ip && s.country
                          ? b.a.createElement(
                              N.b,
                              { color: 'gray700', style: C.a.helpText },
                              ''.concat(s.creation_ip, ' (').concat(s.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  null != i && i.screen_name
                    ? b.a.createElement(L.a, { label: W, link: '/'.concat(i.screen_name) })
                    : null,
                  i && l ? b.a.createElement(L.a, { description: l, label: V, link: '/settings/phone' }) : null,
                  i && r ? b.a.createElement(L.a, { description: r, label: J, link: '/settings/email' }) : null,
                  i ? b.a.createElement(L.a, { label: q, link: '/settings/contacts_dashboard' }) : null,
                  i
                    ? b.a.createElement(B.a, {
                        label: $,
                        learnMoreLabel: ie,
                        learnMoreLink: se,
                        subtext: i.verified ? Q : ee,
                      })
                    : null,
                  b.a.createElement(L.a, {
                    description: c.value,
                    label: Z,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  i
                    ? b.a.createElement(
                        F.a,
                        { style: [C.a.infoItem, C.a.bottomBorder] },
                        b.a.createElement(N.b, { color: 'normal' }, te),
                        a ? b.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, f) : null,
                        b.a.createElement(
                          N.b,
                          { color: 'gray700', style: C.a.helpText },
                          b.a.createElement(
                            M.a.I18NFormatMessage,
                            { $i18n: 'f00220d5' },
                            b.a.createElement(N.b, { link: '/'.concat(i.screen_name) }, M.a.a781b0c6),
                          ),
                        ),
                      )
                    : null,
                  b.a.createElement(L.a, { description: u, label: ne, link: '/settings/your_twitter_data/age' }),
                  b.a.createElement(L.a, { description: d, label: ae, link: '/settings/your_twitter_data/language' }),
                  i
                    ? b.a.createElement(L.a, { description: i.protected ? Q : ee, label: re, link: '/settings/safety' })
                    : null,
                  i
                    ? null
                    : b.a.createElement(
                        F.a,
                        { style: C.a.infoItem },
                        b.a.createElement(N.b, { color: 'gray700', style: C.a.helpText }, oe),
                        b.a.createElement('br', null),
                        b.a.createElement(
                          N.b,
                          { color: 'gray700', style: C.a.helpText },
                          b.a.createElement(
                            M.a.I18NFormatMessage,
                            { $i18n: 'c757b230' },
                            b.a.createElement(N.b, { link: le }, M.a.j7f91baf),
                          ),
                        ),
                      ),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    R.a,
                    null,
                    b.a.createElement(
                      x.a,
                      { location: n, title: G },
                      b.a.createElement(
                        D.a,
                        null,
                        b.a.createElement(k.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      t.default = I(ue)
    },
    RgJG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardLocationsScreen', function () {
          return K
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(y),
        E = n('EPsT'),
        _ = n('NeAX'),
        v = n('1YZw'),
        S = n('rxPX'),
        w = n('0KEI'),
        P = Object(S.a)()
          .propsFromState(function () {
            return {
              fetchStatus: _.selectFetchDataStatus,
              personalizationData: _.selectData,
              settings: _.selectUserPreferences,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              clearLocations: _.clearLocations,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN',
              ),
              fetchData: _.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'locations' }),
        A = n('EfHu'),
        O = n('yoO3'),
        I = n('PK8P'),
        D = n('7FtF'),
        R = n('iCwC'),
        k = n('XYIJ'),
        x = n('MWbm'),
        C = n('t62R'),
        F = n('j7Bv'),
        T = n('3XMw'),
        L = n.n(T)
      function j(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var N = L.a.d9138165,
        B = L.a.d1a276bc,
        H = L.a.e68b09b4,
        M = { headline: L.a.ddefdd1c, text: L.a.hea740ac, confirmButtonLabel: L.a.e68b09b4 },
        Y = L.a.a26e0d52,
        G = L.a.ae415fd2,
        z = b.a.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'a1fdeb44' },
          b.a.createElement(C.b, { link: '/settings/location_information' }, L.a.eb0d4501),
        ),
        X = L.a.he447966,
        K = (function (e) {
          u()(n, e)
          var t = j(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_handleDeleteLocation', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.clearLocations,
                  r = t.createLocalApiErrorHandler
                e._scribeAction('clear'),
                  a().then(function () {
                    return n({ text: Y })
                  }, r({ showToast: !0 }))
              }),
              g()(l()(e), '_render', function () {
                var t = e.props.settings.allowLocationHistoryUse
                return b.a.createElement(
                  O.a,
                  null,
                  b.a.createElement(
                    'div',
                    null,
                    b.a.createElement(
                      x.a,
                      { style: [k.a.infoItem, k.a.bottomBorder] },
                      b.a.createElement(C.b, { color: 'gray700' }, B),
                    ),
                    t ? e._renderLocations() : e._renderMessage(G, z),
                  ),
                )
              }),
              g()(l()(e), '_renderLocations', function () {
                var t = e.props.personalizationData.location_history
                return b.a.createElement(
                  x.a,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return b.a.createElement(
                        x.a,
                        { key: "loc-'".concat(t), style: [k.a.infoItem, k.a.locationInfo, k.a.bottomBorder] },
                        b.a.createElement(F.a, {
                          Icon: A.a,
                          color: 'neutral',
                          size: 'xLarge',
                          style: k.a.locationIcon,
                        }),
                        b.a.createElement(C.b, null, e),
                      )
                    }),
                  t && t.length
                    ? b.a.createElement(E.a, {
                        confirmationSheetConfirmButtonLabel: M.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: M.headline,
                        confirmationSheetText: M.text,
                        label: H,
                        onConfirmationSheetConfirm: e._handleDeleteLocation,
                        withBottomBorder: !1,
                      })
                    : e._renderMessage(X),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  x.a,
                  { style: R.a.calloutTextBlock },
                  b.a.createElement(C.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(C.b, { align: 'center', color: 'gray700', style: k.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_scribeAction', function (t) {
                e.props.analytics.scribe({ action: t })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchData,
                    n = e.fetchStatus,
                    a = e.location
                  return b.a.createElement(
                    D.a,
                    { location: a, title: N },
                    b.a.createElement(I.a, { fetch: t, fetchStatus: n, render: this._render, titleHeader: N }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      t.default = P(K)
    },
    XYIJ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        c = n('rHpw')
      function o(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = function (e) {
          return { borderBottomColor: e.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
        },
        s = c.a.create(function (e) {
          return {
            labelContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            titleCase: { textTransform: 'capitalize' },
            floatingLink: { paddingLeft: e.spaces.space20 },
            infoItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            locationInfo: { alignItems: 'center', flexDirection: 'row', width: '100%' },
            locationIcon: { marginRight: e.spaces.space12 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space20 },
            noLeftPadding: { paddingLeft: 0 },
            narrowButtonRow: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: i({}, l(e)),
            narrowButton: { alignSelf: 'center', marginLeft: e.spaces.space12, paddingLeft: e.spaces.space20 },
            helpTextExtraPadded: { paddingTop: e.spaces.space12 },
            featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 },
            featureDisabledTitle: { paddingBottom: e.spaces.space4 },
          }
        })
      t.a = s
    },
    Y3cQ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        c = n('fyvP'),
        o = n('rHpw'),
        i = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(i.a, { style: l.root }, r.a.createElement(c.a, e))
      }
      var l = o.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    c1bX: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AdsScreen', function () {
          return M
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        b = n.n(y),
        E = n('zh9S'),
        _ = n('NeAX'),
        v = n('hqKg'),
        S = n('0KEI'),
        w = n('oEGd'),
        P = Object(v.createSelector)(_.selectFetchDataStatus, _.selectData, function (e, t) {
          return { fetchDataStatus: e, personalizationData: t }
        }),
        A = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
          ),
          fetchData: _.fetchDataIfNeeded,
          googleAnalyticsPageView: E.a,
          scribePageImpression: E.d,
        },
        O = Object(w.g)(P, A),
        I = n('3XMw'),
        D = n.n(I),
        R = n('csss'),
        k = n('7FtF'),
        x = n('v6aA')
      function C(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var F = D.a.gbde3534,
        T = D.a.a54826c5,
        L = D.a.fdb55209,
        j = D.a.e1c6b2d5,
        N = D.a.ed19d10d,
        B = D.a.f00d0d02,
        H = { page: 'settings', section: 'your_twitter_data', component: 'ads_data' },
        M = (function (e) {
          u()(n, e)
          var t = C(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.location,
                  a = t.personalizationData,
                  r = a.tailored_audience_summary ? a.tailored_audience_summary.num_advertisers : 0,
                  c = a.tailored_audience_summary ? a.tailored_audience_summary.num_audiences : 0
                return b.a.createElement(
                  k.a,
                  { location: n, title: F },
                  b.a.createElement(R.a, {
                    description: a.tailored_audience_summary ? B({ count: a.num_twitter_interests }) : null,
                    label: L,
                    link: '/settings/your_twitter_data/twitter_interests',
                  }),
                  b.a.createElement(R.a, {
                    description: a.tailored_audience_summary ? B({ count: a.num_partner_interests }) : null,
                    label: T,
                    link: '/settings/your_twitter_data/partner_interests',
                  }),
                  b.a.createElement(R.a, {
                    description: a.tailored_audience_summary ? N({ audienceCount: c, advertiserCount: r }) : null,
                    label: j,
                    link: '/settings/your_twitter_data/audiences',
                  }),
                )
              }),
              g()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchData().catch(t())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this._handleFetchData()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(H), t(H)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(M, 'contextType', x.a)
      t.default = O(M)
    },
    eM8g: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        c = n('MWbm'),
        o = n('t62R'),
        i = n('rHpw')
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(
          c.a,
          { style: l.labelContainer },
          r.a.createElement(
            c.a,
            { style: l.contentContainer },
            r.a.createElement(
              c.a,
              { style: l.appText },
              r.a.createElement(o.b, { color: 'gray700', size: 'subtext2' }, t),
            ),
          ),
        )
      }
      var l = i.a.create(function (e) {
        return {
          contentContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            minHeight: 'calc('
              .concat(i.a.theme.lineHeights.headline1, ' + 2 * ')
              .concat(e.componentDimensions.gutterVertical, ')'),
          },
          appText: { flexShrink: 1, width: '100%' },
        }
      })
    },
    eevv: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountHistoryScreen', function () {
          return j
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        b = n.n(y),
        E = n('zh9S'),
        _ = n('NeAX'),
        v = n('rxPX'),
        S = n('0KEI'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { fetchDataStatus: _.selectFetchDataStatus, personalizationData: _.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
              ),
              fetchData: _.fetchDataIfNeeded,
              fetchPreferences: _.fetchPreferencesIfNeeded,
              googleAnalyticsPageView: E.a,
              scribePageImpression: E.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'account_history' }),
        P = n('3XMw'),
        A = n.n(P),
        O = n('yoO3'),
        I = n('csss'),
        D = n('7FtF'),
        R = n('v6aA')
      function k(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var x = A.a.i6b3f59a,
        C = A.a.b523ecc5,
        F = A.a.d9cbe351,
        T = A.a.de90b049,
        L = A.a.cbd2ef58,
        j = (function (e) {
          u()(n, e)
          var t = k(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchData().catch(t())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this._handleFetchData()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.personalizationData,
                    a = n.location_history ? n.location_history.length : 0,
                    r = n.login_history ? n.login_history.length : 0
                  return b.a.createElement(
                    O.a,
                    null,
                    b.a.createElement(
                      D.a,
                      { location: t, title: x },
                      b.a.createElement(I.a, {
                        description: r > 0 ? F({ count: r }) : null,
                        label: C,
                        link: '/settings/your_twitter_data/login_history',
                      }),
                      b.a.createElement(I.a, {
                        description: a > 0 ? L({ count: a }) : null,
                        label: T,
                        link: '/settings/your_twitter_data/locations',
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(j, 'contextType', R.a)
      t.default = w(j)
    },
    fpiQ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardPartnerInterestsScreen', function () {
          return U
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('z84I'), n('vrRf'), n('7x/C'), n('DZ+c'), n('ERkP')),
        b = n.n(y),
        E = n('zh9S'),
        _ = n('NeAX'),
        v = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        A = Object(v.createSelector)(
          function (e, t) {
            return Object(S.d)(_.selectFetchPartnerInterestsStatus(e), _.selectPreferencesFetchStatus(e))
          },
          _.selectPartnerInterests,
          _.selectPreferences,
          function (e, t, n) {
            return { fetchStatus: e, interests: t, preferences: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN',
          ),
          fetchInterests: _.fetchPartnerInterestsIfNeeded,
          fetchPreferences: _.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateInterest: _.updateInterest,
        },
        I = Object(P.g)(A, O),
        D = n('xCYy'),
        R = n('v//M'),
        k = n('7JQg'),
        x = n('7FtF'),
        C = n('iCwC'),
        F = n('XYIJ'),
        T = n('MWbm'),
        L = n('t62R'),
        j = n('cCdp'),
        N = n('3XMw'),
        B = n.n(N)
      function H(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Y(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var G = B.a.a54826c5,
        z = B.a.gc8f2e13,
        X = B.a.e9f1fbcb,
        K = B.a.cf0daa24,
        J = 'https://support.twitter.com/articles/20175258',
        V = { page: 'settings', section: 'your_twitter_data', component: 'partner_interests' },
        U = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.interests.partner_interests,
                  a = void 0 === n ? [] : n,
                  r = t.preferences.interest_preferences,
                  c = (void 0 === r ? {} : r).disabled_partner_interests || []
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    T.a,
                    { style: [F.a.infoItem, F.a.bottomBorder] },
                    b.a.createElement(
                      L.b,
                      { color: 'gray700' },
                      b.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'c2a54dca' },
                        b.a.createElement(L.b, { link: J }, B.a.f04e17dd),
                      ),
                    ),
                  ),
                  a.map(function (t) {
                    return b.a.createElement(j.a, {
                      checked: -1 === c.indexOf(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  0 === a.length
                    ? e._renderMessage(X, K)
                    : b.a.createElement(
                        T.a,
                        { style: C.a.calloutTextBlock },
                        b.a.createElement(L.b, { color: 'gray700', style: F.a.helpText }, z),
                      ),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  T.a,
                  { style: C.a.calloutTextBlock },
                  b.a.createElement(L.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(L.b, { align: 'center', color: 'gray700', style: F.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchPreferences().catch(t()), e.props.fetchInterests().catch(t())
              }),
              g()(l()(e), '_handleUpdateInterest', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler,
                  c = a.updateInterest
                e._scribeAction(), c(t, n, 'partner').catch(r({ showToast: !0 }))
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(M(M({}, V), {}, { action: 'edit' }))
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetchData()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(V), t(V)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    k.b,
                    { namespace: V },
                    b.a.createElement(
                      x.a,
                      { location: n, title: G },
                      b.a.createElement(
                        D.a,
                        null,
                        b.a.createElement(R.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchData,
                          render: this._render,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      t.default = I(U)
    },
    'h/+I': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardTailoredAudiencesScreen', function () {
          return te
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        b = n.n(y),
        E = n('zh9S'),
        _ = n('vEo5'),
        v = n('NeAX'),
        S = n('1YZw'),
        w = n('hqKg'),
        P = n('YeIG'),
        A = n('G6rE'),
        O = n('0KEI'),
        I = n('oEGd'),
        D = n('kGix'),
        R = Object(w.createSelector)(
          v.selectData,
          function (e, t) {
            var n = A.e.selectLoggedInUser(e),
              a = Object(P.a)(n) ? D.a.LOADED : _.selectFetchStatus(e)
            return Object(D.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e), a)
          },
          v.selectPreferences,
          _.selectFirstEmail,
          function (e, t, n, a) {
            return { data: e, fetchStatus: t, preferences: n, primaryEmail: a }
          },
        ),
        k = {
          addToast: S.b,
          createAudienceDownload: v.createAudienceDownload,
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN',
          ),
          fetchData: v.fetchDataIfNeeded,
          fetchDevices: _.fetchDevices,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
        },
        x = Object(I.g)(R, k),
        C = n('xCYy'),
        F = n('yoO3'),
        T = n('PK8P'),
        L = n('7JQg'),
        j = n('7FtF'),
        N = n('XYIJ'),
        B = n('MWbm'),
        H = n('t62R'),
        M = n('jtO7'),
        Y = n('eb3s'),
        G = n('v6aA'),
        z = n('3XMw'),
        X = n.n(z)
      function K(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function V(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var U = { headline: X.a.hf9c2caa, text: X.a.c29b7970, confirmButtonLabel: X.a.b9e1cf02 },
        W = X.a.e1c6b2d5,
        Z = X.a.da202f9a,
        q = X.a.a8276fab,
        $ = X.a.g7912a84,
        Q = X.a.fdfed926,
        ee = { page: 'settings', section: 'your_twitter_data', component: 'tailored_audiences' },
        te = (function (e) {
          u()(n, e)
          var t = V(n)
          function n(e, a) {
            var c
            return (
              r()(this, n),
              (c = t.call(this, e, a)),
              g()(
                l()(c),
                '_fsSettingsRevamp',
                c.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              g()(l()(c), '_combinedFetches', function () {
                var e = c.props,
                  t = e.fetchData,
                  n = e.fetchDevices,
                  a = e.fetchPreferences,
                  r = [t(), a()]
                return c._isLoggedIn() && r.push(n()), Promise.all(r)
              }),
              g()(l()(c), '_render', function () {
                var e = c.props,
                  t = e.data.tailored_audience_summary,
                  n = void 0 === t ? {} : t,
                  a = e.primaryEmail,
                  r = 0 !== n.num_advertisers && 0 !== n.num_audiences
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    B.a,
                    { style: [N.a.infoItem, N.a.bottomBorder] },
                    b.a.createElement(
                      H.b,
                      { color: 'gray700' },
                      b.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'a97ef88f' },
                        b.a.createElement(H.b, { link: 'https://support.twitter.com/articles/20170405' }, X.a.ed8c03f4),
                      ),
                    ),
                  ),
                  b.a.createElement(
                    B.a,
                    { style: [N.a.infoItem, N.a.bottomBorder] },
                    b.a.createElement(
                      H.b,
                      null,
                      b.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f451c520' },
                        b.a.createElement('strong', null, X.a.j10ebd90({ num_audiences: n.num_audiences })),
                        b.a.createElement('strong', null, X.a.efd23f39({ num_advertisers: n.num_advertisers })),
                      ),
                    ),
                  ),
                  b.a.createElement(
                    B.a,
                    { style: [N.a.infoItem, r && N.a.bottomBorder] },
                    b.a.createElement(H.b, { color: 'gray700' }, Q),
                  ),
                  r ? b.a.createElement(M.a, { color: 'primary', label: q, onPress: c._handleRequestDataClick }) : null,
                  c.state.showEmailConfirmation &&
                    b.a.createElement(Y.a, {
                      confirmButtonLabel: U.confirmButtonLabel,
                      headline: U.headline,
                      onCancel: c._handleCancelEmail,
                      onConfirm: c._handleConfirmEmail,
                      text: U.text({ primaryEmail: a }),
                    }),
                )
              }),
              g()(l()(c), '_requestUserData', function () {
                var e = c.props,
                  t = e.addToast,
                  n = e.createAudienceDownload
                e.primaryEmail
                  ? (c._scribeAction('email'),
                    n().then(function () {
                      return t({ text: $ })
                    }))
                  : (c._scribeAction('download'),
                    window.open('https://twitter.com/account/personalization/download_advertiser_list.pdf', '_blank'))
              }),
              g()(l()(c), '_handleRequestDataClick', function () {
                c.props.primaryEmail ? c.setState({ showEmailConfirmation: !0 }) : c._requestUserData()
              }),
              g()(l()(c), '_handleCancelEmail', function () {
                c.setState({ showEmailConfirmation: !1 })
              }),
              g()(l()(c), '_handleConfirmEmail', function () {
                c._requestUserData(), c.setState({ showEmailConfirmation: !1 })
              }),
              g()(l()(c), '_scribeAction', function (e) {
                ;(0, c.props.scribeAction)(J(J({}, ee), {}, { action: e }))
              }),
              g()(l()(c), '_isLoggedIn', function () {
                return Boolean(c.context.loggedInUserId)
              }),
              (c.state = { showEmailConfirmation: !1 }),
              c
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    L.b,
                    { namespace: ee },
                    b.a.createElement(
                      F.a,
                      null,
                      b.a.createElement(
                        j.a,
                        { location: n, title: this._fsSettingsRevamp ? Z : W },
                        b.a.createElement(
                          C.a,
                          null,
                          b.a.createElement(T.a, {
                            fetch: this._combinedFetches,
                            fetchStatus: t,
                            render: this._render,
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(te, 'contextType', G.a)
      t.default = x(te)
    },
    iKWa: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardLoginHistoryScreen', function () {
          return M
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n.n(y),
        E = n('NeAX'),
        _ = n('rxPX'),
        v = n('0KEI'),
        S = Object(_.a)()
          .propsFromState(function () {
            return { fetchDataStatus: E.selectFetchDataStatus, personalizationData: E.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOGIN_HISTORY_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'login_history' }),
        w = n('yoO3'),
        P = n('PK8P'),
        A = n('7FtF'),
        O = n('XYIJ'),
        I = n('MWbm'),
        D = n('t62R'),
        R = n('xHsv'),
        k = n('v6aA'),
        x = n('3XMw'),
        C = n.n(x)
      function F(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var T = C.a.b523ecc5,
        L = C.a.e27e4fcd,
        j = C.a.d0a77c9a,
        N = 'https://support.twitter.com/articles/20172679',
        B = b.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'hcb3ad67' },
          b.a.createElement(D.b, { link: '/settings/connected_apps' }, C.a.ib55eb69),
          b.a.createElement(D.b, { link: N }, C.a.e5a4a538),
        ),
        H = b.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'da2603ab' },
          b.a.createElement(D.b, { link: '/settings/applications' }, C.a.icbb92d0),
          b.a.createElement(D.b, { link: N }, C.a.a9bec4ef),
        ),
        M = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(
                l()(e),
                '_fsSettingsRevamp',
                e.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              g()(l()(e), '_render', function () {
                var t = e.props.personalizationData.login_history
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return b.a.createElement(
                        I.a,
                        { key: "hist-'".concat(t), style: [O.a.infoItem, O.a.bottomBorder] },
                        b.a.createElement(D.b, { color: 'normal' }, e.app_name),
                        b.a.createElement(D.b, { color: 'gray700', style: O.a.helpText }, j(new Date(e.time))),
                        b.a.createElement(
                          D.b,
                          { color: 'gray700', style: O.a.helpText },
                          e.ip,
                          ' (',
                          e.country ? e.country : L,
                          ')',
                        ),
                      )
                    }),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchData,
                    n = e.fetchDataStatus,
                    a = e.location
                  return b.a.createElement(
                    w.a,
                    null,
                    b.a.createElement(
                      A.a,
                      { location: a, title: T },
                      b.a.createElement(R.a, { description: this._fsSettingsRevamp ? B : H }),
                      b.a.createElement(P.a, { fetch: t, fetchStatus: n, render: this._render }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(M, 'contextType', k.a)
      t.default = S(M)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        c = n('m3Bd'),
        o = n.n(c),
        i = n('ERkP'),
        l = n.n(i),
        s = n('t62R'),
        u = n('I4+6'),
        f = n('cm6r'),
        d = n('rHpw'),
        p = n('MWbm'),
        m = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          c = e.label,
          i = o()(e, ['align', 'color', 'label']),
          h = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          p.a,
          { style: m.container },
          l.a.createElement(
            f.a,
            r()({}, i, { interactiveStyles: h, style: m.root }),
            l.a.createElement(s.b, { align: n, color: a }, c),
          ),
        )
      }
    },
    lFNj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardGenderScreen', function () {
          return ae
        })
      n('OZaJ')
      var a = n('97Jx'),
        r = n.n(a),
        c = n('VrFO'),
        o = n.n(c),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        m = n.n(p),
        h = n('AuHH'),
        g = n.n(h),
        y = n('KEM+'),
        b = n.n(y),
        E = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        _ = n.n(E),
        v = n('NeAX'),
        S = n('1YZw'),
        w = n('kGix'),
        P = n('rxPX'),
        A = n('0KEI'),
        O = function (e, t) {
          return Object(w.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e))
        },
        I = Object(P.a)()
          .propsFromState(function () {
            return { fetchStatus: O, gender: v.selectGender, personalizationPreferences: v.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              addToast: S.b,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_GENDER_SCREEN',
              ),
              fetchData: v.fetchDataIfNeeded,
              fetchPreferences: v.fetchPreferencesIfNeeded,
              updateGender: v.updateGender,
              updateSettings: v.updateSettings,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'gender' }),
        D = n('xCYy'),
        R = n('3XMw'),
        k = n.n(R),
        x = n('yoO3'),
        C = n('PK8P'),
        F = n('7FtF'),
        T = n('iCwC'),
        L = n('XYIJ'),
        j = n('MWbm'),
        N = n('t62R'),
        B = n('Y3cQ'),
        H = n('p+r5'),
        M = n('cCdp'),
        Y = n('v6aA')
      function G(e) {
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return m()(this, n)
        }
      }
      var z = k.a.a8d0108d,
        X = 'custom',
        K = k.a.a8d0108d,
        J = k.a.fbf0e61d,
        V = k.a.de32365f,
        U = k.a.b6ab31bd,
        W = k.a.b4568a3a,
        Z = k.a.c0be743d,
        q = k.a.i2209530,
        $ = [
          { label: V, value: 'female' },
          { label: U, value: 'male' },
          { label: W, value: X },
        ],
        Q = k.a.b7cb74e0,
        ee = k.a.cdb0d3e6,
        te = k.a.e9f1fbcb,
        ne = k.a.cf0daa24,
        ae = (function (e) {
          d()(n, e)
          var t = G(n)
          function n(e, a) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, a)),
              b()(u()(r), 'combinedFetches', function () {
                var e = r.props,
                  t = e.fetchData,
                  n = e.fetchPreferences
                return Promise.all([t(), n()])
              }),
              b()(u()(r), '_render', function () {
                return _.a.createElement(
                  'div',
                  null,
                  _.a.createElement(
                    j.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    _.a.createElement(N.b, { color: 'gray700' }, r.isLoggedIn ? J : Q),
                  ),
                  r.isLoggedIn ? r._renderGenderSelector() : r._renderLoggedOut(),
                )
              }),
              b()(u()(r), '_renderMessage', function (e, t) {
                return _.a.createElement(
                  j.a,
                  { style: T.a.calloutTextBlock },
                  _.a.createElement(N.b, { align: 'center', size: 'headline1' }, e),
                  t ? _.a.createElement(N.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              b()(u()(r), '_handleItemChanged', function (e, t) {
                var n = t === X
                r.setState({ self_identify: n, gender: n ? null : t })
              }),
              b()(u()(r), '_handleCustomGenderUpdate', function (e) {
                var t = e.target.value
                r.setState({ self_identify: !0, gender: t })
              }),
              b()(u()(r), '_handleSaveGender', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.createLocalApiErrorHandler,
                  a = e.updateGender,
                  c = r.state.self_identify ? X : r.state.gender || X
                r._scribeAction(),
                  a({ type: c, value: r.state.gender || '' })
                    .then(function () {
                      return t({ text: Z })
                    }, n({ showToast: !0 }))
                    .then(r._handleCancel)
              }),
              b()(u()(r), '_handleCancel', function () {
                r.props.history.goBack({ backLocation: '/settings/your_twitter_data/account' })
              }),
              b()(u()(r), '_handleBooleanChanged', function (e, t) {
                var n = r.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.updateSettings)(b()({}, e, !t)).catch(a())
              }),
              b()(u()(r), '_scribeAction', function () {
                r.props.analytics.scribe({ action: 'edit' })
              }),
              (r.state = { self_identify: r.props.gender.type === X, gender: r.props.gender.value }),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this.props.fetchPreferences()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location,
                    a =
                      t === w.a.LOADED && this.isLoggedIn
                        ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: q }
                        : void 0
                  return _.a.createElement(
                    x.a,
                    null,
                    _.a.createElement(
                      F.a,
                      r()({ location: n, title: K }, a),
                      _.a.createElement(
                        D.a,
                        null,
                        _.a.createElement(C.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderGenderSelector',
                value: function () {
                  var e = this.props.gender
                  return _.a.createElement(
                    j.a,
                    null,
                    _.a.createElement(B.a, {
                      name: 'gender',
                      onChange: this._handleItemChanged,
                      options: $,
                      value: this.selectedGender,
                    }),
                    this.selectedGender === X
                      ? _.a.createElement(H.a, {
                          defaultValue: e.value && e.type === X ? e.value : '',
                          label: z,
                          maxLength: 30,
                          name: 'genderOther',
                          onChange: this._handleCustomGenderUpdate,
                          type: 'text',
                        })
                      : null,
                  )
                },
              },
              {
                key: '_renderLoggedOut',
                value: function () {
                  var e = this.props.personalizationPreferences,
                    t = e.gender_preferences && e.gender_preferences.use_gender_for_personalization
                  return _.a.createElement(
                    j.a,
                    null,
                    this.selectedGender
                      ? _.a.createElement(
                          j.a,
                          { style: [L.a.infoItem, L.a.bottomBorder] },
                          _.a.createElement(N.b, null, this.props.gender.value),
                        )
                      : this._renderMessage(te, ne),
                    _.a.createElement(M.a, {
                      checked: !t,
                      key: 'use_gender_for_personalization',
                      label: ee,
                      name: 'use_gender_for_personalization',
                      onChange: this._handleBooleanChanged,
                    }),
                  )
                },
              },
              {
                key: 'selectedGender',
                get: function () {
                  var e = this.props.gender
                  return this.state.self_identify ? X : this.state.gender ? this.state.gender : e && e.type
                },
              },
              {
                key: 'isGenderValid',
                get: function () {
                  var e = this.props.gender
                  return this.state.gender && this.state.gender !== e.value
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      b()(ae, 'contextType', Y.a)
      t.default = I(ae)
    },
    'v/BL': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardAgeScreen', function () {
          return J
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        g = n.n(h),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        b = n.n(y),
        E = n('NeAX'),
        _ = n('kGix'),
        v = n('rxPX'),
        S = n('0KEI'),
        w = function (e, t) {
          return Object(_.d)(E.selectFetchDataStatus(e), E.selectPreferencesFetchStatus(e))
        },
        P = Object(v.a)()
          .propsFromState(function () {
            return { ages: E.selectAge, fetchStatus: w, personalizationPreferences: E.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_AGE_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
              fetchPreferences: E.fetchPreferencesIfNeeded,
              updateSettings: E.updateSettings,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'age' }),
        A = n('xCYy'),
        O = n('yoO3'),
        I = n('PK8P'),
        D = n('7FtF'),
        R = n('iCwC'),
        k = n('XYIJ'),
        x = n('MWbm'),
        C = n('t62R'),
        F = n('Xrkv'),
        T = n('cCdp'),
        L = n('v6aA'),
        j = n('3XMw'),
        N = n.n(j)
      function B(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var H = N.a.bf96fda4,
        M = b.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'bf82b0a6' },
          b.a.createElement(
            C.b,
            { link: 'https://help.twitter.com/safety-and-security/birthday-visibility-settings' },
            N.a.jc0b4d1c,
          ),
        ),
        Y = N.a.ie40dc4a,
        G = N.a.fe1fc83e,
        z = N.a.bf9c74d0,
        X = N.a.e9f1fbcb,
        K = N.a.cf0daa24,
        J = (function (e) {
          u()(n, e)
          var t = B(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  a = t.fetchPreferences
                return Promise.all([n(), a()])
              }),
              g()(l()(e), '_render', function () {
                return b.a.createElement(
                  'div',
                  null,
                  e._renderAges(),
                  e.isLoggedIn
                    ? b.a.createElement(x.a, { style: k.a.infoItem }, b.a.createElement(C.b, { color: 'gray700' }, Y))
                    : e._renderUseAge(),
                )
              }),
              g()(l()(e), '_renderAges', function () {
                var t = e.props.ages,
                  n = Object(F.a)(
                    t.map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    }),
                    !0,
                  )
                return n
                  ? b.a.createElement(x.a, { style: [k.a.infoItem, k.a.bottomBorder] }, b.a.createElement(C.b, null, n))
                  : e._renderMessage(X, K)
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  x.a,
                  { style: [R.a.calloutTextBlock, R.a.bottomBorder] },
                  b.a.createElement(C.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(C.b, { align: 'center', color: 'gray700', style: k.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_renderUseAge', function () {
                var t = e.props.personalizationPreferences,
                  n = t && t.age_preferences && t.age_preferences.use_age_for_personalization
                return b.a.createElement(T.a, {
                  checked: !n,
                  key: 'use_age_for_personalization',
                  label: z,
                  name: 'use_age_for_personalization',
                  onChange: e._handleBooleanChanged,
                })
              }),
              g()(l()(e), '_handleBooleanChanged', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateSettings)(g()({}, t, !n)).catch(r())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.isLoggedIn = !!this.context.loggedInUserId
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.a.createElement(
                    O.a,
                    null,
                    b.a.createElement(
                      D.a,
                      { location: n, title: H },
                      b.a.createElement(
                        A.a,
                        null,
                        b.a.createElement(
                          x.a,
                          { style: [k.a.infoItem, k.a.bottomBorder] },
                          b.a.createElement(C.b, { color: 'gray700' }, this.isLoggedIn ? M : G),
                        ),
                        b.a.createElement(I.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(J, 'contextType', L.a)
      t.default = P(J)
    },
    vkTF: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        c = n('v6aA'),
        o = n('xCYy'),
        i = n('3XMw'),
        l = n.n(i),
        s = n('yoO3'),
        u = n('7JQg'),
        f = n('7FtF'),
        d = n('MWbm'),
        p = n('mw9i'),
        m = n('csss'),
        h = n('rHpw'),
        g = l.a.b7fde2b8,
        y = l.a.i5f7b6b8,
        b = l.a.i6b3f59a,
        E = l.a.g1aced04,
        _ = l.a.j9d10268,
        v = l.a.gbde3534,
        S = l.a.gee8110d,
        w = { page: 'settings', section: 'transparency' },
        P = h.a.create(function (e) {
          return {
            backgroundRoot: { flexGrow: 1, backgroundColor: e.colors.gray50 },
            contentRoot: { backgroundColor: e.colors.cellBackground, flexGrow: 1, justifyContent: 'flex-start' },
          }
        })
      t.default = function (e) {
        var t = e.location,
          n = !!r.a.useContext(c.a).loggedInUserId
        return r.a.createElement(
          u.b,
          { namespace: w },
          r.a.createElement(
            s.a,
            null,
            r.a.createElement(
              f.a,
              { location: t, title: g },
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(
                  d.a,
                  { style: P.backgroundRoot },
                  r.a.createElement(
                    p.a,
                    { style: P.contentRoot },
                    r.a.createElement(m.a, { label: y, link: '/settings/your_twitter_data/account' }),
                    n
                      ? r.a.createElement(m.a, { label: b, link: '/settings/your_twitter_data/account_history' })
                      : null,
                    r.a.createElement(m.a, { label: E, link: '/settings/your_twitter_data/devices' }),
                    n
                      ? r.a.createElement(m.a, { label: _, link: '/settings/your_twitter_data/account_activity' })
                      : null,
                    r.a.createElement(m.a, { label: v, link: '/settings/your_twitter_data/ads' }),
                    r.a.createElement(m.a, {
                      label: S,
                      link: n ? '/settings/download_your_data' : '/settings/your_twitter_data/request_data',
                    }),
                  ),
                ),
              ),
            ),
          ),
        )
      }
    },
    xCYy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var a = n('ERkP'),
        r = n.n(a),
        c = n('v6aA'),
        o = n('mrHL'),
        i = n('3XMw'),
        l = n.n(i),
        s = n('cnVF'),
        u = n('RqPI'),
        f = n('k89r'),
        d = n('yUQf'),
        p = n('q9Zt'),
        m = n('t62R'),
        h = l.a.ffeb836a,
        g = l.a.f2fb9746
      function y() {
        var e = Object(f.a)()
        return (
          r.a.useEffect(
            function () {
              e.scribe({ element: 'error_page', action: 'show' })
            },
            [e],
          ),
          r.a.createElement(p.a, { title: h }, r.a.createElement(m.b, null, g))
        )
      }
      function b(e) {
        var t = r.a.useContext(c.a).featureSwitches,
          n = Object(d.a)(u.m),
          a = Object(o.b)(s.u, t)
        return n || a ? e.children : r.a.createElement(y, null)
      }
    },
  },
])
//# sourceMappingURL=WIPED
