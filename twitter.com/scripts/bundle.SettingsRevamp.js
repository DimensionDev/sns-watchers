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
      var d = 'verifyPassword',
        f = 'rweb/'.concat(o.a, '/').concat(d),
        p = Object(l.a)(f, 'VERIFY_PASSWORD'),
        b = { fetchStatus: c.a.NONE }
      i.a.register(
        a()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
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
        m = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(l.b)(t, { params: { password: e }, request: a.Settings.verifyPassword })({
              actionTypes: p,
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
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
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        E = n.n(y),
        g = n('k49u'),
        O = n('rxPX'),
        v = n('0KEI'),
        w = Object(O.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var A = (function (e) {
          u()(n, e)
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
                      m()(t, g.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      m()(t, g.a.PasswordVerificationRequired, {
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
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    a
                      ? E.a.createElement(_.a, { to: '/i/flow/verify_account_ownership' })
                      : E.a.createElement(P.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: n }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component),
        D = w.forwardRef(A)
      t.a = D
    },
    Ezva: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AccountInformation', function () {
          return Qe
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
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        E = n.n(y),
        g = n('QJRq'),
        O = (n('jQ/y'), n('rxPX')),
        v = Object(O.a)().withAnalytics(),
        w = n('lUZE'),
        S = n('rHpw'),
        P = S.a.create(function (e) {
          return {
            headerIcon: { color: e.colors.blue500, height: e.spacesPx.space28, width: e.spacesPx.space28 },
            curvedHeader: {
              clipPath: 'ellipse(100% 100% at 38% 0%)',
              backgroundColor: e.colors.teal600,
              paddingBottom: e.spacesPx.space80,
              width: '100%',
            },
            footer: { width: '100%', paddingBottom: e.spacesPx.space36 },
            image1: { aspectRatio: '1.31', height: '100%', width: '100%', maxHeight: '249px', maxWidth: '327px' },
            image2: { aspectRatio: '1.88', height: '100%', width: '100%', maxHeight: '175px', maxWidth: '329px' },
            topContent: { paddingLeft: e.spacesPx.space32, paddingRight: e.spacesPx.space32 },
            modalContent: {
              paddingTop: e.spacesPx.space48,
              paddingLeft: e.spacesPx.space36,
              paddingRight: e.spacesPx.space36,
            },
            modalImageContainer: {
              alignItems: 'center',
              backgroundColor: e.colors.teal0,
              height: 'auto',
              justifyContent: 'center',
              marginTop: e.spacesPx.space48,
            },
            modalTitle: { paddingBottom: e.spacesPx.space8 },
            numberCircle: {
              alignItems: 'center',
              backgroundColor: e.colors.buttonBlack,
              borderRadius: e.borderRadii.infinite,
              height: e.spacesPx.space48,
              justifyContent: 'center',
              marginRight: e.spacesPx.space16,
              width: e.spacesPx.space48,
            },
            sheet: { height: '75%', maxHeight: '700px', minHeight: '480px', overflowY: 'auto' },
            stepList: { paddingTop: e.spacesPx.space28 },
            stepsContainer: {
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-start',
              paddingBottom: e.spacesPx.space20,
              width: '100%',
            },
            stepText: { flowFlow: 'column', flexShrink: 'initial', paddingRight: e.spacesPx.space36 },
            stepTitle: { paddingBottom: e.spacesPx.space8 },
          }
        }),
        _ = n('aITJ'),
        j = n('MWbm'),
        A = n('t62R'),
        D = n('3rX5'),
        L = n('/yvb'),
        x = n('sgih'),
        C = n('xKuM'),
        R = n('5Vk4'),
        k = n('3XMw'),
        I = n.n(k)
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var T = 'https://abs.twimg.com/images/automation-onboard-1.png',
        N = 'https://abs.twimg.com/images/automation-onboard-2.png',
        M = 'https://help.twitter.com/using-twitter/automated-account-labels',
        U = I.a.g2a9bd3e,
        H = I.a.dd9b3aad,
        B = I.a.hb6fa97c,
        z = I.a.ed8c8d2d,
        G = I.a.b989e1fe,
        K = E.a.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'j31f2f97' },
          E.a.createElement(
            A.b,
            {
              color: 'normal',
              link: 'https://help.twitter.com/rules-and-policies/twitter-automation',
              weight: 'bold',
              withUnderline: !0,
            },
            I.a.a18d6a7c,
          ),
        ),
        W = I.a.i2d599a9,
        Y = [
          { title: I.a.gd5bed72, description: I.a.g6d44431 },
          { title: I.a.e20a69e7, description: I.a.d2f88358 },
          { title: I.a.e427f632, description: I.a.a4d7cff9 },
        ],
        q = I.a.j24c37b2,
        V = v(
          (function (e) {
            u()(n, e)
            var t = F(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(c))),
                m()(l()(e), '_renderHeader', function () {
                  return E.a.createElement(
                    j.a,
                    { style: P.curvedHeader },
                    E.a.createElement(
                      j.a,
                      { style: [P.topContent, { paddingTop: _.b.isMobileOS() ? '26px' : '50px' }] },
                      E.a.createElement(A.b, { color: 'white', size: 'title2', weight: 'bold' }, U),
                    ),
                  )
                }),
                m()(l()(e), '_renderContent', function () {
                  return E.a.createElement(
                    j.a,
                    null,
                    E.a.createElement(
                      j.a,
                      { style: P.modalContent },
                      E.a.createElement(A.b, { size: 'title4', style: P.modalTitle, weight: 'heavy' }, H),
                      E.a.createElement(A.b, { color: 'gray700', size: 'body' }, B),
                    ),
                    E.a.createElement(
                      j.a,
                      { style: P.modalImageContainer },
                      E.a.createElement(D.a, { source: T, style: P.image1 }),
                    ),
                    E.a.createElement(
                      j.a,
                      { style: P.modalContent },
                      E.a.createElement(A.b, { color: 'gray700', size: 'body' }, z),
                    ),
                    E.a.createElement(
                      j.a,
                      { style: P.modalImageContainer },
                      E.a.createElement(D.a, { source: N, style: P.image2 }),
                    ),
                    E.a.createElement(
                      j.a,
                      { style: P.modalContent },
                      E.a.createElement(A.b, { size: 'title4', style: P.modalTitle, weight: 'heavy' }, G),
                      E.a.createElement(A.b, { color: 'gray700', size: 'body' }, K),
                    ),
                    E.a.createElement(
                      j.a,
                      { style: P.modalContent },
                      E.a.createElement(A.b, { size: 'title4', style: P.modalTitle, weight: 'heavy' }, W),
                      e._renderSteps(),
                      E.a.createElement(A.b, { color: 'gray700', size: 'body' }, e._renderLearnMoreLabel()),
                    ),
                  )
                }),
                m()(l()(e), '_renderFooter', function () {
                  return E.a.createElement(
                    j.a,
                    { style: [P.modalContent, P.footer] },
                    E.a.createElement(
                      L.a,
                      { backgroundColor: 'teal600', color: 'white', onClick: e.props.onConfirm, size: 'xLarge' },
                      q,
                    ),
                  )
                }),
                m()(l()(e), '_renderLearnMoreLabel', function () {
                  return E.a.createElement(
                    I.a.I18NFormatMessage,
                    { $i18n: 'ed8f77d3' },
                    E.a.createElement(
                      A.b,
                      { color: 'normal', link: M, onClick: e.props.onFaqClick, weight: 'bold', withUnderline: !0 },
                      I.a.e9965c13,
                    ),
                  )
                }),
                m()(l()(e), '_renderSteps', function () {
                  var e = 0
                  return E.a.createElement(
                    j.a,
                    { style: P.stepList },
                    Y.map(function (t) {
                      return (
                        (e += 1),
                        E.a.createElement(
                          j.a,
                          { key: 'automation_step_'.concat(e), style: P.stepsContainer },
                          E.a.createElement(
                            j.a,
                            { style: P.numberCircle },
                            E.a.createElement(A.b, { color: 'buttonWhite', size: 'headline1', weight: 'bold' }, e),
                          ),
                          E.a.createElement(
                            j.a,
                            { style: P.stepText },
                            E.a.createElement(A.b, { size: 'headline2', style: P.stepTitle, weight: 'bold' }, t.title),
                            E.a.createElement(A.b, { color: 'gray700', size: 'body' }, t.description),
                          ),
                        )
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
                    return E.a.createElement(
                      x.a,
                      {
                        allowBackNavigation: !0,
                        enableMaskForDismiss: !0,
                        onMaskClick: this.props.onClose,
                        type: 'full',
                        withMask: !0,
                      },
                      E.a.createElement(C.a, {
                        centeredLogo: E.a.createElement(w.a, { style: P.headerIcon }),
                        leftControl: E.a.createElement(R.a, { backButtonType: 'close', onClick: this.props.onClose }),
                        withBackground: !0,
                      }),
                      E.a.createElement(
                        j.a,
                        { style: _.b.isMobileOS() ? null : P.sheet },
                        this._renderHeader(),
                        this._renderContent(),
                        this._renderFooter(),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(E.a.Component),
        ),
        X = n('Fcaw'),
        Z = n('ZyHq'),
        Q = n('vEo5'),
        J = n('NeAX'),
        $ = n('YeIG'),
        ee = n('P1r1'),
        te = n('RqPI'),
        ne = n('G6rE'),
        re = n('0KEI'),
        ae = n('S/HT'),
        ce = n('kGix'),
        oe = function (e, t) {
          var n = ne.e.selectLoggedInUser(e),
            r = Object($.a)(n) ? ce.a.LOADED : Q.selectFetchStatus(e)
          return Object(ce.d)(J.selectFetchDataStatus(e), J.selectPreferencesFetchStatus(e), r)
        },
        ie = function (e) {
          var t = Object(ee.j)(e)
          return t && Object(ae.b)(e, t)
        },
        le = Object(O.a)()
          .propsFromState(function () {
            return {
              countryName: ie,
              email: Q.selectFirstEmail,
              fetchStatus: oe,
              loggedInUser: ne.e.selectLoggedInUser,
              managingAccount: X.d,
              phone: Q.selectFirstPhoneNumber,
              ages: J.selectAge,
              birthdate: J.selectBirthdate,
              gender: J.selectGender,
              languages: J.selectLanguage,
              languageCode: te.o,
              signupDetails: J.selectSignupDetails,
              verificationAccess: Z.m,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(re.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_INFORMATION_SCREEN',
              ),
              fetchAccountVerificationAccess: Z.a,
              fetchDevices: Q.fetchDevices,
              fetchData: J.fetchDataIfNeeded,
              fetchPreferences: J.fetchPreferencesIfNeeded,
              fetchCountryNamesIfNeeded: ae.a,
              fetchUserAccountLabel: X.b,
            }
          }),
        se = n('yoO3'),
        ue = n('PK8P'),
        de = n('7JQg'),
        fe = n('7FtF'),
        pe = S.a.create(function (e) {
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
        be = n('Irs7'),
        he = n('csss'),
        me = n('o1YB'),
        ye = n('v6aA')
      function Ee(e, t) {
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
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ee(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Oe(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ve = I.a.f15bfdb3,
        we = I.a.d0a77c9a,
        Se = I.a.jade381b,
        Pe = I.a.d1f6d336,
        _e = I.a.a3841918,
        je = I.a.f70cd5ed,
        Ae = I.a.ib6f1694,
        De = I.a.a8d0108d,
        Le = I.a.de32365f,
        xe = I.a.b6ab31bd,
        Ce = I.a.c21037d0,
        Re = I.a.h3290871,
        ke = I.a.d12d42db,
        Ie = I.a.hbd12156,
        Fe = I.a.b7ec04f3,
        Te = I.a.f70d5780,
        Ne = I.a.dc62d3c6,
        Me = I.a.ab22c36c,
        Ue = I.a.j3a1cff6,
        He = I.a.i62a03aa,
        Be = I.a.c119dee8,
        ze = E.a.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'f1a3d63c' },
          E.a.createElement(A.b, { link: '/i/profile' }, I.a.c036653e),
        ),
        Ge = I.a.bf96fda4,
        Ke = I.a.d495680d,
        We = I.a.f445dc78,
        Ye = I.a.d6d80990,
        qe = E.a.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'f2df3f23' },
          E.a.createElement(A.b, { link: '/settings/account/personalization' }, I.a.bad6cf6e),
        ),
        Ve = I.a.i859a9d3,
        Xe = { page: 'settings', section: 'account_information' },
        Ze = { page: 'account_type_landing' },
        Qe = (function (e) {
          u()(n, e)
          var t = Oe(n)
          function n(e, r) {
            var c
            return (
              a()(this, n),
              (c = t.call(this, e, r)),
              m()(l()(c), 'combinedFetches', function () {
                var e = c.props,
                  t = e.fetchAccountVerificationAccess,
                  n = e.fetchCountryNamesIfNeeded,
                  r = e.fetchData,
                  a = e.fetchDevices,
                  o = e.fetchPreferences,
                  i = e.fetchUserAccountLabel,
                  l = e.languageCode,
                  s = e.loggedInUser,
                  u = [r(), o(), n(l || '')]
                return (
                  s &&
                    (u.push(a()),
                    c.context.featureSwitches.isTrue('identity_verification_intake_enabled') && u.push(t()),
                    c.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled') &&
                      u.push(i(s.id_str))),
                  Promise.all(u)
                )
              }),
              m()(l()(c), '_render', function () {
                var e = c.props,
                  t = e.ages,
                  n = e.birthdate,
                  r = e.countryName,
                  a = e.email,
                  o = e.gender,
                  i = e.languages,
                  l = e.loggedInUser,
                  s = e.phone,
                  u = e.signupDetails,
                  d = c.state.showAutomationOnboardingModal,
                  f = t
                    .map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    })
                    .join(', '),
                  p = n && Se(new Date(''.concat(n, 'T00:00:00'))),
                  b = i
                    .map(function (e) {
                      return e.display
                    })
                    .join(', ')
                return E.a.createElement(
                  j.a,
                  null,
                  c.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled') &&
                    d &&
                    E.a.createElement(V, {
                      onClose: c._handleCloseAutomationModal,
                      onConfirm: c._handleConfirmAutomationModal,
                      onFaqClick: c._handleFaqClick,
                    }),
                  l
                    ? E.a.createElement(he.a, {
                        description:
                          l.screen_name &&
                          E.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(l.screen_name)),
                        label: Pe,
                        link: '/settings/screen_name',
                      })
                    : null,
                  l ? E.a.createElement(he.a, { description: s, label: je, link: '/settings/phone' }) : null,
                  l ? E.a.createElement(he.a, { description: a, label: _e, link: '/settings/email' }) : null,
                  l ? c._renderVerified() : null,
                  l
                    ? E.a.createElement(he.a, {
                        description: l.protected ? Fe : He,
                        label: We,
                        link: '/settings/audience_and_tagging',
                      })
                    : null,
                  l
                    ? E.a.createElement(
                        j.a,
                        { style: [pe.infoItem, pe.bottomBorder], testID: 'account-creation' },
                        E.a.createElement(A.b, { color: 'normal' }, Ae),
                        E.a.createElement(A.b, { color: 'gray700', style: pe.helpText }, we(new Date(l.created_at))),
                        u.creation_ip && u.country
                          ? E.a.createElement(
                              A.b,
                              { color: 'gray700', style: pe.helpText },
                              ''.concat(u.creation_ip, ' (').concat(u.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  l ? E.a.createElement(he.a, { description: r, label: Ce, link: '/settings/country' }) : null,
                  E.a.createElement(he.a, { description: b, label: Ke, link: '/settings/languages' }),
                  E.a.createElement(he.a, {
                    description: c._renderGender(o.value),
                    label: De,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  l
                    ? E.a.createElement(
                        j.a,
                        { style: [pe.infoItem, pe.bottomBorder], testID: 'birthday' },
                        E.a.createElement(A.b, { color: 'normal' }, Be),
                        n ? E.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, p) : null,
                        E.a.createElement(A.b, { color: 'gray700', style: pe.helpText }, ze),
                      )
                    : null,
                  E.a.createElement(he.a, { description: f, label: Ge, link: '/settings/your_twitter_data/age' }),
                  l ? c._renderAutomation() : null,
                  l
                    ? null
                    : E.a.createElement(
                        j.a,
                        { style: pe.infoItem, testID: 'loggedOutHelp' },
                        E.a.createElement(A.b, { color: 'gray700', style: pe.helpText }, Ye),
                        E.a.createElement('br', null),
                        E.a.createElement(A.b, { color: 'gray700', style: pe.helpText }, qe),
                      ),
                )
              }),
              m()(l()(c), '_renderGender', function (e) {
                switch (e) {
                  case 'female':
                    return Le
                  case 'male':
                    return xe
                  default:
                    return e
                }
              }),
              m()(l()(c), '_renderVerified', function () {
                var e,
                  t = E.a.createElement(me.a, {
                    label: Re,
                    learnMoreLabel: Ve,
                    learnMoreLink: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
                    subtext: null !== (e = c.props.loggedInUser) && void 0 !== e && e.verified ? Te : Ne,
                  })
                if (c.context.featureSwitches.isTrue('identity_verification_intake_enabled')) {
                  var n, r
                  switch (c.props.verificationAccess.status) {
                    case g.a.DISABLED:
                    case g.a.NOT_ELIGIBLE:
                      return t
                    case g.a.VERIFIED:
                      r = Te
                      break
                    default:
                      ;(n = Ie), (r = Ne)
                  }
                  return E.a.createElement(me.a, {
                    label: Re,
                    learnMoreLabel: n,
                    learnMoreLink: '/settings/account/request_verification',
                    subtext: r,
                  })
                }
                return t
              }),
              m()(l()(c), '_handleAutomationOnPress', function () {
                var e = c.props.analytics
                e.scribe(ge(ge({}, Xe), {}, { element: 'automation', action: 'click' })),
                  c.props.managingAccount ||
                    (e.scribe(ge(ge({}, Ze), {}, { action: 'impression' })),
                    c.setState({ showAutomationOnboardingModal: !0 }))
              }),
              m()(l()(c), '_handleCloseAutomationModal', function () {
                c.setState({ showAutomationOnboardingModal: !1 })
              }),
              m()(l()(c), '_handleConfirmAutomationModal', function () {
                var e = c.props,
                  t = e.analytics,
                  n = e.history
                t.scribe(ge(ge({}, Ze), {}, { element: 'call_to_action', action: 'click' })),
                  n.push('/settings/account/automation')
              }),
              m()(l()(c), '_handleFaqClick', function () {
                c.props.analytics.scribe(
                  ge(ge({}, Ze), {}, { component: 'link', element: 'help_faqs', action: 'click' }),
                )
              }),
              m()(l()(c), '_renderAutomation', function () {
                if (c.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled')) {
                  var e = c.props.managingAccount,
                    t = e ? Ue : Me,
                    n = e ? '/settings/account/automation' : '/settings/your_twitter_data/account'
                  return E.a.createElement(he.a, {
                    description: t,
                    label: ke,
                    link: n,
                    onPress: c._handleAutomationOnPress,
                  })
                }
                return null
              }),
              (c.state = { showAutomationOnboardingModal: !1 }),
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
                  return E.a.createElement(
                    de.b,
                    { namespace: Xe },
                    E.a.createElement(
                      se.a,
                      null,
                      E.a.createElement(
                        fe.a,
                        { location: n, title: ve },
                        E.a.createElement(ue.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      m()(Qe, 'contextType', ye.a)
      t.default = Object(be.a)(le(Qe))
    },
    Fcaw: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return m
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return O
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('oEOe')),
        o = n('iD2S'),
        i = n.n(o),
        l = n('kGix'),
        s = n('Ssj5')
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
      function d(e) {
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
      var f = 'accountTaxonomy',
        p =
          ('rweb/'.concat(f),
          i()({ account_label: { disableStatus: l.a.NONE, fetchStatus: l.a.NONE, managed_label: void 0 } })),
        b = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE',
        })
      s.a.register(
        a()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case b.REQUEST:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { fetchStatus: l.a.LOADING }) })
            case b.SUCCESS:
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
            case b.FAILURE:
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
        y = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.fetchStatus) || l.a.NONE
          )
        },
        E = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.disableStatus) || l.a.NONE
          )
        },
        g = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(c.b)(t, { request: a.AccountTaxonomy.fetchUserAccountLabel, params: { userId: e } })({
              actionTypes: b,
              context: 'FETCH_USER_ACCOUNT_LABEL',
            })
          }
        },
        O = function () {
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
          return y
        }),
        n.d(t, 'f', function () {
          return g
        }),
        n.d(t, 'g', function () {
          return O
        }),
        n.d(t, 'h', function () {
          return v
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = 'userData',
        p = 'rweb/'.concat(f),
        b = Object(s.a)(p, 'FETCH_DOWNLOADS'),
        h = Object(s.a)(p, 'CREATE_DOWNLOAD'),
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
        y = [m.NEW, m.INPROGRESS, m.INPROGRESS_ASYNC, m.ZIPPING, m.PUBLISHING, m.NOTIFYING],
        E = { fetchStatus: i.a.None, downloads: { all: [], nonFailed: [] } }
      l.a.register(
        o()({}, f, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            n = arguments.length > 1 ? arguments[1] : void 0
          switch (n.type) {
            case b.SUCCESS:
              var r = n.payload || [],
                c = r.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return d(
                d({}, t),
                {},
                { fetchStatus: i.a.LOADED, downloads: d(d({}, t.downloads), {}, { all: r, nonFailed: c }) },
              )
            case b.REQUEST:
              return d(d({}, t), {}, { fetchStatus: i.a.LOADING })
            case b.FAILURE:
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
      var g = function (e) {
          return e.userData.downloads
        },
        O = function (e) {
          return e.userData.fetchStatus
        },
        v = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        w = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.fetchDownloads })({
              actionTypes: b,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        S = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.UserData.createDataDownload })({
              actionTypes: h,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        P = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(s.d)(t, { params: e, request: a.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
          }
        }
    },
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return b
        })
      var r = n('97Jx'),
        a = n.n(r),
        c = n('m3Bd'),
        o = n.n(c),
        i = (n('hBvt'), n('ERkP')),
        l = n.n(i),
        s = n('rHpw'),
        u = n('csss'),
        d = function (e) {
          return l.a.createElement(e.Icon, { style: f.thumbnail })
        },
        f = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function p(e) {
        var t = e.Icon,
          n = o()(e, ['Icon'])
        return l.a.createElement(
          u.a,
          a()({}, n, { thumbnail: l.a.createElement(d, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function b(e) {
        e.link
        var t = o()(e, ['link'])
        return l.a.createElement(u.a, a()({}, t, { link: { external: !0, pathname: e.link } }))
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
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        E = n.n(y),
        g = n('k49u'),
        O = n('hqKg'),
        v = n('0KEI'),
        w = n('oEGd'),
        S = n('55TG'),
        P = Object(O.createSelector)(S.a, function (e) {
          return { verifyPasswordFetchStatus: e }
        }),
        _ = {
          verifyPassword: S.b,
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_GATEWAY'),
        },
        j = Object(w.g)(P, _, null, { pure: !1 }),
        A = n('kGix'),
        D = n('v//M'),
        L = n('3XMw'),
        x = n.n(L),
        C = n('5FtR'),
        R = n('iCwC'),
        k = n('MWbm'),
        I = n('TnY3'),
        F = n('t62R'),
        T = n('6vad'),
        N = n('p+r5'),
        M = n('mw9i'),
        U = n('/yvb'),
        H = n('rHpw'),
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var G = x.a.fe36fe1f,
        K = x.a.dec3c9b8,
        W = x.a.hccd9dbd,
        Y = x.a.d1091f50,
        q = x.a.g9677c6d,
        V = x.a.c8cb0b4c,
        X = (function (e) {
          u()(n, e)
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
                        m()(t, g.a.InvalidCurrentPassword, {
                          customAction: function () {
                            return e.setState({ passwordError: V })
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
                      m()(t, g.a.PasswordVerificationRequired, {
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
                    n = E.a.createElement(
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
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    e ? E.a.createElement(T.b, { text: e }) : null,
                    E.a.createElement(
                      k.a,
                      { style: [R.a.viewItem, R.a.bottomBorder] },
                      E.a.createElement(F.b, { color: 'gray700', size: 'subtext2' }, W),
                    ),
                    E.a.createElement(N.a, {
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
                    E.a.createElement(
                      M.a,
                      { style: Z.buttonContainer },
                      E.a.createElement(
                        U.a,
                        { disabled: !1, onPress: this._handlePasswordSubmit, style: Z.button, type: 'brandFilled' },
                        q,
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
                  return E.a.createElement(
                    E.a.Fragment,
                    null,
                    c
                      ? this._passwordlessSsoEnabled
                        ? E.a.createElement(C.a, {
                            to: {
                              pathname: '/i/flow/verify_account_ownership',
                              state: { input: { requested_variant: n.pathname } },
                            },
                          })
                        : this._renderPasswordPrompt()
                      : E.a.createElement(D.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: r }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      m()(X, 'contextType', B.a), m()(X, 'defaultProps', { titleHeader: G })
      var Z = H.a.create(function (e) {
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
        Q = j(X)
      t.a = Object(I.a)(Q)
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
        s = n('NyKK'),
        u = n('rxPX'),
        d = n('0KEI'),
        f = Object(u.a)()
          .propsFromState(function () {
            return { fetchStatus: s.g, downloads: s.f, isUserDataUnavailable: s.h }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createDataDownload: s.c,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('DOWNLOAD_YOUR_DATA'),
              fetchDownloads: s.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'account', component: 'download_your_data' }),
        p = n('fs1G'),
        b = n('yoO3'),
        h = n('7JQg'),
        m = n('7FtF'),
        y = n('rHpw').a.create(function (e) {
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
        E = n('ClNT'),
        g = n('MWbm'),
        O = n('t62R'),
        v = n('0yYu'),
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
      function x(e) {
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
      var C = D.a.f56af9cc,
        R = D.a.cce24bf3,
        k = D.a.d6eb9b9a,
        I = D.a.d2fb334b,
        F = D.a.b708417b,
        T = D.a.jbf5843d,
        N = D.a.ea886c6e,
        M = D.a.cdcc2ad3,
        U = D.a.dbeff879,
        H = D.a.ce5d2c46,
        B = D.a.b2ed92c3,
        z = D.a.gee8110d,
        G = D.a.f56af9cc,
        K = D.a.hb02ed28,
        W = D.a.c2254083,
        Y = D.a.f62d1d9d,
        q = D.a.i859a9d3,
        V = o.a.createElement(
          D.a.I18NFormatMessage,
          { $i18n: 'ba13ef22' },
          o.a.createElement(
            O.b,
            {
              link: 'https://help.twitter.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true',
            },
            D.a.c9c1ebbb,
          ),
        ),
        X = D.a.b221ca4b,
        Z = { page: 'settings', section: 'account', component: 'download_your_data' },
        Q = Object.freeze(x(x({}, s.b), {}, { UNAVAILABLE: 'UNAVAILABLE' })),
        J = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(v.a, null),
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
          u = e.fetchDownloads,
          d = e.fetchStatus,
          f = e.isUserDataUnavailable,
          w = e.location,
          A = !!t,
          D = !A,
          L = f,
          x = !f && A
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
            n = t.length ? t[0].status : e.length ? s.b.FAILED : s.b.NONE,
            r = !!t.length && void 0 !== t[0].urls,
            a = s.a.indexOf(n) >= 0,
            c = r && n === s.b.COMPLETE,
            i = n === s.b.FAILED,
            u = n === s.b.COMPLETE && !r,
            d = u ? Q.UNAVAILABLE : n,
            f = n === s.b.NONE ? G : p.a,
            b = function () {
              return o.a.createElement(
                P.a,
                {
                  disabled: a || i || u,
                  link: c ? '/settings/your_twitter_data/data' : void 0,
                  onPress: f,
                  size: 'small',
                  style: y.narrowButton,
                  type: 'brandFilled',
                },
                (function (e) {
                  switch (e) {
                    case Q.NONE:
                      return U
                    case Q.FAILED:
                      return M
                    case Q.COMPLETE:
                      return z
                    case Q.UNAVAILABLE:
                      return H
                    default:
                      return B
                  }
                })(d),
              )
            }
          return o.a.createElement(
            g.a,
            { style: [y.narrowButtonRow, y.labelContainer] },
            o.a.createElement(
              g.a,
              { style: y.description },
              o.a.createElement(O.b, { color: 'normal' }, I),
              o.a.createElement(
                O.b,
                { color: 'gray700', style: [y.errorText, y.helpText] },
                (function (e) {
                  switch (e) {
                    case Q.NONE:
                      return null
                    case Q.FAILED:
                      return V
                    case Q.COMPLETE:
                      return Y
                    case Q.UNAVAILABLE:
                      return K
                    default:
                      return W
                  }
                })(d),
              ),
            ),
            o.a.createElement(g.a, { style: y.noShrink }, o.a.createElement(b, null)),
          )
        }
        return o.a.createElement(
          h.b,
          { namespace: Z },
          o.a.createElement(
            b.a,
            null,
            o.a.createElement(
              m.a,
              { location: w, screenType: 'secondaryDetail', title: C },
              o.a.createElement(S.a, { description: R }),
              x
                ? o.a.createElement(E.a, {
                    fetch: function () {
                      return u()
                    },
                    fetchStatus: d,
                    renderChildren: function () {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          g.a,
                          null,
                          o.a.createElement(_.b, { text: k }),
                          o.a.createElement(S.a, {
                            description: F,
                            learnMoreLabel: q,
                            learnMoreLink: 'https://help.twitter.com/managing-your-account/accessing-your-twitter-data',
                          }),
                          $(),
                        ),
                        o.a.createElement(v.a, null),
                        o.a.createElement(
                          g.a,
                          null,
                          o.a.createElement(_.b, { text: T }),
                          o.a.createElement(j.a, {
                            label: N,
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
        return p
      }),
        n.d(t, 'b', function () {
          return b
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
      var s = 'countryNames',
        u = { fetchStatus: c.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(s, '_REQUEST'), FAILURE: ''.concat(s, '_FAILURE'), SUCCESS: ''.concat(s, '_SUCCESS') },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
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
      o.a.register(a()({}, s, f))
      var p = function (e) {
          return e.countryNames.countries
        },
        b = function (e, t) {
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
        s = n('yoO3'),
        u = n('7JQg'),
        d = n('xHsv'),
        f = n('7FtF'),
        p = n('OySi'),
        b = 'notificationsScreen',
        h = n('MWbm'),
        m = n('+RfI'),
        y = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        E = n.n(y),
        g = n('Lsrn'),
        O = n('k/Ka')
      function v(e, t) {
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
            ? v(Object(n), !0).forEach(function (t) {
                E()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(O.a)(
          'svg',
          w(
            w({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [g.a.root, e.style], viewBox: '0 0 24 24' },
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
        x = l.a.da867c58,
        C = { page: 'settings', section: 'notification' },
        R = [
          { description: D, label: A, link: '/settings/notifications/filters', Icon: m.a },
          { description: x, label: L, link: '/settings/notifications/preferences', Icon: P },
        ]
      t.default = function (e) {
        var t = e.location
        return o.a.createElement(
          u.b,
          { namespace: C },
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: _ },
              o.a.createElement(
                h.a,
                { testID: b },
                o.a.createElement(d.a, { description: j }),
                R.map(function (e) {
                  return o.a.createElement(p.b, a()({}, e, { key: e.link }))
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
        s = n('7JQg'),
        u = n('7FtF'),
        d = n('OySi'),
        f = 'accountScreen',
        p = n('MWbm'),
        b = n('boUI'),
        h = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(h),
        y = n('Lsrn'),
        E = n('k/Ka')
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var v = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(E.a)(
          'svg',
          O(
            O({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [y.a.root, e.style], viewBox: '0 0 24 24' },
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
      v.metadata = { width: 24, height: 24 }
      var w = v,
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
        return Object(E.a)(
          'svg',
          j(
            j({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [y.a.root, e.style], viewBox: '0 0 24 24' },
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
        x = n('xHsv'),
        C = n('4zmP'),
        R = n('rHpw'),
        k = i.a.hc73f03f,
        I = i.a.d3a2bde7,
        F = i.a.f15bfdb3,
        T = i.a.idca4741,
        N = i.a.b6ded35d,
        M = i.a.ab1f7eef,
        U = i.a.f56af9cc,
        H = i.a.cce24bf3,
        B = i.a.d13e165c,
        z = i.a.d1e97fdf,
        G = i.a.hfb92b14,
        K = i.a.i203df96,
        W = { page: 'settings', section: 'account' },
        Y = { label: 'Go to Security settings', link: '/settings/security_and_account_access' },
        q = R.a.create(function (e) {
          return { callout: { marginHorizontal: e.componentDimensions.gutterHorizontal, width: 'auto' } }
        })
      t.default = function (e) {
        var t = e.location,
          n = a.a.useContext(c.a).featureSwitches.isTrue('responsive_web_delegate_enabled'),
          r = a.a.useMemo(
            function () {
              return (function (e) {
                return [
                  { description: T, label: F, link: '/settings/your_twitter_data/account', Icon: b.a },
                  { description: N, label: M, link: '/settings/password', Icon: w },
                  { description: H, label: U, link: '/settings/download_your_data', Icon: S.a },
                  { description: z, disabled: e, label: B, link: '/settings/teams', Icon: P.a },
                  { description: K, label: G, link: '/settings/deactivate', Icon: D },
                ]
              })(n)
            },
            [n],
          )
        return a.a.createElement(
          s.b,
          { namespace: W },
          a.a.createElement(
            l.a,
            null,
            a.a.createElement(
              u.a,
              { location: t, screenType: 'primaryDetail', title: k },
              a.a.createElement(
                p.a,
                { testID: f },
                a.a.createElement(x.a, { description: I }),
                r.map(function (e) {
                  return a.a.createElement(
                    p.a,
                    { key: e.label },
                    a.a.createElement(d.b, e),
                    e.disabled &&
                      '/settings/teams' === e.link &&
                      a.a.createElement(C.a, {
                        Icon: L.a,
                        action: Y,
                        headline: 'TweetDeck Teams moved',
                        style: q.callout,
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
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('uFXj'), n('ERkP')),
        E = n.n(y),
        g = n('t62R'),
        O = n('rHpw'),
        v = n('MWbm')
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var S = (function (e) {
        u()(n, e)
        var t = w(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            m()(l()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return E.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            m()(l()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                r = t.learnMoreLink
              return r && n ? E.a.createElement(g.b, { link: r, size: 'subtext2' }, n) : null
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
                return E.a.createElement(
                  v.a,
                  { style: [P.root, c && P.bottomBorder] },
                  E.a.createElement(g.b, null, t),
                  a
                    ? n && r
                      ? this._renderSubtextAndLink()
                      : E.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, a)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(E.a.Component)
      m()(S, 'defaultProps', { withBottomBorder: !0 })
      var P = O.a.create(function (e) {
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
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
