;(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    OsOl: function (e, t, n) {
      'use strict'
      n('z84I'), n('Blm6'), n('uFXj')
      var r = n('ERkP'),
        a = n('wsOx'),
        o = n('rxPX'),
        c = n('0KEI'),
        i = Object(o.a)()
          .propsFromState(function () {
            return { fetchSettingsFetchStatus: a.b, updateSettingsFetchStatus: a.d, safetyModeSettings: a.c }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchSettingsFetchStatus,
              n = e.safetyModeSettings,
              r = e.updateSettingsFetchStatus
            return {
              enabled: n.enabled,
              expiration: n.expiration,
              fetchSettingsFetchStatus: t,
              updateSettingsFetchStatus: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSafetyModeSettings: a.a,
              updateSafetyModeSettings: a.e,
            }
          })
          .withAnalytics(),
        s = n('v//M'),
        u = n('3XMw'),
        l = n.n(u),
        d = n('tuLS'),
        f = n('fs1G'),
        p = n('MWbm'),
        S = n('mjJ+'),
        E = n('t62R'),
        b = n('CK8+'),
        g = n('rHpw'),
        y = l.a.c6cb90eb,
        h = l.a.a37e9b09,
        m = l.a.ccafffde,
        v = l.a.j2e184d8,
        O = l.a.fc638aa2,
        T = l.a.d94b2246,
        _ = l.a.bfea13ab,
        C = l.a.fc209bb7,
        w = l.a.ee95bb8d,
        A = [
          { label: m, value: 'OneDay' },
          { label: v, value: 'ThreeDays' },
          { label: O, value: 'SevenDays' },
        ]
      var F = i(function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.enabled,
            a = e.expiration,
            o = e.fetchSafetyModeSettings,
            c = e.fetchSettingsFetchStatus,
            i = e.updateSafetyModeSettings,
            u = e.withBorder,
            l = r.useCallback(
              function () {
                o().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [o, t],
            )
          r.useEffect(
            function () {
              l()
            },
            [l],
          )
          var g = e.analytics
          r.useEffect(
            function () {
              g.scribe({ action: 'impression' })
            },
            [g],
          )
          var m = function () {
              g.scribe({ action: 'click', element: 'disabled' }),
                i('none')
                  .then(function () {
                    return l()
                  })
                  .catch(function (e) {
                    t({ showToast: !0, defaultToast: { text: _ } })(e)
                  })
            },
            v = function () {
              return function (e) {
                var n = A.map(function (e) {
                  return {
                    text: e.label,
                    onClick: function () {
                      return (function (e) {
                        g.scribe({ action: 'click', element: 'enabled' }),
                          ('OneDay' !== e.value && 'ThreeDays' !== e.value && 'SevenDays' !== e.value) ||
                            (g.scribe({ action: 'click', component: 'duration', element: e.value }),
                            i(e.value)
                              .then(function () {
                                return l()
                              })
                              .catch(function (e) {
                                t({ showToast: !0, defaultToast: { text: _ } })(e)
                              }))
                      })(e)
                    },
                  }
                })
                return r.createElement(S.a, { items: n, onCloseRequested: e })
              }
            }
          return r.createElement(s.a, {
            fetchStatus: c,
            onRequestRetry: l,
            render: function () {
              var e = new Date(parseInt(a, 10))
              return r.createElement(
                p.a,
                { style: u && M.border },
                r.createElement(
                  p.a,
                  { style: M.safetyModeToggleContainer },
                  r.createElement(E.b, { color: 'normal' }, y),
                  n
                    ? r.createElement(b.a, { onValueChange: m, value: n })
                    : r.createElement(
                        d.a,
                        { accessibilityLabel: y, renderMenu: v() },
                        r.createElement(b.a, { onValueChange: f.a, value: n }),
                      ),
                ),
                r.createElement(
                  p.a,
                  { style: M.safetyModeDescriptionContainer },
                  n && a
                    ? r.createElement(
                        E.b,
                        { color: 'gray700', size: 'subtext2', style: M.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? T
                          : w({ date: C(e) }),
                      )
                    : null,
                  r.createElement(E.b, { color: 'gray700', size: 'subtext2', style: M.settingDescription }, h),
                ),
              )
            },
          })
        }),
        M =
          ((t.a = F),
          g.a.create(function (e) {
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
    U1iA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SafetyModeModal', function () {
          return se
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        S = n.n(p),
        E = n('KEM+'),
        b = n.n(E),
        g = (n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        y = n('oEOe'),
        h = 'rweb/'.concat('convertRitoSuggestedActions'),
        m = Object(y.a)(h, 'CALL_CONVERT_RITO_SUGGESTED_ACTIONS'),
        v = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(y.b)(t, {
              request: a.ConvertRitoSuggestedActions.callConvertRitoSuggestedActions,
              params: { userId: e },
            })({ actionTypes: m, context: 'CALL_CONVERT_RITO_SUGGESTED_ACTIONS', meta: { userId: e } })
          }
        },
        O = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('M+/F'), n('z84I'), n('Ssj5'))
      function T(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var C = 'ritoSuggestedActionsFacePile',
        w = 'rweb/'.concat(C),
        A = Object(y.a)(w, 'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE'),
        F = {}
      O.a.register(
        b()({}, C, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case A.SUCCESS:
              var n = t.payload || {},
                r = n.count,
                a = n.users_results,
                o = t.meta || {},
                c = o.userId
              return c ? _(_({}, e), {}, b()({}, c, { userCount: r, facepileUsers: a })) : e
            default:
              return e
          }
        }),
      )
      var M = function (e, t) {
          return e.ritoSuggestedActionsFacePile[t]
        },
        I = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(y.b)(t, {
              request: a.RitoSuggestedActionsFacePile.fetchRitoSuggestedActionsFacePile,
              params: { userId: e },
            })({ actionTypes: A, context: 'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE', meta: { userId: e } })
          }
        },
        j = n('wsOx'),
        D = n('RqPI'),
        P = n('rxPX'),
        R = n('0KEI'),
        U = function (e) {
          var t = Object(D.p)(e)
          return t
            ? (function (e, t) {
                var n,
                  r = t
                    ? null === (n = M(e, t)) || void 0 === n
                      ? void 0
                      : n.facepileUsers
                          .map(function (e) {
                            return null == e ? void 0 : e.result.legacy.profile_image_url_https
                          })
                          .slice(0, 3)
                    : void 0
                return null != r ? r : []
              })(e, t)
            : void 0
        },
        L = function (e) {
          var t = Object(D.p)(e)
          return t
            ? (function (e, t) {
                var n
                return t ? (null === (n = M(e, t)) || void 0 === n ? void 0 : n.userCount) : void 0
              })(e, t)
            : void 0
        },
        x = Object(P.a)()
          .propsFromState(function () {
            return { facepileUrls: U, count: L, userId: D.p, safetyModeSettings: j.c }
          })
          .adjustStateProps(function (e) {
            var t = e.count,
              n = e.facepileUrls,
              r = e.safetyModeSettings,
              a = e.userId
            return { enabledSafetyMode: r.enabled, facepileUrls: n, count: t, userId: a }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
                'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE',
              ),
              fetchRitoSuggestedActionsFacePile: I,
              callConvertRitoSuggestedActions: v,
            }
          })
          .withAnalytics({ section: 'safety_mode_prompt' }),
        k = n('jHSc'),
        H = n('iySH'),
        G = n.p + 'safety-mode-cone.b7ef2f95.png',
        N = n('OsOl'),
        B = n('7JQg'),
        z = n('855f'),
        W = n('t62R'),
        Q = n('cHvH'),
        Y = n('Wd7d'),
        q = n('MAI/'),
        K = n('/yvb'),
        V = n('rHpw'),
        X = n('3XMw'),
        J = n.n(X),
        Z = n('U+bB'),
        $ = n('MWbm')
      function ee(e) {
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
            r = S()(e)
          if (t) {
            var a = S()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var te = { section: 'safety_mode_prompt' },
        ne = J.a.d1cc8c05,
        re = J.a.b772cd65,
        ae = J.a.c1da34c2,
        oe = J.a.j85176c1,
        ce = J.a.ga7fce66,
        ie = J.a.g42fd3ad,
        se = (function (e) {
          l()(n, e)
          var t = ee(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_handleBackClick', function () {
                var t = e.props,
                  n = t.callConvertRitoSuggestedActions,
                  r = t.createLocalApiErrorHandler,
                  a = t.enabledSafetyMode,
                  o = t.history,
                  c = t.userId
                c && a && n(c).catch(r()), o.goBack()
              }),
              b()(s()(e), '_handleScribeOnClick', function () {
                e.props.analytics.scribe({ component: 'education_sheet', action: 'click' })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchRitoSuggestedActionsFacePile,
                    r = e.userId
                  r && n(r).catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.count,
                    r = t.facepileUrls,
                    a = t.history
                  return g.createElement(Q.a, null, function (t) {
                    var o,
                      c = t.screenWidth
                    return g.createElement(
                      B.b,
                      { namespace: te },
                      g.createElement(
                        k.b,
                        { history: a, onBackClick: e._handleBackClick, withBottomBorder: !1 },
                        g.createElement(
                          $.a,
                          { style: Y.a.isNarrowScreenWidth(c) ? le.narrowScreen : le.wideScreen },
                          g.createElement(Z.a, { accessibilityLabel: '', source: G, style: le.image }),
                          g.createElement(
                            $.a,
                            { style: le.header },
                            g.createElement(W.b, { size: 'title2', weight: 'heavy' }, ne),
                          ),
                          r && n
                            ? g.createElement(
                                g.Fragment,
                                null,
                                g.createElement(q.a, {
                                  style: le.facepile,
                                  userAvatarSize: 'large',
                                  userAvatarUrls: r,
                                }),
                                g.createElement(
                                  W.b,
                                  { style: le.description },
                                  (function (e) {
                                    return e <= 10
                                      ? ae({ count: z.a.getFormattedCount(e) })
                                      : oe({ count: z.a.getFormattedCount(e) })
                                  })(n),
                                ),
                                g.createElement(
                                  W.b,
                                  null,
                                  g.createElement(
                                    J.a.I18NFormatMessage,
                                    { $i18n: 'f81ca1f4' },
                                    g.createElement(
                                      W.b,
                                      { link: '/i/safety_mode/flagged_accounts', size: 'body', weight: 'bold' },
                                      J.a.ac9bde9a,
                                    ),
                                  ),
                                  g.createElement(H.a, { style: le.chevronIcon }),
                                ),
                              )
                            : null,
                          g.createElement(
                            $.a,
                            { style: le.header },
                            g.createElement(W.b, { size: 'title3', weight: 'heavy' }, ce),
                          ),
                          g.createElement(N.a, { withBorder: !0 }),
                          g.createElement(
                            $.a,
                            { style: le.link },
                            ((o = e._handleScribeOnClick),
                            g.createElement(
                              W.b,
                              null,
                              g.createElement(
                                J.a.I18NFormatMessage,
                                { $i18n: 'j449c95b' },
                                g.createElement(
                                  W.b,
                                  {
                                    color: 'normal',
                                    link: '/settings/safety_mode/about',
                                    onPress: o,
                                    size: 'subtext1',
                                    withUnderline: !0,
                                  },
                                  J.a.ed5457da,
                                ),
                              ),
                            )),
                          ),
                          g.createElement(
                            $.a,
                            null,
                            g.createElement(
                              K.a,
                              { onPress: e._handleBackClick, style: le.button, type: 'primaryFilled' },
                              re,
                            ),
                          ),
                          g.createElement(W.b, { style: le.description }, ie),
                        ),
                      ),
                    )
                  })
                },
              },
            ]),
            n
          )
        })(g.Component),
        ue = x(se),
        le =
          ((t.default = ue),
          V.a.create(function (e) {
            return {
              wideScreen: { marginBottom: e.spaces.space48, marginHorizontal: e.spaces.space80 },
              narrowScreen: {
                paddingBottom: 'calc('.concat(e.spaces.space48, ' + ').concat(V.a.iPhoneOffsetBottom, ')'),
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
    wsOx: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return b
      }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return h
        }),
        n.d(t, 'e', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('kGix')),
        c = n('Ssj5'),
        i = n('RqPI'),
        s = n('oEOe')
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
            var n,
              r = null === (n = t.payload) || void 0 === n ? void 0 : n.duration
            return l(l({}, e), {}, { duration: r, updateSettingsFetchStatus: o.a.LOADED })
          case p.REQUEST:
            return l(l({}, e), {}, { fetchSettingsFetchStatus: o.a.LOADING })
          case p.SUCCESS:
            var a,
              c,
              i,
              s = !(null === (a = t.payload) || void 0 === a || !a.enabled),
              u = null === (c = t.payload) || void 0 === c ? void 0 : c.duration,
              d = null === (i = t.payload) || void 0 === i ? void 0 : i.expiration
            return l(l({}, e), {}, { enabled: s, duration: u, expiration: d, fetchSettingsFetchStatus: o.a.LOADED })
          case p.FAILURE:
            return l(l({}, e), {}, { fetchSettingsFetchStatus: o.a.FAILED })
          default:
            return e
        }
      }
      c.a.register(a()({}, d, E))
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
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: p,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        m = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = n(),
              c = { userId: Object(i.p)(o) || '', duration: e }
            return Object(s.c)(t, { params: c, request: a.SettingsGraphQL.updateSafetyModeSettings })({
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
