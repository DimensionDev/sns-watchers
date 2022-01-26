;(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    '/1nx': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AppsAndDevicesScreen', function () {
          return T
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('KOtZ'), n('ERkP')),
        b = n('NeAX'),
        E = n('rxPX'),
        v = n('0KEI'),
        _ = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchDataStatus: b.selectFetchDataStatus,
              fetchPreferencesStatus: b.selectPreferencesFetchStatus,
              personalizationData: b.selectData,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
              ),
              fetchData: b.fetchDataIfNeeded,
              fetchPreferences: b.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'transparency', component: 'apps_and_devices' }),
        S = n('xCYy'),
        w = n('3XMw'),
        P = n.n(w),
        O = n('tn7R'),
        A = n('yoO3'),
        D = n('7FtF'),
        R = n('t62R'),
        I = n('csss')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var x = P.a.g1aced04,
        F = P.a.jc02ae67,
        C = P.a.cc49f761,
        L = P.a.g6bc494b,
        T = (function (e) {
          u()(n, e)
          var t = k(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_getDescription', function () {
                var t = e.props.personalizationData,
                  n = t.known_devices
                    ? Object(O.a)(t.known_devices).reduce(function (e, t) {
                        return e + t.length
                      }, 0)
                    : 0,
                  r = t.associated_devices ? t.associated_devices.num_browsers + t.associated_devices.num_devices : 0
                return y.createElement(
                  y.Fragment,
                  null,
                  n > 0 ? y.createElement(R.b, { color: 'gray700', size: 'subtext2' }, C({ count: n || 0 })) : null,
                  r > 0 ? y.createElement(R.b, { color: 'gray700', size: 'subtext2' }, L({ count: r })) : null,
                )
              }),
              g()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchPreferences().catch(t()), e.props.fetchData().catch(t())
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
                  var e = this.props.location
                  return y.createElement(
                    A.a,
                    null,
                    y.createElement(
                      D.a,
                      { location: e, title: x },
                      y.createElement(
                        S.a,
                        null,
                        y.createElement(I.a, {
                          description: this._getDescription(),
                          label: x,
                          link: '/settings/your_twitter_data/devices',
                        }),
                        y.createElement(I.a, { label: F, link: '/settings/applications' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = _(T)
    },
    '4UZQ': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardTwitterInterestsScreen', function () {
          return re
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('z84I'), n('7x/C'), n('DZ+c'), n('ERkP')),
        b = n('zrOZ'),
        E = n('zh9S'),
        v = n('NeAX'),
        _ = n('hqKg'),
        S = n('kGix'),
        w = n('0KEI'),
        P = n('oEGd'),
        O = Object(_.createSelector)(
          function (e, t) {
            return Object(S.d)(v.selectFetchTwitterInterestsStatus(e), v.selectPreferencesFetchStatus(e))
          },
          v.selectTwitterInterests,
          v.selectPreferences,
          function (e, t, n) {
            return { fetchStatus: e, interests: t, preferences: n }
          },
        ),
        A = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN',
          ),
          fetchInterests: v.fetchTwitterInterestsIfNeeded,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribeAction: E.c,
          scribePageImpression: E.d,
          updateInterest: v.updateInterest,
        },
        D = Object(P.g)(O, A),
        R = n('xCYy'),
        I = n('v//M'),
        k = n('3XMw'),
        x = n.n(k),
        F = n('yoO3'),
        C = n('7JQg'),
        L = n('eM8g'),
        T = n('7FtF'),
        j = n('iCwC'),
        N = n('XYIJ'),
        H = n('MWbm'),
        B = n('k/OQ'),
        M = n('cCdp'),
        Y = n('t62R'),
        G = n('mw9i'),
        z = n('v6aA')
      function X(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var W = x.a.h1f01a24,
        J = x.a.c07b4316,
        U = x.a.e97196fe,
        Z = x.a.e652513d,
        q = x.a.gd1ce493,
        $ = x.a.e9f1fbcb,
        Q = x.a.cf0daa24,
        ee = '/settings/your_twitter_data/twitter_interests',
        te = '/settings/your_twitter_data/twitter_interests/interest',
        ne = { page: 'settings', section: 'your_twitter_data', component: 'twitter_interests' },
        re = (function (e) {
          u()(n, e)
          var t = V(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_renderTabs', function () {
                if (!e._hasKnownInterests()) return null
                var t = [
                  { to: ee, key: U, label: U },
                  { to: te, key: J, label: J },
                ]
                return y.createElement(B.a, { accessibilityLabel: W, links: t })
              }),
              g()(l()(e), '_render', function () {
                return e.props.location.pathname !== te && e._hasKnownInterests()
                  ? e._renderKnownInterests()
                  : e._renderInterests()
              }),
              g()(l()(e), '_renderInterests', function () {
                var t = e.props,
                  n = t.interests,
                  r = t.preferences.interest_preferences,
                  a = void 0 === r ? {} : r,
                  c = n.interested_in || [],
                  o = Object(b.a)(a.disabled_interests || []),
                  i = !c.length
                return y.createElement(
                  'div',
                  null,
                  y.createElement(L.a, null, Z),
                  c.map(function (t, n) {
                    return y.createElement(M.a, {
                      checked: !o.has(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  i ? e._renderMessage($, Q) : null,
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.createElement(
                  H.a,
                  { style: [j.a.calloutTextBlock, j.a.bottomBorder] },
                  y.createElement(Y.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.createElement(Y.b, { align: 'center', color: 'gray700', style: N.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_renderKnownInterests', function () {
                var t = e.props,
                  n = t.interests,
                  r = t.preferences.interest_preferences,
                  a = void 0 === r ? {} : r,
                  c = n.known_for || [],
                  o = Object(b.a)(a.disabled_interests || [])
                return y.createElement(
                  'div',
                  null,
                  y.createElement(L.a, null, q),
                  c.map(function (t, n) {
                    return y.createElement(M.a, {
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
                var r = e.props,
                  a = r.createLocalApiErrorHandler,
                  c = r.updateInterest
                e._scribeAction(), c(t, n, 'ads').catch(a({ showToast: !0 }))
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(K(K({}, ne), {}, { action: 'edit' }))
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
                  return y.createElement(
                    C.b,
                    { namespace: ne },
                    y.createElement(
                      F.a,
                      null,
                      y.createElement(
                        T.a,
                        { location: n, secondaryBar: this._renderTabs(), title: W },
                        y.createElement(
                          R.a,
                          null,
                          y.createElement(
                            G.a,
                            null,
                            y.createElement(I.a, {
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
        })(y.Component)
      g()(re, 'contextType', z.a)
      t.default = D(re)
    },
    '55TG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return g
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('2G9S'), n('kGix')),
        o = n('XMGw'),
        i = n('Ssj5'),
        l = n('oEOe')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
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
        h = { fetchStatus: c.a.NONE }
      i.a.register(
        a()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
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
      var m = function (e) {
          return e.verifyPassword.fetchStatus
        },
        g = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { params: { password: e }, request: a.Settings.verifyPassword })({
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
          return W
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
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
        b = n('zh9S'),
        E = n('NeAX'),
        v = n('hqKg'),
        _ = n('kGix'),
        S = n('0KEI'),
        w = n('oEGd'),
        P = Object(v.createSelector)(
          E.selectData,
          function (e, t) {
            return Object(_.d)(E.selectFetchDataStatus(e), E.selectPreferencesFetchStatus(e))
          },
          E.selectPreferences,
          function (e, t, n) {
            return { data: e, fetchStatus: t, preferences: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN',
          ),
          fetchData: E.fetchDataIfNeeded,
          fetchPreferences: E.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: b.a,
          scribeAction: b.c,
          scribePageImpression: b.d,
          updateLanguage: E.updateLanguage,
        },
        A = Object(w.g)(P, O),
        D = n('xCYy'),
        R = n('3XMw'),
        I = n.n(R),
        k = n('PK8P'),
        x = n('7JQg'),
        F = n('7FtF'),
        C = n('iCwC'),
        L = n('XYIJ'),
        T = n('MWbm'),
        j = n('t62R'),
        N = n('cCdp')
      function H(e, t) {
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
      function B(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Y = I.a.a03dacaa,
        G = I.a.b056d9dc,
        z = I.a.h68bc23c,
        X = I.a.e9f1fbcb,
        K = I.a.cf0daa24,
        V = { page: 'settings', section: 'your_twitter_data', component: 'language' },
        W = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  r = t.fetchPreferences
                return Promise.all([n(), r()])
              }),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.data.languages,
                  r = void 0 === n ? [] : n,
                  a = t.preferences,
                  c = r[0],
                  o = r.length > 1 ? r.slice(1) : [],
                  i = a.language_preferences && a.language_preferences.disabled_languages
                return y.createElement(
                  'div',
                  null,
                  y.createElement(
                    T.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    y.createElement(j.b, { color: 'gray700' }, G),
                  ),
                  c
                    ? y.createElement(
                        T.a,
                        { style: [L.a.infoItem, o.length > 0 && L.a.bottomBorder] },
                        y.createElement(j.b, null, c.display),
                      )
                    : y.createElement(T.a, { style: o.length > 0 && L.a.bottomBorder }, e._renderMessage(X, K)),
                  o.length > 0
                    ? y.createElement(
                        T.a,
                        { style: [L.a.infoItem, L.a.bottomBorder] },
                        y.createElement(j.b, { color: 'gray700' }, z),
                      )
                    : null,
                  o.map(function (t, n) {
                    return y.createElement(N.a, {
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
                return y.createElement(
                  T.a,
                  { style: C.a.calloutTextBlock },
                  y.createElement(j.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.createElement(j.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_handleUpdateLanguage', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler
                ;(0, r.updateLanguage)(t, n).catch(a({ showToast: !0 })), e._scribeAction()
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(B(B({}, V), {}, { action: 'edit' }))
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
                  return y.createElement(
                    x.b,
                    { namespace: V },
                    y.createElement(
                      F.a,
                      { location: n, title: Y },
                      y.createElement(
                        D.a,
                        null,
                        y.createElement(k.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = A(W)
    },
    C40e: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountActivityScreen', function () {
          return p
        })
      var r = n('ERkP'),
        a = n('3XMw'),
        c = n.n(a),
        o = n('yoO3'),
        i = n('csss'),
        l = n('7FtF'),
        s = n('7JQg'),
        u = c.a.j9d10268,
        f = c.a.a5f32aa2,
        d = c.a.daef29b7,
        p = function (e) {
          var t = e.location
          return r.createElement(
            o.a,
            null,
            r.createElement(
              l.a,
              { location: t, title: u },
              r.createElement(i.a, { label: f, link: '/settings/blocked/all' }),
              r.createElement(i.a, { label: d, link: '/settings/muted/all' }),
            ),
          )
        }
      t.default = Object(s.c)({ page: 'settings', section: 'your_twitter_data', component: 'account_activity' })(p)
    },
    E7qF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardRequestDataScreen', function () {
          return Y
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        b = n('t62R'),
        E = n('vEo5'),
        v = n('NeAX'),
        _ = n('1YZw'),
        S = n('rxPX'),
        w = Object(S.a)()
          .propsFromState(function () {
            return { deviceFetchStatus: E.selectFetchStatus, primaryEmail: E.selectFirstEmail }
          })
          .propsFromActions(function () {
            return { addToast: _.b, createDataDownload: v.createDataDownload, fetchDevices: E.fetchDevices }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'request_data' }),
        P = n('xCYy'),
        O = n('v//M'),
        A = n('3XMw'),
        D = n.n(A),
        R = n('yoO3'),
        I = n('7FtF'),
        k = n('iCwC'),
        x = n('XYIJ'),
        F = n('MWbm'),
        C = n('v6aA')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var T = D.a.d3310e48,
        j = D.a.ib03e8c8,
        N = D.a.abedd45c,
        H = D.a.abedd45c,
        B = D.a.g49741e8,
        M = D.a.dc370a0c,
        Y = (function (e) {
          u()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_render', function () {
                var t = e.props.primaryEmail
                return y.createElement(
                  'div',
                  null,
                  y.createElement(
                    F.a,
                    { style: [x.a.infoItem, x.a.bottomBorder] },
                    y.createElement(b.b, null, t ? T({ primaryEmail: t }) : j),
                  ),
                  y.createElement(
                    F.a,
                    { accessibilityRole: 'button', onClick: e._handleRequestDataClick, style: k.a.viewItem },
                    y.createElement(b.b, { align: 'center', color: 'link' }, t ? H : B),
                  ),
                )
              }),
              g()(l()(e), '_handleRequestDataClick', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.createDataDownload
                t.primaryEmail
                  ? (e._scribeAction('email'),
                    r().then(function () {
                      return n({ text: M })
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
                  return y.createElement(
                    R.a,
                    null,
                    y.createElement(
                      I.a,
                      { location: n, title: N },
                      y.createElement(
                        P.a,
                        null,
                        this.isLoggedIn
                          ? y.createElement(O.a, {
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
        })(y.Component)
      g()(Y, 'contextType', C.a)
      t.default = w(Y)
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = n('ERkP'),
        b = n('jtO7'),
        E = n('eb3s')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var _ = (function (e) {
        u()(n, e)
        var t = v(n)
        function n(e) {
          var r
          return (
            a()(this, n),
            (r = t.call(this, e)),
            g()(l()(r), '_handleClick', function (e) {
              r.setState({ showConfirmation: !0 })
            }),
            g()(l()(r), '_handleCancel', function () {
              r.setState({ showConfirmation: !1 })
            }),
            g()(l()(r), '_handleConfirm', function () {
              r.setState({ showConfirmation: !1 }), r.props.onConfirmationSheetConfirm()
            }),
            (r.state = { showConfirmation: !1 }),
            r
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
                  r = e.confirmationSheetConfirmButtonLabel,
                  a = e.confirmationSheetConfirmButtonType,
                  c = e.confirmationSheetHeadline,
                  o = e.confirmationSheetText,
                  i = e.label
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(b.a, { align: t, color: n, label: i, onPress: this._handleClick }),
                  this.state.showConfirmation
                    ? y.createElement(E.a, {
                        confirmButtonLabel: r,
                        confirmButtonType: a,
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
      })(y.Component)
      g()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    MG1F: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardDevicesScreen', function () {
          return pe
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ho0z'), n('ERkP')),
        b = n('zh9S'),
        E = n('NeAX'),
        v = n('hqKg'),
        _ = n('kGix'),
        S = n('0KEI'),
        w = n('oEGd'),
        P = Object(v.createSelector)(
          E.selectData,
          function (e, t) {
            return Object(_.d)(E.selectFetchDataStatus(e), E.selectPreferencesFetchStatus(e))
          },
          E.selectUserPreferences,
          function (e, t, n) {
            return { data: e, fetchStatus: t, settings: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN',
          ),
          fetchData: E.fetchDataIfNeeded,
          fetchPreferences: E.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: b.a,
          scribePageImpression: b.d,
        },
        A = Object(w.g)(P, O),
        D = n('xCYy'),
        R = n('PK8P'),
        I = n('7JQg'),
        k = n('7FtF'),
        x = n('iCwC'),
        F = n('XYIJ'),
        C = 'linkedBrowsersView',
        L = 'linkedMobileDevicesView',
        T = 'linkedEmailAddressesView',
        j = 'helpText',
        N = n('MWbm'),
        H = n('t62R'),
        B = n('0yYu'),
        M = n('6vad'),
        Y = n('v6aA'),
        G = n('3XMw'),
        z = n.n(G)
      function X(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var K = z.a.g1aced04,
        V = z.a.hc36dbba,
        W = z.a.j4fa776e,
        J = z.a.i7acdb35,
        U = z.a.c112dfc8,
        Z = z.a.jd8607b9,
        q = z.a.ea4f6c9e,
        $ = z.a.d750b93e,
        Q = z.a.a9783601,
        ee = z.a.j043aa31,
        te = z.a.f2aa6e95,
        ne = z.a.i4d7deee,
        re = z.a.ae415fd2,
        ae = '/settings/off_twitter_activity',
        ce = '/settings/personalization',
        oe = z.a.a90be7b3,
        ie = z.a.e7989d0b,
        le = z.a.ba2e82a1,
        se = 'https://support.twitter.com/articles/20175257',
        ue = '/personalization',
        fe = { page: 'settings', section: 'your_twitter_data', component: 'devices' },
        de = [],
        pe = (function (e) {
          u()(n, e)
          var t = X(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
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
                  r = t.fetchPreferences
                return Promise.all([n(), r()])
              }),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.data.known_devices,
                  r = void 0 === n ? {} : n,
                  a = t.settings,
                  c = r.phone || de,
                  o = r.tablet || de,
                  i = r.desktop || de,
                  l = { supportLink: y.createElement(H.b, { link: se }) }
                return y.createElement(
                  N.a,
                  null,
                  !e.isLoggedIn &&
                    y.createElement(
                      H.b,
                      { color: 'gray700', size: 'subtext2', style: [x.a.infoText, x.a.bottomBorder] },
                      y.createElement(
                        z.a.I18NFormatMessage,
                        { $i18n: 'f870a95b' },
                        y.cloneElement(l.supportLink, null, z.a.b1d602d6),
                      ),
                    ),
                  e.isLoggedIn &&
                    c.length > 0 &&
                    o.length > 0 &&
                    i.length > 0 &&
                    y.createElement(
                      H.b,
                      { color: 'gray700', size: 'subtext2', style: [x.a.infoText, x.a.bottomBorder] },
                      y.createElement(
                        z.a.I18NFormatMessage,
                        { $i18n: 'e21b623d' },
                        y.cloneElement(l.supportLink, null, z.a.d1597cc9),
                      ),
                    ),
                  e._renderDeviceGroup(c, W, !!e._fsSettingsRevamp && 0 === o.length && 0 === i.length),
                  e._renderDeviceGroup(o, J, !!e._fsSettingsRevamp && 0 === i.length),
                  e._renderDeviceGroup(i, U, e._fsSettingsRevamp),
                  e._fsSettingsRevamp && y.createElement(B.a, null),
                  e.isLoggedIn &&
                    y.createElement(
                      H.b,
                      {
                        color: 'gray700',
                        size: 'subtext2',
                        style: [x.a.infoText, a.allowDeviceAccess || !e._fsSettingsRevamp ? x.a.bottomBorder : null],
                      },
                      e._fsSettingsRevamp
                        ? y.createElement(
                            z.a.I18NFormatMessage,
                            { $i18n: 'b6baf554' },
                            y.cloneElement(l.supportLink, null, z.a.dc546af8),
                          )
                        : a.allowDeviceAccess
                        ? y.createElement(
                            z.a.I18NFormatMessage,
                            { $i18n: 'h185b86a' },
                            y.cloneElement(l.supportLink, null, z.a.b6fe9d79),
                          )
                        : ie,
                    ),
                  a.allowDeviceAccess ? e._renderLinkedDevices() : e._renderFeatureDisabledMessage(),
                )
              }),
              g()(l()(e), '_renderFeatureDisabledMessage', function () {
                return y.createElement(
                  N.a,
                  { style: e._fsSettingsRevamp ? F.a.featureDisabledCallout : x.a.calloutTextBlock },
                  y.createElement(
                    H.b,
                    { align: 'center', size: 'headline1', style: e._fsSettingsRevamp && F.a.featureDisabledTitle },
                    e._fsSettingsRevamp ? re : te,
                  ),
                  y.createElement(
                    H.b,
                    { align: 'center', color: 'gray700', style: F.a.helpText },
                    e._fsSettingsRevamp
                      ? y.createElement(
                          z.a.I18NFormatMessage,
                          { $i18n: 'e1d684b1' },
                          y.createElement(H.b, { link: e._fsSettingsRevamp ? ae : ce }, z.a.e440acda),
                        )
                      : ne,
                  ),
                )
              }),
              g()(l()(e), '_renderLinkedDevices', function () {
                var t = e.props.data,
                  n = { personalizationLink: y.createElement(H.b, { link: ue }) },
                  r = { offTwitterActivitySettingLink: y.createElement(H.b, { link: ae }) },
                  a = e._fsSettingsRevamp
                    ? y.createElement(
                        H.b,
                        { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                        y.createElement(
                          z.a.I18NFormatMessage,
                          { $i18n: 'h7173352', testID: j },
                          y.cloneElement(r.offTwitterActivitySettingLink, null, z.a.f6325f47),
                        ),
                      )
                    : y.createElement(
                        H.b,
                        { color: 'gray700', style: F.a.helpText },
                        y.createElement(
                          z.a.I18NFormatMessage,
                          { $i18n: 'j7454249', testID: j },
                          y.cloneElement(n.personalizationLink, null, z.a.j291883b),
                        ),
                      )
                return y.createElement(
                  N.a,
                  null,
                  t.associated_devices
                    ? y.createElement(
                        N.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: C },
                        y.createElement(H.b, { color: 'normal', weight: 'bold' }, q),
                        y.createElement(
                          H.b,
                          { color: 'gray700', style: F.a.helpText },
                          $({ count: t.associated_devices.num_browsers }),
                        ),
                        a,
                      )
                    : null,
                  t.associated_devices
                    ? y.createElement(
                        N.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: L },
                        y.createElement(H.b, { color: 'normal', weight: 'bold' }, Q),
                        y.createElement(
                          H.b,
                          { color: 'gray700', style: F.a.helpText },
                          ee({ count: t.associated_devices.num_devices }),
                        ),
                        a,
                      )
                    : null,
                  y.createElement(
                    N.a,
                    { style: F.a.infoItem, testID: T },
                    y.createElement(H.b, { color: 'normal', weight: 'bold' }, oe),
                    e._fsSettingsRevamp
                      ? y.createElement(
                          H.b,
                          { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                          y.createElement(
                            z.a.I18NFormatMessage,
                            { $i18n: 'ad5f7016', testID: j },
                            y.cloneElement(r.offTwitterActivitySettingLink, null, z.a.id414293),
                          ),
                        )
                      : y.createElement(
                          H.b,
                          { color: 'gray700', style: F.a.helpText },
                          y.createElement(
                            z.a.I18NFormatMessage,
                            { $i18n: 'e49dd294', testID: j },
                            y.cloneElement(n.personalizationLink, null, z.a.b352177d),
                          ),
                        ),
                  ),
                )
              }),
              g()(l()(e), '_renderDeviceGroup', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                return e.length
                  ? y.createElement(
                      N.a,
                      null,
                      y.createElement(N.a, null, y.createElement(M.b, { text: t })),
                      e.map(function (t, r) {
                        var a = e && e.length - 1 === r
                        return y.createElement(
                          N.a,
                          { key: "device-'".concat(r), style: [F.a.infoItem, a && !n && F.a.bottomBorder] },
                          y.createElement(H.b, { color: 'normal' }, t.name),
                          y.createElement(
                            H.b,
                            { color: 'gray700', style: F.a.helpText },
                            Z,
                            ' ',
                            le(new Date(t.created_at)),
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
                  ;(0, e.scribePageImpression)(fe), t(fe)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return y.createElement(
                    I.b,
                    { namespace: fe },
                    y.createElement(
                      k.a,
                      { location: n, title: this._fsSettingsRevamp ? V : K },
                      y.createElement(
                        D.a,
                        null,
                        y.createElement(R.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      g()(pe, 'contextType', Y.a)
      t.default = A(pe)
    },
    O6Qx: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardProfileScreen', function () {
          return se
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        b = n('vEo5'),
        E = n('NeAX'),
        v = n('YeIG'),
        _ = n('G6rE'),
        S = n('rxPX'),
        w = n('0KEI'),
        P = n('kGix'),
        O = function (e, t) {
          var n = _.e.selectLoggedInUser(e),
            r = Object(v.a)(n) ? P.a.LOADED : b.selectFetchStatus(e)
          return Object(P.d)(E.selectFetchDataStatus(e), E.selectPreferencesFetchStatus(e), r)
        },
        A = Object(S.a)()
          .propsFromState(function () {
            return {
              email: b.selectFirstEmail,
              fetchStatus: O,
              loggedInUser: _.e.selectLoggedInUser,
              phone: b.selectFirstPhoneNumber,
              ages: E.selectAge,
              birthdate: E.selectBirthdate,
              gender: E.selectGender,
              hasExactAge: E.selectHasExactAge,
              languages: E.selectLanguage,
              signupDetails: E.selectSignupDetails,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_PROFILE_SCREEN',
              ),
              fetchDevices: b.fetchDevices,
              fetchData: E.fetchDataIfNeeded,
              fetchPreferences: E.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'your_profile' }),
        D = n('xCYy'),
        R = n('yoO3'),
        I = n('PK8P'),
        k = n('7FtF'),
        x = n('XYIJ'),
        F = n('MWbm'),
        C = n('Xrkv'),
        L = n('csss'),
        T = n('pjBI'),
        j = n('t62R'),
        N = n('o1YB'),
        H = n('3XMw'),
        B = n.n(H)
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Y = B.a.i5f7b6b8,
        G = B.a.d0a77c9a,
        z = B.a.jade381b,
        X = B.a.d1f6d336,
        K = B.a.a3841918,
        V = B.a.f70cd5ed,
        W = B.a.ib6f1694,
        J = B.a.fa98627a,
        U = B.a.a8d0108d,
        Z = B.a.ac77c66c,
        q = B.a.h3290871,
        $ = B.a.b7ec04f3,
        Q = B.a.i62a03aa,
        ee = B.a.c119dee8,
        te = B.a.bf96fda4,
        ne = B.a.a03dacaa,
        re = B.a.f445dc78,
        ae = B.a.je99e595,
        ce = B.a.d6d80990,
        oe = B.a.i859a9d3,
        ie = '/settings/account/personalization',
        le = 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
        se = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  r = t.fetchDevices,
                  a = t.fetchPreferences,
                  c = t.loggedInUser,
                  o = [n(), a()]
                return c && o.push(r()), Promise.all(o)
              }),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.ages,
                  r = t.birthdate,
                  a = t.email,
                  c = t.gender,
                  o = t.languages,
                  i = t.loggedInUser,
                  l = t.phone,
                  s = t.signupDetails,
                  u = Object(C.a)(
                    n.map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    }),
                    true,
                  ),
                  f = r && z(new Date(''.concat(r, 'T00:00:00'))),
                  d = Object(C.a)(
                    o.map(function (e) {
                      return e.display
                    }),
                    true,
                  )
                return y.createElement(
                  F.a,
                  null,
                  i
                    ? y.createElement(L.a, {
                        description: y.createElement(
                          T.a,
                          null,
                          i.screen_name &&
                            y.createElement(j.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(i.screen_name)),
                          y.createElement(j.b, { color: 'gray700', size: 'subtext2' }, ae({ userid: i.id_str })),
                        ),
                        label: X,
                        link: '/settings/screen_name',
                      })
                    : null,
                  i
                    ? y.createElement(
                        F.a,
                        { style: [x.a.infoItem, x.a.bottomBorder] },
                        y.createElement(j.b, { color: 'normal' }, W),
                        y.createElement(j.b, { color: 'gray700', style: x.a.helpText }, G(new Date(i.created_at))),
                        s.creation_ip && s.country
                          ? y.createElement(
                              j.b,
                              { color: 'gray700', style: x.a.helpText },
                              ''.concat(s.creation_ip, ' (').concat(s.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  null != i && i.screen_name
                    ? y.createElement(L.a, { label: J, link: '/'.concat(i.screen_name) })
                    : null,
                  i && l ? y.createElement(L.a, { description: l, label: V, link: '/settings/phone' }) : null,
                  i && a ? y.createElement(L.a, { description: a, label: K, link: '/settings/email' }) : null,
                  i ? y.createElement(L.a, { label: Z, link: '/settings/contacts_dashboard' }) : null,
                  i
                    ? y.createElement(N.a, {
                        label: q,
                        learnMoreLabel: oe,
                        learnMoreLink: le,
                        subtext: i.verified ? $ : Q,
                      })
                    : null,
                  y.createElement(L.a, { description: c.value, label: U, link: '/settings/your_twitter_data/gender' }),
                  i
                    ? y.createElement(
                        F.a,
                        { style: [x.a.infoItem, x.a.bottomBorder] },
                        y.createElement(j.b, { color: 'normal' }, ee),
                        r ? y.createElement(j.b, { color: 'gray700', size: 'subtext2' }, f) : null,
                        y.createElement(
                          j.b,
                          { color: 'gray700', style: x.a.helpText },
                          y.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'f00220d5' },
                            y.createElement(j.b, { link: '/'.concat(i.screen_name) }, B.a.a781b0c6),
                          ),
                        ),
                      )
                    : null,
                  y.createElement(L.a, { description: u, label: te, link: '/settings/your_twitter_data/age' }),
                  y.createElement(L.a, { description: d, label: ne, link: '/settings/your_twitter_data/language' }),
                  i
                    ? y.createElement(L.a, { description: i.protected ? $ : Q, label: re, link: '/settings/safety' })
                    : null,
                  i
                    ? null
                    : y.createElement(
                        F.a,
                        { style: x.a.infoItem },
                        y.createElement(j.b, { color: 'gray700', style: x.a.helpText }, ce),
                        y.createElement('br', null),
                        y.createElement(
                          j.b,
                          { color: 'gray700', style: x.a.helpText },
                          y.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'c757b230' },
                            y.createElement(j.b, { link: ie }, B.a.j7f91baf),
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
                  return y.createElement(
                    R.a,
                    null,
                    y.createElement(
                      k.a,
                      { location: n, title: Y },
                      y.createElement(
                        D.a,
                        null,
                        y.createElement(I.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = A(se)
    },
    PK8P: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        b = n('k49u'),
        E = n('hqKg'),
        v = n('0KEI'),
        _ = n('oEGd'),
        S = n('55TG'),
        w = Object(E.createSelector)(S.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        P = {
          verifyPassword: S.b,
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        O = Object(_.g)(w, P, null, { pure: !1 }),
        A = n('kGix'),
        D = n('v//M'),
        R = n('3XMw'),
        I = n.n(R),
        k = n('5FtR'),
        x = n('iCwC'),
        F = n('MWbm'),
        C = n('TnY3'),
        L = n('t62R'),
        T = n('6vad'),
        j = n('p+r5'),
        N = n('mw9i'),
        H = n('/yvb'),
        B = n('rHpw'),
        M = n('v6aA')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var G = I.a.fe36fe1f,
        z = I.a.dec3c9b8,
        X = I.a.hccd9dbd,
        K = I.a.d1091f50,
        V = I.a.g9677c6d,
        W = I.a.c8cb0b4c,
        J = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
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
                  r = n.createLocalApiErrorHandler,
                  a = n.verifyPassword,
                  c = e.state.password
                '' !== c &&
                  a(c)
                    .then(function () {
                      e.setState({ password: '', verificationRequired: !1 }), e._makeFetch()
                    })
                    .catch(
                      r(
                        ((t = {}),
                        g()(t, b.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: W })
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
                  r = n.createLocalApiErrorHandler
                ;(0, n.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    r(
                      ((t = {}),
                      g()(t, b.a.PasswordVerificationRequired, {
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
                  e.fetchStatus === A.a.LOADED && this.props.fetchStatus === A.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props.titleHeader,
                    t = this.state.passwordError,
                    n = y.createElement(
                      L.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      K,
                    )
                  return y.createElement(
                    y.Fragment,
                    null,
                    e ? y.createElement(T.b, { text: e }) : null,
                    y.createElement(
                      F.a,
                      { style: [x.a.viewItem, x.a.bottomBorder] },
                      y.createElement(L.b, { color: 'gray700', size: 'subtext2' }, X),
                    ),
                    y.createElement(j.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: z,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    y.createElement(
                      N.a,
                      { style: U.buttonContainer },
                      y.createElement(
                        H.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: U.button, type: 'brandFilled' },
                        V,
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
                    r = e.render,
                    a = this.state.verificationRequired,
                    c = t === A.a.FAILED && a
                  return y.createElement(
                    y.Fragment,
                    null,
                    c
                      ? this._passwordlessSsoEnabled
                        ? y.createElement(k.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : y.createElement(D.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      g()(J, 'contextType', M.a), g()(J, 'defaultProps', { titleHeader: G })
      var U = B.a.create(function (e) {
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
        Z = O(J)
      t.a = Object(C.a)(Z)
    },
    RgJG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardLocationsScreen', function () {
          return X
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n('EPsT'),
        E = n('NeAX'),
        v = n('1YZw'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = Object(_.a)()
          .propsFromState(function () {
            return {
              fetchStatus: E.selectFetchDataStatus,
              personalizationData: E.selectData,
              settings: E.selectUserPreferences,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              clearLocations: E.clearLocations,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'locations' }),
        P = n('EfHu'),
        O = n('yoO3'),
        A = n('PK8P'),
        D = n('7FtF'),
        R = n('iCwC'),
        I = n('XYIJ'),
        k = n('MWbm'),
        x = n('t62R'),
        F = n('j7Bv'),
        C = n('3XMw'),
        L = n.n(C)
      function T(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var j = L.a.d9138165,
        N = L.a.d1a276bc,
        H = L.a.e68b09b4,
        B = { headline: L.a.ddefdd1c, text: L.a.hea740ac, confirmButtonLabel: L.a.e68b09b4 },
        M = L.a.a26e0d52,
        Y = L.a.ae415fd2,
        G = y.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'a1fdeb44' },
          y.createElement(x.b, { link: '/settings/location_information' }, L.a.eb0d4501),
        ),
        z = L.a.he447966,
        X = (function (e) {
          u()(n, e)
          var t = T(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_handleDeleteLocation', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.clearLocations,
                  a = t.createLocalApiErrorHandler
                e._scribeAction('clear'),
                  r().then(function () {
                    return n({ text: M })
                  }, a({ showToast: !0 }))
              }),
              g()(l()(e), '_render', function () {
                var t = e.props.settings.allowLocationHistoryUse
                return y.createElement(
                  O.a,
                  null,
                  y.createElement(
                    'div',
                    null,
                    y.createElement(
                      k.a,
                      { style: [I.a.infoItem, I.a.bottomBorder] },
                      y.createElement(x.b, { color: 'gray700' }, N),
                    ),
                    t ? e._renderLocations() : e._renderMessage(Y, G),
                  ),
                )
              }),
              g()(l()(e), '_renderLocations', function () {
                var t = e.props.personalizationData.location_history
                return y.createElement(
                  k.a,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return y.createElement(
                        k.a,
                        { key: "loc-'".concat(t), style: [I.a.infoItem, I.a.locationInfo, I.a.bottomBorder] },
                        y.createElement(F.a, { Icon: P.a, color: 'neutral', size: 'xLarge', style: I.a.locationIcon }),
                        y.createElement(x.b, null, e),
                      )
                    }),
                  t && t.length
                    ? y.createElement(b.a, {
                        confirmationSheetConfirmButtonLabel: B.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: B.headline,
                        confirmationSheetText: B.text,
                        label: H,
                        onConfirmationSheetConfirm: e._handleDeleteLocation,
                        withBottomBorder: !1,
                      })
                    : e._renderMessage(z),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.createElement(
                  k.a,
                  { style: R.a.calloutTextBlock },
                  y.createElement(x.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.createElement(x.b, { align: 'center', color: 'gray700', style: I.a.helpText }, t) : null,
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
                    r = e.location
                  return y.createElement(
                    D.a,
                    { location: r, title: j },
                    y.createElement(A.a, { fetch: t, fetchStatus: n, render: this._render, titleHeader: j }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = w(X)
    },
    XYIJ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('rHpw')
      function o(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
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
      var r = n('ERkP'),
        a = n('fyvP'),
        c = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return r.createElement(o.a, { style: i.root }, r.createElement(a.a, e))
      }
      var i = c.a.create(function (e) {
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
          return B
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        b = n('zh9S'),
        E = n('NeAX'),
        v = n('hqKg'),
        _ = n('0KEI'),
        S = n('oEGd'),
        w = Object(v.createSelector)(E.selectFetchDataStatus, E.selectData, function (e, t) {
          return { fetchDataStatus: e, personalizationData: t }
        }),
        P = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
          ),
          fetchData: E.fetchDataIfNeeded,
          googleAnalyticsPageView: b.a,
          scribePageImpression: b.d,
        },
        O = Object(S.g)(w, P),
        A = n('3XMw'),
        D = n.n(A),
        R = n('csss'),
        I = n('7FtF'),
        k = n('v6aA')
      function x(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var F = D.a.gbde3534,
        C = D.a.a54826c5,
        L = D.a.fdb55209,
        T = D.a.e1c6b2d5,
        j = D.a.ed19d10d,
        N = D.a.f00d0d02,
        H = { page: 'settings', section: 'your_twitter_data', component: 'ads_data' },
        B = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.location,
                  r = t.personalizationData,
                  a = r.tailored_audience_summary ? r.tailored_audience_summary.num_advertisers : 0,
                  c = r.tailored_audience_summary ? r.tailored_audience_summary.num_audiences : 0
                return y.createElement(
                  I.a,
                  { location: n, title: F },
                  y.createElement(R.a, {
                    description: r.tailored_audience_summary ? N({ count: r.num_twitter_interests }) : null,
                    label: L,
                    link: '/settings/your_twitter_data/twitter_interests',
                  }),
                  y.createElement(R.a, {
                    description: r.tailored_audience_summary ? N({ count: r.num_partner_interests }) : null,
                    label: C,
                    link: '/settings/your_twitter_data/partner_interests',
                  }),
                  y.createElement(R.a, {
                    description: r.tailored_audience_summary ? j({ audienceCount: c, advertiserCount: a }) : null,
                    label: T,
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
        })(y.Component)
      g()(B, 'contextType', k.a)
      t.default = O(B)
    },
    eM8g: function (e, t, n) {
      'use strict'
      n('2G9S')
      var r = n('ERkP'),
        a = n('MWbm'),
        c = n('t62R'),
        o = n('rHpw')
      t.a = function (e) {
        var t = e.children
        return r.createElement(
          a.a,
          { style: i.labelContainer },
          r.createElement(
            a.a,
            { style: i.contentContainer },
            r.createElement(a.a, { style: i.appText }, r.createElement(c.b, { color: 'gray700', size: 'subtext2' }, t)),
          ),
        )
      }
      var i = o.a.create(function (e) {
        return {
          contentContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            minHeight: 'calc('
              .concat(o.a.theme.lineHeights.headline1, ' + 2 * ')
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
          return T
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        b = n('zh9S'),
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
                'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
              fetchPreferences: E.fetchPreferencesIfNeeded,
              googleAnalyticsPageView: b.a,
              scribePageImpression: b.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'account_history' }),
        w = n('3XMw'),
        P = n.n(w),
        O = n('yoO3'),
        A = n('csss'),
        D = n('7FtF'),
        R = n('v6aA')
      function I(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var k = P.a.i6b3f59a,
        x = P.a.b523ecc5,
        F = P.a.d9cbe351,
        C = P.a.de90b049,
        L = P.a.cbd2ef58,
        T = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
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
                    r = n.location_history ? n.location_history.length : 0,
                    a = n.login_history ? n.login_history.length : 0
                  return y.createElement(
                    O.a,
                    null,
                    y.createElement(
                      D.a,
                      { location: t, title: k },
                      y.createElement(A.a, {
                        description: a > 0 ? F({ count: a }) : null,
                        label: x,
                        link: '/settings/your_twitter_data/login_history',
                      }),
                      y.createElement(A.a, {
                        description: r > 0 ? L({ count: r }) : null,
                        label: C,
                        link: '/settings/your_twitter_data/locations',
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      g()(T, 'contextType', R.a)
      t.default = S(T)
    },
    fpiQ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardPartnerInterestsScreen', function () {
          return W
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('z84I'), n('vrRf'), n('7x/C'), n('DZ+c'), n('ERkP')),
        b = n('zh9S'),
        E = n('NeAX'),
        v = n('hqKg'),
        _ = n('kGix'),
        S = n('0KEI'),
        w = n('oEGd'),
        P = Object(v.createSelector)(
          function (e, t) {
            return Object(_.d)(E.selectFetchPartnerInterestsStatus(e), E.selectPreferencesFetchStatus(e))
          },
          E.selectPartnerInterests,
          E.selectPreferences,
          function (e, t, n) {
            return { fetchStatus: e, interests: t, preferences: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN',
          ),
          fetchInterests: E.fetchPartnerInterestsIfNeeded,
          fetchPreferences: E.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: b.a,
          scribeAction: b.c,
          scribePageImpression: b.d,
          updateInterest: E.updateInterest,
        },
        A = Object(w.g)(P, O),
        D = n('xCYy'),
        R = n('v//M'),
        I = n('7JQg'),
        k = n('7FtF'),
        x = n('iCwC'),
        F = n('XYIJ'),
        C = n('MWbm'),
        L = n('t62R'),
        T = n('cCdp'),
        j = n('3XMw'),
        N = n.n(j)
      function H(e, t) {
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
      function B(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Y = N.a.a54826c5,
        G = N.a.gc8f2e13,
        z = N.a.e9f1fbcb,
        X = N.a.cf0daa24,
        K = 'https://support.twitter.com/articles/20175258',
        V = { page: 'settings', section: 'your_twitter_data', component: 'partner_interests' },
        W = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.interests.partner_interests,
                  r = void 0 === n ? [] : n,
                  a = t.preferences.interest_preferences,
                  c = (void 0 === a ? {} : a).disabled_partner_interests || []
                return y.createElement(
                  'div',
                  null,
                  y.createElement(
                    C.a,
                    { style: [F.a.infoItem, F.a.bottomBorder] },
                    y.createElement(
                      L.b,
                      { color: 'gray700' },
                      y.createElement(
                        N.a.I18NFormatMessage,
                        { $i18n: 'c2a54dca' },
                        y.createElement(L.b, { link: K }, N.a.f04e17dd),
                      ),
                    ),
                  ),
                  r.map(function (t) {
                    return y.createElement(T.a, {
                      checked: -1 === c.indexOf(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  0 === r.length
                    ? e._renderMessage(z, X)
                    : y.createElement(
                        C.a,
                        { style: x.a.calloutTextBlock },
                        y.createElement(L.b, { color: 'gray700', style: F.a.helpText }, G),
                      ),
                )
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.createElement(
                  C.a,
                  { style: x.a.calloutTextBlock },
                  y.createElement(L.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.createElement(L.b, { align: 'center', color: 'gray700', style: F.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchPreferences().catch(t()), e.props.fetchInterests().catch(t())
              }),
              g()(l()(e), '_handleUpdateInterest', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler,
                  c = r.updateInterest
                e._scribeAction(), c(t, n, 'partner').catch(a({ showToast: !0 }))
              }),
              g()(l()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(B(B({}, V), {}, { action: 'edit' }))
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
                  return y.createElement(
                    I.b,
                    { namespace: V },
                    y.createElement(
                      k.a,
                      { location: n, title: Y },
                      y.createElement(
                        D.a,
                        null,
                        y.createElement(R.a, {
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
        })(y.Component)
      t.default = A(W)
    },
    'h/+I': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardTailoredAudiencesScreen', function () {
          return ee
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        b = n('zh9S'),
        E = n('vEo5'),
        v = n('NeAX'),
        _ = n('1YZw'),
        S = n('hqKg'),
        w = n('YeIG'),
        P = n('G6rE'),
        O = n('0KEI'),
        A = n('oEGd'),
        D = n('kGix'),
        R = Object(S.createSelector)(
          v.selectData,
          function (e, t) {
            var n = P.e.selectLoggedInUser(e),
              r = Object(w.a)(n) ? D.a.LOADED : E.selectFetchStatus(e)
            return Object(D.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e), r)
          },
          v.selectPreferences,
          E.selectFirstEmail,
          function (e, t, n, r) {
            return { data: e, fetchStatus: t, preferences: n, primaryEmail: r }
          },
        ),
        I = {
          addToast: _.b,
          createAudienceDownload: v.createAudienceDownload,
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN',
          ),
          fetchData: v.fetchDataIfNeeded,
          fetchDevices: E.fetchDevices,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: b.a,
          scribeAction: b.c,
          scribePageImpression: b.d,
        },
        k = Object(A.g)(R, I),
        x = n('xCYy'),
        F = n('yoO3'),
        C = n('PK8P'),
        L = n('7JQg'),
        T = n('7FtF'),
        j = n('XYIJ'),
        N = n('MWbm'),
        H = n('t62R'),
        B = n('jtO7'),
        M = n('eb3s'),
        Y = n('v6aA'),
        G = n('3XMw'),
        z = n.n(G)
      function X(e, t) {
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var W = { headline: z.a.hf9c2caa, text: z.a.c29b7970, confirmButtonLabel: z.a.b9e1cf02 },
        J = z.a.e1c6b2d5,
        U = z.a.da202f9a,
        Z = z.a.a8276fab,
        q = z.a.g7912a84,
        $ = z.a.fdfed926,
        Q = { page: 'settings', section: 'your_twitter_data', component: 'tailored_audiences' },
        ee = (function (e) {
          u()(n, e)
          var t = V(n)
          function n(e, r) {
            var c
            return (
              a()(this, n),
              (c = t.call(this, e, r)),
              g()(
                l()(c),
                '_fsSettingsRevamp',
                c.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              g()(l()(c), '_combinedFetches', function () {
                var e = c.props,
                  t = e.fetchData,
                  n = e.fetchDevices,
                  r = e.fetchPreferences,
                  a = [t(), r()]
                return c._isLoggedIn() && a.push(n()), Promise.all(a)
              }),
              g()(l()(c), '_render', function () {
                var e = c.props,
                  t = e.data.tailored_audience_summary,
                  n = void 0 === t ? {} : t,
                  r = e.primaryEmail,
                  a = 0 !== n.num_advertisers && 0 !== n.num_audiences
                return y.createElement(
                  'div',
                  null,
                  y.createElement(
                    N.a,
                    { style: [j.a.infoItem, j.a.bottomBorder] },
                    y.createElement(
                      H.b,
                      { color: 'gray700' },
                      y.createElement(
                        z.a.I18NFormatMessage,
                        { $i18n: 'a97ef88f' },
                        y.createElement(H.b, { link: 'https://support.twitter.com/articles/20170405' }, z.a.ed8c03f4),
                      ),
                    ),
                  ),
                  y.createElement(
                    N.a,
                    { style: [j.a.infoItem, j.a.bottomBorder] },
                    y.createElement(
                      H.b,
                      null,
                      y.createElement(
                        z.a.I18NFormatMessage,
                        { $i18n: 'f451c520' },
                        y.createElement('strong', null, z.a.j10ebd90({ num_audiences: n.num_audiences })),
                        y.createElement('strong', null, z.a.efd23f39({ num_advertisers: n.num_advertisers })),
                      ),
                    ),
                  ),
                  y.createElement(
                    N.a,
                    { style: [j.a.infoItem, a && j.a.bottomBorder] },
                    y.createElement(H.b, { color: 'gray700' }, $),
                  ),
                  a ? y.createElement(B.a, { color: 'primary', label: Z, onPress: c._handleRequestDataClick }) : null,
                  c.state.showEmailConfirmation &&
                    y.createElement(M.a, {
                      confirmButtonLabel: W.confirmButtonLabel,
                      headline: W.headline,
                      onCancel: c._handleCancelEmail,
                      onConfirm: c._handleConfirmEmail,
                      text: W.text({ primaryEmail: r }),
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
                      return t({ text: q })
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
                ;(0, c.props.scribeAction)(K(K({}, Q), {}, { action: e }))
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
                  return y.createElement(
                    L.b,
                    { namespace: Q },
                    y.createElement(
                      F.a,
                      null,
                      y.createElement(
                        T.a,
                        { location: n, title: this._fsSettingsRevamp ? U : J },
                        y.createElement(
                          x.a,
                          null,
                          y.createElement(C.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      g()(ee, 'contextType', Y.a)
      t.default = k(ee)
    },
    iKWa: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardLoginHistoryScreen', function () {
          return B
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('z84I'), n('ERkP')),
        b = n('NeAX'),
        E = n('rxPX'),
        v = n('0KEI'),
        _ = Object(E.a)()
          .propsFromState(function () {
            return { fetchDataStatus: b.selectFetchDataStatus, personalizationData: b.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOGIN_HISTORY_SCREEN',
              ),
              fetchData: b.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'login_history' }),
        S = n('yoO3'),
        w = n('PK8P'),
        P = n('7FtF'),
        O = n('XYIJ'),
        A = n('MWbm'),
        D = n('t62R'),
        R = n('xHsv'),
        I = n('v6aA'),
        k = n('3XMw'),
        x = n.n(k)
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var C = x.a.b523ecc5,
        L = x.a.e27e4fcd,
        T = x.a.d0a77c9a,
        j = 'https://support.twitter.com/articles/20172679',
        N = y.createElement(
          x.a.I18NFormatMessage,
          { $i18n: 'hcb3ad67' },
          y.createElement(D.b, { link: '/settings/connected_apps' }, x.a.ib55eb69),
          y.createElement(D.b, { link: j }, x.a.e5a4a538),
        ),
        H = y.createElement(
          x.a.I18NFormatMessage,
          { $i18n: 'da2603ab' },
          y.createElement(D.b, { link: '/settings/applications' }, x.a.icbb92d0),
          y.createElement(D.b, { link: j }, x.a.a9bec4ef),
        ),
        B = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(
                l()(e),
                '_fsSettingsRevamp',
                e.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              g()(l()(e), '_render', function () {
                var t = e.props.personalizationData.login_history
                return y.createElement(
                  y.Fragment,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return y.createElement(
                        A.a,
                        { key: "hist-'".concat(t), style: [O.a.infoItem, O.a.bottomBorder] },
                        y.createElement(D.b, { color: 'normal' }, e.app_name),
                        y.createElement(D.b, { color: 'gray700', style: O.a.helpText }, T(new Date(e.time))),
                        y.createElement(
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
                    r = e.location
                  return y.createElement(
                    S.a,
                    null,
                    y.createElement(
                      P.a,
                      { location: r, title: C },
                      y.createElement(R.a, { description: this._fsSettingsRevamp ? N : H }),
                      y.createElement(w.a, { fetch: t, fetchStatus: n, render: this._render }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      g()(B, 'contextType', I.a)
      t.default = _(B)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        c = n('m3Bd'),
        o = n.n(c),
        i = n('ERkP'),
        l = n('t62R'),
        s = n('I4+6'),
        u = n('cm6r'),
        f = n('rHpw'),
        d = n('MWbm'),
        p = f.a.create(function (e) {
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
          r = e.color,
          c = e.label,
          h = o()(e, ['align', 'color', 'label']),
          m = s.a.generate({
            backgroundColor: f.a.theme.colors.transparent,
            color: f.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return i.createElement(
          d.a,
          { style: p.container },
          i.createElement(
            u.a,
            a()({}, h, { interactiveStyles: m, style: p.root }),
            i.createElement(l.b, { align: n, color: r }, c),
          ),
        )
      }
    },
    lFNj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardGenderScreen', function () {
          return ne
        })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        c = n('VrFO'),
        o = n.n(c),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        g = n.n(m),
        y = n('KEM+'),
        b = n.n(y),
        E = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        v = n('NeAX'),
        _ = n('1YZw'),
        S = n('kGix'),
        w = n('rxPX'),
        P = n('0KEI'),
        O = function (e, t) {
          return Object(S.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e))
        },
        A = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: O, gender: v.selectGender, personalizationPreferences: v.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
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
        I = n.n(R),
        k = n('yoO3'),
        x = n('PK8P'),
        F = n('7FtF'),
        C = n('iCwC'),
        L = n('XYIJ'),
        T = n('MWbm'),
        j = n('t62R'),
        N = n('Y3cQ'),
        H = n('p+r5'),
        B = n('cCdp'),
        M = n('v6aA')
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
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var G = I.a.a8d0108d,
        z = 'custom',
        X = I.a.a8d0108d,
        K = I.a.fbf0e61d,
        V = I.a.de32365f,
        W = I.a.b6ab31bd,
        J = I.a.b4568a3a,
        U = I.a.c0be743d,
        Z = I.a.i2209530,
        q = [
          { label: V, value: 'female' },
          { label: W, value: 'male' },
          { label: J, value: z },
        ],
        $ = I.a.b7cb74e0,
        Q = I.a.cdb0d3e6,
        ee = I.a.e9f1fbcb,
        te = I.a.cf0daa24,
        ne = (function (e) {
          d()(n, e)
          var t = Y(n)
          function n(e, r) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e, r)),
              b()(u()(a), 'combinedFetches', function () {
                var e = a.props,
                  t = e.fetchData,
                  n = e.fetchPreferences
                return Promise.all([t(), n()])
              }),
              b()(u()(a), '_render', function () {
                return E.createElement(
                  'div',
                  null,
                  E.createElement(
                    T.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    E.createElement(j.b, { color: 'gray700' }, a.isLoggedIn ? K : $),
                  ),
                  a.isLoggedIn ? a._renderGenderSelector() : a._renderLoggedOut(),
                )
              }),
              b()(u()(a), '_renderMessage', function (e, t) {
                return E.createElement(
                  T.a,
                  { style: C.a.calloutTextBlock },
                  E.createElement(j.b, { align: 'center', size: 'headline1' }, e),
                  t ? E.createElement(j.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              b()(u()(a), '_handleItemChanged', function (e, t) {
                var n = t === z
                a.setState({ self_identify: n, gender: n ? null : t })
              }),
              b()(u()(a), '_handleCustomGenderUpdate', function (e) {
                var t = e.target.value
                a.setState({ self_identify: !0, gender: t })
              }),
              b()(u()(a), '_handleSaveGender', function () {
                var e = a.props,
                  t = e.addToast,
                  n = e.createLocalApiErrorHandler,
                  r = e.updateGender,
                  c = a.state.self_identify ? z : a.state.gender || z
                a._scribeAction(),
                  r({ type: c, value: a.state.gender || '' })
                    .then(function () {
                      return t({ text: U })
                    }, n({ showToast: !0 }))
                    .then(a._handleCancel)
              }),
              b()(u()(a), '_handleCancel', function () {
                a.props.history.goBack({ backLocation: '/settings/your_twitter_data/account' })
              }),
              b()(u()(a), '_handleBooleanChanged', function (e, t) {
                var n = a.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.updateSettings)(b()({}, e, !t)).catch(r())
              }),
              b()(u()(a), '_scribeAction', function () {
                a.props.analytics.scribe({ action: 'edit' })
              }),
              (a.state = { self_identify: a.props.gender.type === z, gender: a.props.gender.value }),
              a
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
                    r =
                      t === S.a.LOADED && this.isLoggedIn
                        ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: Z }
                        : void 0
                  return E.createElement(
                    k.a,
                    null,
                    E.createElement(
                      F.a,
                      a()({ location: n, title: X }, r),
                      E.createElement(
                        D.a,
                        null,
                        E.createElement(x.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderGenderSelector',
                value: function () {
                  var e = this.props.gender
                  return E.createElement(
                    T.a,
                    null,
                    E.createElement(N.a, {
                      name: 'gender',
                      onChange: this._handleItemChanged,
                      options: q,
                      value: this.selectedGender,
                    }),
                    this.selectedGender === z
                      ? E.createElement(H.a, {
                          defaultValue: e.value && e.type === z ? e.value : '',
                          label: G,
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
                  return E.createElement(
                    T.a,
                    null,
                    this.selectedGender
                      ? E.createElement(
                          T.a,
                          { style: [L.a.infoItem, L.a.bottomBorder] },
                          E.createElement(j.b, null, this.props.gender.value),
                        )
                      : this._renderMessage(ee, te),
                    E.createElement(B.a, {
                      checked: !t,
                      key: 'use_gender_for_personalization',
                      label: Q,
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
                  return this.state.self_identify ? z : this.state.gender ? this.state.gender : e && e.type
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
        })(E.Component)
      b()(ne, 'contextType', M.a)
      t.default = A(ne)
    },
    o1YB: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('uFXj'), n('ERkP')),
        b = n('t62R'),
        E = n('rHpw'),
        v = n('MWbm')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var S = (function (e) {
        u()(n, e)
        var t = _(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            g()(l()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return y.createElement(b.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            g()(l()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                r = t.learnMoreLink
              return r && n ? y.createElement(b.b, { link: r, size: 'subtext2' }, n) : null
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
                  r = e.learnMoreLink,
                  a = e.subtext,
                  c = e.withBottomBorder
                return y.createElement(
                  v.a,
                  { style: [w.root, c && w.bottomBorder] },
                  y.createElement(b.b, null, t),
                  a
                    ? n && r
                      ? this._renderSubtextAndLink()
                      : y.createElement(b.b, { color: 'gray700', size: 'subtext2' }, a)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(y.Component)
      g()(S, 'defaultProps', { withBottomBorder: !0 })
      var w = E.a.create(function (e) {
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
      t.a = S
    },
    'v/BL': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TransparencyDashboardAgeScreen', function () {
          return K
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        g = n.n(m),
        y = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        b = n('NeAX'),
        E = n('kGix'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = function (e, t) {
          return Object(E.d)(b.selectFetchDataStatus(e), b.selectPreferencesFetchStatus(e))
        },
        w = Object(v.a)()
          .propsFromState(function () {
            return { ages: b.selectAge, fetchStatus: S, personalizationPreferences: b.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_AGE_SCREEN',
              ),
              fetchData: b.fetchDataIfNeeded,
              fetchPreferences: b.fetchPreferencesIfNeeded,
              updateSettings: b.updateSettings,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'age' }),
        P = n('xCYy'),
        O = n('yoO3'),
        A = n('PK8P'),
        D = n('7FtF'),
        R = n('iCwC'),
        I = n('XYIJ'),
        k = n('MWbm'),
        x = n('t62R'),
        F = n('Xrkv'),
        C = n('cCdp'),
        L = n('v6aA'),
        T = n('3XMw'),
        j = n.n(T)
      function N(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var H = j.a.bf96fda4,
        B = y.createElement(
          j.a.I18NFormatMessage,
          { $i18n: 'bf82b0a6' },
          y.createElement(
            x.b,
            { link: 'https://help.twitter.com/safety-and-security/birthday-visibility-settings' },
            j.a.jc0b4d1c,
          ),
        ),
        M = j.a.ie40dc4a,
        Y = j.a.fe1fc83e,
        G = j.a.bf9c74d0,
        z = j.a.e9f1fbcb,
        X = j.a.cf0daa24,
        K = (function (e) {
          u()(n, e)
          var t = N(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchData,
                  r = t.fetchPreferences
                return Promise.all([n(), r()])
              }),
              g()(l()(e), '_render', function () {
                return y.createElement(
                  'div',
                  null,
                  e._renderAges(),
                  e.isLoggedIn
                    ? y.createElement(k.a, { style: I.a.infoItem }, y.createElement(x.b, { color: 'gray700' }, M))
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
                  ? y.createElement(k.a, { style: [I.a.infoItem, I.a.bottomBorder] }, y.createElement(x.b, null, n))
                  : e._renderMessage(z, X)
              }),
              g()(l()(e), '_renderMessage', function (e, t) {
                return y.createElement(
                  k.a,
                  { style: [R.a.calloutTextBlock, R.a.bottomBorder] },
                  y.createElement(x.b, { align: 'center', size: 'headline1' }, e),
                  t ? y.createElement(x.b, { align: 'center', color: 'gray700', style: I.a.helpText }, t) : null,
                )
              }),
              g()(l()(e), '_renderUseAge', function () {
                var t = e.props.personalizationPreferences,
                  n = t && t.age_preferences && t.age_preferences.use_age_for_personalization
                return y.createElement(C.a, {
                  checked: !n,
                  key: 'use_age_for_personalization',
                  label: G,
                  name: 'use_age_for_personalization',
                  onChange: e._handleBooleanChanged,
                })
              }),
              g()(l()(e), '_handleBooleanChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler
                ;(0, r.updateSettings)(g()({}, t, !n)).catch(a())
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
                  return y.createElement(
                    O.a,
                    null,
                    y.createElement(
                      D.a,
                      { location: n, title: H },
                      y.createElement(
                        P.a,
                        null,
                        y.createElement(
                          k.a,
                          { style: [I.a.infoItem, I.a.bottomBorder] },
                          y.createElement(x.b, { color: 'gray700' }, this.isLoggedIn ? B : Y),
                        ),
                        y.createElement(A.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      g()(K, 'contextType', L.a)
      t.default = w(K)
    },
    vkTF: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n('v6aA'),
        c = n('xCYy'),
        o = n('3XMw'),
        i = n.n(o),
        l = n('yoO3'),
        s = n('7JQg'),
        u = n('7FtF'),
        f = n('MWbm'),
        d = n('mw9i'),
        p = n('csss'),
        h = n('rHpw'),
        m = i.a.b7fde2b8,
        g = i.a.i5f7b6b8,
        y = i.a.i6b3f59a,
        b = i.a.g1aced04,
        E = i.a.j9d10268,
        v = i.a.gbde3534,
        _ = i.a.gee8110d,
        S = { page: 'settings', section: 'transparency' },
        w = h.a.create(function (e) {
          return {
            backgroundRoot: { flexGrow: 1, backgroundColor: e.colors.gray50 },
            contentRoot: { backgroundColor: e.colors.cellBackground, flexGrow: 1, justifyContent: 'flex-start' },
          }
        })
      t.default = function (e) {
        var t = e.location,
          n = !!r.useContext(a.a).loggedInUserId
        return r.createElement(
          s.b,
          { namespace: S },
          r.createElement(
            l.a,
            null,
            r.createElement(
              u.a,
              { location: t, title: m },
              r.createElement(
                c.a,
                null,
                r.createElement(
                  f.a,
                  { style: w.backgroundRoot },
                  r.createElement(
                    d.a,
                    { style: w.contentRoot },
                    r.createElement(p.a, { label: g, link: '/settings/your_twitter_data/account' }),
                    n ? r.createElement(p.a, { label: y, link: '/settings/your_twitter_data/account_history' }) : null,
                    r.createElement(p.a, { label: b, link: '/settings/your_twitter_data/apps_and_devices' }),
                    n ? r.createElement(p.a, { label: E, link: '/settings/your_twitter_data/account_activity' }) : null,
                    r.createElement(p.a, { label: v, link: '/settings/your_twitter_data/ads' }),
                    r.createElement(p.a, {
                      label: _,
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
      var r = n('ERkP'),
        a = n('v6aA'),
        c = n('mrHL'),
        o = n('3XMw'),
        i = n.n(o),
        l = n('cnVF'),
        s = n('RqPI'),
        u = n('k89r'),
        f = n('yUQf'),
        d = n('q9Zt'),
        p = n('t62R'),
        h = i.a.ffeb836a,
        m = i.a.f2fb9746
      function g() {
        var e = Object(u.a)()
        return (
          r.useEffect(
            function () {
              e.scribe({ element: 'error_page', action: 'show' })
            },
            [e],
          ),
          r.createElement(d.a, { title: h }, r.createElement(p.b, null, m))
        )
      }
      function y(e) {
        var t = r.useContext(a.a).featureSwitches,
          n = Object(f.a)(s.m),
          o = Object(c.b)(l.u, t)
        return n || o ? e.children : r.createElement(g, null)
      }
    },
  },
])
//# sourceMappingURL=WIPED
