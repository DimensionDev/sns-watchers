;(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    2927: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NotMyAccountScreen', function () {
          return J
        })
      a('OZaJ')
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        s = a('1Pcy'),
        i = a.n(s),
        l = a('5Yy7'),
        u = a.n(l),
        m = a('N+ot'),
        d = a.n(m),
        f = a('AuHH'),
        h = a.n(f),
        p = a('KEM+'),
        E = a.n(p),
        A = (a('WNMA'), a('KqXw'), a('7x/C'), a('DZ+c'), a('ERkP')),
        b = a.n(A),
        N = a('k49u'),
        v = a('rxPX'),
        _ = a('0KEI'),
        y = a('oEOe'),
        g = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(y.d)(t, { params: e, request: r.Account.disassociateAccount })('DISASSOCIATE_ACCOUNT')
          }
        },
        M = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(y.d)(t, { params: e, request: r.Account.getMaskedData })('GET_MASKED_DATA')
          }
        },
        w = Object(v.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
              'NOT_MY_ACCOUNT_CONTEXT',
            ),
            disassociateAccount: g,
            getMaskedData: M,
          }
        }),
        H = a('jHSc'),
        O = a('0zXz'),
        S = a('MWbm'),
        T = a('t62R'),
        k = a('rHpw'),
        C = a('cmUU'),
        F = a('3XMw'),
        I = a.n(F)
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
          var a,
            n = h()(e)
          if (t) {
            var r = h()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var D = b.a.createElement(T.b, { color: 'gray700', weight: 'bold' }),
        x = I.a.f7865ab5,
        L = I.a.a35248e3,
        R = I.a.f794a67b,
        q = I.a.j79c0ff7,
        P = I.a.j24c37b2,
        X = b.a.createElement(I.a.I18NFormatMessage, { $i18n: 'a1c4702f' }, b.a.cloneElement(D, null, I.a.c97a594b)),
        $ = b.a.createElement(
          I.a.I18NFormatMessage,
          { $i18n: 'g9aa2a63' },
          b.a.createElement(
            T.b,
            {
              link: 'https://help.twitter.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account',
            },
            I.a.ee54f475,
          ),
        ),
        B = b.a.createElement(
          b.a.Fragment,
          null,
          b.a.createElement(S.a, { style: { paddingBottom: k.a.theme.spaces.space4 } }, X),
          $,
        ),
        K = I.a.fb46383b,
        U = I.a.a6b9e23b,
        J = (function (e) {
          u()(a, e)
          var t = j(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              E()(i()(n), '_renderHeader', O.a),
              E()(i()(n), '_handleErrors', function (e) {
                var t,
                  a = n.props.createLocalApiErrorHandler,
                  r = n.state.screenName
                a(
                  ((t = {}),
                  E()(t, N.a.ClientNotPermitted, { toast: { text: K } }),
                  E()(t, N.a.InvalidEmailAddress, { toast: { text: U({ screenName: r }) } }),
                  E()(t, 'showToast', !0),
                  t),
                )(e),
                  n._redirectToHome()
              }),
              E()(i()(n), '_handleSubmit', function () {
                var e = n.props.disassociateAccount,
                  t = n.state.screenName
                t &&
                  n._secret &&
                  e({ screenName: t, secret: n._secret })
                    .then(function () {
                      n.setState({ success: !0 })
                    })
                    .catch(n._handleErrors)
              }),
              E()(i()(n), '_redirectToHome', function () {
                n.props.history.push('/')
              }),
              (n._secret = e.match.params.emailLinkSecret),
              (n.state = { emailAddress: '', screenName: '', success: !1 }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.getMaskedData,
                    n = t.location,
                    r = t.match.params.screenName,
                    c = n.query.ut && n.query.ut.toString()
                  this._secret &&
                    r &&
                    a({ secret: this._secret, user: r, ut: c })
                      .then(function (t) {
                        e.setState({
                          emailAddress: null == t ? void 0 : t.emailAddress,
                          screenName: null == t ? void 0 : t.screenName,
                          success: !(null == t || !t.detached),
                        })
                      })
                      .catch(this._handleErrors)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.emailAddress,
                    a = e.screenName,
                    n = e.success
                  if (!t || !a) return null
                  var r = n ? q({ emailAddress: t }) : x,
                    c = n
                      ? (function (e, t) {
                          return b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'hf714442' },
                            b.a.cloneElement(D, null, I.a.da9fdc87({ emailAddress: t })),
                            b.a.cloneElement(D, null, I.a.e851165f({ screenName: e })),
                          )
                        })(a, t)
                      : (function (e, t) {
                          return b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'j1958650' },
                            b.a.cloneElement(D, null, I.a.a2b8656b({ screenName: e })),
                            b.a.cloneElement(D, null, I.a.gef8c0a9({ emailAddress: t })),
                          )
                        })(a, t),
                    o = n ? P : L,
                    s = n ? void 0 : R,
                    i = n ? this._redirectToHome : this._handleSubmit,
                    l = n ? void 0 : this._redirectToHome,
                    u = n
                      ? B
                      : (function (e) {
                          return b.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'c1567ae1' },
                            b.a.cloneElement(D, null, I.a.f3604c48({ screenName: e })),
                            b.a.createElement(
                              T.b,
                              { link: 'https://twitter.com/settings/email_notifications' },
                              I.a.d7572079,
                            ),
                          )
                        })(a)
                  return b.a.createElement(
                    H.b,
                    { renderHeader: this._renderHeader },
                    b.a.createElement(C.a, {
                      actionLabel: o,
                      footer: u,
                      headline: r,
                      onAction: i,
                      onClose: i,
                      onSecondaryAction: l,
                      secondaryActionLabel: s,
                      subtext: c,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        W = w(J)
      t.default = W
    },
  },
])
//# sourceMappingURL=WIPED
