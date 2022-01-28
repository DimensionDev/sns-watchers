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
        b = (n('2G9S'), n('z84I'), n('7x/C'), n('DZ+c'), n('ERkP')),
        y = n.n(b),
        E = n('zrOZ'),
        v = n('zh9S'),
        _ = n('NeAX'),
        S = n('hqKg'),
        w = n('kGix'),
        P = n('0KEI'),
        O = n('oEGd'),
        A = Object(S.createSelector)(
          function (e, t) {
            return Object(w.d)(_.selectFetchTwitterInterestsStatus(e), _.selectPreferencesFetchStatus(e))
          },
          _.selectTwitterInterests,
          _.selectPreferences,
          function (e, t, n) {
            return { fetchStatus: e, interests: t, preferences: n }
          },
        ),
        D = {
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN',
          ),
          fetchInterests: _.fetchTwitterInterestsIfNeeded,
          fetchPreferences: _.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: v.a,
          scribeAction: v.c,
          scribePageImpression: v.d,
          updateInterest: _.updateInterest,
        },
        R = Object(O.g)(A, D),
        I = n('xCYy'),
        k = n('v//M'),
        x = n('3XMw'),
        C = n.n(x),
        F = n('yoO3'),
        T = n('7JQg'),
        L = n('eM8g'),
        j = n('7FtF'),
        N = n('iCwC'),
        H = n('XYIJ'),
        B = n('MWbm'),
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
      function V(e) {
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
      function W(e) {
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
      var J = C.a.h1f01a24,
        U = C.a.c07b4316,
        q = C.a.e97196fe,
        Z = C.a.e652513d,
        $ = C.a.gd1ce493,
        Q = C.a.e9f1fbcb,
        ee = C.a.cf0daa24,
        te = '/settings/your_twitter_data/twitter_interests',
        ne = '/settings/your_twitter_data/twitter_interests/interest',
        ae = { page: 'settings', section: 'your_twitter_data', component: 'twitter_interests' },
        re = (function (e) {
          u()(n, e)
          var t = W(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_renderTabs', function () {
                if (!e._hasKnownInterests()) return null
                var t = [
                  { to: te, key: q, label: q },
                  { to: ne, key: U, label: U },
                ]
                return y.a.createElement(M.a, { accessibilityLabel: J, links: t })
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
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement(L.a, null, Z),
                  c.map(function (t, n) {
                    return y.a.createElement(Y.a, {
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
                return y.a.createElement(
                  B.a,
                  { style: [N.a.calloutTextBlock, N.a.bottomBorder] },
                  y.a.createElement(G.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.a.createElement(G.b, { align: 'center', color: 'gray700', style: H.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_renderKnownInterests', function () {
                var t = e.props,
                  n = t.interests,
                  a = t.preferences.interest_preferences,
                  r = void 0 === a ? {} : a,
                  c = n.known_for || [],
                  o = Object(E.a)(r.disabled_interests || [])
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement(L.a, null, $),
                  c.map(function (t, n) {
                    return y.a.createElement(Y.a, {
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
                ;(0, e.props.scribeAction)(V(V({}, ae), {}, { action: 'edit' }))
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
                  return y.a.createElement(
                    T.b,
                    { namespace: ae },
                    y.a.createElement(
                      F.a,
                      null,
                      y.a.createElement(
                        j.a,
                        { location: n, secondaryBar: this._renderTabs(), title: J },
                        y.a.createElement(
                          I.a,
                          null,
                          y.a.createElement(
                            z.a,
                            null,
                            y.a.createElement(k.a, {
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
        })(y.a.Component)
      g()(re, 'contextType', X.a)
      t.default = R(re)
    },
    '55TG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return g
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        c = (n('2G9S'), n('kGix')),
        o = n('XMGw'),
        i = n('Ssj5'),
        l = n('oEOe')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = 'verifyPassword',
        d = 'rweb/'.concat(o.a, '/').concat(f),
        p = Object(l.a)(d, 'VERIFY_PASSWORD'),
        m = { fetchStatus: c.a.NONE }
      i.a.register(
        r()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case p.REQUEST:
              return u(u({}, e), {}, { fetchStatus: c.a.LOADING })
            case p.SUCCESS:
              return u(u({}, e), {}, { fetchStatus: c.a.LOADED })
            case p.FAILURE:
              return u(u({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
            default:
              return e
          }
        }),
      )
      var h = function (e) {
          return e.verifyPassword.fetchStatus
        },
        g = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(l.b)(t, { params: { password: e }, request: r.Settings.verifyPassword })({
              actionTypes: p,
              context: 'VERIFY_PASSWORD',
            })
          }
        }
    },
    '67GR': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardLanguageScreen', function () {
          return J
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
        b =
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
        y = n.n(b),
        E = n('zh9S'),
        v = n('NeAX'),
        _ = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        O = Object(_.createSelector)(
          v.selectData,
          function (e, t) {
            return Object(S.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e))
          },
          v.selectPreferences,
          function (e, t, n) {
            return { data: e, fetchStatus: t, preferences: n }
          },
        ),
        A = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN',
          ),
          fetchData: v.fetchDataIfNeeded,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateLanguage: v.updateLanguage,
        },
        D = Object(P.g)(O, A),
        R = n('xCYy'),
        I = n('3XMw'),
        k = n.n(I),
        x = n('PK8P'),
        C = n('7JQg'),
        F = n('7FtF'),
        T = n('iCwC'),
        L = n('XYIJ'),
        j = n('MWbm'),
        N = n('t62R'),
        H = n('cCdp')
      function B(e, t) {
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
            ? B(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
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
        V = k.a.cf0daa24,
        W = { page: 'settings', section: 'your_twitter_data', component: 'language' },
        J = (function (e) {
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
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement(
                    j.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    y.a.createElement(N.b, { color: 'gray700' }, z),
                  ),
                  c
                    ? y.a.createElement(
                        j.a,
                        { style: [L.a.infoItem, o.length > 0 && L.a.bottomBorder] },
                        y.a.createElement(N.b, null, c.display),
                      )
                    : y.a.createElement(j.a, { style: o.length > 0 && L.a.bottomBorder }, e._renderMessage(K, V)),
                  o.length > 0
                    ? y.a.createElement(
                        j.a,
                        { style: [L.a.infoItem, L.a.bottomBorder] },
                        y.a.createElement(N.b, { color: 'gray700' }, X),
                      )
                    : null,
                  o.map(function (t, n) {
                    return y.a.createElement(H.a, {
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
                return y.a.createElement(
                  j.a,
                  { style: T.a.calloutTextBlock },
                  y.a.createElement(N.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.a.createElement(N.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_handleUpdateLanguage', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateLanguage)(t, n).catch(r({ showToast: !0 })), e._scribeAction()
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(M(M({}, W), {}, { action: 'edit' }))
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
                  ;(0, e.scribePageImpression)(W), t(W)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return y.a.createElement(
                    C.b,
                    { namespace: W },
                    y.a.createElement(
                      F.a,
                      { location: n, title: G },
                      y.a.createElement(
                        R.a,
                        null,
                        y.a.createElement(x.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.default = D(J)
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
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        E = n('t62R'),
        v = n('vEo5'),
        _ = n('NeAX'),
        S = n('1YZw'),
        w = n('rxPX'),
        P = Object(w.a)()
          .propsFromState(function () {
            return { deviceFetchStatus: v.selectFetchStatus, primaryEmail: v.selectFirstEmail }
          })
          .propsFromActions(function () {
            return { addToast: S.b, createDataDownload: _.createDataDownload, fetchDevices: v.fetchDevices }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'request_data' }),
        O = n('xCYy'),
        A = n('v//M'),
        D = n('3XMw'),
        R = n.n(D),
        I = n('yoO3'),
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
      var j = R.a.d3310e48,
        N = R.a.ib03e8c8,
        H = R.a.abedd45c,
        B = R.a.abedd45c,
        M = R.a.g49741e8,
        Y = R.a.dc370a0c,
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
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement(
                    F.a,
                    { style: [C.a.infoItem, C.a.bottomBorder] },
                    y.a.createElement(E.b, null, t ? j({ primaryEmail: t }) : N),
                  ),
                  y.a.createElement(
                    F.a,
                    { accessibilityRole: 'button', onClick: e._handleRequestDataClick, style: x.a.viewItem },
                    y.a.createElement(E.b, { align: 'center', color: 'link' }, t ? B : M),
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
                  return y.a.createElement(
                    I.a,
                    null,
                    y.a.createElement(
                      k.a,
                      { location: n, title: H },
                      y.a.createElement(
                        O.a,
                        null,
                        this.isLoggedIn
                          ? y.a.createElement(A.a, {
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
        })(y.a.Component)
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
        b = n('ERkP'),
        y = n.n(b),
        E = n('jtO7'),
        v = n('eb3s')
      function _(e) {
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
        var t = _(n)
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(E.a, { align: t, color: n, label: i, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? y.a.createElement(v.a, {
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
      })(y.a.Component)
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
        b = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ho0z'), n('ERkP')),
        y = n.n(b),
        E = n('zh9S'),
        v = n('NeAX'),
        _ = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        O = Object(_.createSelector)(
          v.selectData,
          function (e, t) {
            return Object(S.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e))
          },
          v.selectUserPreferences,
          function (e, t, n) {
            return { data: e, fetchStatus: t, settings: n }
          },
        ),
        A = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN',
          ),
          fetchData: v.fetchDataIfNeeded,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribePageImpression: E.d,
        },
        D = Object(P.g)(O, A),
        R = n('xCYy'),
        I = n('PK8P'),
        k = n('7JQg'),
        x = n('7FtF'),
        C = n('iCwC'),
        F = n('XYIJ'),
        T = 'linkedBrowsersView',
        L = 'linkedMobileDevicesView',
        j = 'linkedEmailAddressesView',
        N = 'helpText',
        H = n('MWbm'),
        B = n('t62R'),
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
      var V = X.a.g1aced04,
        W = X.a.hc36dbba,
        J = X.a.j4fa776e,
        U = X.a.i7acdb35,
        q = X.a.c112dfc8,
        Z = X.a.jd8607b9,
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
                  l = { supportLink: y.a.createElement(B.b, { link: ue }) }
                return y.a.createElement(
                  H.a,
                  null,
                  !e.isLoggedIn &&
                    y.a.createElement(
                      B.b,
                      { color: 'gray700', size: 'subtext2', style: [C.a.infoText, C.a.bottomBorder] },
                      y.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f870a95b' },
                        y.a.cloneElement(l.supportLink, null, X.a.b1d602d6),
                      ),
                    ),
                  e.isLoggedIn &&
                    c.length > 0 &&
                    o.length > 0 &&
                    i.length > 0 &&
                    y.a.createElement(
                      B.b,
                      { color: 'gray700', size: 'subtext2', style: [C.a.infoText, C.a.bottomBorder] },
                      y.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'e21b623d' },
                        y.a.cloneElement(l.supportLink, null, X.a.d1597cc9),
                      ),
                    ),
                  e._renderDeviceGroup(c, J, !!e._fsSettingsRevamp && 0 === o.length && 0 === i.length),
                  e._renderDeviceGroup(o, U, !!e._fsSettingsRevamp && 0 === i.length),
                  e._renderDeviceGroup(i, q, e._fsSettingsRevamp),
                  e._fsSettingsRevamp && y.a.createElement(M.a, null),
                  e.isLoggedIn &&
                    y.a.createElement(
                      B.b,
                      {
                        color: 'gray700',
                        size: 'subtext2',
                        style: [C.a.infoText, r.allowDeviceAccess || !e._fsSettingsRevamp ? C.a.bottomBorder : null],
                      },
                      e._fsSettingsRevamp
                        ? y.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'b6baf554' },
                            y.a.cloneElement(l.supportLink, null, X.a.dc546af8),
                          )
                        : r.allowDeviceAccess
                        ? y.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'h185b86a' },
                            y.a.cloneElement(l.supportLink, null, X.a.b6fe9d79),
                          )
                        : le,
                    ),
                  r.allowDeviceAccess ? e._renderLinkedDevices() : e._renderFeatureDisabledMessage(),
                )
              }),
              g()(l()(e), '_renderFeatureDisabledMessage', function () {
                return y.a.createElement(
                  H.a,
                  { style: e._fsSettingsRevamp ? F.a.featureDisabledCallout : C.a.calloutTextBlock },
                  y.a.createElement(
                    B.b,
                    { align: 'center', size: 'headline1', style: e._fsSettingsRevamp && F.a.featureDisabledTitle },
                    e._fsSettingsRevamp ? re : ne,
                  ),
                  y.a.createElement(
                    B.b,
                    { align: 'center', color: 'gray700', style: F.a.helpText },
                    e._fsSettingsRevamp
                      ? y.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'e1d684b1' },
                          y.a.createElement(B.b, { link: e._fsSettingsRevamp ? ce : oe }, X.a.e440acda),
                        )
                      : ae,
                  ),
                )
              }),
              g()(l()(e), '_renderLinkedDevices', function () {
                var t = e.props.data,
                  n = { personalizationLink: y.a.createElement(B.b, { link: fe }) },
                  a = { offTwitterActivitySettingLink: y.a.createElement(B.b, { link: ce }) },
                  r = e._fsSettingsRevamp
                    ? y.a.createElement(
                        B.b,
                        { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                        y.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'h7173352', testID: N },
                          y.a.cloneElement(a.offTwitterActivitySettingLink, null, X.a.f6325f47),
                        ),
                      )
                    : y.a.createElement(
                        B.b,
                        { color: 'gray700', style: F.a.helpText },
                        y.a.createElement(
                          X.a.I18NFormatMessage,
                          { $i18n: 'j7454249', testID: N },
                          y.a.cloneElement(n.personalizationLink, null, X.a.j291883b),
                        ),
                      )
                return y.a.createElement(
                  H.a,
                  null,
                  t.associated_devices
                    ? y.a.createElement(
                        H.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: T },
                        y.a.createElement(B.b, { color: 'normal', weight: 'bold' }, $),
                        y.a.createElement(
                          B.b,
                          { color: 'gray700', style: F.a.helpText },
                          Q({ count: t.associated_devices.num_browsers }),
                        ),
                        r,
                      )
                    : null,
                  t.associated_devices
                    ? y.a.createElement(
                        H.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: L },
                        y.a.createElement(B.b, { color: 'normal', weight: 'bold' }, ee),
                        y.a.createElement(
                          B.b,
                          { color: 'gray700', style: F.a.helpText },
                          te({ count: t.associated_devices.num_devices }),
                        ),
                        r,
                      )
                    : null,
                  y.a.createElement(
                    H.a,
                    { style: F.a.infoItem, testID: j },
                    y.a.createElement(B.b, { color: 'normal', weight: 'bold' }, ie),
                    e._fsSettingsRevamp
                      ? y.a.createElement(
                          B.b,
                          { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                          y.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'ad5f7016', testID: N },
                            y.a.cloneElement(a.offTwitterActivitySettingLink, null, X.a.id414293),
                          ),
                        )
                      : y.a.createElement(
                          B.b,
                          { color: 'gray700', style: F.a.helpText },
                          y.a.createElement(
                            X.a.I18NFormatMessage,
                            { $i18n: 'e49dd294', testID: N },
                            y.a.cloneElement(n.personalizationLink, null, X.a.b352177d),
                          ),
                        ),
                  ),
                )
              }),
              g()(l()(e), '_renderDeviceGroup', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                return e.length
                  ? y.a.createElement(
                      H.a,
                      null,
                      y.a.createElement(H.a, null, y.a.createElement(Y.b, { text: t })),
                      e.map(function (t, a) {
                        var r = e && e.length - 1 === a
                        return y.a.createElement(
                          H.a,
                          { key: "device-'".concat(a), style: [F.a.infoItem, r && !n && F.a.bottomBorder] },
                          y.a.createElement(B.b, { color: 'normal' }, t.name),
                          y.a.createElement(
                            B.b,
                            { color: 'gray700', style: F.a.helpText },
                            Z,
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
                  return y.a.createElement(
                    k.b,
                    { namespace: de },
                    y.a.createElement(
                      x.a,
                      { location: n, title: this._fsSettingsRevamp ? W : V },
                      y.a.createElement(
                        R.a,
                        null,
                        y.a.createElement(I.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(me, 'contextType', G.a)
      t.default = D(me)
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
        b = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        y = n.n(b),
        E = n('vEo5'),
        v = n('NeAX'),
        _ = n('YeIG'),
        S = n('G6rE'),
        w = n('rxPX'),
        P = n('0KEI'),
        O = n('kGix'),
        A = function (e, t) {
          var n = S.e.selectLoggedInUser(e),
            a = Object(_.a)(n) ? O.a.LOADED : E.selectFetchStatus(e)
          return Object(O.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e), a)
        },
        D = Object(w.a)()
          .propsFromState(function () {
            return {
              email: E.selectFirstEmail,
              fetchStatus: A,
              loggedInUser: S.e.selectLoggedInUser,
              phone: E.selectFirstPhoneNumber,
              ages: v.selectAge,
              birthdate: v.selectBirthdate,
              gender: v.selectGender,
              hasExactAge: v.selectHasExactAge,
              languages: v.selectLanguage,
              signupDetails: v.selectSignupDetails,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_PROFILE_SCREEN',
              ),
              fetchDevices: E.fetchDevices,
              fetchData: v.fetchDataIfNeeded,
              fetchPreferences: v.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'your_profile' }),
        R = n('xCYy'),
        I = n('yoO3'),
        k = n('PK8P'),
        x = n('7FtF'),
        C = n('XYIJ'),
        F = n('MWbm'),
        T = n('Xrkv'),
        L = n('csss'),
        j = n('pjBI'),
        N = n('t62R'),
        H = n('o1YB'),
        B = n('3XMw'),
        M = n.n(B)
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
        V = M.a.a3841918,
        W = M.a.f70cd5ed,
        J = M.a.ib6f1694,
        U = M.a.fa98627a,
        q = M.a.a8d0108d,
        Z = M.a.ac77c66c,
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
                return y.a.createElement(
                  F.a,
                  null,
                  i
                    ? y.a.createElement(L.a, {
                        description: y.a.createElement(
                          j.a,
                          null,
                          i.screen_name &&
                            y.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(i.screen_name)),
                          y.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, ce({ userid: i.id_str })),
                        ),
                        label: K,
                        link: '/settings/screen_name',
                      })
                    : null,
                  i
                    ? y.a.createElement(
                        F.a,
                        { style: [C.a.infoItem, C.a.bottomBorder] },
                        y.a.createElement(N.b, { color: 'normal' }, J),
                        y.a.createElement(N.b, { color: 'gray700', style: C.a.helpText }, z(new Date(i.created_at))),
                        s.creation_ip && s.country
                          ? y.a.createElement(
                              N.b,
                              { color: 'gray700', style: C.a.helpText },
                              ''.concat(s.creation_ip, ' (').concat(s.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  null != i && i.screen_name
                    ? y.a.createElement(L.a, { label: U, link: '/'.concat(i.screen_name) })
                    : null,
                  i && l ? y.a.createElement(L.a, { description: l, label: W, link: '/settings/phone' }) : null,
                  i && r ? y.a.createElement(L.a, { description: r, label: V, link: '/settings/email' }) : null,
                  i ? y.a.createElement(L.a, { label: Z, link: '/settings/contacts_dashboard' }) : null,
                  i
                    ? y.a.createElement(H.a, {
                        label: $,
                        learnMoreLabel: ie,
                        learnMoreLink: se,
                        subtext: i.verified ? Q : ee,
                      })
                    : null,
                  y.a.createElement(L.a, {
                    description: c.value,
                    label: q,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  i
                    ? y.a.createElement(
                        F.a,
                        { style: [C.a.infoItem, C.a.bottomBorder] },
                        y.a.createElement(N.b, { color: 'normal' }, te),
                        a ? y.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, f) : null,
                        y.a.createElement(
                          N.b,
                          { color: 'gray700', style: C.a.helpText },
                          y.a.createElement(
                            M.a.I18NFormatMessage,
                            { $i18n: 'f00220d5' },
                            y.a.createElement(N.b, { link: '/'.concat(i.screen_name) }, M.a.a781b0c6),
                          ),
                        ),
                      )
                    : null,
                  y.a.createElement(L.a, { description: u, label: ne, link: '/settings/your_twitter_data/age' }),
                  y.a.createElement(L.a, { description: d, label: ae, link: '/settings/your_twitter_data/language' }),
                  i
                    ? y.a.createElement(L.a, { description: i.protected ? Q : ee, label: re, link: '/settings/safety' })
                    : null,
                  i
                    ? null
                    : y.a.createElement(
                        F.a,
                        { style: C.a.infoItem },
                        y.a.createElement(N.b, { color: 'gray700', style: C.a.helpText }, oe),
                        y.a.createElement('br', null),
                        y.a.createElement(
                          N.b,
                          { color: 'gray700', style: C.a.helpText },
                          y.a.createElement(
                            M.a.I18NFormatMessage,
                            { $i18n: 'c757b230' },
                            y.a.createElement(N.b, { link: le }, M.a.j7f91baf),
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
                  return y.a.createElement(
                    I.a,
                    null,
                    y.a.createElement(
                      x.a,
                      { location: n, title: G },
                      y.a.createElement(
                        R.a,
                        null,
                        y.a.createElement(k.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      t.default = D(ue)
    },
    PK8P: function (e, t, n) {
      'use strict'
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
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        E = n('k49u'),
        v = n('hqKg'),
        _ = n('0KEI'),
        S = n('oEGd'),
        w = n('55TG'),
        P = Object(v.createSelector)(w.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        O = {
          verifyPassword: w.b,
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        A = Object(S.g)(P, O, null, { pure: !1 }),
        D = n('kGix'),
        R = n('v//M'),
        I = n('3XMw'),
        k = n.n(I),
        x = n('5FtR'),
        C = n('iCwC'),
        F = n('MWbm'),
        T = n('TnY3'),
        L = n('t62R'),
        j = n('6vad'),
        N = n('p+r5'),
        H = n('mw9i'),
        B = n('/yvb'),
        M = n('rHpw'),
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var z = k.a.fe36fe1f,
        X = k.a.dec3c9b8,
        K = k.a.hccd9dbd,
        V = k.a.d1091f50,
        W = k.a.g9677c6d,
        J = k.a.c8cb0b4c,
        U = (function (e) {
          u()(n, e)
          var t = G(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), 'state', { password: '' }),
              g()(
                l()(e),
                '_passwordlessSsoEnabled',
                e.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              g()(l()(e), '_handlePasswordSubmit', function () {
                var t,
                  n = e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.verifyPassword,
                  c = e.state.password
                '' !== c &&
                  r(c)
                    .then(function () {
                      e.setState({ password: '', verificationRequired: !1 }), e._makeFetch()
                    })
                    .catch(
                      a(
                        ((t = {}),
                        g()(t, E.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: J })
                          },
                        }),
                        g()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              g()(l()(e), '_makeFetch', function () {
                var t,
                  n = e.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    a(
                      ((t = {}),
                      g()(t, E.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      g()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              g()(l()(e), '_handleFetch', e._makeFetch),
              g()(l()(e), '_handleChange', function (t) {
                e.setState({ passwordError: void 0, password: t.target.value })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._makeFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.fetchStatus === D.a.LOADED && this.props.fetchStatus === D.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props.titleHeader,
                    t = this.state.passwordError,
                    n = y.a.createElement(
                      L.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      V,
                    )
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    e ? y.a.createElement(j.b, { text: e }) : null,
                    y.a.createElement(
                      F.a,
                      { style: [C.a.viewItem, C.a.bottomBorder] },
                      y.a.createElement(L.b, { color: 'gray700', size: 'subtext2' }, K),
                    ),
                    y.a.createElement(N.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: X,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    y.a.createElement(
                      H.a,
                      { style: q.buttonContainer },
                      y.a.createElement(
                        B.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: q.button, type: 'brandFilled' },
                        W,
                      ),
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location,
                    a = e.render,
                    r = this.state.verificationRequired,
                    c = t === D.a.FAILED && r
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c
                      ? this._passwordlessSsoEnabled
                        ? y.a.createElement(x.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : y.a.createElement(R.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: a }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(U, 'contextType', Y.a), g()(U, 'defaultProps', { titleHeader: z })
      var q = M.a.create(function (e) {
          return {
            buttonContainer: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 0,
              marginHorizontal: 'auto',
              paddingBottom: e.spaces.space12,
              paddingHorizontal: 0,
            },
            button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Z = A(U)
      t.a = Object(T.a)(Z)
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
        b = (n('2G9S'), n('z84I'), n('ERkP')),
        y = n.n(b),
        E = n('EPsT'),
        v = n('NeAX'),
        _ = n('1YZw'),
        S = n('rxPX'),
        w = n('0KEI'),
        P = Object(S.a)()
          .propsFromState(function () {
            return {
              fetchStatus: v.selectFetchDataStatus,
              personalizationData: v.selectData,
              settings: v.selectUserPreferences,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              clearLocations: v.clearLocations,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN',
              ),
              fetchData: v.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'locations' }),
        O = n('EfHu'),
        A = n('yoO3'),
        D = n('PK8P'),
        R = n('7FtF'),
        I = n('iCwC'),
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
        H = L.a.d1a276bc,
        B = L.a.e68b09b4,
        M = { headline: L.a.ddefdd1c, text: L.a.hea740ac, confirmButtonLabel: L.a.e68b09b4 },
        Y = L.a.a26e0d52,
        G = L.a.ae415fd2,
        z = y.a.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'a1fdeb44' },
          y.a.createElement(C.b, { link: '/settings/location_information' }, L.a.eb0d4501),
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
                return y.a.createElement(
                  A.a,
                  null,
                  y.a.createElement(
                    'div',
                    null,
                    y.a.createElement(
                      x.a,
                      { style: [k.a.infoItem, k.a.bottomBorder] },
                      y.a.createElement(C.b, { color: 'gray700' }, H),
                    ),
                    t ? e._renderLocations() : e._renderMessage(G, z),
                  ),
                )
              }),
              g()(l()(e), '_renderLocations', function () {
                var t = e.props.personalizationData.location_history
                return y.a.createElement(
                  x.a,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return y.a.createElement(
                        x.a,
                        { key: "loc-'".concat(t), style: [k.a.infoItem, k.a.locationInfo, k.a.bottomBorder] },
                        y.a.createElement(F.a, {
                          Icon: O.a,
                          color: 'neutral',
                          size: 'xLarge',
                          style: k.a.locationIcon,
                        }),
                        y.a.createElement(C.b, null, e),
                      )
                    }),
                  t && t.length
                    ? y.a.createElement(E.a, {
                        confirmationSheetConfirmButtonLabel: M.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: M.headline,
                        confirmationSheetText: M.text,
                        label: B,
                        onConfirmationSheetConfirm: e._handleDeleteLocation,
                        withBottomBorder: !1,
                      })
                    : e._renderMessage(X),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.a.createElement(
                  x.a,
                  { style: I.a.calloutTextBlock },
                  y.a.createElement(C.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.a.createElement(C.b, { align: 'center', color: 'gray700', style: k.a.helpText }, t) : null,
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
                  return y.a.createElement(
                    R.a,
                    { location: a, title: N },
                    y.a.createElement(D.a, { fetch: t, fetchStatus: n, render: this._render, titleHeader: N }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
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
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        E = n('zh9S'),
        v = n('NeAX'),
        _ = n('hqKg'),
        S = n('0KEI'),
        w = n('oEGd'),
        P = Object(_.createSelector)(v.selectFetchDataStatus, v.selectData, function (e, t) {
          return { fetchDataStatus: e, personalizationData: t }
        }),
        O = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
          ),
          fetchData: v.fetchDataIfNeeded,
          googleAnalyticsPageView: E.a,
          scribePageImpression: E.d,
        },
        A = Object(w.g)(P, O),
        D = n('3XMw'),
        R = n.n(D),
        I = n('csss'),
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
      var F = R.a.gbde3534,
        T = R.a.a54826c5,
        L = R.a.fdb55209,
        j = R.a.e1c6b2d5,
        N = R.a.ed19d10d,
        H = R.a.f00d0d02,
        B = { page: 'settings', section: 'your_twitter_data', component: 'ads_data' },
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
                return y.a.createElement(
                  k.a,
                  { location: n, title: F },
                  y.a.createElement(I.a, {
                    description: a.tailored_audience_summary ? H({ count: a.num_twitter_interests }) : null,
                    label: L,
                    link: '/settings/your_twitter_data/twitter_interests',
                  }),
                  y.a.createElement(I.a, {
                    description: a.tailored_audience_summary ? H({ count: a.num_partner_interests }) : null,
                    label: T,
                    link: '/settings/your_twitter_data/partner_interests',
                  }),
                  y.a.createElement(I.a, {
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
                  ;(0, e.scribePageImpression)(B), t(B)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(M, 'contextType', x.a)
      t.default = A(M)
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
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        E = n('zh9S'),
        v = n('NeAX'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = Object(_.a)()
          .propsFromState(function () {
            return { fetchDataStatus: v.selectFetchDataStatus, personalizationData: v.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
              ),
              fetchData: v.fetchDataIfNeeded,
              fetchPreferences: v.fetchPreferencesIfNeeded,
              googleAnalyticsPageView: E.a,
              scribePageImpression: E.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'account_history' }),
        P = n('3XMw'),
        O = n.n(P),
        A = n('yoO3'),
        D = n('csss'),
        R = n('7FtF'),
        I = n('v6aA')
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
      var x = O.a.i6b3f59a,
        C = O.a.b523ecc5,
        F = O.a.d9cbe351,
        T = O.a.de90b049,
        L = O.a.cbd2ef58,
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
                  return y.a.createElement(
                    A.a,
                    null,
                    y.a.createElement(
                      R.a,
                      { location: t, title: x },
                      y.a.createElement(D.a, {
                        description: r > 0 ? F({ count: r }) : null,
                        label: C,
                        link: '/settings/your_twitter_data/login_history',
                      }),
                      y.a.createElement(D.a, {
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
        })(y.a.Component)
      g()(j, 'contextType', I.a)
      t.default = w(j)
    },
    fpiQ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardPartnerInterestsScreen', function () {
          return J
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
        b = (n('2G9S'), n('z84I'), n('vrRf'), n('7x/C'), n('DZ+c'), n('ERkP')),
        y = n.n(b),
        E = n('zh9S'),
        v = n('NeAX'),
        _ = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        O = Object(_.createSelector)(
          function (e, t) {
            return Object(S.d)(v.selectFetchPartnerInterestsStatus(e), v.selectPreferencesFetchStatus(e))
          },
          v.selectPartnerInterests,
          v.selectPreferences,
          function (e, t, n) {
            return { fetchStatus: e, interests: t, preferences: n }
          },
        ),
        A = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN',
          ),
          fetchInterests: v.fetchPartnerInterestsIfNeeded,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateInterest: v.updateInterest,
        },
        D = Object(P.g)(O, A),
        R = n('xCYy'),
        I = n('v//M'),
        k = n('7JQg'),
        x = n('7FtF'),
        C = n('iCwC'),
        F = n('XYIJ'),
        T = n('MWbm'),
        L = n('t62R'),
        j = n('cCdp'),
        N = n('3XMw'),
        H = n.n(N)
      function B(e, t) {
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
            ? B(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
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
      var G = H.a.a54826c5,
        z = H.a.gc8f2e13,
        X = H.a.e9f1fbcb,
        K = H.a.cf0daa24,
        V = 'https://support.twitter.com/articles/20175258',
        W = { page: 'settings', section: 'your_twitter_data', component: 'partner_interests' },
        J = (function (e) {
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
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement(
                    T.a,
                    { style: [F.a.infoItem, F.a.bottomBorder] },
                    y.a.createElement(
                      L.b,
                      { color: 'gray700' },
                      y.a.createElement(
                        H.a.I18NFormatMessage,
                        { $i18n: 'c2a54dca' },
                        y.a.createElement(L.b, { link: V }, H.a.f04e17dd),
                      ),
                    ),
                  ),
                  a.map(function (t) {
                    return y.a.createElement(j.a, {
                      checked: -1 === c.indexOf(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  0 === a.length
                    ? e._renderMessage(X, K)
                    : y.a.createElement(
                        T.a,
                        { style: C.a.calloutTextBlock },
                        y.a.createElement(L.b, { color: 'gray700', style: F.a.helpText }, z),
                      ),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.a.createElement(
                  T.a,
                  { style: C.a.calloutTextBlock },
                  y.a.createElement(L.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.a.createElement(L.b, { align: 'center', color: 'gray700', style: F.a.helpText }, t) : null,
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
                ;(0, e.props.scribeAction)(M(M({}, W), {}, { action: 'edit' }))
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
                  ;(0, e.scribePageImpression)(W), t(W)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return y.a.createElement(
                    k.b,
                    { namespace: W },
                    y.a.createElement(
                      x.a,
                      { location: n, title: G },
                      y.a.createElement(
                        R.a,
                        null,
                        y.a.createElement(I.a, {
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
        })(y.a.Component)
      t.default = D(J)
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
        b = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(b),
        E = n('zh9S'),
        v = n('vEo5'),
        _ = n('NeAX'),
        S = n('1YZw'),
        w = n('hqKg'),
        P = n('YeIG'),
        O = n('G6rE'),
        A = n('0KEI'),
        D = n('oEGd'),
        R = n('kGix'),
        I = Object(w.createSelector)(
          _.selectData,
          function (e, t) {
            var n = O.e.selectLoggedInUser(e),
              a = Object(P.a)(n) ? R.a.LOADED : v.selectFetchStatus(e)
            return Object(R.d)(_.selectFetchDataStatus(e), _.selectPreferencesFetchStatus(e), a)
          },
          _.selectPreferences,
          v.selectFirstEmail,
          function (e, t, n, a) {
            return { data: e, fetchStatus: t, preferences: n, primaryEmail: a }
          },
        ),
        k = {
          addToast: S.b,
          createAudienceDownload: _.createAudienceDownload,
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN',
          ),
          fetchData: _.fetchDataIfNeeded,
          fetchDevices: v.fetchDevices,
          fetchPreferences: _.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
        },
        x = Object(D.g)(I, k),
        C = n('xCYy'),
        F = n('yoO3'),
        T = n('PK8P'),
        L = n('7JQg'),
        j = n('7FtF'),
        N = n('XYIJ'),
        H = n('MWbm'),
        B = n('t62R'),
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
      function V(e) {
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
      function W(e) {
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
      var J = { headline: X.a.hf9c2caa, text: X.a.c29b7970, confirmButtonLabel: X.a.b9e1cf02 },
        U = X.a.e1c6b2d5,
        q = X.a.da202f9a,
        Z = X.a.a8276fab,
        $ = X.a.g7912a84,
        Q = X.a.fdfed926,
        ee = { page: 'settings', section: 'your_twitter_data', component: 'tailored_audiences' },
        te = (function (e) {
          u()(n, e)
          var t = W(n)
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
                return y.a.createElement(
                  'div',
                  null,
                  y.a.createElement(
                    H.a,
                    { style: [N.a.infoItem, N.a.bottomBorder] },
                    y.a.createElement(
                      B.b,
                      { color: 'gray700' },
                      y.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'a97ef88f' },
                        y.a.createElement(B.b, { link: 'https://support.twitter.com/articles/20170405' }, X.a.ed8c03f4),
                      ),
                    ),
                  ),
                  y.a.createElement(
                    H.a,
                    { style: [N.a.infoItem, N.a.bottomBorder] },
                    y.a.createElement(
                      B.b,
                      null,
                      y.a.createElement(
                        X.a.I18NFormatMessage,
                        { $i18n: 'f451c520' },
                        y.a.createElement('strong', null, X.a.j10ebd90({ num_audiences: n.num_audiences })),
                        y.a.createElement('strong', null, X.a.efd23f39({ num_advertisers: n.num_advertisers })),
                      ),
                    ),
                  ),
                  y.a.createElement(
                    H.a,
                    { style: [N.a.infoItem, r && N.a.bottomBorder] },
                    y.a.createElement(B.b, { color: 'gray700' }, Q),
                  ),
                  r ? y.a.createElement(M.a, { color: 'primary', label: Z, onPress: c._handleRequestDataClick }) : null,
                  c.state.showEmailConfirmation &&
                    y.a.createElement(Y.a, {
                      confirmButtonLabel: J.confirmButtonLabel,
                      headline: J.headline,
                      onCancel: c._handleCancelEmail,
                      onConfirm: c._handleConfirmEmail,
                      text: J.text({ primaryEmail: a }),
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
                ;(0, c.props.scribeAction)(V(V({}, ee), {}, { action: e }))
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
                  return y.a.createElement(
                    L.b,
                    { namespace: ee },
                    y.a.createElement(
                      F.a,
                      null,
                      y.a.createElement(
                        j.a,
                        { location: n, title: this._fsSettingsRevamp ? q : U },
                        y.a.createElement(
                          C.a,
                          null,
                          y.a.createElement(T.a, {
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
        })(y.a.Component)
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
        b = (n('2G9S'), n('z84I'), n('ERkP')),
        y = n.n(b),
        E = n('NeAX'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { fetchDataStatus: E.selectFetchDataStatus, personalizationData: E.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOGIN_HISTORY_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'login_history' }),
        w = n('yoO3'),
        P = n('PK8P'),
        O = n('7FtF'),
        A = n('XYIJ'),
        D = n('MWbm'),
        R = n('t62R'),
        I = n('xHsv'),
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
        H = y.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'hcb3ad67' },
          y.a.createElement(R.b, { link: '/settings/connected_apps' }, C.a.ib55eb69),
          y.a.createElement(R.b, { link: N }, C.a.e5a4a538),
        ),
        B = y.a.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'da2603ab' },
          y.a.createElement(R.b, { link: '/settings/applications' }, C.a.icbb92d0),
          y.a.createElement(R.b, { link: N }, C.a.a9bec4ef),
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return y.a.createElement(
                        D.a,
                        { key: "hist-'".concat(t), style: [A.a.infoItem, A.a.bottomBorder] },
                        y.a.createElement(R.b, { color: 'normal' }, e.app_name),
                        y.a.createElement(R.b, { color: 'gray700', style: A.a.helpText }, j(new Date(e.time))),
                        y.a.createElement(
                          R.b,
                          { color: 'gray700', style: A.a.helpText },
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
                  return y.a.createElement(
                    w.a,
                    null,
                    y.a.createElement(
                      O.a,
                      { location: a, title: T },
                      y.a.createElement(I.a, { description: this._fsSettingsRevamp ? H : B }),
                      y.a.createElement(P.a, { fetch: t, fetchStatus: n, render: this._render }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
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
        b = n('KEM+'),
        y = n.n(b),
        E = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        v = n.n(E),
        _ = n('NeAX'),
        S = n('1YZw'),
        w = n('kGix'),
        P = n('rxPX'),
        O = n('0KEI'),
        A = function (e, t) {
          return Object(w.d)(_.selectFetchDataStatus(e), _.selectPreferencesFetchStatus(e))
        },
        D = Object(P.a)()
          .propsFromState(function () {
            return { fetchStatus: A, gender: _.selectGender, personalizationPreferences: _.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              addToast: S.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_GENDER_SCREEN',
              ),
              fetchData: _.fetchDataIfNeeded,
              fetchPreferences: _.fetchPreferencesIfNeeded,
              updateGender: _.updateGender,
              updateSettings: _.updateSettings,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'gender' }),
        R = n('xCYy'),
        I = n('3XMw'),
        k = n.n(I),
        x = n('yoO3'),
        C = n('PK8P'),
        F = n('7FtF'),
        T = n('iCwC'),
        L = n('XYIJ'),
        j = n('MWbm'),
        N = n('t62R'),
        H = n('Y3cQ'),
        B = n('p+r5'),
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
        V = k.a.fbf0e61d,
        W = k.a.de32365f,
        J = k.a.b6ab31bd,
        U = k.a.b4568a3a,
        q = k.a.c0be743d,
        Z = k.a.i2209530,
        $ = [
          { label: W, value: 'female' },
          { label: J, value: 'male' },
          { label: U, value: X },
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
              y()(u()(r), 'combinedFetches', function () {
                var e = r.props,
                  t = e.fetchData,
                  n = e.fetchPreferences
                return Promise.all([t(), n()])
              }),
              y()(u()(r), '_render', function () {
                return v.a.createElement(
                  'div',
                  null,
                  v.a.createElement(
                    j.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    v.a.createElement(N.b, { color: 'gray700' }, r.isLoggedIn ? V : Q),
                  ),
                  r.isLoggedIn ? r._renderGenderSelector() : r._renderLoggedOut(),
                )
              }),
              y()(u()(r), '_renderMessage', function (e, t) {
                return v.a.createElement(
                  j.a,
                  { style: T.a.calloutTextBlock },
                  v.a.createElement(N.b, { align: 'center', size: 'headline1' }, e),
                  t ? v.a.createElement(N.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              y()(u()(r), '_handleItemChanged', function (e, t) {
                var n = t === X
                r.setState({ self_identify: n, gender: n ? null : t })
              }),
              y()(u()(r), '_handleCustomGenderUpdate', function (e) {
                var t = e.target.value
                r.setState({ self_identify: !0, gender: t })
              }),
              y()(u()(r), '_handleSaveGender', function () {
                var e = r.props,
                  t = e.addToast,
                  n = e.createLocalApiErrorHandler,
                  a = e.updateGender,
                  c = r.state.self_identify ? X : r.state.gender || X
                r._scribeAction(),
                  a({ type: c, value: r.state.gender || '' })
                    .then(function () {
                      return t({ text: q })
                    }, n({ showToast: !0 }))
                    .then(r._handleCancel)
              }),
              y()(u()(r), '_handleCancel', function () {
                r.props.history.goBack({ backLocation: '/settings/your_twitter_data/account' })
              }),
              y()(u()(r), '_handleBooleanChanged', function (e, t) {
                var n = r.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.updateSettings)(y()({}, e, !t)).catch(a())
              }),
              y()(u()(r), '_scribeAction', function () {
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
                        ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: Z }
                        : void 0
                  return v.a.createElement(
                    x.a,
                    null,
                    v.a.createElement(
                      F.a,
                      r()({ location: n, title: K }, a),
                      v.a.createElement(
                        R.a,
                        null,
                        v.a.createElement(C.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderGenderSelector',
                value: function () {
                  var e = this.props.gender
                  return v.a.createElement(
                    j.a,
                    null,
                    v.a.createElement(H.a, {
                      name: 'gender',
                      onChange: this._handleItemChanged,
                      options: $,
                      value: this.selectedGender,
                    }),
                    this.selectedGender === X
                      ? v.a.createElement(B.a, {
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
                  return v.a.createElement(
                    j.a,
                    null,
                    this.selectedGender
                      ? v.a.createElement(
                          j.a,
                          { style: [L.a.infoItem, L.a.bottomBorder] },
                          v.a.createElement(N.b, null, this.props.gender.value),
                        )
                      : this._renderMessage(te, ne),
                    v.a.createElement(M.a, {
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
        })(v.a.Component)
      y()(ae, 'contextType', Y.a)
      t.default = D(ae)
    },
    o1YB: function (e, t, n) {
      'use strict'
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
        b = (n('2G9S'), n('uFXj'), n('ERkP')),
        y = n.n(b),
        E = n('t62R'),
        v = n('rHpw'),
        _ = n('MWbm')
      function S(e) {
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
      var w = (function (e) {
        u()(n, e)
        var t = S(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, c = new Array(a), o = 0; o < a; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            g()(l()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return y.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            g()(l()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                a = t.learnMoreLink
              return a && n ? y.a.createElement(E.b, { link: a, size: 'subtext2' }, n) : null
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
                  t = e.label,
                  n = e.learnMoreLabel,
                  a = e.learnMoreLink,
                  r = e.subtext,
                  c = e.withBottomBorder
                return y.a.createElement(
                  _.a,
                  { style: [P.root, c && P.bottomBorder] },
                  y.a.createElement(E.b, null, t),
                  r
                    ? n && a
                      ? this._renderSubtextAndLink()
                      : y.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, r)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      g()(w, 'defaultProps', { withBottomBorder: !0 })
      var P = v.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.a = w
    },
    'v/BL': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardAgeScreen', function () {
          return V
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
        b = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        y = n.n(b),
        E = n('NeAX'),
        v = n('kGix'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = function (e, t) {
          return Object(v.d)(E.selectFetchDataStatus(e), E.selectPreferencesFetchStatus(e))
        },
        P = Object(_.a)()
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
        O = n('xCYy'),
        A = n('yoO3'),
        D = n('PK8P'),
        R = n('7FtF'),
        I = n('iCwC'),
        k = n('XYIJ'),
        x = n('MWbm'),
        C = n('t62R'),
        F = n('Xrkv'),
        T = n('cCdp'),
        L = n('v6aA'),
        j = n('3XMw'),
        N = n.n(j)
      function H(e) {
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
      var B = N.a.bf96fda4,
        M = y.a.createElement(
          N.a.I18NFormatMessage,
          { $i18n: 'bf82b0a6' },
          y.a.createElement(
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
        V = (function (e) {
          u()(n, e)
          var t = H(n)
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
                return y.a.createElement(
                  'div',
                  null,
                  e._renderAges(),
                  e.isLoggedIn
                    ? y.a.createElement(x.a, { style: k.a.infoItem }, y.a.createElement(C.b, { color: 'gray700' }, Y))
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
                  ? y.a.createElement(x.a, { style: [k.a.infoItem, k.a.bottomBorder] }, y.a.createElement(C.b, null, n))
                  : e._renderMessage(X, K)
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.a.createElement(
                  x.a,
                  { style: [I.a.calloutTextBlock, I.a.bottomBorder] },
                  y.a.createElement(C.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.a.createElement(C.b, { align: 'center', color: 'gray700', style: k.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_renderUseAge', function () {
                var t = e.props.personalizationPreferences,
                  n = t && t.age_preferences && t.age_preferences.use_age_for_personalization
                return y.a.createElement(T.a, {
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
                  return y.a.createElement(
                    A.a,
                    null,
                    y.a.createElement(
                      R.a,
                      { location: n, title: B },
                      y.a.createElement(
                        O.a,
                        null,
                        y.a.createElement(
                          x.a,
                          { style: [k.a.infoItem, k.a.bottomBorder] },
                          y.a.createElement(C.b, { color: 'gray700' }, this.isLoggedIn ? M : G),
                        ),
                        y.a.createElement(D.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(V, 'contextType', L.a)
      t.default = P(V)
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
        b = l.a.i5f7b6b8,
        y = l.a.i6b3f59a,
        E = l.a.g1aced04,
        v = l.a.j9d10268,
        _ = l.a.gbde3534,
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
                    r.a.createElement(m.a, { label: b, link: '/settings/your_twitter_data/account' }),
                    n
                      ? r.a.createElement(m.a, { label: y, link: '/settings/your_twitter_data/account_history' })
                      : null,
                    r.a.createElement(m.a, { label: E, link: '/settings/your_twitter_data/devices' }),
                    n
                      ? r.a.createElement(m.a, { label: v, link: '/settings/your_twitter_data/account_activity' })
                      : null,
                    r.a.createElement(m.a, { label: _, link: '/settings/your_twitter_data/ads' }),
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
        return y
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
      function b() {
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
      function y(e) {
        var t = r.a.useContext(c.a).featureSwitches,
          n = Object(d.a)(u.m),
          a = Object(o.b)(s.u, t)
        return n || a ? e.children : r.a.createElement(b, null)
      }
    },
  },
])
//# sourceMappingURL=WIPED
