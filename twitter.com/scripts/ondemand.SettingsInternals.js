;(window.webpackJsonp = window.webpackJsonp || []).push([
  [220],
  {
    '+GrA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MutedAccountsScreen', function () {
          return Ae
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
        y = (n('LW0h'), n('WNMA'), n('KqXw'), n('zh9S')),
        b = n('1YZw'),
        E = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('z84I'), n('WpDa')),
        g = n('ZNT5'),
        v = n('G6rE')
      function _(e, t) {
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
      var S = function (e) {
          return Object(g.a)({
            timelineId: 'dmMutedUsersGraphQL-'.concat(e),
            getEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMMutedUsers
            },
            getEndpointParams: function (t) {
              return (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? _(Object(n), !0).forEach(function (t) {
                        h()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : _(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                      })
                }
                return e
              })({ user_id: e }, t)
            },
            context: 'FETCH_DM_MUTED_USERS',
            perfKey: 'dmMutedUsersGraphql',
            formatResponse: E.a,
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
                    n = v.e.select(r, t)
                  return n && !n.dm_muting
                })
                .map(function (t) {
                  return e.removeEntry(t.entryId)
                }),
            )
          }
        },
        O = n('lbf8'),
        C = n('rxPX'),
        P = function (e, t) {
          return t.match.params.filter
        },
        A = Object(C.a)()
          .propsFromState(function () {
            return { filterName: P }
          })
          .propsFromActions(function () {
            return {
              addToast: b.b,
              cleanupMuteList: O.b,
              cleanupDMMuteList: w,
              googleAnalyticsPageView: y.a,
              scribePageImpression: y.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'muted_accounts' }),
        T = n('G0qc'),
        R = n('yoO3'),
        k = n('fTQJ'),
        L = n('eM8g'),
        I = n('7FtF'),
        F = n('t62R'),
        j = n('FIs5'),
        D = n('0yYu'),
        x = n('v6aA'),
        N = n('PnFR'),
        M = n('8UdT'),
        H = n('1Pcy'),
        U = n.n(H),
        B = (n('2G9S'), n('JtPf'), n('7x/C'), n('/yvb')),
        K = n('0pUJ'),
        V = n('0KEI'),
        G = function (e, t) {
          return v.e.select(e, t.userId)
        },
        W = Object(C.a)()
          .propsFromState(function () {
            return { user: G }
          })
          .propsFromActions(function () {
            return {
              addToast: b.b,
              createLocalApiErrorHandler: Object(V.createLocalApiErrorHandlerWithContextFactory)(
                'MUTE_BUTTON_CONTAINER',
              ),
              mute: K.a,
              unmute: v.e.unmute,
            }
          })
          .withAnalytics(),
        Y = n('foB5'),
        X = n('Rp9C'),
        z = n('68+r'),
        q = n('P2xQ'),
        Z = n('qz6Z'),
        Q = n('w02m')
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var $ = W(
          (function (e) {
            s()(n, e)
            var t = J(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(U()(e), '_handleMutOrUnmuteToggle', function () {
                  e._handleMuteOrUnmuteToggleHelper()
                }),
                h()(U()(e), '_handleMuteOrUnmuteToggleHelper', function () {
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
                          n({ text: Object(q.d)(c.screen_name) }), e._scribeAction('unmute_user')
                        }, r(z.a))
                      : a(i).then(function (t) {
                          n({ text: Object(q.b)(c.screen_name) }), e._scribeAction('mute_user')
                        }, r(Y.a))
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
                      n = e.muting ? Z.a : Q.a,
                      r = e.muting ? Object(q.e)(e.screen_name) : Object(q.c)(e.screen_name),
                      a = e.muting ? q.g : q.f
                    return m.createElement(B.a, {
                      accessibilityLabel: r,
                      hoverLabel: { label: a },
                      icon: m.createElement(n, null),
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
                    n.scribe({ action: e, data: { items: r ? [X.a.getUserItem(r)] : [] } })
                  },
                },
              ]),
              n
            )
          })(m.Component),
        ),
        ee = (n('ho0z'), n('MMRb')),
        te = function (e, t) {
          return v.e.select(e, t.userId)
        },
        ne = Object(C.a)()
          .propsFromState(function () {
            return { user: te }
          })
          .propsFromActions(function () {
            return {
              addToast: b.b,
              createLocalApiErrorHandler: Object(V.createLocalApiErrorHandlerWithContextFactory)(
                'MUTE_DM_BUTTON_CONTAINER',
              ),
              muteDMUser: ee.muteDMUser,
              unmuteDMUser: ee.unmuteDMUser,
            }
          })
          .withAnalytics(),
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
            r = d()(e)
          if (t) {
            var a = d()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var ce,
        ie,
        se = ae.a.e67b2d65,
        le = ae.a.f05597b2,
        ue = ae.a.gde6b424,
        fe = ae.a.e308019b,
        de = ne(
          (function (e) {
            s()(n, e)
            var t = oe(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                h()(U()(e), '_handleUnmuteToggle', function () {
                  e._handleUnmuteToggleHelper()
                }),
                h()(U()(e), '_handleUnmuteToggleHelper', function () {
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
                          n({ text: fe({ name: c.name }) }), e._scribeAction('unmute_user')
                        }, r(z.a))
                      : a(i).then(function (t) {
                          n({ text: ue({ name: c.name }) }), e._scribeAction('mute_user')
                        }, r(Y.a))
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
                      n = e.dm_muting ? Z.a : Q.a,
                      r = e.dm_muting ? le({ screenName: e.screen_name }) : se({ screenName: e.screen_name })
                    return m.createElement(B.a, {
                      accessibilityLabel: r,
                      icon: m.createElement(n, null),
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
                    n.scribe({ action: e, data: { items: r ? [X.a.getUserItem(r)] : [] } })
                  },
                },
              ]),
              n
            )
          })(m.Component),
        ),
        pe = n('Ka9G'),
        he =
          ((ce = {}),
          h()(
            ce,
            M.b.User,
            Object(pe.a)({
              decoration: function (e) {
                var t = e.userId
                return m.createElement($, { userId: t })
              },
            }),
          ),
          h()(ce, M.b.TimelineCursor, Object(N.a)({})),
          ce),
        me =
          ((ie = {}),
          h()(
            ie,
            M.b.User,
            Object(pe.a)({
              decoration: function (e) {
                var t = e.userId
                return m.createElement(de, { userId: t })
              },
            }),
          ),
          h()(ie, M.b.TimelineCursor, Object(N.a)({})),
          ie)
      function ye(e) {
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
      var be = ae.a.daef29b7,
        Ee = m.createElement(
          ae.a.I18NFormatMessage,
          { $i18n: 'b0b13518' },
          m.createElement(F.b, { link: 'https://help.twitter.com/using-twitter/twitter-mute' }, ae.a.e565cad5),
        ),
        ge = ae.a.a6194d10,
        ve = ae.a.ga3ef87d,
        _e = ae.a.cd9701d3,
        Se = ae.a.b8e49590,
        we = ae.a.i859a9d3,
        Oe = 'https://support.twitter.com/articles/20171399',
        Ce = function () {
          var e = m.createElement('div', null, Se, ' ', m.createElement(F.b, { link: Oe }, we))
          return m.createElement(j.a, { header: ve, message: e })
        },
        Pe = function () {
          var e = m.createElement('div', null, _e, ' ', m.createElement(F.b, { link: Oe }, we))
          return m.createElement(j.a, { header: ve, message: e })
        },
        Ae = (function (e) {
          s()(n, e)
          var t = ye(n)
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
                    a = t === T.a.Messages
                  return (
                    (this._module = a ? S(r) : Object(O.a)()),
                    m.createElement(
                      R.a,
                      null,
                      m.createElement(
                        I.a,
                        { location: n, title: be, withBottomBorder: !0, withMarginBottom: !1 },
                        m.createElement(L.a, null, Ee),
                        m.createElement(D.a, null),
                        m.createElement(k.a, {
                          entryConfiguration: a ? me : he,
                          loadingAccessibilityLabel: ge,
                          module: this._module,
                          renderEmptyState: a ? Ce : Pe,
                          title: be,
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
                    a = S(r)
                  n(Object(O.a)()), t(a)
                },
              },
            ]),
            n
          )
        })(m.Component)
      h()(Ae, 'contextType', x.a)
      t.default = A(Ae)
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
        b = (n('ho0z'), n('ERkP')),
        E = n('k49u'),
        g = n('dZRF'),
        v = n('1YZw'),
        _ = n('oEOe'),
        S = function (e, t, n) {
          return function (r, a, o) {
            var c = o.api
            return Object(_.d)(r, {
              params: { current_password: e, password: t, password_confirmation: n },
              request: c.Settings.changePassword,
            })('CHANGE_PASSWORD')
          }
        },
        w = n('rxPX'),
        O = n('0KEI'),
        C = Object(w.a)()
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
              addToast: v.b,
              changePassword: S,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PASSWORD_SCREEN',
              ),
              fetchApplicationsIfNeeded: g.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'password' }),
        P = n('v//M'),
        A = n('yoO3'),
        T = n('7FtF'),
        R = n('MWbm'),
        k = n('Irs7'),
        L = n('p+r5'),
        I = n('t62R'),
        F = n('0yYu'),
        j = n('atVN'),
        D = n('3XMw'),
        x = n.n(D),
        N = n('/Dbh')
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
      var H = x.a.ab1f7eef,
        U = x.a.d241169c,
        B = x.a.d1091f50,
        K = x.a.a9bc3043,
        V = x.a.b8c03cfb,
        G = x.a.b731d32c,
        W = x.a.d555d7e0,
        Y = x.a.fa8af9ad,
        X = x.a.c8cb0b4c,
        z = x.a.jea2ff04,
        q = x.a.a03f5c72,
        Z = x.a.i9028824,
        Q = (function (e) {
          u()(n, e)
          var t = M(n)
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
                return b.createElement(
                  R.a,
                  null,
                  b.createElement(L.a, {
                    errorText: r,
                    helperText: b.createElement(I.b, { link: 'https://twitter.com/account/access_password_reset' }, B),
                    invalid: !!r,
                    label: U,
                    name: 'current_password',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: n,
                  }),
                  b.createElement(F.a, null),
                  b.createElement(L.a, {
                    errorText: c,
                    invalid: !!c,
                    label: K,
                    name: 'new_password',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: a,
                  }),
                  b.createElement(L.a, {
                    errorText: s,
                    invalid: !!s,
                    label: V,
                    name: 'password_confirmation',
                    onChange: o._handleItemChanged,
                    type: 'password',
                    value: i,
                  }),
                  b.createElement(F.a, null),
                  e
                    ? b.createElement(
                        j.a,
                        null,
                        b.createElement(
                          I.b,
                          { color: 'gray700' },
                          b.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'hc585ff0' },
                            b.createElement(I.b, { link: '/settings/applications' }, q({ applicationCount: e })),
                            b.createElement(
                              I.b,
                              { link: 'https://help.twitter.com/safety-and-security/account-security-tips' },
                              x.a.h1b4075d,
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
                if (c === i) o.setState({ newPasswordError: W })
                else if (i.length < N.b) o.setState({ newPasswordError: O.NEW_PASSWORD_SHORT })
                else if (i.length > N.a) o.setState({ newPasswordError: O.NEW_PASSWORD_LONG })
                else if (i !== s) o.setState({ passwordConfirmationError: Y })
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
                          t({ text: G })
                      })
                      .catch(
                        r(
                          ((l = {}),
                          y()(l, E.a.InvalidCurrentPassword, {
                            customAction: function () {
                              return o.setState({ currentPasswordError: X })
                            },
                          }),
                          y()(l, E.a.NewPasswordLong, {
                            customAction: function () {
                              return o.setState({ newPasswordError: O.NEW_PASSWORD_LONG })
                            },
                          }),
                          y()(l, E.a.NewPasswordShort, {
                            customAction: function () {
                              return o.setState({ newPasswordError: O.NEW_PASSWORD_SHORT })
                            },
                          }),
                          y()(l, E.a.NewPasswordWeak, {
                            customAction: function () {
                              return o.setState({ newPasswordError: z })
                            },
                          }),
                          y()(l, E.a.CannotReuseCurrentPassword, {
                            customAction: function () {
                              return o.setState({ newPasswordError: W })
                            },
                          }),
                          y()(l, E.a.PasswordResetMismatchedEntries, {
                            customAction: function () {
                              return o.setState({ passwordConfirmationError: Y })
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
                  return b.createElement(
                    T.a,
                    { location: n, onSubmit: this._handleSubmit, submitDisabled: this.state.hasBlankFields, title: H },
                    b.createElement(
                      A.a,
                      null,
                      b.createElement(P.a, {
                        accessibilityLabel: Z,
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
        })(b.Component)
      t.default = Object(k.a)(C(Q))
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
        E = n('EPsT'),
        g = n('zh9S'),
        v = n('a/ea'),
        _ = n('P1r1'),
        S = n('rxPX'),
        w = n('0KEI'),
        O = Object(S.a)()
          .propsFromState(function () {
            return { permissionStatus: v.c, settings: _.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LOCATION_SCREEN',
              ),
              deleteLocationData: _.c,
              googleAnalyticsPageView: g.a,
              loadGeoLocation: v.a,
              scribePageImpression: g.d,
              updateSettings: _.L,
            }
          }),
        C = n('M6MT'),
        P = n('eM8g'),
        A = n('7FtF'),
        T = n('MWbm'),
        R = n('t62R'),
        k = n('cCdp'),
        L = n('v6aA'),
        I = n('3XMw'),
        F = n.n(I)
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
      var D = F.a.eb029cab,
        x = F.a.eb029cab,
        N = F.a.j5267913,
        M = F.a.ed7fa034,
        H = F.a.h83e5c06,
        U = F.a.f4d69920,
        B = F.a.d96cf7cd,
        K = { page: 'settings', section: 'location' },
        V = (function (e) {
          u()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
                s()(e),
                '_fsPreciseLocationSettingEnabled',
                e.context.featureSwitches.isTrue('responsive_web_precise_location_setting_enabled'),
              ),
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
                  return b.createElement(
                    A.a,
                    { location: t, title: D },
                    b.createElement(
                      T.a,
                      null,
                      b.createElement(
                        P.a,
                        null,
                        b.createElement(
                          F.a.I18NFormatMessage,
                          { $i18n: 'ia4557be' },
                          b.createElement(
                            R.b,
                            { link: 'https://help.twitter.com/safety-and-security/tweet-location-settings' },
                            F.a.a18349ca,
                          ),
                        ),
                      ),
                      this._fsPreciseLocationSettingEnabled && n === C.b.denied ? b.createElement(P.a, null, M) : null,
                      b.createElement(k.a, {
                        checked: r.geo_enabled,
                        label: x,
                        name: 'geo_enabled',
                        onChange: this._fsPreciseLocationSettingEnabled
                          ? this._handlePreciseLocationSettingChanged
                          : this._handleItemChanged,
                      }),
                      b.createElement(E.a, {
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
        })(b.Component)
      y()(V, 'contextType', L.a)
      t.default = O(V)
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
        h = n('rHpw'),
        m = n('MWbm')
      function y(e) {
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
      var b = (function (e) {
          s()(n, e)
          var t = y(n)
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
                  return p.createElement(m.a, { style: E.root })
                },
              },
            ]),
            n
          )
        })(p.Component),
        E = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
    },
    '3WEv': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SessionDetailPage', function () {
          return X
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
        E = n('EPsT'),
        g = (n('WNMA'), n('KqXw'), n('uo4S')),
        v = n('1YZw'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = function (e, t) {
          var n = decodeURIComponent(t.match.params.sessionId || '')
          return g.e(e, n)
        },
        O = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: g.d, session: w }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('SESSION_DETAIL'),
              fetchSessionsIfNeeded: g.a,
              revokeSession: g.c,
            }
          })
          .withAnalytics({ page: 'settings', section: 'session_detail' }),
        C = n('v//M'),
        P = n('3XMw'),
        A = n.n(P),
        T = n('yoO3'),
        R = n('ZvNX'),
        k = n('7FtF'),
        L = n('jm1/'),
        I = n('MWbm'),
        F = n('FIs5'),
        j = n('t62R'),
        D = n('0yYu'),
        x = n('6vad')
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
      var M = A.a.ed5ab169,
        H = A.a.d64e29c5,
        U = { headline: A.a.idfa01cb, text: A.a.d4cca0f7, confirmButtonLabel: A.a.ae1bbb26 },
        B = A.a.e04ba39c,
        K = A.a.bfbc051c,
        V = A.a.jaaa8984,
        G = A.a.h667fc02,
        W = A.a.ddcd3d26,
        Y = A.a.d2f0f3fd,
        X = (function (e) {
          u()(n, e)
          var t = N(n)
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
                  ? b.createElement(
                      I.a,
                      null,
                      b.createElement(R.a, { session: t, withBottomBorder: !1, withSummary: !0 }),
                      e._renderDateAndTime(t),
                      e._renderLocation(t),
                    )
                  : b.createElement(F.a, { header: Y })
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
                    r({ text: G }), t._handleGoBack()
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
                  return b.createElement(
                    T.a,
                    null,
                    b.createElement(
                      k.a,
                      { location: n, title: a },
                      b.createElement(C.a, {
                        accessibilityLabel: W,
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
                  if (e.is_current_session) return b.createElement(j.b, null, M)
                  var t = new Date(Number(e.last_seen_time_ms))
                  return b.createElement('time', { dateTime: t.toISOString() }, K(t))
                },
              },
              {
                key: '_renderDateAndTime',
                value: function (e) {
                  return b.createElement(
                    I.a,
                    null,
                    null != e && e.last_seen_time_ms
                      ? b.createElement(
                          I.a,
                          null,
                          b.createElement(D.a, null),
                          b.createElement(x.b, { text: B }),
                          b.createElement(
                            I.a,
                            { style: [L.a.labelContainer, !(null != e && e.is_current_session) && L.a.bottomBorder] },
                            b.createElement(j.b, { color: 'gray700', size: 'subtext2' }, this._renderDateLabel(e)),
                          ),
                        )
                      : null,
                    null != e && e.is_current_session
                      ? null
                      : b.createElement(E.a, {
                          confirmationSheetConfirmButtonLabel: U.confirmButtonLabel,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: U.headline,
                          confirmationSheetText: U.text,
                          label: H,
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
                    ? b.createElement(
                        I.a,
                        null,
                        b.createElement(D.a, null),
                        b.createElement(x.b, { text: V }),
                        b.createElement(
                          I.a,
                          { style: L.a.labelContainer },
                          b.createElement(j.b, { color: 'gray700', size: 'subtext2' }, t),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = O(X)
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
        h = n('3XMw'),
        m = n.n(h),
        y = n('rHpw'),
        b = n('+/1j'),
        E = n('MWbm')
      function g(e) {
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
      var v = m.a.e5b0063d,
        _ = 0,
        S = (function (e) {
          s()(n, e)
          var t = g(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = v({ title: n })
                  return p.createElement(
                    E.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.createElement(E.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component)
      t.a = S
    },
    '5keN': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeatureSwitchesScreen', function () {
          return G
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
        v = n('O0uF'),
        _ = n('rxPX'),
        S = Object(_.a)()
          .propsFromState(function () {
            return { featureSwitches: v.f }
          })
          .adjustStateProps(function (e) {
            var t = e.featureSwitches
            return { allSwitches: t.debug, config: t.user.config }
          })
          .withAnalytics({ page: 'settings', section: 'feature_switches' }),
        w = n('VwDm'),
        O = n('sXY3'),
        C = n('yoO3'),
        P = n('7FtF'),
        A = (n('ho0z'), n('Blm6'), n('uFXj'), n('MWbm')),
        T = n('p+r5'),
        R = n('rHpw')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var L = (function (e) {
        d()(n, e)
        var t = k(n)
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
                return g.createElement(
                  A.a,
                  { style: [c && I.bottomBorder, i && I.disabled] },
                  g.createElement(T.a, {
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
      })(g.Component)
      E()(L, 'defaultProps', { type: 'text', withBottomBorder: !0 })
      var I = R.a.create(function (e) {
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
        j = n('6vad'),
        D = n('t62R'),
        x = n('/yvb'),
        N = n('cCdp'),
        M = n('6OUF'),
        H = n('0yYu'),
        U = n('Y3cQ'),
        B = n('v6aA'),
        K = n('hX3w')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var G = (function (e) {
        d()(n, e)
        var t = V(n)
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
                ? g.createElement(
                    A.a,
                    null,
                    g.createElement(j.b, { text: 'Currently Active Overrides' }),
                    Object(O.a)(t).map(function (t) {
                      var n = a()(t, 2),
                        r = n[0],
                        o = n[1]
                      return g.createElement(
                        A.a,
                        { key: r, style: [F.a.viewItem, F.a.bottomBorder] },
                        g.createElement(D.b, null, r),
                        g.createElement(
                          D.b,
                          { color: e[r] && e[r].value !== o ? 'magenta500' : 'gray700' },
                          o.toString(),
                        ),
                      )
                    }),
                    g.createElement(
                      A.a,
                      { style: F.a.viewItem },
                      g.createElement(
                        x.a,
                        { onPress: o._handleClearOverrides, type: 'destructiveOutlined' },
                        'Clear all overrides',
                      ),
                    ),
                  )
                : null
            }),
            E()(u()(o), '_renderSearch', function () {
              return g.createElement(
                A.a,
                null,
                g.createElement(N.a, {
                  checked: o.state.onlyDDGs,
                  label: 'Only DDGs',
                  name: 'onlyDDGs',
                  onChange: o._handleFilterChanged,
                }),
                g.createElement(M.a, {
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
              return g.createElement(
                A.a,
                null,
                g.createElement(j.b, { text: 'Filters' }),
                o._renderSearch(),
                g.createElement(H.a, null),
                g.createElement(j.b, { text: 'Feature switches' }),
                Object(O.a)(r).map(function (t) {
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
                      return g.createElement(N.a, {
                        checked: m,
                        helpText: y,
                        key: s,
                        label: s,
                        name: s,
                        onChange: o._handleItemChanged,
                      })
                    case 'experiment':
                      return g.createElement(U.a, {
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
                        ? g.createElement(
                            A.a,
                            { key: s, style: [F.a.viewItem, F.a.bottomBorder] },
                            g.createElement(D.b, null, s),
                            g.createElement(D.b, { color: 'gray700' }, 'Array value type editing not supported yet'),
                            g.createElement('br', null),
                            g.createElement(D.b, null, m.toString()),
                          )
                        : g.createElement(L, {
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
                return g.createElement(
                  C.a,
                  null,
                  g.createElement(
                    P.a,
                    { location: e, title: 'Feature switches' },
                    g.createElement(A.a, null, this._renderCurrentOverrides(), this._renderAll()),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(g.Component)
      E()(G, 'contextType', B.a)
      t.default = S(G)
    },
    '6PlH': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MutedKeywordsNotificationsScreen', function () {
          return fe
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
        E = n('X8EX'),
        g = n('1YZw'),
        v = n('xZGM'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = function (e, t) {
          return Object(v.y)(e, v.o)
        },
        O = function (e, t) {
          return Object(v.y)(e, v.t)
        },
        C = Object(_.a)()
          .propsFromState(function () {
            return {
              mutedKeywords: E.j,
              fetchStatus: E.h,
              shouldShowMuteEducationTip: w,
              shouldShowUnmuteEducationTip: O,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: v.v,
              addToast: g.b,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('MUTED_KEYWORDS'),
              deleteMutedKeyword: E.b,
              fetchMutedKeywordsIfNeeded: E.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications', component: 'mute_keyword', element: 'list' }),
        P = n('v//M'),
        A = n('NTtI'),
        T = (n('2G9S'), n('3XMw')),
        R = n.n(T),
        k = n('qz6Z'),
        L = n('MWbm'),
        I = n('/yvb'),
        F = n('eb3s')
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
      var D = R.a.cfd2f35d,
        x = R.a.bb1cbeb5,
        N = R.a.ba4aaa9d,
        M = R.a.f837ed7d,
        H = (function (e) {
          u()(n, e)
          var t = j(n)
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
                  ;(0, this.props.addFlag)(v.t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.color
                  return b.createElement(
                    L.a,
                    null,
                    b.createElement(I.a, {
                      accessibilityLabel: x,
                      color: e,
                      hoverLabel: { label: x },
                      icon: b.createElement(k.a, null),
                      onPress: this._handlePress,
                    }),
                    this.state.showUnmuteConfirmation
                      ? b.createElement(F.a, {
                          cancelButtonLabel: D,
                          confirmButtonLabel: x,
                          headline: N,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: M,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(H, 'defaultProps', { color: 'red500' })
      var U = n('yoO3'),
        B = (n('hBvt'), n('iY63')),
        K = R.a.af40a8ef,
        V = function (e) {
          var t = e.accessibilityLabel,
            n = e.link
          return b.createElement(I.a, {
            accessibilityLabel: t,
            hoverLabel: { label: K },
            icon: b.createElement(B.a, null),
            link: n,
            pullRight: !0,
            type: 'primaryText',
          })
        },
        G = n('7FtF'),
        W = n('iCwC'),
        Y = n('t62R'),
        X = n('FIs5'),
        z = n('feu+'),
        q = n('htQn'),
        Z = n('rHpw')
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
      var J = R.a.cab9274e,
        $ = R.a.e506aa92,
        ee = R.a.cbd04965,
        te = R.a.j24c37b2,
        ne = R.a.i0dd9b9d,
        re = R.a.eb4e810a,
        ae = R.a.cabeb6c1,
        oe = R.a.jade381b,
        ce = R.a.be59d8c3,
        ie = R.a.i3d087da,
        se = R.a.ga8d18c8,
        le = R.a.f9bce916,
        ue = function () {
          return b.createElement(
            R.a.I18NFormatMessage,
            { $i18n: 'f02520a9' },
            b.createElement(
              Y.b,
              { color: 'link', link: 'https://support.twitter.com/articles/20175032', withInteractiveStyling: !0 },
              R.a.f12c13b5,
            ),
          )
        },
        fe = (function (e) {
          u()(n, e)
          var t = Q(n)
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
                return b.createElement(X.a, { header: J, message: b.createElement(ue, null) })
              }),
              y()(s()(r), '_renderExpireTime', function (e) {
                var t = new Date(Number(e))
                return b.createElement(
                  'time',
                  { 'aria-label': oe(t), dateTime: t.toISOString() },
                  r._calcRemainingTime(t),
                )
              }),
              y()(s()(r), '_isKeywordExpired', function (e) {
                return e && Number(e) < Date.now()
              }),
              y()(s()(r), '_calcRemainingTime', function (e) {
                var t = e - Date.now()
                if (t <= 0) return re
                var n = Math.ceil(t / 6e4)
                if (n < 60) return ce(n)
                var r = Math.round(t / 36e5)
                if (r < 25) return ie(r)
                var a = Math.round(t / 864e5)
                return a < 31 ? se(a) : oe(e)
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
                  n({ text: ee({ keyword: e.keyword }) }), a.scribe({ action: 'unmute' })
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
                    r = b.createElement(V, { accessibilityLabel: $, link: '/settings/add_muted_keyword' })
                  return b.createElement(
                    U.a,
                    null,
                    b.createElement(
                      G.a,
                      { location: n, rightControl: r, title: ne },
                      this.state.showMuteKeywordEducationSheet
                        ? b.createElement(z.a, {
                            actionLabel: te,
                            graphic: A.a,
                            graphicDisplayMode: 'illustration',
                            headline: le,
                            onAction: this._handleCloseEducationPrompt,
                            onClose: this._handleCloseEducationPrompt,
                            subtext: b.createElement(ue, null),
                          })
                        : null,
                      b.createElement(P.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }),
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
                  return b.createElement(
                    L.a,
                    null,
                    b.createElement(
                      Y.b,
                      { color: 'gray700', size: 'subtext2', style: [W.a.descriptionText, W.a.bottomBorder] },
                      b.createElement(ue, null),
                    ),
                    this.props.mutedKeywords.map(function (t) {
                      return b.createElement(
                        q.a,
                        {
                          key: t.id,
                          link: { pathname: '/settings/muted_keywords/'.concat(t.id), anchorless: !0 },
                          style: de.item,
                        },
                        b.createElement(
                          L.a,
                          { style: de.keywordContainer },
                          b.createElement(
                            Y.b,
                            {
                              color: e._isKeywordExpired(t.valid_until) ? 'gray700' : 'normal',
                              numberOfLines: 1,
                              style: de.keyword,
                            },
                            t.keyword,
                          ),
                          b.createElement(
                            Y.b,
                            { color: 'gray700', size: 'subtext2', style: de.muteTime },
                            t.valid_until ? e._renderExpireTime(t.valid_until) : ae,
                          ),
                        ),
                        b.createElement(H, {
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
                  ;(0, this.props.addFlag)(v.o)
                },
              },
            ]),
            n
          )
        })(b.Component),
        de = Z.a.create(function (e) {
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
      t.default = C(fe)
    },
    '7WHe': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsContactsDashboardScreen', function () {
          return pe
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
        v = n('EPsT'),
        _ = n('P1r1'),
        S = n('hqKg'),
        w = n('0KEI'),
        O = n('oEGd'),
        C =
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
        P = n('XMGw'),
        A = n('Ssj5'),
        T = n('oEOe')
      function R(e, t) {
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var L = ''.concat(P.a, '/contacts'),
        I = 'rweb/'.concat(P.a),
        F = Object(T.a)(I, 'FETCH_ADDRESS_BOOK'),
        j = { cursor: null, contacts: [], fetchStatus: C.a.NONE }
      A.a.register(
        E()({}, L, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (n.type) {
            case F.REQUEST:
              return k(k({}, t), {}, { fetchStatus: C.a.LOADING })
            case F.SUCCESS:
              return (
                (e = n.payload.entities.vcards ? Object.values(n.payload.entities.vcards) : []),
                k(
                  k({}, t),
                  {},
                  {
                    contacts: [].concat(a()(t.contacts), a()(e)),
                    cursor: n.payload.result.next_cursor,
                    fetchStatus: C.a.LOADED,
                  },
                )
              )
            case F.FAILURE:
              return k(k({}, t), {}, { error: n.payload, fetchStatus: C.a.FAILED })
            default:
              return t
          }
        }),
      )
      var D = function (e) {
          return e[L].fetchStatus
        },
        x = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(T.b)(t, { request: a.Contacts.fetchAddressBook, params: e })({
              actionTypes: F,
              context: 'FETCH_ADDRESS_BOOK',
            })
          }
        },
        N = Object(S.createSelector)(
          function (e) {
            return e[L].contacts
          },
          D,
          function (e, t) {
            return { contacts: e, fetchStatus: t }
          },
        ),
        M = {
          createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_CONTACTS_DASHBOARD_SCREEN',
          ),
          deleteContacts: _.b,
          fetchContactsIfNeeded: function (e) {
            return function (t, n) {
              return D(n()) === C.a.LOADED ? Promise.resolve() : t(x(e))
            }
          },
          fetchContactsNext: function (e) {
            return function (t, n) {
              var r = n(),
                a = (function (e) {
                  return e[L].cursor
                })(r)
              return a && D(r) === C.a.LOADED ? t(x(k(k({}, e), {}, { cursor: a }))) : Promise.resolve()
            }
          },
        },
        H = Object(O.g)(N, M),
        U = n('v//M'),
        B = n('w6IS'),
        K = n('6ZHn'),
        V = n('TEoO'),
        G = n('yoO3'),
        W = n('PK8P'),
        Y = n('7JQg'),
        X = n('eM8g'),
        z = n('7FtF'),
        q = n('iCwC'),
        Z = n('MWbm'),
        Q = n('t62R'),
        J = n('j7Bv'),
        $ = n('0yYu'),
        ee = n('rHpw'),
        te = n('v6aA'),
        ne = n('3XMw'),
        re = n.n(ne)
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var oe = { page: 'settings', section: 'contacts_dashboard' },
        ce = re.a.bbcafbd9,
        ie = g.createElement(
          re.a.I18NFormatMessage,
          { $i18n: 'ec152666' },
          g.createElement(
            Q.b,
            { link: 'https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends' },
            re.a.b8dd5e4d,
          ),
        ),
        se = re.a.b864be79,
        le = { headline: re.a.g5fa1090, text: re.a.h0d21912, confirmButtonLabel: re.a.e68b09b4 },
        ue = re.a.ca24589e,
        fe = function (e) {
          return e.id_str
        },
        de = function () {
          return null
        },
        pe = (function (e) {
          d()(n, e)
          var t = ae(n)
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
                return g.createElement(V.a, {
                  assumedItemHeight: 70,
                  cacheKey: 'CONTACTS_DASHBOARD',
                  footer: e._renderFooter(r),
                  identityFunction: fe,
                  items: n,
                  onNearEnd: e._handleFetchMoreContacts,
                  renderer: e._renderContact,
                })
              }),
              E()(u()(e), '_renderContact', function (t) {
                var n = t.id_str,
                  r = t.import_source,
                  o = t.vcard,
                  c = e._getContactProp(o.get('fn')) || ue,
                  i = e._getContactProperties(o.get('tel')),
                  s = e._getContactProperties(o.get('email')),
                  l = [].concat(a()(s), a()(i))
                return g.createElement(
                  Z.a,
                  { key: n, style: [[q.a.infoText, q.a.bottomBorder], he.contactContainer] },
                  g.createElement(J.a, { Icon: K.a, color: 'neutral', style: he.personIcon }),
                  g.createElement(
                    Z.a,
                    null,
                    g.createElement(Q.b, null, c),
                    l
                      ? l.map(function (e) {
                          return g.createElement(Q.b, { color: 'gray700', key: e, size: 'subtext2' }, e)
                        })
                      : null,
                    r ? g.createElement(Q.b, { color: 'gray700', size: 'subtext2' }, 'Imported from '.concat(r)) : null,
                  ),
                )
              }),
              E()(u()(e), '_renderFooter', function (e) {
                return e === C.a.LOADING
                  ? g.createElement(
                      Z.a,
                      { style: he.loadingContainer },
                      g.createElement(U.a, { fetchStatus: e, render: de }),
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
                    ? Object(B.a)(
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
                  return g.createElement(
                    Y.b,
                    { namespace: oe },
                    g.createElement(
                      G.a,
                      null,
                      g.createElement(
                        z.a,
                        { location: a, title: ce },
                        g.createElement(v.a, {
                          confirmationSheetConfirmButtonLabel: le.confirmButtonLabel,
                          confirmationSheetConfirmButtonType: 'destructiveFilled',
                          confirmationSheetHeadline: le.headline,
                          confirmationSheetText: le.text,
                          label: se,
                          onConfirmationSheetConfirm: this._handleRemoveContacts,
                        }),
                        g.createElement(X.a, null, ie),
                        g.createElement($.a, null),
                        g.createElement(W.a, {
                          fetch: n,
                          fetchStatus: t.length > 0 ? C.a.LOADED : r,
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
        })(g.Component)
      E()(pe, 'contextType', te.a)
      var he = ee.a.create(function (e) {
        return {
          contactContainer: { flexDirection: 'row', flexWrap: 'wrap' },
          personIcon: { marginRight: e.spaces.space12 },
          loadingContainer: { paddingVertical: e.spaces.space16, justifyContent: 'center' },
        }
      })
      t.default = H(pe)
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
        E = n('3XMw'),
        g = n.n(E),
        v = n('7FtF'),
        _ = n('iCwC'),
        S = n('MWbm'),
        w = n('t62R'),
        O = n('6vad'),
        C = n('p+r5')
      function P(e) {
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
      var A = g.a.a999cb72,
        T = g.a.dec3c9b8,
        R = g.a.acc20811,
        k = g.a.d1091f50,
        L = g.a.i2209530,
        I = (function (e) {
          u()(n, e)
          var t = P(n)
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
                    c = b.createElement(
                      w.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      k,
                    )
                  return b.createElement(
                    v.a,
                    { location: t, onSubmit: this._handleSubmit, submitLabel: a, submitType: o, title: r },
                    b.createElement(O.b, { text: r }),
                    b.createElement(
                      S.a,
                      { style: [_.a.viewItem, _.a.bottomBorder] },
                      b.createElement(w.b, { color: 'gray700', size: 'subtext2' }, n),
                    ),
                    b.createElement(C.a, {
                      helperText: c,
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
                    r = e.promptForPassword,
                    a = e.title
                  return r ? this._renderPasswordPrompt() : b.createElement(v.a, { location: n, title: a }, t || null)
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(I, 'defaultProps', {
        children: null,
        promptForPassword: !1,
        reenterPasswordLabel: R,
        saveChangesHeaderLabel: A,
        submitLabel: L,
      })
    },
    '9JoG': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConnectedAccounts', function () {
          return fe
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
        E = n('k49u'),
        g = n('1YZw'),
        v = n('55TG'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = n('P1r1'),
        O = n('vEo5'),
        C = Object(_.a)()
          .propsFromState(function () {
            return { userEmail: O.selectFirstEmail, fetchStatus: w.o, ssoConnections: w.B }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_CONNECTED_APPS_SCREEN_CONTEXT',
              ),
              deleteSSOConnection: w.d,
              fetchDevicesIfNeeded: O.fetchDevicesIfNeeded,
              fetchSettingsIfNeeded: w.f,
              verifyPassword: v.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'connected_accounts', component: 'delete_sso_connection' }),
        P = n('3XMw'),
        A = n.n(P),
        T = n('yoO3'),
        R = n('iCwC'),
        k = n('MWbm'),
        L = n('t62R'),
        I = n('6vad'),
        F = n('p+r5'),
        j = n('mw9i'),
        D = n('/yvb'),
        x = n('rHpw')
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
      var M = A.a.dec3c9b8,
        H = A.a.d1091f50,
        U = A.a.i4efb2e3,
        B = A.a.g9677c6d,
        K = A.a.c8cb0b4c,
        V = A.a.fe36fe1f,
        G = (function (e) {
          u()(n, e)
          var t = N(n)
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
                        y()(t, E.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: K })
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
                    c = b.createElement(
                      L.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      H,
                    )
                  return b.createElement(
                    b.Fragment,
                    null,
                    n ? b.createElement(I.b, { text: n }) : null,
                    b.createElement(
                      k.a,
                      { style: [R.a.viewItem, R.a.bottomBorder] },
                      t ? b.createElement(L.b, { color: 'gray700', size: 'subtext2' }, U({ ssoProvider: t })) : null,
                    ),
                    b.createElement(F.a, {
                      errorText: o,
                      helperText: c,
                      invalid: !!o,
                      label: M,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: a,
                    }),
                    b.createElement(
                      j.a,
                      { style: W.buttonContainer },
                      b.createElement(
                        D.a,
                        { onPress: this._handlePasswordSubmit, style: W.button, type: 'brandFilled' },
                        B,
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(G, 'defaultProps', { titleHeader: V })
      var W = x.a.create(function (e) {
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
        Y = G,
        X = n('7FtF'),
        z = n('cnVF'),
        q = n('xHsv'),
        Z = n('csss'),
        Q = n('jtO7'),
        J = n('0yYu'),
        $ = n('G1WX'),
        ee = n('6Rrp'),
        te = n('jmcQ'),
        ne = n('iKTg')
      function re(e) {
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
      var ae = A.a.h1abfbcd,
        oe = A.a.a45d71b8,
        ce = A.a.d84ed6b1,
        ie = A.a.i51130d4,
        se = A.a.e28901f2,
        le = A.a.cf8560be,
        ue = A.a.ead2429e,
        fe = (function (e) {
          u()(n, e)
          var t = re(n)
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
                return b.createElement(
                  T.a,
                  null,
                  b.createElement(
                    X.a,
                    { location: r, screenType: 'secondaryDetail', title: ae },
                    c
                      ? b.createElement(Y, {
                          createLocalApiErrorHandler: n,
                          onSubmitPassword: e._handlePasswordSubmit,
                          ssoProvider: i,
                          verifyPassword: a,
                        })
                      : b.createElement(
                          b.Fragment,
                          null,
                          b.createElement(q.a, { description: oe }),
                          e._renderSSOProviderPivots(),
                        ),
                  ),
                )
              }),
              y()(s()(e), '_renderSSOProviderPivots', function () {
                var t = e.props,
                  n = t.ssoConnections,
                  r = t.userEmail,
                  a = b.createElement(
                    L.b,
                    { color: 'green500', size: 'subtext2' },
                    b.createElement(ee.a, null),
                    ' ',
                    le,
                  )
                if (n && n.r.ok.length) {
                  var o = n.r.ok
                  return o.map(function (t, n) {
                    var c = t.ssoProvider,
                      i = o.length - 1,
                      s = e._getSSOProviderProps(c) || {},
                      l = s.ssoProviderLabel,
                      u = s.ssoProviderThumbnail
                    return b.createElement(
                      k.a,
                      { key: n },
                      b.createElement(Z.a, {
                        description: a,
                        label: l,
                        renderRightContent: r ? e._renderUserEmail(r) : void 0,
                        thumbnail: u,
                        thumbnailSize: 'large',
                      }),
                      b.createElement(Q.a, {
                        color: 'red500',
                        label: ce,
                        onPress: e._handleOnPress({ ssoProvider: c }),
                      }),
                      n < i ? b.createElement(J.a, null) : null,
                    )
                  })
                }
              }),
              y()(s()(e), '_renderUserEmail', function (e) {
                return function () {
                  return b.createElement(L.b, null, e)
                }
              }),
              y()(s()(e), '_getSSOProviderProps', function (e) {
                var t = e.toLowerCase(),
                  n = x.a.isDarkMode() ? x.a.theme.colors.white : void 0
                switch (t) {
                  case z.A.Google:
                    return { ssoProviderThumbnail: b.createElement(te.a, null), ssoProviderLabel: ie }
                  case z.A.Apple:
                    return {
                      ssoProviderThumbnail: b.createElement(ne.a, { style: { color: n } }),
                      ssoProviderLabel: se,
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
                    r({ text: ue({ ssoProvider: c }) }),
                      e.setState({ showPasswordDialog: !1, ssoConnectionToDelete: void 0 })
                  })
                  .catch(
                    a(
                      ((t = {}),
                      y()(t, E.a.PasswordVerificationRequired, {
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
                  return b.createElement($.a, {
                    fetchStatus: e,
                    onRequestRetry: this._handleFetchRetry,
                    render: this._render,
                  })
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = C(fe)
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
          return ce
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
        y = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ZNT5')),
        b = n('RhWx'),
        E = n.n(b),
        g = n('T0aG'),
        v = n.n(g),
        _ = n('m3Bd'),
        S = n.n(_),
        w = n('vWJI'),
        O = n('PiaM'),
        C = n('9/1j'),
        P = n('Re5t')
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
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.cursor,
            r = []
          if (e.result.users.length > 0) {
            var a = n && 'object' === v()(n) ? n.sortValue : Date.now(),
              o = a - 1
            e.result.users.forEach(function (e) {
              r.push(O.l({ id: e, sortIndex: ''.concat(o), displayType: P.a.UserDetailed })), (o -= 1)
            }),
              r.push.apply(r, E()(k(e, o)))
          }
          return L(r, e.entities, I)
        },
        k = function (e, t) {
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
        L = function (e, t, n) {
          return {
            globalObjects: t,
            timeline: {
              responseObjects: n,
              instructions: e.length ? [{ type: C.a.AddEntries, parameters: { entries: e } }] : [],
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
      function j(e) {
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
      var D = function (e) {
          return Object(y.a)({
            timelineId: 'deviceFollowingLegacy-'.concat(e),
            getEndpoint: function (e) {
              return (
                (t = e.Friendships.fetchFollowing),
                function (e, n) {
                  var r = e.cursor,
                    a = S()(e, ['cursor']),
                    o = a
                  return r && 'object' === v()(r) && (o = T(T({}, a), {}, h()({}, r.param, r.id))), t(o, n)
                }
              )
              var t
            },
            getEndpointParams: function (t) {
              return j(j({}, t), {}, { user_id: e, type: 'sms,live' })
            },
            context: 'FETCH_FOLLOWING',
            perfKey: 'deviceFollowingLegacy',
            formatResponse: R,
          })
        },
        x = n('FIs5'),
        N = n('QIgh'),
        M = n('8UdT'),
        H = n('88ay'),
        U = n('Ka9G')
      function B(e, t) {
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
            ? B(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var V = K(K({}, Object(N.a)({ tweetDismissable: !0 })), {}, h()({}, M.b.User, Object(U.a)({ decoration: H.c }))),
        G = n('3XMw'),
        W = n.n(G),
        Y = n('tI3i'),
        X = n.n(Y),
        z = n('yoO3'),
        q = n('fTQJ'),
        Z = n('7JQg'),
        Q = n('7FtF'),
        J = n('v6aA')
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
      var ee = { page: 'settings', section: 'device_following' },
        te = W.a.e6b2d3de,
        ne = W.a.fd6f8a70,
        re = W.a.a820d092,
        ae = W.a.i2775c58,
        oe = function () {
          return m.createElement(x.a, { header: te, message: ne })
        },
        ce = (function (e) {
          s()(n, e)
          var t = $(n)
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
                  X()(!!e, 'loggedInUserId must be defined')
                  var n = D(e)
                  return m.createElement(
                    Z.b,
                    { namespace: ee },
                    m.createElement(
                      z.a,
                      null,
                      m.createElement(
                        Q.a,
                        { location: t, title: ae },
                        m.createElement(q.a, {
                          entryConfiguration: V,
                          loadingAccessibilityLabel: re,
                          module: n,
                          renderEmptyState: oe,
                          title: ae,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(m.Component)
      h()(ce, 'contextType', J.a)
      t.default = ce
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
          return I
        }),
        n.d(t, 'e', function () {
          return F
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'c', function () {
          return v
        }),
        n.d(t, 'a', function () {
          return j
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
        w = n.n(S),
        O = (n('z84I'), n('RqPI')),
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
      var I = function (e) {
          return e.trends.settings && e.trends.settings.settings
        },
        F = function (e) {
          return e.trends.settings && e.trends.settings.fetchStatus
        },
        j = function () {
          return function (e, t) {
            return F(t()) === l.a.LOADED
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.api
                  return O.l(t())
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
            var o = T({}, w()(e, ['places']))
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
          return _
        })
      var r = n('ERkP'),
        a = n('kPZX'),
        o = n('rxPX'),
        c = n('0KEI'),
        i = Object(o.a)()
          .propsFromState(function () {
            return { browserPushAllowed: a.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(c.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PREFERENCES_SCREEN',
              ),
            }
          }),
        s = n('3XMw'),
        l = n.n(s),
        u = n('yoO3'),
        f = n('7JQg'),
        d = n('7FtF'),
        p = n('xHsv'),
        h = n('csss'),
        m = l.a.hee41732,
        y = l.a.e75f25a8,
        b = l.a.bcd81cab,
        E = l.a.da867c58,
        g = l.a.i859a9d3,
        v = { page: 'settings', section: 'preferences' }
      function _(e) {
        var t = e.browserPushAllowed,
          n = e.location
        return r.createElement(
          f.b,
          { namespace: v },
          r.createElement(
            u.a,
            null,
            r.createElement(
              d.a,
              { location: n, title: b },
              r.createElement(p.a, {
                description: E,
                learnMoreLabel: g,
                learnMoreLink: 'https://help.twitter.com/managing-your-account/notifications-on-mobile-devices',
              }),
              t ? r.createElement(h.a, { label: m, link: '/settings/push_notifications' }) : null,
              r.createElement(h.a, { label: y, link: '/settings/email_notifications' }),
            ),
          ),
        )
      }
      var S = i(_)
      t.default = S
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
        E = (n('WNMA'), n('KqXw'), n('dZRF')),
        g = n('rxPX'),
        v = n('0KEI'),
        _ = function (e, t) {
          return t.match.params.appId
        },
        S = function (e, t) {
          return E.a.selectAppsById(e, t.match.params.appId)
        },
        w = Object(g.a)()
          .propsFromState(function () {
            return { appId: _, fetchStatus: E.d, details: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('APPLICATION_DETAIL'),
              fetchApplication: E.c,
              revokeApplication: E.a.revokeApplication,
              revokeOauth2Token: E.a.revokeOauth2Token,
            }
          })
          .withAnalytics({ page: 'settings', section: 'application_detail' }),
        O = n('v//M'),
        C = n('3XMw'),
        P = n.n(C),
        A = n('oQhu'),
        T = n('yoO3'),
        R = n('jtO7'),
        k = n('MWbm')
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
      var I = P.a.da6cdba7,
        F = P.a.ef1d3dcc,
        j = (function (e) {
          u()(n, e)
          var t = L(n)
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
                  return b.createElement(
                    k.a,
                    null,
                    n
                      ? b.createElement(R.a, { color: 'primary', label: F, link: t })
                      : b.createElement(R.a, { color: 'red500', label: I, onPress: this._handleRevokeApp }),
                  )
                },
              },
            ]),
            n
          )
        })(b.PureComponent),
        D = n('av9q'),
        x = n('7FtF'),
        N = n('prCu'),
        M = n('jm1/'),
        H = n('FIs5'),
        U = n('t62R'),
        B = n('csss'),
        K = n('6vad'),
        V = n('htQn'),
        G = n('o1YB'),
        W = n('U+bB')
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
      var X = P.a.g8d1b99b,
        z = P.a.eafcc76a,
        q = P.a.j3998a15,
        Z = P.a.a6845663,
        Q = P.a.b2347f7b,
        J = P.a.e1fda16d,
        $ = P.a.da1201c6,
        ee = P.a.gb8d09b9,
        te = P.a.g6dc09af,
        ne = P.a.a6e6e897,
        re = P.a.cde3b9ae,
        ae = P.a.g0d78139,
        oe = P.a.c9b35b9e,
        ce = P.a.e0191264,
        ie = P.a.b73e1e89,
        se = 'https://support.twitter.com/articles/20170805',
        le = 'https://support.twitter.com/forms/platform',
        ue = 'oauth1',
        fe = 'oauth2',
        de = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(
                s()(e),
                '_getSortedCanViewScopes',
                Object(A.a)(function (e) {
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
                Object(A.a)(function (e) {
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
                if (!n) return b.createElement(H.a, { header: J, message: $ })
                var r = { app_id: n.app_id, app_name: n.name },
                  a = b.createElement(
                    k.a,
                    { style: M.a.itemContainer },
                    b.createElement(U.b, { color: 'gray700', size: 'subtext2' }, e._renderApprovalDate(n.approved)),
                  )
                return b.createElement(
                  k.a,
                  null,
                  b.createElement(B.a, {
                    description: n.organization,
                    label: n.name,
                    thumbnail: b.createElement(W.a, { accessibilityLabel: '', source: n.img_url, style: M.a.avatar }),
                  }),
                  n.organization_url
                    ? b.createElement(R.a, { color: 'primary', label: n.organization_url, link: n.organization_url })
                    : null,
                  b.createElement(
                    k.a,
                    { style: M.a.itemContainer },
                    b.createElement(U.b, { color: 'gray700', size: 'subtext2' }, n.description),
                  ),
                  a,
                  b.createElement(K.b, { text: te }),
                  t.map(function (t) {
                    return b.createElement(
                      k.a,
                      { key: t.token },
                      e._renderPermissions(t),
                      t.ios
                        ? null
                        : b.createElement(j, {
                            onRevoke: e._handleRevokeApp,
                            reportApplicationHref: ''.concat(le, '?').concat(Object(N.stringify)(r)),
                            revoked: !!t.revoked,
                            token: t.token,
                            tokenType: t.token_type || ue,
                          }),
                    )
                  }),
                  n.ios
                    ? b.createElement(
                        V.a,
                        { link: se, style: [M.a.itemContainer, M.a.center] },
                        b.createElement(U.b, { color: 'link' }, ie),
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
                  if (null != e.scopes && e.token_type === fe) {
                    var t = Array.from(e.scopes)
                    return b.createElement(
                      k.a,
                      { style: M.a.permissionContainer },
                      this._renderCanViewScopesList(t),
                      this._renderCanDoScopes(t),
                    )
                  }
                  return b.createElement(
                    b.Fragment,
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
                  return t.length ? b.createElement(D.a, { scopes: t, size: 'subtext2', title: z }) : null
                },
              },
              {
                key: '_renderCanDoScopes',
                value: function (e) {
                  var t = this._getSortedCanDoScopes(e)
                  return t.length ? b.createElement(D.a, { scopes: t, size: 'subtext2', title: q }) : null
                },
              },
              {
                key: '_renderReadWritePermissions',
                value: function (e) {
                  var t = null
                  return (
                    e.can_read_dms ? (t = ae) : e.can_write ? (t = re) : e.can_read && (t = ne),
                    t ? b.createElement(G.a, { label: t }) : null
                  )
                },
              },
              {
                key: '_renderEmailPermission',
                value: function (e) {
                  return e.email_access ? b.createElement(G.a, { label: ee }) : null
                },
              },
              {
                key: '_renderAdsPermission',
                value: function (e) {
                  var t = null
                  return (
                    e.has_ads_read_write_access ? (t = ce) : e.has_ads_read_access && (t = oe),
                    t ? b.createElement(G.a, { label: t }) : null
                  )
                },
              },
              {
                key: '_renderApprovalDate',
                value: function (e) {
                  var t = new Date(Number(e)),
                    n = Z({ date: X(t) })
                  return b.createElement('time', { dateTime: t.toISOString() }, n)
                },
              },
              {
                key: '_revokeApplication',
                value: function (e, t) {
                  var n = this.props,
                    r = n.createLocalApiErrorHandler,
                    a = n.revokeApplication,
                    o = n.revokeOauth2Token
                  t === fe ? o(e).catch(r({ showToast: !0 })) : a(e).catch(r({ showToast: !0 }))
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
                  return b.createElement(
                    T.a,
                    null,
                    b.createElement(
                      x.a,
                      { location: r, title: o },
                      b.createElement(O.a, {
                        accessibilityLabel: Q,
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
        })(b.Component)
      t.default = w(de)
    },
    NTtI: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('Lsrn'),
        i = n('k/Ka')
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
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [c.a.root, e.style],
              viewBox: '0 0 200 200',
            },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('circle', { cx: '100', cy: '100', fill: '#97E3FF', r: '100' }),
            o.createElement('path', {
              d: 'M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z',
              fill: '#005FD1',
            }),
            o.createElement('path', {
              d: 'M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z',
              fill: '#1DA1F2',
            }),
            o.createElement('ellipse', { cx: '123.283', cy: '100.225', fill: '#97E3FF', rx: '6.567', ry: '45.075' }),
            o.createElement('path', {
              d: 'M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z',
              fill: '#71C9F8',
            }),
            o.createElement('path', {
              d: 'M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267',
              fill: '#005FD1',
            }),
            o.createElement('path', {
              d: 'M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z',
              fill: '#1DA1F2',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 200, height: 200 }), (t.a = u)
    },
    PCpk: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TemporaryPasswordScreen', function () {
          return ee
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
        E = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('yH/f'), n('oEOe')),
        g = n('kGix'),
        v = n('Ssj5')
      function _(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = 'temporaryPassword',
        O = Object.freeze({
          REQUEST: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_REQUEST',
          SUCCESS: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_SUCCESS',
          FAILURE: 'rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_FAILURE',
        }),
        C = { fetchStatus: g.a.NONE }
      v.a.register(
        y()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case O.REQUEST:
              return S(S({}, e), {}, { fetchStatus: g.a.LOADING })
            case O.SUCCESS:
              var n = t.payload && t.payload.temporary_password
              return S(S({}, e), {}, { temporaryPassword: n, fetchStatus: g.a.LOADED })
            case O.FAILURE:
              return S(S({}, e), {}, { fetchStatus: g.a.FAILED })
            default:
              return e
          }
        }),
      )
      var P = n('1YZw'),
        A = n('hqKg'),
        T = n('0KEI'),
        R = n('oEGd'),
        k = Object(A.createSelector)(
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
        L = {
          addToast: P.b,
          createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TEMPORARY_PASSWORD_SCREEN',
          ),
          fetchTemporaryPassword: function () {
            return function (e, t, n) {
              var r = n.api
              return Object(E.b)(e, { request: r.Settings.fetchTemporaryPassword })({
                actionTypes: O,
                context: 'FETCH_TEMPORARY_PASSWORD',
              })
            }
          },
        },
        I = Object(R.g)(k, L),
        F = n('v//M'),
        j = n('N9bX'),
        D = n('3XMw'),
        x = n.n(D),
        N = n('yoO3'),
        M = n('7FtF'),
        H = n('XUJi'),
        U = n('t62R'),
        B = n('/yvb'),
        K = n('atVN'),
        V = n('CaKu'),
        G = n('MWbm'),
        W = n('7JQg')
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
      var X = x.a.j2327f80,
        z = x.a.fbfeaf8e,
        q = x.a.h4a8bd11,
        Z = x.a.f88553c8,
        Q = x.a.g247dc1b,
        J = x.a.f2d47b4d,
        $ = x.a.d70fceac,
        ee = (function (e) {
          u()(n, e)
          var t = Y(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_renderContent', function () {
                var t = e.props.temporaryPassword
                return b.createElement(
                  b.Fragment,
                  null,
                  b.createElement(
                    G.a,
                    { style: H.a.centeredContainer },
                    b.createElement(
                      U.b,
                      { align: 'center', size: 'title2', weight: 'bold' },
                      t ? Object(j.b)(t) : null,
                    ),
                  ),
                  V.a.isAvailable()
                    ? b.createElement(
                        G.a,
                        { style: H.a.centeredContainer },
                        b.createElement(
                          B.a,
                          { alignContent: 'center', onPress: e._handleCopy, type: 'brandFilled' },
                          q,
                        ),
                      )
                    : null,
                  b.createElement(
                    G.a,
                    { style: H.a.centeredContainer },
                    b.createElement(B.a, { alignContent: 'center', onPress: e._handleGenerate, type: 'brandText' }, z),
                  ),
                )
              }),
              y()(s()(e), '_handleCopy', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.temporaryPassword
                r && (V.a.setString(r), n({ text: Z }))
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
                  return b.createElement(
                    N.a,
                    null,
                    b.createElement(
                      M.a,
                      { location: n, title: X },
                      b.createElement(K.a, null, b.createElement(U.b, { color: 'gray700' }, J)),
                      b.createElement(K.a, null, b.createElement(U.b, { color: 'gray700' }, $)),
                      b.createElement(F.a, {
                        accessibilityLabel: Q,
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
        })(b.Component)
      t.default = Object(W.c)({ page: 'settings', section: 'temporary_password' })(I(ee))
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
        E = n('k49u'),
        g = n('hqKg'),
        v = n('0KEI'),
        _ = n('oEGd'),
        S = n('55TG'),
        w = Object(g.createSelector)(S.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        O = {
          verifyPassword: S.b,
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        C = Object(_.g)(w, O, null, { pure: !1 }),
        P = n('kGix'),
        A = n('v//M'),
        T = n('3XMw'),
        R = n.n(T),
        k = n('5FtR'),
        L = n('iCwC'),
        I = n('MWbm'),
        F = n('TnY3'),
        j = n('t62R'),
        D = n('6vad'),
        x = n('p+r5'),
        N = n('mw9i'),
        M = n('/yvb'),
        H = n('rHpw'),
        U = n('v6aA')
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var K = R.a.fe36fe1f,
        V = R.a.dec3c9b8,
        G = R.a.hccd9dbd,
        W = R.a.d1091f50,
        Y = R.a.g9677c6d,
        X = R.a.c8cb0b4c,
        z = (function (e) {
          u()(n, e)
          var t = B(n)
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
                        y()(t, E.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: X })
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
                      y()(t, E.a.PasswordVerificationRequired, {
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
                  e.fetchStatus === P.a.LOADED && this.props.fetchStatus === P.a.NONE && this._makeFetch()
                },
              },
              {
                key: '_renderPasswordPrompt',
                value: function () {
                  var e = this.props.titleHeader,
                    t = this.state.passwordError,
                    n = b.createElement(
                      j.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      W,
                    )
                  return b.createElement(
                    b.Fragment,
                    null,
                    e ? b.createElement(D.b, { text: e }) : null,
                    b.createElement(
                      I.a,
                      { style: [L.a.viewItem, L.a.bottomBorder] },
                      b.createElement(j.b, { color: 'gray700', size: 'subtext2' }, G),
                    ),
                    b.createElement(x.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: V,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    b.createElement(
                      N.a,
                      { style: q.buttonContainer },
                      b.createElement(
                        M.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: q.button, type: 'brandFilled' },
                        Y,
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
                    o = t === P.a.FAILED && a
                  return b.createElement(
                    b.Fragment,
                    null,
                    o
                      ? this._passwordlessSsoEnabled
                        ? b.createElement(k.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : b.createElement(A.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(z, 'contextType', U.a), y()(z, 'defaultProps', { titleHeader: K })
      var q = H.a.create(function (e) {
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
        Z = C(z)
      t.a = Object(F.a)(Z)
    },
    Rdmj: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Se
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
        v = n('PFE4'),
        _ = n('rxPX'),
        S = Object(_.a)().propsFromActions(function () {
          return { cleanupBlockList: v.c }
        }),
        w = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('EbOo')),
        O = n('1YZw'),
        C = n('G6rE'),
        P = n('0KEI'),
        A = function (e, t) {
          return C.e.select(e, t.userId)
        },
        T = Object(_.a)()
          .propsFromState(function () {
            return { user: A }
          })
          .propsFromActions(function () {
            return {
              addToast: O.b,
              block: C.e.block,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('AUTOBLOCK_BUTTON'),
              unblock: C.e.unblock,
            }
          })
          .withAnalytics({ element: 'autoblock_button' }),
        R = n('3XMw'),
        k = n.n(R),
        L = n('u0B7'),
        I = n('mjJ+'),
        F = n('/yvb'),
        j = n('24HD'),
        D = n('Bwid'),
        x = n('pu5c')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var M = k.a.cf67f6d5,
        H = k.a.jcba15d2,
        U = k.a.fcd4d489,
        B = k.a.i2b9632d,
        K = k.a.a9fd20be,
        V = T(
          (function (e) {
            d()(n, e)
            var t = N(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                E()(u()(e), 'state', { showBlockConfirmation: !1, showRemoveAutoblockConfirmation: !1 }),
                E()(u()(e), '_renderMenu', function (t) {
                  return g.createElement(I.a, {
                    items: e._getActionItems(),
                    onCloseRequested: t,
                    shouldCloseOnClick: !0,
                  })
                }),
                E()(u()(e), '_removeAutoblockAction', function () {
                  return { text: H, onClick: e._showRemoveAutoblockConfirmation, Icon: D.a }
                }),
                E()(u()(e), '_blockAction', function () {
                  var t
                  return {
                    text: U({
                      screenName: (null === (t = e.props.user) || void 0 === t ? void 0 : t.screen_name) || '',
                    }),
                    onClick: e._showBlockConfirmation,
                    Icon: x.a,
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
                    n({ text: K }), e._scribeAction('block')
                  }, a(w.a))
                }),
                E()(u()(e), '_handleRemoveAutoblock', function () {
                  e.setState({ showRemoveAutoblockConfirmation: !1 })
                  var t = e.props,
                    n = t.addToast,
                    r = t.createLocalApiErrorHandler
                  ;(0, t.unblock)(t.userId).then(function (t) {
                    n({ text: B }), e._scribeAction('unblock')
                  }, r(L.a))
                }),
                e
              )
            }
            return (
              s()(n, [
                {
                  key: 'render',
                  value: function () {
                    return g.createElement(
                      g.Fragment,
                      null,
                      g.createElement(
                        F.a,
                        { accessibilityLabel: M, renderMenu: this._renderMenu, type: 'destructiveFilled' },
                        M,
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
                    return Object(j.j)({
                      confirmation: Object(j.i)(t),
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
                    return Object(j.j)({
                      confirmation: Object(j.f)(t),
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
          })(g.Component),
        ),
        G = n('PnFR'),
        W = n('8UdT'),
        Y = n('S/Qv'),
        X = n('5Y9N'),
        z = function (e, t) {
          return C.e.select(e, t.userId)
        },
        q = Object(_.a)()
          .propsFromState(function () {
            return { user: z }
          })
          .propsFromActions(function () {
            return {
              addToast: O.b,
              block: C.e.block,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('UNBLOCK_BUTTON'),
              unblock: C.e.unblock,
            }
          })
          .withAnalytics(),
        Z = n('Rp9C')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var J,
        $ = k.a.if594962,
        ee = k.a.a6450e83,
        te = k.a.i2b9632d,
        ne = k.a.a9fd20be,
        re = q(
          (function (e) {
            d()(n, e)
            var t = Q(n)
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
                        n({ text: te }), e._scribeAction('unblock')
                      }, a(L.a))
                    : r(i).then(function (t) {
                        n({ text: ne }), e._scribeAction('block')
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
                      var t = e.blocking ? $ : ee
                      return g.createElement(
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
                      a = r ? [Z.a.getUserItem(r)] : []
                    n.scribe({ action: e, data: { items: a } })
                  },
                },
              ]),
              n
            )
          })(g.Component),
        ),
        ae = n('Ka9G')
      function oe(e, t) {
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
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? oe(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ie = ce(
          ce({}, Object(X.a)({})),
          {},
          ((J = {}),
          E()(J, W.b.Message, Object(Y.a)({})),
          E()(
            J,
            W.b.User,
            Object(ae.a)({
              decoration: function (e) {
                var t = e.isAutoblocking,
                  n = e.userId
                return t ? g.createElement(V, { userId: n }) : g.createElement(re, { userId: n })
              },
            }),
          ),
          E()(J, W.b.TimelineCursor, Object(G.a)({})),
          J),
        ),
        se = n('oQhu'),
        le = n('yoO3'),
        ue = n('fTQJ'),
        fe = n('7JQg'),
        de = n('eM8g'),
        pe = n('t62R'),
        he = n('FIs5'),
        me = n('0yYu')
      function ye(e) {
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
      var be = k.a.a5f32aa2,
        Ee = k.a.ef731b13,
        ge = k.a.i859a9d3,
        ve = g.createElement(
          k.a.I18NFormatMessage,
          { $i18n: 'ab3bf5a7' },
          g.createElement(pe.b, { link: 'https://support.twitter.com/articles/117063' }, k.a.e554ba82),
        ),
        _e = (function (e) {
          d()(n, e)
          var t = ye(n)
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
                Object(se.a)(function (e) {
                  return Object(v.b)(e)
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
                Object(se.a)(function (e, t, n, r) {
                  return function () {
                    var e = g.createElement('div', null, r, ' ', t && g.createElement(pe.b, { link: t }, ge))
                    return g.createElement(he.a, { header: n, message: e })
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
                  return g.createElement(
                    le.a,
                    null,
                    'autoblock' === this.props.blockType
                      ? null
                      : g.createElement('div', null, g.createElement(de.a, null, ve), g.createElement(me.a, null)),
                    g.createElement(ue.a, {
                      entryConfiguration: ie,
                      loadingAccessibilityLabel: Ee,
                      module: this._getLegacyModule(),
                      renderEmptyState: this._getEmptyStateRenderer(),
                      title: be,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component),
        Se = function (e) {
          var t = e.blockType,
            n = e.emptyStateMessage,
            r = e.emptyStateTitle,
            o = e.scribeNamespace,
            c = e.supportUrl
          return S(function (e) {
            return g.createElement(
              fe.b,
              { namespace: o },
              g.createElement(
                _e,
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
        c = n('5UID'),
        i = n('3GUV'),
        s = n('iBK2'),
        l = o.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(s.b, n)
          return t ? o.createElement(c.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: l }), (t.a = u)
    },
    TetP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTrendsScreen', function () {
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
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        E = n('k49u'),
        g = n('P1r1'),
        v = n('EyIn'),
        _ = n('+OgG'),
        S = n('rxPX'),
        w = n('0KEI'),
        O = Object(S.a)()
          .propsFromState(function () {
            return { allSettings: g.g, placeTrendSettings: v.d, placeTrendSettingsFetchStatus: v.e }
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
              fetchPlaceTrendSettingsIfNeeded: v.a,
              updateWoeTrendSettings: _.a,
              updatePlaceTrendSettings: v.j,
            }
          })
          .withAnalytics({ page: 'guide', section: 'settings' }),
        C = n('v//M'),
        P = n('LVU8'),
        A = n('jHSc'),
        T = n('3XMw'),
        R = n.n(T),
        k = n('OySi'),
        L = 'currentLocation',
        I = 'exploreLocations',
        F = n('MWbm'),
        j = n('v6aA'),
        D = n('cCdp'),
        x = n('0yYu'),
        N = n('csss'),
        M = n('6vad')
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
      var U = R.a.bc7fd99f,
        B = R.a.c5f4befa,
        K = R.a.j018f2a1,
        V = R.a.e2f1665f,
        G = R.a.e5e88f4f,
        W = R.a.jaaa8984,
        Y = R.a.i4d54b0e,
        X = R.a.df9f03c8,
        z = R.a.c6cf5c7d,
        q = R.a.a55db872,
        Z = R.a.h0b5152e,
        Q = R.a.dfeada5d,
        J = 'Worldwide',
        $ = R.a.ac854308,
        ee = R.a.d429c942,
        te = 'is_unified_trends',
        ne = 'use_current_location',
        re = 'use_personalized_trends',
        ae = '/settings/trends/location',
        oe = '/settings/explore/location',
        ce = '/settings/explore',
        ie = (function (e) {
          u()(n, e)
          var t = H(n)
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
                  u = ((r = {}), y()(r, E.a.AppInReadOnlyMode, { customAction: P.b }), y()(r, 'showToast', !0), r)
                e._usePlaceTrendSettings ? i(l).catch(c(u)) : s(l).catch(c(u)),
                  o.scribe({ element: 'personalized_trends', action: 'toggle' })
              }),
              y()(s()(e), '_renderWoeContent', function () {
                var t = e.props,
                  n = t.personalizedTrends,
                  r = t.trendLocation,
                  a = (r && r[0] && r[0].name) || J
                return b.createElement(
                  F.a,
                  null,
                  b.createElement(D.a, {
                    checked: n,
                    helpText: X,
                    label: Y,
                    name: 'personalized_trends',
                    onChange: e._handleItemChanged,
                  }),
                  !n &&
                    b.createElement(
                      F.a,
                      null,
                      b.createElement(x.a, null),
                      b.createElement(N.a, { description: a, label: Z, link: ae }),
                    ),
                )
              }),
              y()(s()(e), '_renderPlaceLoader', function () {
                var t = e.props.placeTrendSettingsFetchStatus
                return b.createElement(C.a, {
                  accessibilityLabel: U,
                  fetchStatus: t,
                  onRequestRetry: e._handleRetry,
                  render: e._renderPlaceContent,
                })
              }),
              y()(s()(e), '_renderPlaceContent', function () {
                var t = e.props,
                  n = t.location,
                  r = t.placeTrendSettings,
                  a = n.pathname === ce,
                  o = r.places && r.places[0] && r.places[0].name,
                  c = !a || !r[te],
                  i = a ? oe : ae
                return b.createElement(
                  F.a,
                  null,
                  b.createElement(M.b, { text: W }),
                  b.createElement(D.a, {
                    checked: r[ne],
                    helpText: G,
                    label: V,
                    name: ne,
                    onChange: e._handleItemChanged,
                    testID: L,
                  }),
                  !r[ne] &&
                    b.createElement(F.a, null, b.createElement(N.a, { description: o, label: Q, link: i, testID: I })),
                  c &&
                    b.createElement(
                      b.Fragment,
                      null,
                      b.createElement(x.a, null),
                      b.createElement(M.b, { text: q }),
                      b.createElement(D.a, {
                        checked: r[re],
                        helpText: z,
                        label: Y,
                        name: re,
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
                    n = e.location.pathname === ce,
                    r = this._usePlaceTrendSettings && n ? K : B
                  return b.createElement(
                    A.b,
                    { history: t, title: r },
                    this._usePlaceTrendSettings ? this._renderPlaceLoader() : this._renderWoeContent(),
                    this._policySectionUrl ? this._renderPolicySection() : null,
                  )
                },
              },
              {
                key: '_renderPolicySection',
                value: function () {
                  return b.createElement(
                    F.a,
                    null,
                    b.createElement(x.a, null),
                    b.createElement(M.b, { text: $ }),
                    b.createElement(k.a, { label: ee, link: this._policySectionUrl }),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(ie, 'contextType', j.a)
      t.default = O(ie)
    },
    UbIW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsContactsScreen', function () {
          return Z
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
        E = n('P1r1'),
        g = n('hqKg'),
        v = n('0KEI'),
        _ = n('oEGd'),
        S = Object(g.createSelector)(E.g, function (e) {
          return {
            discoverableByEmail: e.discoverable_by_email,
            discoverableByMobilePhone: e.discoverable_by_mobile_phone,
          }
        }),
        w = {
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_CONTACTS_SCREEN',
          ),
          deleteContacts: E.b,
          updateSettings: E.L,
        },
        O = Object(_.g)(S, w),
        C = n('3XMw'),
        P = n.n(C),
        A = n('yoO3'),
        T = n('7JQg'),
        R = n('7FtF'),
        k = n('xHsv'),
        L = n('6vad'),
        I = n('cCdp'),
        F = n('0yYu'),
        j = n('csss')
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
      var x = P.a.fd4d9068,
        N = P.a.ab987f3b,
        M = P.a.b033248c,
        H = P.a.a904e0ee,
        U = P.a.ebc41952,
        B = P.a.f40a6338,
        K = P.a.ac9314aa,
        V = P.a.d86a220e,
        G = 'https://help.twitter.com/safety-and-security/email-and-phone-discoverability-settings',
        W = P.a.ac77c66c,
        Y = P.a.bbcafbd9,
        X = P.a.jadf483e,
        z = P.a.i859a9d3,
        q = { page: 'settings', section: 'contacts' },
        Z = (function (e) {
          u()(n, e)
          var t = D(n)
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
                  return b.createElement(
                    T.b,
                    { namespace: q },
                    b.createElement(
                      A.a,
                      null,
                      b.createElement(
                        R.a,
                        { location: r, title: x },
                        b.createElement(k.a, { description: N }),
                        b.createElement(L.b, { text: M }),
                        b.createElement(k.a, { description: H }),
                        b.createElement(I.a, {
                          checked: t,
                          helpText: B,
                          label: U,
                          learnMoreLink: G,
                          name: 'discoverable_by_email',
                          onChange: this._handleItemChanged,
                        }),
                        b.createElement(I.a, {
                          checked: n,
                          helpText: V,
                          label: K,
                          learnMoreLink: G,
                          name: 'discoverable_by_mobile_phone',
                          onChange: this._handleItemChanged,
                        }),
                        b.createElement(F.a, null),
                        b.createElement(L.b, { text: W }),
                        b.createElement(k.a, {
                          description: X,
                          learnMoreLabel: z,
                          learnMoreLink:
                            'https://help.twitter.com/using-twitter/upload-your-contacts-to-search-for-friends',
                        }),
                        b.createElement(j.a, { label: Y, link: '/settings/contacts_dashboard' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = O(Z)
    },
    VaVF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BackupCodeScreen', function () {
          return ee
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
        E = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('yH/f'), n('oEOe')),
        g = n('kGix'),
        v = n('Ssj5')
      function _(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = 'backupCode',
        O = Object.freeze({
          REQUEST: 'rweb/backupCode/FETCH_BACKUP_CODE_REQUEST',
          SUCCESS: 'rweb/backupCode/FETCH_BACKUP_CODE_SUCCESS',
          FAILURE: 'rweb/backupCode/FETCH_BACKUP_CODE_FAILURE',
        }),
        C = { fetchStatus: g.a.NONE }
      v.a.register(
        y()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case O.REQUEST:
              return S(S({}, e), {}, { fetchStatus: g.a.LOADING })
            case O.SUCCESS:
              var n = t.payload && t.payload.codes
              return S(S({}, e), {}, { backupCode: n && n[0], fetchStatus: g.a.LOADED })
            case O.FAILURE:
              return S(S({}, e), {}, { fetchStatus: g.a.FAILED })
            default:
              return e
          }
        }),
      )
      var P = n('1YZw'),
        A = n('hqKg'),
        T = n('0KEI'),
        R = n('oEGd'),
        k = Object(A.createSelector)(
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
        L = {
          addToast: P.b,
          createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_BACKUP_CODE_SCREEN',
          ),
          fetchBackupCode: function () {
            return function (e, t, n) {
              var r = n.api
              return Object(E.b)(e, { request: r.Settings.fetchBackupCode })({
                actionTypes: O,
                context: 'FETCH_BACKUP_CODE',
              })
            }
          },
          fetchNewBackupCode: function () {
            return function (e, t, n) {
              var r = n.api
              return Object(E.b)(e, { request: r.Settings.fetchNewBackupCode })({
                actionTypes: O,
                context: 'FETCH_BACKUP_CODE',
              })
            }
          },
        },
        I = Object(R.g)(k, L),
        F = n('v//M'),
        j = n('yoO3'),
        D = n('7FtF'),
        x = n('XUJi'),
        N = n('t62R'),
        M = n('/yvb'),
        H = n('atVN'),
        U = n('CaKu'),
        B = n('MWbm'),
        K = n('7JQg'),
        V = n('3XMw'),
        G = n.n(V)
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Y = G.a.i3bb3f78,
        X = G.a.ec6a76ef,
        z = G.a.f2c3c31c,
        q = G.a.f88553c8,
        Z = G.a.e8016b64,
        Q = G.a.c4ca22bc,
        J = function (e) {
          return (e.match(/.{1,4}/g) || [e]).join(' ')
        },
        $ = b.createElement(N.b, { link: 'https://help.twitter.com/managing-your-account/two-factor-authentication' }),
        ee = (function (e) {
          u()(n, e)
          var t = W(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_renderContent', function () {
                var t = e.props.backupCode
                return b.createElement(
                  b.Fragment,
                  null,
                  b.createElement(
                    B.a,
                    { style: x.a.centeredContainer },
                    b.createElement(N.b, { align: 'center', size: 'title2', weight: 'bold' }, t ? J(t) : null),
                  ),
                  U.a.isAvailable()
                    ? b.createElement(
                        B.a,
                        { style: x.a.centeredContainer },
                        b.createElement(
                          M.a,
                          { alignContent: 'center', onPress: e._handleCopy, type: 'brandFilled' },
                          z,
                        ),
                      )
                    : null,
                  b.createElement(
                    B.a,
                    { style: x.a.centeredContainer },
                    b.createElement(M.a, { alignContent: 'center', onPress: e._handleGenerate, type: 'brandText' }, X),
                  ),
                )
              }),
              y()(s()(e), '_handleCopy', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.backupCode
                r && (U.a.setString(r), n({ text: q }))
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
                  return b.createElement(
                    j.a,
                    null,
                    b.createElement(
                      D.a,
                      { location: n, title: Y },
                      b.createElement(H.a, null, b.createElement(N.b, { color: 'gray700' }, Q)),
                      b.createElement(
                        H.a,
                        null,
                        b.createElement(
                          N.b,
                          { color: 'gray700' },
                          b.createElement(
                            G.a.I18NFormatMessage,
                            { $i18n: 'a4455c04' },
                            b.cloneElement($, null, G.a.ecb6fccf),
                          ),
                        ),
                      ),
                      b.createElement(F.a, {
                        accessibilityLabel: Z,
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
        })(b.Component)
      t.default = Object(K.c)({ page: 'settings', section: 'backup_code' })(I(ee))
    },
    W0Ti: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContentPreferencesPage', function () {
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
        E = n('NeAX'),
        g = n('rxPX'),
        v = Object(g.a)()
          .propsFromState(function () {
            return { personalizationSettings: E.selectUserPreferences }
          })
          .withAnalytics({ page: 'settings', section: 'timeline' }),
        _ = n('uD2z'),
        S = n('3XMw'),
        w = n.n(S),
        O = n('yoO3'),
        C = n('7FtF'),
        P = 'exploreHeader',
        A = n('v6aA'),
        T = n('6vad'),
        R = n('csss'),
        k = n('0yYu'),
        L = n('xHsv')
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
        j = w.a.fcf3e54b,
        D = w.a.hfb77cf5,
        x = w.a.d495680d,
        N = w.a.f350f0c0,
        M = w.a.cb9bb63f,
        H = w.a.h1ef00db,
        U = w.a.e8f57e07,
        B = w.a.e8f57e07,
        K = w.a.hfc86556,
        V = w.a.a5f32aa2,
        G = (function (e) {
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
                  return Object(_.a)(e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.location,
                    t = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends'
                  return b.createElement(
                    O.a,
                    null,
                    b.createElement(
                      C.a,
                      { location: e, screenType: 'primaryDetail', title: F },
                      b.createElement(T.b, { testID: P, text: j }),
                      b.createElement(R.a, { label: H, link: '/settings/search' }),
                      b.createElement(R.a, { label: this._trendsLabel, link: t }),
                      this._contentLanguageSettingsEnabled
                        ? b.createElement(
                            b.Fragment,
                            null,
                            b.createElement(k.a, null),
                            b.createElement(T.b, { text: x }),
                            b.createElement(R.a, { label: N, link: '/i/flow/language_selector' }),
                            b.createElement(L.a, { description: M }),
                          )
                        : null,
                      b.createElement(k.a, null),
                      b.createElement(T.b, { text: D }),
                      b.createElement(R.a, { label: K, link: '/settings/mute' }),
                      b.createElement(R.a, { label: V, link: '/settings/blocked/all' }),
                      b.createElement(k.a, null),
                      b.createElement(T.b, { text: U }),
                      b.createElement(R.a, {
                        description: this._renderPersonalizationDescription(),
                        label: B,
                        link: '/settings/account/personalization',
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(G, 'contextType', A.a)
      t.default = v(G)
    },
    X1GS: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n('yoO3'),
        o = n('7JQg'),
        c = n('7FtF'),
        i = n('iCwC'),
        s = n('MWbm'),
        l = n('6vad'),
        u = n('t62R'),
        f = n('3XMw'),
        d = n.n(f),
        p = d.a.g0ec0beb,
        h = d.a.g89f4613,
        m = { page: 'settings', section: 'deactivate_success' }
      t.default = function (e) {
        var t = e.location
        return r.createElement(
          o.b,
          { namespace: m },
          r.createElement(
            a.a,
            null,
            r.createElement(
              c.a,
              { location: t, screenType: 'primaryDetail', title: p },
              r.createElement(l.b, { text: h }),
              r.createElement(
                s.a,
                { style: i.a.viewItem },
                r.createElement(
                  u.b,
                  { color: 'gray700', size: 'subtext2' },
                  r.createElement(d.a.I18NFormatMessage, { $i18n: 'if2bb997' }),
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
          return w
        }),
        n.d(t, 'i', function () {
          return O
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
          case I:
            return l(l({}, e), {}, { defaultOptions: t.payload.default_options })
          case F:
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
        w = function (e) {
          return e.mutedKeywords.fetchStatus
        },
        O = function (e, t) {
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
            return w(t()) === c.a.LOADED ? Promise.resolve() : e(L())
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
        I = ''.concat(p, '/SET_DEFAULT_OPTIONS'),
        F = ''.concat(p, '/DEFAULT_OPTIONS_LOADED'),
        j = function (e) {
          return { type: I, payload: { default_options: e } }
        },
        D = function () {
          return function (e, t, n) {
            var r = n.userPersistence
            return t().mutedKeywords.defaultOptionsLoaded
              ? Promise.resolve()
              : r.get(f, d).then(function (t) {
                  if (t && t.defaultOptions) {
                    var n = t.defaultOptions
                    e(j(n))
                  }
                  e({ type: F })
                })
          }
        },
        x = function (e) {
          return function (t, n, r) {
            var a = r.userPersistence
            return t(j(e)), a.set(f, { defaultOptions: e })
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
          return j
        }),
        n.d(t, 'EnrollmentScreen', function () {
          return x
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
        E = n('wvRX'),
        g = n('hqKg'),
        v = n('QK5w'),
        _ = n('0KEI'),
        S = n('oEGd'),
        w = Object(g.createSelector)(
          v.a,
          function (e, t) {
            return t.location && t.location.state && t.location.state.bounce_location
          },
          E.f,
          function (e, t, n) {
            return { canGoBack: e, bounceLocation: t, fetchStatus: n }
          },
        ),
        O = {
          createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_LOGIN_VERIFICATION_ENROLLMENT_CONTEXT',
          ),
          fetchLoginVerificationSettings: E.e,
        },
        C = Object(S.g)(w, O),
        P = n('kGix'),
        A = n('jHSc'),
        T = n('bPFD'),
        R = n('rHpw'),
        k = n('2qJZ')
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
      var I = '/settings/account/login_verification',
        F = 'initiated_in_iframe=true',
        j = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location,
            n = t.host === k.a ? k.a : k.b,
            r = 'https://'.concat(n),
            a = new window.URL(''.concat(r).concat(e)),
            o = a.search ? '&' : '?'
          return (a.search = ''.concat(a.search).concat(o).concat(F)), a.href
        },
        D = function (e, t, n) {
          return e !== P.a.LOADED || !t || !n
        },
        x = (function (e) {
          u()(n, e)
          var t = L(n)
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
                if ((n === 'https://'.concat(k.b) || n === 'https://'.concat(k.a)) && t.bouncer)
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
            return D(l, i, c) && u.replace(I), r
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
                  return D(r, n, t)
                    ? null
                    : b.createElement(
                        A.b,
                        { backButtonType: 'close', backLocation: I, history: a, onBackClick: this._handleClose },
                        b.createElement(T.a, { allowForms: !0, src: j(t), style: [R.a.absoluteFill, N.iframe] }),
                      )
                },
              },
            ]),
            n
          )
        })(b.Component),
        N = R.a.create(function (e) {
          return { iframe: { backgroundColor: e.colors.cellBackground, paddingLeft: e.spaces.space16 } }
        })
      t.default = C(x)
    },
    YWNO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationAdvancedFiltersPage', function () {
          return ce
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
        E =
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
        g = n('kGix'),
        v = n('Ssj5')
      function _(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = 'notificationFilters',
        O = 'rweb/'.concat(w),
        C = 'rweb.'.concat(w),
        P = E.a(O, 'FETCH_NOTIFICATION_FILTERS'),
        A = E.a(O, 'ENABLE_NOTIFICATION_FILTER'),
        T = E.a(O, 'DISABLE_NOTIFICATION_FILTER'),
        R = { fetchStatus: g.a.NONE, notificationFilters: {} }
      v.a.register(
        y()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case P.REQUEST:
              return S(S({}, e), {}, { fetchStatus: g.a.LOADING })
            case P.FAILURE:
              return S(S({}, e), {}, { fetchStatus: g.a.FAILED })
            case P.SUCCESS:
              return S(S({}, e), {}, { notificationFilters: t.payload, fetchStatus: g.a.LOADED })
            case A.REQUEST:
              return S(
                S({}, e),
                {},
                { notificationFilters: S(S({}, e.notificationFilters), {}, y()({}, t.meta.filterName, !0)) },
              )
            case T.REQUEST:
              return S(
                S({}, e),
                {},
                { notificationFilters: S(S({}, e.notificationFilters), {}, y()({}, t.meta.filterName, !1)) },
              )
            default:
              return e
          }
        }),
      )
      var k = function (e) {
          return e[w].notificationFilters
        },
        L = function (e) {
          return e[w].fetchStatus
        },
        I = function () {
          return function (e, t, n) {
            n.api
            var r = n.userPersistence
            return L(t()) === g.a.LOADED
              ? Promise.resolve()
              : r.get(C, 24e4).then(function (t) {
                  return e(t ? { payload: t, type: P.SUCCESS } : F())
                })
          }
        },
        F = function () {
          return function (e, t, n) {
            var r = n.api,
              a = n.userPersistence
            return E.b(e, { request: r.Settings.fetchNotificationFilters })({
              actionTypes: P,
              context: 'FETCH_NOTIFICATION_FILTERS',
            }).then(function (e) {
              return a.set(C, k(t())), e
            })
          }
        },
        j = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.userPersistence
            return E.c(t, { params: y()({}, e, !0), request: a.Settings.updateNotificationFilters })({
              actionTypes: A,
              context: 'ACTION_ENABLE_NOTIFICATION_FILTER',
              meta: { filterName: e },
            }).then(function (e) {
              return o.set(C, k(n())), e
            })
          }
        },
        D = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.userPersistence
            return E.c(t, { params: y()({}, e, !1), request: a.Settings.updateNotificationFilters })({
              actionTypes: T,
              context: 'ACTION_DISABLE_NOTIFICATION_FILTER',
              meta: { filterName: e },
            }).then(function (e) {
              return o.set(C, k(n())), e
            })
          }
        },
        x = n('rxPX'),
        N = n('0KEI'),
        M = Object(x.a)()
          .propsFromState(function () {
            return { fetchStatus: L, notificationFilters: k }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)(
                'ADVANCED_FILTERS_SCREEN',
              ),
              disableNotificationFilter: D,
              enableNotificationFilter: j,
              fetchNotificationFiltersIfNeeded: I,
            }
          })
          .withAnalytics({ page: 'settings', section: 'advanced_filters' }),
        H = n('v//M'),
        U = n('yoO3'),
        B = n('7FtF'),
        K = n('iCwC'),
        V = n('MWbm'),
        G = n('6vad'),
        W = n('cCdp'),
        Y = n('t62R'),
        X = n('3XMw'),
        z = n.n(X)
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Z = z.a.aaafffd9,
        Q = z.a.j29ab12f,
        J = z.a.jdfc82f6,
        $ = z.a.cfcda0e5,
        ee = z.a.c75b9b29,
        te = z.a.f39b9c9d,
        ne = z.a.d227f94f,
        re = z.a.b210936d,
        ae = 'https://support.twitter.com/articles/20169398',
        oe = {
          filter_not_following: 'people_you_follow_only',
          filter_not_followed_by: 'filter_not_following_me',
          filter_new_users: 'new_users',
          filter_default_profile_image: 'default_profile_image',
          filter_no_confirmed_email: 'no_confirmed_email',
          filter_no_confirmed_phone: 'no_confirmed_phone',
        },
        ce = (function (e) {
          u()(n, e)
          var t = q(n)
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
                e.props.analytics.scribe({ component: 'advanced_filters', element: oe[t], action: n })
              }),
              y()(s()(e), '_renderNotificationFilters', function () {
                var t = e.props.notificationFilters
                return b.createElement(
                  V.a,
                  null,
                  b.createElement(G.b, { text: Q }),
                  b.createElement(W.a, {
                    checked: t.filter_not_following,
                    label: J,
                    name: 'filter_not_following',
                    onChange: e._handleItemChanged,
                  }),
                  b.createElement(W.a, {
                    checked: t.filter_not_followed_by,
                    label: $,
                    name: 'filter_not_followed_by',
                    onChange: e._handleItemChanged,
                  }),
                  b.createElement(W.a, {
                    checked: t.filter_new_users,
                    label: ee,
                    name: 'filter_new_users',
                    onChange: e._handleItemChanged,
                  }),
                  b.createElement(W.a, {
                    checked: t.filter_default_profile_image,
                    label: te,
                    name: 'filter_default_profile_image',
                    onChange: e._handleItemChanged,
                  }),
                  b.createElement(W.a, {
                    checked: t.filter_no_confirmed_email,
                    label: ne,
                    name: 'filter_no_confirmed_email',
                    onChange: e._handleItemChanged,
                  }),
                  b.createElement(W.a, {
                    checked: t.filter_no_confirmed_phone,
                    label: re,
                    name: 'filter_no_confirmed_phone',
                    onChange: e._handleItemChanged,
                  }),
                  b.createElement(
                    Y.b,
                    { color: 'gray700', size: 'subtext2', style: K.a.infoText },
                    b.createElement(
                      z.a.I18NFormatMessage,
                      { $i18n: 'eb96a831' },
                      b.createElement(Y.b, { link: ae }, z.a.ed0df109),
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
                  return b.createElement(
                    U.a,
                    null,
                    b.createElement(
                      B.a,
                      { location: n, title: Z },
                      b.createElement(H.a, {
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
        })(b.Component)
      t.default = M(ce)
    },
    'Yq/0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationSettingsPage', function () {
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
        E = n('kPZX'),
        g = n('P1r1'),
        v = n('rxPX'),
        _ = n('0KEI'),
        S = function (e) {
          return E.g()
        },
        w = Object(v.a)()
          .propsFromState(function () {
            return { browserPushAllowed: S, universalQualityFilteringEnabled: g.G }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_NOTIFICATIONS_SCREEN',
              ),
              updateSettings: g.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications' }),
        O = n('3XMw'),
        C = n.n(O),
        P = n('yoO3'),
        A = n('7FtF'),
        T = 'filtersHeader',
        R = n('6vad'),
        k = n('cCdp'),
        L = n('csss'),
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
      var j = C.a.eb75875d,
        D = C.a.i647fb03,
        x = C.a.hee41732,
        N = C.a.e75f25a8,
        M = C.a.f8bd75d4,
        H = C.a.bcd81cab,
        U = C.a.hfc86556,
        B = C.a.afdf29b8,
        K = C.a.b293c4bd,
        V = (function (e) {
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
                  return b.createElement(
                    P.a,
                    null,
                    b.createElement(
                      A.a,
                      { location: n, screenType: 'primaryDetail', title: j },
                      b.createElement(R.b, { testID: T, text: D }),
                      b.createElement(k.a, {
                        checked: r,
                        helpText: K,
                        label: B,
                        learnMoreLink: 'https://support.twitter.com/articles/20169398',
                        name: 'universal_quality_filtering',
                        onChange: this._handleUqfChanged,
                      }),
                      b.createElement(L.a, { label: M, link: '/settings/notifications/advanced_filters' }),
                      b.createElement(L.a, { label: U, link: '/settings/mute' }),
                      b.createElement(I.a, null),
                      b.createElement(R.b, { text: H }),
                      t ? b.createElement(L.a, { label: x, link: '/settings/push_notifications' }) : null,
                      b.createElement(L.a, { label: N, link: '/settings/email_notifications' }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = w(V)
    },
    Zh1i: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DeactivateScreen', function () {
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
        b = n('ERkP'),
        E = n('4+NY'),
        g = n('XMGw'),
        v = n('8jkQ'),
        _ = n('oEOe'),
        S = ''.concat(g.a, '/deactivate'),
        w = 'rweb/'.concat(S),
        O = Object(_.a)(w, 'DEACTIVATE_ACCOUNT'),
        C = function () {
          return v.b.navigateTo('/settings/deactivated')
        },
        P = function (e, t) {
          return function (n, r, a) {
            a.api
            return n(Object(E.d)()).then(function () {
              return n(
                (function (e, t) {
                  return function (n, r, a) {
                    var o = a.api
                    return Object(_.b)(n, {
                      params: { password: e, deactivation_timespan: t },
                      request: o.Settings.deactivate,
                    })({ actionTypes: O, context: 'DEACTIVATE_ACCOUNT' }).then(C)
                  }
                })(e, t),
              )
            })
          }
        },
        A = n('G6rE'),
        T = n('rxPX'),
        R = n('0KEI'),
        k = function (e) {
          var t = A.e.selectLoggedInUser(e)
          return !!t && t.verified
        },
        L = Object(T.a)()
          .propsFromState(function () {
            return { isVerified: k }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('DEACTIVATE'),
              deactivate: P,
            }
          })
          .withAnalytics({ page: 'settings', section: 'deactivate' }),
        I = n('tI3i'),
        F = n.n(I),
        j = n('yoO3'),
        D = n('98E1'),
        x = n('iCwC'),
        N = n('88ay'),
        M = n('MWbm'),
        H = n('t62R'),
        U = n('6vad'),
        B = n('0yYu'),
        K = n('Y3cQ'),
        V = n('jtO7'),
        G = n('v6aA'),
        W = n('3XMw'),
        Y = n.n(W)
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
      var z = Y.a.ic2937a1,
        q = Y.a.d86e6d9a,
        Z = Y.a.i945795c,
        Q = Y.a.c3216543,
        J = Y.a.ea989810,
        $ = Y.a.f6e73faa,
        ee = Y.a.c3743327,
        te = Y.a.a20cd24d,
        ne = Y.a.g8fb7f85,
        re = Y.a.fe36fe1f,
        ae = Y.a.e93b0aef,
        oe = '/settings/your_twitter_data/account',
        ce = [
          { label: Y.a.b8971cfa, value: '30_days' },
          { label: Y.a.ce0f88f6, value: '1_year' },
        ],
        ie = function (e) {
          var t = e.children,
            n = e.withBottomBorder,
            r = void 0 === n || n
          return b.createElement(
            M.a,
            { style: [x.a.viewItem, r && x.a.bottomBorder] },
            b.createElement(H.b, { color: 'gray700', size: 'subtext2' }, t),
          )
        },
        se = (function (e) {
          u()(n, e)
          var t = X(n)
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
                    b.createElement(
                      j.a,
                      null,
                      b.createElement(
                        D.a,
                        {
                          location: n,
                          onPasswordSubmit: this._handlePasswordSubmit,
                          promptForPassword: c,
                          reenterPasswordLabel: ae,
                          saveChangesHeaderLabel: re,
                          submitLabel: $,
                          submitType: 'destructiveFilled',
                          title: J,
                        },
                        b.createElement(
                          M.a,
                          null,
                          b.createElement(N.b, { key: r, userId: r, withLink: !1 }),
                          b.createElement(U.b, { text: ee }),
                          b.createElement(ie, { withBottomBorder: !1 }, z),
                          b.createElement(U.b, { text: te }),
                          i
                            ? b.createElement(ie, null, q)
                            : s
                            ? b.createElement(ie, null, Z)
                            : b.createElement(ie, null, Q),
                          t
                            ? b.createElement(
                                b.Fragment,
                                null,
                                b.createElement(B.a, null),
                                b.createElement(K.a, {
                                  label: ne,
                                  name: 'reactivation',
                                  onChange: this._handleReactivationChanged,
                                  options: ce,
                                  value: o,
                                }),
                                b.createElement(B.a, null),
                              )
                            : null,
                          b.createElement(
                            ie,
                            null,
                            b.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'g124fce8' },
                              b.createElement(
                                H.b,
                                {
                                  link: 'https://help.twitter.com/safety-and-security/remove-twitter-profile-from-google-search',
                                },
                                Y.a.ae256744,
                              ),
                            ),
                          ),
                          b.createElement(
                            ie,
                            null,
                            b.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'd9ef8fba' },
                              b.createElement(H.b, { link: oe }, Y.a.g7b28903),
                            ),
                          ),
                          b.createElement(
                            ie,
                            null,
                            b.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'g4dcd62a' },
                              b.createElement(H.b, { link: oe }, Y.a.b5e3246e),
                            ),
                          ),
                          b.createElement(
                            ie,
                            { withBottomBorder: !1 },
                            b.createElement(
                              Y.a.I18NFormatMessage,
                              { $i18n: 'b44893f9' },
                              b.createElement(H.b, { link: '/settings/download_your_data' }, Y.a.g392e08c),
                            ),
                          ),
                          b.createElement(B.a, null),
                          b.createElement(V.a, {
                            color: 'red500',
                            disabled: l,
                            label: $,
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
        })(b.Component)
      y()(se, 'contextType', G.a)
      t.default = L(se)
    },
    ZqFf: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountPage', function () {
          return ne
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
        E = n('P1r1'),
        g = n('RqPI'),
        v = n('G6rE'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = n('vEo5'),
        O = n('FDFL'),
        C = n('S/HT'),
        P = function (e) {
          var t = Object(E.j)(e)
          return t && Object(C.b)(e, t)
        },
        A = function (e) {
          var t = Object(g.n)(e)
          return t && Object(O.b)(e, t)
        },
        T = Object(_.a)()
          .propsFromState(function () {
            return {
              countryName: P,
              emails: w.selectEmails,
              languageCode: g.n,
              languageName: A,
              loggedInUser: v.e.selectLoggedInUser,
              phones: w.selectPhoneNumbers,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_SCREEN',
              ),
              fetchAvailableLanguagesIfNeeded: O.a,
              fetchDevices: w.fetchDevices,
              fetchCountryNamesIfNeeded: C.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'account' }),
        R = n('3XMw'),
        k = n.n(R),
        L = n('yoO3'),
        I = n('7FtF'),
        F = 'accountScreen',
        j = n('MWbm'),
        D = n('v6aA'),
        x = n('6vad'),
        N = n('csss'),
        M = n('0yYu')
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
      var U = k.a.i5f7b6b8,
        B = k.a.cd32dbfd,
        K = k.a.e7efe72a,
        V = k.a.a3841918,
        G = k.a.f70cd5ed,
        W = k.a.dec3c9b8,
        Y = k.a.j95edf76,
        X = k.a.a4b69cbb,
        z = k.a.c21037d0,
        q = k.a.d1f6d336,
        Z = k.a.ae72d4c4,
        Q = k.a.b7fde2b8,
        J = k.a.hfb92b14,
        $ = k.a.bc38469e,
        ee = k.a.fa98627a,
        te = k.a.hd0765e3,
        ne = (function (e) {
          u()(n, e)
          var t = H(n)
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
                  return b.createElement(
                    L.a,
                    null,
                    b.createElement(
                      I.a,
                      { location: a, screenType: 'primaryDetail', title: U },
                      b.createElement(
                        j.a,
                        { testID: F },
                        b.createElement(x.b, { text: K }),
                        b.createElement(N.a, { description: i, label: q, link: '/settings/screen_name' }),
                        b.createElement(N.a, { description: s, label: G, link: '/settings/phone' }),
                        b.createElement(N.a, { description: l, label: V, link: '/settings/email' }),
                        b.createElement(N.a, { label: W, link: '/settings/password' }),
                        b.createElement(N.a, { label: Y, link: '/settings/security' }),
                        this._isVerificationIntakeEnabled &&
                          b.createElement(
                            b.Fragment,
                            null,
                            b.createElement(M.a, null),
                            b.createElement(x.b, { text: $ }),
                            b.createElement(N.a, { label: ee, link: '/settings/profile' }),
                            b.createElement(N.a, { label: te, link: '/settings/request_verification' }),
                          ),
                        b.createElement(M.a, null),
                        b.createElement(x.b, { text: B }),
                        b.createElement(N.a, { description: r, label: X, link: '/settings/language' }),
                        b.createElement(N.a, { description: t, label: z, link: '/settings/country' }),
                        b.createElement(N.a, { label: Q, link: '/settings/your_twitter_data' }),
                        b.createElement(N.a, { label: Z, link: '/settings/applications' }),
                        b.createElement(M.a, null),
                        b.createElement(N.a, { label: J, link: '/settings/deactivate' }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(ne, 'contextType', D.a)
      t.default = T(ne)
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
          return function (e, t, n) {
            return n.featureSwitches.isTrue('responsive_web_precise_location_setting_enabled')
              ? E()
                  .then(function (t) {
                    return e({ payload: t, type: m })
                  })
                  .catch(function (t) {
                    return e(h(o.b.denied)), Promise.reject(t)
                  })
              : Promise.resolve()
          }
        },
        b = function () {
          return function (e, t, n) {
            n.featureSwitches
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
          return Z
        }),
        n.d(t, 'styles', function () {
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
        b = (n('z84I'), n('LW0h'), n('3voH'), n('ho0z'), n('5BYb'), n('ERkP')),
        E = n('P1r1'),
        g = n('EyIn'),
        v = n('+OgG'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = Object(_.a)()
          .propsFromState(function () {
            return {
              placeTrendsLocations: g.f,
              placeTrendsLocationsFetchStatus: g.g,
              placeTrendsSettings: g.d,
              woeTrendsLocations: g.h,
              woeTrendsLocationsFetchStatus: g.i,
              woeTrendsLocationSettings: E.E,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRENDS_LOCATION_SCREEN',
              ),
              fetchWoeTrendsLocationsIfNeeded: g.c,
              fetchPlaceTrendsLocations: g.b,
              updateWoeTrendSettings: v.a,
              updatePlaceTrendSettings: g.j,
            }
          })
          .withAnalytics({ page: 'settings', section: 'trends', component: 'locations', element: 'list' }),
        O = n('v//M'),
        C = n('jHSc'),
        P = n('3XMw'),
        A = n.n(P),
        T = n('VwDm'),
        R = 19,
        k = 12,
        L = function (e) {
          return e.placeType && (e.placeType.code === R || e.placeType.code === k)
        },
        I = n('iBK2'),
        F = 'locationSearchBox',
        j = (n('uFXj'), n('IMYl')),
        D = n('htQn'),
        x = n('t62R'),
        N = n('rHpw'),
        M = A.a.d5c9174e,
        H = N.a.create(function (e) {
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
        U = function (e) {
          var t = e.country,
            n = e.isSelected,
            r = e.name,
            a = e.onClick
          return b.createElement(
            D.a,
            { onPress: a, style: H.item },
            t ? b.createElement(x.b, null, M({ location: r, country: t })) : b.createElement(x.b, null, r),
            n ? b.createElement(j.a, { style: H.iconCheckmark }) : null,
          )
        },
        B = n('MWbm'),
        K = n('v6aA'),
        V = n('oQhu'),
        G = n('VY6S'),
        W = n('6OUF')
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
      var X = A.a.b3aab6d3,
        z = A.a.e53e05e4,
        q = A.a.be6cc44d,
        Z = (function (e) {
          u()(n, e)
          var t = Y(n)
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
                return b.createElement(I.b, {
                  cacheKey: 'LOCATIONS_LIST',
                  identityFunction: o._identityFunction,
                  items: e,
                  renderer: o._renderPlaceLocation,
                })
              }),
              y()(s()(o), '_renderWoeLocations', function () {
                var e = '' === o.state.query ? o._getTopLevelWoeLocations() : o._getFilteredWoeLocations()
                return b.createElement(
                  B.a,
                  null,
                  b.createElement(
                    B.a,
                    { style: Q.searchBox },
                    b.createElement(W.a, {
                      Icon: T.a,
                      autoFocus: !1,
                      onChange: o._handleInputChange,
                      onClear: o._handleInputClear,
                      placeholder: q,
                      value: o.state.query,
                      withClearButton: !0,
                    }),
                  ),
                  b.createElement(
                    B.a,
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
                Object(V.a)(function (e, t) {
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
                Object(V.a)(function (e) {
                  return e.filter(function (e) {
                    return L(e)
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
                return b.createElement(U, {
                  country: L(e) ? void 0 : e.country,
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
                return b.createElement(U, {
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
              (o._fetchFilteredPlacesDebounced = Object(G.a)(o._fetchTrendsLocations, 250)),
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
                  return b.createElement(
                    C.b,
                    { backButtonType: 'back', backLocation: '/settings/trends', history: t, title: X },
                    this._usePlaceTrendLocations
                      ? b.createElement(
                          b.Fragment,
                          null,
                          b.createElement(W.a, {
                            Icon: T.a,
                            autoFocus: !1,
                            onChange: this._handleInputChange,
                            onClear: this._handleInputClear,
                            placeholder: q,
                            style: Q.searchBox,
                            testID: F,
                            value: this.state.query,
                            withClearButton: !0,
                          }),
                          b.createElement(O.a, {
                            accessibilityLabel: z,
                            fetchStatus: n,
                            onRequestRetry: this._handleRetry,
                            render: this._renderScroller,
                          }),
                        )
                      : b.createElement(O.a, {
                          accessibilityLabel: z,
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
        })(b.Component)
      y()(Z, 'contextType', K.a)
      var Q = N.a.create(function (e) {
        return { searchBox: { flexGrow: 0, flexShrink: 0, margin: e.spaces.space12 } }
      })
      t.default = w(Z)
    },
    av9q: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
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
        E = n('3XMw'),
        g = n.n(E),
        v = n('t62R'),
        _ = n('htQn'),
        S = n('rHpw')
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
      var O = g.a.c174e46e,
        C = g.a.a39075ff,
        P = (function (e) {
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
                  return b.createElement(
                    b.Fragment,
                    null,
                    b.createElement(v.b, { style: A.scopesHeader, weight: 'bold' }, r),
                    b.createElement(
                      _.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return b.createElement(
                          v.b,
                          { color: 'subtext2' === n ? 'gray700' : void 0, key: e.name, size: n, style: A.listItem },
                          e.description,
                        )
                      }),
                    ),
                    c && a
                      ? b.createElement(v.b, { onPress: this._handleToggleShowMoreScopes, style: A.toggleMoreLink }, O)
                      : null,
                    c && !a
                      ? b.createElement(
                          v.b,
                          { onPress: this._handleToggleShowMoreScopes, style: A.toggleMoreLink },
                          C({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(b.Component),
        A = S.a.create(function (e) {
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
          return O
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('P1r1'),
        i = n('rxPX'),
        s = n('0KEI'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { universalQualityFilteringEnabled: c.G }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_FILTERS_SCREEN',
              ),
              updateSettings: c.L,
            }
          }),
        u = n('3XMw'),
        f = n.n(u),
        d = n('yoO3'),
        p = n('7JQg'),
        h = n('7FtF'),
        m = n('xHsv'),
        y = n('cCdp'),
        b = n('csss'),
        E = f.a.ef1b5cbb,
        g = f.a.i647fb03,
        v = f.a.aaafffd9,
        _ = f.a.afdf29b8,
        S = f.a.c54b6236,
        w = { page: 'settings', section: 'filters' }
      function O(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.location,
          r = e.universalQualityFilteringEnabled,
          c = e.updateSettings
        return o.createElement(
          p.b,
          { namespace: w },
          o.createElement(
            d.a,
            null,
            o.createElement(
              h.a,
              { location: n, title: g },
              o.createElement(m.a, { description: E }),
              o.createElement(y.a, {
                checked: r,
                helpText: S,
                label: _,
                learnMoreLink:
                  'https://help.twitter.com/managing-your-account/understanding-the-notifications-timeline',
                name: 'universal_quality_filtering',
                onChange: function (e, n) {
                  c(a()({}, e, n ? 'enabled' : 'disabled')).catch(t({ showToast: !0 }))
                },
              }),
              o.createElement(b.a, { label: v, link: '/settings/notifications/advanced_filters' }),
            ),
          ),
        )
      }
      var C = l(O)
      t.default = C
    },
    dMlH: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SettingsTeamsScreen', function () {
          return P
        })
      var r = n('ddV6'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('P1r1'),
        i = n('rxPX'),
        s = n('0KEI'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { teamsSetting: c.F }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TEAMS_SCREEN',
              ),
              fetchSettingsIfNeeded: c.f,
              updateSettings: c.L,
            }
          }),
        u = n('3XMw'),
        f = n.n(u),
        d = n('yoO3'),
        p = n('98E1'),
        h = n('7JQg'),
        m = n('MWbm'),
        y = n('xHsv'),
        b = n('qYi+'),
        E = n('t62R'),
        g = f.a.d13e165c,
        v = f.a.cf24a081,
        _ = f.a.d1e97fdf,
        S = [
          { label: f.a.a2ffab26, value: 'all' },
          { label: f.a.h69bd4ee, value: 'following' },
        ],
        w = f.a.d0a1d1d9,
        O = f.a.i859a9d3,
        C = { page: 'settings', section: 'teams' },
        P = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.fetchSettingsIfNeeded,
            r = e.location,
            c = e.teamsSetting,
            i = e.updateSettings,
            s = o.useState(),
            l = a()(s, 2),
            u = l[0],
            f = l[1]
          o.useEffect(
            function () {
              n().catch(t())
            },
            [n, t],
          )
          var P = !!u && c !== u,
            A = u || c
          return o.createElement(
            h.b,
            { namespace: C },
            o.createElement(
              d.a,
              null,
              o.createElement(
                p.a,
                {
                  location: r,
                  onPasswordSubmit: function (e) {
                    u &&
                      i({ current_password: e, allow_contributor_request: u }).catch(function (e) {
                        f(c), t({ showToast: !0 })(e)
                      })
                  },
                  promptForPassword: P,
                  title: g,
                },
                o.createElement(
                  m.a,
                  null,
                  o.createElement(y.a, { description: _ }),
                  o.createElement(b.a, {
                    description: o.createElement(
                      o.Fragment,
                      null,
                      ''.concat(w, ' '),
                      o.createElement(E.b, { link: 'https://help.twitter.com/using-twitter/tweetdeck-teams' }, O),
                    ),
                    label: v,
                    name: 'allow_contributor_request',
                    offValue: 'none',
                    onChange: function (e, t) {
                      ;('all' !== t && 'following' !== t && 'none' !== t) || f(t)
                    },
                    options: S,
                    value: A,
                  }),
                ),
              ),
            ),
          )
        },
        A = l(P)
      t.default = A
    },
    dUVB: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MuteKeywordDetailScreen', function () {
          return he
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
        v = n('k49u'),
        _ = (n('WNMA'), n('X8EX')),
        S = n('1YZw'),
        w = n('rxPX'),
        O = n('0KEI'),
        C = function (e, t) {
          return t.match.params.mutedKeywordId
        },
        P = function (e, t) {
          return _.i(e, C(0, t))
        },
        A = function (e, t) {
          return !!C(0, t)
        },
        T = Object(w.a)()
          .propsFromState(function () {
            return { defaultOptions: _.f, discouragedKeywords: _.g, fetchStatus: _.h, isEditing: A, mutedKeyword: P }
          })
          .propsFromActions(function () {
            return {
              addMutedKeyword: _.a,
              addToast: S.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'MUTED_KEYWORD_DETAIL',
              ),
              fetchDefaultOptionsIfNeeded: _.c,
              fetchDiscouragedKeywordsIfNeeded: _.d,
              fetchMutedKeywordsIfNeeded: _.e,
              updateDefaultOptions: _.k,
              updateMutedKeyword: _.l,
            }
          })
          .withAnalytics({ page: 'settings', section: 'notifications', component: 'mute_keyword', element: 'add' }),
        R = n('kGix'),
        k = n('v//M'),
        L = n('gaV8'),
        I = n.n(L),
        F = n('VTxf'),
        j = n('yoO3'),
        D = n('7FtF'),
        x = n('MWbm'),
        N = n('t62R'),
        M = n('p+r5'),
        H = n('0yYu'),
        U = n('6vad'),
        B = n('cCdp'),
        K = n('qYi+'),
        V = n('Y3cQ'),
        G = n('rHpw'),
        W = n('3XMw'),
        Y = n.n(W)
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var q = Y.a.bdbf8f4e,
        Z = Y.a.h43e2ea7,
        Q = Y.a.da8c044f,
        J = Y.a.eb75875d,
        $ = [
          { label: Y.a.defb4aa9, value: 'everyone' },
          { label: Y.a.e7d47b00, value: 'following' },
        ],
        ee = Y.a.c67e3fc1,
        te = Y.a.d9d6e10e,
        ne = Y.a.gfa5008d,
        re = Y.a.c5595dfe,
        ae = Y.a.he6804e0,
        oe = [
          { label: ae, value: 'forever' },
          { label: Y.a.a268406c, value: 'day' },
          { label: Y.a.fc638aa2, value: 'week' },
          { label: Y.a.b8971cfa, value: 'month' },
        ],
        ce = [
          { label: Y.a.a268406c, value: 'day' },
          { label: Y.a.fc638aa2, value: 'week' },
          { label: Y.a.b8971cfa, value: 'month' },
          { label: ae, value: 'forever' },
        ],
        ie = Y.a.cc7bedfc,
        se = Y.a.d768049b,
        le = Y.a.c6203da8,
        ue = Y.a.e3f0d3db,
        fe = Y.a.h5746cf6,
        de = Y.a.d2693eb8,
        pe = Y.a.jf4e00e1,
        he = (function (e) {
          d()(n, e)
          var t = z(n)
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
                  s = g.createElement(
                    Y.a.I18NFormatMessage,
                    { $i18n: 'aba5a348' },
                    g.createElement(N.b, { link: 'https://support.twitter.com/articles/20175032' }, Y.a.e456bd5f),
                  )
                return g.createElement(
                  x.a,
                  null,
                  g.createElement(M.a, {
                    defaultValue: t ? (null == n ? void 0 : n.keyword) : '',
                    editable: !t,
                    errorText: i,
                    helperText: t ? null : s,
                    invalid: !!i,
                    label: t ? Z : q,
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
                return g.createElement(
                  x.a,
                  null,
                  g.createElement(H.a, null),
                  g.createElement(U.b, { text: Q }),
                  g.createElement(B.a, {
                    checked: r.state.mute_home_timeline,
                    label: ee,
                    name: 'mute_home_timeline',
                    onChange: r._handleEntryUpdated,
                  }),
                  g.createElement(K.a, {
                    label: J,
                    name: 'mute_notifications_option',
                    offValue: 'none',
                    onChange: r._handleEntryUpdated,
                    options: $,
                    value: r.state.mute_notifications_option,
                  }),
                  g.createElement(H.a, null),
                  g.createElement(U.b, { text: e ? r._renderEditTimeDurationLabel() : te }),
                  g.createElement(V.a, {
                    name: 'time_duration',
                    onChange: r._handleEntryUpdated,
                    options: e ? ce : oe,
                    value: r.state.time_duration,
                  }),
                  e ? g.createElement(N.b, { color: 'gray700', size: 'subtext2', style: me.infoText }, ie) : null,
                )
              }),
              E()(u()(r), '_renderEditTimeDurationLabel', function () {
                var e = r.props.mutedKeyword
                return null != e && e.valid_until ? ne : re
              }),
              E()(u()(r), '_renderNotFound', function () {
                return g.createElement(F.a, null)
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
                return n && t === R.a.LOADED && !a
              }),
              E()(u()(r), '_getFetchStatus', function () {
                var e = r.props.fetchStatus
                return r.state.isUpdatingMutedKeyword ? R.a.LOADING : r._isMutedKeywordNotFound() ? R.a.FAILED : e
              }),
              E()(u()(r), '_handleFetch', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchDefaultOptionsIfNeeded,
                  a = e.fetchDiscouragedKeywordsIfNeeded,
                  o = e.fetchMutedKeywordsIfNeeded,
                  c = e.fetchStatus,
                  i = e.isEditing
                a().catch(t()), i || c === R.a.NONE ? o().catch(t()) : n()
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
                    ? X(Object(n), !0).forEach(function (t) {
                        E()(e, t, n[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : X(Object(n)).forEach(function (t) {
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
                    (this._mutateMutedKeywordApiErrorHandlingConfiguration = E()({}, v.a.ValidationFailure, {
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
                    n === R.a.LOADED &&
                    a &&
                    !this.props.mutedKeyword &&
                    this.setState(this._initializeMuteKeywordStates(a)),
                    r || n !== R.a.LOADED || t === this.props.defaultOptions || this.setState(t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isEditing,
                    n = e.location,
                    r = this._isMutedKeywordNotFound()
                  return g.createElement(
                    j.a,
                    null,
                    g.createElement(
                      D.a,
                      {
                        location: n,
                        onSubmit: this._handleSubmit,
                        submitDisabled: !this.state.hasValidKeyword || r,
                        title: t ? le : se,
                      },
                      g.createElement(k.a, {
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
                  l || (i > 140 && (e = de)),
                    s && (t = pe),
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
                      var s = ue({ keyword: r })
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
                        r({ text: fe({ keyword: t.state.keyword }) }),
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
        })(g.Component),
        me = G.a.create(function (e) {
          return { infoText: { marginVertical: e.spaces.space20, marginHorizontal: e.spaces.space12 } }
        }),
        ye = T(he)
      t.default = ye
    },
    e7uq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BlockedAccountsScreen', function () {
          return H
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
        E = n('3XMw'),
        g = n.n(E),
        v = n('yoO3'),
        _ = n('wytG'),
        S = n('7JQg'),
        w = n('7FtF'),
        O = n('k/OQ'),
        C = n('v6aA'),
        P = n('Ty5D')
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
      var T = g.a.a5f32aa2,
        R = g.a.f8321d82,
        k = g.a.cf67f6d5,
        L = g.a.eb233865,
        I = '/settings/blocked/all',
        F = '/settings/safety_mode/autoblocked',
        j = '/settings/blocked/imported',
        D = { page: 'settings', section: 'blocked_accounts' },
        x = Object(_.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(8), n.e(24), n.e(220)]).then(n.bind(null, 'XFGu'))
        }),
        N = Object(_.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(8), n.e(24), n.e(220)]).then(n.bind(null, 'tJyY'))
        }),
        M = Object(_.a)(function () {
          return Promise.all([n.e(0), n.e(3), n.e(8), n.e(24), n.e(220)]).then(n.bind(null, 'aaHS'))
        }),
        H = (function (e) {
          u()(n, e)
          var t = A(n)
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
                  { to: I, key: R, label: R, retainScrollPosition: !1 },
                  e._fsAutoBlockListEnabled ? { to: F, key: k, label: k, retainScrollPosition: !1 } : void 0,
                  { to: j, key: L, label: L, retainScrollPosition: !1 },
                ]
                return b.createElement(O.a, { accessibilityLabel: T, links: t })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return b.createElement(
                    S.b,
                    { namespace: D },
                    b.createElement(
                      v.a,
                      null,
                      b.createElement(
                        w.a,
                        {
                          location: this.props.location,
                          secondaryBar: this._renderTabs(),
                          title: T,
                          withBottomBorder: !0,
                          withMarginBottom: !1,
                        },
                        b.createElement(
                          P.e,
                          null,
                          b.createElement(P.c, { component: x, exact: !0, path: I }),
                          this._fsAutoBlockListEnabled
                            ? b.createElement(P.c, { component: N, exact: !0, path: F })
                            : null,
                          b.createElement(P.c, { component: M, exact: !0, path: j }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(H, 'contextType', C.a), (t.default = H)
    },
    fLnR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PersonalizationScreen', function () {
          return _e
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
        E = n('6/RC'),
        g = n('zh9S'),
        v = n('NeAX'),
        _ = n('RqPI'),
        S = n('P1r1'),
        w = n('hqKg'),
        O = n('0KEI'),
        C = n('oEGd'),
        P = Object(w.createSelector)(_.l, S.g, v.selectPreferences, function (e, t, n) {
          return !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country
        }),
        A = Object(w.createSelector)(
          v.selectPreferencesFetchStatus,
          P,
          v.selectPreferences,
          v.selectUserPreferences,
          function (e, t, n, r) {
            return { fetchStatus: e, isEUUser: t, personalization: n, settings: r }
          },
        ),
        T = {
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_PERSONALIZATION_SCREEN',
          ),
          fetchPreferencesIfNeeded: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: g.a,
          scribeAction: g.c,
          scribePageImpression: g.d,
          syncSettings: v.syncSettings,
          updateSettings: v.updateSettings,
        },
        R = Object(C.g)(A, T),
        k = n('xCYy'),
        L = n('v//M'),
        I = n('uD2z'),
        F = n('3XMw'),
        j = n.n(F),
        D = n('fs1G'),
        x = n('7FtF'),
        N = n('iCwC'),
        M = n('MWbm'),
        H = n('G8HL'),
        U = n('t62R'),
        B = n('cCdp'),
        K = n('0yYu'),
        V = n('6vad'),
        G = n('csss'),
        W = n('eb3s'),
        Y = n('v6aA')
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Z = j.a.e8f57e07,
        Q = j.a.ce8450f1,
        J = j.a.ja94f34d,
        $ = j.a.e8f57e07,
        ee = j.a.bd73f7e5,
        te = j.a.a55db872,
        ne = j.a.ddbc3287,
        re = j.a.i7b329e0,
        ae = { headline: j.a.b934e0ea, text: j.a.bf917ce9, confirmButtonLabel: j.a.a148acb9 },
        oe = j.a.e8313b32,
        ce = j.a.f1d46fd5,
        ie = j.a.cfd2f35d,
        se = j.a.ib3357a5,
        le = j.a.c4ca418c,
        ue = j.a.b0b3ed8e,
        fe = j.a.f6c8ccc7,
        de = j.a.f748b0fc,
        pe = j.a.aa023546,
        he = j.a.cb2ed998,
        me = j.a.b85127bc,
        ye = j.a.b276596b,
        be = j.a.c966aaf4,
        Ee = j.a.d3c20d8f,
        ge = j.a.jdaf84e3,
        ve = { page: 'settings', section: 'personalization' },
        _e = (function (e) {
          u()(n, e)
          var t = q(n)
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
                return b.createElement(
                  M.a,
                  null,
                  b.createElement(
                    M.a,
                    null,
                    b.createElement(
                      U.b,
                      { color: 'gray700', size: 'subtext2', style: [N.a.infoText, N.a.bottomBorder] },
                      o._isLoggedIn ? Q : J,
                    ),
                  ),
                  b.createElement(B.a, {
                    checked: o._getSwitchAllValue(),
                    helpText: ee,
                    key: 'switchAll',
                    label: $,
                    name: 'switchAll',
                    onChange: o._handleSwitchAllChanged,
                    type: 'switch',
                  }),
                  b.createElement(K.a, null),
                  b.createElement(V.b, { text: te }),
                  b.createElement(B.a, {
                    checked: a,
                    disabled: o._adsPersonalizationOSLevelDisabled,
                    helpText: o._adsPersonalizationOSLevelDisabled ? ue : le,
                    key: 'allowPersonalization',
                    label: se,
                    learnMoreLink: 'https://support.twitter.com/articles/20170405',
                    name: 'allowPersonalization',
                    onChange: o._handleBooleanChanged,
                  }),
                  b.createElement(B.a, {
                    checked: t,
                    helpText: de,
                    key: 'allowDeviceAccess',
                    label: fe,
                    learnMoreLink: 'https://support.twitter.com/articles/20175257',
                    name: 'allowDeviceAccess',
                    onChange: o._handleBooleanChanged,
                  }),
                  o._isLoggedIn &&
                    b.createElement(B.a, {
                      checked: n,
                      helpText: he,
                      key: 'allowLocationHistoryUse',
                      label: pe,
                      name: 'allowLocationHistoryUse',
                      onChange: o._handleBooleanChanged,
                    }),
                  b.createElement(K.a, null),
                  b.createElement(V.b, { text: ne }),
                  o._renderCookiePersonalizationSetting(),
                  b.createElement(B.a, {
                    checked: r,
                    helpText: ge,
                    key: 'allowPartnerships',
                    label: Ee,
                    learnMoreLink: 'https://support.twitter.com/articles/20175379',
                    name: 'allowPartnerships',
                    onChange: o._handleBooleanChanged,
                  }),
                  o._isLoggedIn && b.createElement(G.a, { label: re, link: '/settings/your_twitter_data' }),
                  i &&
                    b.createElement(W.a, {
                      cancelButtonLabel: ie,
                      confirmButtonLabel: ce,
                      onCancel: o._handleCancelDisableEU,
                      onConfirm: o._handleDisableEUCookies,
                      text: oe,
                    }),
                  s &&
                    b.createElement(W.a, {
                      confirmButtonLabel: ae.confirmButtonLabel,
                      headline: ae.headline,
                      onCancel: o._handleCancelSwitchAll,
                      onConfirm: o._handleConfirmSwitchAll,
                      text: ae.text,
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
                ;(0, o.props.scribeAction)(z(z({}, ve), {}, { component: e, action: 'edit' }), { metadata: t })
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
                      !E.canUseDOM ||
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
                  n(ve), r(ve), !this._isLoggedIn && E.canUseDOM && a().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.location
                  return b.createElement(
                    x.a,
                    { location: n, title: Z },
                    b.createElement(
                      k.a,
                      null,
                      b.createElement(L.a, {
                        fetchStatus: t,
                        onRequestRetry: this._handleFetchPreferences,
                        render: this._render,
                      }),
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
                    o = D.a,
                    c = me
                  return (
                    t
                      ? ((e = be), r ? (o = this._handleEUCookiesChanged) : (a = !0))
                      : ((e = ye), (o = this._handleBooleanChanged)),
                    b.createElement(B.a, {
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
        })(b.Component)
      y()(_e, 'contextType', Y.a)
      t.default = R(Object(H.a)(_e))
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
        c = n('Lsrn'),
        i = n('k/Ka')
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
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'jU/U': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationsScreen', function () {
          return oe
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
        v = n('EPsT'),
        _ = n('dZRF'),
        S = n('uo4S'),
        w = n('kGix'),
        O = n('rxPX'),
        C = n('0KEI'),
        P = function (e, t) {
          return Object(w.d)(_.d(e), S.d(e, t))
        },
        A = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: P, applications: _.a.selectUniqUnrevokedApps, sessions: S.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: _.b,
              fetchSessionsIfNeeded: S.a,
              revokeAllSessions: S.b,
            }
          })
          .withAnalytics({ page: 'settings', section: 'applications' }),
        T = n('v//M'),
        R = n('yoO3'),
        k = n('VIKJ'),
        L = n('ZvNX'),
        I = n('eM8g'),
        F = n('7FtF'),
        j = n('6vad'),
        D = n('FIs5'),
        x = n('csss'),
        N = n('0yYu'),
        M = n('t62R'),
        H = n('rHpw'),
        U = n('3XMw'),
        B = n.n(U),
        K = n('U+bB'),
        V = n('MWbm')
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
      var W = B.a.i23e2807,
        Y = B.a.dd823129,
        X = B.a.ae1bbb26,
        z = B.a.ae72d4c4,
        q = B.a.i859a9d3,
        Z = B.a.e5e8a899,
        Q = B.a.hb12114e,
        J = B.a.f810f279,
        $ = B.a.ge06310e,
        ee = B.a.dd1b86f9,
        te = B.a.ee4b16f8,
        ne = B.a.gf673efb,
        re = B.a.e25e40f0,
        ae = B.a.d1baa458,
        oe = (function (e) {
          d()(n, e)
          var t = G(n)
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
                return g.createElement(
                  V.a,
                  null,
                  g.createElement(j.b, { text: W }),
                  t.length ? null : g.createElement(D.a, { header: $, message: te }),
                  t.map(function (e, t) {
                    var n = '/settings/applications/'.concat(e.app_id)
                    return g.createElement(x.a, {
                      description: e.organization ? ee({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: n,
                      thumbnail: g.createElement(K.a, { accessibilityLabel: '', source: e.img_url, style: ce.avatar }),
                    })
                  }),
                  e._renderSessionsDashboard(),
                )
              }),
              E()(u()(e), '_renderSession', function (e, t) {
                var n = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return g.createElement(L.a, {
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
                  return g.createElement(
                    R.a,
                    null,
                    g.createElement(
                      F.a,
                      { location: n, title: z },
                      g.createElement(T.a, {
                        accessibilityLabel: Z,
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
                    r = Object(k.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    o = a()(r, 2),
                    c = o[0],
                    i = o[1]
                  return n
                    ? g.createElement(
                        V.a,
                        null,
                        g.createElement(N.a, null),
                        g.createElement(j.b, { text: Y }),
                        c[0] ? this._renderSession(c[0], !1) : null,
                        g.createElement(v.a, {
                          confirmationSheetConfirmButtonLabel: X,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: J,
                          confirmationSheetText: ae,
                          label: Q,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        g.createElement(
                          I.a,
                          null,
                          g.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: n > 1 ? ne({ num: n - 1 }) : re },
                            g.createElement(
                              M.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              B.a.j3223a5b({ learnMoreLabel: q }),
                            ),
                          ),
                        ),
                        g.createElement(N.a, null),
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
        })(g.Component)
      E()(oe, 'defaultProps', { applications: [], sessions: [] })
      var ce = H.a.create(function (e) {
        return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
      })
      t.default = A(oe)
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
        c = n('Lsrn'),
        i = n('k/Ka')
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
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z',
              fill: '#EA4335',
            }),
            o.createElement('path', {
              d: 'M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z',
              fill: '#FBBC05',
            }),
            o.createElement('path', {
              d: 'M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z',
              fill: '#34A853',
            }),
            o.createElement('path', {
              d: 'M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z',
              fill: '#4285F4',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    mEn7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EmailScreen', function () {
          return X
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
        v = n('vEo5'),
        _ = n('1YZw'),
        S = n('P1r1'),
        w = n('rxPX'),
        O = n('0KEI'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { emails: v.selectEmails, fetchStatus: v.selectFetchStatus }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_EMAIL_SCREEN',
              ),
              fetchDevices: v.fetchDevices,
              fetchSettings: S.e,
              resendConfirmationEmail: v.resendConfirmationEmail,
              updateEmail: v.updateEmail,
            }
          })
          .withAnalytics({ page: 'settings', section: 'email' }),
        P = n('v//M'),
        A = n('yoO3'),
        T = n('VIKJ'),
        R = n('7FtF'),
        k = n('MWbm'),
        L = n('p+r5'),
        I = n('0yYu'),
        F = n('jtO7'),
        j = n('atVN'),
        D = n('t62R'),
        x = n('3XMw'),
        N = n.n(x)
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
      var H = N.a.i2209530,
        U = N.a.ebeeac1a,
        B = N.a.dc013356,
        K = N.a.ea28c7ce,
        V = N.a.f3f66251,
        G = N.a.i5107de3,
        W = N.a.d19fd429,
        Y = N.a.g4da3245,
        X = (function (e) {
          d()(n, e)
          var t = M(n)
          function n(e, r) {
            var o
            return (
              c()(this, n),
              (o = t.call(this, e, r)),
              E()(u()(o), '_render', function () {
                var e,
                  t,
                  n = o.props.emails,
                  r = Object(T.a)(n, function (e) {
                    return e.email_verified
                  }),
                  c = a()(r, 2),
                  i = c[0],
                  s = c[1],
                  l = null === (e = i[0]) || void 0 === e ? void 0 : e.email,
                  u = null === (t = s[0]) || void 0 === t ? void 0 : t.email
                return g.createElement(
                  k.a,
                  null,
                  l
                    ? g.createElement(L.a, {
                        defaultValue: l,
                        editable: !1,
                        label: B,
                        name: 'current_email',
                        type: 'email',
                      })
                    : null,
                  u ? o._renderUnverifiedEmailMessage(u) : null,
                  g.createElement(I.a, null),
                  g.createElement(F.a, { color: 'primary', label: n.length ? G : V, link: '/i/flow/add_email' }),
                )
              }),
              E()(u()(o), '_renderUnverifiedEmailMessage', function (e) {
                return g.createElement(
                  j.a,
                  null,
                  g.createElement(
                    D.b,
                    { color: 'gray700' },
                    g.createElement(
                      N.a.I18NFormatMessage,
                      { $i18n: 'f3c4e2c5', unverifiedEmail: e },
                      g.createElement(
                        D.b,
                        { accessibilityRole: 'button', color: 'link', onClick: o._handleResendVerification },
                        N.a.h021352e({ resendConfirmationLabel: W }),
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
                  return t({ text: Y })
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
                  return g.createElement(
                    R.a,
                    { location: n, submitDisabled: !this.state.email, submitLabel: H, title: U },
                    g.createElement(
                      A.a,
                      null,
                      g.createElement(P.a, {
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
        })(g.Component)
      t.default = C(X)
    },
    oWwl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PushNotificationsScreen', function () {
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
        b = (n('2G9S'), n('MvUL'), n('KqXw'), n('kPZX')),
        E = n('ERkP'),
        g = n('zh9S'),
        v = n('vEo5'),
        _ = n('1YZw'),
        S = n('hqKg'),
        w = n('auX9'),
        O = n('G6rE'),
        C = n('0KEI'),
        P = n('oEGd'),
        A = Object(S.createSelector)(
          v.selectPushSettingsFetchStatus,
          function (e) {
            var t = O.e.selectLoggedInUser(e)
            return t && t.verified
          },
          v.selectBrowserPushStatus,
          v.selectPushSettings,
          v.selectPushTemplate,
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
        T = {
          addToast: _.b,
          createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_NOTIFICATIONS_PUSH_SCREEN',
          ),
          fetchPushSettingsIfNeeded: v.fetchPushSettingsIfNeeded,
          googleAnalyticsPageView: g.a,
          pushSubscribe: v.pushSubscribe,
          removePushDeviceIfSubscribed: v.removePushDeviceIfSubscribed,
          scribeAction: g.c,
          scribePageImpression: g.d,
          updatePushNotificationSettings: v.updatePushNotificationSettings,
        },
        R = Object(P.g)(A, T),
        k = n('kGix'),
        L = n('v//M'),
        I = n('3XMw'),
        F = n.n(I),
        j = (n('z84I'), n('ho0z'), n('SrIh')),
        D = n('0yYu'),
        x = n('6vad'),
        N = n('Y3cQ'),
        M = n('cCdp')
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var K = F.a.b40d0145,
        V = F.a.b68050dc,
        G = (function (e) {
          u()(n, e)
          var t = B(n)
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
                  c(U(U({}, i), {}, { component: t, action: r })), o(s)
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
                    ? E.createElement(
                        'div',
                        null,
                        a.map(function (t, a) {
                          return E.createElement(
                            'div',
                            { key: a },
                            t.section_header
                              ? E.createElement(
                                  E.Fragment,
                                  null,
                                  E.createElement(D.a, null),
                                  E.createElement(x.b, { text: t.section_header }),
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
                                    E.createElement(N.a, {
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
                                  return E.createElement(M.a, {
                                    checked: c,
                                    helpText: K,
                                    key: t.id,
                                    label: t.name,
                                    learnMoreLabel: V,
                                    learnMoreLink: '/settings/device_follow',
                                    name: t.id,
                                    onChange: e._handleBooleanChanged(t.scribe_component),
                                  })
                                case 'on_off':
                                  var i = n[t.id] && 'on' === n[t.id]
                                  return E.createElement(M.a, {
                                    checked: i,
                                    key: t.id,
                                    label: t.name,
                                    name: t.id,
                                    onChange: e._handleBooleanChanged(t.scribe_component),
                                  })
                                default:
                                  return Object(j.a)('Unsupported control type: '.concat(t.control_type)), null
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
        })(E.Component),
        W = n('7FtF'),
        Y = n('FIs5')
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Z = F.a.hee41732,
        Q = F.a.dcef34ab,
        J = F.a.a39f706d,
        $ = F.a.hee41732,
        ee = F.a.bb443ca5,
        te = F.a.cdce0394,
        ne = F.a.b39bcae1,
        re = F.a.e542c362,
        ae = F.a.fe11b3e9,
        oe = F.a.a1245d3a,
        ce = F.a.f580c738,
        ie = F.a.i4ac9969,
        se = F.a.d8f69f09,
        le = { page: 'settings', section: 'push_notifications' },
        ue = function () {
          return b.e() === b.a.APK_PUSH
        },
        fe = (function (e) {
          u()(n, e)
          var t = q(n)
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
                  return E.createElement(G, {
                    currentSettings: r,
                    isVerified: n,
                    onChange: e._handleSettingsChanged,
                    scribeAction: c,
                    scribeNamespace: le,
                    template: o,
                  })
                if (i) {
                  var s = ue() ? se : ie
                  return E.createElement(Y.a, { header: ce, message: s })
                }
                return a.supported
                  ? E.createElement(Y.a, {
                      buttonText: Q,
                      header: ne,
                      message: re,
                      onButtonPress: e._handlePushSubscribe,
                    })
                  : E.createElement(Y.a, { header: ae, message: oe })
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
                  ? (i(z(z({}, le), {}, { action: 'enable' })), o().catch(a()))
                  : (i(z(z({}, le), {}, { action: 'disable' })), c().catch(a({ showToast: !0 })))
              }),
              y()(s()(e), '_handlePushSubscribe', function () {
                e.props.scribeAction(z(z({}, le), {}, { element: 'soft_prompt', action: 'click' })),
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
                  ;(0, e.scribePageImpression)(le), t(le)
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function (e) {
                  e.fetchStatus === k.a.LOADED &&
                    !1 === b.g() &&
                    (this.props.addToast({ text: J }), e.history.replace('/settings')),
                    e.fetchStatus === k.a.LOADED &&
                      !e.pushStatus.subscribed &&
                      e.pushStatus.supported &&
                      this.props.scribeAction(z(z({}, le), {}, { element: 'soft_prompt', action: 'impression' }))
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
                      !ue() && a.supported
                        ? E.createElement(M.a, {
                            checked: a.subscribed,
                            helpText: ee + (n ? ' '.concat(te) : ''),
                            key: 'switchAll',
                            label: $,
                            name: 'switchAll',
                            onChange: this._handleSwitchChanged,
                            type: 'switch',
                          })
                        : null
                  return E.createElement(
                    W.a,
                    { location: r, title: Z },
                    o,
                    E.createElement(L.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }),
                  )
                },
              },
            ]),
            n
          )
        })(E.Component)
      t.default = R(fe)
    },
    oX5A: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'disableLoginVerificationLabel', function () {
          return V
        }),
        n.d(t, 'disableLabel', function () {
          return W
        }),
        n.d(t, 'oldDisableMethodLabel', function () {
          return Y
        }),
        n.d(t, 'LoginVerificationScreen', function () {
          return ke
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
        v = n('k49u'),
        _ = n('wvRX'),
        S = n('rxPX'),
        w = n('0KEI'),
        O = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: _.f, loginVerificationSettings: _.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_LOGIN_VERIFICATION_SCREEN',
              ),
              deleteSecurityKey: _.a,
              disableLoginVerification: _.b,
              disableLoginVerificationMethod: _.c,
              enrollIn2FA: _.d,
              fetchLoginVerificationSettings: _.e,
            }
          }),
        C = n('v//M'),
        P = n('3XMw'),
        A = n.n(P),
        T = n('N9bX'),
        R = n('yoO3'),
        k = n('7FtF'),
        L = n('eb3s'),
        I = n('6vad'),
        F = n('cCdp'),
        j = n('jtO7'),
        D = n('csss'),
        x = n('0yYu'),
        N = n('v6aA'),
        M = n('7JQg')
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
      var U = A.a.bc262c2d,
        B = A.a.hc1a91da,
        K = A.a.gee4dc74,
        V = A.a.b39c7b14,
        G = A.a.a923fce6,
        W = A.a.ff781e0a,
        Y = A.a.c557ac30,
        X = A.a.d1334649,
        z = A.a.ee3a7bf9,
        q = A.a.aa9139cc,
        Z = A.a.i0d4f09e,
        Q = A.a.a219e217,
        J = A.a.e0d79de8,
        $ = A.a.ja6bbfa0,
        ee = A.a.dd703318,
        te = A.a.i859a9d3,
        ne = A.a.c2570921,
        re = A.a.f3820211,
        ae = A.a.ab61b41a,
        oe = A.a.h4787492,
        ce = A.a.h6d0d89c,
        ie = A.a.f57be1cc,
        se = A.a.e2b81a1f,
        le = A.a.cd195528,
        ue = A.a.b1686800,
        fe = A.a.a1860ee7,
        de = A.a.j45a2856,
        pe = A.a.d8612d9c,
        he = A.a.e13d4467,
        me = A.a.j24c37b2,
        ye = A.a.c1d96d6a,
        be = A.a.gf91694d,
        Ee = A.a.a219e217,
        ge = A.a.j265ddb6,
        ve = A.a.a136ecac,
        _e = A.a.fc2a5c92,
        Se = A.a.d7bfde1a,
        we = 'two_factor',
        Oe = 'Sms',
        Ce = 'Totp',
        Pe = 'U2fSecurityKey',
        Ae =
          ((r = {}),
          E()(r, we, 'two_factor'),
          E()(r, Oe, 'two_factor_auth_sms'),
          E()(r, Ce, 'two_factor_auth_totp'),
          E()(r, Pe, 'two_factor_auth_u2f_security_key'),
          r),
        Te =
          ((a = {}),
          E()(a, Oe, '/i/flow/two-factor-sms-enrollment'),
          E()(a, Ce, '/i/flow/two-factor-auth-app-enrollment'),
          E()(a, Pe, '/i/flow/two-factor-security-key-enrollment'),
          a),
        Re = Object.freeze({
          NONE: 'NONE',
          VERIFY_EMAIL: 'verify_email',
          METHOD: 'method',
          ROOT_SETTING: 'root_setting',
          ENABLE_LOGIN_VERIFICATION: 'enable_login_verification',
          MAX_SECURITY_KEY_LIMIT_REACHED: 'max_security_key_limit_reached',
          STANDALONE_SECURITY_KEY: 'standalone_security_key',
          SUSPENDED: 'suspended',
        }),
        ke = (function (e) {
          d()(n, e)
          var t = H(n)
          function n(e, r) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, r)),
              E()(u()(a), '_initialPath', window.location.pathname),
              E()(u()(a), '_previousPath', a._initialPath),
              E()(u()(a), '_render', function () {
                var e = a.props.loginVerificationSettings.isOldPushUser
                return g.createElement(
                  g.Fragment,
                  null,
                  e ? a._renderLegacyPush2FASettings() : a._render2FASettings(),
                  a.state.confirmationType !== Re.NONE ? a._renderConfirmationSheet() : null,
                )
              }),
              E()(u()(a), '_renderConfirmationSheet', function () {
                switch (a.state.confirmationType) {
                  case Re.ROOT_SETTING:
                    return g.createElement(L.a, {
                      confirmButtonLabel: z,
                      headline: W,
                      onCancel: a._handleCloseConfirmation,
                      onConfirm: a._handleConfirmDisableLoginVerification,
                      text: G,
                    })
                  case Re.METHOD:
                    return g.createElement(L.a, {
                      confirmButtonLabel: z,
                      headline: W,
                      onCancel: a._handleCloseConfirmation,
                      onConfirm: a._handleConfirmDisableMethod,
                      text: X,
                    })
                  case Re.VERIFY_EMAIL:
                    return g.createElement(L.a, {
                      cancelButtonLabel: te,
                      cancelButtonLink: 'https://help.twitter.com/managing-your-account/cant-confirm-my-email-address',
                      confirmButtonLabel: Ee,
                      headline: ge,
                      onCancel: a._handleCloseConfirmation,
                      onConfirm: a._handleCloseConfirmation,
                      text: ve,
                    })
                  case Re.ENABLE_LOGIN_VERIFICATION:
                    return g.createElement(L.a, {
                      confirmButtonLabel: me,
                      headline: pe,
                      onConfirm: a._handleCloseConfirmation,
                      text: he,
                      withCancelButton: !1,
                    })
                  case Re.MAX_SECURITY_KEY_LIMIT_REACHED:
                    return g.createElement(L.a, {
                      confirmButtonLabel: me,
                      headline: ye,
                      onConfirm: a._handleCloseConfirmation,
                      text: be,
                      withCancelButton: !1,
                    })
                  case Re.STANDALONE_SECURITY_KEY:
                    return g.createElement(L.a, {
                      confirmButtonLabel: Q,
                      onConfirm: a._handleCloseConfirmation,
                      text: J,
                      withCancelButton: !1,
                    })
                  case Re.SUSPENDED:
                    return g.createElement(L.a, {
                      confirmButtonLabel: me,
                      headline: _e,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/suspended-twitter-accounts',
                      learnMoreText: te,
                      onConfirm: a._handleCloseConfirmation,
                      text: Se,
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
                    ? a.props.history.push({ pathname: Te[e] })
                    : (0, a.props.enrollIn2FA)({ flow: Ae[e] }).catch(n(a._enrollmentErrorHandlingMap))
                  : a._showDisableMethodConfirmation(e)
              }),
              E()(u()(a), '_handleAddSecurityKey', function () {
                var e = a.props.loginVerificationSettings.methods
                e[Pe] && e[Pe].length >= T.a
                  ? a.setState({ confirmationType: Re.MAX_SECURITY_KEY_LIMIT_REACHED })
                  : a._handleTwoFactorMethodsChange(Pe, !0)
              }),
              E()(u()(a), '_showDisableLoginVerificationConfirmation', function () {
                a.setState({ confirmationType: Re.ROOT_SETTING })
              }),
              E()(u()(a), '_handleConfirmDisableLoginVerification', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.disableLoginVerification
                a._handleCloseConfirmation(), n().catch(t())
              }),
              E()(u()(a), '_showStandaloneSecurityKeyNotification', function () {
                a.setState({ confirmationType: Re.STANDALONE_SECURITY_KEY })
              }),
              E()(u()(a), '_showDisableMethodConfirmation', function (e) {
                ;(e !== Oe && e !== Ce && e !== Pe) || a.setState({ confirmationType: Re.METHOD, method: e })
              }),
              E()(u()(a), '_handleConfirmDisableMethod', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.deleteSecurityKey,
                  r = e.disableLoginVerificationMethod,
                  o = e.loginVerificationSettings.methods,
                  c = a.state.method
                if ((a._handleCloseConfirmation(), c === Pe && Array.isArray(o[Pe]) && o[Pe].length))
                  Promise.all(
                    o[Pe].map(function (e) {
                      return n({ securityKeyId: e.id })
                    }),
                  ).catch(t(a._disableMethodErrorHandlingMap))
                else if (c) {
                  var i = c !== Pe && !(Oe in o && Ce in o) && Array.isArray(o[Pe]) && 1 === o[Pe].length
                  r({ method: c })
                    .then(function () {
                      a._isStandaloneSecurityKeyEnabled && i && a._showStandaloneSecurityKeyNotification()
                    })
                    .catch(t(a._disableMethodErrorHandlingMap))
                }
              }),
              E()(u()(a), '_showVerifyEmailConfirmation', function () {
                a.setState({ confirmationType: Re.VERIFY_EMAIL })
              }),
              E()(u()(a), '_showEnableLoginVerificationConfirmation', function () {
                a.setState({ confirmationType: Re.ENABLE_LOGIN_VERIFICATION })
              }),
              E()(u()(a), '_showSuspendedConfirmation', function () {
                a.setState({ confirmationType: Re.SUSPENDED })
              }),
              E()(u()(a), '_handleCloseConfirmation', function () {
                a.setState({ confirmationType: Re.NONE, method: void 0 })
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
                  E()(e, v.a.AccessDeniedByBouncer, {
                    customAction: function (e) {
                      var n = e.bounce_location
                      n &&
                        t.push({
                          state: { bounce_location: n },
                          pathname: '/settings/account/login_verification/enrollment',
                        })
                    },
                  }),
                  E()(e, v.a.CannotEnableLoginVerificationUnconfirmedEmail, {
                    customAction: function () {
                      a._showVerifyEmailConfirmation()
                    },
                  }),
                  E()(e, v.a.CannotEnrollLoginVerificationNotYetEnabled, {
                    customAction: function () {
                      a._showEnableLoginVerificationConfirmation()
                    },
                  }),
                  E()(e, v.a.CurrentUserSuspended, {
                    customAction: function () {
                      a._showSuspendedConfirmation()
                    },
                  }),
                  e
                )
              }),
              (a.state = { confirmationType: Re.NONE, method: void 0 }),
              (a._disableMethodErrorHandlingMap = E()({}, v.a.IneligibleFor2faAfterModification, {
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
                  return g.createElement(
                    R.a,
                    null,
                    g.createElement(
                      k.a,
                      { location: n, title: ee },
                      g.createElement(C.a, {
                        accessibilityLabel: $,
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
                  return g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(I.b, { text: ee }),
                    g.createElement(F.a, {
                      checked: e && this._isChecked(Oe),
                      helpText: re,
                      label: ne,
                      name: Oe,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    g.createElement(F.a, {
                      checked: e && this._isChecked(Ce),
                      helpText: oe,
                      label: ae,
                      name: Ce,
                      onChange: this._handleTwoFactorMethodsChange,
                    }),
                    g.createElement(F.a, {
                      checked: e && this._isChecked(Pe),
                      helpText: this.context.featureSwitches.isTrue('responsive_web_new_copy_security_key_2fa_enabled')
                        ? se
                        : ie,
                      label: ce,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
                      name: Pe,
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
                  return null !== (e = this.props.loginVerificationSettings.methods[Pe]) && void 0 !== e && e.length
                    ? this._isOcf2faEnrollmentEnabled
                      ? g.createElement(j.a, {
                          align: 'left',
                          color: 'primary',
                          label: ue,
                          link: { pathname: '/settings/account/login_verification/security_keys' },
                        })
                      : g.createElement(
                          g.Fragment,
                          null,
                          g.createElement(D.a, {
                            label: ue,
                            link: { pathname: '/settings/account/login_verification/security_keys' },
                          }),
                          g.createElement(j.a, {
                            align: 'left',
                            color: 'primary',
                            label: le,
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
                  return g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(F.a, {
                      checked: e,
                      helpText: Z,
                      label: q,
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
                  return g.createElement(
                    g.Fragment,
                    null,
                    g.createElement(x.a, null),
                    g.createElement(I.b, { text: U }),
                    g.createElement(D.a, {
                      description: K,
                      label: B,
                      link: '/settings/account/login_verification/backup_code',
                    }),
                    g.createElement(D.a, {
                      description: de,
                      label: fe,
                      link: '/settings/account/login_verification/temporary_password',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      E()(ke, 'contextType', N.a)
      t.default = Object(M.c)({ page: 'settings', section: 'loginVerification' })(O(ke))
    },
    oXNP: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SecurityKeysScreen', function () {
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
        b = (n('z84I'), n('ho0z'), n('ERkP')),
        E = n('k49u'),
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
                'SETTINGS_SECURITY_KEYS_SCREEN',
              ),
              enrollIn2FA: g.d,
              fetchLoginVerificationSettings: g.e,
            }
          }),
        w = n('v//M'),
        O = n('3XMw'),
        C = n.n(O),
        P = n('N9bX'),
        A = n('5FtR'),
        T = n('7FtF'),
        R = n('xHsv'),
        k = n('eb3s'),
        L = n('csss'),
        I = n('t62R'),
        F = n('jtO7'),
        j = n('v6aA')
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
      var x = C.a.j24c37b2,
        N = C.a.c1d96d6a,
        M = C.a.gf91694d,
        H = C.a.b1686800,
        U = C.a.f7954a0c,
        B = C.a.h69986c1,
        K = C.a.i5896ba2,
        V = C.a.a8ef2b64,
        G = (function (e) {
          u()(n, e)
          var t = D(n)
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
                  ? b.createElement(
                      T.a,
                      { location: t, title: H },
                      b.createElement(R.a, { description: B }),
                      o._renderU2fSecurityKeys(),
                      o.state.showMaxKeyLimitConfirmation ? o._renderMaxKeyLimitConfirmation() : null,
                    )
                  : b.createElement(A.a, { to: '/settings/account/login_verification' })
              }),
              y()(s()(o), '_renderMaxKeyLimitConfirmation', function () {
                return b.createElement(k.a, {
                  confirmButtonLabel: x,
                  headline: N,
                  onConfirm: o._handleCloseConfirmation,
                  text: M,
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
                Array.isArray(e.U2fSecurityKey) && e.U2fSecurityKey.length >= P.a
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
                  return b.createElement(w.a, {
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
                    ? b.createElement(
                        b.Fragment,
                        null,
                        e.U2fSecurityKey.map(function (e) {
                          return b.createElement(L.a, {
                            key: e.id,
                            label: b.createElement(I.b, null, e.name || '('.concat(V, ')')),
                            link: { pathname: '/settings/account/login_verification/security_keys/'.concat(e.id) },
                          })
                        }),
                        b.createElement(F.a, {
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
                  return y()({}, E.a.AccessDeniedByBouncer, {
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
        })(b.Component)
      y()(G, 'contextType', j.a)
      var W = S(G)
      t.default = W
    },
    q1AG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ScreenNameScreen', function () {
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
        b = n('ERkP'),
        E = n('P1r1'),
        g = n('LXAX'),
        v = n('G6rE'),
        _ = n('rxPX'),
        S = n('0KEI'),
        w = Object(_.a)()
          .propsFromState(function () {
            return { loggedInUser: v.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              clearUsernameAvailability: g.a,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SCREEN_NAME_SCREEN',
              ),
              updateSettings: E.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'screen_name' }),
        O = n('3XMw'),
        C = n.n(O),
        P = n('yoO3'),
        A =
          (n('ho0z'),
          n('z84I'),
          n('LW0h'),
          Object(_.a)()
            .propsFromState(function () {
              return { loggedInUser: v.e.selectLoggedInUser, usernameData: g.c }
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
              return { fetchUsernameAvailability: g.b }
            })),
        T = n('VY6S'),
        R = n('MWbm'),
        k = n('t62R'),
        L = n('p+r5'),
        I = n('0yYu'),
        F = n('6vad'),
        j = n('rHpw')
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
      var x = C.a.d1f6d336,
        N = C.a.de65c756,
        M = (function (e) {
          u()(n, e)
          var t = D(n)
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
              (r._fetchUsernameStatusDebounced = Object(T.a)(function () {
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
                  return b.createElement(
                    k.b,
                    {
                      accessibilityRole: 'button',
                      color: 'link',
                      key: t,
                      onPress: this._handleItemSelect,
                      style: H.altOptionText,
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
                  return b.createElement(
                    R.a,
                    null,
                    b.createElement(L.a, {
                      autoComplete: 'off',
                      autoCorrect: !1,
                      errorText: c,
                      invalid: i,
                      label: x,
                      name: 'typedScreenName',
                      onChange: this._handleTypedFieldChange,
                      spellCheck: 'false',
                      value: this.state.value,
                    }),
                    b.createElement(I.a, null),
                    b.createElement(F.b, { text: N }),
                    b.createElement(
                      R.a,
                      { style: H.container },
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
        })(b.Component),
        H = j.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            altOptionText: { display: 'block', paddingVertical: e.spaces.space12 },
          }
        }),
        U = A(M),
        B = n('7FtF')
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
      var V = C.a.je506a60,
        G = (function (e) {
          u()(n, e)
          var t = K(n)
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
                  return b.createElement(
                    P.a,
                    null,
                    b.createElement(
                      B.a,
                      { location: t, onSubmit: this._handleSubmit, submitDisabled: !a, title: V },
                      b.createElement(U, { onScreenNameChanged: this._handleScreenNameChange }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = w(G)
    },
    'qYi+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
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
        E = n('zfvc'),
        g = n('t62R'),
        v = n('fyvP'),
        _ = n('rHpw'),
        S = n('CK8+'),
        w = n('MWbm')
      function O(e) {
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
      var C = 1,
        P = (function (e) {
          u()(n, e)
          var t = O(n)
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
              (e._labelId = 'RADIO_GROUP_'.concat(C, '_LABEL')),
              (C += 1),
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
                  return b.createElement(
                    w.a,
                    {
                      accessibilityLabel: t,
                      accessibilityLabelledBy: a && !t ? this._labelId : void 0,
                      accessibilityRole: 'group',
                      style: [A.root, r && A.disabled],
                    },
                    b.createElement(
                      b.Fragment,
                      null,
                      a
                        ? b.createElement(
                            w.a,
                            { accessibilityRole: 'label', nativeID: this._labelId, style: A.header },
                            b.createElement(
                              w.a,
                              { style: A.label },
                              b.createElement(g.b, { weight: 'bold' }, a),
                              b.createElement(S.a, {
                                disabled: r,
                                onValueChange: this._handleGateToggle,
                                value: l !== c,
                              }),
                            ),
                            n ? b.createElement(g.b, { color: 'gray700', size: 'subtext2' }, n) : null,
                          )
                        : null,
                      s &&
                        b.createElement(
                          E.b,
                          { onAnimateComplete: this._handleAnimationComplete, show: l !== c },
                          b.createElement(
                            w.a,
                            null,
                            b.createElement(
                              w.a,
                              { style: A.radioGroup, tabIndex: 0 },
                              b.createElement(v.a, {
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
        })(b.Component)
      y()(P, 'defaultProps', { disabled: !1 })
      var A = _.a.create(function (e) {
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
          return K
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
        E = n('wvRX'),
        g = n('rxPX'),
        v = n('0KEI'),
        _ = Object(g.a)()
          .propsFromState(function () {
            return { fetchStatus: E.f, loginVerificationSettings: E.g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_MANAGE_SECURITY_KEY_SCREEN',
              ),
              fetchLoginVerificationSettings: E.e,
            }
          }),
        S = n('v//M'),
        w = n('3XMw'),
        O = n.n(w),
        C = n('5FtR'),
        P = n('7FtF'),
        A = n('MWbm'),
        T = n('p+r5'),
        R = n('xHsv'),
        k = n('0yYu'),
        L = n('jtO7'),
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
      var j = O.a.d4e220b3,
        D = O.a.g6d0f0b6,
        x = O.a.b894f68a,
        N = O.a.g2601bb5,
        M = O.a.b464b726,
        H = O.a.a4101e1b,
        U = O.a.a9f397f3,
        B = O.a.a8ef2b64,
        K = (function (e) {
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
                  ? b.createElement(
                      P.a,
                      { location: n, title: D },
                      b.createElement(
                        A.a,
                        null,
                        b.createElement(T.a, {
                          defaultValue: o.name || '('.concat(B, ')'),
                          editable: !1,
                          label: j,
                          name: 'current_security_key',
                          style: V.formTextInput,
                        }),
                        b.createElement(
                          A.a,
                          { style: V.settingDescriptionCellContainer },
                          b.createElement(R.a, { description: H({ securityKeyAddedDate: c }) }),
                        ),
                        b.createElement(k.a, null),
                        b.createElement(L.a, {
                          color: 'primary',
                          label: N,
                          link: {
                            pathname: '/i/flow/rename-security-key',
                            query: { input_flow_data: JSON.stringify({ requested_variant: o.id }) },
                          },
                        }),
                        b.createElement(L.a, {
                          color: 'red500',
                          label: M,
                          link: {
                            pathname: '/i/flow/delete-security-key',
                            query: { input_flow_data: JSON.stringify({ requested_variant: o.id }) },
                          },
                        }),
                      ),
                    )
                  : b.createElement(C.a, { to: '/settings/account/login_verification' })
              }),
              y()(s()(e), '_fetchLoginVerificationSettings', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchLoginVerificationSettings)().catch(n())
              }),
              y()(s()(e), '_getSecurityKeyAddedDate', function (e) {
                if (e) {
                  var t = new Date(parseInt(e, 10))
                  return U(t)
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
                  return b.createElement(S.a, {
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
        })(b.Component),
        V = I.a.create(function (e) {
          return {
            formTextInput: { paddingBottom: 0 },
            settingDescriptionCellContainer: { paddingLeft: e.spaces.space12 },
          }
        }),
        G = _(K)
      t.default = G
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
          return Z
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
        E = n('EPsT'),
        g = n('vEo5'),
        v = n('wvRX'),
        _ = n('1YZw'),
        S = n('P1r1'),
        w = n('rxPX'),
        O = n('0KEI'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: g.selectFetchStatus, phones: g.selectPhoneNumbers, loginVerificationSettings: v.g }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_PHONE_SCREEN',
              ),
              fetchDevices: g.fetchDevices,
              fetchSettings: S.e,
              removeDevice: g.removeDevice,
              fetchLoginVerificationSettings: v.e,
            }
          })
          .withAnalytics({ page: 'settings', section: 'phone' }),
        P = n('v//M'),
        A = n('3XMw'),
        T = n.n(A),
        R = n('yoO3'),
        k = n('7FtF'),
        L = n('MWbm'),
        I = n('p+r5'),
        F = n('0yYu'),
        j = n('jtO7'),
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
      var N = T.a.cb841d55,
        M = T.a.dc013356,
        H = T.a.ce37ea43,
        U = T.a.ibaf239e,
        B = T.a.j2636557,
        K = { headline: T.a.e49b16d3, text: T.a.i931719e, confirmButtonLabel: T.a.d96cf7cd },
        V = T.a.j841d1f4,
        G = T.a.e49b16d3,
        W = T.a.f0977f51,
        Y = T.a.da23c5b6,
        X = T.a.hf186732,
        z = { headline: G, text: Y, confirmButtonLabel: W },
        q = { headline: G, text: X, confirmButtonLabel: W },
        Z = (function (e) {
          u()(n, e)
          var t = x(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              y()(s()(o), 'state', { awaitingPin: !1, phone: null, isPhoneValid: null, smsVerifyError: void 0 }),
              y()(s()(o), '_renderOCFPhone', function () {
                var e = o.props.phones,
                  t = e[0] && e[0].phone_number
                return b.createElement(
                  L.a,
                  null,
                  t
                    ? b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(I.a, { defaultValue: t, editable: !1, label: M, name: 'current_phone' }),
                        b.createElement(F.a, null),
                      )
                    : null,
                  b.createElement(j.a, { color: 'primary', label: t ? U : H, link: '/i/flow/add_phone' }),
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
                    t({ text: V }), i && 'Sms' in c && r().catch(n()), o._handleGoBack()
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
                  return b.createElement(
                    R.a,
                    null,
                    b.createElement(
                      k.a,
                      { location: n, title: N },
                      b.createElement(P.a, {
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
                          ? q
                          : z
                        : K
                  return b.createElement(E.a, {
                    confirmationSheetConfirmButtonLabel: n.confirmButtonLabel,
                    confirmationSheetConfirmButtonType: 'destructiveFilled',
                    confirmationSheetHeadline: n.headline,
                    confirmationSheetText: n.text,
                    label: B,
                    onConfirmationSheetConfirm: this._handleRemove,
                    withBottomBorder: !1,
                  })
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(Z, 'contextType', D.a)
      t.default = C(Z)
    },
    tvRM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emailSettingsLabels', function () {
          return se
        }),
        n.d(t, 'EmailNotificationsScreen', function () {
          return ue
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
        E = n('G6rE'),
        g = n('rxPX'),
        v = n('0KEI'),
        _ = (n('JtPf'), n('7x/C'), n('oEOe')),
        S = n('RqPI'),
        w = n('kGix'),
        O = n('XMGw'),
        C = n('Ssj5')
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = ''.concat(O.a, '/email_notifications'),
        R = 'rweb/'.concat(T),
        k = _.a(R, 'FETCH_EMAIL_NOTIFICATIONS'),
        L = _.a(R, 'UPDATE_EMAIL_NOTIFICATIONS'),
        I = { emailSettings: {}, error: null, fetchStatus: w.a.NONE }
      function F() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case k.REQUEST:
            return A(A({}, e), {}, { fetchStatus: w.a.LOADING })
          case k.FAILURE:
            return A(A({}, e), {}, { error: t.payload, fetchStatus: w.a.FAILED })
          case k.SUCCESS:
            return A(A({}, e), {}, { emailSettings: t.payload, error: null, fetchStatus: w.a.LOADED })
          case L.SUCCESS:
            return A(
              A({}, e),
              {},
              { emailSettings: A(A({}, e.emailSettings), t.meta), error: null, fetchStatus: w.a.LOADED },
            )
          default:
            return e
        }
      }
      C.a.register(y()({}, T, F))
      var j = function (e) {
          return e[T].fetchStatus
        },
        D = function (e) {
          return e[T].emailSettings
        },
        x = function () {
          return function (e, t) {
            return j(t()) === w.a.LOADED ? Promise.resolve() : e(N())
          }
        },
        N = function () {
          return function (e, t, n) {
            var r = n.api,
              a = S.p(t())
            return _.b(e, { params: { userId: a }, request: r.EmailNotificationSettings.fetch })({
              actionTypes: k,
              context: 'FETCH_EMAIL_NOTIFICATIONS',
            })
          }
        },
        M = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = S.p(n())
            return _.c(t, { params: { userId: o, settings: e }, request: a.EmailNotificationSettings.update })({
              actionTypes: L,
              context: 'UPDATE_EMAIL_NOTIFICATIONS',
              meta: e,
            })
          }
        },
        H = function (e) {
          var t = E.e.selectLoggedInUser(e)
          return !(!t || !t.verified)
        },
        U = Object(g.a)()
          .propsFromState(function () {
            return { fetchStatus: j, isVerified: H, emailSettings: D }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_NOTIFICATIONS_EMAIL_SCREEN',
              ),
              fetchEmailSettingsIfNeeded: x,
              updateEmailSettings: M,
            }
          })
          .withAnalytics({ page: 'settings', section: 'email_notifications' }),
        B = n('45mF'),
        K =
          (n('yH/f'), Object.freeze({ Daily: 'Daily', Weekly: 'Weekly', Periodically: 'Periodically', None: 'None' })),
        V = n('v//M'),
        G = n('3XMw'),
        W = n.n(G),
        Y = n('yoO3'),
        X = n('7FtF'),
        z = n('MWbm'),
        q = n('cCdp'),
        Z = n('Y3cQ'),
        Q = n('0yYu'),
        J = n('6vad')
      function $(e, t) {
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
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      function ne(e) {
        return K[e] || 'None'
      }
      var re = W.a.e75f25a8,
        ae = W.a.b2c4ab0a,
        oe = W.a.ic2ea6b5,
        ce = W.a.f823bbbe,
        ie = W.a.b47cc5f3,
        se = {
          send_twitter_emails: W.a.e75f25a8,
          send_email_vit_weekly: W.a.e8eb54af,
          send_network_activity_email: W.a.ib80b0f1,
          send_new_direct_text_email: W.a.i58a274b,
          send_shared_tweet_email: W.a.b109e307,
          send_network_digest: W.a.ddd34fa1,
          send_performance_digest: W.a.b7ea9501,
          send_email_newsletter: W.a.af38c138,
          send_activation_email: W.a.cb881bc2,
          send_resurrection_email: W.a.e4a5e08d,
          send_partner_email: W.a.be91c4ff,
          send_survey_email: W.a.f296795c,
          send_follow_recs_email: W.a.ddfe3776,
          send_similar_people_email: W.a.d17ba8c1,
          send_smb_sales_marketing_email: W.a.jf51b93c,
        },
        le = [
          { label: W.a.fcad1e2d, value: 'Daily' },
          { label: W.a.h9e0dfde, value: 'Weekly' },
          { label: W.a.e26d98ab, value: 'Periodically' },
          { label: W.a.e3a761ee, value: 'None' },
        ],
        ue = (function (e) {
          u()(n, e)
          var t = te(n)
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
                  s = se[t]
                return r.hasOwnProperty(t)
                  ? b.createElement(q.a, {
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
                  r = se[t],
                  a = n[t]
                return n.hasOwnProperty(t)
                  ? b.createElement(Z.a, {
                      disabled: !n.send_twitter_emails,
                      key: t,
                      label: r,
                      name: t,
                      onChange: e._handleSelectSettingChanged(t),
                      options: le,
                      value: a,
                    })
                  : null
              }),
              y()(s()(e), '_renderPerformanceDigestSetting', function (t, n) {
                var r = e.props.emailSettings,
                  a = se[t],
                  o = r[t]
                return r.hasOwnProperty(t)
                  ? b.createElement(q.a, {
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
                return b.createElement(
                  z.a,
                  null,
                  e._renderBooleanSetting('send_twitter_emails', {
                    helpText: ie,
                    learnMoreLink:
                      'https://help.twitter.com/managing-your-account/updating-email-preferences#tweet-activity',
                    type: 'switch',
                    withBottomBorder: t,
                  }),
                  t
                    ? b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(Q.a, null),
                        b.createElement(J.b, { text: ce }),
                        e._renderBooleanSetting('send_email_vit_weekly'),
                      )
                    : null,
                  b.createElement(Q.a, null),
                  b.createElement(J.b, { text: ae }),
                  e._renderBooleanSetting('send_network_activity_email'),
                  e._renderBooleanSetting('send_new_direct_text_email'),
                  e._renderBooleanSetting('send_shared_tweet_email'),
                  e._renderNetworkDigestSetting('send_network_digest'),
                  e._renderPerformanceDigestSetting('send_performance_digest', { withBottomBorder: !1 }),
                  b.createElement(Q.a, null),
                  b.createElement(J.b, { text: oe }),
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
                ;(0, t.fetchEmailSettingsIfNeeded)().catch(n(ee(ee({}, Object(B.a)()), {}, { showToast: !0 })))
              }),
              y()(s()(e), '_handleSelectSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.updateEmailSettings,
                    i = {}
                  ;(i[t] = ne(r)), c(i).catch(o(ee(ee({}, Object(B.a)()), {}, { showToast: !0 })))
                }
              }),
              y()(s()(e), '_handleBooleanSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.updateEmailSettings,
                    i = {}
                  ;(i[t] = !!r), c(i).catch(o(ee(ee({}, Object(B.a)()), {}, { showToast: !0 })))
                }
              }),
              y()(s()(e), '_handlePerformanceDigestSettingChanged', function (t) {
                return function (n, r) {
                  var a = e.props,
                    o = a.createLocalApiErrorHandler,
                    c = a.updateEmailSettings,
                    i = {}
                  ;(i[t] = r ? 'Weekly' : 'None'), c(i).catch(o(ee(ee({}, Object(B.a)()), {}, { showToast: !0 })))
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
                  return b.createElement(
                    Y.a,
                    null,
                    b.createElement(
                      X.a,
                      { location: n, title: re },
                      b.createElement(V.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: this._render }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component)
      t.default = U(ue)
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
          return X
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
        b = (n('yH/f'), n('ERkP')),
        E = n('P1r1'),
        g = n('rxPX'),
        v = n('0KEI'),
        _ = Object(g.a)()
          .propsFromState(function () {
            return { settings: E.g }
          })
          .adjustStateProps(function (e) {
            return { protectPasswordReset: e.settings.protect_password_reset }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_SECURITY_SCREEN',
              ),
              updateSettings: E.L,
            }
          }),
        S = n('3XMw'),
        w = n.n(S),
        O = n('yoO3'),
        C = n('98E1'),
        P = n('7JQg'),
        A = n('MWbm'),
        T = n('v6aA'),
        R = n('xHsv'),
        k = n('0yYu'),
        L = n('6vad'),
        I = n('cCdp'),
        F = n('csss')
      function j(e, t) {
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
            ? j(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
      var N = w.a.j95edf76,
        M = w.a.a2197725,
        H = w.a.dd703318,
        U = w.a.eb89b0ef,
        B = w.a.ead60eb7,
        K = w.a.gfaf9a4a,
        V = w.a.he30e464,
        G = w.a.i859a9d3,
        W = { page: 'settings', section: 'security' },
        Y = Object.freeze({}),
        X = (function (e) {
          u()(n, e)
          var t = x(n)
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
                ;(0, t.updateSettings)(D(D({}, o.state.data), {}, { current_password: e })).then(function () {
                  o.setState({ showPasswordDialog: !1, data: Y })
                }, n({ showToast: !0 }))
              }),
              (o.state = { showPasswordDialog: !1, data: Y }),
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
                  return b.createElement(
                    P.b,
                    { namespace: W },
                    b.createElement(
                      O.a,
                      null,
                      b.createElement(
                        C.a,
                        { location: t, onPasswordSubmit: this._handlePasswordSubmit, promptForPassword: r, title: N },
                        b.createElement(
                          A.a,
                          null,
                          b.createElement(R.a, { description: M }),
                          this._renderTwoFactorAuthentication(),
                          b.createElement(k.a, null),
                          b.createElement(L.b, { text: B }),
                          b.createElement(R.a, { description: V }),
                          b.createElement(I.a, {
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
                  var e = b.createElement(L.b, { text: H }),
                    t = b.createElement(F.a, { label: H, link: '/settings/account/login_verification' }),
                    n = b.createElement(R.a, {
                      description: U,
                      learnMoreLabel: G,
                      learnMoreLink: 'https://help.twitter.com/managing-your-account/two-factor-authentication',
                    })
                  return b.createElement(b.Fragment, null, e, n, t)
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(X, 'contextType', T.a)
      t.default = _(X)
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
          return w
        }),
        n.d(t, 'a', function () {
          return O
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
              a = (n.featureSwitches, i.p(t()))
            return Object(u.b)(e, { params: { userId: a }, request: r.Settings.fetchLoginVerificationSettings })({
              actionTypes: m,
              context: 'FETCH_LOGIN_VERIFICATION_SETTINGS',
            })
          }
        },
        w = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.d)(t, { params: e, request: a.Settings.enrollIn2FA })('TWO_FACTOR_ENROLLMENT')
          }
        },
        O = function (e) {
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
        return y
      })
      var r = n('ERkP'),
        a = n('v6aA'),
        o = n('mrHL'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('cnVF'),
        l = n('RqPI'),
        u = n('yUQf'),
        f = n('q9Zt'),
        d = n('t62R'),
        p = i.a.ffeb836a,
        h = i.a.f2fb9746
      function m() {
        return r.createElement(f.a, { title: p }, r.createElement(d.b, null, h))
      }
      function y(e) {
        var t = r.useContext(a.a).featureSwitches,
          n = Object(u.a)(l.l),
          c = Object(o.b)(s.u, t)
        return n || c ? e.children : r.createElement(m, null)
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
        E = n('P1r1'),
        g = n('rxPX'),
        v = n('0KEI'),
        _ = Object(g.a)()
          .propsFromState(function () {
            return { settings: E.g }
          })
          .adjustStateProps(function (e) {
            return { mediaTaggingOption: e.settings.allow_media_tagging }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TAGGING_SCREEN',
              ),
              updateSettings: E.L,
            }
          })
          .withAnalytics({ page: 'settings', section: 'tagging' }),
        S = n('3XMw'),
        w = n.n(S),
        O = n('yoO3'),
        C = n('7FtF'),
        P = n('qYi+'),
        A = n('MWbm')
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
      var R = w.a.f56d108e,
        k = w.a.f56d108e,
        L = w.a.gd758533,
        I = [
          { label: w.a.d165c992, value: 'all' },
          { label: w.a.ea339390, value: 'following' },
        ],
        F = (function (e) {
          u()(n, e)
          var t = T(n)
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
                  return b.createElement(
                    O.a,
                    null,
                    b.createElement(
                      C.a,
                      { location: t, title: R },
                      b.createElement(
                        A.a,
                        null,
                        b.createElement(P.a, {
                          description: L,
                          label: k,
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
        })(b.Component)
      t.default = _(F)
    },
    z6lV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchSettingsPage', function () {
          return oe
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
        E = n('wtjx'),
        g = (n('JtPf'), n('7x/C'), n('oEOe')),
        v = n('RqPI'),
        _ = n('kGix'),
        S = n('Ssj5')
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
      function O(e) {
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
      var C = 'safeSearch',
        P = 'rweb/'.concat(C),
        A = g.a(P, 'FETCH_SEARCH_SETTINGS'),
        T = g.a(P, 'UPDATE_SEARCH_SETTINGS'),
        R = { fetchStatus: _.a.NONE, searchSettings: {} }
      S.a.register(
        y()({}, C, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case A.REQUEST:
              return O(O({}, e), {}, { fetchStatus: _.a.LOADING })
            case A.FAILURE:
              return O(O({}, e), {}, { fetchStatus: _.a.FAILED })
            case A.SUCCESS:
              return O(O({}, e), {}, { searchSettings: t.payload, fetchStatus: _.a.LOADED })
            case T.REQUEST:
              return O(
                O({}, e),
                {},
                { searchSettings: O(O({}, e.searchSettings), {}, y()({}, t.meta.settingName, t.meta.settingValue)) },
              )
            default:
              return e
          }
        }),
      )
      var k = function (e) {
          return e.safeSearch.searchSettings
        },
        L = function (e) {
          return e.safeSearch.fetchStatus
        },
        I = function () {
          return function (e, t, n) {
            var r = n.api,
              a = v.p(t())
            return g.b(e, { params: { userId: a }, request: r.SafeSearch.fetch })({
              actionTypes: A,
              context: 'FETCH_SEARCH_SETTINGS',
            })
          }
        },
        F = function (e, t) {
          return function (n, r, a) {
            var o,
              c = a.api,
              i = r(),
              s = O(O({}, k(i)), {}, ((o = {}), y()(o, e, t), y()(o, 'userId', v.p(i)), o))
            return g.c(n, { params: s, request: c.SafeSearch.set })({
              actionTypes: T,
              context: 'ACTION_UPDATE_SEARCH_SETTINGS',
              meta: { settingName: e, settingValue: t },
            })
          }
        },
        j = n('1YZw'),
        D = n('i6OR'),
        x = n('rxPX'),
        N = n('0KEI'),
        M = Object(x.a)()
          .propsFromState(function () {
            return { fetchStatus: L, lastSearchQuery: E.f, settings: k }
          })
          .propsFromActions(function () {
            return {
              addToast: j.b,
              clearAllSearchResults: D.a,
              createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)('SAFE_SEARCH_SCREEN'),
              fetchSettings: I,
              updateSettings: F,
            }
          })
          .withAnalytics({ page: 'settings', section: 'search' }),
        H = n('45mF'),
        U = n('v//M'),
        B = n('jHSc'),
        K = n('3XMw'),
        V = n.n(K),
        G = n('cCdp'),
        W = 'searchSettings-hideSensitiveContent',
        Y = 'searchSettings-hideMutedOrBlockedAccounts'
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Z = V.a.h1ef00db,
        Q = V.a.a90af44e,
        J = V.a.a25e2ec5,
        $ = V.a.b827a057,
        ee = V.a.b27c9851,
        te = V.a.c81b9707,
        ne = V.a.if05bca6,
        re = 'https://support.twitter.com/articles/132700',
        ae = 'optInFiltering',
        oe = (function (e) {
          u()(n, e)
          var t = q(n)
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
                    o(), a({ text: $ })
                  }, c(z(z({}, Object(H.a)(ee)), {}, { showToast: !0 })))
              }),
              y()(s()(e), '_scribeValueChanged', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.lastSearchQuery,
                  c = o ? { search_details: { query: o } } : {},
                  i = t === ae ? 'filtering' : 'blocking',
                  s = n ? 'on' : 'off'
                a.scribe({ component: 'safe_search_settings', element: i, action: s, data: c })
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.settings
                return b.createElement(
                  'div',
                  null,
                  b.createElement(G.a, {
                    checked: t.optInFiltering,
                    helpText: te,
                    label: Q,
                    learnMoreLink: re,
                    name: 'optInFiltering',
                    onChange: e._handleSettingChanged,
                    testID: W,
                  }),
                  b.createElement(G.a, {
                    checked: t.optInBlocking,
                    helpText: ne,
                    label: J,
                    learnMoreLink: re,
                    name: 'optInBlocking',
                    onChange: e._handleSettingChanged,
                    testID: Y,
                  }),
                )
              }),
              y()(s()(e), '_handleFetchSettings', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettings)().catch(n(Object(H.a)()))
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
                  return b.createElement(
                    B.b,
                    { history: n, title: Z },
                    b.createElement(U.a, {
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
        })(b.Component)
      t.default = M(oe)
    },
  },
])
//# sourceMappingURL=WIPED
