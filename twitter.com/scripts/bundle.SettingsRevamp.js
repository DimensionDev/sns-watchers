;(window.webpackJsonp = window.webpackJsonp || []).push([
  [96],
  {
    '89Im': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    ClNT: function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        b = a('KEM+'),
        f = a.n(b),
        h = (a('2G9S'), a('ERkP')),
        p = a.n(h),
        E = a('k49u'),
        g = a('rxPX'),
        y = a('0KEI'),
        v = Object(g.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
              'TWO_FACTOR_AUTHENTICATION_GATEWAY',
            ),
          }
        }),
        _ = a('kGix'),
        S = a('v//M'),
        A = a('5FtR'),
        w = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(l()(e), 'state', { verificationRequired: !1 }),
              f()(l()(e), '_handleFetch', function () {
                var t,
                  a = e.props,
                  n = a.createLocalApiErrorHandler
                ;(0, a.fetch)()
                  .then(function () {
                    e.setState({ verificationRequired: !1 })
                  })
                  .catch(
                    n(
                      ((t = {}),
                      f()(t, E.a.GenericForbidden, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      f()(t, E.a.PasswordVerificationRequired, {
                        customAction: function () {
                          e.setState({ verificationRequired: !0 })
                        },
                      }),
                      f()(t, 'showToast', !1),
                      t),
                    ),
                  )
              }),
              e
            )
          }
          return (
            o()(a, [
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
                    a = e.renderChildren,
                    n = this.state.verificationRequired,
                    r = t === _.a.FAILED && n
                  return p.a.createElement(
                    p.a.Fragment,
                    null,
                    r
                      ? p.a.createElement(A.a, { to: '/i/flow/verify_account_ownership' })
                      : p.a.createElement(S.a, { fetchStatus: t, onRequestRetry: this._handleFetch, render: a }),
                  )
                },
              },
            ]),
            a
          )
        })(p.a.Component),
        L = v.forwardRef(w)
      t.a = L
    },
    Ezva: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AccountInformation', function () {
          return Ve
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        l = a.n(i),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        m = a.n(d),
        b = a('2VqO'),
        f = a.n(b),
        h = a('KEM+'),
        p = a.n(h),
        E = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        g = a.n(E),
        y = a('QJRq'),
        v = (a('1t7P'), a('jQ/y'), a('rxPX')),
        _ = Object(v.a)().withAnalytics(),
        S = a('lUZE'),
        A = a('rHpw'),
        w = A.a.create(function (e) {
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
            learnMoreContainer: {
              paddingTop: e.spacesPx.space8,
              paddingLeft: e.spacesPx.space36,
              paddingRight: e.spacesPx.space36,
            },
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
            stepListContainer: { paddingTop: e.spacesPx.space16, paddingRight: e.spacesPx.space28 },
            stepTitle: { paddingBottom: e.spacesPx.space2 },
          }
        }),
        L = a('aITJ'),
        C = a('MWbm'),
        I = a('t62R'),
        O = a('3rX5'),
        x = a('/yvb'),
        N = a('h0NW'),
        T = a('sgih'),
        k = a('xKuM'),
        D = a('5Vk4'),
        R = a('3XMw'),
        F = a.n(R),
        U = 'https://abs.twimg.com/images/automation-onboard-1.png',
        P = 'https://abs.twimg.com/images/automation-onboard-2.png',
        M = 'https://help.twitter.com/using-twitter/automated-account-labels',
        z = F.a.g2a9bd3e,
        B = F.a.dd9b3aad,
        H = F.a.hb6fa97c,
        j = F.a.ed8c8d2d,
        G = F.a.b989e1fe,
        K = g.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'j31f2f97' },
          g.a.createElement(
            I.b,
            {
              color: 'text',
              link: 'https://help.twitter.com/rules-and-policies/twitter-automation',
              weight: 'bold',
              withUnderline: !0,
            },
            F.a.a18d6a7c,
          ),
        ),
        W = F.a.i2d599a9,
        q = [
          { title: F.a.gd5bed72, description: F.a.g6d44431 },
          { title: F.a.e20a69e7, description: F.a.d2f88358 },
          { title: F.a.e427f632, description: F.a.a4d7cff9 },
        ],
        V = F.a.j24c37b2,
        Y = _(
          (function (e) {
            m()(a, e)
            var t = f()(a)
            function a() {
              var e
              o()(this, a)
              for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                p()(u()(e), '_renderHeader', function () {
                  return g.a.createElement(
                    C.a,
                    { style: w.curvedHeader },
                    g.a.createElement(
                      C.a,
                      { style: [w.topContent, { paddingTop: L.b.isMobileOS() ? '26px' : '50px' }] },
                      g.a.createElement(I.b, { color: 'white', size: 'title2', weight: 'bold' }, z),
                    ),
                  )
                }),
                p()(u()(e), '_renderContent', function () {
                  return g.a.createElement(
                    C.a,
                    null,
                    g.a.createElement(
                      C.a,
                      { style: w.modalContent },
                      g.a.createElement(I.b, { size: 'title4', style: w.modalTitle, weight: 'heavy' }, B),
                      g.a.createElement(I.b, { color: 'gray700', size: 'body' }, H),
                    ),
                    g.a.createElement(
                      C.a,
                      { style: w.modalImageContainer },
                      g.a.createElement(O.a, { source: U, style: w.image1 }),
                    ),
                    g.a.createElement(
                      C.a,
                      { style: w.modalContent },
                      g.a.createElement(I.b, { color: 'gray700', size: 'body' }, j),
                    ),
                    g.a.createElement(
                      C.a,
                      { style: w.modalImageContainer },
                      g.a.createElement(O.a, { source: P, style: w.image2 }),
                    ),
                    g.a.createElement(
                      C.a,
                      { style: w.modalContent },
                      g.a.createElement(I.b, { size: 'title4', style: w.modalTitle, weight: 'heavy' }, G),
                      g.a.createElement(I.b, { color: 'gray700', size: 'body' }, K),
                    ),
                    g.a.createElement(
                      C.a,
                      { style: w.modalContent },
                      g.a.createElement(I.b, { size: 'title4', style: w.modalTitle, weight: 'heavy' }, W),
                    ),
                    g.a.createElement(C.a, { style: w.stepListContainer }, e._renderSteps()),
                    g.a.createElement(
                      C.a,
                      { style: w.learnMoreContainer },
                      g.a.createElement(I.b, { color: 'gray700', size: 'body' }, e._renderLearnMoreLabel()),
                    ),
                  )
                }),
                p()(u()(e), '_renderFooter', function () {
                  return g.a.createElement(
                    C.a,
                    { style: [w.modalContent, w.footer] },
                    g.a.createElement(
                      x.a,
                      { backgroundColor: 'teal600', color: 'white', onClick: e.props.onConfirm, size: 'xLarge' },
                      V,
                    ),
                  )
                }),
                p()(u()(e), '_renderLearnMoreLabel', function () {
                  return g.a.createElement(
                    F.a.I18NFormatMessage,
                    { $i18n: 'ed8f77d3' },
                    g.a.createElement(
                      I.b,
                      { color: 'text', link: M, onClick: e.props.onFaqClick, weight: 'bold', withUnderline: !0 },
                      F.a.e9965c13,
                    ),
                  )
                }),
                p()(u()(e), '_renderStepLabel', function (e) {
                  return g.a.createElement(I.b, { size: 'headline2', style: w.stepTitle, weight: 'bold' }, e)
                }),
                p()(u()(e), '_renderStepDecorationBadge', function (e) {
                  return g.a.createElement(
                    C.a,
                    { style: w.numberCircle },
                    g.a.createElement(I.b, { color: 'buttonWhite', size: 'headline1', weight: 'bold' }, e),
                  )
                }),
                p()(u()(e), '_renderSteps', function () {
                  var t = q.map(function (t, a) {
                    return {
                      label: e._renderStepLabel(t.title),
                      decoration: e._renderStepDecorationBadge(a + 1),
                      description: t.description,
                    }
                  })
                  return g.a.createElement(N.a, { items: t })
                }),
                e
              )
            }
            return (
              l()(a, [
                {
                  key: 'render',
                  value: function () {
                    return g.a.createElement(
                      T.a,
                      {
                        allowBackNavigation: !0,
                        enableMaskForDismiss: !0,
                        onMaskClick: this.props.onClose,
                        type: 'full',
                        withMask: !0,
                      },
                      g.a.createElement(k.a, {
                        centeredLogo: g.a.createElement(S.a, { style: w.headerIcon }),
                        leftControl: g.a.createElement(D.a, { backButtonType: 'close', onClick: this.props.onClose }),
                        withBackground: !0,
                      }),
                      g.a.createElement(
                        C.a,
                        { style: L.b.isMobileOS() ? null : w.sheet },
                        this._renderHeader(),
                        this._renderContent(),
                        this._renderFooter(),
                      ),
                    )
                  },
                },
              ]),
              a
            )
          })(g.a.Component),
        ),
        Q = a('Fcaw'),
        X = a('ZyHq'),
        J = a('vEo5'),
        Z = a('NeAX'),
        $ = a('YeIG'),
        ee = a('P1r1'),
        te = a('RqPI'),
        ae = a('G6rE'),
        ne = a('0KEI'),
        re = a('S/HT'),
        ce = a('kGix'),
        oe = function (e, t) {
          var a = ae.e.selectLoggedInUser(e),
            n = Object($.a)(a) ? ce.a.LOADED : J.selectFetchStatus(e)
          return Object(ce.d)(Z.selectFetchDataStatus(e), Z.selectPreferencesFetchStatus(e), n)
        },
        ie = function (e) {
          var t = Object(ee.i)(e)
          return t && Object(re.b)(e, t)
        },
        le = Object(v.a)()
          .propsFromState(function () {
            return {
              countryName: ie,
              email: J.selectFirstEmail,
              fetchStatus: oe,
              loggedInUser: ae.e.selectLoggedInUser,
              managingAccount: Q.d,
              phone: J.selectFirstPhoneNumber,
              ages: Z.selectAge,
              birthdate: Z.selectBirthdate,
              gender: Z.selectGender,
              languages: Z.selectLanguage,
              languageCode: te.o,
              signupDetails: Z.selectSignupDetails,
              verificationAccess: X.m,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ne.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_ACCOUNT_INFORMATION_SCREEN',
              ),
              fetchAccountVerificationAccess: X.a,
              fetchDevices: J.fetchDevices,
              fetchData: Z.fetchDataIfNeeded,
              fetchPreferences: Z.fetchPreferencesIfNeeded,
              fetchCountryNamesIfNeeded: re.a,
              fetchUserAccountLabel: Q.b,
            }
          }),
        se = a('yoO3'),
        ue = a('PK8P'),
        de = a('7JQg'),
        me = a('7FtF'),
        be = A.a.create(function (e) {
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
        fe = a('Irs7'),
        he = a('csss'),
        pe = a('3Ohe'),
        Ee = a('v6aA'),
        ge = F.a.f15bfdb3,
        ye = F.a.d0a77c9a,
        ve = F.a.jade381b,
        _e = F.a.d1f6d336,
        Se = F.a.a3841918,
        Ae = F.a.f70cd5ed,
        we = F.a.ib6f1694,
        Le = F.a.a8d0108d,
        Ce = F.a.de32365f,
        Ie = F.a.b6ab31bd,
        Oe = F.a.c21037d0,
        xe = F.a.h3290871,
        Ne = F.a.d12d42db,
        Te = F.a.hbd12156,
        ke = F.a.b7ec04f3,
        De = F.a.f70d5780,
        Re = F.a.dc62d3c6,
        Fe = F.a.ad31b476,
        Ue = F.a.i62a03aa,
        Pe = F.a.c119dee8,
        Me = g.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'f1a3d63c' },
          g.a.createElement(I.b, { link: '/i/profile' }, F.a.c036653e),
        ),
        ze = F.a.bf96fda4,
        Be = F.a.d495680d,
        He = F.a.f445dc78,
        je = F.a.d6d80990,
        Ge = g.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'f2df3f23' },
          g.a.createElement(I.b, { link: '/settings/account/personalization' }, F.a.bad6cf6e),
        ),
        Ke = F.a.i859a9d3,
        We = { page: 'settings', section: 'account_information' },
        qe = { page: 'account_type_landing' },
        Ve = (function (e) {
          m()(a, e)
          var t = f()(a)
          function a(e, n) {
            var c
            return (
              o()(this, a),
              (c = t.call(this, e, n)),
              p()(u()(c), 'combinedFetches', function () {
                var e = c.props,
                  t = e.fetchAccountVerificationAccess,
                  a = e.fetchCountryNamesIfNeeded,
                  n = e.fetchData,
                  r = e.fetchDevices,
                  o = e.fetchPreferences,
                  i = e.fetchUserAccountLabel,
                  l = e.languageCode,
                  s = e.loggedInUser,
                  u = [n(), o(), a(l || '')]
                return (
                  s &&
                    (u.push(r()),
                    c.context.featureSwitches.isTrue('identity_verification_intake_enabled') && u.push(t()),
                    c.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled') &&
                      u.push(i(s.id_str))),
                  Promise.all(u)
                )
              }),
              p()(u()(c), '_render', function () {
                var e = c.props,
                  t = e.ages,
                  a = e.birthdate,
                  n = e.countryName,
                  r = e.email,
                  o = e.gender,
                  i = e.languages,
                  l = e.loggedInUser,
                  s = e.phone,
                  u = e.signupDetails,
                  d = c.state.showAutomationOnboardingModal,
                  m = t
                    .map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    })
                    .join(', '),
                  b = a && ve(new Date(''.concat(a, 'T00:00:00'))),
                  f = i
                    .map(function (e) {
                      return e.display
                    })
                    .join(', ')
                return g.a.createElement(
                  C.a,
                  null,
                  c.context.featureSwitches.isTrue('account_taxonomy_automation_opt_in_enabled') &&
                    d &&
                    g.a.createElement(Y, {
                      onClose: c._handleCloseAutomationModal,
                      onConfirm: c._handleConfirmAutomationModal,
                      onFaqClick: c._handleFaqClick,
                    }),
                  l
                    ? g.a.createElement(he.a, {
                        description:
                          l.screen_name &&
                          g.a.createElement(I.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(l.screen_name)),
                        label: _e,
                        link: '/settings/screen_name',
                      })
                    : null,
                  l ? g.a.createElement(he.a, { description: s, label: Ae, link: '/settings/phone' }) : null,
                  l ? g.a.createElement(he.a, { description: r, label: Se, link: '/settings/email' }) : null,
                  l ? c._renderVerified() : null,
                  l
                    ? g.a.createElement(he.a, {
                        description: l.protected ? ke : Ue,
                        label: He,
                        link: '/settings/audience_and_tagging',
                      })
                    : null,
                  l
                    ? g.a.createElement(
                        C.a,
                        { style: [be.infoItem, be.bottomBorder], testID: 'account-creation' },
                        g.a.createElement(I.b, null, we),
                        g.a.createElement(I.b, { color: 'gray700', style: be.helpText }, ye(new Date(l.created_at))),
                        u.creation_ip && u.country
                          ? g.a.createElement(
                              I.b,
                              { color: 'gray700', style: be.helpText },
                              ''.concat(u.creation_ip, ' (').concat(u.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  l ? g.a.createElement(he.a, { description: n, label: Oe, link: '/settings/country' }) : null,
                  g.a.createElement(he.a, { description: f, label: Be, link: '/settings/languages' }),
                  g.a.createElement(he.a, {
                    description: c._renderGender(o.value),
                    label: Le,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  l
                    ? g.a.createElement(
                        C.a,
                        { style: [be.infoItem, be.bottomBorder], testID: 'birthday' },
                        g.a.createElement(I.b, null, Pe),
                        a ? g.a.createElement(I.b, { color: 'gray700', size: 'subtext2' }, b) : null,
                        g.a.createElement(I.b, { color: 'gray700', style: be.helpText }, Me),
                      )
                    : null,
                  g.a.createElement(he.a, { description: m, label: ze, link: '/settings/your_twitter_data/age' }),
                  l ? c._renderAutomation() : null,
                  l
                    ? null
                    : g.a.createElement(
                        C.a,
                        { style: be.infoItem, testID: 'loggedOutHelp' },
                        g.a.createElement(I.b, { color: 'gray700', style: be.helpText }, je),
                        g.a.createElement('br', null),
                        g.a.createElement(I.b, { color: 'gray700', style: be.helpText }, Ge),
                      ),
                )
              }),
              p()(u()(c), '_renderGender', function (e) {
                switch (e) {
                  case 'female':
                    return Ce
                  case 'male':
                    return Ie
                  default:
                    return e
                }
              }),
              p()(u()(c), '_renderVerified', function () {
                var e,
                  t = g.a.createElement(pe.a, {
                    label: xe,
                    learnMoreLabel: Ke,
                    learnMoreLink: 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
                    subtext: null !== (e = c.props.loggedInUser) && void 0 !== e && e.verified ? De : Re,
                  })
                if (c.context.featureSwitches.isTrue('identity_verification_intake_enabled')) {
                  var a, n
                  switch (c.props.verificationAccess.status) {
                    case y.a.DISABLED:
                    case y.a.NOT_ELIGIBLE:
                      return t
                    case y.a.VERIFIED:
                      n = De
                      break
                    default:
                      ;(a = Te), (n = Re)
                  }
                  return g.a.createElement(pe.a, {
                    label: xe,
                    learnMoreLabel: a,
                    learnMoreLink: '/settings/account/request_verification',
                    subtext: n,
                  })
                }
                return t
              }),
              p()(u()(c), '_handleAutomationOnPress', function () {
                var e = c.props.analytics
                e.scribe(r()(r()({}, We), {}, { element: 'automation', action: 'click' })),
                  c.props.managingAccount ||
                    (e.scribe(r()(r()({}, qe), {}, { action: 'impression' })),
                    c.setState({ showAutomationOnboardingModal: !0 }))
              }),
              p()(u()(c), '_handleCloseAutomationModal', function () {
                c.setState({ showAutomationOnboardingModal: !1 })
              }),
              p()(u()(c), '_handleConfirmAutomationModal', function () {
                var e = c.props,
                  t = e.analytics,
                  a = e.history
                t.scribe(r()(r()({}, qe), {}, { element: 'call_to_action', action: 'click' })),
                  a.push('/settings/account/automation')
              }),
              p()(u()(c), '_handleFaqClick', function () {
                c.props.analytics.scribe(
                  r()(r()({}, qe), {}, { component: 'link', element: 'help_faqs', action: 'click' }),
                )
              }),
              p()(u()(c), '_renderAutomation', function () {
                var e = c.context.featureSwitches,
                  t = e.isTrue('account_taxonomy_automated_label_enabled'),
                  a = e.isTrue('account_taxonomy_automation_opt_in_enabled')
                if (t && a) {
                  var n = c.props.managingAccount
                    ? '/settings/account/automation'
                    : '/settings/your_twitter_data/account'
                  return g.a.createElement(he.a, {
                    description: Fe,
                    label: Ne,
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
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return g.a.createElement(
                    de.c,
                    { namespace: We },
                    g.a.createElement(
                      se.a,
                      null,
                      g.a.createElement(
                        me.a,
                        { location: a, title: ge },
                        g.a.createElement(ue.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(Ve, 'contextType', Ee.a)
      t.default = Object(fe.a)(le(Ve))
    },
    Fcaw: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return p
      }),
        a.d(t, 'e', function () {
          return E
        }),
        a.d(t, 'c', function () {
          return g
        }),
        a.d(t, 'b', function () {
          return y
        }),
        a.d(t, 'a', function () {
          return v
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        o = a.n(c),
        i = (a('yH/f'), a('oEOe')),
        l = a('iD2S'),
        s = a.n(l),
        u = a('kGix'),
        d = a('Ssj5'),
        m = 'accountTaxonomy',
        b =
          ('rweb/'.concat(m),
          s()({ account_label: { disableStatus: u.a.NONE, fetchStatus: u.a.NONE, managed_label: void 0 } })),
        f = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE',
        })
      d.a.register(
        r()({}, m, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              return o()(
                o()({}, e),
                {},
                { account_label: o()(o()({}, e.account_label), {}, { fetchStatus: u.a.LOADING }) },
              )
            case f.SUCCESS:
              var a, n, r
              return o()(
                o()({}, e),
                {},
                {
                  account_label: o()(
                    o()(
                      {},
                      null == t ||
                        null === (a = t.payload) ||
                        void 0 === a ||
                        null === (n = a.user) ||
                        void 0 === n ||
                        null === (r = n.result) ||
                        void 0 === r
                        ? void 0
                        : r.account_label,
                    ),
                    {},
                    { fetchStatus: u.a.LOADED },
                  ),
                },
              )
            case f.FAILURE:
              return o()(
                o()({}, e),
                {},
                { account_label: o()(o()({}, e.account_label), {}, { fetchStatus: u.a.FAILED }) },
              )
            case h.REQUEST:
              return o()(
                o()({}, e),
                {},
                { account_label: o()(o()({}, e.account_label), {}, { disableStatus: u.a.LOADING }) },
              )
            case h.SUCCESS:
              return o()(
                o()({}, e),
                {},
                { account_label: { managed_label: void 0, fetchStatus: u.a.LOADED, disableStatus: u.a.LOADED } },
              )
            case h.FAILURE:
              return o()(
                o()({}, e),
                {},
                { account_label: o()(o()({}, e.account_label), {}, { disableStatus: u.a.FAILED }) },
              )
            default:
              return e
          }
        }),
      )
      var p = function (e) {
          var t, a, n
          return null === (t = e.accountTaxonomy) ||
            void 0 === t ||
            null === (a = t.account_label) ||
            void 0 === a ||
            null === (n = a.managed_label) ||
            void 0 === n
            ? void 0
            : n.owner_screen_name
        },
        E = function (e) {
          var t, a
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (a = t.account_label) || void 0 === a
              ? void 0
              : a.fetchStatus) || u.a.NONE
          )
        },
        g = function (e) {
          var t, a
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (a = t.account_label) || void 0 === a
              ? void 0
              : a.disableStatus) || u.a.NONE
          )
        },
        y = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(i.b)(t, { request: r.AccountTaxonomy.fetchUserAccountLabel, params: { userId: e } })({
              actionTypes: f,
              context: 'FETCH_USER_ACCOUNT_LABEL',
            })
          }
        },
        v = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(i.b)(e, { request: n.AccountTaxonomy.disableUserAccountLabel, params: {} })({
              actionTypes: h,
              context: 'DISABLE_USER_ACCOUNT_LABEL',
            })
          }
        }
    },
    NyKK: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return p
      }),
        a.d(t, 'a', function () {
          return E
        }),
        a.d(t, 'f', function () {
          return y
        }),
        a.d(t, 'g', function () {
          return v
        }),
        a.d(t, 'h', function () {
          return _
        }),
        a.d(t, 'd', function () {
          return S
        }),
        a.d(t, 'c', function () {
          return A
        }),
        a.d(t, 'e', function () {
          return w
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('RhWx'),
        o = a.n(c),
        i = a('yiKp'),
        l = a.n(i),
        s = (a('yH/f'), a('LW0h'), a('7x/C'), a('2G9S'), a('kGix')),
        u = a('Ssj5'),
        d = a('oEOe'),
        m = 'userData',
        b = 'rweb/'.concat(m),
        f = Object(d.a)(b, 'FETCH_DOWNLOADS'),
        h = Object(d.a)(b, 'CREATE_DOWNLOAD'),
        p = Object.freeze({
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
        E = [p.NEW, p.INPROGRESS, p.INPROGRESS_ASYNC, p.ZIPPING, p.PUBLISHING, p.NOTIFYING],
        g = { fetchStatus: s.a.None, downloads: { all: [], nonFailed: [] } }
      u.a.register(
        r()({}, m, function () {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            a = arguments.length > 1 ? arguments[1] : void 0
          switch (a.type) {
            case f.SUCCESS:
              var n = a.payload || [],
                r = n.filter(function (e) {
                  return 'FAILED' !== e.status
                })
              return l()(
                l()({}, t),
                {},
                { fetchStatus: s.a.LOADED, downloads: l()(l()({}, t.downloads), {}, { all: n, nonFailed: r }) },
              )
            case f.REQUEST:
              return l()(l()({}, t), {}, { fetchStatus: s.a.LOADING })
            case f.FAILURE:
              return l()(l()({}, t), {}, { error: a.payload, fetchStatus: s.a.FAILED })
            case h.SUCCESS:
              return l()(
                l()({}, t),
                {},
                {
                  downloads: l()(
                    l()({}, t.downloads),
                    {},
                    { nonFailed: (e = [{ status: 'INPROGRESS' }]).concat.apply(e, o()(t.downloads.nonFailed)) },
                  ),
                },
              )
            case h.FAILURE:
              return l()(l()({}, t), {}, { fetchStatus: s.a.NONE })
            default:
              return t
          }
        }),
      )
      var y = function (e) {
          return e.userData.downloads
        },
        v = function (e) {
          return e.userData.fetchStatus
        },
        _ = function (e) {
          var t
          return 503 === (null === (t = e.userData.error) || void 0 === t ? void 0 : t.status)
        },
        S = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(d.b)(e, { request: n.UserData.fetchDownloads })({
              actionTypes: f,
              context: 'FETCH_DOWNLOADS',
            })
          }
        },
        A = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(d.b)(e, { request: n.UserData.createDataDownload })({
              actionTypes: h,
              context: 'CREATE_DOWNLOAD',
            })
          }
        },
        w = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(d.d)(t, { params: e, request: r.UserData.markDataAsDownloaded })('MARK_DATA_AS_DOWNLOADED')
          }
        }
    },
    OySi: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return h
      }),
        a.d(t, 'a', function () {
          return p
        })
      var n = a('97Jx'),
        r = a.n(n),
        c = a('m3Bd'),
        o = a.n(c),
        i = (a('hBvt'), a('ERkP')),
        l = a.n(i),
        s = a('rHpw'),
        u = a('csss'),
        d = ['Icon'],
        m = ['link'],
        b = function (e) {
          return l.a.createElement(e.Icon, { style: f.thumbnail })
        },
        f = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function h(e) {
        var t = e.Icon,
          a = o()(e, d)
        return l.a.createElement(
          u.a,
          r()({}, a, { thumbnail: l.a.createElement(b, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function p(e) {
        e.link
        var t = o()(e, m)
        return l.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
      }
    },
    QoYZ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ArchiveUnavailable', function () {
          return X
        }),
        a.d(t, 'YourTwitterData', function () {
          return J
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = (a('yH/f'), a('vrRf'), a('1t7P'), a('jQ/y'), a('ERkP')),
        o = a.n(c),
        i = a('v6aA'),
        l = a('1YZw'),
        s = a('NyKK'),
        u = a('rxPX'),
        d = a('0KEI'),
        m = Object(u.a)()
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
        b = a('fs1G'),
        f = a('yoO3'),
        h = a('7JQg'),
        p = a('7FtF'),
        E = a('rHpw').a.create(function (e) {
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
        g = a('ClNT'),
        y = a('MWbm'),
        v = a('t62R'),
        _ = a('0yYu'),
        S = a('3Ohe'),
        A = a('RKmr'),
        w = a('/yvb'),
        L = a('6vad'),
        C = a('csss'),
        I = a('3XMw'),
        O = a.n(I),
        x = O.a.f56af9cc,
        N = O.a.cce24bf3,
        T = O.a.d6eb9b9a,
        k = O.a.d2fb334b,
        D = O.a.b708417b,
        R = O.a.jbf5843d,
        F = O.a.ea886c6e,
        U = O.a.cdcc2ad3,
        P = O.a.dbeff879,
        M = O.a.ce5d2c46,
        z = O.a.b2ed92c3,
        B = O.a.gee8110d,
        H = O.a.f56af9cc,
        j = O.a.hb02ed28,
        G = O.a.c2254083,
        K = O.a.f62d1d9d,
        W = O.a.i859a9d3,
        q = o.a.createElement(
          O.a.I18NFormatMessage,
          { $i18n: 'ba13ef22' },
          o.a.createElement(
            v.b,
            {
              link: 'https://help.twitter.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true',
            },
            O.a.c9c1ebbb,
          ),
        ),
        V = O.a.b221ca4b,
        Y = { page: 'settings', section: 'account', component: 'download_your_data' },
        Q = Object.freeze(r()(r()({}, s.b), {}, { UNAVAILABLE: 'UNAVAILABLE' })),
        X = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(_.a, null),
            o.a.createElement(S.a, { label: H, withBottomBorder: !0 }),
            o.a.createElement(A.a, { description: j }),
          )
        }
      function J(e) {
        var t = o.a.useContext(i.a).loggedInUserId,
          a = e.addToast,
          n = e.analytics,
          r = e.createDataDownload,
          c = e.createLocalApiErrorHandler,
          l = e.downloads,
          u = e.fetchDownloads,
          d = e.fetchStatus,
          m = e.isUserDataUnavailable,
          S = e.location,
          I = !!t,
          O = !I,
          H = m,
          J = !m && I
        function Z() {
          n.scribe({ element: 'request_button', action: 'click' }),
            r()
              .then(function () {
                return a({ text: V })
              })
              .catch(c())
        }
        var $ = function () {
          var e = l.all,
            t = l.nonFailed,
            a = t.length ? t[0].status : e.length ? s.b.FAILED : s.b.NONE,
            n = !!t.length && void 0 !== t[0].urls,
            r = s.a.indexOf(a) >= 0,
            c = n && a === s.b.COMPLETE,
            i = a === s.b.FAILED,
            u = a === s.b.COMPLETE && !n,
            d = u ? Q.UNAVAILABLE : a,
            m = a === s.b.NONE ? Z : b.a,
            f = function () {
              return o.a.createElement(
                w.a,
                {
                  disabled: r || i || u,
                  link: c ? '/settings/your_twitter_data/data' : void 0,
                  onPress: m,
                  size: 'small',
                  style: E.narrowButton,
                  type: 'brandFilled',
                },
                (function (e) {
                  switch (e) {
                    case Q.NONE:
                      return P
                    case Q.FAILED:
                      return U
                    case Q.COMPLETE:
                      return B
                    case Q.UNAVAILABLE:
                      return M
                    default:
                      return z
                  }
                })(d),
              )
            }
          return o.a.createElement(
            y.a,
            { style: [E.narrowButtonRow, E.labelContainer] },
            o.a.createElement(
              y.a,
              { style: E.description },
              o.a.createElement(v.b, null, k),
              o.a.createElement(
                v.b,
                { color: 'gray700', style: [E.errorText, E.helpText] },
                (function (e) {
                  switch (e) {
                    case Q.NONE:
                      return null
                    case Q.FAILED:
                      return q
                    case Q.COMPLETE:
                      return K
                    case Q.UNAVAILABLE:
                      return j
                    default:
                      return G
                  }
                })(d),
              ),
            ),
            o.a.createElement(y.a, { style: E.noShrink }, o.a.createElement(f, null)),
          )
        }
        return o.a.createElement(
          h.c,
          { namespace: Y },
          o.a.createElement(
            f.a,
            null,
            o.a.createElement(
              p.a,
              { location: S, screenType: 'secondaryDetail', title: x },
              o.a.createElement(A.a, { description: N }),
              J
                ? o.a.createElement(g.a, {
                    fetch: function () {
                      return u()
                    },
                    fetchStatus: d,
                    renderChildren: function () {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          y.a,
                          null,
                          o.a.createElement(L.b, { text: T }),
                          o.a.createElement(A.a, {
                            description: D,
                            learnMoreLabel: W,
                            learnMoreLink: 'https://help.twitter.com/managing-your-account/accessing-your-twitter-data',
                          }),
                          $(),
                        ),
                        o.a.createElement(_.a, null),
                        o.a.createElement(
                          y.a,
                          null,
                          o.a.createElement(L.b, { text: R }),
                          o.a.createElement(C.a, {
                            label: F,
                            link: { external: !0, pathname: 'https://pscp.tv/account/your-data' },
                          }),
                        ),
                      )
                    },
                  })
                : null,
              O && o.a.createElement(C.a, { label: B, link: '/settings/your_twitter_data/request_data' }),
              H && o.a.createElement(X, null),
            ),
          ),
        )
      }
      var Z = m(J)
      t.default = Z
    },
    'S/HT': function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return b
      }),
        a.d(t, 'b', function () {
          return f
        }),
        a.d(t, 'a', function () {
          return h
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        o = a.n(c),
        i = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('849X'), a('TJCb'), a('kGix')),
        l = a('Ssj5'),
        s = 'countryNames',
        u = { fetchStatus: i.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(s, '_REQUEST'), FAILURE: ''.concat(s, '_FAILURE'), SUCCESS: ''.concat(s, '_SUCCESS') },
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return o()(o()({}, e), {}, { fetchStatus: i.a.LOADING })
            case d.FAILURE:
              return o()(o()({}, e), {}, { fetchStatus: i.a.NONE })
            case d.SUCCESS:
              return o()(o()({}, e), {}, { countries: t.payload, fetchStatus: i.a.LOADED })
            default:
              return e
          }
        }
      l.a.register(r()({}, s, m))
      var b = function (e) {
          return e.countryNames.countries
        },
        f = function (e, t) {
          var a = t && t.toUpperCase()
          return e.countryNames.countries[a]
        },
        h = function e(t) {
          return function (n, r) {
            return r().countryNames.fetchStatus === i.a.LOADED
              ? Promise.resolve()
              : (n({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return a.e(253).then(a.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return a.e(254).then(a.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return a.e(255).then(a.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return a.e(256).then(a.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return a.e(257).then(a.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return a.e(258).then(a.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return a.e(259).then(a.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return a.e(260).then(a.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return a.e(262).then(a.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return a.e(261).then(a.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return a.e(263).then(a.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return a.e(264).then(a.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return a.e(265).then(a.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return a.e(266).then(a.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return a.e(267).then(a.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return a.e(268).then(a.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return a.e(269).then(a.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return a.e(270).then(a.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return a.e(271).then(a.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return a.e(272).then(a.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return a.e(273).then(a.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return a.e(274).then(a.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return a.e(275).then(a.t.bind(null, '9fGX', 3))
                    case 'id':
                      return a.e(276).then(a.t.bind(null, 'elf3', 3))
                    case 'it':
                      return a.e(277).then(a.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return a.e(278).then(a.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return a.e(279).then(a.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return a.e(280).then(a.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return a.e(281).then(a.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return a.e(282).then(a.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return a.e(283).then(a.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return a.e(284).then(a.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return a.e(285).then(a.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return a.e(286).then(a.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return a.e(287).then(a.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return a.e(288).then(a.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return a.e(289).then(a.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return a.e(290).then(a.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return a.e(291).then(a.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return a.e(292).then(a.t.bind(null, '8KkY', 3))
                    case 'th':
                      return a.e(293).then(a.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return a.e(294).then(a.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return a.e(295).then(a.t.bind(null, '62bs', 3))
                    case 'ur':
                      return a.e(296).then(a.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return a.e(298).then(a.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return a.e(297).then(a.t.bind(null, 'YXaK', 3))
                    default:
                      return Promise.reject(
                        new Error('Tried to import country names for unknown language key: '.concat(e)),
                      )
                  }
                })(t)
                  .then(function (e) {
                    var a = e.main[t].localeDisplayNames.territories
                    n({ type: d.SUCCESS, payload: a })
                  })
                  .catch(function () {
                    n('en' === t ? { type: d.FAILURE } : e('en'))
                  }))
          }
        }
    },
    UAMM: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('97Jx'),
        r = a.n(n),
        c = (a('z84I'), a('hBvt'), a('ERkP')),
        o = a.n(c),
        i = a('3XMw'),
        l = a.n(i),
        s = a('yoO3'),
        u = a('7JQg'),
        d = a('RKmr'),
        m = a('7FtF'),
        b = a('OySi'),
        f = 'notificationsScreen',
        h = a('MWbm'),
        p = a('+RfI'),
        E = a('yiKp'),
        g = a.n(E),
        y = a('Lsrn'),
        v = a('k/Ka'),
        _ = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(v.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [y.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      _.metadata = { width: 24, height: 24 }
      var S = _,
        A = l.a.eb75875d,
        w = l.a.a3f22d8d,
        L = l.a.i647fb03,
        C = l.a.ef1b5cbb,
        I = l.a.bcd81cab,
        O = l.a.da867c58,
        x = { page: 'settings', section: 'notification' },
        N = [
          { description: C, label: L, link: '/settings/notifications/filters', Icon: p.a },
          { description: O, label: I, link: '/settings/notifications/preferences', Icon: S },
        ]
      t.default = function (e) {
        var t = e.location
        return o.a.createElement(
          u.c,
          { namespace: x },
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(
              m.a,
              { location: t, screenType: 'primaryDetail', title: A },
              o.a.createElement(
                h.a,
                { testID: f },
                o.a.createElement(d.a, { description: w }),
                N.map(function (e) {
                  return o.a.createElement(b.b, r()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    nnZo: function (e, t, a) {
      'use strict'
      a.r(t)
      a('z84I'), a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('v6aA'),
        o = a('3XMw'),
        i = a.n(o),
        l = a('yoO3'),
        s = a('7JQg'),
        u = a('7FtF'),
        d = a('OySi'),
        m = 'accountScreen',
        b = a('MWbm'),
        f = a('boUI'),
        h = a('yiKp'),
        p = a.n(h),
        E = a('Lsrn'),
        g = a('k/Ka'),
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            p()(
              p()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.307 22.163c-1.68 0-3.36-.64-4.638-1.918-2.56-2.558-2.56-6.72 0-9.276 1.51-1.512 3.62-2.177 5.705-1.835l7.073-7.078c.147-.148.35-.226.56-.22l4.35.17c.39.017.704.33.72.72l.17 4.35c.008.2-.064.396-.2.542-.14.145-.33.23-.53.236l-2.135.056-.056 2.136c-.01.4-.332.72-.73.73l-2.136.056-.055 2.137c-.005.193-.084.376-.22.512l-1.362 1.362c.23 1.985-.455 3.98-1.877 5.402-1.278 1.277-2.958 1.917-4.64 1.917zm-.01-11.617c-1.324 0-2.603.52-3.566 1.483C2.76 14 2.76 17.21 4.73 19.183c1.973 1.973 5.183 1.973 7.156 0 1.17-1.17 1.694-2.843 1.402-4.474-.043-.24.034-.488.208-.662l1.417-1.417.066-2.548c.01-.4.33-.72.73-.73l2.135-.056.056-2.136c.012-.4.333-.72.73-.73l2.09-.055-.115-2.896-3.327-.13-7.125 7.128c-.183.183-.452.26-.7.2-.384-.09-.772-.132-1.155-.132zm7.358 2.404h.01-.01z',
              }),
              r.a.createElement('path', {
                d: 'M8.308 18.132c-.647 0-1.294-.246-1.787-.738-.983-.985-.983-2.588 0-3.573.988-.984 2.59-.982 3.574 0 .984.986.984 2.59 0 3.574-.492.492-1.14.738-1.786.738zm0-3.55c-.264 0-.526.1-.727.3-.398.4-.398 1.05 0 1.45.4.4 1.052.402 1.453 0 .4-.4.4-1.05 0-1.45-.2-.2-.462-.3-.725-.3z',
              }),
            ),
          )
        }
      y.metadata = { width: 24, height: 24 }
      var v = y,
        _ = a('89Im'),
        S = a('wz7L'),
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            p()(
              p()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M16.75 2.36c-2.34 0-3.92 1.62-4.74 2.8-.83-1.18-2.41-2.8-4.75-2.8-2.93 0-5.51 2.74-5.51 5.86 0 6.51 7.61 13.37 10.27 13.42 2.63-.05 10.23-6.91 10.23-13.42 0-3.12-2.57-5.86-5.5-5.86zm-4.73 17.78c-1.52-.02-8.77-6.03-8.77-11.92 0-2.33 1.88-4.36 4.01-4.36 2.1 0 3.45 1.97 3.9 2.74v.01L9.02 10.5c-.11.2-.12.45-.03.66.1.21.29.37.51.43l2.72.66-2.16 3.15c-.24.34-.15.81.19 1.05.13.08.28.13.43.13.23 0 .47-.12.62-.33l2.77-4.04c.13-.21.17-.47.08-.7-.09-.23-.28-.4-.52-.46l-2.82-.69L12.7 6.9s1.46-3.04 4.05-3.04c2.13 0 4 2.03 4 4.36 0 5.89-7.24 11.9-8.73 11.92z',
              }),
            ),
          )
        }
      A.metadata = { width: 24, height: 24 }
      var w = A,
        L = a('Nh1N'),
        C = a('RKmr'),
        I = a('4zmP'),
        O = a('rHpw'),
        x = i.a.hc73f03f,
        N = i.a.d3a2bde7,
        T = i.a.f15bfdb3,
        k = i.a.idca4741,
        D = i.a.b6ded35d,
        R = i.a.ab1f7eef,
        F = i.a.f56af9cc,
        U = i.a.cce24bf3,
        P = i.a.d13e165c,
        M = i.a.d1e97fdf,
        z = i.a.hfb92b14,
        B = i.a.i203df96,
        H = { page: 'settings', section: 'account' },
        j = i.a.j0b9ec86,
        G = i.a.eaf134dd,
        K = { label: i.a.iacafa08, link: '/settings/security_and_account_access' },
        W = O.a.create(function (e) {
          return {
            callout: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginBottom: e.spacesPx.space8,
              width: 'auto',
            },
          }
        })
      t.default = function (e) {
        var t = e.location,
          a = r.a.useContext(c.a).featureSwitches.isTrue('responsive_web_delegate_enabled'),
          n = r.a.useMemo(
            function () {
              return (function (e) {
                return [
                  { description: k, label: T, link: '/settings/your_twitter_data/account', Icon: f.a },
                  { description: D, label: R, link: '/settings/password', Icon: v },
                  { description: U, label: F, link: '/settings/download_your_data', Icon: _.a },
                  { description: M, disabled: e, label: P, link: '/settings/teams', Icon: S.a },
                  { description: B, label: z, link: '/settings/deactivate', Icon: w },
                ]
              })(a)
            },
            [a],
          )
        return r.a.createElement(
          s.c,
          { namespace: H },
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, screenType: 'primaryDetail', title: x },
              r.a.createElement(
                b.a,
                { testID: m },
                r.a.createElement(C.a, { description: N }),
                n.map(function (e) {
                  return r.a.createElement(
                    b.a,
                    { key: e.label },
                    r.a.createElement(d.b, e),
                    e.disabled &&
                      '/settings/teams' === e.link &&
                      r.a.createElement(I.a, { Icon: L.a, action: K, headline: j, style: W.callout, text: G }),
                  )
                }),
              ),
            ),
          ),
        )
      }
    },
    wz7L: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        o = a.n(c),
        i = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
