;(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
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
        l = a('v//M'),
        u = a('3XMw'),
        d = a.n(u),
        p = a('tuLS'),
        f = a('fs1G'),
        S = a('MWbm'),
        E = a('mjJ+'),
        g = a('t62R'),
        m = a('CK8+'),
        b = a('rHpw'),
        y = d.a.c6cb90eb,
        h = d.a.a37e9b09,
        v = d.a.ccafffde,
        T = d.a.j2e184d8,
        _ = d.a.fc638aa2,
        A = d.a.d94b2246,
        C = d.a.bfea13ab,
        F = d.a.fc209bb7,
        O = d.a.ee95bb8d,
        M = [
          { label: v, value: 'OneDay' },
          { label: T, value: 'ThreeDays' },
          { label: _, value: 'SevenDays' },
        ]
      var I = s(function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.enabled,
            n = e.expiration,
            o = e.fetchSafetyModeSettings,
            c = e.fetchSettingsFetchStatus,
            i = e.updateSafetyModeSettings,
            s = e.withBorder,
            u = r.a.useCallback(
              function () {
                o().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [o, t],
            )
          r.a.useEffect(
            function () {
              u()
            },
            [u],
          )
          var d = e.analytics
          r.a.useEffect(
            function () {
              d.scribe({ action: 'impression' })
            },
            [d],
          )
          var b = function () {
              d.scribe({ action: 'click', element: 'disabled' }),
                i('none')
                  .then(function () {
                    return u()
                  })
                  .catch(function (e) {
                    t({ showToast: !0, defaultToast: { text: C } })(e)
                  })
            },
            v = function () {
              return function (e) {
                var a = M.map(function (e) {
                  return {
                    text: e.label,
                    onClick: function () {
                      return (function (e) {
                        d.scribe({ action: 'click', element: 'enabled' }),
                          ('OneDay' !== e.value && 'ThreeDays' !== e.value && 'SevenDays' !== e.value) ||
                            (d.scribe({ action: 'click', component: 'duration', element: e.value }),
                            i(e.value)
                              .then(function () {
                                return u()
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
          return r.a.createElement(l.a, {
            fetchStatus: c,
            onRequestRetry: u,
            render: function () {
              var e = new Date(parseInt(n, 10))
              return r.a.createElement(
                S.a,
                { style: s && w.border },
                r.a.createElement(
                  S.a,
                  { style: w.safetyModeToggleContainer },
                  r.a.createElement(g.b, null, y),
                  a
                    ? r.a.createElement(m.a, { onValueChange: b, value: a })
                    : r.a.createElement(
                        p.a,
                        { accessibilityLabel: y, renderMenu: v() },
                        r.a.createElement(m.a, { onValueChange: f.a, value: a }),
                      ),
                ),
                r.a.createElement(
                  S.a,
                  { style: w.safetyModeDescriptionContainer },
                  a && n
                    ? r.a.createElement(
                        g.b,
                        { color: 'gray700', size: 'subtext2', style: w.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? A
                          : O({ date: F(e) }),
                      )
                    : null,
                  r.a.createElement(g.b, { color: 'gray700', size: 'subtext2', style: w.settingDescription }, h),
                ),
              )
            },
          })
        }),
        w =
          ((t.a = I),
          b.a.create(function (e) {
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
          return se
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        c = a.n(o),
        i = a('1Pcy'),
        s = a.n(i),
        l = a('5Yy7'),
        u = a.n(l),
        d = a('2VqO'),
        p = a.n(d),
        f = a('KEM+'),
        S = a.n(f),
        E = (a('2G9S'), a('KqXw'), a('WNMA'), a('1t7P'), a('jQ/y'), a('hBvt'), a('ERkP')),
        g = a.n(E),
        m = a('oEOe'),
        b = 'rweb/'.concat('convertRitoSuggestedActions'),
        y = Object(m.a)(b, 'CALL_CONVERT_RITO_SUGGESTED_ACTIONS'),
        h = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(m.b)(t, {
              request: r.ConvertRitoSuggestedActions.callConvertRitoSuggestedActions,
              params: { userId: e },
            })({ actionTypes: y, context: 'CALL_CONVERT_RITO_SUGGESTED_ACTIONS', meta: { userId: e } })
          }
        },
        v = a('yiKp'),
        T = a.n(v),
        _ = (a('M+/F'), a('z84I'), a('Ssj5')),
        A = 'ritoSuggestedActionsFacePile',
        C = 'rweb/'.concat(A),
        F = Object(m.a)(C, 'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE'),
        O = {}
      _.a.register(
        S()({}, A, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case F.SUCCESS:
              var a = t.payload || {},
                n = a.count,
                r = a.users_results,
                o = t.meta || {},
                c = o.userId
              return c ? T()(T()({}, e), {}, S()({}, c, { userCount: n, facepileUsers: r })) : e
            default:
              return e
          }
        }),
      )
      var M = function (e, t) {
          return e.ritoSuggestedActionsFacePile[t]
        },
        I = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(m.b)(t, {
              request: r.RitoSuggestedActionsFacePile.fetchRitoSuggestedActionsFacePile,
              params: { userId: e },
            })({ actionTypes: F, context: 'FETCH_RITO_SUGGESTED_ACTIONS_FACEPILE', meta: { userId: e } })
          }
        },
        w = a('wsOx'),
        D = a('RqPI'),
        R = a('rxPX'),
        U = a('0KEI'),
        x = function (e) {
          var t = Object(D.r)(e)
          return t
            ? (function (e, t) {
                var a,
                  n = t
                    ? null === (a = M(e, t)) || void 0 === a
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
        L = function (e) {
          var t = Object(D.r)(e)
          return t
            ? (function (e, t) {
                var a
                return t ? (null === (a = M(e, t)) || void 0 === a ? void 0 : a.userCount) : void 0
              })(e, t)
            : void 0
        },
        P = Object(R.a)()
          .propsFromState(function () {
            return { facepileUrls: x, count: L, userId: D.r, safetyModeSettings: w.c }
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
              fetchRitoSuggestedActionsFacePile: I,
              callConvertRitoSuggestedActions: h,
            }
          })
          .withAnalytics({ section: 'safety_mode_prompt' }),
        k = a('jHSc'),
        j = a('iySH'),
        H = a.p + 'safety-mode-cone.b7ef2f95.png',
        G = a('/de5'),
        N = a('OsOl'),
        z = a('7JQg'),
        B = a('855f'),
        q = a('t62R'),
        Q = a('cHvH'),
        W = a('Wd7d'),
        Y = a('MAI/'),
        K = a('/yvb'),
        V = a('rHpw'),
        X = a('v6aA'),
        J = a('3XMw'),
        $ = a.n(J),
        Z = a('U+bB'),
        ee = a('MWbm'),
        te = { section: 'safety_mode_prompt' },
        ae = $.a.d1cc8c05,
        ne = $.a.b772cd65,
        re = $.a.c1da34c2,
        oe = $.a.j85176c1,
        ce = $.a.ga7fce66,
        ie = $.a.g42fd3ad,
        se = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              S()(
                s()(e),
                '_isSafetyModePromptEnabled',
                e.context.featureSwitches.isTrue('rito_safety_mode_modal_prompt_enabled'),
              ),
              S()(s()(e), '_handleBackClick', function () {
                var t = e.props,
                  a = t.callConvertRitoSuggestedActions,
                  n = t.createLocalApiErrorHandler,
                  r = t.enabledSafetyMode,
                  o = t.history,
                  c = t.userId
                c && r && a(c).catch(n()), o.goBack()
              }),
              S()(s()(e), '_handleScribeOnClick', function () {
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
                  n && this._isSafetyModePromptEnabled && a(n).catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.count,
                    n = t.facepileUrls,
                    r = t.history,
                    o = t.location,
                    c = t.match
                  return this._isSafetyModePromptEnabled
                    ? g.a.createElement(Q.a, null, function (t) {
                        var o,
                          c = t.screenWidth
                        return g.a.createElement(
                          z.c,
                          { namespace: te },
                          g.a.createElement(
                            k.b,
                            { history: r, onBackClick: e._handleBackClick },
                            g.a.createElement(
                              ee.a,
                              { style: W.a.isNarrowScreenWidth(c) ? ue.narrowScreen : ue.wideScreen },
                              g.a.createElement(Z.a, { accessibilityLabel: '', source: H, style: ue.image }),
                              g.a.createElement(
                                ee.a,
                                { style: ue.header },
                                g.a.createElement(q.b, { size: 'title2', weight: 'heavy' }, ae),
                              ),
                              n && a
                                ? g.a.createElement(
                                    g.a.Fragment,
                                    null,
                                    g.a.createElement(Y.a, {
                                      style: ue.facepile,
                                      userAvatarSize: 'large',
                                      userAvatarUrls: n,
                                    }),
                                    g.a.createElement(
                                      q.b,
                                      { style: ue.description },
                                      (function (e) {
                                        return e <= 10
                                          ? re({ count: B.a.getFormattedCount(e) })
                                          : oe({ count: B.a.getFormattedCount(e) })
                                      })(a),
                                    ),
                                    g.a.createElement(
                                      q.b,
                                      null,
                                      g.a.createElement(
                                        $.a.I18NFormatMessage,
                                        { $i18n: 'f81ca1f4' },
                                        g.a.createElement(
                                          q.b,
                                          { link: '/i/safety_mode/flagged_accounts', size: 'body', weight: 'bold' },
                                          $.a.ac9bde9a,
                                        ),
                                      ),
                                      g.a.createElement(j.a, { style: ue.chevronIcon }),
                                    ),
                                  )
                                : null,
                              g.a.createElement(
                                ee.a,
                                { style: ue.header },
                                g.a.createElement(q.b, { size: 'title3', weight: 'heavy' }, ce),
                              ),
                              g.a.createElement(N.a, { withBorder: !0 }),
                              g.a.createElement(
                                ee.a,
                                { style: ue.link },
                                ((o = e._handleScribeOnClick),
                                g.a.createElement(
                                  q.b,
                                  null,
                                  g.a.createElement(
                                    $.a.I18NFormatMessage,
                                    { $i18n: 'j449c95b' },
                                    g.a.createElement(
                                      q.b,
                                      {
                                        color: 'text',
                                        link: '/settings/safety_mode/about',
                                        onPress: o,
                                        size: 'subtext1',
                                        withUnderline: !0,
                                      },
                                      $.a.ed5457da,
                                    ),
                                  ),
                                )),
                              ),
                              g.a.createElement(
                                ee.a,
                                null,
                                g.a.createElement(
                                  K.a,
                                  { onPress: e._handleBackClick, style: ue.button, type: 'primaryFilled' },
                                  ne,
                                ),
                              ),
                              g.a.createElement(q.b, { style: ue.description }, ie),
                            ),
                          ),
                        )
                      })
                    : g.a.createElement(G.b, { history: r, location: o, match: c })
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      S()(se, 'contextType', X.a)
      var le = P(se),
        ue =
          ((t.default = le),
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
    wsOx: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return g
      }),
        a.d(t, 'b', function () {
          return m
        }),
        a.d(t, 'd', function () {
          return b
        }),
        a.d(t, 'a', function () {
          return y
        }),
        a.d(t, 'e', function () {
          return h
        })
      var n = a('KEM+'),
        r = a.n(n),
        o = a('yiKp'),
        c = a.n(o),
        i = (a('yH/f'), a('kGix')),
        s = a('Ssj5'),
        l = a('RqPI'),
        u = a('oEOe'),
        d = 'safetyMode',
        p = Object.freeze({
          REQUEST: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        f = Object.freeze({
          REQUEST: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        S = { enabled: !1, duration: 'none', fetchSettingsFetchStatus: i.a.NONE, updateSettingsFetchStatus: i.a.NONE }
      function E() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case p.REQUEST:
            var a,
              n = null === (a = t.payload) || void 0 === a ? void 0 : a.duration
            return c()(c()({}, e), {}, { duration: n, updateSettingsFetchStatus: i.a.LOADED })
          case f.REQUEST:
            return c()(c()({}, e), {}, { fetchSettingsFetchStatus: i.a.LOADING })
          case f.SUCCESS:
            var r,
              o,
              s,
              l = !(null === (r = t.payload) || void 0 === r || !r.enabled),
              u = null === (o = t.payload) || void 0 === o ? void 0 : o.duration,
              d = null === (s = t.payload) || void 0 === s ? void 0 : s.expiration
            return c()(c()({}, e), {}, { enabled: l, duration: u, expiration: d, fetchSettingsFetchStatus: i.a.LOADED })
          case f.FAILURE:
            return c()(c()({}, e), {}, { fetchSettingsFetchStatus: i.a.FAILED })
          default:
            return e
        }
      }
      s.a.register(r()({}, d, E))
      var g = function (e) {
          return e.safetyMode || {}
        },
        m = function (e) {
          return e.safetyMode.fetchSettingsFetchStatus
        },
        b = function (e) {
          return e.safetyMode.updateSettingsFetchStatus
        },
        y = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(u.b)(e, { request: n.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: f,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        h = function (e) {
          return function (t, a, n) {
            var r = n.api,
              o = a(),
              c = { userId: Object(l.r)(o) || '', duration: e }
            return Object(u.c)(t, { params: c, request: r.SettingsGraphQL.updateSafetyModeSettings })({
              actionTypes: p,
              context: 'UPDATE_SAFETY_MODE_SETTINGS',
              payload: c,
            })
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
