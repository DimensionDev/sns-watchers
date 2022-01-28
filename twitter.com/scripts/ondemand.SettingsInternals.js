;(window.webpackJsonp = window.webpackJsonp || []).push([
  [229],
  {
    '+GrA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MutedAccountsScreen', function () {
          return Te
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        s = n.n(i),
        l = n('N+ot'),
        u = n.n(l),
        f = n('AuHH'),
        d = n.n(f),
        p = n('KEM+'),
        h = n.n(p),
        m = n('ERkP'),
        y = n.n(m),
        b = (n('LW0h'), n('WNMA'), n('KqXw'), n('zh9S')),
        E = n('1YZw'),
        g = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('z84I'), n('WpDa')),
        v = n('ZNT5'),
        _ = n('G6rE')
      function S(e, t) {
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
      var O = function (e) {
          return Object(v.a)({
            timelineId: 'dmMutedUsersGraphQL-'.concat(e),
            getEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMMutedUsers
            },
            getEndpointParams: function (t) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? S(Object(n), !0).forEach(function (t) {
                        h()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : S(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                      })
                }
                return e
              })({ user_id: e }, t)
            },
            context: 'FETCH_DM_MUTED_USERS',
            perfKey: 'dmMutedUsersGraphql',
            formatResponse: g.a,
          })
        },
        w = function (e) {
          return function (t, n) {
            var r = n()
            t(
              e
                .selectEntries(r)
                .filter(function (e) {
                  var t = e.content.id,
                    n = _.e.select(r, t)
                  return n && !n.dm_muting
                })
                .map(function (t) {
                  return e.removeEntry(t.entryId)
                }),
            )
          }
        },
        C = n('lbf8'),
        P = n('rxPX'),
        A = function (e, t) {
          return t.match.params.filter
        },
        T = Object(P.a)()
          .propsFromState(function () {
            return { filterName: A }
          })
          .propsFromActions(function () {
            return {
              addToast: E.b,
              cleanupMuteList: C.b,
              cleanupDMMuteList: w,
              googleAnalyticsPageView: b.a,
              scribePageImpression: b.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'muted_accounts' }),
        R = n('G0qc'),
        k = n('yoO3'),
        L = n('fTQJ'),
        j = n('eM8g'),
        I = n('7FtF'),
        F = n('t62R'),
        D = n('FIs5'),
        x = n('0yYu'),
        N = n('v6aA'),
        M = n('PnFR'),
        H = n('8UdT'),
        U = n('1Pcy'),
        B = n.n(U),
        K = (n('2G9S'), n('JtPf'), n('7x/C'), n('/yvb')),
        V = n('0pUJ'),
        G = n('0KEI'),
        W = function (e, t) {
          return _.e.select(e, t.userId)
        },
        Y = Object(P.a)()
          .propsFromState(function () {
            return { user: W }
          })
          .propsFromActions(function () {
            return {
              addToast: E.b,
              createLocalApiErrorHandler: Object(G.createLocalApiErrorHandlerWithContextFactory)(
                'MUTE_BUTTON_CONTAINER',
              ),
              mute: V.a,
              unmute: _.e.unmute,
            }
          })
          .withAnalytics(),
        X = n('foB5'),
        z = n('Rp9C'),
        q = n('68+r'),
        Z = n('P2xQ'),
        Q = n('qz6Z'),
        J = n('w02m')
      function $(e) {
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
          return u()(this, n)
        }
      }
      var ee = Y(
          (function (e) {
            s()(n, e)
            var t = $(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(B()(e), '_handleMutOrUnmuteToggle', function () {
                  e._handleMuteOrUnmuteToggleHelper()
                }),
                h()(B()(e), '_handleMuteOrUnmuteToggleHelper', function () {
                  var t = e.props,
                    n = t.addToast,
                    r = t.createLocalApiErrorHandler,
                    a = t.mute,
                    o = t.unmute,
                    c = t.user,
                    i = t.userId
                  return c
                    ? c.muting
                      ? o(i).then(function (t) {
                          n({ text: Object(Z.d)(c.screen_name) }), e._scribeAction('unmute_user')
                        }, r(q.a))
                      : a(i).then(function (t) {
                          n({ text: Object(Z.b)(c.screen_name) }), e._scribeAction('mute_user')
                        }, r(X.a))
                    : Promise.resolve()
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.user
                    if (!e) return null
                    var t = e.muting ? 'destructiveOutlined' : 'brandOutlined',
                      n = e.muting ? Q.a : J.a,
                      r = e.muting ? Object(Z.e)(e.screen_name) : Object(Z.c)(e.screen_name),
                      a = e.muting ? Z.g : Z.f
                    return y.a.createElement(K.a, {
                      accessibilityLabel: r,
                      hoverLabel: { label: a },
                      icon: y.a.createElement(n, null),
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
                      r = t.user
                    n.scribe({ action: e, data: { items: r ? [z.a.getUserItem(r)] : [] } })
                  },
                },
              ]),
              n
            )
          })(y.a.Component),
        ),
        te = (n('ho0z'), n('MMRb')),
        ne = function (e, t) {
          return _.e.select(e, t.userId)
        },
        re = Object(P.a)()
          .propsFromState(function () {
            return { user: ne }
          })
          .propsFromActions(function () {
            return {
              addToast: E.b,
              createLocalApiErrorHandler: Object(G.createLocalApiErrorHandlerWithContextFactory)(
                'MUTE_DM_BUTTON_CONTAINER',
              ),
              muteDMUser: te.muteDMUser,
              unmuteDMUser: te.unmuteDMUser,
            }
          })
          .withAnalytics(),
        ae = n('3XMw'),
        oe = n.n(ae)
      function ce(e) {
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
          return u()(this, n)
        }
      }
      var ie,
        se,
        le = oe.a.e67b2d65,
        ue = oe.a.f05597b2,
        fe = oe.a.gde6b424,
        de = oe.a.e308019b,
        pe = re(
          (function (e) {
            s()(n, e)
            var t = ce(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(B()(e), '_handleUnmuteToggle', function () {
                  e._handleUnmuteToggleHelper()
                }),
                h()(B()(e), '_handleUnmuteToggleHelper', function () {
                  var t = e.props,
                    n = t.addToast,
                    r = t.createLocalApiErrorHandler,
                    a = t.muteDMUser,
                    o = t.unmuteDMUser,
                    c = t.user,
                    i = t.userId
                  return c
                    ? c.dm_muting
                      ? o(i).then(function (t) {
                          n({ text: de({ name: c.name }) }), e._scribeAction('unmute_user')
                        }, r(q.a))
                      : a(i).then(function (t) {
                          n({ text: fe({ name: c.name }) }), e._scribeAction('mute_user')
                        }, r(X.a))
                    : Promise.resolve()
                }),
                e
              )
            }
            return (
              c()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.user
                    if (!e) return null
                    var t = e.dm_muting ? 'destructiveOutlined' : 'brandOutlined',
                      n = e.dm_muting ? Q.a : J.a,
                      r = e.dm_muting ? ue({ screenName: e.screen_name }) : le({ screenName: e.screen_name })
                    return y.a.createElement(K.a, {
                      accessibilityLabel: r,
                      icon: y.a.createElement(n, null),
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
                      r = t.user
                    n.scribe({ action: e, data: { items: r ? [z.a.getUserItem(r)] : [] } })
                  },
                },
              ]),
              n
            )
          })(y.a.Component),
        ),
        he = n('Ka9G'),
        me =
          ((ie = {}),
          h()(
            ie,
            H.b.User,
            Object(he.a)({
              decoration: function (e) {
                var t = e.userId
                return y.a.createElement(ee, { userId: t })
              },
            }),
          ),
          h()(ie, H.b.TimelineCursor, Object(M.a)({})),
          ie),
        ye =
          ((se = {}),
          h()(
            se,
            H.b.User,
            Object(he.a)({
              decoration: function (e) {
                var t = e.userId
                return y.a.createElement(pe, { userId: t })
              },
            }),
          ),
          h()(se, H.b.TimelineCursor, Object(M.a)({})),
          se)
      function be(e) {
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
          return u()(this, n)
        }
      }
      var Ee = oe.a.daef29b7,
        ge = y.a.createElement(
          oe.a.I18NFormatMessage,
          { $i18n: 'b0b13518' },
          y.a.createElement(F.b, { link: 'https://help.twitter.com/using-twitter/twitter-mute' }, oe.a.e565cad5),
        ),
        ve = oe.a.a6194d10,
        _e = oe.a.ga3ef87d,
        Se = oe.a.cd9701d3,
        Oe = oe.a.b8e49590,
        we = oe.a.i859a9d3,
        Ce = 'https://support.twitter.com/articles/20171399',
        Pe = function () {
          var e = y.a.createElement('div', null, Oe, ' ', y.a.createElement(F.b, { link: Ce }, we))
          return y.a.createElement(D.a, { header: _e, message: e })
        },
        Ae = function () {
          var e = y.a.createElement('div', null, Se, ' ', y.a.createElement(F.b, { link: Ce }, we))
          return y.a.createElement(D.a, { header: _e, message: e })
        },
        Te = (function (e) {
          s()(n, e)
          var t = be(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
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
                    r = this.context.loggedInUserId,
                    a = t === R.a.Messages
                  return (
                    (this._module = a ? O(r) : Object(C.a)()),
                    y.a.createElement(
                      k.a,
                      null,
                      y.a.createElement(
                        I.a,
                        { location: n, title: Ee, withBottomBorder: !0, withMarginBottom: !1 },
                        y.a.createElement(j.a, null, ge),
                        y.a.createElement(x.a, null),
                        y.a.createElement(L.a, {
                          entryConfiguration: a ? ye : me,
                          loadingAccessibilityLabel: ve,
                          module: this._module,
                          renderEmptyState: a ? Pe : Ae,
                          title: Ee,
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
                    r = this.context.loggedInUserId,
                    a = O(r)
                  n(Object(C.a)()), t(a)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      h()(Te, 'contextType', N.a)
      t.default = T(Te)
    },
    '+OgG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('P1r1'),
        c = n('UhuB'),
        i = n('BxsD')
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
      var l = function (e) {
        return function (t, n) {
          var r = (function (e) {
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
          })({}, e)
          if (e.hasOwnProperty('personalized_trends')) {
            if (!e.hasOwnProperty('trend_location_woeid')) {
              var l = Object(c.t)(n())
              r.trend_location_woeid = (l && l[0] && l[0].woeid) || '1'
            }
          } else r.personalized_trends = !1
          return t(o.L(r)).then(function () {
            return t(Object(i.g)())
          })
        }
      }
    },
    '2V91': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PasswordScreen', function () {
          return J
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('ho0z'), n('ERkP')),
        E = n.n(b),
        g = n('k49u'),
        v = n('dZRF'),
        _ = n('1YZw'),
        S = n('oEOe'),
        O = function (e, t, n) {
          return function (r, a, o) {
            var c = o.api
            return Object(S.d)(r, {
              params: { current_password: e, password: t, password_confirmation: n },
              request: c.Settings.changePassword,
            })('CHANGE_PASSWORD')
          }
        },
        w = n('rxPX'),
        C = n('0KEI'),
        P = Object(w.a)()
          .propsFromState(function () {
            return { applications: v.a.selectUniqUnrevokedApps, fetchStatus: v.d }
          })
          .adjustStateProps(function (e) {
            var t = e.applications,
              n = e.fetchStatus
            return { applicationCount: null == t ? void 0 : t.length, fetchStatus: n }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              changePassword: O,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PASSWORD_SCREEN',
              ),
              fetchApplicationsIfNeeded: v.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'password' }),
        A = n('v//M'),
        T = n('yoO3'),
        R = n('7FtF'),
        k = n('MWbm'),
        L = n('Irs7'),
        j = n('p+r5'),
        I = n('t62R'),
        F = n('0yYu'),
        D = n('atVN'),
        x = n('3XMw'),
        N = n.n(x),
        M = n('/Dbh')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var U = N.a.ab1f7eef,
        B = N.a.d241169c,
        K = N.a.d1091f50,
        V = N.a.a9bc3043,
        G = N.a.b8c03cfb,
        W = N.a.b731d32c,
        Y = N.a.d555d7e0,
        X = N.a.fa8af9ad,
        z = N.a.c8cb0b4c,
        q = N.a.jea2ff04,
        Z = N.a.a03f5c72,
        Q = N.a.i9028824,
        J = (function (e) {
          u()(n, e)
          var t = H(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_render', function () {
                var e = o.props.applicationCount,
                  t = o.state,
                  n = t.current_password,
                  r = t.currentPasswordError,
                  a = t.new_password,
                  c = t.newPasswordError,
                  i = t.password_confirmation,
                  s = t.passwordConfirmationError
                return E.a.createElement(
                  k.a,
                  null,
                  E.a.createElement(j.a, {
                    errorText: r,
                    helperText: E.a.createElement(
                      I.b,
                      { link: 'https://twitter.com/account/access_password_reset' },
                      K,
                    ),
                    invalid: !!r,
                    label: B,
                    name: 'current_password',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: n,
                  }),
                  E.a.createElement(F.a, null),
                  E.a.createElement(j.a, {
                    errorText: c,
                    invalid: !!c,
                    label: V,
                    name: 'new_password',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: a,
                  }),
                  E.a.createElement(j.a, {
                    errorText: s,
                    invalid: !!s,
                    label: G,
                    name: 'password_confirmation',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: i,
                  }),
                  E.a.createElement(F.a, null),
                  e
                    ? E.a.createElement(
                        D.a,
                        null,
                        E.a.createElement(
                          I.b,
                          { color: 'gray700' },
                          E.a.createElement(
                            N.a.I18NFormatMessage,
                            { $i18n: 'hc585ff0' },
                            E.a.createElement(I.b, { link: '/settings/applications' }, Z({ applicationCount: e })),
                            E.a.createElement(
                              I.b,
                              { link: 'https://help.twitter.com/safety-and-security/account-security-tips' },
                              N.a.h1b4075d,
                            ),
                          ),
                        ),
                      )
                    : null,
                )
              }),
              y()(s()(o), '_handleFetchApps', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchApplicationsIfNeeded)().catch(t({ showToast: !1 }))
              }),
              y()(s()(o), '_handleSubmit', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.changePassword,
                  r = e.createLocalApiErrorHandler,
                  a = o.state,
                  c = a.current_password,
                  i = a.new_password,
                  s = a.password_confirmation
                if (c === i) o.setState({ newPasswordError: Y })
                else if (i.length < M.b) o.setState({ newPasswordError: C.NEW_PASSWORD_SHORT })
                else if (i.length > M.a) o.setState({ newPasswordError: C.NEW_PASSWORD_LONG })
                else if (i !== s) o.setState({ passwordConfirmationError: X })
                else {
                  var l
                  o.setState({ newPasswordError: void 0, passwordConfirmationError: void 0 }),
                    n(c, i, s)
                      .then(function () {
                        o.setState({
                          current_password: '',
                          hasBlankFields: !0,
                          new_password: '',
                          password_confirmation: '',
                        }),
                          t({ text: W })
                      })
                      .catch(
                        r(
                          ((l = {}),
                          y()(l, g.a.InvalidCurrentPassword, {
                            customAction: function () {
                              return o.setState({ currentPasswordError: z })
                            },
                          }),
                          y()(l, g.a.NewPasswordLong, {
                            customAction: function () {
                              return o.setState({ newPasswordError: C.NEW_PASSWORD_LONG })
                            },
                          }),
                          y()(l, g.a.NewPasswordShort, {
                            customAction: function () {
                              return o.setState({ newPasswordError: C.NEW_PASSWORD_SHORT })
                            },
                          }),
                          y()(l, g.a.NewPasswordWeak, {
                            customAction: function () {
                              return o.setState({ newPasswordError: q })
                            },
                          }),
                          y()(l, g.a.CannotReuseCurrentPassword, {
                            customAction: function () {
                              return o.setState({ newPasswordError: Y })
                            },
                          }),
                          y()(l, g.a.PasswordResetMismatchedEntries, {
                            customAction: function () {
                              return o.setState({ passwordConfirmationError: X })
                            },
                          }),
                          y()(l, 'showToast', !0),
                          l),
                        ),
                      )
                }
              }),
              y()(s()(o), '_handleItemChanged', function (e) {
                var t
                o.setState(
                  ((t = {}),
                  y()(t, e.target.name, e.target.value),
                  y()(t, 'currentPasswordError', void 0),
                  y()(t, 'newPasswordError', void 0),
                  y()(t, 'passwordConfirmationError', void 0),
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
            c()(n, [
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
                    R.a,
                    { location: n, onSubmit: this._handleSubmit, submitDisabled: this.state.hasBlankFields, title: U },
                    E.a.createElement(
                      T.a,
                      null,
                      E.a.createElement(A.a, {
                        accessibilityLabel: Q,
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
      t.default = Object(L.a)(P(J))
    },
    '2dyk': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsLocationScreen', function () {
          return V
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('EPsT'),
        v = n('zh9S'),
        _ = n('a/ea'),
        S = n('P1r1'),
        O = n('rxPX'),
        w = n('0KEI'),
        C = Object(O.a)()
          .propsFromState(function () {
            return { permissionStatus: _.c, settings: S.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LOCATION_SCREEN',
              ),
              deleteLocationData: S.c,
              googleAnalyticsPageView: v.a,
              loadGeoLocation: _.a,
              scribePageImpression: v.d,
              updateSettings: S.L,
            }
          }),
        P = n('M6MT'),
        A = n('eM8g'),
        T = n('7FtF'),
        R = n('MWbm'),
        k = n('t62R'),
        L = n('cCdp'),
        j = n('3XMw'),
        I = n.n(j)
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
      var D = I.a.eb029cab,
        x = I.a.eb029cab,
        N = I.a.j5267913,
        M = I.a.ed7fa034,
        H = I.a.h83e5c06,
        U = I.a.f4d69920,
        B = I.a.d96cf7cd,
        K = { page: 'settings', section: 'location' },
        V = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleItemChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler
                ;(0, r.updateSettings)(y()({}, t, n)).catch(a({ showToast: !0 }))
              }),
              y()(s()(e), '_handlePreciseLocationSettingChanged', function (t, n) {
                var r = e.props.loadGeoLocation
                e._handleItemChanged(t, n), n && r()
              }),
              y()(s()(e), '_handleDeleteLocation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.deleteLocationData)().catch(n({ showToast: !0 }))
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
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(K), t(K)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.permissionStatus,
                    r = e.settings
                  return E.a.createElement(
                    T.a,
                    { location: t, title: D },
                    E.a.createElement(
                      R.a,
                      null,
                      E.a.createElement(
                        A.a,
                        null,
                        E.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'ia4557be' },
                          E.a.createElement(
                            k.b,
                            { link: 'https://help.twitter.com/safety-and-security/tweet-location-settings' },
                            I.a.a18349ca,
                          ),
                        ),
                      ),
                      n === P.b.denied ? E.a.createElement(A.a, null, M) : null,
                      E.a.createElement(L.a, {
                        checked: r.geo_enabled,
                        label: x,
                        name: 'geo_enabled',
                        onChange: this._handlePreciseLocationSettingChanged,
                      }),
                      E.a.createElement(g.a, {
                        confirmationSheetConfirmButtonLabel: B,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: U,
                        confirmationSheetText: N,
                        label: H,
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
      t.default = C(V)
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        s = n.n(i),
        l = n('N+ot'),
        u = n.n(l),
        f = n('AuHH'),
        d = n.n(f),
        p = n('ERkP'),
        h = n.n(p),
        m = n('rHpw'),
        y = n('MWbm')
      function b(e) {
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
          return u()(this, n)
        }
      }
      var E = (function (e) {
          s()(n, e)
          var t = b(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return h.a.createElement(y.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        g = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = E
    },
    '3WEv': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SessionDetailPage', function () {
          return z
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ho0z'), n('6U7i'), n('ly4k'), n('ERkP')),
        E = n.n(b),
        g = n('EPsT'),
        v = (n('WNMA'), n('KqXw'), n('uo4S')),
        _ = n('1YZw'),
        S = n('rxPX'),
        O = n('0KEI'),
        w = function (e, t) {
          var n = decodeURIComponent(t.match.params.sessionId || '')
          return v.e(e, n)
        },
        C = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: v.d, session: w }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('SESSION_DETAIL'),
              fetchSessionsIfNeeded: v.a,
              revokeSession: v.c,
            }
          })
          .withAnalytics({ page: 'settings', section: 'session_detail' }),
        P = n('v//M'),
        A = n('3XMw'),
        T = n.n(A),
        R = n('yoO3'),
        k = n('ZvNX'),
        L = n('7FtF'),
        j = n('jm1/'),
        I = n('MWbm'),
        F = n('FIs5'),
        D = n('t62R'),
        x = n('0yYu'),
        N = n('6vad')
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
      var H = T.a.ed5ab169,
        U = T.a.d64e29c5,
        B = { headline: T.a.idfa01cb, text: T.a.d4cca0f7, confirmButtonLabel: T.a.ae1bbb26 },
        K = T.a.e04ba39c,
        V = T.a.bfbc051c,
        G = T.a.jaaa8984,
        W = T.a.h667fc02,
        Y = T.a.ddcd3d26,
        X = T.a.d2f0f3fd,
        z = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_fetchSessionsIfNeeded', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchSessionsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              y()(s()(e), '_handleRetry', function () {
                e._fetchSessionsIfNeeded()
              }),
              y()(s()(e), '_handleLogOut', function () {
                var t = e.props.session
                t && (e._revokeSession(t.token), e._scribeAction('revoke_session'))
              }),
              y()(s()(e), '_handleGoBack', function () {
                e.props.history.goBack({ backLocation: '/settings/applications' })
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.session
                return t
                  ? E.a.createElement(
                      I.a,
                      null,
                      E.a.createElement(k.a, { session: t, withBottomBorder: !1, withSummary: !0 }),
                      e._renderDateAndTime(t),
                      e._renderLocation(t),
                    )
                  : E.a.createElement(F.a, { header: X })
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    r = n.addToast,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.revokeSession)(e).then(function () {
                    r({ text: W }), t._handleGoBack()
                  }, a({ showToast: !0 }))
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
                    r = e.session,
                    a = r ? r.name : ''
                  return E.a.createElement(
                    R.a,
                    null,
                    E.a.createElement(
                      L.a,
                      { location: n, title: a },
                      E.a.createElement(P.a, {
                        accessibilityLabel: Y,
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
                  if (e.is_current_session) return E.a.createElement(D.b, null, H)
                  var t = new Date(Number(e.last_seen_time_ms))
                  return E.a.createElement('time', { dateTime: t.toISOString() }, V(t))
                },
              },
              {
                key: '_renderDateAndTime',
                value: function (e) {
                  return E.a.createElement(
                    I.a,
                    null,
                    null != e && e.last_seen_time_ms
                      ? E.a.createElement(
                          I.a,
                          null,
                          E.a.createElement(x.a, null),
                          E.a.createElement(N.b, { text: K }),
                          E.a.createElement(
                            I.a,
                            { style: [j.a.labelContainer, !(null != e && e.is_current_session) && j.a.bottomBorder] },
                            E.a.createElement(D.b, { color: 'gray700', size: 'subtext2' }, this._renderDateLabel(e)),
                          ),
                        )
                      : null,
                    null != e && e.is_current_session
                      ? null
                      : E.a.createElement(g.a, {
                          confirmationSheetConfirmButtonLabel: B.confirmButtonLabel,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: B.headline,
                          confirmationSheetText: B.text,
                          label: U,
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
                        I.a,
                        null,
                        E.a.createElement(x.a, null),
                        E.a.createElement(N.b, { text: G }),
                        E.a.createElement(
                          I.a,
                          { style: j.a.labelContainer },
                          E.a.createElement(D.b, { color: 'gray700', size: 'subtext2' }, t),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = C(z)
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('2G9S')
      var r = n('1YZw'),
        a = n('pXBW'),
        o = n('3XMw'),
        c = n.n(o),
        i = n('SrIh'),
        s = c.a.a5d4fda0,
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof a.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(i.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(r.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '55TG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return y
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('2G9S'), n('kGix')),
        c = n('XMGw'),
        i = n('Ssj5'),
        s = n('oEOe')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = 'verifyPassword',
        d = 'rweb/'.concat(c.a, '/').concat(f),
        p = Object(s.a)(d, 'VERIFY_PASSWORD'),
        h = { fetchStatus: o.a.NONE }
      i.a.register(
        a()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case p.REQUEST:
              return u(u({}, e), {}, { fetchStatus: o.a.LOADING })
            case p.SUCCESS:
              return u(u({}, e), {}, { fetchStatus: o.a.LOADED })
            case p.FAILURE:
              return u(u({}, e), {}, { error: t.payload, fetchStatus: o.a.FAILED })
            default:
              return e
          }
        }),
      )
      var m = function (e) {
          return e.verifyPassword.fetchStatus
        },
        y = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(s.b)(t, { params: { password: e }, request: a.Settings.verifyPassword })({
              actionTypes: p,
              context: 'VERIFY_PASSWORD',
            })
          }
        }
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        s = n.n(i),
        l = n('N+ot'),
        u = n.n(l),
        f = n('AuHH'),
        d = n.n(f),
        p = n('ERkP'),
        h = n.n(p),
        m = n('3XMw'),
        y = n.n(m),
        b = n('rHpw'),
        E = n('+/1j'),
        g = n('MWbm')
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
          return u()(this, n)
        }
      }
      var _ = y.a.e5b0063d,
        S = 0,
        O = (function (e) {
          s()(n, e)
          var t = v(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(S)), (S += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = _({ title: n })
                  return h.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    h.a.createElement(
                      E.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: b.a.visuallyHidden,
                      },
                      n,
                    ),
                    h.a.createElement(g.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.a = O
    },
    '5keN': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeatureSwitchesScreen', function () {
          return W
        })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g =
          (n('+KXO'),
          n('z84I'),
          n('7x/C'),
          n('DZ+c'),
          n('LJOr'),
          n('KqXw'),
          n('vrRf'),
          n('1t7P'),
          n('jQ/y'),
          n('2G9S'),
          n('MvUL'),
          n('ERkP')),
        v = n.n(g),
        _ = n('O0uF'),
        S = n('rxPX'),
        O = Object(S.a)()
          .propsFromState(function () {
            return { featureSwitches: _.f }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches
            return { allSwitches: t.debug, config: t.user.config }
          })
          .withAnalytics({ page: 'settings', section: 'feature_switches' }),
        w = n('VwDm'),
        C = n('sXY3'),
        P = n('yoO3'),
        A = n('7FtF'),
        T = (n('ho0z'), n('Blm6'), n('uFXj'), n('MWbm')),
        R = n('p+r5'),
        k = n('rHpw')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var j = (function (e) {
        d()(n, e)
        var t = L(n)
        function n() {
          var e
          c()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            E()(u()(e), '_handleChange', function (t) {
              var n = e.props,
                r = n.disabled,
                a = n.name,
                o = n.onChange,
                c = n.type
              r || o(a, 'number' === c ? parseInt(t.target.value, 10) : t.target.value)
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
                  r = e.label,
                  a = e.type,
                  o = e.value,
                  c = e.withBottomBorder,
                  i = !!t
                return v.a.createElement(
                  T.a,
                  { style: [c && I.bottomBorder, i && I.disabled] },
                  v.a.createElement(R.a, {
                    editable: !i,
                    helperText: n,
                    label: r,
                    maxLength: 'number' === a ? 5 : void 0,
                    name: r,
                    onChange: this._handleChange,
                    type: a,
                    value: o,
                  }),
                )
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      E()(j, 'defaultProps', { type: 'text', withBottomBorder: !0 })
      var I = k.a.create(function (e) {
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
        D = n('6vad'),
        x = n('t62R'),
        N = n('/yvb'),
        M = n('cCdp'),
        H = n('6OUF'),
        U = n('0yYu'),
        B = n('Y3cQ'),
        K = n('v6aA'),
        V = n('hX3w')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var W = (function (e) {
        d()(n, e)
        var t = G(n)
        function n(e, r) {
          var o
          return (
            c()(this, n),
            (o = t.call(this, e, r)),
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
                ? v.a.createElement(
                    T.a,
                    null,
                    v.a.createElement(D.b, { text: 'Currently Active Overrides' }),
                    Object(C.a)(t).map(function (t) {
                      var n = a()(t, 2),
                        r = n[0],
                        o = n[1]
                      return v.a.createElement(
                        T.a,
                        { key: r, style: [F.a.viewItem, F.a.bottomBorder] },
                        v.a.createElement(x.b, null, r),
                        v.a.createElement(
                          x.b,
                          { color: e[r] && e[r].value !== o ? 'magenta500' : 'gray700' },
                          o.toString(),
                        ),
                      )
                    }),
                    v.a.createElement(
                      T.a,
                      { style: F.a.viewItem },
                      v.a.createElement(
                        N.a,
                        { onPress: o._handleClearOverrides, type: 'destructiveOutlined' },
                        'Clear all overrides',
                      ),
                    ),
                  )
                : null
            }),
            E()(u()(o), '_renderSearch', function () {
              return v.a.createElement(
                T.a,
                null,
                v.a.createElement(M.a, {
                  checked: o.state.onlyDDGs,
                  label: 'Only DDGs',
                  name: 'onlyDDGs',
                  onChange: o._handleFilterChanged,
                }),
                v.a.createElement(H.a, {
                  Icon: w.a,
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
                r = t.config,
                c = o.experimentOverrides.getAll()
              return v.a.createElement(
                T.a,
                null,
                v.a.createElement(D.b, { text: 'Filters' }),
                o._renderSearch(),
                v.a.createElement(U.a, null),
                v.a.createElement(D.b, { text: 'Feature switches' }),
                Object(C.a)(r).map(function (t) {
                  var i = a()(t, 2),
                    s = i[0]
                  i[1]
                  if (
                    !n[s] ||
                    (e && -1 === s.indexOf(e.toLowerCase())) ||
                    (o.state.onlyDDGs && 'experiment' !== n[s].type)
                  )
                    return null
                  var l = n[s],
                    u = l.description,
                    f = l.enumeration_values,
                    d = l.owner,
                    p = l.type,
                    h = c[s],
                    m = void 0 !== h ? h : r[s] ? r[s].value : n[s].default,
                    y = u || d ? ''.concat(u, '\n').concat(d) : void 0
                  switch (p) {
                    case 'boolean':
                      return v.a.createElement(M.a, {
                        checked: m,
                        helpText: y,
                        key: s,
                        label: s,
                        name: s,
                        onChange: o._handleItemChanged,
                      })
                    case 'experiment':
                      return v.a.createElement(B.a, {
                        description: y,
                        key: s,
                        label: s,
                        name: s,
                        onChange: o._handleItemChanged,
                        options: f.map(function (e) {
                          return { label: e, value: e }
                        }),
                        value: m,
                      })
                    case 'number':
                    default:
                      return Array.isArray(m)
                        ? v.a.createElement(
                            T.a,
                            { key: s, style: [F.a.viewItem, F.a.bottomBorder] },
                            v.a.createElement(x.b, null, s),
                            v.a.createElement(x.b, { color: 'gray700' }, 'Array value type editing not supported yet'),
                            v.a.createElement('br', null),
                            v.a.createElement(x.b, null, m.toString()),
                          )
                        : v.a.createElement(j, {
                            helpText: y,
                            key: s,
                            label: s,
                            name: s,
                            onChange: o._handleItemChanged,
                            type: 'number' === p ? 'number' : 'text',
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
            (o.experimentOverrides = Object(V.a)(o.context.featureSwitches)),
            o
          )
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.location
                return v.a.createElement(
                  P.a,
                  null,
                  v.a.createElement(
                    A.a,
                    { location: e, title: 'Feature switches' },
                    v.a.createElement(T.a, null, this._renderCurrentOverrides(), this._renderAll()),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      E()(W, 'contextType', K.a)
      t.default = O(W)
    },
    '6PlH': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MutedKeywordsNotificationsScreen', function () {
          return de
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('6U7i'), n('ly4k'), n('z84I'), n('uFXj'), n('ERkP')),
        E = n.n(b),
        g = n('X8EX'),
        v = n('1YZw'),
        _ = n('xZGM'),
        S = n('rxPX'),
        O = n('0KEI'),
        w = function (e, t) {
          return Object(_.z)(e, _.o)
        },
        C = function (e, t) {
          return Object(_.z)(e, _.u)
        },
        P = Object(S.a)()
          .propsFromState(function () {
            return {
              mutedKeywords: g.j,
              fetchStatus: g.h,
              shouldShowMuteEducationTip: w,
              shouldShowUnmuteEducationTip: C,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: _.w,
              addToast: v.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('MUTED_KEYWORDS'),
              deleteMutedKeyword: g.b,
              fetchMutedKeywordsIfNeeded: g.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications', component: 'mute_keyword', element: 'list' }),
        A = n('v//M'),
        T = n('NTtI'),
        R = (n('2G9S'), n('3XMw')),
        k = n.n(R),
        L = n('qz6Z'),
        j = n('MWbm'),
        I = n('/yvb'),
        F = n('eb3s')
      function D(e) {
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
      var x = k.a.cfd2f35d,
        N = k.a.bb1cbeb5,
        M = k.a.ba4aaa9d,
        H = k.a.f837ed7d,
        U = (function (e) {
          u()(n, e)
          var t = D(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { showUnmuteConfirmation: !1 }),
              y()(s()(e), '_handleConfirm', function () {
                var t = e.props,
                  n = t.keyword,
                  r = t.onUnmute
                e.setState({ showUnmuteConfirmation: !1 }), r(n)
              }),
              y()(s()(e), '_handleCancel', function () {
                e.setState({ showUnmuteConfirmation: !1 })
              }),
              y()(s()(e), '_handlePress', function () {
                var t = e.props,
                  n = t.keyword,
                  r = t.onUnmute
                t.shouldShowUnmuteEducationTip
                  ? (e.setState({ showUnmuteConfirmation: !0 }), e._updateUnmuteConfirmationPersistence())
                  : r(n)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: '_updateUnmuteConfirmationPersistence',
                value: function () {
                  ;(0, this.props.addFlag)(_.u)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.color
                  return E.a.createElement(
                    j.a,
                    null,
                    E.a.createElement(I.a, {
                      accessibilityLabel: N,
                      color: e,
                      hoverLabel: { label: N },
                      icon: E.a.createElement(L.a, null),
                      onPress: this._handlePress,
                    }),
                    this.state.showUnmuteConfirmation
                      ? E.a.createElement(F.a, {
                          cancelButtonLabel: x,
                          confirmButtonLabel: N,
                          headline: M,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: H,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(U, 'defaultProps', { color: 'red500' })
      var B = n('yoO3'),
        K = (n('hBvt'), n('iY63')),
        V = k.a.af40a8ef,
        G = function (e) {
          var t = e.accessibilityLabel,
            n = e.link
          return E.a.createElement(I.a, {
            accessibilityLabel: t,
            hoverLabel: { label: V },
            icon: E.a.createElement(K.a, null),
            link: n,
            pullRight: !0,
            type: 'primaryText',
          })
        },
        W = n('7FtF'),
        Y = n('iCwC'),
        X = n('t62R'),
        z = n('FIs5'),
        q = n('feu+'),
        Z = n('htQn'),
        Q = n('rHpw')
      function J(e) {
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
      var $ = k.a.cab9274e,
        ee = k.a.e506aa92,
        te = k.a.cbd04965,
        ne = k.a.j24c37b2,
        re = k.a.i0dd9b9d,
        ae = k.a.eb4e810a,
        oe = k.a.cabeb6c1,
        ce = k.a.jade381b,
        ie = k.a.be59d8c3,
        se = k.a.i3d087da,
        le = k.a.ga8d18c8,
        ue = k.a.f9bce916,
        fe = function () {
          return E.a.createElement(
            k.a.I18NFormatMessage,
            { $i18n: 'f02520a9' },
            E.a.createElement(
              X.b,
              { color: 'link', link: 'https://support.twitter.com/articles/20175032', withInteractiveStyling: !0 },
              k.a.f12c13b5,
            ),
          )
        },
        de = (function (e) {
          u()(n, e)
          var t = J(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              y()(s()(r), '_render', function () {
                var e = r.props.mutedKeywords
                return e && e.length > 0 ? r._renderKeywords() : r._renderEmptyState()
              }),
              y()(s()(r), '_renderEmptyState', function () {
                return E.a.createElement(z.a, { header: $, message: E.a.createElement(fe, null) })
              }),
              y()(s()(r), '_renderExpireTime', function (e) {
                var t = new Date(Number(e))
                return E.a.createElement(
                  'time',
                  { 'aria-label': ce(t), dateTime: t.toISOString() },
                  r._calcRemainingTime(t),
                )
              }),
              y()(s()(r), '_isKeywordExpired', function (e) {
                return e && Number(e) < Date.now()
              }),
              y()(s()(r), '_calcRemainingTime', function (e) {
                var t = e - Date.now()
                if (t <= 0) return ae
                var n = Math.ceil(t / 6e4)
                if (n < 60) return ie(n)
                var r = Math.round(t / 36e5)
                if (r < 25) return se(r)
                var a = Math.round(t / 864e5)
                return a < 31 ? le(a) : ce(e)
              }),
              y()(s()(r), '_handleFetch', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchMutedKeywordsIfNeeded)().catch(t())
              }),
              y()(s()(r), '_handleUnmute', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.analytics,
                  o = t.createLocalApiErrorHandler
                ;(0, t.deleteMutedKeyword)([e.id]).then(function () {
                  n({ text: te({ keyword: e.keyword }) }), a.scribe({ action: 'unmute' })
                }, o({ showToast: !0 }))
              }),
              y()(s()(r), '_handleCloseEducationPrompt', function () {
                r.setState({ showMuteKeywordEducationSheet: !1 })
              }),
              (r.state = { showMuteKeywordEducationSheet: !1 }),
              r
            )
          }
          return (
            c()(n, [
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
                    r = E.a.createElement(G, { accessibilityLabel: ee, link: '/settings/add_muted_keyword' })
                  return E.a.createElement(
                    B.a,
                    null,
                    E.a.createElement(
                      W.a,
                      { location: n, rightControl: r, title: re },
                      this.state.showMuteKeywordEducationSheet
                        ? E.a.createElement(q.a, {
                            actionLabel: ne,
                            graphic: T.a,
                            graphicDisplayMode: 'illustration',
                            headline: ue,
                            onAction: this._handleCloseEducationPrompt,
                            onClose: this._handleCloseEducationPrompt,
                            subtext: E.a.createElement(fe, null),
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
                    r = t.shouldShowUnmuteEducationTip
                  return E.a.createElement(
                    j.a,
                    null,
                    E.a.createElement(
                      X.b,
                      { color: 'gray700', size: 'subtext2', style: [Y.a.descriptionText, Y.a.bottomBorder] },
                      E.a.createElement(fe, null),
                    ),
                    this.props.mutedKeywords.map(function (t) {
                      return E.a.createElement(
                        Z.a,
                        {
                          key: t.id,
                          link: { pathname: '/settings/muted_keywords/'.concat(t.id), anchorless: !0 },
                          style: pe.item,
                        },
                        E.a.createElement(
                          j.a,
                          { style: pe.keywordContainer },
                          E.a.createElement(
                            X.b,
                            {
                              color: e._isKeywordExpired(t.valid_until) ? 'gray700' : 'normal',
                              numberOfLines: 1,
                              style: pe.keyword,
                            },
                            t.keyword,
                          ),
                          E.a.createElement(
                            X.b,
                            { color: 'gray700', size: 'subtext2', style: pe.muteTime },
                            t.valid_until ? e._renderExpireTime(t.valid_until) : oe,
                          ),
                        ),
                        E.a.createElement(U, {
                          addFlag: n,
                          color: e._isKeywordExpired(t.valid_until) ? 'gray700' : 'red500',
                          keyword: t,
                          onUnmute: e._handleUnmute,
                          shouldShowUnmuteEducationTip: r,
                        }),
                      )
                    }),
                  )
                },
              },
              {
                key: '_updateMuteKeywordEducationCookie',
                value: function () {
                  ;(0, this.props.addFlag)(_.o)
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        pe = Q.a.create(function (e) {
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
      t.default = P(de)
    },
    '7WHe': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsContactsDashboardScreen', function () {
          return he
        })
      n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g = (n('2G9S'), n('z84I'), n('tVqn'), n('ERkP')),
        v = n.n(g),
        _ = n('EPsT'),
        S = n('P1r1'),
        O = n('hqKg'),
        w = n('0KEI'),
        C = n('oEGd'),
        P =
          (n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('1IsZ'),
          n('JtPf'),
          n('7x/C'),
          n('kGix')),
        A = n('XMGw'),
        T = n('Ssj5'),
        R = n('oEOe')
      function k(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = ''.concat(A.a, '/contacts'),
        I = 'rweb/'.concat(A.a),
        F = Object(R.a)(I, 'FETCH_ADDRESS_BOOK'),
        D = { cursor: null, contacts: [], fetchStatus: P.a.NONE }
      T.a.register(
        E()({}, j, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (n.type) {
            case F.REQUEST:
              return L(L({}, t), {}, { fetchStatus: P.a.LOADING })
            case F.SUCCESS:
              return (
                (e = n.payload.entities.vcards ? Object.values(n.payload.entities.vcards) : []),
                L(
                  L({}, t),
                  {},
                  {
                    contacts: [].concat(a()(t.contacts), a()(e)),
                    cursor: n.payload.result.next_cursor,
                    fetchStatus: P.a.LOADED,
                  },
                )
              )
            case F.FAILURE:
              return L(L({}, t), {}, { error: n.payload, fetchStatus: P.a.FAILED })
            default:
              return t
          }
        }),
      )
      var x = function (e) {
          return e[j].fetchStatus
        },
        N = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(R.b)(t, { request: a.Contacts.fetchAddressBook, params: e })({
              actionTypes: F,
              context: 'FETCH_ADDRESS_BOOK',
            })
          }
        },
        M = Object(O.createSelector)(
          function (e) {
            return e[j].contacts
          },
          x,
          function (e, t) {
            return { contacts: e, fetchStatus: t }
          },
        ),
        H = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_CONTACTS_DASHBOARD_SCREEN',
          ),
          deleteContacts: S.b,
          fetchContactsIfNeeded: function (e) {
            return function (t, n) {
              return x(n()) === P.a.LOADED ? Promise.resolve() : t(N(e))
            }
          },
          fetchContactsNext: function (e) {
            return function (t, n) {
              var r = n(),
                a = (function (e) {
                  return e[j].cursor
                })(r)
              return a && x(r) === P.a.LOADED ? t(N(L(L({}, e), {}, { cursor: a }))) : Promise.resolve()
            }
          },
        },
        U = Object(C.g)(M, H),
        B = n('v//M'),
        K = n('w6IS'),
        V = n('6ZHn'),
        G = n('TEoO'),
        W = n('yoO3'),
        Y = n('PK8P'),
        X = n('7JQg'),
        z = n('eM8g'),
        q = n('7FtF'),
        Z = n('iCwC'),
        Q = n('MWbm'),
        J = n('t62R'),
        $ = n('j7Bv'),
        ee = n('0yYu'),
        te = n('rHpw'),
        ne = n('v6aA'),
        re = n('3XMw'),
        ae = n.n(re)
      function oe(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ce = { page: 'settings', section: 'contacts_dashboard' },
        ie = ae.a.bbcafbd9,
        se = v.a.createElement(
          ae.a.I18NFormatMessage,
          { $i18n: 'ec152666' },
          v.a.createElement(
            J.b,
            { link: 'https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends' },
            ae.a.b8dd5e4d,
          ),
        ),
        le = ae.a.b864be79,
        ue = { headline: ae.a.g5fa1090, text: ae.a.h0d21912, confirmButtonLabel: ae.a.e68b09b4 },
        fe = ae.a.ca24589e,
        de = function (e) {
          return e.id_str
        },
        pe = function () {
          return null
        },
        he = (function (e) {
          d()(n, e)
          var t = oe(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              E()(u()(e), 'state', { verificationRequired: !1 }),
              E()(u()(e), '_renderTimeline', function () {
                var t = e.props,
                  n = t.contacts,
                  r = t.fetchStatus
                return v.a.createElement(G.a, {
                  assumedItemHeight: 70,
                  cacheKey: 'CONTACTS_DASHBOARD',
                  footer: e._renderFooter(r),
                  identityFunction: de,
                  items: n,
                  onNearEnd: e._handleFetchMoreContacts,
                  renderer: e._renderContact,
                })
              }),
              E()(u()(e), '_renderContact', function (t) {
                var n = t.id_str,
                  r = t.import_source,
                  o = t.vcard,
                  c = e._getContactProp(o.get('fn')) || fe,
                  i = e._getContactProperties(o.get('tel')),
                  s = e._getContactProperties(o.get('email')),
                  l = [].concat(a()(s), a()(i))
                return v.a.createElement(
                  Q.a,
                  { key: n, style: [[Z.a.infoText, Z.a.bottomBorder], me.contactContainer] },
                  v.a.createElement($.a, { Icon: V.a, color: 'neutral', style: me.personIcon }),
                  v.a.createElement(
                    Q.a,
                    null,
                    v.a.createElement(J.b, null, c),
                    l
                      ? l.map(function (e) {
                          return v.a.createElement(J.b, { color: 'gray700', key: e, size: 'subtext2' }, e)
                        })
                      : null,
                    r
                      ? v.a.createElement(J.b, { color: 'gray700', size: 'subtext2' }, 'Imported from '.concat(r))
                      : null,
                  ),
                )
              }),
              E()(u()(e), '_renderFooter', function (e) {
                return e === P.a.LOADING
                  ? v.a.createElement(
                      Q.a,
                      { style: me.loadingContainer },
                      v.a.createElement(B.a, { fetchStatus: e, render: pe }),
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
                    ? Object(K.a)(
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
                    r = e.fetchStatus,
                    a = e.location
                  return v.a.createElement(
                    X.b,
                    { namespace: ce },
                    v.a.createElement(
                      W.a,
                      null,
                      v.a.createElement(
                        q.a,
                        { location: a, title: ie },
                        v.a.createElement(_.a, {
                          confirmationSheetConfirmButtonLabel: ue.confirmButtonLabel,
                          confirmationSheetConfirmButtonType: 'destructiveFilled',
                          confirmationSheetHeadline: ue.headline,
                          confirmationSheetText: ue.text,
                          label: le,
                          onConfirmationSheetConfirm: this._handleRemoveContacts,
                        }),
                        v.a.createElement(z.a, null, se),
                        v.a.createElement(ee.a, null),
                        v.a.createElement(Y.a, {
                          fetch: n,
                          fetchStatus: t.length > 0 ? P.a.LOADED : r,
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
        })(v.a.Component)
      E()(he, 'contextType', ne.a)
      var me = te.a.create(function (e) {
        return {
          contactContainer: { flexDirection: 'row', flexWrap: 'wrap' },
          personIcon: { marginRight: e.spaces.space12 },
          loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: 'center' },
        }
      })
      t.default = U(he)
    },
    '98E1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return I
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ERkP'),
        E = n.n(b),
        g = n('3XMw'),
        v = n.n(g),
        _ = n('7FtF'),
        S = n('iCwC'),
        O = n('MWbm'),
        w = n('t62R'),
        C = n('6vad'),
        P = n('p+r5')
      function A(e) {
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
      var T = v.a.a999cb72,
        R = v.a.dec3c9b8,
        k = v.a.acc20811,
        L = v.a.d1091f50,
        j = v.a.i2209530,
        I = (function (e) {
          u()(n, e)
          var t = A(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_handleSubmit', function () {
                var e = o.props.onPasswordSubmit,
                  t = o.state.current_password
                t && e(t), o.setState({ current_password: '' })
              }),
              y()(s()(o), '_handleChange', function (e) {
                o.setState({ current_password: e.target.value })
              }),
              (o.state = { current_password: '' }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.reenterPasswordLabel,
                    r = e.saveChangesHeaderLabel,
                    a = e.submitLabel,
                    o = e.submitType,
                    c = E.a.createElement(
                      w.b,
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
                    { location: t, onSubmit: this._handleSubmit, submitLabel: a, submitType: o, title: r },
                    E.a.createElement(C.b, { text: r }),
                    E.a.createElement(
                      O.a,
                      { style: [S.a.viewItem, S.a.bottomBorder] },
                      E.a.createElement(w.b, { color: 'gray700', size: 'subtext2' }, n),
                    ),
                    E.a.createElement(P.a, {
                      helperText: c,
                      label: R,
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
                    r = e.promptForPassword,
                    a = e.title
                  return r ? this._renderPasswordPrompt() : E.a.createElement(_.a, { location: n, title: a }, t || null)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(I, 'defaultProps', {
        children: null,
        promptForPassword: !1,
        reenterPasswordLabel: k,
        saveChangesHeaderLabel: T,
        submitLabel: j,
      })
    },
    '9JoG': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConnectedAccounts', function () {
          return de
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('z84I'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        E = n.n(b),
        g = n('k49u'),
        v = n('1YZw'),
        _ = n('55TG'),
        S = n('rxPX'),
        O = n('0KEI'),
        w = n('P1r1'),
        C = n('vEo5'),
        P = Object(S.a)()
          .propsFromState(function () {
            return { userEmail: C.selectFirstEmail, fetchStatus: w.o, ssoConnections: w.B }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT',
              ),
              deleteSSOConnection: w.d,
              fetchDevicesIfNeeded: C.fetchDevicesIfNeeded,
              fetchSettingsIfNeeded: w.f,
              verifyPassword: _.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'connected_accounts', component: 'delete_sso_connection' }),
        A = n('3XMw'),
        T = n.n(A),
        R = n('yoO3'),
        k = n('iCwC'),
        L = n('MWbm'),
        j = n('t62R'),
        I = n('6vad'),
        F = n('p+r5'),
        D = n('mw9i'),
        x = n('/yvb'),
        N = n('rHpw')
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
      var H = T.a.dec3c9b8,
        U = T.a.d1091f50,
        B = T.a.i4efb2e3,
        K = T.a.g9677c6d,
        V = T.a.c8cb0b4c,
        G = T.a.fe36fe1f,
        W = (function (e) {
          u()(n, e)
          var t = M(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { password: '', passwordError: void 0 }),
              y()(s()(e), '_handleChange', function (t) {
                e.setState({ passwordError: void 0, password: t.target.value })
              }),
              y()(s()(e), '_handlePasswordSubmit', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.onSubmitPassword,
                  o = n.verifyPassword,
                  c = e.state.password
                '' !== c &&
                  o(c)
                    .then(function () {
                      e.setState({ password: '' }), a()
                    })
                    .catch(
                      r(
                        ((t = {}),
                        y()(t, g.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: V })
                          },
                        }),
                        y()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.ssoProvider,
                    n = e.titleHeader,
                    r = this.state,
                    a = r.password,
                    o = r.passwordError,
                    c = E.a.createElement(
                      j.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      U,
                    )
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    n ? E.a.createElement(I.b, { text: n }) : null,
                    E.a.createElement(
                      L.a,
                      { style: [k.a.viewItem, k.a.bottomBorder] },
                      t ? E.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, B({ ssoProvider: t })) : null,
                    ),
                    E.a.createElement(F.a, {
                      errorText: o,
                      helperText: c,
                      invalid: !!o,
                      label: H,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: a,
                    }),
                    E.a.createElement(
                      D.a,
                      { style: Y.buttonContainer },
                      E.a.createElement(
                        x.a,
                        { onPress: this._handlePasswordSubmit, style: Y.button, type: 'brandFilled' },
                        K,
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(W, 'defaultProps', { titleHeader: G })
      var Y = N.a.create(function (e) {
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
        X = W,
        z = n('7FtF'),
        q = n('cnVF'),
        Z = n('xHsv'),
        Q = n('csss'),
        J = n('jtO7'),
        $ = n('0yYu'),
        ee = n('G1WX'),
        te = n('6Rrp'),
        ne = n('jmcQ'),
        re = n('iKTg')
      function ae(e) {
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
      var oe = T.a.h1abfbcd,
        ce = T.a.a45d71b8,
        ie = T.a.d84ed6b1,
        se = T.a.i51130d4,
        le = T.a.e28901f2,
        ue = T.a.cf8560be,
        fe = T.a.ead2429e,
        de = (function (e) {
          u()(n, e)
          var t = ae(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { showPasswordDialog: !1, ssoConnectionToDelete: void 0 }),
              y()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.location,
                  a = t.verifyPassword,
                  o = e.state,
                  c = o.showPasswordDialog,
                  i = o.ssoConnectionToDelete
                return E.a.createElement(
                  R.a,
                  null,
                  E.a.createElement(
                    z.a,
                    { location: r, screenType: 'secondaryDetail', title: oe },
                    c
                      ? E.a.createElement(X, {
                          createLocalApiErrorHandler: n,
                          onSubmitPassword: e._handlePasswordSubmit,
                          ssoProvider: i,
                          verifyPassword: a,
                        })
                      : E.a.createElement(
                          E.a.Fragment,
                          null,
                          E.a.createElement(Z.a, { description: ce }),
                          e._renderSSOProviderPivots(),
                        ),
                  ),
                )
              }),
              y()(s()(e), '_renderSSOProviderPivots', function () {
                var t = e.props,
                  n = t.ssoConnections,
                  r = t.userEmail,
                  a = E.a.createElement(
                    j.b,
                    { color: 'green500', size: 'subtext2' },
                    E.a.createElement(te.a, null),
                    ' ',
                    ue,
                  )
                if (n && n.r.ok.length) {
                  var o = n.r.ok
                  return o.map(function (t, n) {
                    var c = t.ssoProvider,
                      i = o.length - 1,
                      s = e._getSSOProviderProps(c) || {},
                      l = s.ssoProviderLabel,
                      u = s.ssoProviderThumbnail
                    return E.a.createElement(
                      L.a,
                      { key: n },
                      E.a.createElement(Q.a, {
                        description: a,
                        label: l,
                        renderRightContent: r ? e._renderUserEmail(r) : void 0,
                        thumbnail: u,
                        thumbnailSize: 'large',
                      }),
                      E.a.createElement(J.a, {
                        color: 'red500',
                        label: ie,
                        onPress: e._handleOnPress({ ssoProvider: c }),
                      }),
                      n < i ? E.a.createElement($.a, null) : null,
                    )
                  })
                }
              }),
              y()(s()(e), '_renderUserEmail', function (e) {
                return function () {
                  return E.a.createElement(j.b, null, e)
                }
              }),
              y()(s()(e), '_getSSOProviderProps', function (e) {
                var t = e.toLowerCase(),
                  n = N.a.isDarkMode() ? N.a.theme.colors.white : void 0
                switch (t) {
                  case q.A.Google:
                    return { ssoProviderThumbnail: E.a.createElement(ne.a, null), ssoProviderLabel: se }
                  case q.A.Apple:
                    return {
                      ssoProviderThumbnail: E.a.createElement(re.a, { style: { color: n } }),
                      ssoProviderLabel: le,
                    }
                  default:
                    return
                }
              }),
              y()(s()(e), '_combinedFetches', function () {
                var t = e.props,
                  n = t.fetchDevicesIfNeeded,
                  r = t.fetchSettingsIfNeeded,
                  a = [n(), r()]
                return Promise.all(a)
              }),
              y()(s()(e), '_handleOnPress', function (t) {
                var n = t.ssoProvider
                return function () {
                  e.props.analytics.scribe({ element: n, action: 'click' }),
                    e.setState({ ssoConnectionToDelete: n }),
                    e._deleteSSOConnection()
                }
              }),
              y()(s()(e), '_deleteSSOConnection', function () {
                var t,
                  n = e.props,
                  r = n.addToast,
                  a = n.createLocalApiErrorHandler,
                  o = n.deleteSSOConnection,
                  c = e.state.ssoConnectionToDelete
                return o({ ssoProvider: c })
                  .then(function () {
                    r({ text: fe({ ssoProvider: c }) }),
                      e.setState({ showPasswordDialog: !1, ssoConnectionToDelete: void 0 })
                  })
                  .catch(
                    a(
                      ((t = {}),
                      y()(t, g.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ showPasswordDialog: !0 })
                        },
                      }),
                      y()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              y()(s()(e), '_handlePasswordSubmit', function () {
                e._deleteSSOConnection()
              }),
              y()(s()(e), '_handleFetchRetry', function () {
                e._combinedFetches()
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  return E.a.createElement(ee.a, {
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
      t.default = P(de)
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return b
        }),
        n.d(t, 'f', function () {
          return E
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'g', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('vrRf'), n('vXCH')),
        c = n('oQhu'),
        i = n('ZNT5'),
        s = n('eR3e')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = Object.freeze({ Trends: 'trends' }),
        d = Object.freeze({ WebSidebar: 'web_sidebar' }),
        p = 'explore-',
        h = 9e5,
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            r = e.featureSwitches,
            a = e.focalTweetId,
            o = e.includePageConfiguration,
            c = void 0 !== o && o,
            s = e.initialTabId,
            l = e.profileUserId,
            f = t || n || 'main',
            d = a
              ? ''.concat(p).concat(f, '-tweet-').concat(a)
              : l
              ? ''.concat(p).concat(f, '-user-').concat(l)
              : ''.concat(p).concat(f),
            m = r.isTrue('responsive_web_new_client_events_enabled')
          return Object(i.a)({
            timelineId: d,
            formatResponse: y(m),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return u(
                u({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: a,
                  include_page_configuration: c,
                  initial_tab_id: s,
                  profile_user_id: l,
                  entity_tokens: m,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(p).concat(f),
            staleIntervalMs: h,
          })
        },
        y = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var r = n.tabs.tabs.map(function (t) {
                  var n,
                    r,
                    a,
                    o = u(
                      u(
                        {},
                        null === (n = t.urtEndpoint) ||
                          void 0 === n ||
                          null === (r = n.urtEndpointOptions) ||
                          void 0 === r
                          ? void 0
                          : r.requestParams,
                      ),
                      {},
                      { entity_tokens: e },
                    )
                  return u(
                    u({}, t),
                    {},
                    {
                      urtEndpoint: u(
                        u({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: u(
                            u({}, null === (a = t.urtEndpoint) || void 0 === a ? void 0 : a.urtEndpointOptions),
                            {},
                            { requestParams: o },
                          ),
                        },
                      ),
                    },
                  )
                }),
                a = u(u({}, t), {}, { pageConfiguration: u(u({}, n), {}, { tabs: u(u({}, n.tabs), {}, { tabs: r }) }) })
              return Object(o.a)(a)
            }
            return Object(o.a)(t)
          }
        },
        b = function (e, t) {
          return m({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        E = Object(c.a)(function (e) {
          return m({ featureSwitches: e, contentType: f.Trends })
        }),
        g = Object(c.a)(function (e) {
          return m({ featureSwitches: e, displayLocation: d.WebSidebar })
        }),
        v = function () {
          return function (e, t) {
            return e(
              Object(s.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(p)
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
          return ie
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('5Yy7'),
        s = n.n(i),
        l = n('N+ot'),
        u = n.n(l),
        f = n('AuHH'),
        d = n.n(f),
        p = n('KEM+'),
        h = n.n(p),
        m = n('ERkP'),
        y = n.n(m),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ZNT5')),
        E = n('RhWx'),
        g = n.n(E),
        v = n('T0aG'),
        _ = n.n(v),
        S = n('m3Bd'),
        O = n.n(S),
        w = n('vWJI'),
        C = n('PiaM'),
        P = n('9/1j'),
        A = n('Re5t')
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.cursor,
            r = []
          if (e.result.users.length > 0) {
            var a = n && 'object' === _()(n) ? n.sortValue : Date.now(),
              o = a - 1
            e.result.users.forEach(function (e) {
              r.push(C.l({ id: e, sortIndex: ''.concat(o), displayType: A.a.UserDetailed })), (o -= 1)
            }),
              r.push.apply(r, g()(L(e, o)))
          }
          return j(r, e.entities, I)
        },
        L = function (e, t) {
          var n = e.result.next_cursor_str
          return '0' === n
            ? []
            : [
                w.c({
                  cursorType: w.a.Bottom,
                  value: { param: 'cursor', id: n || '-1', sortValue: t },
                  sortIndex: ''.concat(t),
                }),
              ]
        },
        j = function (e, t, n) {
          return {
            globalObjects: t,
            timeline: {
              responseObjects: n,
              instructions: e.length ? [{ type: P.a.AddEntries, parameters: { entries: e } }] : [],
            },
          }
        },
        I = { feedbackActions: {} }
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var x = function (e) {
          return Object(b.a)({
            timelineId: 'deviceFollowingLegacy-'.concat(e),
            getEndpoint: function (e) {
              return (
                (t = e.Friendships.fetchFollowing),
                function (e, n) {
                  var r = e.cursor,
                    a = O()(e, ['cursor']),
                    o = a
                  return r && 'object' === _()(r) && (o = R(R({}, a), {}, h()({}, r.param, r.id))), t(o, n)
                }
              )
              var t
            },
            getEndpointParams: function (t) {
              return D(D({}, t), {}, { user_id: e, type: 'sms,live' })
            },
            context: 'FETCH_FOLLOWING',
            perfKey: 'deviceFollowingLegacy',
            formatResponse: k,
          })
        },
        N = n('FIs5'),
        M = n('QIgh'),
        H = n('8UdT'),
        U = n('88ay'),
        B = n('Ka9G')
      function K(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var G = V(V({}, Object(M.a)({ tweetDismissable: !0 })), {}, h()({}, H.b.User, Object(B.a)({ decoration: U.c }))),
        W = n('3XMw'),
        Y = n.n(W),
        X = n('tI3i'),
        z = n.n(X),
        q = n('yoO3'),
        Z = n('fTQJ'),
        Q = n('7JQg'),
        J = n('7FtF'),
        $ = n('v6aA')
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var te = { page: 'settings', section: 'device_following' },
        ne = Y.a.e6b2d3de,
        re = Y.a.fd6f8a70,
        ae = Y.a.a820d092,
        oe = Y.a.i2775c58,
        ce = function () {
          return y.a.createElement(N.a, { header: ne, message: re })
        },
        ie = (function (e) {
          s()(n, e)
          var t = ee(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.loggedInUserId,
                    t = this.props.location
                  z()(!!e, 'loggedInUserId must be defined')
                  var n = x(e)
                  return y.a.createElement(
                    Q.b,
                    { namespace: te },
                    y.a.createElement(
                      q.a,
                      null,
                      y.a.createElement(
                        J.a,
                        { location: t, title: oe },
                        y.a.createElement(Z.a, {
                          entryConfiguration: G,
                          loadingAccessibilityLabel: ae,
                          module: n,
                          renderEmptyState: ce,
                          title: oe,
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
      h()(ie, 'contextType', $.a)
      t.default = ie
    },
    EyIn: function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return m
      }),
        n.d(t, 'g', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return b
        }),
        n.d(t, 'i', function () {
          return E
        }),
        n.d(t, 'd', function () {
          return j
        }),
        n.d(t, 'e', function () {
          return I
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'c', function () {
          return v
        }),
        n.d(t, 'a', function () {
          return F
        }),
        n.d(t, 'j', function () {
          return D
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('9OUN'),
        c = 'trends',
        i = ('rweb/'.concat(c), n('Ssj5')),
        s =
          (n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('yH/f'),
          n('JtPf'),
          n('7x/C'),
          n('oEOe')),
        l = n('kGix')
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
      function f(e) {
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
      var d = Object.freeze({
          REQUEST: 'rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST',
          SUCCESS: 'rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS',
          FAILURE: 'rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE',
        }),
        p = Object.freeze({
          REQUEST: 'rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST',
          SUCCESS: 'rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS',
          FAILURE: 'rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE',
        }),
        h = {
          placeTrendsLocations: [],
          placeTrendsFetchStatus: l.a.NONE,
          woeTrendsLocations: [],
          woeTrendsFetchStatus: l.a.NONE,
        }
      var m = function (e) {
          return e.trends.locations.placeTrendsLocations
        },
        y = function (e) {
          return e.trends.locations.placeTrendsFetchStatus
        },
        b = function (e) {
          return e.trends.locations.woeTrendsLocations
        },
        E = function (e) {
          return e.trends.locations.woeTrendsFetchStatus
        },
        g = function (e) {
          return function (t, n, r) {
            var a = r.api
            return s.b(t, { params: e, request: a.Settings.fetchPlaceTrendsLocations })({
              actionTypes: d,
              context: 'FETCH_TRENDS_LOCATIONS',
            })
          }
        },
        v = function () {
          return function (e, t, n) {
            n.api
            return E(t()) === l.a.LOADED ? Promise.resolve() : e(_())
          }
        },
        _ = function () {
          return function (e, t, n) {
            var r = n.api
            return s.b(e, { params: {}, request: r.Settings.fetchWoeTrendsLocations })({
              actionTypes: p,
              context: 'FETCH_TRENDS_LOCATIONS',
            })
          }
        },
        S = n('m3Bd'),
        O = n.n(S),
        w = (n('z84I'), n('RqPI')),
        C = n('YeIG'),
        P = n('BxsD')
      function A(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R = Object.freeze({
          REQUEST: 'rweb/trends/UPDATE_TRENDS_SETTINGS_REQUEST',
          SUCCESS: 'rweb/trends/UPDATE_TRENDS_SETTINGS_SUCCESS',
          FAILURE: 'rweb/trends/UPDATE_TRENDS_SETTINGS_FAILURE',
        }),
        k = Object.freeze({
          REQUEST: 'rweb/trends/FETCH_TRENDS_SETTINGS_REQUEST',
          SUCCESS: 'rweb/trends/FETCH_TRENDS_SETTINGS_SUCCESS',
          FAILURE: 'rweb/trends/FETCH_TRENDS_SETTINGS_FAILURE',
        }),
        L = { settings: {}, fetchStatus: l.a.NONE }
      var j = function (e) {
          return e.trends.settings && e.trends.settings.settings
        },
        I = function (e) {
          return e.trends.settings && e.trends.settings.fetchStatus
        },
        F = function () {
          return function (e, t) {
            return I(t()) === l.a.LOADED
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.api
                  return w.m(t())
                    ? s.b(e, { request: r.Settings.fetchPlaceTrendSettings })({
                        actionTypes: k,
                        context: 'FETCH_TRENDS_SETTINGS',
                      })
                    : Promise.resolve()
                })
          }
        },
        D = function (e) {
          return function (t, n, r) {
            var a = r.api
            if (Object(C.a)(e)) return Promise.resolve()
            e.places
            var o = T({}, O()(e, ['places']))
            return (
              e.places &&
                e.places.length &&
                (o.places = e.places.map(function (e) {
                  return e.place_id
                })),
              s
                .b(t, { params: o, request: a.Settings.updatePlaceTrendSettings })({
                  actionTypes: R,
                  context: 'UPDATE_TRENDS_SETTINGS',
                  meta: e,
                })
                .then(function () {
                  return t(Object(P.g)())
                })
            )
          }
        },
        x = {
          settings: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case k.REQUEST:
                return T(T({}, e), {}, { fetchStatus: l.a.LOADING })
              case k.SUCCESS:
                return T(T({}, e), {}, { settings: T(T({}, e.settings), t.payload), fetchStatus: l.a.LOADED })
              case R.SUCCESS:
                return T(T({}, e), {}, { settings: T(T({}, e.settings), t.meta), fetchStatus: l.a.LOADED })
              case k.FAILURE:
                return T(T({}, e), {}, { fetchStatus: l.a.FAILED })
              default:
                return e
            }
          },
          locations: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case d.REQUEST:
                return f(f({}, e), {}, { placeTrendsFetchStatus: l.a.LOADING })
              case d.FAILURE:
                return f(f({}, e), {}, { placeTrendsFetchStatus: l.a.FAILED })
              case d.SUCCESS:
                return t.payload
                  ? f(f({}, e), {}, { placeTrendsLocations: t.payload, placeTrendsFetchStatus: l.a.LOADED })
                  : e
              case p.REQUEST:
                return f(f({}, e), {}, { woeTrendsFetchStatus: l.a.LOADING })
              case p.FAILURE:
                return f(f({}, e), {}, { woeTrendsFetchStatus: l.a.FAILED })
              case p.SUCCESS:
                return t.payload
                  ? f(f({}, e), {}, { woeTrendsLocations: t.payload, woeTrendsFetchStatus: l.a.LOADED })
                  : e
              default:
                return e
            }
          },
        },
        N = Object(o.c)(x)
      i.a.register(a()({}, c, N))
    },
    LXAX: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('oEOe')),
        c = n('Ssj5')
      function i(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = 'settings/usernames',
        u = 'rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY',
        f = Object.freeze({
          REQUEST: 'rweb/settings/usernames/FETCH_USERNAMES_REQUEST',
          SUCCESS: 'rweb/settings/usernames/FETCH_USERNAMES_SUCCESS',
          FAILURE: 'rweb/settings/usernames/FETCH_USERNAMES_FAILURE',
        }),
        d = { isLoaded: !1 }
      var p = function (e) {
          return e[l]
        },
        h = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(o.b)(t, { params: e, request: a.Settings.usernameAvailable })({
              actionTypes: f,
              context: 'FETCH_SETTINGS_USERNAME_AVAILABLE',
              meta: { username: e.username },
            })
          }
        },
        m = function (e) {
          return { type: u, meta: e }
        }
      c.a.register(
        a()({}, l, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case f.REQUEST:
              return s(s({}, t), {}, { isLoading: !0 })
            case f.FAILURE:
              return s(s({}, t), {}, { isLoading: !1 })
            case f.SUCCESS:
              return s(s(s({}, t), n.payload), {}, { username: n.meta.username, isLoading: !1 })
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
      var r = n('ERkP'),
        a = n.n(r),
        o = n('kPZX'),
        c = n('rxPX'),
        i = n('0KEI'),
        s = Object(c.a)()
          .propsFromState(function () {
            return { browserPushAllowed: o.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PREFERENCES_SCREEN',
              ),
            }
          }),
        l = n('3XMw'),
        u = n.n(l),
        f = n('yoO3'),
        d = n('7JQg'),
        p = n('7FtF'),
        h = n('xHsv'),
        m = n('csss'),
        y = u.a.hee41732,
        b = u.a.e75f25a8,
        E = u.a.bcd81cab,
        g = u.a.da867c58,
        v = u.a.i859a9d3,
        _ = { page: 'settings', section: 'preferences' }
      function S(e) {
        var t = e.browserPushAllowed,
          n = e.location
        return a.a.createElement(
          d.b,
          { namespace: _ },
          a.a.createElement(
            f.a,
            null,
            a.a.createElement(
              p.a,
              { location: n, title: E },
              a.a.createElement(h.a, {
                description: g,
                learnMoreLabel: v,
                learnMoreLink: 'https://help.twitter.com/managing-your-account/notifications-on-mobile-devices',
              }),
              t ? a.a.createElement(m.a, { label: y, link: '/settings/push_notifications' }) : null,
              a.a.createElement(m.a, { label: b, link: '/settings/email_notifications' }),
            ),
          ),
        )
      }
      var O = s(S)
      t.default = O
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return a
        })
      n('yH/f')
      var r = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        a = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    N9bX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return a
        })
      n('WNMA'), n('KqXw'), n('7xRU')
      var r = 20,
        a = function (e) {
          return (e.match(/.{1,4}/g) || [e]).join(' ')
        }
    },
    NCPH: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationDetailPage', function () {
          return pe
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b =
          (n('2G9S'),
          n('tQbP'),
          n('LW0h'),
          n('ho0z'),
          n('1t7P'),
          n('jQ/y'),
          n('z84I'),
          n('hCOa'),
          n('87if'),
          n('6U7i'),
          n('ly4k'),
          n('ERkP')),
        E = n.n(b),
        g = (n('WNMA'), n('KqXw'), n('dZRF')),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = function (e, t) {
          return t.match.params.appId
        },
        O = function (e, t) {
          return g.a.selectAppsById(e, t.match.params.appId)
        },
        w = Object(v.a)()
          .propsFromState(function () {
            return { appId: S, fetchStatus: g.d, details: O }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('APPLICATION_DETAIL'),
              fetchApplication: g.c,
              revokeApplication: g.a.revokeApplication,
              revokeOauth2Token: g.a.revokeOauth2Token,
            }
          })
          .withAnalytics({ page: 'settings', section: 'application_detail' }),
        C = n('v//M'),
        P = n('3XMw'),
        A = n.n(P),
        T = n('oQhu'),
        R = n('yoO3'),
        k = n('jtO7'),
        L = n('MWbm')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var I = A.a.da6cdba7,
        F = A.a.ef1d3dcc,
        D = (function (e) {
          u()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleRevokeApp', function () {
                e.props.onRevoke(e.props.token, e.props.tokenType)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.reportApplicationHref,
                    n = e.revoked
                  return E.a.createElement(
                    L.a,
                    null,
                    n
                      ? E.a.createElement(k.a, { color: 'primary', label: F, link: t })
                      : E.a.createElement(k.a, { color: 'red500', label: I, onPress: this._handleRevokeApp }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.PureComponent),
        x = n('av9q'),
        N = n('7FtF'),
        M = n('prCu'),
        H = n('jm1/'),
        U = n('FIs5'),
        B = n('t62R'),
        K = n('csss'),
        V = n('6vad'),
        G = n('htQn'),
        W = n('o1YB'),
        Y = n('U+bB')
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
      var z = A.a.g8d1b99b,
        q = A.a.eafcc76a,
        Z = A.a.j3998a15,
        Q = A.a.a6845663,
        J = A.a.b2347f7b,
        $ = A.a.e1fda16d,
        ee = A.a.da1201c6,
        te = A.a.gb8d09b9,
        ne = A.a.g6dc09af,
        re = A.a.a6e6e897,
        ae = A.a.cde3b9ae,
        oe = A.a.g0d78139,
        ce = A.a.c9b35b9e,
        ie = A.a.e0191264,
        se = A.a.b73e1e89,
        le = 'https://support.twitter.com/articles/20170805',
        ue = 'https://support.twitter.com/forms/platform',
        fe = 'oauth1',
        de = 'oauth2',
        pe = (function (e) {
          u()(n, e)
          var t = X(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
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
              y()(
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
              y()(s()(e), '_handleRevokeApp', function (t, n) {
                e._revokeApplication(t, n), e._scribeAction('revoke_access')
              }),
              y()(s()(e), '_handleRetry', function () {
                e._fetchApp()
              }),
              y()(s()(e), '_fetchApp', function () {
                var t = e.props,
                  n = t.appId,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchApplication)(n).catch(r({ showToast: !0 }))
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.details,
                  n = t[0]
                if (!n) return E.a.createElement(U.a, { header: $, message: ee })
                var r = { app_id: n.app_id, app_name: n.name },
                  a = E.a.createElement(
                    L.a,
                    { style: H.a.itemContainer },
                    E.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, e._renderApprovalDate(n.approved)),
                  )
                return E.a.createElement(
                  L.a,
                  null,
                  E.a.createElement(K.a, {
                    description: n.organization,
                    label: n.name,
                    thumbnail: E.a.createElement(Y.a, { accessibilityLabel: '', source: n.img_url, style: H.a.avatar }),
                  }),
                  n.organization_url
                    ? E.a.createElement(k.a, { color: 'primary', label: n.organization_url, link: n.organization_url })
                    : null,
                  E.a.createElement(
                    L.a,
                    { style: H.a.itemContainer },
                    E.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, n.description),
                  ),
                  a,
                  E.a.createElement(V.b, { text: ne }),
                  t.map(function (t) {
                    return E.a.createElement(
                      L.a,
                      { key: t.token },
                      e._renderPermissions(t),
                      t.ios
                        ? null
                        : E.a.createElement(D, {
                            onRevoke: e._handleRevokeApp,
                            reportApplicationHref: ''.concat(ue, '?').concat(Object(M.stringify)(r)),
                            revoked: !!t.revoked,
                            token: t.token,
                            tokenType: t.token_type || fe,
                          }),
                    )
                  }),
                  n.ios
                    ? E.a.createElement(
                        G.a,
                        { link: le, style: [H.a.itemContainer, H.a.center] },
                        E.a.createElement(B.b, { color: 'link' }, se),
                      )
                    : null,
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._fetchApp()
                },
              },
              {
                key: '_renderPermissions',
                value: function (e) {
                  if (null != e.scopes && e.token_type === de) {
                    var t = Array.from(e.scopes)
                    return E.a.createElement(
                      L.a,
                      { style: H.a.permissionContainer },
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
                  return t.length ? E.a.createElement(x.a, { scopes: t, size: 'subtext2', title: q }) : null
                },
              },
              {
                key: '_renderCanDoScopes',
                value: function (e) {
                  var t = this._getSortedCanDoScopes(e)
                  return t.length ? E.a.createElement(x.a, { scopes: t, size: 'subtext2', title: Z }) : null
                },
              },
              {
                key: '_renderReadWritePermissions',
                value: function (e) {
                  var t = null
                  return (
                    e.can_read_dms ? (t = oe) : e.can_write ? (t = ae) : e.can_read && (t = re),
                    t ? E.a.createElement(W.a, { label: t }) : null
                  )
                },
              },
              {
                key: '_renderEmailPermission',
                value: function (e) {
                  return e.email_access ? E.a.createElement(W.a, { label: te }) : null
                },
              },
              {
                key: '_renderAdsPermission',
                value: function (e) {
                  var t = null
                  return (
                    e.has_ads_read_write_access ? (t = ie) : e.has_ads_read_access && (t = ce),
                    t ? E.a.createElement(W.a, { label: t }) : null
                  )
                },
              },
              {
                key: '_renderApprovalDate',
                value: function (e) {
                  var t = new Date(Number(e)),
                    n = Q({ date: z(t) })
                  return E.a.createElement('time', { dateTime: t.toISOString() }, n)
                },
              },
              {
                key: '_revokeApplication',
                value: function (e, t) {
                  var n = this.props,
                    r = n.createLocalApiErrorHandler,
                    a = n.revokeApplication,
                    o = n.revokeOauth2Token
                  t === de ? o(e).catch(r({ showToast: !0 })) : a(e).catch(r({ showToast: !0 }))
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
                    r = e.location,
                    a = t[0],
                    o = a ? a.name : ''
                  return E.a.createElement(
                    R.a,
                    null,
                    E.a.createElement(
                      N.a,
                      { location: r, title: o },
                      E.a.createElement(C.a, {
                        accessibilityLabel: J,
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
      t.default = w(pe)
    },
    NTtI: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style],
              viewBox: '0 0 200 200',
            },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('circle', { cx: '100', cy: '100', fill: '#97E3FF', r: '100' }),
            c.a.createElement('path', {
              d: 'M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z',
              fill: '#005FD1',
            }),
            c.a.createElement('path', {
              d: 'M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z',
              fill: '#1DA1F2',
            }),
            c.a.createElement('ellipse', { cx: '123.283', cy: '100.225', fill: '#97E3FF', rx: '6.567', ry: '45.075' }),
            c.a.createElement('path', {
              d: 'M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z',
              fill: '#71C9F8',
            }),
            c.a.createElement('path', {
              d: 'M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267',
              fill: '#005FD1',
            }),
            c.a.createElement('path', {
              d: 'M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z',
              fill: '#1DA1F2',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 200, height: 200 }), (t.a = f)
    },
    PCpk: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TemporaryPasswordScreen', function () {
          return te
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('yH/f'), n('oEOe')),
        v = n('kGix'),
        _ = n('Ssj5')
      function S(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = 'temporaryPassword',
        C = Object.freeze({
          REQUEST: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_REQUEST',
          SUCCESS: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_SUCCESS',
          FAILURE: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_FAILURE',
        }),
        P = { fetchStatus: v.a.NONE }
      _.a.register(
        y()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case C.REQUEST:
              return O(O({}, e), {}, { fetchStatus: v.a.LOADING })
            case C.SUCCESS:
              var n = t.payload && t.payload.temporary_password
              return O(O({}, e), {}, { temporaryPassword: n, fetchStatus: v.a.LOADED })
            case C.FAILURE:
              return O(O({}, e), {}, { fetchStatus: v.a.FAILED })
            default:
              return e
          }
        }),
      )
      var A = n('1YZw'),
        T = n('hqKg'),
        R = n('0KEI'),
        k = n('oEGd'),
        L = Object(T.createSelector)(
          function (e) {
            return e[w].temporaryPassword
          },
          function (e) {
            return e[w].fetchStatus
          },
          function (e, t) {
            return { temporaryPassword: e, fetchStatus: t }
          },
        ),
        j = {
          addToast: A.b,
          createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TEMPORARY_PASSWORD_SCREEN',
          ),
          fetchTemporaryPassword: function () {
            return function (e, t, n) {
              var r = n.api
              return Object(g.b)(e, { request: r.Settings.fetchTemporaryPassword })({
                actionTypes: C,
                context: 'FETCH_TEMPORARY_PASSWORD',
              })
            }
          },
        },
        I = Object(k.g)(L, j),
        F = n('v//M'),
        D = n('N9bX'),
        x = n('3XMw'),
        N = n.n(x),
        M = n('yoO3'),
        H = n('7FtF'),
        U = n('XUJi'),
        B = n('t62R'),
        K = n('/yvb'),
        V = n('atVN'),
        G = n('CaKu'),
        W = n('MWbm'),
        Y = n('7JQg')
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
      var z = N.a.j2327f80,
        q = N.a.fbfeaf8e,
        Z = N.a.h4a8bd11,
        Q = N.a.f88553c8,
        J = N.a.g247dc1b,
        $ = N.a.f2d47b4d,
        ee = N.a.d70fceac,
        te = (function (e) {
          u()(n, e)
          var t = X(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_renderContent', function () {
                var t = e.props.temporaryPassword
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    W.a,
                    { style: U.a.centeredContainer },
                    E.a.createElement(
                      B.b,
                      { align: 'center', size: 'title2', weight: 'bold' },
                      t ? Object(D.b)(t) : null,
                    ),
                  ),
                  G.a.isAvailable()
                    ? E.a.createElement(
                        W.a,
                        { style: U.a.centeredContainer },
                        E.a.createElement(
                          K.a,
                          { alignContent: 'center', onPress: e._handleCopy, type: 'brandFilled' },
                          Z,
                        ),
                      )
                    : null,
                  E.a.createElement(
                    W.a,
                    { style: U.a.centeredContainer },
                    E.a.createElement(
                      K.a,
                      { alignContent: 'center', onPress: e._handleGenerate, type: 'brandText' },
                      q,
                    ),
                  ),
                )
              }),
              y()(s()(e), '_handleCopy', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.temporaryPassword
                r && (G.a.setString(r), n({ text: Q }))
              }),
              y()(s()(e), '_handleGenerate', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTemporaryPassword)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    M.a,
                    null,
                    E.a.createElement(
                      H.a,
                      { location: n, title: z },
                      E.a.createElement(V.a, null, E.a.createElement(B.b, { color: 'gray700' }, $)),
                      E.a.createElement(V.a, null, E.a.createElement(B.b, { color: 'gray700' }, ee)),
                      E.a.createElement(F.a, {
                        accessibilityLabel: J,
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
      t.default = Object(Y.c)({ page: 'settings', section: 'temporary_password' })(I(te))
    },
    PK8P: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('k49u'),
        v = n('hqKg'),
        _ = n('0KEI'),
        S = n('oEGd'),
        O = n('55TG'),
        w = Object(v.createSelector)(O.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        C = {
          verifyPassword: O.b,
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        P = Object(S.g)(w, C, null, { pure: !1 }),
        A = n('kGix'),
        T = n('v//M'),
        R = n('3XMw'),
        k = n.n(R),
        L = n('5FtR'),
        j = n('iCwC'),
        I = n('MWbm'),
        F = n('TnY3'),
        D = n('t62R'),
        x = n('6vad'),
        N = n('p+r5'),
        M = n('mw9i'),
        H = n('/yvb'),
        U = n('rHpw'),
        B = n('v6aA')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var V = k.a.fe36fe1f,
        G = k.a.dec3c9b8,
        W = k.a.hccd9dbd,
        Y = k.a.d1091f50,
        X = k.a.g9677c6d,
        z = k.a.c8cb0b4c,
        q = (function (e) {
          u()(n, e)
          var t = K(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { password: '' }),
              y()(
                s()(e),
                '_passwordlessSsoEnabled',
                e.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              y()(s()(e), '_handlePasswordSubmit', function () {
                var t,
                  n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.verifyPassword,
                  o = e.state.password
                '' !== o &&
                  a(o)
                    .then(function () {
                      e.setState({ password: '', verificationRequired: !1 }), e._makeFetch()
                    })
                    .catch(
                      r(
                        ((t = {}),
                        y()(t, g.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: z })
                          },
                        }),
                        y()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              y()(s()(e), '_makeFetch', function () {
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
                      y()(t, g.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      y()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              y()(s()(e), '_handleFetch', e._makeFetch),
              y()(s()(e), '_handleChange', function (t) {
                e.setState({ passwordError: void 0, password: t.target.value })
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    n = E.a.createElement(
                      D.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      Y,
                    )
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    e ? E.a.createElement(x.b, { text: e }) : null,
                    E.a.createElement(
                      I.a,
                      { style: [j.a.viewItem, j.a.bottomBorder] },
                      E.a.createElement(D.b, { color: 'gray700', size: 'subtext2' }, W),
                    ),
                    E.a.createElement(N.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: G,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    E.a.createElement(
                      M.a,
                      { style: Z.buttonContainer },
                      E.a.createElement(
                        H.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: Z.button, type: 'brandFilled' },
                        X,
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
                    o = t === A.a.FAILED && a
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    o
                      ? this._passwordlessSsoEnabled
                        ? E.a.createElement(L.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : E.a.createElement(T.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(q, 'contextType', B.a), y()(q, 'defaultProps', { titleHeader: V })
      var Z = U.a.create(function (e) {
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
        Q = P(q)
      t.a = Object(F.a)(Q)
    },
    Rdmj: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Oe
      })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        v = n.n(g),
        _ = n('PFE4'),
        S = n('rxPX'),
        O = Object(S.a)().propsFromActions(function () {
          return { cleanupBlockList: _.c }
        }),
        w = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('EbOo')),
        C = n('1YZw'),
        P = n('G6rE'),
        A = n('0KEI'),
        T = function (e, t) {
          return P.e.select(e, t.userId)
        },
        R = Object(S.a)()
          .propsFromState(function () {
            return { user: T }
          })
          .propsFromActions(function () {
            return {
              addToast: C.b,
              block: P.e.block,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('AUTOBLOCK_BUTTON'),
              unblock: P.e.unblock,
            }
          })
          .withAnalytics({ element: 'autoblock_button' }),
        k = n('3XMw'),
        L = n.n(k),
        j = n('u0B7'),
        I = n('mjJ+'),
        F = n('/yvb'),
        D = n('24HD'),
        x = n('Bwid'),
        N = n('pu5c')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var H = L.a.cf67f6d5,
        U = L.a.jcba15d2,
        B = L.a.fcd4d489,
        K = L.a.i2b9632d,
        V = L.a.a9fd20be,
        G = R(
          (function (e) {
            d()(n, e)
            var t = M(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                E()(u()(e), 'state', { showBlockConfirmation: !1, showRemoveAutoblockConfirmation: !1 }),
                E()(u()(e), '_renderMenu', function (t) {
                  return v.a.createElement(I.a, {
                    items: e._getActionItems(),
                    onCloseRequested: t,
                    shouldCloseOnClick: !0,
                  })
                }),
                E()(u()(e), '_removeAutoblockAction', function () {
                  return { text: U, onClick: e._showRemoveAutoblockConfirmation, Icon: x.a }
                }),
                E()(u()(e), '_blockAction', function () {
                  var t
                  return {
                    text: B({
                      screenName: (null === (t = e.props.user) || void 0 === t ? void 0 : t.screen_name) || '',
                    }),
                    onClick: e._showBlockConfirmation,
                    Icon: N.a,
                    isEmphasized: !0,
                  }
                }),
                E()(u()(e), '_showRemoveAutoblockConfirmation', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !0 })
                }),
                E()(u()(e), '_showBlockConfirmation', function () {
                  e.setState({ showBlockConfirmation: !0 })
                }),
                E()(u()(e), '_handleRemoveAutoblockCancel', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !1 })
                }),
                E()(u()(e), '_handleBlockCancel', function () {
                  e.setState({ showBlockConfirmation: !1 })
                }),
                E()(u()(e), '_handleBlock', function () {
                  e.setState({ showBlockConfirmation: !1 })
                  var t = e.props,
                    n = t.addToast,
                    r = t.block,
                    a = t.createLocalApiErrorHandler
                  r(t.userId).then(function (t) {
                    n({ text: V }), e._scribeAction('block')
                  }, a(w.a))
                }),
                E()(u()(e), '_handleRemoveAutoblock', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !1 })
                  var t = e.props,
                    n = t.addToast,
                    r = t.createLocalApiErrorHandler
                  ;(0, t.unblock)(t.userId).then(function (t) {
                    n({ text: K }), e._scribeAction('unblock')
                  }, r(j.a))
                }),
                e
              )
            }
            return (
              s()(n, [
                {
                  key: 'render',
                  value: function () {
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(
                        F.a,
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
                    return Object(D.j)({
                      confirmation: Object(D.i)(t),
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
                    return Object(D.j)({
                      confirmation: Object(D.f)(t),
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
          })(v.a.Component),
        ),
        W = n('PnFR'),
        Y = n('8UdT'),
        X = n('S/Qv'),
        z = n('5Y9N'),
        q = function (e, t) {
          return P.e.select(e, t.userId)
        },
        Z = Object(S.a)()
          .propsFromState(function () {
            return { user: q }
          })
          .propsFromActions(function () {
            return {
              addToast: C.b,
              block: P.e.block,
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('UNBLOCK_BUTTON'),
              unblock: P.e.unblock,
            }
          })
          .withAnalytics(),
        Q = n('Rp9C')
      function J(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var $,
        ee = L.a.if594962,
        te = L.a.a6450e83,
        ne = L.a.i2b9632d,
        re = L.a.a9fd20be,
        ae = Z(
          (function (e) {
            d()(n, e)
            var t = J(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                E()(u()(e), '_handleUnblockToggle', function () {
                  var t = e.props,
                    n = t.addToast,
                    r = t.block,
                    a = t.createLocalApiErrorHandler,
                    o = t.unblock,
                    c = t.user,
                    i = t.userId
                  null != c && c.blocking
                    ? o(i).then(function (t) {
                        n({ text: ne }), e._scribeAction('unblock')
                      }, a(j.a))
                    : r(i).then(function (t) {
                        n({ text: re }), e._scribeAction('block')
                      }, a(w.a))
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
                    if (e) {
                      var t = e.blocking ? ee : te
                      return v.a.createElement(
                        F.a,
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
                      r = t.user,
                      a = r ? [Q.a.getUserItem(r)] : []
                    n.scribe({ action: e, data: { items: a } })
                  },
                },
              ]),
              n
            )
          })(v.a.Component),
        ),
        oe = n('Ka9G')
      function ce(e, t) {
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
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var se = ie(
          ie({}, Object(z.a)({})),
          {},
          (($ = {}),
          E()($, Y.b.Message, Object(X.a)({})),
          E()(
            $,
            Y.b.User,
            Object(oe.a)({
              decoration: function (e) {
                var t = e.isAutoblocking,
                  n = e.userId
                return t ? v.a.createElement(G, { userId: n }) : v.a.createElement(ae, { userId: n })
              },
            }),
          ),
          E()($, Y.b.TimelineCursor, Object(W.a)({})),
          $),
        ),
        le = n('oQhu'),
        ue = n('yoO3'),
        fe = n('fTQJ'),
        de = n('7JQg'),
        pe = n('eM8g'),
        he = n('t62R'),
        me = n('FIs5'),
        ye = n('0yYu')
      function be(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ee = L.a.a5f32aa2,
        ge = L.a.ef731b13,
        ve = L.a.i859a9d3,
        _e = v.a.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'ab3bf5a7' },
          v.a.createElement(he.b, { link: 'https://support.twitter.com/articles/117063' }, L.a.e554ba82),
        ),
        Se = (function (e) {
          d()(n, e)
          var t = be(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              E()(u()(e), '_getLegacyModule', function () {
                var t = e.props.blockType
                return e._getMemoizedModule(t)
              }),
              E()(
                u()(e),
                '_getMemoizedModule',
                Object(le.a)(function (e) {
                  return Object(_.b)(e)
                }),
              ),
              E()(u()(e), '_getEmptyStateRenderer', function () {
                var t = e.props,
                  n = t.blockType,
                  r = t.emptyStateMessage,
                  a = t.emptyStateTitle,
                  o = t.supportUrl
                return e._getMemoizedEmptyStateRenderer(n, o, a, r)
              }),
              E()(
                u()(e),
                '_getMemoizedEmptyStateRenderer',
                Object(le.a)(function (e, t, n, r) {
                  return function () {
                    var e = v.a.createElement('div', null, r, ' ', t && v.a.createElement(he.b, { link: t }, ve))
                    return v.a.createElement(me.a, { header: n, message: e })
                  }
                }),
              ),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(0, this.props.cleanupBlockList)(this._getLegacyModule())
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.a.createElement(
                    ue.a,
                    null,
                    'autoblock' === this.props.blockType
                      ? null
                      : v.a.createElement(
                          'div',
                          null,
                          v.a.createElement(pe.a, null, _e),
                          v.a.createElement(ye.a, null),
                        ),
                    v.a.createElement(fe.a, {
                      entryConfiguration: se,
                      loadingAccessibilityLabel: ge,
                      module: this._getLegacyModule(),
                      renderEmptyState: this._getEmptyStateRenderer(),
                      title: Ee,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        Oe = function (e) {
          var t = e.blockType,
            n = e.emptyStateMessage,
            r = e.emptyStateTitle,
            o = e.scribeNamespace,
            c = e.supportUrl
          return O(function (e) {
            return v.a.createElement(
              de.b,
              { namespace: o },
              v.a.createElement(
                Se,
                a()({}, e, { blockType: t, emptyStateMessage: n, emptyStateTitle: r, supportUrl: c }),
              ),
            )
          })
        }
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('5UID'),
        s = n('3GUV'),
        l = n('iBK2'),
        u = c.a.createElement(s.a, null),
        f = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = c.a.createElement(l.b, n)
          return t ? c.a.createElement(i.a, { title: t }, r) : r
        }
      ;(f.defaultProps = { footer: u }), (t.a = f)
    },
    TetP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTrendsScreen', function () {
          return se
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        E = n.n(b),
        g = n('k49u'),
        v = n('P1r1'),
        _ = n('EyIn'),
        S = n('+OgG'),
        O = n('rxPX'),
        w = n('0KEI'),
        C = Object(O.a)()
          .propsFromState(function () {
            return { allSettings: v.g, placeTrendSettings: _.d, placeTrendSettingsFetchStatus: _.e }
          })
          .adjustStateProps(function (e) {
            var t = e.allSettings,
              n = e.placeTrendSettings,
              r = e.placeTrendSettingsFetchStatus
            return {
              trendLocation: t.trend_location,
              personalizedTrends: t.personalized_trends,
              placeTrendSettings: n,
              placeTrendSettingsFetchStatus: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRENDS_SCREEN',
              ),
              fetchPlaceTrendSettingsIfNeeded: _.a,
              updateWoeTrendSettings: S.a,
              updatePlaceTrendSettings: _.j,
            }
          })
          .withAnalytics({ page: 'guide', section: 'settings' }),
        P = n('v//M'),
        A = n('LVU8'),
        T = n('jHSc'),
        R = n('3XMw'),
        k = n.n(R),
        L = n('OySi'),
        j = 'currentLocation',
        I = 'exploreLocations',
        F = n('MWbm'),
        D = n('v6aA'),
        x = n('cCdp'),
        N = n('0yYu'),
        M = n('csss'),
        H = n('6vad')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var B = k.a.bc7fd99f,
        K = k.a.c5f4befa,
        V = k.a.j018f2a1,
        G = k.a.e2f1665f,
        W = k.a.e5e88f4f,
        Y = k.a.jaaa8984,
        X = k.a.i4d54b0e,
        z = k.a.df9f03c8,
        q = k.a.c6cf5c7d,
        Z = k.a.a55db872,
        Q = k.a.h0b5152e,
        J = k.a.dfeada5d,
        $ = 'Worldwide',
        ee = k.a.ac854308,
        te = k.a.d429c942,
        ne = 'is_unified_trends',
        re = 'use_current_location',
        ae = 'use_personalized_trends',
        oe = '/settings/trends/location',
        ce = '/settings/explore/location',
        ie = '/settings/explore',
        se = (function (e) {
          u()(n, e)
          var t = U(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
                s()(e),
                '_usePlaceTrendSettings',
                e.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints'),
              ),
              y()(
                s()(e),
                '_policySectionUrl',
                e.context.featureSwitches.getStringValue('explore_settings_trends_policy_url'),
              ),
              y()(s()(e), '_handleRetry', function () {
                e._fetchPlaceTrendSettingsIfNeeded()
              }),
              y()(s()(e), '_fetchPlaceTrendSettingsIfNeeded', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchPlaceTrendSettingsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              y()(s()(e), '_handleItemChanged', function (t, n) {
                var r,
                  a = e.props,
                  o = a.analytics,
                  c = a.createLocalApiErrorHandler,
                  i = a.updatePlaceTrendSettings,
                  s = a.updateWoeTrendSettings,
                  l = y()({}, t, n),
                  u = ((r = {}), y()(r, g.a.AppInReadOnlyMode, { customAction: A.b }), y()(r, 'showToast', !0), r)
                e._usePlaceTrendSettings ? i(l).catch(c(u)) : s(l).catch(c(u)),
                  o.scribe({ element: 'personalized_trends', action: 'toggle' })
              }),
              y()(s()(e), '_renderWoeContent', function () {
                var t = e.props,
                  n = t.personalizedTrends,
                  r = t.trendLocation,
                  a = (r && r[0] && r[0].name) || $
                return E.a.createElement(
                  F.a,
                  null,
                  E.a.createElement(x.a, {
                    checked: n,
                    helpText: z,
                    label: X,
                    name: 'personalized_trends',
                    onChange: e._handleItemChanged,
                  }),
                  !n &&
                    E.a.createElement(
                      F.a,
                      null,
                      E.a.createElement(N.a, null),
                      E.a.createElement(M.a, { description: a, label: Q, link: oe }),
                    ),
                )
              }),
              y()(s()(e), '_renderPlaceLoader', function () {
                var t = e.props.placeTrendSettingsFetchStatus
                return E.a.createElement(P.a, {
                  accessibilityLabel: B,
                  fetchStatus: t,
                  onRequestRetry: e._handleRetry,
                  render: e._renderPlaceContent,
                })
              }),
              y()(s()(e), '_renderPlaceContent', function () {
                var t = e.props,
                  n = t.location,
                  r = t.placeTrendSettings,
                  a = n.pathname === ie,
                  o = r.places && r.places[0] && r.places[0].name,
                  c = !a || !r[ne],
                  i = a ? ce : oe
                return E.a.createElement(
                  F.a,
                  null,
                  E.a.createElement(H.b, { text: Y }),
                  E.a.createElement(x.a, {
                    checked: r[re],
                    helpText: W,
                    label: G,
                    name: re,
                    onChange: e._handleItemChanged,
                    testID: j,
                  }),
                  !r[re] &&
                    E.a.createElement(
                      F.a,
                      null,
                      E.a.createElement(M.a, { description: o, label: J, link: i, testID: I }),
                    ),
                  c &&
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(N.a, null),
                      E.a.createElement(H.b, { text: Z }),
                      E.a.createElement(x.a, {
                        checked: r[ae],
                        helpText: q,
                        label: X,
                        name: ae,
                        onChange: e._handleItemChanged,
                      }),
                    ),
                )
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    n = e.location.pathname === ie,
                    r = this._usePlaceTrendSettings && n ? V : K
                  return E.a.createElement(
                    T.b,
                    { history: t, title: r },
                    this._usePlaceTrendSettings ? this._renderPlaceLoader() : this._renderWoeContent(),
                    this._policySectionUrl ? this._renderPolicySection() : null,
                  )
                },
              },
              {
                key: '_renderPolicySection',
                value: function () {
                  return E.a.createElement(
                    F.a,
                    null,
                    E.a.createElement(N.a, null),
                    E.a.createElement(H.b, { text: ee }),
                    E.a.createElement(L.a, { label: te, link: this._policySectionUrl }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(se, 'contextType', D.a)
      t.default = C(se)
    },
    UbIW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsContactsScreen', function () {
          return Q
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('P1r1'),
        v = n('hqKg'),
        _ = n('0KEI'),
        S = n('oEGd'),
        O = Object(v.createSelector)(g.g, function (e) {
          return {
            discoverableByEmail: e.discoverable_by_email,
            discoverableByMobilePhone: e.discoverable_by_mobile_phone,
          }
        }),
        w = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_CONTACTS_SCREEN',
          ),
          deleteContacts: g.b,
          updateSettings: g.L,
        },
        C = Object(S.g)(O, w),
        P = n('3XMw'),
        A = n.n(P),
        T = n('yoO3'),
        R = n('7JQg'),
        k = n('7FtF'),
        L = n('xHsv'),
        j = n('6vad'),
        I = n('cCdp'),
        F = n('0yYu'),
        D = n('csss')
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
      var N = A.a.fd4d9068,
        M = A.a.ab987f3b,
        H = A.a.b033248c,
        U = A.a.a904e0ee,
        B = A.a.ebc41952,
        K = A.a.f40a6338,
        V = A.a.ac9314aa,
        G = A.a.d86a220e,
        W = 'https://help.twitter.com/safety-and-security/email-and-phone-discoverability-settings',
        Y = A.a.ac77c66c,
        X = A.a.bbcafbd9,
        z = A.a.jadf483e,
        q = A.a.i859a9d3,
        Z = { page: 'settings', section: 'contacts' },
        Q = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleItemChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler
                ;(0, r.updateSettings)(y()({}, t, n)).catch(a({ showToast: !0 }))
              }),
              y()(s()(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.deleteContacts)().catch(n({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.discoverableByEmail,
                    n = e.discoverableByMobilePhone,
                    r = e.location
                  return E.a.createElement(
                    R.b,
                    { namespace: Z },
                    E.a.createElement(
                      T.a,
                      null,
                      E.a.createElement(
                        k.a,
                        { location: r, title: N },
                        E.a.createElement(L.a, { description: M }),
                        E.a.createElement(j.b, { text: H }),
                        E.a.createElement(L.a, { description: U }),
                        E.a.createElement(I.a, {
                          checked: t,
                          helpText: K,
                          label: B,
                          learnMoreLink: W,
                          name: 'discoverable_by_email',
                          onChange: this._handleItemChanged,
                        }),
                        E.a.createElement(I.a, {
                          checked: n,
                          helpText: G,
                          label: V,
                          learnMoreLink: W,
                          name: 'discoverable_by_mobile_phone',
                          onChange: this._handleItemChanged,
                        }),
                        E.a.createElement(F.a, null),
                        E.a.createElement(j.b, { text: Y }),
                        E.a.createElement(L.a, {
                          description: z,
                          learnMoreLabel: q,
                          learnMoreLink:
                            'https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends',
                        }),
                        E.a.createElement(D.a, { label: X, link: '/settings/contacts_dashboard' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = C(Q)
    },
    VaVF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BackupCodeScreen', function () {
          return te
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('WNMA'), n('KqXw'), n('7xRU'), n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('yH/f'), n('oEOe')),
        v = n('kGix'),
        _ = n('Ssj5')
      function S(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = 'backupCode',
        C = Object.freeze({
          REQUEST: 'rweb/backupCode/FETCH_BACKUP_CODE_REQUEST',
          SUCCESS: 'rweb/backupCode/FETCH_BACKUP_CODE_SUCCESS',
          FAILURE: 'rweb/backupCode/FETCH_BACKUP_CODE_FAILURE',
        }),
        P = { fetchStatus: v.a.NONE }
      _.a.register(
        y()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case C.REQUEST:
              return O(O({}, e), {}, { fetchStatus: v.a.LOADING })
            case C.SUCCESS:
              var n = t.payload && t.payload.codes
              return O(O({}, e), {}, { backupCode: n && n[0], fetchStatus: v.a.LOADED })
            case C.FAILURE:
              return O(O({}, e), {}, { fetchStatus: v.a.FAILED })
            default:
              return e
          }
        }),
      )
      var A = n('1YZw'),
        T = n('hqKg'),
        R = n('0KEI'),
        k = n('oEGd'),
        L = Object(T.createSelector)(
          function (e) {
            return e.backupCode.backupCode
          },
          function (e) {
            return e.backupCode.fetchStatus
          },
          function (e, t) {
            return { backupCode: e, fetchStatus: t }
          },
        ),
        j = {
          addToast: A.b,
          createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_BACKUP_CODE_SCREEN',
          ),
          fetchBackupCode: function () {
            return function (e, t, n) {
              var r = n.api
              return Object(g.b)(e, { request: r.Settings.fetchBackupCode })({
                actionTypes: C,
                context: 'FETCH_BACKUP_CODE',
              })
            }
          },
          fetchNewBackupCode: function () {
            return function (e, t, n) {
              var r = n.api
              return Object(g.b)(e, { request: r.Settings.fetchNewBackupCode })({
                actionTypes: C,
                context: 'FETCH_BACKUP_CODE',
              })
            }
          },
        },
        I = Object(k.g)(L, j),
        F = n('v//M'),
        D = n('yoO3'),
        x = n('7FtF'),
        N = n('XUJi'),
        M = n('t62R'),
        H = n('/yvb'),
        U = n('atVN'),
        B = n('CaKu'),
        K = n('MWbm'),
        V = n('7JQg'),
        G = n('3XMw'),
        W = n.n(G)
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
      var X = W.a.i3bb3f78,
        z = W.a.ec6a76ef,
        q = W.a.f2c3c31c,
        Z = W.a.f88553c8,
        Q = W.a.e8016b64,
        J = W.a.c4ca22bc,
        $ = function (e) {
          return (e.match(/.{1,4}/g) || [e]).join(' ')
        },
        ee = E.a.createElement(M.b, {
          link: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
        }),
        te = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_renderContent', function () {
                var t = e.props.backupCode
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    K.a,
                    { style: N.a.centeredContainer },
                    E.a.createElement(M.b, { align: 'center', size: 'title2', weight: 'bold' }, t ? $(t) : null),
                  ),
                  B.a.isAvailable()
                    ? E.a.createElement(
                        K.a,
                        { style: N.a.centeredContainer },
                        E.a.createElement(
                          H.a,
                          { alignContent: 'center', onPress: e._handleCopy, type: 'brandFilled' },
                          q,
                        ),
                      )
                    : null,
                  E.a.createElement(
                    K.a,
                    { style: N.a.centeredContainer },
                    E.a.createElement(
                      H.a,
                      { alignContent: 'center', onPress: e._handleGenerate, type: 'brandText' },
                      z,
                    ),
                  ),
                )
              }),
              y()(s()(e), '_handleCopy', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.backupCode
                r && (B.a.setString(r), n({ text: Z }))
              }),
              y()(s()(e), '_handleGenerate', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchNewBackupCode)().catch(n())
              }),
              y()(s()(e), '_handleRetry', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBackupCode)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    D.a,
                    null,
                    E.a.createElement(
                      x.a,
                      { location: n, title: X },
                      E.a.createElement(U.a, null, E.a.createElement(M.b, { color: 'gray700' }, J)),
                      E.a.createElement(
                        U.a,
                        null,
                        E.a.createElement(
                          M.b,
                          { color: 'gray700' },
                          E.a.createElement(
                            W.a.I18NFormatMessage,
                            { $i18n: 'a4455c04' },
                            E.a.cloneElement(ee, null, W.a.ecb6fccf),
                          ),
                        ),
                      ),
                      E.a.createElement(F.a, {
                        accessibilityLabel: Q,
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
      t.default = Object(V.c)({ page: 'settings', section: 'backup_code' })(I(te))
    },
    W0Ti: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContentPreferencesPage', function () {
          return W
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('NeAX'),
        v = n('rxPX'),
        _ = Object(v.a)()
          .propsFromState(function () {
            return { personalizationSettings: g.selectUserPreferences }
          })
          .withAnalytics({ page: 'settings', section: 'timeline' }),
        S = n('uD2z'),
        O = n('3XMw'),
        w = n.n(O),
        C = n('yoO3'),
        P = n('7FtF'),
        A = 'exploreHeader',
        T = n('v6aA'),
        R = n('6vad'),
        k = n('csss'),
        L = n('0yYu'),
        j = n('xHsv')
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
      var F = w.a.aeddb289,
        D = w.a.fcf3e54b,
        x = w.a.hfb77cf5,
        N = w.a.d495680d,
        M = w.a.f350f0c0,
        H = w.a.cb9bb63f,
        U = w.a.h1ef00db,
        B = w.a.e8f57e07,
        K = w.a.e8f57e07,
        V = w.a.hfc86556,
        G = w.a.a5f32aa2,
        W = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
                s()(e),
                '_contentLanguageSettingsEnabled',
                e.context.featureSwitches.isTrue('content_language_setting_enabled'),
              ),
              y()(
                s()(e),
                '_trendsLabel',
                e.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                  ? w.a.j018f2a1
                  : w.a.c5f4befa,
              ),
              e
            )
          }
          return (
            c()(n, [
              {
                key: '_renderPersonalizationDescription',
                value: function () {
                  var e = this.props.personalizationSettings
                  return Object(S.a)(e)
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
                    C.a,
                    null,
                    E.a.createElement(
                      P.a,
                      { location: e, screenType: 'primaryDetail', title: F },
                      E.a.createElement(R.b, { testID: A, text: D }),
                      E.a.createElement(k.a, { label: U, link: '/settings/search' }),
                      E.a.createElement(k.a, { label: this._trendsLabel, link: t }),
                      this._contentLanguageSettingsEnabled
                        ? E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(L.a, null),
                            E.a.createElement(R.b, { text: N }),
                            E.a.createElement(k.a, { label: M, link: '/i/flow/language_selector' }),
                            E.a.createElement(j.a, { description: H }),
                          )
                        : null,
                      E.a.createElement(L.a, null),
                      E.a.createElement(R.b, { text: x }),
                      E.a.createElement(k.a, { label: V, link: '/settings/mute' }),
                      E.a.createElement(k.a, { label: G, link: '/settings/blocked/all' }),
                      E.a.createElement(L.a, null),
                      E.a.createElement(R.b, { text: B }),
                      E.a.createElement(k.a, {
                        description: this._renderPersonalizationDescription(),
                        label: K,
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
      y()(W, 'contextType', T.a)
      t.default = _(W)
    },
    X1GS: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n.n(r),
        o = n('yoO3'),
        c = n('7JQg'),
        i = n('7FtF'),
        s = n('iCwC'),
        l = n('MWbm'),
        u = n('6vad'),
        f = n('t62R'),
        d = n('3XMw'),
        p = n.n(d),
        h = p.a.g0ec0beb,
        m = p.a.g89f4613,
        y = { page: 'settings', section: 'deactivate_success' }
      t.default = function (e) {
        var t = e.location
        return a.a.createElement(
          c.b,
          { namespace: y },
          a.a.createElement(
            o.a,
            null,
            a.a.createElement(
              i.a,
              { location: t, screenType: 'primaryDetail', title: h },
              a.a.createElement(u.b, { text: m }),
              a.a.createElement(
                l.a,
                { style: s.a.viewItem },
                a.a.createElement(
                  f.b,
                  { color: 'gray700', size: 'subtext2' },
                  a.a.createElement(p.a.I18NFormatMessage, { $i18n: 'if2bb997' }),
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
        return _
      }),
        n.d(t, 'j', function () {
          return S
        }),
        n.d(t, 'h', function () {
          return O
        }),
        n.d(t, 'i', function () {
          return w
        }),
        n.d(t, 'f', function () {
          return C
        }),
        n.d(t, 'd', function () {
          return P
        }),
        n.d(t, 'e', function () {
          return k
        }),
        n.d(t, 'c', function () {
          return D
        }),
        n.d(t, 'k', function () {
          return x
        }),
        n.d(t, 'a', function () {
          return N
        }),
        n.d(t, 'b', function () {
          return M
        }),
        n.d(t, 'l', function () {
          return H
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('hBpG'), n('JtPf'), n('7x/C'), n('7xRU'), n('oEOe')),
        c = n('kGix'),
        i = n('Ssj5')
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
      function l(e) {
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
      var u = 'mutedKeywords',
        f = 'rweb.mutedKeywords',
        d = 6048e5,
        p = 'rweb/'.concat(u),
        h = o.a(p, 'FETCH_DISCOURAGED_KEYWORDS'),
        m = o.a(p, 'FETCH_MUTED_KEYWORDS'),
        y = o.a(p, 'ADD_MUTED_KEYWORD'),
        b = o.a(p, 'DELETE_MUTED_KEYWORD'),
        E = o.a(p, 'UPDATE_MUTED_KEYWORD'),
        g = {
          defaultOptions: {
            id: '',
            keyword: '',
            mute_notifications_option: 'following',
            mute_home_timeline: !0,
            time_duration: 'forever',
          },
          defaultOptionsLoaded: !1,
          discouragedKeywords: [],
          fetchStatus: c.a.NONE,
          mutedKeywords: [],
        }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case T:
          case h.SUCCESS:
            return l(l({}, e), {}, { discouragedKeywords: t.payload.discouraged_keywords })
          case m.REQUEST:
            return l(l({}, e), {}, { fetchStatus: c.a.LOADING })
          case m.FAILURE:
            return l(l({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
          case m.SUCCESS:
            return l(l({}, e), {}, { mutedKeywords: t.payload.muted_keywords, error: null, fetchStatus: c.a.LOADED })
          case y.SUCCESS:
          case b.SUCCESS:
          case E.SUCCESS:
            return l(l({}, e), {}, { mutedKeywords: t.payload.muted_keywords })
          case j:
            return l(l({}, e), {}, { defaultOptions: t.payload.default_options })
          case I:
            return l(l({}, e), {}, { defaultOptionsLoaded: !0 })
          default:
            return e
        }
      }
      var _ = function (e) {
          return e.mutedKeywords.discouragedKeywords
        },
        S = function (e) {
          return e.mutedKeywords.mutedKeywords
        },
        O = function (e) {
          return e.mutedKeywords.fetchStatus
        },
        w = function (e, t) {
          return e.mutedKeywords.mutedKeywords.find(function (e) {
            return e.id === t
          })
        },
        C = function (e, t) {
          return e.mutedKeywords.defaultOptions
        },
        P = function () {
          return function (e, t, n) {
            var r = n.userPersistence
            return _(t()).length
              ? Promise.resolve()
              : r.get(f, d).then(function (n) {
                  var a = (n || {}).discouragedKeywords
                  return a && a.length
                    ? (e(R(a)), Promise.resolve())
                    : e(A()).then(function () {
                        return r.set(f, { discouragedKeywords: _(t()) })
                      })
                })
          }
        },
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return function (t, n, r) {
            var a = r.api
            return o.b(t, { params: e, request: a.MuteKeywordSettings.fetchDiscouragedKeywords })({
              actionTypes: h,
              context: 'FETCH_DISCOURAGED_KEYWORDS',
            })
          }
        },
        T = ''.concat(p, '/INIT_DISCOURAGED_KEYWORDS'),
        R = function (e) {
          return { type: T, payload: { discouraged_keywords: e } }
        },
        k = function () {
          return function (e, t) {
            return O(t()) === c.a.LOADED ? Promise.resolve() : e(L())
          }
        },
        L = function (e) {
          return function (t, n, r) {
            var a = r.api
            return o.b(t, { params: e, request: a.MuteKeywordSettings.fetchMutedKeywords })({
              actionTypes: m,
              context: 'FETCH_MUTED_KEYWORDS',
            })
          }
        },
        j = ''.concat(p, '/SET_DEFAULT_OPTIONS'),
        I = ''.concat(p, '/DEFAULT_OPTIONS_LOADED'),
        F = function (e) {
          return { type: j, payload: { default_options: e } }
        },
        D = function () {
          return function (e, t, n) {
            var r = n.userPersistence
            return t().mutedKeywords.defaultOptionsLoaded
              ? Promise.resolve()
              : r.get(f, d).then(function (t) {
                  if (t && t.defaultOptions) {
                    var n = t.defaultOptions
                    e(F(n))
                  }
                  e({ type: I })
                })
          }
        },
        x = function (e) {
          return function (t, n, r) {
            var a = r.userPersistence
            return t(F(e)), a.set(f, { defaultOptions: e })
          }
        },
        N = function (e) {
          return function (t, n, r) {
            var a = r.api
            return o.b(t, { params: e, request: a.MuteKeywordSettings.addMutedKeyword })({
              actionTypes: y,
              context: 'ACTION_ADD_MUTED_KEYWORD',
              meta: { params: e },
            })
          }
        },
        M = function (e) {
          return function (t, n, r) {
            var a = r.api,
              c = { ids: e.join(',') }
            return o.b(t, { params: c, request: a.MuteKeywordSettings.deleteMutedKeyword })({
              actionTypes: b,
              context: 'ACTION_DELETE_MUTED_KEYWORD',
              meta: { ids: e },
            })
          }
        },
        H = function (e) {
          return function (t, n, r) {
            var a = r.api
            return o.b(t, { params: e, request: a.MuteKeywordSettings.updateMutedKeyword })({
              actionTypes: E,
              context: 'ACTION_UPDATE_MUTED_KEYWORD',
              meta: { params: e },
            })
          }
        }
      i.a.register(a()({}, u, v))
    },
    XFGu: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('PFE4'),
        a = n('Rdmj'),
        o = n('3XMw'),
        c = n.n(o),
        i = c.a.b90c89c3,
        s = c.a.f587e41e
      t.default = Object(a.a)({
        scribeNamespace: { page: 'blocked', section: 'all_blocked_accounts' },
        blockType: r.a.All,
        emptyStateTitle: s,
        emptyStateMessage: i,
        supportUrl: 'https://support.twitter.com/articles/117063',
      })
    },
    XUJi: function (e, t, n) {
      'use strict'
      var r = n('rHpw').a.create(function (e) {
        return { centeredContainer: { padding: e.spaces.space12, flexDirection: 'row', justifyContent: 'center' } }
      })
      t.a = r
    },
    Y5Sz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'bouncerEnrollmentUrl', function () {
          return D
        }),
        n.d(t, 'EnrollmentScreen', function () {
          return N
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b =
          (n('Cm4o'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('2G9S'),
          n('LJOr'),
          n('KqXw'),
          n('MvUL'),
          n('ERkP')),
        E = n.n(b),
        g = n('wvRX'),
        v = n('hqKg'),
        _ = n('QK5w'),
        S = n('0KEI'),
        O = n('oEGd'),
        w = Object(v.createSelector)(
          _.a,
          function (e, t) {
            return t.location && t.location.state && t.location.state.bounce_location
          },
          g.f,
          function (e, t, n) {
            return { canGoBack: e, bounceLocation: t, fetchStatus: n }
          },
        ),
        C = {
          createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_LOGIN_VERIFICATION_ENROLLMENT_CONTEXT',
          ),
          fetchLoginVerificationSettings: g.e,
        },
        P = Object(O.g)(w, C),
        A = n('kGix'),
        T = n('jHSc'),
        R = n('bPFD'),
        k = n('rHpw'),
        L = n('2qJZ')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var I = '/settings/account/login_verification',
        F = 'initiated_in_iframe=true',
        D = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location,
            n = t.host === L.a ? L.a : L.b,
            r = 'https://'.concat(n),
            a = new window.URL(''.concat(r).concat(e)),
            o = a.search ? '&' : '?'
          return (a.search = ''.concat(a.search).concat(o).concat(F)), a.href
        },
        x = function (e, t, n) {
          return e !== A.a.LOADED || !t || !n
        },
        N = (function (e) {
          u()(n, e)
          var t = j(n)
          function n(e) {
            var r
            a()(this, n),
              (r = t.call(this, e)),
              y()(s()(r), '_handleClose', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchLoginVerificationSettings,
                  a = e.history
                n().catch(t())
                var o = window.history.length
                a.go(Math.min(-1, r._initialHistoryLength - o - 1))
              }),
              y()(s()(r), '_messageHandler', function (e) {
                var t = e.data,
                  n = e.origin
                if ((n === 'https://'.concat(L.b) || n === 'https://'.concat(L.a)) && t.bouncer)
                  switch (t.event) {
                    case '2fa_complete':
                      var a = r.props,
                        o = a.createLocalApiErrorHandler,
                        c = a.fetchLoginVerificationSettings,
                        i = a.history
                      c().catch(o()), i.replace('/settings/account/login_verification/backup_code')
                      break
                    case 'complete':
                    case 'cancel':
                      r._handleClose()
                  }
              })
            var o = r.props,
              c = o.bounceLocation,
              i = o.canGoBack,
              l = o.fetchStatus,
              u = o.history
            return x(l, i, c) && u.replace(I), r
          }
          return (
            c()(n, [
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
                    r = e.fetchStatus,
                    a = e.history
                  return x(r, n, t)
                    ? null
                    : E.a.createElement(
                        T.b,
                        { backButtonType: 'close', backLocation: I, history: a, onBackClick: this._handleClose },
                        E.a.createElement(R.a, { allowForms: !0, src: D(t), style: [k.a.absoluteFill, M.iframe] }),
                      )
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        M = k.a.create(function (e) {
          return { iframe: { backgroundColor: e.colors.cellBackground, paddingLeft: e.spaces.space16 } }
        })
      t.default = P(N)
    },
    YWNO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationAdvancedFiltersPage', function () {
          return ie
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g =
          (n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('JtPf'),
          n('7x/C'),
          n('oEOe')),
        v = n('kGix'),
        _ = n('Ssj5')
      function S(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = 'notificationFilters',
        C = 'rweb/'.concat(w),
        P = 'rweb.'.concat(w),
        A = g.a(C, 'FETCH_NOTIFICATION_FILTERS'),
        T = g.a(C, 'ENABLE_NOTIFICATION_FILTER'),
        R = g.a(C, 'DISABLE_NOTIFICATION_FILTER'),
        k = { fetchStatus: v.a.NONE, notificationFilters: {} }
      _.a.register(
        y()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case A.REQUEST:
              return O(O({}, e), {}, { fetchStatus: v.a.LOADING })
            case A.FAILURE:
              return O(O({}, e), {}, { fetchStatus: v.a.FAILED })
            case A.SUCCESS:
              return O(O({}, e), {}, { notificationFilters: t.payload, fetchStatus: v.a.LOADED })
            case T.REQUEST:
              return O(
                O({}, e),
                {},
                { notificationFilters: O(O({}, e.notificationFilters), {}, y()({}, t.meta.filterName, !0)) },
              )
            case R.REQUEST:
              return O(
                O({}, e),
                {},
                { notificationFilters: O(O({}, e.notificationFilters), {}, y()({}, t.meta.filterName, !1)) },
              )
            default:
              return e
          }
        }),
      )
      var L = function (e) {
          return e[w].notificationFilters
        },
        j = function (e) {
          return e[w].fetchStatus
        },
        I = function () {
          return function (e, t, n) {
            n.api
            var r = n.userPersistence
            return j(t()) === v.a.LOADED
              ? Promise.resolve()
              : r.get(P, 24e4).then(function (t) {
                  return e(t ? { payload: t, type: A.SUCCESS } : F())
                })
          }
        },
        F = function () {
          return function (e, t, n) {
            var r = n.api,
              a = n.userPersistence
            return g
              .b(e, { request: r.Settings.fetchNotificationFilters })({
                actionTypes: A,
                context: 'FETCH_NOTIFICATION_FILTERS',
              })
              .then(function (e) {
                return a.set(P, L(t())), e
              })
          }
        },
        D = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.userPersistence
            return g
              .c(t, { params: y()({}, e, !0), request: a.Settings.updateNotificationFilters })({
                actionTypes: T,
                context: 'ACTION_ENABLE_NOTIFICATION_FILTER',
                meta: { filterName: e },
              })
              .then(function (e) {
                return o.set(P, L(n())), e
              })
          }
        },
        x = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.userPersistence
            return g
              .c(t, { params: y()({}, e, !1), request: a.Settings.updateNotificationFilters })({
                actionTypes: R,
                context: 'ACTION_DISABLE_NOTIFICATION_FILTER',
                meta: { filterName: e },
              })
              .then(function (e) {
                return o.set(P, L(n())), e
              })
          }
        },
        N = n('rxPX'),
        M = n('0KEI'),
        H = Object(N.a)()
          .propsFromState(function () {
            return { fetchStatus: j, notificationFilters: L }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'ADVANCED_FILTERS_SCREEN',
              ),
              disableNotificationFilter: x,
              enableNotificationFilter: D,
              fetchNotificationFiltersIfNeeded: I,
            }
          })
          .withAnalytics({ page: 'settings', section: 'advanced_filters' }),
        U = n('v//M'),
        B = n('yoO3'),
        K = n('7FtF'),
        V = n('iCwC'),
        G = n('MWbm'),
        W = n('6vad'),
        Y = n('cCdp'),
        X = n('t62R'),
        z = n('3XMw'),
        q = n.n(z)
      function Z(e) {
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
      var Q = q.a.aaafffd9,
        J = q.a.j29ab12f,
        $ = q.a.jdfc82f6,
        ee = q.a.cfcda0e5,
        te = q.a.c75b9b29,
        ne = q.a.f39b9c9d,
        re = q.a.d227f94f,
        ae = q.a.b210936d,
        oe = 'https://support.twitter.com/articles/20169398',
        ce = {
          filter_not_following: 'people_you_follow_only',
          filter_not_followed_by: 'filter_not_following_me',
          filter_new_users: 'new_users',
          filter_default_profile_image: 'default_profile_image',
          filter_no_confirmed_email: 'no_confirmed_email',
          filter_no_confirmed_phone: 'no_confirmed_phone',
        },
        ie = (function (e) {
          u()(n, e)
          var t = Z(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchNotificationFiltersIfNeeded)().catch(n())
              }),
              y()(s()(e), '_handleItemChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler,
                  o = r.disableNotificationFilter,
                  c = r.enableNotificationFilter
                n
                  ? c(t).then(function () {
                      return e._scribeNotificationFilterChanged(t, 'select')
                    }, a())
                  : o(t).then(function () {
                      return e._scribeNotificationFilterChanged(t, 'deselect')
                    }, a())
              }),
              y()(s()(e), '_scribeNotificationFilterChanged', function (t, n) {
                e.props.analytics.scribe({ component: 'advanced_filters', element: ce[t], action: n })
              }),
              y()(s()(e), '_renderNotificationFilters', function () {
                var t = e.props.notificationFilters
                return E.a.createElement(
                  G.a,
                  null,
                  E.a.createElement(W.b, { text: J }),
                  E.a.createElement(Y.a, {
                    checked: t.filter_not_following,
                    label: $,
                    name: 'filter_not_following',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(Y.a, {
                    checked: t.filter_not_followed_by,
                    label: ee,
                    name: 'filter_not_followed_by',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(Y.a, {
                    checked: t.filter_new_users,
                    label: te,
                    name: 'filter_new_users',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(Y.a, {
                    checked: t.filter_default_profile_image,
                    label: ne,
                    name: 'filter_default_profile_image',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(Y.a, {
                    checked: t.filter_no_confirmed_email,
                    label: re,
                    name: 'filter_no_confirmed_email',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(Y.a, {
                    checked: t.filter_no_confirmed_phone,
                    label: ae,
                    name: 'filter_no_confirmed_phone',
                    onChange: e._handleItemChanged,
                  }),
                  E.a.createElement(
                    X.b,
                    { color: 'gray700', size: 'subtext2', style: V.a.infoText },
                    E.a.createElement(
                      q.a.I18NFormatMessage,
                      { $i18n: 'eb96a831' },
                      E.a.createElement(X.b, { link: oe }, q.a.ed0df109),
                    ),
                  ),
                )
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    B.a,
                    null,
                    E.a.createElement(
                      K.a,
                      { location: n, title: Q },
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
      t.default = H(ie)
    },
    'Yq/0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationSettingsPage', function () {
          return G
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('kPZX'),
        v = n('P1r1'),
        _ = n('rxPX'),
        S = n('0KEI'),
        O = function (e) {
          return g.g()
        },
        w = Object(_.a)()
          .propsFromState(function () {
            return { browserPushAllowed: O, universalQualityFilteringEnabled: v.G }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_NOTIFICATIONS_SCREEN',
              ),
              updateSettings: v.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications' }),
        C = n('3XMw'),
        P = n.n(C),
        A = n('yoO3'),
        T = n('7FtF'),
        R = 'filtersHeader',
        k = n('6vad'),
        L = n('cCdp'),
        j = n('csss'),
        I = n('0yYu')
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
      var D = P.a.eb75875d,
        x = P.a.i647fb03,
        N = P.a.hee41732,
        M = P.a.e75f25a8,
        H = P.a.f8bd75d4,
        U = P.a.bcd81cab,
        B = P.a.hfc86556,
        K = P.a.afdf29b8,
        V = P.a.b293c4bd,
        G = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleUqfChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler
                ;(0, r.updateSettings)(y()({}, t, n ? 'enabled' : 'disabled')).catch(a({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.browserPushAllowed,
                    n = e.location,
                    r = e.universalQualityFilteringEnabled
                  return E.a.createElement(
                    A.a,
                    null,
                    E.a.createElement(
                      T.a,
                      { location: n, screenType: 'primaryDetail', title: D },
                      E.a.createElement(k.b, { testID: R, text: x }),
                      E.a.createElement(L.a, {
                        checked: r,
                        helpText: V,
                        label: K,
                        learnMoreLink: 'https://support.twitter.com/articles/20169398',
                        name: 'universal_quality_filtering',
                        onChange: this._handleUqfChanged,
                      }),
                      E.a.createElement(j.a, { label: H, link: '/settings/notifications/advanced_filters' }),
                      E.a.createElement(j.a, { label: B, link: '/settings/mute' }),
                      E.a.createElement(I.a, null),
                      E.a.createElement(k.b, { text: U }),
                      t ? E.a.createElement(j.a, { label: N, link: '/settings/push_notifications' }) : null,
                      E.a.createElement(j.a, { label: M, link: '/settings/email_notifications' }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = w(G)
    },
    Zh1i: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DeactivateScreen', function () {
          return le
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ERkP'),
        E = n.n(b),
        g = n('4+NY'),
        v = n('XMGw'),
        _ = n('8jkQ'),
        S = n('oEOe'),
        O = ''.concat(v.a, '/deactivate'),
        w = 'rweb/'.concat(O),
        C = Object(S.a)(w, 'DEACTIVATE_ACCOUNT'),
        P = function () {
          return _.b.navigateTo('/settings/deactivated')
        },
        A = function (e, t) {
          return function (n, r, a) {
            a.api
            return n(Object(g.d)()).then(function () {
              return n(
                (function (e, t) {
                  return function (n, r, a) {
                    var o = a.api
                    return Object(S.b)(n, {
                      params: { password: e, deactivation_timespan: t },
                      request: o.Settings.deactivate,
                    })({ actionTypes: C, context: 'DEACTIVATE_ACCOUNT' }).then(P)
                  }
                })(e, t),
              )
            })
          }
        },
        T = n('G6rE'),
        R = n('rxPX'),
        k = n('0KEI'),
        L = function (e) {
          var t = T.e.selectLoggedInUser(e)
          return !!t && t.verified
        },
        j = Object(R.a)()
          .propsFromState(function () {
            return { isVerified: L }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('DEACTIVATE'),
              deactivate: A,
            }
          })
          .withAnalytics({ page: 'settings', section: 'deactivate' }),
        I = n('tI3i'),
        F = n.n(I),
        D = n('yoO3'),
        x = n('98E1'),
        N = n('iCwC'),
        M = n('88ay'),
        H = n('MWbm'),
        U = n('t62R'),
        B = n('6vad'),
        K = n('0yYu'),
        V = n('Y3cQ'),
        G = n('jtO7'),
        W = n('v6aA'),
        Y = n('3XMw'),
        X = n.n(Y)
      function z(e) {
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
      var q = X.a.ic2937a1,
        Z = X.a.d86e6d9a,
        Q = X.a.i945795c,
        J = X.a.c3216543,
        $ = X.a.ea989810,
        ee = X.a.f6e73faa,
        te = X.a.c3743327,
        ne = X.a.a20cd24d,
        re = X.a.g8fb7f85,
        ae = X.a.fe36fe1f,
        oe = X.a.e93b0aef,
        ce = '/settings/your_twitter_data/account',
        ie = [
          { label: X.a.b8971cfa, value: '30_days' },
          { label: X.a.ce0f88f6, value: '1_year' },
        ],
        se = function (e) {
          var t = e.children,
            n = e.withBottomBorder,
            r = void 0 === n || n
          return E.a.createElement(
            H.a,
            { style: [N.a.viewItem, r && N.a.bottomBorder] },
            E.a.createElement(U.b, { color: 'gray700', size: 'subtext2' }, t),
          )
        },
        le = (function (e) {
          u()(n, e)
          var t = z(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_handleDeactivateRequest', function () {
                window.scrollTo(0, 0), o.setState({ showPasswordDialog: !0 })
              }),
              y()(s()(o), '_handlePasswordSubmit', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.deactivate)(e, o.state.dataReactivation).catch(function (e) {
                  return o.setState({ showPasswordDialog: !1 }), n({ showToast: !0 })(e)
                })
              }),
              y()(s()(o), '_handleReactivationChanged', function (e, t) {
                o.setState({ dataReactivation: t })
              }),
              (o.state = { dataReactivation: e.isVerified ? void 0 : '30_days', showPasswordDialog: !1 }),
              o
            )
          }
          return (
            c()(n, [
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
                    r = this.context.loggedInUserId,
                    a = this.state,
                    o = a.dataReactivation,
                    c = a.showPasswordDialog,
                    i = '1_year' === o,
                    s = '30_days' === o,
                    l = null === o
                  return (
                    F()(!!r, 'loggedInUserId must be defined'),
                    E.a.createElement(
                      D.a,
                      null,
                      E.a.createElement(
                        x.a,
                        {
                          location: n,
                          onPasswordSubmit: this._handlePasswordSubmit,
                          promptForPassword: c,
                          reenterPasswordLabel: oe,
                          saveChangesHeaderLabel: ae,
                          submitLabel: ee,
                          submitType: 'destructiveFilled',
                          title: $,
                        },
                        E.a.createElement(
                          H.a,
                          null,
                          E.a.createElement(M.b, { key: r, userId: r, withLink: !1 }),
                          E.a.createElement(B.b, { text: te }),
                          E.a.createElement(se, { withBottomBorder: !1 }, q),
                          E.a.createElement(B.b, { text: ne }),
                          i
                            ? E.a.createElement(se, null, Z)
                            : s
                            ? E.a.createElement(se, null, Q)
                            : E.a.createElement(se, null, J),
                          t
                            ? E.a.createElement(
                                E.a.Fragment,
                                null,
                                E.a.createElement(K.a, null),
                                E.a.createElement(V.a, {
                                  label: re,
                                  name: 'reactivation',
                                  onChange: this._handleReactivationChanged,
                                  options: ie,
                                  value: o,
                                }),
                                E.a.createElement(K.a, null),
                              )
                            : null,
                          E.a.createElement(
                            se,
                            null,
                            E.a.createElement(
                              X.a.I18NFormatMessage,
                              { $i18n: 'g124fce8' },
                              E.a.createElement(
                                U.b,
                                {
                                  link: 'https://help.twitter.com/safety-and-security/remove-twitter-profile-from-google-search',
                                },
                                X.a.ae256744,
                              ),
                            ),
                          ),
                          E.a.createElement(
                            se,
                            null,
                            E.a.createElement(
                              X.a.I18NFormatMessage,
                              { $i18n: 'd9ef8fba' },
                              E.a.createElement(U.b, { link: ce }, X.a.g7b28903),
                            ),
                          ),
                          E.a.createElement(
                            se,
                            null,
                            E.a.createElement(
                              X.a.I18NFormatMessage,
                              { $i18n: 'g4dcd62a' },
                              E.a.createElement(U.b, { link: ce }, X.a.b5e3246e),
                            ),
                          ),
                          E.a.createElement(
                            se,
                            { withBottomBorder: !1 },
                            E.a.createElement(
                              X.a.I18NFormatMessage,
                              { $i18n: 'b44893f9' },
                              E.a.createElement(U.b, { link: '/settings/download_your_data' }, X.a.g392e08c),
                            ),
                          ),
                          E.a.createElement(K.a, null),
                          E.a.createElement(G.a, {
                            color: 'red500',
                            disabled: l,
                            label: ee,
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
      y()(le, 'contextType', W.a)
      t.default = j(le)
    },
    ZqFf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountPage', function () {
          return re
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ERkP'),
        E = n.n(b),
        g = n('P1r1'),
        v = n('RqPI'),
        _ = n('G6rE'),
        S = n('rxPX'),
        O = n('0KEI'),
        w = n('vEo5'),
        C = n('FDFL'),
        P = n('S/HT'),
        A = function (e) {
          var t = Object(g.j)(e)
          return t && Object(P.b)(e, t)
        },
        T = function (e) {
          var t = Object(v.o)(e)
          return t && Object(C.b)(e, t)
        },
        R = Object(S.a)()
          .propsFromState(function () {
            return {
              countryName: A,
              emails: w.selectEmails,
              languageCode: v.o,
              languageName: T,
              loggedInUser: _.e.selectLoggedInUser,
              phones: w.selectPhoneNumbers,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_SCREEN',
              ),
              fetchAvailableLanguagesIfNeeded: C.a,
              fetchDevices: w.fetchDevices,
              fetchCountryNamesIfNeeded: P.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'account' }),
        k = n('3XMw'),
        L = n.n(k),
        j = n('yoO3'),
        I = n('7FtF'),
        F = 'accountScreen',
        D = n('MWbm'),
        x = n('v6aA'),
        N = n('6vad'),
        M = n('csss'),
        H = n('0yYu')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var B = L.a.i5f7b6b8,
        K = L.a.cd32dbfd,
        V = L.a.e7efe72a,
        G = L.a.a3841918,
        W = L.a.f70cd5ed,
        Y = L.a.dec3c9b8,
        X = L.a.j95edf76,
        z = L.a.a4b69cbb,
        q = L.a.c21037d0,
        Z = L.a.d1f6d336,
        Q = L.a.ae72d4c4,
        J = L.a.b7fde2b8,
        $ = L.a.hfb92b14,
        ee = L.a.bc38469e,
        te = L.a.fa98627a,
        ne = L.a.hd0765e3,
        re = (function (e) {
          u()(n, e)
          var t = U(n)
          function n(e, r) {
            var o
            a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_fetchDevices', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchDevices)().catch(t())
              })
            var c = o.props,
              i = c.createLocalApiErrorHandler,
              l = c.fetchAvailableLanguagesIfNeeded,
              u = c.fetchCountryNamesIfNeeded,
              f = c.languageCode
            return (
              o._fetchDevices(),
              f && u(f).catch(i()),
              l().catch(i()),
              (o._isVerificationIntakeEnabled = o.context.featureSwitches.isTrue(
                'identity_verification_intake_enabled',
              )),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.countryName,
                    n = e.emails,
                    r = e.languageName,
                    a = e.location,
                    o = e.loggedInUser,
                    c = e.phones,
                    i = o && '@'.concat(o.screen_name),
                    s = c[0] && c[0].phone_number,
                    l = n[0] && n[0].email
                  return E.a.createElement(
                    j.a,
                    null,
                    E.a.createElement(
                      I.a,
                      { location: a, screenType: 'primaryDetail', title: B },
                      E.a.createElement(
                        D.a,
                        { testID: F },
                        E.a.createElement(N.b, { text: V }),
                        E.a.createElement(M.a, { description: i, label: Z, link: '/settings/screen_name' }),
                        E.a.createElement(M.a, { description: s, label: W, link: '/settings/phone' }),
                        E.a.createElement(M.a, { description: l, label: G, link: '/settings/email' }),
                        E.a.createElement(M.a, { label: Y, link: '/settings/password' }),
                        E.a.createElement(M.a, { label: X, link: '/settings/security' }),
                        this._isVerificationIntakeEnabled &&
                          E.a.createElement(
                            E.a.Fragment,
                            null,
                            E.a.createElement(H.a, null),
                            E.a.createElement(N.b, { text: ee }),
                            E.a.createElement(M.a, { label: te, link: '/settings/profile' }),
                            E.a.createElement(M.a, { label: ne, link: '/settings/request_verification' }),
                          ),
                        E.a.createElement(H.a, null),
                        E.a.createElement(N.b, { text: K }),
                        E.a.createElement(M.a, { description: r, label: z, link: '/settings/language' }),
                        E.a.createElement(M.a, { description: t, label: q, link: '/settings/country' }),
                        E.a.createElement(M.a, { label: J, link: '/settings/your_twitter_data' }),
                        E.a.createElement(M.a, { label: Q, link: '/settings/applications' }),
                        E.a.createElement(H.a, null),
                        E.a.createElement(M.a, { label: $, link: '/settings/deactivate' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(re, 'contextType', x.a)
      t.default = R(re)
    },
    'a/ea': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return f
      }),
        n.d(t, 'd', function () {
          return d
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return b
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('JtPf'), n('7x/C'), n('M6MT')),
        c = n('Ssj5')
      function i(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = 'geoLocation',
        u = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var f = function (e) {
          return e.geoLocation.permissionStatus
        },
        d = function (e) {
          return e.geoLocation.position
        },
        p = 'rweb/geoLocation/SET_PERMISSION_STATUS',
        h = function (e) {
          return { payload: e, type: p }
        },
        m = 'rweb/geoLocation/SET_POSITION',
        y = function () {
          return function (e, t) {
            return E()
              .then(function (t) {
                return e({ payload: t, type: m })
              })
              .catch(function (t) {
                return e(h(o.b.denied)), Promise.reject(t)
              })
          }
        },
        b = function () {
          return function (e, t) {
            return d(t()) ? Promise.resolve() : e(y())
          }
        },
        E = function () {
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
      c.a.register(
        a()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p:
              return s(s({}, e), {}, { permissionStatus: t.payload })
            case m:
              return s(s({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    aaHS: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('PFE4'),
        a = n('Rdmj'),
        o = n('3XMw'),
        c = n.n(o),
        i = c.a.i3889a1f,
        s = c.a.iefef10b
      t.default = Object(a.a)({
        scribeNamespace: { page: 'blocked', section: 'imported_blocked_accounts' },
        blockType: r.a.Imported,
        emptyStateTitle: s,
        emptyStateMessage: i,
        supportUrl: 'https://help.twitter.com/articles/20172663',
      })
    },
    adsa: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TrendsLocationsScreen', function () {
          return Q
        }),
        n.d(t, 'styles', function () {
          return J
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('z84I'), n('LW0h'), n('3voH'), n('ho0z'), n('5BYb'), n('ERkP')),
        E = n.n(b),
        g = n('P1r1'),
        v = n('EyIn'),
        _ = n('+OgG'),
        S = n('rxPX'),
        O = n('0KEI'),
        w = Object(S.a)()
          .propsFromState(function () {
            return {
              placeTrendsLocations: v.f,
              placeTrendsLocationsFetchStatus: v.g,
              placeTrendsSettings: v.d,
              woeTrendsLocations: v.h,
              woeTrendsLocationsFetchStatus: v.i,
              woeTrendsLocationSettings: g.E,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRENDS_LOCATION_SCREEN',
              ),
              fetchWoeTrendsLocationsIfNeeded: v.c,
              fetchPlaceTrendsLocations: v.b,
              updateWoeTrendSettings: _.a,
              updatePlaceTrendSettings: v.j,
            }
          })
          .withAnalytics({ page: 'settings', section: 'trends', component: 'locations', element: 'list' }),
        C = n('v//M'),
        P = n('jHSc'),
        A = n('3XMw'),
        T = n.n(A),
        R = n('VwDm'),
        k = 19,
        L = 12,
        j = function (e) {
          return e.placeType && (e.placeType.code === k || e.placeType.code === L)
        },
        I = n('iBK2'),
        F = 'locationSearchBox',
        D = (n('uFXj'), n('IMYl')),
        x = n('htQn'),
        N = n('t62R'),
        M = n('rHpw'),
        H = T.a.d5c9174e,
        U = M.a.create(function (e) {
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
        B = function (e) {
          var t = e.country,
            n = e.isSelected,
            r = e.name,
            a = e.onClick
          return E.a.createElement(
            x.a,
            { onPress: a, style: U.item },
            t ? E.a.createElement(N.b, null, H({ location: r, country: t })) : E.a.createElement(N.b, null, r),
            n ? E.a.createElement(D.a, { style: U.iconCheckmark }) : null,
          )
        },
        K = n('MWbm'),
        V = n('v6aA'),
        G = n('oQhu'),
        W = n('VY6S'),
        Y = n('6OUF')
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
      var z = T.a.b3aab6d3,
        q = T.a.e53e05e4,
        Z = T.a.be6cc44d,
        Q = (function (e) {
          u()(n, e)
          var t = X(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(
                s()(o),
                '_usePlaceTrendLocations',
                o.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints'),
              ),
              y()(s()(o), '_handleRetry', function () {
                o._fetchTrendsLocations()
              }),
              y()(s()(o), '_fetchTrendsLocations', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchPlaceTrendsLocations,
                  r = e.fetchWoeTrendsLocationsIfNeeded
                o._usePlaceTrendLocations
                  ? n({ prefix: o.state.query }).catch(t({ showToast: !0 }))
                  : r().catch(t({ showToast: !0 }))
              }),
              y()(s()(o), '_renderScroller', function () {
                var e = o.props.placeTrendsLocations
                return E.a.createElement(I.b, {
                  cacheKey: 'LOCATIONS_LIST',
                  identityFunction: o._identityFunction,
                  items: e,
                  renderer: o._renderPlaceLocation,
                })
              }),
              y()(s()(o), '_renderWoeLocations', function () {
                var e = '' === o.state.query ? o._getTopLevelWoeLocations() : o._getFilteredWoeLocations()
                return E.a.createElement(
                  K.a,
                  null,
                  E.a.createElement(
                    K.a,
                    { style: J.searchBox },
                    E.a.createElement(Y.a, {
                      Icon: R.a,
                      autoFocus: !1,
                      onChange: o._handleInputChange,
                      onClear: o._handleInputClear,
                      placeholder: Z,
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
              y()(s()(o), '_getFilteredWoeLocations', function () {
                var e = o.state.query,
                  t = o.props.woeTrendsLocations
                return o._getMemoizedFilteredWoeLocations(e, t)
              }),
              y()(
                s()(o),
                '_getMemoizedFilteredWoeLocations',
                Object(G.a)(function (e, t) {
                  return t.filter(function (t) {
                    return t.name.toLowerCase().startsWith(e.toLowerCase())
                  })
                }),
              ),
              y()(s()(o), '_getTopLevelWoeLocations', function () {
                var e = o.props.woeTrendsLocations
                return o._getMemoizedTopLevelWoeLocations(e)
              }),
              y()(
                s()(o),
                '_getMemoizedTopLevelWoeLocations',
                Object(G.a)(function (e) {
                  return e.filter(function (e) {
                    return j(e)
                  })
                }),
              ),
              y()(s()(o), '_handleInputClear', function () {
                o._updateQuery('')
              }),
              y()(s()(o), '_updateQuery', function (e) {
                o.setState({ query: e })
              }),
              y()(s()(o), '_handleInputChange', function (e) {
                o._updateQuery(e.target.value)
              }),
              y()(s()(o), '_renderWoeLocation', function (e) {
                var t = o.props.woeTrendsLocationSettings,
                  n = !!e.woeid && e.woeid === (t && t[0] && t[0].woeid)
                return E.a.createElement(B, {
                  country: j(e) ? void 0 : e.country,
                  isSelected: n,
                  key: e.woeid,
                  name: e.name,
                  onClick: o._handleWoeLocationClick(e.woeid),
                })
              }),
              y()(s()(o), '_renderPlaceLocation', function (e) {
                var t = o.props.placeTrendsSettings,
                  n =
                    !!e.place_id &&
                    t.places &&
                    t.places.some(function (t) {
                      return t.place_id === e.place_id
                    })
                return E.a.createElement(B, {
                  country: void 0,
                  isSelected: n,
                  key: e.place_id,
                  name: e.name,
                  onClick: o._handlePlaceLocationClick(e.place_id, e.name),
                })
              }),
              y()(s()(o), '_handleWoeLocationClick', function (e) {
                return function () {
                  var t = o.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.history,
                    a = t.updateWoeTrendSettings
                  r.goBack(), a({ trend_location_woeid: e }).catch(n({ showToast: !0 }))
                }
              }),
              y()(s()(o), '_handlePlaceLocationClick', function (e, t) {
                return function () {
                  var n = o.props,
                    r = n.createLocalApiErrorHandler,
                    a = n.history
                  ;(0, n.updatePlaceTrendSettings)({ places: [{ place_id: e, name: t }] })
                    .then(function () {
                      return a.goBack()
                    })
                    .catch(r({ showToast: !0 }))
                }
              }),
              (o._fetchFilteredPlacesDebounced = Object(W.a)(o._fetchTrendsLocations, 250)),
              (o._identityFunction = function (e) {
                return e.place_id
              }),
              (o.state = { query: '' }),
              o
            )
          }
          return (
            c()(n, [
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
                    r = e.woeTrendsLocationsFetchStatus
                  return E.a.createElement(
                    P.b,
                    { backButtonType: 'back', backLocation: '/settings/trends', history: t, title: z },
                    this._usePlaceTrendLocations
                      ? E.a.createElement(
                          E.a.Fragment,
                          null,
                          E.a.createElement(Y.a, {
                            Icon: R.a,
                            autoFocus: !1,
                            onChange: this._handleInputChange,
                            onClear: this._handleInputClear,
                            placeholder: Z,
                            style: J.searchBox,
                            testID: F,
                            value: this.state.query,
                            withClearButton: !0,
                          }),
                          E.a.createElement(C.a, {
                            accessibilityLabel: q,
                            fetchStatus: n,
                            onRequestRetry: this._handleRetry,
                            render: this._renderScroller,
                          }),
                        )
                      : E.a.createElement(C.a, {
                          accessibilityLabel: q,
                          fetchStatus: r,
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
      y()(Q, 'contextType', V.a)
      var J = M.a.create(function (e) {
        return { searchBox: { flexGrow: 0, flexShrink: 0, margin: e.spaces.space12 } }
      })
      t.default = w(Q)
    },
    av9q: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('M+/F'), n('z84I'), n('ho0z'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        E = n.n(b),
        g = n('3XMw'),
        v = n.n(g),
        _ = n('t62R'),
        S = n('htQn'),
        O = n('rHpw')
      function w(e) {
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
      var C = v.a.c174e46e,
        P = v.a.a39075ff,
        A = (function (e) {
          u()(n, e)
          var t = w(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { showAllScopes: !1 }),
              y()(s()(e), '_handleToggleShowMoreScopes', function () {
                var t = e.state.showAllScopes
                e.setState({ showAllScopes: !t })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.scopes,
                    n = e.size,
                    r = e.title,
                    a = this.state.showAllScopes,
                    o = a ? t : t.slice(0, 3),
                    c = t.length > 3
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    E.a.createElement(_.b, { style: T.scopesHeader, weight: 'bold' }, r),
                    E.a.createElement(
                      S.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return E.a.createElement(
                          _.b,
                          { color: 'subtext2' === n ? 'gray700' : void 0, key: e.name, size: n, style: T.listItem },
                          e.description,
                        )
                      }),
                    ),
                    c && a
                      ? E.a.createElement(
                          _.b,
                          { onPress: this._handleToggleShowMoreScopes, style: T.toggleMoreLink },
                          C,
                        )
                      : null,
                    c && !a
                      ? E.a.createElement(
                          _.b,
                          { onPress: this._handleToggleShowMoreScopes, style: T.toggleMoreLink },
                          P({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        T = O.a.create(function (e) {
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
          return C
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('P1r1'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { universalQualityFilteringEnabled: i.G }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_FILTERS_SCREEN',
              ),
              updateSettings: i.L,
            }
          }),
        f = n('3XMw'),
        d = n.n(f),
        p = n('yoO3'),
        h = n('7JQg'),
        m = n('7FtF'),
        y = n('xHsv'),
        b = n('cCdp'),
        E = n('csss'),
        g = d.a.ef1b5cbb,
        v = d.a.i647fb03,
        _ = d.a.aaafffd9,
        S = d.a.afdf29b8,
        O = d.a.c54b6236,
        w = { page: 'settings', section: 'filters' }
      function C(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.location,
          r = e.universalQualityFilteringEnabled,
          o = e.updateSettings
        return c.a.createElement(
          h.b,
          { namespace: w },
          c.a.createElement(
            p.a,
            null,
            c.a.createElement(
              m.a,
              { location: n, title: v },
              c.a.createElement(y.a, { description: g }),
              c.a.createElement(b.a, {
                checked: r,
                helpText: O,
                label: S,
                learnMoreLink:
                  'https://help.twitter.com/managing-your-account/understanding-the-notifications-timeline',
                name: 'universal_quality_filtering',
                onChange: function (e, n) {
                  o(a()({}, e, n ? 'enabled' : 'disabled')).catch(t({ showToast: !0 }))
                },
              }),
              c.a.createElement(E.a, { label: _, link: '/settings/notifications/advanced_filters' }),
            ),
          ),
        )
      }
      var P = u(C)
      t.default = P
    },
    dMlH: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTeamsScreen', function () {
          return A
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('P1r1'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { teamsSetting: i.F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TEAMS_SCREEN',
              ),
              fetchSettingsIfNeeded: i.f,
              updateSettings: i.L,
            }
          }),
        f = n('3XMw'),
        d = n.n(f),
        p = n('yoO3'),
        h = n('98E1'),
        m = n('7JQg'),
        y = n('MWbm'),
        b = n('xHsv'),
        E = n('qYi+'),
        g = n('t62R'),
        v = d.a.d13e165c,
        _ = d.a.cf24a081,
        S = d.a.d1e97fdf,
        O = [
          { label: d.a.a2ffab26, value: 'all' },
          { label: d.a.h69bd4ee, value: 'following' },
        ],
        w = d.a.d0a1d1d9,
        C = d.a.i859a9d3,
        P = { page: 'settings', section: 'teams' },
        A = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchSettingsIfNeeded,
            r = e.location,
            o = e.teamsSetting,
            i = e.updateSettings,
            s = c.a.useState(),
            l = a()(s, 2),
            u = l[0],
            f = l[1]
          c.a.useEffect(
            function () {
              n().catch(t())
            },
            [n, t],
          )
          var d = !!u && o !== u,
            A = u || o
          return c.a.createElement(
            m.b,
            { namespace: P },
            c.a.createElement(
              p.a,
              null,
              c.a.createElement(
                h.a,
                {
                  location: r,
                  onPasswordSubmit: function (e) {
                    u &&
                      i({ current_password: e, allow_contributor_request: u }).catch(function (e) {
                        f(o), t({ showToast: !0 })(e)
                      })
                  },
                  promptForPassword: d,
                  title: v,
                },
                c.a.createElement(
                  y.a,
                  null,
                  c.a.createElement(b.a, { description: S }),
                  c.a.createElement(E.a, {
                    description: c.a.createElement(
                      c.a.Fragment,
                      null,
                      ''.concat(w, ' '),
                      c.a.createElement(g.b, { link: 'https://help.twitter.com/using-twitter/tweetdeck-teams' }, C),
                    ),
                    label: _,
                    name: 'allow_contributor_request',
                    offValue: 'none',
                    onChange: function (e, t) {
                      ;('all' !== t && 'following' !== t && 'none' !== t) || f(t)
                    },
                    options: O,
                    value: A,
                  }),
                ),
              ),
            ),
          )
        },
        T = u(A)
      t.default = T
    },
    dUVB: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MuteKeywordDetailScreen', function () {
          return me
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('T0aG'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g = (n('vrRf'), n('hBpG'), n('MvUL'), n('KqXw'), n('tVqn'), n('7xRU'), n('ERkP')),
        v = n.n(g),
        _ = n('k49u'),
        S = (n('WNMA'), n('X8EX')),
        O = n('1YZw'),
        w = n('rxPX'),
        C = n('0KEI'),
        P = function (e, t) {
          return t.match.params.mutedKeywordId
        },
        A = function (e, t) {
          return S.i(e, P(0, t))
        },
        T = function (e, t) {
          return !!P(0, t)
        },
        R = Object(w.a)()
          .propsFromState(function () {
            return { defaultOptions: S.f, discouragedKeywords: S.g, fetchStatus: S.h, isEditing: T, mutedKeyword: A }
          })
          .propsFromActions(function () {
            return {
              addMutedKeyword: S.a,
              addToast: O.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
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
        k = n('kGix'),
        L = n('v//M'),
        j = n('gaV8'),
        I = n.n(j),
        F = n('VTxf'),
        D = n('yoO3'),
        x = n('7FtF'),
        N = n('MWbm'),
        M = n('t62R'),
        H = n('p+r5'),
        U = n('0yYu'),
        B = n('6vad'),
        K = n('cCdp'),
        V = n('qYi+'),
        G = n('Y3cQ'),
        W = n('rHpw'),
        Y = n('3XMw'),
        X = n.n(Y)
      function z(e, t) {
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
      function q(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Z = X.a.bdbf8f4e,
        Q = X.a.h43e2ea7,
        J = X.a.da8c044f,
        $ = X.a.eb75875d,
        ee = [
          { label: X.a.defb4aa9, value: 'everyone' },
          { label: X.a.e7d47b00, value: 'following' },
        ],
        te = X.a.c67e3fc1,
        ne = X.a.d9d6e10e,
        re = X.a.gfa5008d,
        ae = X.a.c5595dfe,
        oe = X.a.he6804e0,
        ce = [
          { label: oe, value: 'forever' },
          { label: X.a.a268406c, value: 'day' },
          { label: X.a.fc638aa2, value: 'week' },
          { label: X.a.b8971cfa, value: 'month' },
        ],
        ie = [
          { label: X.a.a268406c, value: 'day' },
          { label: X.a.fc638aa2, value: 'week' },
          { label: X.a.b8971cfa, value: 'month' },
          { label: oe, value: 'forever' },
        ],
        se = X.a.cc7bedfc,
        le = X.a.d768049b,
        ue = X.a.c6203da8,
        fe = X.a.e3f0d3db,
        de = X.a.h5746cf6,
        pe = X.a.d2693eb8,
        he = X.a.jf4e00e1,
        me = (function (e) {
          d()(n, e)
          var t = q(n)
          function n(e) {
            var r
            c()(this, n),
              (r = t.call(this, e)),
              E()(u()(r), '_renderSettings', function () {
                var e = r.props,
                  t = e.isEditing,
                  n = e.mutedKeyword,
                  a = r.state,
                  o = a.errorText,
                  c = a.warningText,
                  i = o || c,
                  s = v.a.createElement(
                    X.a.I18NFormatMessage,
                    { $i18n: 'aba5a348' },
                    v.a.createElement(M.b, { link: 'https://support.twitter.com/articles/20175032' }, X.a.e456bd5f),
                  )
                return v.a.createElement(
                  N.a,
                  null,
                  v.a.createElement(H.a, {
                    defaultValue: t ? (null == n ? void 0 : n.keyword) : '',
                    editable: !t,
                    errorText: i,
                    helperText: t ? null : s,
                    invalid: !!i,
                    label: t ? Q : Z,
                    name: 'keyword',
                    numberOfLines: 1,
                    onChange: r._handleKeywordChanged,
                    type: 'text',
                  }),
                  r._renderOptions(),
                )
              }),
              E()(u()(r), '_renderOptions', function () {
                var e = r.props.isEditing
                return v.a.createElement(
                  N.a,
                  null,
                  v.a.createElement(U.a, null),
                  v.a.createElement(B.b, { text: J }),
                  v.a.createElement(K.a, {
                    checked: r.state.mute_home_timeline,
                    label: te,
                    name: 'mute_home_timeline',
                    onChange: r._handleEntryUpdated,
                  }),
                  v.a.createElement(V.a, {
                    label: $,
                    name: 'mute_notifications_option',
                    offValue: 'none',
                    onChange: r._handleEntryUpdated,
                    options: ee,
                    value: r.state.mute_notifications_option,
                  }),
                  v.a.createElement(U.a, null),
                  v.a.createElement(B.b, { text: e ? r._renderEditTimeDurationLabel() : ne }),
                  v.a.createElement(G.a, {
                    name: 'time_duration',
                    onChange: r._handleEntryUpdated,
                    options: e ? ie : ce,
                    value: r.state.time_duration,
                  }),
                  e ? v.a.createElement(M.b, { color: 'gray700', size: 'subtext2', style: ye.infoText }, se) : null,
                )
              }),
              E()(u()(r), '_renderEditTimeDurationLabel', function () {
                var e = r.props.mutedKeyword
                return null != e && e.valid_until ? re : ae
              }),
              E()(u()(r), '_renderNotFound', function () {
                return v.a.createElement(F.a, null)
              }),
              E()(u()(r), '_initializeMuteKeywordStates', function (e) {
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
              E()(u()(r), '_isMutedKeywordNotFound', function () {
                var e = r.props,
                  t = e.fetchStatus,
                  n = e.isEditing,
                  a = e.mutedKeyword
                return n && t === k.a.LOADED && !a
              }),
              E()(u()(r), '_getFetchStatus', function () {
                var e = r.props.fetchStatus
                return r.state.isUpdatingMutedKeyword ? k.a.LOADING : r._isMutedKeywordNotFound() ? k.a.FAILED : e
              }),
              E()(u()(r), '_handleFetch', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchDefaultOptionsIfNeeded,
                  a = e.fetchDiscouragedKeywordsIfNeeded,
                  o = e.fetchMutedKeywordsIfNeeded,
                  c = e.fetchStatus,
                  i = e.isEditing
                a().catch(t()), i || c === k.a.NONE ? o().catch(t()) : n()
              }),
              E()(u()(r), '_handleKeywordChanged', function (e) {
                var t = e.target.value
                r.setState({ keyword: t }, r._checkKeywordValidity)
              }),
              E()(u()(r), '_handleEntryUpdated', function (e, t) {
                r.setState(E()({}, e, t), r._checkKeywordValidity)
              }),
              E()(u()(r), '_handleGoBack', function () {
                r.props.history.goBack({ backLocation: '/settings/muted_keywords' })
              }),
              E()(u()(r), '_handleMutedKeywordIdChanged', function (e, t) {
                var n = r.props.history
                if (e) {
                  var a =
                    null == t
                      ? void 0
                      : t.find(function (t) {
                          return t.keyword === e
                        })
                  a && n.replace({ pathname: '/settings/muted_keywords/'.concat(a.id) })
                }
              }),
              E()(u()(r), '_handleSubmit', function () {
                var e = r._getMuteKeywordParams()
                r.props.isEditing ? r._updateExistingMutedKeyword(e) : r._createNewMutedKeyword(e)
              })
            var a = e.defaultOptions,
              o = e.mutedKeyword,
              i = o ? r._initializeMuteKeywordStates(o) : a
            return (
              (r.state = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? z(Object(n), !0).forEach(function (t) {
                        E()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : z(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                      })
                }
                return e
              })({ errorText: void 0, hasValidKeyword: !1, warningText: void 0, isUpdatingMutedKeyword: !1 }, i)),
              r
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._handleFetch(),
                    (this._mutateMutedKeywordApiErrorHandlingConfiguration = E()({}, _.a.ValidationFailure, {
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
                    r = e.isEditing,
                    a = e.mutedKeyword
                  r &&
                    n === k.a.LOADED &&
                    a &&
                    !this.props.mutedKeyword &&
                    this.setState(this._initializeMuteKeywordStates(a)),
                    r || n !== k.a.LOADED || t === this.props.defaultOptions || this.setState(t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isEditing,
                    n = e.location,
                    r = this._isMutedKeywordNotFound()
                  return v.a.createElement(
                    D.a,
                    null,
                    v.a.createElement(
                      x.a,
                      {
                        location: n,
                        onSubmit: this._handleSubmit,
                        submitDisabled: !this.state.hasValidKeyword || r,
                        title: t ? ue : le,
                      },
                      v.a.createElement(L.a, {
                        fetchStatus: this._getFetchStatus(),
                        onRequestRetry: this._handleFetch,
                        render: this._renderSettings,
                        renderFailure: this._renderNotFound,
                        retryable: !r,
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
                    r = n.keyword,
                    a = void 0 === r ? '' : r,
                    o = n.mute_home_timeline,
                    c = n.mute_notifications_option,
                    i = I()(a),
                    s = this._isDiscouragedWord(a.trim()),
                    l = i > 0 && i <= 140,
                    u = l && (o || 'none' !== c)
                  l || (i > 140 && (e = pe)),
                    s && (t = he),
                    this.setState({ hasValidKeyword: u, errorText: e, warningText: t })
                },
              },
              {
                key: '_getMuteKeywordParams',
                value: function () {
                  var e = this.state,
                    t = e.id,
                    n = e.keyword,
                    r = e.mute_home_timeline,
                    a = e.mute_notifications_option,
                    o = e.time_duration,
                    c = {},
                    i = [],
                    s = []
                  return (
                    this.props.isEditing ? (c.id = t) : (c.keyword = n),
                    'none' !== a && i.push('notifications'),
                    r && i.push('home_timeline', 'tweet_replies'),
                    (c.mute_surfaces = i.join(',')),
                    'following' === a && s.push('exclude_following_accounts'),
                    (c.mute_options = s.join(',')),
                    (c.duration = this._getDuration(o)),
                    c
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
                    r = n.addMutedKeyword,
                    o = n.addToast,
                    c = n.analytics,
                    i = n.createLocalApiErrorHandler,
                    s = n.updateDefaultOptions,
                    l = this.state,
                    u = l.mute_home_timeline
                  s({
                    mute_notifications_option: l.mute_notifications_option,
                    mute_home_timeline: u,
                    time_duration: l.time_duration,
                  }),
                    r(e).then(function (n) {
                      var r = e.keyword
                      if ('object' === a()(n) && Array.isArray(n.muted_keywords)) {
                        var i = n.muted_keywords[0]
                        'object' === a()(i) && i.keyword && (r = i.keyword)
                      }
                      var s = fe({ keyword: r })
                      o({ text: s }), c.scribeAction('mute'), t._handleGoBack()
                    }, i(this._mutateMutedKeywordApiErrorHandlingConfiguration))
                },
              },
              {
                key: '_updateExistingMutedKeyword',
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.addToast,
                    a = n.createLocalApiErrorHandler,
                    o = n.mutedKeyword,
                    c = n.updateMutedKeyword,
                    i = null == o ? void 0 : o.keyword
                  this.setState({ isUpdatingMutedKeyword: !0 }, function () {
                    c(e).then(
                      function (e) {
                        r({ text: de({ keyword: t.state.keyword }) }),
                          t._handleMutedKeywordIdChanged(i, e.muted_keywords),
                          t._handleGoBack()
                      },
                      function (e) {
                        a(t._mutateMutedKeywordApiErrorHandlingConfiguration)(e),
                          t.setState({ isUpdatingMutedKeyword: !1 })
                      },
                    )
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        ye = W.a.create(function (e) {
          return { infoText: { marginVertical: e.spaces.space20, marginHorizontal: e.spaces.space12 } }
        }),
        be = R(me)
      t.default = be
    },
    e7uq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BlockedAccountsScreen', function () {
          return U
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('3XMw'),
        v = n.n(g),
        _ = n('yoO3'),
        S = n('wytG'),
        O = n('7JQg'),
        w = n('7FtF'),
        C = n('k/OQ'),
        P = n('v6aA'),
        A = n('Ty5D')
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
      var R = v.a.a5f32aa2,
        k = v.a.f8321d82,
        L = v.a.cf67f6d5,
        j = v.a.eb233865,
        I = '/settings/blocked/all',
        F = '/settings/safety_mode/autoblocked',
        D = '/settings/blocked/imported',
        x = { page: 'settings', section: 'blocked_accounts' },
        N = Object(S.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(9), n.e(23), n.e(229)]).then(n.bind(null, 'XFGu'))
        }),
        M = Object(S.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(9), n.e(23), n.e(229)]).then(n.bind(null, 'tJyY'))
        }),
        H = Object(S.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(9), n.e(23), n.e(229)]).then(n.bind(null, 'aaHS'))
        }),
        U = (function (e) {
          u()(n, e)
          var t = T(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
                s()(e),
                '_fsAutoBlockListEnabled',
                e.context.featureSwitches.isTrue('rito_safety_mode_features_enabled'),
              ),
              y()(s()(e), '_renderTabs', function () {
                var t = [
                  { to: I, key: k, label: k, retainScrollPosition: !1 },
                  e._fsAutoBlockListEnabled ? { to: F, key: L, label: L, retainScrollPosition: !1 } : void 0,
                  { to: D, key: j, label: j, retainScrollPosition: !1 },
                ]
                return E.a.createElement(C.a, { accessibilityLabel: R, links: t })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return E.a.createElement(
                    O.b,
                    { namespace: x },
                    E.a.createElement(
                      _.a,
                      null,
                      E.a.createElement(
                        w.a,
                        {
                          location: this.props.location,
                          secondaryBar: this._renderTabs(),
                          title: R,
                          withBottomBorder: !0,
                          withMarginBottom: !1,
                        },
                        E.a.createElement(
                          A.e,
                          null,
                          E.a.createElement(A.c, { component: N, exact: !0, path: I }),
                          this._fsAutoBlockListEnabled
                            ? E.a.createElement(A.c, { component: M, exact: !0, path: F })
                            : null,
                          E.a.createElement(A.c, { component: H, exact: !0, path: D }),
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
      y()(U, 'contextType', P.a), (t.default = U)
    },
    fLnR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PersonalizationScreen', function () {
          return Oe
        })
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('jwue'), n('+oxZ'), n('+KXO'), n('ERkP')),
        E = n.n(b),
        g = n('6/RC'),
        v = n('zh9S'),
        _ = n('NeAX'),
        S = n('RqPI'),
        O = n('P1r1'),
        w = n('hqKg'),
        C = n('0KEI'),
        P = n('oEGd'),
        A = Object(w.createSelector)(S.m, O.g, _.selectPreferences, function (e, t, n) {
          return !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country
        }),
        T = Object(w.createSelector)(
          _.selectPreferencesFetchStatus,
          A,
          _.selectPreferences,
          _.selectUserPreferences,
          function (e, t, n, r) {
            return { fetchStatus: e, isEUUser: t, personalization: n, settings: r }
          },
        ),
        R = {
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PERSONALIZATION_SCREEN',
          ),
          fetchPreferencesIfNeeded: _.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: v.a,
          scribeAction: v.c,
          scribePageImpression: v.d,
          syncSettings: _.syncSettings,
          updateSettings: _.updateSettings,
        },
        k = Object(P.g)(T, R),
        L = n('xCYy'),
        j = n('v//M'),
        I = n('uD2z'),
        F = n('3XMw'),
        D = n.n(F),
        x = n('fs1G'),
        N = n('7JQg'),
        M = n('7FtF'),
        H = n('iCwC'),
        U = n('MWbm'),
        B = n('G8HL'),
        K = n('t62R'),
        V = n('cCdp'),
        G = n('0yYu'),
        W = n('6vad'),
        Y = n('csss'),
        X = n('eb3s'),
        z = n('v6aA')
      function q(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Q(e) {
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
      var J = D.a.e8f57e07,
        $ = D.a.ce8450f1,
        ee = D.a.ja94f34d,
        te = D.a.e8f57e07,
        ne = D.a.bd73f7e5,
        re = D.a.a55db872,
        ae = D.a.ddbc3287,
        oe = D.a.i7b329e0,
        ce = { headline: D.a.b934e0ea, text: D.a.bf917ce9, confirmButtonLabel: D.a.a148acb9 },
        ie = D.a.e8313b32,
        se = D.a.f1d46fd5,
        le = D.a.cfd2f35d,
        ue = D.a.ib3357a5,
        fe = D.a.c4ca418c,
        de = D.a.b0b3ed8e,
        pe = D.a.f6c8ccc7,
        he = D.a.f748b0fc,
        me = D.a.aa023546,
        ye = D.a.cb2ed998,
        be = D.a.b85127bc,
        Ee = D.a.b276596b,
        ge = D.a.c966aaf4,
        ve = D.a.d3c20d8f,
        _e = D.a.jdaf84e3,
        Se = { page: 'settings', section: 'personalization' },
        Oe = (function (e) {
          u()(n, e)
          var t = Q(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_render', function () {
                var e = o.props.settings,
                  t = e.allowDeviceAccess,
                  n = e.allowLocationHistoryUse,
                  r = e.allowPartnerships,
                  a = e.allowPersonalization,
                  c = o.state,
                  i = c.showDisableEUConfirmation,
                  s = c.showSwitchAllConfirmation
                return E.a.createElement(
                  U.a,
                  null,
                  E.a.createElement(
                    U.a,
                    null,
                    E.a.createElement(
                      K.b,
                      { color: 'gray700', size: 'subtext2', style: [H.a.infoText, H.a.bottomBorder] },
                      o._isLoggedIn ? $ : ee,
                    ),
                  ),
                  E.a.createElement(V.a, {
                    checked: o._getSwitchAllValue(),
                    helpText: ne,
                    key: 'switchAll',
                    label: te,
                    name: 'switchAll',
                    onChange: o._handleSwitchAllChanged,
                    type: 'switch',
                  }),
                  E.a.createElement(G.a, null),
                  E.a.createElement(W.b, { text: re }),
                  E.a.createElement(V.a, {
                    checked: a,
                    disabled: o._adsPersonalizationOSLevelDisabled,
                    helpText: o._adsPersonalizationOSLevelDisabled ? de : fe,
                    key: 'allowPersonalization',
                    label: ue,
                    learnMoreLink: 'https://support.twitter.com/articles/20170405',
                    name: 'allowPersonalization',
                    onChange: o._handleBooleanChanged,
                  }),
                  E.a.createElement(V.a, {
                    checked: t,
                    helpText: he,
                    key: 'allowDeviceAccess',
                    label: pe,
                    learnMoreLink: 'https://support.twitter.com/articles/20175257',
                    name: 'allowDeviceAccess',
                    onChange: o._handleBooleanChanged,
                  }),
                  o._isLoggedIn &&
                    E.a.createElement(V.a, {
                      checked: n,
                      helpText: ye,
                      key: 'allowLocationHistoryUse',
                      label: me,
                      name: 'allowLocationHistoryUse',
                      onChange: o._handleBooleanChanged,
                    }),
                  E.a.createElement(G.a, null),
                  E.a.createElement(W.b, { text: ae }),
                  o._renderCookiePersonalizationSetting(),
                  E.a.createElement(V.a, {
                    checked: r,
                    helpText: _e,
                    key: 'allowPartnerships',
                    label: ve,
                    learnMoreLink: 'https://support.twitter.com/articles/20175379',
                    name: 'allowPartnerships',
                    onChange: o._handleBooleanChanged,
                  }),
                  o._isLoggedIn && E.a.createElement(Y.a, { label: oe, link: '/settings/your_twitter_data' }),
                  i &&
                    E.a.createElement(X.a, {
                      cancelButtonLabel: le,
                      confirmButtonLabel: se,
                      onCancel: o._handleCancelDisableEU,
                      onConfirm: o._handleDisableEUCookies,
                      text: ie,
                    }),
                  s &&
                    E.a.createElement(X.a, {
                      confirmButtonLabel: ce.confirmButtonLabel,
                      headline: ce.headline,
                      onCancel: o._handleCancelSwitchAll,
                      onConfirm: o._handleConfirmSwitchAll,
                      text: ce.text,
                    }),
                )
              }),
              y()(s()(o), '_handleCancelSwitchAll', function () {
                o.setState({ showSwitchAllConfirmation: !1 })
              }),
              y()(s()(o), '_handleConfirmSwitchAll', function () {
                o._handleBulkUpdateSettings(!1)
              }),
              y()(s()(o), '_handleSwitchAllChanged', function (e, t) {
                t ? o._handleBulkUpdateSettings(!0) : o.setState({ showSwitchAllConfirmation: !0 })
              }),
              y()(s()(o), '_handleCancelDisableEU', function () {
                o.setState({ showDisableEUConfirmation: !1 })
              }),
              y()(s()(o), '_handleEUCookiesChanged', function () {
                o.setState({ showDisableEUConfirmation: !0 })
              }),
              y()(s()(o), '_handleDisableEUCookies', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.updateSettings)({ allowCookieUse: !1 }).catch(t()), o.setState({ showDisableEUConfirmation: !1 })
              }),
              y()(s()(o), '_handleBulkUpdateSettings', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.isEUUser,
                  a = t.settings,
                  c = t.updateSettings,
                  i = {}
                Object.keys(a).forEach(function (t) {
                  ;(r && 'allowCookieUse' === t) || (i[t] = e)
                }),
                  o._scribeAction('toggle_all', i),
                  c(i).catch(n()),
                  o.setState({ showSwitchAllConfirmation: !1 })
              }),
              y()(s()(o), '_handleBooleanChanged', function (e, t) {
                var n = o.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.updateSettings,
                  c = y()({}, e, t)
                o._scribeAction(e, c), a(c).catch(r())
              }),
              y()(s()(o), '_scribeAction', function (e, t) {
                ;(0, o.props.scribeAction)(Z(Z({}, Se), {}, { component: e, action: 'edit' }), { metadata: t })
              }),
              y()(s()(o), '_handleFetchPreferences', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)().catch(t())
              }),
              (o.state = { showSwitchAllConfirmation: !1, showDisableEUConfirmation: !1 }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.context.loggedInUserId
                  this._handleFetchPreferences(),
                    (this._isLoggedIn = !!e),
                    (this._adsPersonalizationOSLevelDisabled =
                      !g.canUseDOM ||
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
                    r = e.scribePageImpression,
                    a = e.syncSettings
                  n(Se), r(Se), !this._isLoggedIn && g.canUseDOM && a().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return E.a.createElement(
                    N.b,
                    { namespace: Se },
                    E.a.createElement(
                      M.a,
                      { location: n, title: J },
                      E.a.createElement(
                        L.a,
                        null,
                        E.a.createElement(j.a, {
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
                    r = !!n,
                    a = !1,
                    o = x.a,
                    c = be
                  return (
                    t
                      ? ((e = ge), r ? (o = this._handleEUCookiesChanged) : (a = !0))
                      : ((e = Ee), (o = this._handleBooleanChanged)),
                    E.a.createElement(V.a, {
                      checked: n,
                      disabled: a,
                      helpText: e,
                      key: 'allowCookieUse',
                      label: c,
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
                    t = Object(I.b)(e)
                  return 'some' === t || 'all' === t
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(Oe, 'contextType', z.a)
      t.default = k(Object(B.a)(Oe))
    },
    i6OR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r,
        a = n('KEM+'),
        o = n.n(a),
        c = (n('jQ3i'), n('x4t0'), n('2G9S'), n('IAdD'), n('LW0h'), n('vrRf'), n('z84I'), n('u3ZE')),
        i = n('3IPs'),
        s = n('ZNT5'),
        l = n('eR3e'),
        u = 'search-',
        f = ' near:me',
        d =
          ((r = {}),
          o()(r, i.c.Top, {}),
          o()(r, i.c.Live, { tweet_search_mode: i.c.Live }),
          o()(r, i.c.User, { result_filter: i.c.User }),
          o()(r, i.c.Image, { result_filter: i.c.Image }),
          o()(r, i.c.Video, { result_filter: i.c.Video }),
          r),
        p = function (e) {
          return (function (e) {
            return e === c.a.SpellingCorrectionRevertClick || e === c.a.SpellingExpansionRevertClick
          })(e)
            ? '-revert'
            : ''
        },
        h = function () {
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
          r = void 0 === n ? i.c.Top : n,
          a = e.querySource,
          o = e.searchFilters,
          c = e.vertical,
          l = e.urtEndpointOptions,
          h = p(a),
          m = o && o.peopleFilter ? 'searcher_follows' : void 0,
          y = m ? '-pf' : '',
          b = o && o.locationFilter && !t.includes(f) ? ''.concat(t).concat(f) : t,
          E = ''.concat(u).concat(b, '-').concat(r).concat(h).concat(y)
        return Object(s.a)({
          timelineId: E,
          getEndpoint: function (e) {
            return e.URT.fetchSearch
          },
          getEndpointParams: function (e) {
            return Object.assign(
              {},
              null == l ? void 0 : l.requestParams,
              { q: b, social_filter: m, vertical: c },
              d[r],
              e,
            )
          },
          context: 'FETCH_SEARCH_TIMELINE',
          perfKey: 'search',
          staleIntervalMs: r === i.c.Live ? 5e3 : void 0,
          timelineType: 'search',
        })
      }
    },
    iKTg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    iY63: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    'jU/U': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationsScreen', function () {
          return ce
        })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g = (n('2G9S'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        v = n.n(g),
        _ = n('EPsT'),
        S = n('dZRF'),
        O = n('uo4S'),
        w = n('kGix'),
        C = n('rxPX'),
        P = n('0KEI'),
        A = function (e, t) {
          return Object(w.d)(S.d(e), O.d(e, t))
        },
        T = Object(C.a)()
          .propsFromState(function () {
            return { fetchStatus: A, applications: S.a.selectUniqUnrevokedApps, sessions: O.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: S.b,
              fetchSessionsIfNeeded: O.a,
              revokeAllSessions: O.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'applications' }),
        R = n('v//M'),
        k = n('yoO3'),
        L = n('VIKJ'),
        j = n('ZvNX'),
        I = n('eM8g'),
        F = n('7FtF'),
        D = n('6vad'),
        x = n('FIs5'),
        N = n('csss'),
        M = n('0yYu'),
        H = n('t62R'),
        U = n('rHpw'),
        B = n('3XMw'),
        K = n.n(B),
        V = n('U+bB'),
        G = n('MWbm')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Y = K.a.i23e2807,
        X = K.a.dd823129,
        z = K.a.ae1bbb26,
        q = K.a.ae72d4c4,
        Z = K.a.i859a9d3,
        Q = K.a.e5e8a899,
        J = K.a.hb12114e,
        $ = K.a.f810f279,
        ee = K.a.ge06310e,
        te = K.a.dd1b86f9,
        ne = K.a.ee4b16f8,
        re = K.a.gf673efb,
        ae = K.a.e25e40f0,
        oe = K.a.d1baa458,
        ce = (function (e) {
          d()(n, e)
          var t = W(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
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
                return v.a.createElement(
                  G.a,
                  null,
                  v.a.createElement(D.b, { text: Y }),
                  t.length ? null : v.a.createElement(x.a, { header: ee, message: ne }),
                  t.map(function (e, t) {
                    var n = '/settings/applications/'.concat(e.app_id)
                    return v.a.createElement(N.a, {
                      description: e.organization ? te({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: n,
                      thumbnail: v.a.createElement(V.a, {
                        accessibilityLabel: '',
                        source: e.img_url,
                        style: ie.avatar,
                      }),
                    })
                  }),
                  e._renderSessionsDashboard(),
                )
              }),
              E()(u()(e), '_renderSession', function (e, t) {
                var n = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return v.a.createElement(j.a, {
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
                  return v.a.createElement(
                    k.a,
                    null,
                    v.a.createElement(
                      F.a,
                      { location: n, title: q },
                      v.a.createElement(R.a, {
                        accessibilityLabel: Q,
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
                    r = Object(L.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    o = a()(r, 2),
                    c = o[0],
                    i = o[1]
                  return n
                    ? v.a.createElement(
                        G.a,
                        null,
                        v.a.createElement(M.a, null),
                        v.a.createElement(D.b, { text: X }),
                        c[0] ? this._renderSession(c[0], !1) : null,
                        v.a.createElement(_.a, {
                          confirmationSheetConfirmButtonLabel: z,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: $,
                          confirmationSheetText: oe,
                          label: J,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        v.a.createElement(
                          I.a,
                          null,
                          v.a.createElement(
                            K.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: n > 1 ? re({ num: n - 1 }) : ae },
                            v.a.createElement(
                              H.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              K.a.j3223a5b({ learnMoreLabel: Z }),
                            ),
                          ),
                        ),
                        v.a.createElement(M.a, null),
                        i.map(function (t, r) {
                          return e._renderSession(t, n - 1 === r)
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      E()(ce, 'defaultProps', { applications: [], sessions: [] })
      var ie = U.a.create(function (e) {
        return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
      })
      t.default = T(ce)
    },
    'jm1/': function (e, t, n) {
      'use strict'
      n('uFXj')
      var r = n('rHpw').a.create(function (e) {
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
      t.a = r
    },
    jmcQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z',
              fill: '#EA4335',
            }),
            c.a.createElement('path', {
              d: 'M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z',
              fill: '#FBBC05',
            }),
            c.a.createElement('path', {
              d: 'M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z',
              fill: '#34A853',
            }),
            c.a.createElement('path', {
              d: 'M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z',
              fill: '#4285F4',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    mEn7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EmailScreen', function () {
          return z
        })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g = n('ERkP'),
        v = n.n(g),
        _ = n('vEo5'),
        S = n('1YZw'),
        O = n('P1r1'),
        w = n('rxPX'),
        C = n('0KEI'),
        P = Object(w.a)()
          .propsFromState(function () {
            return { emails: _.selectEmails, fetchStatus: _.selectFetchStatus }
          })
          .propsFromActions(function () {
            return {
              addToast: S.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_EMAIL_SCREEN',
              ),
              fetchDevices: _.fetchDevices,
              fetchSettings: O.e,
              resendConfirmationEmail: _.resendConfirmationEmail,
              updateEmail: _.updateEmail,
            }
          })
          .withAnalytics({ page: 'settings', section: 'email' }),
        A = n('v//M'),
        T = n('yoO3'),
        R = n('VIKJ'),
        k = n('7FtF'),
        L = n('MWbm'),
        j = n('p+r5'),
        I = n('0yYu'),
        F = n('jtO7'),
        D = n('atVN'),
        x = n('t62R'),
        N = n('3XMw'),
        M = n.n(N)
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var U = M.a.i2209530,
        B = M.a.ebeeac1a,
        K = M.a.dc013356,
        V = M.a.ea28c7ce,
        G = M.a.f3f66251,
        W = M.a.i5107de3,
        Y = M.a.d19fd429,
        X = M.a.g4da3245,
        z = (function (e) {
          d()(n, e)
          var t = H(n)
          function n(e, r) {
            var o
            return (
              c()(this, n),
              (o = t.call(this, e, r)),
              E()(u()(o), '_render', function () {
                var e,
                  t,
                  n = o.props.emails,
                  r = Object(R.a)(n, function (e) {
                    return e.email_verified
                  }),
                  c = a()(r, 2),
                  i = c[0],
                  s = c[1],
                  l = null === (e = i[0]) || void 0 === e ? void 0 : e.email,
                  u = null === (t = s[0]) || void 0 === t ? void 0 : t.email
                return v.a.createElement(
                  L.a,
                  null,
                  l
                    ? v.a.createElement(j.a, {
                        defaultValue: l,
                        editable: !1,
                        label: K,
                        name: 'current_email',
                        type: 'email',
                      })
                    : null,
                  u ? o._renderUnverifiedEmailMessage(u) : null,
                  v.a.createElement(I.a, null),
                  v.a.createElement(F.a, { color: 'primary', label: n.length ? W : G, link: '/i/flow/add_email' }),
                )
              }),
              E()(u()(o), '_renderUnverifiedEmailMessage', function (e) {
                return v.a.createElement(
                  D.a,
                  null,
                  v.a.createElement(
                    x.b,
                    { color: 'gray700' },
                    v.a.createElement(
                      M.a.I18NFormatMessage,
                      { $i18n: 'f3c4e2c5', unverifiedEmail: e },
                      v.a.createElement(
                        x.b,
                        { accessibilityRole: 'button', color: 'link', onClick: o._handleResendVerification },
                        M.a.h021352e({ resendConfirmationLabel: Y }),
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
                  return t({ text: X })
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
                    r = n.createLocalApiErrorHandler,
                    a = n.fetchSettings
                  return (
                    this._previousPath !== location.pathname &&
                      this._initialPath === location.pathname &&
                      (this._handleFetchDevices(), a().catch(r())),
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
                  return v.a.createElement(
                    k.a,
                    { location: n, submitDisabled: !this.state.email, submitLabel: U, title: B },
                    v.a.createElement(
                      T.a,
                      null,
                      v.a.createElement(A.a, {
                        accessibilityLabel: V,
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
        })(v.a.Component)
      t.default = P(z)
    },
    oWwl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PushNotificationsScreen', function () {
          return de
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('MvUL'), n('KqXw'), n('kPZX')),
        E = n('ERkP'),
        g = n.n(E),
        v = n('zh9S'),
        _ = n('vEo5'),
        S = n('1YZw'),
        O = n('hqKg'),
        w = n('auX9'),
        C = n('G6rE'),
        P = n('0KEI'),
        A = n('oEGd'),
        T = Object(O.createSelector)(
          _.selectPushSettingsFetchStatus,
          function (e) {
            var t = C.e.selectLoggedInUser(e)
            return t && t.verified
          },
          _.selectBrowserPushStatus,
          _.selectPushSettings,
          _.selectPushTemplate,
          w.j,
          function (e, t, n, r, a, o) {
            return {
              fetchStatus: e,
              isVerified: t,
              pushStatus: n,
              pushSettings: r,
              pushTemplate: a,
              hasMultiAccount: o && o.length > 0,
            }
          },
        ),
        R = {
          addToast: S.b,
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_NOTIFICATIONS_PUSH_SCREEN',
          ),
          fetchPushSettingsIfNeeded: _.fetchPushSettingsIfNeeded,
          googleAnalyticsPageView: v.a,
          pushSubscribe: _.pushSubscribe,
          removePushDeviceIfSubscribed: _.removePushDeviceIfSubscribed,
          scribeAction: v.c,
          scribePageImpression: v.d,
          updatePushNotificationSettings: _.updatePushNotificationSettings,
        },
        k = Object(A.g)(T, R),
        L = n('kGix'),
        j = n('v//M'),
        I = n('3XMw'),
        F = n.n(I),
        D = (n('z84I'), n('ho0z'), n('SrIh')),
        x = n('0yYu'),
        N = n('6vad'),
        M = n('Y3cQ'),
        H = n('cCdp')
      function U(e, t) {
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
            ? U(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var V = F.a.b40d0145,
        G = F.a.b68050dc,
        W = (function (e) {
          u()(n, e)
          var t = K(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.onChange,
                    c = a.scribeAction,
                    i = a.scribeNamespace,
                    s = y()({}, n, r)
                  c(B(B({}, i), {}, { component: t, action: r })), o(s)
                }
              }),
              y()(s()(e), '_handleBooleanChanged', function (t) {
                return function (n, r) {
                  e._handleSettingChanged(t)(n, r ? 'on' : 'off')
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.currentSettings,
                    r = t.isVerified,
                    a = t.template.template.settings
                  return a.length
                    ? g.a.createElement(
                        'div',
                        null,
                        a.map(function (t, a) {
                          return g.a.createElement(
                            'div',
                            { key: a },
                            t.section_header
                              ? g.a.createElement(
                                  g.a.Fragment,
                                  null,
                                  g.a.createElement(x.a, null),
                                  g.a.createElement(N.b, { text: t.section_header }),
                                )
                              : null,
                            t.section_entries.map(function (t, a) {
                              if ('vit-only' === t.vit && !r) return null
                              if ('vit-off' === t.vit && r) return null
                              switch (t.control_type) {
                                case 'list':
                                  var o = t.selections.map(function (e) {
                                    var t = Object.keys(e)[0]
                                    return { label: e[t], value: t }
                                  })
                                  return (
                                    o.push({ label: t.off_description, value: 'off' }),
                                    g.a.createElement(M.a, {
                                      key: t.id,
                                      label: t.name,
                                      name: t.id,
                                      onChange: e._handleSettingChanged(t.scribe_component),
                                      options: o,
                                      value: n[t.id],
                                    })
                                  )
                                case 'tweet_control':
                                  var c = n[t.id] && 'on' === n[t.id]
                                  return g.a.createElement(H.a, {
                                    checked: c,
                                    helpText: V,
                                    key: t.id,
                                    label: t.name,
                                    learnMoreLabel: G,
                                    learnMoreLink: '/settings/device_follow',
                                    name: t.id,
                                    onChange: e._handleBooleanChanged(t.scribe_component),
                                  })
                                case 'on_off':
                                  var i = n[t.id] && 'on' === n[t.id]
                                  return g.a.createElement(H.a, {
                                    checked: i,
                                    key: t.id,
                                    label: t.name,
                                    name: t.id,
                                    onChange: e._handleBooleanChanged(t.scribe_component),
                                  })
                                default:
                                  return Object(D.a)('Unsupported control type: '.concat(t.control_type)), null
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
        })(g.a.Component),
        Y = n('7FtF'),
        X = n('FIs5')
      function z(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Z(e) {
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
      var Q = F.a.hee41732,
        J = F.a.dcef34ab,
        $ = F.a.a39f706d,
        ee = F.a.hee41732,
        te = F.a.bb443ca5,
        ne = F.a.cdce0394,
        re = F.a.b39bcae1,
        ae = F.a.e542c362,
        oe = F.a.fe11b3e9,
        ce = F.a.a1245d3a,
        ie = F.a.f580c738,
        se = F.a.i4ac9969,
        le = F.a.d8f69f09,
        ue = { page: 'settings', section: 'push_notifications' },
        fe = function () {
          return b.e() === b.a.APK_PUSH
        },
        de = (function (e) {
          u()(n, e)
          var t = Z(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.isVerified,
                  r = t.pushSettings,
                  a = t.pushStatus,
                  o = t.pushTemplate,
                  c = t.scribeAction,
                  i = 'denied' === b.d()
                if (a.subscribed)
                  return g.a.createElement(W, {
                    currentSettings: r,
                    isVerified: n,
                    onChange: e._handleSettingsChanged,
                    scribeAction: c,
                    scribeNamespace: ue,
                    template: o,
                  })
                if (i) {
                  var s = fe() ? le : se
                  return g.a.createElement(X.a, { header: ie, message: s })
                }
                return a.supported
                  ? g.a.createElement(X.a, {
                      buttonText: J,
                      header: re,
                      message: ae,
                      onButtonPress: e._handlePushSubscribe,
                    })
                  : g.a.createElement(X.a, { header: oe, message: ce })
              }),
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchPushSettingsIfNeeded)().catch(n())
              }),
              y()(s()(e), '_handleSettingsChanged', function (t) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.updatePushNotificationSettings)(t).catch(r({ showToast: !0 }))
              }),
              y()(s()(e), '_handleSwitchChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler,
                  o = r.pushSubscribe,
                  c = r.removePushDeviceIfSubscribed,
                  i = r.scribeAction
                n
                  ? (i(q(q({}, ue), {}, { action: 'enable' })), o().catch(a()))
                  : (i(q(q({}, ue), {}, { action: 'disable' })), c().catch(a({ showToast: !0 })))
              }),
              y()(s()(e), '_handlePushSubscribe', function () {
                e.props.scribeAction(q(q({}, ue), {}, { element: 'soft_prompt', action: 'click' })),
                  e.props.pushSubscribe()
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  ;(0, e.scribePageImpression)(ue), t(ue)
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function (e) {
                  e.fetchStatus === L.a.LOADED &&
                    !1 === b.g() &&
                    (this.props.addToast({ text: $ }), e.history.replace('/settings')),
                    e.fetchStatus === L.a.LOADED &&
                      !e.pushStatus.subscribed &&
                      e.pushStatus.supported &&
                      this.props.scribeAction(q(q({}, ue), {}, { element: 'soft_prompt', action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.hasMultiAccount,
                    r = e.location,
                    a = e.pushStatus,
                    o =
                      !fe() && a.supported
                        ? g.a.createElement(H.a, {
                            checked: a.subscribed,
                            helpText: te + (n ? ' '.concat(ne) : ''),
                            key: 'switchAll',
                            label: ee,
                            name: 'switchAll',
                            onChange: this._handleSwitchChanged,
                            type: 'switch',
                          })
                        : null
                  return g.a.createElement(
                    Y.a,
                    { location: r, title: Q },
                    o,
                    g.a.createElement(j.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.default = k(de)
    },
    oX5A: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'disableLoginVerificationLabel', function () {
          return G
        }),
        n.d(t, 'disableLabel', function () {
          return Y
        }),
        n.d(t, 'oldDisableMethodLabel', function () {
          return X
        }),
        n.d(t, 'LoginVerificationScreen', function () {
          return Le
        })
      n('OZaJ')
      var r,
        a,
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        f = n('5Yy7'),
        d = n.n(f),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        b = n('KEM+'),
        E = n.n(b),
        g = (n('yH/f'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('z84I'), n('ERkP')),
        v = n.n(g),
        _ = n('k49u'),
        S = n('wvRX'),
        O = n('rxPX'),
        w = n('0KEI'),
        C = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: S.f, loginVerificationSettings: S.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LOGIN_VERIFICATION_SCREEN',
              ),
              deleteSecurityKey: S.a,
              disableLoginVerification: S.b,
              disableLoginVerificationMethod: S.c,
              enrollIn2FA: S.d,
              fetchLoginVerificationSettings: S.e,
            }
          }),
        P = n('v//M'),
        A = n('3XMw'),
        T = n.n(A),
        R = n('N9bX'),
        k = n('yoO3'),
        L = n('7FtF'),
        j = n('eb3s'),
        I = n('6vad'),
        F = n('cCdp'),
        D = n('jtO7'),
        x = n('csss'),
        N = n('0yYu'),
        M = n('v6aA'),
        H = n('7JQg')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var B = T.a.bc262c2d,
        K = T.a.hc1a91da,
        V = T.a.gee4dc74,
        G = T.a.b39c7b14,
        W = T.a.a923fce6,
        Y = T.a.ff781e0a,
        X = T.a.c557ac30,
        z = T.a.d1334649,
        q = T.a.ee3a7bf9,
        Z = T.a.aa9139cc,
        Q = T.a.i0d4f09e,
        J = T.a.a219e217,
        $ = T.a.e0d79de8,
        ee = T.a.ja6bbfa0,
        te = T.a.dd703318,
        ne = T.a.i859a9d3,
        re = T.a.c2570921,
        ae = T.a.f3820211,
        oe = T.a.ab61b41a,
        ce = T.a.h4787492,
        ie = T.a.h6d0d89c,
        se = T.a.f57be1cc,
        le = T.a.e2b81a1f,
        ue = T.a.cd195528,
        fe = T.a.b1686800,
        de = T.a.a1860ee7,
        pe = T.a.j45a2856,
        he = T.a.d8612d9c,
        me = T.a.e13d4467,
        ye = T.a.j24c37b2,
        be = T.a.c1d96d6a,
        Ee = T.a.gf91694d,
        ge = T.a.a219e217,
        ve = T.a.j265ddb6,
        _e = T.a.a136ecac,
        Se = T.a.fc2a5c92,
        Oe = T.a.d7bfde1a,
        we = 'two_factor',
        Ce = 'Sms',
        Pe = 'Totp',
        Ae = 'U2fSecurityKey',
        Te =
          ((r = {}),
          E()(r, we, 'two_factor'),
          E()(r, Ce, 'two_factor_auth_sms'),
          E()(r, Pe, 'two_factor_auth_totp'),
          E()(r, Ae, 'two_factor_auth_u2f_security_key'),
          r),
        Re =
          ((a = {}),
          E()(a, Ce, '/i/flow/two-factor-sms-enrollment'),
          E()(a, Pe, '/i/flow/two-factor-auth-app-enrollment'),
          E()(a, Ae, '/i/flow/two-factor-security-key-enrollment'),
          a),
        ke = Object.freeze({
          NONE: 'NONE',
          VERIFY_EMAIL: 'verify_email',
          METHOD: 'method',
          ROOT_SETTING: 'root_setting',
          ENABLE_LOGIN_VERIFICATION: 'enable_login_verification',
          MAX_SECURITY_KEY_LIMIT_REACHED: 'max_security_key_limit_reached',
          STANDALONE_SECURITY_KEY: 'standalone_security_key',
          SUSPENDED: 'suspended',
        }),
        Le = (function (e) {
          d()(n, e)
          var t = U(n)
          function n(e, r) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, r)),
              E()(u()(a), '_initialPath', window.location.pathname),
              E()(u()(a), '_previousPath', a._initialPath),
              E()(u()(a), '_render', function () {
                var e = a.props.loginVerificationSettings.isOldPushUser
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  e ? a._renderLegacyPush2FASettings() : a._render2FASettings(),
                  a.state.confirmationType !== ke.NONE ? a._renderConfirmationSheet() : null,
                )
              }),
              E()(u()(a), '_renderConfirmationSheet', function () {
                switch (a.state.confirmationType) {
                  case ke.ROOT_SETTING:
                    return v.a.createElement(j.a, {
                      confirmButtonLabel: q,
                      headline: Y,
                      onCancel: a._handleCloseConfirmation,
                      onConfirm: a._handleConfirmDisableLoginVerification,
                      text: W,
                    })
                  case ke.METHOD:
                    return v.a.createElement(j.a, {
                      confirmButtonLabel: q,
                      headline: Y,
                      onCancel: a._handleCloseConfirmation,
                      onConfirm: a._handleConfirmDisableMethod,
                      text: z,
                    })
                  case ke.VERIFY_EMAIL:
                    return v.a.createElement(j.a, {
                      cancelButtonLabel: ne,
                      cancelButtonLink: 'https://help.twitter.com/managing-your-account/cant-confirm-my-email-address',
                      confirmButtonLabel: ge,
                      headline: ve,
                      onCancel: a._handleCloseConfirmation,
                      onConfirm: a._handleCloseConfirmation,
                      text: _e,
                    })
                  case ke.ENABLE_LOGIN_VERIFICATION:
                    return v.a.createElement(j.a, {
                      confirmButtonLabel: ye,
                      headline: he,
                      onConfirm: a._handleCloseConfirmation,
                      text: me,
                      withCancelButton: !1,
                    })
                  case ke.MAX_SECURITY_KEY_LIMIT_REACHED:
                    return v.a.createElement(j.a, {
                      confirmButtonLabel: ye,
                      headline: be,
                      onConfirm: a._handleCloseConfirmation,
                      text: Ee,
                      withCancelButton: !1,
                    })
                  case ke.STANDALONE_SECURITY_KEY:
                    return v.a.createElement(j.a, {
                      confirmButtonLabel: J,
                      onConfirm: a._handleCloseConfirmation,
                      text: $,
                      withCancelButton: !1,
                    })
                  case ke.SUSPENDED:
                    return v.a.createElement(j.a, {
                      confirmButtonLabel: ye,
                      headline: Se,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/suspended-twitter-accounts',
                      learnMoreText: ne,
                      onConfirm: a._handleCloseConfirmation,
                      text: Oe,
                      withCancelButton: !1,
                    })
                  default:
                    return null
                }
              }),
              E()(u()(a), '_handleRetry', function () {
                a.props.fetchLoginVerificationSettings()
              }),
              E()(u()(a), '_handleTwoFactorEnrollmentChange', function (e, t) {
                if (t) {
                  var n = a.props,
                    r = n.createLocalApiErrorHandler
                  ;(0, n.enrollIn2FA)({ flow: we }).catch(r(a._enrollmentErrorHandlingMap))
                } else a._showDisableLoginVerificationConfirmation()
              }),
              E()(u()(a), '_handleTwoFactorMethodsChange', function (e, t) {
                var n = a.props.createLocalApiErrorHandler
                t
                  ? a._isOcf2faEnrollmentEnabled
                    ? a.props.history.push({ pathname: Re[e] })
                    : (0, a.props.enrollIn2FA)({ flow: Te[e] }).catch(n(a._enrollmentErrorHandlingMap))
                  : a._showDisableMethodConfirmation(e)
              }),
              E()(u()(a), '_handleAddSecurityKey', function () {
                var e = a.props.loginVerificationSettings.methods
                e[Ae] && e[Ae].length >= R.a
                  ? a.setState({ confirmationType: ke.MAX_SECURITY_KEY_LIMIT_REACHED })
                  : a._handleTwoFactorMethodsChange(Ae, !0)
              }),
              E()(u()(a), '_showDisableLoginVerificationConfirmation', function () {
                a.setState({ confirmationType: ke.ROOT_SETTING })
              }),
              E()(u()(a), '_handleConfirmDisableLoginVerification', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.disableLoginVerification
                a._handleCloseConfirmation(), n().catch(t())
              }),
              E()(u()(a), '_showStandaloneSecurityKeyNotification', function () {
                a.setState({ confirmationType: ke.STANDALONE_SECURITY_KEY })
              }),
              E()(u()(a), '_showDisableMethodConfirmation', function (e) {
                ;(e !== Ce && e !== Pe && e !== Ae) || a.setState({ confirmationType: ke.METHOD, method: e })
              }),
              E()(u()(a), '_handleConfirmDisableMethod', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteSecurityKey,
                  r = e.disableLoginVerificationMethod,
                  o = e.loginVerificationSettings.methods,
                  c = a.state.method
                if ((a._handleCloseConfirmation(), c === Ae && Array.isArray(o[Ae]) && o[Ae].length))
                  Promise.all(
                    o[Ae].map(function (e) {
                      return n({ securityKeyId: e.id })
                    }),
                  ).catch(t(a._disableMethodErrorHandlingMap))
                else if (c) {
                  var i = c !== Ae && !(Ce in o && Pe in o) && Array.isArray(o[Ae]) && 1 === o[Ae].length
                  r({ method: c })
                    .then(function () {
                      a._isStandaloneSecurityKeyEnabled && i && a._showStandaloneSecurityKeyNotification()
                    })
                    .catch(t(a._disableMethodErrorHandlingMap))
                }
              }),
              E()(u()(a), '_showVerifyEmailConfirmation', function () {
                a.setState({ confirmationType: ke.VERIFY_EMAIL })
              }),
              E()(u()(a), '_showEnableLoginVerificationConfirmation', function () {
                a.setState({ confirmationType: ke.ENABLE_LOGIN_VERIFICATION })
              }),
              E()(u()(a), '_showSuspendedConfirmation', function () {
                a.setState({ confirmationType: ke.SUSPENDED })
              }),
              E()(u()(a), '_handleCloseConfirmation', function () {
                a.setState({ confirmationType: ke.NONE, method: void 0 })
              }),
              E()(u()(a), '_isChecked', function (e) {
                var t = a.props.loginVerificationSettings.methods[e]
                return Array.isArray(t) ? t.length > 0 : !!t
              }),
              E()(u()(a), '_createEnrollmentErrorHandlingMap', function () {
                var e,
                  t = a.props.history
                return (
                  (e = {}),
                  E()(e, _.a.AccessDeniedByBouncer, {
                    customAction: function (e) {
                      var n = e.bounce_location
                      n &&
                        t.push({
                          state: { bounce_location: n },
                          pathname: '/settings/account/login_verification/enrollment',
                        })
                    },
                  }),
                  E()(e, _.a.CannotEnableLoginVerificationUnconfirmedEmail, {
                    customAction: function () {
                      a._showVerifyEmailConfirmation()
                    },
                  }),
                  E()(e, _.a.CannotEnrollLoginVerificationNotYetEnabled, {
                    customAction: function () {
                      a._showEnableLoginVerificationConfirmation()
                    },
                  }),
                  E()(e, _.a.CurrentUserSuspended, {
                    customAction: function () {
                      a._showSuspendedConfirmation()
                    },
                  }),
                  e
                )
              }),
              (a.state = { confirmationType: ke.NONE, method: void 0 }),
              (a._disableMethodErrorHandlingMap = E()({}, _.a.IneligibleFor2faAfterModification, {
                customAction: function () {
                  a._showDisableLoginVerificationConfirmation()
                },
              })),
              (a._enrollmentErrorHandlingMap = a._createEnrollmentErrorHandlingMap()),
              (a._isStandaloneSecurityKeyEnabled = a.context.featureSwitches.isTrue(
                'account_2fa_standalone_security_key_enabled',
              )),
              (a._isOcf2faEnrollmentEnabled = a.context.featureSwitches.isTrue('ocf_2fa_enrollment_enabled')),
              a
            )
          }
          return (
            s()(n, [
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
                  return v.a.createElement(
                    k.a,
                    null,
                    v.a.createElement(
                      L.a,
                      { location: n, title: te },
                      v.a.createElement(P.a, {
                        accessibilityLabel: ee,
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
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(I.b, { text: te }),
                    v.a.createElement(F.a, {
                      checked: e && this._isChecked(Ce),
                      helpText: ae,
                      label: re,
                      name: Ce,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    v.a.createElement(F.a, {
                      checked: e && this._isChecked(Pe),
                      helpText: ce,
                      label: oe,
                      name: Pe,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    v.a.createElement(F.a, {
                      checked: e && this._isChecked(Ae),
                      helpText: this.context.featureSwitches.isTrue('responsive_web_new_copy_security_key_2fa_enabled')
                        ? le
                        : se,
                      label: ie,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
                      name: Ae,
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
                  return null !== (e = this.props.loginVerificationSettings.methods[Ae]) && void 0 !== e && e.length
                    ? this._isOcf2faEnrollmentEnabled
                      ? v.a.createElement(D.a, {
                          align: 'left',
                          color: 'primary',
                          label: fe,
                          link: { pathname: '/settings/account/login_verification/security_keys' },
                        })
                      : v.a.createElement(
                          v.a.Fragment,
                          null,
                          v.a.createElement(x.a, {
                            label: fe,
                            link: { pathname: '/settings/account/login_verification/security_keys' },
                          }),
                          v.a.createElement(D.a, {
                            align: 'left',
                            color: 'primary',
                            label: ue,
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
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(F.a, {
                      checked: e,
                      helpText: Q,
                      label: Z,
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
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(N.a, null),
                    v.a.createElement(I.b, { text: B }),
                    v.a.createElement(x.a, {
                      description: V,
                      label: K,
                      link: '/settings/account/login_verification/backup_code',
                    }),
                    v.a.createElement(x.a, {
                      description: pe,
                      label: de,
                      link: '/settings/account/login_verification/temporary_password',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      E()(Le, 'contextType', M.a)
      t.default = Object(H.c)({ page: 'settings', section: 'loginVerification' })(C(Le))
    },
    oXNP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SecurityKeysScreen', function () {
          return W
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('z84I'), n('ho0z'), n('ERkP')),
        E = n.n(b),
        g = n('k49u'),
        v = n('wvRX'),
        _ = n('rxPX'),
        S = n('0KEI'),
        O = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: v.f, loginVerificationSettings: v.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SECURITY_KEYS_SCREEN',
              ),
              enrollIn2FA: v.d,
              fetchLoginVerificationSettings: v.e,
            }
          }),
        w = n('v//M'),
        C = n('3XMw'),
        P = n.n(C),
        A = n('N9bX'),
        T = n('5FtR'),
        R = n('7FtF'),
        k = n('xHsv'),
        L = n('eb3s'),
        j = n('csss'),
        I = n('t62R'),
        F = n('jtO7'),
        D = n('v6aA')
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
      var N = P.a.j24c37b2,
        M = P.a.c1d96d6a,
        H = P.a.gf91694d,
        U = P.a.b1686800,
        B = P.a.f7954a0c,
        K = P.a.h69986c1,
        V = P.a.i5896ba2,
        G = P.a.a8ef2b64,
        W = (function (e) {
          u()(n, e)
          var t = x(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_initialPath', window.location.pathname),
              y()(s()(o), '_previousPath', o._initialPath),
              y()(s()(o), '_renderContent', function () {
                var e = o.props,
                  t = e.location,
                  n = e.loginVerificationSettings.methods
                return !(!n.U2fSecurityKey || !n.U2fSecurityKey.length)
                  ? E.a.createElement(
                      R.a,
                      { location: t, title: U },
                      E.a.createElement(k.a, { description: K }),
                      o._renderU2fSecurityKeys(),
                      o.state.showMaxKeyLimitConfirmation ? o._renderMaxKeyLimitConfirmation() : null,
                    )
                  : E.a.createElement(T.a, { to: '/settings/account/login_verification' })
              }),
              y()(s()(o), '_renderMaxKeyLimitConfirmation', function () {
                return E.a.createElement(L.a, {
                  confirmButtonLabel: N,
                  headline: M,
                  onConfirm: o._handleCloseConfirmation,
                  text: H,
                  withCancelButton: !1,
                })
              }),
              y()(s()(o), '_fetchLoginVerificationSettings', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchLoginVerificationSettings)().catch(t())
              }),
              y()(s()(o), '_handleAddSecurityKey', function () {
                var e = o.props.loginVerificationSettings.methods
                Array.isArray(e.U2fSecurityKey) && e.U2fSecurityKey.length >= A.a
                  ? o.setState({ showMaxKeyLimitConfirmation: !0 })
                  : o._handleKeyEnroll()
              }),
              y()(s()(o), '_handleKeyEnroll', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.enrollIn2FA,
                  r = e.history
                o._isOcf2faEnrollmentEnabled
                  ? r.push({ pathname: '/i/flow/two-factor-security-key-enrollment' })
                  : n({ flow: 'two_factor_auth_u2f_security_key' }).catch(t(o._enrollmentErrorHandlingMap))
              }),
              y()(s()(o), '_handleCloseConfirmation', function () {
                o.setState({ showMaxKeyLimitConfirmation: !1 })
              }),
              y()(s()(o), '_handleFetchRetry', function () {
                return o._fetchLoginVerificationSettings()
              }),
              (o.state = { showMaxKeyLimitConfirmation: !1 }),
              (o._enrollmentErrorHandlingMap = o._createEnrollmentErrorHandlingMap()),
              (o._isOcf2faEnrollmentEnabled = o.context.featureSwitches.isTrue('ocf_2fa_enrollment_enabled')),
              o
            )
          }
          return (
            c()(n, [
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
                  return E.a.createElement(w.a, {
                    accessibilityLabel: B,
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
                          return E.a.createElement(j.a, {
                            key: e.id,
                            label: E.a.createElement(I.b, null, e.name || '('.concat(G, ')')),
                            link: { pathname: '/settings/account/login_verification/security_keys/'.concat(e.id) },
                          })
                        }),
                        E.a.createElement(F.a, {
                          align: 'left',
                          color: 'primary',
                          label: V,
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
                  return y()({}, g.a.AccessDeniedByBouncer, {
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
      y()(W, 'contextType', D.a)
      var Y = O(W)
      t.default = Y
    },
    q1AG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ScreenNameScreen', function () {
          return W
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ERkP'),
        E = n.n(b),
        g = n('P1r1'),
        v = n('LXAX'),
        _ = n('G6rE'),
        S = n('rxPX'),
        O = n('0KEI'),
        w = Object(S.a)()
          .propsFromState(function () {
            return { loggedInUser: _.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              clearUsernameAvailability: v.a,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SCREEN_NAME_SCREEN',
              ),
              updateSettings: g.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'screen_name' }),
        C = n('3XMw'),
        P = n.n(C),
        A = n('yoO3'),
        T =
          (n('ho0z'),
          n('z84I'),
          n('LW0h'),
          Object(S.a)()
            .propsFromState(function () {
              return { loggedInUser: _.e.selectLoggedInUser, usernameData: v.c }
            })
            .adjustStateProps(function (e) {
              var t = e.loggedInUser,
                n = e.usernameData
              return {
                loggedInUser: t,
                suggestions: (n.suggestions
                  ? n.suggestions.map(function (e) {
                      return e.suggestion
                    })
                  : []
                ).filter(function (e) {
                  return e !== n.username
                }),
                valid: n.valid,
                validatedScreenName: n.username,
                validationError: n.desc,
              }
            })
            .propsFromActions(function () {
              return { fetchUsernameAvailability: v.b }
            })),
        R = n('VY6S'),
        k = n('MWbm'),
        L = n('t62R'),
        j = n('p+r5'),
        I = n('0yYu'),
        F = n('6vad'),
        D = n('rHpw')
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
      var N = P.a.d1f6d336,
        M = P.a.de65c756,
        H = (function (e) {
          u()(n, e)
          var t = x(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              y()(s()(r), '_fetchUsernameStatus', function (e) {
                var t = r.props,
                  n = t.fetchUsernameAvailability,
                  a = t.loggedInUser
                a &&
                  n({ email: a.email && a.email[0] && a.email[0].address, full_name: a.name, suggest: !0, username: e })
              }),
              y()(s()(r), '_handleTypedFieldChange', function (e) {
                var t = r.props.onScreenNameChanged
                r._fetchUsernameStatusDebounced(e.target.value),
                  r.setState({ value: e.target.value }),
                  t(e.target.value)
              }),
              y()(s()(r), '_handleItemSelect', function (e) {
                var t = r.props.onScreenNameChanged
                if (e.target instanceof Node) {
                  var n = e.target.textContent
                  r.setState({ value: n }), t(n)
                }
              }),
              (r.state = { value: e.loggedInUser && e.loggedInUser.screen_name }),
              (r._fetchUsernameStatusDebounced = Object(R.a)(function () {
                var e
                return (e = r)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              r
            )
          }
          return (
            c()(n, [
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
                    L.b,
                    {
                      accessibilityRole: 'button',
                      color: 'link',
                      key: t,
                      onPress: this._handleItemSelect,
                      style: U.altOptionText,
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
                    r = t.suggestions,
                    a = t.valid,
                    o = t.validatedScreenName,
                    c = t.validationError
                  if (!n) return null
                  var i = !(o === n.screen_name || a || !c)
                  return E.a.createElement(
                    k.a,
                    null,
                    E.a.createElement(j.a, {
                      autoComplete: 'off',
                      autoCorrect: !1,
                      errorText: c,
                      invalid: i,
                      label: N,
                      name: 'typedScreenName',
                      onChange: this._handleTypedFieldChange,
                      spellCheck: 'false',
                      value: this.state.value,
                    }),
                    E.a.createElement(I.a, null),
                    E.a.createElement(F.b, { text: M }),
                    E.a.createElement(
                      k.a,
                      { style: U.container },
                      r.map(function (t, n) {
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
        U = D.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            altOptionText: { display: 'block', paddingVertical: e.spaces.space12 },
          }
        }),
        B = T(H),
        K = n('7FtF')
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
      var G = P.a.je506a60,
        W = (function (e) {
          u()(n, e)
          var t = V(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              y()(s()(r), '_handleCancel', function () {
                r.props.history.goBack({ backLocation: '/settings' })
              }),
              y()(s()(r), '_handleSubmit', function () {
                var e = r.props,
                  t = e.clearUsernameAvailability,
                  n = e.createLocalApiErrorHandler,
                  a = e.updateSettings,
                  o = r.state.screenName
                o &&
                  (t({ persistSuggestions: !0 }),
                  a({ screen_name: o })
                    .then(function () {
                      t({ persistSuggestions: !1 }), r._handleCancel()
                    })
                    .catch(n({ showToast: !0 })))
              }),
              y()(s()(r), '_handleScreenNameChange', function (e) {
                r.setState({ screenName: e })
              }),
              (r.state = { screenName: void 0 }),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.loggedInUser,
                    r = this.state.screenName,
                    a = r && n && r !== n.screen_name
                  return E.a.createElement(
                    A.a,
                    null,
                    E.a.createElement(
                      K.a,
                      { location: t, onSubmit: this._handleSubmit, submitDisabled: !a, title: G },
                      E.a.createElement(B, { onScreenNameChanged: this._handleScreenNameChange }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      t.default = w(W)
    },
    'qYi+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('ho0z'), n('1t7P'), n('jQ/y'), n('uFXj'), n('ERkP')),
        E = n.n(b),
        g = n('zfvc'),
        v = n('t62R'),
        _ = n('fyvP'),
        S = n('rHpw'),
        O = n('CK8+'),
        w = n('MWbm')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var P = 1,
        A = (function (e) {
          u()(n, e)
          var t = C(n)
          function n() {
            var e
            return (
              a()(this, n),
              (e = t.call(this)),
              y()(s()(e), '_handleGateToggle', function () {
                var t = e.props,
                  n = t.defaultOption,
                  r = t.name,
                  a = t.offValue,
                  o = t.onChange,
                  c = t.options
                o(r, t.value === a ? (null == n ? void 0 : n.value) || c[0].value : a)
              }),
              y()(s()(e), '_handleAnimationComplete', function () {
                e._radioGroupRef && e._radioGroupRef.focus()
              }),
              y()(s()(e), '_setRadioGroupRef', function (t) {
                e._radioGroupRef = t
              }),
              (e._labelId = 'RADIO_GROUP_'.concat(P, '_LABEL')),
              (P += 1),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.description,
                    r = e.disabled,
                    a = e.label,
                    o = e.name,
                    c = e.offValue,
                    i = e.onChange,
                    s = e.options,
                    l = e.value
                  return E.a.createElement(
                    w.a,
                    {
                      accessibilityLabel: t,
                      accessibilityLabelledBy: a && !t ? this._labelId : void 0,
                      accessibilityRole: 'group',
                      style: [T.root, r && T.disabled],
                    },
                    E.a.createElement(
                      E.a.Fragment,
                      null,
                      a
                        ? E.a.createElement(
                            w.a,
                            { accessibilityRole: 'label', nativeID: this._labelId, style: T.header },
                            E.a.createElement(
                              w.a,
                              { style: T.label },
                              E.a.createElement(v.b, { weight: 'bold' }, a),
                              E.a.createElement(O.a, {
                                disabled: r,
                                onValueChange: this._handleGateToggle,
                                value: l !== c,
                              }),
                            ),
                            n ? E.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, n) : null,
                          )
                        : null,
                      s &&
                        E.a.createElement(
                          g.b,
                          { onAnimateComplete: this._handleAnimationComplete, show: l !== c },
                          E.a.createElement(
                            w.a,
                            null,
                            E.a.createElement(
                              w.a,
                              { style: T.radioGroup, tabIndex: 0 },
                              E.a.createElement(_.a, {
                                accessibilityLabel: t || a,
                                disabled: r,
                                name: o,
                                onChange: i,
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
      y()(A, 'defaultProps', { disabled: !1 })
      var T = S.a.create(function (e) {
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
    's+x+': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ManageSecurityKeyScreen', function () {
          return V
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('WNMA'), n('KqXw'), n('hBpG'), n('ho0z'), n('Blm6'), n('ERkP')),
        E = n.n(b),
        g = n('wvRX'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: g.f, loginVerificationSettings: g.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_MANAGE_SECURITY_KEY_SCREEN',
              ),
              fetchLoginVerificationSettings: g.e,
            }
          }),
        O = n('v//M'),
        w = n('3XMw'),
        C = n.n(w),
        P = n('5FtR'),
        A = n('7FtF'),
        T = n('MWbm'),
        R = n('p+r5'),
        k = n('xHsv'),
        L = n('0yYu'),
        j = n('jtO7'),
        I = n('rHpw')
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
      var D = C.a.d4e220b3,
        x = C.a.g6d0f0b6,
        N = C.a.b894f68a,
        M = C.a.g2601bb5,
        H = C.a.b464b726,
        U = C.a.a4101e1b,
        B = C.a.a9f397f3,
        K = C.a.a8ef2b64,
        V = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_initialPath', window.location.pathname),
              y()(s()(e), '_previousPath', e._initialPath),
              y()(s()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.location,
                  r = t.loginVerificationSettings.methods.U2fSecurityKey,
                  a = t.match.params.securityKeyId,
                  o =
                    Array.isArray(r) &&
                    r.find(function (e) {
                      return e.id === a
                    }),
                  c = o && e._getSecurityKeyAddedDate(o.createdAtMs)
                return o
                  ? E.a.createElement(
                      A.a,
                      { location: n, title: x },
                      E.a.createElement(
                        T.a,
                        null,
                        E.a.createElement(R.a, {
                          defaultValue: o.name || '('.concat(K, ')'),
                          editable: !1,
                          label: D,
                          name: 'current_security_key',
                          style: G.formTextInput,
                        }),
                        E.a.createElement(
                          T.a,
                          { style: G.settingDescriptionCellContainer },
                          E.a.createElement(k.a, { description: U({ securityKeyAddedDate: c }) }),
                        ),
                        E.a.createElement(L.a, null),
                        E.a.createElement(j.a, {
                          color: 'primary',
                          label: M,
                          link: {
                            pathname: '/i/flow/rename-security-key',
                            query: { input_flow_data: JSON.stringify({ requested_variant: o.id }) },
                          },
                        }),
                        E.a.createElement(j.a, {
                          color: 'red500',
                          label: H,
                          link: {
                            pathname: '/i/flow/delete-security-key',
                            query: { input_flow_data: JSON.stringify({ requested_variant: o.id }) },
                          },
                        }),
                      ),
                    )
                  : E.a.createElement(P.a, { to: '/settings/account/login_verification' })
              }),
              y()(s()(e), '_fetchLoginVerificationSettings', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchLoginVerificationSettings)().catch(n())
              }),
              y()(s()(e), '_getSecurityKeyAddedDate', function (e) {
                if (e) {
                  var t = new Date(parseInt(e, 10))
                  return B(t)
                }
                return ''
              }),
              y()(s()(e), '_handleFetchRetry', function () {
                return e._fetchLoginVerificationSettings()
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  return E.a.createElement(O.a, {
                    accessibilityLabel: N,
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
        G = I.a.create(function (e) {
          return {
            formTextInput: { paddingBottom: 0 },
            settingDescriptionCellContainer: { paddingLeft: e.spaces.space12 },
          }
        }),
        W = S(V)
      t.default = W
    },
    tJyY: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('PFE4'),
        a = n('Rdmj'),
        o = n('3XMw'),
        c = n.n(o),
        i = c.a.hd7cb7cf,
        s = c.a.e9f1fbcb
      t.default = Object(a.a)({
        scribeNamespace: { page: 'blocked', section: 'auto_blocked_accounts' },
        blockType: r.a.AutoBlock,
        emptyStateTitle: s,
        emptyStateMessage: i,
      })
    },
    tfP1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PhoneScreen', function () {
          return Q
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = n('ERkP'),
        E = n.n(b),
        g = n('EPsT'),
        v = n('vEo5'),
        _ = n('wvRX'),
        S = n('1YZw'),
        O = n('P1r1'),
        w = n('rxPX'),
        C = n('0KEI'),
        P = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: v.selectFetchStatus, phones: v.selectPhoneNumbers, loginVerificationSettings: _.g }
          })
          .propsFromActions(function () {
            return {
              addToast: S.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PHONE_SCREEN',
              ),
              fetchDevices: v.fetchDevices,
              fetchSettings: O.e,
              removeDevice: v.removeDevice,
              fetchLoginVerificationSettings: _.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'phone' }),
        A = n('v//M'),
        T = n('3XMw'),
        R = n.n(T),
        k = n('yoO3'),
        L = n('7FtF'),
        j = n('MWbm'),
        I = n('p+r5'),
        F = n('0yYu'),
        D = n('jtO7'),
        x = n('v6aA')
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
      var M = R.a.cb841d55,
        H = R.a.dc013356,
        U = R.a.ce37ea43,
        B = R.a.ibaf239e,
        K = R.a.j2636557,
        V = { headline: R.a.e49b16d3, text: R.a.i931719e, confirmButtonLabel: R.a.d96cf7cd },
        G = R.a.j841d1f4,
        W = R.a.e49b16d3,
        Y = R.a.f0977f51,
        X = R.a.da23c5b6,
        z = R.a.hf186732,
        q = { headline: W, text: X, confirmButtonLabel: Y },
        Z = { headline: W, text: z, confirmButtonLabel: Y },
        Q = (function (e) {
          u()(n, e)
          var t = N(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), 'state', { awaitingPin: !1, phone: null, isPhoneValid: null, smsVerifyError: void 0 }),
              y()(s()(o), '_renderOCFPhone', function () {
                var e = o.props.phones,
                  t = e[0] && e[0].phone_number
                return E.a.createElement(
                  j.a,
                  null,
                  t
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(I.a, { defaultValue: t, editable: !1, label: H, name: 'current_phone' }),
                        E.a.createElement(F.a, null),
                      )
                    : null,
                  E.a.createElement(D.a, { color: 'primary', label: t ? B : U, link: '/i/flow/add_phone' }),
                  t ? o._renderDeleteButton() : null,
                )
              }),
              y()(s()(o), '_handleFetchDevices', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchDevices)().catch(t({ showToast: !0 }))
              }),
              y()(s()(o), '_handleGoBack', function () {
                o.props.history.goBack({ backLocation: '/settings' })
              }),
              y()(s()(o), '_handleRemove', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.createLocalApiErrorHandler,
                  r = e.fetchLoginVerificationSettings,
                  a = e.loginVerificationSettings,
                  c = a.methods,
                  i = a.twoFactorAuthEnabled,
                  s = e.phones,
                  l = e.removeDevice
                s[0] &&
                  l(s[0].phone_number).then(function () {
                    t({ text: G }), i && 'Sms' in c && r().catch(n()), o._handleGoBack()
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
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props,
                    r = n.createLocalApiErrorHandler,
                    a = n.fetchLoginVerificationSettings,
                    o = n.fetchSettings
                  return (
                    this._previousPath !== location.pathname &&
                      this._initialPath === location.pathname &&
                      (this._handleFetchDevices(), o().catch(r()), a().catch(r())),
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
                    k.a,
                    null,
                    E.a.createElement(
                      L.a,
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
                          ? Z
                          : q
                        : V
                  return E.a.createElement(g.a, {
                    confirmationSheetConfirmButtonLabel: n.confirmButtonLabel,
                    confirmationSheetConfirmButtonType: 'destructiveFilled',
                    confirmationSheetHeadline: n.headline,
                    confirmationSheetText: n.text,
                    label: K,
                    onConfirmationSheetConfirm: this._handleRemove,
                    withBottomBorder: !1,
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(Q, 'contextType', x.a)
      t.default = P(Q)
    },
    tvRM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emailSettingsLabels', function () {
          return le
        }),
        n.d(t, 'EmailNotificationsScreen', function () {
          return fe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('G6rE'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = (n('JtPf'), n('7x/C'), n('oEOe')),
        O = n('RqPI'),
        w = n('kGix'),
        C = n('XMGw'),
        P = n('Ssj5')
      function A(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R = ''.concat(C.a, '/email_notifications'),
        k = 'rweb/'.concat(R),
        L = S.a(k, 'FETCH_EMAIL_NOTIFICATIONS'),
        j = S.a(k, 'UPDATE_EMAIL_NOTIFICATIONS'),
        I = { emailSettings: {}, error: null, fetchStatus: w.a.NONE }
      function F() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case L.REQUEST:
            return T(T({}, e), {}, { fetchStatus: w.a.LOADING })
          case L.FAILURE:
            return T(T({}, e), {}, { error: t.payload, fetchStatus: w.a.FAILED })
          case L.SUCCESS:
            return T(T({}, e), {}, { emailSettings: t.payload, error: null, fetchStatus: w.a.LOADED })
          case j.SUCCESS:
            return T(
              T({}, e),
              {},
              { emailSettings: T(T({}, e.emailSettings), t.meta), error: null, fetchStatus: w.a.LOADED },
            )
          default:
            return e
        }
      }
      P.a.register(y()({}, R, F))
      var D = function (e) {
          return e[R].fetchStatus
        },
        x = function (e) {
          return e[R].emailSettings
        },
        N = function () {
          return function (e, t) {
            return D(t()) === w.a.LOADED ? Promise.resolve() : e(M())
          }
        },
        M = function () {
          return function (e, t, n) {
            var r = n.api,
              a = O.q(t())
            return S.b(e, { params: { userId: a }, request: r.EmailNotificationSettings.fetch })({
              actionTypes: L,
              context: 'FETCH_EMAIL_NOTIFICATIONS',
            })
          }
        },
        H = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = O.q(n())
            return S.c(t, { params: { userId: o, settings: e }, request: a.EmailNotificationSettings.update })({
              actionTypes: j,
              context: 'UPDATE_EMAIL_NOTIFICATIONS',
              meta: e,
            })
          }
        },
        U = function (e) {
          var t = g.e.selectLoggedInUser(e)
          return !(!t || !t.verified)
        },
        B = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: D, isVerified: U, emailSettings: x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_NOTIFICATIONS_EMAIL_SCREEN',
              ),
              fetchEmailSettingsIfNeeded: N,
              updateEmailSettings: H,
            }
          })
          .withAnalytics({ page: 'settings', section: 'email_notifications' }),
        K = n('45mF'),
        V =
          (n('yH/f'), Object.freeze({ Daily: 'Daily', Weekly: 'Weekly', Periodically: 'Periodically', None: 'None' })),
        G = n('v//M'),
        W = n('3XMw'),
        Y = n.n(W),
        X = n('yoO3'),
        z = n('7FtF'),
        q = n('MWbm'),
        Z = n('cCdp'),
        Q = n('Y3cQ'),
        J = n('0yYu'),
        $ = n('6vad')
      function ee(e, t) {
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
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ne(e) {
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
      function re(e) {
        return V[e] || 'None'
      }
      var ae = Y.a.e75f25a8,
        oe = Y.a.b2c4ab0a,
        ce = Y.a.ic2ea6b5,
        ie = Y.a.f823bbbe,
        se = Y.a.b47cc5f3,
        le = {
          send_twitter_emails: Y.a.e75f25a8,
          send_email_vit_weekly: Y.a.e8eb54af,
          send_network_activity_email: Y.a.ib80b0f1,
          send_new_direct_text_email: Y.a.i58a274b,
          send_shared_tweet_email: Y.a.b109e307,
          send_network_digest: Y.a.ddd34fa1,
          send_performance_digest: Y.a.b7ea9501,
          send_email_newsletter: Y.a.af38c138,
          send_activation_email: Y.a.cb881bc2,
          send_resurrection_email: Y.a.e4a5e08d,
          send_partner_email: Y.a.be91c4ff,
          send_survey_email: Y.a.f296795c,
          send_follow_recs_email: Y.a.ddfe3776,
          send_similar_people_email: Y.a.d17ba8c1,
          send_smb_sales_marketing_email: Y.a.jf51b93c,
        },
        ue = [
          { label: Y.a.fcad1e2d, value: 'Daily' },
          { label: Y.a.h9e0dfde, value: 'Weekly' },
          { label: Y.a.e26d98ab, value: 'Periodically' },
          { label: Y.a.e3a761ee, value: 'None' },
        ],
        fe = (function (e) {
          u()(n, e)
          var t = ne(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_renderBooleanSetting', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  r = e.props.emailSettings,
                  a = n || {},
                  o = a.helpText,
                  c = a.learnMoreLink,
                  i = a.type,
                  s = le[t]
                return r.hasOwnProperty(t)
                  ? E.a.createElement(Z.a, {
                      checked: r[t],
                      disabled: !r.send_twitter_emails && 'send_twitter_emails' !== t,
                      helpText: o,
                      key: t,
                      label: s,
                      learnMoreLink: c,
                      name: t,
                      onChange: e._handleBooleanSettingChanged(t),
                      type: i,
                    })
                  : null
              }),
              y()(s()(e), '_renderNetworkDigestSetting', function (t) {
                var n = e.props.emailSettings,
                  r = le[t],
                  a = n[t]
                return n.hasOwnProperty(t)
                  ? E.a.createElement(Q.a, {
                      disabled: !n.send_twitter_emails,
                      key: t,
                      label: r,
                      name: t,
                      onChange: e._handleSelectSettingChanged(t),
                      options: ue,
                      value: a,
                    })
                  : null
              }),
              y()(s()(e), '_renderPerformanceDigestSetting', function (t, n) {
                var r = e.props.emailSettings,
                  a = le[t],
                  o = r[t]
                return r.hasOwnProperty(t)
                  ? E.a.createElement(Z.a, {
                      checked: o && 'Weekly' === o,
                      disabled: !r.send_twitter_emails,
                      key: t,
                      label: a,
                      name: t,
                      onChange: e._handlePerformanceDigestSettingChanged(t),
                    })
                  : null
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.isVerified
                return E.a.createElement(
                  q.a,
                  null,
                  e._renderBooleanSetting('send_twitter_emails', {
                    helpText: se,
                    learnMoreLink:
                      'https://help.twitter.com/managing-your-account/updating-email-preferences#tweet-activity',
                    type: 'switch',
                    withBottomBorder: t,
                  }),
                  t
                    ? E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(J.a, null),
                        E.a.createElement($.b, { text: ie }),
                        e._renderBooleanSetting('send_email_vit_weekly'),
                      )
                    : null,
                  E.a.createElement(J.a, null),
                  E.a.createElement($.b, { text: oe }),
                  e._renderBooleanSetting('send_network_activity_email'),
                  e._renderBooleanSetting('send_new_direct_text_email'),
                  e._renderBooleanSetting('send_shared_tweet_email'),
                  e._renderNetworkDigestSetting('send_network_digest'),
                  e._renderPerformanceDigestSetting('send_performance_digest', { withBottomBorder: !1 }),
                  E.a.createElement(J.a, null),
                  E.a.createElement($.b, { text: ce }),
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
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchEmailSettingsIfNeeded)().catch(n(te(te({}, Object(K.a)()), {}, { showToast: !0 })))
              }),
              y()(s()(e), '_handleSelectSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.updateEmailSettings,
                    i = {}
                  ;(i[t] = re(r)), c(i).catch(o(te(te({}, Object(K.a)()), {}, { showToast: !0 })))
                }
              }),
              y()(s()(e), '_handleBooleanSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.updateEmailSettings,
                    i = {}
                  ;(i[t] = !!r), c(i).catch(o(te(te({}, Object(K.a)()), {}, { showToast: !0 })))
                }
              }),
              y()(s()(e), '_handlePerformanceDigestSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.updateEmailSettings,
                    i = {}
                  ;(i[t] = r ? 'Weekly' : 'None'), c(i).catch(o(te(te({}, Object(K.a)()), {}, { showToast: !0 })))
                }
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  return E.a.createElement(
                    X.a,
                    null,
                    E.a.createElement(
                      z.a,
                      { location: n, title: ae },
                      E.a.createElement(G.a, {
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
        })(E.a.Component)
      t.default = B(fe)
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
          return z
        })
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b =
          (n('yH/f'),
          n('OZaJ'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('ERkP')),
        E = n.n(b),
        g = n('P1r1'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { settings: g.g }
          })
          .adjustStateProps(function (e) {
            return { protectPasswordReset: e.settings.protect_password_reset }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SECURITY_SCREEN',
              ),
              updateSettings: g.L,
            }
          }),
        O = n('3XMw'),
        w = n.n(O),
        C = n('yoO3'),
        P = n('98E1'),
        A = n('7JQg'),
        T = n('MWbm'),
        R = n('v6aA'),
        k = n('xHsv'),
        L = n('0yYu'),
        j = n('6vad'),
        I = n('cCdp'),
        F = n('csss')
      function D(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
      var M = w.a.j95edf76,
        H = w.a.a2197725,
        U = w.a.dd703318,
        B = w.a.eb89b0ef,
        K = w.a.ead60eb7,
        V = w.a.gfaf9a4a,
        G = w.a.he30e464,
        W = w.a.i859a9d3,
        Y = { page: 'settings', section: 'security' },
        X = Object.freeze({}),
        z = (function (e) {
          u()(n, e)
          var t = N(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), '_handleProtectPasswordResetChanged', function (e, t) {
                o.setState({ showPasswordDialog: !0, data: { protect_password_reset: t } })
              }),
              y()(s()(o), '_handlePasswordSubmit', function (e) {
                var t = o.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.updateSettings)(x(x({}, o.state.data), {}, { current_password: e })).then(function () {
                  o.setState({ showPasswordDialog: !1, data: X })
                }, n({ showToast: !0 }))
              }),
              (o.state = { showPasswordDialog: !1, data: X }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.protectPasswordReset,
                    r = this.state.showPasswordDialog
                  return E.a.createElement(
                    A.b,
                    { namespace: Y },
                    E.a.createElement(
                      C.a,
                      null,
                      E.a.createElement(
                        P.a,
                        { location: t, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: r, title: M },
                        E.a.createElement(
                          T.a,
                          null,
                          E.a.createElement(k.a, { description: H }),
                          this._renderTwoFactorAuthentication(),
                          E.a.createElement(L.a, null),
                          E.a.createElement(j.b, { text: K }),
                          E.a.createElement(k.a, { description: G }),
                          E.a.createElement(I.a, {
                            checked: !!n,
                            label: V,
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
                  var e = E.a.createElement(j.b, { text: U }),
                    t = E.a.createElement(F.a, { label: U, link: '/settings/account/login_verification' }),
                    n = E.a.createElement(k.a, {
                      description: B,
                      learnMoreLabel: W,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
                    })
                  return E.a.createElement(E.a.Fragment, null, e, n, t)
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      y()(z, 'contextType', R.a)
      t.default = S(z)
    },
    uD2z: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return l
        })
      n('KOtZ'), n('+KXO')
      var r = n('3XMw'),
        a = n.n(r),
        o = a.a.dae57a41,
        c = a.a.i7cbc154,
        i = a.a.e3a761ee,
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
          return { some: c, none: i, all: o }[s(e)]
        }
    },
    wvRX: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return v
      }),
        n.d(t, 'f', function () {
          return _
        }),
        n.d(t, 'e', function () {
          return S
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'a', function () {
          return w
        }),
        n.d(t, 'b', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return P
        })
      n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('KOtZ'), n('2G9S'), n('+KXO'), n('LW0h'), n('RqPI')),
        s = n('kGix'),
        l = n('Ssj5'),
        u = n('oEOe')
      function f(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = 'loginVerification',
        h = 'U2fSecurityKey',
        m = {
          REQUEST: 'rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_FAILURE',
        },
        y = {
          REQUEST: 'rweb/settings/loginVerification/DELETE_SECURITY_KEY_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/DELETE_SECURITY_KEY_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/DELETE_SECURITY_KEY_FAILURE',
        },
        b = {
          REQUEST: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_FAILURE',
        },
        E = {
          REQUEST: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_REQUEST',
          SUCCESS: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_SUCCESS',
          FAILURE: 'rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_FAILURE',
        },
        g = { isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {}, fetchStatus: s.a.NONE }
      l.a.register(
        c()({}, p, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return d(d({}, e), {}, { fetchStatus: s.a.LOADING })
            case m.SUCCESS:
              if (!t.payload) return e
              var n = t.payload,
                r = n.isOldPushUser,
                o = n.methods,
                i = n.twoFactorAuthEnabled
              return d(
                d({}, e),
                {},
                {
                  isOldPushUser: r,
                  twoFactorAuthEnabled: i,
                  methods: o.reduce(function (e, t) {
                    var n = t.createdAtMs,
                      r = t.externalDisplayName,
                      o = t.id,
                      c = t.twoFactorType
                    if (c === h) {
                      var i = { createdAtMs: n, id: o, name: r }
                      e[c] = [].concat(a()(e[c] || []), [i])
                    } else e[c] = o
                    return e
                  }, {}),
                  fetchStatus: s.a.LOADED,
                },
              )
            case m.FAILURE:
              return d(d({}, e), {}, { error: t.payload, fetchStatus: s.a.FAILED })
            case b.REQUEST:
              return d(d({}, e), {}, { isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {} })
            case E.SUCCESS:
              var l = (t && t.meta && t.meta.method) || '',
                u = Object.keys(e.methods).reduce(function (t, n) {
                  return n !== l && (t[n] = e.methods[n]), t
                }, {})
              return d(d({}, e), {}, { methods: u })
            case y.SUCCESS:
              if (!t.meta) return e
              var f = e.methods,
                p = t.meta.securityKeyId,
                v = Array.isArray(f[h])
                  ? f[h].filter(function (e) {
                      return e.id !== p
                    })
                  : null
              return d(d({}, e), {}, { methods: d(d({}, f), {}, c()({}, h, v)) })
            default:
              return e
          }
        }),
      )
      var v = function (e) {
          return e[p]
        },
        _ = function (e) {
          return e[p].fetchStatus
        },
        S = function () {
          return function (e, t, n) {
            var r = n.api,
              a = (n.featureSwitches, i.q(t()))
            return Object(u.b)(e, { params: { userId: a }, request: r.Settings.fetchLoginVerificationSettings })({
              actionTypes: m,
              context: 'FETCH_LOGIN_VERIFICATION_SETTINGS',
            })
          }
        },
        O = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.d)(t, { params: e, request: a.Settings.enrollIn2FA })('TWO_FACTOR_ENROLLMENT')
          }
        },
        w = function (e) {
          var t = e.securityKeyId
          return function (e, n, r) {
            var a = r.api
            return Object(u.b)(e, { request: a.Settings.disable2FAMethod, params: { methodId: t } })({
              actionTypes: y,
              context: 'DELETE_SECURITY_KEY',
              meta: { securityKeyId: t },
            })
          }
        },
        C = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.c)(e, { request: r.Settings.disable2FA })({
              actionTypes: b,
              context: 'DISABLE_LOGIN_VERIFICATION',
            })
          }
        },
        P = function (e) {
          var t = e.method
          return function (e, n, r) {
            var a = r.api,
              o = v(n()).methods[t]
            return Object(u.b)(e, { request: a.Settings.disable2FAMethod, params: { methodId: o } })({
              actionTypes: E,
              context: 'DISABLE_LOGIN_VERIFICATION_METHOD',
              meta: { method: t },
            })
          }
        }
    },
    xCYy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        c = n('mrHL'),
        i = n('3XMw'),
        s = n.n(i),
        l = n('cnVF'),
        u = n('RqPI'),
        f = n('k89r'),
        d = n('yUQf'),
        p = n('q9Zt'),
        h = n('t62R'),
        m = s.a.ffeb836a,
        y = s.a.f2fb9746
      function b() {
        var e = Object(f.a)()
        return (
          a.a.useEffect(
            function () {
              e.scribe({ element: 'error_page', action: 'show' })
            },
            [e],
          ),
          a.a.createElement(p.a, { title: m }, a.a.createElement(h.b, null, y))
        )
      }
      function E(e) {
        var t = a.a.useContext(o.a).featureSwitches,
          n = Object(d.a)(u.m),
          r = Object(c.b)(l.u, t)
        return n || r ? e.children : a.a.createElement(b, null)
      }
    },
    xKqQ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTaggingScreen', function () {
          return F
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('P1r1'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { settings: g.g }
          })
          .adjustStateProps(function (e) {
            return { mediaTaggingOption: e.settings.allow_media_tagging }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TAGGING_SCREEN',
              ),
              updateSettings: g.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'tagging' }),
        O = n('3XMw'),
        w = n.n(O),
        C = n('yoO3'),
        P = n('7FtF'),
        A = n('qYi+'),
        T = n('MWbm')
      function R(e) {
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
      var k = w.a.f56d108e,
        L = w.a.f56d108e,
        j = w.a.gd758533,
        I = [
          { label: w.a.d165c992, value: 'all' },
          { label: w.a.ea339390, value: 'following' },
        ],
        F = (function (e) {
          u()(n, e)
          var t = R(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleItemChanged', function (t, n) {
                var r = e.props,
                  a = r.createLocalApiErrorHandler
                ;(0, r.updateSettings)(y()({}, t, n)).catch(a({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.mediaTaggingOption
                  return E.a.createElement(
                    C.a,
                    null,
                    E.a.createElement(
                      P.a,
                      { location: t, title: k },
                      E.a.createElement(
                        T.a,
                        null,
                        E.a.createElement(A.a, {
                          description: j,
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
      t.default = S(F)
    },
    z6lV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchSettingsPage', function () {
          return ce
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        f = n('N+ot'),
        d = n.n(f),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        E = n.n(b),
        g = n('wtjx'),
        v = (n('JtPf'), n('7x/C'), n('oEOe')),
        _ = n('RqPI'),
        S = n('kGix'),
        O = n('Ssj5')
      function w(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var P = 'safeSearch',
        A = 'rweb/'.concat(P),
        T = v.a(A, 'FETCH_SEARCH_SETTINGS'),
        R = v.a(A, 'UPDATE_SEARCH_SETTINGS'),
        k = { fetchStatus: S.a.NONE, searchSettings: {} }
      O.a.register(
        y()({}, P, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case T.REQUEST:
              return C(C({}, e), {}, { fetchStatus: S.a.LOADING })
            case T.FAILURE:
              return C(C({}, e), {}, { fetchStatus: S.a.FAILED })
            case T.SUCCESS:
              return C(C({}, e), {}, { searchSettings: t.payload, fetchStatus: S.a.LOADED })
            case R.REQUEST:
              return C(
                C({}, e),
                {},
                { searchSettings: C(C({}, e.searchSettings), {}, y()({}, t.meta.settingName, t.meta.settingValue)) },
              )
            default:
              return e
          }
        }),
      )
      var L = function (e) {
          return e.safeSearch.searchSettings
        },
        j = function (e) {
          return e.safeSearch.fetchStatus
        },
        I = function () {
          return function (e, t, n) {
            var r = n.api,
              a = _.q(t())
            return v.b(e, { params: { userId: a }, request: r.SafeSearch.fetch })({
              actionTypes: T,
              context: 'FETCH_SEARCH_SETTINGS',
            })
          }
        },
        F = function (e, t) {
          return function (n, r, a) {
            var o,
              c = a.api,
              i = r(),
              s = C(C({}, L(i)), {}, ((o = {}), y()(o, e, t), y()(o, 'userId', _.q(i)), o))
            return v.c(n, { params: s, request: c.SafeSearch.set })({
              actionTypes: R,
              context: 'ACTION_UPDATE_SEARCH_SETTINGS',
              meta: { settingName: e, settingValue: t },
            })
          }
        },
        D = n('1YZw'),
        x = n('i6OR'),
        N = n('rxPX'),
        M = n('0KEI'),
        H = Object(N.a)()
          .propsFromState(function () {
            return { fetchStatus: j, lastSearchQuery: g.f, settings: L }
          })
          .propsFromActions(function () {
            return {
              addToast: D.b,
              clearAllSearchResults: x.a,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)('SAFE_SEARCH_SCREEN'),
              fetchSettings: I,
              updateSettings: F,
            }
          })
          .withAnalytics({ page: 'settings', section: 'search' }),
        U = n('45mF'),
        B = n('v//M'),
        K = n('jHSc'),
        V = n('3XMw'),
        G = n.n(V),
        W = n('cCdp'),
        Y = 'searchSettings-hideSensitiveContent',
        X = 'searchSettings-hideMutedOrBlockedAccounts'
      function z(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Z(e) {
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
      var Q = G.a.h1ef00db,
        J = G.a.a90af44e,
        $ = G.a.a25e2ec5,
        ee = G.a.b827a057,
        te = G.a.b27c9851,
        ne = G.a.c81b9707,
        re = G.a.if05bca6,
        ae = 'https://support.twitter.com/articles/132700',
        oe = 'optInFiltering',
        ce = (function (e) {
          u()(n, e)
          var t = Z(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleSettingChanged', function (t, n) {
                var r = e.props,
                  a = r.addToast,
                  o = r.clearAllSearchResults,
                  c = r.createLocalApiErrorHandler,
                  i = r.updateSettings
                e._scribeValueChanged(t, n),
                  i(t, n).then(function () {
                    o(), a({ text: ee })
                  }, c(q(q({}, Object(U.a)(te)), {}, { showToast: !0 })))
              }),
              y()(s()(e), '_scribeValueChanged', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.lastSearchQuery,
                  c = o ? { search_details: { query: o } } : {},
                  i = t === oe ? 'filtering' : 'blocking',
                  s = n ? 'on' : 'off'
                a.scribe({ component: 'safe_search_settings', element: i, action: s, data: c })
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.settings
                return E.a.createElement(
                  'div',
                  null,
                  E.a.createElement(W.a, {
                    checked: t.optInFiltering,
                    helpText: ne,
                    label: J,
                    learnMoreLink: ae,
                    name: 'optInFiltering',
                    onChange: e._handleSettingChanged,
                    testID: Y,
                  }),
                  E.a.createElement(W.a, {
                    checked: t.optInBlocking,
                    helpText: re,
                    label: $,
                    learnMoreLink: ae,
                    name: 'optInBlocking',
                    onChange: e._handleSettingChanged,
                    testID: X,
                  }),
                )
              }),
              y()(s()(e), '_handleFetchSettings', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettings)().catch(n(Object(U.a)()))
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  return E.a.createElement(
                    K.b,
                    { history: n, title: Q },
                    E.a.createElement(B.a, {
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
        })(E.a.Component)
      t.default = H(ce)
    },
  },
])
//# sourceMappingURL=WIPED
