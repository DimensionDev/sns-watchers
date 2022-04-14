;(window.webpackJsonp = window.webpackJsonp || []).push([
  [237],
  {
    '+GrA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MutedAccountsScreen', function () {
          return Ce
        })
      var a,
        r,
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = (n('LW0h'), n('7x/C'), n('KqXw'), n('WNMA'), n('zh9S')),
        g = n('1YZw'),
        _ = n('yiKp'),
        y = n.n(_),
        v = (n('z84I'), n('WpDa')),
        S = n('ZNT5'),
        w = n('G6rE'),
        C = function (e) {
          return Object(S.a)({
            timelineId: 'dmMutedUsersGraphQL-'.concat(e),
            getEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMMutedUsers
            },
            getEndpointParams: function (t) {
              return y()({ user_id: e }, t)
            },
            context: 'FETCH_DM_MUTED_USERS',
            perfKey: 'dmMutedUsersGraphql',
            formatResponse: v.a,
          })
        },
        A = function (e) {
          return function (t, n) {
            var a = n()
            t(
              e
                .selectEntries(a)
                .filter(function (e) {
                  var t = e.content.id,
                    n = w.e.select(a, t)
                  return n && !n.dm_muting
                })
                .map(function (t) {
                  return e.removeEntry(t.entryId)
                }),
            )
          }
        },
        T = n('lbf8'),
        k = n('rxPX'),
        L = function (e, t) {
          return t.match.params.filter
        },
        O = Object(k.a)()
          .propsFromState(function () {
            return { filterName: L }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              cleanupMuteList: T.b,
              cleanupDMMuteList: A,
              googleAnalyticsPageView: b.googleAnalyticsPageView,
              scribePageImpression: b.scribePageImpression,
            }
          })
          .withAnalytics({ page: 'settings', section: 'muted_accounts' }),
        I = n('G0qc'),
        F = n('yoO3'),
        P = n('fTQJ'),
        R = n('eM8g'),
        x = n('7FtF'),
        M = n('t62R'),
        N = n('FIs5'),
        D = n('0yYu'),
        U = n('v6aA'),
        H = n('PnFR'),
        K = n('8UdT'),
        j = n('1Pcy'),
        V = n.n(j),
        B = (n('2G9S'), n('JtPf'), n('/yvb')),
        G = n('0pUJ'),
        Y = n('0KEI'),
        z = function (e, t) {
          return w.e.select(e, t.userId)
        },
        W = Object(k.a)()
          .propsFromState(function () {
            return { user: z }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              createLocalApiErrorHandler: Object(Y.createLocalApiErrorHandlerWithContextFactory)(
                'MUTE_BUTTON_CONTAINER',
              ),
              mute: G.a,
              unmute: w.e.unmute,
            }
          })
          .withAnalytics(),
        q = n('foB5'),
        X = n('Rp9C'),
        Q = n('68+r'),
        J = n('P2xQ'),
        Z = n('qz6Z'),
        $ = n('w02m'),
        ee = W(
          (function (e) {
            u()(n, e)
            var t = f()(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                p()(V()(e), '_handleMutOrUnmuteToggle', function () {
                  e._handleMuteOrUnmuteToggleHelper()
                }),
                p()(V()(e), '_handleMuteOrUnmuteToggleHelper', function () {
                  var t = e.props,
                    n = t.addToast,
                    a = t.createLocalApiErrorHandler,
                    r = t.mute,
                    o = t.unmute,
                    i = t.user,
                    c = t.userId
                  return i
                    ? i.muting
                      ? o(c).then(function (t) {
                          n({ text: Object(J.d)(i.screen_name) }), e._scribeAction('unmute_user')
                        }, a(Q.a))
                      : r(c).then(function (t) {
                          n({ text: Object(J.b)(i.screen_name) }), e._scribeAction('mute_user')
                        }, a(q.a))
                    : Promise.resolve()
                }),
                e
              )
            }
            return (
              s()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.user
                    if (!e) return null
                    var t = e.muting ? 'destructiveOutlined' : 'brandOutlined',
                      n = e.muting ? Z.a : $.a,
                      a = e.muting ? Object(J.e)(e.screen_name) : Object(J.c)(e.screen_name),
                      r = e.muting ? J.g : J.f
                    return E.a.createElement(B.a, {
                      accessibilityLabel: a,
                      hoverLabel: { label: r },
                      icon: E.a.createElement(n, null),
                      onPress: this._handleMutOrUnmuteToggle,
                      type: t,
                    })
                  },
                },
                {
                  key: '_scribeAction',
                  value: function (e) {
                    var t = this.props,
                      n = t.analytics,
                      a = t.user
                    n.scribe({ action: e, data: { items: a ? [X.a.getUserItem(a)] : [] } })
                  },
                },
              ]),
              n
            )
          })(E.a.Component),
        ),
        te = (n('ho0z'), n('MMRb')),
        ne = function (e, t) {
          return w.e.select(e, t.userId)
        },
        ae = Object(k.a)()
          .propsFromState(function () {
            return { user: ne }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              createLocalApiErrorHandler: Object(Y.createLocalApiErrorHandlerWithContextFactory)(
                'MUTE_DM_BUTTON_CONTAINER',
              ),
              muteDMUser: te.muteDMUser,
              unmuteDMUser: te.unmuteDMUser,
            }
          })
          .withAnalytics(),
        re = n('3XMw'),
        oe = n.n(re),
        ie = oe.a.e67b2d65,
        ce = oe.a.f05597b2,
        se = oe.a.gde6b424,
        le = oe.a.e308019b,
        ue = ae(
          (function (e) {
            u()(n, e)
            var t = f()(n)
            function n() {
              var e
              i()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                p()(V()(e), '_handleUnmuteToggle', function () {
                  e._handleUnmuteToggleHelper()
                }),
                p()(V()(e), '_handleUnmuteToggleHelper', function () {
                  var t = e.props,
                    n = t.addToast,
                    a = t.createLocalApiErrorHandler,
                    r = t.muteDMUser,
                    o = t.unmuteDMUser,
                    i = t.user,
                    c = t.userId
                  return i
                    ? i.dm_muting
                      ? o(c).then(function (t) {
                          n({ text: le({ name: i.name }) }), e._scribeAction('unmute_user')
                        }, a(Q.a))
                      : r(c).then(function (t) {
                          n({ text: se({ name: i.name }) }), e._scribeAction('mute_user')
                        }, a(q.a))
                    : Promise.resolve()
                }),
                e
              )
            }
            return (
              s()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.user
                    if (!e) return null
                    var t = e.dm_muting ? 'destructiveOutlined' : 'brandOutlined',
                      n = e.dm_muting ? Z.a : $.a,
                      a = e.dm_muting ? ce({ screenName: e.screen_name }) : ie({ screenName: e.screen_name })
                    return E.a.createElement(B.a, {
                      accessibilityLabel: a,
                      icon: E.a.createElement(n, null),
                      onPress: this._handleUnmuteToggle,
                      type: t,
                    })
                  },
                },
                {
                  key: '_scribeAction',
                  value: function (e) {
                    var t = this.props,
                      n = t.analytics,
                      a = t.user
                    n.scribe({ action: e, data: { items: a ? [X.a.getUserItem(a)] : [] } })
                  },
                },
              ]),
              n
            )
          })(E.a.Component),
        ),
        de = n('Ka9G'),
        fe =
          ((a = {}),
          p()(
            a,
            K.b.User,
            Object(de.a)({
              decoration: function (e) {
                var t = e.userId
                return E.a.createElement(ee, { userId: t })
              },
            }),
          ),
          p()(a, K.b.TimelineCursor, Object(H.a)({})),
          a),
        he =
          ((r = {}),
          p()(
            r,
            K.b.User,
            Object(de.a)({
              decoration: function (e) {
                var t = e.userId
                return E.a.createElement(ue, { userId: t })
              },
            }),
          ),
          p()(r, K.b.TimelineCursor, Object(H.a)({})),
          r),
        pe = oe.a.daef29b7,
        me = E.a.createElement(
          oe.a.I18NFormatMessage,
          { $i18n: 'b0b13518' },
          E.a.createElement(M.b, { link: 'https://help.twitter.com/using-twitter/twitter-mute' }, oe.a.e565cad5),
        ),
        Ee = oe.a.a6194d10,
        be = oe.a.ga3ef87d,
        ge = oe.a.cd9701d3,
        _e = oe.a.b8e49590,
        ye = oe.a.i859a9d3,
        ve = 'https://support.twitter.com/articles/20171399',
        Se = function () {
          var e = E.a.createElement('div', null, _e, ' ', E.a.createElement(M.b, { link: ve }, ye))
          return E.a.createElement(N.a, { header: be, message: e })
        },
        we = function () {
          var e = E.a.createElement('div', null, ge, ' ', E.a.createElement(M.b, { link: ve }, ye))
          return E.a.createElement(N.a, { header: be, message: e })
        },
        Ce = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._cleanupMuteLists()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.filterName,
                    n = e.location,
                    a = this.context.loggedInUserId,
                    r = t === I.a.Messages
                  return (
                    (this._module = r ? C(a) : Object(T.a)()),
                    E.a.createElement(
                      F.a,
                      null,
                      E.a.createElement(
                        x.a,
                        { location: n, title: pe, withBottomBorder: !0, withMarginBottom: !1 },
                        E.a.createElement(R.a, null, me),
                        E.a.createElement(D.a, null),
                        E.a.createElement(P.a, {
                          entryConfiguration: r ? he : fe,
                          loadingAccessibilityLabel: Ee,
                          module: this._module,
                          renderEmptyState: r ? Se : we,
                          title: pe,
                        }),
                      ),
                    )
                  )
                },
              },
              {
                key: '_cleanupMuteLists',
                value: function () {
                  var e = this.props,
                    t = e.cleanupDMMuteList,
                    n = e.cleanupMuteList,
                    a = this.context.loggedInUserId,
                    r = C(a)
                  n(Object(T.a)()), t(r)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(Ce, 'contextType', U.a)
      t.default = O(Ce)
    },
    '+OgG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('P1r1'),
        i = n('UhuB'),
        c = n('BxsD'),
        s = function (e) {
          return function (t, n) {
            var a = r()({}, e)
            if (e.hasOwnProperty('personalized_trends')) {
              if (!e.hasOwnProperty('trend_location_woeid')) {
                var s = Object(i.t)(n())
                a.trend_location_woeid = (s && s[0] && s[0].woeid) || '1'
              }
            } else a.personalized_trends = !1
            return t(o.M(a)).then(function () {
              return t(Object(c.g)())
            })
          }
        }
    },
    '2V91': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PasswordScreen', function () {
          return X
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('ho0z'), n('ERkP')),
        E = n.n(m),
        b = n('k49u'),
        g = n('dZRF'),
        _ = n('1YZw'),
        y = n('oEOe'),
        v = function (e, t, n) {
          return function (a, r, o) {
            var i = o.api
            return Object(y.d)(a, {
              params: { current_password: e, password: t, password_confirmation: n },
              request: i.Settings.changePassword,
            })('CHANGE_PASSWORD')
          }
        },
        S = n('rxPX'),
        w = n('0KEI'),
        C = Object(S.a)()
          .propsFromState(function () {
            return { applications: g.a.selectUniqUnrevokedApps, fetchStatus: g.d }
          })
          .adjustStateProps(function (e) {
            var t = e.applications,
              n = e.fetchStatus
            return { applicationCount: null == t ? void 0 : t.length, fetchStatus: n }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              changePassword: v,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PASSWORD_SCREEN',
              ),
              fetchApplicationsIfNeeded: g.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'password' }),
        A = n('v//M'),
        T = n('yoO3'),
        k = n('7FtF'),
        L = n('MWbm'),
        O = n('Irs7'),
        I = n('p+r5'),
        F = n('t62R'),
        P = n('0yYu'),
        R = n('FR63'),
        x = n('3XMw'),
        M = n.n(x),
        N = n('/Dbh'),
        D = M.a.ab1f7eef,
        U = M.a.d241169c,
        H = M.a.d1091f50,
        K = M.a.a9bc3043,
        j = M.a.b8c03cfb,
        V = M.a.b731d32c,
        B = M.a.d555d7e0,
        G = M.a.fa8af9ad,
        Y = M.a.c8cb0b4c,
        z = M.a.jea2ff04,
        W = M.a.a03f5c72,
        q = M.a.i9028824,
        X = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              p()(s()(o), '_render', function () {
                var e = o.props.applicationCount,
                  t = o.state,
                  n = t.current_password,
                  a = t.currentPasswordError,
                  r = t.new_password,
                  i = t.newPasswordError,
                  c = t.password_confirmation,
                  s = t.passwordConfirmationError
                return E.a.createElement(
                  L.a,
                  null,
                  E.a.createElement(I.a, {
                    errorText: a,
                    helperText: E.a.createElement(
                      F.b,
                      { link: 'https://twitter.com/account/access_password_reset' },
                      H,
                    ),
                    invalid: !!a,
                    label: U,
                    name: 'current_password',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: n,
                  }),
                  E.a.createElement(P.a, null),
                  E.a.createElement(I.a, {
                    errorText: i,
                    invalid: !!i,
                    label: K,
                    name: 'new_password',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: r,
                  }),
                  E.a.createElement(I.a, {
                    errorText: s,
                    invalid: !!s,
                    label: j,
                    name: 'password_confirmation',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: c,
                  }),
                  E.a.createElement(P.a, null),
                  e
                    ? E.a.createElement(
                        R.a,
                        null,
                        E.a.createElement(
                          F.b,
                          { color: 'gray700' },
                          E.a.createElement(
                            M.a.I18NFormatMessage,
                            { $i18n: 'hc585ff0' },
                            E.a.createElement(F.b, { link: '/settings/applications' }, W({ applicationCount: e })),
                            E.a.createElement(
                              F.b,
                              { link: 'https://help.twitter.com/safety-and-security/account-security-tips' },
                              M.a.h1b4075d,
                            ),
                          ),
                        ),
                      )
                    : null,
                )
              }),
              p()(s()(o), '_handleFetchApps', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchApplicationsIfNeeded)().catch(t({ showToast: !1 }))
              }),
              p()(s()(o), '_handleSubmit', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.changePassword,
                  a = e.createLocalApiErrorHandler,
                  r = o.state,
                  i = r.current_password,
                  c = r.new_password,
                  s = r.password_confirmation
                if (i === c) o.setState({ newPasswordError: B })
                else if (c.length < N.b) o.setState({ newPasswordError: w.NEW_PASSWORD_SHORT })
                else if (c.length > N.a) o.setState({ newPasswordError: w.NEW_PASSWORD_LONG })
                else if (c !== s) o.setState({ passwordConfirmationError: G })
                else {
                  var l
                  o.setState({ newPasswordError: void 0, passwordConfirmationError: void 0 }),
                    n(i, c, s)
                      .then(function () {
                        o.setState({
                          current_password: '',
                          hasBlankFields: !0,
                          new_password: '',
                          password_confirmation: '',
                        }),
                          t({ text: V })
                      })
                      .catch(
                        a(
                          ((l = {}),
                          p()(l, b.a.InvalidCurrentPassword, {
                            customAction: function () {
                              return o.setState({ currentPasswordError: Y })
                            },
                          }),
                          p()(l, b.a.NewPasswordLong, {
                            customAction: function () {
                              return o.setState({ newPasswordError: w.NEW_PASSWORD_LONG })
                            },
                          }),
                          p()(l, b.a.NewPasswordShort, {
                            customAction: function () {
                              return o.setState({ newPasswordError: w.NEW_PASSWORD_SHORT })
                            },
                          }),
                          p()(l, b.a.NewPasswordWeak, {
                            customAction: function () {
                              return o.setState({ newPasswordError: z })
                            },
                          }),
                          p()(l, b.a.CannotReuseCurrentPassword, {
                            customAction: function () {
                              return o.setState({ newPasswordError: B })
                            },
                          }),
                          p()(l, b.a.PasswordResetMismatchedEntries, {
                            customAction: function () {
                              return o.setState({ passwordConfirmationError: G })
                            },
                          }),
                          p()(l, 'showToast', !0),
                          l),
                        ),
                      )
                }
              }),
              p()(s()(o), '_handleItemChanged', function (e) {
                var t
                o.setState(
                  ((t = {}),
                  p()(t, e.target.name, e.target.value),
                  p()(t, 'currentPasswordError', void 0),
                  p()(t, 'newPasswordError', void 0),
                  p()(t, 'passwordConfirmationError', void 0),
                  t),
                  function () {
                    o.setState({
                      hasBlankFields:
                        '' === o.state.current_password ||
                        '' === o.state.new_password ||
                        '' === o.state.password_confirmation,
                    })
                  },
                )
              }),
              (o.state = { current_password: '', hasBlankFields: !0, new_password: '', password_confirmation: '' }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetchApps()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return E.a.createElement(
                    k.a,
                    { location: n, onSubmit: this._handleSubmit, submitDisabled: this.state.hasBlankFields, title: D },
                    E.a.createElement(
                      T.a,
                      null,
                      E.a.createElement(A.a, {
                        accessibilityLabel: q,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetchApps,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = Object(O.a)(C(X))
    },
    '2dyk': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsLocationScreen', function () {
          return K
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('EPsT'),
        g = n('zh9S'),
        _ = n('a/ea'),
        y = n('P1r1'),
        v = n('rxPX'),
        S = n('0KEI'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { permissionStatus: _.c, settings: y.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LOCATION_SCREEN',
              ),
              deleteLocationData: y.c,
              googleAnalyticsPageView: g.googleAnalyticsPageView,
              loadGeoLocation: _.a,
              scribePageImpression: g.scribePageImpression,
              updateSettings: y.M,
            }
          }),
        C = n('M6MT'),
        A = n('eM8g'),
        T = n('7FtF'),
        k = n('MWbm'),
        L = n('t62R'),
        O = n('e0ey'),
        I = n('3XMw'),
        F = n.n(I),
        P = F.a.eb029cab,
        R = F.a.eb029cab,
        x = F.a.j5267913,
        M = F.a.ed7fa034,
        N = F.a.h83e5c06,
        D = F.a.f4d69920,
        U = F.a.d96cf7cd,
        H = { page: 'settings', section: 'location' },
        K = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_handleItemChanged', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateSettings)(p()({}, t, n)).catch(r({ showToast: !0 }))
              }),
              p()(s()(e), '_handlePreciseLocationSettingChanged', function (t, n) {
                var a = e.props.loadGeoLocation
                e._handleItemChanged(t, n), n && a()
              }),
              p()(s()(e), '_handleDeleteLocation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.deleteLocationData)().catch(n({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(H), t(H)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.permissionStatus,
                    a = e.settings
                  return E.a.createElement(
                    T.a,
                    { location: t, title: P },
                    E.a.createElement(
                      k.a,
                      null,
                      E.a.createElement(
                        A.a,
                        null,
                        E.a.createElement(
                          F.a.I18NFormatMessage,
                          { $i18n: 'ia4557be' },
                          E.a.createElement(
                            L.b,
                            { link: 'https://help.twitter.com/safety-and-security/tweet-location-settings' },
                            F.a.a18349ca,
                          ),
                        ),
                      ),
                      n === C.b.denied ? E.a.createElement(A.a, null, M) : null,
                      E.a.createElement(O.a, {
                        checked: a.geo_enabled,
                        label: R,
                        name: 'geo_enabled',
                        onChange: this._handlePreciseLocationSettingChanged,
                      }),
                      E.a.createElement(b.a, {
                        confirmationSheetConfirmButtonLabel: U,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: D,
                        confirmationSheetText: x,
                        label: N,
                        onConfirmationSheetConfirm: this._handleDeleteLocation,
                        withBottomBorder: !1,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = w(K)
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('fyvP'),
        i = n('rHpw'),
        c = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(c.a, { style: s.root }, r.a.createElement(o.a, e))
      }
      var s = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '3WEv': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SessionDetailPage', function () {
          return Y
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ho0z'), n('6U7i'), n('ly4k'), n('ERkP')),
        E = n.n(m),
        b = n('EPsT'),
        g = (n('KqXw'), n('WNMA'), n('uo4S')),
        _ = n('1YZw'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = function (e, t) {
          var n = decodeURIComponent(t.match.params.sessionId || '')
          return g.e(e, n)
        },
        w = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: g.d, session: S }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SESSION_DETAIL'),
              fetchSessionsIfNeeded: g.a,
              revokeSession: g.c,
            }
          })
          .withAnalytics({ page: 'settings', section: 'session_detail' }),
        C = n('v//M'),
        A = n('3XMw'),
        T = n.n(A),
        k = n('yoO3'),
        L = n('ZvNX'),
        O = n('7FtF'),
        I = n('jm1/'),
        F = n('MWbm'),
        P = n('FIs5'),
        R = n('t62R'),
        x = n('0yYu'),
        M = n('6vad'),
        N = T.a.ed5ab169,
        D = T.a.d64e29c5,
        U = { headline: T.a.idfa01cb, text: T.a.d4cca0f7, confirmButtonLabel: T.a.ae1bbb26 },
        H = T.a.e04ba39c,
        K = T.a.bfbc051c,
        j = T.a.jaaa8984,
        V = T.a.h667fc02,
        B = T.a.ddcd3d26,
        G = T.a.d2f0f3fd,
        Y = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_fetchSessionsIfNeeded', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchSessionsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              p()(s()(e), '_handleRetry', function () {
                e._fetchSessionsIfNeeded()
              }),
              p()(s()(e), '_handleLogOut', function () {
                var t = e.props.session
                t && (e._revokeSession(t.token), e._scribeAction('revoke_session'))
              }),
              p()(s()(e), '_handleGoBack', function () {
                e.props.history.goBack({ backLocation: '/settings/applications' })
              }),
              p()(s()(e), '_render', function () {
                var t = e.props.session
                return t
                  ? E.a.createElement(
                      F.a,
                      null,
                      E.a.createElement(L.a, { session: t, withBottomBorder: !1, withSummary: !0 }),
                      e._renderDateAndTime(t),
                      e._renderLocation(t),
                    )
                  : E.a.createElement(P.a, { header: G })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchSessionsIfNeeded()
                },
              },
              {
                key: '_revokeSession',
                value: function (e) {
                  var t = this,
                    n = this.props,
                    a = n.addToast,
                    r = n.createLocalApiErrorHandler
                  ;(0, n.revokeSession)(e).then(function () {
                    a({ text: V }), t._handleGoBack()
                  }, r({ showToast: !0 }))
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe({ component: 'active_session', element: e, action: 'click' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location,
                    a = e.session,
                    r = a ? a.name : ''
                  return E.a.createElement(
                    k.a,
                    null,
                    E.a.createElement(
                      O.a,
                      { location: n, title: r },
                      E.a.createElement(C.a, {
                        accessibilityLabel: B,
                        fetchStatus: t,
                        onRequestRetry: this._handleRetry,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderDateLabel',
                value: function (e) {
                  if (e.is_current_session) return E.a.createElement(R.b, null, N)
                  var t = new Date(Number(e.last_seen_time_ms))
                  return E.a.createElement('time', { dateTime: t.toISOString() }, K(t))
                },
              },
              {
                key: '_renderDateAndTime',
                value: function (e) {
                  return E.a.createElement(
                    F.a,
                    null,
                    null != e && e.last_seen_time_ms
                      ? E.a.createElement(
                          F.a,
                          null,
                          E.a.createElement(x.a, null),
                          E.a.createElement(M.b, { text: H }),
                          E.a.createElement(
                            F.a,
                            { style: [I.a.labelContainer, !(null != e && e.is_current_session) && I.a.bottomBorder] },
                            E.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, this._renderDateLabel(e)),
                          ),
                        )
                      : null,
                    null != e && e.is_current_session
                      ? null
                      : E.a.createElement(b.a, {
                          confirmationSheetConfirmButtonLabel: U.confirmButtonLabel,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: U.headline,
                          confirmationSheetText: U.text,
                          label: D,
                          onConfirmationSheetConfirm: this._handleLogOut,
                          withBottomBorder: !1,
                        }),
                  )
                },
              },
              {
                key: '_renderLocation',
                value: function (e) {
                  var t = e.location
                  return t
                    ? E.a.createElement(
                        F.a,
                        null,
                        E.a.createElement(x.a, null),
                        E.a.createElement(M.b, { text: j }),
                        E.a.createElement(
                          F.a,
                          { style: I.a.labelContainer },
                          E.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, t),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = w(Y)
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('2G9S')
      var a = n('1YZw'),
        r = n('pXBW'),
        o = n('3XMw'),
        i = n.n(o),
        c = n('SrIh'),
        s = i.a.a5d4fda0,
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(c.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(a.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '5keN': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeatureSwitchesScreen', function () {
          return j
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b =
          (n('+KXO'),
          n('z84I'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('KqXw'),
          n('LJOr'),
          n('vrRf'),
          n('1t7P'),
          n('jQ/y'),
          n('2G9S'),
          n('MvUL'),
          n('ERkP')),
        g = n.n(b),
        _ = n('O0uF'),
        y = n('rxPX'),
        v = Object(y.a)()
          .propsFromState(function () {
            return { featureSwitches: _.f }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches
            return { allSwitches: t.debug, config: t.user.config }
          })
          .withAnalytics({ page: 'settings', section: 'feature_switches' }),
        S = n('VwDm'),
        w = n('sXY3'),
        C = n('yoO3'),
        A = n('7FtF'),
        T = (n('ho0z'), n('Blm6'), n('uFXj'), n('MWbm')),
        k = n('p+r5'),
        L = n('rHpw'),
        O = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              E()(u()(e), '_handleChange', function (t) {
                var n = e.props,
                  a = n.disabled,
                  r = n.name,
                  o = n.onChange,
                  i = n.type
                a || o(r, 'number' === i ? parseInt(t.target.value, 10) : t.target.value)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabled,
                    n = e.helpText,
                    a = e.label,
                    r = e.type,
                    o = e.value,
                    i = e.withBottomBorder,
                    c = !!t
                  return g.a.createElement(
                    T.a,
                    { style: [i && I.bottomBorder, c && I.disabled] },
                    g.a.createElement(k.a, {
                      editable: !c,
                      helperText: n,
                      label: a,
                      maxLength: 'number' === r ? 5 : void 0,
                      name: a,
                      onChange: this._handleChange,
                      type: r,
                      value: o,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      E()(O, 'defaultProps', { type: 'text', withBottomBorder: !0 })
      var I = L.a.create(function (e) {
          return {
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            disabled: { opacity: 0.5 },
          }
        }),
        F = n('iCwC'),
        P = n('6vad'),
        R = n('t62R'),
        x = n('/yvb'),
        M = n('e0ey'),
        N = n('6OUF'),
        D = n('0yYu'),
        U = n('3JAx'),
        H = n('v6aA'),
        K = n('hX3w'),
        j = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              E()(u()(o), '_handleItemChanged', function (e, t) {
                o.experimentOverrides.set(e, t), o.forceUpdate()
              }),
              E()(u()(o), '_handleClearOverrides', function () {
                o.experimentOverrides.clear(), o.forceUpdate()
              }),
              E()(u()(o), '_renderCurrentOverrides', function () {
                var e = o.props.config,
                  t = o.experimentOverrides.getAll()
                return Object.keys(t).length > 0
                  ? g.a.createElement(
                      T.a,
                      null,
                      g.a.createElement(P.b, { text: 'Currently Active Overrides' }),
                      Object(w.a)(t).map(function (t) {
                        var n = r()(t, 2),
                          a = n[0],
                          o = n[1]
                        return g.a.createElement(
                          T.a,
                          { key: a, style: [F.a.viewItem, F.a.bottomBorder] },
                          g.a.createElement(R.b, null, a),
                          g.a.createElement(
                            R.b,
                            { color: e[a] && e[a].value !== o ? 'magenta500' : 'gray700' },
                            o.toString(),
                          ),
                        )
                      }),
                      g.a.createElement(
                        T.a,
                        { style: F.a.viewItem },
                        g.a.createElement(
                          x.a,
                          { onPress: o._handleClearOverrides, type: 'destructiveOutlined' },
                          'Clear all overrides',
                        ),
                      ),
                    )
                  : null
              }),
              E()(u()(o), '_renderSearch', function () {
                return g.a.createElement(
                  T.a,
                  null,
                  g.a.createElement(M.a, {
                    checked: o.state.onlyDDGs,
                    label: 'Only DDGs',
                    name: 'onlyDDGs',
                    onChange: o._handleFilterChanged,
                  }),
                  g.a.createElement(N.a, {
                    Icon: S.a,
                    onChange: o._handleSearch,
                    placeholder: 'Search feature switches',
                    style: F.a.searchBox,
                    withClearButton: !0,
                  }),
                )
              }),
              E()(u()(o), '_renderAll', function () {
                var e = o.state.search,
                  t = o.props,
                  n = t.allSwitches,
                  a = t.config,
                  i = o.experimentOverrides.getAll()
                return g.a.createElement(
                  T.a,
                  null,
                  g.a.createElement(P.b, { text: 'Filters' }),
                  o._renderSearch(),
                  g.a.createElement(D.a, null),
                  g.a.createElement(P.b, { text: 'Feature switches' }),
                  Object(w.a)(a).map(function (t) {
                    var c = r()(t, 2),
                      s = c[0]
                    c[1]
                    if (
                      !n[s] ||
                      (e && -1 === s.indexOf(e.toLowerCase())) ||
                      (o.state.onlyDDGs && 'experiment' !== n[s].type)
                    )
                      return null
                    var l = n[s],
                      u = l.description,
                      d = l.enumeration_values,
                      f = l.owner,
                      h = l.type,
                      p = i[s],
                      m = void 0 !== p ? p : a[s] ? a[s].value : n[s].default,
                      E = u || f ? ''.concat(u, '\n').concat(f) : void 0
                    switch (h) {
                      case 'boolean':
                        return g.a.createElement(M.a, {
                          checked: m,
                          helpText: E,
                          key: s,
                          label: s,
                          name: s,
                          onChange: o._handleItemChanged,
                        })
                      case 'experiment':
                        return g.a.createElement(U.a, {
                          description: E,
                          key: s,
                          label: s,
                          name: s,
                          onChange: o._handleItemChanged,
                          options: d.map(function (e) {
                            return { label: e, value: e }
                          }),
                          value: m,
                        })
                      case 'number':
                      default:
                        return Array.isArray(m)
                          ? g.a.createElement(
                              T.a,
                              { key: s, style: [F.a.viewItem, F.a.bottomBorder] },
                              g.a.createElement(R.b, null, s),
                              g.a.createElement(
                                R.b,
                                { color: 'gray700' },
                                'Array value type editing not supported yet',
                              ),
                              g.a.createElement('br', null),
                              g.a.createElement(R.b, null, m.toString()),
                            )
                          : g.a.createElement(O, {
                              helpText: E,
                              key: s,
                              label: s,
                              name: s,
                              onChange: o._handleItemChanged,
                              type: 'number' === h ? 'number' : 'text',
                              value: m.toString(),
                            })
                    }
                  }),
                )
              }),
              E()(u()(o), '_handleSearch', function (e) {
                o.setState({ search: e.target.value })
              }),
              E()(u()(o), '_handleFilterChanged', function (e, t) {
                o.setState(E()({}, e, t))
              }),
              (o.state = { onlyDDGs: !1, search: '' }),
              0 === Object.keys(e.allSwitches).length && e.history.replace('/settings'),
              (o.experimentOverrides = Object(K.a)(o.context.featureSwitches)),
              o
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.location
                  return g.a.createElement(
                    C.a,
                    null,
                    g.a.createElement(
                      A.a,
                      { location: e, title: 'Feature switches' },
                      g.a.createElement(T.a, null, this._renderCurrentOverrides(), this._renderAll()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      E()(j, 'contextType', H.a)
      t.default = v(j)
    },
    '68+r': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        c = n('3XMw'),
        s = n.n(c).a.ed428a75,
        l = ((a = {}), o()(a, i.a.NotMutingTargetUser, { toast: { text: s } }), o()(a, 'showToast', !0), a)
    },
    '6PlH': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MutedKeywordsNotificationsScreen', function () {
          return se
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('6U7i'), n('ly4k'), n('z84I'), n('uFXj'), n('ERkP')),
        E = n.n(m),
        b = n('X8EX'),
        g = n('1YZw'),
        _ = n('xZGM'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = function (e, t) {
          return Object(_.D)(e, _.q)
        },
        w = function (e, t) {
          return Object(_.D)(e, _.x)
        },
        C = Object(y.a)()
          .propsFromState(function () {
            return {
              mutedKeywords: b.j,
              fetchStatus: b.h,
              shouldShowMuteEducationTip: S,
              shouldShowUnmuteEducationTip: w,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: _.z,
              addToast: g.b,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('MUTED_KEYWORDS'),
              deleteMutedKeyword: b.b,
              fetchMutedKeywordsIfNeeded: b.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications', component: 'mute_keyword', element: 'list' }),
        A = n('v//M'),
        T = n('NTtI'),
        k = (n('2G9S'), n('3XMw')),
        L = n.n(k),
        O = n('qz6Z'),
        I = n('MWbm'),
        F = n('/yvb'),
        P = n('eb3s'),
        R = L.a.cfd2f35d,
        x = L.a.bb1cbeb5,
        M = L.a.ba4aaa9d,
        N = L.a.f837ed7d,
        D = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), 'state', { showUnmuteConfirmation: !1 }),
              p()(s()(e), '_handleConfirm', function () {
                var t = e.props,
                  n = t.keyword,
                  a = t.onUnmute
                e.setState({ showUnmuteConfirmation: !1 }), a(n)
              }),
              p()(s()(e), '_handleCancel', function () {
                e.setState({ showUnmuteConfirmation: !1 })
              }),
              p()(s()(e), '_handlePress', function () {
                var t = e.props,
                  n = t.keyword,
                  a = t.onUnmute
                t.shouldShowUnmuteEducationTip
                  ? (e.setState({ showUnmuteConfirmation: !0 }), e._updateUnmuteConfirmationPersistence())
                  : a(n)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: '_updateUnmuteConfirmationPersistence',
                value: function () {
                  ;(0, this.props.addFlag)(_.x)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.color
                  return E.a.createElement(
                    I.a,
                    null,
                    E.a.createElement(F.a, {
                      accessibilityLabel: x,
                      color: e,
                      hoverLabel: { label: x },
                      icon: E.a.createElement(O.a, null),
                      onPress: this._handlePress,
                    }),
                    this.state.showUnmuteConfirmation
                      ? E.a.createElement(P.a, {
                          cancelButtonLabel: R,
                          confirmButtonLabel: x,
                          headline: M,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: N,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(D, 'defaultProps', { color: 'red500' })
      var U = n('yoO3'),
        H = (n('hBvt'), n('iY63')),
        K = L.a.af40a8ef,
        j = function (e) {
          var t = e.accessibilityLabel,
            n = e.link
          return E.a.createElement(F.a, {
            accessibilityLabel: t,
            hoverLabel: { label: K },
            icon: E.a.createElement(H.a, null),
            link: n,
            pullRight: !0,
            type: 'primaryText',
          })
        },
        V = n('7FtF'),
        B = n('iCwC'),
        G = n('t62R'),
        Y = n('FIs5'),
        z = n('feu+'),
        W = n('htQn'),
        q = n('rHpw'),
        X = L.a.cab9274e,
        Q = L.a.e506aa92,
        J = L.a.cbd04965,
        Z = L.a.j24c37b2,
        $ = L.a.i0dd9b9d,
        ee = L.a.eb4e810a,
        te = L.a.cabeb6c1,
        ne = L.a.jade381b,
        ae = L.a.be59d8c3,
        re = L.a.i3d087da,
        oe = L.a.ga8d18c8,
        ie = L.a.f9bce916,
        ce = function () {
          return E.a.createElement(
            L.a.I18NFormatMessage,
            { $i18n: 'f02520a9' },
            E.a.createElement(
              G.b,
              { color: 'link', link: 'https://support.twitter.com/articles/20175032', withInteractiveStyling: !0 },
              L.a.f12c13b5,
            ),
          )
        },
        se = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_render', function () {
                var e = a.props.mutedKeywords
                return e && e.length > 0 ? a._renderKeywords() : a._renderEmptyState()
              }),
              p()(s()(a), '_renderEmptyState', function () {
                return E.a.createElement(Y.a, { header: X, message: E.a.createElement(ce, null) })
              }),
              p()(s()(a), '_renderExpireTime', function (e) {
                var t = new Date(Number(e))
                return E.a.createElement(
                  'time',
                  { 'aria-label': ne(t), dateTime: t.toISOString() },
                  a._calcRemainingTime(t),
                )
              }),
              p()(s()(a), '_isKeywordExpired', function (e) {
                return e && Number(e) < Date.now()
              }),
              p()(s()(a), '_calcRemainingTime', function (e) {
                var t = e - Date.now()
                if (t <= 0) return ee
                var n = Math.ceil(t / 6e4)
                if (n < 60) return ae(n)
                var a = Math.round(t / 36e5)
                if (a < 25) return re(a)
                var r = Math.round(t / 864e5)
                return r < 31 ? oe(r) : ne(e)
              }),
              p()(s()(a), '_handleFetch', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchMutedKeywordsIfNeeded)().catch(t())
              }),
              p()(s()(a), '_handleUnmute', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.analytics,
                  o = t.createLocalApiErrorHandler
                ;(0, t.deleteMutedKeyword)([e.id]).then(function () {
                  n({ text: J({ keyword: e.keyword }) }), r.scribe({ action: 'unmute' })
                }, o({ showToast: !0 }))
              }),
              p()(s()(a), '_handleCloseEducationPrompt', function () {
                a.setState({ showMuteKeywordEducationSheet: !1 })
              }),
              (a.state = { showMuteKeywordEducationSheet: !1 }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldShowMuteEducationTip &&
                    (this.setState({ showMuteKeywordEducationSheet: !0 }), this._updateMuteKeywordEducationCookie())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location,
                    a = E.a.createElement(j, { accessibilityLabel: Q, link: '/settings/add_muted_keyword' })
                  return E.a.createElement(
                    U.a,
                    null,
                    E.a.createElement(
                      V.a,
                      { location: n, rightControl: a, title: $ },
                      this.state.showMuteKeywordEducationSheet
                        ? E.a.createElement(z.a, {
                            actionLabel: Z,
                            graphic: T.a,
                            graphicDisplayMode: 'illustration',
                            headline: ie,
                            onAction: this._handleCloseEducationPrompt,
                            onClose: this._handleCloseEducationPrompt,
                            subtext: E.a.createElement(ce, null),
                          })
                        : null,
                      E.a.createElement(A.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderKeywords',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.addFlag,
                    a = t.shouldShowUnmuteEducationTip
                  return E.a.createElement(
                    I.a,
                    null,
                    E.a.createElement(
                      G.b,
                      { color: 'gray700', size: 'subtext2', style: [B.a.descriptionText, B.a.bottomBorder] },
                      E.a.createElement(ce, null),
                    ),
                    this.props.mutedKeywords.map(function (t) {
                      return E.a.createElement(
                        W.a,
                        {
                          key: t.id,
                          link: { pathname: '/settings/muted_keywords/'.concat(t.id), anchorless: !0 },
                          style: le.item,
                        },
                        E.a.createElement(
                          I.a,
                          { style: le.keywordContainer },
                          E.a.createElement(
                            G.b,
                            {
                              color: e._isKeywordExpired(t.valid_until) ? 'gray700' : 'text',
                              numberOfLines: 1,
                              style: le.keyword,
                            },
                            t.keyword,
                          ),
                          E.a.createElement(
                            G.b,
                            { color: 'gray700', size: 'subtext2', style: le.muteTime },
                            t.valid_until ? e._renderExpireTime(t.valid_until) : te,
                          ),
                        ),
                        E.a.createElement(D, {
                          addFlag: n,
                          color: e._isKeywordExpired(t.valid_until) ? 'gray700' : 'red500',
                          keyword: t,
                          onUnmute: e._handleUnmute,
                          shouldShowUnmuteEducationTip: a,
                        }),
                      )
                    }),
                  )
                },
              },
              {
                key: '_updateMuteKeywordEducationCookie',
                value: function () {
                  ;(0, this.props.addFlag)(_.q)
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        le = q.a.create(function (e) {
          return {
            item: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              maxWidth: '100%',
            },
            keywordContainer: {
              alignItems: 'flex-start',
              flexGrow: 1,
              justifyContent: 'space-between',
              marginRight: e.spaces.space16,
              minHeight: e.spaces.space40,
              maxWidth: '85%',
            },
            keyword: { maxWidth: '100%' },
            muteTime: { flexShrink: 0 },
          }
        })
      t.default = C(se)
    },
    '7WHe': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsContactsDashboardScreen', function () {
          return de
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('2G9S'), n('z84I'), n('tVqn'), n('ERkP')),
        g = n.n(b),
        _ = n('EPsT'),
        y = n('P1r1'),
        v = n('hqKg'),
        S = n('0KEI'),
        w = n('oEGd'),
        C = n('yiKp'),
        A = n.n(C),
        T = (n('1IsZ'), n('7x/C'), n('JtPf'), n('kGix')),
        k = n('XMGw'),
        L = n('Ssj5'),
        O = n('oEOe'),
        I = ''.concat(k.a, '/contacts'),
        F = 'rweb/'.concat(k.a),
        P = Object(O.a)(F, 'FETCH_ADDRESS_BOOK'),
        R = { cursor: null, contacts: [], fetchStatus: T.a.NONE }
      L.a.register(
        E()({}, I, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (n.type) {
            case P.REQUEST:
              return A()(A()({}, t), {}, { fetchStatus: T.a.LOADING })
            case P.SUCCESS:
              return (
                (e = n.payload.entities.vcards ? Object.values(n.payload.entities.vcards) : []),
                A()(
                  A()({}, t),
                  {},
                  {
                    contacts: [].concat(r()(t.contacts), r()(e)),
                    cursor: n.payload.result.next_cursor,
                    fetchStatus: T.a.LOADED,
                  },
                )
              )
            case P.FAILURE:
              return A()(A()({}, t), {}, { error: n.payload, fetchStatus: T.a.FAILED })
            default:
              return t
          }
        }),
      )
      var x = function (e) {
          return e[I].fetchStatus
        },
        M = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(O.b)(t, { request: r.Contacts.fetchAddressBook, params: e })({
              actionTypes: P,
              context: 'FETCH_ADDRESS_BOOK',
            })
          }
        },
        N = Object(v.createSelector)(
          function (e) {
            return e[I].contacts
          },
          x,
          function (e, t) {
            return { contacts: e, fetchStatus: t }
          },
        ),
        D = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_CONTACTS_DASHBOARD_SCREEN',
          ),
          deleteContacts: y.b,
          fetchContactsIfNeeded: function (e) {
            return function (t, n) {
              return x(n()) === T.a.LOADED ? Promise.resolve() : t(M(e))
            }
          },
          fetchContactsNext: function (e) {
            return function (t, n) {
              var a = n(),
                r = (function (e) {
                  return e[I].cursor
                })(a)
              return r && x(a) === T.a.LOADED ? t(M(A()(A()({}, e), {}, { cursor: r }))) : Promise.resolve()
            }
          },
        },
        U = Object(w.f)(N, D),
        H = n('v//M'),
        K = n('6ZHn'),
        j = n('TEoO'),
        V = n('yoO3'),
        B = n('PK8P'),
        G = n('7JQg'),
        Y = n('eM8g'),
        z = n('7FtF'),
        W = n('iCwC'),
        q = n('MWbm'),
        X = n('t62R'),
        Q = n('j7Bv'),
        J = n('0yYu'),
        Z = n('rHpw'),
        $ = n('v6aA'),
        ee = n('0zXz'),
        te = n('w6IS'),
        ne = n('3XMw'),
        ae = n.n(ne),
        re = { page: 'settings', section: 'contacts_dashboard' },
        oe = ae.a.bbcafbd9,
        ie = g.a.createElement(
          ae.a.I18NFormatMessage,
          { $i18n: 'ec152666' },
          g.a.createElement(
            X.b,
            { link: 'https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends' },
            ae.a.b8dd5e4d,
          ),
        ),
        ce = ae.a.b864be79,
        se = { headline: ae.a.g5fa1090, text: ae.a.h0d21912, confirmButtonLabel: ae.a.e68b09b4 },
        le = ae.a.ca24589e,
        ue = function (e) {
          return e.id_str
        },
        de = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              E()(u()(e), 'state', { verificationRequired: !1 }),
              E()(u()(e), '_renderTimeline', function () {
                var t = e.props,
                  n = t.contacts,
                  a = t.fetchStatus
                return g.a.createElement(j.a, {
                  assumedItemHeight: 70,
                  cacheKey: 'CONTACTS_DASHBOARD',
                  footer: e._renderFooter(a),
                  identityFunction: ue,
                  items: n,
                  onNearEnd: e._handleFetchMoreContacts,
                  renderer: e._renderContact,
                })
              }),
              E()(u()(e), '_renderContact', function (t) {
                var n = t.id_str,
                  a = t.import_source,
                  o = t.vcard,
                  i = e._getContactProp(o.get('fn')) || le,
                  c = e._getContactProperties(o.get('tel')),
                  s = e._getContactProperties(o.get('email')),
                  l = [].concat(r()(s), r()(c))
                return g.a.createElement(
                  q.a,
                  { key: n, style: [[W.a.infoText, W.a.bottomBorder], fe.contactContainer] },
                  g.a.createElement(Q.a, { Icon: K.a, color: 'neutral', style: fe.personIcon }),
                  g.a.createElement(
                    q.a,
                    null,
                    g.a.createElement(X.b, null, i),
                    l
                      ? l.map(function (e) {
                          return g.a.createElement(X.b, { color: 'gray700', key: e, size: 'subtext2' }, e)
                        })
                      : null,
                    a
                      ? g.a.createElement(X.b, { color: 'gray700', size: 'subtext2' }, 'Imported from '.concat(a))
                      : null,
                  ),
                )
              }),
              E()(u()(e), '_renderFooter', function (e) {
                return e === T.a.LOADING
                  ? g.a.createElement(
                      q.a,
                      { style: fe.loadingContainer },
                      g.a.createElement(H.a, { fetchStatus: e, render: ee.a }),
                    )
                  : null
              }),
              E()(u()(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.deleteContacts)().catch(n({ showToast: !0 }))
              }),
              E()(u()(e), '_handleFetchMoreContacts', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchContactsNext)().catch(n())
              }),
              E()(u()(e), '_getContactProp', function (t) {
                return (e._getContactProperties(t)[0] || '').trim()
              }),
              E()(u()(e), '_getContactProperties', function (t) {
                return t
                  ? Array.isArray(t)
                    ? Object(te.a)(
                        t.map(function (t) {
                          return e._getContactProperties(t)
                        }),
                      )
                    : [t.valueOf()]
                  : []
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.contacts,
                    n = e.fetchContactsIfNeeded,
                    a = e.fetchStatus,
                    r = e.location
                  return g.a.createElement(
                    G.c,
                    { namespace: re },
                    g.a.createElement(
                      V.a,
                      null,
                      g.a.createElement(
                        z.a,
                        { location: r, title: oe },
                        g.a.createElement(_.a, {
                          confirmationSheetConfirmButtonLabel: se.confirmButtonLabel,
                          confirmationSheetConfirmButtonType: 'destructiveFilled',
                          confirmationSheetHeadline: se.headline,
                          confirmationSheetText: se.text,
                          label: ce,
                          onConfirmationSheetConfirm: this._handleRemoveContacts,
                        }),
                        g.a.createElement(Y.a, null, ie),
                        g.a.createElement(J.a, null),
                        g.a.createElement(B.a, {
                          fetch: n,
                          fetchStatus: t.length > 0 ? T.a.LOADED : a,
                          render: this._renderTimeline,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      E()(de, 'contextType', $.a)
      var fe = Z.a.create(function (e) {
        return {
          contactContainer: { flexDirection: 'row', flexWrap: 'wrap' },
          personIcon: { marginRight: e.spaces.space12 },
          loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: 'center' },
        }
      })
      t.default = U(de)
    },
    '98E1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return I
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = n('3XMw'),
        g = n.n(b),
        _ = n('7FtF'),
        y = n('iCwC'),
        v = n('MWbm'),
        S = n('t62R'),
        w = n('6vad'),
        C = n('p+r5'),
        A = g.a.a999cb72,
        T = g.a.dec3c9b8,
        k = g.a.acc20811,
        L = g.a.d1091f50,
        O = g.a.i2209530,
        I = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              p()(s()(o), '_handleSubmit', function () {
                var e = o.props.onPasswordSubmit,
                  t = o.state.current_password
                t && e(t), o.setState({ current_password: '' })
              }),
              p()(s()(o), '_handleChange', function (e) {
                o.setState({ current_password: e.target.value })
              }),
              (o.state = { current_password: '' }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.reenterPasswordLabel,
                    a = e.saveChangesHeaderLabel,
                    r = e.submitLabel,
                    o = e.submitType,
                    i = E.a.createElement(
                      S.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      L,
                    )
                  return E.a.createElement(
                    _.a,
                    { location: t, onSubmit: this._handleSubmit, submitLabel: r, submitType: o, title: a },
                    E.a.createElement(w.b, { text: a }),
                    E.a.createElement(
                      v.a,
                      { style: [y.a.viewItem, y.a.bottomBorder] },
                      E.a.createElement(S.b, { color: 'gray700', size: 'subtext2' }, n),
                    ),
                    E.a.createElement(C.a, {
                      helperText: i,
                      label: T,
                      name: 'current_password',
                      onChange: this._handleChange,
                      type: 'password',
                      value: this.state.current_password,
                    }),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.location,
                    a = e.promptForPassword,
                    r = e.title
                  return a ? this._renderPasswordPrompt() : E.a.createElement(_.a, { location: n, title: r }, t || null)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(I, 'defaultProps', {
        children: null,
        promptForPassword: !1,
        reenterPasswordLabel: k,
        saveChangesHeaderLabel: A,
        submitLabel: O,
      })
    },
    '9JoG': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConnectedAccounts', function () {
          return se
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('z84I'), n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')),
        E = n.n(m),
        b = n('k49u'),
        g = n('1YZw'),
        _ = n('55TG'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = n('P1r1'),
        w = n('vEo5'),
        C = Object(y.a)()
          .propsFromState(function () {
            return { userEmail: w.selectFirstEmail, fetchStatus: S.n, ssoConnections: S.B }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT',
              ),
              deleteSSOConnection: S.d,
              fetchDevicesIfNeeded: w.fetchDevicesIfNeeded,
              fetchSettingsIfNeeded: S.f,
              verifyPassword: _.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'connected_accounts', component: 'delete_sso_connection' }),
        A = n('3XMw'),
        T = n.n(A),
        k = n('yoO3'),
        L = n('iCwC'),
        O = n('MWbm'),
        I = n('t62R'),
        F = n('6vad'),
        P = n('p+r5'),
        R = n('mw9i'),
        x = n('/yvb'),
        M = n('rHpw'),
        N = T.a.dec3c9b8,
        D = T.a.d1091f50,
        U = T.a.i4efb2e3,
        H = T.a.g9677c6d,
        K = T.a.c8cb0b4c,
        j = T.a.fe36fe1f,
        V = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), 'state', { password: '', passwordError: void 0 }),
              p()(s()(e), '_handleChange', function (t) {
                e.setState({ passwordError: void 0, password: t.target.value })
              }),
              p()(s()(e), '_handlePasswordSubmit', function () {
                var t,
                  n = e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.onSubmitPassword,
                  o = n.verifyPassword,
                  i = e.state.password
                '' !== i &&
                  o(i)
                    .then(function () {
                      e.setState({ password: '' }), r()
                    })
                    .catch(
                      a(
                        ((t = {}),
                        p()(t, b.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: K })
                          },
                        }),
                        p()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.ssoProvider,
                    n = e.titleHeader,
                    a = this.state,
                    r = a.password,
                    o = a.passwordError,
                    i = E.a.createElement(
                      I.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      D,
                    )
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    n ? E.a.createElement(F.b, { text: n }) : null,
                    E.a.createElement(
                      O.a,
                      { style: [L.a.viewItem, L.a.bottomBorder] },
                      t ? E.a.createElement(I.b, { color: 'gray700', size: 'subtext2' }, U({ ssoProvider: t })) : null,
                    ),
                    E.a.createElement(P.a, {
                      errorText: o,
                      helperText: i,
                      invalid: !!o,
                      label: N,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: r,
                    }),
                    E.a.createElement(
                      R.a,
                      { style: B.buttonContainer },
                      E.a.createElement(
                        x.a,
                        { onPress: this._handlePasswordSubmit, style: B.button, type: 'brandFilled' },
                        H,
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(V, 'defaultProps', { titleHeader: j })
      var B = M.a.create(function (e) {
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
        G = V,
        Y = n('7FtF'),
        z = n('cnVF'),
        W = n('RKmr'),
        q = n('csss'),
        X = n('jtO7'),
        Q = n('0yYu'),
        J = n('G1WX'),
        Z = n('6Rrp'),
        $ = n('jmcQ'),
        ee = n('iKTg'),
        te = T.a.h1abfbcd,
        ne = T.a.a45d71b8,
        ae = T.a.d84ed6b1,
        re = T.a.i51130d4,
        oe = T.a.e28901f2,
        ie = T.a.cf8560be,
        ce = T.a.ead2429e,
        se = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), 'state', { showPasswordDialog: !1, ssoConnectionToDelete: void 0 }),
              p()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.location,
                  r = t.verifyPassword,
                  o = e.state,
                  i = o.showPasswordDialog,
                  c = o.ssoConnectionToDelete
                return E.a.createElement(
                  k.a,
                  null,
                  E.a.createElement(
                    Y.a,
                    { location: a, screenType: 'secondaryDetail', title: te },
                    i
                      ? E.a.createElement(G, {
                          createLocalApiErrorHandler: n,
                          onSubmitPassword: e._handlePasswordSubmit,
                          ssoProvider: c,
                          verifyPassword: r,
                        })
                      : E.a.createElement(
                          E.a.Fragment,
                          null,
                          E.a.createElement(W.a, { description: ne }),
                          e._renderSSOProviderPivots(),
                        ),
                  ),
                )
              }),
              p()(s()(e), '_renderSSOProviderPivots', function () {
                var t = e.props,
                  n = t.ssoConnections,
                  a = t.userEmail,
                  r = E.a.createElement(
                    I.b,
                    { color: 'green500', size: 'subtext2' },
                    E.a.createElement(Z.a, null),
                    ' ',
                    ie,
                  )
                if (n && n.r.ok.length) {
                  var o = n.r.ok
                  return o.map(function (t, n) {
                    var i = t.ssoProvider,
                      c = o.length - 1,
                      s = e._getSSOProviderProps(i) || {},
                      l = s.ssoProviderLabel,
                      u = s.ssoProviderThumbnail
                    return E.a.createElement(
                      O.a,
                      { key: n },
                      E.a.createElement(q.a, {
                        description: r,
                        label: l,
                        renderRightContent: a ? e._renderUserEmail(a) : void 0,
                        thumbnail: u,
                        thumbnailSize: 'large',
                      }),
                      E.a.createElement(X.a, {
                        color: 'red500',
                        label: ae,
                        onPress: e._handleOnPress({ ssoProvider: i }),
                      }),
                      n < c ? E.a.createElement(Q.a, null) : null,
                    )
                  })
                }
              }),
              p()(s()(e), '_renderUserEmail', function (e) {
                return function () {
                  return E.a.createElement(I.b, null, e)
                }
              }),
              p()(s()(e), '_getSSOProviderProps', function (e) {
                var t = e.toLowerCase(),
                  n = M.a.isDarkMode() ? M.a.theme.colors.white : void 0
                switch (t) {
                  case z.A.Google:
                    return { ssoProviderThumbnail: E.a.createElement($.a, null), ssoProviderLabel: re }
                  case z.A.Apple:
                    return {
                      ssoProviderThumbnail: E.a.createElement(ee.a, { style: { color: n } }),
                      ssoProviderLabel: oe,
                    }
                  default:
                    return
                }
              }),
              p()(s()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchDevicesIfNeeded,
                  a = t.fetchSettingsIfNeeded,
                  r = [n(), a()]
                return Promise.all(r)
              }),
              p()(s()(e), '_handleOnPress', function (t) {
                var n = t.ssoProvider
                return function () {
                  e.props.analytics.scribe({ element: n, action: 'click' }),
                    e.setState({ ssoConnectionToDelete: n }),
                    e._deleteSSOConnection()
                }
              }),
              p()(s()(e), '_deleteSSOConnection', function () {
                var t,
                  n = e.props,
                  a = n.addToast,
                  r = n.createLocalApiErrorHandler,
                  o = n.deleteSSOConnection,
                  i = e.state.ssoConnectionToDelete
                return o({ ssoProvider: i })
                  .then(function () {
                    a({ text: ce({ ssoProvider: i }) }),
                      e.setState({ showPasswordDialog: !1, ssoConnectionToDelete: void 0 })
                  })
                  .catch(
                    r(
                      ((t = {}),
                      p()(t, b.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ showPasswordDialog: !0 })
                        },
                      }),
                      p()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              p()(s()(e), '_handlePasswordSubmit', function () {
                e._deleteSSOConnection()
              }),
              p()(s()(e), '_handleFetchRetry', function () {
                e._combinedFetches()
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._combinedFetches()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return E.a.createElement(J.a, {
                    fetchStatus: e,
                    onRequestRetry: this._handleFetchRetry,
                    render: this._render,
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = C(se)
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return E
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'g', function () {
          return g
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        i = n('oQhu'),
        c = n('ZNT5'),
        s = n('eR3e'),
        l = Object.freeze({ Trends: 'trends' }),
        u = Object.freeze({ WebSidebar: 'web_sidebar' }),
        d = 'explore-',
        f = 9e5,
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            a = e.featureSwitches,
            o = e.focalTweetId,
            i = e.includePageConfiguration,
            s = void 0 !== i && i,
            l = e.initialTabId,
            u = e.profileUserId,
            h = t || n || 'main',
            m = o
              ? ''.concat(d).concat(h, '-tweet-').concat(o)
              : u
              ? ''.concat(d).concat(h, '-user-').concat(u)
              : ''.concat(d).concat(h),
            E = a.isTrue('responsive_web_behavioral_events_enabled')
          return Object(c.a)({
            timelineId: m,
            formatResponse: p(E),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return r()(
                r()({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: o,
                  include_page_configuration: s,
                  initial_tab_id: l,
                  profile_user_id: u,
                  entity_tokens: E,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(d).concat(h),
            staleIntervalMs: f,
          })
        },
        p = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var a = n.tabs.tabs.map(function (t) {
                  var n,
                    a,
                    o,
                    i = r()(
                      r()(
                        {},
                        null === (n = t.urtEndpoint) ||
                          void 0 === n ||
                          null === (a = n.urtEndpointOptions) ||
                          void 0 === a
                          ? void 0
                          : a.requestParams,
                      ),
                      {},
                      { entity_tokens: e },
                    )
                  return r()(
                    r()({}, t),
                    {},
                    {
                      urtEndpoint: r()(
                        r()({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: r()(
                            r()({}, null === (o = t.urtEndpoint) || void 0 === o ? void 0 : o.urtEndpointOptions),
                            {},
                            { requestParams: i },
                          ),
                        },
                      ),
                    },
                  )
                }),
                i = r()(
                  r()({}, t),
                  {},
                  { pageConfiguration: r()(r()({}, n), {}, { tabs: r()(r()({}, n.tabs), {}, { tabs: a }) }) },
                )
              return Object(o.a)(i)
            }
            return Object(o.a)(t)
          }
        },
        m = function (e, t) {
          return h({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        E = Object(i.a)(function (e) {
          return h({ featureSwitches: e, contentType: l.Trends })
        }),
        b = Object(i.a)(function (e) {
          return h({ featureSwitches: e, displayLocation: u.WebSidebar })
        }),
        g = function () {
          return function (e, t) {
            return e(
              Object(s.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(d)
                })
                .map(function (e) {
                  return Object(s.g)(e)
                }),
            )
          }
        }
    },
    CKSU: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DeviceFollowingScreen', function () {
          return te
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        f = n.n(d),
        h = n('ERkP'),
        p = n.n(h),
        m = n('yiKp'),
        E = n.n(m),
        b = n('ZNT5'),
        g = n('RhWx'),
        _ = n.n(g),
        y = n('T0aG'),
        v = n.n(y),
        S = n('m3Bd'),
        w = n.n(S),
        C = (n('jwue'), n('7x/C'), n('+oxZ'), n('vWJI')),
        A = n('PiaM'),
        T = n('9/1j'),
        k = n('Re5t'),
        L = ['cursor'],
        O = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.cursor,
            a = []
          if (e.result.users.length > 0) {
            var r = n && 'object' === v()(n) ? n.sortValue : Date.now(),
              o = r - 1
            e.result.users.forEach(function (e) {
              a.push(A.l({ id: e, sortIndex: ''.concat(o), displayType: k.a.UserDetailed })), (o -= 1)
            }),
              a.push.apply(a, _()(I(e, o)))
          }
          return F(a, e.entities, P)
        },
        I = function (e, t) {
          var n = e.result.next_cursor_str
          return '0' === n
            ? []
            : [
                C.c({
                  cursorType: C.a.Bottom,
                  value: { param: 'cursor', id: n || '-1', sortValue: t },
                  sortIndex: ''.concat(t),
                }),
              ]
        },
        F = function (e, t, n) {
          return {
            globalObjects: t,
            timeline: {
              responseObjects: n,
              instructions: e.length ? [{ type: T.a.AddEntries, parameters: { entries: e } }] : [],
            },
          }
        },
        P = { feedbackActions: {} },
        R = function (e) {
          return Object(b.a)({
            timelineId: 'deviceFollowingLegacy-'.concat(e),
            getEndpoint: function (e) {
              return (
                (t = e.Friendships.fetchFollowing),
                function (e, n) {
                  var a = e.cursor,
                    r = w()(e, L),
                    o = r
                  return a && 'object' === v()(a) && (o = E()(E()({}, r), {}, f()({}, a.param, a.id))), t(o, n)
                }
              )
              var t
            },
            getEndpointParams: function (t) {
              return E()(E()({}, t), {}, { user_id: e, type: 'sms,live' })
            },
            context: 'FETCH_FOLLOWING',
            perfKey: 'deviceFollowingLegacy',
            formatResponse: O,
          })
        },
        x = n('FIs5'),
        M = n('QIgh'),
        N = n('8UdT'),
        D = n('88ay'),
        U = n('Ka9G'),
        H = E()(
          E()({}, Object(M.createConfiguration)({ tweetDismissable: !0 })),
          {},
          f()({}, N.b.User, Object(U.a)({ decoration: D.c })),
        ),
        K = n('3XMw'),
        j = n.n(K),
        V = n('tI3i'),
        B = n.n(V),
        G = n('yoO3'),
        Y = n('fTQJ'),
        z = n('7JQg'),
        W = n('7FtF'),
        q = n('v6aA'),
        X = { page: 'settings', section: 'device_following' },
        Q = j.a.e6b2d3de,
        J = j.a.fd6f8a70,
        Z = j.a.a820d092,
        $ = j.a.i2775c58,
        ee = function () {
          return p.a.createElement(x.a, { header: Q, message: J })
        },
        te = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props.location
                  B()(!!e, 'loggedInUserId must be defined')
                  var n = R(e)
                  return p.a.createElement(
                    z.c,
                    { namespace: X },
                    p.a.createElement(
                      G.a,
                      null,
                      p.a.createElement(
                        W.a,
                        { location: t, title: $ },
                        p.a.createElement(Y.a, {
                          entryConfiguration: H,
                          loadingAccessibilityLabel: Z,
                          module: n,
                          renderEmptyState: ee,
                          title: $,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      f()(te, 'contextType', q.a)
      t.default = te
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = n('jtO7'),
        g = n('eb3s'),
        _ = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(s()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(s()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    o = e.confirmationSheetHeadline,
                    i = e.confirmationSheetText,
                    c = e.label
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(b.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? E.a.createElement(g.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: o,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: i,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    EyIn: function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return m
      }),
        n.d(t, 'g', function () {
          return E
        }),
        n.d(t, 'h', function () {
          return b
        }),
        n.d(t, 'i', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return F
        }),
        n.d(t, 'e', function () {
          return P
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return R
        }),
        n.d(t, 'j', function () {
          return x
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('9OUN'),
        i = 'trends',
        c = ('rweb/'.concat(i), n('Ssj5')),
        s = n('yiKp'),
        l = n.n(s),
        u = (n('yH/f'), n('7x/C'), n('JtPf'), n('oEOe')),
        d = n('kGix'),
        f = Object.freeze({
          REQUEST: 'rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST',
          SUCCESS: 'rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS',
          FAILURE: 'rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST',
          SUCCESS: 'rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS',
          FAILURE: 'rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE',
        }),
        p = {
          placeTrendsLocations: [],
          placeTrendsFetchStatus: d.a.NONE,
          woeTrendsLocations: [],
          woeTrendsFetchStatus: d.a.NONE,
        }
      var m = function (e) {
          return e.trends.locations.placeTrendsLocations
        },
        E = function (e) {
          return e.trends.locations.placeTrendsFetchStatus
        },
        b = function (e) {
          return e.trends.locations.woeTrendsLocations
        },
        g = function (e) {
          return e.trends.locations.woeTrendsFetchStatus
        },
        _ = function (e) {
          return function (t, n, a) {
            var r = a.api
            return u.b(t, { params: e, request: r.Settings.fetchPlaceTrendsLocations })({
              actionTypes: f,
              context: 'FETCH_TRENDS_LOCATIONS',
            })
          }
        },
        y = function () {
          return function (e, t, n) {
            n.api
            return g(t()) === d.a.LOADED ? Promise.resolve() : e(v())
          }
        },
        v = function () {
          return function (e, t, n) {
            var a = n.api
            return u.b(e, { params: {}, request: a.Settings.fetchWoeTrendsLocations })({
              actionTypes: h,
              context: 'FETCH_TRENDS_LOCATIONS',
            })
          }
        },
        S = n('m3Bd'),
        w = n.n(S),
        C = (n('z84I'), n('RqPI')),
        A = n('YeIG'),
        T = n('BxsD'),
        k = ['places'],
        L = Object.freeze({
          REQUEST: 'rweb/trends/UPDATE_TRENDS_SETTINGS_REQUEST',
          SUCCESS: 'rweb/trends/UPDATE_TRENDS_SETTINGS_SUCCESS',
          FAILURE: 'rweb/trends/UPDATE_TRENDS_SETTINGS_FAILURE',
        }),
        O = Object.freeze({
          REQUEST: 'rweb/trends/FETCH_TRENDS_SETTINGS_REQUEST',
          SUCCESS: 'rweb/trends/FETCH_TRENDS_SETTINGS_SUCCESS',
          FAILURE: 'rweb/trends/FETCH_TRENDS_SETTINGS_FAILURE',
        }),
        I = { settings: {}, fetchStatus: d.a.NONE }
      var F = function (e) {
          return e.trends.settings && e.trends.settings.settings
        },
        P = function (e) {
          return e.trends.settings && e.trends.settings.fetchStatus
        },
        R = function () {
          return function (e, t) {
            return P(t()) === d.a.LOADED
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var a = n.api
                  return C.n(t())
                    ? u.b(e, { request: a.Settings.fetchPlaceTrendSettings })({
                        actionTypes: O,
                        context: 'FETCH_TRENDS_SETTINGS',
                      })
                    : Promise.resolve()
                })
          }
        },
        x = function (e) {
          return function (t, n, a) {
            var r = a.api
            if (Object(A.a)(e)) return Promise.resolve()
            e.places
            var o = w()(e, k),
              i = l()({}, o)
            return (
              e.places &&
                e.places.length &&
                (i.places = e.places.map(function (e) {
                  return e.place_id
                })),
              u
                .b(t, { params: i, request: r.Settings.updatePlaceTrendSettings })({
                  actionTypes: L,
                  context: 'UPDATE_TRENDS_SETTINGS',
                  meta: e,
                })
                .then(function () {
                  return t(Object(T.g)())
                })
            )
          }
        },
        M = {
          settings: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case O.REQUEST:
                return l()(l()({}, e), {}, { fetchStatus: d.a.LOADING })
              case O.SUCCESS:
                return l()(l()({}, e), {}, { settings: l()(l()({}, e.settings), t.payload), fetchStatus: d.a.LOADED })
              case L.SUCCESS:
                return l()(l()({}, e), {}, { settings: l()(l()({}, e.settings), t.meta), fetchStatus: d.a.LOADED })
              case O.FAILURE:
                return l()(l()({}, e), {}, { fetchStatus: d.a.FAILED })
              default:
                return e
            }
          },
          locations: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case f.REQUEST:
                return l()(l()({}, e), {}, { placeTrendsFetchStatus: d.a.LOADING })
              case f.FAILURE:
                return l()(l()({}, e), {}, { placeTrendsFetchStatus: d.a.FAILED })
              case f.SUCCESS:
                return t.payload
                  ? l()(l()({}, e), {}, { placeTrendsLocations: t.payload, placeTrendsFetchStatus: d.a.LOADED })
                  : e
              case h.REQUEST:
                return l()(l()({}, e), {}, { woeTrendsFetchStatus: d.a.LOADING })
              case h.FAILURE:
                return l()(l()({}, e), {}, { woeTrendsFetchStatus: d.a.FAILED })
              case h.SUCCESS:
                return t.payload
                  ? l()(l()({}, e), {}, { woeTrendsLocations: t.payload, woeTrendsFetchStatus: d.a.LOADED })
                  : e
              default:
                return e
            }
          },
        },
        N = Object(o.c)(M)
      c.a.register(r()({}, i, N))
    },
    FDFL: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return b
      }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return _
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('ho0z'), n('tQbP'), n('hBpG'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('kGix'),
        l = n('ikiw'),
        u = n('Ssj5'),
        d = n('RqPI'),
        f = 'availableLanguages',
        h = 'rweb/'.concat(f),
        p = c.a(h, 'FETCH_AVAILABLE_LANGUAGES'),
        m = { fetchStatus: s.a.NONE, languages: [] }
      function E() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.meta && t.meta.lang ? t.meta.lang : 'en',
          a = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(n),
          r = a
            ? function (e, t) {
                return a.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case p.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: s.a.LOADING })
          case p.FAILURE:
            return i()(i()({}, e), {}, { error: t.payload, fetchStatus: s.a.FAILED })
          case p.SUCCESS:
            return i()(i()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: s.a.LOADED })
          default:
            return e
        }
      }
      u.a.register(r()({}, f, E))
      var b = function (e) {
          return e[f].languages
        },
        g = function (e, t) {
          var n = Object(l.c)(t).toLowerCase(),
            a = e[f].languages.find(function (e) {
              return e.code === n
            })
          return a ? a.name : null
        },
        _ = function () {
          return function (e, t) {
            return t()[f].fetchStatus === s.a.LOADED ? Promise.resolve() : e(y())
          }
        },
        y = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, meta: { lang: Object(d.p)(n()) }, request: r.FeatureSwitch.fetchLanguages })({
              actionTypes: p,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    FR63: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('rHpw'),
        i = n('MWbm')
      var c = o.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(i.a, { style: c.root }, t)
      }
    },
    LXAX: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return m
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('yH/f'), n('oEOe')),
        s = n('Ssj5'),
        l = 'settings/usernames',
        u = 'rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY',
        d = Object.freeze({
          REQUEST: 'rweb/settings/usernames/FETCH_USERNAMES_REQUEST',
          SUCCESS: 'rweb/settings/usernames/FETCH_USERNAMES_SUCCESS',
          FAILURE: 'rweb/settings/usernames/FETCH_USERNAMES_FAILURE',
        }),
        f = { isLoaded: !1 }
      var h = function (e) {
          return e[l]
        },
        p = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(c.b)(t, { params: e, request: r.Settings.usernameAvailable })({
              actionTypes: d,
              context: 'FETCH_SETTINGS_USERNAME_AVAILABLE',
              meta: { username: e.username },
            })
          }
        },
        m = function (e) {
          return { type: u, meta: e }
        }
      s.a.register(
        r()({}, l, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case d.REQUEST:
              return i()(i()({}, t), {}, { isLoading: !0 })
            case d.FAILURE:
              return i()(i()({}, t), {}, { isLoading: !1 })
            case d.SUCCESS:
              return i()(i()(i()({}, t), n.payload), {}, { username: n.meta.username, isLoading: !1 })
            case u:
              return {
                isLoading: !1,
                suggestions: null !== (e = n.meta) && void 0 !== e && e.persistSuggestions ? t.suggestions : void 0,
              }
            default:
              return t
          }
        }),
      )
    },
    La9P: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PreferencesPage', function () {
          return S
        })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('kPZX'),
        i = n('rxPX'),
        c = n('0KEI'),
        s = Object(i.a)()
          .propsFromState(function () {
            return { browserPushAllowed: o.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PREFERENCES_SCREEN',
              ),
            }
          }),
        l = n('3XMw'),
        u = n.n(l),
        d = n('yoO3'),
        f = n('7JQg'),
        h = n('7FtF'),
        p = n('RKmr'),
        m = n('csss'),
        E = u.a.hee41732,
        b = u.a.e75f25a8,
        g = u.a.bcd81cab,
        _ = u.a.da867c58,
        y = u.a.i859a9d3,
        v = { page: 'settings', section: 'preferences' }
      function S(e) {
        var t = e.browserPushAllowed,
          n = e.location
        return r.a.createElement(
          f.c,
          { namespace: v },
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(
              h.a,
              { location: n, title: g },
              r.a.createElement(p.a, {
                description: _,
                learnMoreLabel: y,
                learnMoreLink: 'https://help.twitter.com/managing-your-account/notifications-on-mobile-devices',
              }),
              t ? r.a.createElement(m.a, { label: E, link: '/settings/push_notifications' }) : null,
              r.a.createElement(m.a, { label: b, link: '/settings/email_notifications' }),
            ),
          ),
        )
      }
      var w = s(S)
      t.default = w
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    N9bX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        })
      n('KqXw'), n('WNMA'), n('7xRU')
      var a = 20,
        r = function (e) {
          return (e.match(/.{1,4}/g) || [e]).join(' ')
        }
    },
    NCPH: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationDetailPage', function () {
          return le
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m =
          (n('2G9S'),
          n('tQbP'),
          n('LW0h'),
          n('7x/C'),
          n('ho0z'),
          n('1t7P'),
          n('jQ/y'),
          n('z84I'),
          n('hCOa'),
          n('87if'),
          n('6U7i'),
          n('ly4k'),
          n('ERkP')),
        E = n.n(m),
        b = (n('KqXw'), n('WNMA'), n('dZRF')),
        g = n('rxPX'),
        _ = n('0KEI'),
        y = function (e, t) {
          return t.match.params.appId
        },
        v = function (e, t) {
          return b.a.selectAppsById(e, t.match.params.appId)
        },
        S = Object(g.a)()
          .propsFromState(function () {
            return { appId: y, fetchStatus: b.d, details: v }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('APPLICATION_DETAIL'),
              fetchApplication: b.c,
              revokeApplication: b.a.revokeApplication,
              revokeOauth2Token: b.a.revokeOauth2Token,
            }
          })
          .withAnalytics({ page: 'settings', section: 'application_detail' }),
        w = n('v//M'),
        C = n('3XMw'),
        A = n.n(C),
        T = n('oQhu'),
        k = n('yoO3'),
        L = n('jtO7'),
        O = n('MWbm'),
        I = A.a.da6cdba7,
        F = A.a.ef1d3dcc,
        P = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_handleRevokeApp', function () {
                e.props.onRevoke(e.props.token, e.props.tokenType)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.reportApplicationHref,
                    n = e.revoked
                  return E.a.createElement(
                    O.a,
                    null,
                    n
                      ? E.a.createElement(L.a, { color: 'primary', label: F, link: t })
                      : E.a.createElement(L.a, { color: 'red500', label: I, onPress: this._handleRevokeApp }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent),
        R = n('av9q'),
        x = n('7FtF'),
        M = n('prCu'),
        N = n('jm1/'),
        D = n('FIs5'),
        U = n('t62R'),
        H = n('csss'),
        K = n('6vad'),
        j = n('htQn'),
        V = n('3Ohe'),
        B = n('U+bB'),
        G = A.a.g8d1b99b,
        Y = A.a.eafcc76a,
        z = A.a.j3998a15,
        W = A.a.a6845663,
        q = A.a.b2347f7b,
        X = A.a.e1fda16d,
        Q = A.a.da1201c6,
        J = A.a.gb8d09b9,
        Z = A.a.g6dc09af,
        $ = A.a.a6e6e897,
        ee = A.a.cde3b9ae,
        te = A.a.g0d78139,
        ne = A.a.c9b35b9e,
        ae = A.a.e0191264,
        re = A.a.b73e1e89,
        oe = 'https://support.twitter.com/articles/20170805',
        ie = 'https://support.twitter.com/forms/platform',
        ce = 'oauth1',
        se = 'oauth2',
        le = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(
                s()(e),
                '_getSortedCanViewScopes',
                Object(T.a)(function (e) {
                  return e
                    .filter(function (e) {
                      return 'can_view' === e.category
                    })
                    .sort(function (e, t) {
                      return e.rank - t.rank
                    })
                }),
              ),
              p()(
                s()(e),
                '_getSortedCanDoScopes',
                Object(T.a)(function (e) {
                  return e
                    .filter(function (e) {
                      return 'can_do' === e.category
                    })
                    .sort(function (e, t) {
                      return e.rank - t.rank
                    })
                }),
              ),
              p()(s()(e), '_handleRevokeApp', function (t, n) {
                e._revokeApplication(t, n), e._scribeAction('revoke_access')
              }),
              p()(s()(e), '_handleRetry', function () {
                e._fetchApp()
              }),
              p()(s()(e), '_fetchApp', function () {
                var t = e.props,
                  n = t.appId,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchApplication)(n).catch(a({ showToast: !0 }))
              }),
              p()(s()(e), '_render', function () {
                var t = e.props.details,
                  n = t[0]
                if (!n) return E.a.createElement(D.a, { header: X, message: Q })
                var a = { app_id: n.app_id, app_name: n.name },
                  r = E.a.createElement(
                    O.a,
                    { style: N.a.itemContainer },
                    E.a.createElement(U.b, { color: 'gray700', size: 'subtext2' }, e._renderApprovalDate(n.approved)),
                  )
                return E.a.createElement(
                  O.a,
                  null,
                  E.a.createElement(H.a, {
                    description: n.organization,
                    label: n.name,
                    thumbnail: E.a.createElement(B.a, { accessibilityLabel: '', source: n.img_url, style: N.a.avatar }),
                  }),
                  n.organization_url
                    ? E.a.createElement(L.a, { color: 'primary', label: n.organization_url, link: n.organization_url })
                    : null,
                  E.a.createElement(
                    O.a,
                    { style: N.a.itemContainer },
                    E.a.createElement(U.b, { color: 'gray700', size: 'subtext2' }, n.description),
                  ),
                  r,
                  E.a.createElement(K.b, { text: Z }),
                  t.map(function (t) {
                    return E.a.createElement(
                      O.a,
                      { key: t.token },
                      e._renderPermissions(t),
                      t.ios
                        ? null
                        : E.a.createElement(P, {
                            onRevoke: e._handleRevokeApp,
                            reportApplicationHref: ''.concat(ie, '?').concat(Object(M.stringify)(a)),
                            revoked: !!t.revoked,
                            token: t.token,
                            tokenType: t.token_type || ce,
                          }),
                    )
                  }),
                  n.ios
                    ? E.a.createElement(
                        j.a,
                        { link: oe, style: [N.a.itemContainer, N.a.center] },
                        E.a.createElement(U.b, { color: 'link' }, re),
                      )
                    : null,
                )
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._fetchApp()
                },
              },
              {
                key: '_renderPermissions',
                value: function (e) {
                  if (null != e.scopes && e.token_type === se) {
                    var t = Array.from(e.scopes)
                    return E.a.createElement(
                      O.a,
                      { style: N.a.permissionContainer },
                      this._renderCanViewScopesList(t),
                      this._renderCanDoScopes(t),
                    )
                  }
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    this._renderReadWritePermissions(e),
                    this._renderAdsPermission(e),
                    this._renderEmailPermission(e),
                  )
                },
              },
              {
                key: '_renderCanViewScopesList',
                value: function (e) {
                  var t = this._getSortedCanViewScopes(e)
                  return t.length ? E.a.createElement(R.a, { scopes: t, size: 'subtext2', title: Y }) : null
                },
              },
              {
                key: '_renderCanDoScopes',
                value: function (e) {
                  var t = this._getSortedCanDoScopes(e)
                  return t.length ? E.a.createElement(R.a, { scopes: t, size: 'subtext2', title: z }) : null
                },
              },
              {
                key: '_renderReadWritePermissions',
                value: function (e) {
                  var t = null
                  return (
                    e.can_read_dms ? (t = te) : e.can_write ? (t = ee) : e.can_read && (t = $),
                    t ? E.a.createElement(V.a, { label: t }) : null
                  )
                },
              },
              {
                key: '_renderEmailPermission',
                value: function (e) {
                  return e.email_access ? E.a.createElement(V.a, { label: J }) : null
                },
              },
              {
                key: '_renderAdsPermission',
                value: function (e) {
                  var t = null
                  return (
                    e.has_ads_read_write_access ? (t = ae) : e.has_ads_read_access && (t = ne),
                    t ? E.a.createElement(V.a, { label: t }) : null
                  )
                },
              },
              {
                key: '_renderApprovalDate',
                value: function (e) {
                  var t = new Date(Number(e)),
                    n = W({ date: G(t) })
                  return E.a.createElement('time', { dateTime: t.toISOString() }, n)
                },
              },
              {
                key: '_revokeApplication',
                value: function (e, t) {
                  var n = this.props,
                    a = n.createLocalApiErrorHandler,
                    r = n.revokeApplication,
                    o = n.revokeOauth2Token
                  t === se ? o(e).catch(a({ showToast: !0 })) : r(e).catch(a({ showToast: !0 }))
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe({ component: 'oauth_app', action: 'click', element: e })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.details,
                    n = e.fetchStatus,
                    a = e.location,
                    r = t[0],
                    o = r ? r.name : ''
                  return E.a.createElement(
                    k.a,
                    null,
                    E.a.createElement(
                      x.a,
                      { location: a, title: o },
                      E.a.createElement(w.a, {
                        accessibilityLabel: q,
                        fetchStatus: n,
                        onRequestRetry: this._handleRetry,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = S(le)
    },
    NTtI: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 200 200',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('circle', { cx: '100', cy: '100', fill: '#97E3FF', r: '100' }),
              i.a.createElement('path', {
                d: 'M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z',
                fill: '#005FD1',
              }),
              i.a.createElement('path', {
                d: 'M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z',
                fill: '#1DA1F2',
              }),
              i.a.createElement('ellipse', {
                cx: '123.283',
                cy: '100.225',
                fill: '#97E3FF',
                rx: '6.567',
                ry: '45.075',
              }),
              i.a.createElement('path', {
                d: 'M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z',
                fill: '#71C9F8',
              }),
              i.a.createElement('path', {
                d: 'M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267',
                fill: '#005FD1',
              }),
              i.a.createElement('path', {
                d: 'M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z',
                fill: '#1DA1F2',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 200, height: 200 }), (t.a = l)
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return E
        })
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = (n('hBvt'), n('ERkP')),
        s = n.n(c),
        l = n('rHpw'),
        u = n('csss'),
        d = ['Icon'],
        f = ['link'],
        h = function (e) {
          return s.a.createElement(e.Icon, { style: p.thumbnail })
        },
        p = l.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function m(e) {
        var t = e.Icon,
          n = i()(e, d)
        return s.a.createElement(
          u.a,
          r()({}, n, { thumbnail: s.a.createElement(h, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function E(e) {
        e.link
        var t = i()(e, f)
        return s.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
      }
    },
    PCpk: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TemporaryPasswordScreen', function () {
          return J
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('yiKp'),
        g = n.n(b),
        _ = (n('yH/f'), n('oEOe')),
        y = n('kGix'),
        v = n('Ssj5'),
        S = 'temporaryPassword',
        w = Object.freeze({
          REQUEST: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_REQUEST',
          SUCCESS: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_SUCCESS',
          FAILURE: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_FAILURE',
        }),
        C = { fetchStatus: y.a.NONE }
      v.a.register(
        p()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w.REQUEST:
              return g()(g()({}, e), {}, { fetchStatus: y.a.LOADING })
            case w.SUCCESS:
              var n = t.payload && t.payload.temporary_password
              return g()(g()({}, e), {}, { temporaryPassword: n, fetchStatus: y.a.LOADED })
            case w.FAILURE:
              return g()(g()({}, e), {}, { fetchStatus: y.a.FAILED })
            default:
              return e
          }
        }),
      )
      var A = function (e) {
          return e[S].temporaryPassword
        },
        T = function (e) {
          return e[S].fetchStatus
        },
        k = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(_.b)(e, { request: a.Settings.fetchTemporaryPassword })({
              actionTypes: w,
              context: 'FETCH_TEMPORARY_PASSWORD',
            })
          }
        },
        L = n('1YZw'),
        O = n('rxPX'),
        I = n('0KEI'),
        F = Object(O.a)()
          .propsFromState(function () {
            return { temporaryPassword: A, fetchStatus: T }
          })
          .propsFromActions(function () {
            return {
              addToast: L.b,
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TEMPORARY_PASSWORD_SCREEN',
              ),
              fetchTemporaryPassword: k,
            }
          })
          .withAnalytics({ page: 'settings', section: 'temporary_password' }),
        P = n('v//M'),
        R = n('N9bX'),
        x = n('3XMw'),
        M = n.n(x),
        N = n('yoO3'),
        D = n('7FtF'),
        U = n('XUJi'),
        H = n('t62R'),
        K = n('/yvb'),
        j = n('FR63'),
        V = n('CaKu'),
        B = n('MWbm'),
        G = M.a.j2327f80,
        Y = M.a.fbfeaf8e,
        z = M.a.h4a8bd11,
        W = M.a.f88553c8,
        q = M.a.g247dc1b,
        X = M.a.f2d47b4d,
        Q = M.a.d70fceac,
        J = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_renderContent', function () {
                var t = e.props.temporaryPassword
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    B.a,
                    { style: U.a.centeredContainer },
                    E.a.createElement(
                      H.b,
                      { align: 'center', size: 'title2', weight: 'bold' },
                      t ? Object(R.b)(t) : null,
                    ),
                  ),
                  V.a.isAvailable()
                    ? E.a.createElement(
                        B.a,
                        { style: U.a.centeredContainer },
                        E.a.createElement(
                          K.a,
                          { alignContent: 'center', onPress: e._handleCopy, type: 'brandFilled' },
                          z,
                        ),
                      )
                    : null,
                  E.a.createElement(
                    B.a,
                    { style: U.a.centeredContainer },
                    E.a.createElement(
                      K.a,
                      { alignContent: 'center', onPress: e._handleGenerate, type: 'brandText' },
                      Y,
                    ),
                  ),
                )
              }),
              p()(s()(e), '_handleCopy', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.temporaryPassword
                a && (V.a.setString(a), n({ text: W }))
              }),
              p()(s()(e), '_handleGenerate', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTemporaryPassword)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleGenerate()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return E.a.createElement(
                    N.a,
                    null,
                    E.a.createElement(
                      D.a,
                      { location: n, title: G },
                      E.a.createElement(j.a, null, E.a.createElement(H.b, { color: 'gray700' }, X)),
                      E.a.createElement(j.a, null, E.a.createElement(H.b, { color: 'gray700' }, Q)),
                      E.a.createElement(P.a, {
                        accessibilityLabel: q,
                        fetchStatus: t,
                        onRequestRetry: this._handleGenerate,
                        render: this._renderContent,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = F(J)
    },
    Rdmj: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ge
      })
      var a,
        r = n('97Jx'),
        o = n.n(r),
        i = n('VrFO'),
        c = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        u = n('1Pcy'),
        d = n.n(u),
        f = n('5Yy7'),
        h = n.n(f),
        p = n('2VqO'),
        m = n.n(p),
        E = n('KEM+'),
        b = n.n(E),
        g = (n('2G9S'), n('ERkP')),
        _ = n.n(g),
        y = n('PFE4'),
        v = n('rxPX'),
        S = Object(v.a)().propsFromActions(function () {
          return { cleanupBlockList: y.c }
        }),
        w = n('yiKp'),
        C = n.n(w),
        A = n('EbOo'),
        T = n('1YZw'),
        k = n('G6rE'),
        L = n('0KEI'),
        O = function (e, t) {
          return k.e.select(e, t.userId)
        },
        I = Object(v.a)()
          .propsFromState(function () {
            return { user: O }
          })
          .propsFromActions(function () {
            return {
              addToast: T.b,
              block: k.e.block,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('AUTOBLOCK_BUTTON'),
              unblock: k.e.unblock,
            }
          })
          .withAnalytics({ element: 'autoblock_button' }),
        F = n('3XMw'),
        P = n.n(F),
        R = n('u0B7'),
        x = n('mjJ+'),
        M = n('/yvb'),
        N = n('24HD'),
        D = n('Bwid'),
        U = n('pu5c'),
        H = P.a.cf67f6d5,
        K = P.a.jcba15d2,
        j = P.a.fcd4d489,
        V = P.a.i2b9632d,
        B = P.a.a9fd20be,
        G = I(
          (function (e) {
            h()(n, e)
            var t = m()(n)
            function n() {
              var e
              c()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(d()(e), 'state', { showBlockConfirmation: !1, showRemoveAutoblockConfirmation: !1 }),
                b()(d()(e), '_renderMenu', function (t) {
                  return _.a.createElement(x.a, {
                    items: e._getActionItems(),
                    onCloseRequested: t,
                    shouldCloseOnClick: !0,
                  })
                }),
                b()(d()(e), '_removeAutoblockAction', function () {
                  return { text: K, onClick: e._showRemoveAutoblockConfirmation, Icon: D.a }
                }),
                b()(d()(e), '_blockAction', function () {
                  var t
                  return {
                    text: j({
                      screenName: (null === (t = e.props.user) || void 0 === t ? void 0 : t.screen_name) || '',
                    }),
                    onClick: e._showBlockConfirmation,
                    Icon: U.a,
                    isEmphasized: !0,
                  }
                }),
                b()(d()(e), '_showRemoveAutoblockConfirmation', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !0 })
                }),
                b()(d()(e), '_showBlockConfirmation', function () {
                  e.setState({ showBlockConfirmation: !0 })
                }),
                b()(d()(e), '_handleRemoveAutoblockCancel', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !1 })
                }),
                b()(d()(e), '_handleBlockCancel', function () {
                  e.setState({ showBlockConfirmation: !1 })
                }),
                b()(d()(e), '_handleBlock', function () {
                  e.setState({ showBlockConfirmation: !1 })
                  var t = e.props,
                    n = t.addToast,
                    a = t.block,
                    r = t.createLocalApiErrorHandler
                  a(t.userId).then(function (t) {
                    n({ text: B }), e._scribeAction('block')
                  }, r(A.a))
                }),
                b()(d()(e), '_handleRemoveAutoblock', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !1 })
                  var t = e.props,
                    n = t.addToast,
                    a = t.createLocalApiErrorHandler
                  ;(0, t.unblock)(t.userId).then(function (t) {
                    n({ text: V }), e._scribeAction('unblock')
                  }, a(R.a))
                }),
                e
              )
            }
            return (
              l()(n, [
                {
                  key: 'render',
                  value: function () {
                    return _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement(
                        M.a,
                        { accessibilityLabel: H, renderMenu: this._renderMenu, type: 'destructiveFilled' },
                        H,
                      ),
                      this.state.showBlockConfirmation ? this._renderBlockConfirmationSheet() : null,
                      this.state.showRemoveAutoblockConfirmation
                        ? this._renderRemoveAutoblockConfirmationSheet()
                        : null,
                    )
                  },
                },
                {
                  key: '_getActionItems',
                  value: function () {
                    return [this._removeAutoblockAction(), this._blockAction()]
                  },
                },
                {
                  key: '_renderRemoveAutoblockConfirmationSheet',
                  value: function () {
                    var e,
                      t = (null === (e = this.props.user) || void 0 === e ? void 0 : e.screen_name) || ''
                    return Object(N.j)({
                      confirmation: Object(N.i)(t),
                      onClose: this._handleRemoveAutoblockCancel,
                      handleConfirm: this._handleRemoveAutoblock,
                    })
                  },
                },
                {
                  key: '_renderBlockConfirmationSheet',
                  value: function () {
                    var e,
                      t = (null === (e = this.props.user) || void 0 === e ? void 0 : e.screen_name) || ''
                    return Object(N.j)({
                      confirmation: Object(N.f)(t),
                      onClose: this._handleBlockCancel,
                      handleConfirm: this._handleBlock,
                    })
                  },
                },
                {
                  key: '_scribeAction',
                  value: function (e) {
                    this.props.analytics.scribeAction(e)
                  },
                },
              ]),
              n
            )
          })(_.a.Component),
        ),
        Y = n('PnFR'),
        z = n('8UdT'),
        W = n('S/Qv'),
        q = n('5Y9N'),
        X = function (e, t) {
          return k.e.select(e, t.userId)
        },
        Q = Object(v.a)()
          .propsFromState(function () {
            return { user: X }
          })
          .propsFromActions(function () {
            return {
              addToast: T.b,
              block: k.e.block,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('UNBLOCK_BUTTON'),
              unblock: k.e.unblock,
            }
          })
          .withAnalytics(),
        J = n('Rp9C'),
        Z = P.a.if594962,
        $ = P.a.a6450e83,
        ee = P.a.i2b9632d,
        te = P.a.a9fd20be,
        ne = Q(
          (function (e) {
            h()(n, e)
            var t = m()(n)
            function n() {
              var e
              c()(this, n)
              for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(d()(e), '_handleUnblockToggle', function () {
                  var t = e.props,
                    n = t.addToast,
                    a = t.block,
                    r = t.createLocalApiErrorHandler,
                    o = t.unblock,
                    i = t.user,
                    c = t.userId
                  null != i && i.blocking
                    ? o(c).then(function (t) {
                        n({ text: ee }), e._scribeAction('unblock')
                      }, r(R.a))
                    : a(c).then(function (t) {
                        n({ text: te }), e._scribeAction('block')
                      }, r(A.a))
                }),
                e
              )
            }
            return (
              l()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.user
                    if (e) {
                      var t = e.blocking ? Z : $
                      return _.a.createElement(
                        M.a,
                        {
                          accessibilityLabel: t,
                          onPress: this._handleUnblockToggle,
                          size: 'medium',
                          type: e.blocking ? 'destructiveFilled' : 'destructiveOutlined',
                        },
                        t,
                      )
                    }
                    return null
                  },
                },
                {
                  key: '_scribeAction',
                  value: function (e) {
                    var t = this.props,
                      n = t.analytics,
                      a = t.user,
                      r = a ? [J.a.getUserItem(a)] : []
                    n.scribe({ action: e, data: { items: r } })
                  },
                },
              ]),
              n
            )
          })(_.a.Component),
        ),
        ae = n('Ka9G'),
        re = C()(
          C()({}, Object(q.a)({})),
          {},
          ((a = {}),
          b()(a, z.b.Message, Object(W.a)({})),
          b()(
            a,
            z.b.User,
            Object(ae.a)({
              decoration: function (e) {
                var t = e.isAutoblocking,
                  n = e.userId
                return t ? _.a.createElement(G, { userId: n }) : _.a.createElement(ne, { userId: n })
              },
            }),
          ),
          b()(a, z.b.TimelineCursor, Object(Y.a)({})),
          a),
        ),
        oe = n('oQhu'),
        ie = n('yoO3'),
        ce = n('fTQJ'),
        se = n('7JQg'),
        le = n('eM8g'),
        ue = n('t62R'),
        de = n('FIs5'),
        fe = n('0yYu'),
        he = P.a.a5f32aa2,
        pe = P.a.ef731b13,
        me = P.a.i859a9d3,
        Ee = _.a.createElement(
          P.a.I18NFormatMessage,
          { $i18n: 'ab3bf5a7' },
          _.a.createElement(ue.b, { link: 'https://support.twitter.com/articles/117063' }, P.a.e554ba82),
        ),
        be = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(d()(e), '_getLegacyModule', function () {
                var t = e.props.blockType
                return e._getMemoizedModule(t)
              }),
              b()(
                d()(e),
                '_getMemoizedModule',
                Object(oe.a)(function (e) {
                  return Object(y.b)(e)
                }),
              ),
              b()(d()(e), '_getEmptyStateRenderer', function () {
                var t = e.props,
                  n = t.blockType,
                  a = t.emptyStateMessage,
                  r = t.emptyStateTitle,
                  o = t.supportUrl
                return e._getMemoizedEmptyStateRenderer(n, o, r, a)
              }),
              b()(
                d()(e),
                '_getMemoizedEmptyStateRenderer',
                Object(oe.a)(function (e, t, n, a) {
                  return function () {
                    var e = _.a.createElement('div', null, a, ' ', t && _.a.createElement(ue.b, { link: t }, me))
                    return _.a.createElement(de.a, { header: n, message: e })
                  }
                }),
              ),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(0, this.props.cleanupBlockList)(this._getLegacyModule())
                },
              },
              {
                key: 'render',
                value: function () {
                  return _.a.createElement(
                    ie.a,
                    null,
                    'autoblock' === this.props.blockType
                      ? null
                      : _.a.createElement(
                          'div',
                          null,
                          _.a.createElement(le.a, null, Ee),
                          _.a.createElement(fe.a, null),
                        ),
                    _.a.createElement(ce.a, {
                      entryConfiguration: re,
                      loadingAccessibilityLabel: pe,
                      module: this._getLegacyModule(),
                      renderEmptyState: this._getEmptyStateRenderer(),
                      title: he,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        ge = function (e) {
          var t = e.blockType,
            n = e.emptyStateMessage,
            a = e.emptyStateTitle,
            r = e.scribeNamespace,
            i = e.supportUrl
          return S(function (e) {
            return _.a.createElement(
              se.c,
              { namespace: r },
              _.a.createElement(
                be,
                o()({}, e, { blockType: t, emptyStateMessage: n, emptyStateTitle: a, supportUrl: i }),
              ),
            )
          })
        }
    },
    'S/HT': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return m
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('849X'), n('TJCb'), n('kGix')),
        s = n('Ssj5'),
        l = 'countryNames',
        u = { fetchStatus: c.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(l, '_REQUEST'), FAILURE: ''.concat(l, '_FAILURE'), SUCCESS: ''.concat(l, '_SUCCESS') },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return i()(i()({}, e), {}, { fetchStatus: c.a.LOADING })
            case d.FAILURE:
              return i()(i()({}, e), {}, { fetchStatus: c.a.NONE })
            case d.SUCCESS:
              return i()(i()({}, e), {}, { countries: t.payload, fetchStatus: c.a.LOADED })
            default:
              return e
          }
        }
      s.a.register(r()({}, l, f))
      var h = function (e) {
          return e.countryNames.countries
        },
        p = function (e, t) {
          var n = t && t.toUpperCase()
          return e.countryNames.countries[n]
        },
        m = function e(t) {
          return function (a, r) {
            return r().countryNames.fetchStatus === c.a.LOADED
              ? Promise.resolve()
              : (a({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return n.e(253).then(n.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return n.e(254).then(n.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return n.e(255).then(n.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return n.e(256).then(n.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return n.e(257).then(n.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return n.e(258).then(n.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return n.e(259).then(n.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return n.e(260).then(n.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return n.e(262).then(n.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return n.e(261).then(n.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return n.e(263).then(n.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return n.e(264).then(n.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return n.e(265).then(n.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return n.e(266).then(n.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return n.e(267).then(n.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return n.e(268).then(n.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return n.e(269).then(n.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return n.e(270).then(n.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return n.e(271).then(n.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return n.e(272).then(n.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return n.e(273).then(n.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return n.e(274).then(n.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return n.e(275).then(n.t.bind(null, '9fGX', 3))
                    case 'id':
                      return n.e(276).then(n.t.bind(null, 'elf3', 3))
                    case 'it':
                      return n.e(277).then(n.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return n.e(278).then(n.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return n.e(279).then(n.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return n.e(280).then(n.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return n.e(281).then(n.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return n.e(282).then(n.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return n.e(283).then(n.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return n.e(284).then(n.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return n.e(285).then(n.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return n.e(286).then(n.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return n.e(287).then(n.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return n.e(288).then(n.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return n.e(289).then(n.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return n.e(290).then(n.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return n.e(291).then(n.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return n.e(292).then(n.t.bind(null, '8KkY', 3))
                    case 'th':
                      return n.e(293).then(n.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return n.e(294).then(n.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return n.e(295).then(n.t.bind(null, '62bs', 3))
                    case 'ur':
                      return n.e(296).then(n.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return n.e(298).then(n.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return n.e(297).then(n.t.bind(null, 'YXaK', 3))
                    default:
                      return Promise.reject(
                        new Error('Tried to import country names for unknown language key: '.concat(e)),
                      )
                  }
                })(t)
                  .then(function (e) {
                    var n = e.main[t].localeDisplayNames.territories
                    a({ type: d.SUCCESS, payload: n })
                  })
                  .catch(function () {
                    a('en' === t ? { type: d.FAILURE } : e('en'))
                  }))
          }
        }
    },
    TetP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTrendsScreen', function () {
          return oe
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ho0z'), n('ERkP')),
        E = n.n(m),
        b = n('k49u'),
        g = n('P1r1'),
        _ = n('EyIn'),
        y = n('+OgG'),
        v = n('rxPX'),
        S = n('0KEI'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { allSettings: g.g, placeTrendSettings: _.d, placeTrendSettingsFetchStatus: _.e }
          })
          .adjustStateProps(function (e) {
            var t = e.allSettings,
              n = e.placeTrendSettings,
              a = e.placeTrendSettingsFetchStatus
            return {
              trendLocation: t.trend_location,
              personalizedTrends: t.personalized_trends,
              placeTrendSettings: n,
              placeTrendSettingsFetchStatus: a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRENDS_SCREEN',
              ),
              fetchPlaceTrendSettingsIfNeeded: _.a,
              updateWoeTrendSettings: y.a,
              updatePlaceTrendSettings: _.j,
            }
          })
          .withAnalytics({ page: 'guide', section: 'settings' }),
        C = n('v//M'),
        A = n('LVU8'),
        T = n('jHSc'),
        k = n('3XMw'),
        L = n.n(k),
        O = n('OySi'),
        I = 'currentLocation',
        F = 'exploreLocations',
        P = n('MWbm'),
        R = n('v6aA'),
        x = n('e0ey'),
        M = n('0yYu'),
        N = n('csss'),
        D = n('6vad'),
        U = L.a.bc7fd99f,
        H = L.a.c5f4befa,
        K = L.a.j018f2a1,
        j = L.a.e2f1665f,
        V = L.a.e5e88f4f,
        B = L.a.jaaa8984,
        G = L.a.i4d54b0e,
        Y = L.a.df9f03c8,
        z = L.a.c6cf5c7d,
        W = L.a.a55db872,
        q = L.a.h0b5152e,
        X = L.a.dfeada5d,
        Q = 'Worldwide',
        J = L.a.ac854308,
        Z = L.a.d429c942,
        $ = 'is_unified_trends',
        ee = 'use_current_location',
        te = 'use_personalized_trends',
        ne = '/settings/trends/location',
        ae = '/settings/explore/location',
        re = '/settings/explore',
        oe = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(
                s()(e),
                '_usePlaceTrendSettings',
                e.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints'),
              ),
              p()(
                s()(e),
                '_policySectionUrl',
                e.context.featureSwitches.getStringValue('explore_settings_trends_policy_url'),
              ),
              p()(s()(e), '_handleRetry', function () {
                e._fetchPlaceTrendSettingsIfNeeded()
              }),
              p()(s()(e), '_fetchPlaceTrendSettingsIfNeeded', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchPlaceTrendSettingsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              p()(s()(e), '_handleItemChanged', function (t, n) {
                var a,
                  r = e.props,
                  o = r.analytics,
                  i = r.createLocalApiErrorHandler,
                  c = r.updatePlaceTrendSettings,
                  s = r.updateWoeTrendSettings,
                  l = p()({}, t, n),
                  u = ((a = {}), p()(a, b.a.AppInReadOnlyMode, { customAction: A.b }), p()(a, 'showToast', !0), a)
                e._usePlaceTrendSettings ? c(l).catch(i(u)) : s(l).catch(i(u)),
                  o.scribe({ element: 'personalized_trends', action: 'toggle' })
              }),
              p()(s()(e), '_renderWoeContent', function () {
                var t = e.props,
                  n = t.personalizedTrends,
                  a = t.trendLocation,
                  r = (a && a[0] && a[0].name) || Q
                return E.a.createElement(
                  P.a,
                  null,
                  E.a.createElement(x.a, {
                    checked: n,
                    helpText: Y,
                    label: G,
                    name: 'personalized_trends',
                    onChange: e._handleItemChanged,
                  }),
                  !n &&
                    E.a.createElement(
                      P.a,
                      null,
                      E.a.createElement(M.a, null),
                      E.a.createElement(N.a, { description: r, label: q, link: ne }),
                    ),
                )
              }),
              p()(s()(e), '_renderPlaceLoader', function () {
                var t = e.props.placeTrendSettingsFetchStatus
                return E.a.createElement(C.a, {
                  accessibilityLabel: U,
                  fetchStatus: t,
                  onRequestRetry: e._handleRetry,
                  render: e._renderPlaceContent,
                })
              }),
              p()(s()(e), '_renderPlaceContent', function () {
                var t = e.props,
                  n = t.location,
                  a = t.placeTrendSettings,
                  r = n.pathname === re,
                  o = a.places && a.places[0] && a.places[0].name,
                  i = !r || !a[$],
                  c = r ? ae : ne
                return E.a.createElement(
                  P.a,
                  null,
                  E.a.createElement(D.b, { text: B }),
                  E.a.createElement(x.a, {
                    checked: a[ee],
                    helpText: V,
                    label: j,
                    name: ee,
                    onChange: e._handleItemChanged,
                    testID: I,
                  }),
                  !a[ee] &&
                    E.a.createElement(
                      P.a,
                      null,
                      E.a.createElement(N.a, { description: o, label: X, link: c, testID: F }),
                    ),
                  i &&
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(M.a, null),
                      E.a.createElement(D.b, { text: W }),
                      E.a.createElement(x.a, {
                        checked: a[te],
                        helpText: z,
                        label: G,
                        name: te,
                        onChange: e._handleItemChanged,
                      }),
                    ),
                )
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._usePlaceTrendSettings && this._fetchPlaceTrendSettingsIfNeeded()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.location.pathname === re,
                    a = this._usePlaceTrendSettings && n ? K : H
                  return E.a.createElement(
                    T.b,
                    { history: t, title: a },
                    this._usePlaceTrendSettings ? this._renderPlaceLoader() : this._renderWoeContent(),
                    this._policySectionUrl ? this._renderPolicySection() : null,
                  )
                },
              },
              {
                key: '_renderPolicySection',
                value: function () {
                  return E.a.createElement(
                    P.a,
                    null,
                    E.a.createElement(M.a, null),
                    E.a.createElement(D.b, { text: J }),
                    E.a.createElement(O.a, { label: Z, link: this._policySectionUrl }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(oe, 'contextType', R.a)
      t.default = w(oe)
    },
    UbIW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsContactsScreen', function () {
          return q
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('P1r1'),
        g = n('hqKg'),
        _ = n('0KEI'),
        y = n('oEGd'),
        v = Object(g.createSelector)(b.g, function (e) {
          return {
            discoverableByEmail: e.discoverable_by_email,
            discoverableByMobilePhone: e.discoverable_by_mobile_phone,
          }
        }),
        S = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_CONTACTS_SCREEN',
          ),
          deleteContacts: b.b,
          updateSettings: b.M,
        },
        w = Object(y.f)(v, S),
        C = n('3XMw'),
        A = n.n(C),
        T = n('yoO3'),
        k = n('7JQg'),
        L = n('7FtF'),
        O = n('RKmr'),
        I = n('6vad'),
        F = n('e0ey'),
        P = n('0yYu'),
        R = n('csss'),
        x = A.a.fd4d9068,
        M = A.a.ab987f3b,
        N = A.a.b033248c,
        D = A.a.a904e0ee,
        U = A.a.ebc41952,
        H = A.a.f40a6338,
        K = A.a.ac9314aa,
        j = A.a.d86a220e,
        V = 'https://help.twitter.com/safety-and-security/email-and-phone-discoverability-settings',
        B = A.a.ac77c66c,
        G = A.a.bbcafbd9,
        Y = A.a.jadf483e,
        z = A.a.i859a9d3,
        W = { page: 'settings', section: 'contacts' },
        q = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_handleItemChanged', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateSettings)(p()({}, t, n)).catch(r({ showToast: !0 }))
              }),
              p()(s()(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.deleteContacts)().catch(n({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.discoverableByEmail,
                    n = e.discoverableByMobilePhone,
                    a = e.location
                  return E.a.createElement(
                    k.c,
                    { namespace: W },
                    E.a.createElement(
                      T.a,
                      null,
                      E.a.createElement(
                        L.a,
                        { location: a, title: x },
                        E.a.createElement(O.a, { description: M }),
                        E.a.createElement(I.b, { text: N }),
                        E.a.createElement(O.a, { description: D }),
                        E.a.createElement(F.a, {
                          checked: t,
                          helpText: H,
                          label: U,
                          learnMoreLink: V,
                          name: 'discoverable_by_email',
                          onChange: this._handleItemChanged,
                        }),
                        E.a.createElement(F.a, {
                          checked: n,
                          helpText: j,
                          label: K,
                          learnMoreLink: V,
                          name: 'discoverable_by_mobile_phone',
                          onChange: this._handleItemChanged,
                        }),
                        E.a.createElement(P.a, null),
                        E.a.createElement(I.b, { text: B }),
                        E.a.createElement(O.a, {
                          description: Y,
                          learnMoreLabel: z,
                          learnMoreLink:
                            'https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends',
                        }),
                        E.a.createElement(R.a, { label: G, link: '/settings/contacts_dashboard' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = w(q)
    },
    VaVF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BackupCodeScreen', function () {
          return Z
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('KqXw'), n('WNMA'), n('7xRU'), n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('yiKp'),
        g = n.n(b),
        _ = (n('yH/f'), n('oEOe')),
        y = n('kGix'),
        v = n('Ssj5'),
        S = 'backupCode',
        w = Object.freeze({
          REQUEST: 'rweb/backupCode/FETCH_BACKUP_CODE_REQUEST',
          SUCCESS: 'rweb/backupCode/FETCH_BACKUP_CODE_SUCCESS',
          FAILURE: 'rweb/backupCode/FETCH_BACKUP_CODE_FAILURE',
        }),
        C = { fetchStatus: y.a.NONE }
      v.a.register(
        p()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w.REQUEST:
              return g()(g()({}, e), {}, { fetchStatus: y.a.LOADING })
            case w.SUCCESS:
              var n = t.payload && t.payload.codes
              return g()(g()({}, e), {}, { backupCode: n && n[0], fetchStatus: y.a.LOADED })
            case w.FAILURE:
              return g()(g()({}, e), {}, { fetchStatus: y.a.FAILED })
            default:
              return e
          }
        }),
      )
      var A = function (e) {
          return e.backupCode.backupCode
        },
        T = function (e) {
          return e.backupCode.fetchStatus
        },
        k = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(_.b)(e, { request: a.Settings.fetchBackupCode })({
              actionTypes: w,
              context: 'FETCH_BACKUP_CODE',
            })
          }
        },
        L = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(_.b)(e, { request: a.Settings.fetchNewBackupCode })({
              actionTypes: w,
              context: 'FETCH_BACKUP_CODE',
            })
          }
        },
        O = n('1YZw'),
        I = n('rxPX'),
        F = n('0KEI'),
        P = Object(I.a)()
          .propsFromState(function () {
            return { backupCode: A, fetchStatus: T }
          })
          .propsFromActions(function () {
            return {
              addToast: O.b,
              createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_BACKUP_CODE_SCREEN',
              ),
              fetchBackupCode: k,
              fetchNewBackupCode: L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'backup_code' }),
        R = n('v//M'),
        x = n('yoO3'),
        M = n('7FtF'),
        N = n('XUJi'),
        D = n('t62R'),
        U = n('/yvb'),
        H = n('FR63'),
        K = n('CaKu'),
        j = n('MWbm'),
        V = n('3XMw'),
        B = n.n(V),
        G = B.a.i3bb3f78,
        Y = B.a.ec6a76ef,
        z = B.a.f2c3c31c,
        W = B.a.f88553c8,
        q = B.a.e8016b64,
        X = B.a.c4ca22bc,
        Q = function (e) {
          return (e.match(/.{1,4}/g) || [e]).join(' ')
        },
        J = E.a.createElement(D.b, {
          link: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
        }),
        Z = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_renderContent', function () {
                var t = e.props.backupCode
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    j.a,
                    { style: N.a.centeredContainer },
                    E.a.createElement(D.b, { align: 'center', size: 'title2', weight: 'bold' }, t ? Q(t) : null),
                  ),
                  K.a.isAvailable()
                    ? E.a.createElement(
                        j.a,
                        { style: N.a.centeredContainer },
                        E.a.createElement(
                          U.a,
                          { alignContent: 'center', onPress: e._handleCopy, type: 'brandFilled' },
                          z,
                        ),
                      )
                    : null,
                  E.a.createElement(
                    j.a,
                    { style: N.a.centeredContainer },
                    E.a.createElement(
                      U.a,
                      { alignContent: 'center', onPress: e._handleGenerate, type: 'brandText' },
                      Y,
                    ),
                  ),
                )
              }),
              p()(s()(e), '_handleCopy', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.backupCode
                a && (K.a.setString(a), n({ text: W }))
              }),
              p()(s()(e), '_handleGenerate', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchNewBackupCode)().catch(n())
              }),
              p()(s()(e), '_handleRetry', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBackupCode)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleRetry()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return E.a.createElement(
                    x.a,
                    null,
                    E.a.createElement(
                      M.a,
                      { location: n, title: G },
                      E.a.createElement(H.a, null, E.a.createElement(D.b, { color: 'gray700' }, X)),
                      E.a.createElement(
                        H.a,
                        null,
                        E.a.createElement(
                          D.b,
                          { color: 'gray700' },
                          E.a.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'a4455c04' },
                            E.a.cloneElement(J, null, B.a.ecb6fccf),
                          ),
                        ),
                      ),
                      E.a.createElement(R.a, {
                        accessibilityLabel: q,
                        fetchStatus: t,
                        onRequestRetry: this._handleRetry,
                        render: this._renderContent,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = P(Z)
    },
    W0Ti: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContentPreferencesPage', function () {
          return V
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('NeAX'),
        g = n('rxPX'),
        _ = Object(g.a)()
          .propsFromState(function () {
            return { personalizationSettings: b.selectUserPreferences }
          })
          .withAnalytics({ page: 'settings', section: 'timeline' }),
        y = n('uD2z'),
        v = n('3XMw'),
        S = n.n(v),
        w = n('yoO3'),
        C = n('7FtF'),
        A = 'exploreHeader',
        T = n('v6aA'),
        k = n('6vad'),
        L = n('csss'),
        O = n('0yYu'),
        I = n('RKmr'),
        F = S.a.aeddb289,
        P = S.a.fcf3e54b,
        R = S.a.hfb77cf5,
        x = S.a.d495680d,
        M = S.a.f350f0c0,
        N = S.a.cb9bb63f,
        D = S.a.h1ef00db,
        U = S.a.e8f57e07,
        H = S.a.e8f57e07,
        K = S.a.hfc86556,
        j = S.a.a5f32aa2,
        V = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(
                s()(e),
                '_contentLanguageSettingsEnabled',
                e.context.featureSwitches.isTrue('content_language_setting_enabled'),
              ),
              p()(
                s()(e),
                '_trendsLabel',
                e.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                  ? S.a.j018f2a1
                  : S.a.c5f4befa,
              ),
              e
            )
          }
          return (
            i()(n, [
              {
                key: '_renderPersonalizationDescription',
                value: function () {
                  var e = this.props.personalizationSettings
                  return Object(y.a)(e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.location,
                    t = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends'
                  return E.a.createElement(
                    w.a,
                    null,
                    E.a.createElement(
                      C.a,
                      { location: e, screenType: 'primaryDetail', title: F },
                      E.a.createElement(k.b, { testID: A, text: P }),
                      E.a.createElement(L.a, { label: D, link: '/settings/search' }),
                      E.a.createElement(L.a, { label: this._trendsLabel, link: t }),
                      this._contentLanguageSettingsEnabled
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(O.a, null),
                            E.a.createElement(k.b, { text: x }),
                            E.a.createElement(L.a, { label: M, link: '/i/flow/language_selector' }),
                            E.a.createElement(I.a, { description: N }),
                          )
                        : null,
                      E.a.createElement(O.a, null),
                      E.a.createElement(k.b, { text: R }),
                      E.a.createElement(L.a, { label: K, link: '/settings/mute' }),
                      E.a.createElement(L.a, { label: j, link: '/settings/blocked/all' }),
                      E.a.createElement(O.a, null),
                      E.a.createElement(k.b, { text: U }),
                      E.a.createElement(L.a, {
                        description: this._renderPersonalizationDescription(),
                        label: H,
                        link: '/settings/account/personalization',
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(V, 'contextType', T.a)
      t.default = _(V)
    },
    X1GS: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        o = n('yoO3'),
        i = n('7JQg'),
        c = n('7FtF'),
        s = n('iCwC'),
        l = n('MWbm'),
        u = n('6vad'),
        d = n('t62R'),
        f = n('3XMw'),
        h = n.n(f),
        p = h.a.g0ec0beb,
        m = h.a.g89f4613,
        E = { page: 'settings', section: 'deactivate_success' }
      t.default = function (e) {
        var t = e.location
        return r.a.createElement(
          i.c,
          { namespace: E },
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              c.a,
              { location: t, screenType: 'primaryDetail', title: p },
              r.a.createElement(u.b, { text: m }),
              r.a.createElement(
                l.a,
                { style: s.a.viewItem },
                r.a.createElement(
                  d.b,
                  { color: 'gray700', size: 'subtext2' },
                  r.a.createElement(h.a.I18NFormatMessage, { $i18n: 'if2bb997' }),
                ),
              ),
            ),
          ),
        )
      }
    },
    X8EX: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return v
      }),
        n.d(t, 'j', function () {
          return S
        }),
        n.d(t, 'h', function () {
          return w
        }),
        n.d(t, 'i', function () {
          return C
        }),
        n.d(t, 'f', function () {
          return A
        }),
        n.d(t, 'd', function () {
          return T
        }),
        n.d(t, 'e', function () {
          return I
        }),
        n.d(t, 'c', function () {
          return M
        }),
        n.d(t, 'k', function () {
          return N
        }),
        n.d(t, 'a', function () {
          return D
        }),
        n.d(t, 'b', function () {
          return U
        }),
        n.d(t, 'l', function () {
          return H
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('hBpG'), n('7x/C'), n('JtPf'), n('7xRU'), n('oEOe')),
        s = n('kGix'),
        l = n('Ssj5'),
        u = 'mutedKeywords',
        d = 'rweb.mutedKeywords',
        f = 6048e5,
        h = 'rweb/'.concat(u),
        p = c.a(h, 'FETCH_DISCOURAGED_KEYWORDS'),
        m = c.a(h, 'FETCH_MUTED_KEYWORDS'),
        E = c.a(h, 'ADD_MUTED_KEYWORD'),
        b = c.a(h, 'DELETE_MUTED_KEYWORD'),
        g = c.a(h, 'UPDATE_MUTED_KEYWORD'),
        _ = {
          defaultOptions: {
            id: '',
            keyword: '',
            mute_notifications_option: 'following',
            mute_home_timeline: !0,
            time_duration: 'forever',
          },
          defaultOptionsLoaded: !1,
          discouragedKeywords: [],
          fetchStatus: s.a.NONE,
          mutedKeywords: [],
        }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case L:
          case p.SUCCESS:
            return i()(i()({}, e), {}, { discouragedKeywords: t.payload.discouraged_keywords })
          case m.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: s.a.LOADING })
          case m.FAILURE:
            return i()(i()({}, e), {}, { error: t.payload, fetchStatus: s.a.FAILED })
          case m.SUCCESS:
            return i()(
              i()({}, e),
              {},
              { mutedKeywords: t.payload.muted_keywords, error: null, fetchStatus: s.a.LOADED },
            )
          case E.SUCCESS:
          case b.SUCCESS:
          case g.SUCCESS:
            return i()(i()({}, e), {}, { mutedKeywords: t.payload.muted_keywords })
          case P:
            return i()(i()({}, e), {}, { defaultOptions: t.payload.default_options })
          case R:
            return i()(i()({}, e), {}, { defaultOptionsLoaded: !0 })
          default:
            return e
        }
      }
      var v = function (e) {
          return e.mutedKeywords.discouragedKeywords
        },
        S = function (e) {
          return e.mutedKeywords.mutedKeywords
        },
        w = function (e) {
          return e.mutedKeywords.fetchStatus
        },
        C = function (e, t) {
          return e.mutedKeywords.mutedKeywords.find(function (e) {
            return e.id === t
          })
        },
        A = function (e, t) {
          return e.mutedKeywords.defaultOptions
        },
        T = function () {
          return function (e, t, n) {
            var a = n.userPersistence
            return v(t()).length
              ? Promise.resolve()
              : a.get(d, f).then(function (n) {
                  var r = (n || {}).discouragedKeywords
                  return r && r.length
                    ? (e(O(r)), Promise.resolve())
                    : e(k()).then(function () {
                        return a.set(d, { discouragedKeywords: v(t()) })
                      })
                })
          }
        },
        k = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.MuteKeywordSettings.fetchDiscouragedKeywords })({
              actionTypes: p,
              context: 'FETCH_DISCOURAGED_KEYWORDS',
            })
          }
        },
        L = ''.concat(h, '/INIT_DISCOURAGED_KEYWORDS'),
        O = function (e) {
          return { type: L, payload: { discouraged_keywords: e } }
        },
        I = function () {
          return function (e, t) {
            return w(t()) === s.a.LOADED ? Promise.resolve() : e(F())
          }
        },
        F = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.MuteKeywordSettings.fetchMutedKeywords })({
              actionTypes: m,
              context: 'FETCH_MUTED_KEYWORDS',
            })
          }
        },
        P = ''.concat(h, '/SET_DEFAULT_OPTIONS'),
        R = ''.concat(h, '/DEFAULT_OPTIONS_LOADED'),
        x = function (e) {
          return { type: P, payload: { default_options: e } }
        },
        M = function () {
          return function (e, t, n) {
            var a = n.userPersistence
            return t().mutedKeywords.defaultOptionsLoaded
              ? Promise.resolve()
              : a.get(d, f).then(function (t) {
                  if (t && t.defaultOptions) {
                    var n = t.defaultOptions
                    e(x(n))
                  }
                  e({ type: R })
                })
          }
        },
        N = function (e) {
          return function (t, n, a) {
            var r = a.userPersistence
            return t(x(e)), r.set(d, { defaultOptions: e })
          }
        },
        D = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.MuteKeywordSettings.addMutedKeyword })({
              actionTypes: E,
              context: 'ACTION_ADD_MUTED_KEYWORD',
              meta: { params: e },
            })
          }
        },
        U = function (e) {
          return function (t, n, a) {
            var r = a.api,
              o = { ids: e.join(',') }
            return c.b(t, { params: o, request: r.MuteKeywordSettings.deleteMutedKeyword })({
              actionTypes: b,
              context: 'ACTION_DELETE_MUTED_KEYWORD',
              meta: { ids: e },
            })
          }
        },
        H = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.MuteKeywordSettings.updateMutedKeyword })({
              actionTypes: g,
              context: 'ACTION_UPDATE_MUTED_KEYWORD',
              meta: { params: e },
            })
          }
        }
      l.a.register(r()({}, u, y))
    },
    XFGu: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('PFE4'),
        r = n('Rdmj'),
        o = n('3XMw'),
        i = n.n(o),
        c = i.a.b90c89c3,
        s = i.a.f587e41e
      t.default = Object(r.a)({
        scribeNamespace: { page: 'blocked', section: 'all_blocked_accounts' },
        blockType: a.a.All,
        emptyStateTitle: s,
        emptyStateMessage: c,
        supportUrl: 'https://support.twitter.com/articles/117063',
      })
    },
    XUJi: function (e, t, n) {
      'use strict'
      var a = n('rHpw').a.create(function (e) {
        return { centeredContainer: { padding: e.spaces.space12, flexDirection: 'row', justifyContent: 'center' } }
      })
      t.a = a
    },
    Y5Sz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'bouncerEnrollmentUrl', function () {
          return P
        }),
        n.d(t, 'EnrollmentScreen', function () {
          return x
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m =
          (n('lTEL'),
          n('7x/C'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('2G9S'),
          n('KqXw'),
          n('LJOr'),
          n('MvUL'),
          n('ERkP')),
        E = n.n(m),
        b = n('wvRX'),
        g = n('hqKg'),
        _ = n('QK5w'),
        y = n('0KEI'),
        v = n('oEGd'),
        S = Object(g.createSelector)(
          _.a,
          function (e, t) {
            return t.location && t.location.state && t.location.state.bounce_location
          },
          b.f,
          function (e, t, n) {
            return { canGoBack: e, bounceLocation: t, fetchStatus: n }
          },
        ),
        w = {
          createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_LOGIN_VERIFICATION_ENROLLMENT_CONTEXT',
          ),
          fetchLoginVerificationSettings: b.e,
        },
        C = Object(v.f)(S, w),
        A = n('kGix'),
        T = n('jHSc'),
        k = n('bPFD'),
        L = n('rHpw'),
        O = n('2qJZ'),
        I = '/settings/account/login_verification',
        F = 'initiated_in_iframe=true',
        P = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location,
            n = t.host === O.a ? O.a : O.b,
            a = 'https://'.concat(n),
            r = new window.URL(''.concat(a).concat(e)),
            o = r.search ? '&' : '?'
          return (r.search = ''.concat(r.search).concat(o).concat(F)), r.href
        },
        R = function (e, t, n) {
          return e !== A.a.LOADED || !t || !n
        },
        x = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            r()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_handleClose', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchLoginVerificationSettings,
                  r = e.history
                n().catch(t())
                var o = window.history.length
                r.go(Math.min(-1, a._initialHistoryLength - o - 1))
              }),
              p()(s()(a), '_messageHandler', function (e) {
                var t = e.data,
                  n = e.origin
                if ((n === 'https://'.concat(O.b) || n === 'https://'.concat(O.a)) && t.bouncer)
                  switch (t.event) {
                    case '2fa_complete':
                      var r = a.props,
                        o = r.createLocalApiErrorHandler,
                        i = r.fetchLoginVerificationSettings,
                        c = r.history
                      i().catch(o()), c.replace('/settings/account/login_verification/backup_code')
                      break
                    case 'complete':
                    case 'cancel':
                      a._handleClose()
                  }
              })
            var o = a.props,
              i = o.bounceLocation,
              c = o.canGoBack,
              l = o.fetchStatus,
              u = o.history
            return R(l, c, i) && u.replace(I), a
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e
                  ;(e = this._messageHandler),
                    window.addEventListener('message', e),
                    (this._initialHistoryLength = window.history.length)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e
                  ;(e = this._messageHandler), window.removeEventListener('message', e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.bounceLocation,
                    n = e.canGoBack,
                    a = e.fetchStatus,
                    r = e.history
                  return R(a, n, t)
                    ? null
                    : E.a.createElement(
                        T.b,
                        { backButtonType: 'close', backLocation: I, history: r, onBackClick: this._handleClose },
                        E.a.createElement(k.a, { allowForms: !0, src: P(t), style: [L.a.absoluteFill, M.iframe] }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        M = L.a.create(function (e) {
          return { iframe: { backgroundColor: e.colors.cellBackground, paddingLeft: e.spaces.space16 } }
        })
      t.default = C(x)
    },
    YWNO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationAdvancedFiltersPage', function () {
          return re
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('yiKp'),
        g = n.n(b),
        _ = (n('7x/C'), n('JtPf'), n('oEOe')),
        y = n('kGix'),
        v = n('Ssj5'),
        S = 'notificationFilters',
        w = 'rweb/'.concat(S),
        C = 'rweb.'.concat(S),
        A = _.a(w, 'FETCH_NOTIFICATION_FILTERS'),
        T = _.a(w, 'ENABLE_NOTIFICATION_FILTER'),
        k = _.a(w, 'DISABLE_NOTIFICATION_FILTER'),
        L = { fetchStatus: y.a.NONE, notificationFilters: {} }
      v.a.register(
        p()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case A.REQUEST:
              return g()(g()({}, e), {}, { fetchStatus: y.a.LOADING })
            case A.FAILURE:
              return g()(g()({}, e), {}, { fetchStatus: y.a.FAILED })
            case A.SUCCESS:
              return g()(g()({}, e), {}, { notificationFilters: t.payload, fetchStatus: y.a.LOADED })
            case T.REQUEST:
              return g()(
                g()({}, e),
                {},
                { notificationFilters: g()(g()({}, e.notificationFilters), {}, p()({}, t.meta.filterName, !0)) },
              )
            case k.REQUEST:
              return g()(
                g()({}, e),
                {},
                { notificationFilters: g()(g()({}, e.notificationFilters), {}, p()({}, t.meta.filterName, !1)) },
              )
            default:
              return e
          }
        }),
      )
      var O = function (e) {
          return e[S].notificationFilters
        },
        I = function (e) {
          return e[S].fetchStatus
        },
        F = function () {
          return function (e, t, n) {
            n.api
            var a = n.userPersistence
            return I(t()) === y.a.LOADED
              ? Promise.resolve()
              : a.get(C, 24e4).then(function (t) {
                  return e(t ? { payload: t, type: A.SUCCESS } : P())
                })
          }
        },
        P = function () {
          return function (e, t, n) {
            var a = n.api,
              r = n.userPersistence
            return _.b(e, { request: a.Settings.fetchNotificationFilters })({
              actionTypes: A,
              context: 'FETCH_NOTIFICATION_FILTERS',
            }).then(function (e) {
              return r.set(C, O(t())), e
            })
          }
        },
        R = function (e) {
          return function (t, n, a) {
            var r = a.api,
              o = a.userPersistence
            return _.c(t, { params: p()({}, e, !0), request: r.Settings.updateNotificationFilters })({
              actionTypes: T,
              context: 'ACTION_ENABLE_NOTIFICATION_FILTER',
              meta: { filterName: e },
            }).then(function (e) {
              return o.set(C, O(n())), e
            })
          }
        },
        x = function (e) {
          return function (t, n, a) {
            var r = a.api,
              o = a.userPersistence
            return _.c(t, { params: p()({}, e, !1), request: r.Settings.updateNotificationFilters })({
              actionTypes: k,
              context: 'ACTION_DISABLE_NOTIFICATION_FILTER',
              meta: { filterName: e },
            }).then(function (e) {
              return o.set(C, O(n())), e
            })
          }
        },
        M = n('rxPX'),
        N = n('0KEI'),
        D = Object(M.a)()
          .propsFromState(function () {
            return { fetchStatus: I, notificationFilters: O }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)(
                'ADVANCED_FILTERS_SCREEN',
              ),
              disableNotificationFilter: x,
              enableNotificationFilter: R,
              fetchNotificationFiltersIfNeeded: F,
            }
          })
          .withAnalytics({ page: 'settings', section: 'advanced_filters' }),
        U = n('v//M'),
        H = n('yoO3'),
        K = n('7FtF'),
        j = n('iCwC'),
        V = n('MWbm'),
        B = n('6vad'),
        G = n('e0ey'),
        Y = n('t62R'),
        z = n('3XMw'),
        W = n.n(z),
        q = W.a.aaafffd9,
        X = W.a.j29ab12f,
        Q = W.a.jdfc82f6,
        J = W.a.cfcda0e5,
        Z = W.a.c75b9b29,
        $ = W.a.f39b9c9d,
        ee = W.a.d227f94f,
        te = W.a.b210936d,
        ne = 'https://support.twitter.com/articles/20169398',
        ae = {
          filter_not_following: 'people_you_follow_only',
          filter_not_followed_by: 'filter_not_following_me',
          filter_new_users: 'new_users',
          filter_default_profile_image: 'default_profile_image',
          filter_no_confirmed_email: 'no_confirmed_email',
          filter_no_confirmed_phone: 'no_confirmed_phone',
        },
        re = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchNotificationFiltersIfNeeded)().catch(n())
              }),
              p()(s()(e), '_handleItemChanged', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler,
                  o = a.disableNotificationFilter,
                  i = a.enableNotificationFilter
                n
                  ? i(t).then(function () {
                      return e._scribeNotificationFilterChanged(t, 'select')
                    }, r())
                  : o(t).then(function () {
                      return e._scribeNotificationFilterChanged(t, 'deselect')
                    }, r())
              }),
              p()(s()(e), '_scribeNotificationFilterChanged', function (t, n) {
                e.props.analytics.scribe({ component: 'advanced_filters', element: ae[t], action: n })
              }),
              p()(s()(e), '_renderNotificationFilters', function () {
                var t = e.props.notificationFilters
                return E.a.createElement(
                  V.a,
                  null,
                  E.a.createElement(B.b, { text: X }),
                  E.a.createElement(G.a, {
                    checked: t.filter_not_following,
                    label: Q,
                    name: 'filter_not_following',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(G.a, {
                    checked: t.filter_not_followed_by,
                    label: J,
                    name: 'filter_not_followed_by',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(G.a, {
                    checked: t.filter_new_users,
                    label: Z,
                    name: 'filter_new_users',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(G.a, {
                    checked: t.filter_default_profile_image,
                    label: $,
                    name: 'filter_default_profile_image',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(G.a, {
                    checked: t.filter_no_confirmed_email,
                    label: ee,
                    name: 'filter_no_confirmed_email',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(G.a, {
                    checked: t.filter_no_confirmed_phone,
                    label: te,
                    name: 'filter_no_confirmed_phone',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(
                    Y.b,
                    { color: 'gray700', size: 'subtext2', style: j.a.infoText },
                    E.a.createElement(
                      W.a.I18NFormatMessage,
                      { $i18n: 'eb96a831' },
                      E.a.createElement(Y.b, { link: ne }, W.a.ed0df109),
                    ),
                  ),
                )
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return E.a.createElement(
                    H.a,
                    null,
                    E.a.createElement(
                      K.a,
                      { location: n, title: q },
                      E.a.createElement(U.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._renderNotificationFilters,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = D(re)
    },
    'Yq/0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationSettingsPage', function () {
          return j
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('kPZX'),
        g = n('P1r1'),
        _ = n('rxPX'),
        y = n('0KEI'),
        v = function (e) {
          return b.g()
        },
        S = Object(_.a)()
          .propsFromState(function () {
            return { browserPushAllowed: v, universalQualityFilteringEnabled: g.G }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_NOTIFICATIONS_SCREEN',
              ),
              updateSettings: g.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications' }),
        w = n('3XMw'),
        C = n.n(w),
        A = n('yoO3'),
        T = n('7FtF'),
        k = 'filtersHeader',
        L = n('6vad'),
        O = n('e0ey'),
        I = n('csss'),
        F = n('0yYu'),
        P = C.a.eb75875d,
        R = C.a.i647fb03,
        x = C.a.hee41732,
        M = C.a.e75f25a8,
        N = C.a.f8bd75d4,
        D = C.a.bcd81cab,
        U = C.a.hfc86556,
        H = C.a.afdf29b8,
        K = C.a.b293c4bd,
        j = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_handleUqfChanged', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateSettings)(p()({}, t, n ? 'enabled' : 'disabled')).catch(r({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.browserPushAllowed,
                    n = e.location,
                    a = e.universalQualityFilteringEnabled
                  return E.a.createElement(
                    A.a,
                    null,
                    E.a.createElement(
                      T.a,
                      { location: n, screenType: 'primaryDetail', title: P },
                      E.a.createElement(L.b, { testID: k, text: R }),
                      E.a.createElement(O.a, {
                        checked: a,
                        helpText: K,
                        label: H,
                        learnMoreLink: 'https://support.twitter.com/articles/20169398',
                        name: 'universal_quality_filtering',
                        onChange: this._handleUqfChanged,
                      }),
                      E.a.createElement(I.a, { label: N, link: '/settings/notifications/advanced_filters' }),
                      E.a.createElement(I.a, { label: U, link: '/settings/mute' }),
                      E.a.createElement(F.a, null),
                      E.a.createElement(L.b, { text: D }),
                      t ? E.a.createElement(I.a, { label: x, link: '/settings/push_notifications' }) : null,
                      E.a.createElement(I.a, { label: M, link: '/settings/email_notifications' }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = S(j)
    },
    Zh1i: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DeactivateScreen', function () {
          return ie
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = n('4+NY'),
        g = n('XMGw'),
        _ = n('8jkQ'),
        y = n('oEOe'),
        v = ''.concat(g.a, '/deactivate'),
        S = 'rweb/'.concat(v),
        w = Object(y.a)(S, 'DEACTIVATE_ACCOUNT'),
        C = function () {
          return _.b.navigateTo('/settings/deactivated')
        },
        A = function (e, t) {
          return function (n, a, r) {
            r.api
            return n(Object(b.d)()).then(function () {
              return n(
                (function (e, t) {
                  return function (n, a, r) {
                    var o = r.api
                    return Object(y.b)(n, {
                      params: { password: e, deactivation_timespan: t },
                      request: o.Settings.deactivate,
                    })({ actionTypes: w, context: 'DEACTIVATE_ACCOUNT' }).then(C)
                  }
                })(e, t),
              )
            })
          }
        },
        T = n('G6rE'),
        k = n('rxPX'),
        L = n('0KEI'),
        O = function (e) {
          var t = T.e.selectLoggedInUser(e)
          return !!t && t.verified
        },
        I = Object(k.a)()
          .propsFromState(function () {
            return { isVerified: O }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('DEACTIVATE'),
              deactivate: A,
            }
          })
          .withAnalytics({ page: 'settings', section: 'deactivate' }),
        F = n('tI3i'),
        P = n.n(F),
        R = n('yoO3'),
        x = n('98E1'),
        M = n('iCwC'),
        N = n('88ay'),
        D = n('MWbm'),
        U = n('t62R'),
        H = n('6vad'),
        K = n('0yYu'),
        j = n('3JAx'),
        V = n('jtO7'),
        B = n('v6aA'),
        G = n('3XMw'),
        Y = n.n(G),
        z = Y.a.ic2937a1,
        W = Y.a.d86e6d9a,
        q = Y.a.i945795c,
        X = Y.a.c3216543,
        Q = Y.a.ea989810,
        J = Y.a.f6e73faa,
        Z = Y.a.c3743327,
        $ = Y.a.a20cd24d,
        ee = Y.a.g8fb7f85,
        te = Y.a.fe36fe1f,
        ne = Y.a.e93b0aef,
        ae = '/settings/your_twitter_data/account',
        re = [
          { label: Y.a.b8971cfa, value: '30_days' },
          { label: Y.a.ce0f88f6, value: '1_year' },
        ],
        oe = function (e) {
          var t = e.children,
            n = e.withBottomBorder,
            a = void 0 === n || n
          return E.a.createElement(
            D.a,
            { style: [M.a.viewItem, a && M.a.bottomBorder] },
            E.a.createElement(U.b, { color: 'gray700', size: 'subtext2' }, t),
          )
        },
        ie = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              p()(s()(o), '_handleDeactivateRequest', function () {
                window.scrollTo(0, 0), o.setState({ showPasswordDialog: !0 })
              }),
              p()(s()(o), '_handlePasswordSubmit', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.deactivate)(e, o.state.dataReactivation).catch(function (e) {
                  return o.setState({ showPasswordDialog: !1 }), n({ showToast: !0 })(e)
                })
              }),
              p()(s()(o), '_handleReactivationChanged', function (e, t) {
                o.setState({ dataReactivation: t })
              }),
              (o.state = { dataReactivation: e.isVerified ? void 0 : '30_days', showPasswordDialog: !1 }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe({ component: 'deactivate', element: e, action: 'click' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isVerified,
                    n = e.location,
                    a = this.context.loggedInUserId,
                    r = this.state,
                    o = r.dataReactivation,
                    i = r.showPasswordDialog,
                    c = '1_year' === o,
                    s = '30_days' === o,
                    l = null === o
                  return (
                    P()(!!a, 'loggedInUserId must be defined'),
                    E.a.createElement(
                      R.a,
                      null,
                      E.a.createElement(
                        x.a,
                        {
                          location: n,
                          onPasswordSubmit: this._handlePasswordSubmit,
                          promptForPassword: i,
                          reenterPasswordLabel: ne,
                          saveChangesHeaderLabel: te,
                          submitLabel: J,
                          submitType: 'destructiveFilled',
                          title: Q,
                        },
                        E.a.createElement(
                          D.a,
                          null,
                          E.a.createElement(N.b, { key: a, userId: a, withLink: !1 }),
                          E.a.createElement(H.b, { text: Z }),
                          E.a.createElement(oe, { withBottomBorder: !1 }, z),
                          E.a.createElement(H.b, { text: $ }),
                          c
                            ? E.a.createElement(oe, null, W)
                            : s
                            ? E.a.createElement(oe, null, q)
                            : E.a.createElement(oe, null, X),
                          t
                            ? E.a.createElement(
                                E.a.Fragment,
                                null,
                                E.a.createElement(K.a, null),
                                E.a.createElement(j.a, {
                                  label: ee,
                                  name: 'reactivation',
                                  onChange: this._handleReactivationChanged,
                                  options: re,
                                  value: o,
                                }),
                                E.a.createElement(K.a, null),
                              )
                            : null,
                          E.a.createElement(
                            oe,
                            null,
                            E.a.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'g124fce8' },
                              E.a.createElement(
                                U.b,
                                {
                                  link: 'https://help.twitter.com/safety-and-security/remove-twitter-profile-from-google-search',
                                },
                                Y.a.ae256744,
                              ),
                            ),
                          ),
                          E.a.createElement(
                            oe,
                            null,
                            E.a.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'd9ef8fba' },
                              E.a.createElement(U.b, { link: ae }, Y.a.g7b28903),
                            ),
                          ),
                          E.a.createElement(
                            oe,
                            null,
                            E.a.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'g4dcd62a' },
                              E.a.createElement(U.b, { link: ae }, Y.a.b5e3246e),
                            ),
                          ),
                          E.a.createElement(
                            oe,
                            { withBottomBorder: !1 },
                            E.a.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'b44893f9' },
                              E.a.createElement(U.b, { link: '/settings/download_your_data' }, Y.a.g392e08c),
                            ),
                          ),
                          E.a.createElement(K.a, null),
                          E.a.createElement(V.a, {
                            color: 'red500',
                            disabled: l,
                            label: J,
                            onPress: this._handleDeactivateRequest,
                          }),
                        ),
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(ie, 'contextType', B.a)
      t.default = I(ie)
    },
    ZqFf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountPage', function () {
          return ee
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = n('P1r1'),
        g = n('RqPI'),
        _ = n('G6rE'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = n('vEo5'),
        w = n('FDFL'),
        C = n('S/HT'),
        A = function (e) {
          var t = Object(b.i)(e)
          return t && Object(C.b)(e, t)
        },
        T = function (e) {
          var t = Object(g.p)(e)
          return t && Object(w.b)(e, t)
        },
        k = Object(y.a)()
          .propsFromState(function () {
            return {
              countryName: A,
              emails: S.selectEmails,
              languageCode: g.p,
              languageName: T,
              loggedInUser: _.e.selectLoggedInUser,
              phones: S.selectPhoneNumbers,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_SCREEN',
              ),
              fetchAvailableLanguagesIfNeeded: w.a,
              fetchDevices: S.fetchDevices,
              fetchCountryNamesIfNeeded: C.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'account' }),
        L = n('3XMw'),
        O = n.n(L),
        I = n('yoO3'),
        F = n('7FtF'),
        P = 'accountScreen',
        R = n('MWbm'),
        x = n('v6aA'),
        M = n('6vad'),
        N = n('csss'),
        D = n('0yYu'),
        U = O.a.i5f7b6b8,
        H = O.a.cd32dbfd,
        K = O.a.e7efe72a,
        j = O.a.a3841918,
        V = O.a.f70cd5ed,
        B = O.a.dec3c9b8,
        G = O.a.j95edf76,
        Y = O.a.a4b69cbb,
        z = O.a.c21037d0,
        W = O.a.d1f6d336,
        q = O.a.ae72d4c4,
        X = O.a.b7fde2b8,
        Q = O.a.hfb92b14,
        J = O.a.bc38469e,
        Z = O.a.fa98627a,
        $ = O.a.hd0765e3,
        ee = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            r()(this, n),
              (o = t.call(this, e, a)),
              p()(s()(o), '_fetchDevices', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchDevices)().catch(t())
              })
            var i = o.props,
              c = i.createLocalApiErrorHandler,
              l = i.fetchAvailableLanguagesIfNeeded,
              u = i.fetchCountryNamesIfNeeded,
              d = i.languageCode
            return (
              o._fetchDevices(),
              d && u(d).catch(c()),
              l().catch(c()),
              (o._isVerificationIntakeEnabled = o.context.featureSwitches.isTrue(
                'identity_verification_intake_enabled',
              )),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.countryName,
                    n = e.emails,
                    a = e.languageName,
                    r = e.location,
                    o = e.loggedInUser,
                    i = e.phones,
                    c = o && '@'.concat(o.screen_name),
                    s = i[0] && i[0].phone_number,
                    l = n[0] && n[0].email
                  return E.a.createElement(
                    I.a,
                    null,
                    E.a.createElement(
                      F.a,
                      { location: r, screenType: 'primaryDetail', title: U },
                      E.a.createElement(
                        R.a,
                        { testID: P },
                        E.a.createElement(M.b, { text: K }),
                        E.a.createElement(N.a, { description: c, label: W, link: '/settings/screen_name' }),
                        E.a.createElement(N.a, { description: s, label: V, link: '/settings/phone' }),
                        E.a.createElement(N.a, { description: l, label: j, link: '/settings/email' }),
                        E.a.createElement(N.a, { label: B, link: '/settings/password' }),
                        E.a.createElement(N.a, { label: G, link: '/settings/security' }),
                        this._isVerificationIntakeEnabled &&
                          E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(D.a, null),
                            E.a.createElement(M.b, { text: J }),
                            E.a.createElement(N.a, { label: Z, link: '/settings/profile' }),
                            E.a.createElement(N.a, { label: $, link: '/settings/request_verification' }),
                          ),
                        E.a.createElement(D.a, null),
                        E.a.createElement(M.b, { text: H }),
                        E.a.createElement(N.a, { description: a, label: Y, link: '/settings/language' }),
                        E.a.createElement(N.a, { description: t, label: z, link: '/settings/country' }),
                        E.a.createElement(N.a, { label: X, link: '/settings/your_twitter_data' }),
                        E.a.createElement(N.a, { label: q, link: '/settings/applications' }),
                        E.a.createElement(D.a, null),
                        E.a.createElement(N.a, { label: Q, link: '/settings/deactivate' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(ee, 'contextType', x.a)
      t.default = k(ee)
    },
    ZvNX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('2VqO'),
        u = n.n(l),
        d = (n('6U7i'), n('ho0z'), n('hBvt'), n('ERkP')),
        f = n.n(d),
        h = (n('TJCb'), n('7x/C'), n('DZ+c'), n('j7Bv')),
        p = n('hBoh'),
        m = n('yiKp'),
        E = n.n(m),
        b = n('Lsrn'),
        g = n('k/Ka'),
        _ = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [b.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M22.5 16.855H22V4.358C22 3.058 20.957 2 19.675 2H4.388C3.105 2 2.062 3.058 2.062 4.358v12.497H1.5c-.414 0-.75.336-.75.75v2.036C.75 20.943 1.793 22 3.075 22h17.85c1.282 0 2.325-1.058 2.325-2.358v-2.036c0-.415-.336-.75-.75-.75zM3.562 4.358c0-.474.37-.858.825-.858h15.287c.455 0 .825.385.825.858v12.497H3.56V4.358zM20.925 20.5H3.075c-.455 0-.825-.385-.825-.858v-1.286h19.5v1.286c0 .473-.37.858-.825.858z',
              }),
            ),
          )
        }
      _.metadata = { width: 24, height: 24 }
      var y = _,
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [b.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M12.574 18.322h-1.167c-.414 0-.75.336-.75.75s.336.75.75.75h1.167c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              f.a.createElement('path', {
                d: 'M18.49 2h-13C4.25 2 3.24 3.01 3.24 4.25v15.5c0 1.24 1.01 2.25 2.25 2.25h13c1.24 0 2.25-1.01 2.25-2.25V4.25c0-1.24-1.01-2.25-2.25-2.25zm-13 1.5h13c.414 0 .75.337.75.75v11.865H4.74V4.25c0-.413.338-.75.75-.75zm13 17h-13c-.412 0-.75-.337-.75-.75v-2.135h14.5v2.135c0 .413-.336.75-.75.75z',
              }),
            ),
          )
        }
      v.metadata = { width: 24, height: 24 }
      var S = v,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [b.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zm.75 17.75c0 .413-.337.75-.75.75H4.25c-.413 0-.75-.337-.75-.75V4.25c0-.413.337-.75.75-.75h15.5c.413 0 .75.337.75.75v15.5z',
              }),
              f.a.createElement('circle', { cx: '11.958', cy: '16.926', r: '1.011' }),
              f.a.createElement('path', {
                d: 'M11.958 6.22c-2.138 0-3.876 1.737-3.876 3.875 0 .414.336.75.75.75s.75-.336.75-.75c0-1.31 1.065-2.376 2.376-2.376s2.377 1.064 2.377 2.375-1.066 2.377-2.377 2.377c-.414 0-.75.336-.75.75v1.03c0 .415.336.75.75.75s.75-.335.75-.75v-.356c1.78-.35 3.127-1.92 3.127-3.8 0-2.14-1.74-3.877-3.877-3.877z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var C = w,
        A = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  switch (this.props.deviceType.toString().toLowerCase()) {
                    case 'mobile':
                      return f.a.createElement(h.a, { Icon: p.a, color: 'neutral' })
                    case 'laptop':
                      return f.a.createElement(h.a, { Icon: y, color: 'neutral' })
                    case 'tablet':
                      return f.a.createElement(h.a, { Icon: S, color: 'neutral' })
                    default:
                      return f.a.createElement(h.a, { Icon: C, color: 'neutral' })
                  }
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent),
        T = n('3XMw'),
        k = n.n(T),
        L = n('GBcw'),
        O = n('Wms4'),
        I = n('pjBI'),
        F = n('t62R'),
        P = n('csss'),
        R = k.a.ed5ab169,
        x = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: '_renderLocationAndDateLabel',
                value: function () {
                  var e = this.props.session,
                    t = e.last_seen_time_ms,
                    n = e.location,
                    a = t ? f.a.createElement(L.a, { cutoff: 'years', humanReadable: !0, timestamp: Number(t) }) : null,
                    r = e.is_current_session ? f.a.createElement(O.a, { background: 'primary' }, R) : a
                  return f.a.createElement(I.a, null, n && f.a.createElement(F.b, null, n), r)
                },
              },
              {
                key: '_renderDeviceIcon',
                value: function () {
                  var e = this.props.session
                  return f.a.createElement(A, { deviceType: e.icon_type })
                },
              },
              {
                key: '_renderDeviceName',
                value: function () {
                  return this.props.session.name
                },
              },
              {
                key: '_renderDescription',
                value: function () {
                  var e = this.props,
                    t = e.session,
                    n = e.withSummary
                  return f.a.createElement(
                    F.b,
                    { color: 'gray700', numberOfLines: 1, size: 'subtext2' },
                    n ? t.summary : this._renderLocationAndDateLabel(),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.link
                  return f.a.createElement(P.a, {
                    description: this._renderDescription(),
                    label: this._renderDeviceName(),
                    link: e,
                    thumbnail: this._renderDeviceIcon(),
                  })
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
      }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return b
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        s = n('Ssj5'),
        l = 'geoLocation',
        u = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var d = function (e) {
          return e.geoLocation.permissionStatus
        },
        f = function (e) {
          return e.geoLocation.position
        },
        h = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        p = function (e) {
          return { payload: e, type: h }
        },
        m = 'rweb/geoLocation/SET_POSITION',
        E = function () {
          return function (e, t) {
            return g()
              .then(function (t) {
                return e({ payload: t, type: m })
              })
              .catch(function (t) {
                return e(p(c.b.denied)), Promise.reject(t)
              })
          }
        },
        b = function () {
          return function (e, t) {
            return f(t()) ? Promise.resolve() : e(E())
          }
        },
        g = function () {
          return new Promise(function (e, t) {
            return navigator.geolocation.getCurrentPosition(function (t) {
              var n = {
                timestamp: t.timestamp,
                coords: {
                  latitude: t.coords.latitude,
                  longitude: t.coords.longitude,
                  altitude: t.coords.altitude,
                  accuracy: t.coords.accuracy,
                  altitudeAccuracy: t.coords.altitudeAccuracy,
                  heading: t.coords.heading,
                  speed: t.coords.speed,
                },
              }
              return e(n)
            }, t)
          })
        }
      s.a.register(
        r()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case h:
              return i()(i()({}, e), {}, { permissionStatus: t.payload })
            case m:
              return i()(i()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    aaHS: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('PFE4'),
        r = n('Rdmj'),
        o = n('3XMw'),
        i = n.n(o),
        c = i.a.i3889a1f,
        s = i.a.iefef10b
      t.default = Object(r.a)({
        scribeNamespace: { page: 'blocked', section: 'imported_blocked_accounts' },
        blockType: a.a.Imported,
        emptyStateTitle: s,
        emptyStateMessage: c,
        supportUrl: 'https://help.twitter.com/articles/20172663',
      })
    },
    adsa: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TrendsLocationsScreen', function () {
          return q
        }),
        n.d(t, 'styles', function () {
          return X
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('z84I'), n('LW0h'), n('7x/C'), n('3voH'), n('ho0z'), n('5BYb'), n('ERkP')),
        E = n.n(m),
        b = n('P1r1'),
        g = n('EyIn'),
        _ = n('+OgG'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = Object(y.a)()
          .propsFromState(function () {
            return {
              placeTrendsLocations: g.f,
              placeTrendsLocationsFetchStatus: g.g,
              placeTrendsSettings: g.d,
              woeTrendsLocations: g.h,
              woeTrendsLocationsFetchStatus: g.i,
              woeTrendsLocationSettings: b.E,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRENDS_LOCATION_SCREEN',
              ),
              fetchWoeTrendsLocationsIfNeeded: g.c,
              fetchPlaceTrendsLocations: g.b,
              updateWoeTrendSettings: _.a,
              updatePlaceTrendSettings: g.j,
            }
          })
          .withAnalytics({ page: 'settings', section: 'trends', component: 'locations', element: 'list' }),
        w = n('v//M'),
        C = n('jHSc'),
        A = n('3XMw'),
        T = n.n(A),
        k = n('VwDm'),
        L = 19,
        O = 12,
        I = function (e) {
          return e.placeType && (e.placeType.code === L || e.placeType.code === O)
        },
        F = n('iBK2'),
        P = 'locationSearchBox',
        R = (n('uFXj'), n('IMYl')),
        x = n('htQn'),
        M = n('t62R'),
        N = n('rHpw'),
        D = T.a.d5c9174e,
        U = N.a.create(function (e) {
          return {
            item: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              flexDirection: 'row',
              padding: e.spaces.space16,
              justifyContent: 'space-between',
            },
            iconCheckmark: { color: e.colors.primary },
          }
        }),
        H = function (e) {
          var t = e.country,
            n = e.isSelected,
            a = e.name,
            r = e.onClick
          return E.a.createElement(
            x.a,
            { onPress: r, style: U.item },
            t ? E.a.createElement(M.b, null, D({ location: a, country: t })) : E.a.createElement(M.b, null, a),
            n ? E.a.createElement(R.a, { style: U.iconCheckmark }) : null,
          )
        },
        K = n('MWbm'),
        j = n('v6aA'),
        V = n('oQhu'),
        B = n('VY6S'),
        G = n('6OUF'),
        Y = T.a.b3aab6d3,
        z = T.a.e53e05e4,
        W = T.a.be6cc44d,
        q = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              p()(
                s()(o),
                '_usePlaceTrendLocations',
                o.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints'),
              ),
              p()(s()(o), '_handleRetry', function () {
                o._fetchTrendsLocations()
              }),
              p()(s()(o), '_fetchTrendsLocations', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchPlaceTrendsLocations,
                  a = e.fetchWoeTrendsLocationsIfNeeded
                o._usePlaceTrendLocations
                  ? n({ prefix: o.state.query }).catch(t({ showToast: !0 }))
                  : a().catch(t({ showToast: !0 }))
              }),
              p()(s()(o), '_renderScroller', function () {
                var e = o.props.placeTrendsLocations
                return E.a.createElement(F.b, {
                  cacheKey: 'LOCATIONS_LIST',
                  identityFunction: o._identityFunction,
                  items: e,
                  renderer: o._renderPlaceLocation,
                })
              }),
              p()(s()(o), '_renderWoeLocations', function () {
                var e = '' === o.state.query ? o._getTopLevelWoeLocations() : o._getFilteredWoeLocations()
                return E.a.createElement(
                  K.a,
                  null,
                  E.a.createElement(
                    K.a,
                    { style: X.searchBox },
                    E.a.createElement(G.a, {
                      Icon: k.a,
                      autoFocus: !1,
                      onChange: o._handleInputChange,
                      onClear: o._handleInputClear,
                      placeholder: W,
                      value: o.state.query,
                      withClearButton: !0,
                    }),
                  ),
                  E.a.createElement(
                    K.a,
                    null,
                    e.map(function (e) {
                      return o._renderWoeLocation(e)
                    }),
                  ),
                )
              }),
              p()(s()(o), '_getFilteredWoeLocations', function () {
                var e = o.state.query,
                  t = o.props.woeTrendsLocations
                return o._getMemoizedFilteredWoeLocations(e, t)
              }),
              p()(
                s()(o),
                '_getMemoizedFilteredWoeLocations',
                Object(V.a)(function (e, t) {
                  return t.filter(function (t) {
                    return t.name.toLowerCase().startsWith(e.toLowerCase())
                  })
                }),
              ),
              p()(s()(o), '_getTopLevelWoeLocations', function () {
                var e = o.props.woeTrendsLocations
                return o._getMemoizedTopLevelWoeLocations(e)
              }),
              p()(
                s()(o),
                '_getMemoizedTopLevelWoeLocations',
                Object(V.a)(function (e) {
                  return e.filter(function (e) {
                    return I(e)
                  })
                }),
              ),
              p()(s()(o), '_handleInputClear', function () {
                o._updateQuery('')
              }),
              p()(s()(o), '_updateQuery', function (e) {
                o.setState({ query: e })
              }),
              p()(s()(o), '_handleInputChange', function (e) {
                o._updateQuery(e.target.value)
              }),
              p()(s()(o), '_renderWoeLocation', function (e) {
                var t = o.props.woeTrendsLocationSettings,
                  n = !!e.woeid && e.woeid === (t && t[0] && t[0].woeid)
                return E.a.createElement(H, {
                  country: I(e) ? void 0 : e.country,
                  isSelected: n,
                  key: e.woeid,
                  name: e.name,
                  onClick: o._handleWoeLocationClick(e.woeid),
                })
              }),
              p()(s()(o), '_renderPlaceLocation', function (e) {
                var t = o.props.placeTrendsSettings,
                  n =
                    !!e.place_id &&
                    t.places &&
                    t.places.some(function (t) {
                      return t.place_id === e.place_id
                    })
                return E.a.createElement(H, {
                  country: void 0,
                  isSelected: n,
                  key: e.place_id,
                  name: e.name,
                  onClick: o._handlePlaceLocationClick(e.place_id, e.name),
                })
              }),
              p()(s()(o), '_handleWoeLocationClick', function (e) {
                return function () {
                  var t = o.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.history,
                    r = t.updateWoeTrendSettings
                  a.goBack(), r({ trend_location_woeid: e }).catch(n({ showToast: !0 }))
                }
              }),
              p()(s()(o), '_handlePlaceLocationClick', function (e, t) {
                return function () {
                  var n = o.props,
                    a = n.createLocalApiErrorHandler,
                    r = n.history
                  ;(0, n.updatePlaceTrendSettings)({ places: [{ place_id: e, name: t }] })
                    .then(function () {
                      return r.goBack()
                    })
                    .catch(a({ showToast: !0 }))
                }
              }),
              (o._fetchFilteredPlacesDebounced = Object(B.a)(o._fetchTrendsLocations, 250)),
              (o._identityFunction = function (e) {
                return e.place_id
              }),
              (o.state = { query: '' }),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchTrendsLocations()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this._usePlaceTrendLocations && t.query !== this.state.query && this._fetchFilteredPlacesDebounced()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.placeTrendsLocationsFetchStatus,
                    a = e.woeTrendsLocationsFetchStatus
                  return E.a.createElement(
                    C.b,
                    { backButtonType: 'back', backLocation: '/settings/trends', history: t, title: Y },
                    this._usePlaceTrendLocations
                      ? E.a.createElement(
                          E.a.Fragment,
                          null,
                          E.a.createElement(G.a, {
                            Icon: k.a,
                            autoFocus: !1,
                            onChange: this._handleInputChange,
                            onClear: this._handleInputClear,
                            placeholder: W,
                            style: X.searchBox,
                            testID: P,
                            value: this.state.query,
                            withClearButton: !0,
                          }),
                          E.a.createElement(w.a, {
                            accessibilityLabel: z,
                            fetchStatus: n,
                            onRequestRetry: this._handleRetry,
                            render: this._renderScroller,
                          }),
                        )
                      : E.a.createElement(w.a, {
                          accessibilityLabel: z,
                          fetchStatus: a,
                          onRequestRetry: this._handleRetry,
                          render: this._renderWoeLocations,
                        }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(q, 'contextType', j.a)
      var X = N.a.create(function (e) {
        return { searchBox: { flexGrow: 0, flexShrink: 0, margin: e.spaces.space12 } }
      })
      t.default = S(q)
    },
    av9q: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('M+/F'), n('z84I'), n('ho0z'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        E = n.n(m),
        b = n('3XMw'),
        g = n.n(b),
        _ = n('t62R'),
        y = n('htQn'),
        v = n('rHpw'),
        S = g.a.c174e46e,
        w = g.a.a39075ff,
        C = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), 'state', { showAllScopes: !1 }),
              p()(s()(e), '_handleToggleShowMoreScopes', function () {
                var t = e.state.showAllScopes
                e.setState({ showAllScopes: !t })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.scopes,
                    n = e.size,
                    a = e.title,
                    r = this.state.showAllScopes,
                    o = r ? t : t.slice(0, 3),
                    i = t.length > 3
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(_.b, { style: A.scopesHeader, weight: 'bold' }, a),
                    E.a.createElement(
                      y.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return E.a.createElement(
                          _.b,
                          { color: 'subtext2' === n ? 'gray700' : void 0, key: e.name, size: n, style: A.listItem },
                          e.description,
                        )
                      }),
                    ),
                    i && r
                      ? E.a.createElement(
                          _.b,
                          { onPress: this._handleToggleShowMoreScopes, style: A.toggleMoreLink },
                          S,
                        )
                      : null,
                    i && !r
                      ? E.a.createElement(
                          _.b,
                          { onPress: this._handleToggleShowMoreScopes, style: A.toggleMoreLink },
                          w({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        A = v.a.create(function (e) {
          return {
            listItem: {
              display: 'list-item',
              listStylePosition: 'outside',
              marginBottom: e.spaces.space12,
              marginLeft: e.spaces.space12,
            },
            scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 },
            toggleMoreLink: { color: e.colors.link, weight: 'bold' },
          }
        })
    },
    d0Wu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FilterPage', function () {
          return A
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('P1r1'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { universalQualityFilteringEnabled: c.G }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_FILTERS_SCREEN',
              ),
              updateSettings: c.M,
            }
          }),
        d = n('3XMw'),
        f = n.n(d),
        h = n('yoO3'),
        p = n('7JQg'),
        m = n('7FtF'),
        E = n('RKmr'),
        b = n('e0ey'),
        g = n('csss'),
        _ = f.a.ef1b5cbb,
        y = f.a.i647fb03,
        v = f.a.aaafffd9,
        S = f.a.afdf29b8,
        w = f.a.c54b6236,
        C = { page: 'settings', section: 'filters' }
      function A(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.location,
          a = e.universalQualityFilteringEnabled,
          o = e.updateSettings
        return i.a.createElement(
          p.c,
          { namespace: C },
          i.a.createElement(
            h.a,
            null,
            i.a.createElement(
              m.a,
              { location: n, title: y },
              i.a.createElement(E.a, { description: _ }),
              i.a.createElement(b.a, {
                checked: a,
                helpText: w,
                label: S,
                learnMoreLink:
                  'https://help.twitter.com/managing-your-account/understanding-the-notifications-timeline',
                name: 'universal_quality_filtering',
                onChange: function (e, n) {
                  o(r()({}, e, n ? 'enabled' : 'disabled')).catch(t({ showToast: !0 }))
                },
              }),
              i.a.createElement(g.a, { label: v, link: '/settings/notifications/advanced_filters' }),
            ),
          ),
        )
      }
      var T = u(A)
      t.default = T
    },
    dMlH: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTeamsScreen', function () {
          return k
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('P1r1'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { teamsSetting: c.F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TEAMS_SCREEN',
              ),
              fetchSettingsIfNeeded: c.f,
              updateSettings: c.M,
            }
          }),
        d = n('3XMw'),
        f = n.n(d),
        h = n('yoO3'),
        p = n('98E1'),
        m = n('7JQg'),
        E = n('MWbm'),
        b = n('RKmr'),
        g = n('oFxb'),
        _ = n('t62R'),
        y = f.a.d13e165c,
        v = f.a.cf24a081,
        S = f.a.d1e97fdf,
        w = [
          { label: f.a.a2ffab26, value: 'all' },
          { label: f.a.h69bd4ee, value: 'following' },
        ],
        C = f.a.d0a1d1d9,
        A = f.a.i859a9d3,
        T = { page: 'settings', section: 'teams' },
        k = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchSettingsIfNeeded,
            a = e.location,
            o = e.teamsSetting,
            c = e.updateSettings,
            s = i.a.useState(),
            l = r()(s, 2),
            u = l[0],
            d = l[1]
          i.a.useEffect(
            function () {
              n().catch(t())
            },
            [n, t],
          )
          var f = !!u && o !== u,
            k = u || o
          return i.a.createElement(
            m.c,
            { namespace: T },
            i.a.createElement(
              h.a,
              null,
              i.a.createElement(
                p.a,
                {
                  location: a,
                  onPasswordSubmit: function (e) {
                    u &&
                      c({ current_password: e, allow_contributor_request: u }).catch(function (e) {
                        d(o), t({ showToast: !0 })(e)
                      })
                  },
                  promptForPassword: f,
                  title: y,
                },
                i.a.createElement(
                  E.a,
                  null,
                  i.a.createElement(b.a, { description: S }),
                  i.a.createElement(g.a, {
                    description: i.a.createElement(
                      i.a.Fragment,
                      null,
                      ''.concat(C, ' '),
                      i.a.createElement(_.b, { link: 'https://help.twitter.com/using-twitter/tweetdeck-teams' }, A),
                    ),
                    label: v,
                    name: 'allow_contributor_request',
                    offValue: 'none',
                    onChange: function (e, t) {
                      ;('all' !== t && 'following' !== t && 'none' !== t) || d(t)
                    },
                    options: w,
                    value: k,
                  }),
                ),
              ),
            ),
          )
        },
        L = u(k)
      t.default = L
    },
    dUVB: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MuteKeywordDetailScreen', function () {
          return he
        })
      var a = n('T0aG'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        f = n.n(d),
        h = n('5Yy7'),
        p = n.n(h),
        m = n('2VqO'),
        E = n.n(m),
        b = n('KEM+'),
        g = n.n(b),
        _ = (n('vrRf'), n('hBpG'), n('7x/C'), n('KqXw'), n('MvUL'), n('tVqn'), n('7xRU'), n('ERkP')),
        y = n.n(_),
        v = n('k49u'),
        S = (n('WNMA'), n('X8EX')),
        w = n('1YZw'),
        C = n('rxPX'),
        A = n('0KEI'),
        T = function (e, t) {
          return t.match.params.mutedKeywordId
        },
        k = function (e, t) {
          return S.i(e, T(0, t))
        },
        L = function (e, t) {
          return !!T(0, t)
        },
        O = Object(C.a)()
          .propsFromState(function () {
            return { defaultOptions: S.f, discouragedKeywords: S.g, fetchStatus: S.h, isEditing: L, mutedKeyword: k }
          })
          .propsFromActions(function () {
            return {
              addMutedKeyword: S.a,
              addToast: w.b,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
                'MUTED_KEYWORD_DETAIL',
              ),
              fetchDefaultOptionsIfNeeded: S.c,
              fetchDiscouragedKeywordsIfNeeded: S.d,
              fetchMutedKeywordsIfNeeded: S.e,
              updateDefaultOptions: S.k,
              updateMutedKeyword: S.l,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications', component: 'mute_keyword', element: 'add' }),
        I = n('kGix'),
        F = n('v//M'),
        P = n('gaV8'),
        R = n.n(P),
        x = n('VTxf'),
        M = n('yoO3'),
        N = n('7FtF'),
        D = n('MWbm'),
        U = n('t62R'),
        H = n('p+r5'),
        K = n('0yYu'),
        j = n('6vad'),
        V = n('e0ey'),
        B = n('oFxb'),
        G = n('3JAx'),
        Y = n('rHpw'),
        z = n('3XMw'),
        W = n.n(z),
        q = W.a.bdbf8f4e,
        X = W.a.h43e2ea7,
        Q = W.a.da8c044f,
        J = W.a.eb75875d,
        Z = [
          { label: W.a.defb4aa9, value: 'everyone' },
          { label: W.a.e7d47b00, value: 'following' },
        ],
        $ = W.a.c67e3fc1,
        ee = W.a.d9d6e10e,
        te = W.a.gfa5008d,
        ne = W.a.c5595dfe,
        ae = W.a.he6804e0,
        re = [
          { label: ae, value: 'forever' },
          { label: W.a.a268406c, value: 'day' },
          { label: W.a.fc638aa2, value: 'week' },
          { label: W.a.b8971cfa, value: 'month' },
        ],
        oe = [
          { label: W.a.a268406c, value: 'day' },
          { label: W.a.fc638aa2, value: 'week' },
          { label: W.a.b8971cfa, value: 'month' },
          { label: ae, value: 'forever' },
        ],
        ie = W.a.cc7bedfc,
        ce = W.a.d768049b,
        se = W.a.c6203da8,
        le = W.a.e3f0d3db,
        ue = W.a.h5746cf6,
        de = W.a.d2693eb8,
        fe = W.a.jf4e00e1,
        he = (function (e) {
          p()(n, e)
          var t = E()(n)
          function n(e) {
            var a
            s()(this, n),
              (a = t.call(this, e)),
              g()(f()(a), '_renderSettings', function () {
                var e = a.props,
                  t = e.isEditing,
                  n = e.mutedKeyword,
                  r = a.state,
                  o = r.errorText,
                  i = r.warningText,
                  c = o || i,
                  s = y.a.createElement(
                    W.a.I18NFormatMessage,
                    { $i18n: 'aba5a348' },
                    y.a.createElement(U.b, { link: 'https://support.twitter.com/articles/20175032' }, W.a.e456bd5f),
                  )
                return y.a.createElement(
                  D.a,
                  null,
                  y.a.createElement(H.a, {
                    defaultValue: t ? (null == n ? void 0 : n.keyword) : '',
                    editable: !t,
                    errorText: c,
                    helperText: t ? null : s,
                    invalid: !!c,
                    label: t ? X : q,
                    name: 'keyword',
                    numberOfLines: 1,
                    onChange: a._handleKeywordChanged,
                    type: 'text',
                  }),
                  a._renderOptions(),
                )
              }),
              g()(f()(a), '_renderOptions', function () {
                var e = a.props.isEditing
                return y.a.createElement(
                  D.a,
                  null,
                  y.a.createElement(K.a, null),
                  y.a.createElement(j.b, { text: Q }),
                  y.a.createElement(V.a, {
                    checked: a.state.mute_home_timeline,
                    label: $,
                    name: 'mute_home_timeline',
                    onChange: a._handleEntryUpdated,
                  }),
                  y.a.createElement(B.a, {
                    label: J,
                    name: 'mute_notifications_option',
                    offValue: 'none',
                    onChange: a._handleEntryUpdated,
                    options: Z,
                    value: a.state.mute_notifications_option,
                  }),
                  y.a.createElement(K.a, null),
                  y.a.createElement(j.b, { text: e ? a._renderEditTimeDurationLabel() : ee }),
                  y.a.createElement(G.a, {
                    name: 'time_duration',
                    onChange: a._handleEntryUpdated,
                    options: e ? oe : re,
                    value: a.state.time_duration,
                  }),
                  e ? y.a.createElement(U.b, { color: 'gray700', size: 'subtext2', style: pe.infoText }, ie) : null,
                )
              }),
              g()(f()(a), '_renderEditTimeDurationLabel', function () {
                var e = a.props.mutedKeyword
                return null != e && e.valid_until ? te : ne
              }),
              g()(f()(a), '_renderNotFound', function () {
                return y.a.createElement(x.a, null)
              }),
              g()(f()(a), '_initializeMuteKeywordStates', function (e) {
                return {
                  id: e.id,
                  keyword: e.keyword,
                  mute_home_timeline: e.mute_surfaces.indexOf('home_timeline') > -1,
                  mute_notifications_option:
                    e.mute_surfaces.indexOf('notifications') > -1
                      ? e.mute_options.indexOf('exclude_following_accounts') > -1
                        ? 'following'
                        : 'everyone'
                      : 'none',
                  time_duration: e.valid_until ? '' : 'forever',
                }
              }),
              g()(f()(a), '_isMutedKeywordNotFound', function () {
                var e = a.props,
                  t = e.fetchStatus,
                  n = e.isEditing,
                  r = e.mutedKeyword
                return n && t === I.a.LOADED && !r
              }),
              g()(f()(a), '_getFetchStatus', function () {
                var e = a.props.fetchStatus
                return a.state.isUpdatingMutedKeyword ? I.a.LOADING : a._isMutedKeywordNotFound() ? I.a.FAILED : e
              }),
              g()(f()(a), '_handleFetch', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchDefaultOptionsIfNeeded,
                  r = e.fetchDiscouragedKeywordsIfNeeded,
                  o = e.fetchMutedKeywordsIfNeeded,
                  i = e.fetchStatus,
                  c = e.isEditing
                r().catch(t()), c || i === I.a.NONE ? o().catch(t()) : n()
              }),
              g()(f()(a), '_handleKeywordChanged', function (e) {
                var t = e.target.value
                a.setState({ keyword: t }, a._checkKeywordValidity)
              }),
              g()(f()(a), '_handleEntryUpdated', function (e, t) {
                a.setState(g()({}, e, t), a._checkKeywordValidity)
              }),
              g()(f()(a), '_handleGoBack', function () {
                a.props.history.goBack({ backLocation: '/settings/muted_keywords' })
              }),
              g()(f()(a), '_handleMutedKeywordIdChanged', function (e, t) {
                var n = a.props.history
                if (e) {
                  var r =
                    null == t
                      ? void 0
                      : t.find(function (t) {
                          return t.keyword === e
                        })
                  r && n.replace({ pathname: '/settings/muted_keywords/'.concat(r.id) })
                }
              }),
              g()(f()(a), '_handleSubmit', function () {
                var e = a._getMuteKeywordParams()
                a.props.isEditing ? a._updateExistingMutedKeyword(e) : a._createNewMutedKeyword(e)
              })
            var r = e.defaultOptions,
              o = e.mutedKeyword,
              c = o ? a._initializeMuteKeywordStates(o) : r
            return (
              (a.state = i()(
                { errorText: void 0, hasValidKeyword: !1, warningText: void 0, isUpdatingMutedKeyword: !1 },
                c,
              )),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._handleFetch(),
                    (this._mutateMutedKeywordApiErrorHandlingConfiguration = g()({}, v.a.ValidationFailure, {
                      customAction: function (t) {
                        t.message && e.setState({ errorText: t.message, hasValidKeyword: !1 })
                      },
                    }))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = e.defaultOptions,
                    n = e.fetchStatus,
                    a = e.isEditing,
                    r = e.mutedKeyword
                  a &&
                    n === I.a.LOADED &&
                    r &&
                    !this.props.mutedKeyword &&
                    this.setState(this._initializeMuteKeywordStates(r)),
                    a || n !== I.a.LOADED || t === this.props.defaultOptions || this.setState(t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isEditing,
                    n = e.location,
                    a = this._isMutedKeywordNotFound()
                  return y.a.createElement(
                    M.a,
                    null,
                    y.a.createElement(
                      N.a,
                      {
                        location: n,
                        onSubmit: this._handleSubmit,
                        submitDisabled: !this.state.hasValidKeyword || a,
                        title: t ? se : ce,
                      },
                      y.a.createElement(F.a, {
                        fetchStatus: this._getFetchStatus(),
                        onRequestRetry: this._handleFetch,
                        render: this._renderSettings,
                        renderFailure: this._renderNotFound,
                        retryable: !a,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_isDiscouragedWord',
                value: function (e) {
                  return this.props.discouragedKeywords.indexOf(e) >= 0
                },
              },
              {
                key: '_checkKeywordValidity',
                value: function () {
                  var e,
                    t,
                    n = this.state,
                    a = n.keyword,
                    r = void 0 === a ? '' : a,
                    o = n.mute_home_timeline,
                    i = n.mute_notifications_option,
                    c = R()(r),
                    s = this._isDiscouragedWord(r.trim()),
                    l = c > 0 && c <= 140,
                    u = l && (o || 'none' !== i)
                  l || (c > 140 && (e = de)),
                    s && (t = fe),
                    this.setState({ hasValidKeyword: u, errorText: e, warningText: t })
                },
              },
              {
                key: '_getMuteKeywordParams',
                value: function () {
                  var e = this.state,
                    t = e.id,
                    n = e.keyword,
                    a = e.mute_home_timeline,
                    r = e.mute_notifications_option,
                    o = e.time_duration,
                    i = {},
                    c = [],
                    s = []
                  return (
                    this.props.isEditing ? (i.id = t) : (i.keyword = n),
                    'none' !== r && c.push('notifications'),
                    a && c.push('home_timeline', 'tweet_replies'),
                    (i.mute_surfaces = c.join(',')),
                    'following' === r && s.push('exclude_following_accounts'),
                    (i.mute_options = s.join(',')),
                    (i.duration = this._getDuration(o)),
                    i
                  )
                },
              },
              {
                key: '_getDuration',
                value: function (e) {
                  switch (e) {
                    case 'day':
                      return 864e5
                    case 'week':
                      return 6048e5
                    case 'month':
                      return 2592e6
                    case 'forever':
                      return ''
                    default:
                      return
                  }
                },
              },
              {
                key: '_createNewMutedKeyword',
                value: function (e) {
                  var t = this,
                    n = this.props,
                    a = n.addMutedKeyword,
                    o = n.addToast,
                    i = n.analytics,
                    c = n.createLocalApiErrorHandler,
                    s = n.updateDefaultOptions,
                    l = this.state,
                    u = l.mute_home_timeline
                  s({
                    mute_notifications_option: l.mute_notifications_option,
                    mute_home_timeline: u,
                    time_duration: l.time_duration,
                  }),
                    a(e).then(function (n) {
                      var a = e.keyword
                      if ('object' === r()(n) && Array.isArray(n.muted_keywords)) {
                        var c = n.muted_keywords[0]
                        'object' === r()(c) && c.keyword && (a = c.keyword)
                      }
                      var s = le({ keyword: a })
                      o({ text: s }), i.scribeAction('mute'), t._handleGoBack()
                    }, c(this._mutateMutedKeywordApiErrorHandlingConfiguration))
                },
              },
              {
                key: '_updateExistingMutedKeyword',
                value: function (e) {
                  var t = this,
                    n = this.props,
                    a = n.addToast,
                    r = n.createLocalApiErrorHandler,
                    o = n.mutedKeyword,
                    i = n.updateMutedKeyword,
                    c = null == o ? void 0 : o.keyword
                  this.setState({ isUpdatingMutedKeyword: !0 }, function () {
                    i(e).then(
                      function (e) {
                        a({ text: ue({ keyword: t.state.keyword }) }),
                          t._handleMutedKeywordIdChanged(c, e.muted_keywords),
                          t._handleGoBack()
                      },
                      function (e) {
                        r(t._mutateMutedKeywordApiErrorHandlingConfiguration)(e),
                          t.setState({ isUpdatingMutedKeyword: !1 })
                      },
                    )
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        pe = Y.a.create(function (e) {
          return { infoText: { marginVertical: e.spaces.space20, marginHorizontal: e.spaces.space12 } }
        }),
        me = O(he)
      t.default = me
    },
    dZRF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return A
        }),
        n.d(t, 'c', function () {
          return T
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('LW0h'), n('7x/C'), n('1IsZ'), n('JtPf'), n('oEOe')),
        s = n('/kEJ'),
        l = n('hqKg'),
        u = n('3zvM'),
        d = n('lMB6'),
        f = n('kGix'),
        h = n('XMGw'),
        p = n('Ssj5'),
        m = n('s1N3'),
        E = ''.concat(h.a, '/applications'),
        b = 'rweb/'.concat(E),
        g = c.a(b, 'FETCH_APPLICATIONS'),
        _ = { fetchStatus: f.a.NONE }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case g.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: f.a.LOADING })
          case g.FAILURE:
            return i()(i()({}, e), {}, { error: t.payload, fetchStatus: f.a.FAILED })
          case g.SUCCESS:
            return i()(i()({}, e), {}, { error: null, fetchStatus: f.a.LOADED })
          default:
            return e
        }
      }
      p.a.register(r()({}, E, y))
      var v = {
          revokeApplication: {
            reducer: function (e, t) {
              if (t.type === S.customActionTypes.revokeApplication.SUCCESS) {
                var n = t.payload.revoked,
                  a = t.meta.entityId,
                  o = e.entities[a]
                return i()(
                  i()({}, e),
                  {},
                  { entities: i()(i()({}, e.entities), {}, r()({}, a, i()(i()({}, o), {}, { revoked: n }))) },
                )
              }
              return e
            },
            getParams: function (e) {
              return { token: e }
            },
            getApiMethod: function (e) {
              return e.Settings.revokeApplication
            },
          },
          revokeOauth2Token: {
            reducer: function (e, t) {
              if (t.type === S.customActionTypes.revokeOauth2Token.SUCCESS) {
                var n = t.payload.revoked,
                  a = t.meta.entityId,
                  o = e.entities[a]
                return i()(
                  i()({}, e),
                  {},
                  { entities: i()(i()({}, e.entities), {}, r()({}, a, i()(i()({}, o), {}, { revoked: n }))) },
                )
              }
              return e
            },
            getParams: function (e) {
              return { token_hash: e }
            },
            getApiMethod: function (e) {
              return e.Settings.revokeOauth2Token
            },
          },
        },
        S = Object(u.e)({ namespace: 'applications', customActions: v })
      ;(S.selectUniqUnrevokedApps = Object(l.createSelector)(S.selectAll, function (e) {
        var t = Object.values(e).filter(function (e) {
          return !0 !== e.revoked
        })
        return Object(m.a)(t, function (e) {
          return e.app_id
        })
      })),
        (S.selectAppsById = Object(l.createSelector)(
          S.selectAll,
          function (e, t) {
            return t
          },
          function (e, t) {
            return Object.values(e).filter(function (e) {
              return e.app_id === t
            })
          },
        ))
      var w = d.a.register(S),
        C = function (e) {
          return e[E].fetchStatus
        },
        A = function (e) {
          return function (t, n) {
            return C(n()) === f.a.LOADED ? Promise.resolve() : t(k(e))
          }
        },
        T = function (e, t, n) {
          return function (n, a, r) {
            r.api
            var o = a()
            return S.selectAppsById(o, e).length > 0 ? Promise.resolve() : n(k(t))
          }
        },
        k = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.Settings.fetchApplications })(
              { actionTypes: g, context: 'FETCH_APPLICATIONS' },
              function (e, t) {
                if (e) return [Object(s.c)(e.entities)]
              },
            )
          }
        }
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        f = n.n(d),
        h = n('ERkP'),
        p = n.n(h),
        m = n('t62R'),
        E = n('3XMw'),
        b = n.n(E),
        g = n('rHpw'),
        _ = n('MWbm'),
        y = n('yiKp'),
        v = n.n(y),
        S = n('Lsrn'),
        w = n('k/Ka'),
        C = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            v()(
              v()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [S.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      C.metadata = { width: 24, height: 24 }
      var A = C,
        T = n('uFYP'),
        k = b.a.f1a1b790,
        L = b.a.if2bf8b3,
        O = b.a.f3624b5c,
        I = b.a.b4b3b113,
        F = b.a.be22205f,
        P = b.a.hcbbe447,
        R = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    a = e.style,
                    r = e.withCircleIcon ? A : T.a
                  return p.a.createElement(
                    _.a,
                    { style: [x.root, a] },
                    p.a.createElement(r, { style: [x.icon, t && x[t]] }),
                    p.a.createElement(m.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    a = e.promotedContent,
                    r = a.adMetadataContainer,
                    o = a.advertiser,
                    i = a.advertiser_name,
                    c = a.disclosure_type,
                    s = t && o && t === o.id_str,
                    l = 'string' == typeof c && 'political' === c.toLowerCase(),
                    u = 'string' == typeof c && 'issue' === c.toLowerCase(),
                    d = !(!r || 'POLITICAL' !== r.disclaimerType) || l,
                    f = !(!r || 'ISSUE' !== r.disclaimerType) || u,
                    h = (r || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!i || s || h
                      ? d
                        ? O
                        : f
                        ? F
                        : L
                      : d
                      ? I({ fullName: i })
                      : f
                      ? P({ fullName: i })
                      : k({ fullName: i }))
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      f()(R, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var x = g.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    e7uq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BlockedAccountsScreen', function () {
          return D
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('3XMw'),
        g = n.n(b),
        _ = n('yoO3'),
        y = n('wytG'),
        v = n('7JQg'),
        S = n('7FtF'),
        w = n('k/OQ'),
        C = n('v6aA'),
        A = n('zCf4'),
        T = g.a.a5f32aa2,
        k = g.a.f8321d82,
        L = g.a.cf67f6d5,
        O = g.a.eb233865,
        I = '/settings/blocked/all',
        F = '/settings/safety_mode/autoblocked',
        P = '/settings/blocked/imported',
        R = { page: 'settings', section: 'blocked_accounts' },
        x = Object(y.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(5), n.e(12), n.e(237)]).then(n.bind(null, 'XFGu'))
        }),
        M = Object(y.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(5), n.e(12), n.e(237)]).then(n.bind(null, 'tJyY'))
        }),
        N = Object(y.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(5), n.e(12), n.e(237)]).then(n.bind(null, 'aaHS'))
        }),
        D = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(
                s()(e),
                '_fsAutoBlockListEnabled',
                e.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              p()(s()(e), '_renderTabs', function () {
                var t = [
                  { to: I, key: k, label: k, retainScrollPosition: !1 },
                  e._fsAutoBlockListEnabled ? { to: F, key: L, label: L, retainScrollPosition: !1 } : void 0,
                  { to: P, key: O, label: O, retainScrollPosition: !1 },
                ]
                return E.a.createElement(w.a, { accessibilityLabel: T, links: t })
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  return E.a.createElement(
                    v.c,
                    { namespace: R },
                    E.a.createElement(
                      _.a,
                      null,
                      E.a.createElement(
                        S.a,
                        {
                          location: this.props.location,
                          secondaryBar: this._renderTabs(),
                          title: T,
                          withBottomBorder: !0,
                          withMarginBottom: !1,
                        },
                        E.a.createElement(
                          A.d,
                          null,
                          E.a.createElement(A.b, { component: x, exact: !0, path: I }),
                          this._fsAutoBlockListEnabled
                            ? E.a.createElement(A.b, { component: M, exact: !0, path: F })
                            : null,
                          E.a.createElement(A.b, { component: N, exact: !0, path: P }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(D, 'contextType', C.a), (t.default = D)
    },
    eM8g: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('MWbm'),
        i = n('t62R'),
        c = n('rHpw')
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(
          o.a,
          { style: s.labelContainer },
          r.a.createElement(
            o.a,
            { style: s.contentContainer },
            r.a.createElement(
              o.a,
              { style: s.appText },
              r.a.createElement(i.b, { color: 'gray700', size: 'subtext2' }, t),
            ),
          ),
        )
      }
      var s = c.a.create(function (e) {
        return {
          contentContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            minHeight: 'calc('
              .concat(c.a.theme.lineHeights.headline1, ' + 2 * ')
              .concat(e.componentDimensions.gutterVertical, ')'),
          },
          appText: { flexShrink: 1, width: '100%' },
        }
      })
    },
    fLnR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PersonalizationScreen', function () {
          return ye
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('ERkP')),
        g = n.n(b),
        _ = n('6/RC'),
        y = n('zh9S'),
        v = n('NeAX'),
        S = n('RqPI'),
        w = n('P1r1'),
        C = n('hqKg'),
        A = n('0KEI'),
        T = n('oEGd'),
        k = Object(C.createSelector)(S.n, w.g, v.selectPreferences, function (e, t, n) {
          return !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country
        }),
        L = Object(C.createSelector)(
          v.selectPreferencesFetchStatus,
          k,
          v.selectPreferences,
          v.selectUserPreferences,
          function (e, t, n, a) {
            return { fetchStatus: e, isEUUser: t, personalization: n, settings: a }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PERSONALIZATION_SCREEN',
          ),
          fetchPreferencesIfNeeded: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: y.googleAnalyticsPageView,
          scribeAction: y.scribeAction,
          scribePageImpression: y.scribePageImpression,
          syncSettings: v.syncSettings,
          updateSettings: v.updateSettings,
        },
        I = Object(T.f)(L, O),
        F = n('xCYy'),
        P = n('v//M'),
        R = n('uD2z'),
        x = n('3XMw'),
        M = n.n(x),
        N = n('fs1G'),
        D = n('7JQg'),
        U = n('7FtF'),
        H = n('iCwC'),
        K = n('MWbm'),
        j = n('G8HL'),
        V = n('t62R'),
        B = n('e0ey'),
        G = n('0yYu'),
        Y = n('6vad'),
        z = n('csss'),
        W = n('eb3s'),
        q = n('v6aA'),
        X = M.a.e8f57e07,
        Q = M.a.ce8450f1,
        J = M.a.ja94f34d,
        Z = M.a.e8f57e07,
        $ = M.a.bd73f7e5,
        ee = M.a.a55db872,
        te = M.a.ddbc3287,
        ne = M.a.i7b329e0,
        ae = { headline: M.a.b934e0ea, text: M.a.bf917ce9, confirmButtonLabel: M.a.a148acb9 },
        re = M.a.e8313b32,
        oe = M.a.f1d46fd5,
        ie = M.a.cfd2f35d,
        ce = M.a.ib3357a5,
        se = M.a.c4ca418c,
        le = M.a.b0b3ed8e,
        ue = M.a.f6c8ccc7,
        de = M.a.f748b0fc,
        fe = M.a.aa023546,
        he = M.a.cb2ed998,
        pe = M.a.b85127bc,
        me = M.a.b276596b,
        Ee = M.a.c966aaf4,
        be = M.a.d3c20d8f,
        ge = M.a.jdaf84e3,
        _e = { page: 'settings', section: 'personalization' },
        ye = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              E()(u()(o), '_render', function () {
                var e = o.props.settings,
                  t = e.allowDeviceAccess,
                  n = e.allowLocationHistoryUse,
                  a = e.allowPartnerships,
                  r = e.allowPersonalization,
                  i = o.state,
                  c = i.showDisableEUConfirmation,
                  s = i.showSwitchAllConfirmation
                return g.a.createElement(
                  K.a,
                  null,
                  g.a.createElement(
                    K.a,
                    null,
                    g.a.createElement(
                      V.b,
                      { color: 'gray700', size: 'subtext2', style: [H.a.infoText, H.a.bottomBorder] },
                      o._isLoggedIn ? Q : J,
                    ),
                  ),
                  g.a.createElement(B.a, {
                    checked: o._getSwitchAllValue(),
                    helpText: $,
                    key: 'switchAll',
                    label: Z,
                    name: 'switchAll',
                    onChange: o._handleSwitchAllChanged,
                    type: 'switch',
                  }),
                  g.a.createElement(G.a, null),
                  g.a.createElement(Y.b, { text: ee }),
                  g.a.createElement(B.a, {
                    checked: r,
                    disabled: o._adsPersonalizationOSLevelDisabled,
                    helpText: o._adsPersonalizationOSLevelDisabled ? le : se,
                    key: 'allowPersonalization',
                    label: ce,
                    learnMoreLink: 'https://support.twitter.com/articles/20170405',
                    name: 'allowPersonalization',
                    onChange: o._handleBooleanChanged,
                  }),
                  g.a.createElement(B.a, {
                    checked: t,
                    helpText: de,
                    key: 'allowDeviceAccess',
                    label: ue,
                    learnMoreLink: 'https://support.twitter.com/articles/20175257',
                    name: 'allowDeviceAccess',
                    onChange: o._handleBooleanChanged,
                  }),
                  o._isLoggedIn &&
                    g.a.createElement(B.a, {
                      checked: n,
                      helpText: he,
                      key: 'allowLocationHistoryUse',
                      label: fe,
                      name: 'allowLocationHistoryUse',
                      onChange: o._handleBooleanChanged,
                    }),
                  g.a.createElement(G.a, null),
                  g.a.createElement(Y.b, { text: te }),
                  o._renderCookiePersonalizationSetting(),
                  g.a.createElement(B.a, {
                    checked: a,
                    helpText: ge,
                    key: 'allowPartnerships',
                    label: be,
                    learnMoreLink: 'https://support.twitter.com/articles/20175379',
                    name: 'allowPartnerships',
                    onChange: o._handleBooleanChanged,
                  }),
                  o._isLoggedIn && g.a.createElement(z.a, { label: ne, link: '/settings/your_twitter_data' }),
                  c &&
                    g.a.createElement(W.a, {
                      cancelButtonLabel: ie,
                      confirmButtonLabel: oe,
                      onCancel: o._handleCancelDisableEU,
                      onConfirm: o._handleDisableEUCookies,
                      text: re,
                    }),
                  s &&
                    g.a.createElement(W.a, {
                      confirmButtonLabel: ae.confirmButtonLabel,
                      headline: ae.headline,
                      onCancel: o._handleCancelSwitchAll,
                      onConfirm: o._handleConfirmSwitchAll,
                      text: ae.text,
                    }),
                )
              }),
              E()(u()(o), '_handleCancelSwitchAll', function () {
                o.setState({ showSwitchAllConfirmation: !1 })
              }),
              E()(u()(o), '_handleConfirmSwitchAll', function () {
                o._handleBulkUpdateSettings(!1)
              }),
              E()(u()(o), '_handleSwitchAllChanged', function (e, t) {
                t ? o._handleBulkUpdateSettings(!0) : o.setState({ showSwitchAllConfirmation: !0 })
              }),
              E()(u()(o), '_handleCancelDisableEU', function () {
                o.setState({ showDisableEUConfirmation: !1 })
              }),
              E()(u()(o), '_handleEUCookiesChanged', function () {
                o.setState({ showDisableEUConfirmation: !0 })
              }),
              E()(u()(o), '_handleDisableEUCookies', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.updateSettings)({ allowCookieUse: !1 }).catch(t()), o.setState({ showDisableEUConfirmation: !1 })
              }),
              E()(u()(o), '_handleBulkUpdateSettings', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.isEUUser,
                  r = t.settings,
                  i = t.updateSettings,
                  c = {}
                Object.keys(r).forEach(function (t) {
                  ;(a && 'allowCookieUse' === t) || (c[t] = e)
                }),
                  o._scribeAction('toggle_all', c),
                  i(c).catch(n()),
                  o.setState({ showSwitchAllConfirmation: !1 })
              }),
              E()(u()(o), '_handleBooleanChanged', function (e, t) {
                var n = o.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.updateSettings,
                  i = E()({}, e, t)
                o._scribeAction(e, i), r(i).catch(a())
              }),
              E()(u()(o), '_scribeAction', function (e, t) {
                ;(0, o.props.scribeAction)(r()(r()({}, _e), {}, { component: e, action: 'edit' }), { metadata: t })
              }),
              E()(u()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              (o.state = { showSwitchAllConfirmation: !1, showDisableEUConfirmation: !1 }),
              o
            )
          }
          return (
            s()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.context.loggedInUserId
                  this._handleFetchPreferences(),
                    (this._isLoggedIn = !!e),
                    (this._adsPersonalizationOSLevelDisabled =
                      !_.canUseDOM ||
                      (window.apkInterface &&
                        window.apkInterface.isOsAdsTrackingOn &&
                        !window.apkInterface.isOsAdsTrackingOn()))
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.googleAnalyticsPageView,
                    a = e.scribePageImpression,
                    r = e.syncSettings
                  n(_e), a(_e), !this._isLoggedIn && _.canUseDOM && r().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return g.a.createElement(
                    D.c,
                    { namespace: _e },
                    g.a.createElement(
                      U.a,
                      { location: n, title: X },
                      g.a.createElement(
                        F.a,
                        null,
                        g.a.createElement(P.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchPreferences,
                          render: this._render,
                        }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderCookiePersonalizationSetting',
                value: function () {
                  var e,
                    t = this.props.isEUUser,
                    n = this.props.settings.allowCookieUse,
                    a = !!n,
                    r = !1,
                    o = N.a,
                    i = pe
                  return (
                    t
                      ? ((e = Ee), a ? (o = this._handleEUCookiesChanged) : (r = !0))
                      : ((e = me), (o = this._handleBooleanChanged)),
                    g.a.createElement(B.a, {
                      checked: n,
                      disabled: r,
                      helpText: e,
                      key: 'allowCookieUse',
                      label: i,
                      learnMoreLink: 'https://support.twitter.com/articles/20169421',
                      name: 'allowCookieUse',
                      onChange: o,
                    })
                  )
                },
              },
              {
                key: '_getSwitchAllValue',
                value: function () {
                  var e = this.props.settings,
                    t = Object(R.b)(e)
                  return 'some' === t || 'all' === t
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      E()(ye, 'contextType', q.a)
      t.default = I(Object(j.a)(ye))
    },
    foB5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        c = n('3XMw'),
        s = n.n(c).a.ee87e71c,
        l = ((a = {}), o()(a, i.a.SelfMuteError, { toast: { text: s } }), o()(a, 'showToast', !0), a)
    },
    hBoh: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M16.5 2h-9C6.26 2 5.25 3.01 5.25 4.25v15.5C5.25 20.99 6.26 22 7.5 22h9c1.24 0 2.25-1.01 2.25-2.25V4.25C18.75 3.01 17.74 2 16.5 2zm-9 1.5h9c.413 0 .75.337.75.75v11.865H6.75V4.25c0-.413.337-.75.75-.75zm9 17h-9c-.413 0-.75-.337-.75-.75v-2.135h10.5v2.135c0 .413-.337.75-.75.75z',
              }),
              i.a.createElement('path', {
                d: 'M12.583 18.322h-1.166c-.414 0-.75.336-.75.75s.336.75.75.75h1.166c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    i6OR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var a,
        r = n('KEM+'),
        o = n.n(r),
        i = (n('jQ3i'), n('x4t0'), n('2G9S'), n('IAdD'), n('LW0h'), n('7x/C'), n('vrRf'), n('z84I'), n('u3ZE')),
        c = n('3IPs'),
        s = n('ZNT5'),
        l = n('eR3e'),
        u = 'search-',
        d = ' near:me',
        f =
          ((a = {}),
          o()(a, c.c.Top, {}),
          o()(a, c.c.Live, { tweet_search_mode: c.c.Live }),
          o()(a, c.c.User, { result_filter: c.c.User }),
          o()(a, c.c.Image, { result_filter: c.c.Image }),
          o()(a, c.c.Video, { result_filter: c.c.Video }),
          a),
        h = function (e) {
          return (function (e) {
            return e === i.a.SpellingCorrectionRevertClick || e === i.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        p = function () {
          return function (e, t) {
            e(
              Object(l.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(u)
                })
                .map(function (e) {
                  return Object(l.g)(e)
                }),
            )
          }
        }
      t.b = function (e) {
        var t = e.query,
          n = e.searchMode,
          a = void 0 === n ? c.c.Top : n,
          r = e.querySource,
          o = e.searchFilters,
          i = e.vertical,
          l = e.urtEndpointOptions,
          p = h(r),
          m = o && o.peopleFilter ? 'searcher_follows' : void 0,
          E = m ? '-pf' : '',
          b = o && o.locationFilter && !t.includes(d) ? ''.concat(t).concat(d) : t,
          g = ''.concat(u).concat(b, '-').concat(a).concat(p).concat(E)
        return Object(s.a)({
          timelineId: g,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
              { q: b, social_filter: m, vertical: i },
              f[a],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: a === c.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    iKTg: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    'jU/U': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationsScreen', function () {
          return ae
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('2G9S'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        g = n.n(b),
        _ = n('EPsT'),
        y = n('dZRF'),
        v = n('uo4S'),
        S = n('kGix'),
        w = n('rxPX'),
        C = n('0KEI'),
        A = function (e, t) {
          return Object(S.d)(y.d(e), v.d(e, t))
        },
        T = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: A, applications: y.a.selectUniqUnrevokedApps, sessions: v.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: y.b,
              fetchSessionsIfNeeded: v.a,
              revokeAllSessions: v.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'applications' }),
        k = n('v//M'),
        L = n('yoO3'),
        O = n('VIKJ'),
        I = n('ZvNX'),
        F = n('eM8g'),
        P = n('7FtF'),
        R = n('6vad'),
        x = n('FIs5'),
        M = n('csss'),
        N = n('0yYu'),
        D = n('t62R'),
        U = n('rHpw'),
        H = n('3XMw'),
        K = n.n(H),
        j = n('U+bB'),
        V = n('MWbm'),
        B = K.a.i23e2807,
        G = K.a.dd823129,
        Y = K.a.ae1bbb26,
        z = K.a.ae72d4c4,
        W = K.a.i859a9d3,
        q = K.a.e5e8a899,
        X = K.a.hb12114e,
        Q = K.a.f810f279,
        J = K.a.ge06310e,
        Z = K.a.dd1b86f9,
        $ = K.a.ee4b16f8,
        ee = K.a.gf673efb,
        te = K.a.e25e40f0,
        ne = K.a.d1baa458,
        ae = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              E()(u()(e), '_fetchApps', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchApplications)().catch(n({ showToast: !0 }))
              }),
              E()(u()(e), '_fetchSessions', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSessionsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              E()(u()(e), '_handleRetry', function () {
                e._fetchApps(), e._fetchSessions()
              }),
              E()(u()(e), '_handleLogOutAll', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.revokeAllSessions)().catch(n({ showToast: !0 }))
              }),
              E()(u()(e), '_render', function () {
                var t = e.props.applications
                return g.a.createElement(
                  V.a,
                  null,
                  g.a.createElement(R.b, { text: B }),
                  t.length ? null : g.a.createElement(x.a, { header: J, message: $ }),
                  t.map(function (e, t) {
                    var n = '/settings/applications/'.concat(e.app_id)
                    return g.a.createElement(M.a, {
                      description: e.organization ? Z({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: n,
                      thumbnail: g.a.createElement(j.a, {
                        accessibilityLabel: '',
                        source: e.img_url,
                        style: re.avatar,
                      }),
                    })
                  }),
                  e._renderSessionsDashboard(),
                )
              }),
              E()(u()(e), '_renderSession', function (e, t) {
                var n = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return g.a.createElement(I.a, {
                  key: e.token,
                  link: n,
                  session: e,
                  withBottomBorder: !t,
                  withSummary: !1,
                })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchApps(), this._fetchSessions()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return g.a.createElement(
                    L.a,
                    null,
                    g.a.createElement(
                      P.a,
                      { location: n, title: z },
                      g.a.createElement(k.a, {
                        accessibilityLabel: q,
                        fetchStatus: t,
                        onRequestRetry: this._handleRetry,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderSessionsDashboard',
                value: function () {
                  var e = this,
                    t = this.props.sessions,
                    n = t.length,
                    a = Object(O.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    o = r()(a, 2),
                    i = o[0],
                    c = o[1]
                  return n
                    ? g.a.createElement(
                        V.a,
                        null,
                        g.a.createElement(N.a, null),
                        g.a.createElement(R.b, { text: G }),
                        i[0] ? this._renderSession(i[0], !1) : null,
                        g.a.createElement(_.a, {
                          confirmationSheetConfirmButtonLabel: Y,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: Q,
                          confirmationSheetText: ne,
                          label: X,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        g.a.createElement(
                          F.a,
                          null,
                          g.a.createElement(
                            K.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: n > 1 ? ee({ num: n - 1 }) : te },
                            g.a.createElement(
                              D.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              K.a.j3223a5b({ learnMoreLabel: W }),
                            ),
                          ),
                        ),
                        g.a.createElement(N.a, null),
                        c.map(function (t, a) {
                          return e._renderSession(t, n - 1 === a)
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      E()(ae, 'defaultProps', { applications: [], sessions: [] })
      var re = U.a.create(function (e) {
        return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
      })
      t.default = T(ae)
    },
    'jm1/': function (e, t, n) {
      'use strict'
      n('uFXj')
      var a = n('rHpw').a.create(function (e) {
        return {
          avatarContainer: { height: e.spaces.space48, width: e.spaces.space48 },
          avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' },
          appText: { flexShrink: 1, marginHorizontal: e.spaces.space16, width: '100%' },
          badge: {
            paddingHorizontal: e.spaces.space4,
            marginLeft: e.spaces.space12,
            cursor: 'default',
            backgroundColor: e.colors.gray50,
            flexShrink: 2,
          },
          center: { justifyContent: 'center' },
          device: { flexDirection: 'row', width: '100%' },
          infoItem: {
            justifyContent: 'center',
            minHeight: e.spaces.space48,
            paddingHorizontal: e.spaces.space16,
            paddingVertical: e.spaces.space12,
          },
          permissionContainer: {
            paddingVertical: e.componentDimensions.gutterVertical,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
          },
          itemContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            width: '100%',
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            width: '100%',
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
          link: { whiteSpace: 'nowrap' },
          linkIcon: { color: e.colors.gray700, marginRight: e.spaces.space4 },
        }
      })
      t.a = a
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = n('t62R'),
        u = n('I4+6'),
        d = n('cm6r'),
        f = n('rHpw'),
        h = n('MWbm'),
        p = ['align', 'color', 'label'],
        m = f.a.create(function (e) {
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
          o = e.label,
          c = i()(e, p),
          E = u.a.generate({
            backgroundColor: f.a.theme.colors.transparent,
            color: f.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          h.a,
          { style: m.container },
          s.a.createElement(
            d.a,
            r()({}, c, { interactiveStyles: E, style: m.root }),
            s.a.createElement(l.b, { align: n, color: a }, o),
          ),
        )
      }
    },
    mEn7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EmailScreen', function () {
          return Y
        })
      var a = n('ddV6'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = n('ERkP'),
        g = n.n(b),
        _ = n('vEo5'),
        y = n('1YZw'),
        v = n('P1r1'),
        S = n('rxPX'),
        w = n('0KEI'),
        C = Object(S.a)()
          .propsFromState(function () {
            return { emails: _.selectEmails, fetchStatus: _.selectFetchStatus }
          })
          .propsFromActions(function () {
            return {
              addToast: y.b,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_EMAIL_SCREEN',
              ),
              fetchDevices: _.fetchDevices,
              fetchSettings: v.e,
              resendConfirmationEmail: _.resendConfirmationEmail,
              updateEmail: _.updateEmail,
            }
          })
          .withAnalytics({ page: 'settings', section: 'email' }),
        A = n('v//M'),
        T = n('yoO3'),
        k = n('VIKJ'),
        L = n('7FtF'),
        O = n('MWbm'),
        I = n('p+r5'),
        F = n('0yYu'),
        P = n('jtO7'),
        R = n('FR63'),
        x = n('t62R'),
        M = n('3XMw'),
        N = n.n(M),
        D = N.a.i2209530,
        U = N.a.ebeeac1a,
        H = N.a.dc013356,
        K = N.a.ea28c7ce,
        j = N.a.f3f66251,
        V = N.a.i5107de3,
        B = N.a.d19fd429,
        G = N.a.g4da3245,
        Y = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              E()(u()(o), '_render', function () {
                var e,
                  t,
                  n = o.props.emails,
                  a = Object(k.a)(n, function (e) {
                    return e.email_verified
                  }),
                  i = r()(a, 2),
                  c = i[0],
                  s = i[1],
                  l = null === (e = c[0]) || void 0 === e ? void 0 : e.email,
                  u = null === (t = s[0]) || void 0 === t ? void 0 : t.email
                return g.a.createElement(
                  O.a,
                  null,
                  l
                    ? g.a.createElement(I.a, {
                        defaultValue: l,
                        editable: !1,
                        label: H,
                        name: 'current_email',
                        type: 'email',
                      })
                    : null,
                  u ? o._renderUnverifiedEmailMessage(u) : null,
                  g.a.createElement(F.a, null),
                  g.a.createElement(P.a, { color: 'primary', label: n.length ? V : j, link: '/i/flow/add_email' }),
                )
              }),
              E()(u()(o), '_renderUnverifiedEmailMessage', function (e) {
                return g.a.createElement(
                  R.a,
                  null,
                  g.a.createElement(
                    x.b,
                    { color: 'gray700' },
                    g.a.createElement(
                      N.a.I18NFormatMessage,
                      { $i18n: 'f3c4e2c5', unverifiedEmail: e },
                      g.a.createElement(
                        x.b,
                        { accessibilityRole: 'button', color: 'link', onClick: o._handleResendVerification },
                        N.a.h021352e({ resendConfirmationLabel: B }),
                      ),
                    ),
                  ),
                )
              }),
              E()(u()(o), '_handleResendVerification', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.createLocalApiErrorHandler
                ;(0, e.resendConfirmationEmail)().then(function () {
                  return t({ text: G })
                }, n({ showToast: !0 }))
              }),
              E()(u()(o), '_handleFetchDevices', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchDevices)({ include_pending_email: !0 }).catch(t({ showToast: !0 }))
              }),
              (o.state = { email: void 0 }),
              o._handleFetchDevices(),
              (o._initialPath = o._previousPath = window.location.pathname),
              o
            )
          }
          return (
            s()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.createLocalApiErrorHandler,
                    r = n.fetchSettings
                  return (
                    this._previousPath !== location.pathname &&
                      this._initialPath === location.pathname &&
                      (this._handleFetchDevices(), r().catch(a())),
                    (this._previousPath = location.pathname),
                    e !== this.props || t !== this.state
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return g.a.createElement(
                    L.a,
                    { location: n, submitDisabled: !this.state.email, submitLabel: D, title: U },
                    g.a.createElement(
                      T.a,
                      null,
                      g.a.createElement(A.a, {
                        accessibilityLabel: K,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetchDevices,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = C(Y)
    },
    oFxb: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('ho0z'), n('1t7P'), n('jQ/y'), n('uFXj'), n('ERkP')),
        E = n.n(m),
        b = n('zfvc'),
        g = n('t62R'),
        _ = n('fyvP'),
        y = n('rHpw'),
        v = n('CK8+'),
        S = n('MWbm'),
        w = 1,
        C = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            return (
              r()(this, n),
              (e = t.call(this)),
              p()(s()(e), '_handleGateToggle', function () {
                var t = e.props,
                  n = t.defaultOption,
                  a = t.name,
                  r = t.offValue,
                  o = t.onChange,
                  i = t.options
                o(a, t.value === r ? (null == n ? void 0 : n.value) || i[0].value : r)
              }),
              p()(s()(e), '_handleAnimationComplete', function () {
                e._radioGroupRef && e._radioGroupRef.focus()
              }),
              p()(s()(e), '_setRadioGroupRef', function (t) {
                e._radioGroupRef = t
              }),
              (e._labelId = 'RADIO_GROUP_'.concat(w, '_LABEL')),
              (w += 1),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.description,
                    a = e.disabled,
                    r = e.label,
                    o = e.name,
                    i = e.offValue,
                    c = e.onChange,
                    s = e.options,
                    l = e.value
                  return E.a.createElement(
                    S.a,
                    {
                      accessibilityLabel: t,
                      accessibilityLabelledBy: r && !t ? this._labelId : void 0,
                      accessibilityRole: 'group',
                      style: [A.root, a && A.disabled],
                    },
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      r
                        ? E.a.createElement(
                            S.a,
                            { accessibilityRole: 'label', nativeID: this._labelId, style: A.header },
                            E.a.createElement(
                              S.a,
                              { style: A.label },
                              E.a.createElement(g.b, { weight: 'bold' }, r),
                              E.a.createElement(v.a, {
                                disabled: a,
                                onValueChange: this._handleGateToggle,
                                value: l !== i,
                              }),
                            ),
                            n ? E.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, n) : null,
                          )
                        : null,
                      s &&
                        E.a.createElement(
                          b.b,
                          { onAnimateComplete: this._handleAnimationComplete, show: l !== i },
                          E.a.createElement(
                            S.a,
                            null,
                            E.a.createElement(
                              S.a,
                              { style: A.radioGroup, tabIndex: 0 },
                              E.a.createElement(_.a, {
                                accessibilityLabel: t || r,
                                disabled: a,
                                name: o,
                                onChange: c,
                                options: s,
                                ref: this._setRadioGroupRef,
                                value: l,
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
        })(E.a.Component)
      p()(C, 'defaultProps', { disabled: !1 })
      var A = y.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground },
          header: {
            alignItems: 'flex-start',
            marginHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space16,
          },
          label: {
            paddingBottom: e.spaces.space4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          },
          radioGroup: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            marginHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          disabled: { opacity: 0.5 },
        }
      })
    },
    oWwl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PushNotificationsScreen', function () {
          return ie
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('2G9S'), n('KqXw'), n('MvUL'), n('kPZX')),
        g = n('ERkP'),
        _ = n.n(g),
        y = n('zh9S'),
        v = n('vEo5'),
        S = n('1YZw'),
        w = n('hqKg'),
        C = n('auX9'),
        A = n('G6rE'),
        T = n('0KEI'),
        k = n('oEGd'),
        L = Object(w.createSelector)(
          v.selectPushSettingsFetchStatus,
          function (e) {
            var t = A.e.selectLoggedInUser(e)
            return t && t.verified
          },
          v.selectBrowserPushStatus,
          v.selectPushSettings,
          v.selectPushTemplate,
          C.j,
          function (e, t, n, a, r, o) {
            return {
              fetchStatus: e,
              isVerified: t,
              pushStatus: n,
              pushSettings: a,
              pushTemplate: r,
              hasMultiAccount: o && o.length > 0,
            }
          },
        ),
        O = {
          addToast: S.b,
          createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_NOTIFICATIONS_PUSH_SCREEN',
          ),
          fetchPushSettingsIfNeeded: v.fetchPushSettingsIfNeeded,
          googleAnalyticsPageView: y.googleAnalyticsPageView,
          pushSubscribe: v.pushSubscribe,
          removePushDeviceIfSubscribed: v.removePushDeviceIfSubscribed,
          scribeAction: y.scribeAction,
          scribePageImpression: y.scribePageImpression,
          updatePushNotificationSettings: v.updatePushNotificationSettings,
        },
        I = Object(k.f)(L, O),
        F = n('kGix'),
        P = n('v//M'),
        R = n('3XMw'),
        x = n.n(R),
        M = (n('z84I'), n('+KXO'), n('ho0z'), n('SrIh')),
        N = n('0yYu'),
        D = n('6vad'),
        U = n('3JAx'),
        H = n('e0ey'),
        K = x.a.b40d0145,
        j = x.a.b68050dc,
        V = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              E()(u()(e), '_handleSettingChanged', function (t) {
                return function (n, a) {
                  var o = e.props,
                    i = o.onChange,
                    c = o.scribeAction,
                    s = o.scribeNamespace,
                    l = E()({}, n, a)
                  c(r()(r()({}, s), {}, { component: t, action: a })), i(l)
                }
              }),
              E()(u()(e), '_handleBooleanChanged', function (t) {
                return function (n, a) {
                  e._handleSettingChanged(t)(n, a ? 'on' : 'off')
                }
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.currentSettings,
                    a = t.isVerified,
                    r = t.template.template.settings
                  return r.length
                    ? _.a.createElement(
                        'div',
                        null,
                        r.map(function (t, r) {
                          return _.a.createElement(
                            'div',
                            { key: r },
                            t.section_header
                              ? _.a.createElement(
                                  _.a.Fragment,
                                  null,
                                  _.a.createElement(N.a, null),
                                  _.a.createElement(D.b, { text: t.section_header }),
                                )
                              : null,
                            t.section_entries.map(function (t, r) {
                              if ('vit-only' === t.vit && !a) return null
                              if ('vit-off' === t.vit && a) return null
                              switch (t.control_type) {
                                case 'list':
                                  var o = t.selections.map(function (e) {
                                    var t = Object.keys(e)[0]
                                    return { label: e[t], value: t }
                                  })
                                  return (
                                    o.push({ label: t.off_description, value: 'off' }),
                                    _.a.createElement(U.a, {
                                      key: t.id,
                                      label: t.name,
                                      name: t.id,
                                      onChange: e._handleSettingChanged(t.scribe_component),
                                      options: o,
                                      value: n[t.id],
                                    })
                                  )
                                case 'tweet_control':
                                  var i = n[t.id] && 'on' === n[t.id]
                                  return _.a.createElement(H.a, {
                                    checked: i,
                                    helpText: K,
                                    key: t.id,
                                    label: t.name,
                                    learnMoreLabel: j,
                                    learnMoreLink: '/settings/device_follow',
                                    name: t.id,
                                    onChange: e._handleBooleanChanged(t.scribe_component),
                                  })
                                case 'on_off':
                                  var c = n[t.id] && 'on' === n[t.id]
                                  return _.a.createElement(H.a, {
                                    checked: c,
                                    key: t.id,
                                    label: t.name,
                                    name: t.id,
                                    onChange: e._handleBooleanChanged(t.scribe_component),
                                  })
                                default:
                                  return Object(M.a)('Unsupported control type: '.concat(t.control_type)), null
                              }
                            }),
                          )
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        B = n('7FtF'),
        G = n('FIs5'),
        Y = x.a.hee41732,
        z = x.a.dcef34ab,
        W = x.a.a39f706d,
        q = x.a.hee41732,
        X = x.a.bb443ca5,
        Q = x.a.cdce0394,
        J = x.a.b39bcae1,
        Z = x.a.e542c362,
        $ = x.a.fe11b3e9,
        ee = x.a.a1245d3a,
        te = x.a.f580c738,
        ne = x.a.i4ac9969,
        ae = x.a.d8f69f09,
        re = { page: 'settings', section: 'push_notifications' },
        oe = function () {
          return b.e() === b.a.APK_PUSH
        },
        ie = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              E()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.isVerified,
                  a = t.pushSettings,
                  r = t.pushStatus,
                  o = t.pushTemplate,
                  i = t.scribeAction,
                  c = 'denied' === b.d()
                if (r.subscribed)
                  return _.a.createElement(V, {
                    currentSettings: a,
                    isVerified: n,
                    onChange: e._handleSettingsChanged,
                    scribeAction: i,
                    scribeNamespace: re,
                    template: o,
                  })
                if (c) {
                  var s = oe() ? ae : ne
                  return _.a.createElement(G.a, { header: te, message: s })
                }
                return r.supported
                  ? _.a.createElement(G.a, {
                      buttonText: z,
                      header: J,
                      message: Z,
                      onButtonPress: e._handlePushSubscribe,
                    })
                  : _.a.createElement(G.a, { header: $, message: ee })
              }),
              E()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchPushSettingsIfNeeded)().catch(n())
              }),
              E()(u()(e), '_handleSettingsChanged', function (t) {
                var n = e.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.updatePushNotificationSettings)(t).catch(a({ showToast: !0 }))
              }),
              E()(u()(e), '_handleSwitchChanged', function (t, n) {
                var a = e.props,
                  o = a.createLocalApiErrorHandler,
                  i = a.pushSubscribe,
                  c = a.removePushDeviceIfSubscribed,
                  s = a.scribeAction
                n
                  ? (s(r()(r()({}, re), {}, { action: 'enable' })), i().catch(o()))
                  : (s(r()(r()({}, re), {}, { action: 'disable' })), c().catch(o({ showToast: !0 })))
              }),
              E()(u()(e), '_handlePushSubscribe', function () {
                e.props.scribeAction(r()(r()({}, re), {}, { element: 'soft_prompt', action: 'click' })),
                  e.props.pushSubscribe()
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(re), t(re)
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function (e) {
                  e.fetchStatus === F.a.LOADED &&
                    !1 === b.g() &&
                    (this.props.addToast({ text: W }), e.history.replace('/settings')),
                    e.fetchStatus === F.a.LOADED &&
                      !e.pushStatus.subscribed &&
                      e.pushStatus.supported &&
                      this.props.scribeAction(r()(r()({}, re), {}, { element: 'soft_prompt', action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.hasMultiAccount,
                    a = e.location,
                    r = e.pushStatus,
                    o =
                      !oe() && r.supported
                        ? _.a.createElement(H.a, {
                            checked: r.subscribed,
                            helpText: X + (n ? ' '.concat(Q) : ''),
                            key: 'switchAll',
                            label: q,
                            name: 'switchAll',
                            onChange: this._handleSwitchChanged,
                            type: 'switch',
                          })
                        : null
                  return _.a.createElement(
                    B.a,
                    { location: a, title: Y },
                    o,
                    _.a.createElement(P.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      t.default = I(ie)
    },
    oX5A: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'disableLoginVerificationLabel', function () {
          return j
        }),
        n.d(t, 'disableLabel', function () {
          return B
        }),
        n.d(t, 'oldDisableMethodLabel', function () {
          return G
        }),
        n.d(t, 'LoginVerificationScreen', function () {
          return Oe
        })
      var a,
        r,
        o,
        i = n('VrFO'),
        c = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        u = n('1Pcy'),
        d = n.n(u),
        f = n('5Yy7'),
        h = n.n(f),
        p = n('2VqO'),
        m = n.n(p),
        E = n('KEM+'),
        b = n.n(E),
        g = (n('yH/f'), n('0zG9'), n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('z84I'), n('ERkP')),
        _ = n.n(g),
        y = n('k49u'),
        v = n('wvRX'),
        S = n('rxPX'),
        w = n('0KEI'),
        C = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: v.f, loginVerificationSettings: v.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LOGIN_VERIFICATION_SCREEN',
              ),
              deleteSecurityKey: v.a,
              disableLoginVerification: v.b,
              disableLoginVerificationMethod: v.c,
              enrollIn2FA: v.d,
              fetchLoginVerificationSettings: v.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'loginVerification' }),
        A = n('v//M'),
        T = n('3XMw'),
        k = n.n(T),
        L = n('N9bX'),
        O = n('yoO3'),
        I = n('7FtF'),
        F = n('eb3s'),
        P = n('6vad'),
        R = n('e0ey'),
        x = n('jtO7'),
        M = n('csss'),
        N = n('0yYu'),
        D = n('v6aA'),
        U = k.a.bc262c2d,
        H = k.a.hc1a91da,
        K = k.a.gee4dc74,
        j = k.a.b39c7b14,
        V = k.a.a923fce6,
        B = k.a.ff781e0a,
        G = k.a.c557ac30,
        Y = k.a.d1334649,
        z = k.a.ee3a7bf9,
        W = k.a.aa9139cc,
        q = k.a.i0d4f09e,
        X = k.a.a219e217,
        Q = k.a.e0d79de8,
        J = k.a.ja6bbfa0,
        Z = k.a.dd703318,
        $ = k.a.i859a9d3,
        ee = k.a.c2570921,
        te = k.a.f3820211,
        ne = k.a.ab61b41a,
        ae = k.a.h4787492,
        re = k.a.h6d0d89c,
        oe = k.a.f57be1cc,
        ie = k.a.e2b81a1f,
        ce = k.a.cd195528,
        se = k.a.b1686800,
        le = k.a.a1860ee7,
        ue = k.a.j45a2856,
        de = k.a.d8612d9c,
        fe = k.a.e13d4467,
        he = k.a.j24c37b2,
        pe = k.a.c1d96d6a,
        me = k.a.gf91694d,
        Ee = k.a.a219e217,
        be = k.a.j265ddb6,
        ge = k.a.a136ecac,
        _e = k.a.fc2a5c92,
        ye = k.a.d7bfde1a,
        ve = 'two_factor',
        Se = 'Sms',
        we = 'Totp',
        Ce = 'U2fSecurityKey',
        Ae =
          ((a = {}),
          b()(a, ve, 'two_factor'),
          b()(a, Se, 'two_factor_auth_sms'),
          b()(a, we, 'two_factor_auth_totp'),
          b()(a, Ce, 'two_factor_auth_u2f_security_key'),
          a),
        Te =
          ((r = {}),
          b()(r, Se, '/i/flow/two-factor-sms-enrollment'),
          b()(r, we, '/i/flow/two-factor-auth-app-enrollment'),
          b()(r, Ce, '/i/flow/two-factor-security-key-enrollment'),
          r),
        ke = ((o = {}), b()(o, Se, 'sms'), b()(o, we, 'authenticationApp'), b()(o, Ce, 'securityKey'), o),
        Le = Object.freeze({
          NONE: 'NONE',
          VERIFY_EMAIL: 'verify_email',
          METHOD: 'method',
          ROOT_SETTING: 'root_setting',
          ENABLE_LOGIN_VERIFICATION: 'enable_login_verification',
          MAX_SECURITY_KEY_LIMIT_REACHED: 'max_security_key_limit_reached',
          STANDALONE_SECURITY_KEY: 'standalone_security_key',
          SUSPENDED: 'suspended',
        }),
        Oe = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              b()(d()(r), '_initialPath', window.location.pathname),
              b()(d()(r), '_previousPath', r._initialPath),
              b()(d()(r), '_render', function () {
                var e = r.props.loginVerificationSettings.isOldPushUser
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  e ? r._renderLegacyPush2FASettings() : r._render2FASettings(),
                  r.state.confirmationType !== Le.NONE ? r._renderConfirmationSheet() : null,
                )
              }),
              b()(d()(r), '_renderConfirmationSheet', function () {
                switch (r.state.confirmationType) {
                  case Le.ROOT_SETTING:
                    return _.a.createElement(F.a, {
                      confirmButtonLabel: z,
                      headline: B,
                      onCancel: r._handleCloseConfirmation,
                      onConfirm: r._handleConfirmDisableLoginVerification,
                      text: V,
                    })
                  case Le.METHOD:
                    return _.a.createElement(F.a, {
                      confirmButtonLabel: z,
                      headline: B,
                      onCancel: r._handleCloseConfirmation,
                      onConfirm: r._handleConfirmDisableMethod,
                      text: Y,
                    })
                  case Le.VERIFY_EMAIL:
                    return _.a.createElement(F.a, {
                      cancelButtonLabel: $,
                      cancelButtonLink: 'https://help.twitter.com/managing-your-account/cant-confirm-my-email-address',
                      confirmButtonLabel: Ee,
                      headline: be,
                      onCancel: r._handleCloseConfirmation,
                      onConfirm: r._handleCloseConfirmation,
                      text: ge,
                    })
                  case Le.ENABLE_LOGIN_VERIFICATION:
                    return _.a.createElement(F.a, {
                      confirmButtonLabel: he,
                      headline: de,
                      onConfirm: r._handleCloseConfirmation,
                      text: fe,
                      withCancelButton: !1,
                    })
                  case Le.MAX_SECURITY_KEY_LIMIT_REACHED:
                    return _.a.createElement(F.a, {
                      confirmButtonLabel: he,
                      headline: pe,
                      onConfirm: r._handleCloseConfirmation,
                      text: me,
                      withCancelButton: !1,
                    })
                  case Le.STANDALONE_SECURITY_KEY:
                    return _.a.createElement(F.a, {
                      confirmButtonLabel: X,
                      onConfirm: r._handleCloseConfirmation,
                      text: Q,
                      withCancelButton: !1,
                    })
                  case Le.SUSPENDED:
                    return _.a.createElement(F.a, {
                      confirmButtonLabel: he,
                      headline: _e,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/suspended-twitter-accounts',
                      learnMoreText: $,
                      onConfirm: r._handleCloseConfirmation,
                      text: ye,
                      withCancelButton: !1,
                    })
                  default:
                    return null
                }
              }),
              b()(d()(r), '_handleRetry', function () {
                r.props.fetchLoginVerificationSettings()
              }),
              b()(d()(r), '_handleTwoFactorEnrollmentChange', function (e, t) {
                if (t) {
                  var n = r.props,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.enrollIn2FA)({ flow: ve }).catch(a(r._enrollmentErrorHandlingMap))
                } else r._showDisableLoginVerificationConfirmation()
              }),
              b()(d()(r), '_handleTwoFactorMethodsChange', function (e, t) {
                var n = r.props.createLocalApiErrorHandler
                t
                  ? r._isOcf2faEnrollmentEnabled
                    ? r.props.history.push({ pathname: Te[e] })
                    : (0, r.props.enrollIn2FA)({ flow: Ae[e] }).catch(n(r._enrollmentErrorHandlingMap))
                  : r._isOcf2faUnenrollmentEnabled
                  ? r.props.history.push({
                      pathname: '/i/flow/two-factor-unenrollment',
                      query: {
                        input_flow_data: JSON.stringify({ requested_variant: JSON.stringify({ method: ke[e] }) }),
                      },
                    })
                  : r._showDisableMethodConfirmation(e)
              }),
              b()(d()(r), '_handleAddSecurityKey', function () {
                var e = r.props.loginVerificationSettings.methods
                e[Ce] && e[Ce].length >= L.a
                  ? r.setState({ confirmationType: Le.MAX_SECURITY_KEY_LIMIT_REACHED })
                  : r._handleTwoFactorMethodsChange(Ce, !0)
              }),
              b()(d()(r), '_showDisableLoginVerificationConfirmation', function () {
                r.setState({ confirmationType: Le.ROOT_SETTING })
              }),
              b()(d()(r), '_handleConfirmDisableLoginVerification', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.disableLoginVerification
                r._handleCloseConfirmation(), n().catch(t())
              }),
              b()(d()(r), '_showStandaloneSecurityKeyNotification', function () {
                r.setState({ confirmationType: Le.STANDALONE_SECURITY_KEY })
              }),
              b()(d()(r), '_showDisableMethodConfirmation', function (e) {
                ;(e !== Se && e !== we && e !== Ce) || r.setState({ confirmationType: Le.METHOD, method: e })
              }),
              b()(d()(r), '_handleConfirmDisableMethod', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteSecurityKey,
                  a = e.disableLoginVerificationMethod,
                  o = e.loginVerificationSettings.methods,
                  i = r.state.method
                if ((r._handleCloseConfirmation(), i === Ce && Array.isArray(o[Ce]) && o[Ce].length))
                  Promise.all(
                    o[Ce].map(function (e) {
                      return n({ securityKeyId: e.id })
                    }),
                  ).catch(t(r._disableMethodErrorHandlingMap))
                else if (i) {
                  var c = i !== Ce && !(Se in o && we in o) && Array.isArray(o[Ce]) && 1 === o[Ce].length
                  a({ method: i })
                    .then(function () {
                      r._isStandaloneSecurityKeyEnabled && c && r._showStandaloneSecurityKeyNotification()
                    })
                    .catch(t(r._disableMethodErrorHandlingMap))
                }
              }),
              b()(d()(r), '_showVerifyEmailConfirmation', function () {
                r.setState({ confirmationType: Le.VERIFY_EMAIL })
              }),
              b()(d()(r), '_showEnableLoginVerificationConfirmation', function () {
                r.setState({ confirmationType: Le.ENABLE_LOGIN_VERIFICATION })
              }),
              b()(d()(r), '_showSuspendedConfirmation', function () {
                r.setState({ confirmationType: Le.SUSPENDED })
              }),
              b()(d()(r), '_handleCloseConfirmation', function () {
                r.setState({ confirmationType: Le.NONE, method: void 0 })
              }),
              b()(d()(r), '_isChecked', function (e) {
                var t = r.props.loginVerificationSettings.methods[e]
                return Array.isArray(t) ? t.length > 0 : !!t
              }),
              b()(d()(r), '_createEnrollmentErrorHandlingMap', function () {
                var e,
                  t = r.props.history
                return (
                  (e = {}),
                  b()(e, y.a.AccessDeniedByBouncer, {
                    customAction: function (e) {
                      var n = e.bounce_location
                      n &&
                        t.push({
                          state: { bounce_location: n },
                          pathname: '/settings/account/login_verification/enrollment',
                        })
                    },
                  }),
                  b()(e, y.a.CannotEnableLoginVerificationUnconfirmedEmail, {
                    customAction: function () {
                      r._showVerifyEmailConfirmation()
                    },
                  }),
                  b()(e, y.a.CannotEnrollLoginVerificationNotYetEnabled, {
                    customAction: function () {
                      r._showEnableLoginVerificationConfirmation()
                    },
                  }),
                  b()(e, y.a.CurrentUserSuspended, {
                    customAction: function () {
                      r._showSuspendedConfirmation()
                    },
                  }),
                  e
                )
              }),
              (r.state = { confirmationType: Le.NONE, method: void 0 }),
              (r._disableMethodErrorHandlingMap = b()({}, y.a.IneligibleFor2faAfterModification, {
                customAction: function () {
                  r._showDisableLoginVerificationConfirmation()
                },
              })),
              (r._enrollmentErrorHandlingMap = r._createEnrollmentErrorHandlingMap()),
              (r._isStandaloneSecurityKeyEnabled = r.context.featureSwitches.isTrue(
                'account_2fa_standalone_security_key_enabled',
              )),
              (r._isOcf2faEnrollmentEnabled = r.context.featureSwitches.isTrue('ocf_2fa_enrollment_enabled')),
              (r._isOcf2faUnenrollmentEnabled = r.context.featureSwitches.isTrue('ocf_2fa_unenrollment_enabled')),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchLoginVerificationSettings)().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._previousPath !== location.pathname &&
                    this._initialPath === location.pathname &&
                    this.props.fetchLoginVerificationSettings(),
                    (this._previousPath = location.pathname)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return _.a.createElement(
                    O.a,
                    null,
                    _.a.createElement(
                      I.a,
                      { location: n, title: Z },
                      _.a.createElement(A.a, {
                        accessibilityLabel: J,
                        fetchStatus: t,
                        onRequestRetry: this._handleRetry,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_render2FASettings',
                value: function () {
                  var e = this.props.loginVerificationSettings.twoFactorAuthEnabled
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(P.b, { text: Z }),
                    _.a.createElement(R.a, {
                      checked: e && this._isChecked(Se),
                      helpText: te,
                      label: ee,
                      name: Se,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    _.a.createElement(R.a, {
                      checked: e && this._isChecked(we),
                      helpText: ae,
                      label: ne,
                      name: we,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    _.a.createElement(R.a, {
                      checked: e && this._isChecked(Ce),
                      helpText: this.context.featureSwitches.isTrue('responsive_web_new_copy_security_key_2fa_enabled')
                        ? ie
                        : oe,
                      label: re,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
                      name: Ce,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    e ? this._renderU2fSecurityKeyLinks() : null,
                    e ? this._renderAdditionalMethods() : null,
                  )
                },
              },
              {
                key: '_renderU2fSecurityKeyLinks',
                value: function () {
                  var e
                  return null !== (e = this.props.loginVerificationSettings.methods[Ce]) && void 0 !== e && e.length
                    ? this._isOcf2faEnrollmentEnabled
                      ? _.a.createElement(x.a, {
                          align: 'left',
                          color: 'primary',
                          label: se,
                          link: { pathname: '/settings/account/login_verification/security_keys' },
                        })
                      : _.a.createElement(
                          _.a.Fragment,
                          null,
                          _.a.createElement(M.a, {
                            label: se,
                            link: { pathname: '/settings/account/login_verification/security_keys' },
                          }),
                          _.a.createElement(x.a, {
                            align: 'left',
                            color: 'primary',
                            label: ce,
                            onPress: this._handleAddSecurityKey,
                          }),
                        )
                    : null
                },
              },
              {
                key: '_renderLegacyPush2FASettings',
                value: function () {
                  var e = this.props.loginVerificationSettings.twoFactorAuthEnabled
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(R.a, {
                      checked: e,
                      helpText: q,
                      label: W,
                      name: 'legacy_push',
                      onChange: this._handleTwoFactorEnrollmentChange,
                    }),
                    this._renderAdditionalMethods(),
                  )
                },
              },
              {
                key: '_renderAdditionalMethods',
                value: function () {
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(N.a, null),
                    _.a.createElement(P.b, { text: U }),
                    _.a.createElement(M.a, {
                      description: K,
                      label: H,
                      link: '/settings/account/login_verification/backup_code',
                    }),
                    _.a.createElement(M.a, {
                      description: ue,
                      label: le,
                      link: '/settings/account/login_verification/temporary_password',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      b()(Oe, 'contextType', D.a)
      t.default = C(Oe)
    },
    oXNP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SecurityKeysScreen', function () {
          return V
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('z84I'), n('ho0z'), n('ERkP')),
        E = n.n(m),
        b = n('k49u'),
        g = n('wvRX'),
        _ = n('rxPX'),
        y = n('0KEI'),
        v = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: g.f, loginVerificationSettings: g.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SECURITY_KEYS_SCREEN',
              ),
              enrollIn2FA: g.d,
              fetchLoginVerificationSettings: g.e,
            }
          }),
        S = n('v//M'),
        w = n('3XMw'),
        C = n.n(w),
        A = n('N9bX'),
        T = n('5FtR'),
        k = n('7FtF'),
        L = n('RKmr'),
        O = n('eb3s'),
        I = n('csss'),
        F = n('t62R'),
        P = n('jtO7'),
        R = n('v6aA'),
        x = C.a.j24c37b2,
        M = C.a.c1d96d6a,
        N = C.a.gf91694d,
        D = C.a.b1686800,
        U = C.a.f7954a0c,
        H = C.a.h69986c1,
        K = C.a.i5896ba2,
        j = C.a.a8ef2b64,
        V = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              p()(s()(o), '_initialPath', window.location.pathname),
              p()(s()(o), '_previousPath', o._initialPath),
              p()(s()(o), '_renderContent', function () {
                var e = o.props,
                  t = e.location,
                  n = e.loginVerificationSettings.methods
                return !(!n.U2fSecurityKey || !n.U2fSecurityKey.length)
                  ? E.a.createElement(
                      k.a,
                      { location: t, title: D },
                      E.a.createElement(L.a, { description: H }),
                      o._renderU2fSecurityKeys(),
                      o.state.showMaxKeyLimitConfirmation ? o._renderMaxKeyLimitConfirmation() : null,
                    )
                  : E.a.createElement(T.a, { to: '/settings/account/login_verification' })
              }),
              p()(s()(o), '_renderMaxKeyLimitConfirmation', function () {
                return E.a.createElement(O.a, {
                  confirmButtonLabel: x,
                  headline: M,
                  onConfirm: o._handleCloseConfirmation,
                  text: N,
                  withCancelButton: !1,
                })
              }),
              p()(s()(o), '_fetchLoginVerificationSettings', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchLoginVerificationSettings)().catch(t())
              }),
              p()(s()(o), '_handleAddSecurityKey', function () {
                var e = o.props.loginVerificationSettings.methods
                Array.isArray(e.U2fSecurityKey) && e.U2fSecurityKey.length >= A.a
                  ? o.setState({ showMaxKeyLimitConfirmation: !0 })
                  : o._handleKeyEnroll()
              }),
              p()(s()(o), '_handleKeyEnroll', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.enrollIn2FA,
                  a = e.history
                o._isOcf2faEnrollmentEnabled
                  ? a.push({ pathname: '/i/flow/two-factor-security-key-enrollment' })
                  : n({ flow: 'two_factor_auth_u2f_security_key' }).catch(t(o._enrollmentErrorHandlingMap))
              }),
              p()(s()(o), '_handleCloseConfirmation', function () {
                o.setState({ showMaxKeyLimitConfirmation: !1 })
              }),
              p()(s()(o), '_handleFetchRetry', function () {
                return o._fetchLoginVerificationSettings()
              }),
              (o.state = { showMaxKeyLimitConfirmation: !1 }),
              (o._enrollmentErrorHandlingMap = o._createEnrollmentErrorHandlingMap()),
              (o._isOcf2faEnrollmentEnabled = o.context.featureSwitches.isTrue('ocf_2fa_enrollment_enabled')),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchLoginVerificationSettings()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._previousPath !== location.pathname &&
                    this._initialPath === location.pathname &&
                    this._fetchLoginVerificationSettings(),
                    (this._previousPath = location.pathname)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return E.a.createElement(S.a, {
                    accessibilityLabel: U,
                    fetchStatus: e,
                    onRequestRetry: this._handleFetchRetry,
                    render: this._renderContent,
                  })
                },
              },
              {
                key: '_renderU2fSecurityKeys',
                value: function () {
                  var e = this.props.loginVerificationSettings.methods
                  return Array.isArray(e.U2fSecurityKey)
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        e.U2fSecurityKey.map(function (e) {
                          return E.a.createElement(I.a, {
                            key: e.id,
                            label: E.a.createElement(F.b, null, e.name || '('.concat(j, ')')),
                            link: { pathname: '/settings/account/login_verification/security_keys/'.concat(e.id) },
                          })
                        }),
                        E.a.createElement(P.a, {
                          align: 'left',
                          color: 'primary',
                          label: K,
                          onPress: this._handleAddSecurityKey,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_createEnrollmentErrorHandlingMap',
                value: function () {
                  var e = this.props.history
                  return p()({}, b.a.AccessDeniedByBouncer, {
                    customAction: function (t) {
                      var n = t.bounce_location
                      n &&
                        e.push({
                          state: { bounce_location: n },
                          pathname: '/settings/account/login_verification/enrollment',
                        })
                    },
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(V, 'contextType', R.a)
      var B = v(V)
      t.default = B
    },
    q1AG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ScreenNameScreen', function () {
          return j
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = n('P1r1'),
        g = n('LXAX'),
        _ = n('G6rE'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = Object(y.a)()
          .propsFromState(function () {
            return { loggedInUser: _.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              clearUsernameAvailability: g.a,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SCREEN_NAME_SCREEN',
              ),
              updateSettings: b.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'screen_name' }),
        w = n('3XMw'),
        C = n.n(w),
        A = n('yoO3'),
        T =
          (n('ho0z'),
          n('z84I'),
          n('LW0h'),
          n('7x/C'),
          Object(y.a)()
            .propsFromState(function () {
              return { loggedInUser: _.e.selectLoggedInUser, usernameData: g.c }
            })
            .adjustStateProps(function (e) {
              var t,
                n = e.loggedInUser,
                a = e.usernameData,
                r = (
                  a.suggestions
                    ? a.suggestions.map(function (e) {
                        return e.suggestion
                      })
                    : []
                ).filter(function (e) {
                  return e !== a.username
                }),
                o = null == n ? void 0 : n.screen_name
              return {
                loggedInUser: n,
                suggestions: r,
                valid:
                  (!!o && o.toLowerCase() === (null === (t = a.username) || void 0 === t ? void 0 : t.toLowerCase())) ||
                  a.valid,
                validatedScreenName: a.username,
                validationError: a.desc,
              }
            })
            .propsFromActions(function () {
              return { fetchUsernameAvailability: g.b }
            })),
        k = n('VY6S'),
        L = n('MWbm'),
        O = n('t62R'),
        I = n('p+r5'),
        F = n('0yYu'),
        P = n('6vad'),
        R = n('rHpw'),
        x = C.a.d1f6d336,
        M = C.a.de65c756,
        N = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_fetchUsernameStatus', function (e) {
                var t = a.props,
                  n = t.fetchUsernameAvailability,
                  r = t.loggedInUser
                r &&
                  n({ email: r.email && r.email[0] && r.email[0].address, full_name: r.name, suggest: !0, username: e })
              }),
              p()(s()(a), '_handleTypedFieldChange', function (e) {
                var t = a.props.onScreenNameChanged
                a._fetchUsernameStatusDebounced(e.target.value),
                  a.setState({ value: e.target.value }),
                  t(e.target.value)
              }),
              p()(s()(a), '_handleItemSelect', function (e) {
                var t = a.props.onScreenNameChanged
                if (e.target instanceof Node) {
                  var n = e.target.textContent
                  a.setState({ value: n }), t(n)
                }
              }),
              (a.state = { value: e.loggedInUser && e.loggedInUser.screen_name }),
              (a._fetchUsernameStatusDebounced = Object(k.a)(function () {
                var e
                return (e = a)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.loggedInUser
                  e && this._fetchUsernameStatus(e.screen_name)
                },
              },
              {
                key: '_renderOption',
                value: function (e, t) {
                  return E.a.createElement(
                    O.b,
                    {
                      accessibilityRole: 'button',
                      color: 'link',
                      key: t,
                      onPress: this._handleItemSelect,
                      style: D.altOptionText,
                      withInteractiveStyling: !0,
                    },
                    e,
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.loggedInUser,
                    a = t.suggestions,
                    r = t.valid,
                    o = t.validatedScreenName,
                    i = t.validationError
                  if (!n) return null
                  var c = !(o === n.screen_name || r || !i)
                  return E.a.createElement(
                    L.a,
                    null,
                    E.a.createElement(I.a, {
                      autoComplete: 'off',
                      autoCorrect: !1,
                      errorText: i,
                      invalid: c,
                      label: x,
                      name: 'typedScreenName',
                      onChange: this._handleTypedFieldChange,
                      spellCheck: 'false',
                      value: this.state.value,
                    }),
                    E.a.createElement(F.a, null),
                    E.a.createElement(P.b, { text: M }),
                    E.a.createElement(
                      L.a,
                      { style: D.container },
                      a.map(function (t, n) {
                        return e._renderOption(t, n)
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        D = R.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            altOptionText: { display: 'block', paddingVertical: e.spaces.space12 },
          }
        }),
        U = T(N),
        H = n('7FtF'),
        K = C.a.je506a60,
        j = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_handleCancel', function () {
                a.props.history.goBack({ backLocation: '/settings' })
              }),
              p()(s()(a), '_handleSubmit', function () {
                var e = a.props,
                  t = e.clearUsernameAvailability,
                  n = e.createLocalApiErrorHandler,
                  r = e.updateSettings,
                  o = a.state.screenName
                o &&
                  (t({ persistSuggestions: !0 }),
                  r({ screen_name: o })
                    .then(function () {
                      t({ persistSuggestions: !1 }), a._handleCancel()
                    })
                    .catch(n({ showToast: !0 })))
              }),
              p()(s()(a), '_handleScreenNameChange', function (e) {
                a.setState({ screenName: e })
              }),
              (a.state = { screenName: void 0 }),
              a
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.loggedInUser,
                    a = this.state.screenName,
                    r = a && n && a !== n.screen_name
                  return E.a.createElement(
                    A.a,
                    null,
                    E.a.createElement(
                      H.a,
                      { location: t, onSubmit: this._handleSubmit, submitDisabled: !r, title: K },
                      E.a.createElement(U, { onScreenNameChanged: this._handleScreenNameChange }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = S(j)
    },
    's+x+': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ManageSecurityKeyScreen', function () {
          return K
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('KqXw'), n('WNMA'), n('hBpG'), n('7x/C'), n('ho0z'), n('0zG9'), n('Blm6'), n('ERkP')),
        E = n.n(m),
        b = n('wvRX'),
        g = n('rxPX'),
        _ = n('0KEI'),
        y = Object(g.a)()
          .propsFromState(function () {
            return { fetchStatus: b.f, loginVerificationSettings: b.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_MANAGE_SECURITY_KEY_SCREEN',
              ),
              fetchLoginVerificationSettings: b.e,
            }
          }),
        v = n('v//M'),
        S = n('3XMw'),
        w = n.n(S),
        C = n('5FtR'),
        A = n('7FtF'),
        T = n('MWbm'),
        k = n('p+r5'),
        L = n('RKmr'),
        O = n('0yYu'),
        I = n('jtO7'),
        F = n('rHpw'),
        P = w.a.d4e220b3,
        R = w.a.g6d0f0b6,
        x = w.a.b894f68a,
        M = w.a.g2601bb5,
        N = w.a.b464b726,
        D = w.a.a4101e1b,
        U = w.a.a9f397f3,
        H = w.a.a8ef2b64,
        K = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_initialPath', window.location.pathname),
              p()(s()(e), '_previousPath', e._initialPath),
              p()(s()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.location,
                  a = t.loginVerificationSettings.methods.U2fSecurityKey,
                  r = t.match.params.securityKeyId,
                  o =
                    Array.isArray(a) &&
                    a.find(function (e) {
                      return e.id === r
                    }),
                  i = o && e._getSecurityKeyAddedDate(o.createdAtMs)
                return o
                  ? E.a.createElement(
                      A.a,
                      { location: n, title: R },
                      E.a.createElement(
                        T.a,
                        null,
                        E.a.createElement(k.a, {
                          defaultValue: o.name || '('.concat(H, ')'),
                          editable: !1,
                          label: P,
                          name: 'current_security_key',
                          style: j.formTextInput,
                        }),
                        E.a.createElement(
                          T.a,
                          { style: j.settingDescriptionCellContainer },
                          E.a.createElement(L.a, { description: D({ securityKeyAddedDate: i }) }),
                        ),
                        E.a.createElement(O.a, null),
                        E.a.createElement(I.a, {
                          color: 'primary',
                          label: M,
                          link: {
                            pathname: '/i/flow/rename-security-key',
                            query: { input_flow_data: JSON.stringify({ requested_variant: o.id }) },
                          },
                        }),
                        E.a.createElement(I.a, {
                          color: 'red500',
                          label: N,
                          link: {
                            pathname: '/i/flow/delete-security-key',
                            query: { input_flow_data: JSON.stringify({ requested_variant: o.id }) },
                          },
                        }),
                      ),
                    )
                  : E.a.createElement(C.a, { to: '/settings/account/login_verification' })
              }),
              p()(s()(e), '_fetchLoginVerificationSettings', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchLoginVerificationSettings)().catch(n())
              }),
              p()(s()(e), '_getSecurityKeyAddedDate', function (e) {
                if (e) {
                  var t = new Date(parseInt(e, 10))
                  return U(t)
                }
                return ''
              }),
              p()(s()(e), '_handleFetchRetry', function () {
                return e._fetchLoginVerificationSettings()
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchLoginVerificationSettings()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._previousPath !== location.pathname &&
                    this._initialPath === location.pathname &&
                    this._fetchLoginVerificationSettings(),
                    (this._previousPath = location.pathname)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return E.a.createElement(v.a, {
                    accessibilityLabel: x,
                    fetchStatus: e,
                    onRequestRetry: this._handleFetchRetry,
                    render: this._renderContent,
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        j = F.a.create(function (e) {
          return {
            formTextInput: { paddingBottom: 0 },
            settingDescriptionCellContainer: { paddingLeft: e.spaces.space12 },
          }
        }),
        V = y(K)
      t.default = V
    },
    tJyY: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('PFE4'),
        r = n('Rdmj'),
        o = n('3XMw'),
        i = n.n(o),
        c = i.a.hd7cb7cf,
        s = i.a.e9f1fbcb
      t.default = Object(r.a)({
        scribeNamespace: { page: 'blocked', section: 'auto_blocked_accounts' },
        blockType: a.a.AutoBlock,
        emptyStateTitle: s,
        emptyStateMessage: c,
      })
    },
    tfP1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PhoneScreen', function () {
          return q
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = n('ERkP'),
        E = n.n(m),
        b = n('EPsT'),
        g = n('vEo5'),
        _ = n('wvRX'),
        y = n('1YZw'),
        v = n('P1r1'),
        S = n('rxPX'),
        w = n('0KEI'),
        C = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: g.selectFetchStatus, phones: g.selectPhoneNumbers, loginVerificationSettings: _.g }
          })
          .propsFromActions(function () {
            return {
              addToast: y.b,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PHONE_SCREEN',
              ),
              fetchDevices: g.fetchDevices,
              fetchSettings: v.e,
              removeDevice: g.removeDevice,
              fetchLoginVerificationSettings: _.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'phone' }),
        A = n('v//M'),
        T = n('3XMw'),
        k = n.n(T),
        L = n('yoO3'),
        O = n('7FtF'),
        I = n('MWbm'),
        F = n('p+r5'),
        P = n('0yYu'),
        R = n('jtO7'),
        x = n('v6aA'),
        M = k.a.cb841d55,
        N = k.a.dc013356,
        D = k.a.ce37ea43,
        U = k.a.ibaf239e,
        H = k.a.j2636557,
        K = { headline: k.a.e49b16d3, text: k.a.i931719e, confirmButtonLabel: k.a.d96cf7cd },
        j = k.a.j841d1f4,
        V = k.a.e49b16d3,
        B = k.a.f0977f51,
        G = k.a.da23c5b6,
        Y = k.a.hf186732,
        z = { headline: V, text: G, confirmButtonLabel: B },
        W = { headline: V, text: Y, confirmButtonLabel: B },
        q = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var o
            return (
              r()(this, n),
              (o = t.call(this, e, a)),
              p()(s()(o), 'state', { awaitingPin: !1, phone: null, isPhoneValid: null, smsVerifyError: void 0 }),
              p()(s()(o), '_renderOCFPhone', function () {
                var e = o.props.phones,
                  t = e[0] && e[0].phone_number
                return E.a.createElement(
                  I.a,
                  null,
                  t
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(F.a, { defaultValue: t, editable: !1, label: N, name: 'current_phone' }),
                        E.a.createElement(P.a, null),
                      )
                    : null,
                  E.a.createElement(R.a, { color: 'primary', label: t ? U : D, link: '/i/flow/add_phone' }),
                  t ? o._renderDeleteButton() : null,
                )
              }),
              p()(s()(o), '_handleFetchDevices', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchDevices)().catch(t({ showToast: !0 }))
              }),
              p()(s()(o), '_handleGoBack', function () {
                o.props.history.goBack({ backLocation: '/settings' })
              }),
              p()(s()(o), '_handleRemove', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.createLocalApiErrorHandler,
                  a = e.fetchLoginVerificationSettings,
                  r = e.loginVerificationSettings,
                  i = r.methods,
                  c = r.twoFactorAuthEnabled,
                  s = e.phones,
                  l = e.removeDevice
                s[0] &&
                  l(s[0].phone_number).then(function () {
                    t({ text: j }), c && 'Sms' in i && a().catch(n()), o._handleGoBack()
                  }, n({ showToast: !0 }))
              }),
              o._handleFetchDevices(),
              (o._initialPath = o._previousPath = window.location.pathname),
              (o._isStandaloneSecurityKeyEnabled = o.context.featureSwitches.isTrue(
                'account_2fa_standalone_security_key_enabled',
              )),
              o
            )
          }
          return (
            i()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.createLocalApiErrorHandler,
                    r = n.fetchLoginVerificationSettings,
                    o = n.fetchSettings
                  return (
                    this._previousPath !== location.pathname &&
                      this._initialPath === location.pathname &&
                      (this._handleFetchDevices(), o().catch(a()), r().catch(a())),
                    (this._previousPath = location.pathname),
                    e !== this.props || t !== this.state
                  )
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchLoginVerificationSettings)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return E.a.createElement(
                    L.a,
                    null,
                    E.a.createElement(
                      O.a,
                      { location: n, title: M },
                      E.a.createElement(A.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetchDevices,
                        render: this._renderOCFPhone,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderDeleteButton',
                value: function () {
                  var e = this.props.loginVerificationSettings,
                    t = e.methods,
                    n =
                      e.twoFactorAuthEnabled && 'Sms' in t
                        ? 'Totp' in t || (this._isStandaloneSecurityKeyEnabled && 'U2fSecurityKey' in t)
                          ? W
                          : z
                        : K
                  return E.a.createElement(b.a, {
                    confirmationSheetConfirmButtonLabel: n.confirmButtonLabel,
                    confirmationSheetConfirmButtonType: 'destructiveFilled',
                    confirmationSheetHeadline: n.headline,
                    confirmationSheetText: n.text,
                    label: H,
                    onConfirmationSheetConfirm: this._handleRemove,
                    withBottomBorder: !1,
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      p()(q, 'contextType', x.a)
      t.default = C(q)
    },
    tvRM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emailSettingsLabels', function () {
          return re
        }),
        n.d(t, 'EmailNotificationsScreen', function () {
          return ie
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        g = n.n(b),
        _ = n('G6rE'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = (n('7x/C'), n('JtPf'), n('oEOe')),
        w = n('RqPI'),
        C = n('kGix'),
        A = n('XMGw'),
        T = n('Ssj5'),
        k = ''.concat(A.a, '/email_notifications'),
        L = 'rweb/'.concat(k),
        O = S.a(L, 'FETCH_EMAIL_NOTIFICATIONS'),
        I = S.a(L, 'UPDATE_EMAIL_NOTIFICATIONS'),
        F = { emailSettings: {}, error: null, fetchStatus: C.a.NONE }
      function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case O.REQUEST:
            return r()(r()({}, e), {}, { fetchStatus: C.a.LOADING })
          case O.FAILURE:
            return r()(r()({}, e), {}, { error: t.payload, fetchStatus: C.a.FAILED })
          case O.SUCCESS:
            return r()(r()({}, e), {}, { emailSettings: t.payload, error: null, fetchStatus: C.a.LOADED })
          case I.SUCCESS:
            return r()(
              r()({}, e),
              {},
              { emailSettings: r()(r()({}, e.emailSettings), t.meta), error: null, fetchStatus: C.a.LOADED },
            )
          default:
            return e
        }
      }
      T.a.register(E()({}, k, P))
      var R = function (e) {
          return e[k].fetchStatus
        },
        x = function (e) {
          return e[k].emailSettings
        },
        M = function () {
          return function (e, t) {
            return R(t()) === C.a.LOADED ? Promise.resolve() : e(N())
          }
        },
        N = function () {
          return function (e, t, n) {
            var a = n.api,
              r = w.r(t())
            return S.b(e, { params: { userId: r }, request: a.EmailNotificationSettings.fetch })({
              actionTypes: O,
              context: 'FETCH_EMAIL_NOTIFICATIONS',
            })
          }
        },
        D = function (e) {
          return function (t, n, a) {
            var r = a.api,
              o = w.r(n())
            return S.c(t, { params: { userId: o, settings: e }, request: r.EmailNotificationSettings.update })({
              actionTypes: I,
              context: 'UPDATE_EMAIL_NOTIFICATIONS',
              meta: e,
            })
          }
        },
        U = function (e) {
          var t = _.e.selectLoggedInUser(e)
          return !(!t || !t.verified)
        },
        H = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: R, isVerified: U, emailSettings: x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_NOTIFICATIONS_EMAIL_SCREEN',
              ),
              fetchEmailSettingsIfNeeded: M,
              updateEmailSettings: D,
            }
          })
          .withAnalytics({ page: 'settings', section: 'email_notifications' }),
        K = n('45mF'),
        j =
          (n('yH/f'), Object.freeze({ Daily: 'Daily', Weekly: 'Weekly', Periodically: 'Periodically', None: 'None' })),
        V = n('v//M'),
        B = n('3XMw'),
        G = n.n(B),
        Y = n('yoO3'),
        z = n('7FtF'),
        W = n('MWbm'),
        q = n('e0ey'),
        X = n('3JAx'),
        Q = n('0yYu'),
        J = n('6vad')
      function Z(e) {
        return j[e] || 'None'
      }
      var $ = G.a.e75f25a8,
        ee = G.a.b2c4ab0a,
        te = G.a.ic2ea6b5,
        ne = G.a.f823bbbe,
        ae = G.a.b47cc5f3,
        re = {
          send_twitter_emails: G.a.e75f25a8,
          send_email_vit_weekly: G.a.e8eb54af,
          send_network_activity_email: G.a.ib80b0f1,
          send_new_direct_text_email: G.a.i58a274b,
          send_shared_tweet_email: G.a.b109e307,
          send_network_digest: G.a.ddd34fa1,
          send_performance_digest: G.a.b7ea9501,
          send_email_newsletter: G.a.af38c138,
          send_activation_email: G.a.cb881bc2,
          send_resurrection_email: G.a.e4a5e08d,
          send_partner_email: G.a.be91c4ff,
          send_survey_email: G.a.f296795c,
          send_follow_recs_email: G.a.ddfe3776,
          send_similar_people_email: G.a.d17ba8c1,
          send_smb_sales_marketing_email: G.a.jf51b93c,
        },
        oe = [
          { label: G.a.fcad1e2d, value: 'Daily' },
          { label: G.a.h9e0dfde, value: 'Weekly' },
          { label: G.a.e26d98ab, value: 'Periodically' },
          { label: G.a.e3a761ee, value: 'None' },
        ],
        ie = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              E()(u()(e), '_renderBooleanSetting', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  a = e.props.emailSettings,
                  r = n || {},
                  o = r.helpText,
                  i = r.learnMoreLink,
                  c = r.type,
                  s = re[t]
                return a.hasOwnProperty(t)
                  ? g.a.createElement(q.a, {
                      checked: a[t],
                      disabled: !a.send_twitter_emails && 'send_twitter_emails' !== t,
                      helpText: o,
                      key: t,
                      label: s,
                      learnMoreLink: i,
                      name: t,
                      onChange: e._handleBooleanSettingChanged(t),
                      type: c,
                    })
                  : null
              }),
              E()(u()(e), '_renderNetworkDigestSetting', function (t) {
                var n = e.props.emailSettings,
                  a = re[t],
                  r = n[t]
                return n.hasOwnProperty(t)
                  ? g.a.createElement(X.a, {
                      disabled: !n.send_twitter_emails,
                      key: t,
                      label: a,
                      name: t,
                      onChange: e._handleSelectSettingChanged(t),
                      options: oe,
                      value: r,
                    })
                  : null
              }),
              E()(u()(e), '_renderPerformanceDigestSetting', function (t, n) {
                var a = e.props.emailSettings,
                  r = re[t],
                  o = a[t]
                return a.hasOwnProperty(t)
                  ? g.a.createElement(q.a, {
                      checked: o && 'Weekly' === o,
                      disabled: !a.send_twitter_emails,
                      key: t,
                      label: r,
                      name: t,
                      onChange: e._handlePerformanceDigestSettingChanged(t),
                    })
                  : null
              }),
              E()(u()(e), '_render', function () {
                var t = e.props.isVerified
                return g.a.createElement(
                  W.a,
                  null,
                  e._renderBooleanSetting('send_twitter_emails', {
                    helpText: ae,
                    learnMoreLink:
                      'https://help.twitter.com/managing-your-account/updating-email-preferences#tweet-activity',
                    type: 'switch',
                    withBottomBorder: t,
                  }),
                  t
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(Q.a, null),
                        g.a.createElement(J.b, { text: ne }),
                        e._renderBooleanSetting('send_email_vit_weekly'),
                      )
                    : null,
                  g.a.createElement(Q.a, null),
                  g.a.createElement(J.b, { text: ee }),
                  e._renderBooleanSetting('send_network_activity_email'),
                  e._renderBooleanSetting('send_new_direct_text_email'),
                  e._renderBooleanSetting('send_shared_tweet_email'),
                  e._renderNetworkDigestSetting('send_network_digest'),
                  e._renderPerformanceDigestSetting('send_performance_digest', { withBottomBorder: !1 }),
                  g.a.createElement(Q.a, null),
                  g.a.createElement(J.b, { text: te }),
                  e._renderBooleanSetting('send_email_newsletter'),
                  e._renderBooleanSetting('send_activation_email'),
                  e._renderBooleanSetting('send_resurrection_email'),
                  e._renderBooleanSetting('send_partner_email'),
                  e._renderBooleanSetting('send_survey_email'),
                  e._renderBooleanSetting('send_follow_recs_email'),
                  e._renderBooleanSetting('send_similar_people_email'),
                  e._renderBooleanSetting('send_smb_sales_marketing_email', { withBottomBorder: !1 }),
                )
              }),
              E()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchEmailSettingsIfNeeded)().catch(n(r()(r()({}, Object(K.a)()), {}, { showToast: !0 })))
              }),
              E()(u()(e), '_handleSelectSettingChanged', function (t) {
                return function (n, a) {
                  var o = e.props,
                    i = o.createLocalApiErrorHandler,
                    c = o.updateEmailSettings,
                    s = {}
                  ;(s[t] = Z(a)), c(s).catch(i(r()(r()({}, Object(K.a)()), {}, { showToast: !0 })))
                }
              }),
              E()(u()(e), '_handleBooleanSettingChanged', function (t) {
                return function (n, a) {
                  var o = e.props,
                    i = o.createLocalApiErrorHandler,
                    c = o.updateEmailSettings,
                    s = {}
                  ;(s[t] = !!a), c(s).catch(i(r()(r()({}, Object(K.a)()), {}, { showToast: !0 })))
                }
              }),
              E()(u()(e), '_handlePerformanceDigestSettingChanged', function (t) {
                return function (n, a) {
                  var o = e.props,
                    i = o.createLocalApiErrorHandler,
                    c = o.updateEmailSettings,
                    s = {}
                  ;(s[t] = a ? 'Weekly' : 'None'), c(s).catch(i(r()(r()({}, Object(K.a)()), {}, { showToast: !0 })))
                }
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return g.a.createElement(
                    Y.a,
                    null,
                    g.a.createElement(
                      z.a,
                      { location: n, title: $ },
                      g.a.createElement(V.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = H(ie)
    },
    u3ZE: function (e, t, n) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
    uCpT: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsSecurityScreen', function () {
          return Y
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('yH/f'), n('ERkP')),
        g = n.n(b),
        _ = n('P1r1'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = Object(y.a)()
          .propsFromState(function () {
            return { settings: _.g }
          })
          .adjustStateProps(function (e) {
            return { protectPasswordReset: e.settings.protect_password_reset }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SECURITY_SCREEN',
              ),
              updateSettings: _.M,
            }
          }),
        w = n('3XMw'),
        C = n.n(w),
        A = n('yoO3'),
        T = n('98E1'),
        k = n('7JQg'),
        L = n('MWbm'),
        O = n('v6aA'),
        I = n('RKmr'),
        F = n('0yYu'),
        P = n('6vad'),
        R = n('e0ey'),
        x = n('csss'),
        M = C.a.j95edf76,
        N = C.a.a2197725,
        D = C.a.dd703318,
        U = C.a.eb89b0ef,
        H = C.a.ead60eb7,
        K = C.a.gfaf9a4a,
        j = C.a.he30e464,
        V = C.a.i859a9d3,
        B = { page: 'settings', section: 'security' },
        G = Object.freeze({}),
        Y = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n(e, a) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, a)),
              E()(u()(o), '_handleProtectPasswordResetChanged', function (e, t) {
                o.setState({ showPasswordDialog: !0, data: { protect_password_reset: t } })
              }),
              E()(u()(o), '_handlePasswordSubmit', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.updateSettings,
                  i = o.state.data
                a(r()(r()({}, i), {}, { current_password: e })).then(function () {
                  o.setState({ showPasswordDialog: !1, data: G })
                }, n({ showToast: !0 }))
              }),
              (o.state = { showPasswordDialog: !1, data: G }),
              o
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.protectPasswordReset,
                    a = this.state.showPasswordDialog
                  return g.a.createElement(
                    k.c,
                    { namespace: B },
                    g.a.createElement(
                      A.a,
                      null,
                      g.a.createElement(
                        T.a,
                        { location: t, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: a, title: M },
                        g.a.createElement(
                          L.a,
                          null,
                          g.a.createElement(I.a, { description: N }),
                          this._renderTwoFactorAuthentication(),
                          g.a.createElement(F.a, null),
                          g.a.createElement(P.b, { text: H }),
                          g.a.createElement(I.a, { description: j }),
                          g.a.createElement(R.a, {
                            checked: !!n,
                            label: K,
                            learnMoreLink: 'https://help.twitter.com/safety-and-security/account-security-tips',
                            name: 'protect_password_reset',
                            onChange: this._handleProtectPasswordResetChanged,
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderTwoFactorAuthentication',
                value: function () {
                  var e = g.a.createElement(P.b, { text: D }),
                    t = g.a.createElement(x.a, { label: D, link: '/settings/account/login_verification' }),
                    n = g.a.createElement(I.a, {
                      description: U,
                      learnMoreLabel: V,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
                    })
                  return g.a.createElement(g.a.Fragment, null, e, n, t)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      E()(Y, 'contextType', O.a)
      t.default = S(Y)
    },
    uD2z: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return l
        })
      n('KOtZ'), n('7x/C'), n('+KXO')
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.dae57a41,
        i = r.a.i7cbc154,
        c = r.a.e3a761ee,
        s = function (e) {
          switch (
            (function (e) {
              return Object.keys(e).reduce(function (t, n) {
                return e[n] ? t + 1 : t
              }, 0)
            })(e)
          ) {
            case Object.keys(e).length:
              return 'all'
            case 0:
              return 'none'
            default:
              return 'some'
          }
        },
        l = function (e) {
          return { some: i, none: c, all: o }[s(e)]
        }
    },
    uFYP: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    uo4S: function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return C
      }),
        n.d(t, 'e', function () {
          return A
        }),
        n.d(t, 'd', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return k
        }),
        n.d(t, 'c', function () {
          return O
        }),
        n.d(t, 'b', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('z84I'), n('1IsZ'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('hqKg'),
        l = n('kGix'),
        u = n('XMGw'),
        d = n('Ssj5'),
        f = n('iChn'),
        h = n('3A2y'),
        p = ''.concat(u.a, '/sessions'),
        m = 'rweb/'.concat(p),
        E = c.a(m, 'FETCH_SESSIONS'),
        b = c.a(m, 'REVOKE_SESSION'),
        g = c.a(m, 'REVOKE_ALL_SESSIONS'),
        _ = { fetchStatus: l.a.NONE, sessions: {} }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case E.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: l.a.LOADING })
          case E.FAILURE:
            return i()(i()({}, e), {}, { error: t.payload, fetchStatus: l.a.FAILED })
          case E.SUCCESS:
            return i()(
              i()({}, e),
              {},
              {
                error: null,
                fetchStatus: l.a.LOADED,
                sessions: Object(f.a)(S(t.payload), function (e) {
                  return e.token
                }),
              },
            )
          case b.SUCCESS:
            return i()(i()({}, e), {}, { sessions: Object(h.a)(e.sessions, t.meta.hashed_token) })
          default:
            return e
        }
      }
      d.a.register(r()({}, p, y))
      function v(e) {
        return {
          token: e.hashed_token,
          name: e.device_name,
          summary: e.device_summary,
          icon_type: e.icon_type,
          is_current_session: e.is_current_session,
          location: e.location,
          last_seen_time_ms: e.last_seen_at,
        }
      }
      var S = function (e) {
          var t, n, a, r, o
          return null != e &&
            null !== (t = e.viewer) &&
            void 0 !== t &&
            null !== (n = t.user_results) &&
            void 0 !== n &&
            null !== (a = n.result) &&
            void 0 !== a &&
            a.sessions_list
            ? e.viewer.user_results.result.sessions_list
            : null !== (r = e.viewer) && void 0 !== r && null !== (o = r.user) && void 0 !== o && o.sessions_list
            ? e.viewer.user.sessions_list
            : e.sessions
            ? e.sessions.map(v)
            : []
        },
        w = function (e) {
          return e[p].sessions
        },
        C = Object(s.createSelector)(w, function (e) {
          return Object.values(e)
        }),
        A = function (e, t) {
          return w(e)[t]
        },
        T = function (e) {
          return e[p].fetchStatus
        },
        k = function (e) {
          return function (t, n) {
            return T(n()) === l.a.LOADED ? Promise.resolve() : t(L(e))
          }
        },
        L = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c.b(t, { params: e, request: r.Settings.fetchSessions })({
              actionTypes: E,
              context: 'FETCH_SESSIONS',
            })
          }
        },
        O = function (e) {
          return function (t, n, a) {
            var r = a.api,
              o = { hashed_token: e }
            return c.b(t, { params: o, request: r.Settings.revokeSession })({
              actionTypes: b,
              context: 'REVOKE_SESSION',
              meta: { hashed_token: e },
            })
          }
        },
        I = function (e) {
          return function (t, n, a) {
            var r = a.api
            return c
              .b(t, { params: e, request: r.Settings.revokeAllSessions })({
                actionTypes: g,
                context: 'REVOKE_ALL_SESSIONS',
              })
              .then(function () {
                return L()(t, n, { api: r })
              })
          }
        }
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return p
      }),
        n.d(t, 'f', function () {
          return m
        }),
        n.d(t, 'e', function () {
          return E
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return S
        }),
        n.d(t, 'a', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return A
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('7x/C'), n('JtPf'), n('LW0h'), n('Ee2X'), n('Ssj5')),
        s = n('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, n, a) {
            return a.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        f = function (e, t) {
          var n = []
          if (e && e.user) {
            var a = e.user
            n = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== a.id)
            })
          } else if (e && e.topic) {
            var r = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== r.id)
            })
          } else if (e && e.event) {
            var o = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== o.id)
            })
          } else if (e && e.keyword) {
            var i = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== i.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        h = { fetched: !1, recentSearches: [] }
      var p = function (e) {
          return e.recentSearches.recentSearches
        },
        m = function (e) {
          return p(e)[0] || null
        },
        E = function (e) {
          return e.recentSearches.fetched
        },
        b = 'rweb/recentSearches/INIT_FROM_CACHE',
        g = function (e) {
          return { type: b, payload: e }
        },
        _ = 'rweb/recentSearches/REMOVE_QUERY',
        y = function (e) {
          return function (t, n, a) {
            a.userPersistence
            t({ payload: e, type: _ })
            var r = n().recentSearches
            return Object(s.n)(n()) ? t(d(r.recentSearches)) : Promise.resolve()
          }
        },
        v = 'rweb/recentSearches/CLEAR_ALL',
        S = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: v })
            var a = t().recentSearches
            return Object(s.n)(t()) ? e(d(a.recentSearches)) : Promise.resolve()
          }
        },
        w = 'rweb/recentSearches/ADD_QUERY',
        C = function (e) {
          return function (t, n, a) {
            a.userPersistence
            t({ payload: e, type: w })
            var r = n().recentSearches
            return Object(s.n)(n()) ? t(d(r.recentSearches)) : Promise.resolve()
          }
        },
        A = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var a = n.userPersistence,
                    r = t()
                  return Object(s.n)(r)
                    ? a
                        .get(u)
                        .then(function (t) {
                          e(g(t))
                        })
                        .catch(function () {
                          e(g())
                        })
                    : (e(g()), Promise.resolve())
                })
          }
        }
      c.a.register(
        r()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w:
              var n = t.payload,
                a = n ? f(n, e.recentSearches) : []
              return a.length > 49 && a.splice(49, 1), n && a.unshift(n), i()(i()({}, e), {}, { recentSearches: a })
            case _:
              var r = t.payload,
                o = r ? f(r, e.recentSearches) : []
              return i()(i()({}, e), {}, { recentSearches: o })
            case v:
              return { fetched: !0, recentSearches: [] }
            case b:
              return i()(i()(i()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    wvRX: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return y
      }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return S
        }),
        n.d(t, 'd', function () {
          return w
        }),
        n.d(t, 'a', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return A
        }),
        n.d(t, 'c', function () {
          return T
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        c = n('yiKp'),
        s = n.n(c),
        l = (n('KOtZ'), n('7x/C'), n('2G9S'), n('+KXO'), n('LW0h'), n('RqPI')),
        u = n('kGix'),
        d = n('Ssj5'),
        f = n('oEOe'),
        h = 'loginVerification',
        p = 'U2fSecurityKey',
        m = {
          REQUEST: 'rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_FAILURE',
        },
        E = {
          REQUEST: 'rweb/settings/loginVerification/DELETE_SECURITY_KEY_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/DELETE_SECURITY_KEY_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/DELETE_SECURITY_KEY_FAILURE',
        },
        b = {
          REQUEST: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_FAILURE',
        },
        g = {
          REQUEST: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_FAILURE',
        },
        _ = { isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {}, fetchStatus: u.a.NONE }
      d.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return s()(s()({}, e), {}, { fetchStatus: u.a.LOADING })
            case m.SUCCESS:
              if (!t.payload) return e
              var n = t.payload,
                a = n.isOldPushUser,
                o = n.methods,
                c = n.twoFactorAuthEnabled
              return s()(
                s()({}, e),
                {},
                {
                  isOldPushUser: a,
                  twoFactorAuthEnabled: c,
                  methods: o.reduce(function (e, t) {
                    var n = t.createdAtMs,
                      a = t.externalDisplayName,
                      r = t.id,
                      o = t.twoFactorType
                    if (o === p) {
                      var c = { createdAtMs: n, id: r, name: a }
                      e[o] = [].concat(i()(e[o] || []), [c])
                    } else e[o] = r
                    return e
                  }, {}),
                  fetchStatus: u.a.LOADED,
                },
              )
            case m.FAILURE:
              return s()(s()({}, e), {}, { error: t.payload, fetchStatus: u.a.FAILED })
            case b.REQUEST:
              return s()(s()({}, e), {}, { isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {} })
            case g.SUCCESS:
              var l = (t && t.meta && t.meta.method) || '',
                d = Object.keys(e.methods).reduce(function (t, n) {
                  return n !== l && (t[n] = e.methods[n]), t
                }, {})
              return s()(s()({}, e), {}, { methods: d })
            case E.SUCCESS:
              if (!t.meta) return e
              var f = e.methods,
                h = t.meta.securityKeyId,
                y = Array.isArray(f[p])
                  ? f[p].filter(function (e) {
                      return e.id !== h
                    })
                  : null
              return s()(s()({}, e), {}, { methods: s()(s()({}, f), {}, r()({}, p, y)) })
            default:
              return e
          }
        }),
      )
      var y = function (e) {
          return e[h]
        },
        v = function (e) {
          return e[h].fetchStatus
        },
        S = function () {
          return function (e, t, n) {
            var a = n.api,
              r = (n.featureSwitches, l.r(t()))
            return Object(f.b)(e, { params: { userId: r }, request: a.Settings.fetchLoginVerificationSettings })({
              actionTypes: m,
              context: 'FETCH_LOGIN_VERIFICATION_SETTINGS',
            })
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(f.d)(t, { params: e, request: r.Settings.enrollIn2FA })('TWO_FACTOR_ENROLLMENT')
          }
        },
        C = function (e) {
          var t = e.securityKeyId
          return function (e, n, a) {
            var r = a.api
            return Object(f.b)(e, { request: r.Settings.disable2FAMethod, params: { methodId: t } })({
              actionTypes: E,
              context: 'DELETE_SECURITY_KEY',
              meta: { securityKeyId: t },
            })
          }
        },
        A = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(f.c)(e, { request: a.Settings.disable2FA })({
              actionTypes: b,
              context: 'DISABLE_LOGIN_VERIFICATION',
            })
          }
        },
        T = function (e) {
          var t = e.method
          return function (e, n, a) {
            var r = a.api,
              o = y(n()).methods[t]
            return Object(f.b)(e, { request: r.Settings.disable2FAMethod, params: { methodId: o } })({
              actionTypes: g,
              context: 'DISABLE_LOGIN_VERIFICATION_METHOD',
              meta: { method: t },
            })
          }
        }
    },
    xCYy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      })
      var a = n('ERkP'),
        r = n.n(a),
        o = n('v6aA'),
        i = n('mrHL'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('cnVF'),
        u = n('RqPI'),
        d = n('k89r'),
        f = n('yUQf'),
        h = n('q9Zt'),
        p = n('t62R'),
        m = s.a.ffeb836a,
        E = s.a.f2fb9746
      function b() {
        var e = Object(d.a)()
        return (
          r.a.useEffect(
            function () {
              e.scribe({ element: 'error_page', action: 'show' })
            },
            [e],
          ),
          r.a.createElement(h.a, { title: m }, r.a.createElement(p.b, null, E))
        )
      }
      function g(e) {
        var t = r.a.useContext(o.a).featureSwitches,
          n = Object(f.a)(u.n),
          a = Object(i.b)(l.u, t)
        return n || a ? e.children : r.a.createElement(b, null)
      }
    },
    xKqQ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTaggingScreen', function () {
          return F
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        h = n('KEM+'),
        p = n.n(h),
        m = (n('2G9S'), n('ERkP')),
        E = n.n(m),
        b = n('P1r1'),
        g = n('rxPX'),
        _ = n('0KEI'),
        y = Object(g.a)()
          .propsFromState(function () {
            return { settings: b.g }
          })
          .adjustStateProps(function (e) {
            return { mediaTaggingOption: e.settings.allow_media_tagging }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TAGGING_SCREEN',
              ),
              updateSettings: b.M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'tagging' }),
        v = n('3XMw'),
        S = n.n(v),
        w = n('yoO3'),
        C = n('7FtF'),
        A = n('oFxb'),
        T = n('MWbm'),
        k = S.a.f56d108e,
        L = S.a.f56d108e,
        O = S.a.gd758533,
        I = [
          { label: S.a.d165c992, value: 'all' },
          { label: S.a.ea339390, value: 'following' },
        ],
        F = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              p()(s()(e), '_handleItemChanged', function (t, n) {
                var a = e.props,
                  r = a.createLocalApiErrorHandler
                ;(0, a.updateSettings)(p()({}, t, n)).catch(r({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.mediaTaggingOption
                  return E.a.createElement(
                    w.a,
                    null,
                    E.a.createElement(
                      C.a,
                      { location: t, title: k },
                      E.a.createElement(
                        T.a,
                        null,
                        E.a.createElement(A.a, {
                          description: O,
                          label: L,
                          name: 'allow_media_tagging',
                          offValue: 'none',
                          onChange: this._handleItemChanged,
                          options: I,
                          value: n,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = y(F)
    },
    z6lV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchSettingsPage', function () {
          return te
        })
      var a = n('yiKp'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        h = n('2VqO'),
        p = n.n(h),
        m = n('KEM+'),
        E = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        g = n.n(b),
        _ = n('wtjx'),
        y = (n('7x/C'), n('JtPf'), n('oEOe')),
        v = n('RqPI'),
        S = n('kGix'),
        w = n('Ssj5'),
        C = 'safeSearch',
        A = 'rweb/'.concat(C),
        T = y.a(A, 'FETCH_SEARCH_SETTINGS'),
        k = y.a(A, 'UPDATE_SEARCH_SETTINGS'),
        L = { fetchStatus: S.a.NONE, searchSettings: {} }
      w.a.register(
        E()({}, C, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case T.REQUEST:
              return r()(r()({}, e), {}, { fetchStatus: S.a.LOADING })
            case T.FAILURE:
              return r()(r()({}, e), {}, { fetchStatus: S.a.FAILED })
            case T.SUCCESS:
              return r()(r()({}, e), {}, { searchSettings: t.payload || L.searchSettings, fetchStatus: S.a.LOADED })
            case k.REQUEST:
              var n = t.meta || {},
                a = n.settingName,
                o = n.settingValue
              return r()(r()({}, e), {}, { searchSettings: r()(r()({}, e.searchSettings), {}, E()({}, a, o)) })
            default:
              return e
          }
        }),
      )
      var O = function (e) {
          return e.safeSearch.searchSettings
        },
        I = function (e) {
          return e.safeSearch.fetchStatus
        },
        F = function () {
          return function (e, t, n) {
            var a = n.api,
              r = v.r(t())
            return r
              ? y.b(e, { params: { userId: r }, request: a.SafeSearch.fetch })({
                  actionTypes: T,
                  context: 'FETCH_SEARCH_SETTINGS',
                })
              : Promise.resolve(e({ type: T.FAILURE }))
          }
        },
        P = function (e, t) {
          return function (n, a, o) {
            var i = o.api,
              c = a(),
              s = v.r(c)
            if (!s) return Promise.resolve(n({ type: T.FAILURE }))
            var l = r()(r()({}, O(c)), {}, { userId: s })
            return (
              (l[e] = t),
              y.c(n, { params: l, request: i.SafeSearch.set })({
                actionTypes: k,
                context: 'ACTION_UPDATE_SEARCH_SETTINGS',
                meta: { settingName: e, settingValue: t },
              })
            )
          }
        },
        R = n('1YZw'),
        x = n('i6OR'),
        M = n('rxPX'),
        N = n('0KEI'),
        D = Object(M.a)()
          .propsFromState(function () {
            return { fetchStatus: I, lastSearchQuery: _.f, settings: O }
          })
          .propsFromActions(function () {
            return {
              addToast: R.b,
              clearAllSearchResults: x.a,
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('SAFE_SEARCH_SCREEN'),
              fetchSettings: F,
              updateSettings: P,
            }
          })
          .withAnalytics({ page: 'settings', section: 'search' }),
        U = n('45mF'),
        H = n('v//M'),
        K = n('jHSc'),
        j = n('3XMw'),
        V = n.n(j),
        B = n('e0ey'),
        G = 'searchSettings-hideSensitiveContent',
        Y = 'searchSettings-hideMutedOrBlockedAccounts',
        z = (n('yH/f'), Object.freeze({ Filtering: 'optInFiltering', Blocking: 'optInBlocking' })),
        W = V.a.h1ef00db,
        q = V.a.a90af44e,
        X = V.a.a25e2ec5,
        Q = V.a.b827a057,
        J = V.a.b27c9851,
        Z = V.a.c81b9707,
        $ = V.a.if05bca6,
        ee = 'https://support.twitter.com/articles/132700',
        te = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              E()(u()(e), '_handleSettingChanged', function (t, n) {
                var a = e.props,
                  o = a.addToast,
                  i = a.clearAllSearchResults,
                  c = a.createLocalApiErrorHandler,
                  s = a.updateSettings
                e._scribeValueChanged(t, n),
                  s(t, n).then(function () {
                    i(), o({ text: Q })
                  }, c(r()(r()({}, Object(U.a)(J)), {}, { showToast: !0 })))
              }),
              E()(u()(e), '_scribeValueChanged', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  o = a.lastSearchQuery,
                  i = o ? { search_details: { query: o } } : {},
                  c = t === z.Filtering ? 'filtering' : 'blocking',
                  s = n ? 'on' : 'off'
                r.scribe({ component: 'safe_search_settings', element: c, action: s, data: i })
              }),
              E()(u()(e), '_render', function () {
                var t = e.props.settings
                return g.a.createElement(
                  'div',
                  null,
                  g.a.createElement(B.a, {
                    checked: t.optInFiltering,
                    helpText: Z,
                    label: q,
                    learnMoreLink: ee,
                    name: 'optInFiltering',
                    onChange: e._handleSettingChanged,
                    testID: G,
                  }),
                  g.a.createElement(B.a, {
                    checked: t.optInBlocking,
                    helpText: $,
                    label: X,
                    learnMoreLink: ee,
                    name: 'optInBlocking',
                    onChange: e._handleSettingChanged,
                    testID: Y,
                  }),
                )
              }),
              E()(u()(e), '_handleFetchSettings', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettings)().catch(n(Object(U.a)()))
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchSettings()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history
                  return g.a.createElement(
                    K.b,
                    { history: n, title: W },
                    g.a.createElement(H.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleFetchSettings,
                      render: this._render,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = D(te)
    },
  },
])
//# sourceMappingURL=WIPED
