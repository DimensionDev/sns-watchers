;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    OsOl: function (e, t, a) {
      'use strict'
      a('z84I'), a('Blm6'), a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('wsOx'),
        c = a('rxPX'),
        i = a('0KEI'),
        s = Object(c.a)()
          .propsFromState(function () {
            return { fetchSettingsFetchStatus: o.b, updateSettingsFetchStatus: o.d, safetyModeSettings: o.c }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchSettingsFetchStatus,
              a = e.safetyModeSettings,
              n = e.updateSettingsFetchStatus
            return {
              enabled: a.enabled,
              expiration: a.expiration,
              fetchSettingsFetchStatus: t,
              updateSettingsFetchStatus: n,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSafetyModeSettings: o.a,
              updateSafetyModeSettings: o.e,
            }
          })
          .withAnalytics(),
        u = a('v//M'),
        l = a('3XMw'),
        d = a.n(l),
        f = a('tuLS'),
        p = a('fs1G'),
        S = a('MWbm'),
        E = a('mjJ+'),
        b = a('t62R'),
        g = a('CK8+'),
        y = a('rHpw'),
        h = d.a.c6cb90eb,
        m = d.a.a37e9b09,
        v = d.a.ccafffde,
        O = d.a.j2e184d8,
        T = d.a.fc638aa2,
        _ = d.a.d94b2246,
        C = d.a.bfea13ab,
        w = d.a.fc209bb7,
        A = d.a.ee95bb8d,
        F = [
          { label: v, value: 'OneDay' },
          { label: O, value: 'ThreeDays' },
          { label: T, value: 'SevenDays' },
        ]
      var M = s(function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.enabled,
            n = e.expiration,
            o = e.fetchSafetyModeSettings,
            c = e.fetchSettingsFetchStatus,
            i = e.updateSafetyModeSettings,
            s = e.withBorder,
            l = r.a.useCallback(
              function () {
                o().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [o, t],
            )
          r.a.useEffect(
            function () {
              l()
            },
            [l],
          )
          var d = e.analytics
          r.a.useEffect(
            function () {
              d.scribe({ action: 'impression' })
            },
            [d],
          )
          var y = function () {
              d.scribe({ action: 'click', element: 'disabled' }),
                i('none')
                  .then(function () {
                    return l()
                  })
                  .catch(function (e) {
                    t({ showToast: !0, defaultToast: { text: C } })(e)
                  })
            },
            v = function () {
              return function (e) {
                var a = F.map(function (e) {
                  return {
                    text: e.label,
                    onClick: function () {
                      return (function (e) {
                        d.scribe({ action: 'click', element: 'enabled' }),
                          ('OneDay' !== e.value && 'ThreeDays' !== e.value && 'SevenDays' !== e.value) ||
                            (d.scribe({ action: 'click', component: 'duration', element: e.value }),
                            i(e.value)
                              .then(function () {
                                return l()
                              })
                              .catch(function (e) {
                                t({ showToast: !0, defaultToast: { text: C } })(e)
                              }))
                      })(e)
                    },
                  }
                })
                return r.a.createElement(E.a, { items: a, onCloseRequested: e })
              }
            }
          return r.a.createElement(u.a, {
            fetchStatus: c,
            onRequestRetry: l,
            render: function () {
              var e = new Date(parseInt(n, 10))
              return r.a.createElement(
                S.a,
                { style: s && I.border },
                r.a.createElement(
                  S.a,
                  { style: I.safetyModeToggleContainer },
                  r.a.createElement(b.b, { color: 'normal' }, h),
                  a
                    ? r.a.createElement(g.a, { onValueChange: y, value: a })
                    : r.a.createElement(
                        f.a,
                        { accessibilityLabel: h, renderMenu: v() },
                        r.a.createElement(g.a, { onValueChange: p.a, value: a }),
                      ),
                ),
                r.a.createElement(
                  S.a,
                  { style: I.safetyModeDescriptionContainer },
                  a && n
                    ? r.a.createElement(
                        b.b,
                        { color: 'gray700', size: 'subtext2', style: I.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? _
                          : A({ date: w(e) }),
                      )
                    : null,
                  r.a.createElement(b.b, { color: 'gray700', size: 'subtext2', style: I.settingDescription }, m),
                ),
              )
            },
          })
        }),
        I =
          ((t.a = M),
          y.a.create(function (e) {
            return {
              border: {
                borderStyle: 'solid',
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.borderColor,
                borderRadius: e.borderRadii.xLarge,
                outlineStyle: 'none',
              },
              radioGroupPaddingOverride: { paddingTop: 0 },
              safetyModeExpiration: { paddingVertical: 0 },
              safetyModeToggleContainer: {
                alignItems: 'center',
                flexDirection: 'row',
                flexGrow: 1,
                justifyContent: 'space-between',
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingTop: e.spaces.space12,
                paddingBottom: e.spaces.space4,
              },
              safetyModeDescriptionContainer: {
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingBottom: e.spaces.space8,
              },
              settingDescription: { paddingTop: e.spaces.space4 },
            }
          }))
    },
    U1iA: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SafetyModeModal', function () {
          return ue
        })
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        c = a.n(o),
        i = a('1Pcy'),
        s = a.n(i),
        u = a('5Yy7'),
        l = a.n(u),
        d = a('N+ot'),
        f = a.n(d),
        p = a('AuHH'),
        S = a.n(p),
        E = a('KEM+'),
        b = a.n(E),
        g = (a('2G9S'), a('1t7P'), a('jQ/y'), a('hBvt'), a('ERkP')),
        y = a.n(g),
        h = a('oEOe'),
        m = 'rweb/'.concat('convertRitoSuggestedActions'),
        v = Object(h.a)(m, 'CALL_CONVERT_RITO_SUGGESTED_ACTIONS'),
        O = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(h.b)(t, {
              request: r.ConvertRitoSuggestedActions.callConvertRitoSuggestedActions,
              params: { userId: e },
            })({ actionTypes: v, context: 'CALL_CONVERT_RITO_SUGGESTED_ACTIONS', meta: { userId: e } })
          }
        },
        T = (a('+KXO'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn'), a('M+/F'), a('z84I'), a('Ssj5'))
      function _(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(a), !0).forEach(function (t) {
                b()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : _(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var w = 'ritoSuggestedActionsFacePile',
        A = 'rweb/'.concat(w),
        F = Object(h.a)(A, 'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE'),
        M = {}
      T.a.register(
        b()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case F.SUCCESS:
              var a = t.payload || {},
                n = a.count,
                r = a.users_results,
                o = t.meta || {},
                c = o.userId
              return c ? C(C({}, e), {}, b()({}, c, { userCount: n, facepileUsers: r })) : e
            default:
              return e
          }
        }),
      )
      var I = function (e, t) {
          return e.ritoSuggestedActionsFacePile[t]
        },
        j = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(h.b)(t, {
              request: r.RitoSuggestedActionsFacePile.fetchRitoSuggestedActionsFacePile,
              params: { userId: e },
            })({ actionTypes: F, context: 'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE', meta: { userId: e } })
          }
        },
        D = a('wsOx'),
        P = a('RqPI'),
        R = a('rxPX'),
        U = a('0KEI'),
        L = function (e) {
          var t = Object(P.q)(e)
          return t
            ? (function (e, t) {
                var a,
                  n = t
                    ? null === (a = I(e, t)) || void 0 === a
                      ? void 0
                      : a.facepileUsers
                          .map(function (e) {
                            return null == e ? void 0 : e.result.legacy.profile_image_url_https
                          })
                          .slice(0, 3)
                    : void 0
                return null != n ? n : []
              })(e, t)
            : void 0
        },
        x = function (e) {
          var t = Object(P.q)(e)
          return t
            ? (function (e, t) {
                var a
                return t ? (null === (a = I(e, t)) || void 0 === a ? void 0 : a.userCount) : void 0
              })(e, t)
            : void 0
        },
        k = Object(R.a)()
          .propsFromState(function () {
            return { facepileUrls: L, count: x, userId: P.q, safetyModeSettings: D.c }
          })
          .adjustStateProps(function (e) {
            var t = e.count,
              a = e.facepileUrls,
              n = e.safetyModeSettings,
              r = e.userId
            return { enabledSafetyMode: n.enabled, facepileUrls: a, count: t, userId: r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(U.createLocalApiErrorHandlerWithContextFactory)(
                'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE',
              ),
              fetchRitoSuggestedActionsFacePile: j,
              callConvertRitoSuggestedActions: O,
            }
          })
          .withAnalytics({ section: 'safety_mode_prompt' }),
        H = a('jHSc'),
        G = a('iySH'),
        N = a.p + 'safety-mode-cone.b7ef2f95.png',
        B = a('OsOl'),
        z = a('7JQg'),
        q = a('855f'),
        W = a('t62R'),
        Q = a('cHvH'),
        Y = a('Wd7d'),
        K = a('MAI/'),
        V = a('/yvb'),
        X = a('rHpw'),
        J = a('3XMw'),
        Z = a.n(J),
        $ = a('U+bB'),
        ee = a('MWbm')
      function te(e) {
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
          var a,
            n = S()(e)
          if (t) {
            var r = S()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return f()(this, a)
        }
      }
      var ae = { section: 'safety_mode_prompt' },
        ne = Z.a.d1cc8c05,
        re = Z.a.b772cd65,
        oe = Z.a.c1da34c2,
        ce = Z.a.j85176c1,
        ie = Z.a.ga7fce66,
        se = Z.a.g42fd3ad,
        ue = (function (e) {
          l()(a, e)
          var t = te(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_handleBackClick', function () {
                var t = e.props,
                  a = t.callConvertRitoSuggestedActions,
                  n = t.createLocalApiErrorHandler,
                  r = t.enabledSafetyMode,
                  o = t.history,
                  c = t.userId
                c && r && a(c).catch(n()), o.goBack()
              }),
              b()(s()(e), '_handleScribeOnClick', function () {
                e.props.analytics.scribe({ component: 'education_sheet', action: 'click' })
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    a = e.fetchRitoSuggestedActionsFacePile,
                    n = e.userId
                  n && a(n).catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.count,
                    n = t.facepileUrls,
                    r = t.history
                  return y.a.createElement(Q.a, null, function (t) {
                    var o,
                      c = t.screenWidth
                    return y.a.createElement(
                      z.b,
                      { namespace: ae },
                      y.a.createElement(
                        H.b,
                        { history: r, onBackClick: e._handleBackClick, withBottomBorder: !1 },
                        y.a.createElement(
                          ee.a,
                          { style: Y.a.isNarrowScreenWidth(c) ? de.narrowScreen : de.wideScreen },
                          y.a.createElement($.a, { accessibilityLabel: '', source: N, style: de.image }),
                          y.a.createElement(
                            ee.a,
                            { style: de.header },
                            y.a.createElement(W.b, { size: 'title2', weight: 'heavy' }, ne),
                          ),
                          n && a
                            ? y.a.createElement(
                                y.a.Fragment,
                                null,
                                y.a.createElement(K.a, {
                                  style: de.facepile,
                                  userAvatarSize: 'large',
                                  userAvatarUrls: n,
                                }),
                                y.a.createElement(
                                  W.b,
                                  { style: de.description },
                                  (function (e) {
                                    return e <= 10
                                      ? oe({ count: q.a.getFormattedCount(e) })
                                      : ce({ count: q.a.getFormattedCount(e) })
                                  })(a),
                                ),
                                y.a.createElement(
                                  W.b,
                                  null,
                                  y.a.createElement(
                                    Z.a.I18NFormatMessage,
                                    { $i18n: 'f81ca1f4' },
                                    y.a.createElement(
                                      W.b,
                                      { link: '/i/safety_mode/flagged_accounts', size: 'body', weight: 'bold' },
                                      Z.a.ac9bde9a,
                                    ),
                                  ),
                                  y.a.createElement(G.a, { style: de.chevronIcon }),
                                ),
                              )
                            : null,
                          y.a.createElement(
                            ee.a,
                            { style: de.header },
                            y.a.createElement(W.b, { size: 'title3', weight: 'heavy' }, ie),
                          ),
                          y.a.createElement(B.a, { withBorder: !0 }),
                          y.a.createElement(
                            ee.a,
                            { style: de.link },
                            ((o = e._handleScribeOnClick),
                            y.a.createElement(
                              W.b,
                              null,
                              y.a.createElement(
                                Z.a.I18NFormatMessage,
                                { $i18n: 'j449c95b' },
                                y.a.createElement(
                                  W.b,
                                  {
                                    color: 'normal',
                                    link: '/settings/safety_mode/about',
                                    onPress: o,
                                    size: 'subtext1',
                                    withUnderline: !0,
                                  },
                                  Z.a.ed5457da,
                                ),
                              ),
                            )),
                          ),
                          y.a.createElement(
                            ee.a,
                            null,
                            y.a.createElement(
                              V.a,
                              { onPress: e._handleBackClick, style: de.button, type: 'primaryFilled' },
                              re,
                            ),
                          ),
                          y.a.createElement(W.b, { style: de.description }, se),
                        ),
                      ),
                    )
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        le = k(ue),
        de =
          ((t.default = le),
          X.a.create(function (e) {
            return {
              wideScreen: { marginBottom: e.spaces.space48, marginHorizontal: e.spaces.space80 },
              narrowScreen: {
                paddingBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(X.a.iPhoneOffsetBottom, ')'),
                marginHorizontal: e.spaces.space32,
              },
              header: { marginTop: e.spaces.space48, marginBottom: e.spaces.space16 },
              link: { marginTop: e.spaces.space16 },
              chevronIcon: {
                color: e.colors.primary,
                flexShrink: 0,
                height: e.spaces.space16,
                width: e.spaces.space16,
                marginLeft: e.spaces.space8,
              },
              facepile: { marginBottom: e.spaces.space8, justifyContent: 'left' },
              description: {
                color: e.colors.gray700,
                fontSize: e.fontSizes.body,
                marginBottom: e.spaces.space8,
                textAlign: 'left',
              },
              image: { height: 170, width: 154, marginVertical: e.spaces.space12, margin: 'auto' },
              button: { marginTop: e.spaces.space48, marginBottom: e.spaces.space32 },
            }
          }))
    },
    wsOx: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return b
      }),
        a.d(t, 'b', function () {
          return g
        }),
        a.d(t, 'd', function () {
          return y
        }),
        a.d(t, 'a', function () {
          return h
        }),
        a.d(t, 'e', function () {
          return m
        })
      a('+KXO'), a('1t7P'), a('LW0h'), a('daRM'), a('jwue'), a('+oxZ'), a('FtHn')
      var n = a('KEM+'),
        r = a.n(n),
        o = (a('yH/f'), a('kGix')),
        c = a('Ssj5'),
        i = a('RqPI'),
        s = a('oEOe')
      function u(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(a), !0).forEach(function (t) {
                r()(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : u(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
              })
        }
        return e
      }
      var d = 'safetyMode',
        f = Object.freeze({
          REQUEST: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        p = Object.freeze({
          REQUEST: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        S = { enabled: !1, duration: 'none', fetchSettingsFetchStatus: o.a.NONE, updateSettingsFetchStatus: o.a.NONE }
      function E() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case f.REQUEST:
            var a,
              n = null === (a = t.payload) || void 0 === a ? void 0 : a.duration
            return l(l({}, e), {}, { duration: n, updateSettingsFetchStatus: o.a.LOADED })
          case p.REQUEST:
            return l(l({}, e), {}, { fetchSettingsFetchStatus: o.a.LOADING })
          case p.SUCCESS:
            var r,
              c,
              i,
              s = !(null === (r = t.payload) || void 0 === r || !r.enabled),
              u = null === (c = t.payload) || void 0 === c ? void 0 : c.duration,
              d = null === (i = t.payload) || void 0 === i ? void 0 : i.expiration
            return l(l({}, e), {}, { enabled: s, duration: u, expiration: d, fetchSettingsFetchStatus: o.a.LOADED })
          case p.FAILURE:
            return l(l({}, e), {}, { fetchSettingsFetchStatus: o.a.FAILED })
          default:
            return e
        }
      }
      c.a.register(r()({}, d, E))
      var b = function (e) {
          return e.safetyMode || {}
        },
        g = function (e) {
          return e.safetyMode.fetchSettingsFetchStatus
        },
        y = function (e) {
          return e.safetyMode.updateSettingsFetchStatus
        },
        h = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(s.b)(e, { request: n.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: p,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        m = function (e) {
          return function (t, a, n) {
            var r = n.api,
              o = a(),
              c = { userId: Object(i.q)(o) || '', duration: e }
            return Object(s.c)(t, { params: c, request: r.SettingsGraphQL.updateSafetyModeSettings })({
              actionTypes: f,
              context: 'UPDATE_SAFETY_MODE_SETTINGS',
              payload: c,
            })
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
