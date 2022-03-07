;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    '5emT': function (e, t, a) {
      'use strict'
      var i = a('yiKp'),
        n = a.n(i),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              l.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '5kR0': function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:%[0-9a-f]{2})/i
      ;(t.default = i), (e.exports = t.default)
    },
    '6sfk': function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = (0, i(a('AYyr')).default)('^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$', 'i')
      ;(t.default = n), (e.exports = t.default)
    },
    '8Y9H': function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('kfbJ')),
        l = i(a('5kR0')),
        o = i(a('Flng')),
        c = (0, n.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])',
          { validateUrlUnreserved: r.default, validateUrlPctEncoded: l.default, validateUrlSubDelims: o.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    Flng: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /[!$&'()*+,;=]/i
      ;(t.default = i), (e.exports = t.default)
    },
    H1lm: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('W9cO')),
        l = i(a('vXsr')),
        o = i(a('oAj9')),
        c = (0, n.default)(
          /(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i,
          {
            validateUrlSubDomainSegment: o.default,
            validateUrlDomainSegment: r.default,
            validateUrlDomainTld: l.default,
          },
        )
      ;(t.default = c), (e.exports = t.default)
    },
    IM13: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('8Y9H')),
        l = (0, n.default)(/(#{validateUrlPchar}|\/|\?)*/i, { validateUrlPchar: r.default })
      ;(t.default = l), (e.exports = t.default)
    },
    IbdM: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:[a-z][a-z0-9+\-.]*)/i
      ;(t.default = i), (e.exports = t.default)
    },
    NRlp: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i
      ;(t.default = i), (e.exports = t.default)
    },
    'NoO/': function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('mmgW')),
        l = i(a('eWSo')),
        o = (0, n.default)(
          '(?:#{validateUrlIpv4}|#{validateUrlIpv6})',
          { validateUrlIpv4: r.default, validateUrlIpv6: l.default },
          'i',
        )
      ;(t.default = o), (e.exports = t.default)
    },
    'OVD+': function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('8Y9H')),
        l = (0, n.default)(/(\/#{validateUrlPchar}*)*/i, { validateUrlPchar: r.default })
      ;(t.default = l), (e.exports = t.default)
    },
    'Qp/W': function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      a('iKE+'),
        a('KqXw'),
        a('DZ+c'),
        a('WNMA'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, a) {
          null == t && (t = !0)
          null == a && (a = !0)
          if (!e) return !1
          var i = e.match(s.default)
          if (!i || i[0] !== e) return !1
          var E = i[1],
            p = i[2],
            b = i[3],
            m = i[4],
            I = i[5]
          if (
            !(
              (!a || (u(E, c.default) && E.match(/^https?$/i))) &&
              u(b, l.default) &&
              u(m, o.default, !0) &&
              u(I, r.default, !0)
            )
          )
            return !1
          return (t && u(p, d.default)) || (!t && u(p, n.default))
        })
      var n = i(a('ta7H')),
        r = i(a('kAdf')),
        l = i(a('OVD+')),
        o = i(a('IM13')),
        c = i(a('IbdM')),
        s = i(a('6sfk')),
        d = i(a('b1+5'))
      function u(e, t, a) {
        return a ? !e || (e.match(t) && RegExp['$&'] === e) : 'string' == typeof e && e.match(t) && RegExp['$&'] === e
      }
      e.exports = t.default
    },
    T8pk: function (e, t, a) {
      'use strict'
      var i = a('yiKp'),
        n = a.n(i),
        r = a('ERkP'),
        l = a.n(r),
        o = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            n()(
              n()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
              }),
              l.a.createElement('path', {
                d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Umjq: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /[0-9]{1,5}/
      ;(t.default = i), (e.exports = t.default)
    },
    'W7+t': function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = i), (e.exports = t.default)
    },
    W9cO: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i
      ;(t.default = i), (e.exports = t.default)
    },
    Wqil: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('H1lm')),
        l = i(a('NoO/')),
        o = (0, n.default)(
          '(?:#{validateUrlIp}|#{validateUrlDomain})',
          { validateUrlIp: l.default, validateUrlDomain: r.default },
          'i',
        )
      ;(t.default = o), (e.exports = t.default)
    },
    'b1+5': function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('fl4i')),
        l = i(a('ccgC')),
        o = i(a('Umjq')),
        c = (0, n.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: r.default, validateUrlUnicodeHost: l.default, validateUrlPort: o.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    ccgC: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('NoO/')),
        l = i(a('je27')),
        o = (0, n.default)(
          '(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})',
          { validateUrlIp: r.default, validateUrlUnicodeDomain: l.default },
          'i',
        )
      ;(t.default = o), (e.exports = t.default)
    },
    eWSo: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:\[[a-f0-9:\.]+\])/i
      ;(t.default = i), (e.exports = t.default)
    },
    fl4i: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('kfbJ')),
        l = i(a('5kR0')),
        o = i(a('Flng')),
        c = (0, n.default)(
          '(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*',
          { validateUrlUnreserved: r.default, validateUrlPctEncoded: l.default, validateUrlSubDelims: o.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    iQBX: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'renderNullHeader', function () {
          return xd
        }),
        a.d(t, 'AccountVerification', function () {
          return Dd
        })
      var i,
        n,
        r,
        l,
        o,
        c,
        s,
        d,
        u,
        E,
        p,
        b,
        m,
        I,
        T,
        f,
        N,
        h,
        _,
        y,
        v,
        A,
        C,
        S,
        g,
        R,
        O,
        L,
        F,
        x = a('97Jx'),
        D = a.n(x),
        M = a('yiKp'),
        U = a.n(M),
        P = a('VrFO'),
        k = a.n(P),
        w = a('Y9Ll'),
        G = a.n(w),
        W = a('1Pcy'),
        B = a.n(W),
        V = a('5Yy7'),
        Y = a.n(V),
        K = a('2VqO'),
        j = a.n(K),
        H = a('KEM+'),
        z = a.n(H),
        q =
          (a('2G9S'),
          a('5BYb'),
          a('7x/C'),
          a('lTEL'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('ho0z'),
          a('uFXj'),
          a('ERkP')),
        $ = a.n(q),
        J = (a('hBpG'), a('849X'), a('TJCb'), a('1t7P'), a('jQ/y'), a('3XMw')),
        Z = a.n(J),
        Q = a('cmUU'),
        X = a('fs1G'),
        ee = a('aITJ'),
        te = a('QJRq'),
        ae = Z.a.d4f88600,
        ie = Z.a.b192ccad,
        ne = Z.a.a0487504,
        re = Z.a.fff7d93c,
        le = Z.a.g969bfad,
        oe = Z.a.gb2f35e4,
        ce = ee.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://settings/account', openInSameFrame: !0 }
          : { pathname: '/settings/account', openInSameFrame: !0 },
        se = ee.b.isTwitterApp()
          ? { external: !0, pathname: 'twitter://profiles/edit', openInSameFrame: !0 }
          : { external: !0, pathname: '/settings/profile', openInSameFrame: !0 },
        de = function (e) {
          var t,
            a = e.accountViolations,
            i = [te.r.PROFILE_COMPLETION, te.r.ACCOUNT_SECURITY],
            n =
              ((t = {}),
              z()(t, te.r.PROFILE_COMPLETION, { actionLink: se, buttonText: re, description: oe, title: le }),
              z()(t, te.r.ACCOUNT_SECURITY, { actionLink: ce, buttonText: ae, description: ne, title: ie }),
              t),
            r = i.find(function (e) {
              var t
              return null === (t = a.violations) || void 0 === t
                ? void 0
                : t.some(function (t) {
                    return t.violation_category === e && t.violation_status === te.s.OUT_OF_COMPLIANCE
                  })
            })
          if (void 0 === r) throw new Error('cannot render Account violations without valid violations')
          var l = n[r],
            o = l.actionLink,
            c = l.buttonText,
            s = l.description,
            d = l.title
          return $.a.createElement(Q.a, {
            actionLabel: c,
            actionLink: o,
            graphicDisplayMode: 'none',
            headline: d,
            onAction: X.a,
            onClose: X.a,
            subtext: s,
            withCloseButton: !1,
          })
        },
        ue = a('ddV6'),
        Ee = a.n(ue),
        pe =
          (a('KqXw'),
          a('Ysgh'),
          a('z84I'),
          a('LW0h'),
          a('MvUL'),
          a('7xRU'),
          a('iKE+'),
          a('1LXv'),
          a('e/gN'),
          a('DZ+c'),
          a('3uku'),
          a('+/5o')),
        be = a('rHpw'),
        me = be.a.create(function (e) {
          return {
            root: {
              height: 'calc(600px - '.concat(e.componentDimensions.appBarHeight, ')'),
              paddingBottom: e.spaces.space48,
            },
            rootNoAppBar: { height: 600, paddingBottom: e.spaces.space48 },
            appBarOffset: { marginTop: 'calc(-0.5 * '.concat(e.componentDimensions.appBarHeight, ')') },
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            buttonFixed: { marginTop: e.spaces.space16, marginBottom: e.borderWidths.medium },
            buttonPadded: { marginTop: e.spaces.space32, marginBottom: e.borderWidths.medium },
            checkbox: { alignItems: 'flex-start' },
            checkboxContainer: {
              flexDirection: 'row-reverse',
              flexWrap: 'nowrap',
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
            checkboxText: { flexShrink: 1, marginRight: e.spaces.space8 },
            container: { flex: 1, marginHorizontal: 'calc(2 * '.concat(e.spaces.space48, ')') },
            contentContainer: { paddingVertical: e.spaces.space16 },
            fixedContainer: { flexGrow: 0 },
            header: { paddingVertical: e.spaces.space12 },
            largeBannerContainer: { flex: 1 },
            listItem: {
              justifyContent: 'space-between',
              minHeight: 'calc('
                .concat(be.a.theme.lineHeights.headline1, ' + 2 * ')
                .concat(e.componentDimensions.gutterVertical, ')'),
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            narrowContainer: { marginHorizontal: e.spaces.space16 },
            scrollableContainer: { flexGrow: 1, flexShrink: 1, flexBasis: 0, overflowY: 'auto' },
            subheading: { paddingTop: e.spaces.space24 },
            subtext: { paddingTop: e.spaces.space4 },
            text: { paddingTop: e.spaces.space12 },
            topPaddingSmall: { paddingTop: e.spaces.space4 },
            verticalCenter: { justifyContent: 'center' },
          }
        }),
        Ie = a('MWbm'),
        Te = a('t62R'),
        fe = a('/yvb'),
        Ne = a('w6IS'),
        he = a('tn7R'),
        _e = Z.a.j24c37b2,
        ye = Z.a.c1df579e,
        ve = Z.a.ge483f9e,
        Ae = Z.a.be03ecca,
        Ce = Z.a.a411926a,
        Se = Z.a.c69a40de,
        ge = Z.a.c83a1661,
        Re = {
          '10minutemail': [''],
          aol: ['aol.com'],
          gmail: ['googlemail.com', 'gmail.com'],
          gmx: ['gmx.com'],
          icloud: ['icloud.com', 'me.com', 'mac.com'],
          'mail.com': ['mail.com'],
          outlook: ['outlook.com'],
          protonmail: ['protonmail.com', 'pm.me'],
          sendinblue: ['sendinblue.com'],
          tutanota: ['tutanota.com'],
          yahoo: ['yahoo.com'],
          yandex: ['yandex.com'],
          zoho: ['zoho.com'],
        },
        Oe = function (e) {
          var t,
            a,
            i = e.accountSettingsLink,
            n = e.email,
            r = e.handleOnClickInvalid,
            l = e.handleOnClickValid,
            o = e.isNarrow,
            c = 0 === n.length
          if (
            c ||
            (function (e) {
              var t = e.split('@'),
                a = Ee()(t, 2)[1],
                i = Object(Ne.a)(Object(he.a)(Re))
                  .filter(function (e) {
                    return e
                  })
                  .map(function (e) {
                    return e.replace('.', '\\.')
                  }),
                n = ''.concat(i.join('|'))
              return new RegExp(n, 'i').test(a)
            })(n)
          ) {
            var s = c ? Se : ge,
              d = c
                ? (function (e) {
                    return $.a.createElement(
                      Z.a.I18NFormatMessage,
                      { $i18n: 'jf9308af' },
                      $.a.createElement(Te.b, { link: e }, Z.a.e1e878ed),
                    )
                  })(i)
                : (function (e) {
                    return $.a.createElement(
                      Z.a.I18NFormatMessage,
                      { $i18n: 'e9976a40' },
                      $.a.createElement(Te.b, { link: e }, Z.a.ced76119),
                    )
                  })(i)
            return $.a.createElement(Q.a, {
              actionLabel: _e,
              graphicDisplayMode: 'none',
              headline: s,
              onAction: r,
              onClose: X.a,
              subtext: d,
              withCloseButton: !1,
            })
          }
          return $.a.createElement(
            Ie.a,
            { style: [me.container, o && me.narrowContainer] },
            $.a.createElement(
              Te.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: pe.b,
                size: 'title4',
                style: me.header,
                weight: 'heavy',
              },
              Ce,
            ),
            $.a.createElement(
              Ie.a,
              { style: me.scrollableContainer },
              $.a.createElement(Te.b, { color: 'gray700' }, ve),
              ((a = Ae), $.a.createElement(Te.b, { size: 'subtext2', style: me.subheading, weight: 'heavy' }, a)),
              ((t = n), $.a.createElement(Te.b, { style: me.subtext }, t)),
            ),
            $.a.createElement(fe.a, { onClick: l, style: me.buttonFixed, type: 'brandFilled' }, ye),
          )
        },
        Le = a('kGix'),
        Fe = a('v//M'),
        xe = a('jHSc'),
        De = (a('yH/f'), a.p + 'verification-form-start.2817b0c5.png'),
        Me = a.p + 'verification-form-start-large.7e335815.png',
        Ue = a.p + 'verification-form-loading.5bb26665.png',
        Pe = a.p + 'verification-form-loading-large.801f2ee5.png',
        ke = a.p + 'verification-form-sent.ac5bd485.png',
        we = a.p + 'verification-form-sent-large.555a7815.png',
        Ge = a('TIdA'),
        We = a('A91F'),
        Be = 600,
        Ve = 1200,
        Ye = Object.freeze({ START: 'start', LOADING: 'loading', SENT: 'sent' }),
        Ke =
          ((i = {}),
          z()(i, Ye.START, {
            aspectRatio: 2,
            default: De,
            variants: [
              { uri: De, width: Be, height: 300 },
              { uri: Me, width: Ve, height: 600 },
            ],
          }),
          z()(i, Ye.LOADING, {
            aspectRatio: 1.5,
            default: Ue,
            variants: [
              { uri: Ue, width: Be, height: 400 },
              { uri: Pe, width: Ve, height: 800 },
            ],
          }),
          z()(i, Ye.SENT, {
            aspectRatio: 2,
            default: ke,
            variants: [
              { uri: ke, width: Be, height: 300 },
              { uri: we, width: Ve, height: 600 },
            ],
          }),
          i),
        je = be.a.create(function () {
          return { narrowBanner: { flex: 1 } }
        }),
        He = function (e) {
          var t = e.isNarrow,
            a = e.type,
            i = Ke[a],
            n = $.a.createElement(Ge.a, {
              accessibilityLabel: '',
              aspectMode: t ? We.a.COVER : We.a.exact(i.aspectRatio),
              customVariants: i.variants,
              image: i.default,
            })
          return t ? $.a.createElement(Ie.a, { style: je.narrowBanner }, n) : n
        },
        ze = Z.a.j163be32,
        qe = Z.a.gaf821c8,
        $e = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e5b4cc43' },
          $.a.createElement(
            Te.b,
            { link: 'https://help.twitter.com/managing-your-account/twitter-verified-accounts' },
            Z.a.e1ac0f9a,
          ),
        ),
        Je = function (e) {
          var t = e.handleOnClick,
            a = e.isNarrow
          return $.a.createElement(
            Ie.a,
            { style: me.largeBannerContainer },
            $.a.createElement(He, { isNarrow: a, type: Ye.START }),
            $.a.createElement(
              Ie.a,
              { style: [me.container, me.verticalCenter, a && me.narrowContainer] },
              $.a.createElement(
                Te.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: pe.b,
                  size: 'title4',
                  style: me.header,
                  weight: 'heavy',
                },
                qe,
              ),
              $.a.createElement(Te.b, { color: 'gray700' }, $e),
              $.a.createElement(fe.a, { onClick: t, style: me.buttonPadded, type: 'brandFilled' }, ze),
            ),
          )
        },
        Ze = (a('tQbP'), a('+KXO'), a('WNMA'), a('rxPX')),
        Qe = a('ZyHq'),
        Xe = Object(Ze.a)()
          .propsFromState(function () {
            return { documentFormats: Qe.A, idCountry: Qe.G, idType: Qe.I }
          })
          .propsFromActions(function () {
            return { setNextFlow: Qe.V }
          })
          .withAnalytics(),
        et = Object(Ze.a)().propsFromActions(function () {
          return { setNextFlow: Qe.V }
        }),
        tt = a('iySH'),
        at = a('htQn'),
        it = be.a.create(function (e) {
          return {
            contentContainer: { alignItems: 'center', flexDirection: 'row', flexGrow: 1 },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
          }
        }),
        nt = et(function (e) {
          var t = e.button,
            a = void 0 === t ? null : t,
            i = e.description,
            n = e.isNarrow,
            r = e.items,
            l = e.setNextFlow,
            o = e.title
          return $.a.createElement(
            Ie.a,
            { style: [me.container, n && me.narrowContainer] },
            $.a.createElement(
              Te.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: pe.b,
                size: 'title4',
                style: me.header,
                weight: 'heavy',
              },
              o,
            ),
            $.a.createElement(
              Ie.a,
              { style: me.scrollableContainer },
              i && $.a.createElement(Te.b, { color: 'gray700' }, i),
              $.a.createElement(
                Ie.a,
                { accessibilityLabelledBy: pe.b, accessibilityRole: 'group', style: me.contentContainer },
                r.map(function (e, t) {
                  var a = e.description,
                    i = e.disabled,
                    n = void 0 !== i && i,
                    r = e.label,
                    c = e.nextStep
                  return $.a.createElement(
                    at.a,
                    {
                      disabled: n,
                      key: ''.concat(o, '-pivot-').concat(t),
                      onClick: function () {
                        !(function (e) {
                          l(e)
                        })(c)
                      },
                      style: [me.listItem, me.bottomBorder],
                      withInteractiveStyling: !0,
                    },
                    $.a.createElement(
                      Ie.a,
                      { style: it.contentContainer },
                      $.a.createElement(
                        Ie.a,
                        { style: it.content },
                        $.a.createElement(Te.b, null, r),
                        a && $.a.createElement(Te.b, { color: 'gray700', size: 'subtext2' }, a),
                      ),
                      $.a.createElement(tt.a, { style: it.icon }),
                    ),
                  )
                }),
              ),
            ),
            a,
          )
        }),
        rt = nt,
        lt = Z.a.e43425fa,
        ot = Z.a.e43672a0,
        ct = Z.a.b246aa5d,
        st = Z.a.d6fb5877,
        dt = Z.a.b72f97cc,
        ut = Z.a.b2ab6008,
        Et = Z.a.c1df579e,
        pt = function (e, t) {
          return e && t ? e[t].country : st
        },
        bt = function (e, t, a) {
          return e && t && a ? e[t].id_types[a].name : ut
        },
        mt = Xe(function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            i = e.idType,
            n = e.isNarrow,
            r = e.setNextFlow
          return $.a.createElement(rt, {
            button: $.a.createElement(
              fe.a,
              {
                disabled: !(a && i),
                onClick: function () {
                  return r()
                },
                style: me.buttonFixed,
                type: 'brandFilled',
              },
              Et,
            ),
            description: ot,
            isNarrow: n,
            items: [
              { description: pt(t, a), label: ct, nextStep: te.h.ID_COUNTRY_SELECT },
              { description: bt(t, a, i), disabled: !a, label: dt, nextStep: te.h.ID_TYPE_SELECT },
            ],
            title: lt,
          })
        }),
        It = mt,
        Tt = a('1byD'),
        ft = a('6OUF'),
        Nt = Z.a.h9270b1b,
        ht = function (e) {
          var t = e.documentFormats,
            a = e.isNarrow,
            i = e.onCountryClick,
            n = $.a.useState(new RegExp('', 'i')),
            r = Ee()(n, 2),
            l = r[0],
            o = r[1],
            c = $.a.useMemo(
              function () {
                return t
                  ? Object.keys(t).sort(function (e, a) {
                      return t[e].country.localeCompare(t[a].country)
                    })
                  : []
              },
              [t],
            )
          return $.a.createElement(
            Ie.a,
            {
              accessibilityLabelledBy: pe.b,
              accessibilityRole: 'group',
              style: [me.container, a && me.narrowContainer],
            },
            $.a.createElement(
              Ie.a,
              { style: me.fixedContainer },
              $.a.createElement(
                Te.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: pe.b,
                  size: 'title4',
                  style: me.header,
                  weight: 'heavy',
                },
                ct,
              ),
              $.a.createElement(
                Ie.a,
                { style: [me.contentContainer, me.topPaddingSmall] },
                $.a.createElement(ft.a, {
                  Icon: Tt.a,
                  onChange: function (e) {
                    return o(
                      new RegExp(
                        e.target.value.replace(/\W/g, function (e) {
                          return '\\'.concat(e)
                        }),
                        'i',
                      ),
                    )
                  },
                  placeholder: Nt,
                }),
              ),
            ),
            $.a.createElement(
              Ie.a,
              { style: me.scrollableContainer },
              c.map(function (e) {
                return t && t[e].country.match(l)
                  ? $.a.createElement(
                      at.a,
                      {
                        key: e,
                        onClick: function () {
                          return i(e, t[e].country)
                        },
                        style: [me.listItem, me.bottomBorder],
                        withInteractiveStyling: !0,
                      },
                      $.a.createElement(Te.b, null, t[e].country),
                    )
                  : null
              }),
            ),
          )
        },
        _t = function (e) {
          var t = e.documentFormats,
            a = e.idCountry,
            i = e.isNarrow,
            n = e.onTypeClick,
            r = $.a.useMemo(
              function () {
                return t && a
                  ? Object(he.a)(t[a].id_types).sort(function (e, t) {
                      return e.name.localeCompare(t.name)
                    })
                  : []
              },
              [t, a],
            )
          return $.a.createElement(
            Ie.a,
            {
              accessibilityLabelledBy: pe.b,
              accessibilityRole: 'group',
              style: [me.container, i && me.narrowContainer],
            },
            $.a.createElement(
              Ie.a,
              { style: me.fixedContainer },
              $.a.createElement(
                Te.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: pe.b,
                  size: 'title4',
                  style: me.header,
                  weight: 'heavy',
                },
                dt,
              ),
            ),
            $.a.createElement(
              Ie.a,
              { style: [me.contentContainer, me.scrollableContainer, me.topPaddingSmall] },
              r.map(function (e) {
                var t = e.id_type,
                  a = e.name
                return $.a.createElement(
                  at.a,
                  {
                    key: t,
                    onClick: function () {
                      return n(t, a)
                    },
                    style: [me.listItem, me.bottomBorder],
                    withInteractiveStyling: !0,
                  },
                  $.a.createElement(Te.b, null, a),
                )
              }),
            ),
          )
        },
        yt = a('m3Bd'),
        vt = a.n(yt),
        At = Object(Ze.a)()
          .propsFromActions(function () {
            return { setNextFlow: Qe.V, setPreviousFlow: Qe.W }
          })
          .withAnalytics(),
        Ct = [
          'analytics',
          'graphicDisplayMode',
          'onAction',
          'onTertiaryAction',
          'setNextFlow',
          'setPreviousFlow',
          'tertiaryActionLabel',
          'tertiaryActionLink',
          'withCloseButton',
        ],
        St = At(function (e) {
          var t = e.analytics,
            a = e.graphicDisplayMode,
            i = void 0 === a ? 'none' : a,
            n = e.onAction,
            r = e.onTertiaryAction,
            l = e.setNextFlow,
            o = e.setPreviousFlow,
            c = e.tertiaryActionLabel,
            s = e.tertiaryActionLink,
            d = e.withCloseButton,
            u = void 0 !== d && d,
            E = vt()(e, Ct),
            p =
              r ||
              (s
                ? X.a
                : function () {
                    return o()
                  })
          return $.a.createElement(
            Q.a,
            D()(
              {
                graphicDisplayMode: i,
                onAction: function (e) {
                  t.scribe(
                    U()(
                      U()({}, t.contextualScribeNamespace),
                      {},
                      { element: 'CTA', action: 'click', data: t.contextualScribeData },
                    ),
                  ),
                    n ? n(e) : c ? l() : o()
                },
                onTertiaryAction: p,
                tertiaryActionLabel: c,
                tertiaryActionLink: s,
                withCloseButton: u,
              },
              E,
            ),
          )
        }),
        gt = St,
        Rt = a('RhWx'),
        Ot = a.n(Rt),
        Lt =
          (a('M+/F'),
          a('jwue'),
          a('+oxZ'),
          a('jQ3i'),
          a('x4t0'),
          a('DfhM'),
          function (e) {
            var t,
              a = Object(Qe.y)(e)
            return null !== (t = null == a ? void 0 : a.inputData) && void 0 !== t ? t : []
          }),
        Ft = Object(Ze.a)()
          .propsFromState(function () {
            return { currentStep: Qe.z, formHistory: Lt }
          })
          .propsFromActions(function () {
            return { setFormStepData: Qe.R, setNextFlow: Qe.V, updateFormHistory: Qe.Y }
          })
          .withAnalytics(),
        xt = a('Qp/W'),
        Dt = a.n(xt),
        Mt = (a('KOtZ'), a('ZVkB'), ['newsType']),
        Ut = function (e) {
          return (
            e.charAt(0).toLowerCase() +
            e.slice(1, e.length).replace(/[A-Z]/g, function (e) {
              return '_'.concat(e.toLowerCase())
            })
          )
        },
        Pt = function (e) {
          return { component: te.g[e].scribeComponent || e }
        },
        kt = function (e, t, a, i, n, r, l, o, c) {
          var s = i || r,
            d =
              o &&
              (function (e) {
                e.newsType
                var t = vt()(e, Mt)
                return Object.keys(t).map(function (e) {
                  return Ut(e)
                })
              })(o),
            u = {}
          switch (te.g[a].scribeComponent) {
            case te.p.LANDING_PAGE:
              u = { access_status: e }
              break
            case te.p.NOTABILITY_CATEGORY:
              u = { meets_threshold: s, notability_category: l }
              break
            case te.p.NOTABILITY_SUBCATEGORY:
              u = { meets_threshold: s, notability_category: l, category_subtype: c }
              break
            case te.p.NOTABILITY_METHOD:
            case te.p.NOTABILITY_INPUT:
              u = { meets_threshold: s, notability_category: l, category_subtype: c, notability_method: d }
              break
            case te.p.AUTHENTICITY_TYPE:
              u = { notability_category: l, category_subtype: c, authenticity_type: t }
              break
            case te.p.ID_UPLOAD:
              u = { notability_category: l, category_subtype: c, authenticity_type: t, id_type: n }
              break
            case te.p.REVIEW_SUBMIT:
            case te.p.THANK_YOU:
              u = {
                meets_threshold: s,
                notability_category: l,
                category_subtype: c,
                notability_method: d,
                authenticity_type: t,
                id_type: n,
              }
          }
          return {
            verification_application_details: (u = Object.entries(u).reduce(function (e, t) {
              var a = Ee()(t, 2),
                i = a[0],
                n = a[1]
              return void 0 === n || (e[i] = n), e
            }, {})),
          }
        },
        wt = a('855f'),
        Gt = a('p+r5'),
        Wt = a('XiMS'),
        Bt = ['isUrlInvalid', 'labelGenerator', 'required', 'value'],
        Vt = 'verification-checkbox-label',
        Yt = Z.a.i33cf691,
        Kt = Z.a.c1df579e,
        jt = Z.a.b679ff69,
        Ht = function (e) {
          return (
            Dt()(e, !1, !1) &&
            (function (e) {
              if (e.includes('://')) {
                var t = e.split('://')
                return 'http' === t[0] || 'https' === t[0]
              }
              return !0
            })(e)
          )
        },
        zt = be.a.create(function (e) {
          return {
            input: { paddingHorizontal: 0 },
            addFieldText: { alignSelf: 'flex-start', marginLeft: e.borderWidths.medium, paddingTop: e.spaces.space12 },
            checkboxContainer: { paddingTop: 0 },
          }
        }),
        qt = Ft(function (e) {
          var t = e.addFieldText,
            a = void 0 === t ? Yt : t,
            i = e.allowAddFields,
            n = void 0 !== i && i,
            r = e.analytics,
            l = e.buttonText,
            o = void 0 === l ? Kt : l,
            c = e.confirmationText,
            s = e.currentStep,
            d = e.description,
            u = e.formHistory,
            E = e.isNarrow,
            p = e.items,
            b = e.maxItems,
            m = void 0 === b ? 10 : b,
            I = e.nextFormStep,
            T = e.setFormStepData,
            f = e.setNextFlow,
            N = e.title,
            h = e.updateFormHistory,
            _ = $.a.useState(
              (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  a = {},
                  i = e.slice(-1),
                  n = Ee()(i, 1)[0],
                  r = void 0 === n ? {} : n
                return (
                  t.length
                    ? t.forEach(function (t, i) {
                        var n,
                          l = null !== (n = e[i]) && void 0 !== n ? n : U()(U()({}, r), {}, { required: !1 })
                        a[i] = U()(U()({}, l), {}, { value: t })
                      })
                    : e.forEach(function (e, t) {
                        a[t] = U()(U()({}, e), {}, { value: '' })
                      }),
                  a
                )
              })(p, u),
            ),
            y = Ee()(_, 2),
            v = y[0],
            A = y[1],
            C = $.a.useState(!1),
            S = Ee()(C, 2),
            g = S[0],
            R = S[1],
            O = $.a.useState(!1),
            L = Ee()(O, 2),
            F = L[0],
            x = L[1],
            M = $.a.useState(!0),
            P = Ee()(M, 2),
            k = P[0],
            w = P[1],
            G = $.a.useState(null),
            W = Ee()(G, 2),
            B = W[0],
            V = W[1],
            Y = p.length
          $.a.useEffect(
            function () {
              var e = Object(he.a)(v),
                t = (n ? e.slice(0, Y) : e).every(function (e) {
                  return Ht(e.value)
                }),
                a = !t || !(!c || F)
              R(t), w(a)
            },
            [n, c, v, F, Y],
          )
          var K = function (e, t) {
            V(
              setTimeout(function () {
                var a = !Ht(e)
                return A(U()(U()({}, v), {}, z()({}, t, U()(U()({}, v[t]), {}, { isUrlInvalid: a, value: e }))))
              }, 2e3),
            )
          }
          return $.a.createElement(
            Ie.a,
            { style: [me.container, E && me.narrowContainer] },
            $.a.createElement(
              Te.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: pe.b,
                size: 'title4',
                style: me.header,
                weight: 'heavy',
              },
              N,
            ),
            $.a.createElement(
              Ie.a,
              { style: me.scrollableContainer },
              d && $.a.createElement(Te.b, { color: 'gray700' }, d),
              $.a.createElement(
                Ie.a,
                { accessibilityLabelledBy: pe.b, accessibilityRole: 'group', style: me.contentContainer },
                Object.keys(v).map(function (e, t) {
                  var a = v[e],
                    i = a.isUrlInvalid,
                    n = a.labelGenerator,
                    r = void 0 === n ? null : n,
                    l = (a.required, a.value),
                    o = vt()(a, Bt),
                    c = o.label || '',
                    d = o.name || ''.concat(s, '-').concat(e),
                    u = o.errorText || jt,
                    E = wt.a.getFormattedCount(t + 1),
                    p = r ? r({ n: E }) : c
                  return $.a.createElement(
                    Gt.a,
                    D()({}, o, {
                      errorText: u,
                      invalid: i,
                      key: e,
                      label: p,
                      name: d,
                      onBlur: function (t) {
                        return (function (e, t) {
                          clearTimeout(B)
                          var a = !Ht(e.target.value)
                          return A(U()(U()({}, v), {}, z()({}, t, U()(U()({}, v[t]), {}, { isUrlInvalid: a }))))
                        })(t, e)
                      },
                      onChange: function (t) {
                        return (function (e, t) {
                          clearTimeout(B)
                          var a = !1,
                            i = e.target.value
                          return (
                            v[t].isUrlInvalid ? (a = !Ht(i)) : K(i, t),
                            A(U()(U()({}, v), {}, z()({}, t, U()(U()({}, v[t]), {}, { isUrlInvalid: a, value: i }))))
                          )
                        })(t, e)
                      },
                      style: zt.input,
                      value: l,
                    }),
                  )
                }),
                n && g && Object.keys(v).length < m
                  ? $.a.createElement(
                      Te.b,
                      {
                        color: 'primary',
                        onPress: function () {
                          return A(
                            (function (e) {
                              var t = Object.keys(e).length
                              return U()(
                                U()({}, e),
                                {},
                                z()({}, t, U()(U()({}, e[t - 1]), {}, { required: !1, value: '' })),
                              )
                            })(v),
                          )
                        },
                        style: zt.addFieldText,
                      },
                      a,
                    )
                  : null,
              ),
              c &&
                $.a.createElement(
                  Ie.a,
                  { style: [me.contentContainer, me.checkboxContainer, zt.checkboxContainer] },
                  $.a.createElement(
                    Ie.a,
                    { style: me.checkbox },
                    $.a.createElement(Wt.a, {
                      accessibilityLabelledBy: Vt,
                      checked: F,
                      onChange: function () {
                        return x(!F)
                      },
                    }),
                  ),
                  $.a.createElement(
                    Ie.a,
                    { nativeID: Vt, style: me.checkboxText },
                    $.a.createElement(Te.b, { color: 'gray700' }, c),
                  ),
                ),
            ),
            $.a.createElement(
              fe.a,
              {
                disabled: k,
                onClick: function () {
                  var e = (function (e) {
                      var t = {}
                      return (
                        Object(he.a)(e).forEach(function (e) {
                          if (e.dataKey) {
                            var a,
                              i,
                              n = null !== (a = t[e.dataKey]) && void 0 !== a ? a : [],
                              r = null !== (i = e.value) && void 0 !== i ? i : ''
                            t = U()(U()({}, t), {}, z()({}, e.dataKey, [].concat(Ot()(n), [r])))
                          }
                        }),
                        t
                      )
                    })(v),
                    t = Object.keys(e).map(function (e) {
                      return Ut(e)
                    })
                  T(s, e),
                    r.scribe(
                      U()(
                        U()({}, r.contextualScribeNamespace),
                        {},
                        {
                          element: 'CTA',
                          action: 'click',
                          data: U()(
                            U()({}, r.contextualScribeData),
                            {},
                            {
                              verification_application_details: U()(
                                U()({}, r.contextualScribeData.verification_application_details),
                                {},
                                { notability_method: t },
                              ),
                            },
                          ),
                        },
                      ),
                    ),
                    h(
                      (function (e) {
                        return Object(he.a)(e).map(function (e) {
                          var t
                          return null !== (t = e.value) && void 0 !== t ? t : ''
                        })
                      })(v),
                    ),
                    f(I)
                },
                style: me.buttonFixed,
                type: 'brandFilled',
              },
              o,
            ),
          )
        }),
        $t = qt,
        Jt = a('0KEI'),
        Zt = Object(Ze.a)()
          .propsFromState(function () {
            return { errors: Qe.q, status: Qe.r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Jt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_LOADING',
              ),
              fetchAuthenticationResult: Qe.e,
              resetAuthenticationResult: Qe.h,
              resetDocumentIdProcess: Qe.i,
              setNextFlow: Qe.V,
              setPreviousFlow: Qe.W,
            }
          })
          .withAnalytics(),
        Qt = a('B5iK'),
        Xt = a('pXBW'),
        ea = 'https://help.twitter.com/managing-your-account/twitter-verified-accounts',
        ta = Z.a.abd587d1,
        aa = Z.a.i0bba81a,
        ia = Z.a.a6a76e3c,
        na = Z.a.ecd2abda,
        ra = Z.a.cb70b893,
        la = Z.a.g8b511fe,
        oa = Z.a.c7d50c96,
        ca = Z.a.a68b43ed,
        sa = Z.a.b5e3039f,
        da = Z.a.h146703d,
        ua = Z.a.ee38d0f0,
        Ea = Z.a.cb97ee3e,
        pa = Z.a.hc371f34,
        ba = Z.a.b9d0ad9f,
        ma = Z.a.ge137dce,
        Ia = Z.a.h2b9a5fd,
        Ta = Z.a.baccb708,
        fa = Z.a.feadd98c,
        Na = Z.a.j7ae97a9,
        ha = Z.a.c368aa8d,
        _a = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'j23c6258' },
          $.a.createElement(Te.b, { link: ea }, Z.a.c076e32d),
        ),
        ya = Z.a.ded0edad,
        va = Z.a.bebae559,
        Aa = Z.a.c557161f,
        Ca = Z.a.e2d42628,
        Sa = Z.a.jc19b4e7,
        ga = Z.a.fc3ee695,
        Ra = Z.a.i3e65eb4,
        Oa = Z.a.jd014eba,
        La = Z.a.a96901cb,
        Fa = Z.a.cc424a21,
        xa = Z.a.ibfc1a5a,
        Da = Z.a.e1c78795,
        Ma = Z.a.cf93bcbf,
        Ua = Z.a.a7f1cff6,
        Pa = function (e) {
          return { title: ca, description: e, label: sa }
        },
        ka = function (e) {
          return { title: fa, description: e, articleLabelGenerator: ya, addFieldText: ta }
        },
        wa = function (e) {
          return { title: Ea, description: e, label: da }
        },
        Ga = function (e) {
          return { title: Ca, description: e, label: Sa }
        },
        Wa = Z.a.c6bd60ec,
        Ba = Z.a.je403ac5,
        Va = Z.a.ff8c97fb,
        Ya = Z.a.h4d652fb,
        Ka = Z.a.c5b72ac5,
        ja = Z.a.f7ff070c,
        Ha = Z.a.eb7de689,
        za =
          ((n = {}),
          z()(n, te.l.ACTIVISM, Wa),
          z()(n, te.l.COMPANY, Ba),
          z()(n, te.l.ENTERTAINMENT, Va),
          z()(n, te.l.GOVERNMENT, Ya),
          z()(n, te.l.INFLUENCER_OTHER, Ka),
          z()(n, te.l.NEWS, ja),
          z()(n, te.l.SPORTS, Ha),
          n),
        qa = Z.a.cc4b66b5,
        $a = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gee7fae8' },
          $.a.createElement(Te.b, { link: ea }, Z.a.e492eeb4),
        ),
        Ja = { title: qa, description: $a },
        Za = Z.a.b37461a4,
        Qa = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd454b49e' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ece0b9bc),
        ),
        Xa = Z.a.b27325f6,
        ei = Z.a.a5a6affb,
        ti = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'hd977dd9' },
          $.a.createElement(Te.b, { link: ea }, Z.a.db252639),
        ),
        ai = Z.a.a15326dd,
        ii = Z.a.g704a939,
        ni = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e3432573' },
          $.a.createElement(Te.b, { link: ea }, Z.a.b25b02c1),
        ),
        ri = {
          title: ia,
          description: ti,
          notEligibleButton: ra,
          notEligibleDescription: ni,
          notEligibleTitle: xa,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: ai, label: pa },
            { helpText: ii, label: ga },
          ],
        },
        li = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          $.a.createElement(Te.b, { link: ea }, Z.a.j6ef6afa),
        ),
        oi = Pa(li),
        ci = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d42d1629),
        ),
        si = wa(ci),
        di = { title: Ta, description: _a, articleLabelGenerator: ya, addFieldText: ta },
        ui = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ie26d72d' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ccadfc84),
        ),
        Ei = { title: La, description: ui, label: Fa, confirmationText: Oa },
        pi = Z.a.d2ea2049,
        bi = Z.a.h753ddd2,
        mi = {
          title: Za,
          description: Qa,
          items: [
            { helpText: ei, label: Xa },
            { helpText: bi, label: pi },
          ],
        },
        Ii = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'af3fe861' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ddb47f56),
        ),
        Ti = Z.a.a15326dd,
        fi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a08d6af3' },
          $.a.createElement(Te.b, { link: ea }, Z.a.bf9e181a),
        ),
        Ni = {
          title: ia,
          description: Ii,
          notEligibleButton: ra,
          notEligibleDescription: fi,
          notEligibleTitle: xa,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: Ti, label: pa },
          ],
        },
        hi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          $.a.createElement(Te.b, { link: ea }, Z.a.j6ef6afa),
        ),
        _i = Pa(hi),
        yi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fe54dcfd' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d42d1629),
        ),
        vi = wa(yi),
        Ai = { title: Ta, description: _a, articleLabelGenerator: ya, addFieldText: ta },
        Ci = (Z.a.I18NFormatMessage, Te.b, Z.a.ccadfc84, Z.a.ff929feb),
        Si = Z.a.jf537894,
        gi = Z.a.i3e6aaa5,
        Ri = Z.a.bbcbb9e6,
        Oi = {
          title: Za,
          description: Qa,
          items: [
            { helpText: Si, label: Ci },
            { helpText: Ri, label: gi },
          ],
        },
        Li = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f774e39d' },
          $.a.createElement(Te.b, { link: ea }, Z.a.e8e39f94),
        ),
        Fi = {
          title: ia,
          description: Li,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: Aa, label: va },
            { helpText: Ia, label: pa },
          ],
        },
        xi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8510869' },
          $.a.createElement(Te.b, { link: ea }, Z.a.e126dd3e),
        ),
        Di = Pa(xi),
        Mi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h75e3640' },
          $.a.createElement(Te.b, { link: ea }, Z.a.gbdf1325),
        ),
        Ui = wa(Mi),
        Pi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'de6d69a1' },
          $.a.createElement(Te.b, { link: ea }, Z.a.b0abbb16),
        ),
        ki = Ga(Pi),
        wi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'be0e8fda' },
          $.a.createElement(Te.b, { link: ea }, Z.a.g4e815f3),
        ),
        Gi = ka(wi),
        Wi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'baed7213' },
          $.a.createElement(Te.b, { link: ea }, Z.a.i560665d),
        ),
        Bi = Z.a.j0bc23f3,
        Vi = { title: na, description: Wi, confirmationText: Bi },
        Yi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c5d688ce' },
          $.a.createElement(Te.b, { link: ea }, Z.a.eb8eeaf0),
        ),
        Ki = {
          title: ia,
          description: Yi,
          items: [
            { helpText: ha, label: Na },
            { helpText: Ra, label: ga },
          ],
        },
        ji = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fce3e22d' },
          $.a.createElement(Te.b, { link: ea }, Z.a.h486f753),
        ),
        Hi = ka(ji),
        zi = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f1b276f0' },
          $.a.createElement(Te.b, { link: ea }, Z.a.a77ed149),
        ),
        qi = { title: aa, description: zi, label: ga, confirmationText: Oa },
        $i = Z.a.aa6228de,
        Ji = Z.a.d5b3cbc9,
        Zi = Z.a.b5a3e590,
        Qi = Z.a.e484f794,
        Xi = Z.a.b8d8ea64,
        en = Z.a.ff27db3c,
        tn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'e2465096' },
          $.a.createElement(Te.b, { link: ea }, Z.a.jc7215cd),
        ),
        an = Pa(tn),
        nn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g83bcecc' },
          $.a.createElement(Te.b, { link: ea }, Z.a.gdb5ae61),
        ),
        rn = ka(nn),
        ln = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f3016c6f' },
          $.a.createElement(Te.b, { link: ea }, Z.a.icb5913e),
        ),
        on = {
          title: ia,
          description: ln,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: Aa, label: va },
            { helpText: Ia, label: pa },
          ],
        },
        cn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'h74144bd' },
          $.a.createElement(Te.b, { link: ea }, Z.a.af819831),
        ),
        sn = Ga(cn),
        dn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jef5dfc5' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d35525bf),
        ),
        un = wa(dn),
        En = {
          title: Za,
          description: Qa,
          items: [
            { helpText: Ji, label: $i },
            { helpText: Qi, label: Zi },
            { helpText: en, label: Xi },
          ],
        },
        pn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'gf5a4309' },
          $.a.createElement(Te.b, { link: ea }, Z.a.cb181ed0),
        ),
        bn = {
          title: ia,
          description: pn,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: Aa, label: va },
            { helpText: Ia, label: pa },
          ],
        },
        mn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g2e175b1' },
          $.a.createElement(Te.b, { link: ea }, Z.a.f6c3d3ff),
        ),
        In = Pa(mn),
        Tn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efc369c2' },
          $.a.createElement(Te.b, { link: ea }, Z.a.bad6af53),
        ),
        fn = ka(Tn),
        Nn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ff03f07c' },
          $.a.createElement(Te.b, { link: ea }, Z.a.af0cb1b5),
        ),
        hn = Ga(Nn),
        _n = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3e9dde2' },
          $.a.createElement(Te.b, { link: ea }, Z.a.h84f1fe0),
        ),
        yn = wa(_n),
        vn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c2b8fb3c' },
          $.a.createElement(Te.b, { link: ea }, Z.a.bd70d5d0),
        ),
        An = Z.a.c0e57cb2,
        Cn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da6e5b18' },
          $.a.createElement(Te.b, { link: ea }, Z.a.h9ec0778),
        ),
        Sn = Z.a.f3c605b6,
        gn = {
          title: ia,
          description: vn,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: ma, label: pa },
          ],
        },
        Rn = { title: An, description: Cn, items: [{ label: Sn }] },
        On = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'efd8f6e7' },
          $.a.createElement(Te.b, { link: ea }, Z.a.j6ef6afa),
        ),
        Ln = { title: ca, description: On, label: sa },
        Fn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'bb47d2b9' },
          $.a.createElement(Te.b, { link: ea }, Z.a.f7998564),
        ),
        xn = { title: Ea, description: Fn, label: da },
        Dn = { title: Ta, description: _a, articleLabelGenerator: ya, addFieldText: ta },
        Mn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'db930fb2' },
          $.a.createElement(Te.b, { link: ea }, Z.a.b4e93970),
        ),
        Un = Z.a.h042d1a5,
        Pn = Z.a.d2310f0b,
        kn = {
          title: ia,
          description: Mn,
          items: [
            { description: Pn, label: Un },
            { description: ma, label: Na },
          ],
        },
        wn = Z.a.ba04b4c1,
        Gn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dc263ec0' },
          $.a.createElement(Te.b, { link: ea }, Z.a.jb3e663d),
        ),
        Wn = { title: wn, description: Gn, label: Un },
        Bn = { title: fa, description: _a, articleLabelGenerator: ya, addFieldText: ta },
        Vn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd8b21ebb' },
          $.a.createElement(Te.b, { link: ea }, Z.a.a7a51b91),
        ),
        Yn = { title: Ua, description: Vn, label: Da },
        Kn = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'i3b4217a' },
          $.a.createElement(Te.b, { link: ea }, Z.a.c58d2c6b),
        ),
        jn = Z.a.i9b124b6,
        Hn = Z.a.f84a99ee,
        zn = Z.a.j2cb5f50,
        qn = Z.a.j2472894,
        $n = Z.a.ha44c13f,
        Jn = Z.a.j8ae9d40,
        Zn = {
          title: Za,
          description: Kn,
          items: [
            { helpText: Hn, label: jn },
            { helpText: qn, label: zn },
            { helpText: Jn, label: $n },
          ],
        },
        Qn = Z.a.ef1d6175,
        Xn = Z.a.f54ba6e6,
        er = Z.a.dd85d0af,
        tr = Z.a.f0058c60,
        ar = Z.a.f420a711,
        ir = Z.a.fb97d22b,
        nr = {
          candidateTitle: Qn,
          candidateDescription: Xn,
          officialTitle: er,
          officialDescription: tr,
          confirmButtonLabel: ar,
          declineButtonLabel: ir,
        },
        rr = Z.a.e16b1cc8,
        lr = Z.a.cf2ee92e,
        or = Z.a.g544885e,
        cr = Z.a.bd0b4542,
        sr = Z.a.i45b224c,
        dr = Z.a.fba1dd66,
        ur = Z.a.e95c44dd,
        Er = Z.a.fa5e15e1,
        pr = {
          candidateTitle: rr,
          candidateDescription: lr,
          officeTitle: or,
          officeDescription: cr,
          officialTitle: sr,
          officialDescription: dr,
          confirmButtonLabel: ur,
          declineButtonLabel: Er,
        },
        br = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ja62479f' },
          $.a.createElement(Te.b, { link: ea }, Z.a.c04b4b1b),
        ),
        mr = ka(br),
        Ir = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f28bbbb0' },
          $.a.createElement(Te.b, { link: ea }, Z.a.a60039a6),
        ),
        Tr = ka(Ir),
        fr = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b229f4b8' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ba75f2ad),
        ),
        Nr = ka(fr),
        hr = Z.a.jdf47e8d,
        _r = Z.a.eeec7315,
        yr = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec71430d' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d9486fbf),
        ),
        vr = { title: _r, description: yr, websiteLabel: hr },
        Ar = Z.a.b163b653,
        Cr = Z.a.d2378d34,
        Sr = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'f9e2b0f2' },
          $.a.createElement(Te.b, { link: ea }, Z.a.e3b02224),
        ),
        gr = { title: Cr, description: Sr, websiteLabel: Ar },
        Rr = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a394654e' },
          $.a.createElement(Te.b, { link: ea }, Z.a.e332fb11),
        ),
        Or = { title: aa, description: Rr, websiteLabel: Ar },
        Lr = Z.a.a05b8445,
        Fr = Z.a.hdad12b1,
        xr = Z.a.a18c6dfb,
        Dr = Z.a.h0b46533,
        Mr = Z.a.d2d7af4b,
        Ur = Z.a.d83e51db,
        Pr = {
          title: Za,
          description: Qa,
          items: [
            { description: Dr, label: xr },
            { description: Fr, label: Lr },
            { description: Ur, label: Mr },
          ],
        },
        kr = Z.a.g708cbdb,
        wr = Z.a.b107ee5b,
        Gr = Z.a.e95c44dd,
        Wr = Z.a.fa5e15e1,
        Br = { title: kr, description: wr, confirmButtonLabel: Gr, declineButtonLabel: Wr },
        Vr = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'dcb0da53' },
          $.a.createElement(Te.b, { link: ea }, Z.a.h04c272b),
        ),
        Yr = Z.a.e8746826,
        Kr = { title: na, description: Vr, confirmationText: Yr },
        jr = Z.a.jc09b420,
        Hr = Z.a.gfbd7e58,
        zr = Z.a.e95c44dd,
        qr = Z.a.fa5e15e1,
        $r = { headline: jr, subtext: Hr, actionLabel: zr, tertiaryActionLabel: qr },
        Jr = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd82a96af' },
          $.a.createElement(Te.b, { link: ea }, Z.a.j331c658),
        ),
        Zr = Z.a.h0ad4c9d,
        Qr = Z.a.a6553b5f,
        Xr = Z.a.a29b2987,
        el = Z.a.ab4eae60,
        tl = {
          title: ia,
          description: Jr,
          items: [
            { description: Qr, label: Zr },
            { description: el, label: Xr },
          ],
        },
        al = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd47b4101' },
          $.a.createElement(Te.b, { link: ea }, Z.a.h02fe64e),
        ),
        il = Z.a.b3fac982,
        nl = { title: aa, description: al, websiteLabel: Da, confirmationText: il },
        rl = Z.a.e26dc9e2,
        ll = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'a3540593' },
          $.a.createElement(Te.b, { link: ea }, Z.a.a7df4b84),
        ),
        ol = { title: rl, description: ll, articleNumerationLabelGenerator: ya, addFieldText: ta },
        cl = Z.a.e164df2d,
        sl = Z.a.i80ff05e,
        dl = Z.a.cf7482eb,
        ul = Z.a.cb70b893,
        El = { title: cl, description: sl, actionLabel: dl, tertiaryActionLabel: ul },
        pl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'edb782e6' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d575e579),
        ),
        bl = {
          title: ia,
          description: pl,
          items: [
            { description: oa, label: la },
            { description: ua, label: da },
            { description: Aa, label: va },
            { description: ba, label: pa },
          ],
        },
        ml = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'cc16af2c' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ede35c04),
        ),
        Il = Pa(ml),
        Tl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b42b7001' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d5dedb7a),
        ),
        fl = wa(Tl),
        Nl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fd2c6f62' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ab604a66),
        ),
        hl = Ga(Nl),
        _l = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ec7027cc' },
          $.a.createElement(Te.b, { link: ea }, Z.a.i532d121),
        ),
        yl = ka(_l),
        vl = Z.a.fcb96cfc,
        Al = Z.a.ddc7d64a,
        Cl = Z.a.c4e0d346,
        Sl = Z.a.e3ce81fa,
        gl = Z.a.b2808f47,
        Rl = Z.a.jaa90f86,
        Ol = {
          title: Za,
          description: Qa,
          items: [
            { helpText: Al, label: vl },
            { helpText: Sl, label: Cl },
            { helpText: Rl, label: gl },
          ],
        },
        Ll = $.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a0a9f835' }),
        Fl = Z.a.bbd9a911,
        xl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'iba551d5' },
          $.a.createElement(Te.b, { link: ea }, Z.a.f22a6d0c),
        ),
        Dl = { title: na, description: Ll, confirmationText: Fl },
        Ml = $.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'h515e868' }),
        Ul = { title: na, description: Ml, confirmationText: Fl },
        Pl = { headline: xa, subtext: xl, actionLabel: ra },
        kl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd2cd7f89' },
          $.a.createElement(Te.b, { link: ea }, Z.a.i78c9fd3),
        ),
        wl = Z.a.he9c5637,
        Gl = {
          title: ia,
          description: kl,
          items: [
            { helpText: oa, label: la },
            { helpText: ua, label: da },
            { helpText: Aa, label: va },
            { helpText: wl, label: Ma },
            { helpText: Ia, label: pa },
          ],
        },
        Wl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'c68614a2' },
          $.a.createElement(Te.b, { link: ea }, Z.a.i78b0bd0),
        ),
        Bl = Pa(Wl),
        Vl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b4ea622e' },
          $.a.createElement(Te.b, { link: ea }, Z.a.i78103dc),
        ),
        Yl = wa(Vl),
        Kl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'acab99f6' },
          $.a.createElement(Te.b, { link: ea }, Z.a.ebfa8bb3),
        ),
        jl = Ga(Kl),
        Hl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'df0b2577' },
          $.a.createElement(Te.b, { link: ea }, Z.a.fcfad60b),
        ),
        zl = { title: Ua, description: Hl, label: Da },
        ql = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jfda4c28' },
          $.a.createElement(Te.b, { link: ea }, Z.a.a5e8a43a),
        ),
        $l = ka(ql),
        Jl = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'g3299df1' },
          $.a.createElement(Te.b, { link: ea }, Z.a.d9bd3821),
        ),
        Zl = Z.a.bf06e1d5,
        Ql = Z.a.e241d35d,
        Xl = {
          title: ia,
          description: Jl,
          items: [
            { description: Ql, label: Na },
            { description: Zl, label: Ma },
          ],
        },
        eo = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'id6bbc01' },
          $.a.createElement(Te.b, { link: ea }, Z.a.a67f27bc),
        ),
        to = Z.a.ad456030,
        ao = Z.a.hbe2e65b,
        io = {
          title: ia,
          description: eo,
          items: [
            { description: to, label: Na },
            { description: ao, label: Ma },
          ],
        },
        no = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'fbe119c5' },
          $.a.createElement(Te.b, { link: ea }, Z.a.b8be7ad9),
        ),
        ro = { title: Ua, description: no, websiteLabel: Da },
        lo = ka(_a),
        oo = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'da0e7f32' },
          $.a.createElement(Te.b, { link: ea }, Z.a.fa437e4d),
        ),
        co = { title: Ua, description: oo, websiteLabel: Da },
        so = ka(_a),
        uo = Z.a.j24c37b2,
        Eo = Z.a.j3da4de9,
        po = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'ca20e39f' },
          $.a.createElement(Te.b, { link: ea }, Z.a.b436b100),
        ),
        bo = Z.a.ff2ee0c1,
        mo = Z.a.af39265e,
        Io = Z.a.hc61adfb,
        To = Z.a.d2042392,
        fo = Z.a.c365dcc5,
        No = Z.a.c8ee31da,
        ho = Z.a.bb51cd79,
        _o =
          ((r = {}),
          z()(r, te.l.ACTIVISM, bo),
          z()(r, te.l.COMPANY, mo),
          z()(r, te.l.ENTERTAINMENT, Io),
          z()(r, te.l.GOVERNMENT, To),
          z()(r, te.l.INFLUENCER_OTHER, fo),
          z()(r, te.l.NEWS, No),
          z()(r, te.l.SPORTS, ho),
          r),
        yo = Z.a.d2ea2049,
        vo =
          ((l = {}),
          z()(l, te.n.ACTIVIST, Wa),
          z()(l, te.n.CANDIDATE, zn),
          z()(l, te.n.COMPANY, Ci),
          z()(l, te.n.CONTENT_CREATOR, Xa),
          z()(l, te.n.ENTERTAINMENT_COMPANY, $i),
          z()(l, te.n.ENTERTAINMENT_INDIVIDUAL, Zi),
          z()(l, te.n.EXECUTIVE, gi),
          z()(l, te.n.FREELANCER, Lr),
          z()(l, te.n.GAMING_INDIVIDUAL, gl),
          z()(l, te.n.INFLUENTIAL_INDIVIDUAL, yo),
          z()(l, te.n.JOURNALIST, xr),
          z()(l, te.n.OFFICE, $n),
          z()(l, te.n.OFFICIAL, jn),
          z()(l, te.n.ORGANIZATION, Mr),
          z()(l, te.n.PRODUCTION, Xi),
          z()(l, te.n.SPORTS_ENTITY, Cl),
          z()(l, te.n.SPORTS_INDIVIDUAL, vl),
          l),
        Ao = Z.a.fc2a5c92,
        Co = Z.a.jf4b6f7f,
        So = Eo,
        go = po,
        Ro = Z.a.d338f53e,
        Oo = function (e) {
          var t = e.error,
            a = e.onButtonClick,
            i = t instanceof Xt.a ? t.status : void 0,
            n = Ro,
            r = Ao,
            l = Co
          return (
            429 === i && ((n = uo), (r = So), (l = go)),
            $.a.createElement(Q.a, {
              actionLabel: n,
              graphicDisplayMode: 'none',
              headline: r,
              onAction: a,
              onClose: X.a,
              subtext: l,
              withCloseButton: !1,
            })
          )
        },
        Lo = Z.a.h2d4ba55,
        Fo = Z.a.i2051842,
        xo = (function (e) {
          Y()(a, e)
          var t = j()(a)
          function a(e) {
            var i
            return (
              k()(this, a),
              (i = t.call(this, e)),
              z()(B()(i), '_handleErrorButtonClick', function () {
                i.props.resetDocumentIdProcess(), i.props.setPreviousFlow()
              }),
              z()(B()(i), '_isPollingDone', function (e) {
                return e === te.o.NOT_STARTED || e === te.o.CONCLUSIVE || e === te.o.INCONCLUSIVE
              }),
              (i.state = { retryCount: 0 }),
              i
            )
          }
          return (
            G()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    i = t.fetchAuthenticationResult
                  i().catch(a()),
                    (this._pollingTimer = new Qt.b(5e3).interval(function () {
                      i().catch(function () {
                        e.setState(function (e) {
                          return { retryCount: e.retryCount + 1 }
                        }),
                          a()
                      })
                    })),
                    this._pollingTimer.start()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var a = this.props,
                    i = a.errors,
                    n = a.setNextFlow,
                    r = a.status,
                    l = this.state.retryCount
                  ;((r !== e.status && this._isPollingDone(r)) ||
                    (i.length !== e.errors.length && i.length) ||
                    (l !== t.retryCount && 5 === l)) &&
                    this._stopTimer(),
                    r === e.status || r !== te.o.CONCLUSIVE || i.length || (this._handleScribe('success'), n())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._stopTimer()
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  var t = this.props.analytics
                  t.scribe(
                    U()(
                      U()({}, t.contextualScribeNamespace),
                      {},
                      { element: 'process', action: e, data: t.contextualScribeData },
                    ),
                  )
                },
              },
              {
                key: '_isErrorState',
                value: function () {
                  var e = this.props,
                    t = e.errors,
                    a = e.status
                  return t.length || a === te.o.INCONCLUSIVE || a === te.o.NOT_STARTED || 5 === this.state.retryCount
                },
              },
              {
                key: '_stopTimer',
                value: function () {
                  this._pollingTimer && this._pollingTimer.stop()
                },
              },
              {
                key: '_renderError',
                value: function () {
                  return (
                    this._handleScribe('failure'),
                    $.a.createElement(Oo, { onButtonClick: this._handleErrorButtonClick })
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return $.a.createElement(
                    Ie.a,
                    { style: me.largeBannerContainer },
                    $.a.createElement(He, { isNarrow: this.props.isNarrow, type: Ye.LOADING }),
                    $.a.createElement(
                      Ie.a,
                      { style: [me.container, me.verticalCenter, this.props.isNarrow && me.narrowContainer] },
                      $.a.createElement(
                        Te.b,
                        {
                          accessibilityLevel: 1,
                          accessibilityRole: 'heading',
                          nativeID: pe.b,
                          size: 'title4',
                          style: me.header,
                          weight: 'heavy',
                        },
                        Lo,
                      ),
                      $.a.createElement(Te.b, { color: 'gray700' }, Fo),
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._isErrorState() ? this._renderError() : this._renderLoading()
                },
              },
            ]),
            a
          )
        })($.a.Component),
        Do = Zt(xo),
        Mo = Do,
        Uo = a('AspN'),
        Po = function (e) {
          var t = Object(Qe.u)(e)
          return t ? Object(Uo.k)(e, t)[0] : void 0
        },
        ko = function (e) {
          var t = Object(Qe.F)(e)
          return t ? Object(Uo.k)(e, t)[0] : void 0
        },
        wo = Object(Ze.a)()
          .propsFromState(function () {
            return {
              backID: Qe.u,
              backImage: Po,
              documentFormats: Qe.A,
              frontID: Qe.F,
              frontImage: ko,
              idCountry: Qe.G,
              idType: Qe.I,
              isConfirmed: Qe.x,
              uploadEntityId: Qe.B,
              uploadErrors: Qe.C,
              uploadFetchStatus: Qe.D,
              uploadRequestError: Qe.E,
            }
          })
          .propsFromActions(function () {
            return {
              addMedia: Uo.b,
              createLocalApiErrorHandler: Object(Jt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION_INTAKE_UPLOAD',
              ),
              processMultipleMedia: Uo.g,
              removeMedia: Uo.h,
              resetAuthenticationResult: Qe.h,
              resetDocumentIdProcess: Qe.i,
              resetIntakeUpload: Qe.k,
              setBackID: Qe.Q,
              setFrontID: Qe.S,
              setNextFlow: Qe.V,
              toggleCheckboxConfirmation: Qe.X,
              verifyIdDocument: Qe.ab,
            }
          })
          .withAnalytics(),
        Go = a('LCtV'),
        Wo = a('T8pk'),
        Bo = a('VPdC'),
        Vo = a('pKoL'),
        Yo = a('rFBM'),
        Ko = ['application/pdf', 'image/bmp', 'image/jpeg', 'image/png', 'image/tiff'],
        jo = (function (e) {
          Y()(a, e)
          var t = j()(a)
          function a() {
            var e
            k()(this, a)
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              z()(B()(e), '_handleDragDrop', function (t) {
                var a = e.props.onChange,
                  i = t.find(function (e) {
                    return Ko.includes(e.type)
                  })
                i && a([i])
              }),
              z()(B()(e), '_renderDragDropTarget', function () {
                var t = e.props,
                  a = t.accessibilityLabel,
                  i = t.onChange
                return $.a.createElement(Bo.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !1,
                  accessibilityLabel: a,
                  customMimeTypes: Ko,
                  icon: $.a.createElement(Wo.a, { style: Ho.mediaPickerIcon }),
                  onChange: i,
                  size: 'small',
                  style: Ho.mediaPicker,
                  withIcon: !0,
                })
              }),
              z()(B()(e), '_getResizeIfNeeded', function (e) {
                var t = e.externalMediaDetails && e.externalMediaDetails.height / e.externalMediaDetails.width
                return t && t > 1 ? 'width' : 'height'
              }),
              z()(B()(e), '_renderPreview', function (t) {
                var a = e.props.onRemove
                return $.a.createElement(Vo.a, {
                  borderRadius: Go.a.MEDIUM,
                  mediaItem: t,
                  onRemove: a,
                  resizeIfNeeded: e._getResizeIfNeeded(t),
                  style: Ho.mediaPreview,
                  withCloseButton: !0,
                })
              }),
              e
            )
          }
          return (
            G()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    a = e.title,
                    i = t ? this._renderPreview(t) : this._renderDragDropTarget()
                  return $.a.createElement(
                    Ie.a,
                    { style: Ho.dragDropContainer },
                    $.a.createElement(Te.b, { weight: 'bold' }, a),
                    $.a.createElement(Yo.a, { onFilesAdded: this._handleDragDrop, style: Ho.dragDropComponent }, i),
                  )
                },
              },
            ]),
            a
          )
        })($.a.Component),
        Ho = be.a.create(function (e) {
          return {
            dragDropContainer: {
              flex: 1,
              marginTop: e.spaces.space16,
              maxWidth: '50%',
              minWidth: 'calc('.concat(e.spaces.space80, ' + ').concat(e.spaces.space48, ')'),
            },
            dragDropComponent: {
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.medium,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              boxSizing: 'border-box',
              flexGrow: 0,
              height: 135,
              marginVertical: e.spaces.space8,
              overflow: 'hidden',
            },
            mediaPicker: { borderStyle: 'none', borderRadius: 'none', flex: 'auto' },
            mediaPickerIcon: { color: e.colors.primary },
            mediaPreview: { justifyContent: 'center', flex: 1 },
          }
        }),
        zo = jo,
        qo = a('eyty'),
        $o = 'verification-checkbox-label',
        Jo = Z.a.ff1d68f7,
        Zo = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'b8f15ec4' },
          $.a.createElement(Te.b, { link: ea }, Z.a.h0ed9034),
        ),
        Qo = Z.a.bdada5a5,
        Xo = Z.a.edfed0f6,
        ec = Z.a.b08821f3,
        tc = Z.a.b09aade5,
        ac = Z.a.b40ed190,
        ic = Z.a.c6650b55,
        nc = Z.a.d171ed16,
        rc = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'd65a41c2' },
          $.a.createElement(Te.b, { link: 'https://twitter.com/privacy' }, Z.a.e9d83172),
        ),
        lc = Z.a.c1df579e,
        oc = (function (e) {
          Y()(a, e)
          var t = j()(a)
          function a() {
            var e
            k()(this, a)
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              z()(B()(e), '_handleSubmit', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  i = t.handleOnClick,
                  n = void 0 === i ? function () {} : i
                ;(0, t.verifyIdDocument)().catch(a()), n()
              }),
              z()(B()(e), '_handleAddBackMedia', function (t) {
                var a = e.props,
                  i = a.addMedia,
                  n = a.processMultipleMedia,
                  r = a.setBackID
                i(t, { location: qo.d.Verification }).then(function (t) {
                  t.map(function (e) {
                    var t = e.id
                    r(t)
                  }),
                    n(t, { onFailure: e._handleRemoveBackID })
                })
              }),
              z()(B()(e), '_handleRemoveBackID', function () {
                var t = e.props,
                  a = t.backID,
                  i = t.removeMedia,
                  n = t.setBackID
                a && (i(a), n(void 0))
              }),
              z()(B()(e), '_handleAddFrontMedia', function (t) {
                var a = e.props,
                  i = a.addMedia,
                  n = a.processMultipleMedia,
                  r = a.setFrontID
                i(t, { location: qo.d.Verification }).then(function (t) {
                  t.map(function (e) {
                    var t = e.id
                    r(t)
                  }),
                    n(t, { onFailure: e._handleRemoveFrontID })
                })
              }),
              z()(B()(e), '_handleRemoveFrontID', function () {
                var t = e.props,
                  a = t.frontID,
                  i = t.removeMedia,
                  n = t.setFrontID
                a && (i(a), n(void 0))
              }),
              z()(B()(e), '_handleCheckboxChange', function () {
                e.props.toggleCheckboxConfirmation()
              }),
              z()(B()(e), '_handleErrorButtonClick', function () {
                e._resetForm(), e.props.resetDocumentIdProcess()
              }),
              z()(B()(e), '_isErrorState', function () {
                var t = e.props,
                  a = t.uploadErrors
                return t.uploadFetchStatus === Le.a.FAILED || !!a.length
              }),
              z()(B()(e), '_isUploading', function () {
                return e.props.uploadFetchStatus === Le.a.LOADING
              }),
              z()(B()(e), '_renderCheckbox', function () {
                var t = e.props.isConfirmed
                return $.a.createElement(
                  Ie.a,
                  { style: [me.contentContainer, me.checkboxContainer] },
                  $.a.createElement(
                    Ie.a,
                    { style: me.checkbox },
                    $.a.createElement(Wt.a, {
                      accessibilityLabelledBy: $o,
                      checked: t,
                      onChange: e._handleCheckboxChange,
                    }),
                  ),
                  $.a.createElement(
                    Ie.a,
                    { nativeID: $o, style: me.checkboxText },
                    $.a.createElement(Te.b, { color: 'gray700' }, nc),
                    $.a.createElement(Te.b, { color: 'gray700', style: me.text }, rc),
                  ),
                )
              }),
              z()(B()(e), '_needsBackside', function () {
                var t = e.props,
                  a = t.documentFormats,
                  i = t.idCountry,
                  n = t.idType
                return a && i && n && a[i].id_types[n].needs_backside
              }),
              z()(B()(e), '_renderUploadTargets', function () {
                var t = e.props,
                  a = t.backImage,
                  i = t.frontImage,
                  n = e._needsBackside(),
                  r = n ? Xo : ic,
                  l = n ? Qo : ac
                return $.a.createElement(
                  Ie.a,
                  { accessibilityLabelledBy: pe.b, accessibilityRole: 'group', style: cc.gridContainer },
                  $.a.createElement(zo, {
                    accessibilityLabel: r,
                    mediaItem: i,
                    onChange: e._handleAddFrontMedia,
                    onRemove: e._handleRemoveFrontID,
                    title: l,
                  }),
                  n &&
                    $.a.createElement(zo, {
                      accessibilityLabel: tc,
                      mediaItem: a,
                      onChange: e._handleAddBackMedia,
                      onRemove: e._handleRemoveBackID,
                      title: ec,
                    }),
                )
              }),
              e
            )
          }
          return (
            G()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.resetAuthenticationResult(), this.props.resetDocumentIdProcess()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.uploadEntityId
                  t !== e.uploadEntityId &&
                    t &&
                    !this._isErrorState() &&
                    (this._handleScribe('success'), this._resetForm(), this.props.setNextFlow())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._resetForm()
                },
              },
              {
                key: '_resetForm',
                value: function () {
                  this._handleRemoveBackID(), this._handleRemoveFrontID(), this.props.resetIntakeUpload()
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  var t = this.props.analytics
                  t.scribe(
                    U()(
                      U()({}, t.contextualScribeNamespace),
                      {},
                      { element: 'upload', action: e, data: t.contextualScribeData },
                    ),
                  )
                },
              },
              {
                key: '_renderError',
                value: function () {
                  var e = this.props.uploadRequestError
                  return (
                    this._handleScribe('failure'),
                    $.a.createElement(Oo, { error: e, onButtonClick: this._handleErrorButtonClick })
                  )
                },
              },
              {
                key: '_render',
                value: function () {
                  var e = this.props,
                    t = e.backID,
                    a = e.frontID,
                    i = e.isConfirmed,
                    n = e.isNarrow,
                    r = (this._needsBackside() && !t) || !a || !i || this._isUploading()
                  return $.a.createElement(
                    Ie.a,
                    { style: [me.container, n && me.narrowContainer] },
                    $.a.createElement(
                      Te.b,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: pe.b,
                        size: 'title4',
                        style: me.header,
                        weight: 'heavy',
                      },
                      Jo,
                    ),
                    $.a.createElement(
                      Ie.a,
                      { style: me.scrollableContainer },
                      $.a.createElement(Te.b, { color: 'gray700' }, Zo),
                      this._renderUploadTargets(),
                      this._renderCheckbox(),
                    ),
                    $.a.createElement(
                      fe.a,
                      { disabled: r, onPress: this._handleSubmit, style: me.buttonFixed, type: 'brandFilled' },
                      lc,
                    ),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._isErrorState() ? this._renderError() : this._render()
                },
              },
            ]),
            a
          )
        })($.a.Component),
        cc = be.a.create(function (e) {
          return { gridContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space16 } }
        }),
        sc = wo(oc),
        dc = { hasId: !0, hasEmail: !0, hasWebsite: !0 },
        uc =
          ((E = {}),
          z()(E, te.l.ACTIVISM, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: z()({}, te.b.ACTIVIST, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          z()(E, te.l.COMPANY, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((o = {}),
              z()(o, te.e.COMPANY, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              z()(o, te.e.EXECUTIVE, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              o),
          }),
          z()(E, te.l.ENTERTAINMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((c = {}),
              z()(c, te.f.ENTERTAINMENT_INDIVIDUAL, { hasId: !1, hasEmail: !1, hasWebsite: !1 }),
              z()(c, te.f.ENTERTAINMENT_COMPANY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              z()(c, te.f.PRODUCTION, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              c),
          }),
          z()(E, te.l.GOVERNMENT, {
            hasId: !1,
            hasEmail: !1,
            hasWebsite: !0,
            subtype: z()({}, te.i.CANDIDATE, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
          }),
          z()(E, te.l.INFLUENCER_OTHER, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((s = {}),
              z()(s, te.j.INFLUENTIAL_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(s, te.j.CONTENT_CREATOR, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              s),
          }),
          z()(E, te.l.NEWS, {
            hasId: !1,
            hasEmail: !0,
            hasWebsite: !0,
            subtype:
              ((d = {}),
              z()(d, te.k.JOURNALIST, { hasId: !0, hasEmail: !0, hasWebsite: !0 }),
              z()(d, te.k.FREELANCER, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(d, te.k.ORGANIZATION, { hasId: !1, hasEmail: !0, hasWebsite: !0 }),
              d),
          }),
          z()(E, te.l.SPORTS, {
            hasId: !0,
            hasEmail: !1,
            hasWebsite: !0,
            subtype:
              ((u = {}),
              z()(u, te.q.SPORTS_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              z()(u, te.q.SPORTS_ENTITY, { hasId: !1, hasEmail: !1, hasWebsite: !0 }),
              z()(u, te.q.GAMING_INDIVIDUAL, { hasId: !0, hasEmail: !1, hasWebsite: !0 }),
              u),
          }),
          E),
        Ec = Z.a.i79902b4,
        pc = Z.a.fb2fcb5b,
        bc = Z.a.e43425fa,
        mc = Z.a.cb7c2e2e,
        Ic = Z.a.a411926a,
        Tc = Z.a.g253cddf,
        fc = Z.a.cf93bcbf,
        Nc = Z.a.ca5fb0d4,
        hc = Z.a.g40cd2c0,
        _c = { title: Ec, description: pc },
        yc =
          ((p = {}),
          z()(p, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
          z()(p, te.d.EMAIL, { label: Ic, subtext: Tc }),
          z()(p, te.d.WEBSITE, { label: fc, subtext: Nc }),
          p),
        vc = U()(U()({}, _c), {}, { items: U()({}, yc) }),
        Ac = { title: Z.a.a7f1cff6, description: Z.a.ce40e7a5, websiteLabel: fc },
        Cc = Z.a.dff1555f,
        Sc = Z.a.ed751204,
        gc = Z.a.fbc023bf,
        Rc = { headline: Cc, subtext: Sc, actionLabel: gc, tertiaryActionLabel: Z.a.e785ce06 },
        Oc = Z.a.i8d58f3d,
        Lc = U()(U()({}, Rc), {}, { tertiaryActionLabel: Oc }),
        Fc = Z.a.eb21eca9,
        xc = U()(U()({}, Rc), {}, { tertiaryActionLabel: Fc }),
        Dc = Z.a.f848a69d,
        Mc = Z.a.d59b5365,
        Uc = Z.a.bfb01c62,
        Pc = { headline: Cc, subtext: Dc, actionLabel: gc, tertiaryActionLabel: Uc },
        kc = U()(U()({}, Pc), {}, { subtext: Mc }),
        wc = { headline: Cc, subtext: Dc, actionLabel: gc, tertiaryActionLabel: Uc },
        Gc = Z.a.ibd16281,
        Wc = Z.a.d5254e1b,
        Bc = Z.a.h45b00d7,
        Vc = Z.a.bd9d7f96,
        Yc = Z.a.g32c2900,
        Kc = Z.a.e6327f3b,
        jc = Z.a.c7f75eab,
        Hc = Z.a.eb08a392,
        zc = Z.a.je4c4696,
        qc = Z.a.dcc23261,
        $c = Z.a.h96ba9b6,
        Jc = Z.a.e4610048,
        Zc = Z.a.dedf41f1,
        Qc = Z.a.c78e091a,
        Xc = Z.a.g5657ec3,
        es = Z.a.baf718c3,
        ts = Z.a.c65bbbc1,
        as = Z.a.i31e3606,
        is = Z.a.d85ef4a7,
        ns = Z.a.ddb19f72,
        rs = Z.a.a8d332f2,
        ls = Z.a.f7afbaeb,
        os = Z.a.d4ab0055,
        cs = Z.a.d2a77621,
        ss = Z.a.e23b92c5,
        ds = Z.a.b03ae068,
        us = Z.a.g0daba49,
        Es = Z.a.h85524c4,
        ps = Z.a.cdcd9cd5,
        bs = Z.a.gcee7aad,
        ms = Z.a.e6dc91b1,
        Is = Z.a.ga603b22,
        Ts =
          ((R = { header: Ec }),
          z()(
            R,
            te.l.ACTIVISM,
            z()({}, te.b.ACTIVIST, {
              description: qc,
              items:
                ((b = {}),
                z()(b, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(b, te.d.WEBSITE, { label: fc, subtext: $c, description: Jc, inputLabel: hc }),
                b),
            }),
          ),
          z()(
            R,
            te.l.INFLUENCER_OTHER,
            z()({}, te.j.INFLUENTIAL_INDIVIDUAL, {
              description: Zc,
              items:
                ((m = {}),
                z()(m, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(m, te.d.WEBSITE, { label: fc, subtext: Qc, description: Xc, inputLabel: hc }),
                m),
            }),
          ),
          z()(
            R,
            te.l.COMPANY,
            ((f = {}),
            z()(f, te.e.COMPANY, {
              description: es,
              items:
                ((I = {}),
                z()(I, te.d.EMAIL, { label: Ic, subtext: as }),
                z()(I, te.d.WEBSITE, { label: fc, subtext: Vc, description: ns, inputLabel: hc }),
                I),
            }),
            z()(f, te.e.EXECUTIVE, {
              description: ts,
              items:
                ((T = {}),
                z()(T, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(T, te.d.EMAIL, { label: Ic, subtext: as }),
                z()(T, te.d.WEBSITE, { label: fc, subtext: is, description: rs, inputLabel: hc }),
                T),
            }),
            f),
          ),
          z()(
            R,
            te.l.ENTERTAINMENT,
            ((N = {}),
            z()(N, te.f.ENTERTAINMENT_COMPANY, {
              description: Bc,
              items: z()({}, te.d.WEBSITE, { label: fc, subtext: jc, description: ns, inputLabel: hc }),
            }),
            z()(N, te.f.PRODUCTION, {
              description: Yc,
              items: z()({}, te.d.WEBSITE, { label: fc, subtext: jc, description: Kc, inputLabel: hc }),
            }),
            N),
          ),
          z()(
            R,
            te.l.GOVERNMENT,
            z()({}, te.i.CANDIDATE, {
              description: Hc,
              items:
                ((h = {}),
                z()(h, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(h, te.d.WEBSITE, { label: fc, subtext: Vc, description: zc, inputLabel: hc }),
                h),
            }),
          ),
          z()(
            R,
            te.l.NEWS,
            ((A = {}),
            z()(A, te.k.FREELANCER, {
              description: os,
              items:
                ((_ = {}),
                z()(_, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(_, te.d.WEBSITE, { label: fc, subtext: ss, description: Gc }),
                _),
            }),
            z()(A, te.k.JOURNALIST, {
              description: ls,
              items:
                ((y = {}),
                z()(y, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(y, te.d.EMAIL, { label: Ic, subtext: cs }),
                z()(y, te.d.WEBSITE, { label: fc, subtext: ss, description: Gc }),
                y),
            }),
            z()(A, te.k.ORGANIZATION, {
              description: ds,
              items:
                ((v = {}),
                z()(v, te.d.EMAIL, { label: Ic, subtext: cs }),
                z()(v, te.d.WEBSITE, { label: fc, subtext: Vc, description: Wc }),
                v),
            }),
            A),
          ),
          z()(
            R,
            te.l.SPORTS,
            ((g = {}),
            z()(g, te.q.SPORTS_INDIVIDUAL, {
              description: ms,
              items:
                ((C = {}),
                z()(C, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(C, te.d.WEBSITE, { label: fc, subtext: Vc, description: Is }),
                C),
            }),
            z()(g, te.q.SPORTS_ENTITY, {
              description: ps,
              items: z()({}, te.d.WEBSITE, { label: fc, subtext: Vc, description: bs }),
            }),
            z()(g, te.q.GAMING_INDIVIDUAL, {
              description: us,
              items:
                ((S = {}),
                z()(S, te.d.IDENTITY_DOCUMENT, { label: bc, subtext: mc }),
                z()(S, te.d.WEBSITE, { label: fc, subtext: Vc, description: Es }),
                S),
            }),
            g),
          ),
          R),
        fs = function (e, t) {
          return e && t ? Ts[e][t] : vc
        },
        Ns = function (e, t, a) {
          var i = fs(t, a).items,
            n = dc
          t && a ? (n = uc[t].subtype[a]) : t && (n = uc[t])
          var r = []
          return (
            n.hasId &&
              r.push({
                helpText: i[te.d.IDENTITY_DOCUMENT].subtext,
                label: i[te.d.IDENTITY_DOCUMENT].label,
                value: te.d.IDENTITY_DOCUMENT,
              }),
            n.hasEmail &&
              e &&
              r.push({ helpText: i[te.d.EMAIL].subtext, label: i[te.d.EMAIL].label, value: te.d.EMAIL }),
            n.hasWebsite &&
              r.push({ helpText: i[te.d.WEBSITE].subtext, label: i[te.d.WEBSITE].label, value: te.d.WEBSITE }),
            r
          )
        },
        hs = Object.freeze(
          ((O = {}),
          z()(O, te.h.AUTHENTICITY_TYPE_SELECT, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              i = e.userEmail
            return {
              type: 'radio',
              props: {
                description: fs(t, a).description,
                getNextFormStep: function (e) {
                  switch (e) {
                    case te.d.IDENTITY_DOCUMENT:
                      return te.h.INTAKE_TYPE_SELECT
                    case te.d.EMAIL:
                      return te.h.EMAIL_VERIFICATION
                    case te.d.WEBSITE:
                      return te.h.SITE_VERIFICATION
                    default:
                      return te.h.THANK_YOU
                  }
                },
                items: Ns(i, t, a),
                title: vc.title,
              },
            }
          }),
          z()(O, te.h.SITE_VERIFICATION, function (e) {
            var t = e.notabilityCategory,
              a = e.notabilitySubcategory,
              i = fs(t, a).items[te.d.WEBSITE]
            return {
              type: 'input',
              props: {
                title: Ac.title,
                description: i.description || Ac.description,
                items: [{ dataKey: te.c.WEBSITE, label: i.inputLabel || Ac.websiteLabel, required: !0 }],
              },
            }
          }),
          z()(O, te.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL, function (e) {
            var t,
              a,
              i,
              n,
              r,
              l = e.notabilityCategory,
              o = e.notabilityData,
              c = e.notabilitySubcategory,
              s = e.setFormStepData,
              d = e.setNextFlow,
              u = e.setPreviousFlow,
              E = []
            switch (l) {
              case te.l.COMPANY:
              case te.l.ACTIVISM:
                E = null !== (t = null == o ? void 0 : o.leadershipReferenceUrl) && void 0 !== t ? t : []
                break
              case te.l.INFLUENCER_OTHER:
              case te.l.ENTERTAINMENT:
                E = null !== (a = null == o ? void 0 : o.mainReferenceUrl) && void 0 !== a ? a : []
                break
              case te.l.GOVERNMENT:
                E = null !== (i = null == o ? void 0 : o.publicReferenceUrl) && void 0 !== i ? i : []
                break
              case te.l.NEWS:
                E = null !== (n = null == o ? void 0 : o.authorReferenceUrl) && void 0 !== n ? n : []
                break
              case te.l.SPORTS:
                E = null !== (r = null == o ? void 0 : o.teamReferenceUrl) && void 0 !== r ? r : []
            }
            var p = Rc,
              b = function () {
                return d(te.h.AUTHENTICITY_TYPE_SELECT)
              }
            switch (c) {
              case te.n.CONTENT_CREATOR:
                ;(p = kc),
                  (b = function () {
                    return u()
                  })
                break
              case te.n.ENTERTAINMENT_INDIVIDUAL:
                ;(p = Pc),
                  (b = function () {
                    return u()
                  })
                break
              case te.n.OFFICE:
                ;(p = xc),
                  (b = function () {
                    s(te.h.AUTHENTICITY_TYPE_SELECT, te.d.EMAIL), d(te.h.EMAIL_VERIFICATION)
                  })
                break
              case te.n.OFFICIAL:
                ;(p = Lc),
                  (b = function () {
                    s(te.h.AUTHENTICITY_TYPE_SELECT, te.d.IDENTITY_DOCUMENT), d(te.h.INTAKE_TYPE_SELECT)
                  })
            }
            return {
              type: 'info',
              props: U()(
                U()({}, p),
                {},
                {
                  onAction: function () {
                    s(te.h.AUTHENTICITY_TYPE_SELECT, te.d.WEBSITE),
                      s(te.h.SITE_VERIFICATION, z()({}, te.c.WEBSITE, E)),
                      d(te.h.REVIEW_SUBMIT)
                  },
                  onTertiaryAction: function () {
                    return b()
                  },
                },
              ),
            }
          }),
          z()(O, te.h.WEBSITE_REFERENCE_CONFIRM_PROCEED, { type: 'info', props: U()({}, wc) }),
          O),
        ),
        _s =
          (a('i4UL'),
          Object.freeze(
            ((L = {}),
            z()(L, te.h.NOTABILITY_CATEGORY_SELECT, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'radio',
                props: {
                  description: Ja.description,
                  getNextFormStep: function (e) {
                    switch (e) {
                      case te.l.ACTIVISM:
                        return a || n ? te.h.ACTIVIST_QUALIFICATIONS : te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE
                      case te.l.INFLUENCER_OTHER:
                        return a || n ? te.h.INFLUENCER_SUBCATEGORY : te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE
                      case te.l.COMPANY:
                        return te.h.COMPANY_SUBCATEGORY
                      case te.l.ENTERTAINMENT:
                        return te.h.ENTERTAINMENT_QUALIFICATIONS
                      case te.l.GOVERNMENT:
                        return te.h.GOVERNMENT_SUBCATEGORY
                      case te.l.NEWS:
                        return te.h.NEWS_QUALIFICATIONS
                      case te.l.SPORTS:
                        return te.h.SPORTS_SUBCATEGORY
                      default:
                        return null
                    }
                  },
                  items: [
                    { label: za[te.l.GOVERNMENT], value: te.l.GOVERNMENT },
                    { label: za[te.l.COMPANY], value: te.l.COMPANY },
                    { label: za[te.l.NEWS], value: te.l.NEWS },
                    { label: za[te.l.ENTERTAINMENT], value: te.l.ENTERTAINMENT },
                    { label: za[te.l.SPORTS], value: te.l.SPORTS },
                    { label: za[te.l.INFLUENCER_OTHER], value: te.l.INFLUENCER_OTHER },
                    { label: za[te.l.ACTIVISM], value: te.l.ACTIVISM },
                  ],
                  title: Ja.title,
                },
              }
            }),
            z()(L, te.h.ACTIVIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: ri.title,
                description: ri.description,
                items: [
                  U()(U()({}, ri.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, ri.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, ri.items[2]), {}, { value: te.m.NEWS }),
                  U()(U()({}, ri.items[3]), {}, { value: te.m.LEADERSHIP }),
                ],
                getNextFormStep: function (e) {
                  return e === te.m.GOOGLE
                    ? te.h.ACTIVIST_GOOGLE_TRENDS
                    : e === te.m.WIKIPEDIA
                    ? te.h.ACTIVIST_WIKIPEDIA
                    : e === te.m.NEWS
                    ? te.h.ACTIVIST_NEWS
                    : e === te.m.LEADERSHIP
                    ? te.h.ACTIVIST_LEADERSHIP
                    : void 0
                },
              },
            }),
            z()(L, te.h.ACTIVIST_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: oi.title,
                description: oi.description,
                items: [{ dataKey: te.m.GOOGLE, label: oi.label, required: !0 }],
              },
            }),
            z()(L, te.h.ACTIVIST_LEADERSHIP, {
              type: 'input',
              props: {
                title: Ei.title,
                description: Ei.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: Ei.label, required: !0 }],
                confirmationText: Ei.confirmationText,
              },
            }),
            z()(L, te.h.ACTIVIST_NEWS, {
              type: 'input',
              props: {
                title: di.title,
                description: di.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: di.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: di.addFieldText,
                maxItems: 10,
              },
            }),
            z()(L, te.h.ACTIVIST_WIKIPEDIA, {
              type: 'input',
              props: {
                title: si.title,
                description: si.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: si.label, required: !0 }],
              },
            }),
            z()(L, te.h.ACTIVIST_QUALIFICATIONS_INELIGIBLE, {
              type: 'info',
              props: {
                headline: ri.notEligibleTitle,
                subtext: ri.notEligibleDescription,
                actionLabel: ri.notEligibleButton,
              },
            }),
            z()(L, te.h.COMPANY_SUBCATEGORY, {
              type: 'radio',
              props: U()(
                U()({}, Oi),
                {},
                {
                  items: [
                    U()(U()({}, Oi.items[0]), {}, { value: te.e.COMPANY }),
                    U()(U()({}, Oi.items[1]), {}, { value: te.e.EXECUTIVE }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.e.COMPANY
                      ? te.h.COMPANY_NOTABILITY_METHOD
                      : e === te.e.EXECUTIVE
                      ? te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM
                      : void 0
                  },
                },
              ),
            }),
            z()(L, te.h.COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = [
                  U()(U()({}, Fi.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, Fi.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, Fi.items[2]), {}, { value: te.m.STOCK }),
                  U()(U()({}, Fi.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: U()(
                  U()({}, Fi),
                  {},
                  {
                    items: a ? i : i.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.COMPANY_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.COMPANY_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.COMPANY_STOCK_EXCHANGE
                        : e === te.m.NEWS
                        ? te.h.COMPANY_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(L, te.h.COMPANY_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Di.title,
                  description: Di.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Di.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.COMPANY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Ui.title,
                  description: Ui.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Ui.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.COMPANY_STOCK_EXCHANGE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: ki.title,
                  description: ki.description,
                  items: [{ dataKey: te.m.STOCK, label: ki.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Gi.title,
                description: Gi.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Gi.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Gi.addFieldText,
              },
            }),
            z()(L, te.h.COMPANY_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: U()({}, Vi) }),
            z()(L, te.h.COMPANY_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: U()(
                U()({}, Ki),
                {},
                {
                  items: [
                    U()(U()({}, Ki.items[0]), {}, { value: te.m.NEWS }),
                    U()(U()({}, Ki.items[1]), {}, { value: te.m.LEADERSHIP }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.m.NEWS
                      ? te.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE
                      : e === te.m.LEADERSHIP
                      ? te.h.COMPANY_INDIVIDUAL_LEADERSHIP
                      : void 0
                  },
                },
              ),
            }),
            z()(L, te.h.COMPANY_INDIVIDUAL_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: Hi.title,
                description: Hi.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Hi.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Hi.addFieldText,
              },
            }),
            z()(L, te.h.COMPANY_INDIVIDUAL_LEADERSHIP, {
              type: 'input',
              props: {
                title: qi.title,
                description: qi.description,
                items: [{ dataKey: te.m.LEADERSHIP, label: qi.label, required: !0 }],
                confirmationText: qi.confirmationText,
              },
            }),
            z()(L, te.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: In.title,
                  description: In.description,
                  items: [{ dataKey: te.m.GOOGLE, label: In.label, required: !0 }],
                  nextFormStep: a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: fn.title,
                description: fn.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: fn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: fn.addFieldText,
              },
            }),
            z()(L, te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i,
                r = [
                  U()(U()({}, bn.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, bn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, bn.items[2]), {}, { value: te.m.STOCK }),
                  U()(U()({}, bn.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: U()(
                  U()({}, bn),
                  {},
                  {
                    items: a || n ? r : r.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.ENTERTAINMENT_COMPANY_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.ENTERTAINMENT_COMPANY_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE
                        : e === te.m.NEWS
                        ? te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(L, te.h.ENTERTAINMENT_COMPANY_STOCK_REFERENCE, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: hn.title,
                  description: hn.description,
                  items: [{ dataKey: te.m.STOCK, label: hn.label, required: !0 }],
                  nextFormStep: a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.ENTERTAINMENT_COMPANY_WIKIPEDIA, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: yn.title,
                  description: yn.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: yn.label, required: !0 }],
                  nextFormStep: a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_COMPANY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL, {
              type: 'input',
              props: {
                title: Wn.title,
                description: Wn.description,
                items: [{ dataKey: te.m.IMDB, label: Wn.label, required: !0 }],
              },
            }),
            z()(L, te.h.ENTERTAINMENT_INDIVIDUAL_MAIN_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Yn.title,
                description: Yn.description,
                items: [{ dataKey: te.m.MAIN, label: Yn.label, required: !0 }],
              },
            }),
            z()(L, te.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS, {
              type: 'input',
              props: {
                title: Bn.title,
                description: Bn.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Gi.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Bn.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: kn.title,
                description: kn.description,
                items: [
                  { helpText: kn.items[0].description, label: kn.items[0].label, value: te.m.IMDB },
                  { helpText: kn.items[1].description, label: kn.items[1].label, value: te.m.NEWS },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.IMDB
                    ? te.h.ENTERTAINMENT_INDIVIDUAL_IMDB_URL
                    : e === te.m.NEWS
                    ? te.h.ENTERTAINMENT_INDIVIDUAL_NEWS_COVERAGE_URLS
                    : void 0
                },
              },
            }),
            z()(L, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: an.title,
                  description: an.description,
                  items: [{ dataKey: te.m.GOOGLE, label: an.label, required: !0 }],
                  nextFormStep:
                    a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: rn.title,
                description: rn.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: rn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: rn.addFieldText,
              },
            }),
            z()(L, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i,
                r = [
                  U()(U()({}, on.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, on.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, on.items[2]), {}, { value: te.m.STOCK }),
                  U()(U()({}, on.items[3]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: U()(
                  U()({}, on),
                  {},
                  {
                    items: a || n ? r : r.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE
                        : e === te.m.NEWS
                        ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(L, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_STOCK_EXCHANGE, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: sn.title,
                  description: sn.description,
                  items: [{ dataKey: te.m.STOCK, label: sn.label, required: !0 }],
                  nextFormStep:
                    a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_WIKIPEDIA, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: un.title,
                  description: un.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: un.label, required: !0 }],
                  nextFormStep:
                    a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.ENTERTAINMENT_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: En.title,
                description: En.description,
                items: [
                  U()(U()({}, En.items[0]), {}, { value: te.f.ENTERTAINMENT_COMPANY }),
                  U()(U()({}, En.items[1]), {}, { value: te.f.ENTERTAINMENT_INDIVIDUAL }),
                  U()(U()({}, En.items[2]), {}, { value: te.f.PRODUCTION }),
                ],
                getNextFormStep: function (e) {
                  return e === te.f.ENTERTAINMENT_COMPANY
                    ? te.h.ENTERTAINMENT_COMPANY_NOTABILITY_METHOD
                    : e === te.f.ENTERTAINMENT_INDIVIDUAL
                    ? te.h.ENTERTAINMENT_INDIVIDUAL_QUALIFICATIONS
                    : e === te.f.PRODUCTION
                    ? te.h.ENTERTAINMENT_PRODUCTION_ORGANIZATION_NOTABILITY_METHOD
                    : void 0
                },
              },
            }),
            z()(L, te.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: nr.candidateTitle,
                subtext: nr.candidateDescription,
                actionLabel: nr.confirmButtonLabel,
                tertiaryActionLabel: nr.declineButtonLabel,
              },
            }),
            z()(L, te.h.GOVERNMENT_CANDIDATE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: mr.title,
                description: mr.description,
                items: Ot()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: mr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: mr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.GOVERNMENT_CANDIDATE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: pr.candidateTitle,
                subtext: pr.candidateDescription,
                actionLabel: pr.confirmButtonLabel,
                tertiaryActionLabel: pr.declineButtonLabel,
                tertiaryActionLink: se,
              },
            }),
            z()(L, te.h.GOVERNMENT_CANDIDATE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: vr.title,
                description: vr.description,
                items: [{ dataKey: te.m.PUBLIC, label: vr.websiteLabel, required: !0 }],
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICE_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Tr.title,
                description: Tr.description,
                items: Ot()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Tr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Tr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: pr.officeTitle,
                subtext: pr.officeDescription,
                actionLabel: pr.confirmButtonLabel,
                tertiaryActionLabel: pr.declineButtonLabel,
                tertiaryActionLink: se,
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICE_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: gr.title,
                description: gr.description,
                items: [{ dataKey: te.m.PUBLIC, label: gr.websiteLabel, required: !0 }],
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM, {
              type: 'info',
              props: {
                headline: nr.officialTitle,
                subtext: nr.officialDescription,
                actionLabel: nr.confirmButtonLabel,
                tertiaryActionLabel: nr.declineButtonLabel,
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICIAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: Nr.title,
                description: Nr.description,
                items: Ot()(
                  Array(5).fill({ dataKey: te.m.NEWS, labelGenerator: Nr.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: Nr.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICIAL_PROFILE_CONFIRM, {
              type: 'info',
              props: {
                headline: pr.officialTitle,
                subtext: pr.officialDescription,
                actionLabel: pr.confirmButtonLabel,
                tertiaryActionLabel: pr.declineButtonLabel,
                tertiaryActionLink: se,
              },
            }),
            z()(L, te.h.GOVERNMENT_OFFICIAL_PUBLIC_REFERENCE_URL, {
              type: 'input',
              props: {
                title: Or.title,
                description: Or.description,
                items: [{ dataKey: te.m.PUBLIC, label: Or.websiteLabel, required: !0 }],
              },
            }),
            z()(L, te.h.GOVERNMENT_SUBCATEGORY, {
              type: 'radio',
              props: {
                title: Zn.title,
                description: Zn.description,
                items: [
                  U()(U()({}, Zn.items[0]), {}, { value: te.i.OFFICIAL }),
                  U()(U()({}, Zn.items[1]), {}, { value: te.i.CANDIDATE }),
                  U()(U()({}, Zn.items[2]), {}, { value: te.i.OFFICE }),
                ],
                getNextFormStep: function (e) {
                  return e === te.i.OFFICIAL
                    ? te.h.GOVERNMENT_OFFICIAL_LEVEL_CONFIRM
                    : e === te.i.CANDIDATE
                    ? te.h.GOVERNMENT_CANDIDATE_LEVEL_CONFIRM
                    : e === te.i.OFFICE
                    ? te.h.GOVERNMENT_OFFICE_PROFILE_CONFIRM
                    : void 0
                },
              },
            }),
            z()(L, te.h.CONTENT_CREATOR_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: Ln.title,
                description: Ln.description,
                items: [{ dataKey: te.m.GOOGLE, label: Ln.label, required: !0 }],
              },
            }),
            z()(L, te.h.CONTENT_CREATOR_NEWS, {
              type: 'input',
              props: {
                title: Dn.title,
                description: Dn.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Dn.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Dn.addFieldText,
                maxItems: 10,
              },
            }),
            z()(L, te.h.CONTENT_CREATOR_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: gn.title,
                description: gn.description,
                items: [
                  U()(U()({}, gn.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, gn.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, gn.items[2]), {}, { value: te.m.NEWS }),
                ],
                getNextFormStep: function (e) {
                  return e === te.m.GOOGLE
                    ? te.h.CONTENT_CREATOR_GOOGLE_TRENDS
                    : e === te.m.WIKIPEDIA
                    ? te.h.CONTENT_CREATOR_WIKIPEDIA
                    : e === te.m.NEWS
                    ? te.h.CONTENT_CREATOR_NEWS
                    : void 0
                },
              },
            }),
            z()(L, te.h.CONTENT_CREATOR_WIKIPEDIA, {
              type: 'input',
              props: {
                title: xn.title,
                description: xn.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: xn.label, required: !0 }],
              },
            }),
            z()(L, te.h.CREATOR_PROFILE, {
              type: 'input',
              props: {
                title: Rn.title,
                description: Rn.description,
                items: [{ dataKey: te.m.MAIN, label: Rn.items[0].label, required: !0 }],
              },
            }),
            z()(L, te.h.INFLUENCER_GOOGLE_TRENDS, {
              type: 'input',
              props: {
                title: _i.title,
                description: _i.description,
                items: [{ dataKey: te.m.GOOGLE, label: _i.label, required: !0 }],
              },
            }),
            z()(L, te.h.INFLUENCER_NEWS, {
              type: 'input',
              props: {
                title: Ai.title,
                description: Ai.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: Ai.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: Ai.addFieldText,
                maxItems: 10,
              },
            }),
            z()(L, te.h.INFLUENCER_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Ni.title,
                description: Ni.description,
                items: [
                  U()(U()({}, Ni.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, Ni.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, Ni.items[2]), {}, { value: te.m.NEWS }),
                ],
                getNextFormStep: function (e) {
                  return e === te.m.GOOGLE
                    ? te.h.INFLUENCER_GOOGLE_TRENDS
                    : e === te.m.WIKIPEDIA
                    ? te.h.INFLUENCER_WIKIPEDIA
                    : e === te.m.NEWS
                    ? te.h.INFLUENCER_NEWS
                    : void 0
                },
              },
            }),
            z()(L, te.h.INFLUENCER_QUALIFICATIONS_INELIGIBLE, {
              type: 'info',
              props: {
                headline: Ni.notEligibleTitle,
                subtext: Ni.notEligibleDescription,
                actionLabel: Ni.notEligibleButton,
              },
            }),
            z()(L, te.h.INFLUENCER_SUBCATEGORY, {
              type: 'radio',
              props: U()(
                U()({}, mi),
                {},
                {
                  items: [
                    U()(U()({}, mi.items[0]), {}, { value: te.j.CONTENT_CREATOR }),
                    U()(U()({}, mi.items[1]), {}, { value: te.j.INFLUENTIAL_INDIVIDUAL }),
                  ],
                  getNextFormStep: function (e) {
                    return e === te.j.CONTENT_CREATOR
                      ? te.h.CONTENT_CREATOR_QUALIFICATIONS
                      : e === te.j.INFLUENTIAL_INDIVIDUAL
                      ? te.h.INFLUENCER_QUALIFICATIONS
                      : void 0
                  },
                },
              ),
            }),
            z()(L, te.h.INFLUENCER_WIKIPEDIA, {
              type: 'input',
              props: {
                title: vi.title,
                description: vi.description,
                items: [{ dataKey: te.m.WIKIPEDIA, label: vi.label, required: !0 }],
              },
            }),
            z()(L, te.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: ol.title,
                description: ol.description,
                items: Ot()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: ol.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: ol.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: ol.title,
                description: ol.description,
                items: Ot()(
                  Array(3).fill({
                    dataKey: te.m.ARTICLES,
                    labelGenerator: ol.articleNumerationLabelGenerator,
                    required: !0,
                  }),
                ),
                addFieldText: ol.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL, {
              type: 'input',
              props: {
                title: nl.title,
                description: nl.description,
                items: [{ dataKey: te.m.AUTHOR, label: nl.websiteLabel, required: !0 }],
                confirmationText: nl.confirmationText,
              },
            }),
            z()(L, te.h.NEWS_NOTABILITY_CRITERIA_CONFIRMATION, {
              type: 'info',
              props: {
                headline: El.title,
                subtext: El.description,
                actionLabel: El.actionLabel,
                tertiaryActionLabel: El.tertiaryActionLabel,
              },
            }),
            z()(L, te.h.NEWS_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: Pr.title,
                description: Pr.description,
                items: [
                  { helpText: Pr.items[0].description, label: Pr.items[0].label, value: te.k.JOURNALIST },
                  { helpText: Pr.items[1].description, label: Pr.items[1].label, value: te.k.FREELANCER },
                  { helpText: Pr.items[2].description, label: Pr.items[2].label, value: te.k.ORGANIZATION },
                ],
                getNextFormStep: function (e) {
                  return e === te.k.JOURNALIST
                    ? te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION
                    : e === te.k.FREELANCER
                    ? te.h.NEWS_FREELANCER_CREDIBILITY_ARTICLE_REFERENCE_URLS
                    : e === te.k.ORGANIZATION
                    ? te.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION
                    : void 0
                },
              },
            }),
            z()(L, te.h.NEWS_JOURNALIST_CRITERIA_CONFIRMATION, {
              type: 'info',
              props: U()(U()({}, $r), {}, { tertiaryActionLink: se }),
            }),
            z()(L, te.h.NEWS_JOURNALIST_SCREENNAME_CONFIRMATION, { type: 'screenName', props: U()({}, Kr) }),
            z()(L, te.h.NEWS_JOURNALIST_QUALIFICATIONS, {
              type: 'radio',
              props: {
                title: tl.title,
                description: tl.description,
                items: [
                  { helpText: tl.items[0].description, label: tl.items[0].label, value: te.m.AUTHOR },
                  { helpText: tl.items[1].description, label: tl.items[1].label, value: te.m.ARTICLES },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.ARTICLES
                    ? te.h.NEWS_CREDIBILITY_ARTICLE_REFERENCE_URLS
                    : e === te.m.AUTHOR
                    ? te.h.NEWS_CREDIBILITY_AUTHOR_REFERENCE_URL
                    : void 0
                },
              },
            }),
            z()(L, te.h.NEWS_ORGANIZATION_REQUIREMENTS_CONFIRMATION, {
              type: 'info',
              props: {
                headline: Br.title,
                subtext: Br.description,
                actionLabel: Br.confirmButtonLabel,
                tertiaryActionLabel: Br.declineButtonLabel,
                tertiaryActionLink: se,
              },
            }),
            z()(L, te.h.NEWS_ORGANIZATION_QUALIFICATIONS, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'radio',
                props: {
                  title: bl.title,
                  description: bl.description,
                  items: [
                    { helpText: bl.items[0].description, label: bl.items[0].label, value: te.m.GOOGLE },
                    { helpText: bl.items[1].description, label: bl.items[1].label, value: te.m.WIKIPEDIA },
                    { helpText: bl.items[2].description, label: bl.items[2].label, value: te.m.STOCK },
                  ].concat(
                    Ot()(
                      a || n
                        ? [{ helpText: bl.items[3].description, label: bl.items[3].label, value: te.m.ARTICLES }]
                        : [],
                    ),
                  ),
                  getNextFormStep: function (e) {
                    return e === te.m.GOOGLE
                      ? te.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL
                      : e === te.m.WIKIPEDIA
                      ? te.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL
                      : e === te.m.STOCK
                      ? te.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL
                      : e === te.m.ARTICLES
                      ? te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS
                      : void 0
                  },
                },
              }
            }),
            z()(L, te.h.NEWS_CREDIBILITY_GOOGLE_TRENDS_REFERENCE_URL, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: Il.title,
                  description: Il.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Il.label, required: !0 }],
                  nextFormStep:
                    a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(L, te.h.NEWS_CREDIBILITY_WIKIPEDIA_REFERENCE_URL, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: fl.title,
                  description: fl.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: fl.label, required: !0 }],
                  nextFormStep:
                    a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(L, te.h.NEWS_CREDIBILITY_STOCK_REFERENCE_URL, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = e.mentionsEligible,
                n = void 0 !== i && i
              return {
                type: 'input',
                props: {
                  title: hl.title,
                  description: hl.description,
                  items: [{ dataKey: te.m.STOCK, label: hl.label, required: !0 }],
                  nextFormStep:
                    a || n ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS,
                },
              }
            }),
            z()(L, te.h.NEWS_ORGANIZATION_CREDIBILITY_ARTICLE_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: yl.title,
                description: yl.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.ARTICLES, labelGenerator: yl.articleLabelGenerator, required: !0 }),
                ),
                addFieldText: yl.addFieldText,
                allowAddFields: !0,
                maxItems: 10,
              },
            }),
            z()(L, te.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: so.title,
                description: so.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: so.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: so.addFieldText,
                maxItems: 10,
              },
            }),
            z()(L, te.h.GAMING_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: io.title,
                description: io.description,
                items: [
                  { helpText: io.items[0].description, label: io.items[0].label, value: te.m.NEWS },
                  { helpText: io.items[1].description, label: io.items[1].label, value: te.m.TEAM },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.TEAM
                    ? te.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL
                    : e === te.m.NEWS
                    ? te.h.GAMING_INDIVIDUAL_NEWS_REFERENCE_URLS
                    : void 0
                },
              },
            }),
            z()(L, te.h.GAMING_INDIVIDUAL_TEAM_REFERENCE_URL, {
              type: 'input',
              props: {
                title: co.title,
                description: co.description,
                items: [{ dataKey: te.m.TEAM, label: co.websiteLabel, required: !0 }],
              },
            }),
            z()(L, te.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS, {
              type: 'input',
              props: {
                title: lo.title,
                description: lo.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: lo.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: lo.addFieldText,
                maxItems: 10,
              },
            }),
            z()(L, te.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL, {
              type: 'input',
              props: {
                title: ro.title,
                description: ro.description,
                items: [{ dataKey: te.m.TEAM, label: ro.websiteLabel, required: !0 }],
              },
            }),
            z()(L, te.h.SPORTS_ENTITY_NOTABILITY_METHOD, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t,
                i = [
                  U()(U()({}, Gl.items[0]), {}, { value: te.m.GOOGLE }),
                  U()(U()({}, Gl.items[1]), {}, { value: te.m.WIKIPEDIA }),
                  U()(U()({}, Gl.items[2]), {}, { value: te.m.STOCK }),
                  U()(U()({}, Gl.items[3]), {}, { value: te.m.TEAM }),
                  U()(U()({}, Gl.items[4]), {}, { value: te.m.NEWS }),
                ]
              return {
                type: 'radio',
                props: U()(
                  U()({}, Gl),
                  {},
                  {
                    items: a ? i : i.slice(0, -1),
                    getNextFormStep: function (e) {
                      return e === te.m.GOOGLE
                        ? te.h.SPORTS_ENTITY_GOOGLE_TRENDS
                        : e === te.m.WIKIPEDIA
                        ? te.h.SPORTS_ENTITY_WIKIPEDIA
                        : e === te.m.STOCK
                        ? te.h.SPORTS_ENTITY_STOCK_REFERENCE
                        : e === te.m.TEAM
                        ? te.h.SPORTS_ENTITY_WEBSITE
                        : e === te.m.NEWS
                        ? te.h.SPORTS_ENTITY_NEWS_REFERENCE
                        : void 0
                    },
                  },
                ),
              }
            }),
            z()(L, te.h.SPORTS_ENTITY_GOOGLE_TRENDS, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Bl.title,
                  description: Bl.description,
                  items: [{ dataKey: te.m.GOOGLE, label: Bl.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.SPORTS_ENTITY_WIKIPEDIA, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: Yl.title,
                  description: Yl.description,
                  items: [{ dataKey: te.m.WIKIPEDIA, label: Yl.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.SPORTS_ENTITY_STOCK_REFERENCE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: jl.title,
                  description: jl.description,
                  items: [{ dataKey: te.m.STOCK, label: jl.label, required: !0 }],
                  nextFormStep: t ? te.h.AUTHENTICITY_TYPE_SELECT : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.SPORTS_ENTITY_WEBSITE, function (e) {
              var t = e.followersEligible
              return {
                type: 'input',
                props: {
                  title: zl.title,
                  description: zl.description,
                  items: [{ dataKey: te.m.TEAM, label: zl.label, required: !0 }],
                  nextFormStep: t ? te.h.WEBSITE_REFERENCE_CONFIRM_AUTOFILL : te.h.SPORTS_ENTITY_NEWS_REFERENCE,
                },
              }
            }),
            z()(L, te.h.SPORTS_ENTITY_NEWS_REFERENCE, {
              type: 'input',
              props: {
                title: $l.title,
                description: $l.description,
                items: Ot()(
                  Array(3).fill({ dataKey: te.m.NEWS, labelGenerator: $l.articleLabelGenerator, required: !0 }),
                ),
                allowAddFields: !0,
                addFieldText: $l.addFieldText,
                maxItems: 10,
              },
            }),
            z()(L, te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: U()({}, Dl) }),
            z()(L, te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM, { type: 'screenName', props: U()({}, Ul) }),
            z()(L, te.h.SPORTS_INDIVIDUAL_NOTABILITY_METHOD, {
              type: 'radio',
              props: {
                title: Xl.title,
                description: Xl.description,
                items: [
                  { helpText: Xl.items[0].description, label: Xl.items[0].label, value: te.m.NEWS },
                  { helpText: Xl.items[1].description, label: Xl.items[1].label, value: te.m.TEAM },
                ],
                getNextFormStep: function (e) {
                  return e === te.m.TEAM
                    ? te.h.SPORTS_INDIVIDUAL_TEAM_REFERENCE_URL
                    : e === te.m.NEWS
                    ? te.h.SPORTS_INDIVIDUAL_NEWS_REFERENCE_URLS
                    : void 0
                },
              },
            }),
            z()(L, te.h.GAMING_INDIVIDUAL_INELIGIBLE, { type: 'info', props: U()({}, Pl) }),
            z()(L, te.h.SPORTS_SUBCATEGORY, function (e) {
              var t = e.followersEligible,
                a = void 0 !== t && t
              return {
                type: 'radio',
                props: U()(
                  U()({}, Ol),
                  {},
                  {
                    items: [
                      U()(U()({}, Ol.items[0]), {}, { value: te.q.SPORTS_INDIVIDUAL }),
                      U()(U()({}, Ol.items[1]), {}, { value: te.q.SPORTS_ENTITY }),
                      U()(U()({}, Ol.items[2]), {}, { value: te.q.GAMING_INDIVIDUAL }),
                    ],
                    getNextFormStep: function (e) {
                      return e === te.q.SPORTS_INDIVIDUAL
                        ? te.h.SPORTS_INDIVIDUAL_SCREENNAME_CONFIRM
                        : e === te.q.SPORTS_ENTITY
                        ? te.h.SPORTS_ENTITY_NOTABILITY_METHOD
                        : e === te.q.GAMING_INDIVIDUAL
                        ? a
                          ? te.h.GAMING_INDIVIDUAL_SCREENNAME_CONFIRM
                          : te.h.GAMING_INDIVIDUAL_INELIGIBLE
                        : void 0
                    },
                  },
                ),
              }
            }),
            L),
          )),
        ys = Object.freeze(
          ((F = {}),
          z()(F, te.h.TEST_INPUT, {
            type: 'input',
            props: {
              title: 'test input form',
              description: 'description here',
              items: [
                { dataKey: te.m.NEWS, label: 'news url', required: !0 },
                { dataKey: te.m.PUBLIC, label: 'public url', required: !1 },
              ],
              allowAddFields: !0,
            },
          }),
          z()(F, te.h.TEST_PIVOT, {
            type: 'pivot',
            props: {
              title: 'test pivot form',
              description: 'description here',
              items: [
                { description: 'go to test input screen', label: 'input', nextStep: te.h.TEST_INPUT },
                { description: 'go to test radio screen', label: 'radio', nextStep: te.h.TEST_RADIO },
              ],
            },
          }),
          z()(F, te.h.TEST_RADIO, function (e) {
            var t = e.followersEligible,
              a = void 0 !== t && t,
              i = e.mentionsEligible,
              n = void 0 !== i && i
            return {
              type: 'radio',
              props: {
                title: 'test radio form',
                description: 'description here',
                footer: 'footer here',
                items: [
                  {
                    helpText: 'if followers eligible go to test pivot else test input',
                    label: 'followers test',
                    value: 'radio 1',
                  },
                  {
                    helpText: 'if mentions eligible go to test pivot else test input',
                    label: 'mentions test',
                    value: 'radio 2',
                  },
                  {
                    helpText: 'if either eligible go to test pivot else test input',
                    label: 'followers/mentions test',
                    value: 'radio 3',
                  },
                ],
                getNextFormStep: function (e) {
                  return 'radio 1' === e
                    ? a
                      ? te.h.TEST_PIVOT
                      : te.h.TEST_INPUT
                    : 'radio 2' === e
                    ? n
                      ? te.h.TEST_PIVOT
                      : te.h.TEST_INPUT
                    : a || n
                    ? te.h.TEST_PIVOT
                    : te.h.TEST_INPUT
                },
              },
            }
          }),
          F),
        ),
        vs = Object.freeze(U()(U()(U()({}, hs), _s), ys)),
        As = function (e) {
          var t = Object(Qe.y)(e)
          return null != t && t.radioData ? t.radioData : ''
        },
        Cs = Object(Ze.a)()
          .propsFromState(function () {
            return { currentStep: Qe.z, formHistory: As }
          })
          .propsFromActions(function () {
            return { setFormStepData: Qe.R, setNextFlow: Qe.V, updateFormHistory: Qe.Y }
          })
          .withAnalytics(),
        Ss = a('fyvP'),
        gs = Z.a.c1df579e,
        Rs = be.a.create(function (e) {
          return {
            radioContainer: {
              paddingRight: 'calc('.concat(e.spaces.space12, ' + ').concat(e.borderWidths.medium, ')'),
            },
          }
        }),
        Os = Cs(function (e) {
          var t = e.analytics,
            a = e.buttonText,
            i = void 0 === a ? gs : a,
            n = e.currentStep,
            r = e.description,
            l = e.footer,
            o = e.formHistory,
            c = e.getNextFormStep,
            s = e.isNarrow,
            d = e.items,
            u = e.setFormStepData,
            E = e.setNextFlow,
            p = e.title,
            b = e.updateFormHistory,
            m = $.a.useState(o),
            I = Ee()(m, 2),
            T = I[0],
            f = I[1]
          $.a.useEffect(
            function () {
              f(o), u(n, o)
            },
            [n, o, u],
          )
          return $.a.createElement(
            Ie.a,
            { style: [me.container, s && me.narrowContainer] },
            $.a.createElement(
              Te.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: pe.b,
                size: 'title4',
                style: me.header,
                weight: 'heavy',
              },
              p,
            ),
            $.a.createElement(
              Ie.a,
              { style: me.scrollableContainer },
              r && $.a.createElement(Te.b, { color: 'gray700' }, r),
              $.a.createElement(
                Ie.a,
                { style: [me.contentContainer, Rs.radioContainer] },
                $.a.createElement(Ss.a, {
                  accessibilityLabel: p,
                  name: ''.concat(p, '-radiogroup'),
                  onChange: function (e, t) {
                    f(t), u(n, t)
                  },
                  options: d,
                  value: T,
                }),
              ),
              l && $.a.createElement(Te.b, { color: 'gray700' }, l),
            ),
            $.a.createElement(
              fe.a,
              {
                disabled: !T,
                onClick: function () {
                  var e = U()(
                    U()({}, t.contextualScribeNamespace),
                    {},
                    { element: 'CTA', action: 'click', data: t.contextualScribeData },
                  )
                  'notability_qualifications_select' === t.contextualScribeNamespace.component &&
                    (e = U()(
                      U()({}, e),
                      {},
                      {
                        data: U()(
                          U()({}, e.data),
                          {},
                          {
                            verification_application_details: U()(
                              U()({}, e.data.verification_application_details),
                              {},
                              { notability_method: [Ut(T)] },
                            ),
                          },
                        ),
                      },
                    )),
                    t.scribe(e),
                    b(T || '')
                  var a = c(T)
                  a && E(a)
                },
                style: me.buttonFixed,
                type: 'brandFilled',
              },
              i,
            ),
          )
        }),
        Ls = a('5FtR'),
        Fs = Object(Ze.a)().propsFromActions(function () {
          return { setNextFlow: Qe.V }
        }),
        xs = a('EweD'),
        Ds = 'verification-checkbox-label',
        Ms = Z.a.c1df579e,
        Us = Z.a.a6278dcb,
        Ps = function (e) {
          return !e.match(/\W/g)
        },
        ks = be.a.create(function (e) {
          return { input: { paddingHorizontal: 0 }, checkboxContainer: { paddingTop: 0 } }
        }),
        ws = Fs(function (e) {
          var t = e.buttonText,
            a = void 0 === t ? Ms : t,
            i = e.confirmationText,
            n = e.description,
            r = e.isNarrow,
            l = e.setNextFlow,
            o = e.title,
            c = $.a.useState(''),
            s = Ee()(c, 2),
            d = s[0],
            u = s[1],
            E = $.a.useState(!1),
            p = Ee()(E, 2),
            b = p[0],
            m = p[1],
            I = $.a.useState(!0),
            T = Ee()(I, 2),
            f = T[0],
            N = T[1]
          return (
            $.a.useEffect(
              function () {
                var e = !!d && Ps(d)
                N(!e || !(!i || b))
              },
              [i, b, d, N],
            ),
            $.a.createElement(
              Ie.a,
              { style: [me.container, r && me.narrowContainer] },
              $.a.createElement(
                Te.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: pe.b,
                  size: 'title4',
                  style: me.header,
                  weight: 'heavy',
                },
                o,
              ),
              $.a.createElement(
                Ie.a,
                { style: me.scrollableContainer },
                n && $.a.createElement(Te.b, { color: 'gray700' }, n),
                $.a.createElement(
                  Ie.a,
                  { accessibilityLabelledBy: pe.b, accessibilityRole: 'group', style: me.contentContainer },
                  $.a.createElement(Gt.a, {
                    Icon: xs.a,
                    invalid: !Ps(d),
                    label: Us,
                    name: '',
                    onChange: function (e) {
                      return u(e.target.value)
                    },
                    style: ks.input,
                    value: d,
                  }),
                ),
                i &&
                  $.a.createElement(
                    Ie.a,
                    { style: [me.contentContainer, me.checkboxContainer, ks.checkboxContainer] },
                    $.a.createElement(
                      Ie.a,
                      { style: me.checkbox },
                      $.a.createElement(Wt.a, {
                        accessibilityLabelledBy: Ds,
                        checked: b,
                        onChange: function () {
                          return m(!b)
                        },
                      }),
                    ),
                    $.a.createElement(
                      Ie.a,
                      { nativeID: Ds, style: me.checkboxText },
                      $.a.createElement(Te.b, { color: 'gray700' }, i),
                    ),
                  ),
              ),
              $.a.createElement(
                fe.a,
                {
                  disabled: f,
                  onClick: function () {
                    return l()
                  },
                  style: me.buttonFixed,
                  type: 'brandFilled',
                },
                a,
              ),
            )
          )
        }),
        Gs = a('7JQg'),
        Ws = (a('hBvt'), a('v6aA')),
        Bs = Z.a.ec6801cb,
        Vs = Z.a.j24c37b2,
        Ys = function (e) {
          var t,
            a = e.daysForDecision,
            i = void 0 === a ? 14 : a,
            n = e.isNarrow,
            r = e.link,
            l = e.onSurveyClick,
            o = e.surveyUrl,
            c = $.a.useContext(Ws.a).featureSwitches.isTrue('identity_verification_notable_demo_survey')
          return $.a.createElement(
            Ie.a,
            { style: me.largeBannerContainer },
            $.a.createElement(He, { isNarrow: n, type: Ye.SENT }),
            $.a.createElement(
              Ie.a,
              { style: [me.container, me.verticalCenter, n && me.narrowContainer] },
              $.a.createElement(
                Te.b,
                {
                  accessibilityLevel: 1,
                  accessibilityRole: 'heading',
                  nativeID: pe.b,
                  size: 'title4',
                  style: me.header,
                  weight: 'heavy',
                },
                Bs,
              ),
              $.a.createElement(
                Te.b,
                { color: 'gray700' },
                ((t = i),
                $.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'a1c39f5b', days: wt.a.getFormattedCount(t) })),
              ),
              c &&
                o &&
                $.a.createElement(
                  Te.b,
                  { color: 'gray700', style: me.text },
                  $.a.createElement(
                    Z.a.I18NFormatMessage,
                    { $i18n: 'ja826537' },
                    $.a.createElement(
                      Te.b,
                      { link: { pathname: o, openInSameFrame: ee.b.isAndroid() && ee.b.isTwitterApp() }, onClick: l },
                      Z.a.i6ef95ec,
                    ),
                  ),
                ),
              $.a.createElement(
                fe.a,
                { link: { pathname: r, openInSameFrame: !0 }, style: me.buttonPadded, type: 'brandFilled' },
                Vs,
              ),
            ),
          )
        },
        Ks = Z.a.b772cd65,
        js = Z.a.j3da4de9,
        Hs = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return $.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'b7be91be', date: t(a) })
        },
        zs = Z.a.j94e995e,
        qs = Z.a.da458d6c,
        $s = Z.a.j4ed9f0e,
        Js = Z.a.b1ade78f,
        Zs = Z.a.b1ade78f,
        Qs = Z.a.j3da4de9,
        Xs = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return $.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'jcb00a94', date: t(a) })
        },
        ed = Z.a.aab67626,
        td = function (e) {
          var t = Z.a.da44942d,
            a = new Date(e)
          return $.a.createElement(Z.a.I18NFormatMessage, { $i18n: 'j92ea4b8', date: t(a) })
        },
        ad = Z.a.d3c1e25e,
        id = $.a.createElement(
          Z.a.I18NFormatMessage,
          { $i18n: 'jcd067dd' },
          $.a.createElement(Te.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-rules' }, Z.a.g0bfb17a),
        ),
        nd = function (e) {
          var t,
            a = e.applicationSubmissionTimeInMs,
            i = e.decisionMadeTimeInMs,
            n = e.isNarrow,
            r = e.link,
            l = e.status,
            o = ((t = {}),
            z()(t, te.a.DISABLED, { title: Eo, content: po, button: uo }),
            z()(t, te.a.INTAKE_PROGRESS, { title: null, content: null, button: null }),
            z()(t, te.a.LOCKED, { title: js, content: i ? Hs(i) : qs, button: uo }),
            z()(t, te.a.NEW_ACCOUNT, { title: js, content: Zs, button: uo }),
            z()(t, te.a.NOT_ELIGIBLE, { title: js, content: Js, button: uo }),
            z()(t, te.a.NOT_STARTED, { title: null, content: null, button: null }),
            z()(t, te.a.VERIFICATION_DENIED, { title: Qs, content: i ? Xs(i) : zs, button: Ks }),
            z()(t, te.a.VERIFICATION_PENDING, { title: ed, content: a ? td(a) : $s, button: Ks }),
            z()(t, te.a.VERIFIED, { title: ad, content: id, button: Ks }),
            t)[l],
            c = o.button,
            s = o.content,
            d = o.title
          return d && s
            ? $.a.createElement(
                Ie.a,
                { style: [me.container, me.verticalCenter, me.appBarOffset, n && me.narrowContainer] },
                $.a.createElement(
                  Te.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    nativeID: pe.b,
                    size: 'title4',
                    style: me.header,
                    weight: 'heavy',
                  },
                  d,
                ),
                $.a.createElement(Te.b, { color: 'gray700' }, s),
                $.a.createElement(
                  fe.a,
                  { link: { pathname: r, openInSameFrame: !0 }, style: me.buttonPadded, type: 'brandFilled' },
                  c,
                ),
              )
            : null
        },
        rd = a('zh9S'),
        ld = a('vEo5'),
        od = { page: 'settings', section: 'account_verification' },
        cd = Object(Ze.a)()
          .propsFromState(function () {
            return {
              access: Qe.m,
              accessFetchStatus: Qe.n,
              accountEligibility: Qe.o,
              accountViolations: Qe.p,
              authenticityType: Qe.t,
              currentStep: Qe.z,
              documentFormats: Qe.A,
              idCountry: Qe.G,
              idType: Qe.I,
              initialIntakeFetchStatus: Qe.K,
              surveyUrl: Qe.O,
              userEmail: ld.selectFirstEmail,
              verifyAccountFetchStatus: Qe.P,
              notabilityCategory: Qe.L,
              notabilityData: Qe.M,
              notabilitySubcategory: Qe.N,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.access,
              a = e.accessFetchStatus,
              i = e.accountEligibility,
              n = e.accountViolations,
              r = e.authenticityType,
              l = e.currentStep,
              o = e.documentFormats,
              c = e.idCountry,
              s = e.idType,
              d = e.initialIntakeFetchStatus,
              u = e.notabilityCategory,
              E = e.notabilityData,
              p = e.notabilitySubcategory,
              b = e.surveyUrl,
              m = e.userEmail,
              I = e.verifyAccountFetchStatus
            return {
              accessFetchStatus: a,
              accessStatus: t.status,
              accountViolations: n,
              applicationSubmissionTimeInMs: t.applicationSubmissionTimeInMs,
              authenticityType: r,
              currentStep: l,
              decisionMadeTimeInMs: t.decisionMadeTimeInMs,
              documentFormats: o,
              followersEligible: i.followers_eligible,
              idCountry: c,
              idType: s,
              initialIntakeFetchStatus: d,
              mentionsEligible: i.mentions_eligible,
              surveyUrl: b,
              userEmail: m,
              verifyAccountFetchStatus: I,
              notabilityCategory: u,
              notabilityData: E,
              notabilitySubcategory: p,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Jt.createLocalApiErrorHandlerWithContextFactory)(
                'ACCOUNT_VERIFICATION',
              ),
              fetchAccessIfNeeded: Qe.b,
              fetchAccountEligibility: Qe.c,
              fetchAccountViolations: Qe.d,
              fetchDevices: ld.fetchDevicesIfNeeded,
              fetchDocumentFormats: Qe.g,
              googleAnalyticsPageView: rd.a,
              resetFlow: Qe.j,
              resetSubmitVerification: Qe.l,
              setFormStepData: Qe.R,
              setIdCountry: Qe.T,
              setIdType: Qe.U,
              setNextFlow: Qe.V,
              setPreviousFlow: Qe.W,
              verifyAccount: Qe.Z,
            }
          })
          .withAnalytics(od),
        sd = 'info',
        dd = 'input',
        ud = 'pivot',
        Ed = 'radio',
        pd = 'screenName',
        bd = a('oQhu'),
        md = a('0zXz'),
        Id = a('cHvH'),
        Td =
          (a('ulNE'),
          a('urw/'),
          a('1IsZ'),
          Object(Ze.a)()
            .propsFromState(function () {
              return {
                authenticityType: Qe.t,
                authenticityData: Qe.s,
                idCountryName: Qe.H,
                idTypeName: Qe.J,
                notabilityCategory: Qe.L,
                notabilitySubcategory: Qe.N,
                notabilityData: Qe.M,
              }
            })
            .propsFromActions(function () {
              return { verifyAccount: Qe.Z }
            })),
        fd = a('3A2y'),
        Nd = Z.a.a91bb144,
        hd = Z.a.affce770,
        _d = Z.a.i0864917,
        yd = Z.a.c7942073,
        vd = Z.a.b8121da9,
        Ad = Z.a.d247ca7f,
        Cd = Z.a.b51afbb2,
        Sd = Z.a.cc87b01c,
        gd = function (e) {
          var t,
            a,
            i,
            n,
            r = e.authenticityType,
            l = e.createLocalApiErrorHandler,
            o = e.handleOnClick,
            c = e.isNarrow,
            s = e.notabilityCategory,
            d = e.notabilityData,
            u = e.notabilitySubcategory,
            E = e.verifyAccount,
            p = function (e) {
              return $.a.createElement(Te.b, { size: 'subtext2', style: me.subheading, weight: 'heavy' }, e)
            }
          return $.a.createElement(
            Ie.a,
            { style: [me.container, c && me.narrowContainer] },
            $.a.createElement(
              Te.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                nativeID: pe.b,
                size: 'title4',
                style: me.header,
                weight: 'heavy',
              },
              Sd,
            ),
            $.a.createElement(
              Ie.a,
              { style: me.scrollableContainer },
              $.a.createElement(Te.b, { color: 'gray700' }, Ad),
              p(_d),
              s && $.a.createElement(Te.b, { style: me.subtext }, _o[s]),
              u &&
                ((n = vo[u]), $.a.createElement(Ie.a, null, p(yd), $.a.createElement(Te.b, { style: me.subtext }, n))),
              d &&
                (function (e) {
                  var t = Object(fd.a)(e, 'newsType'),
                    a = Object.values(t).flat()
                  return $.a.createElement(
                    Ie.a,
                    null,
                    p(vd),
                    a.map(function (e, t) {
                      return $.a.createElement(Te.b, { key: t, style: me.subtext }, e)
                    }),
                  )
                })(d),
              p(Cd),
              r &&
                ((t = r),
                (a = {}),
                z()(a, te.d.IDENTITY_DOCUMENT, Z.a.e43425fa),
                z()(a, te.d.EMAIL, Z.a.a411926a),
                z()(a, te.d.WEBSITE, Z.a.e1c78795),
                (i = a[t]),
                $.a.createElement(Te.b, { style: me.subtext }, i)),
              $.a.createElement(Te.b, { color: 'gray700', style: me.contentContainer }, hd),
            ),
            $.a.createElement(
              fe.a,
              {
                onClick: function () {
                  E().catch(l()), o()
                },
                style: me.buttonFixed,
                type: 'brandFilled',
              },
              Nd,
            ),
          )
        },
        Rd = Td(gd),
        Od = 'INITIAL_FETCH_STATUS_RENDERER',
        Ld = 'SUBMIT_FETCH_STATUS_RENDERER',
        Fd = Z.a.g61ed8a4,
        xd = function (e) {
          return null
        },
        Dd = (function (e) {
          Y()(a, e)
          var t = j()(a)
          function a() {
            var e
            k()(this, a)
            for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(n))),
              z()(
                B()(e),
                '_accountSettingsLink',
                ee.b.isTwitterApp() ? 'twitter://settings/account' : '/settings/account',
              ),
              z()(B()(e), '_hasBadgeViolations', function (e) {
                var t
                return null === (t = e.violations) || void 0 === t
                  ? void 0
                  : t.some(function (e) {
                      return e.violation_status === te.s.OUT_OF_COMPLIANCE
                    })
              }),
              z()(
                B()(e),
                '_isVerificationIntakeEnabled',
                e.context.featureSwitches.isTrue('identity_verification_intake_enabled'),
              ),
              z()(
                B()(e),
                '_shouldStartFlow',
                e.props.accessStatus === te.a.NOT_STARTED || e.props.accessStatus === te.a.INTAKE_PROGRESS,
              ),
              z()(B()(e), '_fetchFormInformationIfNeeded', function () {
                var t = e.props,
                  a = t.fetchAccountEligibility,
                  i = t.fetchAccountViolations,
                  n = t.fetchDevices,
                  r = t.fetchDocumentFormats
                return e._shouldStartFlow ? Promise.all([a(), i(), n(), r()]) : Promise.resolve()
              }),
              z()(B()(e), '_initialFetchRetry', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchAccessIfNeeded)()
                  .then(function () {
                    return e._fetchFormInformationIfNeeded()
                  })
                  .catch(a())
              }),
              z()(
                B()(e),
                '_getMemoizedVerificationScribeNamespace',
                Object(bd.a)(function (e) {
                  return Pt(e)
                }),
              ),
              z()(
                B()(e),
                '_getMemoizedVerificationScribeData',
                Object(bd.a)(function (e) {
                  var t = e.accessStatus,
                    a = e.authenticityType,
                    i = e.currentStep,
                    n = e.followersEligible,
                    r = e.idType,
                    l = e.mentionsEligible,
                    o = e.notabilityCategory,
                    c = e.notabilityData,
                    s = e.notabilitySubcategory
                  return kt(t, a, i, n, r, l, o, c, s)
                }),
              ),
              z()(B()(e), '_scribeAction', function (t, a) {
                var i = e.props,
                  n = i.accessStatus,
                  r = i.analytics,
                  l = i.authenticityType,
                  o = i.currentStep,
                  c = i.followersEligible,
                  s = i.idType,
                  d = i.mentionsEligible,
                  u = i.notabilityCategory,
                  E = i.notabilityData,
                  p = i.notabilitySubcategory
                r.scribe(
                  U()(
                    U()({}, e._getMemoizedVerificationScribeNamespace(o)),
                    {},
                    {
                      action: t,
                      data: e._getMemoizedVerificationScribeData({
                        accessStatus: n,
                        authenticityType: l,
                        currentStep: o,
                        followersEligible: c,
                        idType: s,
                        mentionsEligible: d,
                        notabilityCategory: u,
                        notabilityData: E,
                        notabilitySubcategory: p,
                      }),
                      element: a,
                    },
                  ),
                )
              }),
              z()(B()(e), '_formComponentOptions', function () {
                var t,
                  a = e.props,
                  i = a.accessStatus,
                  n = a.createLocalApiErrorHandler,
                  r = a.currentStep,
                  l = a.decisionMadeTimeInMs,
                  o = a.documentFormats,
                  c = a.idCountry,
                  s = a.initialIntakeFetchStatus,
                  d = a.resetSubmitVerification,
                  u = a.setIdCountry,
                  E = a.setIdType,
                  p = a.setNextFlow,
                  b = a.setPreviousFlow,
                  m = a.surveyUrl,
                  I = a.userEmail,
                  T = a.verifyAccount,
                  f = a.verifyAccountFetchStatus
                return (
                  (t = {}),
                  z()(t, Je.name, {
                    ComponentToRender: Je,
                    componentProps: {
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), p()
                      },
                    },
                    genericModalProps: { renderHeader: xd },
                  }),
                  z()(t, gd.name, {
                    ComponentToRender: Rd,
                    componentProps: {
                      createLocalApiErrorHandler: n,
                      handleOnClick: function () {
                        e._scribeAction('click', 'CTA'), p()
                      },
                    },
                    genericModalProps: { onBackClick: b },
                  }),
                  z()(t, nd.name, {
                    ComponentToRender: nd,
                    componentProps: { decisionMadeTimeInMs: l, link: e._accountSettingsLink, status: i },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  z()(t, ht.name, {
                    ComponentToRender: ht,
                    componentProps: {
                      documentFormats: o,
                      onCountryClick: function (e, t) {
                        u(e, t), b()
                      },
                    },
                    genericModalProps: { onBackClick: b },
                  }),
                  z()(t, _t.name, {
                    ComponentToRender: _t,
                    componentProps: {
                      documentFormats: o,
                      idCountry: c,
                      onTypeClick: function (e, t) {
                        E(e, t), b()
                      },
                    },
                    genericModalProps: { onBackClick: b },
                  }),
                  z()(t, te.h.INTAKE_LOADING, {
                    ComponentToRender: Mo,
                    componentProps: {},
                    genericModalProps: { hideBackButton: !0, renderHeader: xd },
                  }),
                  z()(t, te.h.INTAKE_TYPE_SELECT, {
                    ComponentToRender: It,
                    componentProps: {},
                    genericModalProps: { onBackClick: b },
                  }),
                  z()(t, te.h.INTAKE_UPLOAD, {
                    ComponentToRender: sc,
                    componentProps: {
                      handleOnClick: function () {
                        return e._scribeAction('click', 'CTA')
                      },
                    },
                    genericModalProps: { onBackClick: b },
                  }),
                  z()(t, Ys.name, {
                    ComponentToRender: Ys,
                    componentProps: {
                      link: e._accountSettingsLink,
                      onSurveyClick: function () {
                        return e._scribeAction('click', 'survey_link')
                      },
                      surveyUrl: m,
                    },
                    genericModalProps: { renderHeader: xd },
                  }),
                  z()(t, de.name, {
                    ComponentToRender: de,
                    componentProps: { accountViolations: e.props.accountViolations },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  z()(t, Oe.name, {
                    ComponentToRender: Oe,
                    componentProps: {
                      accountSettingsLink: e._accountSettingsLink,
                      email: I || '',
                      handleOnClickValid: function () {
                        I && e.props.setFormStepData(r, I), e._scribeAction('click', 'CTA'), p()
                      },
                      handleOnClickInvalid: function () {
                        b()
                      },
                    },
                    genericModalProps: { onBackClick: b },
                  }),
                  z()(t, Ld, {
                    ComponentToRender: Fe.a,
                    componentProps: {
                      fetchStatus: f,
                      onRequestRetry: function () {
                        T().catch(n())
                      },
                      render: md.a,
                      retryMessage: Fd,
                    },
                    genericModalProps: { hideBackButton: f === Le.a.LOADING, onBackClick: d },
                  }),
                  z()(t, Od, {
                    ComponentToRender: Fe.a,
                    componentProps: {
                      fetchStatus: s,
                      onRequestRetry: e._initialFetchRetry,
                      render: md.a,
                      retryMessage: Fd,
                    },
                    genericModalProps: { backButtonType: 'close', hideBackButton: ee.b.isTwitterApp() },
                  }),
                  t
                )
              }),
              z()(B()(e), '_wrapInGenericModalScreen', function (t) {
                var a = e._formComponentOptions()[t],
                  i = a.ComponentToRender,
                  n = a.componentProps,
                  r = a.genericModalProps
                return $.a.createElement(
                  xe.b,
                  D()(
                    {
                      backButtonType: 'back',
                      backLocation: e._accountSettingsLink,
                      containerStyle: r.renderHeader ? me.rootNoAppBar : me.root,
                      hideBackButton: !1,
                      history: e.props.history,
                      withBottomBorder: !1,
                    },
                    r,
                  ),
                  $.a.createElement(
                    i,
                    D()({}, n, { isNarrow: e._isNarrow, key: ''.concat(e.props.currentStep, '-screen') }),
                  ),
                )
              }),
              z()(B()(e), '_createFormFromLayout', function (t) {
                var a = e.props,
                  i = a.history,
                  n = a.setPreviousFlow
                if (t && vs[t]) {
                  var r = vs[t],
                    l = 'function' == typeof r ? r(U()({}, e.props)) : r
                  return $.a.createElement(
                    xe.b,
                    { backButtonType: 'back', containerStyle: me.root, hideBackButton: !1, history: i, onBackClick: n },
                    e._renderLayoutComponent(l, t),
                  )
                }
                return $.a.createElement(Ls.a, { to: '/settings/account' })
              }),
              z()(B()(e), '_renderLayoutComponent', function (t, a) {
                var i = { isNarrow: e._isNarrow, key: ''.concat(a, '-screen') }
                switch (t.type) {
                  case sd:
                    return $.a.createElement(gt, D()({}, t.props, { key: ''.concat(a, '-screen') }))
                  case dd:
                    return $.a.createElement($t, D()({}, t.props, i))
                  case ud:
                    return $.a.createElement(rt, D()({}, t.props, i))
                  case Ed:
                    return $.a.createElement(Os, D()({}, t.props, i))
                  case pd:
                    return $.a.createElement(ws, D()({}, t.props, i))
                  default:
                    return null
                }
              }),
              z()(B()(e), '_renderFlowStep', function () {
                var t = e.props,
                  a = t.accountViolations,
                  i = t.currentStep,
                  n = t.initialIntakeFetchStatus,
                  r = t.verifyAccountFetchStatus
                if (n !== Le.a.LOADED) return e._wrapInGenericModalScreen(Od)
                if (r === Le.a.LOADING || r === Le.a.FAILED) return e._wrapInGenericModalScreen(Ld)
                if (e._hasBadgeViolations(a)) return e._wrapInGenericModalScreen(de.name)
                switch (i) {
                  case te.h.LANDING_PAGE:
                    return e._wrapInGenericModalScreen(e._shouldStartFlow ? Je.name : nd.name)
                  case te.h.INTAKE_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_TYPE_SELECT)
                  case te.h.ID_COUNTRY_SELECT:
                    return e._wrapInGenericModalScreen(ht.name)
                  case te.h.ID_TYPE_SELECT:
                    return e._wrapInGenericModalScreen(_t.name)
                  case te.h.INTAKE_UPLOAD:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_UPLOAD)
                  case te.h.INTAKE_LOADING:
                    return e._wrapInGenericModalScreen(te.h.INTAKE_LOADING)
                  case te.h.EMAIL_VERIFICATION:
                    return e._wrapInGenericModalScreen(Oe.name)
                  case te.h.REVIEW_SUBMIT:
                    return e._wrapInGenericModalScreen(gd.name)
                  case te.h.THANK_YOU:
                    return e._wrapInGenericModalScreen(Ys.name)
                  default:
                    return e._createFormFromLayout(i)
                }
              }),
              e
            )
          }
          return (
            G()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandler,
                    i = t.fetchAccessIfNeeded,
                    n = t.googleAnalyticsPageView
                  i()
                    .then(function () {
                      return e._fetchFormInformationIfNeeded()
                    })
                    .then(function () {
                      return e._scribeAction('get_initial')
                    })
                    .catch(a()),
                    n(od)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.accessStatus,
                    i = t.createLocalApiErrorHandler,
                    n = t.currentStep
                  e.accessStatus !== a &&
                    ((this._shouldStartFlow = a === te.a.NOT_STARTED || a === te.a.INTAKE_PROGRESS),
                    this._shouldStartFlow && this._fetchFormInformationIfNeeded().catch(i())),
                    e.currentStep !== n && this._scribeAction('show')
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.resetFlow()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.accessStatus,
                    i = t.authenticityType,
                    n = t.currentStep,
                    r = t.followersEligible,
                    l = t.idType,
                    o = t.mentionsEligible,
                    c = t.notabilityCategory,
                    s = t.notabilityData,
                    d = t.notabilitySubcategory
                  return this._isVerificationIntakeEnabled
                    ? $.a.createElement(Id.a, null, function (t) {
                        var u = t.windowWidth < be.a.theme.breakpoints.small
                        return (
                          u !== e._isNarrow && (e._isNarrow = u),
                          $.a.createElement(
                            Gs.c,
                            {
                              data: e._getMemoizedVerificationScribeData({
                                accessStatus: a,
                                authenticityType: i,
                                currentStep: n,
                                followersEligible: r,
                                idType: l,
                                mentionsEligible: o,
                                notabilityCategory: c,
                                notabilityData: s,
                                notabilitySubcategory: d,
                              }),
                              namespace: e._getMemoizedVerificationScribeNamespace(n),
                            },
                            e._renderFlowStep(),
                          )
                        )
                      })
                    : null
                },
              },
            ]),
            a
          )
        })($.a.Component)
      z()(Dd, 'contextType', Ws.a)
      var Md = cd(Dd)
      t.default = Md
    },
    je27: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('W7+t')),
        l = i(a('pvEE')),
        o = i(a('vLEV')),
        c = (0, n.default)(
          /(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i,
          {
            validateUrlUnicodeSubDomainSegment: r.default,
            validateUrlUnicodeDomainSegment: l.default,
            validateUrlUnicodeDomainTld: o.default,
          },
        )
      ;(t.default = c), (e.exports = t.default)
    },
    kAdf: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('8Y9H')),
        l = (0, n.default)(/(#{validateUrlPchar}|\/|\?)*/i, { validateUrlPchar: r.default })
      ;(t.default = l), (e.exports = t.default)
    },
    kfbJ: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /[a-z\u0400-\u04FF0-9\-._~]/i
      ;(t.default = i), (e.exports = t.default)
    },
    mmgW: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('NRlp')),
        l = (0, n.default)(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i, {
          validateUrlDecOctet: r.default,
        })
      ;(t.default = l), (e.exports = t.default)
    },
    oAj9: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i
      ;(t.default = i), (e.exports = t.default)
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return Y
      })
      a('yiKp')
      var i = a('97Jx'),
        n = a.n(i),
        r = a('m3Bd'),
        l = a.n(r),
        o = a('VrFO'),
        c = a.n(o),
        s = a('Y9Ll'),
        d = a.n(s),
        u = a('1Pcy'),
        E = a.n(u),
        p = a('5Yy7'),
        b = a.n(p),
        m = a('2VqO'),
        I = a.n(m),
        T = a('KEM+'),
        f = a.n(T),
        N = (a('2G9S'), a('ERkP')),
        h = a.n(N),
        _ = a('38/B'),
        y = a('t62R'),
        v = a('/yvb'),
        A = a('piX5'),
        C = a('3XMw'),
        S = a.n(C),
        g = a('tI3i'),
        R = a.n(g),
        O = a('oQhu'),
        L = a('rHpw'),
        F = a('aITJ'),
        x = a('MWbm'),
        D = a('n5fo'),
        M = a('5emT'),
        U = a('Oib4'),
        P = a('WtWS'),
        k = a('ioan'),
        w = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        G = function (e) {
          return e.length
        },
        W = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G
          return t(e)
        },
        B = S.a.de540c32,
        V = S.a.b4abfdb3,
        Y = (function (e) {
          b()(a, e)
          var t = I()(a)
          function a(e) {
            var i
            c()(this, a),
              (i = t.call(this, e)),
              f()(E()(i), '_blurOnBackspaceKeyUpForKaiOS', !1),
              f()(E()(i), '_isLabelLarge', function () {
                var e = i.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              f()(
                E()(i),
                '_getTextInputStyle',
                Object(O.a)(function (e) {
                  return [K.root, !e && K.disabled]
                }),
              ),
              f()(E()(i), '_getTextInputType', function () {
                var e = i.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  n = i.state.isPasswordRevealed
                return 'password' === a && t ? (n ? 'text' : 'password') : a
              }),
              f()(E()(i), '_calculateLength', function (e) {
                return W(e, i.props.calculateLength)
              }),
              f()(E()(i), '_shouldRenderDisplayCount', function () {
                var e = i.state.isFocused,
                  t = i._isFormInvalid()
                return Boolean((e || t) && i._getMaxDisplayCount())
              }),
              f()(E()(i), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  n,
                  r,
                  l = i.props.type,
                  o =
                    null === (e = i._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (a = i._textInput) ||
                    void 0 === a ||
                    null === (n = a.textInputNode) ||
                    void 0 === n ||
                    null === (r = n.validity) ||
                    void 0 === r
                      ? void 0
                      : r.badInput
                return 'number' === l && '' === o && !0 === c
              }),
              f()(E()(i), '_getActualCount', function (e) {
                var t = e.length
                return i._isInvalidNumber() && (t = 1), t
              }),
              f()(E()(i), '_handleBlur', function (e) {
                var t = i.props.onBlur,
                  a = e.currentTarget.value,
                  n = i._calculateLength(a),
                  r = i._getActualCount(a)
                i.setState({ isFocused: !1, displayCount: n, actualCount: r }), t && t(e)
              }),
              f()(E()(i), '_handleChange', function (e) {
                var t = i.props.onChange,
                  a = i.state.previousValue,
                  n = e.currentTarget.value,
                  r = i._calculateLength(n),
                  l = i._getActualCount(n),
                  o = i._getAdjustedMaxLength()
                void 0 !== o && n.length > o && a.length < n.length
                  ? (e.currentTarget.value = a)
                  : (i.setState({
                      isFocused: !0,
                      displayCount: r,
                      actualCount: l,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              f()(E()(i), '_handleFocus', function (e) {
                var t = i.props.onFocus
                i.setState({ isFocused: !0 }), t && t(e)
              }),
              f()(E()(i), '_handleKeyPress', function (e) {
                var t = i.props,
                  a = t.multiline,
                  n = t.onKeyPress,
                  r = t.onSubmitEditing
                n && n(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !r || (e.preventDefault(), r(e))
              }),
              f()(E()(i), '_handleKeyDown', function (e) {
                var t = i.props.onKeyDown,
                  a = 0 === i.state.displayCount
                F.b.isKaiOS() && 'Backspace' === e.key && a ? (i._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              f()(E()(i), '_handleKeyUp', function (e) {
                var t = i.props.onKeyUp
                F.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  i._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), i.blur()),
                  t && t(e)
              }),
              f()(E()(i), '_handlePasswordVisibilityClick', function (e) {
                i.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              f()(E()(i), '_setTextInputRef', function (e) {
                i._textInput = e
              }),
              f()(E()(i), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  i = e.onChange,
                  n = e.validLength,
                  r = !!i,
                  l = 'string' == typeof e.value,
                  o = 'string' == typeof t
                R()(
                  !(!o && l && !r),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  R()(!(a && n && n > a), 'Max length should be equal or greater than valid length.'),
                  R()(
                    !((void 0 !== a && a <= 0) || (void 0 !== n && n <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              f()(E()(i), '_exceedsValidLength', function (e) {
                var t = i._getMaxDisplayCount()
                return !!t && e > t
              }),
              f()(E()(i), '_getMaxDisplayCount', function () {
                return i.props.validLength || i.props.maxLength
              }),
              f()(E()(i), '_getAdjustedMaxLength', function () {
                var e = i.props.maxLength,
                  t = i.getValue(),
                  a = i._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              i._checkComponentPropsUsageCorrectness(e)
            var n = e.defaultValue,
              r = e.value || n || ''
            return (
              (i.state = {
                displayCount: i._calculateLength(r),
                actualCount: G(r),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: r,
              }),
              i
            )
          }
          return (
            d()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      i = t.onChange,
                      n = t.validLength,
                      r = t.value,
                      l = e.maxLength,
                      o = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === n && a === l && !!i === !!o && ('string' == typeof r) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      i = e.errorText,
                      n = e.helperText,
                      r = e.style,
                      l = this.state.isFocused,
                      o = this._isFormInvalid()
                    return h.a.createElement(
                      x.a,
                      { style: [j.root, r] },
                      h.a.createElement(
                        x.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            A.a.border,
                            j.textInputFormStyle,
                            o && A.a.invalidBorderColor,
                            l && o && A.a.focusedBorderInvalid,
                            l && !o && A.a.focusedBorderValid,
                            !a && A.a.disabled,
                          ],
                        },
                        h.a.createElement(
                          x.a,
                          { style: j.textInputFormWrapper },
                          h.a.createElement(
                            x.a,
                            { style: j.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      h.a.createElement(
                        x.a,
                        { style: [j.sidePadding, j.underTextInputForm] },
                        h.a.createElement(
                          x.a,
                          { style: j.subtextWrapper },
                          n ? this._renderHelperText() : null,
                          o && i ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      a = this._isFormInvalid() ? 'red500' : t,
                      i = this._isLabelLarge()
                    return h.a.createElement(
                      y.b,
                      {
                        color: i ? 'gray700' : a,
                        numberOfLines: 1,
                        size: i ? 'headline1' : 'subtext2',
                        style: [
                          j.textInputHeaderItem,
                          i && j.placeholderText,
                          !_.a.reducedMotionEnabled && j.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      i =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      r = (e.style, e.type, e.validLength, l()(e, w))
                    return h.a.createElement(
                      x.a,
                      { style: K.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      h.a.createElement(
                        y.b,
                        { size: 'headline1', style: K.wrapper },
                        h.a.createElement(
                          k.a,
                          n()({}, r, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      i && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      i = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? h.a.createElement(
                          x.a,
                          { style: j.passwordVisibilityIconContainer },
                          h.a.createElement(v.a, {
                            accessibilityLabel: i ? V : B,
                            focusable: !0,
                            hoverLabel: { label: i ? V : B },
                            icon: i ? h.a.createElement(D.a, null) : h.a.createElement(M.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return h.a.createElement(
                      x.a,
                      { accessibilityLiveRegion: 'polite' },
                      h.a.createElement(
                        y.b,
                        { color: 'gray700', size: 'subtext2', style: j.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return h.a.createElement(
                      x.a,
                      { accessibilityLiveRegion: 'assertive' },
                      h.a.createElement(
                        y.b,
                        { color: 'red500', size: 'subtext2', style: j.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      a = this._exceedsValidLength(e),
                      i = t && S.a.ia24dc8c(t),
                      n = S.a.ia24dc8c(e)
                    return h.a.createElement(
                      x.a,
                      { accessibilityLiveRegion: 'polite', style: [j.textInputHeaderItem, j.displayCount] },
                      h.a.createElement(
                        y.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        i ? ''.concat(n, ' / ').concat(i) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [j.icon, t && j.focusedIcon]
                    return e && h.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? h.a.createElement(U.a, { style: [j.validationIcon, A.a.invalidColor] })
                      : h.a.createElement(P.a, { style: [j.validationIcon, A.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var a = e.calculateLength,
                      i = e.value,
                      n = 'string' == typeof i ? W(i, a) : 0
                    return 'string' == typeof i && n !== t.displayCount
                      ? { displayCount: n, actualCount: i.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(h.a.Component)
      f()(Y, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (Y.propTypes = {})
      var K = L.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        j = L.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var i = a('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = i
    },
    pvEE: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = i), (e.exports = t.default)
    },
    ta7H: function (e, t, a) {
      'use strict'
      var i = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = i(a('AYyr')),
        r = i(a('fl4i')),
        l = i(a('Wqil')),
        o = i(a('Umjq')),
        c = (0, n.default)(
          '(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?',
          { validateUrlUserinfo: r.default, validateUrlHost: l.default, validateUrlPort: o.default },
          'i',
        )
      ;(t.default = c), (e.exports = t.default)
    },
    ulNE: function (e, t, a) {
      'use strict'
      var i = a('ax0f'),
        n = a('42ly'),
        r = a('N9G2'),
        l = a('BIH/'),
        o = a('lhaq'),
        c = a('aoZ+')
      i(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              a = l(t),
              i = c(t, 0)
            return (i.length = n(i, t, t, a, 0, void 0 === e ? 1 : o(e))), i
          },
        },
      )
    },
    'urw/': function (e, t, a) {
      a('7St7')('flat')
    },
    vLEV: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i
      ;(t.default = i), (e.exports = t.default)
    },
    vXsr: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i
      ;(t.default = i), (e.exports = t.default)
    },
  },
])
//# sourceMappingURL=WIPED
