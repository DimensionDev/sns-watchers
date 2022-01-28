;(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    2927: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NotMyAccountScreen', function () {
          return X
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
        O = a('MWbm'),
        S = a('t62R'),
        T = a('rHpw'),
        k = a('cmUU'),
        C = a('3XMw'),
        F = a.n(C)
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
          var a,
            n = h()(e)
          if (t) {
            var r = h()(this).constructor
            a = Reflect.construct(n, arguments, r)
          } else a = n.apply(this, arguments)
          return d()(this, a)
        }
      }
      var j = b.a.createElement(S.b, { color: 'gray700', weight: 'bold' }),
        D = F.a.f7865ab5,
        x = F.a.a35248e3,
        L = F.a.f794a67b,
        R = F.a.j79c0ff7,
        q = F.a.j24c37b2,
        P = b.a.createElement(F.a.I18NFormatMessage, { $i18n: 'a1c4702f' }, b.a.cloneElement(j, null, F.a.c97a594b)),
        $ = b.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'g9aa2a63' },
          b.a.createElement(
            S.b,
            {
              link: 'https://help.twitter.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account',
            },
            F.a.ee54f475,
          ),
        ),
        B = b.a.createElement(
          b.a.Fragment,
          null,
          b.a.createElement(O.a, { style: { paddingBottom: T.a.theme.spaces.space4 } }, P),
          $,
        ),
        K = F.a.fb46383b,
        U = F.a.a6b9e23b,
        X = (function (e) {
          u()(a, e)
          var t = I(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              E()(i()(n), '_renderHeader', function () {
                return null
              }),
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
                  var r = n ? R({ emailAddress: t }) : D,
                    c = n
                      ? (function (e, t) {
                          return b.a.createElement(
                            F.a.I18NFormatMessage,
                            { $i18n: 'hf714442' },
                            b.a.cloneElement(j, null, F.a.da9fdc87({ emailAddress: t })),
                            b.a.cloneElement(j, null, F.a.e851165f({ screenName: e })),
                          )
                        })(a, t)
                      : (function (e, t) {
                          return b.a.createElement(
                            F.a.I18NFormatMessage,
                            { $i18n: 'j1958650' },
                            b.a.cloneElement(j, null, F.a.a2b8656b({ screenName: e })),
                            b.a.cloneElement(j, null, F.a.gef8c0a9({ emailAddress: t })),
                          )
                        })(a, t),
                    o = n ? q : x,
                    s = n ? void 0 : L,
                    i = n ? this._redirectToHome : this._handleSubmit,
                    l = n ? void 0 : this._redirectToHome,
                    u = n
                      ? B
                      : (function (e) {
                          return b.a.createElement(
                            F.a.I18NFormatMessage,
                            { $i18n: 'c1567ae1' },
                            b.a.cloneElement(j, null, F.a.f3604c48({ screenName: e })),
                            b.a.createElement(
                              S.b,
                              { link: 'https://twitter.com/settings/email_notifications' },
                              F.a.d7572079,
                            ),
                          )
                        })(a)
                  return b.a.createElement(
                    H.b,
                    { renderHeader: this._renderHeader },
                    b.a.createElement(k.a, {
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
        J = w(X)
      t.default = J
    },
  },
])
//# sourceMappingURL=WIPED
