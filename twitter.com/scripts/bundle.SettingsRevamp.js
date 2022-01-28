;(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    '55TG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('2G9S'), n('kGix')),
        o = n('XMGw'),
        i = n('Ssj5'),
        l = n('oEOe')
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
      function s(e) {
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
      var d = 'verifyPassword',
        f = 'rweb/'.concat(o.a, '/').concat(d),
        b = Object(l.a)(f, 'VERIFY_PASSWORD'),
        p = { fetchStatus: c.a.NONE }
      i.a.register(
        a()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          switch (t.type) {
            case b.REQUEST:
              return s(s({}, e), {}, { fetchStatus: c.a.LOADING })
            case b.SUCCESS:
              return s(s({}, e), {}, { fetchStatus: c.a.LOADED })
            case b.FAILURE:
              return s(s({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
            default:
              return e
          }
        }),
      )
      var h = function (e) {
          return e.verifyPassword.fetchStatus
        },
        m = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { params: { password: e }, request: a.Settings.verifyPassword })({
              actionTypes: b,
              context: 'VERIFY_PASSWORD',
            })
          }
        }
    },
    '89Im': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        l = n('k/Ka')
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
      function s(e) {
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M11.47 14.53c.146.146.338.22.53.22s.384-.073.53-.22l5-5c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-3.72 3.72V2c0-.414-.337-.75-.75-.75s-.75.336-.75.75v10.19L7.53 8.47c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l5 5z',
            }),
            o.a.createElement('path', {
              d: 'M21.25 13.25c-.414 0-.75.336-.75.75v5.652c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V14c0-.414-.336-.75-.75-.75S2 13.586 2 14v5.652c0 1.264 1.028 2.292 2.292 2.292h15.416c1.264 0 2.292-1.028 2.292-2.292V14c0-.414-.336-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    ClNT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        E = (n('2G9S'), n('ERkP')),
        y = n.n(E),
        O = n('k49u'),
        v = n('rxPX'),
        g = n('0KEI'),
        w = Object(v.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        S = n('kGix'),
        P = n('v//M'),
        _ = n('5FtR')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var A = (function (e) {
          s()(n, e)
          var t = j(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(l()(e), 'state', { verificationRequired: !1 }),
              m()(l()(e), '_handleFetch', function () {
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
                      m()(t, O.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, O.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    n = e.renderChildren,
                    r = this.state.verificationRequired,
                    a = t === S.a.FAILED && r
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    a
                      ? y.a.createElement(_.a, { to: '/i/flow/verify_account_ownership' })
                      : y.a.createElement(P.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        D = w.forwardRef(A)
      t.a = D
    },
    Ezva: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountInformation', function () {
          return _e
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        E = (n('2G9S'), n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('ERkP')),
        y = n.n(E),
        O = n('QJRq'),
        v = n('Fcaw'),
        g = n('ZyHq'),
        w = n('vEo5'),
        S = n('NeAX'),
        P = n('YeIG'),
        _ = n('P1r1'),
        j = n('RqPI'),
        A = n('G6rE'),
        D = n('rxPX'),
        L = n('0KEI'),
        I = n('S/HT'),
        R = n('kGix'),
        N = function (e, t) {
          var n = A.e.selectLoggedInUser(e),
            r = Object(P.a)(n) ? R.a.LOADED : w.selectFetchStatus(e)
          return Object(R.d)(S.selectFetchDataStatus(e), S.selectPreferencesFetchStatus(e), r)
        },
        k = function (e) {
          var t = Object(_.j)(e)
          return t && Object(I.b)(e, t)
        },
        x = Object(D.a)()
          .propsFromState(function () {
            return {
              countryName: k,
              email: w.selectFirstEmail,
              fetchStatus: N,
              loggedInUser: A.e.selectLoggedInUser,
              managingAccount: v.d,
              phone: w.selectFirstPhoneNumber,
              ages: S.selectAge,
              birthdate: S.selectBirthdate,
              gender: S.selectGender,
              languages: S.selectLanguage,
              languageCode: j.o,
              signupDetails: S.selectSignupDetails,
              verificationAccess: g.m,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_INFORMATION_SCREEN',
              ),
              fetchAccountVerificationAccess: g.a,
              fetchDevices: w.fetchDevices,
              fetchData: S.fetchDataIfNeeded,
              fetchPreferences: S.fetchPreferencesIfNeeded,
              fetchCountryNamesIfNeeded: I.a,
              fetchUserAccountLabel: v.b,
            }
          }),
        F = n('yoO3'),
        T = n('PK8P'),
        C = n('7JQg'),
        U = n('7FtF'),
        H = n('rHpw').a.create(function (e) {
          return {
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            infoItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
            },
          }
        }),
        M = n('MWbm'),
        B = n('t62R'),
        z = n('csss'),
        G = n('o1YB'),
        K = n('v6aA'),
        W = n('3XMw'),
        Y = n.n(W)
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var q = Y.a.f15bfdb3,
        X = Y.a.d0a77c9a,
        Q = Y.a.jade381b,
        Z = Y.a.d1f6d336,
        J = Y.a.a3841918,
        $ = Y.a.f70cd5ed,
        ee = Y.a.ib6f1694,
        te = Y.a.a8d0108d,
        ne = Y.a.de32365f,
        re = Y.a.b6ab31bd,
        ae = Y.a.c21037d0,
        ce = Y.a.h3290871,
        oe = Y.a.d12d42db,
        ie = Y.a.hbd12156,
        le = Y.a.b7ec04f3,
        ue = Y.a.f70d5780,
        se = Y.a.dc62d3c6,
        de = Y.a.ab22c36c,
        fe = Y.a.j3a1cff6,
        be = Y.a.i62a03aa,
        pe = Y.a.c119dee8,
        he = y.a.createElement(
          Y.a.I18NFormatMessage,
          { $i18n: 'f1a3d63c' },
          y.a.createElement(B.b, { link: '/i/profile' }, Y.a.c036653e),
        ),
        me = Y.a.bf96fda4,
        Ee = Y.a.d495680d,
        ye = Y.a.f445dc78,
        Oe = Y.a.d6d80990,
        ve = y.a.createElement(
          Y.a.I18NFormatMessage,
          { $i18n: 'f2df3f23' },
          y.a.createElement(B.b, { link: '/settings/account/personalization' }, Y.a.bad6cf6e),
        ),
        ge = Y.a.i859a9d3,
        we = 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
        Se = '/settings/account/request_verification',
        Pe = { page: 'settings', section: 'account_information' },
        _e = (function (e) {
          s()(n, e)
          var t = V(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(l()(e), 'combinedFetches', function () {
                var t = e.props,
                  n = t.fetchAccountVerificationAccess,
                  r = t.fetchCountryNamesIfNeeded,
                  a = t.fetchData,
                  c = t.fetchDevices,
                  o = t.fetchPreferences,
                  i = t.fetchUserAccountLabel,
                  l = t.languageCode,
                  u = t.loggedInUser,
                  s = [a(), o(), r(l || '')]
                return (
                  u &&
                    (s.push(c()),
                    e.context.featureSwitches.isTrue('identity_verification_intake_enabled') && s.push(n()),
                    e.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled') &&
                      s.push(i(u.id_str))),
                  Promise.all(s)
                )
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.ages,
                  r = t.birthdate,
                  a = t.countryName,
                  c = t.email,
                  o = t.gender,
                  i = t.languages,
                  l = t.loggedInUser,
                  u = t.phone,
                  s = t.signupDetails,
                  d = n
                    .map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    })
                    .join(', '),
                  f = r && Q(new Date(''.concat(r, 'T00:00:00'))),
                  b = i
                    .map(function (e) {
                      return e.display
                    })
                    .join(', ')
                return y.a.createElement(
                  M.a,
                  null,
                  l
                    ? y.a.createElement(z.a, {
                        description:
                          l.screen_name &&
                          y.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(l.screen_name)),
                        label: Z,
                        link: '/settings/screen_name',
                      })
                    : null,
                  l ? y.a.createElement(z.a, { description: u, label: $, link: '/settings/phone' }) : null,
                  l ? y.a.createElement(z.a, { description: c, label: J, link: '/settings/email' }) : null,
                  l ? e._renderVerified() : null,
                  l
                    ? y.a.createElement(z.a, {
                        description: l.protected ? le : be,
                        label: ye,
                        link: '/settings/audience_and_tagging',
                      })
                    : null,
                  l
                    ? y.a.createElement(
                        M.a,
                        { style: [H.infoItem, H.bottomBorder], testID: 'account-creation' },
                        y.a.createElement(B.b, { color: 'normal' }, ee),
                        y.a.createElement(B.b, { color: 'gray700', style: H.helpText }, X(new Date(l.created_at))),
                        s.creation_ip && s.country
                          ? y.a.createElement(
                              B.b,
                              { color: 'gray700', style: H.helpText },
                              ''.concat(s.creation_ip, ' (').concat(s.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  l ? y.a.createElement(z.a, { description: a, label: ae, link: '/settings/country' }) : null,
                  y.a.createElement(z.a, { description: b, label: Ee, link: '/settings/languages' }),
                  y.a.createElement(z.a, {
                    description: e._renderGender(o.value),
                    label: te,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  l
                    ? y.a.createElement(
                        M.a,
                        { style: [H.infoItem, H.bottomBorder], testID: 'birthday' },
                        y.a.createElement(B.b, { color: 'normal' }, pe),
                        r ? y.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, f) : null,
                        y.a.createElement(B.b, { color: 'gray700', style: H.helpText }, he),
                      )
                    : null,
                  y.a.createElement(z.a, { description: d, label: me, link: '/settings/your_twitter_data/age' }),
                  l ? e._renderAutomation() : null,
                  l
                    ? null
                    : y.a.createElement(
                        M.a,
                        { style: H.infoItem, testID: 'loggedOutHelp' },
                        y.a.createElement(B.b, { color: 'gray700', style: H.helpText }, Oe),
                        y.a.createElement('br', null),
                        y.a.createElement(B.b, { color: 'gray700', style: H.helpText }, ve),
                      ),
                )
              }),
              m()(l()(e), '_renderGender', function (e) {
                switch (e) {
                  case 'female':
                    return ne
                  case 'male':
                    return re
                  default:
                    return e
                }
              }),
              m()(l()(e), '_renderVerified', function () {
                var t,
                  n = y.a.createElement(G.a, {
                    label: ce,
                    learnMoreLabel: ge,
                    learnMoreLink: we,
                    subtext: null !== (t = e.props.loggedInUser) && void 0 !== t && t.verified ? ue : se,
                  })
                if (e.context.featureSwitches.isTrue('identity_verification_intake_enabled')) {
                  var r, a
                  switch (e.props.verificationAccess.status) {
                    case O.a.DISABLED:
                    case O.a.NOT_ELIGIBLE:
                      return n
                    case O.a.VERIFIED:
                      a = ue
                      break
                    default:
                      ;(r = ie), (a = se)
                  }
                  return y.a.createElement(G.a, { label: ce, learnMoreLabel: r, learnMoreLink: Se, subtext: a })
                }
                return n
              }),
              m()(l()(e), '_renderAutomation', function () {
                if (e.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled')) {
                  var t = e.props.managingAccount ? fe : de
                  return y.a.createElement(z.a, { description: t, label: oe, link: '/settings/account/automation' })
                }
                return null
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
                    C.b,
                    { namespace: Pe },
                    y.a.createElement(
                      F.a,
                      null,
                      y.a.createElement(
                        U.a,
                        { location: n, title: q },
                        y.a.createElement(T.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      m()(_e, 'contextType', K.a)
      var je = x(_e)
      t.default = je
    },
    Fcaw: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return m
      }),
        n.d(t, 'e', function () {
          return E
        }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return O
        }),
        n.d(t, 'a', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('oEOe')),
        o = n('iD2S'),
        i = n.n(o),
        l = n('kGix'),
        u = n('Ssj5')
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
      function d(e) {
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
      var f = 'accountTaxonomy',
        b =
          ('rweb/'.concat(f),
          i()({ account_label: { disableStatus: l.a.NONE, fetchStatus: l.a.NONE, managed_label: void 0 } })),
        p = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE',
        })
      u.a.register(
        a()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p.REQUEST:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { fetchStatus: l.a.LOADING }) })
            case p.SUCCESS:
              var n, r, a
              return d(
                d({}, e),
                {},
                {
                  account_label: d(
                    d(
                      {},
                      null == t ||
                        null === (n = t.payload) ||
                        void 0 === n ||
                        null === (r = n.user) ||
                        void 0 === r ||
                        null === (a = r.result) ||
                        void 0 === a
                        ? void 0
                        : a.account_label,
                    ),
                    {},
                    { fetchStatus: l.a.LOADED },
                  ),
                },
              )
            case p.FAILURE:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { fetchStatus: l.a.FAILED }) })
            case h.REQUEST:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { disableStatus: l.a.LOADING }) })
            case h.SUCCESS:
              return d(
                d({}, e),
                {},
                { account_label: { managed_label: void 0, fetchStatus: l.a.LOADED, disableStatus: l.a.LOADED } },
              )
            case h.FAILURE:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { disableStatus: l.a.FAILED }) })
            default:
              return e
          }
        }),
      )
      var m = function (e) {
          var t, n, r
          return null === (t = e.accountTaxonomy) ||
            void 0 === t ||
            null === (n = t.account_label) ||
            void 0 === n ||
            null === (r = n.managed_label) ||
            void 0 === r
            ? void 0
            : r.owner_screen_name
        },
        E = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.fetchStatus) || l.a.NONE
          )
        },
        y = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.disableStatus) || l.a.NONE
          )
        },
        O = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(c.b)(t, { request: a.AccountTaxonomy.fetchUserAccountLabel, params: { userId: e } })({
              actionTypes: p,
              context: 'FETCH_USER_ACCOUNT_LABEL',
            })
          }
        },
        v = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(c.b)(e, { request: r.AccountTaxonomy.disableUserAccountLabel, params: {} })({
              actionTypes: h,
              context: 'DISABLE_USER_ACCOUNT_LABEL',
            })
          }
        }
    },
    NyKK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return E
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return w
        }),
        n.d(t, 'c', function () {
          return S
        }),
        n.d(t, 'e', function () {
          return P
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        c = n('KEM+'),
        o = n.n(c),
        i = (n('yH/f'), n('LW0h'), n('2G9S'), n('kGix')),
        l = n('Ssj5'),
        u = n('oEOe')
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = 'userData',
        b = 'rweb/'.concat(f),
        p = Object(u.a)(b, 'FETCH_DOWNLOADS'),
        h = Object(u.a)(b, 'CREATE_DOWNLOAD'),
        m = Object.freeze({
          NEW: 'NEW',
          INPROGRESS: 'INPROGRESS',
          INPROGRESS_ASYNC: 'INPROGRESS_ASYNC',
          ZIPPING: 'ZIPPING',
          PUBLISHING: 'PUBLISHING',
          NOTIFYING: 'NOTIFYING',
          COMPLETE: 'COMPLETED',
          FAILED: 'FAILED',
          NONE: 'NONE',
        }),
        E = [m.NEW, m.INPROGRESS, m.INPROGRESS_ASYNC, m.ZIPPING, m.PUBLISHING, m.NOTIFYING],
        y = { fetchStatus: i.a.None, downloads: { all: [], nonFailed: [] } }
      l.a.register(
        o()({}, f, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case p.SUCCESS:
              var r = n.payload || [],
                c = r.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return d(
                d({}, t),
                {},
                { fetchStatus: i.a.LOADED, downloads: d(d({}, t.downloads), {}, { all: r, nonFailed: c }) },
              )
            case p.REQUEST:
              return d(d({}, t), {}, { fetchStatus: i.a.LOADING })
            case p.FAILURE:
              return d(d({}, t), {}, { error: n.payload, fetchStatus: i.a.FAILED })
            case h.SUCCESS:
              return d(
                d({}, t),
                {},
                {
                  downloads: d(
                    d({}, t.downloads),
                    {},
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, a()(t.downloads.nonFailed)) },
                  ),
                },
              )
            case h.FAILURE:
              return d(d({}, t), {}, { fetchStatus: i.a.NONE })
            default:
              return t
          }
        }),
      )
      var O = function (e) {
          return e.userData.downloads
        },
        v = function (e) {
          return e.userData.fetchStatus
        },
        g = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        w = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.UserData.fetchDownloads })({
              actionTypes: p,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        S = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(u.b)(e, { request: r.UserData.createDataDownload })({
              actionTypes: h,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        P = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.d)(t, { params: e, request: a.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
          }
        }
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      }),
        n.d(t, 'a', function () {
          return p
        })
      var r = n('97Jx'),
        a = n.n(r),
        c = n('m3Bd'),
        o = n.n(c),
        i = (n('hBvt'), n('ERkP')),
        l = n.n(i),
        u = n('rHpw'),
        s = n('csss'),
        d = function (e) {
          return l.a.createElement(e.Icon, { style: f.thumbnail })
        },
        f = u.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function b(e) {
        var t = e.Icon,
          n = o()(e, ['Icon'])
        return l.a.createElement(
          s.a,
          a()({}, n, { thumbnail: l.a.createElement(d, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function p(e) {
        e.link
        var t = o()(e, ['link'])
        return l.a.createElement(s.a, a()({}, t, { link: { external: !0, pathname: e.link } }))
      }
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
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        E = (n('2G9S'), n('ERkP')),
        y = n.n(E),
        O = n('k49u'),
        v = n('hqKg'),
        g = n('0KEI'),
        w = n('oEGd'),
        S = n('55TG'),
        P = Object(v.createSelector)(S.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        _ = {
          verifyPassword: S.b,
          createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        j = Object(w.g)(P, _, null, { pure: !1 }),
        A = n('kGix'),
        D = n('v//M'),
        L = n('3XMw'),
        I = n.n(L),
        R = n('5FtR'),
        N = n('iCwC'),
        k = n('MWbm'),
        x = n('TnY3'),
        F = n('t62R'),
        T = n('6vad'),
        C = n('p+r5'),
        U = n('mw9i'),
        H = n('/yvb'),
        M = n('rHpw'),
        B = n('v6aA')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var G = I.a.fe36fe1f,
        K = I.a.dec3c9b8,
        W = I.a.hccd9dbd,
        Y = I.a.d1091f50,
        V = I.a.g9677c6d,
        q = I.a.c8cb0b4c,
        X = (function (e) {
          s()(n, e)
          var t = z(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(l()(e), 'state', { password: '' }),
              m()(
                l()(e),
                '_passwordlessSsoEnabled',
                e.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              m()(l()(e), '_handlePasswordSubmit', function () {
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
                        m()(t, O.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: q })
                          },
                        }),
                        m()(t, 'showToast', !0),
                        t),
                      ),
                    )
              }),
              m()(l()(e), '_makeFetch', function () {
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
                      m()(t, O.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              m()(l()(e), '_handleFetch', e._makeFetch),
              m()(l()(e), '_handleChange', function (t) {
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
                    n = y.a.createElement(
                      F.b,
                      {
                        link: {
                          pathname: 'https://twitter.com/account/begin_password_reset',
                          external: !0,
                          openInSameFrame: !0,
                        },
                      },
                      Y,
                    )
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    e ? y.a.createElement(T.b, { text: e }) : null,
                    y.a.createElement(
                      k.a,
                      { style: [N.a.viewItem, N.a.bottomBorder] },
                      y.a.createElement(F.b, { color: 'gray700', size: 'subtext2' }, W),
                    ),
                    y.a.createElement(C.a, {
                      errorText: t,
                      helperText: n,
                      invalid: !!t,
                      label: K,
                      name: 'current_password',
                      onChange: this._handleChange,
                      onSubmitEditing: this._handlePasswordSubmit,
                      type: 'password',
                      value: this.state.password,
                    }),
                    y.a.createElement(
                      U.a,
                      { style: Q.buttonContainer },
                      y.a.createElement(
                        H.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: Q.button, type: 'brandFilled' },
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
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c
                      ? this._passwordlessSsoEnabled
                        ? y.a.createElement(R.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : y.a.createElement(D.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      m()(X, 'contextType', B.a), m()(X, 'defaultProps', { titleHeader: G })
      var Q = M.a.create(function (e) {
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
        Z = j(X)
      t.a = Object(x.a)(Z)
    },
    QoYZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ArchiveUnavailable', function () {
          return J
        }),
        n.d(t, 'YourTwitterData', function () {
          return $
        })
      n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('vrRf'), n('1t7P'), n('jQ/y'), n('ERkP')),
        o = n.n(c),
        i = n('v6aA'),
        l = n('1YZw'),
        u = n('NyKK'),
        s = n('rxPX'),
        d = n('0KEI'),
        f = Object(s.a)()
          .propsFromState(function () {
            return { fetchStatus: u.g, downloads: u.f, isUserDataUnavailable: u.h }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createDataDownload: u.c,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('DOWNLOAD_YOUR_DATA'),
              fetchDownloads: u.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'account', component: 'download_your_data' }),
        b = n('fs1G'),
        p = n('yoO3'),
        h = n('7JQg'),
        m = n('7FtF'),
        E = n('rHpw').a.create(function (e) {
          return {
            description: { flexShrink: 1 },
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            errorText: { marginRight: e.spaces.space20 },
            floatingLink: { paddingLeft: e.spaces.space20 },
            labelContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            narrowButton: { alignSelf: 'center', marginLeft: e.spaces.space12, paddingLeft: e.spaces.space20 },
            narrowButtonRow: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            noShrink: { flexShrink: 0 },
          }
        }),
        y = n('ClNT'),
        O = n('MWbm'),
        v = n('t62R'),
        g = n('0yYu'),
        w = n('o1YB'),
        S = n('xHsv'),
        P = n('/yvb'),
        _ = n('6vad'),
        j = n('csss'),
        A = n('3XMw'),
        D = n.n(A)
      function L(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var R = D.a.f56af9cc,
        N = D.a.cce24bf3,
        k = D.a.d6eb9b9a,
        x = D.a.d2fb334b,
        F = D.a.b708417b,
        T = D.a.jbf5843d,
        C = D.a.ea886c6e,
        U = D.a.cdcc2ad3,
        H = D.a.dbeff879,
        M = D.a.ce5d2c46,
        B = D.a.b2ed92c3,
        z = D.a.gee8110d,
        G = D.a.f56af9cc,
        K = D.a.hb02ed28,
        W = D.a.c2254083,
        Y = D.a.f62d1d9d,
        V = D.a.i859a9d3,
        q = o.a.createElement(
          D.a.I18NFormatMessage,
          { $i18n: 'ba13ef22' },
          o.a.createElement(
            v.b,
            {
              link: 'https://help.twitter.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true',
            },
            D.a.c9c1ebbb,
          ),
        ),
        X = D.a.b221ca4b,
        Q = { page: 'settings', section: 'account', component: 'download_your_data' },
        Z = Object.freeze(I(I({}, u.b), {}, { UNAVAILABLE: 'UNAVAILABLE' })),
        J = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(g.a, null),
            o.a.createElement(w.a, { label: G, withBottomBorder: !0 }),
            o.a.createElement(S.a, { description: K }),
          )
        }
      function $(e) {
        var t = o.a.useContext(i.a).loggedInUserId,
          n = e.addToast,
          r = e.analytics,
          a = e.createDataDownload,
          c = e.createLocalApiErrorHandler,
          l = e.downloads,
          s = e.fetchDownloads,
          d = e.fetchStatus,
          f = e.isUserDataUnavailable,
          w = e.location,
          A = !!t,
          D = !A,
          L = f,
          I = !f && A
        function G() {
          r.scribe({ element: 'request_button', action: 'click' }),
            a()
              .then(function () {
                return n({ text: X })
              })
              .catch(c())
        }
        var $ = function () {
          var e = l.all,
            t = l.nonFailed,
            n = t.length ? t[0].status : e.length ? u.b.FAILED : u.b.NONE,
            r = !!t.length && void 0 !== t[0].urls,
            a = u.a.indexOf(n) >= 0,
            c = r && n === u.b.COMPLETE,
            i = n === u.b.FAILED,
            s = n === u.b.COMPLETE && !r,
            d = s ? Z.UNAVAILABLE : n,
            f = n === u.b.NONE ? G : b.a,
            p = function () {
              return o.a.createElement(
                P.a,
                {
                  disabled: a || i || s,
                  link: c ? '/settings/your_twitter_data/data' : void 0,
                  onPress: f,
                  size: 'small',
                  style: E.narrowButton,
                  type: 'brandFilled',
                },
                (function (e) {
                  switch (e) {
                    case Z.NONE:
                      return H
                    case Z.FAILED:
                      return U
                    case Z.COMPLETE:
                      return z
                    case Z.UNAVAILABLE:
                      return M
                    default:
                      return B
                  }
                })(d),
              )
            }
          return o.a.createElement(
            O.a,
            { style: [E.narrowButtonRow, E.labelContainer] },
            o.a.createElement(
              O.a,
              { style: E.description },
              o.a.createElement(v.b, { color: 'normal' }, x),
              o.a.createElement(
                v.b,
                { color: 'gray700', style: [E.errorText, E.helpText] },
                (function (e) {
                  switch (e) {
                    case Z.NONE:
                      return null
                    case Z.FAILED:
                      return q
                    case Z.COMPLETE:
                      return Y
                    case Z.UNAVAILABLE:
                      return K
                    default:
                      return W
                  }
                })(d),
              ),
            ),
            o.a.createElement(O.a, { style: E.noShrink }, o.a.createElement(p, null)),
          )
        }
        return o.a.createElement(
          h.b,
          { namespace: Q },
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              m.a,
              { location: w, screenType: 'secondaryDetail', title: R },
              o.a.createElement(S.a, { description: N }),
              I
                ? o.a.createElement(y.a, {
                    fetch: function () {
                      return s()
                    },
                    fetchStatus: d,
                    renderChildren: function () {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          O.a,
                          null,
                          o.a.createElement(_.b, { text: k }),
                          o.a.createElement(S.a, {
                            description: F,
                            learnMoreLabel: V,
                            learnMoreLink: 'https://help.twitter.com/managing-your-account/accessing-your-twitter-data',
                          }),
                          $(),
                        ),
                        o.a.createElement(g.a, null),
                        o.a.createElement(
                          O.a,
                          null,
                          o.a.createElement(_.b, { text: T }),
                          o.a.createElement(j.a, {
                            label: C,
                            link: { external: !0, pathname: 'https://pscp.tv/account/your-data' },
                          }),
                        ),
                      )
                    },
                  })
                : null,
              D && o.a.createElement(j.a, { label: z, link: '/settings/your_twitter_data/request_data' }),
              L && o.a.createElement(J, null),
            ),
          ),
        )
      }
      var ee = f($)
      t.default = ee
    },
    'S/HT': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return b
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return h
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('kGix')),
        o = n('Ssj5')
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
      function l(e) {
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
      var u = 'countryNames',
        s = { fetchStatus: c.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(u, '_REQUEST'), FAILURE: ''.concat(u, '_FAILURE'), SUCCESS: ''.concat(u, '_SUCCESS') },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return l(l({}, e), {}, { fetchStatus: c.a.LOADING })
            case d.FAILURE:
              return l(l({}, e), {}, { fetchStatus: c.a.NONE })
            case d.SUCCESS:
              return l(l({}, e), {}, { countries: t.payload, fetchStatus: c.a.LOADED })
            default:
              return e
          }
        }
      o.a.register(a()({}, u, f))
      var b = function (e) {
          return e.countryNames.countries
        },
        p = function (e, t) {
          var n = t && t.toUpperCase()
          return e.countryNames.countries[n]
        },
        h = function e(t) {
          return function (r, a) {
            return a().countryNames.fetchStatus === c.a.LOADED
              ? Promise.resolve()
              : (r({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return n.e(243).then(n.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return n.e(244).then(n.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return n.e(245).then(n.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return n.e(246).then(n.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return n.e(247).then(n.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return n.e(248).then(n.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return n.e(249).then(n.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return n.e(250).then(n.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return n.e(252).then(n.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return n.e(251).then(n.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return n.e(253).then(n.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return n.e(254).then(n.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return n.e(255).then(n.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return n.e(256).then(n.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return n.e(257).then(n.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return n.e(258).then(n.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return n.e(259).then(n.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return n.e(260).then(n.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return n.e(261).then(n.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return n.e(262).then(n.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return n.e(263).then(n.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return n.e(264).then(n.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return n.e(265).then(n.t.bind(null, '9fGX', 3))
                    case 'id':
                      return n.e(266).then(n.t.bind(null, 'elf3', 3))
                    case 'it':
                      return n.e(267).then(n.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return n.e(268).then(n.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return n.e(269).then(n.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return n.e(270).then(n.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return n.e(271).then(n.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return n.e(272).then(n.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return n.e(273).then(n.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return n.e(274).then(n.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return n.e(275).then(n.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return n.e(276).then(n.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return n.e(277).then(n.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return n.e(278).then(n.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return n.e(279).then(n.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return n.e(280).then(n.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return n.e(281).then(n.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return n.e(282).then(n.t.bind(null, '8KkY', 3))
                    case 'th':
                      return n.e(283).then(n.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return n.e(284).then(n.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return n.e(285).then(n.t.bind(null, '62bs', 3))
                    case 'ur':
                      return n.e(286).then(n.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return n.e(288).then(n.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return n.e(287).then(n.t.bind(null, 'YXaK', 3))
                    default:
                      return Promise.reject(
                        new Error('Tried to import country names for unknown language key: '.concat(e)),
                      )
                  }
                })(t)
                  .then(function (e) {
                    var n = e.main[t].localeDisplayNames.territories
                    r({ type: d.SUCCESS, payload: n })
                  })
                  .catch(function () {
                    r('en' === t ? { type: d.FAILURE } : e('en'))
                  }))
          }
        }
    },
    UAMM: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('97Jx'),
        a = n.n(r),
        c = (n('z84I'), n('hBvt'), n('ERkP')),
        o = n.n(c),
        i = n('3XMw'),
        l = n.n(i),
        u = n('yoO3'),
        s = n('7JQg'),
        d = n('xHsv'),
        f = n('7FtF'),
        b = n('OySi'),
        p = 'notificationsScreen',
        h = n('MWbm'),
        m = n('+RfI'),
        E = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        y = n.n(E),
        O = n('Lsrn'),
        v = n('k/Ka')
      function g(e, t) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(v.a)(
          'svg',
          w(
            w({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [O.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M17.46 16.272c-.142 0-.284-.04-.41-.123-.347-.23-.443-.694-.216-1.04.512-.777.974-1.695.895-3.136-.08-1.44-.64-2.303-1.23-3.02-.265-.32-.22-.793.1-1.057.317-.263.79-.22 1.056.1.678.82 1.47 2.006 1.572 3.895.104 1.89-.555 3.153-1.14 4.042-.144.22-.384.338-.628.338z',
            }),
            o.a.createElement('path', {
              d: 'M20.077 18.102c-.142 0-.284-.04-.41-.123-.347-.23-.443-.694-.216-1.04.775-1.178 1.55-2.692 1.424-5s-1.06-3.73-1.958-4.817c-.264-.32-.22-.792.1-1.056.318-.264.792-.22 1.057.1 1.054 1.276 2.15 2.95 2.3 5.69.15 2.744-.76 4.525-1.667 5.907-.145.22-.385.338-.63.338zM12.862 2h-9c-1.24 0-2.25 1.01-2.25 2.25v15.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V4.25c0-1.24-1.01-2.25-2.25-2.25zm.75 17.75c0 .41-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75v-2.14h10.5v2.14zm0-3.64h-10.5V4.25c0-.41.34-.75.75-.75h9c.41 0 .75.34.75.75v11.86z',
            }),
            o.a.createElement('path', {
              d: 'M8.946 19.822H7.78c-.415 0-.75-.336-.75-.75s.335-.75.75-.75h1.166c.414 0 .75.336.75.75s-.335.75-.75.75z',
            }),
          ),
        )
      }
      S.metadata = { width: 24, height: 24 }
      var P = S,
        _ = l.a.eb75875d,
        j = l.a.a3f22d8d,
        A = l.a.i647fb03,
        D = l.a.ef1b5cbb,
        L = l.a.bcd81cab,
        I = l.a.da867c58,
        R = { page: 'settings', section: 'notification' },
        N = [
          { description: D, label: A, link: '/settings/notifications/filters', Icon: m.a },
          { description: I, label: L, link: '/settings/notifications/preferences', Icon: P },
        ]
      t.default = function (e) {
        var t = e.location
        return o.a.createElement(
          s.b,
          { namespace: R },
          o.a.createElement(
            u.a,
            null,
            o.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: _ },
              o.a.createElement(
                h.a,
                { testID: p },
                o.a.createElement(d.a, { description: j }),
                N.map(function (e) {
                  return o.a.createElement(b.b, a()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    nnZo: function (e, t, n) {
      'use strict'
      n.r(t)
      n('z84I'), n('hBvt')
      var r = n('ERkP'),
        a = n.n(r),
        c = n('v6aA'),
        o = n('3XMw'),
        i = n.n(o),
        l = n('yoO3'),
        u = n('7JQg'),
        s = n('7FtF'),
        d = n('OySi'),
        f = 'accountScreen',
        b = n('MWbm'),
        p = n('boUI'),
        h = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(h),
        E = n('Lsrn'),
        y = n('k/Ka')
      function O(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var g = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(y.a)(
          'svg',
          v(
            v({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [E.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M8.307 22.163c-1.68 0-3.36-.64-4.638-1.918-2.56-2.558-2.56-6.72 0-9.276 1.51-1.512 3.62-2.177 5.705-1.835l7.073-7.078c.147-.148.35-.226.56-.22l4.35.17c.39.017.704.33.72.72l.17 4.35c.008.2-.064.396-.2.542-.14.145-.33.23-.53.236l-2.135.056-.056 2.136c-.01.4-.332.72-.73.73l-2.136.056-.055 2.137c-.005.193-.084.376-.22.512l-1.362 1.362c.23 1.985-.455 3.98-1.877 5.402-1.278 1.277-2.958 1.917-4.64 1.917zm-.01-11.617c-1.324 0-2.603.52-3.566 1.483C2.76 14 2.76 17.21 4.73 19.183c1.973 1.973 5.183 1.973 7.156 0 1.17-1.17 1.694-2.843 1.402-4.474-.043-.24.034-.488.208-.662l1.417-1.417.066-2.548c.01-.4.33-.72.73-.73l2.135-.056.056-2.136c.012-.4.333-.72.73-.73l2.09-.055-.115-2.896-3.327-.13-7.125 7.128c-.183.183-.452.26-.7.2-.384-.09-.772-.132-1.155-.132zm7.358 2.404h.01-.01z',
            }),
            a.a.createElement('path', {
              d: 'M8.308 18.132c-.647 0-1.294-.246-1.787-.738-.983-.985-.983-2.588 0-3.573.988-.984 2.59-.982 3.574 0 .984.986.984 2.59 0 3.574-.492.492-1.14.738-1.786.738zm0-3.55c-.264 0-.526.1-.727.3-.398.4-.398 1.05 0 1.45.4.4 1.052.402 1.453 0 .4-.4.4-1.05 0-1.45-.2-.2-.462-.3-.725-.3z',
            }),
          ),
        )
      }
      g.metadata = { width: 24, height: 24 }
      var w = g,
        S = n('89Im'),
        P = n('wz7L')
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var A = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(y.a)(
          'svg',
          j(
            j({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [E.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M16.75 2.36c-2.34 0-3.92 1.62-4.74 2.8-.83-1.18-2.41-2.8-4.75-2.8-2.93 0-5.51 2.74-5.51 5.86 0 6.51 7.61 13.37 10.27 13.42 2.63-.05 10.23-6.91 10.23-13.42 0-3.12-2.57-5.86-5.5-5.86zm-4.73 17.78c-1.52-.02-8.77-6.03-8.77-11.92 0-2.33 1.88-4.36 4.01-4.36 2.1 0 3.45 1.97 3.9 2.74v.01L9.02 10.5c-.11.2-.12.45-.03.66.1.21.29.37.51.43l2.72.66-2.16 3.15c-.24.34-.15.81.19 1.05.13.08.28.13.43.13.23 0 .47-.12.62-.33l2.77-4.04c.13-.21.17-.47.08-.7-.09-.23-.28-.4-.52-.46l-2.82-.69L12.7 6.9s1.46-3.04 4.05-3.04c2.13 0 4 2.03 4 4.36 0 5.89-7.24 11.9-8.73 11.92z',
            }),
          ),
        )
      }
      A.metadata = { width: 24, height: 24 }
      var D = A,
        L = n('Nh1N'),
        I = n('xHsv'),
        R = n('4zmP'),
        N = n('rHpw'),
        k = i.a.hc73f03f,
        x = i.a.d3a2bde7,
        F = i.a.f15bfdb3,
        T = i.a.idca4741,
        C = i.a.b6ded35d,
        U = i.a.ab1f7eef,
        H = i.a.f56af9cc,
        M = i.a.cce24bf3,
        B = i.a.d13e165c,
        z = i.a.d1e97fdf,
        G = i.a.hfb92b14,
        K = i.a.i203df96,
        W = { page: 'settings', section: 'account' },
        Y = { label: 'Go to Security settings', link: '/settings/security_and_account_access' },
        V = N.a.create(function (e) {
          return { callout: { marginHorizontal: e.componentDimensions.gutterHorizontal, width: 'auto' } }
        })
      t.default = function (e) {
        var t = e.location,
          n = a.a.useContext(c.a).featureSwitches.isTrue('responsive_web_delegate_enabled'),
          r = a.a.useMemo(
            function () {
              return (function (e) {
                return [
                  { description: T, label: F, link: '/settings/your_twitter_data/account', Icon: p.a },
                  { description: C, label: U, link: '/settings/password', Icon: w },
                  { description: M, label: H, link: '/settings/download_your_data', Icon: S.a },
                  { description: z, disabled: e, label: B, link: '/settings/teams', Icon: P.a },
                  { description: K, label: G, link: '/settings/deactivate', Icon: D },
                ]
              })(n)
            },
            [n],
          )
        return a.a.createElement(
          u.b,
          { namespace: W },
          a.a.createElement(
            l.a,
            null,
            a.a.createElement(
              s.a,
              { location: t, screenType: 'primaryDetail', title: k },
              a.a.createElement(
                b.a,
                { testID: f },
                a.a.createElement(I.a, { description: x }),
                r.map(function (e) {
                  return a.a.createElement(
                    b.a,
                    { key: e.label },
                    a.a.createElement(d.b, e),
                    e.disabled &&
                      '/settings/teams' === e.link &&
                      a.a.createElement(R.a, {
                        Icon: L.a,
                        action: Y,
                        headline: 'TweetDeck Teams moved',
                        style: V.callout,
                        text: "We're moving the Teams feature to Twitter Delegate in your Security and account access settings.",
                      }),
                  )
                }),
              ),
            ),
          ),
        )
      }
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
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        b = n('AuHH'),
        p = n.n(b),
        h = n('KEM+'),
        m = n.n(h),
        E = (n('2G9S'), n('uFXj'), n('ERkP')),
        y = n.n(E),
        O = n('t62R'),
        v = n('rHpw'),
        g = n('MWbm')
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var S = (function (e) {
        s()(n, e)
        var t = w(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            m()(l()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return y.a.createElement(O.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            m()(l()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                r = t.learnMoreLink
              return r && n ? y.a.createElement(O.b, { link: r, size: 'subtext2' }, n) : null
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
                return y.a.createElement(
                  g.a,
                  { style: [P.root, c && P.bottomBorder] },
                  y.a.createElement(O.b, null, t),
                  a
                    ? n && r
                      ? this._renderSubtextAndLink()
                      : y.a.createElement(O.b, { color: 'gray700', size: 'subtext2' }, a)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      m()(S, 'defaultProps', { withBottomBorder: !0 })
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
      t.a = S
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        l = n('k/Ka')
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
      function s(e) {
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
  },
])
//# sourceMappingURL=WIPED
