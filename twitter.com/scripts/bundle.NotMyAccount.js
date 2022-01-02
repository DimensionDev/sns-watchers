;(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    2927: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotMyAccountScreen', function () {
          return U
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        c = n('Y9Ll'),
        o = n.n(c),
        s = n('1Pcy'),
        i = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        m = n('N+ot'),
        d = n.n(m),
        f = n('AuHH'),
        h = n.n(f),
        p = n('KEM+'),
        E = n.n(p),
        A = (n('WNMA'), n('KqXw'), n('7x/C'), n('DZ+c'), n('ERkP')),
        b = n('k49u'),
        N = n('rxPX'),
        v = n('0KEI'),
        _ = n('oEOe'),
        y = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(_.d)(t, { params: e, request: r.Account.disassociateAccount })('DISASSOCIATE_ACCOUNT')
          }
        },
        g = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(_.d)(t, { params: e, request: r.Account.getMaskedData })('GET_MASKED_DATA')
          }
        },
        M = Object(N.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
              'NOT_MY_ACCOUNT_CONTEXT',
            ),
            disassociateAccount: y,
            getMaskedData: g,
          }
        }),
        w = n('jHSc'),
        H = n('MWbm'),
        O = n('t62R'),
        S = n('rHpw'),
        T = n('cmUU'),
        k = n('3XMw'),
        C = n.n(k)
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var I = A.createElement(O.b, { color: 'gray700', weight: 'bold' }),
        j = C.a.f7865ab5,
        D = C.a.a35248e3,
        x = C.a.f794a67b,
        L = C.a.j79c0ff7,
        R = C.a.j24c37b2,
        q = A.createElement(C.a.I18NFormatMessage, { $i18n: 'a1c4702f' }, A.cloneElement(I, null, C.a.c97a594b)),
        P = A.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'g9aa2a63' },
          A.createElement(
            O.b,
            {
              link: 'https://help.twitter.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account',
            },
            C.a.ee54f475,
          ),
        ),
        $ = A.createElement(
          A.Fragment,
          null,
          A.createElement(H.a, { style: { paddingBottom: S.a.theme.spaces.space4 } }, q),
          P,
        ),
        B = C.a.fb46383b,
        K = C.a.a6b9e23b,
        U = (function (e) {
          u()(n, e)
          var t = F(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              E()(i()(a), '_renderHeader', function () {
                return null
              }),
              E()(i()(a), '_handleErrors', function (e) {
                var t,
                  n = a.props.createLocalApiErrorHandler,
                  r = a.state.screenName
                n(
                  ((t = {}),
                  E()(t, b.a.ClientNotPermitted, { toast: { text: B } }),
                  E()(t, b.a.InvalidEmailAddress, { toast: { text: K({ screenName: r }) } }),
                  E()(t, 'showToast', !0),
                  t),
                )(e),
                  a._redirectToHome()
              }),
              E()(i()(a), '_handleSubmit', function () {
                var e = a.props.disassociateAccount,
                  t = a.state.screenName
                t &&
                  a._secret &&
                  e({ screenName: t, secret: a._secret })
                    .then(function () {
                      a.setState({ success: !0 })
                    })
                    .catch(a._handleErrors)
              }),
              E()(i()(a), '_redirectToHome', function () {
                a.props.history.push('/')
              }),
              (a._secret = e.match.params.emailLinkSecret),
              (a.state = { emailAddress: '', screenName: '', success: !1 }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.getMaskedData,
                    a = t.location,
                    r = t.match.params.screenName,
                    c = a.query.ut && a.query.ut.toString()
                  this._secret &&
                    r &&
                    n({ secret: this._secret, user: r, ut: c })
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
                    n = e.screenName,
                    a = e.success
                  if (!t || !n) return null
                  var r = a ? L({ emailAddress: t }) : j,
                    c = a
                      ? (function (e, t) {
                          return A.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'hf714442' },
                            A.cloneElement(I, null, C.a.da9fdc87({ emailAddress: t })),
                            A.cloneElement(I, null, C.a.e851165f({ screenName: e })),
                          )
                        })(n, t)
                      : (function (e, t) {
                          return A.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'j1958650' },
                            A.cloneElement(I, null, C.a.a2b8656b({ screenName: e })),
                            A.cloneElement(I, null, C.a.gef8c0a9({ emailAddress: t })),
                          )
                        })(n, t),
                    o = a ? R : D,
                    s = a ? void 0 : x,
                    i = a ? this._redirectToHome : this._handleSubmit,
                    l = a ? void 0 : this._redirectToHome,
                    u = a
                      ? $
                      : (function (e) {
                          return A.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'c1567ae1' },
                            A.cloneElement(I, null, C.a.f3604c48({ screenName: e })),
                            A.createElement(
                              O.b,
                              { link: 'https://twitter.com/settings/email_notifications' },
                              C.a.d7572079,
                            ),
                          )
                        })(n)
                  return A.createElement(
                    w.b,
                    { renderHeader: this._renderHeader },
                    A.createElement(T.a, {
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
            n
          )
        })(A.Component),
        X = M(U)
      t.default = X
    },
  },
])
//# sourceMappingURL=WIPED
